function renderSubjectGrid(container, subjects, allProgress) {
  container.innerHTML = "";
  const grid = document.createElement("div");
  grid.className = "topic-grid subject-grid";

  subjects.forEach(function (subject) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "topic-card subject-card";
    card.dataset.subjectId = subject.id;
    card.style.setProperty("--card-accent", subject.accent);

    const top = document.createElement("div");
    top.className = "topic-card-top";

    const icon = document.createElement("span");
    icon.className = "topic-card-icon";
    icon.textContent = subject.icon || "📘";
    top.appendChild(icon);

    if (subject.studiengang) {
      const badge = document.createElement("span");
      badge.className = "topic-card-meta";
      badge.textContent = subject.studiengang.toUpperCase();
      top.appendChild(badge);
    }

    card.appendChild(top);

    const title = document.createElement("div");
    title.className = "topic-card-title";
    title.textContent = subject.title;
    card.appendChild(title);

    const summary = document.createElement("p");
    summary.className = "topic-card-summary";
    summary.textContent = subject.chapters.length + " Kapitel · " + subject.topics.length + " Themen";
    card.appendChild(summary);

    const progress = (allProgress.subjects && allProgress.subjects[subject.id]) || { viewedTopics: {}, quizResults: {} };
    const viewedCount = Object.keys(progress.viewedTopics).length;
    if (viewedCount > 0) {
      const badges = document.createElement("div");
      badges.className = "topic-card-badges";
      const viewedBadge = document.createElement("span");
      viewedBadge.className = "badge viewed";
      viewedBadge.textContent = viewedCount + " von " + subject.topics.length + " gelernt";
      badges.appendChild(viewedBadge);
      card.appendChild(badges);
    }

    const link = document.createElement("span");
    link.className = "topic-card-link";
    link.textContent = "Öffnen →";
    card.appendChild(link);

    grid.appendChild(card);
  });

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

function renderTopicGrid(container, chapters, topics, progress) {
  container.innerHTML = "";
  chapters.forEach(function (chapter) {
    const chapterTopics = topics
      .filter(function (t) { return t.chapter === chapter.id; })
      .sort(function (a, b) { return a.order - b.order; });
    if (chapterTopics.length === 0) return;

    const block = document.createElement("div");
    block.className = "chapter-block";

    const h2 = document.createElement("h2");
    h2.textContent = chapter.title;
    block.appendChild(h2);

    const grid = document.createElement("div");
    grid.className = "topic-grid";

    chapterTopics.forEach(function (topic) {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "topic-card";
      card.dataset.topicId = topic.id;
      card.style.setProperty("--card-accent", chapter.accent);

      const top = document.createElement("div");
      top.className = "topic-card-top";

      const icon = document.createElement("span");
      icon.className = "topic-card-icon";
      icon.textContent = topic.icon || "📘";
      top.appendChild(icon);

      const metaBadge = document.createElement("span");
      metaBadge.className = "topic-card-meta";
      const parts = [];
      if (topic.exercises.length) parts.push(topic.exercises.length + " ÜBUNGEN");
      if (topic.quiz.length) parts.push(topic.quiz.length + " QUIZFRAGEN");
      metaBadge.textContent = parts.join(" · ");
      top.appendChild(metaBadge);

      card.appendChild(top);

      const title = document.createElement("div");
      title.className = "topic-card-title";
      title.textContent = topic.title;
      card.appendChild(title);

      if (topic.summary) {
        const summary = document.createElement("p");
        summary.className = "topic-card-summary";
        summary.textContent = topic.summary;
        card.appendChild(summary);
      }

      const badges = document.createElement("div");
      badges.className = "topic-card-badges";

      if (progress.viewedTopics[topic.id]) {
        const viewedBadge = document.createElement("span");
        viewedBadge.className = "badge viewed";
        viewedBadge.textContent = "gelernt";
        badges.appendChild(viewedBadge);
      }

      const quizResult = progress.quizResults[topic.id];
      if (quizResult) {
        const scoreBadge = document.createElement("span");
        scoreBadge.className = "badge score";
        scoreBadge.textContent = "Bestes Quiz: " + quizResult.bestScore + "/" + quizResult.bestTotal;
        badges.appendChild(scoreBadge);
      }
      if (badges.childNodes.length) card.appendChild(badges);

      const link = document.createElement("span");
      link.className = "topic-card-link";
      link.textContent = "Öffnen →";
      card.appendChild(link);

      grid.appendChild(card);
    });

    block.appendChild(grid);
    container.appendChild(block);
  });
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
