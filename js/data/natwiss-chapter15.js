const NATWISS_CHAPTER15_TOPICS = [
  {
    id: "natwiss-ueb-schwingungen",
    chapter: 15,
    order: 1,
    title: "Übungsaufgaben: Mechanische Schwingungen",
    icon: "🎵",
    summary: "Übungsaufgaben zu Federpendel, physikalischem Pendel, Resonanz und gedämpften Schwingungen.",
    explanation: [
      { type: "p", text: "Grundlegende Formeln für harmonische Schwingungen:" },
      { type: "formula", tex: "x(t) = A\\cos(\\omega t + \\varphi_0), \\quad \\omega = 2\\pi f = \\sqrt{k/m}" },
      { type: "p", text: "Musterlösung Aufg. 21.1: x(t) = 7 cm·cos(6π t). Vergleich mit x = A·cos(ωt):" },
      { type: "list", items: [
        "Amplitude: A = 7,0 cm",
        "Kreisfrequenz: ω = 6π rad/s",
        "Frequenz: f = ω/(2π) = 3 Hz",
        "Schwingungsdauer: T = 1/f = 0,333 s",
        "Nulldurchgang: x = 0 bei ωt = π/2 → t = π/(2ω) = 1/12 s ≈ 0,083 s (Bewegung in negativer Richtung)"
      ]},
      { type: "p", text: "Musterlösung Aufg. 21.7 (Resonanzfrequenzen):" },
      { type: "list", items: [
        "System (a): f = 1/(2π)·√(k/m) = 1/(2π)·√(400/10) = 1,006 Hz",
        "System (b): f = 1/(2π)·√(800/5) = 2,012 Hz",
        "System (c): Pendel f = 1/(2π)·√(g/l) = 1/(2π)·√(9,81/2,0) ≈ 0,352 Hz"
      ]}
    ],
    exercises: [
      {
        id: "natwiss-ueb-schwingungen-e1",
        prompt: "x(t) = 7 cm·cos(6π·t). Bestimmen Sie Frequenz, Schwingungsdauer und Amplitude.",
        solution: [{ type: "p", text: "ω = 6π rad/s. f = ω/(2π) = 6π/(2π) = 3 Hz. T = 1/3 s ≈ 0,333 s. A = 7 cm." }]
      },
      {
        id: "natwiss-ueb-schwingungen-e2",
        prompt: "Rütteltisch: Maximalbeschleunigung a_max = 10g = 98,1 m/s², Amplitude A = 1,5 cm = 0,015 m. Welche Frequenz ist nötig?",
        solution: [{ type: "p", text: "a_max = ω²·A → ω = √(a_max/A) = √(98,1/0,015) = √6540 ≈ 80,9 rad/s. f = ω/(2π) ≈ 12,9 Hz." }]
      },
      {
        id: "natwiss-ueb-schwingungen-e3",
        prompt: "Federpendel: k = 1800 N/m, f = 5,50 Hz. Berechnen Sie die Masse m.",
        solution: [{ type: "p", text: "ω = 2πf = 2π·5,5 = 34,56 rad/s. k = mω² → m = k/ω² = 1800/34,56² = 1800/1194 ≈ 1,508 kg." }]
      },
      {
        id: "natwiss-ueb-schwingungen-e4",
        prompt: "Um wie viel dehnt sich die Feder (k = 1800 N/m) im Gleichgewicht, wenn m = 1,508 kg daran hängt?",
        solution: [{ type: "p", text: "Δx = mg/k = 1,508·9,81/1800 = 14,79/1800 ≈ 0,00822 m ≈ 8,2 mm." }]
      },
      {
        id: "natwiss-ueb-schwingungen-e5",
        prompt: "Mathematisches Pendel, l = 2,0 m. Berechnen Sie die Resonanzfrequenz.",
        solution: [{ type: "p", text: "f = 1/(2π)·√(g/l) = 1/(2π)·√(9,81/2,0) = 1/(2π)·√4,905 = 1/(2π)·2,215 ≈ 0,352 Hz." }]
      }
    ],
    quiz: [
      { id: "natwiss-ueb-schwingungen-q1", question: "x(t) = A·cos(ωt). Was ist die maximale Beschleunigung?", options: ["a_max = Aω²", "a_max = A/ω²", "a_max = Aω", "a_max = ω/A"], correctIndex: 0, explanation: "a(t) = −ω²·x(t). Maximum bei x = ±A: a_max = ω²·A." },
      { id: "natwiss-ueb-schwingungen-q2", question: "Wie verändert sich die Eigenfrequenz eines Federpendels, wenn die Masse verdoppelt wird?", options: ["Halbiert sich", "Verdoppelt sich", "Sinkt auf 1/√2", "Ändert sich nicht"], correctIndex: 2, explanation: "f = 1/(2π)·√(k/m). Bei m → 2m: f → f/√2." },
      { id: "natwiss-ueb-schwingungen-q3", question: "Wo ist die Geschwindigkeit bei einer harmonischen Schwingung maximal?", options: ["Bei maximaler Auslenkung", "Im Gleichgewicht (Nulldurchgang)", "Immer gleich", "Beim Umkehrpunkt"], correctIndex: 1, explanation: "v(t) = −Aω·sin(ωt). Maximum bei x = 0: v_max = Aω." },
      { id: "natwiss-ueb-schwingungen-q4", question: "Wie lautet die Eigenfrequenz eines mathematischen Pendels?", options: ["f = 1/(2π)·√(l/g)", "f = 1/(2π)·√(g/l)", "f = 1/(2π)·√(k/m)", "f = √(g·l)/(2π)"], correctIndex: 1, explanation: "Für das Pendel (kleine Winkel): f = 1/(2π)·√(g/l). Hängt nur von l ab, nicht von m." },
      { id: "natwiss-ueb-schwingungen-q5", question: "Was versteht man unter Resonanz?", options: ["Maximale Dämpfung", "Abnahme der Schwingungsamplitude", "Phasenverschiebung von 0°", "Erregungsfrequenz gleich Eigenfrequenz → maximale Amplitude"], correctIndex: 3, explanation: "Resonanz tritt auf, wenn ω_erreger = ω₀. Bei geringer Dämpfung wird die Amplitude sehr groß." },
      { id: "natwiss-ueb-schwingungen-q6", question: "Ein Federpendel hat k = 400 N/m und m = 10 kg. Wie groß ist f?", options: ["0,5 Hz", "4,0 Hz", "1,0 Hz", "2,0 Hz"], correctIndex: 2, explanation: "ω = √(k/m) = √(400/10) = √40 = 6,32 rad/s. f = 6,32/(2π) ≈ 1,006 Hz ≈ 1,0 Hz." },
      { id: "natwiss-ueb-schwingungen-q7", question: "Wie ändert sich die Schwingungsdauer T eines Pendels, wenn l auf 4l vergrößert wird?", options: ["T verdoppelt sich", "T vervierfacht sich", "T ändert sich nicht", "T halbiert sich"], correctIndex: 0, explanation: "T = 2π√(l/g). Bei l → 4l: T → 2π√(4l/g) = 2·T. Die Periode verdoppelt sich." },
      { id: "natwiss-ueb-schwingungen-q8", question: "Welche Energie hat ein harmonischer Oszillator im Umkehrpunkt?", options: ["Gleich kinetische und potenzielle", "Keine Energie", "Nur kinetische Energie", "Nur potenzielle Energie"], correctIndex: 3, explanation: "Im Umkehrpunkt ist v = 0, also E_kin = 0. Die gesamte Energie steckt als potenzielle Energie in der Feder: E_pot = ½kA²." },
      { id: "natwiss-ueb-schwingungen-q9", question: "Was ist die Phasenverschiebung zwischen Auslenkung x und Beschleunigung a?", options: ["90°", "180°", "0°", "270°"], correctIndex: 1, explanation: "a = −ω²·x. Der Faktor −1 entspricht einer Phasenverschiebung von 180°." },
      { id: "natwiss-ueb-schwingungen-q10", question: "Was charakterisiert eine kritisch gedämpfte Schwingung?", options: ["Kehrt schnellstmöglich ohne Überschwingen in die Ruhelage zurück", "Schwingt mit abnehmender Amplitude", "Explodiert in der Amplitude", "Schwingt endlos"], correctIndex: 0, explanation: "Kritische Dämpfung (D = 1, δ = ω₀): kein Überschwingen, schnellstmögliche Rückkehr zur Ruhe." }
    ]
  },
  {
    id: "natwiss-ueb-wellen",
    chapter: 15,
    order: 2,
    title: "Übungsaufgaben: Mechanische Wellen",
    icon: "〰️",
    summary: "Übungsaufgaben zu Wellengeschwindigkeit, Stehenden Wellen, Schwebung und Interferenz.",
    explanation: [
      { type: "p", text: "Grundgleichungen für Wellen:" },
      { type: "formula", tex: "c = \\lambda \\cdot f = \\frac{\\omega}{k}, \\quad c_{\\rm Seil} = \\sqrt{\\frac{F_T}{\\mu}}" },
      { type: "p", text: "Musterlösung Aufg. 22.1 (Seilbahn):" },
      { type: "list", items: [
        "c = 2·600 m / 16 s = 75 m/s",
        "F_T = μ·c² mit μ = ρ·A = 7800·(π/4)·0,015² = 1,38 kg/m",
        "F_T = 1,38·75² = 7763 N ≈ 7,8 kN"
      ]},
      { type: "p", text: "Musterlösung Aufg. 22.3 (Schallwelle, f = 440 Hz, c = 345 m/s):" },
      { type: "list", items: [
        "λ = c/f = 345/440 = 0,784 m",
        "Phasenwechsel um 90°: Δt = T/4 = 1/(4f) = 5,68·10⁻⁴ s",
        "Phasendifferenz bei Δx = 4,4 cm: Δφ = (2π/λ)·Δx = (2π/0,784)·0,044 = 0,352 rad = 20°"
      ]},
      { type: "p", text: "Musterlösung Aufg. 22.5 (Stehende Wellen):" },
      { type: "formula", tex: "c = \\sqrt{\\frac{F_T}{\\mu}} = \\sqrt{\\frac{F_T \\cdot L}{m}} = \\sqrt{\\frac{96 \\cdot 8{,}40}{0{,}120}} \\approx 82 \\; {\\rm m/s}" },
      { type: "p", text: "Grundmode: λ₁ = 2L = 16,8 m. f₁ = c/λ₁ = 82/16,8 ≈ 4,88 Hz." }
    ],
    exercises: [
      {
        id: "natwiss-ueb-wellen-e1",
        prompt: "Seilbahn: Seil 600 m, Echozeit 16 s. Wie groß ist die Wellengeschwindigkeit?",
        solution: [{ type: "p", text: "c = 2L/t = 2·600/16 = 75 m/s." }]
      },
      {
        id: "natwiss-ueb-wellen-e2",
        prompt: "Seil (L = 8,40 m, m = 0,120 kg, F_T = 96 N). Berechnen Sie c und f der Grundschwingung.",
        solution: [{ type: "p", text: "μ = m/L = 0,120/8,40 = 0,01429 kg/m. c = √(F_T/μ) = √(96/0,01429) = √6720 ≈ 82 m/s. λ₁ = 2L = 16,8 m. f₁ = 82/16,8 ≈ 4,88 Hz." }]
      },
      {
        id: "natwiss-ueb-wellen-e3",
        prompt: "Schallwelle: f = 440 Hz, c = 345 m/s. Berechnen Sie λ und die Zeit für einen Phasenwechsel um 90°.",
        solution: [{ type: "p", text: "λ = c/f = 345/440 ≈ 0,784 m. T = 1/f = 2,27·10⁻³ s. Δt = T/4 = 5,68·10⁻⁴ s." }]
      },
      {
        id: "natwiss-ueb-wellen-e4",
        prompt: "Welche Phasendifferenz haben zwei Punkte auf einer Schallwelle (f = 440 Hz, c = 345 m/s) im Abstand Δx = 4,4 cm?",
        solution: [{ type: "p", text: "Δφ = (2π/λ)·Δx = (2π/0,784)·0,044 = 0,3524 rad = 20°." }]
      },
      {
        id: "natwiss-ueb-wellen-e5",
        prompt: "Zwei gleiche Wellen überlagern sich mit Phasenversatz Δφ = π/2. Welche Amplitude hat die resultierende Welle?",
        solution: [{ type: "p", text: "Überlagerung: y_res = y_m·cos(ωt) + y_m·cos(ωt + π/2). Amplitude: A = y_m·√(1+1+2·cos(π/2)) = y_m·√2. A = √2·y_m ≈ 1,41·y_m." }]
      }
    ],
    quiz: [
      { id: "natwiss-ueb-wellen-q1", question: "Wie hängt die Wellengeschwindigkeit auf einem Seil von der Zugspannung ab?", options: ["c ∝ F_T²", "Unabhängig", "c ∝ F_T", "c ∝ √F_T"], correctIndex: 3, explanation: "c = √(F_T/μ). Doppelte Zugspannung → c wächst um Faktor √2." },
      { id: "natwiss-ueb-wellen-q2", question: "Bei einer stehenden Welle auf einem Seil (beidseitig eingespannt, Länge L): Was ist die längste mögliche Wellenlänge?", options: ["λ_max = L", "λ_max = 4L", "λ_max = 2L", "λ_max = L/2"], correctIndex: 2, explanation: "Grundschwingung: halbe Wellenlänge passt auf L → λ₁ = 2L." },
      { id: "natwiss-ueb-wellen-q3", question: "Phasendifferenz Δφ und örtlicher Abstand Δx sind verknüpft durch:", options: ["Δφ = 2π·Δx/λ", "Δφ = Δx·f", "Δφ = λ/Δx", "Δφ = Δx/λ"], correctIndex: 0, explanation: "Δφ = k·Δx = (2π/λ)·Δx." },
      { id: "natwiss-ueb-wellen-q4", question: "Was ist konstruktive Interferenz?", options: ["Gar keine Überlagerung", "Überlagerung mit Phasendifferenz π (Auslöschung)", "Überlagerung mit Phasendifferenz 0 oder 2π (Verstärkung)", "Dämpfung einer Welle"], correctIndex: 2, explanation: "Konstruktive Interferenz: Δφ = 0, 2π, 4π... → maximale Verstärkung, Amplitude verdoppelt sich." },
      { id: "natwiss-ueb-wellen-q5", question: "Schwebung entsteht, wenn ...", options: ["Zwei Wellen gleicher Frequenz überlagert werden", "Zwei Wellen leicht unterschiedlicher Frequenz überlagert werden", "Stehende Wellen entstehen", "Eine Welle reflektiert wird"], correctIndex: 1, explanation: "Schwebung: Überlagerung zweier Frequenzen f₁ und f₂. Schwebungsfrequenz: f_Schwebung = |f₁ − f₂|." },
      { id: "natwiss-ueb-wellen-q6", question: "Was ist ein Knoten bei einer stehenden Welle?", options: ["Punkt der Wellenmitte", "Punkt permanenter Ruhe (Amplitude = 0)", "Phasenverschiebungspunkt", "Punkt maximaler Amplitude"], correctIndex: 1, explanation: "Knoten: Punkte, die sich nicht bewegen (destruktive Überlagerung der hin- und rücklaufenden Welle)." },
      { id: "natwiss-ueb-wellen-q7", question: "Der Doppler-Effekt beschreibt:", options: ["Reflexion an Hindernissen", "Änderung der Amplitude bei Bewegung", "Änderung der wahrgenommenen Frequenz durch Relativbewegung zwischen Quelle und Empfänger", "Brechung von Schallwellen"], correctIndex: 2, explanation: "f' = f·(c + v_E)/(c − v_S). Bewegt sich Quelle auf Empfänger zu → höhere wahrgenommene Frequenz." },
      { id: "natwiss-ueb-wellen-q8", question: "Wie groß ist die Liniendichte μ eines 8,4 m langen Seils mit Masse 120 g?", options: ["14,3 g/m", "0,143 g/m", "1,43 g/m", "143 g/m"], correctIndex: 0, explanation: "μ = m/L = 0,120 kg / 8,40 m = 0,01429 kg/m = 14,3 g/m." },
      { id: "natwiss-ueb-wellen-q9", question: "Zwei Wellen (gleiche Amplitude y_m) überlagern sich mit Δφ = 0. Welche Amplitude hat die resultierende Welle?", options: ["√2·y_m", "0", "y_m", "2·y_m"], correctIndex: 3, explanation: "Konstruktive Interferenz: A_res = y_m + y_m = 2y_m." },
      { id: "natwiss-ueb-wellen-q10", question: "Welche Gleichung gilt für Schallwellen in Luft?", options: ["c = f/λ", "c = √(κp/ρ) = √(κRT/M)", "c = λ·f²", "c = √(E/ρ)"], correctIndex: 1, explanation: "Schallgeschwindigkeit in Luft: c = √(κp/ρ) = √(κRT/M) ≈ 343 m/s bei 20°C. κ = Adiabatenexponent." }
    ]
  },
  {
    id: "natwiss-ueb-wellen2",
    chapter: 15,
    order: 3,
    title: "Übungsaufgaben: Wellen und Interferenz — Vertiefung",
    icon: "🔊",
    summary: "Vertiefende Aufgaben zu Wellengleichung, Phasendifferenz, Superposition und stehenden Wellen.",
    explanation: [
      { type: "p", text: "Die Wellenfunktion einer Transversalwelle lautet:" },
      { type: "formula", tex: "y(x,t) = A \\sin(kx - \\omega t + \\varphi_0), \\quad k = \\frac{2\\pi}{\\lambda}, \\quad \\omega = 2\\pi f" },
      { type: "p", text: "Stehende Wellen entstehen durch Überlagerung einer hin- und rücklaufenden Welle gleicher Amplitude und Frequenz:" },
      { type: "formula", tex: "y_{\\rm st} = 2A\\cos(\\omega t)\\sin(kx)" },
      { type: "p", text: "Knoten (y = 0 immer): kx = nπ → x_n = n·λ/2." },
      { type: "p", text: "Bäuche (max. Amplitude 2A): kx = π/2 + nπ → x_n = (2n+1)·λ/4." },
      { type: "p", text: "Eigenfrequenzen bei beidseitig eingespanntem Seil (Länge L):" },
      { type: "formula", tex: "f_n = \\frac{n \\cdot c}{2L}, \\quad n = 1, 2, 3, \\ldots" },
      { type: "p", text: "Energiefluss einer Seilwelle (Leistung):" },
      { type: "formula", tex: "P = \\frac{1}{2} \\mu \\omega^2 A^2 c" },
      { type: "p", text: "Diese Formel gilt für Aufg. 22.2: Bei konstanter Leistung P und verdoppelter Frequenz (ω → 2ω) muss A sinken: A' = A/2 (da P ∝ ω²A²)." }
    ],
    exercises: [
      {
        id: "natwiss-ueb-wellen2-e1",
        prompt: "y(x,t) = (3 cm)·sin(2πx − 6πt). Bestimmen Sie k, λ, ω, f, c.",
        solution: [{ type: "p", text: "k = 2π m⁻¹ → λ = 2π/k = 1 m. ω = 6π rad/s → f = 3 Hz. c = ω/k = 6π/(2π) = 3 m/s." }]
      },
      {
        id: "natwiss-ueb-wellen2-e2",
        prompt: "Seil: μ = 0,01 kg/m, ω = 2π·60 rad/s, A = 0,5 cm, c = 94,7 m/s. Berechnen Sie die Leistung.",
        solution: [{ type: "p", text: "P = ½·μ·ω²·A²·c = ½·0,01·(2π·60)²·(0,005)²·94,7. ω = 376,99. ω² = 142 120. P = 0,005·142 120·0,000025·94,7 ≈ 1,68 W." }]
      },
      {
        id: "natwiss-ueb-wellen2-e3",
        prompt: "Bei konstanter Leistung P wird die Frequenz eines Seilschwingers verdoppelt (f → 2f). Wie ändert sich die Amplitude A?",
        solution: [{ type: "p", text: "P = ½·μ·ω²·A²·c = const. P ∝ ω²A². Bei ω → 2ω: (2ω)²·A'² = ω²·A² → 4A'² = A² → A' = A/2. Die Amplitude halbiert sich." }]
      },
      {
        id: "natwiss-ueb-wellen2-e4",
        prompt: "Stehende Welle: L = 2 m, c = 40 m/s. Berechnen Sie die ersten drei Eigenfrequenzen.",
        solution: [{ type: "p", text: "f_n = n·c/(2L). f₁ = 1·40/4 = 10 Hz. f₂ = 2·40/4 = 20 Hz. f₃ = 3·40/4 = 30 Hz." }]
      },
      {
        id: "natwiss-ueb-wellen2-e5",
        prompt: "Phasendifferenz von Δφ = π zwischen zwei Punkten einer Welle (λ = 0,784 m). Welcher Abstand Δx trennt sie?",
        solution: [{ type: "p", text: "Δφ = (2π/λ)·Δx → Δx = Δφ·λ/(2π) = π·0,784/(2π) = 0,784/2 = 0,392 m = λ/2." }]
      }
    ],
    quiz: [
      { id: "natwiss-ueb-wellen2-q1", question: "y(x,t) = A·sin(kx − ωt). In welche Richtung läuft diese Welle?", options: ["Steht still", "Negative x-Richtung", "Positive x-Richtung", "Positive y-Richtung"], correctIndex: 2, explanation: "Das Argument kx − ωt verschiebt sich mit wachsendem t in positive x-Richtung → Welle läuft in +x." },
      { id: "natwiss-ueb-wellen2-q2", question: "Wie viele Bäuche hat die 3. Oberschwingung (n = 3) auf einem beidseitig eingespannten Seil?", options: ["3", "1", "4", "2"], correctIndex: 0, explanation: "Bei n = 3 passen 3 halbe Wellenlängen auf das Seil → 3 Bäuche (und 4 Knoten incl. Endpunkte)." },
      { id: "natwiss-ueb-wellen2-q3", question: "Wie skaliert die Leistung P einer Seilwelle mit der Amplitude A?", options: ["P ∝ √A", "P ∝ A", "P ∝ 1/A", "P ∝ A²"], correctIndex: 3, explanation: "P = ½·μ·ω²·A²·c. Leistung ist proportional zu A²." },
      { id: "natwiss-ueb-wellen2-q4", question: "Zwei Wellen überlagern sich: Δφ = π (destruktiv). Was ist die Amplitude der Resultante (gleiche Amplitude A)?", options: ["2A", "√2·A", "0", "A"], correctIndex: 2, explanation: "Destruktive Interferenz bei Δφ = π: A_res = A − A = 0. Vollständige Auslöschung." },
      { id: "natwiss-ueb-wellen2-q5", question: "Was ist die Wellenzahl k?", options: ["k = ω/c²", "k = λ/c", "k = 2πf", "k = 2π/λ"], correctIndex: 3, explanation: "Wellenzahl k = 2π/λ. Einheit: rad/m oder m⁻¹." },
      { id: "natwiss-ueb-wellen2-q6", question: "Schwebungsfrequenz zweier Töne (f₁ = 440 Hz, f₂ = 443 Hz)?", options: ["441,5 Hz", "883 Hz", "3 Hz", "1 Hz"], correctIndex: 2, explanation: "Schwebungsfrequenz: f_s = |f₁ − f₂| = |440 − 443| = 3 Hz." },
      { id: "natwiss-ueb-wellen2-q7", question: "Wie viele Knoten hat die Grundschwingung (n = 1) eines beidseitig eingespannten Seils?", options: ["0", "2", "3", "1"], correctIndex: 1, explanation: "Grundschwingung: Knoten nur an den Enden (2 Knoten), ein Bauch in der Mitte." },
      { id: "natwiss-ueb-wellen2-q8", question: "Was ist der Unterschied zwischen einer Transversal- und einer Longitudinalwelle?", options: ["Nur Longitudinalwellen übertragen Energie", "Transversal: Auslenkung senkrecht zur Ausbreitung; Longitudinal: parallel dazu", "Beide sind identisch", "Transversalwellen brauchen kein Medium"], correctIndex: 1, explanation: "Transversal: Schwingungsrichtung ⊥ Ausbreitungsrichtung (Seile, Licht). Longitudinal: Schwingungsrichtung ∥ Ausbreitung (Schall, Druckwellen)." },
      { id: "natwiss-ueb-wellen2-q9", question: "Eine stehende Welle hat Bauchpositionen bei x = 0,25 m, 0,75 m, 1,25 m. Wie groß ist λ?", options: ["1,0 m", "2,0 m", "0,25 m", "0,5 m"], correctIndex: 0, explanation: "Bäuche im Abstand λ/2 = 0,5 m → λ = 1,0 m." },
      { id: "natwiss-ueb-wellen2-q10", question: "Wie ändert sich f_n der n-ten Oberschwingung eines Seils, wenn L halbiert wird?", options: ["f_n verdoppelt sich", "f_n bleibt gleich", "f_n verdreifacht sich", "f_n halbiert sich"], correctIndex: 0, explanation: "f_n = n·c/(2L). Bei L → L/2: f_n → n·c/(2·L/2) = n·c/L = 2·f_n. Frequenz verdoppelt sich." }
    ]
  }
];
