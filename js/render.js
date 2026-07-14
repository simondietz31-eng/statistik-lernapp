function getAllStudiengaenge(subjects) {
  const seen = {};
  const result = [];
  subjects.forEach(function (subject) {
    (subject.studiengang || []).forEach(function (sg) {
      if (!seen[sg]) {
        seen[sg] = true;
        result.push(sg);
      }
    });
  });
  result.sort();
  return result;
}

function filterSubjectsByStudiengang(subjects, filter) {
  if (!filter || filter === "alle") return subjects;
  return subjects.filter(function (subject) {
    return (subject.studiengang || []).indexOf(filter) !== -1;
  });
}

const STUDIENGANG_ICONS = {
  "Industriewirtschaft": "🏭",
  "Betriebswirtschaft": "💼",
  "Integrative Gesundheitsförderung": "🌱"
};

// Shared builder for the "topic-card" style buttons used by the
// studiengang/subject/topic grids - they only differ in which fields are
// populated (accent color, meta badge, summary text, status badges).
function buildCard(options) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "topic-card" + (options.className ? " " + options.className : "");
  Object.keys(options.dataset || {}).forEach(function (key) {
    card.dataset[key] = options.dataset[key];
  });
  if (options.accent) card.style.setProperty("--card-accent", options.accent);

  const top = document.createElement("div");
  top.className = "topic-card-top";

  const icon = document.createElement("span");
  icon.className = "topic-card-icon";
  icon.textContent = options.icon || "📘";
  top.appendChild(icon);

  if (options.meta) {
    const meta = document.createElement("span");
    meta.className = "topic-card-meta";
    meta.textContent = options.meta;
    top.appendChild(meta);
  }

  card.appendChild(top);

  const title = document.createElement("div");
  title.className = "topic-card-title";
  title.textContent = options.title;
  card.appendChild(title);

  if (options.summary) {
    const summary = document.createElement("p");
    summary.className = "topic-card-summary";
    summary.textContent = options.summary;
    card.appendChild(summary);
  }

  if (options.badges && options.badges.length > 0) {
    const badges = document.createElement("div");
    badges.className = "topic-card-badges";
    options.badges.forEach(function (b) {
      const badge = document.createElement("span");
      badge.className = "badge " + b.className;
      badge.textContent = b.text;
      badges.appendChild(badge);
    });
    card.appendChild(badges);
  }

  const link = document.createElement("span");
  link.className = "topic-card-link";
  link.textContent = "Öffnen →";
  card.appendChild(link);

  return card;
}

function renderStudiengangGrid(container, subjects) {
  container.innerHTML = "";
  const grid = document.createElement("div");
  grid.className = "topic-grid subject-grid";

  const options = [{ id: "alle", label: "Alle Fächer", icon: "🎓" }].concat(
    getAllStudiengaenge(subjects).map(function (sg) {
      return { id: sg, label: sg, icon: STUDIENGANG_ICONS[sg] || "🎓" };
    })
  );

  options.forEach(function (option) {
    const count = filterSubjectsByStudiengang(subjects, option.id).length;
    grid.appendChild(buildCard({
      className: "studiengang-card",
      dataset: { studiengang: option.id },
      icon: option.icon,
      title: option.label,
      summary: count + (count === 1 ? " Fach" : " Fächer")
    }));
  });

  container.appendChild(grid);
}

function buildSubjectCard(subject, allProgress) {
  const progress = (allProgress.subjects && allProgress.subjects[subject.id]) || { viewedTopics: {}, quizResults: {} };
  const viewedCount = Object.keys(progress.viewedTopics).length;

  return buildCard({
    className: "subject-card",
    dataset: { subjectId: subject.id },
    accent: subject.accent,
    icon: subject.icon,
    meta: subject.studiengang && subject.studiengang.length > 0 ? subject.studiengang.join(" / ").toUpperCase() : null,
    title: subject.title,
    summary: subject.chapters.length + " Kapitel · " + subject.topics.length + " Themen",
    badges: viewedCount > 0 ? [{ className: "viewed", text: viewedCount + " von " + subject.topics.length + " gelernt" }] : []
  });
}

function renderSubjectGrid(container, subjects, allProgress) {
  container.innerHTML = "";

  if (subjects.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Für diesen Studiengang ist aktuell kein Fach hinterlegt.";
    container.appendChild(empty);
    return;
  }

  // Group subjects by semester (ascending); subjects without a semester
  // (e.g. from other Studiengänge) are collected in a trailing group.
  const semesters = [];
  subjects.forEach(function (subject) {
    if (subject.semester && semesters.indexOf(subject.semester) === -1) semesters.push(subject.semester);
  });
  semesters.sort(function (a, b) { return a - b; });

  semesters.forEach(function (semester) {
    const block = document.createElement("div");
    block.className = "chapter-block";

    const h2 = document.createElement("h2");
    h2.textContent = semester + ". Semester";
    block.appendChild(h2);

    const grid = document.createElement("div");
    grid.className = "topic-grid subject-grid";
    subjects
      .filter(function (subject) { return subject.semester === semester; })
      .forEach(function (subject) { grid.appendChild(buildSubjectCard(subject, allProgress)); });

    block.appendChild(grid);
    container.appendChild(block);
  });

  const rest = subjects.filter(function (subject) { return !subject.semester; });
  if (rest.length > 0) {
    const block = document.createElement("div");
    block.className = "chapter-block";

    const h2 = document.createElement("h2");
    h2.textContent = "Weitere Fächer";
    block.appendChild(h2);

    const grid = document.createElement("div");
    grid.className = "topic-grid subject-grid";
    rest.forEach(function (subject) { grid.appendChild(buildSubjectCard(subject, allProgress)); });

    block.appendChild(grid);
    container.appendChild(block);
  }
}

function renderContentBlocks(blocks, container) {
  container.innerHTML = "";
  blocks.forEach(function (block) {
    if (block.type === "p") {
      const p = document.createElement("p");
      p.textContent = block.text;
      container.appendChild(p);
      renderMathIn(p);
    } else if (block.type === "list") {
      const ul = document.createElement("ul");
      block.items.forEach(function (item) {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
      container.appendChild(ul);
      renderMathIn(ul);
    } else if (block.type === "formula") {
      const div = document.createElement("div");
      div.className = "formula-block";
      renderFormulaBlock(block.tex, div);
      container.appendChild(div);
    }
  });
}

function buildChapterBlock(chapter, topics, progress) {
  const chapterTopics = topics
    .filter(function (t) { return t.chapter === chapter.id; })
    .sort(function (a, b) { return a.order - b.order; });
  if (chapterTopics.length === 0) return null;

  const block = document.createElement("div");
  block.className = "chapter-block";

  const h2 = document.createElement("h2");
  h2.textContent = chapter.title;
  block.appendChild(h2);

  const grid = document.createElement("div");
  grid.className = "topic-grid";

  chapterTopics.forEach(function (topic) {
    const metaParts = [];
    if (topic.exercises.length) metaParts.push(topic.exercises.length + " ÜBUNGEN");
    if (topic.quiz.length) metaParts.push(topic.quiz.length + " QUIZFRAGEN");

    const badges = [];
    if (progress.viewedTopics[topic.id]) {
      badges.push({ className: "viewed", text: "gelernt" });
    }
    const quizResult = progress.quizResults[topic.id];
    if (quizResult) {
      badges.push({ className: "score", text: "Bestes Quiz: " + quizResult.bestScore + "/" + quizResult.bestTotal });
    }

    grid.appendChild(buildCard({
      dataset: { topicId: topic.id },
      accent: chapter.accent,
      icon: topic.icon,
      meta: metaParts.join(" · "),
      title: topic.title,
      summary: topic.summary,
      badges: badges
    }));
  });

  block.appendChild(grid);
  return block;
}

function renderTopicGrid(container, chapters, topics, progress) {
  container.innerHTML = "";

  const groups = [];
  chapters.forEach(function (chapter) {
    if (chapter.group && groups.indexOf(chapter.group) === -1) groups.push(chapter.group);
  });
  const hasGroups = groups.length > 1;

  const chaptersWrap = document.createElement("div");

  function renderChaptersFor(groupFilter) {
    chaptersWrap.innerHTML = "";
    chapters.forEach(function (chapter) {
      if (groupFilter && chapter.group !== groupFilter) return;
      const block = buildChapterBlock(chapter, topics, progress);
      if (block) chaptersWrap.appendChild(block);
    });
  }

  if (hasGroups) {
    const tabBar = document.createElement("div");
    tabBar.className = "group-tabs";

    function setActiveGroup(activeGroup) {
      Array.prototype.forEach.call(tabBar.children, function (btn) {
        btn.classList.toggle("active", btn.dataset.group === activeGroup);
      });
      renderChaptersFor(activeGroup);
    }

    groups.forEach(function (g) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "group-tab";
      btn.textContent = g;
      btn.dataset.group = g;
      btn.addEventListener("click", function () { setActiveGroup(g); });
      tabBar.appendChild(btn);
    });

    container.appendChild(tabBar);
    container.appendChild(chaptersWrap);
    setActiveGroup(groups[0]);
  } else {
    container.appendChild(chaptersWrap);
    renderChaptersFor(null);
  }
}

function renderExercises(topic, container) {
  container.innerHTML = "";
  topic.exercises.forEach(function (exercise, index) {
    const card = document.createElement("div");
    card.className = "exercise-card";

    const heading = document.createElement("h3");
    heading.textContent = "Aufgabe " + (index + 1);
    card.appendChild(heading);

    const promptEl = document.createElement("p");
    promptEl.textContent = exercise.prompt;
    card.appendChild(promptEl);
    renderMathIn(promptEl);

    const revealBtn = document.createElement("button");
    revealBtn.type = "button";
    revealBtn.className = "secondary-btn reveal-btn";
    revealBtn.textContent = "Lösung anzeigen";

    const solutionEl = document.createElement("div");
    solutionEl.className = "solution";
    renderContentBlocks(exercise.solution, solutionEl);

    revealBtn.addEventListener("click", function () {
      const isOpen = solutionEl.classList.toggle("open");
      revealBtn.textContent = isOpen ? "Lösung ausblenden" : "Lösung anzeigen";
    });

    card.appendChild(revealBtn);
    card.appendChild(solutionEl);
    container.appendChild(card);
  });
}

function renderQuizQuestion(topic, quizState, container, onAnswer, onNext) {
  container.innerHTML = "";
  const question = topic.quiz[quizState.questionIndex];

  const wrap = document.createElement("div");
  wrap.className = "quiz-question";

  const h3 = document.createElement("h3");
  h3.textContent = question.question;
  wrap.appendChild(h3);
  renderMathIn(h3);

  const optionsWrap = document.createElement("div");
  optionsWrap.className = "quiz-options";

  const answered = quizState.answers[quizState.questionIndex];

  question.options.forEach(function (optionText, index) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-option";
    btn.textContent = optionText;
    renderMathIn(btn);

    if (answered) {
      btn.disabled = true;
      if (index === question.correctIndex) btn.classList.add("correct");
      if (index === answered.chosenIndex && index !== question.correctIndex) btn.classList.add("incorrect");
    }

    btn.addEventListener("click", function () {
      if (quizState.answers[quizState.questionIndex]) return;
      onAnswer(index);
    });

    optionsWrap.appendChild(btn);
  });

  wrap.appendChild(optionsWrap);

  if (answered) {
    const feedback = document.createElement("div");
    feedback.className = "quiz-feedback";
    const verdict = document.createElement("p");
    verdict.textContent = answered.correct ? "Richtig!" : "Leider falsch.";
    feedback.appendChild(verdict);
    if (question.explanation) {
      const explanationEl = document.createElement("p");
      explanationEl.textContent = question.explanation;
      feedback.appendChild(explanationEl);
      renderMathIn(explanationEl);
    }
    const nextBtn = document.createElement("button");
    nextBtn.type = "button";
    nextBtn.className = "primary-btn";
    const isLast = quizState.questionIndex === topic.quiz.length - 1;
    nextBtn.textContent = isLast ? "Ergebnis anzeigen" : "Weiter";
    nextBtn.addEventListener("click", onNext);
    feedback.appendChild(nextBtn);
    wrap.appendChild(feedback);
  }

  container.appendChild(wrap);
}

function renderQuizSummary(container, score, total, onRetry, onBackToTopic, onBackToGrid) {
  container.innerHTML = "";
  const percent = total > 0 ? Math.round((score / total) * 100) : 0;

  let message;
  if (percent === 100) message = "Perfekt! Du beherrschst dieses Thema.";
  else if (percent >= 70) message = "Gut gemacht! Ein bisschen Übung noch.";
  else if (percent >= 40) message = "Nicht schlecht, aber schau dir die Erklärung nochmal an.";
  else message = "Wiederhole die Erklärung und versuch es erneut.";

  const scoreEl = document.createElement("div");
  scoreEl.className = "score";
  scoreEl.textContent = score + " / " + total;
  container.appendChild(scoreEl);

  const messageEl = document.createElement("div");
  messageEl.className = "message";
  messageEl.textContent = message + " (" + percent + "% richtig)";
  container.appendChild(messageEl);

  const actions = document.createElement("div");
  actions.className = "actions";

  const retryBtn = document.createElement("button");
  retryBtn.type = "button";
  retryBtn.className = "primary-btn";
  retryBtn.textContent = "Quiz wiederholen";
  retryBtn.addEventListener("click", onRetry);
  actions.appendChild(retryBtn);

  const backTopicBtn = document.createElement("button");
  backTopicBtn.type = "button";
  backTopicBtn.className = "secondary-btn";
  backTopicBtn.textContent = "Zurück zum Thema";
  backTopicBtn.addEventListener("click", onBackToTopic);
  actions.appendChild(backTopicBtn);

  const backGridBtn = document.createElement("button");
  backGridBtn.type = "button";
  backGridBtn.className = "secondary-btn";
  backGridBtn.textContent = "Zur Themenübersicht";
  backGridBtn.addEventListener("click", onBackToGrid);
  actions.appendChild(backGridBtn);

  container.appendChild(actions);
}
