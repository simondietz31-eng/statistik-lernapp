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
      { id: "natwiss-ueb-schwingungen-q1", question: "x(t) = A·cos(ωt). Was ist die maximale Beschleunigung?", options: ["a_max = Aω²", "a_max = A/ω², mit Division statt Quadrat-Multiplikation", "a_max = Aω, ohne Quadrat von ω", "a_max = ω/A, mit vertauschtem Zähler und Nenner"], correctIndex: 0, explanation: "Da a(t) = −ω²·x(t) gilt, tritt die maximale Beschleunigung bei maximaler Auslenkung x = ±A auf: a_max = ω²·A. Die quadratische Abhängigkeit von ω unterscheidet dies von der Geschwindigkeit, die nur linear mit ω skaliert." },
      { id: "natwiss-ueb-schwingungen-q2", question: "Wie verändert sich die Eigenfrequenz eines Federpendels, wenn die Masse verdoppelt wird?", options: ["Sie halbiert sich exakt", "Sie verdoppelt sich exakt", "Sie sinkt auf 1/√2 des Ausgangswerts", "Sie bleibt trotz höherer Masse unverändert"], correctIndex: 2, explanation: "Aus f = 1/(2π)·√(k/m) folgt, dass f nur mit der Quadratwurzel des Kehrwerts der Masse skaliert: bei m → 2m sinkt f auf f/√2 ≈ 0,71·f, nicht auf die Hälfte. Eine größere Masse macht das System also nur moderat langsamer, nicht proportional langsamer." },
      { id: "natwiss-ueb-schwingungen-q3", question: "Wo ist die Geschwindigkeit bei einer harmonischen Schwingung maximal?", options: ["Bei maximaler Auslenkung", "Im Gleichgewicht (beim Nulldurchgang)", "Die Geschwindigkeit ist stets konstant", "Genau am Umkehrpunkt der Bewegung"], correctIndex: 1, explanation: "Da v(t) = −Aω·sin(ωt) gilt, wird der Betrag maximal, wenn sin(ωt) = ±1, also gerade dann, wenn x = 0 ist (der cos-Term also null wird). Am Umkehrpunkt und bei maximaler Auslenkung ist die Geschwindigkeit dagegen genau null." },
      { id: "natwiss-ueb-schwingungen-q4", question: "Wie lautet die Eigenfrequenz eines mathematischen Pendels?", options: ["f = 1/(2π)·√(l/g), mit vertauschtem Zähler und Nenner", "f = 1/(2π)·√(g/l)", "f = 1/(2π)·√(k/m), die Formel des Federpendels", "f = √(g·l)/(2π), ohne Kehrwertbildung unter der Wurzel"], correctIndex: 1, explanation: "Für kleine Auslenkwinkel gilt f = 1/(2π)·√(g/l) — die Frequenz hängt nur von der Fallbeschleunigung g und der Pendellänge l ab, nicht von der Masse. Das unterscheidet das Pendel deutlich vom Federpendel, dessen Frequenz von Federkonstante k und Masse m abhängt." },
      { id: "natwiss-ueb-schwingungen-q5", question: "Was versteht man unter Resonanz?", options: ["Den Zustand maximaler Dämpfung eines Systems", "Eine kontinuierliche Abnahme der Schwingungsamplitude", "Eine feste Phasenverschiebung von genau 0°", "Erregungsfrequenz gleich Eigenfrequenz, dadurch maximale Amplitude"], correctIndex: 3, explanation: "Resonanz tritt auf, wenn die Erregerfrequenz mit der Eigenfrequenz des Systems übereinstimmt, ω_erreger = ω₀; bei geringer Dämpfung wächst die Amplitude dann stark an. Das ist das Gegenteil von maximaler Dämpfung, die die Amplitude gerade begrenzt." },
      { id: "natwiss-ueb-schwingungen-q6", question: "Ein Federpendel hat k = 400 N/m und m = 10 kg. Wie groß ist f?", options: ["0,5 Hz, deutlich zu niedrig gerechnet", "4,0 Hz, deutlich zu hoch gerechnet", "1,0 Hz", "2,0 Hz, um den Faktor 2 zu hoch"], correctIndex: 2, explanation: "Aus ω = √(k/m) = √(400/10) = √40 ≈ 6,32 rad/s folgt f = ω/(2π) ≈ 1,0 Hz. Sowohl die Wurzelbildung als auch die Division durch 2π sind für das korrekte Ergebnis notwendig." },
      { id: "natwiss-ueb-schwingungen-q7", question: "Wie ändert sich die Schwingungsdauer T eines Pendels, wenn l auf 4l vergrößert wird?", options: ["T verdoppelt sich", "T vervierfacht sich, als wäre T linear in l", "T bleibt trotz vergrößerter Länge unverändert", "T halbiert sich entgegen der Erwartung"], correctIndex: 0, explanation: "Aus T = 2π√(l/g) folgt bei l → 4l: T → 2π√(4l/g) = 2·2π√(l/g) = 2T — die Periode verdoppelt sich, weil T nur mit der Quadratwurzel der Länge wächst, nicht proportional zu l selbst." },
      { id: "natwiss-ueb-schwingungen-q8", question: "Welche Energie hat ein harmonischer Oszillator im Umkehrpunkt?", options: ["Zu gleichen Teilen kinetische und potenzielle Energie", "In diesem Moment gar keine Energie", "Ausschließlich kinetische Energie", "Ausschließlich potenzielle Energie"], correctIndex: 3, explanation: "Am Umkehrpunkt ist die Geschwindigkeit v = 0, also E_kin = 0, während die gesamte Schwingungsenergie als potenzielle Energie in der Feder gespeichert ist: E_pot = ½kA². Im Gleichgewichtspunkt kehrt sich dieses Verhältnis genau um." },
      { id: "natwiss-ueb-schwingungen-q9", question: "Was ist die Phasenverschiebung zwischen Auslenkung x und Beschleunigung a?", options: ["90° Phasenverschiebung", "180° Phasenverschiebung", "Keine Phasenverschiebung (0°)", "270° Phasenverschiebung"], correctIndex: 1, explanation: "Da a = −ω²·x gilt, unterscheiden sich Auslenkung und Beschleunigung nur durch den negativen Vorfaktor −ω², was einer Phasenverschiebung von exakt 180° entspricht — ist x maximal positiv, ist a maximal negativ, und umgekehrt." },
      { id: "natwiss-ueb-schwingungen-q10", question: "Was charakterisiert eine kritisch gedämpfte Schwingung?", options: ["Sie kehrt schnellstmöglich ohne Überschwingen in die Ruhelage zurück", "Sie schwingt fortlaufend mit langsam abnehmender Amplitude", "Ihre Amplitude wächst unkontrolliert immer weiter an", "Sie schwingt praktisch ungedämpft und endlos weiter"], correctIndex: 0, explanation: "Kritische Dämpfung (Dämpfungsgrad D = 1, also δ = ω₀) markiert genau den Übergang zwischen langsam ausschwingender und träge zurückkriechender Bewegung — das System erreicht die Ruhelage in kürzestmöglicher Zeit, ohne über sie hinauszuschießen. Schwächere Dämpfung würde dagegen zu einem echten Ausschwingen mit sinkender Amplitude führen." }
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
      { id: "natwiss-ueb-wellen-q1", question: "Wie hängt die Wellengeschwindigkeit auf einem Seil von der Zugspannung ab?", options: ["c ∝ F_T², quadratisch statt mit Wurzel", "Sie ist von der Zugspannung unabhängig", "c ∝ F_T, linear statt mit Wurzel", "c ∝ √F_T"], correctIndex: 3, explanation: "Aus c = √(F_T/μ) folgt, dass die Wellengeschwindigkeit nur mit der Quadratwurzel der Zugspannung wächst: eine Verdopplung von F_T erhöht c lediglich um den Faktor √2, nicht um den Faktor 2 oder 4." },
      { id: "natwiss-ueb-wellen-q2", question: "Bei einer stehenden Welle auf einem beidseitig eingespannten Seil der Länge L: Was ist die längste mögliche Wellenlänge?", options: ["λ_max = L, ohne den Faktor 2", "λ_max = 4L, um den Faktor 2 zu groß", "λ_max = 2L", "λ_max = L/2, als Kehrwert statt Vielfaches"], correctIndex: 2, explanation: "Bei der Grundschwingung passt genau eine halbe Wellenlänge auf die Seillänge L, sodass λ₁ = 2L die längste mögliche stehende Welle ist — kürzere Wellenlängen (Oberschwingungen) erfüllen dagegen λ_n = 2L/n mit n = 2, 3, ...." },
      { id: "natwiss-ueb-wellen-q3", question: "Wie sind Phasendifferenz Δφ und örtlicher Abstand Δx verknüpft?", options: ["Δφ = 2π·Δx/λ", "Δφ = Δx·f, mit Frequenz statt Wellenlänge", "Δφ = λ/Δx, als Kehrwert vertauscht", "Δφ = Δx/λ, ohne den Faktor 2π"], correctIndex: 0, explanation: "Über die Wellenzahl k = 2π/λ gilt Δφ = k·Δx = (2π/λ)·Δx: Je größer der örtliche Abstand relativ zur Wellenlänge, desto größer die Phasendifferenz. Der Faktor 2π darf dabei nicht vergessen werden." },
      { id: "natwiss-ueb-wellen-q4", question: "Was ist konstruktive Interferenz?", options: ["Das vollständige Ausbleiben jeder Überlagerung", "Überlagerung mit Phasendifferenz π, die zur Auslöschung führt", "Überlagerung mit Phasendifferenz 0 oder 2π", "Eine reine Dämpfung der beteiligten Welle"], correctIndex: 2, explanation: "Bei Phasendifferenzen von 0, 2π, 4π usw. addieren sich die Wellen exakt in Phase, wodurch sich ihre Amplituden maximal verstärken. Bei Δφ = π (destruktive Interferenz) würden sich die Wellen dagegen gerade auslöschen." },
      { id: "natwiss-ueb-wellen-q5", question: "Wodurch entsteht eine Schwebung?", options: ["Durch die Überlagerung zweier Wellen exakt gleicher Frequenz", "Durch die Überlagerung zweier Wellen leicht unterschiedlicher Frequenz", "Durch die Bildung stehender Wellen an einem Rand", "Durch die Reflexion einer Welle an einem Hindernis"], correctIndex: 1, explanation: "Zwei Frequenzen f₁ und f₂, die nur leicht voneinander abweichen, überlagern sich zu einer Schwebung mit der Schwebungsfrequenz f_Schwebung = |f₁ − f₂| — ein langsames An- und Abschwellen der Gesamtamplitude. Bei exakt gleicher Frequenz entstünde dagegen keine Schwebung, sondern eine einfache Überlagerung mit fester Phasenbeziehung." },
      { id: "natwiss-ueb-wellen-q6", question: "Was ist ein Knoten bei einer stehenden Welle?", options: ["Der Punkt genau in der Mitte der Welle", "Ein Punkt permanenter Ruhe, an dem die Amplitude stets null ist", "Ein Punkt mit fester, aber von null verschiedener Phasenverschiebung", "Der Punkt mit der größtmöglichen Amplitude"], correctIndex: 1, explanation: "An einem Knoten überlagern sich die hin- und rücklaufende Welle stets destruktiv, sodass die Amplitude an diesem festen Ort dauerhaft null bleibt. Das Gegenteil sind Bäuche, an denen sich beide Wellen konstruktiv überlagern und die Amplitude maximal wird." },
      { id: "natwiss-ueb-wellen-q7", question: "Was beschreibt der Doppler-Effekt?", options: ["Die Reflexion von Wellen an Hindernissen", "Eine Änderung der Amplitude bei Bewegung der Quelle", "Änderung der wahrgenommenen Frequenz durch Relativbewegung", "Die Brechung von Schallwellen an Grenzflächen"], correctIndex: 2, explanation: "Nach f' = f·(c + v_E)/(c − v_S) ändert sich die wahrgenommene Frequenz, wenn sich Quelle und Empfänger relativ zueinander bewegen — bewegt sich die Quelle auf den Empfänger zu, wird die Frequenz höher wahrgenommen. Das betrifft die Frequenz, nicht die Amplitude, Reflexion oder Brechung der Welle." },
      { id: "natwiss-ueb-wellen-q8", question: "Wie groß ist die Liniendichte μ eines 8,4 m langen Seils mit Masse 120 g?", options: ["14,3 g/m", "0,143 g/m, um zwei Zehnerpotenzen zu klein", "1,43 g/m, um eine Zehnerpotenz zu klein", "143 g/m, um eine Zehnerpotenz zu groß"], correctIndex: 0, explanation: "Die Liniendichte ergibt sich aus μ = m/L = 0,120 kg / 8,40 m ≈ 0,01429 kg/m = 14,3 g/m — die korrekte Umrechnung zwischen kg/m und g/m ist dabei entscheidend, um nicht um Zehnerpotenzen daneben zu liegen." },
      { id: "natwiss-ueb-wellen-q9", question: "Zwei Wellen gleicher Amplitude y_m überlagern sich mit Δφ = 0. Welche Amplitude hat die resultierende Welle?", options: ["√2·y_m, wie bei Δφ = 90°", "Null, wie bei vollständig destruktiver Interferenz", "y_m, als hätte sich nichts verändert", "2·y_m"], correctIndex: 3, explanation: "Bei Δφ = 0 überlagern sich beide Wellen exakt phasengleich (konstruktive Interferenz), sodass sich ihre Amplituden direkt addieren: A_res = y_m + y_m = 2y_m. Bei Δφ = π (destruktiv) ergäbe sich dagegen A_res = 0." },
      { id: "natwiss-ueb-wellen-q10", question: "Welche Gleichung gilt für die Schallgeschwindigkeit in Luft?", options: ["c = f/λ, was eine völlig andere Beziehung wäre", "c = √(κp/ρ) = √(κRT/M)", "c = λ·f², mit falscher Potenz von f", "c = √(E/ρ), die Formel für Festkörper"], correctIndex: 1, explanation: "Die Schallgeschwindigkeit in Luft ergibt sich aus c = √(κp/ρ) = √(κRT/M) ≈ 343 m/s bei 20 °C, wobei κ der Adiabatenexponent ist. Die Beziehung c = λ·f gilt zwar allgemein für Wellen, beschreibt aber nicht, wie c aus den Materialeigenschaften des Mediums berechnet wird." }
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
      { id: "natwiss-ueb-wellen2-q1", question: "y(x,t) = A·sin(kx − ωt). In welche Richtung läuft diese Welle?", options: ["Sie steht vollständig still", "In negative x-Richtung", "In positive x-Richtung", "In positive y-Richtung, quer zur Ausbreitung"], correctIndex: 2, explanation: "Damit das Argument kx − ωt mit wachsendem t konstant bleibt (also ein bestimmter Wellenberg verfolgt wird), muss x mit der Zeit wachsen — die Welle läuft folglich in positive x-Richtung. Ein Pluszeichen im Argument (kx + ωt) würde stattdessen eine Welle in negativer Richtung beschreiben." },
      { id: "natwiss-ueb-wellen2-q2", question: "Wie viele Bäuche hat die 3. Oberschwingung (n = 3) auf einem beidseitig eingespannten Seil?", options: ["3", "Nur 1 Bauch", "4 Bäuche", "2 Bäuche"], correctIndex: 0, explanation: "Bei der n-ten Oberschwingung passen n halbe Wellenlängen auf das Seil, sodass sich n Bäuche zwischen den (n+1) Knoten (einschließlich der beiden festen Endpunkte) ausbilden — für n = 3 also genau 3 Bäuche und 4 Knoten." },
      { id: "natwiss-ueb-wellen2-q3", question: "Wie skaliert die Leistung P einer Seilwelle mit der Amplitude A?", options: ["P ist proportional zu √A", "P ist proportional zu A, also linear", "P ist umgekehrt proportional zu A", "P ist proportional zu A²"], correctIndex: 3, explanation: "Aus P = ½·μ·ω²·A²·c geht hervor, dass die transportierte Leistung quadratisch von der Amplitude abhängt: eine Verdopplung von A vervierfacht die Leistung, nicht nur verdoppelt sie sie." },
      { id: "natwiss-ueb-wellen2-q4", question: "Zwei Wellen gleicher Amplitude A überlagern sich mit Δφ = π (destruktiv). Wie groß ist die Amplitude der Resultante?", options: ["2A, wie bei konstruktiver Interferenz", "√2·A, wie bei einer 90°-Phasenverschiebung", "0", "A, als bliebe alles unverändert"], correctIndex: 2, explanation: "Bei einer Phasendifferenz von π (180°) schwingen beide Wellen exakt gegenphasig, sodass sie sich zu jedem Zeitpunkt vollständig gegenseitig auslöschen: A_res = A − A = 0. Bei Δφ = 0 hingegen würden sich die Amplituden zu 2A addieren." },
      { id: "natwiss-ueb-wellen2-q5", question: "Was ist die Wellenzahl k?", options: ["k = ω/c², mit fälschlich quadriertem c", "k = λ/c, eine andere physikalische Größe", "k = 2πf, das ist stattdessen die Kreisfrequenz ω", "k = 2π/λ"], correctIndex: 3, explanation: "Die Wellenzahl k = 2π/λ misst, wie viele Radiant Phase pro Längeneinheit durchlaufen werden, mit Einheit rad/m. Sie ist damit das räumliche Gegenstück zur Kreisfrequenz ω = 2πf, die die zeitliche Phasenänderung beschreibt." },
      { id: "natwiss-ueb-wellen2-q6", question: "Welche Schwebungsfrequenz ergibt sich aus zwei Tönen mit f₁ = 440 Hz und f₂ = 443 Hz?", options: ["441,5 Hz, der Mittelwert der beiden Frequenzen", "883 Hz, die Summe der beiden Frequenzen", "3 Hz", "1 Hz, deutlich zu niedrig"], correctIndex: 2, explanation: "Die Schwebungsfrequenz ist der Betrag der Differenz beider Frequenzen, f_s = |f₁ − f₂| = |440 − 443| = 3 Hz — nicht ihr Mittelwert oder ihre Summe, die stattdessen ganz andere akustische Größen beschreiben würden." },
      { id: "natwiss-ueb-wellen2-q7", question: "Wie viele Knoten hat die Grundschwingung (n = 1) eines beidseitig eingespannten Seils?", options: ["Gar keinen Knoten", "2 Knoten", "3 Knoten", "Nur 1 Knoten"], correctIndex: 1, explanation: "Bei der Grundschwingung (n = 1) liegen die einzigen Knoten an den beiden festen Enden des Seils, dazwischen bildet sich genau ein Bauch in der Mitte aus. Höhere Oberschwingungen fügen dagegen zusätzliche Knoten und Bäuche zwischen den Enden hinzu." },
      { id: "natwiss-ueb-wellen2-q8", question: "Was ist der Unterschied zwischen einer Transversal- und einer Longitudinalwelle?", options: ["Nur Longitudinalwellen können überhaupt Energie übertragen", "Transversal: Auslenkung senkrecht zur Ausbreitung; longitudinal: parallel dazu", "Beide Wellentypen sind physikalisch identisch", "Nur Transversalwellen benötigen kein Trägermedium"], correctIndex: 1, explanation: "Bei Transversalwellen (z. B. Seilwellen, Licht) steht die Schwingungsrichtung senkrecht zur Ausbreitungsrichtung, bei Longitudinalwellen (z. B. Schall, Druckwellen) verläuft sie parallel dazu. Beide Wellentypen übertragen Energie, und ob ein Medium benötigt wird, hängt von der jeweiligen physikalischen Welle ab, nicht vom Transversal-/Longitudinal-Unterschied selbst." },
      { id: "natwiss-ueb-wellen2-q9", question: "Eine stehende Welle hat Bauchpositionen bei x = 0,25 m, 0,75 m und 1,25 m. Wie groß ist λ?", options: ["1,0 m", "2,0 m, doppelt so groß wie tatsächlich", "0,25 m, deutlich zu klein", "0,5 m, nur der halbe tatsächliche Wert"], correctIndex: 0, explanation: "Benachbarte Bäuche einer stehenden Welle liegen stets im Abstand λ/2 auseinander; hier beträgt dieser Abstand 0,75 − 0,25 = 0,5 m, woraus λ = 2·0,5 m = 1,0 m folgt." },
      { id: "natwiss-ueb-wellen2-q10", question: "Wie ändert sich f_n der n-ten Oberschwingung eines Seils, wenn die Länge L halbiert wird?", options: ["f_n verdoppelt sich", "f_n bleibt trotz halbierter Länge unverändert", "f_n verdreifacht sich", "f_n halbiert sich entgegen der Erwartung"], correctIndex: 0, explanation: "Aus f_n = n·c/(2L) folgt bei L → L/2: f_n → n·c/(2·L/2) = n·c/L = 2·f_n — die Eigenfrequenzen verdoppeln sich, weil f_n umgekehrt proportional zur Seillänge ist. Ein kürzeres Seil schwingt also stets höherfrequent." }
    ]
  }
];
