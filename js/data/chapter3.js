const CHAPTER3_TOPICS = [
  {
    id: "wt-grundbegriffe",
    chapter: 3,
    order: 1,
    title: "Grundbegriffe & Axiome",
    explanation: [
      { type: "p", text: "Die Wahrscheinlichkeitstheorie beschreibt und modelliert Zufallsgeschehen. Ein Zufallsvorgang ist ein Vorgang, dessen Ergebnis nicht mit Sicherheit vorhersagbar ist (z. B. ein Würfelwurf)." },
      { type: "list", items: [
        "Elementarereignis: ein einzelnes, nicht weiter zerlegbares mögliches Ergebnis (z. B. 'die Augenzahl 4').",
        "Ereignisraum $\\Omega$: die Menge aller möglichen Elementarereignisse. Man unterscheidet diskrete Ereignisräume (endlich oder abzählbar unendlich viele Ausgänge, z. B. Würfelwurf) und stetige Ereignisräume (überabzählbar viele Ausgänge, z. B. Wartezeit).",
        "Zufälliges Ereignis: eine Teilmenge von $\\Omega$ (z. B. 'gerade Augenzahl' $= \\{2,4,6\\}$).",
        "Ereignismenge $\\mathcal{F}$: die Menge aller betrachteten zufälligen Ereignisse."
      ]},
      { type: "p", text: "Jedem Ereignis $A$ wird eine Wahrscheinlichkeit $P(A)$ zugeordnet, die drei Axiome (Kolmogorow-Axiome) erfüllen muss:" },
      { type: "list", items: [
        "Nichtnegativität: $0 \\leq P(A) \\leq 1$ für alle $A \\in \\mathcal{F}$",
        "Normierung: $P(\\Omega) = 1$",
        "Additivität: für paarweise disjunkte Ereignisse $A_1, A_2, \\dots$ gilt $P(A_1 \\cup A_2 \\cup \\dots) = \\sum_i P(A_i)$"
      ]}
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Beim französischen Roulette erscheinen die Zahlen 0 bis 36 mit gleicher Wahrscheinlichkeit. a) Geben Sie den Ereignisraum an. b) Formulieren Sie die Ereignisse 'Impair' (ungerade Zahl) und 'Manque' (Zahlen 1 bis 18) in Mengenschreibweise.",
        solution: [
          { type: "p", text: "a) $\\Omega = \\{0, 1, 2, \\dots, 36\\}$, also 37 gleichwahrscheinliche Elementarereignisse." },
          { type: "p", text: "b) Impair: $A = \\{1, 3, 5, \\dots, 35\\}$ (18 Zahlen). Manque: $B = \\{1, 2, \\dots, 18\\}$ (18 Zahlen)." }
        ]
      },
      {
        id: "ex2",
        prompt: "Welches der folgenden Axiome ist verletzt, wenn jemand behauptet: 'Die Wahrscheinlichkeit, dass es morgen regnet, ist -0,2'?",
        solution: [
          { type: "p", text: "Das Nichtnegativitätsaxiom ($0 \\leq P(A) \\leq 1$) ist verletzt, da Wahrscheinlichkeiten nie negativ sein können." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was ist ein Elementarereignis?", options: ["Jede beliebige Teilmenge von $\\Omega$", "Ein einzelnes, nicht weiter zerlegbares mögliches Ergebnis", "Nur das sichere Ereignis", "Ein Ereignis mit Wahrscheinlichkeit 0"], correctIndex: 1, explanation: "Elementarereignisse sind die kleinsten, unteilbaren Bausteine des Ereignisraums." },
      { id: "q2", question: "Welches der drei Kolmogorow-Axiome fordert $P(\\Omega)=1$?", options: ["Nichtnegativität", "Normierung", "Additivität", "Unabhängigkeit"], correctIndex: 1, explanation: "Das Normierungsaxiom legt fest, dass das sichere Ereignis die Wahrscheinlichkeit 1 hat." },
      { id: "q3", question: "Ein zufälliges Ereignis ist formal...", options: ["ein einzelner Punkt in $\\Omega$", "eine Teilmenge des Ereignisraums $\\Omega$", "immer gleich $\\Omega$ selbst", "ein Zahlenwert zwischen -1 und 1"], correctIndex: 1, explanation: "Ereignisse fassen eine oder mehrere Elementarereignisse als Teilmenge von $\\Omega$ zusammen." },
      { id: "q4", question: "Für welche Art von Zufallsvorgang ist ein diskreter Ereignisraum typisch?", options: ["Wartezeit auf den nächsten Bus", "Körpergröße einer zufällig gewählten Person", "Anzahl der Augen beim Würfelwurf", "Exakter Zeitpunkt eines Erdbebens"], correctIndex: 2, explanation: "Der Würfelwurf hat endlich viele, abzählbare Ausgänge (1 bis 6) - ein diskreter Ereignisraum." },
      { id: "q5", question: "Für paarweise disjunkte Ereignisse $A_1, A_2$ gilt laut Additivitätsaxiom:", options: ["$P(A_1 \\cup A_2) = P(A_1) \\cdot P(A_2)$", "$P(A_1 \\cup A_2) = P(A_1) + P(A_2)$", "$P(A_1 \\cup A_2) = P(A_1) - P(A_2)$", "$P(A_1 \\cup A_2) = 1$"], correctIndex: 1, explanation: "Bei disjunkten (sich nicht überschneidenden) Ereignissen addieren sich die Wahrscheinlichkeiten einfach." }
    ]
  },
  {
    id: "wt-ermitteln",
    chapter: 3,
    order: 2,
    title: "Wahrscheinlichkeiten ermitteln",
    explanation: [
      { type: "p", text: "Es gibt drei grundsätzliche Wege, um Wahrscheinlichkeiten für ein Ereignis zu bestimmen." },
      { type: "list", items: [
        "Klassische (Laplace-) Methode: setzt voraus, dass es endlich viele, gleichwahrscheinliche Elementarereignisse gibt. Dann gilt $P(A) = |A| / |\\Omega|$ - Anzahl der günstigen Fälle geteilt durch Anzahl aller möglichen Fälle. Beispiel: gerade Zahl beim Würfeln, $P = 3/6 = 0{,}5$.",
        "Statistische (frequentistische) Methode: der Zufallsvorgang muss unter gleichen Bedingungen wiederholbar sein. Man schätzt $P(A)$ durch die relative Häufigkeit des Ereignisses über viele Wiederholungen. Nach dem Gesetz der großen Zahlen nähert sich die relative Häufigkeit mit wachsender Anzahl an Wiederholungen der wahren Wahrscheinlichkeit an.",
        "Subjektive Methode: eine Einschätzung, die auf Expertenwissen und Erfahrung beruht, ohne dass ein Experiment durchgeführt wird - etwa bei unternehmerischen Entscheidungen ('Wie wahrscheinlich ist der Erfolg dieser Marketingkampagne?'). Diese Einschätzung sollte gut begründet sein, um Willkür zu vermeiden."
      ]}
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Würfel wird 1.000-mal geworfen, dabei fällt 481-mal eine gerade Zahl. Welche Methode zur Wahrscheinlichkeitsbestimmung liegt hier vor, und wie lautet die geschätzte Wahrscheinlichkeit?",
        solution: [
          { type: "p", text: "Es handelt sich um die statistische (frequentistische) Methode - die Wahrscheinlichkeit wird über die relative Häufigkeit vieler Wiederholungen geschätzt: $481/1000 = 0{,}481$, was nahe am theoretischen Wert von $0{,}5$ liegt." }
        ]
      },
      {
        id: "ex2",
        prompt: "Ein Start-up schätzt die Erfolgswahrscheinlichkeit eines neuen Produkts basierend auf der Erfahrung des Managementteams auf 30%, ohne konkrete Testdaten. Welche Methode zur Wahrscheinlichkeitsbestimmung ist das, und was ist ihr größter Nachteil?",
        solution: [
          { type: "p", text: "Das ist die subjektive Methode. Nachteil: Die Einschätzung basiert auf persönlicher Erfahrung/Intuition statt auf Daten oder Wiederholbarkeit und kann daher von der tatsächlichen Wahrscheinlichkeit abweichen oder willkürlich wirken, wenn sie nicht gut begründet ist." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche Voraussetzung braucht die klassische (Laplace-) Methode?", options: ["Der Zufallsvorgang muss wiederholbar sein", "Endlich viele, gleichwahrscheinliche Elementarereignisse", "Expertenwissen", "Eine Normalverteilung der Daten"], correctIndex: 1, explanation: "Die Laplace-Formel $P(A)=|A|/|\\Omega|$ gilt nur, wenn alle Elementarereignisse gleich wahrscheinlich sind." },
      { id: "q2", question: "Das Gesetz der großen Zahlen besagt, dass...", options: ["die relative Häufigkeit mit wachsender Anzahl Wiederholungen gegen die wahre Wahrscheinlichkeit konvergiert", "die absolute Häufigkeit konstant bleibt", "kleine Stichproben immer genauer sind als große", "Wahrscheinlichkeiten immer genau 0,5 sind"], correctIndex: 0, explanation: "Je öfter man einen Zufallsvorgang wiederholt, desto näher kommt die beobachtete relative Häufigkeit der tatsächlichen Wahrscheinlichkeit." },
      { id: "q3", question: "Eine Wahrscheinlichkeitseinschätzung, die rein auf Erfahrung eines Experten beruht, nennt man...", options: ["klassische Methode", "statistische Methode", "subjektive Methode", "axiomatische Methode"], correctIndex: 2, explanation: "Die subjektive Methode basiert auf Erfahrungswissen ohne Experiment oder Gleichwahrscheinlichkeitsannahme." },
      { id: "q4", question: "Bei einem fairen Münzwurf ist die Wahrscheinlichkeit für 'Kopf' nach der klassischen Methode...", options: ["0", "0,25", "0,5", "1"], correctIndex: 2, explanation: "Es gibt 2 gleichwahrscheinliche Ausgänge, also $P(\\text{Kopf}) = 1/2 = 0{,}5$." },
      { id: "q5", question: "Warum eignet sich die statistische Methode nicht für einmalige, nicht wiederholbare Ereignisse (z. B. 'Wird dieses eine Startup erfolgreich sein?')?", options: ["Weil sie nur bei geraden Zahlen funktioniert", "Weil sie auf der relativen Häufigkeit über viele Wiederholungen beruht, die hier nicht existieren", "Weil sie immer 0 ergibt", "Weil sie nur bei stetigen Merkmalen anwendbar ist"], correctIndex: 1, explanation: "Ohne Wiederholbarkeit unter gleichen Bedingungen lässt sich keine relative Häufigkeit bilden - hier braucht man die subjektive Methode." }
    ]
  },
  {
    id: "wt-rechenregeln",
    chapter: 3,
    order: 3,
    title: "Rechenregeln der Wahrscheinlichkeit",
    explanation: [
      { type: "p", text: "Aus den Grundaxiomen lassen sich praktische Rechenregeln ableiten." },
      { type: "p", text: "Der allgemeine Additionssatz berechnet die Wahrscheinlichkeit, dass mindestens eines von zwei Ereignissen eintritt:" },
      { type: "formula", block: true, tex: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)" },
      { type: "p", text: "Für paarweise disjunkte (sich gegenseitig ausschließende) Ereignisse vereinfacht sich dies, da $P(A \\cap B) = 0$." },
      { type: "p", text: "Die bedingte Wahrscheinlichkeit gibt an, wie wahrscheinlich $A$ ist, wenn man bereits weiß, dass $B$ eingetreten ist:" },
      { type: "formula", block: true, tex: "P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}, \\qquad P(B) > 0" },
      { type: "p", text: "Der Satz von Bayes dreht eine bedingte Wahrscheinlichkeit um - besonders nützlich, wenn $P(B|A)$ bekannt ist, man aber $P(A|B)$ sucht:" },
      { type: "formula", block: true, tex: "P(B \\mid A) = \\frac{P(A \\mid B) \\cdot P(B)}{P(A)}" },
      { type: "p", text: "Zwei Ereignisse $A$ und $B$ heißen unabhängig, wenn das Eintreten des einen keinen Einfluss auf die Wahrscheinlichkeit des anderen hat:" },
      { type: "formula", block: true, tex: "A, B \\text{ unabh\\\"angig} \\iff P(A \\cap B) = P(A) \\cdot P(B)" }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Wirtschaftsabsolvent bewirbt sich bei zwei Firmen. $P(\\text{Zusage A}) = 0{,}30$, $P(\\text{Zusage B}) = 0{,}40$, beide Firmen entscheiden unabhängig voneinander. Wie hoch ist die Wahrscheinlichkeit, mindestens eine Zusage zu erhalten?",
        solution: [
          { type: "p", text: "Da die Ereignisse unabhängig sind: $P(A \\cap B) = 0{,}30 \\cdot 0{,}40 = 0{,}12$." },
          { type: "formula", block: true, tex: "P(A \\cup B) = 0{,}30 + 0{,}40 - 0{,}12 = 0{,}58" },
          { type: "p", text: "Die Wahrscheinlichkeit für mindestens eine Zusage beträgt 58%." }
        ]
      },
      {
        id: "ex2",
        prompt: "235 Studierende haben sowohl eine VWL- als auch eine BWL-Prüfung abgelegt. Es gilt: $P(V \\cap B) = 0{,}62$ (beide bestanden), $P(\\bar{V} \\cap B) = 0{,}13$ (nur BWL bestanden), $P(V \\cap \\bar{B}) = 0{,}10$ (nur VWL bestanden), $P(\\bar{V} \\cap \\bar{B}) = 0{,}15$ (beide nicht bestanden). Berechnen Sie $P(V \\mid B)$ und prüfen Sie, ob $V$ und $B$ unabhängig sind.",
        solution: [
          { type: "p", text: "Zunächst $P(B) = P(V \\cap B) + P(\\bar{V} \\cap B) = 0{,}62 + 0{,}13 = 0{,}75$ und $P(V) = P(V \\cap B) + P(V \\cap \\bar{B}) = 0{,}62 + 0{,}10 = 0{,}72$." },
          { type: "formula", block: true, tex: "P(V \\mid B) = \\frac{P(V \\cap B)}{P(B)} = \\frac{0{,}62}{0{,}75} \\approx 0{,}83" },
          { type: "p", text: "Unabhängigkeitsprüfung: $P(V) \\cdot P(B) = 0{,}72 \\cdot 0{,}75 = 0{,}54 \\neq 0{,}62 = P(V \\cap B)$. Da beide Werte nicht übereinstimmen, sind $V$ und $B$ nicht unabhängig - wer VWL besteht, besteht mit höherer Wahrscheinlichkeit auch BWL." }
        ]
      },
      {
        id: "ex3",
        prompt: "Ein Covid-Test hat eine Sensitivität von 99,9% ($P(\\text{positiv} \\mid \\text{infiziert}) = 0{,}999$) und eine Spezifität von 98% ($P(\\text{negativ} \\mid \\text{nicht infiziert}) = 0{,}98$). Die Grundrate der Infektion in der Bevölkerung beträgt 0,5%. Wie hoch ist die Wahrscheinlichkeit, trotz eines negativen Tests infiziert zu sein, $P(\\text{infiziert} \\mid \\text{negativ})$? (Hinweis: $P(\\text{negativ}) \\approx 0{,}98$)",
        solution: [
          { type: "p", text: "Falsch-negativ-Rate: $P(\\text{negativ} \\mid \\text{infiziert}) = 1 - 0{,}999 = 0{,}001$." },
          { type: "formula", block: true, tex: "P(\\text{infiziert} \\mid \\text{negativ}) = \\frac{P(\\text{negativ} \\mid \\text{infiziert}) \\cdot P(\\text{infiziert})}{P(\\text{negativ})} = \\frac{0{,}001 \\cdot 0{,}005}{0{,}98} \\approx 0{,}0000051" },
          { type: "p", text: "Die Wahrscheinlichkeit ist mit ca. 0,00051% verschwindend gering - bei einer niedrigen Grundrate ist ein negativer Test sehr aussagekräftig." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Der allgemeine Additionssatz lautet:", options: ["$P(A \\cup B) = P(A) + P(B)$", "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$", "$P(A \\cup B) = P(A) \\cdot P(B)$", "$P(A \\cup B) = P(A) - P(B)$"], correctIndex: 1, explanation: "Ohne Abzug der Schnittmenge würde diese doppelt gezählt." },
      { id: "q2", question: "Wann darf man beim Additionssatz $P(A \\cap B)$ weglassen?", options: ["Immer", "Nur wenn $A$ und $B$ disjunkt (sich gegenseitig ausschließend) sind", "Nur wenn $A$ und $B$ unabhängig sind", "Nie"], correctIndex: 1, explanation: "Bei disjunkten Ereignissen ist $P(A \\cap B) = 0$, daher entfällt der Korrekturterm." },
      { id: "q3", question: "Der Satz von Bayes wird typischerweise verwendet, um...", options: ["eine unbedingte Wahrscheinlichkeit direkt abzulesen", "eine bedingte Wahrscheinlichkeit 'umzudrehen' (z. B. von $P(B|A)$ auf $P(A|B)$ zu schließen)", "die Varianz zu berechnen", "zwei Ereignisse als disjunkt nachzuweisen"], correctIndex: 1, explanation: "Bayes erlaubt es, aus einer bekannten bedingten Wahrscheinlichkeit die 'umgekehrte' zu berechnen." },
      { id: "q4", question: "Zwei Ereignisse $A$ und $B$ sind unabhängig, wenn...", options: ["$P(A \\cap B) = 0$", "$P(A \\cap B) = P(A) + P(B)$", "$P(A \\cap B) = P(A) \\cdot P(B)$", "$P(A) = P(B)$"], correctIndex: 2, explanation: "Das ist die formale Definition der Unabhängigkeit zweier Ereignisse." },
      { id: "q5", question: "Warum ist ein negativer Test bei einer sehr seltenen Krankheit (niedrige Grundrate) besonders aussagekräftig?", options: ["Weil Tests bei seltenen Krankheiten nie irren", "Weil schon eine geringe Fehlerrate im Vergleich zur niedrigen Grundrate kaum ins Gewicht fällt, sodass ein negatives Ergebnis die Infektionswahrscheinlichkeit stark senkt", "Weil die Sensitivität dann automatisch 100% beträgt", "Das ist falsch - er ist dann weniger aussagekräftig"], correctIndex: 1, explanation: "Nach Bayes hängt $P(\\text{infiziert}|\\text{negativ})$ stark von der niedrigen Grundrate $P(\\text{infiziert})$ ab, was die bedingte Wahrscheinlichkeit sehr klein macht." },
      { id: "q6", question: "Bedingte Wahrscheinlichkeit $P(A \\mid B)$ ist definiert als:", options: ["$P(A) \\cdot P(B)$", "$\\frac{P(A \\cap B)}{P(B)}$", "$\\frac{P(A)}{P(B)}$", "$P(A) + P(B)$"], correctIndex: 1, explanation: "Man betrachtet den Anteil von $A \\cap B$ innerhalb des bereits eingetretenen Ereignisses $B$." }
    ]
  },
  {
    id: "diskrete-zufallsvariablen",
    chapter: 3,
    order: 4,
    title: "Diskrete Zufallsvariablen",
    explanation: [
      { type: "p", text: "Eine Zufallsvariable $X$ ordnet jedem Elementarereignis eine Zahl zu und überträgt damit Zufallsgeschehen in die Welt der Zahlen - vergleichbar mit einem Merkmal in der deskriptiven Statistik. Eine diskrete Zufallsvariable kann nur endlich oder abzählbar unendlich viele Werte annehmen." },
      { type: "p", text: "Die Zähldichte (Wahrscheinlichkeitsfunktion) gibt die Wahrscheinlichkeit für jeden einzelnen Wert an:" },
      { type: "formula", block: true, tex: "p(x) = P(X = x), \\qquad \\sum_x p(x) = 1" },
      { type: "p", text: "Die Verteilungsfunktion kumuliert die Wahrscheinlichkeiten bis zu einem Wert:" },
      { type: "formula", block: true, tex: "F(t) = P(X \\leq t)" },
      { type: "p", text: "Der Erwartungswert ist der mit den Wahrscheinlichkeiten gewichtete Durchschnitt aller möglichen Werte - das Analogon zum arithmetischen Mittel:" },
      { type: "formula", block: true, tex: "E(X) = \\mu = \\sum_x x \\cdot p(x)" },
      { type: "p", text: "Die Varianz misst die Streuung um den Erwartungswert. Praktisch rechnet man meist mit dem Satz von Steiner (Verschiebungssatz):" },
      { type: "formula", block: true, tex: "\\text{Var}(X) = \\sigma^2 = E\\left[(X-\\mu)^2\\right] = E(X^2) - \\mu^2" }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Spieler wirft einen Würfel zweimal. $X$ = Anzahl der geworfenen Sechsen. a) Geben Sie die Zähldichte an. b) Berechnen Sie $E(X)$ und $\\text{Var}(X)$.",
        solution: [
          { type: "p", text: "a) Zähldichte: $P(X=0) = (5/6)^2 = 25/36$, $P(X=1) = 2 \\cdot (1/6)(5/6) = 10/36$, $P(X=2) = (1/6)^2 = 1/36$." },
          { type: "formula", block: true, tex: "E(X) = 0 \\cdot \\frac{25}{36} + 1 \\cdot \\frac{10}{36} + 2 \\cdot \\frac{1}{36} = \\frac{12}{36} = \\frac{1}{3}" },
          { type: "formula", block: true, tex: "E(X^2) = 0^2\\cdot\\frac{25}{36} + 1^2\\cdot\\frac{10}{36} + 2^2\\cdot\\frac{1}{36} = \\frac{14}{36}" },
          { type: "formula", block: true, tex: "\\text{Var}(X) = \\frac{14}{36} - \\left(\\frac{1}{3}\\right)^2 = \\frac{14}{36} - \\frac{4}{36} = \\frac{10}{36} = \\frac{5}{18} \\approx 0{,}28" }
        ]
      },
      {
        id: "ex2",
        prompt: "Warum ist der Erwartungswert einer Zufallsvariablen das Analogon zum arithmetischen Mittel in der deskriptiven Statistik?",
        solution: [
          { type: "p", text: "Beide berechnen einen gewichteten Durchschnitt: das arithmetische Mittel gewichtet die beobachteten Werte mit ihren relativen Häufigkeiten, der Erwartungswert gewichtet die möglichen Werte einer Zufallsvariable mit ihren (theoretischen) Wahrscheinlichkeiten. Relative Häufigkeit und Wahrscheinlichkeit entsprechen sich dabei konzeptionell." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was gibt die Zähldichte $p(x)$ einer diskreten Zufallsvariable an?", options: ["Die kumulierte Wahrscheinlichkeit bis zum Wert $x$", "Die Wahrscheinlichkeit, dass $X$ genau den Wert $x$ annimmt", "Den Erwartungswert von $X$", "Die Varianz von $X$"], correctIndex: 1, explanation: "$p(x) = P(X=x)$ ist die Wahrscheinlichkeit für genau diesen einen Wert." },
      { id: "q2", question: "Wie berechnet man die Varianz meist in der Praxis (Satz von Steiner)?", options: ["$\\text{Var}(X) = E(X) - \\mu$", "$\\text{Var}(X) = E(X^2) - [E(X)]^2$", "$\\text{Var}(X) = E(X)^2$", "$\\text{Var}(X) = \\sum x$"], correctIndex: 1, explanation: "Der Verschiebungssatz erspart das direkte Rechnen mit $(X-\\mu)^2$." },
      { id: "q3", question: "Welche Eigenschaft muss jede Zähldichte erfüllen?", options: ["$\\sum_x p(x) = 0$", "$\\sum_x p(x) = 1$", "$p(x)$ kann negativ sein", "$p(x)$ ist immer konstant"], correctIndex: 1, explanation: "Die Summe aller Einzelwahrscheinlichkeiten muss (analog zu den relativen Häufigkeiten) 1 ergeben." },
      { id: "q4", question: "Die Verteilungsfunktion $F(t)$ einer diskreten Zufallsvariable gibt an:", options: ["$P(X = t)$", "$P(X \\leq t)$", "$P(X \\geq t)$", "$P(X \\neq t)$"], correctIndex: 1, explanation: "$F(t)$ kumuliert alle Wahrscheinlichkeiten für Werte kleiner oder gleich $t$." },
      { id: "q5", question: "Der Erwartungswert entspricht in der deskriptiven Statistik am ehesten...", options: ["dem Median", "dem arithmetischen Mittel", "der Standardabweichung", "dem Modus"], correctIndex: 1, explanation: "Beide sind gewichtete Durchschnitte - einmal mit relativen Häufigkeiten, einmal mit Wahrscheinlichkeiten." }
    ]
  },
  {
    id: "stetige-zufallsvariablen",
    chapter: 3,
    order: 5,
    title: "Stetige Zufallsvariablen",
    explanation: [
      { type: "p", text: "Eine stetige Zufallsvariable kann überabzählbar viele Werte annehmen, z. B. jeden reellen Wert innerhalb eines Intervalls. Anders als bei diskreten Zufallsvariablen ist die Wahrscheinlichkeit für einen einzelnen exakten Wert stets null: $P(X = x) = 0$." },
      { type: "p", text: "Stattdessen beschreibt man stetige Zufallsvariablen über eine Wahrscheinlichkeitsdichtefunktion $f(x)$ mit $f(x) \\geq 0$ und Gesamtfläche 1:" },
      { type: "formula", block: true, tex: "\\int_{-\\infty}^{\\infty} f(x)\\, dx = 1" },
      { type: "p", text: "Wahrscheinlichkeiten ergeben sich als Fläche unter der Dichte zwischen zwei Grenzen:" },
      { type: "formula", block: true, tex: "P(a \\leq X \\leq b) = \\int_a^b f(x)\\, dx" },
      { type: "p", text: "Die Verteilungsfunktion ist wie im diskreten Fall $F(t) = P(X \\leq t)$, hier aber als Integral definiert:" },
      { type: "formula", block: true, tex: "F(t) = \\int_{-\\infty}^{t} f(x)\\, dx" },
      { type: "p", text: "Erwartungswert und Varianz werden analog zum diskreten Fall gebildet, nur mit Integral statt Summe:" },
      { type: "formula", block: true, tex: "E(X) = \\int x \\cdot f(x)\\, dx \\qquad \\text{Var}(X) = \\int (x-\\mu)^2 f(x)\\, dx = E(X^2) - \\mu^2" }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Eine stetige Zufallsvariable $X$ hat die Dichte $f(x) = \\frac{1}{5}$ für $0 \\leq x \\leq 5$ und $f(x)=0$ sonst (Gleichverteilung). a) Wie groß ist $P(X=3)$? b) Berechnen Sie $P(1 \\leq X < 2)$. c) Zeigen Sie $E(X) = 2{,}5$.",
        solution: [
          { type: "p", text: "a) Für stetige Zufallsvariablen ist die Wahrscheinlichkeit eines einzelnen Punktes immer 0: $P(X=3) = 0$." },
          { type: "formula", block: true, tex: "P(1 \\leq X < 2) = \\int_1^2 \\frac{1}{5}\\,dx = \\frac{1}{5}" },
          { type: "formula", block: true, tex: "E(X) = \\int_0^5 x \\cdot \\frac{1}{5}\\,dx = \\frac{1}{5}\\cdot\\frac{x^2}{2}\\Big|_0^5 = \\frac{25}{10} = 2{,}5" }
        ]
      },
      {
        id: "ex2",
        prompt: "Berechnen Sie für dieselbe gleichverteilte Zufallsvariable ($f(x)=1/5$ auf $[0,5]$) die Varianz.",
        solution: [
          { type: "formula", block: true, tex: "E(X^2) = \\int_0^5 x^2 \\cdot \\frac{1}{5}\\,dx = \\frac{1}{5}\\cdot\\frac{x^3}{3}\\Big|_0^5 = \\frac{125}{15} = \\frac{25}{3}" },
          { type: "formula", block: true, tex: "\\text{Var}(X) = \\frac{25}{3} - 2{,}5^2 = \\frac{25}{3} - 6{,}25 \\approx 2{,}08" }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was gilt für die Wahrscheinlichkeit eines einzelnen Punktes bei einer stetigen Zufallsvariable?", options: ["Sie ist immer 1", "Sie ist immer 0", "Sie hängt von $f(x)$ ab", "Sie ist undefiniert"], correctIndex: 1, explanation: "Da es überabzählbar viele mögliche Werte gibt, hat jeder einzelne Punkt die Wahrscheinlichkeit 0 - nur Intervalle haben eine positive Wahrscheinlichkeit." },
      { id: "q2", question: "Wie berechnet man $P(a \\leq X \\leq b)$ bei einer stetigen Zufallsvariable?", options: ["Als Summe $\\sum p(x)$", "Als Integral der Dichte zwischen $a$ und $b$", "Als Differenz der Erwartungswerte", "Das ist nicht möglich"], correctIndex: 1, explanation: "$P(a\\leq X\\leq b) = \\int_a^b f(x)\\,dx$ - die Fläche unter der Dichtefunktion." },
      { id: "q3", question: "Welche Bedingung muss jede Wahrscheinlichkeitsdichte $f(x)$ erfüllen?", options: ["$f(x) \\leq 0$ für alle $x$", "$\\int f(x)\\,dx = 1$ und $f(x) \\geq 0$", "$f(x) = 1$ für alle $x$", "$f$ muss symmetrisch sein"], correctIndex: 1, explanation: "Die Gesamtfläche unter der Dichte muss 1 ergeben, und die Dichte darf nirgends negativ sein." },
      { id: "q4", question: "Der Erwartungswert einer stetigen Zufallsvariable wird berechnet als:", options: ["$\\sum x \\cdot p(x)$", "$\\int x \\cdot f(x)\\,dx$", "$\\int f(x)\\,dx$", "$P(X \\leq \\mu)$"], correctIndex: 1, explanation: "Analog zur Summenformel im diskreten Fall, nur mit Integral statt Summe." },
      { id: "q5", question: "Bei einer stetigen Gleichverteilung auf $[0,5]$ ist der Erwartungswert...", options: ["0", "2,5", "5", "nicht bestimmbar"], correctIndex: 1, explanation: "Bei einer Gleichverteilung liegt der Erwartungswert immer genau in der Mitte des Intervalls." }
    ]
  },
  {
    id: "binomial-poisson",
    chapter: 3,
    order: 6,
    title: "Binomial- und Poissonverteilung",
    explanation: [
      { type: "p", text: "Binomial- und Poissonverteilung sind die wichtigsten diskreten Verteilungsmodelle." },
      { type: "p", text: "Die Binomialverteilung $X \\sim B(n,p)$ beschreibt die Anzahl der Erfolge bei $n$ unabhängigen, identischen Versuchen mit jeweils zwei möglichen Ausgängen (Erfolg/Misserfolg) und konstanter Erfolgswahrscheinlichkeit $p$:" },
      { type: "formula", block: true, tex: "P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}, \\qquad k = 0, 1, \\dots, n" },
      { type: "formula", block: true, tex: "E(X) = n \\cdot p \\qquad \\text{Var}(X) = n \\cdot p \\cdot (1-p)" },
      { type: "p", text: "Die Poissonverteilung $X \\sim \\text{Po}(\\lambda)$ modelliert die Anzahl von Ereignissen, die unabhängig voneinander mit konstanter Rate $\\lambda$ in einem festen Zeit- oder Raumintervall auftreten (z. B. Anzahl Kundenbeschwerden pro Tag):" },
      { type: "formula", block: true, tex: "P(X=k) = \\frac{\\lambda^k}{k!} e^{-\\lambda}, \\qquad k = 0, 1, 2, \\dots" },
      { type: "formula", block: true, tex: "E(X) = \\lambda \\qquad \\text{Var}(X) = \\lambda" }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Fallschirmflug hat 5 Plätze, es werden aber 6 Buchungen angenommen. Jede Buchung wird unabhängig mit 25% Wahrscheinlichkeit innerhalb von 2 Tagen storniert. $X$ = Anzahl Stornierungen, $X \\sim B(6; 0{,}25)$. a) Wie hoch ist das Risiko einer Überbuchung, also $P(X=0)$? b) Wie hoch ist der Erwartungswert von $X$?",
        solution: [
          { type: "formula", block: true, tex: "P(X=0) = \\binom{6}{0}(0{,}25)^0(0{,}75)^6 = 0{,}75^6 \\approx 0{,}178" },
          { type: "p", text: "Das Überbuchungsrisiko liegt bei rund 17,8%." },
          { type: "formula", block: true, tex: "E(X) = n \\cdot p = 6 \\cdot 0{,}25 = 1{,}5" }
        ]
      },
      {
        id: "ex2",
        prompt: "Eine Wohnungsgenossenschaft erhält im Schnitt 0,7 Beschwerden pro Tag; die Anzahl der Beschwerden ist Poisson-verteilt mit $\\lambda = 0{,}7$. Wie hoch ist die Wahrscheinlichkeit, dass an einem Tag genau 2 Beschwerden eingehen?",
        solution: [
          { type: "formula", block: true, tex: "P(X=2) = \\frac{0{,}7^2}{2!} e^{-0{,}7} = \\frac{0{,}49}{2}\\cdot e^{-0{,}7} \\approx 0{,}245 \\cdot 0{,}497 \\approx 0{,}122" },
          { type: "p", text: "Die Wahrscheinlichkeit für genau 2 Beschwerden an einem Tag liegt bei rund 12,2%." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche Voraussetzung muss für eine Binomialverteilung erfüllt sein?", options: ["Unendlich viele mögliche Ausgänge pro Versuch", "$n$ unabhängige, identische Versuche mit konstanter Erfolgswahrscheinlichkeit $p$ und zwei möglichen Ausgängen", "Die Ereignisse müssen stetig verteilt sein", "$p$ muss sich von Versuch zu Versuch ändern"], correctIndex: 1, explanation: "Das sind die klassischen Bernoulli-Versuchsbedingungen der Binomialverteilung." },
      { id: "q2", question: "Der Erwartungswert einer $B(n,p)$-verteilten Zufallsvariable ist:", options: ["$n+p$", "$n \\cdot p$", "$p/n$", "$n \\cdot p \\cdot (1-p)$"], correctIndex: 1, explanation: "$E(X) = np$ - die erwartete Anzahl Erfolge bei $n$ Versuchen mit Erfolgswahrscheinlichkeit $p$." },
      { id: "q3", question: "Wofür eignet sich die Poissonverteilung besonders gut?", options: ["Für die Anzahl seltener, unabhängiger Ereignisse in einem festen Intervall", "Für stetige Messgrößen wie Gewicht", "Nur für exakt zwei Versuche", "Für symmetrische, glockenförmige Verteilungen mit bekanntem $\\sigma$"], correctIndex: 0, explanation: "Die Poissonverteilung modelliert Zähldaten wie Anzahl Anrufe, Beschwerden oder Unfälle pro Zeiteinheit." },
      { id: "q4", question: "Bei der Poissonverteilung mit Parameter $\\lambda$ gilt für Erwartungswert und Varianz:", options: ["$E(X) = \\lambda$, $\\text{Var}(X) = \\lambda$", "$E(X) = \\lambda^2$, $\\text{Var}(X) = \\lambda$", "$E(X) = \\lambda$, $\\text{Var}(X) = \\lambda^2$", "Beide sind unabhängig von $\\lambda$"], correctIndex: 0, explanation: "Eine Besonderheit der Poissonverteilung ist, dass Erwartungswert und Varianz beide gleich $\\lambda$ sind." },
      { id: "q5", question: "Bei $X \\sim B(6; 0{,}25)$ ist die Varianz:", options: ["$6 \\cdot 0{,}25 = 1{,}5$", "$6 \\cdot 0{,}25 \\cdot 0{,}75 = 1{,}125$", "$0{,}25 \\cdot 0{,}75 = 0{,}1875$", "$6^2 \\cdot 0{,}25 = 9$"], correctIndex: 1, explanation: "$\\text{Var}(X) = np(1-p) = 6 \\cdot 0{,}25 \\cdot 0{,}75 = 1{,}125$." }
    ]
  },
  {
    id: "normalverteilung",
    chapter: 3,
    order: 7,
    title: "Normalverteilung & Zentraler Grenzwertsatz",
    explanation: [
      { type: "p", text: "Die Normalverteilung ist die wichtigste stetige Verteilung in der Statistik - viele natürliche und wirtschaftliche Größen sind (näherungsweise) normalverteilt, und sie bildet die Grundlage für zahlreiche Verfahren der induktiven Statistik." },
      { type: "p", text: "Eine normalverteilte Zufallsvariable $X \\sim N(\\mu, \\sigma^2)$ hat die Dichte:" },
      { type: "formula", block: true, tex: "f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} \\exp\\left(-\\frac{(x-\\mu)^2}{2\\sigma^2}\\right)" },
      { type: "p", text: "mit $E(X)=\\mu$ und $\\text{Var}(X)=\\sigma^2$. Die Dichte ist glockenförmig und symmetrisch um $\\mu$. Ein Sonderfall ist die Standardnormalverteilung $N(0,1)$ mit $\\mu=0$ und $\\sigma=1$; jede beliebige Normalverteilung lässt sich durch Standardisierung darauf zurückführen:" },
      { type: "formula", block: true, tex: "Z = \\frac{X - \\mu}{\\sigma} \\sim N(0,1)" },
      { type: "p", text: "Dank der Standardisierung genügt eine einzige Tabelle (die Standardnormalverteilungstabelle) für alle Normalverteilungen." },
      { type: "p", text: "Der Zentrale Grenzwertsatz erklärt, warum die Normalverteilung in der Praxis so häufig auftritt: Sind $X_1, \\dots, X_n$ unabhängig und identisch verteilt mit endlichem Erwartungswert und endlicher Varianz, so ist ihre Summe (bzw. ihr Mittelwert) für hinreichend großes $n$ näherungsweise normalverteilt - unabhängig davon, welcher Verteilung die einzelnen $X_i$ ursprünglich folgen. Dies ist eine der wichtigsten Grundlagen der induktiven Statistik." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Das Gewicht von Zuckerpaketen ist normalverteilt mit $\\mu = 1000$g und $\\sigma = 1{,}2$g. Standardisieren Sie den Wert $x = 1002{,}4$g, um den entsprechenden $z$-Wert zu bestimmen.",
        solution: [
          { type: "formula", block: true, tex: "z = \\frac{1002{,}4 - 1000}{1{,}2} = \\frac{2{,}4}{1{,}2} = 2" },
          { type: "p", text: "Ein Zuckerpaket mit 1002,4g liegt also genau 2 Standardabweichungen über dem Mittelwert." }
        ]
      },
      {
        id: "ex2",
        prompt: "Warum ist der Zentrale Grenzwertsatz so wichtig für die induktive Statistik, obwohl die Grundgesamtheit selbst gar nicht normalverteilt sein muss?",
        solution: [
          { type: "p", text: "Der Zentrale Grenzwertsatz garantiert, dass der Stichprobenmittelwert $\\bar{X}$ bei hinreichend großem Stichprobenumfang näherungsweise normalverteilt ist - unabhängig von der tatsächlichen Verteilung der Grundgesamtheit. Dadurch können Konfidenzintervalle und Hypothesentests, die auf der Normalverteilung basieren, auch angewendet werden, wenn die Merkmalsverteilung in der Grundgesamtheit unbekannt oder nicht normal ist." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche Parameter bestimmen eine Normalverteilung $N(\\mu,\\sigma^2)$ vollständig?", options: ["Nur $\\mu$", "$\\mu$ und $\\sigma^2$", "Nur $\\sigma^2$", "Median und Modus"], correctIndex: 1, explanation: "Erwartungswert $\\mu$ und Varianz $\\sigma^2$ legen Lage und Form der Normalverteilung vollständig fest." },
      { id: "q2", question: "Wie standardisiert man eine normalverteilte Zufallsvariable $X \\sim N(\\mu,\\sigma^2)$?", options: ["$Z = X - \\mu$", "$Z = \\frac{X-\\mu}{\\sigma}$", "$Z = \\frac{X}{\\sigma}$", "$Z = X \\cdot \\sigma$"], correctIndex: 1, explanation: "Durch Subtraktion des Mittelwerts und Division durch die Standardabweichung entsteht die Standardnormalverteilung $N(0,1)$." },
      { id: "q3", question: "Was besagt der Zentrale Grenzwertsatz?", options: ["Jede einzelne Zufallsvariable ist normalverteilt", "Die Summe/das Mittel vieler unabhängiger, identisch verteilter Zufallsvariablen ist für großes $n$ näherungsweise normalverteilt", "Nur normalverteilte Merkmale haben einen Erwartungswert", "Die Varianz einer Stichprobe ist immer 0"], correctIndex: 1, explanation: "Das ist der Kerninhalt des Zentralen Grenzwertsatzes - unabhängig von der Ursprungsverteilung." },
      { id: "q4", question: "Die Standardnormalverteilung hat...", options: ["$\\mu=1, \\sigma=0$", "$\\mu=0, \\sigma=1$", "$\\mu=0, \\sigma=0$", "beliebige $\\mu$ und $\\sigma$"], correctIndex: 1, explanation: "$N(0,1)$ ist per Definition die Normalverteilung mit Erwartungswert 0 und Standardabweichung 1." },
      { id: "q5", question: "Die Dichtefunktion der Normalverteilung ist...", options: ["rechtsschief", "linksschief", "symmetrisch (glockenförmig) um $\\mu$", "immer flach (rechteckig)"], correctIndex: 2, explanation: "Die Normalverteilung ist die klassische symmetrische Glockenkurve." }
    ]
  },
  {
    id: "chi-quadrat-verteilung",
    chapter: 3,
    order: 8,
    title: "Chi-Quadrat-Verteilung",
    explanation: [
      { type: "p", text: "Die Chi-Quadrat-Verteilung ($\\chi^2$-Verteilung) entsteht als Verteilung der Summe quadrierter, unabhängiger, standardnormalverteilter Zufallsvariablen:" },
      { type: "formula", block: true, tex: "X = \\sum_{i=1}^{v} Z_i^2 \\sim \\chi^2(v), \\qquad Z_i \\sim N(0,1) \\text{ unabh\\\"angig}" },
      { type: "p", text: "Der Parameter $v$ heißt Freiheitsgrade (degrees of freedom). Es gilt:" },
      { type: "formula", block: true, tex: "E(X) = v \\qquad \\text{Var}(X) = 2v" },
      { type: "p", text: "Da die Chi-Quadrat-Verteilung aus quadrierten Werten entsteht, kann sie nur nicht-negative Werte annehmen und ist rechtsschief - für große $v$ nähert sie sich aber der Normalverteilung an." },
      { type: "p", text: "Die $\\chi^2$-Verteilung ist vor allem als Prüfverteilung wichtig: Sie bildet die Grundlage für den Chi-Quadrat-Verteilungstest (Anpassungstest) und den Chi-Quadrat-Unabhängigkeitstest, die in der induktiven Statistik behandelt werden." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Eine Chi-Quadrat-verteilte Zufallsvariable hat 5 Freiheitsgrade. Wie groß sind Erwartungswert und Varianz?",
        solution: [
          { type: "formula", block: true, tex: "E(X) = v = 5 \\qquad \\text{Var}(X) = 2v = 10" }
        ]
      },
      {
        id: "ex2",
        prompt: "Warum kann eine Chi-Quadrat-verteilte Zufallsvariable niemals negative Werte annehmen?",
        solution: [
          { type: "p", text: "Weil sie als Summe von Quadraten standardnormalverteilter Zufallsvariablen definiert ist ($X = \\sum Z_i^2$), und Quadrate sind immer nicht-negativ. Die Summe nicht-negativer Größen kann daher selbst nicht negativ werden." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie entsteht eine Chi-Quadrat-verteilte Zufallsvariable?", options: ["Als Summe unabhängiger, standardnormalverteilter Zufallsvariablen", "Als Summe der Quadrate unabhängiger, standardnormalverteilter Zufallsvariablen", "Als Produkt zweier Binomialverteilungen", "Als Differenz zweier Poissonverteilungen"], correctIndex: 1, explanation: "$X = \\sum_{i=1}^v Z_i^2$ mit unabhängigen $Z_i \\sim N(0,1)$." },
      { id: "q2", question: "Was gibt der Parameter $v$ bei der Chi-Quadrat-Verteilung an?", options: ["Den Erwartungswert direkt in Prozent", "Die Anzahl der Freiheitsgrade", "Die Varianz der Ursprungsdaten", "Die Anzahl der Merkmalsträger in der Grundgesamtheit"], correctIndex: 1, explanation: "$v$ (Freiheitsgrade) bestimmt Form, Erwartungswert und Varianz der Verteilung." },
      { id: "q3", question: "Welche Werte kann eine Chi-Quadrat-verteilte Zufallsvariable annehmen?", options: ["Nur negative Werte", "Beliebige reelle Zahlen", "Nur nicht-negative Werte", "Nur Werte zwischen -1 und 1"], correctIndex: 2, explanation: "Da sie aus quadrierten Größen besteht, sind nur Werte $\\geq 0$ möglich." },
      { id: "q4", question: "Wofür wird die Chi-Quadrat-Verteilung in der induktiven Statistik hauptsächlich verwendet?", options: ["Für Konfidenzintervalle des Mittelwerts", "Als Prüfverteilung für Anpassungs- und Unabhängigkeitstests", "Zur Berechnung des Gini-Koeffizienten", "Für die Schiefe einer Verteilung"], correctIndex: 1, explanation: "Chi-Quadrat-Tests (Verteilungstest und Unabhängigkeitstest) basieren auf dieser Verteilung." },
      { id: "q5", question: "Für Varianz und Erwartungswert einer $\\chi^2(v)$-verteilten Zufallsvariable gilt:", options: ["$E(X)=v$, $\\text{Var}(X)=2v$", "$E(X)=2v$, $\\text{Var}(X)=v$", "$E(X)=v^2$, $\\text{Var}(X)=v$", "$E(X)=0$, $\\text{Var}(X)=1$"], correctIndex: 0, explanation: "Erwartungswert entspricht den Freiheitsgraden, die Varianz ist das Doppelte davon." }
    ]
  }
];
