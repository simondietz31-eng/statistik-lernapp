const NATWISS_CHAPTER13_TOPICS = [
  {
    id: "natwiss-wechselstrom",
    chapter: 13,
    order: 1,
    title: "Wechselstrom und Transformatoren",
    icon: "⚡",
    summary: "Wechselspannung, Effektivwerte, Impedanz von R, L, C und der Transformator.",
    explanation: [
      { type: "p", text: "Eine Wechselspannung ändert sich periodisch mit der Kreisfrequenz ω = 2πf:" },
      { type: "formula", tex: "u(t) = \\hat{U}\\sin(\\omega t), \\quad i(t) = \\hat{I}\\sin(\\omega t + \\varphi)" },
      { type: "p", text: "Der Effektivwert (RMS) ist die quadratisch gemittelte Amplitude:" },
      { type: "formula", tex: "U_{\\rm eff} = \\frac{\\hat{U}}{\\sqrt{2}}, \\quad I_{\\rm eff} = \\frac{\\hat{I}}{\\sqrt{2}}" },
      { type: "p", text: "Die Wirkleistung berechnet sich mit dem Leistungsfaktor cos φ:" },
      { type: "formula", tex: "P = U_{\\rm eff}\\,I_{\\rm eff}\\cos\\varphi" },
      { type: "p", text: "Impedanzen der Grundelemente:" },
      { type: "list", items: [
        "Widerstand R: Z_R = R, Phasenverschiebung φ = 0",
        "Spule L: Z_L = ωL, Strom eilt Spannung um 90° nach",
        "Kondensator C: Z_C = 1/(ωC), Strom eilt Spannung um 90° vor"
      ]},
      { type: "p", text: "Im Reihenschwingkreis R-L-C addieren sich die Impedanzen geometrisch:" },
      { type: "formula", tex: "Z = \\sqrt{R^2 + (Z_L - Z_C)^2} = \\sqrt{R^2 + \\left(\\omega L - \\frac{1}{\\omega C}\\right)^2}" },
      { type: "p", text: "Der Transformator überträgt Wechselspannung verlustarm durch magnetische Induktion. Bei idealer Kopplung gilt:" },
      { type: "formula", tex: "\\frac{U_1}{U_2} = \\frac{N_1}{N_2}, \\quad \\frac{I_1}{I_2} = \\frac{N_2}{N_1}" },
      { type: "p", text: "N₁, N₂ sind die Windungszahlen. Die Leistung bleibt erhalten: P₁ = U₁I₁ = U₂I₂ = P₂." }
    ],
    exercises: [
      {
        id: "natwiss-wechselstrom-e1",
        prompt: "Eine Wechselspannung hat die Amplitude Û = 325 V. Berechnen Sie den Effektivwert U_eff.",
        solution: "U_eff = Û/√2 = 325/√2 ≈ 230 V. Dies entspricht der europäischen Netzspannung."
      },
      {
        id: "natwiss-wechselstrom-e2",
        prompt: "Eine Spule mit L = 0,1 H liegt an einer Wechselspannung mit f = 50 Hz. Berechnen Sie die Impedanz Z_L.",
        solution: "ω = 2π·50 = 314 rad/s. Z_L = ωL = 314·0,1 = 31,4 Ω."
      },
      {
        id: "natwiss-wechselstrom-e3",
        prompt: "Ein Kondensator C = 100 μF liegt an f = 50 Hz. Berechnen Sie Z_C.",
        solution: "ω = 2π·50 ≈ 314 rad/s. Z_C = 1/(ωC) = 1/(314·100·10⁻⁶) ≈ 31,8 Ω."
      },
      {
        id: "natwiss-wechselstrom-e4",
        prompt: "Ein Transformator hat N₁ = 1000 und N₂ = 50 Windungen. Primärseitig liegt U₁ = 230 V an. Welche Spannung U₂ tritt sekundärseitig auf?",
        solution: "U₂ = U₁·(N₂/N₁) = 230·(50/1000) = 11,5 V."
      },
      {
        id: "natwiss-wechselstrom-e5",
        prompt: "In einem Reihenschwingkreis gilt R = 10 Ω, Z_L = 30 Ω, Z_C = 10 Ω. Berechnen Sie die Gesamtimpedanz Z.",
        solution: "Z = √(R² + (Z_L − Z_C)²) = √(10² + (30−10)²) = √(100 + 400) = √500 ≈ 22,4 Ω."
      }
    ],
    quiz: [
      { id: "natwiss-wechselstrom-q1", question: "Welchen Effektivwert hat eine Sinusspannung mit Amplitude Û = 100 V?", options: ["50 V", "141 V", "100 V", "70,7 V"], correctIndex: 3, explanation: "U_eff = Û/√2 = 100/√2 ≈ 70,7 V." },
      { id: "natwiss-wechselstrom-q2", question: "Wie verhält sich die Impedanz einer Spule mit der Frequenz?", options: ["Nimmt mit steigender Frequenz ab", "Ist nur bei f = 0 definiert", "Ist frequenzunabhängig", "Nimmt mit steigender Frequenz zu"], correctIndex: 3, explanation: "Z_L = ωL = 2πfL — linear mit der Frequenz." },
      { id: "natwiss-wechselstrom-q3", question: "Wie verhält sich die Impedanz eines Kondensators mit der Frequenz?", options: ["Ist frequenzunabhängig", "Nimmt mit steigender Frequenz zu", "Nimmt mit steigender Frequenz ab", "Ist unabhängig von C"], correctIndex: 2, explanation: "Z_C = 1/(ωC) — nimmt mit steigender Frequenz ab." },
      { id: "natwiss-wechselstrom-q4", question: "Ein Transformator erhöht die Spannung von 230 V auf 11500 V. Wie ist das Windungszahlverhältnis N₁/N₂?", options: ["1/50", "1/100", "100", "50"], correctIndex: 0, explanation: "N₁/N₂ = U₁/U₂ = 230/11500 = 1/50." },
      { id: "natwiss-wechselstrom-q5", question: "Was ist der Leistungsfaktor cos φ bei einem reinen Widerstand?", options: ["1", "0,5", "1/√2", "0"], correctIndex: 0, explanation: "Bei einem reinen Widerstand ist φ = 0, also cos φ = 1. Die gesamte Scheinleistung ist Wirkleistung." },
      { id: "natwiss-wechselstrom-q6", question: "Bei welcher Frequenz tritt Resonanz in einem R-L-C-Reihenschwingkreis auf?", options: ["f₀ = 1/(2πRC)", "f₀ = R/(2πL)", "f₀ = 1/(2π√(LC))", "f₀ = 2π√(LC)"], correctIndex: 2, explanation: "Resonanz tritt auf, wenn Z_L = Z_C, also ω₀L = 1/(ω₀C), woraus ω₀ = 1/√(LC) und f₀ = 1/(2π√(LC))." },
      { id: "natwiss-wechselstrom-q7", question: "Wie groß ist die Impedanz einer Spule bei Gleichstrom (f = 0)?", options: ["ωL", "0", "∞", "L"], correctIndex: 1, explanation: "Bei f = 0 gilt ω = 0, daher Z_L = ωL = 0. Eine Spule leitet Gleichstrom widerstandslos (ideale Spule)." },
      { id: "natwiss-wechselstrom-q8", question: "Welche Phasenbeziehung besteht an einer idealen Spule?", options: ["Verschiebung ist frequenzabhängig", "Strom eilt der Spannung um 90° vor", "Spannung und Strom sind in Phase", "Spannung eilt dem Strom um 90° vor"], correctIndex: 3, explanation: "An einer idealen Spule eilt die Spannung dem Strom um 90° vor (φ = +90°)." },
      { id: "natwiss-wechselstrom-q9", question: "Ein Transformator mit N₁/N₂ = 10 liefert sekundärseitig I₂ = 10 A. Welcher Strom fließt primärseitig (ideal)?", options: ["100 A", "1 A", "10 A", "0,1 A"], correctIndex: 1, explanation: "I₁/I₂ = N₂/N₁ = 1/10, daher I₁ = I₂/10 = 10/10 = 1 A." },
      { id: "natwiss-wechselstrom-q10", question: "Was beschreibt die Scheinleistung S?", options: ["S = P/cos φ", "S = U_eff·I_eff", "S = P·cos φ", "S = U·I·sin φ"], correctIndex: 1, explanation: "Die Scheinleistung S = U_eff·I_eff. Davon ist P = S·cos φ die Wirkleistung und Q = S·sin φ die Blindleistung." }
    ]
  },
  {
    id: "natwiss-em-schwingungen",
    chapter: 13,
    order: 2,
    title: "LC-Schwingkreis und Elektromagnetische Wellen",
    icon: "📡",
    summary: "Elektrische Schwingungen im LC-Kreis, elektromagnetisches Spektrum und Lichtwellen.",
    explanation: [
      { type: "p", text: "Im LC-Schwingkreis pendelt Energie zwischen elektrischem Feld (Kondensator) und magnetischem Feld (Spule). Die Eigenfrequenz ist:" },
      { type: "formula", tex: "\\omega_0 = \\frac{1}{\\sqrt{LC}}, \\quad f_0 = \\frac{1}{2\\pi\\sqrt{LC}}" },
      { type: "p", text: "Die Ladung schwingt analog zu einer mechanischen Schwingung: q(t) = Q₀·cos(ω₀t). Verluste durch den Ohmschen Widerstand R dämpfen die Schwingung." },
      { type: "p", text: "Elektrische Schwingungen senden elektromagnetische Wellen aus. EM-Wellen sind transversale Wellen gekoppelter E- und B-Felder. Im Vakuum gilt:" },
      { type: "formula", tex: "c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} \\approx 3 \\times 10^8 \\, {\\rm m/s}" },
      { type: "p", text: "Die Wellenlänge λ und Frequenz f hängen zusammen: c = λ·f." },
      { type: "p", text: "Das elektromagnetische Spektrum (nach zunehmender Frequenz):" },
      { type: "list", items: [
        "Radiowellen: f < 300 MHz, λ > 1 m",
        "Mikrowellen: 300 MHz – 300 GHz",
        "Infrarot: 300 GHz – 430 THz",
        "Sichtbares Licht: 430 – 750 THz (λ ≈ 400–700 nm)",
        "Ultraviolett, Röntgen, Gammastrahlung: f > 750 THz"
      ]},
      { type: "p", text: "Die Energie eines Photons (Lichtquant) ist proportional zur Frequenz:" },
      { type: "formula", tex: "E_{\\rm Photon} = h \\cdot f = \\frac{h \\cdot c}{\\lambda}, \\quad h = 6{,}626 \\times 10^{-34} \\, {\\rm J \\cdot s}" }
    ],
    exercises: [
      {
        id: "natwiss-em-e1",
        prompt: "Ein LC-Schwingkreis hat L = 1 mH und C = 10 nF. Berechnen Sie die Resonanzfrequenz f₀.",
        solution: "ω₀ = 1/√(LC) = 1/√(10⁻³·10⁻⁸) = 1/√(10⁻¹¹) ≈ 316 krad/s. f₀ = ω₀/(2π) ≈ 50,3 kHz."
      },
      {
        id: "natwiss-em-e2",
        prompt: "Sichtbares Licht hat λ = 500 nm. Berechnen Sie die Frequenz f.",
        solution: "f = c/λ = 3·10⁸/(500·10⁻⁹) = 6·10¹⁴ Hz = 600 THz."
      },
      {
        id: "natwiss-em-e3",
        prompt: "Berechnen Sie die Energie eines Photons mit f = 6·10¹⁴ Hz.",
        solution: "E = h·f = 6,626·10⁻³⁴·6·10¹⁴ ≈ 3,98·10⁻¹⁹ J ≈ 2,49 eV (1 eV = 1,6·10⁻¹⁹ J)."
      },
      {
        id: "natwiss-em-e4",
        prompt: "Welche Wellenlänge hat eine Radiostation bei f = 100 MHz?",
        solution: "λ = c/f = 3·10⁸/10⁸ = 3 m."
      },
      {
        id: "natwiss-em-e5",
        prompt: "Verdoppelt man die Kapazität C in einem LC-Schwingkreis (bei gleichem L), wie ändert sich f₀?",
        solution: "f₀ = 1/(2π√(LC)). Bei C → 2C wird √(LC) → √(2LC) = √2·√(LC). Daher f₀_neu = f₀/√2 ≈ 0,707·f₀. Die Frequenz sinkt auf etwa 70,7% des ursprünglichen Werts."
      }
    ],
    quiz: [
      { id: "natwiss-em-q1", question: "Was ist die Resonanzfrequenz eines LC-Schwingkreises?", options: ["f₀ = 1/(2π√(LC))", "f₀ = √(LC)/(2π)", "f₀ = 2π/(LC)", "f₀ = 2π√(LC)"], correctIndex: 0, explanation: "ω₀ = 1/√(LC), daher f₀ = ω₀/(2π) = 1/(2π√(LC))." },
      { id: "natwiss-em-q2", question: "Mit welcher Geschwindigkeit breiten sich EM-Wellen im Vakuum aus?", options: ["3·10¹⁰ m/s", "3·10⁶ m/s", "3·10⁸ m/s", "Hängt von der Frequenz ab"], correctIndex: 2, explanation: "c = 1/√(μ₀ε₀) ≈ 3·10⁸ m/s. Diese Konstante ist frequenzunabhängig (im Vakuum)." },
      { id: "natwiss-em-q3", question: "Welcher Bereich des EM-Spektrums hat die höchste Energie pro Photon?", options: ["Sichtbares Licht", "Radiowellen", "Gammastrahlung", "Infrarot"], correctIndex: 2, explanation: "E = hf. Gammastrahlung hat die höchste Frequenz und damit die höchste Photonenenergie." },
      { id: "natwiss-em-q4", question: "Eine EM-Welle hat λ = 1 cm. Zu welchem Spektralbereich gehört sie?", options: ["Mikrowellen", "Infrarot", "Röntgenstrahlung", "Sichtbares Licht"], correctIndex: 0, explanation: "λ = 1 cm → f = c/λ = 30 GHz. Dies liegt im Mikrowellenbereich (300 MHz – 300 GHz)." },
      { id: "natwiss-em-q5", question: "Woraus besteht eine elektromagnetische Welle?", options: ["Aus einem Teilchenstrom", "Nur aus einem E-Feld", "Nur aus einem B-Feld", "Aus gekoppelten, senkrecht zueinander stehenden E- und B-Feldern"], correctIndex: 3, explanation: "EM-Wellen sind transversal: E-Feld, B-Feld und Ausbreitungsrichtung stehen senkrecht aufeinander." },
      { id: "natwiss-em-q6", question: "Wie ist die Photonenenergie mit der Wellenlänge verknüpft?", options: ["E = λ/(hc)", "E = hc/λ", "E = hλ", "E = h/(cλ)"], correctIndex: 1, explanation: "E = hf = h·(c/λ) = hc/λ." },
      { id: "natwiss-em-q7", question: "Wo wird die Energie im LC-Schwingkreis gespeichert, wenn die Kondensatorspannung maximal ist?", options: ["Sie wird abgestrahlt", "Im Widerstand", "Im Magnetfeld der Spule", "Im elektrischen Feld des Kondensators"], correctIndex: 3, explanation: "Bei maximaler Spannung u_C = U₀ ist die Energie vollständig im E-Feld des Kondensators (W = ½CU₀²). Der Strom ist dabei null." },
      { id: "natwiss-em-q8", question: "Wie ändert sich λ von Licht, wenn es von Luft in Glas (n=1,5) übergeht?", options: ["Hängt von der Farbe ab", "λ bleibt gleich", "λ wird kleiner", "λ wird größer"], correctIndex: 2, explanation: "Im Medium gilt λ_med = λ₀/n. Bei n = 1,5 wird die Wellenlänge auf 2/3 ihres Vakuumwerts reduziert. Die Frequenz bleibt konstant." },
      { id: "natwiss-em-q9", question: "Welches Phänomen wird durch EM-Wellen nicht erklärt?", options: ["Radioempfang", "Elektronenmasse", "Lichtbeugung", "Wärmeübertragung durch Strahlung"], correctIndex: 1, explanation: "Die Elektronenmasse ist eine Eigenschaft von Materieteilchen und hat nichts mit EM-Wellen zu tun." },
      { id: "natwiss-em-q10", question: "Welches elektrische Bauelement bestimmt bei hohen Frequenzen hauptsächlich die Impedanz eines R-L-C-Kreises?", options: ["Widerstand R", "Spule L", "Alle gleich", "Kondensator C"], correctIndex: 1, explanation: "Bei hohen Frequenzen dominiert Z_L = ωL, da ωL ≫ 1/(ωC) und ωL ≫ R." }
    ]
  },
  {
    id: "natwiss-maxwell",
    chapter: 13,
    order: 3,
    title: "Maxwell-Gleichungen und elektromagnetisches Feld",
    icon: "🌊",
    summary: "Die vier Maxwell-Gleichungen als Grundlage des Elektromagnetismus und EM-Wellen.",
    explanation: [
      { type: "p", text: "Die vier Maxwell-Gleichungen beschreiben vollständig alle klassisch-elektromagnetischen Phänomene:" },
      { type: "list", items: [
        "1. Gaußsches Gesetz (E): div E = ρ/ε₀ — elektrische Ladungen sind Quellen des E-Feldes",
        "2. Gaußsches Gesetz (B): div B = 0 — es gibt keine magnetischen Monopole",
        "3. Faradaysches Induktionsgesetz: rot E = −∂B/∂t — zeitlich veränderliches B erzeugt ein E-Feld",
        "4. Ampère-Maxwell-Gesetz: rot B = μ₀J + μ₀ε₀·∂E/∂t — Ströme und zeitlich veränderliches E erzeugen B"
      ]},
      { type: "p", text: "Maxwell ergänzte das Ampèresche Gesetz um den Verschiebungsstrom μ₀ε₀·∂E/∂t. Dieser Term ist entscheidend: Auch ohne echten Leistungsstrom (z.B. im Kondensator) wird ein Magnetfeld erzeugt." },
      { type: "p", text: "Aus den Maxwell-Gleichungen folgt die elektromagnetische Wellengleichung:" },
      { type: "formula", tex: "\\frac{\\partial^2 E}{\\partial x^2} = \\mu_0 \\varepsilon_0 \\frac{\\partial^2 E}{\\partial t^2}" },
      { type: "p", text: "Die Lösung sind Wellen, die sich mit c = 1/√(μ₀ε₀) ausbreiten. Maxwell erkannte damit, dass Licht eine elektromagnetische Welle ist." },
      { type: "p", text: "In Materie wird c durch den Brechungsindex n = √(ε_r·μ_r) modifiziert: v = c/n." },
      { type: "p", text: "Der Poynting-Vektor S = (1/μ₀)·E × B beschreibt den Energiefluss einer EM-Welle (Intensität I = |S|)." },
      { type: "formula", tex: "I = \\frac{1}{2} c \\varepsilon_0 E_0^2 = \\frac{c}{2\\mu_0} B_0^2" }
    ],
    exercises: [
      {
        id: "natwiss-maxwell-e1",
        prompt: "Was besagt die Aussage 'div B = 0'? Was folgt daraus praktisch?",
        solution: "div B = 0 bedeutet, dass das Magnetfeld quellenfrei ist — es gibt keine magnetischen Monopole (kein 'Nordpol' allein ohne 'Südpol'). Alle magnetischen Feldlinien sind geschlossen."
      },
      {
        id: "natwiss-maxwell-e2",
        prompt: "Ein Kondensator wird mit I = 2 A aufgeladen. Der Plattenabstand sei d = 1 mm, Fläche A = 10 cm² = 10⁻³ m². Wie groß ist der Verschiebungsstrom?",
        solution: "Der Verschiebungsstrom ist gleich dem Ladestrom: I_D = ε₀·∂E/∂t·A = I = 2 A. Im eingeschwungenen Zustand ist der Verschiebungsstrom identisch mit dem Leiterstrom."
      },
      {
        id: "natwiss-maxwell-e3",
        prompt: "Eine EM-Welle hat eine Amplitude E₀ = 1000 V/m. Berechnen Sie die Intensität I.",
        solution: "I = ½·c·ε₀·E₀² = ½·3·10⁸·8,85·10⁻¹²·(1000)² ≈ ½·3·10⁸·8,85·10⁻¹²·10⁶ ≈ 1327 W/m²."
      },
      {
        id: "natwiss-maxwell-e4",
        prompt: "Warum kann sich Licht im Vakuum ausbreiten, obwohl kein Trägermedium vorhanden ist?",
        solution: "Licht ist eine elektromagnetische Welle: Ein zeitlich veränderliches E-Feld erzeugt ein B-Feld (Maxwell-Gleichung 4) und umgekehrt (Gleichung 3). Diese gegenseitige Erzeugung ermöglicht Ausbreitung ohne Trägermedium."
      },
      {
        id: "natwiss-maxwell-e5",
        prompt: "Welches der vier Maxwell-Gesetze ist für das Prinzip eines Generators (Dynamo) verantwortlich?",
        solution: "Das Faradaysche Induktionsgesetz (3. Maxwell-Gleichung): rot E = −∂B/∂t. Ein sich änderndes Magnetfeld induziert ein elektrisches Feld, das den Strom im Generator antreibt."
      }
    ],
    quiz: [
      { id: "natwiss-maxwell-q1", question: "Welche der Maxwell-Gleichungen beschreibt, dass magnetische Monopole nicht existieren?", options: ["div B = 0", "div E = ρ/ε₀", "rot E = −∂B/∂t", "rot B = μ₀J + μ₀ε₀∂E/∂t"], correctIndex: 0, explanation: "div B = 0 bedeutet, dass das B-Feld quellenfrei ist — es gibt keine isolierten Magnetpole." },
      { id: "natwiss-maxwell-q2", question: "Was ist der Verschiebungsstrom (Maxwell-Term)?", options: ["Der Strom im Kondensator-Dielektrikum", "μ₀ε₀·∂E/∂t", "ε₀·∂B/∂t", "Ein Leitungsstrom in Nichtleitern"], correctIndex: 1, explanation: "Maxwell ergänzte das Ampèregesetz um μ₀ε₀·∂E/∂t, den sog. Verschiebungsstrom." },
      { id: "natwiss-maxwell-q3", question: "Woraus folgt die Existenz elektromagnetischer Wellen aus den Maxwell-Gleichungen?", options: ["Aus dem Gaußschen Gesetz", "Aus dem Coulombgesetz", "Aus div B = 0 allein", "Aus der Kombination von Faraday- und Ampère-Maxwell-Gleichung"], correctIndex: 3, explanation: "Rot E = −∂B/∂t und rot B = μ₀ε₀∂E/∂t zusammen führen auf die Wellengleichung mit c = 1/√(μ₀ε₀)." },
      { id: "natwiss-maxwell-q4", question: "Was beschreibt der Poynting-Vektor S?", options: ["Die Polarisation der Welle", "Den Energiefluss (Intensität) einer EM-Welle", "Die Richtung des E-Feldes", "Die Amplitude der Welle"], correctIndex: 1, explanation: "S = (1/μ₀)·E × B hat die Einheit W/m² und gibt den Energiestrom einer EM-Welle an." },
      { id: "natwiss-maxwell-q5", question: "Welches Brechungsgesetz gilt an einer Grenzfläche (Snellius)?", options: ["n₁/sin θ₁ = n₂/sin θ₂", "n₁·cos θ₁ = n₂·cos θ₂", "n₁·sin θ₁ = n₂·sin θ₂", "n₁·λ₁ = n₂·λ₂"], correctIndex: 2, explanation: "Das Snelliussche Brechungsgesetz: n₁·sin θ₁ = n₂·sin θ₂, wobei θ die Winkel zur Flächennormalen sind." },
      { id: "natwiss-maxwell-q6", question: "Welches Phänomen erklärt die 3. Maxwell-Gleichung (rot E = −∂B/∂t)?", options: ["Magnetische Monopole", "Elektromagnetische Induktion", "Kondensatoraufladung", "Coulombkraft"], correctIndex: 1, explanation: "rot E = −∂B/∂t ist das Faradaysche Induktionsgesetz: ein zeitlich veränderliches Magnetfeld induziert ein elektrisches Feld." },
      { id: "natwiss-maxwell-q7", question: "Licht trifft auf Glas mit n = 1,5. Wie verändert sich die Lichtgeschwindigkeit?", options: ["Wird auf c·1,5 erhöht", "Wird 1,5-mal größer", "Wird auf c/1,5 = 2·10⁸ m/s reduziert", "Bleibt gleich"], correctIndex: 2, explanation: "v = c/n = 3·10⁸/1,5 = 2·10⁸ m/s. Die Frequenz bleibt konstant, λ wird kürzer." },
      { id: "natwiss-maxwell-q8", question: "Wer erkannte als Erster, dass Licht eine elektromagnetische Welle ist?", options: ["Maxwell", "Newton", "Faraday", "Hertz"], correctIndex: 0, explanation: "Maxwell berechnete 1865, dass c = 1/√(μ₀ε₀) ≈ 3·10⁸ m/s — identisch mit der Lichtgeschwindigkeit — und schloss daraus, dass Licht eine EM-Welle ist." },
      { id: "natwiss-maxwell-q9", question: "Wie skaliert die Intensität einer EM-Welle mit der Feldamplitude E₀?", options: ["I ∝ 1/E₀", "I ∝ E₀", "I ∝ √E₀", "I ∝ E₀²"], correctIndex: 3, explanation: "I = ½·c·ε₀·E₀², also quadratische Abhängigkeit von der Feldamplitude." },
      { id: "natwiss-maxwell-q10", question: "Was ist die physikalische Ursache für den Brechungsindex n > 1 in Materie?", options: ["Verstärkung des E-Feldes", "Magnetische Monopole in Materie", "Absorption und Reemission dauert länger", "Verlangsamung der EM-Welle durch Wechselwirkung mit dem Medium"], correctIndex: 3, explanation: "Im Medium wechselwirken EM-Wellen mit den Dipolen und werden dadurch effektiv verlangsamt: v = c/n mit n = √(ε_r·μ_r)." }
    ]
  }
];
