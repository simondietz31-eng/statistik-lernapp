const state = {
  view: "SUBJECT_SELECT",
  currentSubjectId: null,
  currentTopicId: null,
  quiz: { questionIndex: 0, answers: [] }
};

const views = {
  SUBJECT_SELECT: document.getElementById("view-subject-select"),
  TOPIC_GRID: document.getElementById("view-topic-grid"),
  EXPLANATION: document.getElementById("view-explanation"),
  EXERCISES: document.getElementById("view-exercises"),
  QUIZ: document.getElementById("view-quiz"),
  QUIZ_SUMMARY: document.getElementById("view-quiz-summary")
};

function getCurrentSubject() {
  return SUBJECTS.find(function (s) { return s.id === state.currentSubjectId; });
}

function getCurrentTopic() {
  return getCurrentSubject().topics.find(function (t) { return t.id === state.currentTopicId; });
}

function setView(viewName) {
  state.view = viewName;
  Object.keys(views).forEach(function (key) {
    views[key].hidden = key !== viewName;
  });

  if (viewName === "SUBJECT_SELECT") {
    renderSubjectGrid(document.getElementById("subjects-container"), SUBJECTS, loadProgress());
  } else if (viewName === "TOPIC_GRID") {
    const subject = getCurrentSubject();
    document.getElementById("subject-title").textContent = subject.title;
    renderTopicGrid(document.getElementById("chapters-container"), subject.chapters, subject.topics, getSubjectProgress(subject.id));
  } else if (viewName === "EXPLANATION") {
    const topic = getCurrentTopic();
    markTopicViewed(state.currentSubjectId, topic.id);
    document.getElementById("explanation-title").textContent = topic.title;
    renderContentBlocks(topic.explanation, document.getElementById("explanation-content"));
    document.getElementById("btn-go-exercises").disabled = topic.exercises.length === 0;
    document.getElementById("btn-go-quiz").disabled = topic.quiz.length === 0;
  } else if (viewName === "EXERCISES") {
    const topic = getCurrentTopic();
    document.getElementById("exercises-title").textContent = topic.title + " – Übungsaufgaben";
    renderExercises(topic, document.getElementById("exercises-content"));
  } else if (viewName === "QUIZ") {
    renderCurrentQuizQuestion();
  } else if (viewName === "QUIZ_SUMMARY") {
    const topic = getCurrentTopic();
    const score = state.quiz.answers.filter(function (a) { return a && a.correct; }).length;
    const total = topic.quiz.length;
    recordQuizResult(state.currentSubjectId, topic.id, score, total);
    renderQuizSummary(
      document.getElementById("quiz-summary-content"),
      score,
      total,
      function () { startQuiz(topic.id); },
      function () { setView("EXPLANATION"); },
      function () { setView("TOPIC_GRID"); }
    );
  }
}

function renderCurrentQuizQuestion() {
  const topic = getCurrentTopic();
  document.getElementById("quiz-title").textContent = topic.title + " – Quiz";
  const correctSoFar = state.quiz.answers.filter(function (a) { return a && a.correct; }).length;
  document.getElementById("quiz-progress").textContent =
    "Frage " + (state.quiz.questionIndex + 1) + " / " + topic.quiz.length + " · " + correctSoFar + " richtig";

  renderQuizQuestion(
    topic,
    state.quiz,
    document.getElementById("quiz-content"),
    function (chosenIndex) {
      const question = topic.quiz[state.quiz.questionIndex];
      state.quiz.answers[state.quiz.questionIndex] = {
        questionId: question.id,
        chosenIndex: chosenIndex,
        correct: chosenIndex === question.correctIndex
      };
      renderCurrentQuizQuestion();
    },
    function () {
      if (state.quiz.questionIndex < topic.quiz.length - 1) {
        state.quiz.questionIndex += 1;
        renderCurrentQuizQuestion();
      } else {
        setView("QUIZ_SUMMARY");
      }
    }
  );
}

function startQuiz(topicId) {
  state.currentTopicId = topicId;
  state.quiz = { questionIndex: 0, answers: [] };
  setView("QUIZ");
}

function applyDarkModePref() {
  const pref = getDarkModePref();
  if (pref === "on") document.documentElement.setAttribute("data-theme", "dark");
  else if (pref === "off") document.documentElement.setAttribute("data-theme", "light");
  else document.documentElement.removeAttribute("data-theme");
}

document.getElementById("subjects-container").addEventListener("click", function (e) {
  const card = e.target.closest(".subject-card");
  if (!card) return;
  state.currentSubjectId = card.dataset.subjectId;
  setView("TOPIC_GRID");
});

document.getElementById("chapters-container").addEventListener("click", function (e) {
  const card = e.target.closest(".topic-card");
  if (!card) return;
  state.currentTopicId = card.dataset.topicId;
  setView("EXPLANATION");
});

document.getElementById("btn-home").addEventListener("click", function () { setView("SUBJECT_SELECT"); });

document.querySelectorAll("[data-back-to]").forEach(function (btn) {
  btn.addEventListener("click", function () { setView(btn.dataset.backTo); });
});

document.getElementById("btn-go-exercises").addEventListener("click", function () { setView("EXERCISES"); });
document.getElementById("btn-go-quiz").addEventListener("click", function () { startQuiz(state.currentTopicId); });
document.getElementById("btn-exercises-to-quiz").addEventListener("click", function () { startQuiz(state.currentTopicId); });

document.getElementById("btn-theme-toggle").addEventListener("click", function () {
  const current = getDarkModePref();
  const isDarkNow = document.documentElement.getAttribute("data-theme") === "dark" ||
    (current === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  setDarkModePref(isDarkNow ? "off" : "on");
  applyDarkModePref();
});

document.getElementById("btn-reset-progress").addEventListener("click", function (e) {
  e.preventDefault();
  if (window.confirm("Gesamten Lernfortschritt in allen Fächern (gelernte Themen, Quiz-Ergebnisse) wirklich zurücksetzen?")) {
    resetProgress();
    setView(state.view === "SUBJECT_SELECT" ? "SUBJECT_SELECT" : "TOPIC_GRID");
  }
});

applyDarkModePref();
setView("SUBJECT_SELECT");
