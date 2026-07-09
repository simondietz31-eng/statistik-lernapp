const CHAPTER2_TOPICS = [
  {
    id: "haeufigkeitsverteilungen",
    chapter: 2,
    order: 1,
    title: "Häufigkeitsverteilungen",
    icon: "📊",
    summary: "Einfache, klassifizierte und kumulierte Häufigkeiten - inklusive Histogramm, Polygonzug und Treppenfunktion.",
    explanation: [
      { type: "p", text: "Häufigkeitsverteilungen fassen zusammen, wie oft welcher Merkmalswert in einer Stichprobe vorkommt - die Grundlage jeder deskriptiven Auswertung." },
      { type: "p", text: "Bei der einfachen Häufigkeitsverteilung zählt man für jeden Merkmalswert $x_i$, wie oft er auftritt:" },
      { type: "formula", block: true, tex: "h_i = \\text{absolute H\\\"aufigkeit von } x_i \\qquad f_i = \\frac{h_i}{n} = \\text{relative H\\\"aufigkeit}" },
      { type: "p", text: "Dabei gilt immer $\\sum h_i = n$ und $\\sum f_i = 1$. Grafisch stellt man solche Verteilungen als Stabdiagramm (qualitative/diskrete Merkmale), Säulendiagramm oder Kreisdiagramm dar." },
      { type: "p", text: "Bei stetigen Merkmalen oder diskreten Merkmalen mit sehr vielen Werten bildet man stattdessen klassifizierte Häufigkeitsverteilungen: Die Werte werden in Klassen mit Unter- und Obergrenze zusammengefasst. Damit die Fläche eines Balkens proportional zur Häufigkeit bleibt (auch bei unterschiedlich breiten Klassen), verwendet man die Häufigkeitsdichte:" },
      { type: "formula", block: true, tex: "d_i = \\frac{h_i}{\\text{Klassenbreite}_i}" },
      { type: "p", text: "Grafisch entspricht das einem Histogramm (Rechtecke mit Höhe $d_i$) oder einem Polygonzug (Klassenmitten werden durch Geradenstücke verbunden)." },
      { type: "p", text: "Kumulierte Häufigkeitsverteilungen geben an, wie viele bzw. welcher Anteil der Merkmalsträger einen Wert kleiner oder gleich $x_i$ aufweist:" },
      { type: "formula", block: true, tex: "H_i = \\sum_{j \\leq i} h_j \\qquad F_i = \\sum_{j \\leq i} f_j" },
      { type: "p", text: "Kumulierte Verteilungen setzen mindestens Ordinalskalenniveau voraus (die Werte müssen sich sortieren lassen) und werden grafisch als Treppenfunktion dargestellt." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Bei 40 zufällig ausgewählten Kfz-Werkstätten wurden folgende Stundensätze (in Euro) erhoben: 56 (4-mal), 59 (8-mal), 61 (12-mal), 62 (8-mal), 64 (4-mal), 65 (4-mal). Berechnen Sie die relativen Häufigkeiten sowie die relativen kumulierten Häufigkeiten.",
        solution: [
          { type: "p", text: "Relative Häufigkeiten ($f_i = h_i / 40$):" },
          { type: "list", items: ["56 €: 4/40 = 0,10", "59 €: 8/40 = 0,20", "61 €: 12/40 = 0,30", "62 €: 8/40 = 0,20", "64 €: 4/40 = 0,10", "65 €: 4/40 = 0,10"] },
          { type: "p", text: "Kumulierte relative Häufigkeiten ($F_i$, laufend aufsummiert):" },
          { type: "list", items: ["56 €: 0,10", "59 €: 0,30", "61 €: 0,60", "62 €: 0,80", "64 €: 0,90", "65 €: 1,00"] }
        ]
      },
      {
        id: "ex2",
        prompt: "Die Lebensdauer von Glühbirnen wurde in folgenden Klassen erfasst: 0–600h (13,5%), 600–1.200h (50,0%), 1.200–1.800h (28,0%), 1.800–2.400h (6,5%), 2.400–3.000h (2,0%). Welche der Klassen hat die höchste Häufigkeitsdichte, wenn alle Klassenbreiten gleich groß sind (600h)?",
        solution: [
          { type: "p", text: "Bei gleicher Klassenbreite ist die Häufigkeitsdichte proportional zur relativen Häufigkeit - die Klasse mit der höchsten Häufigkeit hat also auch die höchste Dichte. Das ist die Klasse 600–1.200h mit 50,0%: $d = 0{,}50 / 600 \\approx 0{,}00083$ pro Stunde." }
        ]
      },
      {
        id: "ex3",
        prompt: "Berechnen Sie für die 40 Werkstatt-Stundensätze (56€×4, 59€×8, 61€×12, 62€×8, 64€×4, 65€×4) die absoluten kumulierten Häufigkeiten $H_i$.",
        solution: [
          { type: "p", text: "Absolute Häufigkeiten der Reihe nach: 4, 8, 12, 8, 4, 4. Kumuliert ($H_i$, laufend aufsummiert):" },
          { type: "list", items: ["56 €: 4", "59 €: 12", "61 €: 24", "62 €: 32", "64 €: 36", "65 €: 40"] },
          { type: "p", text: "Da $H_i$ die absolute kumulierte Häufigkeit ist, muss der letzte Wert stets gleich $n$ sein - hier $H_{65} = 40$, was mit den 40 erhobenen Werkstätten übereinstimmt." }
        ]
      },
      {
        id: "ex4",
        prompt: "Welche grafische Darstellung ist für die Glühbirnen-Lebensdauer (klassifizierte, stetige Daten) geeigneter: Stabdiagramm oder Histogramm? Begründen Sie.",
        solution: [
          { type: "p", text: "Ein Histogramm ist geeignet, da die Lebensdauer ein stetiges Merkmal ist, das in Klassen mit Unter- und Obergrenze zusammengefasst wurde. Das Stabdiagramm eignet sich dagegen für qualitative bzw. diskrete Merkmale mit einzelnen, klar abgrenzbaren Merkmalswerten - hier gibt es aber Klassenbreiten, sodass die Fläche der Balken (über die Häufigkeitsdichte) die Häufigkeit korrekt abbilden muss." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was gilt für die Summe aller relativen Häufigkeiten $f_i$ einer Verteilung?", options: ["Sie ergibt immer $n$", "Das hängt vom Merkmal ab", "Sie ergibt immer 1", "Sie ergibt immer 0"], correctIndex: 2, explanation: "Die relativen Häufigkeiten summieren sich per Definition immer zu 1 (bzw. 100%)." },
      { id: "q2", question: "Wann verwendet man eine klassifizierte statt einer einfachen Häufigkeitsverteilung?", options: ["Nie, das ist dasselbe", "Bei stetigen Merkmalen oder diskreten Merkmalen mit sehr vielen Werten", "Immer bei qualitativen Merkmalen", "Nur bei nominalskalierten Merkmalen"], correctIndex: 1, explanation: "Klassifizierte Verteilungen fassen viele Einzelwerte zu Klassen zusammen, um die Übersichtlichkeit zu erhöhen." },
      { id: "q3", question: "Wozu dient die Häufigkeitsdichte $d_i$?", options: ["Sie ist nur bei qualitativen Merkmalen definiert", "Sie macht die Balkenfläche proportional zur Häufigkeit, auch bei unterschiedlich breiten Klassen", "Sie ist identisch mit der kumulierten Häufigkeit", "Sie ersetzt die absolute Häufigkeit bei gleich breiten Klassen"], correctIndex: 1, explanation: "Die Häufigkeitsdichte (Häufigkeit / Klassenbreite) sorgt dafür, dass im Histogramm die Fläche - nicht die Höhe - die Häufigkeit korrekt abbildet." },
      { id: "q4", question: "Welches Skalenniveau wird mindestens benötigt, um eine kumulierte Häufigkeitsverteilung zu bilden?", options: ["Ordinalskala", "Intervallskala", "Verhältnisskala", "Nominalskala"], correctIndex: 0, explanation: "Um Werte 'kleiner oder gleich' zu summieren, müssen sie sich zumindest in eine Rangfolge bringen lassen - das erfordert Ordinalskalenniveau." },
      { id: "q5", question: "Welche grafische Darstellung passt zu einer kumulierten Häufigkeitsverteilung?", options: ["Histogramm", "Kreisdiagramm", "Polygonzug", "Treppenfunktion"], correctIndex: 3, explanation: "Die kumulierte Verteilungsfunktion springt an jedem Merkmalswert und ist dazwischen konstant - das ergibt eine Treppenfunktion." },
      { id: "q6", question: "Ein Histogramm für Klassen unterschiedlicher Breite sollte auf der y-Achse abtragen...", options: ["die Häufigkeitsdichte", "die relative Häufigkeit", "die kumulierte Häufigkeit", "die absolute Häufigkeit"], correctIndex: 0, explanation: "Nur die Häufigkeitsdichte sorgt bei unterschiedlichen Klassenbreiten dafür, dass die Rechteckfläche der tatsächlichen Häufigkeit entspricht." },
      { id: "q7", question: "Was beschreibt die absolute Häufigkeit $h_i$?", options: ["Die Summe aller relativen Häufigkeiten", "Die Klassenbreite", "Wie oft ein Merkmalswert $x_i$ in der Stichprobe auftritt", "Den Anteil eines Merkmalswerts an $n$"], correctIndex: 2, explanation: "$h_i$ zählt die absolute Anzahl der Beobachtungen mit Merkmalswert $x_i$, während $f_i = h_i/n$ die relative Häufigkeit ist." },
      { id: "q8", question: "Welche grafische Darstellung eignet sich besonders für qualitative oder diskrete Merkmale mit wenigen Ausprägungen?", options: ["Polygonzug", "Histogramm", "Treppenfunktion", "Stabdiagramm"], correctIndex: 3, explanation: "Das Stabdiagramm stellt einzelne, klar abgrenzbare Merkmalswerte dar und passt daher zu qualitativen/diskreten Merkmalen." },
      { id: "q9", question: "Ein Polygonzug entsteht, indem man...", options: ["die kumulierten Häufigkeiten als Treppenfunktion darstellt", "die Klassenmitten durch Geradenstücke verbindet", "nur die Modusklasse markiert", "die Klassenobergrenzen durch Geradenstücke verbindet"], correctIndex: 1, explanation: "Beim Polygonzug werden die Häufigkeiten (bzw. Häufigkeitsdichten) an den Klassenmitten durch Geradenstücke miteinander verbunden." },
      { id: "q10", question: "Wie verhält sich $\\sum h_i$ zur Stichprobengröße $n$?", options: ["$\\sum h_i = n$ gilt immer", "$\\sum h_i$ kann größer als $n$ sein", "$\\sum h_i$ ist unabhängig von $n$", "$\\sum h_i = 1$ gilt immer"], correctIndex: 0, explanation: "Da jede Beobachtung genau einmal gezählt wird, ergibt die Summe aller absoluten Häufigkeiten stets die Stichprobengröße $n$." }
    ]
  },
  {
    id: "lagemasse",
    chapter: 2,
    order: 2,
    title: "Lagemaße",
    icon: "🎯",
    summary: "Arithmetisches Mittel, Modus, Median und Quantile - wo sich die Werte einer Verteilung konzentrieren.",
    explanation: [
      { type: "p", text: "Lagemaße beschreiben, wo sich die Werte einer Verteilung konzentrieren - ihre 'typische Größe'." },
      { type: "p", text: "Das arithmetische Mittel ist die Summe aller Werte geteilt durch ihre Anzahl:" },
      { type: "formula", block: true, tex: "\\bar{x} = \\frac{1}{n}\\sum_{i=1}^{n} x_i \\qquad \\text{bzw. gewichtet: } \\bar{x} = \\sum_{i=1}^{k} f_i \\cdot x_i" },
      { type: "p", text: "Es setzt mindestens Intervallskalenniveau voraus, ist anschaulich, aber empfindlich gegenüber Ausreißern. Bei klassifizierten Daten rechnet man näherungsweise mit den Klassenmitten $m_i$ statt den echten Werten." },
      { type: "p", text: "Der Modus ist der am häufigsten beobachtete Wert. Er benötigt kein bestimmtes Skalenniveau (funktioniert auch bei Nominaldaten) und ist robust gegenüber Ausreißern, aber wenig aussagekräftig bei stark verteilten Daten. Bei klassifizierten Daten bestimmt man die Modusklasse (Klasse mit der höchsten Häufigkeit bzw. -dichte)." },
      { type: "p", text: "Der Median teilt die sortierte Wertereihe in zwei gleich große Hälften:" },
      { type: "formula", block: true, tex: "\\tilde{x} = \\begin{cases} x_{\\frac{n+1}{2}} & n \\text{ ungerade} \\\\[4pt] \\frac{1}{2}\\left(x_{\\frac{n}{2}} + x_{\\frac{n}{2}+1}\\right) & n \\text{ gerade} \\end{cases}" },
      { type: "p", text: "Der Median benötigt mindestens Ordinalskalenniveau und ist - anders als das arithmetische Mittel - robust gegenüber Ausreißern und eignet sich daher gut für schiefe Verteilungen." },
      { type: "p", text: "Quantile verallgemeinern den Median: Das $p$-Quantil $x_p$ teilt die Daten so, dass mindestens der Anteil $p$ kleiner oder gleich $x_p$ ist. Wichtige Spezialfälle sind Quartile ($p = 0{,}25/0{,}5/0{,}75$), Dezile ($p = 0{,}1, 0{,}2, \\dots$) und Perzentile ($p = 0{,}01, \\dots, 0{,}99$). Das zweite Quartil entspricht dem Median." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Berechnen Sie für die 40 Werkstatt-Stundensätze aus der vorigen Aufgabe (56€×4, 59€×8, 61€×12, 62€×8, 64€×4, 65€×4) den Modus und den Median.",
        solution: [
          { type: "p", text: "Modus: der häufigste Wert ist 61€ (12-mal beobachtet)." },
          { type: "p", text: "Median: bei $n=40$ (gerade) ist der Median der Mittelwert des 20. und 21. Werts der sortierten Reihe. Die kumulierten Häufigkeiten sind 4, 12, 24, 32, 36, 40 - Rang 20 und 21 fallen beide in die Klasse '61€' (Ränge 13 bis 24). Damit ist $\\tilde{x} = 61$€." }
        ]
      },
      {
        id: "ex2",
        prompt: "Für die Lebensdauer von Glühbirnen liegt folgende klassifizierte Verteilung vor: 0–600h (13,5%), 600–1.200h (50,0%), 1.200–1.800h (28,0%), 1.800–2.400h (6,5%), 2.400–3.000h (2,0%). Berechnen Sie das arithmetische Mittel näherungsweise mit den Klassenmitten.",
        solution: [
          { type: "p", text: "Klassenmitten: 300, 900, 1.500, 2.100, 2.700 Stunden." },
          { type: "formula", block: true, tex: "\\bar{x} \\approx 300 \\cdot 0{,}135 + 900 \\cdot 0{,}500 + 1500 \\cdot 0{,}280 + 2100 \\cdot 0{,}065 + 2700 \\cdot 0{,}020 = 1101 \\text{ h}" },
          { type: "p", text: "Da $\\bar{x} = 1101$h deutlich größer ist als die Modusklassen-Mitte und die Medianklassen-Mitte (beide ca. 900h), handelt es sich um eine rechtsschiefe Verteilung mit einigen sehr langlebigen Ausreißern." }
        ]
      },
      {
        id: "ex3",
        prompt: "Warum wird bei Einkommensverteilungen in der Praxis oft der Median statt des arithmetischen Mittels berichtet?",
        solution: [
          { type: "p", text: "Einkommensverteilungen sind typischerweise rechtsschief: wenige sehr hohe Einkommen ziehen das arithmetische Mittel stark nach oben. Der Median ist robust gegenüber solchen Ausreißern und beschreibt das 'typische' Einkommen daher realistischer." }
        ]
      },
      {
        id: "ex4",
        prompt: "Bestimmen Sie für die 40 Werkstatt-Stundensätze (56€×4, 59€×8, 61€×12, 62€×8, 64€×4, 65€×4) das erste Quartil $x_{0{,}25}$ mithilfe der kumulierten relativen Häufigkeiten (0,10 / 0,30 / 0,60 / 0,80 / 0,90 / 1,00).",
        solution: [
          { type: "p", text: "Das erste Quartil ist der Wert, bei dem mindestens 25% der Daten kleiner oder gleich sind. Die kumulierten relativen Häufigkeiten sind: 56€ → 0,10, 59€ → 0,30, 61€ → 0,60, ... Da 0,25 zwischen 0,10 (bei 56€) und 0,30 (bei 59€) liegt, wird der Anteil von 0,25 erstmals bei 59€ erreicht bzw. überschritten. Damit ist $x_{0{,}25} = 59$€." }
        ]
      },
      {
        id: "ex5",
        prompt: "Erklären Sie, warum der Modus bei den 40 Werkstatt-Stundensätzen (61€ mit 12 Nennungen) wenig aussagekräftig wäre, wenn die Stundensätze stattdessen fast gleichmäßig auf viele verschiedene Werte verteilt wären.",
        solution: [
          { type: "p", text: "Der Modus ist nur dann aussagekräftig, wenn sich die Häufigkeiten deutlich auf einen oder wenige Werte konzentrieren. Wären die Stundensätze fast gleichmäßig auf viele verschiedene Werte verteilt, gäbe es keinen klar dominierenden Wert - der Modus würde dann nur zufällig den knapp häufigsten Wert markieren und die 'typische Größe' der Verteilung kaum sinnvoll repräsentieren." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welches Lagemaß ist am wenigsten anfällig für Ausreißer?", options: ["Median", "Standardabweichung", "Arithmetisches Mittel", "Spannweite"], correctIndex: 0, explanation: "Der Median hängt nur von der mittleren Position der sortierten Werte ab, nicht von deren absoluter Größe." },
      { id: "q2", question: "Welches Skalenniveau wird für die Berechnung des arithmetischen Mittels mindestens benötigt?", options: ["Nominalskala", "Intervallskala", "Kein Skalenniveau nötig", "Ordinalskala"], correctIndex: 1, explanation: "Für eine sinnvolle Summenbildung braucht man mindestens Intervallskalenniveau." },
      { id: "q3", question: "Welches Lagemaß lässt sich auch für rein nominalskalierte Merkmale berechnen?", options: ["Median", "Modus", "Quartilsabstand", "Arithmetisches Mittel"], correctIndex: 1, explanation: "Der Modus (häufigster Wert) benötigt keine Rangordnung und funktioniert daher auch bei Nominaldaten wie z. B. Automarken." },
      { id: "q4", question: "Das zweite Quartil $x_{0{,}5}$ entspricht...", options: ["dem Median", "dem Modus", "der Spannweite", "dem arithmetischen Mittel"], correctIndex: 0, explanation: "Per Definition ist das 50%-Quantil identisch mit dem Median." },
      { id: "q5", question: "In einer stark rechtsschiefen Verteilung (z. B. Einkommen) gilt meist...", options: ["Mittelwert = Median = Modus", "Median > Mittelwert immer", "Mittelwert > Median > Modus", "Mittelwert < Median < Modus"], correctIndex: 2, explanation: "Wenige sehr hohe Werte ziehen den Mittelwert über den Median und den Modus." },
      { id: "q6", question: "Bei einer klassifizierten Häufigkeitsverteilung berechnet man das arithmetische Mittel näherungsweise mit...", options: ["der Klassenanzahl", "den Klassenobergrenzen", "der Häufigkeitsdichte allein", "den Klassenmitten"], correctIndex: 3, explanation: "Da die genauen Einzelwerte innerhalb einer Klasse unbekannt sind, verwendet man die Klassenmitte als Näherung." },
      { id: "q7", question: "Wie wird das gewichtete arithmetische Mittel berechnet?", options: ["$\\bar{x} = \\sum_{i=1}^{k} h_i$", "$\\bar{x} = \\sum_{i=1}^{k} f_i \\cdot x_i$", "$\\bar{x} = \\frac{n+1}{2}$", "$\\bar{x} = x_{(n)} - x_{(1)}$"], correctIndex: 1, explanation: "Beim gewichteten Mittel werden die Merkmalswerte $x_i$ mit ihren relativen Häufigkeiten $f_i$ multipliziert und aufsummiert." },
      { id: "q8", question: "Bestimmt man den Median bei einer geraden Anzahl $n$ von Werten, so...", options: ["nimmt man den größten Wert", "ist der Median nicht definiert", "mittelt man die beiden mittleren Werte der sortierten Reihe", "nimmt man immer den mittleren Wert der Liste"], correctIndex: 2, explanation: "Bei geradem $n$ existieren zwei mittlere Positionen ($n/2$ und $n/2+1$), deren Werte gemittelt werden." },
      { id: "q9", question: "Was ist die Modusklasse bei klassifizierten Daten?", options: ["Die erste Klasse der Verteilung", "Die letzte Klasse der Verteilung", "Die Klasse, die den Median enthält", "Die Klasse mit der höchsten Häufigkeit bzw. Häufigkeitsdichte"], correctIndex: 3, explanation: "Bei klassifizierten Daten ersetzt man den Einzelwert-Modus durch die Klasse mit der größten Häufigkeit bzw. Dichte." },
      { id: "q10", question: "Welche Aussage über Quantile ist korrekt?", options: ["Das erste Quartil entspricht immer dem Modus", "Nur Perzentile setzen ein Skalenniveau voraus", "Quartile, Dezile und Perzentile sind unabhängige, unverwandte Konzepte", "Sie sind alles Spezialfälle des allgemeinen $p$-Quantils"], correctIndex: 3, explanation: "Quartile ($p=0{,}25/0{,}5/0{,}75$), Dezile und Perzentile sind alle Spezialfälle des allgemeinen $p$-Quantils $x_p$." }
    ]
  },
  {
    id: "streuungsmasse",
    chapter: 2,
    order: 3,
    title: "Streuungsmaße",
    icon: "📐",
    summary: "Spannweite, Quartilsabstand, Varianz, Standardabweichung und Variationskoeffizient im Überblick.",
    explanation: [
      { type: "p", text: "Streuungsmaße beschreiben, wie stark die Werte einer Verteilung um ihre Mitte herum schwanken." },
      { type: "p", text: "Die Spannweite ist die einfachste Kennzahl - der Abstand zwischen größtem und kleinstem Wert:" },
      { type: "formula", block: true, tex: "R = x_{(n)} - x_{(1)}" },
      { type: "p", text: "Sie ist intuitiv, aber extrem empfindlich gegenüber einzelnen Ausreißern. Der zentrale Quartilsabstand betrachtet stattdessen nur die mittleren 50% der Daten und ist damit robuster:" },
      { type: "formula", block: true, tex: "IQA = x_{0{,}75} - x_{0{,}25}" },
      { type: "p", text: "Die Varianz misst die mittlere quadrierte Abweichung vom arithmetischen Mittel:" },
      { type: "formula", block: true, tex: "s^2 = \\frac{1}{n}\\sum_{i=1}^{n}(x_i - \\bar{x})^2 = \\frac{1}{n}\\sum_{i=1}^{n} x_i^2 - \\bar{x}^2" },
      { type: "p", text: "Die zweite Form (Verschiebungssatz) ist oft rechnerisch bequemer. Da Abweichungen quadriert werden, reagiert die Varianz stark auf Ausreißer. Die Standardabweichung ist die Wurzel der Varianz und hat wieder die Einheit der Ursprungsdaten:" },
      { type: "formula", block: true, tex: "s = \\sqrt{s^2}" },
      { type: "p", text: "Um die Streuung verschiedener Verteilungen mit unterschiedlichem Niveau vergleichbar zu machen (z. B. Löhne in Euro vs. Dollar), verwendet man den dimensionslosen Variationskoeffizienten - dieser setzt Verhältnisskalenniveau voraus, da er ein Verhältnis bildet:" },
      { type: "formula", block: true, tex: "v = \\frac{s}{\\bar{x}}" }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Für die 40 Werkstatt-Stundensätze (56€×4, 59€×8, 61€×12, 62€×8, 64€×4, 65€×4, mit $\\bar{x} = 61$€) ist bekannt, dass $\\sum h_i (x_i - \\bar{x})^2 = 240$. Berechnen Sie Spannweite, Varianz, Standardabweichung und Variationskoeffizienten.",
        solution: [
          { type: "p", text: "Spannweite: $R = 65 - 56 = 9$ Euro." },
          { type: "formula", block: true, tex: "s^2 = \\frac{240}{40} = 6 \\qquad s = \\sqrt{6} \\approx 2{,}449" },
          { type: "formula", block: true, tex: "v = \\frac{2{,}449}{61} \\approx 0{,}040" },
          { type: "p", text: "Die Stundensätze streuen also mit einer Standardabweichung von rund 2,45€ um den Mittelwert von 61€, was einer relativen Streuung von nur etwa 4% entspricht - die Werkstätten verlangen also recht einheitliche Preise." }
        ]
      },
      {
        id: "ex2",
        prompt: "Firma A zahlt im Schnitt 3.000€ Monatsgehalt mit einer Standardabweichung von 300€, Firma B zahlt im Schnitt 4.500€ mit einer Standardabweichung von 400€. In welcher Firma streuen die Gehälter relativ gesehen stärker?",
        solution: [
          { type: "formula", block: true, tex: "v_A = \\frac{300}{3000} = 0{,}10 \\qquad v_B = \\frac{400}{4500} \\approx 0{,}089" },
          { type: "p", text: "Obwohl Firma B die größere absolute Standardabweichung hat, ist die relative Streuung (Variationskoeffizient) in Firma A mit 10% höher als in Firma B mit ca. 8,9%." }
        ]
      },
      {
        id: "ex3",
        prompt: "Für die 40 Werkstatt-Stundensätze wurde $s^2 = 6$ berechnet. Bestimmen Sie mithilfe des Verschiebungssatzes den Wert von $\\frac{1}{n}\\sum x_i^2$, wenn $\\bar{x} = 61$ ist.",
        solution: [
          { type: "p", text: "Nach dem Verschiebungssatz gilt $s^2 = \\frac{1}{n}\\sum x_i^2 - \\bar{x}^2$, also:" },
          { type: "formula", block: true, tex: "\\frac{1}{n}\\sum x_i^2 = s^2 + \\bar{x}^2 = 6 + 61^2 = 6 + 3721 = 3727" }
        ]
      },
      {
        id: "ex4",
        prompt: "Vergleichen Sie qualitativ die Spannweite und die Standardabweichung der 40 Werkstatt-Stundensätze ($R = 9$€, $s \\approx 2{,}449$€): Warum ist die Standardabweichung deutlich kleiner als die Spannweite?",
        solution: [
          { type: "p", text: "Die Spannweite berücksichtigt nur die beiden Extremwerte (56€ und 65€) und ignoriert, wie sich die übrigen 38 Werte dazwischen verteilen. Die Standardabweichung dagegen bezieht alle 40 Werte über die mittlere quadrierte Abweichung vom Mittelwert ein. Da die meisten Stundensätze nahe am Mittelwert von 61€ liegen (v. a. 61€ und 62€ mit den höchsten Häufigkeiten), fällt die durchschnittliche Abweichung deutlich kleiner aus als der reine Extremwertabstand." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Warum ist der zentrale Quartilsabstand robuster als die Spannweite?", options: ["Er ist immer größer als die Spannweite", "Er setzt kein Skalenniveau voraus", "Er berücksichtigt alle Werte gleich stark", "Er ignoriert die äußeren 50% der Daten, in denen Ausreißer liegen können"], correctIndex: 3, explanation: "Da nur die mittleren 50% betrachtet werden, wirken sich extreme Einzelwerte nicht auf den Quartilsabstand aus." },
      { id: "q2", question: "Was bewirkt das Quadrieren der Abweichungen bei der Varianzberechnung?", options: ["Ausreißer werden automatisch entfernt", "Negative und positive Abweichungen heben sich auf", "Die Einheit bleibt unverändert", "Größere Abweichungen werden stärker gewichtet"], correctIndex: 3, explanation: "Durch das Quadrieren gehen große Abweichungen überproportional stark in die Varianz ein." },
      { id: "q3", question: "Welche Kennzahl hat wieder dieselbe Einheit wie die Ursprungsdaten (z. B. Euro)?", options: ["Die Standardabweichung", "Die Varianz", "Keine der genannten", "Der Variationskoeffizient"], correctIndex: 0, explanation: "Die Standardabweichung ist die Wurzel der Varianz und hebt damit die Quadrierung der Einheit wieder auf." },
      { id: "q4", question: "Wofür braucht man den Variationskoeffizienten?", options: ["Um die Spannweite zu berechnen", "Um Verteilungen mit unterschiedlichem Niveau bezüglich ihrer relativen Streuung zu vergleichen", "Er ersetzt den Median", "Er ist nur bei Nominaldaten definiert"], correctIndex: 1, explanation: "Als dimensionsloses Verhältnis von Standardabweichung zu Mittelwert erlaubt er Vergleiche unabhängig vom Skalenniveau der Ausgangsdaten." },
      { id: "q5", question: "Welches Skalenniveau setzt der Variationskoeffizient mindestens voraus?", options: ["Nominalskala", "Intervallskala", "Ordinalskala", "Verhältnisskala"], correctIndex: 3, explanation: "Da er als Quotient s/x̄ ein Verhältnis bildet, braucht er einen echten Nullpunkt - also Verhältnisskalenniveau." },
      { id: "q6", question: "Der Verschiebungssatz zur Varianzberechnung lautet $s^2 = ...$", options: ["$\\sum x_i^2 + \\bar{x}^2$", "$\\frac{1}{n}\\sum x_i^2 - \\bar{x}^2$", "$\\bar{x}^2 - \\frac{1}{n}\\sum x_i^2$", "$\\frac{1}{n}\\sum x_i - \\bar{x}$"], correctIndex: 1, explanation: "Die Varianz lässt sich äquivalent als mittleres Quadrat minus Quadrat des Mittels berechnen." },
      { id: "q7", question: "Wie ist die Spannweite definiert?", options: ["$R = x_{0{,}75} - x_{0{,}25}$", "$R = s^2 / \\bar{x}$", "$R = x_{(n)} - x_{(1)}$", "$R = \\bar{x} - \\tilde{x}$"], correctIndex: 2, explanation: "Die Spannweite ist der Abstand zwischen dem größten Wert $x_{(n)}$ und dem kleinsten Wert $x_{(1)}$." },
      { id: "q8", question: "Welche Aussage über die Standardabweichung ist korrekt?", options: ["Sie ist die Wurzel der Varianz", "Sie hat immer den Wert 1", "Sie ist immer kleiner als die Varianz", "Sie ist unabhängig von Ausreißern"], correctIndex: 0, explanation: "Per Definition gilt $s = \\sqrt{s^2}$." },
      { id: "q9", question: "Der zentrale Quartilsabstand (IQA) ist definiert als...", options: ["$x_{0{,}75} - x_{0{,}25}$", "$\\bar{x} - x_{0{,}5}$", "$x_{(n)} - x_{(1)}$", "$x_{0{,}5} - x_{0{,}25}$"], correctIndex: 0, explanation: "Der IQA misst den Abstand zwischen dem dritten und dem ersten Quartil und erfasst damit die mittleren 50% der Daten." },
      { id: "q10", question: "Warum reagiert die Varianz stärker auf Ausreißer als der Quartilsabstand?", options: ["Weil sie nur die mittleren 50% der Daten nutzt", "Weil sie immer negativ ist", "Weil sie alle Werte quadriert einbezieht, auch extreme", "Weil sie keine Einheit hat"], correctIndex: 2, explanation: "Da in die Varianz jede quadrierte Abweichung eingeht, wirken sich große Abweichungen (Ausreißer) überproportional stark aus." }
    ]
  },
  {
    id: "schiefe-woelbung",
    chapter: 2,
    order: 4,
    title: "Schiefe und Wölbung",
    icon: "📈",
    summary: "Symmetrisch, rechts- oder linksschief? Und wie spitz oder flach eine Verteilung wirklich ist.",
    explanation: [
      { type: "p", text: "Schiefe und Wölbung beschreiben die Form einer Verteilung genauer als reine Lage- und Streuungsmaße." },
      { type: "p", text: "Die Schiefe gibt an, ob eine Verteilung symmetrisch ist oder einen längeren 'Schwanz' auf einer Seite hat:" },
      { type: "list", items: [
        "Symmetrisch: Mittelwert ≈ Median ≈ Modus, Schiefekoeffizient ≈ 0.",
        "Rechtsschief (linkssteil): Mittelwert > Median > Modus, ein langer Schwanz zieht sich nach rechts (z. B. Einkommen, Vermögen). Schiefekoeffizient > 0.",
        "Linksschief (rechtssteil): Mittelwert < Median < Modus, langer Schwanz nach links. Schiefekoeffizient < 0."
      ]},
      { type: "formula", block: true, tex: "\\gamma_1 = \\frac{\\frac{1}{n}\\sum_{i=1}^{n}(x_i-\\bar{x})^3}{s^3}" },
      { type: "p", text: "Die Wölbung (Kurtosis) beschreibt, wie spitz oder flach eine Verteilung im Vergleich zur Normalverteilung ist:" },
      { type: "formula", block: true, tex: "\\gamma_2 = \\frac{\\frac{1}{n}\\sum_{i=1}^{n}(x_i-\\bar{x})^4}{s^4}" },
      { type: "list", items: [
        "$\\gamma_2 = 3$: mittelmäßig gewölbt (mesokurtisch), wie die Normalverteilung.",
        "$\\gamma_2 > 3$: stark gewölbt (leptokurtisch) - spitzer Gipfel, aber auch 'fettere' Ränder.",
        "$\\gamma_2 < 3$: flach gewölbt (platykurtisch) - breiterer, flacherer Gipfel."
      ]}
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Für die Glühbirnen-Lebensdauer wurde berechnet: arithmetisches Mittel ≈ 1.101h, Median ≈ 900h, Modus ≈ 900h. Welche Art von Schiefe liegt vor?",
        solution: [
          { type: "p", text: "Da Mittelwert (1.101h) größer ist als Median und Modus (jeweils ca. 900h), liegt eine rechtsschiefe Verteilung vor: Der Großteil der Glühbirnen fällt relativ früh aus, aber einige besonders langlebige Exemplare ziehen den Mittelwert nach oben." }
        ]
      },
      {
        id: "ex2",
        prompt: "Eine Verteilung hat einen Wölbungskoeffizienten von $\\gamma_2 = 4{,}2$. Ist sie im Vergleich zur Normalverteilung eher spitzer oder flacher?",
        solution: [
          { type: "p", text: "Da $\\gamma_2 = 4{,}2 > 3$ ist, ist die Verteilung leptokurtisch, also spitzer gewölbt als die Normalverteilung (mit tendenziell mehr Ausreißern in den Rändern)." }
        ]
      },
      {
        id: "ex3",
        prompt: "Eine Verteilung hat einen Wölbungskoeffizienten von $\\gamma_2 = 2{,}1$. Wie ist sie im Vergleich zur Normalverteilung einzuordnen?",
        solution: [
          { type: "p", text: "Da $\\gamma_2 = 2{,}1 < 3$ ist, handelt es sich um eine platykurtische Verteilung - sie ist flacher gewölbt als die Normalverteilung, mit einem breiteren, flacheren Gipfel." }
        ]
      },
      {
        id: "ex4",
        prompt: "Welches Vorzeichen erwarten Sie für den Schiefekoeffizienten $\\gamma_1$ der Glühbirnen-Lebensdauer (arithmetisches Mittel ≈ 1.101h > Median ≈ 900h)? Begründen Sie mit der Definition von $\\gamma_1$.",
        solution: [
          { type: "p", text: "Da Mittelwert > Median > Modus gilt, handelt es sich um eine rechtsschiefe Verteilung, für die per Definition $\\gamma_1 > 0$ gilt. Das passt auch zur Formel: Weil einige besonders langlebige Glühbirnen weit über dem Mittelwert liegen, dominieren positive, stark ins Gewicht fallende kubierte Abweichungen $(x_i - \\bar{x})^3$ den Zähler von $\\gamma_1$." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "In einer rechtsschiefen Verteilung gilt typischerweise...", options: ["Mittelwert < Median < Modus", "Mittelwert > Median > Modus", "Mittelwert = Median = Modus", "Modus existiert nicht"], correctIndex: 1, explanation: "Ein langer rechter Schwanz zieht den Mittelwert über Median und Modus." },
      { id: "q2", question: "Bei einer perfekt symmetrischen Verteilung ist der Schiefekoeffizient ungefähr...", options: ["1", "3", "-1", "0"], correctIndex: 3, explanation: "Symmetrische Verteilungen haben per Definition (annähernd) keine Schiefe, also $\\gamma_1 \\approx 0$." },
      { id: "q3", question: "Welchen Referenzwert nutzt man beim Wölbungskoeffizienten, um mit der Normalverteilung zu vergleichen?", options: ["2", "0", "1", "3"], correctIndex: 3, explanation: "Die Normalverteilung hat einen Wölbungskoeffizienten von genau 3 - das ist der Bezugspunkt für meso-/lepto-/platykurtisch." },
      { id: "q4", question: "Eine leptokurtische Verteilung ist im Vergleich zur Normalverteilung...", options: ["spitzer mit tendenziell mehr Ausreißern", "immer symmetrisch", "flacher", "immer schief"], correctIndex: 0, explanation: "Leptokurtisch ($\\gamma_2 > 3$) bedeutet einen spitzeren Gipfel und ausgeprägtere Ränder." },
      { id: "q5", question: "Womit wird die Schiefe berechnet?", options: ["Mit den kubierten (3. Potenz) Abweichungen vom Mittelwert", "Nur mit dem Modus", "Mit den quadrierten Abweichungen vom Mittelwert", "Mit der Spannweite"], correctIndex: 0, explanation: "Der Schiefekoeffizient nutzt die dritte Potenz der Abweichungen, geteilt durch die dritte Potenz der Standardabweichung." },
      { id: "q6", question: "In einer linksschiefen (rechtssteilen) Verteilung gilt typischerweise...", options: ["Mittelwert < Median < Modus", "Mittelwert > Median > Modus", "Der Modus ist undefiniert", "Mittelwert = Median = Modus immer exakt"], correctIndex: 0, explanation: "Bei Linksschiefe zieht ein langer linker Schwanz den Mittelwert unter Median und Modus." },
      { id: "q7", question: "Was ist ein mesokurtischer Wölbungswert?", options: ["$\\gamma_2 > 3$", "$\\gamma_2 < 3$", "$\\gamma_2 = 3$", "$\\gamma_2 = 0$"], correctIndex: 2, explanation: "Mesokurtisch bedeutet eine Wölbung wie die Normalverteilung, also $\\gamma_2 = 3$." },
      { id: "q8", question: "Eine platykurtische Verteilung hat im Vergleich zur Normalverteilung...", options: ["eine stärkere Schiefe", "einen spitzeren Gipfel", "gar keinen Gipfel", "einen breiteren, flacheren Gipfel"], correctIndex: 3, explanation: "Platykurtisch ($\\gamma_2 < 3$) beschreibt eine flachere, breitere Verteilung als die Normalverteilung." },
      { id: "q9", question: "Welche Aussage über den Zusammenhang von Schiefe und den drei klassischen Lagemaßen ist korrekt?", options: ["Bei Linksschiefe ist der Median immer der größte der drei Werte", "Bei Rechtsschiefe ist der Modus immer größer als der Mittelwert", "Bei Schiefe = 0 sind Mittelwert, Median und Modus näherungsweise gleich", "Schiefe hat keinen Zusammenhang mit Lagemaßen"], correctIndex: 2, explanation: "Symmetrische (nicht-schiefe) Verteilungen zeichnen sich dadurch aus, dass Mittelwert, Median und Modus etwa zusammenfallen." },
      { id: "q10", question: "Der Wölbungskoeffizient $\\gamma_2$ wird berechnet als...", options: ["$\\frac{1}{n}\\sum(x_i-\\bar{x})^2$", "$\\frac{\\frac{1}{n}\\sum(x_i-\\bar{x})^4}{s^4}$", "$\\frac{\\frac{1}{n}\\sum(x_i-\\bar{x})^3}{s^3}$", "$\\frac{s}{\\bar{x}}$"], correctIndex: 1, explanation: "Die Wölbung nutzt die vierte Potenz der Abweichungen vom Mittelwert, normiert durch $s^4$." }
    ]
  },
  {
    id: "konzentrationsmessung",
    chapter: 2,
    order: 5,
    title: "Konzentrationsmessung",
    icon: "💰",
    summary: "Lorenzkurve und Gini-Koeffizient: wie ungleich eine Summe auf die Merkmalsträger verteilt ist.",
    explanation: [
      { type: "p", text: "Konzentrationsmaße untersuchen, wie ungleich eine Summengröße (z. B. Einkommen, Vermögen, Bonuszahlungen) auf die Merkmalsträger verteilt ist: Fällt der größte Teil der Summe auf wenige Merkmalsträger, oder ist sie gleichmäßig verteilt?" },
      { type: "p", text: "Die Lorenzkurve stellt dazu den kumulierten Anteil der Merkmalsträger (x-Achse) dem kumulierten Anteil an der Summe (y-Achse) gegenüber. Bei völliger Gleichverteilung liegt die Lorenzkurve genau auf der Diagonalen; je weiter sie sich davon nach unten wölbt, desto größer die Konzentration." },
      { type: "p", text: "Der Gini-Koeffizient misst die Fläche zwischen Lorenzkurve und Diagonale als Kennzahl:" },
      { type: "formula", block: true, tex: "G = 1 - \\sum_{i=1}^{n} (F_{i-1}^{*} + F_i^{*}) \\cdot f_i \\qquad \\text{mit } F_0^{*} = 0" },
      { type: "p", text: "wobei $F_i^{*}$ die kumulierten relativen Anteile an der Summe (z. B. am Gesamteinkommen) bezeichnet. Es gilt $0 \\leq G \\leq \\frac{n-1}{n}$: $G = 0$ bedeutet Gleichverteilung, der Maximalwert bedeutet maximale Konzentration (eine Einheit erhält alles). Da das Maximum von $n$ abhängt, normiert man häufig:" },
      { type: "formula", block: true, tex: "G^{*} = \\frac{n}{n-1} \\cdot G" },
      { type: "p", text: "Der normierte Gini-Koeffizient $G^*$ liegt immer zwischen 0 und 1 und ist damit auch zwischen Stichproben unterschiedlicher Größe vergleichbar." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Eine Firma zahlt an 5 Mitarbeitende folgende Bonuszahlungen: A: 400€, B: 300€, C: 1.500€, D: 1.000€, E: 1.800€ (Gesamtsumme 5.000€). Sortieren Sie aufsteigend und geben Sie die kumulierten relativen Anteile an Mitarbeitenden und an der Bonussumme an.",
        solution: [
          { type: "p", text: "Sortiert aufsteigend: 300, 400, 1.000, 1.500, 1.800 (Euro)." },
          { type: "list", items: [
            "1 von 5 (20%) Mitarbeitenden: 300€ = 6% der Summe",
            "2 von 5 (40%): 700€ = 14% der Summe",
            "3 von 5 (60%): 1.700€ = 34% der Summe",
            "4 von 5 (80%): 3.200€ = 64% der Summe",
            "5 von 5 (100%): 5.000€ = 100% der Summe"
          ]},
          { type: "p", text: "Man erkennt bereits hier eine gewisse Konzentration: Die unteren 60% der Mitarbeitenden erhalten nur 34% der gesamten Bonussumme." }
        ]
      },
      {
        id: "ex2",
        prompt: "Für die Bonuszahlungen aus der vorigen Aufgabe ergibt sich ein Gini-Koeffizient von $G \\approx 0{,}24$. Berechnen Sie den normierten Gini-Koeffizienten für $n = 5$ und interpretieren Sie kurz.",
        solution: [
          { type: "formula", block: true, tex: "G^{*} = \\frac{5}{5-1} \\cdot 0{,}24 = 0{,}30" },
          { type: "p", text: "Ein normierter Gini-Koeffizient von 0,30 zeigt eine moderate Konzentration der Bonuszahlungen an - deutlich von der Gleichverteilung ($G^*=0$) entfernt, aber weit von maximaler Konzentration ($G^*=1$)." }
        ]
      },
      {
        id: "ex3",
        prompt: "Berechnen Sie für $n = 5$ (Bonuszahlungen-Beispiel) den theoretischen Maximalwert des unnormierten Gini-Koeffizienten $G$.",
        solution: [
          { type: "p", text: "Der Maximalwert des unnormierten Gini-Koeffizienten ist $\\frac{n-1}{n}$. Für $n=5$:" },
          { type: "formula", block: true, tex: "G_{max} = \\frac{5-1}{5} = 0{,}8" },
          { type: "p", text: "Dieser Wert würde erreicht, wenn eine einzige Person die gesamte Bonussumme erhält und alle anderen leer ausgehen (maximale Konzentration)." }
        ]
      },
      {
        id: "ex4",
        prompt: "Bei den Bonuszahlungen erhalten die unteren 60% der Mitarbeitenden nur 34% der Bonussumme. Formulieren Sie, was dies für die Lage der Lorenzkurve relativ zur Diagonalen bedeutet.",
        solution: [
          { type: "p", text: "Bei perfekter Gleichverteilung müssten die unteren 60% der Mitarbeitenden auch 60% der Summe erhalten - die Lorenzkurve läge dann bei (0,6; 0,6) auf der Diagonalen. Da sie tatsächlich nur 34% erhalten, liegt der Punkt (0,6; 0,34) deutlich unterhalb der Diagonalen. Die Lorenzkurve wölbt sich also nach unten, was auf eine Konzentration der Bonuszahlungen auf die oberen Mitarbeitenden hinweist." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie sieht die Lorenzkurve bei perfekter Gleichverteilung aus?", options: ["Sie liegt auf der Diagonalen", "Sie ist eine Parabel", "Sie verläuft entlang der x-Achse", "Sie existiert nicht"], correctIndex: 0, explanation: "Bei Gleichverteilung entspricht der kumulierte Anteil an der Summe immer genau dem kumulierten Anteil an den Merkmalsträgern - das ergibt die Diagonale." },
      { id: "q2", question: "Was bedeutet ein Gini-Koeffizient von $G = 0$?", options: ["Negative Werte in den Daten", "Perfekte Gleichverteilung", "Maximale Konzentration", "Die Daten sind fehlerhaft"], correctIndex: 1, explanation: "$G=0$ heißt, die Lorenzkurve liegt auf der Diagonalen - jeder Merkmalsträger trägt anteilig gleich viel zur Summe bei." },
      { id: "q3", question: "Warum normiert man den Gini-Koeffizienten zu $G^*$?", options: ["Um negative Werte zu vermeiden", "Weil $G$ sonst größer als 1 werden kann", "Damit er unabhängig von $n$ stets zwischen 0 und 1 liegt und vergleichbar wird", "Das ist nur bei qualitativen Merkmalen nötig"], correctIndex: 2, explanation: "Der unnormierte Gini-Koeffizient hat ein von $n$ abhängiges Maximum $(n-1)/n$ - die Normierung macht ihn über verschiedene Stichprobengrößen hinweg vergleichbar." },
      { id: "q4", question: "Was zeigt eine Lorenzkurve, die stark unterhalb der Diagonalen verläuft?", options: ["Hohe Konzentration der Summengröße auf wenige Merkmalsträger", "Dass der Gini-Koeffizient negativ ist", "Gleichverteilung", "Einen Rechenfehler"], correctIndex: 0, explanation: "Je weiter die Lorenzkurve von der Diagonale abweicht, desto konzentrierter ist die Verteilung." },
      { id: "q5", question: "Welche Formel definiert den normierten Gini-Koeffizienten?", options: ["$G^* = G \\cdot n$", "$G^* = \\frac{n-1}{n} \\cdot G$", "$G^* = \\frac{n}{n-1} \\cdot G$", "$G^* = 1 - G$"], correctIndex: 2, explanation: "Die Normierung erfolgt durch Multiplikation mit $n/(n-1)$." },
      { id: "q6", question: "Was untersuchen Konzentrationsmaße?", options: ["Den linearen Zusammenhang zweier Merkmale", "Wie ungleich eine Summengröße auf die Merkmalsträger verteilt ist", "Die Streuung um den Mittelwert", "Die Schiefe einer Verteilung"], correctIndex: 1, explanation: "Konzentrationsmaße wie Lorenzkurve und Gini-Koeffizient prüfen, ob eine Summengröße (z.B. Einkommen) gleichmäßig oder auf wenige Merkmalsträger konzentriert verteilt ist." },
      { id: "q7", question: "Was stellt die Lorenzkurve auf den beiden Achsen gegenüber?", options: ["Absolute und relative Häufigkeit", "Kumulierten Anteil der Merkmalsträger und kumulierten Anteil an der Summe", "Mittelwert und Median", "Varianz und Standardabweichung"], correctIndex: 1, explanation: "Die x-Achse zeigt den kumulierten Anteil der Merkmalsträger, die y-Achse den kumulierten Anteil an der Summengröße." },
      { id: "q8", question: "Der theoretische Maximalwert des unnormierten Gini-Koeffizienten $G$ beträgt...", options: ["1", "$n$", "0", "$\\frac{n-1}{n}$"], correctIndex: 3, explanation: "Da $G$ von $n$ abhängt, liegt sein Maximum bei $\\frac{n-1}{n}$ - deshalb normiert man mit $G^*$ auf den Bereich [0,1]." },
      { id: "q9", question: "Wofür bezeichnet man $F_i^{*}$ in der Gini-Formel?", options: ["Die Klassenbreite", "Die absolute Häufigkeit", "Die kumulierten relativen Häufigkeiten der Merkmalsträger", "Die kumulierten relativen Anteile an der Summengröße"], correctIndex: 3, explanation: "$F_i^{*}$ bezeichnet den kumulierten relativen Anteil an der Summe (z.B. am Gesamteinkommen), im Unterschied zu den kumulierten Anteilen an den Merkmalsträgern." },
      { id: "q10", question: "Was bedeutet maximale Konzentration im Sinne des Gini-Koeffizienten?", options: ["Die Lorenzkurve liegt auf der Diagonalen", "Der Gini-Koeffizient ist negativ", "Eine einzige Einheit erhält die gesamte Summe, alle anderen nichts", "Alle Merkmalsträger erhalten den gleichen Anteil"], correctIndex: 2, explanation: "Maximale Konzentration bedeutet, dass die gesamte Summengröße bei einem einzigen Merkmalsträger liegt." }
    ]
  },
  {
    id: "korrelationsmasse",
    chapter: 2,
    order: 6,
    title: "Korrelationsmaße",
    icon: "🔗",
    summary: "Kovarianz, Bravais-Pearson, Spearman und Kontingenzkoeffizient - und warum Korrelation nicht Kausalität ist.",
    explanation: [
      { type: "p", text: "Korrelationsmaße untersuchen den (linearen) Zusammenhang zwischen zwei Merkmalen." },
      { type: "p", text: "Die Kovarianz misst, ob sich zwei Merkmale gemeinsam in die gleiche oder entgegengesetzte Richtung bewegen:" },
      { type: "formula", block: true, tex: "\\text{Cov}(X,Y) = \\frac{1}{n}\\sum_{i=1}^{n}(x_i - \\bar{x})(y_i - \\bar{y})" },
      { type: "p", text: "Die Kovarianz ist aber nicht normiert (ihr Wertebereich hängt von den Einheiten der Merkmale ab) und daher schwer zu interpretieren. Der Korrelationskoeffizient von Bravais-Pearson normiert die Kovarianz auf einen Wertebereich von -1 bis 1 (setzt mindestens Intervallskalenniveau bei beiden Merkmalen voraus):" },
      { type: "formula", block: true, tex: "r = \\frac{\\text{Cov}(X,Y)}{s_X \\cdot s_Y}, \\qquad -1 \\leq r \\leq 1" },
      { type: "list", items: [
        "$r = 0$: kein linearer Zusammenhang",
        "$r = 1$: perfekter positiver linearer Zusammenhang",
        "$r = -1$: perfekter negativer linearer Zusammenhang",
        "$r > 0$: die Merkmale bewegen sich tendenziell gleichgerichtet, $r < 0$: gegenläufig"
      ]},
      { type: "p", text: "Für ordinalskalierte Merkmale (z. B. Ranglisten) verwendet man stattdessen den Rangkorrelationskoeffizienten von Spearman: Man ersetzt die Werte durch ihre Ränge und wendet darauf die Pearson-Formel an. Für rein nominalskalierte Merkmale gibt es den Kontingenzkoeffizienten, der den Zusammenhang zwischen Kategorien misst." },
      { type: "p", text: "Wichtige Einschränkung: Korrelation bedeutet nicht Kausalität! Ein hoher Korrelationskoeffizient kann auch durch umgekehrte Wirkungsrichtung oder einen gemeinsamen Drittfaktor entstehen." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Unternehmen hat für 5 Monate die Werbeausgaben (in 1.000€: 2, 3, 5, 4, 6) und den Umsatz (in 1.000€: 20, 25, 34, 30, 41) erfasst. Der Mittelwert der Werbeausgaben ist 4, der des Umsatzes 30. Es gilt $\\sum(x_i-\\bar{x})(y_i-\\bar{y}) = 47$, $s_X^2 = 2$ und $s_Y^2 = 51{,}2$ (bezogen auf $n=5$). Berechnen Sie Kovarianz und Korrelationskoeffizienten und interpretieren Sie das Ergebnis.",
        solution: [
          { type: "formula", block: true, tex: "\\text{Cov}(X,Y) = \\frac{47}{5} = 9{,}4" },
          { type: "formula", block: true, tex: "r = \\frac{9{,}4}{\\sqrt{2}\\cdot\\sqrt{51{,}2}} = \\frac{9{,}4}{\\sqrt{102{,}4}} \\approx \\frac{9{,}4}{10{,}12} \\approx 0{,}93" },
          { type: "p", text: "Mit $r \\approx 0{,}93$ besteht ein sehr starker positiver linearer Zusammenhang zwischen Werbeausgaben und Umsatz - höhere Werbeausgaben gehen in dieser Stichprobe mit höherem Umsatz einher. Das bedeutet aber nicht zwangsläufig, dass die Werbung ursächlich für den Umsatz verantwortlich ist (Korrelation ≠ Kausalität)." }
        ]
      },
      {
        id: "ex2",
        prompt: "Zwei Analysten stellen fest, dass die Anzahl verkaufter Eiscremes und die Anzahl der Sonnenbrände in einer Stadt stark positiv korrelieren. Bedeutet das, dass Eiscreme Sonnenbrände verursacht? Erklären Sie.",
        solution: [
          { type: "p", text: "Nein. Beide Größen werden vermutlich durch einen gemeinsamen Drittfaktor beeinflusst: warmes, sonniges Wetter führt sowohl zu mehr Eiscremeverkäufen als auch zu mehr Sonnenbrand. Die Korrelation ist also durch eine gemeinsame Ursache erklärbar, nicht durch einen direkten kausalen Zusammenhang zwischen den beiden Merkmalen selbst." }
        ]
      },
      {
        id: "ex3",
        prompt: "Für das Werbeausgaben-Umsatz-Beispiel gilt $s_X^2 = 2$ (bezogen auf $n=5$). Berechnen Sie die Standardabweichung $s_X$ der Werbeausgaben.",
        solution: [
          { type: "formula", block: true, tex: "s_X = \\sqrt{s_X^2} = \\sqrt{2} \\approx 1{,}414" },
          { type: "p", text: "Die Werbeausgaben streuen also mit einer Standardabweichung von rund 1.414€ um ihren Mittelwert von 4.000€." }
        ]
      },
      {
        id: "ex4",
        prompt: "Angenommen, für einen anderen Datensatz ergäbe sich exakt $r = -1$. Was würde das über den Zusammenhang der beiden Merkmale aussagen, und wie würde sich das von $r \\approx 0{,}93$ im Werbeausgaben-Beispiel unterscheiden?",
        solution: [
          { type: "p", text: "$r = -1$ würde einen perfekten negativen linearen Zusammenhang bedeuten: Steigt das eine Merkmal, fällt das andere exakt proportional. Im Werbeausgaben-Beispiel liegt dagegen $r \\approx 0{,}93$ vor - ein sehr starker, aber positiver linearer Zusammenhang (beide Merkmale steigen gemeinsam), der zudem nicht perfekt ist, da nicht der gesamte Zusammenhang durch eine exakte Gerade erklärt wird." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welchen Wertebereich hat der Korrelationskoeffizient von Bravais-Pearson?", options: ["0 bis 1", "-∞ bis ∞", "0 bis 100", "-1 bis 1"], correctIndex: 3, explanation: "Der Pearson-Korrelationskoeffizient ist auf das Intervall [-1, 1] normiert." },
      { id: "q2", question: "Was ist der Hauptnachteil der Kovarianz gegenüber dem Korrelationskoeffizienten?", options: ["Sie setzt Nominalskala voraus", "Sie kann nicht negativ werden", "Sie ist nicht normiert und schwer zwischen verschiedenen Datensätzen vergleichbar", "Sie ist immer 0"], correctIndex: 2, explanation: "Die Kovarianz hängt von den Maßeinheiten der Merkmale ab, während der Korrelationskoeffizient dimensionslos und normiert ist." },
      { id: "q3", question: "Welches Korrelationsmaß verwendet man für ordinalskalierte Daten (z. B. Ranglisten)?", options: ["Kontingenzkoeffizient", "Spearman-Rangkorrelationskoeffizient", "Variationskoeffizient", "Bravais-Pearson-Korrelationskoeffizient"], correctIndex: 1, explanation: "Der Spearman-Koeffizient wendet die Pearson-Logik auf Ränge an und passt daher zu ordinalskalierten Merkmalen." },
      { id: "q4", question: "Ein Korrelationskoeffizient von $r=0$ bedeutet...", options: ["Es gibt keinen linearen Zusammenhang (ein nicht-linearer Zusammenhang ist trotzdem möglich)", "Die Merkmale sind identisch", "Ein Rechenfehler ist aufgetreten", "Es gibt gar keinen Zusammenhang zwischen den Merkmalen"], correctIndex: 0, explanation: "Pearson misst nur lineare Zusammenhänge - ein starker nicht-linearer Zusammenhang (z. B. U-förmig) kann trotzdem vorliegen." },
      { id: "q5", question: "'Korrelation impliziert nicht Kausalität' bedeutet:", options: ["Eine hohe Korrelation beweist immer eine Ursache-Wirkungs-Beziehung", "Eine Korrelation kann auch durch Zufall, umgekehrte Wirkungsrichtung oder einen Drittfaktor entstehen", "Korrelationskoeffizienten sind immer falsch berechnet", "Korrelation und Kausalität sind dasselbe Konzept"], correctIndex: 1, explanation: "Ein statistischer Zusammenhang allein beweist keine kausale Beziehung - es kann auch Drittfaktoren oder Zufall geben." },
      { id: "q6", question: "Welches Maß eignet sich für den Zusammenhang zweier rein nominalskalierter Merkmale?", options: ["Bravais-Pearson-Korrelationskoeffizient", "Variationskoeffizient", "Kontingenzkoeffizient", "Schiefekoeffizient"], correctIndex: 2, explanation: "Der Kontingenzkoeffizient ist speziell für den Zusammenhang zwischen Kategorien (Nominalskala) konzipiert." },
      { id: "q7", question: "Wie ist die Kovarianz zweier Merkmale definiert?", options: ["$\\frac{s}{\\bar{x}}$", "$\\sum x_i \\cdot y_i$", "$\\frac{1}{n}\\sum(x_i-\\bar{x})^2$", "$\\frac{1}{n}\\sum(x_i-\\bar{x})(y_i-\\bar{y})$"], correctIndex: 3, explanation: "Die Kovarianz ist der Mittelwert der Produkte der Abweichungen beider Merkmale von ihren jeweiligen Mittelwerten." },
      { id: "q8", question: "Welches Skalenniveau setzt der Korrelationskoeffizient von Bravais-Pearson bei beiden Merkmalen mindestens voraus?", options: ["Ordinalskala", "Intervallskala", "Nominalskala", "Kein Skalenniveau nötig"], correctIndex: 1, explanation: "Da die Formel auf Mittelwerten und Abweichungen beruht, ist mindestens Intervallskalenniveau erforderlich." },
      { id: "q9", question: "Ein Korrelationskoeffizient von $r < 0$ bedeutet, dass sich die Merkmale...", options: ["immer identisch sind", "gleichgerichtet bewegen", "gegenläufig bewegen", "gar nicht bewegen"], correctIndex: 2, explanation: "Ein negativer Korrelationskoeffizient zeigt an, dass ein Merkmal tendenziell steigt, während das andere fällt." },
      { id: "q10", question: "Wie wird der Spearman-Rangkorrelationskoeffizient berechnet?", options: ["Man ersetzt die Werte durch ihre Ränge und wendet darauf die Pearson-Formel an", "Man zählt die Anzahl gleicher Kategorien", "Man berechnet nur die Kovarianz ohne Normierung", "Man wendet die Pearson-Formel direkt auf die Originalwerte an"], correctIndex: 0, explanation: "Beim Spearman-Koeffizienten werden zunächst Ränge gebildet, auf die dann die gewöhnliche Pearson-Formel angewendet wird." }
    ]
  }
];
