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

        if (!Array.isArray(question.options) || question.options.length === 0) {
          errors.push(`${qWhere}: has no options`);
        } else if (
          !Number.isInteger(question.correctIndex) ||
          question.correctIndex < 0 ||
          question.correctIndex >= question.options.length
        ) {
          errors.push(`${qWhere}: correctIndex ${question.correctIndex} is out of range for ${question.options.length} options`);
        }
      });
    });
  });

  if (errors.length > 0) {
    console.error(`Content validation failed with ${errors.length} error(s):\n`);
    errors.forEach((e) => console.error(" - " + e));
    process.exit(1);
  }

  const topicCount = subjects.reduce((sum, s) => sum + s.topics.length, 0);
  console.log(`Content OK: ${subjects.length} subjects, ${topicCount} topics.`);
}

main();
