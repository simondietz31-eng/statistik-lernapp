// Reine Aggregationslogik für das Fortschritts-Dashboard über alle Fächer.
// Bewusst frei von DOM-Zugriffen, damit sie in Node (siehe
// scripts/test-dashboard.js) genauso wie im Browser läuft.

function roundPercent(value) {
  return Math.round(value * 100);
}

function computeSubjectStats(subject, subjectProgress, excluded) {
  const viewedTopics = subjectProgress ? Object.keys(subjectProgress.viewedTopics || {}).length : 0;
  const totalTopics = subject.topics.length;
  const viewedPercent = totalTopics > 0 ? roundPercent(viewedTopics / totalTopics) : 0;

  const quizResults = (subjectProgress && subjectProgress.quizResults) || {};
  const quizEntries = Object.keys(quizResults).map(function (topicId) { return quizResults[topicId]; });

  const quizAttempts = quizEntries.reduce(function (sum, r) { return sum + r.attempts; }, 0);
  const perfectTopics = quizEntries.filter(function (r) { return r.bestTotal > 0 && r.bestScore === r.bestTotal; }).length;

  const scorePercentages = quizEntries
    .filter(function (r) { return r.bestTotal > 0; })
    .map(function (r) { return r.bestScore / r.bestTotal; });
  const averageQuizScorePercent = scorePercentages.length > 0
    ? roundPercent(scorePercentages.reduce(function (a, b) { return a + b; }, 0) / scorePercentages.length)
    : null;

  return {
    id: subject.id,
    title: subject.title,
    icon: subject.icon,
    accent: subject.accent,
    totalTopics: totalTopics,
    viewedTopics: viewedTopics,
    viewedPercent: viewedPercent,
    quizAttempts: quizAttempts,
    perfectTopics: perfectTopics,
    averageQuizScorePercent: averageQuizScorePercent,
    excluded: excluded
  };
}

function findLastActivity(subjects, progress) {
  let latest = null;

  subjects.forEach(function (subject) {
    const subjectProgress = (progress.subjects && progress.subjects[subject.id]) || {};
    const topicsById = {};
    subject.topics.forEach(function (t) { topicsById[t.id] = t; });

    Object.keys(subjectProgress.viewedTopics || {}).forEach(function (topicId) {
      const at = subjectProgress.viewedTopics[topicId];
      if (!latest || at > latest.at) {
        const topic = topicsById[topicId];
        latest = {
          subjectId: subject.id,
          subjectTitle: subject.title,
          topicId: topicId,
          topicTitle: topic ? topic.title : topicId,
          type: "viewed",
          at: at
        };
      }
    });

    Object.keys(subjectProgress.quizResults || {}).forEach(function (topicId) {
      const result = subjectProgress.quizResults[topicId];
      const at = result.lastAttemptAt;
      if (!latest || at > latest.at) {
        const topic = topicsById[topicId];
        latest = {
          subjectId: subject.id,
          subjectTitle: subject.title,
          topicId: topicId,
          topicTitle: topic ? topic.title : topicId,
          type: "quiz",
          at: at
        };
      }
    });
  });

  return latest;
}

function findStrongestAndWeakestSubject(subjectStats) {
  const withQuizzes = subjectStats.filter(function (s) { return s.averageQuizScorePercent !== null; });
  if (withQuizzes.length < 2) {
    return { strongestSubject: null, weakestSubject: null };
  }

  let strongest = withQuizzes[0];
  let weakest = withQuizzes[0];
  withQuizzes.forEach(function (s) {
    if (s.averageQuizScorePercent > strongest.averageQuizScorePercent) strongest = s;
    if (s.averageQuizScorePercent < weakest.averageQuizScorePercent) weakest = s;
  });

  return {
    strongestSubject: { id: strongest.id, title: strongest.title, averageQuizScorePercent: strongest.averageQuizScorePercent },
    weakestSubject: { id: weakest.id, title: weakest.title, averageQuizScorePercent: weakest.averageQuizScorePercent }
  };
}

function computeDashboardStats(subjects, progress, excludedSubjectIds) {
  const excludedSet = {};
  (excludedSubjectIds || []).forEach(function (id) { excludedSet[id] = true; });

  const subjectStats = subjects.map(function (subject) {
    return computeSubjectStats(subject, progress.subjects && progress.subjects[subject.id], !!excludedSet[subject.id]);
  });
  const includedStats = subjectStats.filter(function (s) { return !s.excluded; });
  const includedSubjects = subjects.filter(function (subject) { return !excludedSet[subject.id]; });

  const totalTopics = includedStats.reduce(function (sum, s) { return sum + s.totalTopics; }, 0);
  const viewedTopics = includedStats.reduce(function (sum, s) { return sum + s.viewedTopics; }, 0);
  const subjectsStarted = includedStats.filter(function (s) { return s.viewedTopics > 0 || s.quizAttempts > 0; }).length;
  const totalQuizAttempts = includedStats.reduce(function (sum, s) { return sum + s.quizAttempts; }, 0);
  const perfectTopics = includedStats.reduce(function (sum, s) { return sum + s.perfectTopics; }, 0);

  const scorePercentages = includedStats
    .filter(function (s) { return s.averageQuizScorePercent !== null; })
    .map(function (s) { return s.averageQuizScorePercent; });
  const averageQuizScorePercent = scorePercentages.length > 0
    ? Math.round(scorePercentages.reduce(function (a, b) { return a + b; }, 0) / scorePercentages.length)
    : null;

  const strongestAndWeakest = findStrongestAndWeakestSubject(includedStats);

  const sortedSubjects = subjectStats.slice().sort(function (a, b) { return b.viewedPercent - a.viewedPercent; });

  return {
    overall: {
      totalTopics: totalTopics,
      viewedTopics: viewedTopics,
      viewedPercent: totalTopics > 0 ? roundPercent(viewedTopics / totalTopics) : 0,
      subjectsStarted: subjectsStarted,
      subjectsTotal: includedSubjects.length,
      totalQuizAttempts: totalQuizAttempts,
      perfectTopics: perfectTopics,
      averageQuizScorePercent: averageQuizScorePercent,
      lastActivity: findLastActivity(includedSubjects, progress),
      strongestSubject: strongestAndWeakest.strongestSubject,
      weakestSubject: strongestAndWeakest.weakestSubject
    },
    subjects: sortedSubjects
  };
}
