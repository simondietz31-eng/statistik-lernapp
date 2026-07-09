const NATWISS_CHAPTER14_TOPICS = [
  {
    id: "natwiss-ueb-kinematik",
    chapter: 14,
    order: 1,
    title: "Übungsaufgaben: Kinematik",
    icon: "🏎️",
    summary: "Übungsaufgaben zu Bewegungsgleichungen, relativem Überholen, schiefer Wurf und Kreisbewegung.",
    explanation: [
      { type: "p", text: "Dieser Abschnitt enthält typische Klausuraufgaben zur Kinematik. Grundlage sind die Bewegungsgleichungen bei konstanter Beschleunigung:" },
      { type: "formula", tex: "x(t) = x_0 + v_0 t + \\tfrac{1}{2}a t^2, \\quad v(t) = v_0 + at" },
      { type: "p", text: "Beim schiefen Wurf wird die Bewegung in horizontale (keine Beschleunigung) und vertikale (a = −g) Komponenten zerlegt. Die Gesamtgeschwindigkeit ergibt sich aus dem Betrag des Geschwindigkeitsvektors." },
      { type: "p", text: "Musterlösung Aufgabe 11.1 (Überholvorgang):" },
      { type: "list", items: [
        "Auto A: x_A(t) = 80 km/h · t + 45 km",
        "Auto B: x_B(t) = 110 km/h · t",
        "Treffzeit: t_T = 45 km / (110−80) km/h = 7,5 h",
        "Weg von A: x_A = 80 · 7,5 = 720 km"
      ]},
      { type: "p", text: "Musterlösung Aufgabe 11.3 (Stein am Kran):" },
      { type: "list", items: [
        "Ablösung bei y₀ = 6 m mit v₀ = 5 m/s (nach oben)",
        "Max. Höhe: Δy = v₀²/(2g) = 1,27 m → h_max = 7,27 m",
        "Auftreffgeschwindigkeit: v = √(2g·h_max) = 12 m/s",
        "Auftreffzeit: t ≈ 1,7 s (bis zum Scheitelpunkt) + Fallzeit"
      ]},
      { type: "p", text: "Zentripetalbeschleunigung (Aufg. 11.5): Bei 15000 U/min und r = 15 cm gilt a_zp = ω²r = 3,7·10⁵ m/s² ≈ 37 700 g. Extreme Belastung!" }
    ],
    exercises: [
      {
        id: "natwiss-ueb-kinematik-e1",
        prompt: "Auto A fährt mit 80 km/h, Auto B mit 110 km/h. Auto B startet 45 km hinter A. Wie weit ist A gefahren, wenn B ihn einholt?",
        solution: "Treffzeit: t_T = 45 km / (110−80) km/h = 1,5 h. Weg von A: x_A = 80 km/h · 1,5 h = 120 km. (Alternative Lösung mit Absolutkoordinaten: t_T = 7,5 h wenn B nicht von 0 startet; x_A = 720 km. Hier: B startet 45 km hinter dem Bezugspunkt, wo A bei t=0 ist → x_A = v_A · t_T = 120 km, x_B = v_B · t_T = 165 km ✓)"
      },
      {
        id: "natwiss-ueb-kinematik-e2",
        prompt: "Ein Stein löst sich bei h₀ = 6 m Höhe mit v₀ = 5 m/s (nach oben) von einem Kran. Welche Maximalöhe erreicht er?",
        solution: "Δh = v₀²/(2g) = 25/(2·9,81) = 1,27 m. h_max = 6 + 1,27 = 7,27 m."
      },
      {
        id: "natwiss-ueb-kinematik-e3",
        prompt: "Mit welcher Geschwindigkeit trifft der Stein aus Aufgabe 2 auf den Boden? (h_max = 7,27 m)",
        solution: "v = √(2·g·h_max) = √(2·9,81·7,27) ≈ 12 m/s. (Energieerhaltung: ges. potenzielle Energie wird in kinetische umgewandelt)"
      },
      {
        id: "natwiss-ueb-kinematik-e4",
        prompt: "Eine Zentrifuge dreht mit 15 000 U/min. Berechnen Sie die Zentripetalbeschleunigung bei r = 15 cm.",
        solution: "ω = 2π·(15000/60) = 1571 rad/s. a_zp = ω²·r = 1571²·0,15 ≈ 3,7·10⁵ m/s² ≈ 37 700 g."
      },
      {
        id: "natwiss-ueb-kinematik-e5",
        prompt: "Die Zentrifuge (15 000 U/min) erreicht ihre Drehzahl in 1 min 15 s. Berechnen Sie die Tangentialbeschleunigung bei r = 15 cm.",
        solution: "v_end = ω·r = 1571·0,15 = 235,6 m/s. Δt = 75 s. a_t = v_end/Δt = 235,6/75 ≈ 3,1 m/s². (Oder a_t = r·α = 0,15·20,9 ≈ 3,1 m/s²)"
      }
    ],
    quiz: [
      {
        id: "natwiss-ueb-kinematik-q1",
        question: "Auto A (80 km/h) hat 45 km Vorsprung. Auto B (110 km/h) holt auf. Nach welcher Zeit holt B A ein?",
        options: ["1,5 h", "7,5 h", "4,5 h", "3,0 h"],
        correctIndex: 0,
        explanation: "Relative Geschwindigkeit: Δv = 30 km/h. Zeit: t = 45 km / 30 km/h = 1,5 h."
      },
      {
        id: "natwiss-ueb-kinematik-q2",
        question: "Ein Körper wird von h₀ = 6 m Höhe mit v₀ = 5 m/s nach oben geworfen. Wie hoch ist die Maximalöhe über dem Boden?",
        options: ["7,27 m", "6,00 m", "5,00 m", "8,50 m"],
        correctIndex: 0,
        explanation: "Δh = v₀²/(2g) = 25/19,62 = 1,27 m. h_max = 6 + 1,27 = 7,27 m."
      },
      {
        id: "natwiss-ueb-kinematik-q3",
        question: "Welche Komponente des schiefen Wurfs ist beschleunigt?",
        options: ["Die horizontale (a = g)", "Die vertikale (a = −g)", "Beide gleich", "Keine"],
        correctIndex: 1,
        explanation: "Beim schiefen Wurf ist nur die vertikale Komponente durch Gravitationsbeschleunigung g beschleunigt. Horizontal: konstante Geschwindigkeit."
      },
      {
        id: "natwiss-ueb-kinematik-q4",
        question: "Wie ändert sich die Zentripetalbeschleunigung a_zp, wenn man die Winkelgeschwindigkeit ω verdoppelt?",
        options: ["Verdoppelt sich", "Vervierfacht sich", "Bleibt gleich", "Halbiert sich"],
        correctIndex: 1,
        explanation: "a_zp = ω²r. Bei ω → 2ω: a_zp → (2ω)²r = 4ω²r = 4·a_zp."
      },
      {
        id: "natwiss-ueb-kinematik-q5",
        question: "Was ist die Fluchtgeschwindigkeit von der Erde (näherungsweise)?",
        options: ["7,9 km/s (erste kosmische)", "11,2 km/s", "3,0 km/s", "30 km/s"],
        correctIndex: 1,
        explanation: "v₀ = √(2GM_E/r_E) ≈ 11,2 km/s. Das ist die zweite kosmische Geschwindigkeit."
      },
      {
        id: "natwiss-ueb-kinematik-q6",
        question: "Ein Körper fällt aus der Ruhe. Nach t = 3 s, wie weit ist er gefallen (g = 10 m/s²)?",
        options: ["15 m", "30 m", "45 m", "90 m"],
        correctIndex: 2,
        explanation: "s = ½·g·t² = ½·10·9 = 45 m."
      },
      {
        id: "natwiss-ueb-kinematik-q7",
        question: "Bei einem Überholvorgang ist die Relativgeschwindigkeit 30 km/h. Wie lange dauert es, einen Vorsprung von 60 km aufzuholen?",
        options: ["1 h", "2 h", "0,5 h", "3 h"],
        correctIndex: 1,
        explanation: "t = Δx/Δv = 60 km / 30 km/h = 2 h."
      },
      {
        id: "natwiss-ueb-kinematik-q8",
        question: "Was ist die Kreisfrequenz ω bei 15000 U/min?",
        options: ["250 rad/s", "1571 rad/s", "15000 rad/s", "78,5 rad/s"],
        correctIndex: 1,
        explanation: "ω = 2π·n = 2π·(15000/60) = 2π·250 ≈ 1571 rad/s."
      },
      {
        id: "natwiss-ueb-kinematik-q9",
        question: "Aus der Ruhe beschleunigt: v₀ = 0, a = 5 m/s². Welche Geschwindigkeit nach t = 4 s?",
        options: ["10 m/s", "20 m/s", "40 m/s", "5 m/s"],
        correctIndex: 1,
        explanation: "v = v₀ + at = 0 + 5·4 = 20 m/s."
      },
      {
        id: "natwiss-ueb-kinematik-q10",
        question: "Welche kinematische Gleichung gilt für den zurückgelegten Weg bei gleichmäßig beschleunigter Bewegung aus der Ruhe?",
        options: ["s = v·t", "s = ½·a·t²", "s = a·t", "s = v²/a"],
        correctIndex: 1,
        explanation: "Mit v₀ = 0 gilt s = ½·a·t². Allgemein: s = v₀·t + ½·a·t²."
      }
    ]
  },
  {
    id: "natwiss-ueb-dynamik",
    chapter: 14,
    order: 2,
    title: "Übungsaufgaben: Dynamik und Kräfte",
    icon: "⚙️",
    summary: "Übungsaufgaben zu Newtonschen Gesetzen, Reibung, geneigter Ebene und Kreisbewegung.",
    explanation: [
      { type: "p", text: "Die Newtonschen Gesetze bilden die Grundlage der Dynamik. Das 2. Newtonsche Gesetz lautet:" },
      { type: "formula", tex: "\\vec{F}_{\\rm res} = m \\cdot \\vec{a}" },
      { type: "p", text: "Musterlösung Aufg. 12.1 (Kugel im Baumstumpf): Bremsverzögerung a = −v₀²/(2s). Kraft F = m·|a| = m·v₀²/(2s) = 1,8·10⁻³·500²/0,12 = 3750 N ≈ 3,8·10³ N (entgegen Fahrtrichtung)." },
      { type: "p", text: "Musterlösung Aufg. 12.3 (Aufzug): Die Schnur reißt bei F = 150 N. Mit F = m·(g+a) gilt a = F/m − g = 15 − 9,81 = 5,19 m/s²." },
      { type: "p", text: "Musterlösung Aufg. 12.5 (geneigte Ebene): Für Block 1 und 2 auf Neigung θ = 10°, Reibungskoeffizienten μ₁=0,3, μ₂=0,2:" },
      { type: "formula", tex: "a = g\\left[\\sin\\theta - \\frac{\\mu_1 m_1 + \\mu_2 m_2}{m_1+m_2}\\cos\\theta\\right] \\approx 0{,}96 \\; {\\rm m/s^2}" }
    ],
    exercises: [
      {
        id: "natwiss-ueb-dynamik-e1",
        prompt: "Eine Kugel (m = 1,8·10⁻³ kg, v₀ = 500 m/s) bohrt sich 6 cm in Holz. Berechnen Sie die Bremskraft.",
        solution: "a = −v₀²/(2s) = −500²/0,12 = −2,08·10⁶ m/s². F = m·|a| = 1,8·10⁻³·2,08·10⁶ ≈ 3750 N ≈ 3,8·10³ N."
      },
      {
        id: "natwiss-ueb-dynamik-e2",
        prompt: "Eine Schnur hält max. 150 N. Ein 10-kg-Block hängt daran in einem aufwärtsfahrenden Aufzug. Bei welcher Mindestbeschleunigung reißt sie?",
        solution: "F = m·(g+a) → a = F/m − g = 150/10 − 9,81 = 15 − 9,81 = 5,19 m/s²."
      },
      {
        id: "natwiss-ueb-dynamik-e3",
        prompt: "Zwei Blöcke (m₁=0,8 kg, m₂=0,25 kg, μ₁=0,3, μ₂=0,2) gleiten eine 10°-Ebene herab. Berechnen Sie die Beschleunigung.",
        solution: "a = g·[sin10° − (0,3·0,8 + 0,2·0,25)/(0,8+0,25)·cos10°] = 9,81·[0,1736 − (0,29/1,05)·0,9848] = 9,81·[0,1736 − 0,272] ≈ 0,96 m/s²."
      },
      {
        id: "natwiss-ueb-dynamik-e4",
        prompt: "Wie ändert sich die Eindringtiefe der Kugel aus Aufg. 1, wenn ihre Masse halbiert wird (gleiche Kraft, gleiche Anfangsgeschwindigkeit)?",
        solution: "s = m·v₀²/(2F). Bei m' = m/2: s' = m'·v₀²/(2F) = s/2 = 3 cm. Die Eindringtiefe halbiert sich."
      },
      {
        id: "natwiss-ueb-dynamik-e5",
        prompt: "Welcher Überhöhungswinkel θ ist für Kurvenfahrt bei v = 90 km/h, r = 160 m notwendig (keine Seitenreibung)?",
        solution: "v = 90/3,6 = 25 m/s. tan θ = v²/(r·g) = 625/(160·9,81) = 0,398. θ = arctan(0,398) ≈ 21,7°."
      }
    ],
    quiz: [
      {
        id: "natwiss-ueb-dynamik-q1",
        question: "Eine Kraft F wirkt auf eine Masse m. Was ist die Beschleunigung?",
        options: ["a = m/F", "a = F·m", "a = F/m", "a = F+m"],
        correctIndex: 2,
        explanation: "2. Newtonsches Gesetz: F = m·a → a = F/m."
      },
      {
        id: "natwiss-ueb-dynamik-q2",
        question: "Ein Aufzug beschleunigt aufwärts. Was ist die scheinbare Gewichtskraft (Normalkraft) des Passagiers?",
        options: ["F_N = mg", "F_N = m(g−a)", "F_N = m(g+a)", "F_N = ma"],
        correctIndex: 2,
        explanation: "Im aufwärts beschleunigenden Aufzug: F_N − mg = ma → F_N = m(g+a). Der Passagier fühlt sich schwerer."
      },
      {
        id: "natwiss-ueb-dynamik-q3",
        question: "Welche Kraft ist nötig, um einen Körper der Masse m gleichförmig auf einer Kreisbahn mit Radius r und Geschwindigkeit v zu halten?",
        options: ["F = mv/r", "F = mv²/r", "F = m²v/r", "F = mgr/v"],
        correctIndex: 1,
        explanation: "Zentripetalkraft: F_zp = mv²/r = mω²r."
      },
      {
        id: "natwiss-ueb-dynamik-q4",
        question: "Auf einer geneigten Ebene (θ) zieht die Hangabtriebskraft einen Körper bergab. Wie lautet sie?",
        options: ["F = mg·cos θ", "F = mg·tan θ", "F = mg·sin θ", "F = mg/sin θ"],
        correctIndex: 2,
        explanation: "Die Komponente der Schwerkraft parallel zur Ebene: F_H = mg·sin θ."
      },
      {
        id: "natwiss-ueb-dynamik-q5",
        question: "Ein Block rutscht auf einer horizontalen Fläche (μ = 0,3). Wie groß ist die Reibungskraft bei m = 5 kg?",
        options: ["1,5 N", "14,7 N", "50 N", "3 N"],
        correctIndex: 1,
        explanation: "F_R = μ·F_N = μ·mg = 0,3·5·9,81 = 14,7 N."
      },
      {
        id: "natwiss-ueb-dynamik-q6",
        question: "Das 3. Newtonsche Gesetz (actio = reactio) besagt:",
        options: ["Kräfte wirken immer in Richtung der Beschleunigung", "Zu jeder Kraft gibt es eine gleich große, entgegengesetzt gerichtete Gegenkraft auf den anderen Körper", "Ein Körper bleibt in Ruhe, wenn keine Kraft wirkt", "Kraft ist gleich Masse mal Beschleunigung"],
        correctIndex: 1,
        explanation: "Actio und Reactio sind gleich groß, entgegengesetzt und wirken auf verschiedene Körper."
      },
      {
        id: "natwiss-ueb-dynamik-q7",
        question: "Welche Bedingung gilt für einen Körper im Kräftegleichgewicht?",
        options: ["ΣF ≠ 0", "ΣF = 0", "ΣF = m", "a ≠ 0"],
        correctIndex: 1,
        explanation: "Kräftegleichgewicht: ΣF = 0 → a = 0 (Körper ist in Ruhe oder gleichförmiger Bewegung)."
      },
      {
        id: "natwiss-ueb-dynamik-q8",
        question: "Für eine Kurvenüberhöhung gilt tan θ = v²/(rg). Was passiert, wenn die Kurve für diese Geschwindigkeit ausgelegt ist?",
        options: ["Es tritt Seitenreibung auf", "Die Normalkraft ist null", "Keine Seitenreibungskraft nötig", "Der Wagen hebt ab"],
        correctIndex: 2,
        explanation: "Bei genau der Auslegungsgeschwindigkeit liefert die Normalkraft exakt die nötige Zentripetalkraft — kein Seitenanteil der Reibung benötigt."
      },
      {
        id: "natwiss-ueb-dynamik-q9",
        question: "Eine Kugel dringt mit a = 2·10⁶ m/s² in ein Medium ein. Wie viel g-Beschleunigung ist das (g ≈ 10 m/s²)?",
        options: ["2000 g", "200 000 g", "20 000 g", "200 g"],
        correctIndex: 1,
        explanation: "a/g = 2·10⁶/10 = 2·10⁵ = 200 000 g."
      },
      {
        id: "natwiss-ueb-dynamik-q10",
        question: "Hängt ein Block über eine masselose Rolle (Atwood-Maschine), was gilt für die Seilzugkraft?",
        options: ["F_S = (m₁−m₂)·g", "F_S liegt zwischen m₁g und m₂g", "F_S = (m₁+m₂)·g/2", "F_S = m₁·g immer"],
        correctIndex: 1,
        explanation: "Bei der Atwood-Maschine ist die Seilzugkraft F_S = 2m₁m₂g/(m₁+m₂), was zwischen den Gewichtskräften der beiden Massen liegt."
      }
    ]
  },
  {
    id: "natwiss-ueb-energie-rotation",
    chapter: 14,
    order: 3,
    title: "Übungsaufgaben: Energie, Impuls und Rotation",
    icon: "🌀",
    summary: "Übungsaufgaben zu Energieerhaltung, Impulserhaltung, Stoßprozessen und Rotationsdynamik.",
    explanation: [
      { type: "p", text: "Energieerhaltung: Im konservativen System bleibt E_kin + E_pot = const." },
      { type: "formula", tex: "\\tfrac{1}{2}mv_1^2 + mgh_1 = \\tfrac{1}{2}mv_2^2 + mgh_2" },
      { type: "p", text: "Musterlösung Aufg. 13.1 (ortsabhängige Kraft):" },
      { type: "formula", tex: "W = -\\int_{3{,}0}^{1{,}5} C x^3 \\, dx = -\\frac{C}{4}[x^4]_{3}^{1{,}5} = 9{,}5 \\; {\\rm J}" },
      { type: "p", text: "Musterlösung Aufg. 14.1 (Rad, α = 2,6 rad/s²):" },
      { type: "list", items: [
        "ω(t) = α·t = 2,6·6 = 15,6 rad/s (oder je nach Aufgabenversion 75,6 rad/s)",
        "θ = ½·α·t² = ½·2,6·36 = 47 rad = 7,4 Umdrehungen",
        "v = r·ω = 0,30·15,6 = 4,68 m/s (Tangentialgeschwindigkeit)"
      ]},
      { type: "p", text: "Keppler-Gesetze (Aufg. 14.5): Drehimpulserhaltung → m·r₁·v₁ = m·r₂·v₂ → v₁/v₂ = r₂/r₁." }
    ],
    exercises: [
      {
        id: "natwiss-ueb-energie-e1",
        prompt: "Eine Kraft F = C·x³ mit C = 0,5 N/m³ wirkt auf ein Teilchen. Berechnen Sie die Arbeit beim Weg von x = 3,0 m nach x = 1,5 m.",
        solution: "W = −∫_{3,0}^{1,5} C·x³ dx = −(C/4)·[x⁴]_{3}^{1,5} = −(0,5/4)·[(1,5)⁴ − (3,0)⁴] = −0,125·[5,0625 − 81] = 9,49 J."
      },
      {
        id: "natwiss-ueb-energie-e2",
        prompt: "Ein Rad dreht sich mit α = 2,6 rad/s². Welche Winkelgeschwindigkeit und welchen Drehwinkel hat es nach t = 6 s?",
        solution: "ω = α·t = 2,6·6 = 15,6 rad/s. θ = ½·α·t² = ½·2,6·36 = 46,8 rad ≈ 47 rad = 7,4 Umdrehungen."
      },
      {
        id: "natwiss-ueb-energie-e3",
        prompt: "Ein Planet hat im Perihel r₁ = 1 AE und v₁ = 30 km/s. Im Aphel r₂ = 1,5 AE. Wie groß ist v₂?",
        solution: "Drehimpulserhaltung: m·r₁·v₁ = m·r₂·v₂. v₂ = v₁·(r₁/r₂) = 30·(1/1,5) = 20 km/s."
      },
      {
        id: "natwiss-ueb-energie-e4",
        prompt: "Ein Achterbahnwagen (m = 1500 kg) startet aus 23 m Höhe aus der Ruhe. Im Looping-Scheitelpunkt (Durchmesser 15 m, also h = 15 m). Welche Normalkraft wirken die Schienen auf den Wagen?",
        solution: "v² = 2g(h_start − h_top) = 2·9,81·(23−15) = 156,96 m²/s². Zentripetalkraft + Gewicht: F_N + mg = mv²/r = 1500·156,96/7,5 = 31 392 N. F_N = 31 392 − 1500·9,81 = 31 392 − 14 715 = 16 677 N ≈ 16,7 kN."
      },
      {
        id: "natwiss-ueb-energie-e5",
        prompt: "⁸Be (ruhend) zerfällt in 2 α-Teilchen (m = 6,64·10⁻²⁷ kg). Freigesetzte Energie: 1,5·10⁻¹⁴ J. Wie schnell sind die α-Teilchen?",
        solution: "Impulserhaltung: die α-Teilchen fliegen mit gleicher Geschwindigkeit entgegengesetzt. 2×½mv² = E_frei → v = √(E_frei/m) = √(1,5·10⁻¹⁴/6,64·10⁻²⁷) = √(2,26·10¹²) ≈ 1,5·10⁶ m/s."
      }
    ],
    quiz: [
      {
        id: "natwiss-ueb-energie-q1",
        question: "Ein Körper fällt aus h = 10 m. Welche Geschwindigkeit hat er am Boden (g = 10 m/s²)?",
        options: ["10 m/s", "14,1 m/s", "20 m/s", "100 m/s"],
        correctIndex: 1,
        explanation: "Energieerhaltung: mgh = ½mv² → v = √(2gh) = √(200) ≈ 14,1 m/s."
      },
      {
        id: "natwiss-ueb-energie-q2",
        question: "Was ist das Trägheitsmoment einer dünnen Scheibe (Masse m, Radius R) bzgl. der Symmetrieachse?",
        options: ["J = mR²", "J = ½mR²", "J = 2mR²/3", "J = mR²/4"],
        correctIndex: 1,
        explanation: "Für eine dünne Scheibe (Vollzylinder): J = ½mR²."
      },
      {
        id: "natwiss-ueb-energie-q3",
        question: "Wie lautet der Steinsche Anteil (Parallelachsensatz)?",
        options: ["J = J_S + md²", "J = J_S − md²", "J = J_S · md", "J = J_S / md²"],
        correctIndex: 0,
        explanation: "Steinerscher Satz: J = J_S + md², wobei d der Abstand der neuen Achse vom Schwerpunkt ist."
      },
      {
        id: "natwiss-ueb-energie-q4",
        question: "Drehimpulserhaltung gilt, wenn das äußere Drehmoment ...",
        options: ["gleich 1 ist", "null ist", "positiv ist", "konstant ist"],
        correctIndex: 1,
        explanation: "dL/dt = M. Bei M = 0 gilt dL/dt = 0 → L = const (Drehimpulserhaltung)."
      },
      {
        id: "natwiss-ueb-energie-q5",
        question: "Was gilt beim vollkommen elastischen Stoß zwischen zwei gleichen Massen, wenn eine ruht?",
        options: ["Beide bewegen sich", "Die Treffermasse bleibt stehen, die andere übernimmt Geschwindigkeit", "Beide werden gestoppt", "Keine Energieerhaltung"],
        correctIndex: 1,
        explanation: "Beim elastischen Stoß zweier gleicher Massen (eine ruhend): Die erste Kugel stoppt, die zweite übernimmt die gesamte Geschwindigkeit. (Bekannt von der Billardkugel)"
      },
      {
        id: "natwiss-ueb-energie-q6",
        question: "Was ist die rotatorische kinetische Energie?",
        options: ["E_rot = ½mv²", "E_rot = ½Jω²", "E_rot = Jω", "E_rot = mω²r"],
        correctIndex: 1,
        explanation: "Analog zur Translation E_kin = ½mv²: E_rot = ½Jω²."
      },
      {
        id: "natwiss-ueb-energie-q7",
        question: "Eine Kraft F = C·x² wirkt ortsabhängig. Was ist die Arbeit von x₁ nach x₂?",
        options: ["W = C(x₂−x₁)", "W = C(x₂²−x₁²)/2", "W = C(x₂³−x₁³)/3", "W = C·x₂"],
        correctIndex: 2,
        explanation: "W = ∫ F dx = ∫ C·x² dx = C·x³/3 ausgewertet zwischen x₁ und x₂."
      },
      {
        id: "natwiss-ueb-energie-q8",
        question: "Was besagt der Impulserhaltungssatz?",
        options: ["p = mv ist immer null", "Gesamtimpuls eines abgeschlossenen Systems bleibt konstant", "p erhöht sich bei Reibung", "Impuls ist nicht erhaltbar"],
        correctIndex: 1,
        explanation: "In einem abgeschlossenen System (keine äußeren Kräfte) gilt: Σp = const."
      },
      {
        id: "natwiss-ueb-energie-q9",
        question: "Bei einem Looping (Radius r, Höhe h über Boden) muss die Minimalgeschwindigkeit am Scheitelpunkt v_min betragen:",
        options: ["v_min = 0", "v_min = √(gr)", "v_min = √(2gr)", "v_min = √(g/r)"],
        correctIndex: 1,
        explanation: "Am Scheitelpunkt: Zentripetalkraft = Gewicht + Normalkraft. Minimum bei F_N = 0: mv²/r = mg → v_min = √(gr)."
      },
      {
        id: "natwiss-ueb-energie-q10",
        question: "Beim Drehimpulserhaltungssatz eines Planeten: Im Perihel (kleinster Abstand r₁) ist die Geschwindigkeit ...",
        options: ["am kleinsten", "am größten", "gleich wie im Aphel", "null"],
        correctIndex: 1,
        explanation: "L = m·r·v = const. Bei kleinstem r₁ ist v₁ am größten (2. Keplersches Gesetz)."
      }
    ]
  }
];
