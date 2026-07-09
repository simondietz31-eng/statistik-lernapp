const NATWISS_CHAPTER10_TOPICS = [
  {
    id: "natwiss-coulomb",
    chapter: 10,
    order: 1,
    title: "Coulombsches Gesetz und elektrisches Feld",
    icon: "⚡",
    summary: "Elektrische Ladung, das Coulombsche Gesetz zur Berechnung der Kraft zwischen Punktladungen, das elektrische Feld als Kraftfeld im Raum und das Superpositionsprinzip.",
    explanation: [
      { type: "p", text: "Materie besteht aus positiv geladenen Protonen (im Atomkern) und negativ geladenen Elektronen (in der Atomhülle). Die elektrische Ladung ist eine fundamentale Eigenschaft der Materie. Gleichnamige Ladungen stoßen sich ab, ungleichnamige ziehen sich an. Die SI-Einheit der Ladung ist das Coulomb (C)." },
      { type: "p", text: "Der Erhaltungssatz der Ladung besagt: Elektrische Ladung kann weder erzeugt noch vernichtet werden – sie kann nur von einem Körper auf einen anderen übertragen werden. Außerdem ist elektrische Ladung quantisiert: Jede Ladung ist ein ganzzahliges Vielfaches der Elementarladung e." },
      { type: "formula", tex: "q = n \\cdot e, \\quad e = 1{,}602 \\times 10^{-19}\\,\\text{C}, \\quad n \\in \\mathbb{Z}" },
      { type: "p", text: "Das Coulombsche Gesetz beschreibt die elektrostatische Kraft zwischen zwei ruhenden Punktladungen q₁ und q₂ im Abstand r. Die Kraft wirkt entlang der Verbindungslinie (anziehend bei ungleichnamigen, abstoßend bei gleichnamigen Ladungen):" },
      { type: "formula", tex: "F = k \\cdot \\frac{|q_1| \\cdot |q_2|}{r^2} = \\frac{|q_1| \\cdot |q_2|}{4\\pi\\varepsilon_0\\, r^2}" },
      { type: "p", text: "Dabei ist k = 8,99 × 10⁹ N·m²/C² die Coulomb-Konstante und ε₀ = 8,854 × 10⁻¹² F/m die elektrische Feldkonstante (Permittivität des Vakuums). Bei mehreren Ladungen gilt das Superpositionsprinzip: Die Gesamtkraft auf eine Ladung ist die Vektorsumme aller Einzelkräfte." },
      { type: "p", text: "Das elektrische Feld E an einem Punkt im Raum beschreibt die Kraft, die auf eine positive Probeladung q₀ an diesem Ort wirken würde. Es ist eine Feldgröße, die im gesamten Raum definiert ist:" },
      { type: "formula", tex: "\\vec{E} = \\frac{\\vec{F}}{q_0}, \\quad [E] = \\frac{\\text{N}}{\\text{C}} = \\frac{\\text{V}}{\\text{m}}" },
      { type: "p", text: "Das elektrische Feld einer einzelnen Punktladung Q nimmt mit dem Quadrat des Abstands ab und zeigt radial von der Ladung weg (bei positiver Q) oder zur Ladung hin (bei negativer Q):" },
      { type: "formula", tex: "E = k \\cdot \\frac{|Q|}{r^2} = \\frac{|Q|}{4\\pi\\varepsilon_0\\, r^2}" },
      { type: "p", text: "Elektrische Feldlinien veranschaulichen den Feldverlauf: Sie beginnen bei positiven und enden bei negativen Ladungen. Die Dichte der Feldlinien ist proportional zur Feldstärke. Zwischen zwei parallelen leitenden Platten (Plattenkondensator) entsteht ein homogenes (gleichmäßiges) elektrisches Feld, das nur von der angelegten Spannung U und dem Plattenabstand d abhängt:" },
      { type: "formula", tex: "E = \\frac{U}{d}" }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Zwei Punktladungen q₁ = +2 µC und q₂ = −5 µC befinden sich im Abstand r = 30 cm voneinander. Berechnen Sie den Betrag der Coulomb-Kraft und geben Sie an, ob die Kraft anziehend oder abstoßend ist.",
        solution: [
          { type: "p", text: "Mit dem Coulombschen Gesetz und k = 8,99 × 10⁹ N·m²/C²:" },
          { type: "formula", tex: "F = k \\cdot \\frac{|q_1| \\cdot |q_2|}{r^2} = 8{,}99 \\times 10^9 \\cdot \\frac{2 \\times 10^{-6} \\cdot 5 \\times 10^{-6}}{(0{,}30)^2}" },
          { type: "formula", tex: "F = 8{,}99 \\times 10^9 \\cdot \\frac{1{,}0 \\times 10^{-11}}{0{,}09} \\approx 8{,}99 \\times 10^9 \\cdot 1{,}11 \\times 10^{-10} \\approx 1{,}0\\,\\text{N}" },
          { type: "p", text: "Da die Ladungen ungleichnamig sind (positiv und negativ), wirkt die Kraft anziehend. Die beiden Ladungen ziehen sich mit einer Kraft von ca. 1,0 N an." }
        ]
      },
      {
        id: "ex2",
        prompt: "Berechnen Sie die elektrische Feldstärke im Abstand r = 50 cm von einem Proton (Ladung q = +e = 1,602 × 10⁻¹⁹ C).",
        solution: [
          { type: "p", text: "Das elektrische Feld einer Punktladung berechnet sich zu:" },
          { type: "formula", tex: "E = k \\cdot \\frac{q}{r^2} = 8{,}99 \\times 10^9 \\cdot \\frac{1{,}602 \\times 10^{-19}}{(0{,}50)^2}" },
          { type: "formula", tex: "E = 8{,}99 \\times 10^9 \\cdot \\frac{1{,}602 \\times 10^{-19}}{0{,}25} \\approx 5{,}76 \\times 10^{-9}\\,\\frac{\\text{N}}{\\text{C}} = 5{,}76\\,\\text{nN/C}" },
          { type: "p", text: "Die Feldstärke beträgt etwa 5,76 nN/C. Das Feld ist aufgrund der winzigen Protonladung äußerst schwach." }
        ]
      },
      {
        id: "ex3",
        prompt: "Ein Elektron (Masse m_e = 9,1 × 10⁻³¹ kg, Ladung q = −e = −1,602 × 10⁻¹⁹ C) befindet sich in einem homogenen elektrischen Feld E = 1000 V/m. Berechnen Sie (a) die Kraft auf das Elektron und (b) die Beschleunigung.",
        solution: [
          { type: "p", text: "(a) Die Kraft auf das Elektron berechnet sich zu:" },
          { type: "formula", tex: "F = |q| \\cdot E = 1{,}602 \\times 10^{-19}\\,\\text{C} \\cdot 1000\\,\\frac{\\text{V}}{\\text{m}} = 1{,}602 \\times 10^{-16}\\,\\text{N}" },
          { type: "p", text: "(b) Die Beschleunigung folgt aus dem zweiten Newtonschen Gesetz F = m·a:" },
          { type: "formula", tex: "a = \\frac{F}{m_e} = \\frac{1{,}602 \\times 10^{-16}\\,\\text{N}}{9{,}1 \\times 10^{-31}\\,\\text{kg}} \\approx 1{,}76 \\times 10^{14}\\,\\frac{\\text{m}}{\\text{s}^2}" },
          { type: "p", text: "Die Beschleunigung ist enorm (≈ 10¹⁴ m/s²), da das Elektron eine sehr geringe Masse besitzt. Die Kraft wirkt entgegen der Feldrichtung, weil das Elektron negativ geladen ist." }
        ]
      },
      {
        id: "ex4",
        prompt: "Drei Ladungen liegen auf der x-Achse: q₁ = +4 µC bei x = 0, q₂ = −2 µC bei x = 10 cm, q₃ = +3 µC bei x = 30 cm. Bestimmen Sie die resultierende Kraft auf die mittlere Ladung q₂ (Betrag und Richtung).",
        solution: [
          { type: "p", text: "Kraft von q₁ auf q₂ (Abstand r₁₂ = 0,10 m): Da q₁ positiv und q₂ negativ ist, wirkt Anziehung in negative x-Richtung (zu q₁ hin):" },
          { type: "formula", tex: "F_{12} = k \\cdot \\frac{|q_1||q_2|}{r_{12}^2} = 8{,}99 \\times 10^9 \\cdot \\frac{4 \\times 10^{-6} \\cdot 2 \\times 10^{-6}}{(0{,}10)^2} \\approx 7{,}19\\,\\text{N}" },
          { type: "p", text: "Kraft von q₃ auf q₂ (Abstand r₂₃ = 0,20 m): Da q₃ positiv und q₂ negativ ist, wirkt Anziehung in positive x-Richtung (zu q₃ hin):" },
          { type: "formula", tex: "F_{32} = k \\cdot \\frac{|q_3||q_2|}{r_{23}^2} = 8{,}99 \\times 10^9 \\cdot \\frac{3 \\times 10^{-6} \\cdot 2 \\times 10^{-6}}{(0{,}20)^2} \\approx 1{,}35\\,\\text{N}" },
          { type: "p", text: "Resultierende Kraft (positive x-Richtung definiert als positiv): F_res = −7,19 N + 1,35 N = −5,84 N. Die Gesamtkraft auf q₂ beträgt 5,84 N in Richtung von q₁ (negative x-Richtung)." }
        ]
      },
      {
        id: "ex5",
        prompt: "Zwischen zwei parallelen Kondensatorplatten liegt eine Spannung von U = 500 V an. Der Plattenabstand beträgt d = 2 cm. Berechnen Sie die elektrische Feldstärke zwischen den Platten und beschreiben Sie den Feldlinienverlauf.",
        solution: [
          { type: "p", text: "Im homogenen Feld zwischen parallelen Platten gilt:" },
          { type: "formula", tex: "E = \\frac{U}{d} = \\frac{500\\,\\text{V}}{0{,}02\\,\\text{m}} = 25{.}000\\,\\frac{\\text{V}}{\\text{m}} = 25\\,\\frac{\\text{kV}}{\\text{m}}" },
          { type: "p", text: "Die Feldstärke beträgt 25 kV/m. Die Feldlinien verlaufen gleichmäßig und parallel von der positiv zur negativ geladenen Platte, also senkrecht zu den Plattenoberflächen. An den Plattenrändern gibt es Randeffekte (Streufeld), die bei einem idealen Plattenkondensator vernachlässigt werden." }
        ]
      }
    ],
    quiz: [
      {
        id: "q1",
        question: "Was ist die SI-Einheit der elektrischen Ladung?",
        options: ["Volt (V)", "Ampere (A)", "Coulomb (C)", "Farad (F)"],
        correctIndex: 2,
        explanation: "Die SI-Einheit der elektrischen Ladung ist das Coulomb (C). Es gilt: 1 C = 1 A·s."
      },
      {
        id: "q2",
        question: "Welchen Wert hat die Elementarladung e?",
        options: ["9,1 × 10⁻³¹ C", "1,602 × 10⁻¹⁹ C", "6,022 × 10²³ C", "8,99 × 10⁹ C"],
        correctIndex: 1,
        explanation: "Die Elementarladung beträgt e = 1,602 × 10⁻¹⁹ C. Sie ist die kleinste frei vorkommende Ladungseinheit (Ladung eines Protons oder Elektrons)."
      },
      {
        id: "q3",
        question: "Wie ändert sich die Coulomb-Kraft, wenn der Abstand zwischen zwei Ladungen verdoppelt wird?",
        options: ["Sie halbiert sich", "Sie verdoppelt sich", "Sie wird viermal kleiner", "Sie bleibt gleich"],
        correctIndex: 2,
        explanation: "Die Coulomb-Kraft ist umgekehrt proportional zum Quadrat des Abstands (F ∝ 1/r²). Bei doppeltem Abstand wird die Kraft um den Faktor 4 kleiner."
      },
      {
        id: "q4",
        question: "In welche Richtung zeigen elektrische Feldlinien?",
        options: ["Von negativen zu positiven Ladungen", "Von positiven zu negativen Ladungen", "Immer senkrecht zur Verbindungslinie der Ladungen", "Kreisförmig um jede Ladung herum"],
        correctIndex: 1,
        explanation: "Elektrische Feldlinien beginnen bei positiven Ladungen und enden bei negativen Ladungen. Sie zeigen die Richtung an, in die eine positive Probeladung gedrückt würde."
      },
      {
        id: "q5",
        question: "Welche Einheit hat die elektrische Feldstärke E?",
        options: ["Tesla (T)", "Coulomb pro Meter (C/m)", "Volt pro Meter (V/m)", "Watt (W)"],
        correctIndex: 2,
        explanation: "Die elektrische Feldstärke wird in V/m (Volt pro Meter) oder äquivalent in N/C (Newton pro Coulomb) angegeben: 1 V/m = 1 N/C."
      },
      {
        id: "q6",
        question: "Welchen Wert hat die elektrische Feldkonstante ε₀?",
        options: ["8,99 × 10⁹ F/m", "8,854 × 10⁻¹² F/m", "1,602 × 10⁻¹⁹ F/m", "4π × 10⁻⁷ F/m"],
        correctIndex: 1,
        explanation: "Die Permittivität des Vakuums beträgt ε₀ = 8,854 × 10⁻¹² F/m. Sie stellt die Verknüpfung zwischen elektrischem Feld und Ladungsverteilung im Vakuum her."
      },
      {
        id: "q7",
        question: "Was besagt das Superpositionsprinzip für elektrische Kräfte?",
        options: ["Felder heben sich immer gegenseitig auf", "Die Gesamtkraft ist die Vektorsumme aller Einzelkräfte", "Nur die stärkste Kraft wirkt", "Kräfte addieren sich nur bei gleichen Ladungsvorzeichen"],
        correctIndex: 1,
        explanation: "Das Superpositionsprinzip besagt, dass die resultierende Kraft auf eine Ladung die Vektorsumme aller von den anderen Ladungen ausgeübten Einzelkräfte ist."
      },
      {
        id: "q8",
        question: "Wie lautet das elektrische Feld zwischen zwei parallelen Platten (Spannung U, Abstand d)?",
        options: ["E = U · d", "E = U / d", "E = d / U", "E = U² / d"],
        correctIndex: 1,
        explanation: "Im homogenen Feld eines Plattenkondensators gilt E = U/d. Das Feld ist konstant und senkrecht zu den Plattenoberflächen gerichtet."
      },
      {
        id: "q9",
        question: "Zwei Ladungen mit gleichem Vorzeichen werden einander angenähert. Was beobachtet man?",
        options: ["Sie ziehen sich an", "Sie stoßen sich ab", "Es wirkt keine Kraft zwischen ihnen", "Die Kraft hängt nur von der Masse ab"],
        correctIndex: 1,
        explanation: "Gleichnamige Ladungen stoßen sich ab, ungleichnamige ziehen sich an. Dies ist ein fundamentales Grundprinzip der Elektrostatik."
      },
      {
        id: "q10",
        question: "Welche Aussage zur Quantisierung der elektrischen Ladung ist korrekt?",
        options: ["Ladung kann jeden beliebigen kontinuierlichen Wert annehmen", "Jede Ladung ist ein ganzzahliges Vielfaches von e = 1,602 × 10⁻¹⁹ C", "Nur positive Ladungen sind quantisiert", "Quantisierung gilt nur im Atomkern"],
        correctIndex: 1,
        explanation: "Elektrische Ladung ist quantisiert: q = n·e mit n ∈ ℤ. Die kleinste frei vorkommende Einheit ist die Elementarladung e = 1,602 × 10⁻¹⁹ C."
      }
    ]
  },
  {
    id: "natwiss-potential",
    chapter: 10,
    order: 2,
    title: "Elektrisches Potenzial und Spannung",
    icon: "🔋",
    summary: "Das elektrische Potenzial als potenzielle Energie pro Ladung, die elektrische Spannung als Potenzialdifferenz, Äquipotenzialflächen und das Elektronenvolt als Energieeinheit.",
    explanation: [
      { type: "p", text: "Das elektrische Potenzial φ beschreibt die potenzielle Energie pro Ladungseinheit an einem bestimmten Ort im elektrischen Feld. Es ist eine skalare Feldgröße (kein Vektor), was die Berechnung oft vereinfacht. Die SI-Einheit ist das Volt (V = J/C)." },
      { type: "p", text: "Das Potenzial einer Punktladung Q im Abstand r berechnet sich zu:" },
      { type: "formula", tex: "\\varphi = k \\cdot \\frac{Q}{r} = \\frac{Q}{4\\pi\\varepsilon_0\\, r}" },
      { type: "p", text: "Im Gegensatz zur Feldstärke (∝ 1/r²) nimmt das Potenzial nur mit 1/r ab. Bei mehreren Ladungen kann man die Potenziale (als Skalare) einfach addieren – das Superpositionsprinzip gilt auch hier." },
      { type: "p", text: "Die elektrische Spannung U zwischen zwei Punkten 1 und 2 ist die Potenzialdifferenz:" },
      { type: "formula", tex: "U = \\varphi_1 - \\varphi_2 = -\\int_1^2 \\vec{E} \\cdot d\\vec{s}" },
      { type: "p", text: "Die Arbeit W, die beim Verschieben einer Ladung q von Punkt 1 nach Punkt 2 durch das elektrische Feld geleistet wird, berechnet sich zu:" },
      { type: "formula", tex: "W = q \\cdot (\\varphi_1 - \\varphi_2) = q \\cdot U" },
      { type: "p", text: "Äquipotenzialflächen sind Flächen gleichen Potenzials. Eine positive Probeladung erfährt entlang einer Äquipotenzialfläche keine Kraft, weshalb keine Arbeit nötig ist, um eine Ladung entlang dieser Fläche zu verschieben. Äquipotenzialflächen stehen immer senkrecht auf den elektrischen Feldlinien – andernfalls gäbe es eine Kraftkomponente entlang der Fläche, was ein Widerspruch wäre." },
      { type: "p", text: "Das elektrische Feld zeigt in Richtung des steilsten Potenzialabfalls. In einer Dimension gilt:" },
      { type: "formula", tex: "E = -\\frac{d\\varphi}{dx}" },
      { type: "p", text: "Das Elektronenvolt (eV) ist eine praktische Energieeinheit in der Atom- und Teilchenphysik. Es entspricht der Energie, die ein Elektron (Ladung e) durch eine Potenzialdifferenz von 1 V gewinnt:" },
      { type: "formula", tex: "1\\,\\text{eV} = e \\cdot 1\\,\\text{V} = 1{,}602 \\times 10^{-19}\\,\\text{J}" }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Berechnen Sie das elektrische Potenzial im Abstand r = 1,0 m von einer Punktladung Q = +4 µC.",
        solution: [
          { type: "p", text: "Das Potenzial einer Punktladung berechnet sich mit k = 8,99 × 10⁹ N·m²/C²:" },
          { type: "formula", tex: "\\varphi = k \\cdot \\frac{Q}{r} = 8{,}99 \\times 10^9 \\cdot \\frac{4 \\times 10^{-6}}{1{,}0} = 35{.}960\\,\\text{V} \\approx 36\\,\\text{kV}" },
          { type: "p", text: "Das elektrische Potenzial beträgt ca. 36 kV. Es ist positiv, da Q eine positive Ladung ist. Mit zunehmendem Abstand r nimmt φ ab (φ ∝ 1/r), im Unendlichen ist φ = 0." }
        ]
      },
      {
        id: "ex2",
        prompt: "Eine Ladung q = +3 µC soll von einem Punkt mit φ₁ = 200 V zu einem Punkt mit φ₂ = 50 V verschoben werden. Welche Arbeit verrichtet das elektrische Feld dabei?",
        solution: [
          { type: "p", text: "Die Arbeit des elektrischen Feldes beim Verschieben einer Ladung q durch die Potenzialdifferenz U = φ₁ − φ₂ beträgt:" },
          { type: "formula", tex: "W = q \\cdot (\\varphi_1 - \\varphi_2) = 3 \\times 10^{-6}\\,\\text{C} \\cdot (200 - 50)\\,\\text{V} = 3 \\times 10^{-6} \\cdot 150 = 4{,}5 \\times 10^{-4}\\,\\text{J}" },
          { type: "p", text: "Das elektrische Feld verrichtet eine positive Arbeit von 0,45 mJ. Die Ladung bewegt sich in Richtung des sinkenden Potenzials, was für eine positive Ladung der natürlichen Bewegungsrichtung entspricht (sie folgt der Feldkraft)." }
        ]
      },
      {
        id: "ex3",
        prompt: "Ein Elektron (Masse m_e = 9,1 × 10⁻³¹ kg, Ladung −e) wird aus der Ruhe durch eine Spannung von U = 1000 V beschleunigt. Berechnen Sie (a) die kinetische Endenergie in Joule und in eV sowie (b) die Endgeschwindigkeit.",
        solution: [
          { type: "p", text: "(a) Die kinetische Energie des Elektrons nach Durchlaufen der Spannung U ergibt sich aus dem Energieerhaltungssatz (W_el = E_kin):" },
          { type: "formula", tex: "E_{\\text{kin}} = |q| \\cdot U = 1{,}602 \\times 10^{-19}\\,\\text{C} \\cdot 1000\\,\\text{V} = 1{,}602 \\times 10^{-16}\\,\\text{J} = 1000\\,\\text{eV} = 1\\,\\text{keV}" },
          { type: "p", text: "(b) Die Endgeschwindigkeit folgt aus E_kin = ½·m_e·v²:" },
          { type: "formula", tex: "v = \\sqrt{\\frac{2 E_{\\text{kin}}}{m_e}} = \\sqrt{\\frac{2 \\cdot 1{,}602 \\times 10^{-16}}{9{,}1 \\times 10^{-31}}} \\approx \\sqrt{3{,}52 \\times 10^{14}} \\approx 1{,}88 \\times 10^7\\,\\frac{\\text{m}}{\\text{s}}" },
          { type: "p", text: "Das Elektron erreicht eine Geschwindigkeit von ca. 1,88 × 10⁷ m/s ≈ 6 % der Lichtgeschwindigkeit." }
        ]
      },
      {
        id: "ex4",
        prompt: "Zwei Punktladungen q₁ = +2 µC bei x = 0 und q₂ = −1 µC bei x = 0,30 m befinden sich auf der x-Achse. Bestimmen Sie die Punkte auf der x-Achse, an denen das elektrische Potenzial null ist.",
        solution: [
          { type: "p", text: "Das Potenzial der Überlagerung ist null, wenn gilt: φ₁ + φ₂ = 0, also k·q₁/r₁ + k·q₂/r₂ = 0 → 2/r₁ = 1/r₂." },
          { type: "p", text: "Punkt zwischen den Ladungen (0 < x < 0,30 m): r₁ = x, r₂ = 0,30 − x:" },
          { type: "formula", tex: "\\frac{2}{x} = \\frac{1}{0{,}30 - x} \\Rightarrow 2(0{,}30 - x) = x \\Rightarrow 0{,}60 = 3x \\Rightarrow x = 0{,}20\\,\\text{m}" },
          { type: "p", text: "Punkt außerhalb (x > 0,30 m): r₁ = x, r₂ = x − 0,30:" },
          { type: "formula", tex: "\\frac{2}{x} = \\frac{1}{x - 0{,}30} \\Rightarrow 2(x - 0{,}30) = x \\Rightarrow x = 0{,}60\\,\\text{m}" },
          { type: "p", text: "Das Potenzial ist null bei x = 0,20 m (zwischen den Ladungen) und bei x = 0,60 m (rechts von q₂)." }
        ]
      },
      {
        id: "ex5",
        prompt: "Erklären Sie, warum Äquipotenzialflächen immer senkrecht zu den elektrischen Feldlinien stehen müssen. Welche Konsequenz hat dies für die Oberfläche eines elektrischen Leiters im Gleichgewicht?",
        solution: [
          { type: "p", text: "Auf einer Äquipotenzialfläche ist das Potenzial φ konstant. Die Feldstärke zeigt in Richtung des stärksten Potenzialabfalls (E = −dφ/dx). Da auf einer Äquipotenzialfläche kein Potenzialunterschied existiert, kann es dort keine Feldkomponente entlang der Fläche geben. Das Feld steht daher zwingend senkrecht (normal) zur Äquipotenzialfläche." },
          { type: "p", text: "Für Leiteroberflächen im elektrostatischen Gleichgewicht: Im Inneren eines Leiters ist E = 0 (sonst würden Elektronen fließen). Damit ist das gesamte Leiterinnere (und die Oberfläche) auf gleichem Potenzial – der Leiter ist selbst eine Äquipotenzialfläche. Daher stehen die Feldlinien außen senkrecht auf der Leiteroberfläche." }
        ]
      }
    ],
    quiz: [
      {
        id: "q1",
        question: "Was ist die Einheit des elektrischen Potenzials?",
        options: ["Coulomb (C)", "Joule (J)", "Volt (V)", "Ampere (A)"],
        correctIndex: 2,
        explanation: "Das elektrische Potenzial wird in Volt (V) angegeben. Es gilt: 1 V = 1 J/C (Energie pro Ladung)."
      },
      {
        id: "q2",
        question: "Wie hängt das Potenzial einer Punktladung Q vom Abstand r ab?",
        options: ["φ ∝ 1/r²", "φ ∝ 1/r", "φ ∝ r", "φ = konstant"],
        correctIndex: 1,
        explanation: "Das Potenzial einer Punktladung nimmt mit 1/r ab (φ = kQ/r), während die Feldstärke mit 1/r² abnimmt."
      },
      {
        id: "q3",
        question: "Wie ist die elektrische Feldstärke E mit dem Potenzial φ verknüpft?",
        options: ["E = φ / r", "E = −dφ/dx", "E = φ · r", "E = dφ/dx"],
        correctIndex: 1,
        explanation: "Es gilt E = −dφ/dx: Das elektrische Feld zeigt in Richtung des stärksten Potenzialabfalls (von hohem zu niedrigem Potenzial)."
      },
      {
        id: "q4",
        question: "Welche Aussage zu Äquipotenzialflächen ist korrekt?",
        options: ["Sie verlaufen parallel zu den Feldlinien", "Sie stehen senkrecht auf den elektrischen Feldlinien", "Auf ihnen ist die Feldstärke konstant", "Sie existieren nur bei Punktladungen"],
        correctIndex: 1,
        explanation: "Äquipotenzialflächen stehen immer senkrecht auf den Feldlinien, da entlang der Äquipotenzialfläche keine Feldkomponente existiert."
      },
      {
        id: "q5",
        question: "Welche Arbeit verrichtet das elektrische Feld, wenn eine Ladung q zwischen zwei Äquipotenzialflächen bewegt wird?",
        options: ["W = q · φ", "W = q · (φ₁ − φ₂)", "W = q / (φ₁ − φ₂)", "W = 0, da das Feld keine Arbeit verrichtet"],
        correctIndex: 1,
        explanation: "Die Arbeit des elektrischen Feldes beim Verschieben der Ladung q zwischen Punkten mit Potenzial φ₁ und φ₂ beträgt W = q·(φ₁ − φ₂). Auf einer Äquipotenzialfläche (φ₁ = φ₂) ist die Arbeit null."
      },
      {
        id: "q6",
        question: "Was entspricht 1 Elektronenvolt (eV) in Joule?",
        options: ["1 eV = 9,1 × 10⁻³¹ J", "1 eV = 1,602 × 10⁻¹⁹ J", "1 eV = 6,022 × 10²³ J", "1 eV = 3,6 × 10⁶ J"],
        correctIndex: 1,
        explanation: "1 eV = e · 1 V = 1,602 × 10⁻¹⁹ J. Das Elektronenvolt ist die Energie, die ein Elektron beim Durchlaufen einer Spannung von 1 V gewinnt."
      },
      {
        id: "q7",
        question: "Welchen Wert hat das elektrische Potenzial im Unendlichen (r → ∞) für eine Punktladung?",
        options: ["φ → ∞", "φ → −∞", "φ → 0", "φ bleibt konstant"],
        correctIndex: 2,
        explanation: "Per Konvention wird das Potenzial im Unendlichen gleich null gesetzt: φ(r → ∞) = 0. Das Potenzial φ = kQ/r strebt für r → ∞ gegen null."
      },
      {
        id: "q8",
        question: "Welches Vorzeichen hat das Potenzial in der Nähe einer negativen Ladung?",
        options: ["Immer positiv", "Immer negativ", "Null", "Abhängig von der Entfernung"],
        correctIndex: 1,
        explanation: "Das Potenzial einer negativen Ladung Q < 0 ist gemäß φ = kQ/r für alle r > 0 negativ. Je näher man der negativen Ladung kommt, desto mehr wird φ negativ."
      },
      {
        id: "q9",
        question: "Was versteht man unter der elektrischen Spannung U zwischen zwei Punkten?",
        options: ["Die Summe der Potenziale beider Punkte", "Die Potenzialdifferenz φ₁ − φ₂", "Das Produkt aus Ladung und Potenzial", "Die elektrische Feldstärke multipliziert mit der Ladung"],
        correctIndex: 1,
        explanation: "Die elektrische Spannung U zwischen zwei Punkten ist die Potenzialdifferenz: U = φ₁ − φ₂. Gemessen wird sie in Volt (V)."
      },
      {
        id: "q10",
        question: "In welche Richtung zeigt das elektrische Feld im Vergleich zum Potenzialgradienten?",
        options: ["In Richtung steigenden Potenzials", "In Richtung fallenden Potenzials", "Senkrecht zum Potenzialgradienten", "Parallel zu den Äquipotenzialflächen"],
        correctIndex: 1,
        explanation: "Das elektrische Feld zeigt stets in Richtung des stärksten Potenzialabfalls (fallenden Potenzials). Es gilt E = −dφ/dx, wobei das Minuszeichen diese Richtung ausdrückt."
      }
    ]
  },
  {
    id: "natwiss-kondensatoren",
    chapter: 10,
    order: 3,
    title: "Kondensatoren und Kapazität",
    icon: "🔌",
    summary: "Kondensatoren als Ladungsspeicher, die Kapazität C = Q/U, der Plattenkondensator mit Dielektrikum, Schaltungen von Kondensatoren in Reihe und parallel sowie die gespeicherte Energie.",
    explanation: [
      { type: "p", text: "Ein Kondensator besteht aus zwei leitenden Platten (oder Elektroden), die durch ein Isoliermaterial (Dielektrikum) getrennt sind. Wird eine Spannung angelegt, sammelt sich auf den Platten entgegengesetzte Ladung an. Der Kondensator speichert elektrische Energie im elektrischen Feld zwischen den Platten." },
      { type: "p", text: "Die Kapazität C eines Kondensators ist das Verhältnis der gespeicherten Ladung Q zur angelegten Spannung U. Sie ist ein Maß dafür, wie viel Ladung bei gegebener Spannung gespeichert werden kann:" },
      { type: "formula", tex: "C = \\frac{Q}{U}, \\quad [C] = \\frac{\\text{C}}{\\text{V}} = \\text{F (Farad)}" },
      { type: "p", text: "Praktische Kondensatoren haben Kapazitäten von Picofarad (pF, 10⁻¹² F) bis Millifarad (mF, 10⁻³ F). 1 Farad ist eine sehr große Kapazität. Für einen Plattenkondensator mit Plattenfläche A, Plattenabstand d und einem Dielektrikum der Permittivitätszahl ε_r gilt:" },
      { type: "formula", tex: "C = \\varepsilon_0 \\cdot \\varepsilon_r \\cdot \\frac{A}{d}" },
      { type: "p", text: "ε_r ist die relative Permittivität (Dielektrizitätskonstante) des Isolierstoffs. Für Vakuum/Luft gilt ε_r ≈ 1. Ein Dielektrikum (z. B. Keramik, Folie) erhöht ε_r und damit die Kapazität, weil sich die Moleküle des Dielektrikums polarisieren und das äußere Feld teilweise kompensieren, wodurch mehr Ladung bei gleicher Spannung gespeichert werden kann." },
      { type: "p", text: "Für Kondensatoren in Parallelschaltung addieren sich die Kapazitäten (gleiche Spannung, Ladungen addieren sich):" },
      { type: "formula", tex: "C_{\\text{parallel}} = C_1 + C_2 + C_3 + \\ldots" },
      { type: "p", text: "Für Kondensatoren in Reihenschaltung addieren sich die Kehrwerte (gleiche Ladung, Spannungen addieren sich):" },
      { type: "formula", tex: "\\frac{1}{C_{\\text{reihe}}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\frac{1}{C_3} + \\ldots" },
      { type: "p", text: "Die im Kondensator gespeicherte elektrische Energie berechnet sich zu:" },
      { type: "formula", tex: "E = \\frac{1}{2} C U^2 = \\frac{Q^2}{2C} = \\frac{1}{2} Q U" },
      { type: "p", text: "Die Energiedichte (Energie pro Volumen) im elektrischen Feld beträgt:" },
      { type: "formula", tex: "u = \\frac{E_{\\text{el}}}{V} = \\frac{1}{2} \\varepsilon_0 E^2" }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Kondensator mit C = 10 µF wird auf eine Spannung U = 12 V aufgeladen. Berechnen Sie (a) die gespeicherte Ladung Q und (b) die gespeicherte Energie E.",
        solution: [
          { type: "p", text: "(a) Gespeicherte Ladung:" },
          { type: "formula", tex: "Q = C \\cdot U = 10 \\times 10^{-6}\\,\\text{F} \\cdot 12\\,\\text{V} = 1{,}2 \\times 10^{-4}\\,\\text{C} = 120\\,\\mu\\text{C}" },
          { type: "p", text: "(b) Gespeicherte Energie:" },
          { type: "formula", tex: "E = \\frac{1}{2} C U^2 = \\frac{1}{2} \\cdot 10 \\times 10^{-6} \\cdot (12)^2 = 5 \\times 10^{-6} \\cdot 144 = 7{,}2 \\times 10^{-4}\\,\\text{J} = 0{,}72\\,\\text{mJ}" }
        ]
      },
      {
        id: "ex2",
        prompt: "Ein Plattenkondensator hat die Plattenfläche A = 0,01 m², den Plattenabstand d = 1 mm und ist mit einem Dielektrikum der Permittivitätszahl ε_r = 2 gefüllt. Berechnen Sie die Kapazität.",
        solution: [
          { type: "p", text: "Die Kapazität eines Plattenkondensators mit Dielektrikum:" },
          { type: "formula", tex: "C = \\varepsilon_0 \\cdot \\varepsilon_r \\cdot \\frac{A}{d} = 8{,}854 \\times 10^{-12} \\cdot 2 \\cdot \\frac{0{,}01}{0{,}001}" },
          { type: "formula", tex: "C = 8{,}854 \\times 10^{-12} \\cdot 2 \\cdot 10 = 1{,}77 \\times 10^{-10}\\,\\text{F} = 177\\,\\text{pF}" },
          { type: "p", text: "Die Kapazität beträgt 177 pF. Ohne Dielektrikum (ε_r = 1) wäre sie halb so groß (88,5 pF)." }
        ]
      },
      {
        id: "ex3",
        prompt: "Zwei Kondensatoren C₁ = 3 µF und C₂ = 6 µF werden in Reihe geschaltet. Berechnen Sie die Gesamtkapazität.",
        solution: [
          { type: "p", text: "Bei Reihenschaltung addieren sich die Kehrwerte der Kapazitäten:" },
          { type: "formula", tex: "\\frac{1}{C_{\\text{reihe}}} = \\frac{1}{C_1} + \\frac{1}{C_2} = \\frac{1}{3} + \\frac{1}{6} = \\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2}" },
          { type: "formula", tex: "C_{\\text{reihe}} = 2\\,\\mu\\text{F}" },
          { type: "p", text: "Die Gesamtkapazität der Reihenschaltung beträgt 2 µF – sie ist kleiner als die kleinste Einzelkapazität. Bei Reihenschaltung teilt sich die Spannung auf, die Ladung Q ist auf beiden Kondensatoren gleich." }
        ]
      },
      {
        id: "ex4",
        prompt: "Die gleichen Kondensatoren C₁ = 3 µF und C₂ = 6 µF werden nun parallel geschaltet. Berechnen Sie die Gesamtkapazität.",
        solution: [
          { type: "p", text: "Bei Parallelschaltung addieren sich die Kapazitäten direkt:" },
          { type: "formula", tex: "C_{\\text{parallel}} = C_1 + C_2 = 3\\,\\mu\\text{F} + 6\\,\\mu\\text{F} = 9\\,\\mu\\text{F}" },
          { type: "p", text: "Die Gesamtkapazität beträgt 9 µF – sie ist größer als die größte Einzelkapazität. Bei Parallelschaltung liegt an beiden Kondensatoren die gleiche Spannung an, die Ladungen Q₁ und Q₂ addieren sich zur Gesamtladung." }
        ]
      },
      {
        id: "ex5",
        prompt: "Ein Kondensator wird auf U₀ = 100 V aufgeladen und dann von der Spannungsquelle getrennt (Ladung Q bleibt konstant). Anschließend wird der Plattenabstand auf die Hälfte reduziert. Berechnen Sie die neue Spannung U und die neue elektrische Feldstärke E. Vergleichen Sie E mit dem ursprünglichen Wert.",
        solution: [
          { type: "p", text: "Bei konstanter Ladung Q und halbiertem Abstand d' = d/2 verdoppelt sich die Kapazität: C' = ε₀A/(d/2) = 2C₀." },
          { type: "p", text: "Neue Spannung (Q = C·U bleibt, C verdoppelt):" },
          { type: "formula", tex: "U' = \\frac{Q}{C'} = \\frac{Q}{2C_0} = \\frac{C_0 \\cdot U_0}{2C_0} = \\frac{U_0}{2} = 50\\,\\text{V}" },
          { type: "p", text: "Neue elektrische Feldstärke:" },
          { type: "formula", tex: "E' = \\frac{U'}{d'} = \\frac{50\\,\\text{V}}{d/2} = \\frac{100\\,\\text{V}}{d} = E_0" },
          { type: "p", text: "Die Feldstärke bleibt unverändert! Obwohl sich Spannung und Abstand beide halbieren, ist ihr Verhältnis E = U/d konstant. Die gespeicherte Energie nimmt allerdings auf die Hälfte ab: E = Q²/(2C') = Q²/(4C₀) = E₀/2." }
        ]
      }
    ],
    quiz: [
      {
        id: "q1",
        question: "Was beschreibt die Kapazität eines Kondensators?",
        options: ["Die gespeicherte Energie pro Volumen", "Das Verhältnis von gespeicherter Ladung zu angelegter Spannung", "Den elektrischen Widerstand des Dielektrikums", "Die maximale Spannung, die angelegt werden kann"],
        correctIndex: 1,
        explanation: "Die Kapazität C = Q/U beschreibt, wie viel Ladung Q ein Kondensator bei angelegter Spannung U speichern kann. Einheit: Farad (F)."
      },
      {
        id: "q2",
        question: "Welche Einheit hat die Kapazität?",
        options: ["Ohm (Ω)", "Henry (H)", "Farad (F)", "Weber (Wb)"],
        correctIndex: 2,
        explanation: "Die Kapazität wird in Farad (F) gemessen. 1 F = 1 C/V. Praktisch gebräuchlich sind pF (10⁻¹² F), nF (10⁻⁹ F) und µF (10⁻⁶ F)."
      },
      {
        id: "q3",
        question: "Wie lautet die Formel für die Kapazität eines Plattenkondensators (Fläche A, Abstand d, relative Permittivität ε_r)?",
        options: ["C = ε₀ · ε_r · d / A", "C = ε₀ · ε_r · A / d", "C = ε₀ · A · d", "C = ε_r / (ε₀ · A · d)"],
        correctIndex: 1,
        explanation: "Die Kapazität des Plattenkondensators ist C = ε₀ · ε_r · A/d. Sie steigt mit größerer Fläche A und kleinerem Abstand d."
      },
      {
        id: "q4",
        question: "Welchen Einfluss hat ein Dielektrikum (ε_r > 1) zwischen den Kondensatorplatten?",
        options: ["Es verringert die Kapazität", "Es erhöht die Kapazität um den Faktor ε_r", "Es verändert die Kapazität nicht", "Es erhöht den Plattenabstand"],
        correctIndex: 1,
        explanation: "Ein Dielektrikum mit ε_r > 1 erhöht die Kapazität um den Faktor ε_r. Das Dielektrikum polarisiert sich und kompensiert einen Teil des äußeren Feldes, sodass mehr Ladung bei gleicher Spannung gespeichert werden kann."
      },
      {
        id: "q5",
        question: "Wie berechnet sich die Gesamtkapazität von zwei in Reihe geschalteten Kondensatoren C₁ und C₂?",
        options: ["C_ges = C₁ + C₂", "1/C_ges = 1/C₁ + 1/C₂", "C_ges = C₁ · C₂", "C_ges = C₁ · C₂ / (C₁ + C₂)"],
        correctIndex: 1,
        explanation: "Bei Reihenschaltung gilt 1/C_ges = 1/C₁ + 1/C₂. Für zwei gleiche Kondensatoren C halbiert sich die Gesamtkapazität auf C/2."
      },
      {
        id: "q6",
        question: "Wie addieren sich Kondensatoren in Parallelschaltung?",
        options: ["Die Kehrwerte addieren sich", "Die Kapazitäten addieren sich direkt", "Die Quadratwurzeln addieren sich", "Die Kapazitäten multiplizieren sich"],
        correctIndex: 1,
        explanation: "Bei Parallelschaltung gilt C_ges = C₁ + C₂ + ... Die Kapazitäten addieren sich, da an allen Kondensatoren die gleiche Spannung liegt und sich die Ladungen addieren."
      },
      {
        id: "q7",
        question: "Wie lautet die Formel für die im Kondensator gespeicherte Energie?",
        options: ["E = C · U", "E = ½ · C · U²", "E = C² · U", "E = Q / C"],
        correctIndex: 1,
        explanation: "Die gespeicherte elektrische Energie beträgt E = ½·C·U². Alternativ: E = Q²/(2C) = ½·Q·U."
      },
      {
        id: "q8",
        question: "Welche Maßnahme erhöht die Kapazität eines Plattenkondensators am effektivsten?",
        options: ["Den Plattenabstand verdoppeln", "Die Plattenfläche halbieren", "Den Plattenabstand halbieren", "Die Spannung erhöhen"],
        correctIndex: 2,
        explanation: "Da C ∝ 1/d gilt, halbiert eine Halbierung des Plattenabstands d die Kapazität. Warten – tatsächlich verdoppelt sich C bei Halbierung von d. Richtig: Den Plattenabstand halbieren verdoppelt C (C = ε₀εrA/d)."
      },
      {
        id: "q9",
        question: "Welchen typischen Kapazitätsbereich haben praktisch verwendete Kondensatoren?",
        options: ["Nur im Farad-Bereich (1 F bis 1000 F)", "Von Picofarad (pF) bis Millifarad (mF)", "Immer genau 1 µF", "Von Megafarad bis Gigafarad"],
        correctIndex: 1,
        explanation: "Praktische Kondensatoren haben Kapazitäten im Bereich von wenigen pF (Hochfrequenzkondensatoren) bis zu mehreren mF (Elektrolytkondensatoren). 1 Farad ist eine außergewöhnlich große Kapazität."
      },
      {
        id: "q10",
        question: "Was gilt für die Energie in einem aufgeladenen Kondensator, wenn die Spannung verdoppelt wird (bei konstanter Kapazität)?",
        options: ["Die Energie verdoppelt sich", "Die Energie halbiert sich", "Die Energie vervierfacht sich", "Die Energie bleibt gleich"],
        correctIndex: 2,
        explanation: "Da E = ½·C·U², vervierfacht sich die gespeicherte Energie bei doppelter Spannung (Faktor 2² = 4). Die Energie wächst quadratisch mit der Spannung."
      }
    ]
  }
];
