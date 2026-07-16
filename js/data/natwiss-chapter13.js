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
        solution: [{ type: "p", text: "U_eff = Û/√2 = 325/√2 ≈ 230 V. Dies entspricht der europäischen Netzspannung." }]
      },
      {
        id: "natwiss-wechselstrom-e2",
        prompt: "Eine Spule mit L = 0,1 H liegt an einer Wechselspannung mit f = 50 Hz. Berechnen Sie die Impedanz Z_L.",
        solution: [{ type: "p", text: "ω = 2π·50 = 314 rad/s. Z_L = ωL = 314·0,1 = 31,4 Ω." }]
      },
      {
        id: "natwiss-wechselstrom-e3",
        prompt: "Ein Kondensator C = 100 μF liegt an f = 50 Hz. Berechnen Sie Z_C.",
        solution: [{ type: "p", text: "ω = 2π·50 ≈ 314 rad/s. Z_C = 1/(ωC) = 1/(314·100·10⁻⁶) ≈ 31,8 Ω." }]
      },
      {
        id: "natwiss-wechselstrom-e4",
        prompt: "Ein Transformator hat N₁ = 1000 und N₂ = 50 Windungen. Primärseitig liegt U₁ = 230 V an. Welche Spannung U₂ tritt sekundärseitig auf?",
        solution: [{ type: "p", text: "U₂ = U₁·(N₂/N₁) = 230·(50/1000) = 11,5 V." }]
      },
      {
        id: "natwiss-wechselstrom-e5",
        prompt: "In einem Reihenschwingkreis gilt R = 10 Ω, Z_L = 30 Ω, Z_C = 10 Ω. Berechnen Sie die Gesamtimpedanz Z.",
        solution: [{ type: "p", text: "Z = √(R² + (Z_L − Z_C)²) = √(10² + (30−10)²) = √(100 + 400) = √500 ≈ 22,4 Ω." }]
      }
    ],
    quiz: [
      { id: "natwiss-wechselstrom-q1", question: "Welchen Effektivwert hat eine Sinusspannung mit Amplitude Û = 100 V?", options: ["50 V, als bloße Halbierung der Amplitude", "141 V, bei vertauschtem Wurzelfaktor", "100 V, ohne jede Umrechnung", "70,7 V"], correctIndex: 3, explanation: "Der Effektivwert ist die quadratisch gemittelte Amplitude, U_eff = Û/√2 = 100/√2 ≈ 70,7 V. Der Distraktor 141 V entsteht, wenn man stattdessen mit √2 multipliziert statt zu dividieren." },
      { id: "natwiss-wechselstrom-q2", question: "Wie verhält sich die Impedanz einer Spule mit der Frequenz?", options: ["Nimmt mit steigender Frequenz ab", "Ist nur bei der Frequenz f = 0 definiert", "Ist unabhängig von der Frequenz", "Nimmt mit steigender Frequenz zu"], correctIndex: 3, explanation: "Da Z_L = ωL = 2πfL linear mit der Frequenz wächst, steigt der Widerstand einer Spule bei höheren Frequenzen — eine Spule sperrt hochfrequente Signale stärker als niederfrequente. Das Gegenteil (Abnahme mit der Frequenz) beschreibt stattdessen einen Kondensator." },
      { id: "natwiss-wechselstrom-q3", question: "Wie verhält sich die Impedanz eines Kondensators mit der Frequenz?", options: ["Ist unabhängig von der Frequenz", "Nimmt mit steigender Frequenz zu", "Nimmt mit steigender Frequenz ab", "Ist unabhängig von der Kapazität C"], correctIndex: 2, explanation: "Da Z_C = 1/(ωC) umgekehrt proportional zur Frequenz ist, sinkt der Widerstand eines Kondensators mit steigender Frequenz — bei Gleichstrom (f = 0) sperrt er dagegen vollständig. Das ist das genaue Gegenteil des Verhaltens einer Spule." },
      { id: "natwiss-wechselstrom-q4", question: "Ein Transformator erhöht die Spannung von 230 V auf 11500 V. Wie ist das Windungszahlverhältnis N₁/N₂?", options: ["1/50", "1/100, bei falscher Rechnung", "100, als Kehrwert vertauscht", "50, ohne Kehrwertbildung"], correctIndex: 0, explanation: "Da N₁/N₂ = U₁/U₂ gilt, folgt N₁/N₂ = 230/11500 = 1/50 — die Primärseite hat 50-mal weniger Windungen als die Sekundärseite, passend zur Spannungserhöhung. Ein Wert größer als 1 würde fälschlich eine Spannungsreduktion implizieren." },
      { id: "natwiss-wechselstrom-q5", question: "Was ist der Leistungsfaktor cos φ bei einem reinen Widerstand?", options: ["1", "0,5, wie bei einer Phasenverschiebung von 60°", "1/√2, wie bei 45° Phasenverschiebung", "0, wie bei reiner Blindleistung"], correctIndex: 0, explanation: "An einem reinen Widerstand sind Strom und Spannung stets phasengleich (φ = 0), sodass cos φ = 1 gilt und die gesamte Scheinleistung als Wirkleistung genutzt wird. Bei Spulen oder Kondensatoren tritt dagegen eine Phasenverschiebung auf, die cos φ unter 1 senkt." },
      { id: "natwiss-wechselstrom-q6", question: "Bei welcher Frequenz tritt Resonanz in einem R-L-C-Reihenschwingkreis auf?", options: ["f₀ = 1/(2πRC), mit R statt L im Nenner", "f₀ = R/(2πL), als falsche Kombination", "f₀ = 1/(2π√(LC))", "f₀ = 2π√(LC), mit vertauschtem Kehrwert"], correctIndex: 2, explanation: "Resonanz liegt vor, wenn sich die Impedanzen von Spule und Kondensator gerade aufheben, Z_L = Z_C, also ω₀L = 1/(ω₀C). Daraus folgt ω₀ = 1/√(LC) und somit f₀ = 1/(2π√(LC)) — der Widerstand R geht in diese Resonanzbedingung gar nicht ein." },
      { id: "natwiss-wechselstrom-q7", question: "Wie groß ist die Impedanz einer idealen Spule bei Gleichstrom (f = 0)?", options: ["Der Wert ωL, unabhängig von f", "0", "Unendlich groß, wie bei einem Kondensator", "Gleich der Induktivität L selbst"], correctIndex: 1, explanation: "Bei f = 0 ist auch ω = 2πf = 0, wodurch Z_L = ωL ebenfalls null wird — eine ideale Spule leitet Gleichstrom also völlig widerstandslos. Ein unendlich großer Widerstand bei Gleichstrom würde stattdessen das Verhalten eines Kondensators beschreiben." },
      { id: "natwiss-wechselstrom-q8", question: "Welche Phasenbeziehung besteht an einer idealen Spule zwischen Strom und Spannung?", options: ["Die Verschiebung hängt von der Frequenz ab", "Der Strom eilt der Spannung um 90° voraus", "Spannung und Strom sind exakt in Phase", "Die Spannung eilt dem Strom um 90° voraus"], correctIndex: 3, explanation: "An einer idealen Spule eilt die Spannung dem Strom stets um 90° voraus (φ = +90°), unabhängig von der Frequenz — nur die Impedanz Z_L = ωL selbst ist frequenzabhängig, nicht der Phasenwinkel. Beim Kondensator ist das Verhältnis genau umgekehrt: dort eilt der Strom der Spannung voraus." },
      { id: "natwiss-wechselstrom-q9", question: "Ein Transformator mit N₁/N₂ = 10 liefert sekundärseitig I₂ = 10 A. Welcher Strom fließt primärseitig (ideal)?", options: ["100 A, bei falscher Multiplikation", "1 A", "10 A, ohne Berücksichtigung der Übersetzung", "0,1 A, bei doppelt angewendetem Kehrwert"], correctIndex: 1, explanation: "Da I₁/I₂ = N₂/N₁ = 1/10 gilt (das Stromverhältnis ist umgekehrt zum Windungsverhältnis), folgt I₁ = I₂/10 = 10 A/10 = 1 A. Diese Umkehrung stellt sicher, dass die übertragene Leistung P = U·I auf beiden Seiten gleich bleibt." },
      { id: "natwiss-wechselstrom-q10", question: "Was beschreibt die Scheinleistung S in einem Wechselstromkreis?", options: ["S = P/cos φ, als Umkehrung der Wirkleistung", "S = U_eff·I_eff", "S = P·cos φ, was stattdessen die Wirkleistung wäre", "S = U·I·sin φ, was der Blindleistung entspricht"], correctIndex: 1, explanation: "Die Scheinleistung ist definiert als S = U_eff·I_eff — das Produkt der Effektivwerte, unabhängig vom Phasenwinkel. Erst über den Leistungsfaktor cos φ teilt sich S in die nutzbare Wirkleistung P = S·cos φ und die Blindleistung Q = S·sin φ auf." }
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
        solution: [{ type: "p", text: "ω₀ = 1/√(LC) = 1/√(10⁻³·10⁻⁸) = 1/√(10⁻¹¹) ≈ 316 krad/s. f₀ = ω₀/(2π) ≈ 50,3 kHz." }]
      },
      {
        id: "natwiss-em-e2",
        prompt: "Sichtbares Licht hat λ = 500 nm. Berechnen Sie die Frequenz f.",
        solution: [{ type: "p", text: "f = c/λ = 3·10⁸/(500·10⁻⁹) = 6·10¹⁴ Hz = 600 THz." }]
      },
      {
        id: "natwiss-em-e3",
        prompt: "Berechnen Sie die Energie eines Photons mit f = 6·10¹⁴ Hz.",
        solution: [{ type: "p", text: "E = h·f = 6,626·10⁻³⁴·6·10¹⁴ ≈ 3,98·10⁻¹⁹ J ≈ 2,49 eV (1 eV = 1,6·10⁻¹⁹ J)." }]
      },
      {
        id: "natwiss-em-e4",
        prompt: "Welche Wellenlänge hat eine Radiostation bei f = 100 MHz?",
        solution: [{ type: "p", text: "λ = c/f = 3·10⁸/10⁸ = 3 m." }]
      },
      {
        id: "natwiss-em-e5",
        prompt: "Verdoppelt man die Kapazität C in einem LC-Schwingkreis (bei gleichem L), wie ändert sich f₀?",
        solution: [{ type: "p", text: "f₀ = 1/(2π√(LC)). Bei C → 2C wird √(LC) → √(2LC) = √2·√(LC). Daher f₀_neu = f₀/√2 ≈ 0,707·f₀. Die Frequenz sinkt auf etwa 70,7% des ursprünglichen Werts." }]
      }
    ],
    quiz: [
      { id: "natwiss-em-q1", question: "Was ist die Resonanzfrequenz eines LC-Schwingkreises?", options: ["f₀ = 1/(2π√(LC))", "f₀ = √(LC)/(2π), mit vertauschtem Kehrwert", "f₀ = 2π/(LC), ohne Wurzel", "f₀ = 2π√(LC), ohne Kehrwertbildung"], correctIndex: 0, explanation: "Aus ω₀ = 1/√(LC) folgt direkt f₀ = ω₀/(2π) = 1/(2π√(LC)) — analog zur mechanischen Schwingung, bei der Masse und Federkonstante die Frequenz bestimmen, übernehmen hier L und C diese Rolle." },
      { id: "natwiss-em-q2", question: "Mit welcher Geschwindigkeit breiten sich EM-Wellen im Vakuum aus?", options: ["3·10¹⁰ m/s, eine Zehnerpotenz zu groß", "3·10⁶ m/s, eine Zehnerpotenz zu klein", "3·10⁸ m/s", "Es hängt von der Frequenz der Welle ab"], correctIndex: 2, explanation: "Nach c = 1/√(μ₀ε₀) ≈ 3·10⁸ m/s hängt die Ausbreitungsgeschwindigkeit im Vakuum nur von den beiden Feldkonstanten ab, nicht von der Frequenz — alle EM-Wellen, von Radiowellen bis Gammastrahlung, sind im Vakuum gleich schnell." },
      { id: "natwiss-em-q3", question: "Welcher Bereich des EM-Spektrums hat die höchste Energie pro Photon?", options: ["Sichtbares Licht", "Radiowellen mit sehr niedriger Frequenz", "Gammastrahlung", "Infrarotstrahlung"], correctIndex: 2, explanation: "Da E = h·f gilt, besitzt Gammastrahlung als Bereich mit der höchsten Frequenz im elektromagnetischen Spektrum auch die höchste Energie pro Photon — deutlich mehr als sichtbares Licht, Infrarot oder Radiowellen." },
      { id: "natwiss-em-q4", question: "Eine EM-Welle hat λ = 1 cm. Zu welchem Spektralbereich gehört sie?", options: ["Mikrowellen", "Infrarotstrahlung", "Röntgenstrahlung", "Sichtbares Licht"], correctIndex: 0, explanation: "Aus f = c/λ = 3×10⁸/0,01 = 30 GHz ergibt sich eine Frequenz, die genau in den Mikrowellenbereich (300 MHz – 300 GHz) aus dem Lehrtext fällt — deutlich niedriger als Infrarot, sichtbares Licht oder Röntgenstrahlung." },
      { id: "natwiss-em-q5", question: "Woraus besteht eine elektromagnetische Welle?", options: ["Aus einem gerichteten Teilchenstrom", "Ausschließlich aus einem oszillierenden E-Feld", "Ausschließlich aus einem oszillierenden B-Feld", "Aus gekoppelten, senkrecht zueinander stehenden E- und B-Feldern"], correctIndex: 3, explanation: "EM-Wellen sind transversale Wellen, bei denen E-Feld, B-Feld und Ausbreitungsrichtung paarweise senkrecht zueinander stehen — keines der beiden Felder existiert unabhängig vom anderen, und es handelt sich nicht um einen Teilchenstrom." },
      { id: "natwiss-em-q6", question: "Wie ist die Photonenenergie mit der Wellenlänge verknüpft?", options: ["E = λ/(hc), mit vertauschtem Zähler und Nenner", "E = hc/λ", "E = hλ, ohne Lichtgeschwindigkeit", "E = h/(cλ), mit falscher Kombination"], correctIndex: 1, explanation: "Aus E = h·f und der Wellenbeziehung f = c/λ folgt direkt E = h·c/λ — kurze Wellenlängen entsprechen also hoher Photonenenergie, lange Wellenlängen niedriger Energie." },
      { id: "natwiss-em-q7", question: "Wo wird die Energie im LC-Schwingkreis gespeichert, wenn die Kondensatorspannung maximal ist?", options: ["Sie wird in diesem Moment vollständig abgestrahlt", "Im ohmschen Widerstand des Kreises", "Im Magnetfeld der Spule", "Im elektrischen Feld des Kondensators"], correctIndex: 3, explanation: "Bei maximaler Kondensatorspannung u_C = U₀ ist der Strom in diesem Moment null, sodass die gesamte Schwingungsenergie im elektrischen Feld des Kondensators steckt (W = ½CU₀²) — im Gegenzug ist die Energie maximal im Magnetfeld gespeichert, wenn der Strom maximal ist." },
      { id: "natwiss-em-q8", question: "Wie ändert sich die Wellenlänge λ von Licht, wenn es von Luft in Glas (n=1,5) übergeht?", options: ["Es hängt ausschließlich von der Lichtfarbe ab", "λ bleibt beim Übergang unverändert", "λ wird kleiner", "λ wird größer"], correctIndex: 2, explanation: "Im Medium gilt λ_med = λ₀/n, sodass die Wellenlänge bei n = 1,5 auf zwei Drittel ihres Vakuumwerts schrumpft, während die Frequenz unverändert bleibt. Das unterscheidet sich von der Lichtgeschwindigkeit, die ebenfalls sinkt, aber über v = c/n." },
      { id: "natwiss-em-q9", question: "Welches Phänomen wird durch die elektromagnetische Wellentheorie NICHT erklärt?", options: ["Radioempfang über Antennen", "Die Ruhemasse eines Elektrons", "Beugung von Lichtwellen", "Wärmeübertragung durch Strahlung"], correctIndex: 1, explanation: "Die Elektronenmasse ist eine Eigenschaft von Materieteilchen und wird durch die Teilchenphysik, nicht durch die Wellentheorie des Elektromagnetismus beschrieben. Radioempfang, Lichtbeugung und Strahlungswärme sind dagegen allesamt EM-Wellenphänomene." },
      { id: "natwiss-em-q10", question: "Welches elektrische Bauelement bestimmt bei hohen Frequenzen hauptsächlich die Impedanz eines R-L-C-Kreises?", options: ["Der ohmsche Widerstand R", "Die Spule L", "Alle drei Bauelemente gleichermaßen", "Der Kondensator C"], correctIndex: 1, explanation: "Bei hohen Frequenzen wächst Z_L = ωL stark an, während Z_C = 1/(ωC) gegen null geht, sodass ωL sowohl R als auch 1/(ωC) deutlich übersteigt — die Spule dominiert dann die Gesamtimpedanz des Kreises." }
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
        solution: [{ type: "p", text: "div B = 0 bedeutet, dass das Magnetfeld quellenfrei ist — es gibt keine magnetischen Monopole (kein 'Nordpol' allein ohne 'Südpol'). Alle magnetischen Feldlinien sind geschlossen." }]
      },
      {
        id: "natwiss-maxwell-e2",
        prompt: "Ein Kondensator wird mit I = 2 A aufgeladen. Der Plattenabstand sei d = 1 mm, Fläche A = 10 cm² = 10⁻³ m². Wie groß ist der Verschiebungsstrom?",
        solution: [{ type: "p", text: "Der Verschiebungsstrom ist gleich dem Ladestrom: I_D = ε₀·∂E/∂t·A = I = 2 A. Im eingeschwungenen Zustand ist der Verschiebungsstrom identisch mit dem Leiterstrom." }]
      },
      {
        id: "natwiss-maxwell-e3",
        prompt: "Eine EM-Welle hat eine Amplitude E₀ = 1000 V/m. Berechnen Sie die Intensität I.",
        solution: [{ type: "p", text: "I = ½·c·ε₀·E₀² = ½·3·10⁸·8,85·10⁻¹²·(1000)² ≈ ½·3·10⁸·8,85·10⁻¹²·10⁶ ≈ 1327 W/m²." }]
      },
      {
        id: "natwiss-maxwell-e4",
        prompt: "Warum kann sich Licht im Vakuum ausbreiten, obwohl kein Trägermedium vorhanden ist?",
        solution: [{ type: "p", text: "Licht ist eine elektromagnetische Welle: Ein zeitlich veränderliches E-Feld erzeugt ein B-Feld (Maxwell-Gleichung 4) und umgekehrt (Gleichung 3). Diese gegenseitige Erzeugung ermöglicht Ausbreitung ohne Trägermedium." }]
      },
      {
        id: "natwiss-maxwell-e5",
        prompt: "Welches der vier Maxwell-Gesetze ist für das Prinzip eines Generators (Dynamo) verantwortlich?",
        solution: [{ type: "p", text: "Das Faradaysche Induktionsgesetz (3. Maxwell-Gleichung): rot E = −∂B/∂t. Ein sich änderndes Magnetfeld induziert ein elektrisches Feld, das den Strom im Generator antreibt." }]
      }
    ],
    quiz: [
      { id: "natwiss-maxwell-q1", question: "Welche der Maxwell-Gleichungen beschreibt, dass magnetische Monopole nicht existieren?", options: ["div B = 0", "div E = ρ/ε₀, das Gaußsche Gesetz für E", "rot E = −∂B/∂t, das Induktionsgesetz", "rot B = μ₀J + μ₀ε₀∂E/∂t, das Ampère-Maxwell-Gesetz"], correctIndex: 0, explanation: "div B = 0 besagt, dass das Magnetfeld quellenfrei ist — anders als beim elektrischen Feld (div E = ρ/ε₀, das an Ladungen als Quellen gebunden ist) gibt es keine isolierten Magnetpole, an denen Feldlinien beginnen oder enden könnten." },
      { id: "natwiss-maxwell-q2", question: "Was ist der Verschiebungsstrom, den Maxwell zum Ampèreschen Gesetz ergänzte?", options: ["Der reale Leitungsstrom im Kondensator-Dielektrikum", "Der Term μ₀ε₀·∂E/∂t", "Der Term ε₀·∂B/∂t, mit vertauschtem Feld", "Ein gewöhnlicher Leitungsstrom in Nichtleitern"], correctIndex: 1, explanation: "Maxwell erweiterte das Ampèresche Gesetz um μ₀ε₀·∂E/∂t, weil auch ein sich zeitlich änderndes elektrisches Feld — etwa zwischen Kondensatorplatten ohne echten Leitungsstrom — ein Magnetfeld erzeugt. Dieser Verschiebungsstrom war der entscheidende fehlende Baustein für konsistente elektromagnetische Wellen." },
      { id: "natwiss-maxwell-q3", question: "Woraus folgt die Existenz elektromagnetischer Wellen aus den Maxwell-Gleichungen?", options: ["Allein aus dem Gaußschen Gesetz für elektrische Felder", "Allein aus dem Coulombgesetz für Punktladungen", "Allein aus div B = 0, ohne weitere Gleichungen", "Aus der Kombination von Faraday- und Ampère-Maxwell-Gesetz"], correctIndex: 3, explanation: "Erst die Kombination von rot E = −∂B/∂t (Faraday) und rot B = μ₀ε₀∂E/∂t (Ampère-Maxwell) führt auf die Wellengleichung mit Ausbreitungsgeschwindigkeit c = 1/√(μ₀ε₀) — jede Gleichung allein beschreibt nur ein statisches oder einseitiges Feldverhalten." },
      { id: "natwiss-maxwell-q4", question: "Was beschreibt der Poynting-Vektor S einer elektromagnetischen Welle?", options: ["Die Polarisationsrichtung der Welle", "Den Energiefluss (die Intensität) der Welle", "Ausschließlich die Richtung des E-Feldes", "Die maximale Amplitude der Welle"], correctIndex: 1, explanation: "S = (1/μ₀)·E×B hat die Einheit W/m² und gibt an, wie viel Energie pro Zeit und Fläche durch die Welle transportiert wird — das ist etwas anderes als Polarisation, reine Feldrichtung oder Amplitude, auch wenn diese in die Berechnung von S eingehen." },
      { id: "natwiss-maxwell-q5", question: "Welches Brechungsgesetz gilt an einer Grenzfläche zwischen zwei Medien (Snellius)?", options: ["n₁/sin θ₁ = n₂/sin θ₂, als Kehrwert von n", "n₁·cos θ₁ = n₂·cos θ₂, mit Kosinus statt Sinus", "n₁·sin θ₁ = n₂·sin θ₂", "n₁·λ₁ = n₂·λ₂, mit Wellenlänge statt Winkel"], correctIndex: 2, explanation: "Das Snelliussche Brechungsgesetz n₁·sin θ₁ = n₂·sin θ₂ verknüpft Brechungsindizes und Einfallswinkel zur Flächennormalen — es folgt daraus, dass die Wellenfronten beim Übergang zwischen Medien mit unterschiedlicher Geschwindigkeit ihre Ausbreitungsrichtung ändern." },
      { id: "natwiss-maxwell-q6", question: "Welches Phänomen erklärt die 3. Maxwell-Gleichung (rot E = −∂B/∂t)?", options: ["Die Nichtexistenz magnetischer Monopole", "Elektromagnetische Induktion", "Das Aufladen eines Kondensators", "Die elektrostatische Coulombkraft"], correctIndex: 1, explanation: "rot E = −∂B/∂t ist das Faradaysche Induktionsgesetz in differentieller Form: Ein zeitlich veränderliches Magnetfeld erzeugt ein elektrisches Feld — die Grundlage jedes Generators. Monopole, Kondensatoraufladung und Coulombkraft werden dagegen von anderen Maxwell-Gleichungen beschrieben." },
      { id: "natwiss-maxwell-q7", question: "Licht trifft auf Glas mit n = 1,5. Wie verändert sich die Lichtgeschwindigkeit?", options: ["Sie wird fälschlich auf c·1,5 erhöht", "Sie wird 1,5-mal größer als im Vakuum", "Sie wird auf c/1,5 = 2·10⁸ m/s reduziert", "Sie bleibt trotz des Mediumwechsels unverändert"], correctIndex: 2, explanation: "Aus v = c/n folgt v = 3·10⁸/1,5 = 2·10⁸ m/s — Licht wird im Medium langsamer, nicht schneller. Die Frequenz bleibt dabei konstant, während sich die Wellenlänge entsprechend verkürzt." },
      { id: "natwiss-maxwell-q8", question: "Wer erkannte als Erster, dass Licht eine elektromagnetische Welle ist?", options: ["Maxwell", "Newton, durch seine Optik-Experimente", "Faraday, durch seine Induktionsversuche", "Hertz, durch experimentellen Nachweis"], correctIndex: 0, explanation: "Maxwell berechnete 1865 aus seinen Feldgleichungen c = 1/√(μ₀ε₀) ≈ 3·10⁸ m/s — identisch mit der bekannten Lichtgeschwindigkeit — und schloss daraus theoretisch, dass Licht eine elektromagnetische Welle sein muss. Hertz wies elektromagnetische Wellen später experimentell nach, bestätigte damit aber Maxwells frühere Vorhersage." },
      { id: "natwiss-maxwell-q9", question: "Wie skaliert die Intensität einer EM-Welle mit der elektrischen Feldamplitude E₀?", options: ["I ist umgekehrt proportional zu E₀", "I ist direkt proportional zu E₀", "I ist proportional zur Quadratwurzel von E₀", "I ist proportional zu E₀²"], correctIndex: 3, explanation: "Nach I = ½·c·ε₀·E₀² hängt die Intensität quadratisch von der Feldamplitude ab — eine Verdopplung von E₀ vervierfacht also die transportierte Energie, nicht nur verdoppelt sie." },
      { id: "natwiss-maxwell-q10", question: "Was ist die physikalische Ursache für einen Brechungsindex n > 1 in Materie?", options: ["Eine Verstärkung des elektrischen Feldes im Medium", "Das Vorhandensein magnetischer Monopole in der Materie", "Eine grundsätzlich verlängerte Absorptions- und Reemissionszeit", "Verlangsamung der EM-Welle durch Wechselwirkung mit dem Medium"], correctIndex: 3, explanation: "Im Medium wechselwirkt die EM-Welle fortlaufend mit den elektrischen Dipolen der Atome und wird dadurch effektiv verlangsamt: v = c/n mit n = √(ε_r·μ_r). Magnetische Monopole spielen dabei keine Rolle, und das Feld wird nicht verstärkt, sondern die Ausbreitung wird gebremst." }
    ]
  }
];
