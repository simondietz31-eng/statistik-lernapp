const STORAGE_KEY = "statistik-lernapp:progress:v2";

function defaultProgress() {
  return { version: 2, subjects: {}, darkMode: "auto", studiengangFilter: "alle", semesterFilter: "alle" };
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.version !== 2) return defaultProgress();
    return Object.assign(defaultProgress(), parsed);
  } catch (e) {
    return defaultProgress();
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    // Speicher voll oder nicht verfügbar - Fortschritt bleibt dann nur im Speicher der Sitzung.
  }
}

function getSubjectProgress(subjectId) {
  const progress = loadProgress();
  return progress.subjects[subjectId] || { viewedTopics: {}, quizResults: {} };
}

function markTopicViewed(subjectId, topicId) {
  const progress = loadProgress();
  if (!progress.subjects[subjectId]) progress.subjects[subjectId] = { viewedTopics: {}, quizResults: {} };
  if (!progress.subjects[subjectId].viewedTopics[topicId]) {
    progress.subjects[subjectId].viewedTopics[topicId] = new Date().toISOString();
    saveProgress(progress);
  }
}

function recordQuizResult(subjectId, topicId, score, total) {
  const progress = loadProgress();
  if (!progress.subjects[subjectId]) progress.subjects[subjectId] = { viewedTopics: {}, quizResults: {} };
  const existing = progress.subjects[subjectId].quizResults[topicId];
  const attempts = existing ? existing.attempts + 1 : 1;
  const bestScore = existing ? Math.max(existing.bestScore, score) : score;
  const bestTotal = existing && existing.bestScore >= score ? existing.bestTotal : total;
  progress.subjects[subjectId].quizResults[topicId] = {
    lastScore: score,
    lastTotal: total,
    bestScore: bestScore,
    bestTotal: bestTotal,
    attempts: attempts,
    lastAttemptAt: new Date().toISOString()
  };
  saveProgress(progress);
}

function getDarkModePref() {
  return loadProgress().darkMode || "auto";
}

function setDarkModePref(value) {
  const progress = loadProgress();
  progress.darkMode = value;
  saveProgress(progress);
}

function getStudiengangFilter() {
  return loadProgress().studiengangFilter || "alle";
}

function setStudiengangFilter(value) {
  const progress = loadProgress();
  progress.studiengangFilter = value;
  saveProgress(progress);
}

function getSemesterFilter() {
  return loadProgress().semesterFilter || "alle";
}

function setSemesterFilter(value) {
  const progress = loadProgress();
  progress.semesterFilter = value;
  saveProgress(progress);
}

function resetProgress() {
  const progress = defaultProgress();
  progress.darkMode = getDarkModePref();
  progress.studiengangFilter = getStudiengangFilter();
  progress.semesterFilter = getSemesterFilter();
  saveProgress(progress);
}

function exportProgress() {
  return JSON.stringify(loadProgress(), null, 2);
}

function importProgress(jsonString) {
  let parsed;
  try {
    parsed = JSON.parse(jsonString);
  } catch (e) {
    return { ok: false, error: "Die Datei enthält kein gültiges JSON." };
  }
  if (!parsed || typeof parsed !== "object" || parsed.version !== 2 || typeof parsed.subjects !== "object") {
    return { ok: false, error: "Die Datei sieht nicht wie eine exportierte Fortschrittsdatei aus." };
  }
  saveProgress(Object.assign(defaultProgress(), parsed));
  return { ok: true };
}
