const FORSCHUNG_CHAPTER6_TOPICS = [
  {
    id: "fo-streuungsmasse-normalverteilung",
    chapter: 6,
    order: 1,
    title: "Streuungsmaße und Normalverteilung",
    icon: "📉",
    summary: "Spannweite, Interquartilsabstand, Varianz und Standardabweichung als Streuungsmaße sowie die z-Standardisierung zur Berechnung von Wahrscheinlichkeiten bei normalverteilten Daten.",
    explanation: [
      { type: "p", text: "Streuungsmaße beschreiben, wie breit Werte um die Mitte einer Verteilung gestreut sind — sie ergänzen Lagemaße wie den Median, da zwei Verteilungen denselben Mittelwert, aber sehr unterschiedliche Streuung haben können. Die Spannweite ist die Differenz zwischen dem größten und dem kleinsten Wert eines Datensatzes — sie ist einfach zu berechnen, aber sehr anfällig für Ausreißer." },
      { type: "p", text: "Der Interquartilsabstand (IQA/IQR) ist der Abstand zwischen dem 1. und dem 3. Quartil (Q3 − Q1) und misst, wie breit die zentrale Hälfte der Daten gestreut ist — er ist robuster gegenüber Ausreißern als die Spannweite, da er nur die mittleren 50 % der Daten betrachtet." },
      { type: "p", text: "Die Varianz ist die durchschnittliche quadrierte Abweichung aller Werte vom arithmetischen Mittel. Die Standardabweichung (s bei Stichproben, σ bei der Population) ist die Quadratwurzel der Varianz und gibt die Streuung in derselben Einheit wie die ursprünglichen Daten an — sie ist damit anschaulicher interpretierbar als die Varianz." },
      { type: "p", text: "Bei normalverteilten Daten lässt sich mit der z-Standardisierung berechnen, wie wahrscheinlich ein bestimmter Wert oder Wertebereich ist. Der z-Wert gibt an, um wie viele Standardabweichungen ein Wert vom Mittelwert entfernt liegt: z = (xᵢ − μ) / σ. Anhand der z-Tabelle lässt sich anschließend ablesen, welcher Anteil der Verteilung links (oder rechts) von diesem z-Wert liegt. Bei einer Normalverteilung liegen ca. 68,3 % aller Werte zwischen z = −1 und z = +1, ca. 95,45 % zwischen z = −2 und z = +2 und ca. 99,7 % zwischen z = −3 und z = +3 (\"68-95-99,7-Regel\")." },
      { type: "p", text: "Beispielrechnung: Eiskugeln wiegen im Schnitt 120 g, normalverteilt mit einer Standardabweichung von 10 g. Für 140 g ergibt sich z = (140−120)/10 = 2, für 100 g z = (100−120)/10 = −2. Laut z-Tabelle liegen 97,72 % der Werte unterhalb von z = 2, und 2,28 % unterhalb von z = −2. Die Wahrscheinlichkeit, dass eine Kugel zwischen 100 g und 140 g wiegt, beträgt somit 97,72 % − 2,28 % = 95,44 %." }
    ],
    exercises: [
      {
        id: "fo-streuungsmasse-normalverteilung-e1",
        prompt: "Warum ist der Interquartilsabstand robuster gegenüber Ausreißern als die Spannweite?",
        solution: [{ type: "p", text: "Die Spannweite wird allein aus dem größten und kleinsten Wert berechnet — ein einzelner extremer Ausreißer verändert sie stark. Der Interquartilsabstand betrachtet dagegen nur die mittleren 50 % der Daten (zwischen Q1 und Q3) und bleibt daher von extremen Einzelwerten weitgehend unbeeinflusst." }]
      },
      {
        id: "fo-streuungsmasse-normalverteilung-e2",
        prompt: "Was ist der Unterschied zwischen Varianz und Standardabweichung, und warum wird meist die Standardabweichung zur Interpretation herangezogen?",
        solution: [{ type: "p", text: "Die Varianz ist die durchschnittliche quadrierte Abweichung vom Mittelwert und hat daher eine quadrierte Einheit (z. B. cm²), die schwer interpretierbar ist. Die Standardabweichung ist die Quadratwurzel der Varianz und liegt damit wieder in der ursprünglichen Einheit der Daten (z. B. cm) vor — sie ist deshalb anschaulicher und wird zur Interpretation der Streuung bevorzugt verwendet." }]
      },
      {
        id: "fo-streuungsmasse-normalverteilung-e3",
        prompt: "Eine Population ist normalverteilt mit μ = 28.500 € und σ = 2.400 €. Berechnen Sie den z-Wert für einen Wert von 30.000 € und interpretieren Sie ihn.",
        solution: [{ type: "p", text: "z = (30.000 − 28.500) / 2.400 = 1.500 / 2.400 = 0,63. Der Wert 30.000 € liegt also 0,63 Standardabweichungen über dem Mittelwert der Population." }]
      },
      {
        id: "fo-streuungsmasse-normalverteilung-e4",
        prompt: "Wie viel Prozent der Werte einer Normalverteilung liegen ungefähr zwischen z = −2 und z = +2? Wie viel Prozent liegen außerhalb dieses Bereichs?",
        solution: [{ type: "p", text: "Etwa 95,45 % der Werte liegen zwischen z = −2 und z = +2 (\"95 %-Regel\"). Entsprechend liegen die restlichen 100 % − 95,45 % = 4,55 % außerhalb dieses Bereichs, also entweder unterhalb von z = −2 oder oberhalb von z = +2." }]
      },
      {
        id: "fo-streuungsmasse-normalverteilung-e5",
        prompt: "Rundenzeiten beim Joggen sind normalverteilt mit μ = 10 Minuten und σ = 1 Minute. Welche Zeit entspricht den schnellsten 5 % der Zeiten (bei niedrigeren Zeiten = besser)?",
        solution: [{ type: "p", text: "Aus der z-Tabelle: Der z-Wert, unterhalb dessen 5 % der Werte liegen, beträgt z ≈ −1,64. Zeit = μ + z·σ = 10 + (−1,64)·1 = 8,36 Minuten. Um zu den schnellsten 5 % zu gehören, muss die Rundenzeit unter 8,36 Minuten liegen." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie wird die Spannweite einer Verteilung berechnet?", options: ["Abstand zwischen dem 1. und 3. Quartil", "Quadratwurzel der Varianz laut gängiger, aber unzutreffender Annahme", "Differenz zwischen dem größten und dem kleinsten Wert", "Durchschnittliche Abweichung aller Werte vom Median"], correctIndex: 2, explanation: "Die Spannweite ergibt sich aus der Differenz des größten und kleinsten Werts eines Datensatzes — sie ist leicht zu berechnen, aber stark anfällig für einzelne Ausreißer." },
      { id: "q2", question: "Was misst der Interquartilsabstand (IQR)?", options: ["Den Abstand zwischen dem größten und kleinsten Wert", "Die durchschnittliche quadrierte Abweichung vom Mittelwert", "Ausschließlich den Median einer Verteilung nach verbreiteter Fehlvorstellung", "Wie breit die zentrale Hälfte der Daten (zwischen Q1 und Q3) gestreut ist"], correctIndex: 3, explanation: "Der IQR (Q3 − Q1) misst, wie breit die mittleren 50 % der sortierten Daten gestreut sind, und ist robuster gegenüber Ausreißern als die Spannweite." },
      { id: "q3", question: "Was ist die Standardabweichung im Verhältnis zur Varianz?", options: ["Die Quadratwurzel der Varianz", "Das Quadrat der Varianz", "Ein Synonym für die Spannweite", "Die Summe aller quadrierten Abweichungen vom Median"], correctIndex: 0, explanation: "Die Standardabweichung ist definiert als die Quadratwurzel der Varianz und liegt dadurch wieder in der ursprünglichen Einheit der Daten vor, was ihre Interpretation erleichtert." },
      { id: "q4", question: "Wie wird der z-Wert eines Einzelwerts xᵢ berechnet, wenn μ und σ bekannt sind?", options: ["z = μ / xᵢ in jeder denkbaren Situation", "z = (xᵢ − μ) / σ", "z = xᵢ · σ", "z = (xᵢ + μ) · σ"], correctIndex: 1, explanation: "Der z-Wert standardisiert einen Wert xᵢ, indem er dessen Abstand vom Mittelwert μ durch die Standardabweichung σ teilt — er gibt an, um wie viele Standardabweichungen der Wert vom Mittelwert entfernt liegt." },
      { id: "q5", question: "Wie viel Prozent der Werte einer Normalverteilung liegen ungefähr zwischen z = −1 und z = +1?", options: ["Ca. 50 % über alle Altersgruppen hinweg", "Ca. 95,45 %", "Ca. 68,3 %", "Ca. 99,7 %"], correctIndex: 2, explanation: "Nach der 68-95-99,7-Regel liegen bei einer Normalverteilung ca. 68,3 % aller Werte innerhalb einer Standardabweichung um den Mittelwert (zwischen z = −1 und z = +1)." },
      { id: "q6", question: "Ein Wert hat einen z-Wert von 2. Laut z-Tabelle liegen 97,72 % der Werte darunter. Wie viel Prozent liegen darüber?", options: ["97,72 %", "50 %", "100 %", "2,28 %"], correctIndex: 3, explanation: "Da die Gesamtfläche unter der Normalverteilung 100 % entspricht, liegen 100 % − 97,72 % = 2,28 % der Werte oberhalb dieses z-Werts." },
      { id: "q7", question: "Eiskugeln wiegen im Schnitt 120 g mit σ = 10 g (normalverteilt). Welchen z-Wert hat eine Kugel mit 100 g?", options: ["z = −2", "z = 2", "z = 0,5", "z = 20"], correctIndex: 0, explanation: "z = (100 − 120) / 10 = −20/10 = −2. Der Wert liegt also zwei Standardabweichungen unterhalb des Mittelwerts." },
      { id: "q8", question: "Warum ist die Standardabweichung für die Interpretation anschaulicher als die Varianz?", options: ["Weil die Standardabweichung immer kleiner ist als die Varianz ohne jede Einschränkung in der klinischen wie akademischen Praxis", "Weil sie in derselben Einheit wie die Ursprungsdaten vorliegt, die Varianz aber in einer quadrierten Einheit", "Weil die Varianz nur bei kategorialen Daten berechnet werden kann grundsätzlich und ausnahmslos", "Weil die Standardabweichung unabhängig vom Stichprobenumfang ist nach traditioneller, überholter Sichtweise"], correctIndex: 1, explanation: "Da die Varianz aus quadrierten Abweichungen berechnet wird, liegt sie in einer quadrierten Einheit vor (z. B. cm² statt cm). Die Standardabweichung als Quadratwurzel der Varianz liegt wieder in der ursprünglichen, interpretierbaren Einheit vor." },
      { id: "q9", question: "Wie hoch ist ungefähr der Anteil der Werte außerhalb des Bereichs zwischen z = −2 und z = +2 bei einer Normalverteilung?", options: ["Ca. 31,7 %", "Ca. 50 %", "Ca. 4,55 %", "Ca. 68,3 %"], correctIndex: 2, explanation: "Da innerhalb von z = −2 bis z = +2 ca. 95,45 % der Werte liegen, liegen entsprechend 100 % − 95,45 % = 4,55 % außerhalb dieses Bereichs." },
      { id: "q10", question: "Welchen z-Wert benötigt man in der z-Tabelle, um die Grenze der schnellsten 5 % einer Verteilung zu bestimmen (bei niedrigeren Werten = besser)?", options: ["Den z-Wert, unterhalb dessen 95 % der Werte liegen (ca. z = 1,64)", "Immer exakt z = 0 nach heutigem Kenntnisstand nicht zutreffend", "Einen beliebigen z-Wert, da die Verteilung symmetrisch ist unabhängig von individuellen Unterschieden", "Den z-Wert, unterhalb dessen 5 % der Werte liegen (ca. z = −1,64)"], correctIndex: 3, explanation: "Um die Grenze der schnellsten (niedrigsten) 5 % zu finden, sucht man in der z-Tabelle den z-Wert, unterhalb dessen genau 5 % der Fläche liegen — dieser liegt bei ca. z = −1,64, da nur ein kleiner Anteil der Verteilung darunter liegen soll." }
    ]
  }
];
