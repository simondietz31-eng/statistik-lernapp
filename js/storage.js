const STORAGE_KEY = "statistik-lernapp:progress:v1";

function defaultProgress() {
  return { version: 1, viewedTopics: {}, quizResults: {}, darkMode: "auto" };
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.version !== 1) return defaultProgress();
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

function markTopicViewed(topicId) {
  const progress = loadProgress();
  if (!progress.viewedTopics[topicId]) {
    progress.viewedTopics[topicId] = new Date().toISOString();
    saveProgress(progress);
  }
}

function recordQuizResult(topicId, score, total) {
  const progress = loadProgress();
  const existing = progress.quizResults[topicId];
  const attempts = existing ? existing.attempts + 1 : 1;
  const bestScore = existing ? Math.max(existing.bestScore, score) : score;
  const bestTotal = existing && existing.bestScore >= score ? existing.bestTotal : total;
  progress.quizResults[topicId] = {
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

function resetProgress() {
  const progress = defaultProgress();
  progress.darkMode = getDarkModePref();
  saveProgress(progress);
}
