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

function getSemestersForSubjects(subjects) {
  const seen = {};
  const result = [];
  subjects.forEach(function (subject) {
    if (subject.semester && !seen[subject.semester]) {
      seen[subject.semester] = true;
      result.push(subject.semester);
    }
  });
  result.sort(function (a, b) { return a - b; });
  return result;
}

function filterSubjectsBySemester(subjects, filter) {
  if (!filter || filter === "alle") return subjects;
  return subjects.filter(function (subject) { return subject.semester === filter; });
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

function formatDashboardDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function buildProgressBar(percent, accent) {
  const bar = document.createElement("div");
  bar.className = "progress-bar";
  if (accent) bar.style.setProperty("--card-accent", accent);
  const fill = document.createElement("div");
  fill.className = "progress-bar-fill";
  fill.style.width = percent + "%";
  bar.appendChild(fill);
  return bar;
}

function renderDashboardTile(container, subjects, progress) {
  container.innerHTML = "";
  const stats = computeDashboardStats(subjects, progress);

  const grid = document.createElement("div");
  grid.className = "topic-grid subject-grid dashboard-tile-grid";

  const summaryParts = [
    stats.overall.viewedPercent + "% gelernt",
    stats.overall.subjectsStarted + " von " + stats.overall.subjectsTotal + " Fächern begonnen"
  ];

  grid.appendChild(buildCard({
    className: "dashboard-tile",
    icon: "📊",
    title: "Mein Fortschritt",
    summary: summaryParts.join(" · ")
  }));

  container.appendChild(grid);
}

function buildDashboardSubjectRow(subjectStats) {
  const row = document.createElement("button");
  row.type = "button";
  row.className = "dashboard-subject-row";
  row.dataset.subjectId = subjectStats.id;
  row.style.setProperty("--card-accent", subjectStats.accent);

  const icon = document.createElement("span");
  icon.className = "dashboard-subject-icon";
  icon.textContent = subjectStats.icon;
  row.appendChild(icon);

  const info = document.createElement("div");
  info.className = "dashboard-subject-info";

  const title = document.createElement("div");
  title.className = "dashboard-subject-title";
  title.textContent = subjectStats.title;
  info.appendChild(title);

  info.appendChild(buildProgressBar(subjectStats.viewedPercent, subjectStats.accent));

  const metaParts = [subjectStats.viewedTopics + " / " + subjectStats.totalTopics + " Themen"];
  if (subjectStats.averageQuizScorePercent !== null) {
    metaParts.push("Quiz-Ø " + subjectStats.averageQuizScorePercent + "%");
  }
  const meta = document.createElement("div");
  meta.className = "dashboard-subject-meta";
  meta.textContent = metaParts.join(" · ");
  info.appendChild(meta);

  row.appendChild(info);

  const percentEl = document.createElement("div");
  percentEl.className = "dashboard-subject-percent";
  percentEl.textContent = subjectStats.viewedPercent + "%";
  row.appendChild(percentEl);

  return row;
}

function renderDashboard(container, subjects, progress, onSelectSubject) {
  container.innerHTML = "";
  const stats = computeDashboardStats(subjects, progress);

  const overview = document.createElement("div");
  overview.className = "dashboard-overview";

  const overallHeading = document.createElement("div");
  overallHeading.className = "dashboard-overall-percent";
  overallHeading.textContent = stats.overall.viewedPercent + "%";
  overview.appendChild(overallHeading);

  overview.appendChild(buildProgressBar(stats.overall.viewedPercent));

  const overallMeta = document.createElement("div");
  overallMeta.className = "dashboard-subject-meta";
  overallMeta.textContent = stats.overall.viewedTopics + " von " + stats.overall.totalTopics + " Themen gelernt · " +
    stats.overall.subjectsStarted + " von " + stats.overall.subjectsTotal + " Fächern begonnen";
  overview.appendChild(overallMeta);

  container.appendChild(overview);

  const statCards = document.createElement("div");
  statCards.className = "dashboard-stat-cards";

  function addStatCard(label, value) {
    const card = document.createElement("div");
    card.className = "dashboard-stat-card";
    const valueEl = document.createElement("div");
    valueEl.className = "dashboard-stat-value";
    valueEl.textContent = value;
    const labelEl = document.createElement("div");
    labelEl.className = "dashboard-stat-label";
    labelEl.textContent = label;
    card.appendChild(valueEl);
    card.appendChild(labelEl);
    statCards.appendChild(card);
  }

  addStatCard("Quiz-Versuche insgesamt", stats.overall.totalQuizAttempts);
  addStatCard("Perfekte Themen (100%)", stats.overall.perfectTopics);
  if (stats.overall.lastActivity) {
    addStatCard(
      "Zuletzt gelernt",
      stats.overall.lastActivity.topicTitle + " (" + stats.overall.lastActivity.subjectTitle + "), " +
        formatDashboardDate(stats.overall.lastActivity.at)
    );
  } else {
    addStatCard("Zuletzt gelernt", "Noch keine Aktivität");
  }
  if (stats.overall.strongestSubject) {
    addStatCard(
      "Stärkstes Fach",
      stats.overall.strongestSubject.title + " (" + stats.overall.strongestSubject.averageQuizScorePercent + "% Quiz-Ø)"
    );
    addStatCard(
      "Schwächstes Fach",
      stats.overall.weakestSubject.title + " (" + stats.overall.weakestSubject.averageQuizScorePercent + "% Quiz-Ø)"
    );
  }

  container.appendChild(statCards);

  const listHeading = document.createElement("h2");
  listHeading.textContent = "Fortschritt je Fach";
  container.appendChild(listHeading);

  const list = document.createElement("div");
  list.className = "dashboard-subject-list";
  stats.subjects.forEach(function (subjectStats) {
    list.appendChild(buildDashboardSubjectRow(subjectStats));
  });
  list.addEventListener("click", function (e) {
    const row = e.target.closest(".dashboard-subject-row");
    if (!row) return;
    onSelectSubject(row.dataset.subjectId);
  });
  container.appendChild(list);
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

function renderSemesterGrid(container, subjects) {
  container.innerHTML = "";
  const grid = document.createElement("div");
  grid.className = "topic-grid subject-grid";

  const options = [{ id: "alle", label: "Alle Semester", icon: "📚" }].concat(
    getSemestersForSubjects(subjects).map(function (semester) {
      return { id: semester, label: semester + ". Semester", icon: "📅" };
    })
  );

  options.forEach(function (option) {
    const count = filterSubjectsBySemester(subjects, option.id).length;
    grid.appendChild(buildCard({
      className: "studiengang-card semester-card",
      dataset: { semester: option.id },
      icon: option.icon,
      title: option.label,
      summary: count + (count === 1 ? " Fach" : " Fächer")
    }));
  });

  container.appendChild(grid);
}

function renderSubjectGrid(container, subjects, allProgress) {
  container.innerHTML = "";

  if (subjects.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Für diese Auswahl ist aktuell kein Fach hinterlegt.";
    container.appendChild(empty);
    return;
  }

  const grid = document.createElement("div");
  grid.className = "topic-grid subject-grid";
  subjects.forEach(function (subject) { grid.appendChild(buildSubjectCard(subject, allProgress)); });
  container.appendChild(grid);
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
    const solutionBlocks = typeof exercise.solution === "string"
      ? [{ type: "p", text: exercise.solution }]
      : exercise.solution;
    renderContentBlocks(solutionBlocks, solutionEl);

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
