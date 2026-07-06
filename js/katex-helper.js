// Rendert Formeln innerhalb von Prosa/Listen ($...$) und eigenständige Formelblöcke.
function renderMathIn(el) {
  if (window.renderMathInElement) {
    renderMathInElement(el, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false }
      ],
      throwOnError: false
    });
  }
}

function renderFormulaBlock(tex, container) {
  if (window.katex) {
    katex.render(tex, container, { throwOnError: false, displayMode: true });
  } else {
    container.textContent = tex;
  }
}
