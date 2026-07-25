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

function main() {
  const subjects = loadSubjects();
  const errors = [];
  const warnings = [];

  // Answer options are shown in random order at runtime (see js/render.js
  // shuffledIndices), but if the correct answer is consistently the longest
  // option, attentive users can guess it without reading the question. Track
  // this globally rather than per-question since occasional length ties are
  // unavoidable when writing plausible distractors by hand.
  let questionsWithVaryingLengths = 0;
  let longestIsUniquelyCorrect = 0;

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
          if (!question.explanation) {
            errors.push(`${qWhere}: yesno question needs an "explanation" (shown after the user justifies their answer)`);
          }
          // options/correctIndex are synthesized at render time (see
          // quizOptions/quizCorrectIndex in js/render.js) - "Ja"/"Nein" have
          // no meaningful length bias, so this type is excluded from that check.
        } else if (!Array.isArray(question.options) || question.options.length === 0) {
          errors.push(`${qWhere}: has no options`);
        } else if (
          !Number.isInteger(question.correctIndex) ||
          question.correctIndex < 0 ||
          question.correctIndex >= question.options.length
        ) {
          errors.push(`${qWhere}: correctIndex ${question.correctIndex} is out of range for ${question.options.length} options`);
        } else {
          const lengths = question.options.map((o) => String(o).length);
          const maxLength = Math.max(...lengths);
          const longestIndices = lengths.reduce((acc, l, i) => (l === maxLength ? acc.concat(i) : acc), []);
          if (new Set(lengths).size > 1) {
            questionsWithVaryingLengths++;
            if (longestIndices.length === 1 && longestIndices[0] === question.correctIndex) {
              longestIsUniquelyCorrect++;
            }
          }
        }
      });
    });
  });

  if (questionsWithVaryingLengths > 0) {
    const biasPercent = (100 * longestIsUniquelyCorrect) / questionsWithVaryingLengths;
    // ~25% is the baseline for 4-option questions if option length carried no
    // signal; flag decks that drift well above that.
    if (biasPercent > 32) {
      warnings.push(
        `${longestIsUniquelyCorrect} of ${questionsWithVaryingLengths} questions with varying option lengths ` +
        `(${biasPercent.toFixed(1)}%) have the correct answer as the uniquely longest option - consider shortening ` +
        `correct answers or lengthening distractors so option length doesn't give the answer away.`
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
