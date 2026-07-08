# Statistik-Lernapp

Eine Lernapp für mehrere Fächer: Statistik (Deskriptive Statistik, Wahrscheinlichkeitstheorie, Induktive Statistik), BWL II (Prozessmanagement, Wertschöpfungskette) sowie Kosten- und Leistungsrechnung (Kostenarten-, Kostenstellen-, Kostenträgerrechnung, Deckungsbeitrags- und Plankostenrechnung).

Themen nach Kapitel wählbar → Erklärung → Übungsaufgaben (mit Lösung) → Quiz (mit sofortigem Feedback und Punktestand). Der Lernfortschritt wird lokal im Browser gespeichert (localStorage).

## Nutzung

Einfach `index.html` im Browser öffnen - keine Installation, kein Build-Schritt, kein Server nötig.

## Technik

Reines HTML/CSS/JavaScript ohne Framework. Formeln werden mit [KaTeX](https://katex.org/) (per CDN eingebunden) gerendert.

```
index.html          Einstiegspunkt, alle Views
css/style.css        Styling inkl. Dark Mode
js/data/              Themeninhalte je Kapitel (Erklärung, Übungen, Quiz)
js/app.js             Navigations-Logik (State Machine)
js/render.js           DOM-Aufbau je View
js/storage.js          Fortschritt in localStorage
js/katex-helper.js      Formel-Rendering
```
