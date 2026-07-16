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
      { id: "q1", question: "Was ist die SI-Einheit der elektrischen Ladung?", options: ["Coulomb (C)", "Volt (V) – Einheit der Spannung", "Ampere (A) – Einheit der Stromstärke", "Farad (F) – Einheit der Kapazität"], correctIndex: 0, explanation: "Die SI-Einheit der elektrischen Ladung ist das Coulomb (C), benannt nach Charles-Augustin de Coulomb. Da der Strom als Ladung pro Zeit definiert ist (I = dQ/dt), folgt direkt aus der Stromeinheit die Ladungseinheit: 1 C = 1 A·s. Volt, Ampere und Farad sind die Einheiten von Spannung, Stromstärke bzw. Kapazität – verwandte, aber andere elektrische Größen." },
      { id: "q2", question: "Welchen Wert hat die Elementarladung e?", options: ["8,99 × 10⁹ N·m²/C² (Coulomb-Konstante k)", "1,602 × 10⁻¹⁹ C", "6,022 × 10²³ mol⁻¹ (Avogadro-Konstante)", "9,1 × 10⁻³¹ kg (Elektronenmasse)"], correctIndex: 1, explanation: "Die Elementarladung beträgt e = 1,602 × 10⁻¹⁹ C – die kleinste frei vorkommende Ladungseinheit, der Betrag der Ladung eines Protons bzw. Elektrons. Jede beobachtbare Ladung ist ein ganzzahliges Vielfaches davon (q = n·e). Die Distraktoren sind reale, aber andere Naturkonstanten: 8,99 × 10⁹ ist die Coulomb-Konstante k, 6,022 × 10²³ die Avogadro-Konstante und 9,1 × 10⁻³¹ kg die Elektronenmasse – eine häufige Verwechslung mit der Elementarladung." },
      { id: "q3", question: "Wie ändert sich die Coulomb-Kraft, wenn der Abstand zwischen zwei Ladungen verdoppelt wird?", options: ["Sie bleibt unverändert groß", "Sie halbiert sich auf 50 %", "Sie wird viermal kleiner", "Sie verdoppelt sich auf das Doppelte"], correctIndex: 2, explanation: "Nach F = k·|q₁||q₂|/r² hängt die Kraft quadratisch vom Kehrwert des Abstands ab. Setzt man r' = 2r ein, folgt F' = k|q₁||q₂|/(2r)² = F/4 – die Kraft sinkt auf ein Viertel. Die Antwort 'halbiert sich' entspricht fälschlich einem linearen 1/r-Zusammenhang (wie beim Potenzial φ ∝ 1/r) und übersieht das Quadrat im Abstandsgesetz." },
      { id: "q4", question: "In welche Richtung zeigen elektrische Feldlinien?", options: ["Kreisförmig um jede Ladung herum", "Von negativen zu positiven Ladungen", "Immer senkrecht zur Verbindungslinie der Ladungen", "Von positiven zu negativen Ladungen"], correctIndex: 3, explanation: "Feldlinien zeigen per Definition die Richtung der Kraft auf eine positive Probeladung: E = F/q₀ mit q₀ > 0 zeigt daher von Plus nach Minus, sodass Feldlinien an positiven Ladungen beginnen und an negativen enden. Die Umkehrung ('von negativen zu positiven') verwechselt dies mit der tatsächlichen Bewegungsrichtung der Elektronen, die der technischen Stromrichtung entgegengesetzt ist." },
      { id: "q5", question: "Welche Einheit hat die elektrische Feldstärke E?", options: ["Watt (W)", "Coulomb pro Meter (C/m)", "Volt pro Meter (V/m)", "Tesla (T)"], correctIndex: 2, explanation: "Die elektrische Feldstärke ist als Kraft pro Ladung definiert, E = F/q₀, mit Einheit N/C. Über die Spannung U = E·d (im homogenen Feld) ist die gleichwertige, gebräuchlichere Einheit V/m: 1 V/m = 1 N/C. Watt misst Leistung, Tesla die magnetische Flussdichte – beide sind andere physikalische Größen, und 'Coulomb pro Meter' ist keine im Kontext definierte elektrische Feldgröße." },
      { id: "q6", question: "Welchen Wert hat die elektrische Feldkonstante ε₀?", options: ["4π × 10⁻⁷ F/m", "8,854 × 10⁻¹² F/m", "8,99 × 10⁹ F/m", "1,602 × 10⁻¹⁹ F/m"], correctIndex: 1, explanation: "Die elektrische Feldkonstante (Permittivität des Vakuums) beträgt ε₀ = 8,854 × 10⁻¹² F/m und verknüpft im Coulombgesetz F = |q₁||q₂|/(4πε₀r²) die Ladungen mit der resultierenden Kraft. Der Distraktor 4π × 10⁻⁷ ist tatsächlich der Wert der magnetischen Feldkonstante μ₀ (allerdings in T·m/A), und 8,99 × 10⁹ ist die daraus abgeleitete Coulomb-Konstante k = 1/(4πε₀), nicht ε₀ selbst." },
      { id: "q7", question: "Was besagt das Superpositionsprinzip für elektrische Kräfte?", options: ["Nur die stärkste Kraft wirkt", "Kräfte addieren sich nur bei gleichen Ladungsvorzeichen", "Felder heben sich immer gegenseitig auf", "Die Gesamtkraft ist die Vektorsumme aller Einzelkräfte"], correctIndex: 3, explanation: "Elektrische Felder überlagern sich linear: Jede Ladung erzeugt ihr eigenes Feld unabhängig von den anderen, und die Gesamtkraft auf eine Probeladung ist die vektorielle Summe aller Einzelkräfte, F_ges = ΣF_i. Das gilt unabhängig vom Vorzeichen der beteiligten Ladungen – die Richtung jeder Einzelkraft (Anziehung oder Abstoßung) fließt automatisch als Vektor in die Summe ein." },
      { id: "q8", question: "Wie lautet das elektrische Feld zwischen zwei parallelen Platten (Spannung U, Abstand d)?", options: ["E = U · d", "E = U / d", "E = U² / d", "E = d / U"], correctIndex: 1, explanation: "Im homogenen Feld eines idealen Plattenkondensators ist E = U/d, weil die Spannung als Wegintegral U = ∫E ds = E·d über den konstanten Abstand definiert ist. E = U·d würde bedeuten, dass das Feld mit wachsendem Plattenabstand zunimmt – physikalisch falsch, da sich die Feldlinien bei größerem Abstand stärker verdünnen statt verdichten." },
      { id: "q9", question: "Zwei Ladungen mit gleichem Vorzeichen werden einander angenähert. Was beobachtet man?", options: ["Sie stoßen sich ab", "Sie ziehen sich an", "Die Kraft hängt nur von der Masse ab", "Es wirkt keine Kraft zwischen ihnen"], correctIndex: 0, explanation: "Gleichnamige Ladungen (gleiches Vorzeichen) stoßen sich ab, weil die Coulombkraft F = k·q₁q₂/r² bei q₁q₂ > 0 in Richtung wachsenden Abstands wirkt. Dieses Vorzeichenverhalten folgt direkt aus dem Coulombschen Gesetz und ist unabhängig von der Masse der Ladungsträger – die (massenabhängige) Gravitationskraft ist bei mikroskopischen Ladungen um viele Größenordnungen schwächer und hier vernachlässigbar." },
      { id: "q10", question: "Welche Aussage zur Quantisierung der elektrischen Ladung ist korrekt?", options: ["Ladung ist stets ein ganzzahliges Vielfaches von e", "Ladung kann jeden beliebigen kontinuierlichen Wert annehmen", "Quantisierung gilt nur im Atomkern, nicht in der Atomhülle", "Nur positive Ladungen sind quantisiert, negative nicht"], correctIndex: 0, explanation: "Elektrische Ladung ist quantisiert: q = n·e mit n ∈ ℤ und der Elementarladung e = 1,602 × 10⁻¹⁹ C als kleinster frei vorkommender Einheit. Das gilt gleichermaßen für positive und negative Ladungsträger (Protonen bzw. Elektronen) und ist nicht auf den Atomkern beschränkt. Die Vorstellung eines kontinuierlichen Ladungsspektrums widerspricht der beobachteten Tatsache, dass alle bekannten freien Ladungen ganzzahlige Vielfache von e sind." }
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
      { id: "q1", question: "Was ist die Einheit des elektrischen Potenzials?", options: ["Volt (V)", "Ampere (A)", "Coulomb (C)", "Joule (J)"], correctIndex: 0, explanation: "Das elektrische Potenzial ist als potenzielle Energie pro Ladungseinheit definiert (φ = E_pot/q), daher ist seine SI-Einheit Volt: 1 V = 1 J/C. Ampere misst die Stromstärke, Coulomb die Ladung selbst und Joule die Energie – keines davon ist die Einheit für 'Energie pro Ladung', sondern jeweils nur eine der beiden Komponenten dieses Quotienten." },
      { id: "q2", question: "Wie hängt das Potenzial einer Punktladung Q vom Abstand r ab?", options: ["φ ∝ r", "φ = konstant", "φ ∝ 1/r", "φ ∝ 1/r²"], correctIndex: 2, explanation: "Das Potenzial einer Punktladung folgt aus φ = kQ/r und fällt daher linear mit 1/r ab – im Gegensatz zur Feldstärke E = kQ/r², die quadratisch mit 1/r² abfällt. Da φ aus dem Wegintegral von E entsteht (φ = ∫E dr), verliert es dabei eine Potenz von r im Nenner und fällt langsamer ab als E." },
      { id: "q3", question: "Wie ist die elektrische Feldstärke E mit dem Potenzial φ verknüpft?", options: ["E = φ · r", "E = φ / r", "E = +dφ/dx (ohne Vorzeichenwechsel)", "E = −dφ/dx"], correctIndex: 3, explanation: "Das elektrische Feld ist der negative Gradient des Potenzials: E = −dφ/dx. Das Minuszeichen ist entscheidend, denn das Feld zeigt in Richtung abnehmenden Potenzials (von hohem zu niedrigem φ), während der Gradient dφ/dx per Definition in Richtung wachsenden Potenzials zeigt. Der Distraktor ohne Vorzeichenwechsel ist ein klassischer Fehler: Er würde bedeuten, dass das Feld zum höheren Potenzial hin zeigt – das Gegenteil der physikalischen Realität." },
      { id: "q4", question: "Welche Aussage zu Äquipotenzialflächen ist korrekt?", options: ["Sie treten ausschließlich bei Punktladungen auf", "Auf ihnen ist die Feldstärke überall konstant", "Sie verlaufen stets parallel zu den Feldlinien", "Sie stehen senkrecht auf den Feldlinien"], correctIndex: 3, explanation: "Auf einer Äquipotenzialfläche ist φ per Definition konstant, es existiert also keine Potenzialänderung entlang der Fläche. Da E = −dφ/dx nur ungleich null ist, wenn sich φ ändert, kann keine Feldkomponente entlang der Fläche existieren – das Feld muss daher senkrecht zu ihr stehen. Äquipotenzialflächen treten bei jeder Ladungsverteilung auf (nicht nur bei Punktladungen), die Feldstärke ist auf ihnen im Allgemeinen nicht konstant, und ein paralleler Verlauf zu den Feldlinien wäre ein Widerspruch, da dann Arbeit ohne Potenzialänderung verrichtet würde." },
      { id: "q5", question: "Welche Arbeit verrichtet das elektrische Feld, wenn eine Ladung q zwischen zwei Äquipotenzialflächen bewegt wird?", options: ["W = q · φ", "W = q / (φ₁ − φ₂)", "W = q · (φ₁ − φ₂)", "W = 0, da das Feld keine Arbeit verrichtet"], correctIndex: 2, explanation: "Die vom Feld an einer Ladung q verrichtete Arbeit ist W = q·(φ₁ − φ₂), analog zu W = qU. Bewegt sich die Ladung entlang derselben Äquipotenzialfläche, ist φ₁ = φ₂ und damit W = 0 – konsistent damit, dass das Feld dort keine Kraftkomponente in Bewegungsrichtung hat. 'W = 0, da das Feld keine Arbeit verrichtet' ist als allgemeine Aussage falsch: Zwischen zwei unterschiedlichen Äquipotenzialflächen (φ₁ ≠ φ₂) leistet das Feld sehr wohl Arbeit." },
      { id: "q6", question: "Was entspricht 1 Elektronenvolt (eV) in Joule?", options: ["1 eV = 3,6 × 10⁶ J (entspricht 1 kWh)", "1 eV = 1,602 × 10⁻¹⁹ J", "1 eV = 6,022 × 10²³ J (Avogadro-Zahl als Exponent)", "1 eV = 9,1 × 10⁻³¹ J (Größenordnung der Elektronenmasse)"], correctIndex: 1, explanation: "1 eV ist per Definition die Energie, die ein Elektron (Ladung e) beim Durchlaufen einer Potenzialdifferenz von 1 V gewinnt: E = q·U = e·1V = 1,602 × 10⁻¹⁹ C · 1 V = 1,602 × 10⁻¹⁹ J. Die Distraktoren sind reale, aber andere Größen: 3,6 × 10⁶ J ist der Energiewert von 1 Kilowattstunde, 6,022 × 10²³ ist die Avogadro-Zahl (keine Energie) und 9,1 × 10⁻³¹ kg ist die Elektronenmasse – Verwechslungen mit diesen Zahlenwerten sind ein häufiger Fehler." },
      { id: "q7", question: "Welchen Wert hat das elektrische Potenzial im Unendlichen (r → ∞) für eine Punktladung?", options: ["φ → −∞", "φ → 0", "φ → ∞", "φ bleibt konstant"], correctIndex: 1, explanation: "Für eine Punktladung gilt φ = kQ/r. Lässt man r gegen unendlich wachsen, geht der Bruch kQ/r gegen null, unabhängig vom Vorzeichen oder Betrag von Q. Diese Randbedingung φ(∞) = 0 ist die übliche Wahl des Bezugspunkts (Eichung) und macht φ zu einer eindeutig bestimmten Größe statt nur bis auf eine additive Konstante festgelegt." },
      { id: "q8", question: "Welches Vorzeichen hat das Potenzial in der Nähe einer negativen Ladung?", options: ["Null", "Immer positiv", "Immer negativ", "Abhängig von der Entfernung"], correctIndex: 2, explanation: "Da φ = kQ/r und k, r > 0 stets positiv sind, hat φ dasselbe Vorzeichen wie Q. Für eine negative Ladung (Q < 0) ist φ deshalb für jeden endlichen Abstand r > 0 negativ – unabhängig von der Entfernung ändert sich nur der Betrag (er wächst mit abnehmendem r). Die Option 'Abhängig von der Entfernung' würde fälschlich unterstellen, dass sich sogar das Vorzeichen ändern könnte." },
      { id: "q9", question: "Was versteht man unter der elektrischen Spannung U zwischen zwei Punkten?", options: ["Die Potenzialdifferenz φ₁ − φ₂", "Das Produkt aus Ladung und Potenzial", "Die Summe der Potenziale beider Punkte", "Die elektrische Feldstärke multipliziert mit der Ladung"], correctIndex: 0, explanation: "Spannung ist per Definition die Potenzialdifferenz zwischen zwei Punkten: U = φ₁ − φ₂. Diese Definition macht die Spannung zu einer relativen, wegunabhängigen Größe im elektrostatischen Feld, weshalb ein Voltmeter stets die Differenz zwischen zwei Messpunkten bestimmt, nie ein absolutes Potenzial. 'Produkt aus Ladung und Potenzial' beschreibt dagegen die potenzielle Energie E_pot = qφ – eine andere physikalische Größe." },
      { id: "q10", question: "In welche Richtung zeigt das elektrische Feld im Vergleich zum Potenzialgradienten?", options: ["In Richtung fallenden Potenzials", "Parallel zu den Äquipotenzialflächen", "In Richtung steigenden Potenzials", "Senkrecht zum Potenzialgradienten"], correctIndex: 0, explanation: "Aus E = −dφ/dx folgt, dass das Feld in die Richtung zeigt, in der φ am stärksten abnimmt – das Minuszeichen kehrt die Richtung des mathematischen Gradienten (der zum Anstieg zeigt) gerade um. Ein positives Probeteilchen wird also stets vom hohen zum niedrigen Potenzial hin beschleunigt, ähnlich wie eine Kugel bergab rollt: Die Feldrichtung entspricht dem steilsten Abstieg der Potenziallandschaft." }
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
      { id: "q1", question: "Was beschreibt die Kapazität eines Kondensators?", options: ["Die gespeicherte Energie pro Volumeneinheit", "Das Verhältnis von gespeicherter Ladung zu Spannung", "Die maximale Spannung, die angelegt werden darf", "Den elektrischen Widerstand des Dielektrikums"], correctIndex: 1, explanation: "Die Kapazität C = Q/U beschreibt, wie viel Ladung Q ein Kondensator bei angelegter Spannung U speichern kann. Energiedichte, Durchschlagspannung und Widerstand des Dielektrikums sind zwar reale, verwandte Eigenschaften eines Kondensators, aber nicht die Definition der Kapazität selbst." },
      { id: "q2", question: "Welche Einheit hat die Kapazität?", options: ["Weber (Wb), Einheit des magnetischen Flusses", "Ohm (Ω), Einheit des elektrischen Widerstands", "Henry (H), Einheit der Induktivität", "Farad (F)"], correctIndex: 3, explanation: "Die Kapazität wird in Farad gemessen, definiert als 1 F = 1 C/V. Weber, Ohm und Henry sind reale SI-Einheiten, gehören aber zu magnetischem Fluss, elektrischem Widerstand bzw. Induktivität — verwandten, aber anderen elektrischen Größen." },
      { id: "q3", question: "Wie lautet die Formel für die Kapazität eines Plattenkondensators (Fläche A, Abstand d, relative Permittivität ε_r)?", options: ["C = ε₀ · A · d, also proportional zum Abstand", "C = ε₀ · ε_r · d / A, mit d im Zähler", "C = ε_r / (ε₀ · A · d), als reiner Kehrwert", "C = ε₀ · ε_r · A / d"], correctIndex: 3, explanation: "Die Kapazität des Plattenkondensators ist C = ε₀·ε_r·A/d — sie steigt mit größerer Plattenfläche A (mehr Raum für Ladung) und sinkt mit größerem Abstand d (schwächere Feldwirkung zwischen den Platten). Die Distraktoren vertauschen A und d im Zähler/Nenner oder bilden fälschlich einen reinen Kehrwert." },
      { id: "q4", question: "Welchen Einfluss hat ein Dielektrikum (ε_r > 1) zwischen den Kondensatorplatten?", options: ["Es verringert die Kapazität gegenüber Vakuum", "Es vergrößert den effektiven Plattenabstand", "Es erhöht die Kapazität um den Faktor ε_r", "Es verändert die Kapazität überhaupt nicht"], correctIndex: 2, explanation: "Ein Dielektrikum mit ε_r > 1 polarisiert sich im äußeren Feld und kompensiert einen Teil davon, sodass bei gleicher Spannung mehr Ladung gespeichert werden kann — die Kapazität steigt exakt um den Faktor ε_r (C = ε₀ε_rA/d). Eine Verringerung oder ein unveränderter Wert widerspräche dieser direkten Proportionalität." },
      { id: "q5", question: "Wie berechnet sich die Gesamtkapazität von zwei in Reihe geschalteten Kondensatoren C₁ und C₂?", options: ["1/C_ges = 1/C₁ + 1/C₂", "C_ges = C₁ · C₂ / (C₁ + C₂), als direkter Bruch", "C_ges = C₁ · C₂, als reines Produkt", "C_ges = C₁ + C₂, wie bei Parallelschaltung"], correctIndex: 0, explanation: "Bei Reihenschaltung tragen beide Kondensatoren dieselbe Ladung, aber unterschiedliche Teilspannungen, weshalb sich die Kehrwerte addieren: 1/C_ges = 1/C₁ + 1/C₂. Die direkte Addition C₁+C₂ gilt dagegen für die Parallelschaltung, in der die Spannung gleich bleibt und sich die Ladungen addieren." },
      { id: "q6", question: "Wie addieren sich Kondensatoren in Parallelschaltung?", options: ["Die Quadratwurzeln der Kapazitäten addieren sich", "Die Kapazitäten addieren sich direkt", "Die Kehrwerte der Kapazitäten addieren sich", "Die Kapazitäten multiplizieren sich miteinander"], correctIndex: 1, explanation: "Bei Parallelschaltung liegt an allen Kondensatoren dieselbe Spannung an, sodass sich ihre gespeicherten Ladungen addieren und damit auch C_ges = C₁ + C₂ + ... gilt. Die Kehrwertaddition ist dagegen das Kennzeichen der Reihenschaltung, in der sich stattdessen die Teilspannungen addieren." },
      { id: "q7", question: "Wie lautet die Formel für die im Kondensator gespeicherte Energie?", options: ["E = Q / C, also Ladung durch Kapazität", "E = C · U, ohne Quadrat der Spannung", "E = ½ · C · U²", "E = C² · U, mit quadrierter Kapazität"], correctIndex: 2, explanation: "Die gespeicherte elektrische Energie beträgt E = ½·C·U² (äquivalent zu Q²/(2C) bzw. ½·Q·U), weil beim Aufladen die Spannung von 0 auf U ansteigt und die Arbeit dabei integriert werden muss. Die übrigen Optionen ergäben eine falsche Einheit oder eine lineare statt quadratische Abhängigkeit von U." },
      { id: "q8", question: "Welche Maßnahme erhöht die Kapazität eines Plattenkondensators am effektivsten?", options: ["Die Plattenfläche gezielt halbieren", "Den Plattenabstand halbieren", "Den Plattenabstand stattdessen verdoppeln", "Ausschließlich die angelegte Spannung erhöhen"], correctIndex: 1, explanation: "Da C = ε₀ε_rA/d umgekehrt proportional zum Plattenabstand d ist, verdoppelt eine Halbierung von d die Kapazität. Eine Verdoppelung von d hätte den gegenteiligen Effekt, eine Verkleinerung der Fläche würde C senken, und die Spannung U taucht in der Kapazitätsformel gar nicht auf — sie beeinflusst C nicht." },
      { id: "q9", question: "Welchen typischen Kapazitätsbereich haben praktisch verwendete Kondensatoren?", options: ["Von Megafarad bis in den Gigafarad-Bereich", "Ausschließlich im Farad-Bereich zwischen 1 F und 1000 F", "Immer exakt 1 µF, unabhängig von der Bauform", "Von Picofarad (pF) bis Millifarad (mF)"], correctIndex: 3, explanation: "Praktische Kondensatoren reichen von wenigen Picofarad bei Hochfrequenzanwendungen bis zu einigen Millifarad bei Elektrolytkondensatoren — 1 Farad ist bereits eine außergewöhnlich große, in Alltagsbauteilen kaum erreichte Kapazität. Werte im Mega- oder Gigafarad-Bereich kommen in gewöhnlichen Kondensatoren nicht vor." },
      { id: "q10", question: "Was gilt für die Energie in einem aufgeladenen Kondensator, wenn die Spannung verdoppelt wird (bei konstanter Kapazität)?", options: ["Die Energie vervierfacht sich", "Die Energie verdoppelt sich proportional zur Spannung", "Die Energie bleibt trotz höherer Spannung gleich", "Die Energie halbiert sich entgegen der Erwartung"], correctIndex: 0, explanation: "Da E = ½·C·U² quadratisch von der Spannung abhängt, führt eine Verdopplung von U zu einer Vervierfachung der Energie (Faktor 2² = 4), nicht zu einer bloßen Verdopplung. Diese quadratische statt lineare Abhängigkeit ist der entscheidende Unterschied zur einfachen Ladung Q = C·U, die sich bei doppelter Spannung nur verdoppelt." }
    ]
  }
];
