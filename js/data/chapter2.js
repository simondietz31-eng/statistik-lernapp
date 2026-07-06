const CHAPTER2_TOPICS = [
  {
    id: "haeufigkeitsverteilungen",
    chapter: 2,
    order: 1,
    title: "Häufigkeitsverteilungen",
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
      }
    ],
    quiz: [
      { id: "q1", question: "Was gilt für die Summe aller relativen Häufigkeiten $f_i$ einer Verteilung?", options: ["Sie ergibt immer $n$", "Sie ergibt immer 1", "Sie ergibt immer 0", "Das hängt vom Merkmal ab"], correctIndex: 1, explanation: "Die relativen Häufigkeiten summieren sich per Definition immer zu 1 (bzw. 100%)." },
      { id: "q2", question: "Wann verwendet man eine klassifizierte statt einer einfachen Häufigkeitsverteilung?", options: ["Immer bei qualitativen Merkmalen", "Bei stetigen Merkmalen oder diskreten Merkmalen mit sehr vielen Werten", "Nur bei nominalskalierten Merkmalen", "Nie, das ist dasselbe"], correctIndex: 1, explanation: "Klassifizierte Verteilungen fassen viele Einzelwerte zu Klassen zusammen, um die Übersichtlichkeit zu erhöhen." },
      { id: "q3", question: "Wozu dient die Häufigkeitsdichte $d_i$?", options: ["Sie ersetzt die absolute Häufigkeit bei gleich breiten Klassen", "Sie macht die Balkenfläche proportional zur Häufigkeit, auch bei unterschiedlich breiten Klassen", "Sie ist nur bei qualitativen Merkmalen definiert", "Sie ist identisch mit der kumulierten Häufigkeit"], correctIndex: 1, explanation: "Die Häufigkeitsdichte (Häufigkeit / Klassenbreite) sorgt dafür, dass im Histogramm die Fläche - nicht die Höhe - die Häufigkeit korrekt abbildet." },
      { id: "q4", question: "Welches Skalenniveau wird mindestens benötigt, um eine kumulierte Häufigkeitsverteilung zu bilden?", options: ["Nominalskala", "Ordinalskala", "Intervallskala", "Verhältnisskala"], correctIndex: 1, explanation: "Um Werte 'kleiner oder gleich' zu summieren, müssen sie sich zumindest in eine Rangfolge bringen lassen - das erfordert Ordinalskalenniveau." },
      { id: "q5", question: "Welche grafische Darstellung passt zu einer kumulierten Häufigkeitsverteilung?", options: ["Histogramm", "Kreisdiagramm", "Treppenfunktion", "Polygonzug"], correctIndex: 2, explanation: "Die kumulierte Verteilungsfunktion springt an jedem Merkmalswert und ist dazwischen konstant - das ergibt eine Treppenfunktion." },
      { id: "q6", question: "Ein Histogramm für Klassen unterschiedlicher Breite sollte auf der y-Achse abtragen...", options: ["die absolute Häufigkeit", "die relative Häufigkeit", "die Häufigkeitsdichte", "die kumulierte Häufigkeit"], correctIndex: 2, explanation: "Nur die Häufigkeitsdichte sorgt bei unterschiedlichen Klassenbreiten dafür, dass die Rechteckfläche der tatsächlichen Häufigkeit entspricht." }
    ]
  },
  {
    id: "lagemasse",
    chapter: 2,
    order: 2,
    title: "Lagemaße",
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
      }
    ],
    quiz: [
      { id: "q1", question: "Welches Lagemaß ist am wenigsten anfällig für Ausreißer?", options: ["Arithmetisches Mittel", "Median", "Spannweite", "Standardabweichung"], correctIndex: 1, explanation: "Der Median hängt nur von der mittleren Position der sortierten Werte ab, nicht von deren absoluter Größe." },
      { id: "q2", question: "Welches Skalenniveau wird für die Berechnung des arithmetischen Mittels mindestens benötigt?", options: ["Nominalskala", "Ordinalskala", "Intervallskala", "Kein Skalenniveau nötig"], correctIndex: 2, explanation: "Für eine sinnvolle Summenbildung braucht man mindestens Intervallskalenniveau." },
      { id: "q3", question: "Welches Lagemaß lässt sich auch für rein nominalskalierte Merkmale berechnen?", options: ["Arithmetisches Mittel", "Median", "Modus", "Quartilsabstand"], correctIndex: 2, explanation: "Der Modus (häufigster Wert) benötigt keine Rangordnung und funktioniert daher auch bei Nominaldaten wie z. B. Automarken." },
      { id: "q4", question: "Das zweite Quartil $x_{0{,}5}$ entspricht...", options: ["dem Modus", "dem Median", "dem arithmetischen Mittel", "der Spannweite"], correctIndex: 1, explanation: "Per Definition ist das 50%-Quantil identisch mit dem Median." },
      { id: "q5", question: "In einer stark rechtsschiefen Verteilung (z. B. Einkommen) gilt meist...", options: ["Mittelwert < Median < Modus", "Mittelwert > Median > Modus", "Mittelwert = Median = Modus", "Median > Mittelwert immer"], correctIndex: 1, explanation: "Wenige sehr hohe Werte ziehen den Mittelwert über den Median und den Modus." },
      { id: "q6", question: "Bei einer klassifizierten Häufigkeitsverteilung berechnet man das arithmetische Mittel näherungsweise mit...", options: ["den Klassenmitten", "den Klassenobergrenzen", "der Klassenanzahl", "der Häufigkeitsdichte allein"], correctIndex: 0, explanation: "Da die genauen Einzelwerte innerhalb einer Klasse unbekannt sind, verwendet man die Klassenmitte als Näherung." }
    ]
  },
  {
    id: "streuungsmasse",
    chapter: 2,
    order: 3,
    title: "Streuungsmaße",
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
      }
    ],
    quiz: [
      { id: "q1", question: "Warum ist der zentrale Quartilsabstand robuster als die Spannweite?", options: ["Er berücksichtigt alle Werte gleich stark", "Er ignoriert die äußeren 50% der Daten, in denen Ausreißer liegen können", "Er ist immer größer als die Spannweite", "Er setzt kein Skalenniveau voraus"], correctIndex: 1, explanation: "Da nur die mittleren 50% betrachtet werden, wirken sich extreme Einzelwerte nicht auf den Quartilsabstand aus." },
      { id: "q2", question: "Was bewirkt das Quadrieren der Abweichungen bei der Varianzberechnung?", options: ["Negative und positive Abweichungen heben sich auf", "Größere Abweichungen werden stärker gewichtet", "Die Einheit bleibt unverändert", "Ausreißer werden automatisch entfernt"], correctIndex: 1, explanation: "Durch das Quadrieren gehen große Abweichungen überproportional stark in die Varianz ein." },
      { id: "q3", question: "Welche Kennzahl hat wieder dieselbe Einheit wie die Ursprungsdaten (z. B. Euro)?", options: ["Die Varianz", "Die Standardabweichung", "Der Variationskoeffizient", "Keine der genannten"], correctIndex: 1, explanation: "Die Standardabweichung ist die Wurzel der Varianz und hebt damit die Quadrierung der Einheit wieder auf." },
      { id: "q4", question: "Wofür braucht man den Variationskoeffizienten?", options: ["Um Verteilungen mit unterschiedlichem Niveau bezüglich ihrer relativen Streuung zu vergleichen", "Um die Spannweite zu berechnen", "Er ersetzt den Median", "Er ist nur bei Nominaldaten definiert"], correctIndex: 0, explanation: "Als dimensionsloses Verhältnis von Standardabweichung zu Mittelwert erlaubt er Vergleiche unabhängig vom Skalenniveau der Ausgangsdaten." },
      { id: "q5", question: "Welches Skalenniveau setzt der Variationskoeffizient mindestens voraus?", options: ["Nominalskala", "Ordinalskala", "Intervallskala", "Verhältnisskala"], correctIndex: 3, explanation: "Da er als Quotient s/x̄ ein Verhältnis bildet, braucht er einen echten Nullpunkt - also Verhältnisskalenniveau." },
      { id: "q6", question: "Der Verschiebungssatz zur Varianzberechnung lautet $s^2 = ...$", options: ["$\\frac{1}{n}\\sum x_i^2 - \\bar{x}^2$", "$\\frac{1}{n}\\sum x_i - \\bar{x}$", "$\\sum x_i^2 + \\bar{x}^2$", "$\\bar{x}^2 - \\frac{1}{n}\\sum x_i^2$"], correctIndex: 0, explanation: "Die Varianz lässt sich äquivalent als mittleres Quadrat minus Quadrat des Mittels berechnen." }
    ]
  },
  {
    id: "schiefe-woelbung",
    chapter: 2,
    order: 4,
    title: "Schiefe und Wölbung",
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
      }
    ],
    quiz: [
      { id: "q1", question: "In einer rechtsschiefen Verteilung gilt typischerweise...", options: ["Mittelwert < Median < Modus", "Mittelwert > Median > Modus", "Mittelwert = Median = Modus", "Modus existiert nicht"], correctIndex: 1, explanation: "Ein langer rechter Schwanz zieht den Mittelwert über Median und Modus." },
      { id: "q2", question: "Bei einer perfekt symmetrischen Verteilung ist der Schiefekoeffizient ungefähr...", options: ["-1", "0", "1", "3"], correctIndex: 1, explanation: "Symmetrische Verteilungen haben per Definition (annähernd) keine Schiefe, also $\\gamma_1 \\approx 0$." },
      { id: "q3", question: "Welchen Referenzwert nutzt man beim Wölbungskoeffizienten, um mit der Normalverteilung zu vergleichen?", options: ["0", "1", "2", "3"], correctIndex: 3, explanation: "Die Normalverteilung hat einen Wölbungskoeffizienten von genau 3 - das ist der Bezugspunkt für meso-/lepto-/platykurtisch." },
      { id: "q4", question: "Eine leptokurtische Verteilung ist im Vergleich zur Normalverteilung...", options: ["flacher", "spitzer mit tendenziell mehr Ausreißern", "immer schief", "immer symmetrisch"], correctIndex: 1, explanation: "Leptokurtisch ($\\gamma_2 > 3$) bedeutet einen spitzeren Gipfel und ausgeprägtere Ränder." },
      { id: "q5", question: "Womit wird die Schiefe berechnet?", options: ["Mit den quadrierten Abweichungen vom Mittelwert", "Mit den kubierten (3. Potenz) Abweichungen vom Mittelwert", "Nur mit dem Modus", "Mit der Spannweite"], correctIndex: 1, explanation: "Der Schiefekoeffizient nutzt die dritte Potenz der Abweichungen, geteilt durch die dritte Potenz der Standardabweichung." }
    ]
  },
  {
    id: "konzentrationsmessung",
    chapter: 2,
    order: 5,
    title: "Konzentrationsmessung",
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
      }
    ],
    quiz: [
      { id: "q1", question: "Wie sieht die Lorenzkurve bei perfekter Gleichverteilung aus?", options: ["Sie liegt auf der Diagonalen", "Sie verläuft entlang der x-Achse", "Sie ist eine Parabel", "Sie existiert nicht"], correctIndex: 0, explanation: "Bei Gleichverteilung entspricht der kumulierte Anteil an der Summe immer genau dem kumulierten Anteil an den Merkmalsträgern - das ergibt die Diagonale." },
      { id: "q2", question: "Was bedeutet ein Gini-Koeffizient von $G = 0$?", options: ["Maximale Konzentration", "Perfekte Gleichverteilung", "Die Daten sind fehlerhaft", "Negative Werte in den Daten"], correctIndex: 1, explanation: "$G=0$ heißt, die Lorenzkurve liegt auf der Diagonalen - jeder Merkmalsträger trägt anteilig gleich viel zur Summe bei." },
      { id: "q3", question: "Warum normiert man den Gini-Koeffizienten zu $G^*$?", options: ["Um negative Werte zu vermeiden", "Damit er unabhängig von $n$ stets zwischen 0 und 1 liegt und vergleichbar wird", "Weil $G$ sonst größer als 1 werden kann", "Das ist nur bei qualitativen Merkmalen nötig"], correctIndex: 1, explanation: "Der unnormierte Gini-Koeffizient hat ein von $n$ abhängiges Maximum $(n-1)/n$ - die Normierung macht ihn über verschiedene Stichprobengrößen hinweg vergleichbar." },
      { id: "q4", question: "Was zeigt eine Lorenzkurve, die stark unterhalb der Diagonalen verläuft?", options: ["Gleichverteilung", "Hohe Konzentration der Summengröße auf wenige Merkmalsträger", "Einen Rechenfehler", "Dass der Gini-Koeffizient negativ ist"], correctIndex: 1, explanation: "Je weiter die Lorenzkurve von der Diagonale abweicht, desto konzentrierter ist die Verteilung." },
      { id: "q5", question: "Welche Formel definiert den normierten Gini-Koeffizienten?", options: ["$G^* = G \\cdot n$", "$G^* = \\frac{n}{n-1} \\cdot G$", "$G^* = \\frac{n-1}{n} \\cdot G$", "$G^* = 1 - G$"], correctIndex: 1, explanation: "Die Normierung erfolgt durch Multiplikation mit $n/(n-1)$." }
    ]
  },
  {
    id: "korrelationsmasse",
    chapter: 2,
    order: 6,
    title: "Korrelationsmaße",
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
      }
    ],
    quiz: [
      { id: "q1", question: "Welchen Wertebereich hat der Korrelationskoeffizient von Bravais-Pearson?", options: ["0 bis 1", "-1 bis 1", "-∞ bis ∞", "0 bis 100"], correctIndex: 1, explanation: "Der Pearson-Korrelationskoeffizient ist auf das Intervall [-1, 1] normiert." },
      { id: "q2", question: "Was ist der Hauptnachteil der Kovarianz gegenüber dem Korrelationskoeffizienten?", options: ["Sie kann nicht negativ werden", "Sie ist nicht normiert und schwer zwischen verschiedenen Datensätzen vergleichbar", "Sie setzt Nominalskala voraus", "Sie ist immer 0"], correctIndex: 1, explanation: "Die Kovarianz hängt von den Maßeinheiten der Merkmale ab, während der Korrelationskoeffizient dimensionslos und normiert ist." },
      { id: "q3", question: "Welches Korrelationsmaß verwendet man für ordinalskalierte Daten (z. B. Ranglisten)?", options: ["Bravais-Pearson-Korrelationskoeffizient", "Spearman-Rangkorrelationskoeffizient", "Kontingenzkoeffizient", "Variationskoeffizient"], correctIndex: 1, explanation: "Der Spearman-Koeffizient wendet die Pearson-Logik auf Ränge an und passt daher zu ordinalskalierten Merkmalen." },
      { id: "q4", question: "Ein Korrelationskoeffizient von $r=0$ bedeutet...", options: ["Es gibt gar keinen Zusammenhang zwischen den Merkmalen", "Es gibt keinen linearen Zusammenhang (ein nicht-linearer Zusammenhang ist trotzdem möglich)", "Die Merkmale sind identisch", "Ein Rechenfehler ist aufgetreten"], correctIndex: 1, explanation: "Pearson misst nur lineare Zusammenhänge - ein starker nicht-linearer Zusammenhang (z. B. U-förmig) kann trotzdem vorliegen." },
      { id: "q5", question: "'Korrelation impliziert nicht Kausalität' bedeutet:", options: ["Eine hohe Korrelation beweist immer eine Ursache-Wirkungs-Beziehung", "Eine Korrelation kann auch durch Zufall, umgekehrte Wirkungsrichtung oder einen Drittfaktor entstehen", "Korrelation und Kausalität sind dasselbe Konzept", "Korrelationskoeffizienten sind immer falsch berechnet"], correctIndex: 1, explanation: "Ein statistischer Zusammenhang allein beweist keine kausale Beziehung - es kann auch Drittfaktoren oder Zufall geben." },
      { id: "q6", question: "Welches Maß eignet sich für den Zusammenhang zweier rein nominalskalierter Merkmale?", options: ["Bravais-Pearson-Korrelationskoeffizient", "Kontingenzkoeffizient", "Variationskoeffizient", "Schiefekoeffizient"], correctIndex: 1, explanation: "Der Kontingenzkoeffizient ist speziell für den Zusammenhang zwischen Kategorien (Nominalskala) konzipiert." }
    ]
  }
];
