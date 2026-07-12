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
      { id: "natwiss-ueb-elektrostatik-q1", question: "Wie skaliert die Coulombkraft mit dem Abstand r?", options: ["F ∝ r", "F ∝ 1/r³", "F ∝ 1/r", "F ∝ 1/r²"], correctIndex: 3, explanation: "Coulombgesetz: F = kQ₁Q₂/r². Quadratisches Abstandsgesetz, wie die Gravitation." },
      { id: "natwiss-ueb-elektrostatik-q2", question: "Was ist die Coulombkonstante k (in SI-Einheiten)?", options: ["k = 9·10⁹ Vm/As", "k = 1,6·10⁻¹⁹ C", "k = 6,67·10⁻¹¹ Nm²/kg²", "k = 8,85·10⁻¹² As/(Vm)"], correctIndex: 0, explanation: "k = 1/(4πε₀) = 8,99·10⁹ N·m²/C² ≈ 9·10⁹ Vm/As." },
      { id: "natwiss-ueb-elektrostatik-q3", question: "Wie hängt das elektrische Potenzial einer Punktladung von r ab?", options: ["φ = const.", "φ ∝ 1/r", "φ ∝ r", "φ ∝ 1/r²"], correctIndex: 1, explanation: "φ = kQ/r. Das Potenzial fällt mit 1/r ab, die Kraft mit 1/r²." },
      { id: "natwiss-ueb-elektrostatik-q4", question: "Was ist der Unterschied zwischen Feldstärke E und Potenzial φ?", options: ["E und φ sind identisch", "φ = E²/r", "E = φ/r", "E = −dφ/dr (Gradient des Potenzials)"], correctIndex: 3, explanation: "E = −∇φ. Die Feldstärke ist der (negative) Gradient des elektrischen Potenzials." },
      { id: "natwiss-ueb-elektrostatik-q5", question: "Zwei entgegengesetzt geladene Ladungen: +Q und −Q. Wo ist das Potenzial auf der Verbindungsachse außerhalb der Ladungen null?", options: ["Nur zwischen den Ladungen", "Im Unendlichen", "Nirgendwo außerhalb", "Im Mittelpunkt zwischen den Ladungen"], correctIndex: 2, explanation: "Für +Q und −Q: φ = k(Q/r₁ − Q/r₂). Außerhalb ist r₁ ≠ r₂ immer, und die Vorzeichen führen zu keiner Auslöschung auf der Außenseite (anders als bei gleichen Ladungen)." },
      { id: "natwiss-ueb-elektrostatik-q6", question: "Was bedeutet eine Äquipotenzialfläche?", options: ["Fläche wo E = 0", "Fläche gleichen Potenzials (keine Arbeit beim Verschieben auf ihr)", "Fläche gleicher Feldstärke", "Fläche maximaler Kraft"], correctIndex: 1, explanation: "Auf Äquipotenzialflächen ist φ = const. Bewegung auf ihr erfordert keine Arbeit (W = qΔφ = 0)." },
      { id: "natwiss-ueb-elektrostatik-q7", question: "Welche Arbeit verrichtet das Feld beim Verschieben einer Ladung q entlang einer Äquipotenzialfläche?", options: ["W = qΔφ", "W = qE·r", "W = 0", "W = qφ"], correctIndex: 2, explanation: "Auf Äquipotenzialflächen: Δφ = 0 → W = qΔφ = 0." },
      { id: "natwiss-ueb-elektrostatik-q8", question: "Was ist das Superpositionsprinzip für elektrische Felder?", options: ["Das Gesamtfeld ist die vektorielle Summe der Einzelfelder", "Felder addieren sich nur skalar", "Felder können sich auslöschen", "Gilt nur für gleiche Ladungen"], correctIndex: 0, explanation: "Superposition: E_ges = ΣE_i (vektorielle Summe). Gleiches gilt für Potenziale: φ_ges = Σφ_i (skalare Summe)." },
      { id: "natwiss-ueb-elektrostatik-q9", question: "Ein Proton und ein Elektron haben gleich große, entgegengesetzte Ladungen. Welche Kraft wirkt zwischen ihnen bei r = 10⁻¹⁰ m?", options: ["F ≈ 2,3·10⁻⁸ N", "F ≈ 8,2 N", "F ≈ 2,3·10⁻⁸ N", "F ≈ 1,4·10⁻³ N"], correctIndex: 2, explanation: "F = k·e²/r² = 9·10⁹·(1,6·10⁻¹⁹)²/(10⁻¹⁰)² = 9·10⁹·2,56·10⁻³⁸/10⁻²⁰ = 2,3·10⁻⁸ N." },
      { id: "natwiss-ueb-elektrostatik-q10", question: "Wie verhält sich die Elementarladung e (Betrag)?", options: ["e = 1,6·10⁻¹⁹ C", "e = 6,67·10⁻¹¹ C", "e = 9,11·10⁻³¹ C", "e = 1,38·10⁻²³ C"], correctIndex: 0, explanation: "Elementarladung: e = 1,602·10⁻¹⁹ C. Dies ist die kleinste freie elektrische Ladung." }
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
      { id: "natwiss-ueb-kondensatoren-q1", question: "Was ist die Kapazität eines Plattenkondensators?", options: ["C = ε₀·d/A", "C = U/Q", "C = Q·U", "C = ε_r·ε₀·A/d"], correctIndex: 3, explanation: "C = ε_r·ε₀·A/d. Größere Fläche und kleiner Abstand → größere Kapazität." },
      { id: "natwiss-ueb-kondensatoren-q2", question: "Wie ändert sich C bei Einführung eines Dielektrikums (ε_r > 1)?", options: ["C bleibt gleich", "C steigt um Faktor ε_r", "C sinkt um Faktor ε_r", "C wird null"], correctIndex: 1, explanation: "C = ε_r·C₀. Das Dielektrikum erhöht die Kapazität durch Ausrichtung der Dipole." },
      { id: "natwiss-ueb-kondensatoren-q3", question: "Kondensatoren in Reihe: C₁ = 2 μF, C₂ = 4 μF. Was ist C_ges?", options: ["2 μF", "6 μF", "4/3 μF", "1,33 μF"], correctIndex: 3, explanation: "1/C_ges = 1/2 + 1/4 = 3/4 → C_ges = 4/3 ≈ 1,33 μF." },
      { id: "natwiss-ueb-kondensatoren-q4", question: "Was ist die gespeicherte Energie in einem Kondensator (C = 10 μF, U = 100 V)?", options: ["W = 0,5 J", "W = 0,05 J", "W = 50 J", "W = 5 J"], correctIndex: 1, explanation: "W = ½CU² = ½·10·10⁻⁶·10000 = 0,05 J." },
      { id: "natwiss-ueb-kondensatoren-q5", question: "Was begrenzt die maximale Spannung an einem Kondensator?", options: ["Die Plattendicke", "Der Widerstand", "Die Durchschlagfeldstärke E_max des Dielektrikums", "Die Kapazität"], correctIndex: 2, explanation: "Überschreitet E = U/d die Durchschlagfestigkeit E_max, bricht die Isolation durch → Kurzschluss." },
      { id: "natwiss-ueb-kondensatoren-q6", question: "An zwei parallel geschalteten Kondensatoren (C₁ = 3 μF, C₂ = 6 μF) liegt U = 10 V. Wie groß ist die Gesamtladung?", options: ["20 μC", "90 nC", "90 μC", "30 μC"], correctIndex: 2, explanation: "C_ges = C₁ + C₂ = 9 μF. Q = C_ges·U = 9·10 = 90 μC." },
      { id: "natwiss-ueb-kondensatoren-q7", question: "Kondensatoren in Reihe: Welche Eigenschaft ist für alle gleich?", options: ["Ladung Q", "Energie", "Kapazität", "Spannung"], correctIndex: 0, explanation: "In Reihenschaltung fließt dieselbe Ladung Q auf jeden Kondensator (keine Verzweigung des Stroms)." },
      { id: "natwiss-ueb-kondensatoren-q8", question: "Kondensatoren parallel: Welche Eigenschaft ist für alle gleich?", options: ["Spannung", "Ladung", "Energie", "Kapazität"], correctIndex: 0, explanation: "Parallel: alle Kondensatoren haben dieselbe Spannung U (direkt an denselben Knoten)." },
      { id: "natwiss-ueb-kondensatoren-q9", question: "Das elektrische Feld im Plattenkondensator (Abstand d, Spannung U) ist:", options: ["E = ε₀U/d", "E = d/U", "E = U/d", "E = U·d"], correctIndex: 2, explanation: "Homogenes Feld: E = U/d (Spannung pro Länge)." },
      { id: "natwiss-ueb-kondensatoren-q10", question: "Warum ist die Ladungstiefe bei Kondensatoraufladung nur ~1 pm (Aufgabe 42.1)?", options: ["Kupfer leitet schlecht", "Die benötigte Ladung Q = CU ist sehr klein im Vergleich zur freien Elektronendichte", "Elektronen bewegen sich nicht", "Die Spannung ist zu gering"], correctIndex: 1, explanation: "Q = 3 μC, aber die Elektronendichte n = 8,49·10²⁸/m³ ist riesig. Nur eine atomdünne Schicht muss umverteilt werden." }
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
      { id: "natwiss-ueb-stromkreis-q1", question: "Ohmsches Gesetz: Was gilt für U, I, R?", options: ["U = R/I", "U = I + R", "U = I/R", "U = I·R"], correctIndex: 3, explanation: "U = R·I. Spannung = Widerstand × Strom." },
      { id: "natwiss-ueb-stromkreis-q2", question: "Knotenregel (1. Kirchhoffsches Gesetz) besagt:", options: ["Leistung = Spannung × Strom", "Widerstände in Reihe addieren sich", "Summe aller Spannungen im Kreis = 0", "Summe aller Ströme am Knoten = 0"], correctIndex: 3, explanation: "Knotenregel: ΣI = 0 an jedem Knoten (Ladungserhaltung)." },
      { id: "natwiss-ueb-stromkreis-q3", question: "Zwei Widerstände R₁ = R₂ = R in Parallel. Was ist R_ges?", options: ["R_ges = R/2", "R_ges = 2R", "R_ges = R²", "R_ges = R"], correctIndex: 0, explanation: "1/R_ges = 1/R + 1/R = 2/R → R_ges = R/2." },
      { id: "natwiss-ueb-stromkreis-q4", question: "Die Lorentzkraft auf eine bewegte Ladung im Magnetfeld ist:", options: ["F = μ₀qI/r", "F = qvB (immer)", "F = q(v×B)", "F = qE"], correctIndex: 2, explanation: "F = q(v × B). Betrag: F = qvB·sinθ. Steht immer senkrecht auf v und B." },
      { id: "natwiss-ueb-stromkreis-q5", question: "Ein geladenes Teilchen bewegt sich parallel zu B. Was ist die Lorentzkraft?", options: ["F = mv²/r", "F = 0 (v parallel B → Kreuzprodukt null)", "F = qvB", "F = qB"], correctIndex: 1, explanation: "F = q(v × B). Bei v ∥ B ist v × B = 0 → F = 0. Keine Kraft." },
      { id: "natwiss-ueb-stromkreis-q6", question: "Was ist die Einheit der magnetischen Flussdichte B?", options: ["T (Tesla) = kg/(A·s²)", "Wb/m", "V·m", "A/m"], correctIndex: 0, explanation: "B in Tesla [T] = Vs/m² = kg/(A·s²)." },
      { id: "natwiss-ueb-stromkreis-q7", question: "Was beschreibt das Faradaysche Induktionsgesetz?", options: ["Zeitlich veränderlicher Magnetfluss induziert eine Spannung", "Magnetfeld eines geraden Leiters", "Lorentzkraft auf Ladung", "Strom fließt durch Widerstand"], correctIndex: 0, explanation: "U_ind = −N·dΦ/dt. Zeitlich veränderlicher Fluss Φ = B·A induziert eine EMK." },
      { id: "natwiss-ueb-stromkreis-q8", question: "Welche Richtung hat das Magnetfeld eines geraden Leiters (Strom nach oben)?", options: ["Senkrecht nach oben", "Parallel zum Leiter", "Radial vom Leiter weg", "Konzentrische Kreise um den Leiter (Rechte-Hand-Regel)"], correctIndex: 3, explanation: "Rechte-Hand-Regel: Daumen in Stromrichtung, gebogene Finger zeigen B-Feld in konzentrischen Kreisen." },
      { id: "natwiss-ueb-stromkreis-q9", question: "Eine Lenzsche Regel besagt:", options: ["Induktion tritt nur im Vakuum auf", "Induzierte Spannung ist immer positiv", "Der Induktionsstrom wirkt seiner Ursache entgegen", "Der Induktionsstrom verstärkt die Ursache"], correctIndex: 2, explanation: "Lenzsche Regel (aus dem Minuszeichen in U = −dΦ/dt): Der Induktionsstrom erzeugt ein Feld, das der Flussänderung entgegenwirkt (Energieerhaltung)." },
      { id: "natwiss-ueb-stromkreis-q10", question: "Die elektrische Leistung P in einem Widerstand R bei Strom I ist:", options: ["P = U/I", "P = I²R", "P = IR²", "P = U·R"], correctIndex: 1, explanation: "P = U·I = I²R = U²/R. Joulesche Wärme wird im Widerstand dissipiert." }
    ]
  }
];
