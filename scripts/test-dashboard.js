#!/usr/bin/env node
// Unit tests for the pure aggregation logic in js/dashboard.js, without a
// browser. Loads js/dashboard.js the same way index.html does (a classic
// script) via Node's vm module - same pattern as validate-content.js - then
// exercises computeDashboardStats() against synthetic subjects/progress
// fixtures. No test framework: plain assert, exit 1 on failure.
// Run: node scripts/test-dashboard.js

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert");

const root = path.join(__dirname, "..");

function loadDashboardModule() {
  const context = {};
  vm.createContext(context);
  const code = fs.readFileSync(path.join(root, "js", "dashboard.js"), "utf8");
  vm.runInContext(code, context, { filename: "dashboard.js" });
  vm.runInContext("this.__computeDashboardStats__ = computeDashboardStats;", context);
  return context.__computeDashboardStats__;
}

function makeSubject(id, title, topicDefs) {
  return {
    id: id,
    title: title,
    icon: "📘",
    accent: "#5b8def",
    topics: topicDefs.map(function (t, i) {
      return {
        id: t.id,
        title: t.title || t.id,
        chapter: 1,
        order: i,
        quiz: t.hasQuiz === false ? [] : [{ id: "q1" }]
      };
    })
  };
}

function run(name, fn) {
  try {
    fn();
    console.log("  ok - " + name);
  } catch (e) {
    console.error("  FAIL - " + name);
    console.error("    " + e.message);
    process.exitCode = 1;
  }
}

function main() {
  const computeDashboardStats = loadDashboardModule();

  console.log("computeDashboardStats:");

  run("leerer Fortschritt: alles 0, keine Aktivität, kein staerkstes/schwaechstes Fach", function () {
    const subjects = [
      makeSubject("a", "Fach A", [{ id: "t1" }, { id: "t2" }]),
      makeSubject("b", "Fach B", [{ id: "t1" }])
    ];
    const progress = { subjects: {} };
    const stats = computeDashboardStats(subjects, progress);

    assert.strictEqual(stats.overall.totalTopics, 3);
    assert.strictEqual(stats.overall.viewedTopics, 0);
    assert.strictEqual(stats.overall.viewedPercent, 0);
    assert.strictEqual(stats.overall.subjectsStarted, 0);
    assert.strictEqual(stats.overall.subjectsTotal, 2);
    assert.strictEqual(stats.overall.totalQuizAttempts, 0);
    assert.strictEqual(stats.overall.perfectTopics, 0);
    assert.strictEqual(stats.overall.averageQuizScorePercent, null);
    assert.strictEqual(stats.overall.lastActivity, null);
    assert.strictEqual(stats.overall.strongestSubject, null);
    assert.strictEqual(stats.overall.weakestSubject, null);
    assert.strictEqual(stats.subjects.length, 2);
    stats.subjects.forEach(function (s) {
      assert.strictEqual(s.viewedPercent, 0);
      assert.strictEqual(s.averageQuizScorePercent, null);
    });
  });

  run("Fach ohne Themen crasht nicht (Division durch 0)", function () {
    const subjects = [makeSubject("empty", "Leeres Fach", [])];
    const progress = { subjects: {} };
    const stats = computeDashboardStats(subjects, progress);
    assert.strictEqual(stats.overall.totalTopics, 0);
    assert.strictEqual(stats.overall.viewedPercent, 0);
    assert.strictEqual(stats.subjects[0].viewedPercent, 0);
  });

  run("teilweiser Fortschritt: Prozent und Zaehler korrekt", function () {
    const subjects = [
      makeSubject("a", "Fach A", [{ id: "t1" }, { id: "t2" }, { id: "t3" }, { id: "t4" }])
    ];
    const progress = {
      subjects: {
        a: {
          viewedTopics: { t1: "2026-01-01T10:00:00.000Z", t2: "2026-01-02T10:00:00.000Z" },
          quizResults: {}
        }
      }
    };
    const stats = computeDashboardStats(subjects, progress);
    assert.strictEqual(stats.subjects[0].viewedTopics, 2);
    assert.strictEqual(stats.subjects[0].totalTopics, 4);
    assert.strictEqual(stats.subjects[0].viewedPercent, 50);
    assert.strictEqual(stats.overall.viewedPercent, 50);
    assert.strictEqual(stats.overall.subjectsStarted, 1);
  });

  run("perfekte Themen und Quiz-Versuche werden gezaehlt", function () {
    const subjects = [makeSubject("a", "Fach A", [{ id: "t1" }, { id: "t2" }])];
    const progress = {
      subjects: {
        a: {
          viewedTopics: {},
          quizResults: {
            t1: { lastScore: 3, lastTotal: 3, bestScore: 3, bestTotal: 3, attempts: 2, lastAttemptAt: "2026-01-01T10:00:00.000Z" },
            t2: { lastScore: 1, lastTotal: 3, bestScore: 2, bestTotal: 3, attempts: 3, lastAttemptAt: "2026-01-02T10:00:00.000Z" }
          }
        }
      }
    };
    const stats = computeDashboardStats(subjects, progress);
    assert.strictEqual(stats.overall.totalQuizAttempts, 5);
    assert.strictEqual(stats.overall.perfectTopics, 1);
    assert.strictEqual(stats.subjects[0].perfectTopics, 1);
    // average best score percent across attempted topics: (100 + 66.67)/2 ~= 83.33 -> rounded
    assert.strictEqual(stats.subjects[0].averageQuizScorePercent, 83);
  });

  run("lastActivity waehlt den neuesten Zeitstempel ueber alle Faecher/Typen", function () {
    const subjects = [
      makeSubject("a", "Fach A", [{ id: "t1", title: "Thema Eins" }]),
      makeSubject("b", "Fach B", [{ id: "t1", title: "Thema Zwei" }])
    ];
    const progress = {
      subjects: {
        a: { viewedTopics: { t1: "2026-01-01T10:00:00.000Z" }, quizResults: {} },
        b: {
          viewedTopics: {},
          quizResults: { t1: { lastScore: 1, lastTotal: 1, bestScore: 1, bestTotal: 1, attempts: 1, lastAttemptAt: "2026-03-01T10:00:00.000Z" } }
        }
      }
    };
    const stats = computeDashboardStats(subjects, progress);
    assert.ok(stats.overall.lastActivity);
    assert.strictEqual(stats.overall.lastActivity.subjectId, "b");
    assert.strictEqual(stats.overall.lastActivity.topicId, "t1");
    assert.strictEqual(stats.overall.lastActivity.topicTitle, "Thema Zwei");
    assert.strictEqual(stats.overall.lastActivity.type, "quiz");
    assert.strictEqual(stats.overall.lastActivity.at, "2026-03-01T10:00:00.000Z");
  });

  run("staerkstes/schwaechstes Fach nur bei >=2 Faechern mit Quiz-Versuchen", function () {
    const subjects = [
      makeSubject("a", "Fach A", [{ id: "t1" }]),
      makeSubject("b", "Fach B", [{ id: "t1" }]),
      makeSubject("c", "Fach C", [{ id: "t1" }])
    ];
    const progressOnlyOne = {
      subjects: {
        a: { viewedTopics: {}, quizResults: { t1: { lastScore: 1, lastTotal: 1, bestScore: 1, bestTotal: 1, attempts: 1, lastAttemptAt: "2026-01-01T10:00:00.000Z" } } }
      }
    };
    const statsOne = computeDashboardStats(subjects, progressOnlyOne);
    assert.strictEqual(statsOne.overall.strongestSubject, null);
    assert.strictEqual(statsOne.overall.weakestSubject, null);

    const progressTwo = {
      subjects: {
        a: { viewedTopics: {}, quizResults: { t1: { lastScore: 1, lastTotal: 1, bestScore: 1, bestTotal: 1, attempts: 1, lastAttemptAt: "2026-01-01T10:00:00.000Z" } } },
        b: { viewedTopics: {}, quizResults: { t1: { lastScore: 0, lastTotal: 1, bestScore: 0, bestTotal: 1, attempts: 1, lastAttemptAt: "2026-01-02T10:00:00.000Z" } } }
      }
    };
    const statsTwo = computeDashboardStats(subjects, progressTwo);
    assert.strictEqual(statsTwo.overall.strongestSubject.id, "a");
    assert.strictEqual(statsTwo.overall.strongestSubject.averageQuizScorePercent, 100);
    assert.strictEqual(statsTwo.overall.weakestSubject.id, "b");
    assert.strictEqual(statsTwo.overall.weakestSubject.averageQuizScorePercent, 0);
  });

  run("Faecher-Liste ist nach Fortschritt absteigend sortiert", function () {
    const subjects = [
      makeSubject("low", "Wenig", [{ id: "t1" }, { id: "t2" }]),
      makeSubject("high", "Viel", [{ id: "t1" }, { id: "t2" }])
    ];
    const progress = {
      subjects: {
        low: { viewedTopics: { t1: "2026-01-01T10:00:00.000Z" }, quizResults: {} },
        high: { viewedTopics: { t1: "2026-01-01T10:00:00.000Z", t2: "2026-01-01T10:00:00.000Z" }, quizResults: {} }
      }
    };
    const stats = computeDashboardStats(subjects, progress);
    assert.strictEqual(stats.subjects[0].id, "high");
    assert.strictEqual(stats.subjects[1].id, "low");
  });

  if (process.exitCode === 1) {
    console.error("\ncomputeDashboardStats: einige Tests sind fehlgeschlagen.");
  } else {
    console.log("\ncomputeDashboardStats: alle Tests erfolgreich.");
  }
}

main();
