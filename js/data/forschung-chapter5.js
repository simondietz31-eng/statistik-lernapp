const FORSCHUNG_CHAPTER5_TOPICS = [
  {
    id: "fo-haeufigkeiten-lagemasse",
    chapter: 5,
    order: 1,
    title: "Häufigkeiten und Lagemaße",
    icon: "📊",
    summary: "Absolute, relative und prozentuale Häufigkeit kategorialer Daten sowie die Lagemaße Modus, Median und arithmetisches Mittel zur Beschreibung metrischer Daten.",
    explanation: [
      { type: "p", text: "Bei kategorialen Daten interessiert häufig, wie oft eine bestimmte Merkmalsausprägung vorkommt. Die absolute Häufigkeit ist die Anzahl, wie oft ein Wert in den Daten vorkommt (\"Strichliste\"). Die relative Häufigkeit ist der Anteil an der Gesamtzahl als Dezimalzahl (absolute Häufigkeit geteilt durch Stichprobengröße). Die prozentuale Häufigkeit ist derselbe Anteil in Prozent ausgedrückt. Beispiel: Von 20 befragten Personen sind 15 weiblich → absolute Häufigkeit 15, relative Häufigkeit 0,75, prozentuale Häufigkeit 75 %." },
      { type: "p", text: "Ein wichtiger praktischer Hinweis: Bei Mehrfachantworten (z. B. \"welche Maßnahmen haben Sie genutzt, Mehrfachnennung möglich\") ist eine klassische relative Häufigkeitstabelle nicht sinnvoll, da die Summe der Prozente über 100 % hinausgehen kann. Stattdessen berechnet man den prozentualen Anteil jeder Nennung im Vergleich zu allen abgegebenen Nennungen. Bei Häufigkeitstabellen ist außerdem stets die Stichprobengröße mit anzugeben — ohne sie lässt sich das Ergebnis nicht sinnvoll interpretieren (z. B. ist \"47 % besser\" ohne Angabe der Fallzahl wenig aussagekräftig)." },
      { type: "p", text: "Für metrische Daten werden Lagemaße berechnet, die die \"Mitte\" einer Verteilung beschreiben:" },
      { type: "list", items: [
        "Modus (häufigster Wert): die Ausprägung, die in den Daten am häufigsten vorkommt — anwendbar ab Nominalskala.",
        "Median (Zentralwert): der Wert, der die sortierten Daten in zwei gleich große Hälften teilt (50 % der Werte liegen darunter, 50 % darüber). Bei gerader Anzahl von Werten ist der Median der Durchschnitt der beiden mittleren Werte. Anwendbar ab Ordinalskala.",
        "Arithmetisches Mittel (Mittelwert, Durchschnitt): Summe aller Werte geteilt durch die Anzahl der Werte. Nur ab Intervallskala sinnvoll berechenbar, da Summenbildung gleich große Abstände voraussetzt."
      ]},
      { type: "p", text: "Quartile (Q) teilen einen sortierten Datensatz in vier gleich große Abschnitte: Q1 (1. Quartil, 25. Perzentil) — 25 % der Werte liegen darunter; Q2 (2. Quartil, 50. Perzentil) — entspricht dem Median, 50 % der Werte liegen darunter; Q3 (3. Quartil, 75. Perzentil) — 75 % der Werte liegen darunter." }
    ],
    exercises: [
      {
        id: "fo-haeufigkeiten-lagemasse-e1",
        prompt: "950 Berufsschüler:innen wurden befragt, ob sie das gesunde Mensa-Angebot nutzen: 612 ja, 200 nein, 138 keine Antwort. Berechnen Sie die prozentuale Häufigkeit für \"ja\" und die Antwortrate.",
        solution: [{ type: "p", text: "Prozentuale Häufigkeit \"ja\" = 612 / 950 = 64,4 %. Antwortrate (Anteil, der überhaupt geantwortet hat) = (612 + 200) / 950 = 812 / 950 = 85,5 %." }]
      },
      {
        id: "fo-haeufigkeiten-lagemasse-e2",
        prompt: "Warum ist eine klassische relative Häufigkeitstabelle bei Mehrfachantworten (z. B. genutzte Gesundheitsmaßnahmen) nicht sinnvoll? Was macht man stattdessen?",
        solution: [{ type: "p", text: "Da eine Person mehrere Antworten geben kann, würde die Summe der relativen Häufigkeiten über 100 % hinausgehen und wäre nicht mehr als vollständige Verteilung interpretierbar. Stattdessen berechnet man für jede Maßnahme den prozentualen Anteil an allen abgegebenen Nennungen (nicht an der Personenzahl)." }]
      },
      {
        id: "fo-haeufigkeiten-lagemasse-e3",
        prompt: "Berechnen Sie Modus, Median und arithmetisches Mittel für die Werte: 5, 7, 7, 8, 9.",
        solution: [{ type: "p", text: "Modus = 7 (kommt am häufigsten vor). Median = 7 (mittlerer Wert bei sortierten, ungeraden 5 Werten: 5, 7, [7], 8, 9). Arithmetisches Mittel = (5+7+7+8+9)/5 = 36/5 = 7,2." }]
      },
      {
        id: "fo-haeufigkeiten-lagemasse-e4",
        prompt: "Warum ist das arithmetische Mittel erst ab Intervallskalenniveau sinnvoll berechenbar, der Median aber bereits ab Ordinalskala?",
        solution: [{ type: "p", text: "Das arithmetische Mittel erfordert die Bildung von Summen, was voraussetzt, dass die Abstände zwischen den Werten gleich groß und interpretierbar sind — dies ist erst ab Intervallskala gegeben. Der Median benötigt dagegen nur eine sinnvolle Rangordnung der Werte (welcher Wert liegt in der Mitte), was bereits bei ordinalskalierten Daten (z. B. Schulnoten) gegeben ist." }]
      },
      {
        id: "fo-haeufigkeiten-lagemasse-e5",
        prompt: "Was bedeutet es, wenn ein Wert dem 1. Quartil (Q1) einer Verteilung entspricht?",
        solution: [{ type: "p", text: "Es bedeutet, dass 25 % der sortierten Werte der Verteilung unterhalb dieses Wertes liegen (und entsprechend 75 % darüber). Q1 ist damit die Grenze, die das erste Viertel der Daten vom Rest trennt." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie berechnet sich die relative Häufigkeit einer Kategorie?", options: ["Absolute Häufigkeit geteilt durch die Stichprobengröße", "Absolute Häufigkeit multipliziert mit 100", "Anzahl der Kategorien geteilt durch die Stichprobengröße", "Stichprobengröße geteilt durch die absolute Häufigkeit"], correctIndex: 0, explanation: "Die relative Häufigkeit ergibt sich, indem man die absolute Häufigkeit einer Kategorie durch die Gesamtzahl (Stichprobengröße) teilt — sie wird meist als Dezimalzahl zwischen 0 und 1 angegeben." },
      { id: "q2", question: "Warum ist eine relative Häufigkeitstabelle bei Mehrfachantworten problematisch?", options: ["Weil relative Häufigkeiten bei Mehrfachantworten grundsätzlich negativ werden", "Weil die Summe der relativen Häufigkeiten dann über 100 % hinausgehen kann", "Weil Mehrfachantworten statistisch nicht erfassbar sind", "Weil dann keine absolute Häufigkeit mehr berechenbar ist"], correctIndex: 1, explanation: "Da bei Mehrfachantworten eine Person mehrere Kategorien gleichzeitig wählen kann, kann die Summe der relativen Häufigkeiten über 100 % steigen — eine klassische Häufigkeitstabelle mit Prozentsumme 100 % ist dann nicht mehr aussagekräftig." },
      { id: "q3", question: "Was ist der Modus einer Verteilung?", options: ["Der Wert, der die Daten in zwei gleich große Hälften teilt", "Die Summe aller Werte geteilt durch ihre Anzahl", "Der am häufigsten vorkommende Wert", "Der größte vorkommende Wert einer Verteilung"], correctIndex: 2, explanation: "Der Modus ist die Ausprägung, die in einem Datensatz am häufigsten auftritt. Er ist bereits ab Nominalskalenniveau sinnvoll bestimmbar." },
      { id: "q4", question: "Ab welchem Skalenniveau ist der Median sinnvoll berechenbar?", options: ["Erst ab Verhältnisskala", "Erst ab Intervallskala in der klinischen wie akademischen Praxis", "Bereits ab Nominalskala", "Bereits ab Ordinalskala"], correctIndex: 3, explanation: "Der Median benötigt lediglich eine sinnvolle Rangordnung der Werte, um den mittleren Wert zu bestimmen — diese Voraussetzung ist bereits ab Ordinalskalenniveau erfüllt." },
      { id: "q5", question: "Wie wird der Median bei einer geraden Anzahl von Werten bestimmt?", options: ["Als Durchschnitt der beiden mittleren Werte der sortierten Datenreihe", "Als der kleinste Wert der sortierten Datenreihe nach heutigem Kenntnisstand nicht zutreffend", "Als der am häufigsten vorkommende Wert über alle Altersgruppen hinweg", "Als die Summe aller Werte geteilt durch ihre Anzahl"], correctIndex: 0, explanation: "Bei einer geraden Anzahl von Werten gibt es keinen einzelnen mittleren Wert — der Median wird dann als arithmetischer Durchschnitt der beiden mittleren Werte der sortierten Datenreihe berechnet." },
      { id: "q6", question: "Warum ist das arithmetische Mittel erst ab Intervallskalenniveau sinnvoll berechenbar?", options: ["Weil es ausschließlich bei kategorialen Variablen anwendbar ist in Lehrbüchern gelegentlich fälschlich so dargestellt", "Weil es voraussetzt, dass Abstände zwischen den Werten gleich groß und interpretierbar sind", "Weil es keinerlei Bezug zur Summenbildung hat unabhängig von individuellen Unterschieden", "Weil es nur bei ungerader Anzahl von Werten berechnet werden kann"], correctIndex: 1, explanation: "Das arithmetische Mittel basiert auf der Summenbildung aller Werte, was voraussetzt, dass die Abstände zwischen den Werten gleich groß und sinnvoll interpretierbar sind — diese Voraussetzung ist erst ab Intervallskala gegeben." },
      { id: "q7", question: "Was bedeutet das 3. Quartil (Q3) einer Verteilung?", options: ["25 % der Werte liegen darunter", "50 % der Werte liegen darunter", "75 % der Werte liegen darunter", "100 % der Werte liegen darunter"], correctIndex: 2, explanation: "Das 3. Quartil (Q3, 75. Perzentil) markiert die Grenze, unterhalb derer 75 % der sortierten Werte einer Verteilung liegen — die übrigen 25 % liegen darüber." },
      { id: "q8", question: "Welchem Quartil entspricht der Median einer Verteilung?", options: ["Dem 1. Quartil (Q1)", "Dem 3. Quartil (Q3)", "Keinem der drei Quartile", "Dem 2. Quartil (Q2)"], correctIndex: 3, explanation: "Der Median entspricht genau dem 2. Quartil (Q2, 50. Perzentil), da beide Kennwerte die Datenreihe an derselben Stelle in zwei gleich große Hälften teilen." },
      { id: "q9", question: "Was muss bei der Angabe von Häufigkeitstabellen laut Vorlesung zusätzlich immer mit angegeben werden?", options: ["Die Stichprobengröße", "Die Namen aller beteiligten Forschenden", "Ausschließlich die absolute, nie die relative Häufigkeit", "Der genaue Erhebungsort der Befragung"], correctIndex: 0, explanation: "Ohne Angabe der Stichprobengröße ist eine Häufigkeitstabelle nicht sinnvoll interpretierbar — ein Prozentwert wie \"47 % besser\" sagt ohne Fallzahl wenig über die tatsächliche Aussagekraft des Ergebnisses aus." },
      { id: "q10", question: "Wie berechnet man bei Mehrfachantworten den prozentualen Anteil einer einzelnen genannten Maßnahme korrekt?", options: ["Anzahl der Nennungen dieser Maßnahme geteilt durch die Anzahl der Personen, multipliziert mit 100 ungeachtet der konkreten Umstände", "Anzahl der Nennungen dieser Maßnahme geteilt durch die Gesamtzahl aller abgegebenen Nennungen, multipliziert mit 100", "Anzahl der Personen geteilt durch die Anzahl der Nennungen dieser Maßnahme im Rahmen der Vorlesung", "Es ist bei Mehrfachantworten grundsätzlich keine prozentuale Auswertung möglich unabhängig vom jeweiligen Kontext"], correctIndex: 1, explanation: "Bei Mehrfachantworten wird der Anteil einer Maßnahme sinnvollerweise im Verhältnis zu allen abgegebenen Nennungen berechnet (nicht zur Personenzahl), da eine Person zu mehreren Nennungen beitragen kann." }
    ]
  }
];
