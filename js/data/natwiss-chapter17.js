const NATWISS_CHAPTER17_TOPICS = [
  {
    id: "natwiss-ueb-elektrostatik",
    chapter: 17,
    order: 1,
    title: "Übungsaufgaben: Elektrostatik und Coulombkraft",
    icon: "⚡",
    summary: "Übungsaufgaben zu Coulombgesetz, elektrischem Feld, Potenzial und Vektoraddition von Kräften.",
    explanation: [
      { type: "p", text: "Grundformeln der Elektrostatik:" },
      { type: "formula", tex: "F_C = \\frac{1}{4\\pi\\varepsilon_0}\\frac{Q_1 Q_2}{r^2}, \\quad E = \\frac{F}{q} = \\frac{Q}{4\\pi\\varepsilon_0 r^2}, \\quad \\varphi = \\frac{Q}{4\\pi\\varepsilon_0 r}" },
      { type: "p", text: "Musterlösung Aufg. 41.1 (identische Ionen):" },
      { type: "formula", tex: "Q = r\\sqrt{F_C \\cdot 4\\pi\\varepsilon_0} = 5{\\cdot}10^{-10}\\sqrt{3{,}7{\\cdot}10^{-9} \\cdot 4\\pi{\\cdot}8{,}85{\\cdot}10^{-12}} \\approx 3{,}2{\\cdot}10^{-19} \\; {\\rm C}" },
      { type: "list", items: [
        "n = Q/e = 3,2·10⁻¹⁹/1,6·10⁻¹⁹ = 2 fehlende Elektronen pro Ion"
      ]},
      { type: "p", text: "Musterlösung Aufg. 41.7 (Potenzialunterschied):" },
      { type: "formula", tex: "\\varphi_A - \\varphi_B = \\frac{q}{4\\pi\\varepsilon_0}\\left(\\frac{1}{d_1} - \\frac{1}{d_2}\\right) = 9{\\cdot}10^3 \\cdot (-0{,}5) = -4{,}5 \\; {\\rm kV}" },
      { type: "p", text: "Das Potenzial einer Punktladung hängt nur vom Abstand r ab, nicht von der Richtung — daher ist Aufg. 41.7b identisch mit 41.7a." }
    ],
    exercises: [
      {
        id: "natwiss-ueb-elektrostatik-e1",
        prompt: "Zwei identische Ionen im Abstand r = 5·10⁻¹⁰ m üben F = 3,7·10⁻⁹ N aufeinander aus. Wie groß ist die Ladung Q jedes Ions?",
        solution: [{ type: "p", text: "F = kQ²/r² → Q = r·√(F/k) = r·√(F·4πε₀) = 5·10⁻¹⁰·√(3,7·10⁻⁹·1,113·10⁻¹⁰) = 5·10⁻¹⁰·√(4,12·10⁻¹⁹) ≈ 3,2·10⁻¹⁹ C." }]
      },
      {
        id: "natwiss-ueb-elektrostatik-e2",
        prompt: "Wie viele Elektronen fehlen dem Ion aus Aufg. 1? (e = 1,6·10⁻¹⁹ C)",
        solution: [{ type: "p", text: "n = Q/e = 3,2·10⁻¹⁹/1,6·10⁻¹⁹ = 2 Elektronen." }]
      },
      {
        id: "natwiss-ueb-elektrostatik-e3",
        prompt: "Punktladung q = 1 μC. Potenzialunterschied φ_A − φ_B für d₁ = 2 m (Punkt A) und d₂ = 1 m (Punkt B)?",
        solution: [{ type: "p", text: "φ_A − φ_B = kq·(1/d₁ − 1/d₂) = 9·10⁹·10⁻⁶·(1/2 − 1/1) = 9·10³·(−0,5) = −4500 V = −4,5 kV." }]
      },
      {
        id: "natwiss-ueb-elektrostatik-e4",
        prompt: "Gilt der gleiche Potenzialunterschied φ_A − φ_B = −4,5 kV auch, wenn A und B nicht auf derselben Achse liegen, aber gleiche Abstände d₁ = 2 m und d₂ = 1 m haben?",
        solution: [{ type: "p", text: "Ja! Das Potenzial einer Punktladung φ = kq/r hängt nur vom Abstand r ab, nicht von der Richtung. Der Potenzialunterschied ist daher identisch: −4,5 kV." }]
      },
      {
        id: "natwiss-ueb-elektrostatik-e5",
        prompt: "Zwei Elektronen befinden sich im Abstand r. Bei welchem Abstand r kompensiert die elektrostatische Abstoßung gerade die Gewichtskraft des unteren Elektrons? (m_e = 9,11·10⁻³¹ kg, e = 1,6·10⁻¹⁹ C)",
        solution: [{ type: "p", text: "F_C = F_G → ke²/r² = m_e·g → r = e·√(k/(m_e·g)) = 1,6·10⁻¹⁹·√(9·10⁹/(9,11·10⁻³¹·9,81)) = 1,6·10⁻¹⁹·√(1,007·10³⁹) ≈ 1,6·10⁻¹⁹·3,17·10¹⁹ ≈ 5,1 m." }]
      }
    ],
    quiz: [
      { id: "natwiss-ueb-elektrostatik-q1", question: "Wie skaliert die Coulombkraft mit dem Abstand r?", options: ["F ∝ r, linear statt quadratisch", "F ∝ 1/r³, mit falscher Potenz", "F ∝ 1/r, ohne Quadrierung", "F ∝ 1/r²"], correctIndex: 3, explanation: "Das Coulombgesetz F = kQ₁Q₂/r² zeigt ein quadratisches Abstandsgesetz, analog zur Gravitation — verdoppelt sich der Abstand, sinkt die Kraft auf ein Viertel, nicht nur auf die Hälfte." },
      { id: "natwiss-ueb-elektrostatik-q2", question: "Was ist die Coulombkonstante k in SI-Einheiten?", options: ["k = 9·10⁹ Vm/As", "k = 1,6·10⁻¹⁹ C, das ist stattdessen die Elementarladung", "k = 6,67·10⁻¹¹ Nm²/kg², das ist die Gravitationskonstante", "k = 8,85·10⁻¹² As/(Vm), das ist ε₀ selbst"], correctIndex: 0, explanation: "Die Coulombkonstante k = 1/(4πε₀) ≈ 8,99·10⁹ N·m²/C² ≈ 9·10⁹ Vm/As ergibt sich als Kehrwert von 4π mal der elektrischen Feldkonstante ε₀, nicht als ε₀ selbst. Die anderen Werte sind reale, aber andere Naturkonstanten." },
      { id: "natwiss-ueb-elektrostatik-q3", question: "Wie hängt das elektrische Potenzial einer Punktladung vom Abstand r ab?", options: ["φ bleibt für jeden Abstand konstant", "φ ∝ 1/r", "φ ∝ r, linear statt mit Kehrwert", "φ ∝ 1/r², wie die Kraft statt des Potenzials"], correctIndex: 1, explanation: "Aus φ = kQ/r folgt eine 1/r-Abhängigkeit — das Potenzial fällt also langsamer ab als die Kraft, die mit 1/r² abnimmt, weil das Potenzial das Wegintegral der Feldstärke ist und dabei eine Potenz von r 'gewinnt'." },
      { id: "natwiss-ueb-elektrostatik-q4", question: "Was ist der Unterschied zwischen Feldstärke E und Potenzial φ?", options: ["E und φ sind physikalisch identische Größen", "Es gilt φ = E²/r, eine falsche Verknüpfung", "Es gilt E = φ/r, ohne Ableitung", "E = −dφ/dr, der negative Gradient des Potenzials"], correctIndex: 3, explanation: "Die Feldstärke ist definiert als negativer Gradient des Potenzials, E = −∇φ, und zeigt damit in Richtung des stärksten Potenzialabfalls. E und φ sind daher unterschiedliche, wenn auch eng verknüpfte Größen — φ ist ein Skalar, E ein Vektorfeld." },
      { id: "natwiss-ueb-elektrostatik-q5", question: "Zwei entgegengesetzt geladene Punktladungen +Q und −Q: Wo ist das Potenzial auf der Verbindungsachse außerhalb der Ladungen null?", options: ["Nur in einem Punkt zwischen den Ladungen", "Erst im Unendlichen", "Nirgendwo außerhalb der beiden Ladungen", "Genau im Mittelpunkt zwischen den Ladungen"], correctIndex: 2, explanation: "Außerhalb der Ladungen gilt stets r₁ ≠ r₂, sodass sich die Beiträge φ = k(Q/r₁ − Q/r₂) wegen der ungleichen Abstände nicht zu null aufheben können — anders als zwischen den Ladungen, wo bei gleichen Vorzeichen (nicht hier) eine Nullstelle existieren könnte." },
      { id: "natwiss-ueb-elektrostatik-q6", question: "Was bedeutet eine Äquipotenzialfläche?", options: ["Eine Fläche, auf der die Feldstärke E überall null ist", "Eine Fläche gleichen Potenzials, auf der keine Verschiebearbeit nötig ist", "Eine Fläche gleicher Feldstärke, aber unterschiedlichen Potenzials", "Eine Fläche, auf der die Kraft maximal wird"], correctIndex: 1, explanation: "Auf einer Äquipotenzialfläche ist φ konstant, weshalb das Verschieben einer Ladung entlang der Fläche keine Arbeit erfordert (W = qΔφ = 0). Die Feldstärke selbst muss dabei nicht null sein — sie steht lediglich senkrecht zur Fläche." },
      { id: "natwiss-ueb-elektrostatik-q7", question: "Welche Arbeit verrichtet das Feld beim Verschieben einer Ladung q entlang einer Äquipotenzialfläche?", options: ["W = qΔφ, mit einer von null verschiedenen Potenzialdifferenz", "W = qE·r, eine falsche Kombination der Größen", "W = 0", "W = qφ, ohne Bezug auf eine Potenzialdifferenz"], correctIndex: 2, explanation: "Da auf einer Äquipotenzialfläche per Definition Δφ = 0 gilt, folgt aus W = qΔφ zwangsläufig W = 0 — es wird keine Arbeit verrichtet, unabhängig von der Ladung q oder dem absoluten Potenzialwert φ." },
      { id: "natwiss-ueb-elektrostatik-q8", question: "Was besagt das Superpositionsprinzip für elektrische Felder?", options: ["Das Gesamtfeld ist die vektorielle Summe der Einzelfelder", "Felder addieren sich ausschließlich skalar, nie vektoriell", "Felder können sich grundsätzlich nie gegenseitig auslöschen", "Das Prinzip gilt nur bei gleich großen Ladungen"], correctIndex: 0, explanation: "Nach dem Superpositionsprinzip überlagern sich mehrere elektrische Felder vektoriell zum Gesamtfeld E_ges = ΣE_i, während sich die zugehörigen Potenziale einfacher skalar addieren, φ_ges = Σφ_i. Das Prinzip gilt unabhängig von der Größe oder dem Vorzeichen der beteiligten Ladungen und kann durchaus zu Auslöschungen führen." },
      { id: "natwiss-ueb-elektrostatik-q9", question: "Ein Proton und ein Elektron mit betragsgleicher, entgegengesetzter Ladung: Welche Kraft wirkt zwischen ihnen bei r = 10⁻¹⁰ m?", options: ["F ≈ 2,3·10⁻⁸ N", "F ≈ 8,2 N, um viele Zehnerpotenzen zu groß", "F ≈ 2,3·10⁻⁸ N", "F ≈ 1,4·10⁻³ N, ebenfalls zu groß"], correctIndex: 2, explanation: "Mit F = k·e²/r² = 9·10⁹·(1,6·10⁻¹⁹)²/(10⁻¹⁰)² ergibt sich F ≈ 2,3·10⁻⁸ N — die winzige Elementarladung im Quadrat wird dabei durch den sehr kleinen Abstand im Quadrat im Nenner teilweise kompensiert." },
      { id: "natwiss-ueb-elektrostatik-q10", question: "Wie groß ist der Betrag der Elementarladung e?", options: ["e = 1,6·10⁻¹⁹ C", "e = 6,67·10⁻¹¹ C, das ist stattdessen die Gravitationskonstante", "e = 9,11·10⁻³¹ C, das ist stattdessen die Elektronenmasse in kg", "e = 1,38·10⁻²³ C, das ist stattdessen die Boltzmann-Konstante"], correctIndex: 0, explanation: "Die Elementarladung e = 1,602·10⁻¹⁹ C ist die kleinste in der Natur frei vorkommende elektrische Ladung, ein ganzzahliges Vielfaches von der jede beobachtbare Ladung ist. Die Distraktoren verwechseln sie mit anderen, ähnlich kleinen Naturkonstanten wie Gravitationskonstante, Elektronenmasse oder Boltzmann-Konstante." }
    ]
  },
  {
    id: "natwiss-ueb-kondensatoren",
    chapter: 17,
    order: 2,
    title: "Übungsaufgaben: Kondensatoren und Schaltkreise",
    icon: "🔋",
    summary: "Übungsaufgaben zu Kondensatoren, Dielektrika, Reihen- und Parallelschaltungen.",
    explanation: [
      { type: "p", text: "Grundformeln für Kondensatoren:" },
      { type: "formula", tex: "C = \\varepsilon_r \\varepsilon_0 \\frac{A}{d}, \\quad Q = CU, \\quad W = \\frac{1}{2}CU^2 = \\frac{Q^2}{2C}" },
      { type: "p", text: "Schaltung: Reihe (1/C_ges = Σ1/Cᵢ), Parallel (C_ges = ΣCᵢ)." },
      { type: "p", text: "Musterlösung Aufg. 42.1 (Ladungstiefe in Cu-Platte):" },
      { type: "list", items: [
        "Q = CU = 0,25·10⁻⁶·12 = 3·10⁻⁶ C",
        "N = Q/e = 3·10⁻⁶/1,6·10⁻¹⁹ = 1,875·10¹³ Elektronen",
        "d = N/(n·A) = 1,875·10¹³/(8,49·10²⁸·2·10⁻⁴) ≈ 1,1·10⁻¹² m = 1 pm"
      ]},
      { type: "p", text: "Musterlösung Aufg. 42.3 (Kondensatornetzwerk):" },
      { type: "list", items: [
        "Q_C3 = 12 − 8 = 4 μC, Q_C4 = 8 μC",
        "U₄ = Q₄/C₄ = 8/4 = 2 V, C₃ = Q₃/U₃ = 4/2 = 2 μF",
        "C₃₄ = 6 μF, C_ges = 12/9 = 4/3 μF",
        "1/C₁ = 3/4 − 1/3 − 1/6 = 1/4 → C₁ = 4 μF"
      ]},
      { type: "p", text: "Musterlösung Aufg. 42.5 (Dielektrikum-Kondensator):" },
      { type: "formula", tex: "d_{\\rm min} = U/E_{\\rm max} = 2000/(4{\\cdot}10^7) = 50 \\; \\mu{\\rm m}, \\quad A = Cd/(\\varepsilon_r \\varepsilon_0) \\approx 0{,}024 \\; {\\rm m}^2" }
    ],
    exercises: [
      {
        id: "natwiss-ueb-kondensatoren-e1",
        prompt: "C = 0,25 μF, U = 12 V. Welche Ladung Q wird gespeichert? Aus welcher Tiefe d stammen die Elektronen (n = 8,49·10²⁸ m⁻³, A = 2·10⁻⁴ m²)?",
        solution: [{ type: "p", text: "Q = CU = 0,25·10⁻⁶·12 = 3·10⁻⁶ C. N = Q/e = 3·10⁻⁶/1,6·10⁻¹⁹ ≈ 1,875·10¹³. d = N/(n·A) = 1,875·10¹³/(8,49·10²⁸·2·10⁻⁴) ≈ 1,1·10⁻¹² m = 1 pm." }]
      },
      {
        id: "natwiss-ueb-kondensatoren-e2",
        prompt: "Netzwerk: C₂ = 3 μF, C₄ = 4 μF, U = 9 V. Durch Punkt a: 12 μC, durch Punkt b: 8 μC. Bestimmen Sie C₁ und C₃.",
        solution: [{ type: "p", text: "Q₃ = 12 − 8 = 4 μC. Q₄ = 8 μC. U₄ = 8/4 = 2 V. C₃ = 4/2 = 2 μF. C₃₄ = 6 μF. C_ges = 12/9 = 4/3 μF. 1/C₁ = 3/4 − 1/3 − 1/6 = 1/4. C₁ = 4 μF." }]
      },
      {
        id: "natwiss-ueb-kondensatoren-e3",
        prompt: "Dielektrikum: ε_r = 24, E_max = 4·10⁷ V/m. C = 0,1 μF soll U = 2 kV aushalten. Berechnen Sie Mindestabstand d und Plattenfläche A.",
        solution: [{ type: "p", text: "d_min = U/E_max = 2000/(4·10⁷) = 5·10⁻⁵ m = 50 μm. A = C·d/(ε_r·ε₀) = 10⁻⁷·5·10⁻⁵/(24·8,854·10⁻¹²) = 5·10⁻¹²/2,125·10⁻¹⁰ ≈ 0,0235 m² ≈ 235 cm²." }]
      },
      {
        id: "natwiss-ueb-kondensatoren-e4",
        prompt: "Wie viele C = 1 μF Kondensatoren müssen parallel geschaltet werden, um bei U = 110 V eine Ladung von Q = 1,0 C zu speichern?",
        solution: [{ type: "p", text: "C_ges = Q/U = 1,0/110 ≈ 9091 μF. n = C_ges/C = 9091 μF/1 μF ≈ 9091 Kondensatoren." }]
      },
      {
        id: "natwiss-ueb-kondensatoren-e5",
        prompt: "Ein Kondensator (Q gespeichert) wird zwischen Luft (E₁ = 2,5·10⁵ V/m) und Dielektrikum (E₂ = 1,2·10⁵ V/m) gefüllt. Wie groß ist ε_r? Was ist A bei Q = 10 nC?",
        solution: [{ type: "p", text: "ε_r = E₁/E₂ = 2,5·10⁵/1,2·10⁵ ≈ 2,08. A = Q/(ε₀·E₁) = 10⁻⁸/(8,854·10⁻¹²·2,5·10⁵) = 10⁻⁸/2,214·10⁻⁶ ≈ 4,5·10⁻³ m² = 45 cm²." }]
      }
    ],
    quiz: [
      { id: "natwiss-ueb-kondensatoren-q1", question: "Was ist die Kapazität eines Plattenkondensators?", options: ["C = ε₀·d/A, mit vertauschtem Zähler und Nenner", "C = U/Q, mit vertauschtem Zähler und Nenner", "C = Q·U, als Produkt statt Quotient", "C = ε_r·ε₀·A/d"], correctIndex: 3, explanation: "Die Kapazität C = ε_r·ε₀·A/d steigt mit größerer Plattenfläche A (mehr Raum für Ladung) und sinkt mit größerem Plattenabstand d (schwächere Feldwirkung). Die Definitionsgleichung C = Q/U (nicht U/Q) liefert dasselbe Ergebnis über die tatsächlich gespeicherte Ladung." },
      { id: "natwiss-ueb-kondensatoren-q2", question: "Wie ändert sich die Kapazität C bei Einführung eines Dielektrikums (ε_r > 1)?", options: ["C bleibt trotz Dielektrikum unverändert", "C steigt um den Faktor ε_r", "C sinkt um den Faktor ε_r", "C wird durch das Dielektrikum null"], correctIndex: 1, explanation: "Ein Dielektrikum polarisiert sich im elektrischen Feld und kompensiert einen Teil davon, wodurch bei gleicher Spannung mehr Ladung gespeichert werden kann: C = ε_r·C₀ steigt also exakt um den Faktor ε_r gegenüber der Vakuumkapazität C₀." },
      { id: "natwiss-ueb-kondensatoren-q3", question: "Zwei Kondensatoren in Reihe: C₁ = 2 μF, C₂ = 4 μF. Wie groß ist C_ges?", options: ["2 μF, nur der kleinere Einzelwert", "6 μF, die Summe wie bei Parallelschaltung", "4/3 μF und 1,33 μF sind derselbe, korrekte Wert", "1,33 μF und 4/3 μF sind derselbe, korrekte Wert"], correctIndex: 2, explanation: "Bei Reihenschaltung addieren sich die Kehrwerte: 1/C_ges = 1/2 + 1/4 = 3/4, also C_ges = 4/3 μF ≈ 1,33 μF — beide letzten Optionen bezeichnen denselben korrekten Zahlenwert, nur einmal als Bruch und einmal als Dezimalzahl." },
      { id: "natwiss-ueb-kondensatoren-q4", question: "Was ist die gespeicherte Energie in einem Kondensator (C = 10 μF, U = 100 V)?", options: ["W = 0,5 J, ohne den Faktor ½", "W = 0,05 J", "W = 50 J, ohne die korrekte Zehnerpotenz", "W = 5 J, ebenfalls mit falscher Zehnerpotenz"], correctIndex: 1, explanation: "Nach W = ½CU² = ½·10·10⁻⁶·10000 = 0,05 J muss sowohl der Faktor ½ als auch die korrekte Umrechnung von μF in Farad berücksichtigt werden, sonst entstehen die anderen, jeweils um Zehnerpotenzen oder den Faktor 2 falschen Werte." },
      { id: "natwiss-ueb-kondensatoren-q5", question: "Was begrenzt die maximale Spannung, die an einem Kondensator anliegen darf?", options: ["Ausschließlich die Dicke der Metallplatten", "Ein etwaiger ohmscher Widerstand im Kreis", "Die Durchschlagfeldstärke E_max des Dielektrikums", "Ausschließlich die Kapazität selbst"], correctIndex: 2, explanation: "Überschreitet die Feldstärke E = U/d die materialspezifische Durchschlagfestigkeit E_max des Dielektrikums, bricht die Isolationsschicht durch, was zu einem Kurzschluss zwischen den Platten führt. Plattendicke, Widerstand und Kapazität selbst sind für diese Grenze nicht ausschlaggebend." },
      { id: "natwiss-ueb-kondensatoren-q6", question: "An zwei parallel geschalteten Kondensatoren (C₁ = 3 μF, C₂ = 6 μF) liegt U = 10 V. Wie groß ist die Gesamtladung?", options: ["20 μC, mit falscher Kapazitätsaddition", "90 nC, um drei Zehnerpotenzen zu klein", "90 μC", "30 μC, mit fehlerhafter Multiplikation"], correctIndex: 2, explanation: "Bei Parallelschaltung addieren sich die Kapazitäten direkt, C_ges = C₁ + C₂ = 9 μF, sodass die Gesamtladung Q = C_ges·U = 9 μF · 10 V = 90 μC beträgt — auf die korrekte Einheit (μC statt nC) muss dabei geachtet werden." },
      { id: "natwiss-ueb-kondensatoren-q7", question: "Bei Kondensatoren in Reihenschaltung: Welche Größe ist für alle Kondensatoren gleich?", options: ["Die Ladung Q", "Die gespeicherte Energie", "Die Kapazität selbst", "Die anliegende Spannung"], correctIndex: 0, explanation: "In einer Reihenschaltung fließt dieselbe Ladung Q durch jeden Kondensator, da der Strom nirgendwo verzweigt wird — die Spannung teilt sich dagegen proportional zu den Kapazitäten auf den einzelnen Kondensatoren auf. Gleiche Spannung ist stattdessen das Kennzeichen der Parallelschaltung." },
      { id: "natwiss-ueb-kondensatoren-q8", question: "Bei Kondensatoren in Parallelschaltung: Welche Größe ist für alle Kondensatoren gleich?", options: ["Die anliegende Spannung", "Die gespeicherte Ladung", "Die gespeicherte Energie", "Die Kapazität selbst"], correctIndex: 0, explanation: "Bei Parallelschaltung liegen alle Kondensatoren direkt an denselben zwei Knoten, weshalb an ihnen dieselbe Spannung U anliegt — Ladung und Energie verteilen sich dagegen proportional zur jeweiligen Kapazität. Gleiche Ladung wäre stattdessen das Kennzeichen der Reihenschaltung." },
      { id: "natwiss-ueb-kondensatoren-q9", question: "Wie groß ist das elektrische Feld im Plattenkondensator (Abstand d, Spannung U)?", options: ["E = ε₀U/d, mit unnötigem Faktor ε₀", "E = d/U, mit vertauschtem Zähler und Nenner", "E = U/d", "E = U·d, als Produkt statt Quotient"], correctIndex: 2, explanation: "Im homogenen Feld eines idealen Plattenkondensators gilt E = U/d, da die Spannung als Wegintegral U = E·d über den konstanten Abstand definiert ist. Die Feldkonstante ε₀ geht dabei nicht in diese direkte Beziehung ein, sondern nur in die Kapazitätsformel." },
      { id: "natwiss-ueb-kondensatoren-q10", question: "Warum ist die Ladungstiefe bei Kondensatoraufladung nur etwa 1 pm (vgl. Aufgabe 42.1)?", options: ["Weil Kupfer generell ein schlechter elektrischer Leiter wäre", "Weil die benötigte Ladung Q = CU sehr klein im Vergleich zur freien Elektronendichte ist", "Weil sich Elektronen im Metall gar nicht bewegen würden", "Weil die angelegte Spannung grundsätzlich zu gering wäre"], correctIndex: 1, explanation: "Die tatsächlich benötigte Ladung (hier Q = 3 μC) ist verschwindend klein im Vergleich zur enormen freien Elektronendichte in Kupfer (n ≈ 8,49·10²⁸ m⁻³), sodass nur eine hauchdünne, atomare Schicht an der Plattenoberfläche umverteilt werden muss. Kupfer ist dabei gerade ein exzellenter, nicht schlechter Leiter." }
    ]
  },
  {
    id: "natwiss-ueb-stromkreis",
    chapter: 17,
    order: 3,
    title: "Übungsaufgaben: Gleichstrom und Magnetismus",
    icon: "🧲",
    summary: "Übungsaufgaben zu Kirchhoffschen Gesetzen, Widerstandsschaltungen und Magnetfeldern.",
    explanation: [
      { type: "p", text: "Ohmsches Gesetz und Kirchhoffsche Gesetze:" },
      { type: "formula", tex: "U = R \\cdot I, \\quad \\sum I_k = 0 \\; ({\\rm Knoten}), \\quad \\sum U_k = 0 \\; ({\\rm Masche})" },
      { type: "p", text: "Widerstandsschaltungen: Reihe R_ges = ΣRᵢ, Parallel 1/R_ges = Σ1/Rᵢ." },
      { type: "p", text: "Magnetfeld gerader Leiter und Spule:" },
      { type: "formula", tex: "B_{\\rm Leiter} = \\frac{\\mu_0 I}{2\\pi r}, \\quad B_{\\rm Solenoid} = \\mu_0 n I" },
      { type: "p", text: "Lorentzkraft und Induktion:" },
      { type: "formula", tex: "F = q(\\vec{v} \\times \\vec{B}), \\quad U_{\\rm ind} = -N \\frac{d\\Phi}{dt} = -N \\frac{d(BA)}{dt}" },
      { type: "p", text: "Elektrische Leistung: P = U·I = I²R = U²/R." }
    ],
    exercises: [
      {
        id: "natwiss-ueb-stromkreis-e1",
        prompt: "Drei Widerstände R₁ = 10 Ω, R₂ = 20 Ω, R₃ = 30 Ω liegen parallel an U = 12 V. Berechnen Sie R_ges, I_ges und die Teilströme.",
        solution: [{ type: "p", text: "1/R_ges = 1/10 + 1/20 + 1/30 = 6/60 + 3/60 + 2/60 = 11/60 → R_ges = 60/11 ≈ 5,45 Ω. I_ges = U/R_ges = 12/5,45 ≈ 2,2 A. I₁ = 12/10 = 1,2 A, I₂ = 12/20 = 0,6 A, I₃ = 12/30 = 0,4 A. Probe: 1,2 + 0,6 + 0,4 = 2,2 A ✓." }]
      },
      {
        id: "natwiss-ueb-stromkreis-e2",
        prompt: "Ein Elektron (m = 9,11·10⁻³¹ kg, e = 1,6·10⁻¹⁹ C) bewegt sich mit v = 10⁶ m/s senkrecht zu B = 0,1 T. Wie groß ist der Kreisradius?",
        solution: [{ type: "p", text: "Lorentzkraft = Zentripetalkraft: evB = mv²/r → r = mv/(eB) = 9,11·10⁻³¹·10⁶/(1,6·10⁻¹⁹·0,1) = 9,11·10⁻²⁵/1,6·10⁻²⁰ ≈ 5,7·10⁻⁵ m = 57 μm." }]
      },
      {
        id: "natwiss-ueb-stromkreis-e3",
        prompt: "Eine Spule (N = 200, A = 50 cm²) liegt in einem Magnetfeld, das von B₁ = 0 auf B₂ = 0,5 T in Δt = 0,1 s ansteigt. Wie groß ist U_ind?",
        solution: [{ type: "p", text: "U_ind = −N·ΔΦ/Δt = −N·A·ΔB/Δt = −200·50·10⁻⁴·0,5/0,1 = −200·50·10⁻⁴·5 = −5 V. |U_ind| = 5 V." }]
      },
      {
        id: "natwiss-ueb-stromkreis-e4",
        prompt: "Gerader Draht mit I = 10 A. Magnetfeld B bei r = 5 cm?",
        solution: [{ type: "p", text: "B = μ₀I/(2πr) = 4π·10⁻⁷·10/(2π·0,05) = 4·10⁻⁶/0,1 = 4·10⁻⁵ T = 40 μT." }]
      },
      {
        id: "natwiss-ueb-stromkreis-e5",
        prompt: "Schaltkreis: R₁ = 4 Ω und R₂ = 6 Ω in Reihe, U = 20 V. Berechnen Sie I, U₁, U₂ und P₂.",
        solution: [{ type: "p", text: "R_ges = 10 Ω. I = U/R_ges = 20/10 = 2 A. U₁ = I·R₁ = 8 V. U₂ = I·R₂ = 12 V. P₂ = I²·R₂ = 4·6 = 24 W." }]
      }
    ],
    quiz: [
      { id: "natwiss-ueb-stromkreis-q1", question: "Wie lautet das Ohmsche Gesetz für U, I und R?", options: ["U = R/I, mit vertauschtem Zähler und Nenner", "U = I + R, als Summe statt Produkt", "U = I/R, mit vertauschtem Zähler und Nenner", "U = I·R"], correctIndex: 3, explanation: "Das Ohmsche Gesetz U = R·I beschreibt einen linearen Zusammenhang: Bei doppeltem Widerstand fließt bei gleicher Spannung nur der halbe Strom. Eine Addition oder ein vertauschter Bruch würde diese lineare Proportionalität nicht korrekt abbilden." },
      { id: "natwiss-ueb-stromkreis-q2", question: "Was besagt die Knotenregel (1. Kirchhoffsches Gesetz)?", options: ["Die Leistung ergibt sich aus Spannung mal Strom", "Widerstände in Reihenschaltung addieren sich", "Die Summe aller Spannungen im Stromkreis ist null", "Die Summe aller Ströme an einem Knoten ist null"], correctIndex: 3, explanation: "Die Knotenregel folgt aus der Ladungserhaltung: An jedem Knoten muss die Summe aller zu- und abfließenden Ströme ΣI = 0 ergeben, da sich sonst Ladung ansammeln würde. Die Maschenregel betrifft dagegen Spannungen, nicht Ströme an Knoten." },
      { id: "natwiss-ueb-stromkreis-q3", question: "Zwei gleiche Widerstände R₁ = R₂ = R liegen parallel. Wie groß ist R_ges?", options: ["R_ges = R/2", "R_ges = 2R, wie bei Reihenschaltung", "R_ges = R², eine falsche Potenzbildung", "R_ges = R, als bliebe nur ein Widerstand übrig"], correctIndex: 0, explanation: "Bei Parallelschaltung addieren sich die Kehrwerte, 1/R_ges = 1/R + 1/R = 2/R, woraus R_ges = R/2 folgt — der Gesamtwiderstand ist bei gleichen Parallelwiderständen also stets kleiner als jeder Einzelwiderstand." },
      { id: "natwiss-ueb-stromkreis-q4", question: "Wie lautet die Lorentzkraft auf eine bewegte Ladung im Magnetfeld?", options: ["F = μ₀qI/r, eine unpassende Kombination der Größen", "F = qvB, unabhängig vom Winkel", "F = q(v×B)", "F = qE, die Formel für das elektrische Feld"], correctIndex: 2, explanation: "Die Lorentzkraft F = q(v×B) ist ein Kreuzprodukt und steht damit stets senkrecht zu Geschwindigkeit v und Magnetfeld B; ihr Betrag ist F = qvB·sinθ, abhängig vom Winkel θ zwischen v und B. F = qE beschreibt dagegen die Kraft im elektrischen, nicht im magnetischen Feld." },
      { id: "natwiss-ueb-stromkreis-q5", question: "Ein geladenes Teilchen bewegt sich parallel zum Magnetfeld B. Wie groß ist die Lorentzkraft?", options: ["F = mv²/r, die Formel für die Zentripetalkraft", "F = 0", "F = qvB, als wäre der Winkel irrelevant", "F = qB, ohne Berücksichtigung der Geschwindigkeit"], correctIndex: 1, explanation: "Da F = q(v×B) ein Kreuzprodukt ist, verschwindet es, wenn v parallel zu B verläuft (sinθ = 0 bei θ = 0°) — es wirkt in diesem speziellen Fall also gar keine Kraft. Nur bei einer Geschwindigkeitskomponente senkrecht zu B entsteht überhaupt eine Lorentzkraft." },
      { id: "natwiss-ueb-stromkreis-q6", question: "Was ist die Einheit der magnetischen Flussdichte B?", options: ["Tesla (T), äquivalent zu kg/(A·s²)", "Wb/m, eine unvollständige Einheitenkombination", "V·m, die falsche Kombination von Volt und Länge", "A/m, die Einheit der magnetischen Feldstärke H"], correctIndex: 0, explanation: "Die magnetische Flussdichte wird in Tesla gemessen, mit der Basiseinheiten-Darstellung 1 T = 1 Vs/m² = 1 kg/(A·s²). A/m ist dagegen die Einheit der magnetischen Feldstärke H, einer verwandten, aber anderen Größe." },
      { id: "natwiss-ueb-stromkreis-q7", question: "Was beschreibt das Faradaysche Induktionsgesetz?", options: ["Ein zeitlich veränderlicher Magnetfluss induziert eine Spannung", "Das Magnetfeld um einen geraden stromdurchflossenen Leiter", "Die Lorentzkraft auf eine bewegte Ladung", "Das Fließen von Strom durch einen ohmschen Widerstand"], correctIndex: 0, explanation: "Nach U_ind = −N·dΦ/dt induziert ein zeitlich veränderlicher magnetischer Fluss Φ = B·A eine Spannung in einer Leiterschleife — die Grundlage jedes Generators und Transformators. Magnetfeld um einen Leiter, Lorentzkraft und ohmscher Stromfluss werden dagegen von anderen Gesetzen beschrieben." },
      { id: "natwiss-ueb-stromkreis-q8", question: "Welche Richtung hat das Magnetfeld eines geraden Leiters (Strom nach oben)?", options: ["Senkrecht nach oben, parallel zum Stromfluss", "Parallel zum Leiter selbst verlaufend", "Radial strahlenförmig vom Leiter weg", "Konzentrische Kreise um den Leiter (Rechte-Hand-Regel)"], correctIndex: 3, explanation: "Nach der Rechte-Hand-Regel zeigen die gebogenen Finger die Richtung des B-Felds an, wenn der Daumen in Stromrichtung zeigt — das Feld bildet konzentrische Kreise um den Leiter, weder parallel noch radial noch in Stromrichtung selbst." },
      { id: "natwiss-ueb-stromkreis-q9", question: "Was besagt die Lenzsche Regel?", options: ["Induktion tritt ausschließlich im Vakuum auf", "Die induzierte Spannung ist stets positiv", "Der Induktionsstrom wirkt seiner Ursache entgegen", "Der Induktionsstrom verstärkt seine eigene Ursache"], correctIndex: 2, explanation: "Die Lenzsche Regel folgt aus dem Minuszeichen in U = −dΦ/dt: Der induzierte Strom erzeugt stets ein Magnetfeld, das der ihn verursachenden Flussänderung entgegenwirkt — eine direkte Konsequenz der Energieerhaltung. Ein verstärkender Induktionsstrom wäre damit unvereinbar." },
      { id: "natwiss-ueb-stromkreis-q10", question: "Wie lautet die elektrische Leistung P in einem Widerstand R bei Strom I?", options: ["P = U/I, mit vertauschtem Zähler und Nenner", "P = I²R", "P = IR², mit falscher Quadrierung", "P = U·R, ohne Bezug zum Strom"], correctIndex: 1, explanation: "Aus P = U·I und dem Ohmschen Gesetz U = IR folgt äquivalent P = I²R = U²/R — die drei Formen sind ineinander umrechenbar, je nachdem, welche Größen bekannt sind. Entscheidend ist, dass der Strom quadratisch eingeht, nicht der Widerstand." }
    ]
  }
];
