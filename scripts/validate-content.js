#!/usr/bin/env node
// Structural validation for js/data/*.js content, without a browser.
// Loads every data file the same way index.html does (classic scripts sharing
// one top-level scope) via Node's vm module, then checks invariants that are
// easy to break silently while adding chapters/topics/quizzes by hand:
//   - every topic id is unique within its subject
//   - every topic's `chapter` field points at a real chapter id in that subject
//   - every quiz question's correctIndex is a valid index into its options
//   - every exercise/quiz id is unique within its topic
// Run: node scripts/validate-content.js

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const dataDir = path.join(root, "js", "data");

function loadSubjects() {
  const files = fs
    .readdirSync(dataDir)
    .filter((f) => f.endsWith(".js") && f !== "index.js")
    .sort((a, b) => a.localeCompare(b, "en"))
    .concat(["index.js"]);

  const context = {};
  vm.createContext(context);
  for (const file of files) {
    const code = fs.readFileSync(path.join(dataDir, file), "utf8");
    vm.runInContext(code, context, { filename: file });
  }
  // Top-level `const` bindings live in the script's lexical scope, not as
  // properties on the context object (same as separate <script> tags in a
  // browser) - pull SUBJECTS out explicitly.
  vm.runInContext("this.__SUBJECTS__ = SUBJECTS;", context);
  return context.__SUBJECTS__;
}

// Both option lists (multiple-choice) and reason lists (yesno) are shown in
// random order at runtime (see js/render.js shuffledIndices), but if the
// correct entry is consistently the longest piece of text, attentive users
// can guess it without reading - track this globally rather than
// per-question since occasional length ties are unavoidable when writing
// plausible distractors by hand.
//
// Lesson from generating this app's content in bulk (309 yesno questions
// added via 13 parallel content-writing agents): telling an agent once, in
// prose, "keep option lengths similar" is not enough - it reliably still
// writes the correct answer as the most detailed/longest one, because a
// factually complete justification just tends to run longer than a vague
// wrong one. Only ~11% came out unbiased despite the explicit instruction.
// If you have LLM agents generate quiz-style content with a "correct
// answer" at a specific index in an array of options, either (a) have them
// verify their own output against a script like trackLengthBias() below
// and iterate before finishing, or (b) plan a dedicated post-generation
// balancing pass instead of relying on the instruction alone.
function trackLengthBias(items, correctIndex, counters) {
  const lengths = items.map((o) => String(o).length);
  const maxLength = Math.max(...lengths);
  const longestIndices = lengths.reduce((acc, l, i) => (l === maxLength ? acc.concat(i) : acc), []);
  if (new Set(lengths).size > 1) {
    counters.varying++;
    if (longestIndices.length === 1 && longestIndices[0] === correctIndex) {
      counters.longestCorrect++;
    }
  }
}

function main() {
  const subjects = loadSubjects();
  const errors = [];
  const warnings = [];

  const optionBias = { varying: 0, longestCorrect: 0 };
  const reasonBias = { varying: 0, longestCorrect: 0 };

  if (!Array.isArray(subjects)) {
    console.error("SUBJECTS was not found or is not an array after loading js/data/*.js");
    process.exit(1);
  }

  subjects.forEach((subject) => {
    const chapterIds = new Set(subject.chapters.map((c) => c.id));
    const seenTopicIds = new Set();

    subject.topics.forEach((topic) => {
      const where = `subject "${subject.id}", topic "${topic.id}"`;

      if (seenTopicIds.has(topic.id)) {
        errors.push(`Duplicate topic id in ${where}`);
      }
      seenTopicIds.add(topic.id);

      if (!chapterIds.has(topic.chapter)) {
        errors.push(`${where}: chapter ${topic.chapter} does not exist in subject.chapters`);
      }

      const seenExerciseIds = new Set();
      (topic.exercises || []).forEach((exercise) => {
        if (seenExerciseIds.has(exercise.id)) {
          errors.push(`${where}: duplicate exercise id "${exercise.id}"`);
        }
        seenExerciseIds.add(exercise.id);
      });

      const seenQuestionIds = new Set();
      (topic.quiz || []).forEach((question) => {
        const qWhere = `${where}, question "${question.id}"`;

        if (seenQuestionIds.has(question.id)) {
          errors.push(`${qWhere}: duplicate question id`);
        }
        seenQuestionIds.add(question.id);

        if (question.type === "yesno") {
          if (typeof question.correctAnswer !== "boolean") {
            errors.push(`${qWhere}: yesno question needs a boolean "correctAnswer"`);
          }
          if (!Array.isArray(question.reasons) || question.reasons.length < 2) {
            errors.push(`${qWhere}: yesno question needs at least 2 "reasons" (the reason multiple-choice step)`);
          } else if (
            !Number.isInteger(question.correctReasonIndex) ||
            question.correctReasonIndex < 0 ||
            question.correctReasonIndex >= question.reasons.length
          ) {
            errors.push(`${qWhere}: correctReasonIndex ${question.correctReasonIndex} is out of range for ${question.reasons.length} reasons`);
          }
          if (!question.explanation) {
            errors.push(`${qWhere}: yesno question needs an "explanation" (shown after the reason is answered)`);
          }
          if (Array.isArray(question.reasons) && Number.isInteger(question.correctReasonIndex)) {
            trackLengthBias(question.reasons, question.correctReasonIndex, reasonBias);
          }
        } else if (!Array.isArray(question.options) || question.options.length === 0) {
          errors.push(`${qWhere}: has no options`);
        } else if (
          !Number.isInteger(question.correctIndex) ||
          question.correctIndex < 0 ||
          question.correctIndex >= question.options.length
        ) {
          errors.push(`${qWhere}: correctIndex ${question.correctIndex} is out of range for ${question.options.length} options`);
        } else {
          trackLengthBias(question.options, question.correctIndex, optionBias);
        }
      });
    });
  });

  // ~25% is the baseline for 4-option lists if length carried no signal;
  // flag decks that drift well above that.
  if (optionBias.varying > 0) {
    const biasPercent = (100 * optionBias.longestCorrect) / optionBias.varying;
    if (biasPercent > 32) {
      warnings.push(
        `${optionBias.longestCorrect} of ${optionBias.varying} multiple-choice questions with varying option lengths ` +
        `(${biasPercent.toFixed(1)}%) have the correct answer as the uniquely longest option - consider shortening ` +
        `correct answers or lengthening distractors so option length doesn't give the answer away.`
      );
    }
  }
  if (reasonBias.varying > 0) {
    const biasPercent = (100 * reasonBias.longestCorrect) / reasonBias.varying;
    if (biasPercent > 32) {
      warnings.push(
        `${reasonBias.longestCorrect} of ${reasonBias.varying} yesno questions with varying reason lengths ` +
        `(${biasPercent.toFixed(1)}%) have the correct reason as the uniquely longest text - consider shortening ` +
        `correct reasons or lengthening distractor reasons so length doesn't give the answer away.`
      );
    }
  }

  if (errors.length > 0) {
    console.error(`Content validation failed with ${errors.length} error(s):\n`);
    errors.forEach((e) => console.error(" - " + e));
    process.exit(1);
  }

  if (warnings.length > 0) {
    console.warn(`Content validation passed with ${warnings.length} warning(s):\n`);
    warnings.forEach((w) => console.warn(" - " + w));
  }

  const topicCount = subjects.reduce((sum, s) => sum + s.topics.length, 0);
  console.log(`Content OK: ${subjects.length} subjects, ${topicCount} topics.`);
}

main();
