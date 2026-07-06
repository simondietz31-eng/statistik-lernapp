const CHAPTER4_TOPICS = [
  {
    id: "stichprobenfunktionen",
    chapter: 4,
    order: 1,
    title: "Grundlagen: Stichprobenfunktionen",
    icon: "🧪",
    summary: "Wie der Stichprobenmittelwert verteilt ist - mit und ohne Zurücklegen gezogen.",
    explanation: [
      { type: "p", text: "Die induktive (schließende) Statistik zieht - anders als die deskriptive Statistik, die nur vorliegende Daten beschreibt - einen wahrscheinlichkeitstheoretisch begründeten Schluss von einer bekannten Stichprobe auf eine unbekannte Grundgesamtheit ('vom Teil aufs Ganze'). Sie ist besonders bei Teilerhebungen relevant, wo man die Grundgesamtheit gar nicht vollständig kennt." },
      { type: "p", text: "Zieht man $n$ Merkmalsträger zufällig aus der Grundgesamtheit, so ist das Ergebnis der $i$-ten Ziehung eine Realisation der Zufallsvariable $X_i$ (Stichprobenvariable). Die $n$ Stichprobenvariablen bilden zusammen den Stichprobenvektor $(X_1, \\dots, X_n)$." },
      { type: "p", text: "Eine Stichprobenfunktion ist eine Funktion der Stichprobenvariablen, die einer konkreten Stichprobe eine Kennzahl zuordnet (z. B. den Stichprobenmittelwert) - und ist damit selbst wieder eine Zufallsvariable. Sie bildet die Brücke zwischen Stichprobe und Grundgesamtheit." },
      { type: "p", text: "Besonders wichtig ist die Verteilung des Stichprobenmittelwerts $\\bar{X}$. Sie hängt davon ab, ob mit oder ohne Zurücklegen gezogen wird und ob das Merkmal in der Grundgesamtheit normalverteilt ist:" },
      { type: "list", items: [
        "Ziehen mit Zurücklegen, Merkmal in der Grundgesamtheit normalverteilt $N(\\mu,\\sigma^2)$: es gilt exakt $\\bar{X} \\sim N\\!\\left(\\mu, \\frac{\\sigma^2}{n}\\right)$.",
        "Ziehen mit Zurücklegen, beliebig verteiltes Merkmal, $n \\geq 30$: nach dem Zentralen Grenzwertsatz gilt näherungsweise $\\bar{X} \\sim N\\!\\left(\\mu, \\frac{\\sigma^2}{n}\\right)$.",
        "Ziehen ohne Zurücklegen, beliebig verteiltes Merkmal, $n \\geq 30$ und $N \\geq 2n$: näherungsweise $\\bar{X} \\sim N\\!\\left(\\mu, \\frac{\\sigma^2}{n}\\cdot\\frac{N-n}{N-1}\\right)$ - der zusätzliche Faktor heißt Endlichkeitskorrektur und verkleinert die Varianz, da eine Ziehung ohne Zurücklegen weniger Unsicherheit enthält."
      ]}
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Erklären Sie in eigenen Worten, warum die Endlichkeitskorrektur $(N-n)/(N-1)$ die Varianz von $\\bar{X}$ beim Ziehen ohne Zurücklegen verringert (statt sie unverändert zu lassen wie beim Ziehen mit Zurücklegen).",
        solution: [
          { type: "p", text: "Beim Ziehen ohne Zurücklegen 'verbraucht' man Informationen aus der Grundgesamtheit: je mehr Elemente bereits gezogen wurden, desto weniger Unsicherheit bleibt über die verbleibende Grundgesamtheit. Dieser Effekt ist umso stärker, je größer der Stichprobenanteil $n/N$ an der Grundgesamtheit ist. Der Korrekturfaktor ist stets kleiner als 1 und verkleinert damit die Varianz gegenüber dem Ziehen mit Zurücklegen." }
        ]
      },
      {
        id: "ex2",
        prompt: "Was ist der konzeptionelle Unterschied zwischen einer Stichprobenvariable $X_i$ und einer Stichprobenfunktion wie $\\bar{X}$?",
        solution: [
          { type: "p", text: "$X_i$ beschreibt das Ergebnis einer einzelnen Ziehung (den $i$-ten Merkmalsträger). Eine Stichprobenfunktion wie $\\bar{X}$ ist dagegen eine Funktion aller $n$ Stichprobenvariablen zusammen (hier: ihr Durchschnitt) und fasst die gesamte Stichprobe in einer einzigen Kennzahl zusammen, die als Grundlage für Schätz- und Testverfahren dient." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was unterscheidet die induktive von der deskriptiven Statistik?", options: ["Die induktive Statistik beschreibt nur die vorliegenden Daten", "Die induktive Statistik schließt von einer Stichprobe auf eine unbekannte Grundgesamtheit", "Beide sind identisch", "Die induktive Statistik benötigt keine Wahrscheinlichkeitstheorie"], correctIndex: 1, explanation: "Die induktive Statistik zieht einen wahrscheinlichkeitstheoretisch begründeten Schluss 'vom Teil aufs Ganze'." },
      { id: "q2", question: "Wann ist der Stichprobenmittelwert $\\bar{X}$ auch bei einer beliebig verteilten Grundgesamtheit näherungsweise normalverteilt?", options: ["Immer, unabhängig vom Stichprobenumfang", "Für hinreichend großes $n$ (Faustregel $n \\geq 30$), nach dem Zentralen Grenzwertsatz", "Nur wenn die Grundgesamtheit bereits normalverteilt ist", "Nie, das ist unmöglich"], correctIndex: 1, explanation: "Der Zentrale Grenzwertsatz garantiert die näherungsweise Normalverteilung für hinreichend große Stichproben." },
      { id: "q3", question: "Was bewirkt die Endlichkeitskorrektur beim Ziehen ohne Zurücklegen?", options: ["Sie vergrößert die Varianz von $\\bar{X}$", "Sie verkleinert die Varianz von $\\bar{X}$ gegenüber dem Ziehen mit Zurücklegen", "Sie verändert nur den Erwartungswert", "Sie macht die Verteilung schief"], correctIndex: 1, explanation: "Der Korrekturfaktor $(N-n)/(N-1)$ ist kleiner als 1 und reduziert damit die Varianz." },
      { id: "q4", question: "Eine Stichprobenfunktion ist...", options: ["eine feste Zahl, die niemals variiert", "eine Funktion der Stichprobenvariablen und damit selbst eine Zufallsvariable", "nur bei normalverteilten Merkmalen definiert", "identisch mit der Grundgesamtheit"], correctIndex: 1, explanation: "Da sie von den zufälligen Stichprobenvariablen abhängt, ist eine Stichprobenfunktion selbst zufällig." },
      { id: "q5", question: "Wenn eine Grundgesamtheit bereits exakt normalverteilt ist und mit Zurücklegen gezogen wird, gilt für $\\bar{X}$:", options: ["$\\bar{X}$ ist nur näherungsweise normalverteilt, egal wie groß $n$ ist", "$\\bar{X} \\sim N(\\mu, \\sigma^2/n)$ exakt, unabhängig vom Stichprobenumfang", "$\\bar{X}$ ist nie normalverteilt", "$\\bar{X}$ hat eine Chi-Quadrat-Verteilung"], correctIndex: 1, explanation: "Bei normalverteilter Grundgesamtheit und Ziehen mit Zurücklegen ist $\\bar{X}$ exakt (nicht nur näherungsweise) normalverteilt, auch für kleine $n$." }
    ]
  },
  {
    id: "schaetzverfahren",
    chapter: 4,
    order: 2,
    title: "Schätzverfahren & Konfidenzintervalle",
    icon: "🧮",
    summary: "Punkt- und Intervallschätzung: wie man aus einer Stichprobe auf einen unbekannten Parameter schließt.",
    explanation: [
      { type: "p", text: "Schätzverfahren haben die Aufgabe, unbekannte Parameter der Grundgesamtheit (z. B. den Erwartungswert $\\mu$) anhand einer Stichprobe zu schätzen. Man unterscheidet Punktschätzung und Intervallschätzung." },
      { type: "p", text: "Eine gute Schätzfunktion sollte folgende Eigenschaften besitzen:" },
      { type: "list", items: [
        "Erwartungstreue: der Erwartungswert der Schätzfunktion entspricht dem wahren Parameter, $E(\\hat{\\theta}) = \\theta$.",
        "Konsistenz: mit wachsendem Stichprobenumfang nähert sich die Schätzfunktion dem wahren Parameter immer weiter an.",
        "Effizienz: unter allen erwartungstreuen Schätzfunktionen gleichen Umfangs hat sie die kleinste Varianz."
      ]},
      { type: "p", text: "Die Punktschätzung liefert einen einzelnen Wert als Schätzung (z. B. $\\bar{x}$ als Schätzwert für $\\mu$). Ihr großer Nachteil: Es lässt sich keine Aussage über die Genauigkeit der Schätzung treffen." },
      { type: "p", text: "Die Intervallschätzung (Konfidenzintervall) löst dieses Problem: Man konstruiert aus der Stichprobe ein Intervall, das den unbekannten Parameter mit einer vorgegebenen Wahrscheinlichkeit $1-\\alpha$ (Konfidenzniveau bzw. Sicherheitswahrscheinlichkeit) überdeckt. $\\alpha$ heißt Signifikanzniveau bzw. Irrtumswahrscheinlichkeit." },
      { type: "p", text: "Vorgehen zur Konstruktion eines (zweiseitigen) Konfidenzintervalls für den Erwartungswert $\\mu$ (bei bekanntem $\\sigma$):" },
      { type: "list", items: [
        "1. Punktschätzung: $\\bar{x}$ als Schätzwert für $\\mu$.",
        "2. Bestimme das $(1-\\alpha/2)$-Quantil $z_{1-\\alpha/2}$ der Standardnormalverteilung (bzw. $z_{1-\\alpha}$ für ein einseitiges Intervall).",
        "3. Berechne den maximalen Schätzfehler: $z_{1-\\alpha/2} \\cdot \\sigma_{\\bar{X}}$ mit $\\sigma_{\\bar{X}} = \\sigma/\\sqrt{n}$.",
        "4. Die Konfidenzgrenzen ergeben sich durch Addition/Subtraktion des maximalen Fehlers vom Punktschätzwert."
      ]},
      { type: "formula", block: true, tex: "\\text{KI} = \\left[\\bar{x} - z_{1-\\alpha/2}\\cdot\\frac{\\sigma}{\\sqrt{n}},\\; \\bar{x} + z_{1-\\alpha/2}\\cdot\\frac{\\sigma}{\\sqrt{n}}\\right]" },
      { type: "p", text: "Ein einseitiges Konfidenzintervall hat nur eine Ober- oder Untergrenze - sinnvoll, wenn nur interessiert, ob ein Parameter einen Höchst- oder Mindestwert über-/unterschreitet. Genauigkeit (schmales Intervall) und Konfidenzniveau (hohe Sicherheit) stehen dabei im Zielkonflikt: Ein höheres Konfidenzniveau erfordert entweder ein breiteres Intervall oder einen größeren Stichprobenumfang." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Eine Zuckerfabrik befüllt 5.000 Packungen mit einem Sollgewicht von 1.000g. Aus einer Stichprobe von $n=50$ Packungen (mit Zurücklegen) ergibt sich $\\bar{x} = 1000{,}33$g, die Standardabweichung der Grundgesamtheit ist bekannt mit $\\sigma = 1{,}4$g. Konstruieren Sie ein zweiseitiges 97,5%-Konfidenzintervall für $\\mu$ (verwenden Sie $z_{0{,}9875} \\approx 2{,}24$).",
        solution: [
          { type: "formula", block: true, tex: "\\sigma_{\\bar{X}} = \\frac{1{,}4}{\\sqrt{50}} \\approx 0{,}198" },
          { type: "formula", block: true, tex: "\\text{Max. Fehler} = 2{,}24 \\cdot 0{,}198 \\approx 0{,}44" },
          { type: "formula", block: true, tex: "\\text{KI} = [1000{,}33 - 0{,}44,\\; 1000{,}33 + 0{,}44] = [999{,}89,\\; 1000{,}77]" },
          { type: "p", text: "Mit 97,5%iger Sicherheit liegt das wahre durchschnittliche Füllgewicht zwischen 999,89g und 1000,77g." }
        ]
      },
      {
        id: "ex2",
        prompt: "Wie verändert sich das Konfidenzintervall aus der vorigen Aufgabe, wenn der Stichprobenumfang statt $n=50$ auf $n=200$ (also vervierfacht) erhöht wird, bei gleichem $\\bar{x}$ und $\\sigma$? Rechnen Sie den maximalen Fehler neu aus und interpretieren Sie.",
        solution: [
          { type: "formula", block: true, tex: "\\sigma_{\\bar{X}} = \\frac{1{,}4}{\\sqrt{200}} \\approx 0{,}099 \\qquad \\text{Max. Fehler} = 2{,}24 \\cdot 0{,}099 \\approx 0{,}22" },
          { type: "p", text: "Eine Vervierfachung des Stichprobenumfangs halbiert den maximalen Fehler (da $\\sigma_{\\bar{X}}$ mit $\\sqrt{n}$ im Nenner skaliert) - das Konfidenzintervall wird enger und die Schätzung damit präziser, bei gleichbleibendem Konfidenzniveau." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was ist der Hauptnachteil der reinen Punktschätzung gegenüber der Intervallschätzung?", options: ["Sie ist rechnerisch aufwendiger", "Es lässt sich keine Aussage über die Genauigkeit/Zuverlässigkeit der Schätzung treffen", "Sie funktioniert nur bei kleinen Stichproben", "Sie benötigt immer eine Chi-Quadrat-Verteilung"], correctIndex: 1, explanation: "Ein einzelner Punktschätzwert sagt nichts darüber aus, wie nah er am wahren Parameter liegt." },
      { id: "q2", question: "Was bedeutet Erwartungstreue einer Schätzfunktion?", options: ["Die Schätzfunktion liefert immer den exakt richtigen Wert", "Der Erwartungswert der Schätzfunktion entspricht dem wahren Parameter", "Die Varianz der Schätzfunktion ist 0", "Die Schätzfunktion ist unabhängig vom Stichprobenumfang"], correctIndex: 1, explanation: "Erwartungstreue bedeutet $E(\\hat{\\theta}) = \\theta$ - im Mittel über viele Stichproben trifft die Schätzung den wahren Wert." },
      { id: "q3", question: "Was passiert mit einem Konfidenzintervall, wenn man bei gleichem Stichprobenumfang das Konfidenzniveau von 95% auf 99% erhöht?", options: ["Das Intervall wird enger", "Das Intervall wird breiter", "Das Intervall bleibt gleich groß", "Das Konfidenzniveau hat keinen Einfluss auf die Intervallbreite"], correctIndex: 1, explanation: "Ein höheres Konfidenzniveau erfordert (bei gleichem $n$) ein breiteres Intervall - Genauigkeit und Sicherheit stehen im Zielkonflikt." },
      { id: "q4", question: "Wie verändert sich der maximale Schätzfehler eines Konfidenzintervalls, wenn der Stichprobenumfang $n$ vervierfacht wird (alles andere gleich)?", options: ["Er verdoppelt sich", "Er bleibt gleich", "Er halbiert sich", "Er vervierfacht sich"], correctIndex: 2, explanation: "Da der Standardfehler mit $\\sigma/\\sqrt{n}$ skaliert, führt eine Vervierfachung von $n$ zu einer Halbierung des Fehlers." },
      { id: "q5", question: "Ein einseitiges Konfidenzintervall verwendet man, wenn...", options: ["man nur an einer Ober- oder Untergrenze interessiert ist, nicht an beiden", "die Stichprobe zu klein ist", "die Grundgesamtheit nicht normalverteilt ist", "$\\sigma$ unbekannt ist"], correctIndex: 0, explanation: "Ein einseitiges Intervall passt, wenn nur interessiert, ob ein Mindest- oder Höchstwert über-/unterschritten wird." },
      { id: "q6", question: "Konsistenz einer Schätzfunktion bedeutet:", options: ["Sie ist immer erwartungstreu", "Mit wachsendem Stichprobenumfang nähert sie sich dem wahren Parameter an", "Sie hat konstante Varianz", "Sie funktioniert nur bei $n=1$"], correctIndex: 1, explanation: "Konsistenz beschreibt das Verhalten der Schätzfunktion für wachsendes $n$: sie konvergiert gegen den wahren Wert." }
    ]
  },
  {
    id: "testverfahren-grundlagen",
    chapter: 4,
    order: 3,
    title: "Testverfahren: Grundlagen",
    icon: "⚖️",
    summary: "Nullhypothese, Signifikanzniveau und p-Wert - das Handwerkszeug jedes Hypothesentests.",
    explanation: [
      { type: "p", text: "Testverfahren prüfen anhand einer Stichprobe, ob eine Hypothese über die Grundgesamtheit beibehalten oder verworfen werden muss. Man unterscheidet Parametertests (Hypothese über einen Verteilungsparameter, z. B. den Mittelwert), Verteilungstests (Hypothese über die Form der Verteilung) und Unabhängigkeitstests (Hypothese über die Unabhängigkeit zweier Merkmale)." },
      { type: "p", text: "Jeder Test besteht aus denselben Bausteinen:" },
      { type: "list", items: [
        "Nullhypothese $H_0$ und Alternativhypothese $H_1$: $H_0$ wird beibehalten, sofern die Daten nicht stark genug dagegensprechen. Üblicherweise formuliert man die zu beweisende Behauptung als $H_1$, da diese die stärkere Evidenz erfordert.",
        "Zweiseitiger Test (Punkthypothese): $H_0: \\theta = \\theta_0$ gegen $H_1: \\theta \\neq \\theta_0$.",
        "Einseitiger Test (Bereichshypothese): $H_0: \\theta \\leq \\theta_0$ gegen $H_1: \\theta > \\theta_0$ (oder umgekehrt).",
        "Teststatistik: eine Stichprobenfunktion, deren Verteilung unter $H_0$ bekannt ist.",
        "Beibehaltungs- und Ablehnungsbereich: der Wertebereich der Teststatistik wird in einen Bereich, der zur Beibehaltung von $H_0$ führt, und einen Ablehnungsbereich (kritischer Bereich) aufgeteilt."
      ]},
      { type: "p", text: "Das Signifikanzniveau $\\alpha$ ist die Wahrscheinlichkeit, eine eigentlich wahre $H_0$ fälschlich abzulehnen (Fehler 1. Art / $\\alpha$-Fehler). Die Sicherheitswahrscheinlichkeit $1-\\alpha$ ist die Wahrscheinlichkeit, eine wahre $H_0$ korrekt beizubehalten. Ein zweiter, nicht direkt kontrollierbarer Fehler ist der Fehler 2. Art ($\\beta$-Fehler): eine falsche $H_0$ wird fälschlich beibehalten." },
      { type: "p", text: "Alternativ zum Vergleich mit kritischen Werten kann man mit dem p-Wert arbeiten: die Wahrscheinlichkeit, unter $H_0$ einen mindestens so extremen Wert der Teststatistik zu beobachten wie den tatsächlich realisierten." },
      { type: "list", items: [
        "Rechtsseitiger Test: $p = P(T \\geq t_{\\text{beob}} \\mid H_0)$",
        "Linksseitiger Test: $p = P(T \\leq t_{\\text{beob}} \\mid H_0)$",
        "Zweiseitiger Test: $p = 2 \\cdot \\min\\{P(T\\geq t_{\\text{beob}}), P(T\\leq t_{\\text{beob}})\\}$"
      ]},
      { type: "p", text: "Entscheidungsregel: Ist $p \\leq \\alpha$, wird $H_0$ verworfen; ist $p > \\alpha$, wird $H_0$ beibehalten." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Hersteller behauptet, seine Schrauben seien im Schnitt genau 10mm lang. Ein Prüfer vermutet, dass sie im Schnitt zu lang gefertigt werden. Formulieren Sie $H_0$ und $H_1$ und geben Sie an, ob es sich um einen ein- oder zweiseitigen Test handelt.",
        solution: [
          { type: "p", text: "$H_0: \\mu \\leq 10$mm (Soll wird eingehalten) gegen $H_1: \\mu > 10$mm (Schrauben sind im Schnitt zu lang). Es handelt sich um einen einseitigen (rechtsseitigen) Test, da nur ein Überschreiten des Sollwerts geprüft wird, nicht eine beliebige Abweichung." }
        ]
      },
      {
        id: "ex2",
        prompt: "Was bedeutet es konkret, wenn bei einem Test mit $\\alpha = 0{,}05$ ein p-Wert von $p = 0{,}03$ berechnet wird? Wie lautet die Testentscheidung?",
        solution: [
          { type: "p", text: "Da $p = 0{,}03 \\leq \\alpha = 0{,}05$, wird $H_0$ verworfen und $H_1$ angenommen. Inhaltlich: Wäre $H_0$ wahr, läge die Wahrscheinlichkeit, einen mindestens so extremen Stichprobenbefund zu beobachten, bei nur 3% - das gilt als ausreichend unwahrscheinlich, um $H_0$ zugunsten von $H_1$ zu verwerfen." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Der Fehler 1. Art (α-Fehler) tritt auf, wenn...", options: ["eine wahre $H_0$ fälschlich abgelehnt wird", "eine falsche $H_0$ fälschlich beibehalten wird", "der Stichprobenumfang zu klein ist", "die Teststatistik negativ wird"], correctIndex: 0, explanation: "Der α-Fehler beschreibt genau dieses Risiko und wird durch das Signifikanzniveau kontrolliert." },
      { id: "q2", question: "Welche Aussage über $H_0$ und $H_1$ ist korrekt?", options: ["$H_0$ und $H_1$ werden immer beide angenommen", "Üblicherweise formuliert man die zu beweisende Behauptung als $H_1$, da diese stärkere Evidenz benötigt", "$H_0$ ist immer die Behauptung, die bewiesen werden soll", "$H_1$ wird nie verworfen"], correctIndex: 1, explanation: "Da $H_0$ nur verworfen wird, wenn genügend Evidenz vorliegt, macht man die zu beweisende Aussage typischerweise zur Alternativhypothese." },
      { id: "q3", question: "Bei einem rechtsseitigen Test ($H_0: \\theta \\leq \\theta_0$ vs. $H_1: \\theta > \\theta_0$) berechnet sich der p-Wert als:", options: ["$P(T \\geq t_{\\text{beob}} \\mid H_0)$", "$P(T \\leq t_{\\text{beob}} \\mid H_0)$", "$2\\cdot P(T \\geq t_{\\text{beob}})$", "$P(H_0)$"], correctIndex: 0, explanation: "Beim rechtsseitigen Test interessiert die Wahrscheinlichkeit für mindestens so große Werte wie den beobachteten." },
      { id: "q4", question: "Wie lautet die Entscheidungsregel bei Verwendung des p-Werts?", options: ["$H_0$ verwerfen, wenn $p > \\alpha$", "$H_0$ verwerfen, wenn $p \\leq \\alpha$", "$H_0$ immer beibehalten, wenn $p$ existiert", "Der p-Wert hat keinen Einfluss auf die Entscheidung"], correctIndex: 1, explanation: "Ist der p-Wert kleiner oder gleich dem Signifikanzniveau, wird $H_0$ verworfen." },
      { id: "q5", question: "Ein Chi-Quadrat-Unabhängigkeitstest gehört zu welcher Testkategorie?", options: ["Parametertest", "Verteilungstest", "Unabhängigkeitstest", "Punktschätzung"], correctIndex: 2, explanation: "Er prüft explizit, ob zwei Merkmale unabhängig voneinander sind." },
      { id: "q6", question: "Die Sicherheitswahrscheinlichkeit $1-\\alpha$ ist...", options: ["die Wahrscheinlichkeit, eine wahre $H_0$ korrekt beizubehalten", "die Wahrscheinlichkeit, eine falsche $H_0$ beizubehalten", "immer gleich 0,05", "identisch mit dem p-Wert"], correctIndex: 0, explanation: "$1-\\alpha$ ergänzt das Signifikanzniveau zur Wahrscheinlichkeit einer korrekten Beibehaltungsentscheidung." }
    ]
  },
  {
    id: "test-mittelwert",
    chapter: 4,
    order: 4,
    title: "Test für den Mittelwert (z-Test)",
    icon: "🔬",
    summary: "Der z-Test Schritt für Schritt: prüfen, ob ein Mittelwert einem Sollwert entspricht.",
    explanation: [
      { type: "p", text: "Der z-Test prüft eine Hypothese über den Erwartungswert $\\mu$ einer (näherungsweise) normalverteilten Grundgesamtheit bei bekanntem $\\sigma$. Vorgehen:" },
      { type: "list", items: [
        "1. Hypothesen aufstellen, z. B. $H_0: \\mu = \\mu_0$ gegen $H_1: \\mu \\neq \\mu_0$ (zweiseitig) oder $H_0: \\mu \\leq \\mu_0$ gegen $H_1: \\mu > \\mu_0$ (einseitig).",
        "2. Signifikanzniveau $\\alpha$ festlegen.",
        "3. Kritischen Wert bzw. kritische Werte bestimmen: das $(1-\\alpha/2)$-Quantil (zweiseitig) bzw. $(1-\\alpha)$-Quantil (einseitig) der Standardnormalverteilung.",
        "4. Teststatistik aus der Stichprobe berechnen.",
        "5. Teststatistik mit dem kritischen Wert vergleichen und entscheiden."
      ]},
      { type: "p", text: "Die Teststatistik lautet:" },
      { type: "formula", block: true, tex: "z = \\frac{\\bar{x} - \\mu_0}{\\sigma/\\sqrt{n}}" },
      { type: "p", text: "Liegt $z$ im Ablehnungsbereich (jenseits des kritischen Werts), wird $H_0$ verworfen." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Schraubenhersteller vermutet, dass seine Schrauben im Schnitt länger als das Sollmaß von 10mm sind ($\\sigma = 0{,}1$mm bekannt). Eine Stichprobe von $n=50$ Schrauben ergibt $\\bar{x} = 10{,}1$mm. Testen Sie bei $\\alpha = 0{,}01$ (verwenden Sie $z_{0{,}99} \\approx 2{,}33$).",
        solution: [
          { type: "p", text: "$H_0: \\mu \\leq 10$ gegen $H_1: \\mu > 10$ (einseitiger, rechtsseitiger Test)." },
          { type: "formula", block: true, tex: "z = \\frac{10{,}1 - 10}{0{,}1/\\sqrt{50}} = \\frac{0{,}1}{0{,}0141} \\approx 7{,}07" },
          { type: "p", text: "Kritischer Wert: $z_{0{,}99} \\approx 2{,}33$. Da $z \\approx 7{,}07 > 2{,}33$, liegt die Teststatistik im Ablehnungsbereich - $H_0$ wird verworfen. Bei einem Signifikanzniveau von 1% gibt es signifikante Evidenz, dass die Schrauben im Schnitt zu lang sind." }
        ]
      },
      {
        id: "ex2",
        prompt: "Ein Unternehmen hatte bisher eine durchschnittliche Kundenzufriedenheit von $\\mu_0 = 28$ Punkten (Skala 1–50, $\\sigma=5$ bekannt). Nach einem Website-Relaunch befragt es $n=12$ Kunden und erhält $\\bar{x} \\approx 31{,}75$. Testen Sie bei $\\alpha=0{,}05$ zweiseitig, ob sich die Zufriedenheit verändert hat (verwenden Sie $z_{0{,}975}\\approx 1{,}96$).",
        solution: [
          { type: "p", text: "$H_0: \\mu = 28$ gegen $H_1: \\mu \\neq 28$ (zweiseitiger Test)." },
          { type: "formula", block: true, tex: "z = \\frac{31{,}75 - 28}{5/\\sqrt{12}} = \\frac{3{,}75}{1{,}44} \\approx 2{,}60" },
          { type: "p", text: "Da $|z| \\approx 2{,}60 > 1{,}96$, wird $H_0$ verworfen: Die Kundenzufriedenheit hat sich signifikant verändert. Hinweis: Bei einer derart kleinen Stichprobe ($n=12$) sollte das Ergebnis vorsichtig interpretiert werden - eine größere Stichprobe würde eine robustere Aussage erlauben." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie lautet die Teststatistik des z-Tests für den Mittelwert?", options: ["$z = \\bar{x} - \\mu_0$", "$z = \\frac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}}$", "$z = \\frac{\\sigma}{\\sqrt{n}}$", "$z = n \\cdot \\bar{x}$"], correctIndex: 1, explanation: "Die Teststatistik standardisiert die Abweichung des Stichprobenmittels vom hypothetischen Wert $\\mu_0$." },
      { id: "q2", question: "Bei einem zweiseitigen Test mit $\\alpha=0{,}05$ verwendet man als kritischen Wert...", options: ["$z_{0{,}95}$", "$z_{0{,}975}$", "$z_{0{,}05}$", "$z_{0{,}5}$"], correctIndex: 1, explanation: "Beim zweiseitigen Test teilt sich $\\alpha$ auf beide Seiten auf, daher braucht man das $(1-\\alpha/2)$-Quantil." },
      { id: "q3", question: "Wenn die berechnete Teststatistik $z$ betragsmäßig größer ist als der kritische Wert, bedeutet das:", options: ["$H_0$ wird beibehalten", "$H_0$ wird verworfen, $H_1$ wird angenommen", "Der Test ist ungültig", "Es liegt automatisch ein Fehler 2. Art vor"], correctIndex: 1, explanation: "Ein Wert jenseits des kritischen Werts liegt im Ablehnungsbereich, was zur Verwerfung von $H_0$ führt." },
      { id: "q4", question: "Warum sollte man das Testergebnis bei sehr kleinem Stichprobenumfang (z. B. $n=12$) vorsichtig interpretieren?", options: ["Weil der z-Test bei kleinem $n$ grundsätzlich falsch ist", "Weil die Schätzung des Mittelwerts bei kleinen Stichproben stärker vom Zufall beeinflusst und weniger robust ist", "Weil $\\sigma$ dann automatisch unbekannt ist", "Kleine Stichproben sind nie ein Problem"], correctIndex: 1, explanation: "Kleine Stichproben führen zu größerer Schwankung des Stichprobenmittelwerts und damit zu weniger belastbaren Testergebnissen." },
      { id: "q5", question: "Welche der folgenden Situationen erfordert einen einseitigen statt zweiseitigen Test?", options: ["Man möchte nur prüfen, ob $\\mu$ größer als ein Sollwert ist, nicht ob er allgemein abweicht", "Man möchte generell prüfen, ob sich $\\mu$ verändert hat", "Man hat keine konkrete Vermutung über die Richtung der Abweichung", "Ein einseitiger Test ist nie sinnvoll"], correctIndex: 0, explanation: "Ein einseitiger Test passt, wenn nur eine gerichtete Abweichung (größer oder kleiner) von Interesse ist." }
    ]
  },
  {
    id: "chi-quadrat-tests",
    chapter: 4,
    order: 5,
    title: "Chi-Quadrat-Verteilungs- und Unabhängigkeitstest",
    icon: "🧩",
    summary: "Passt eine Verteilung zu den Daten? Und sind zwei Merkmale unabhängig voneinander?",
    explanation: [
      { type: "p", text: "Chi-Quadrat-Tests prüfen nicht - wie der z-Test - eine Aussage über einen einzelnen Parameter, sondern Aussagen über die Form einer Verteilung oder die Unabhängigkeit zweier Merkmale." },
      { type: "p", text: "Der Chi-Quadrat-Verteilungstest (Anpassungstest) prüft, ob eine angenommene theoretische Verteilung zu den beobachteten Daten passt. Idee: man vergleicht die beobachteten Häufigkeiten $n_i$ mit den unter $H_0$ erwarteten (theoretischen) Häufigkeiten $n_i'$:" },
      { type: "formula", block: true, tex: "\\chi^2 = \\sum_{i=1}^{v} \\frac{(n_i - n_i')^2}{n_i'} \\sim \\chi^2(v-1) \\text{ unter } H_0" },
      { type: "p", text: "wobei $v$ die Anzahl unterschiedlicher Merkmalswerte ist. Kritischer Wert: $\\chi^2_{1-\\alpha; v-1}$. Je größer die Abweichung zwischen beobachteten und erwarteten Häufigkeiten, desto größer wird $\\chi^2$ - bei zu großem $\\chi^2$ wird $H_0$ (die angenommene Verteilung) verworfen." },
      { type: "p", text: "Der Chi-Quadrat-Unabhängigkeitstest prüft, ob zwei kategoriale Merkmale unabhängig voneinander sind. Man vergleicht die beobachteten gemeinsamen Häufigkeiten $n_{ij}$ mit den unter Unabhängigkeit erwarteten Häufigkeiten:" },
      { type: "formula", block: true, tex: "n_{ij}' = \\frac{n_{i\\cdot} \\cdot n_{\\cdot j}}{n} \\qquad \\chi^2 = \\sum_i \\sum_j \\frac{(n_{ij}-n_{ij}')^2}{n_{ij}'} \\sim \\chi^2\\big((v-1)(w-1)\\big) \\text{ unter } H_0" },
      { type: "p", text: "wobei $v$ und $w$ die Anzahl der Kategorien der beiden Merkmale sind. Beibehaltungsbereich: $[0, \\chi^2_{1-\\alpha;(v-1)(w-1)}]$, Ablehnungsbereich darüber." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Eine Wohnungsgenossenschaft erhielt an 200 Tagen folgende Beschwerdeanzahlen: 0 Beschwerden an 96 Tagen, 1 an 67 Tagen, 2 an 25 Tagen, 3 an 12 Tagen. Unter der Annahme einer Poissonverteilung mit $\\lambda=0{,}7$ wären die erwarteten Häufigkeiten 99, 70, 24 und 6. Testen Sie bei $\\alpha=0{,}05$, ob die Poisson-Annahme haltbar ist (kritischer Wert $\\chi^2_{0{,}95;3} \\approx 7{,}81$).",
        solution: [
          { type: "p", text: "$H_0$: Die Beschwerdezahlen sind Poisson-verteilt mit $\\lambda=0{,}7$. $H_1$: Sie sind es nicht." },
          { type: "formula", block: true, tex: "\\chi^2 = \\frac{(96-99)^2}{99} + \\frac{(67-70)^2}{70} + \\frac{(25-24)^2}{24} + \\frac{(12-6)^2}{6} \\approx 0{,}09+0{,}13+0{,}04+6{,}00 \\approx 6{,}26" },
          { type: "p", text: "Da $\\chi^2 \\approx 6{,}26 < 7{,}81$, liegt der Wert im Beibehaltungsbereich - die Poisson-Annahme wird bei $\\alpha=0{,}05$ nicht verworfen." }
        ]
      },
      {
        id: "ex2",
        prompt: "Eine Firma befragt 400 von 20.000 Mitarbeitenden zu einer geplanten Verlängerung der Mittagspause, aufgeteilt nach Tätigkeit: Verwaltung (40 positiv, 28 neutral, 32 negativ) und Produktion (140 positiv, 72 neutral, 88 negativ). Die erwarteten Häufigkeiten unter Unabhängigkeit sind 45, 25, 30 (Verwaltung) und 135, 75, 90 (Produktion). Testen Sie bei $\\alpha=0{,}05$ die Unabhängigkeit von Tätigkeit und Meinung (kritischer Wert $\\chi^2_{0{,}95;2}\\approx 5{,}99$).",
        solution: [
          { type: "p", text: "$H_0$: Tätigkeit und Meinung zur Pausenregelung sind unabhängig. $H_1$: Sie sind es nicht." },
          { type: "formula", block: true, tex: "\\chi^2 = \\frac{(40-45)^2}{45}+\\frac{(28-25)^2}{25}+\\frac{(32-30)^2}{30}+\\frac{(140-135)^2}{135}+\\frac{(72-75)^2}{75}+\\frac{(88-90)^2}{90} \\approx 1{,}40" },
          { type: "p", text: "Da $\\chi^2 \\approx 1{,}40 < 5{,}99$, liegt der Wert im Beibehaltungsbereich - die Unabhängigkeitsannahme wird nicht verworfen. Tätigkeit und Meinung zur Pausenregelung scheinen in dieser Stichprobe unabhängig voneinander zu sein." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was prüft der Chi-Quadrat-Verteilungstest (Anpassungstest)?", options: ["Ob zwei Merkmale unabhängig sind", "Ob eine angenommene theoretische Verteilung zu den beobachteten Daten passt", "Ob der Mittelwert einem Sollwert entspricht", "Ob die Varianz gleich 0 ist"], correctIndex: 1, explanation: "Der Anpassungstest vergleicht beobachtete mit theoretisch erwarteten Häufigkeiten unter einer angenommenen Verteilung." },
      { id: "q2", question: "Wie viele Freiheitsgrade hat der Chi-Quadrat-Unabhängigkeitstest bei $v$ Kategorien des einen und $w$ Kategorien des anderen Merkmals?", options: ["$v + w$", "$v \\cdot w$", "$(v-1)(w-1)$", "$v - w$"], correctIndex: 2, explanation: "Die Freiheitsgrade des Unabhängigkeitstests ergeben sich als Produkt der um je 1 reduzierten Kategorienanzahlen." },
      { id: "q3", question: "Ein großer Chi-Quadrat-Wert (weit im Ablehnungsbereich) deutet darauf hin, dass...", options: ["die beobachteten und erwarteten Häufigkeiten sehr gut übereinstimmen", "die beobachteten und erwarteten Häufigkeiten stark voneinander abweichen", "der Stichprobenumfang zu klein war", "$H_0$ auf jeden Fall wahr ist"], correctIndex: 1, explanation: "Große Abweichungen zwischen beobachteten und erwarteten Häufigkeiten führen zu einem großen $\\chi^2$-Wert und damit eher zur Ablehnung von $H_0$." },
      { id: "q4", question: "Wie werden die erwarteten Häufigkeiten $n_{ij}'$ beim Unabhängigkeitstest berechnet?", options: ["$n_{ij}' = n_{i\\cdot} + n_{\\cdot j}$", "$n_{ij}' = \\frac{n_{i\\cdot}\\cdot n_{\\cdot j}}{n}$", "$n_{ij}' = n_{i\\cdot} \\cdot n_{\\cdot j}$", "$n_{ij}' = n$"], correctIndex: 1, explanation: "Unter der Unabhängigkeitsannahme ergibt sich die erwartete gemeinsame Häufigkeit als Produkt der Randhäufigkeiten geteilt durch den Gesamtumfang." },
      { id: "q5", question: "Liegt der berechnete $\\chi^2$-Wert im Beibehaltungsbereich $[0, \\chi^2_{1-\\alpha;v-1}]$, bedeutet das:", options: ["$H_0$ wird verworfen", "$H_0$ wird beibehalten - die Abweichung ist nicht signifikant groß", "Der Test ist ungültig", "Es liegt garantiert kein Fehler vor"], correctIndex: 1, explanation: "Innerhalb des Beibehaltungsbereichs gibt es keine ausreichende Evidenz, um die Nullhypothese zu verwerfen." },
      { id: "q6", question: "Welche Art von Merkmalen eignet sich typischerweise für einen Chi-Quadrat-Unabhängigkeitstest?", options: ["Nur stetige, normalverteilte Merkmale", "Kategoriale (z. B. nominal- oder ordinalskalierte) Merkmale", "Nur ein einzelnes metrisches Merkmal", "Merkmale, die bereits als unabhängig bekannt sind"], correctIndex: 1, explanation: "Der Test arbeitet mit Häufigkeitstabellen (Kontingenztafeln) für kategoriale Merkmale." }
    ]
  }
];
