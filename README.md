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
scripts/               Node-Hilfsskripte für Maintainer (kein Build-Schritt für die App selbst)
```

## Neues Kapitel hinzufügen

1. Neue Datei unter `js/data/` anlegen (z. B. `js/data/neues-fach-chapter1.js`), analog zu einer bestehenden Datei.
2. Falls es ein neues Fach ist: Einträge in `js/data/index.js` ergänzen (Kapitel-Array, `TOPICS`-Konkatenation, `SUBJECTS`-Eintrag).
3. `node scripts/generate-script-tags.js` ausführen - trägt die neue Datei automatisch in `index.html` ein (Reihenfolge muss nicht mehr von Hand gepflegt werden).
4. `node scripts/validate-content.js` ausführen - prüft eindeutige IDs, gültige Kapitel-Referenzen und gültige `correctIndex`-Werte in Quizfragen.
5. Beide Skripte laufen zusätzlich automatisch in der GitHub-Actions-Pipeline (`.github/workflows/pages.yml`) vor jedem Deploy.
