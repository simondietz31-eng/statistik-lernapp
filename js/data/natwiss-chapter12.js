const NATWISS_CHAPTER12_TOPICS = [
  {
    id: "natwiss-lorentzkraft",
    chapter: 12,
    order: 1,
    title: "Magnetfelder und Lorentzkraft",
    icon: "🧲",
    summary: "Bewegte Ladungen und Ströme erzeugen Magnetfelder; die Lorentzkraft wirkt auf bewegte Ladungen im Magnetfeld und ist Grundlage elektrischer Motoren.",
    explanation: [
      { type: "p", text: "Das Magnetfeld wird durch die magnetische Flussdichte B (oft kurz 'Magnetfeld' genannt) beschrieben; Einheit: Tesla (T). Das Erdmagnetfeld hat ca. 5 × 10⁻⁵ T, ein Kernspintomograph 1,5–7 T." },
      { type: "p", text: "Eine bewegte elektrische Ladung q im Magnetfeld B erfährt die Lorentzkraft. Für eine Ladung mit Geschwindigkeit v:" },
      { type: "formula", tex: "\\vec{F} = q \\cdot (\\vec{v} \\times \\vec{B}), \\quad |F| = q \\cdot v \\cdot B \\cdot \\sin\\theta" },
      { type: "list", items: [
        "Richtung: Rechte-Hand-Regel (für positive Ladungen: Daumen = v, Zeigefinger = B, Mittelfinger = F)",
        "Negative Ladungen: Kraft in entgegengesetzte Richtung",
        "Lorentzkraft leistet keine Arbeit (F ⊥ v), ändert nur die Richtung",
        "Kreisbewegung: r = m·v / (|q|·B) (Zyklotronradius)",
        "Kraft auf stromdurchflossenen Leiter: F = I·L·B·sin(θ)"
      ]},
      { type: "formula", tex: "r = \\frac{m \\cdot v}{|q| \\cdot B} \\quad (\\text{Zyklotronradius})" }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Elektron (m = 9,1 × 10⁻³¹ kg, q = −1,6 × 10⁻¹⁹ C) bewegt sich mit v = 10⁶ m/s senkrecht zu B = 0,5 T. Berechnen Sie den Betrag der Lorentzkraft und den Zyklotronradius.",
        solution: [
          { type: "formula", tex: "F = |q| \\cdot v \\cdot B = 1{,}6 \\times 10^{-19} \\cdot 10^6 \\cdot 0{,}5 = 8 \\times 10^{-14} \\; \\text{N}" },
          { type: "formula", tex: "r = \\frac{m \\cdot v}{|q| \\cdot B} = \\frac{9{,}1 \\times 10^{-31} \\cdot 10^6}{1{,}6 \\times 10^{-19} \\cdot 0{,}5} = \\frac{9{,}1 \\times 10^{-25}}{8 \\times 10^{-20}} \\approx 1{,}14 \\times 10^{-5} \\; \\text{m}" }
        ]
      },
      {
        id: "ex2",
        prompt: "Ein gerader Leiter der Länge L = 0,5 m trägt den Strom I = 10 A senkrecht zu einem Magnetfeld B = 0,2 T. Berechnen Sie die Kraft auf den Leiter.",
        solution: [
          { type: "formula", tex: "F = I \\cdot L \\cdot B \\cdot \\sin(90°) = 10 \\cdot 0{,}5 \\cdot 0{,}2 \\cdot 1 = 1 \\; \\text{N}" }
        ]
      },
      {
        id: "ex3",
        prompt: "Ein Proton (m = 1,67 × 10⁻²⁷ kg, q = 1,6 × 10⁻¹⁹ C) bewegt sich in einem Zyklotron mit B = 1 T und v = 10⁷ m/s. Bestimmen Sie Zyklotronradius und Umlauffrequenz.",
        solution: [
          { type: "formula", tex: "r = \\frac{m \\cdot v}{q \\cdot B} = \\frac{1{,}67 \\times 10^{-27} \\cdot 10^7}{1{,}6 \\times 10^{-19} \\cdot 1} \\approx 0{,}104 \\; \\text{m}" },
          { type: "formula", tex: "f = \\frac{v}{2\\pi r} = \\frac{10^7}{2\\pi \\cdot 0{,}104} \\approx 1{,}53 \\times 10^7 \\; \\text{Hz} = 15{,}3 \\; \\text{MHz}" }
        ]
      },
      {
        id: "ex4",
        prompt: "Eine rechteckige Leiterschleife (5 cm × 8 cm, I = 2 A) befindet sich in B = 0,3 T (parallel zur Ebene der Schleife). Berechnen Sie das maximale Drehmoment.",
        solution: [
          { type: "p", text: "Das magnetische Dipolmoment: μ = I·A = 2 · (0,05 · 0,08) = 2 · 0,004 = 0,008 A·m²." },
          { type: "formula", tex: "M_{\\max} = \\mu \\cdot B = 0{,}008 \\cdot 0{,}3 = 2{,}4 \\times 10^{-3} \\; \\text{N·m}" },
          { type: "p", text: "Dieses Drehmoment ist das Grundprinzip des Elektromotors." }
        ]
      },
      {
        id: "ex5",
        prompt: "Warum kreisen geladene Teilchen im Erdmagnetfeld an den Polen spiralförmig herunter und erzeugen Polarlichter?",
        solution: [
          { type: "p", text: "An den Polen verlaufen die Magnetfeldlinien senkrecht zur Erdoberfläche. Kosmische Teilchen (Elektronen, Protonen) haben sowohl eine Komponente v_⊥ (senkrecht zu B) als auch v_∥ (parallel zu B)." },
          { type: "p", text: "Die Lorentzkraft wirkt nur auf v_⊥ und zwingt das Teilchen zur Kreisbewegung; v_∥ bleibt unverändert. Die Überlagerung ergibt eine Spiralbahn entlang der Magnetfeldlinie. Die Teilchen kollidieren dann mit Luftmolekülen, regen diese an und erzeugen so die Polarlicht-Emissionen." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was ist die Lorentzkraft?", options: ["Die Kraft zwischen zwei Magneten", "Kraft auf eine bewegte Ladung im B-Feld", "Die elektrische Anziehungskraft", "Die Gravitationskraft auf geladene Teilchen"], correctIndex: 1, explanation: "Die Lorentzkraft F = q·(v×B) ist laut Lehrtext die Kraft, die auf eine bewegte elektrische Ladung im Magnetfeld wirkt. Sie ist keine Anziehungskraft zwischen Magneten, keine elektrostatische Kraft und keine Gravitationskraft – diese hängen nicht von der Geschwindigkeit der Ladung ab." },
      { id: "q2", question: "In welche Richtung wirkt die Lorentzkraft?", options: ["In Richtung des elektrischen Feldes", "Senkrecht zu v und B", "Parallel zur Geschwindigkeit", "Parallel zum Magnetfeld B"], correctIndex: 1, explanation: "Da F = q·(v×B) ein Kreuzprodukt ist, steht die Lorentzkraft laut Lehrtext senkrecht zu v und B – deshalb ändert sie nur die Richtung, nicht den Betrag der Geschwindigkeit. Eine Kraft parallel zu v oder B widerspräche der Kreuzprodukt-Eigenschaft." },
      { id: "q3", question: "Leistet die Lorentzkraft Arbeit?", options: ["Ja, proportional zu B²", "Nur wenn θ = 90°", "Ja, sie beschleunigt die Ladung", "Nein, da F ⊥ v immer gilt"], correctIndex: 3, explanation: "Weil die Lorentzkraft laut Lehrtext immer senkrecht zur Geschwindigkeit steht (F ⊥ v), ist das Skalarprodukt F·v stets null. Ohne Kraftkomponente in Bewegungsrichtung kann keine Arbeit verrichtet werden – die Kraft ändert nur die Richtung, nicht die kinetische Energie." },
      { id: "q4", question: "Eine Ladung q bewegt sich parallel zum B-Feld. Wie groß ist die Lorentzkraft?", options: ["F = q·v·B/2", "F = q·v·B", "F = 0", "Maximal"], correctIndex: 2, explanation: "Nach F = q·v·B·sin(θ) aus dem Lehrtext verschwindet die Kraft bei θ = 0°, da sin(0°) = 0 ist – und genau dieser Winkel liegt vor, wenn v parallel zu B verläuft. Nur eine Geschwindigkeitskomponente senkrecht zu B erzeugt eine Kraft." },
      { id: "q5", question: "Was passiert mit dem Zyklotronradius, wenn die Teilchengeschwindigkeit verdoppelt wird?", options: ["Er vervierfacht sich", "Er bleibt gleich", "Er halbiert sich", "Er verdoppelt sich"], correctIndex: 3, explanation: "Der Zyklotronradius r = m·v/(|q|·B) aus dem Lehrtext ist direkt proportional zur Geschwindigkeit v. Verdoppelt sich v bei unveränderten m, q und B, verdoppelt sich also auch r." },
      { id: "q6", question: "Wie lautet die Kraft auf einen stromdurchflossenen Leiter im Magnetfeld?", options: ["F = I·L·B·sin(θ)", "F = B²·L/I (quadratisch in B)", "F = q·v·B (Formel der Lorentzkraft)", "F = U·I/B (mit Leistung kombiniert)"], correctIndex: 0, explanation: "Der Lehrtext nennt für die Kraft auf einen stromdurchflossenen Leiter F = I·L·B·sin(θ), abgeleitet aus der Lorentzkraft für viele bewegte Ladungsträger. Die Formel q·v·B gilt dagegen für eine einzelne bewegte Ladung, nicht für einen Strom I durch einen Leiter der Länge L." },
      { id: "q7", question: "In welcher Einheit wird B gemessen?", options: ["Ampere (A)", "Volt (V)", "Newton (N)", "Tesla (T)"], correctIndex: 3, explanation: "Laut Lehrtext wird die magnetische Flussdichte B in Tesla (T) gemessen. Ampere, Volt und Newton sind dagegen die Einheiten von Strom, Spannung und Kraft – jeweils andere physikalische Größen als das Magnetfeld selbst." },
      { id: "q8", question: "Wie kreist ein Proton in einem homogenen Magnetfeld?", options: ["Es spiralisiert allmählich nach außen", "Es folgt stets den Feldlinien selbst", "Kreisbewegung mit r = mv/(qB)", "Es beschleunigt kontinuierlich geradlinig"], correctIndex: 2, explanation: "Die Lorentzkraft wirkt hier als Zentripetalkraft und erzwingt laut Lehrtext eine gleichförmige Kreisbewegung mit Radius r = mv/(qB). Da F ⊥ v gilt, ändert sich nur die Richtung, nicht der Betrag von v – daher weder Spiralbahn noch geradlinige Beschleunigung." },
      { id: "q9", question: "Was ist der Hall-Effekt?", options: ["Querspannung durch Strom im B-Feld", "Kraft zwischen parallelen Strömen", "Magnetfeld um einen Leiter", "Induktion durch sich änderndes Magnetfeld"], correctIndex: 0, explanation: "Der Hall-Effekt bezeichnet laut Lehrtext die Querspannung, die entsteht, wenn sich in einem stromdurchflossenen Leiter im transversalen B-Feld Ladungen an einer Seite anhäufen. Das unterscheidet ihn von der Kraft zwischen parallelen Strömen und von der Induktion durch ein sich änderndes Feld." },
      { id: "q10", question: "Zwei parallele Drähte führen Strom in der gleichen Richtung. Wie wirken sie aufeinander?", options: ["Sie ziehen sich an", "Sie haben keine Kraftwirkung", "Sie erzeugen nur elektrische Felder", "Sie stoßen sich ab"], correctIndex: 0, explanation: "Zwei parallele Leiter mit gleichgerichteten Strömen erzeugen laut Lehrtext Magnetfelder, deren Lorentzkräfte die Leiter aufeinander zu ziehen. Bei entgegengesetzten Stromrichtungen kehrt sich diese Kraft laut Text um, und die Leiter stoßen sich ab." }
    ]
  },
  {
    id: "natwiss-biot-savart",
    chapter: 12,
    order: 2,
    title: "Magnetfelder stromdurchflossener Leiter",
    icon: "🔁",
    summary: "Das Biot-Savart-Gesetz berechnet das Magnetfeld stromdurchflossener Leiter; Ampèresches Gesetz und Permeabilität verknüpfen Strom und Magnetfeld.",
    explanation: [
      { type: "p", text: "Das Biot-Savart-Gesetz gibt das Magnetfeld eines stromdurchflossenen Leiters an. Für ein Leiterelement I·dl gilt:" },
      { type: "formula", tex: "d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\cdot \\frac{I \\, d\\vec{l} \\times \\hat{r}}{r^2}, \\quad \\mu_0 = 4\\pi \\times 10^{-7} \\; \\text{T·m/A}" },
      { type: "p", text: "Daraus ergeben sich wichtige Sonderfälle für einfache Leitergeometrien:" },
      { type: "list", items: [
        "Gerader unendlicher Leiter: B = μ₀·I / (2π·r) (kreisförmige Feldlinien um den Leiter)",
        "Kreisförmige Leiterschleife (im Mittelpunkt): B = μ₀·I / (2r)",
        "Langer Solenoid (im Inneren): B = μ₀·n·I (n = Windungen pro Meter, homogen!)",
        "Toroid: B = μ₀·N·I / (2π·r) (N = Gesamtwindungen)",
        "Magnetischer Fluss: Φ = B·A·cos(θ); Einheit: Weber (Wb = T·m²)"
      ]},
      { type: "formula", tex: "B_{\\text{Solenoid}} = \\mu_0 \\cdot n \\cdot I" }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein gerader Leiter trägt I = 10 A. Berechnen Sie B im Abstand r = 5 cm (μ₀ = 4π × 10⁻⁷ T·m/A).",
        solution: [
          { type: "formula", tex: "B = \\frac{\\mu_0 \\cdot I}{2\\pi \\cdot r} = \\frac{4\\pi \\times 10^{-7} \\cdot 10}{2\\pi \\cdot 0{,}05} = \\frac{4 \\times 10^{-6}}{0{,}1} = 4 \\times 10^{-5} \\; \\text{T}" }
        ]
      },
      {
        id: "ex2",
        prompt: "Ein Solenoid hat 200 Windungen pro Meter und trägt I = 5 A. Berechnen Sie B im Innern.",
        solution: [
          { type: "formula", tex: "B = \\mu_0 \\cdot n \\cdot I = 4\\pi \\times 10^{-7} \\cdot 200 \\cdot 5 = 4\\pi \\times 10^{-7} \\cdot 1000 \\approx 1{,}257 \\times 10^{-3} \\; \\text{T} \\approx 1{,}26 \\; \\text{mT}" }
        ]
      },
      {
        id: "ex3",
        prompt: "Zwei parallele Leiter im Abstand d = 20 cm tragen I₁ = 3 A und I₂ = 5 A (gleiche Richtung). Berechnen Sie die Kraft pro Meter Länge.",
        solution: [
          { type: "formula", tex: "\\frac{F}{L} = \\frac{\\mu_0 \\cdot I_1 \\cdot I_2}{2\\pi \\cdot d} = \\frac{4\\pi \\times 10^{-7} \\cdot 3 \\cdot 5}{2\\pi \\cdot 0{,}20} = \\frac{6 \\times 10^{-6}}{0{,}40} = 1{,}5 \\times 10^{-5} \\; \\text{N/m}" },
          { type: "p", text: "Da die Ströme gleichgerichtet sind, ziehen sich die Leiter an." }
        ]
      },
      {
        id: "ex4",
        prompt: "Berechnen Sie B im Mittelpunkt einer kreisförmigen Leiterschleife mit r = 0,1 m und I = 20 A.",
        solution: [
          { type: "formula", tex: "B = \\frac{\\mu_0 \\cdot I}{2r} = \\frac{4\\pi \\times 10^{-7} \\cdot 20}{2 \\cdot 0{,}1} = \\frac{8\\pi \\times 10^{-6}}{0{,}2} = 4\\pi \\times 10^{-5} \\approx 1{,}26 \\times 10^{-4} \\; \\text{T}" }
        ]
      },
      {
        id: "ex5",
        prompt: "Warum ist das Magnetfeld eines langen Solenoids im Innern homogen und außen nahezu null?",
        solution: [
          { type: "p", text: "Im Innern des Solenoids überlagern sich die Magnetfelder aller Windungen konstruktiv in axialer Richtung. Das Ergebnis ist ein gleichförmiges, homogenes Feld B = μ₀·n·I." },
          { type: "p", text: "Außen verlaufen die Feldlinien weiträumig zurück und schwächen sich durch destruktive Überlagerung der Beiträge von Hin- und Rückweg stark ab. Bei einem ideal langen Solenoid ist das Außenfeld exakt null (Amperesches Gesetz auf Rechteckschleife)." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welches Symbol steht für die magnetische Permeabilität des Vakuums?", options: ["λ", "ε₀", "μ₀", "σ"], correctIndex: 2, explanation: "Der Lehrtext führt μ₀ = 4π × 10⁻⁷ T·m/A als magnetische Permeabilität des Vakuums ein – die Konstante, die im Biot-Savart-Gesetz und den Solenoid-Formeln auftritt. λ, ε₀ und σ bezeichnen andere, im Text nicht für das Magnetfeld verwendete Größen." },
      { id: "q2", question: "Wie verlaufen die Magnetfeldlinien um einen geraden stromdurchflossenen Leiter?", options: ["Senkrecht radial vom Leiter weg", "In Spiralen", "Kreisförmig um den Leiter", "Parallel zum Leiter"], correctIndex: 2, explanation: "Laut Lehrtext bilden die Feldlinien um einen geraden stromdurchflossenen Leiter konzentrische Kreise (Rechte-Hand-Regel), nicht radiale Strahlen, Spiralen oder Parallelen zum Leiter." },
      { id: "q3", question: "B eines geraden Leiters verdoppelt sich, wenn …", options: ["B ist konstant (unabhängig von I und r)", "I verdoppelt oder r halbiert wird", "r verdoppelt wird", "I halbiert wird"], correctIndex: 1, explanation: "Nach B = μ₀·I/(2π·r) aus dem Lehrtext ist B proportional zu I und umgekehrt proportional zu r. Eine Verdopplung von B tritt daher ein, wenn I verdoppelt oder r halbiert wird – nicht wenn nur r wächst oder I sinkt, und B ist keineswegs konstant." },
      { id: "q4", question: "Was ist der magnetische Fluss Φ?", options: ["Das Vektorfeld B", "Das Produkt B·A·cos(θ)", "Die Kraft auf eine Ladung", "B·I"], correctIndex: 1, explanation: "Der Lehrtext definiert den magnetischen Fluss als Φ = B·A·cos(θ), gemessen in Weber. Das Vektorfeld B selbst, eine Kraft auf eine Ladung oder das Produkt B·I sind andere, im Text separat definierte Größen." },
      { id: "q5", question: "Warum ist das Innere eines Solenoids für Experimente so nützlich?", options: ["Wegen der besonders hohen Temperatur im Innern", "Weil das Feld homogen ist (B = μ₀nI)", "Weil das Feld dort null ist", "Weil kein Strom fließt"], correctIndex: 1, explanation: "Im Solenoidinneren herrscht laut Lehrtext ein homogenes Magnetfeld B = μ₀·n·I, das über Strom I und Windungsdichte n präzise eingestellt werden kann. Temperatur spielt dabei keine Rolle, und das Feld ist weder null noch stromlos." },
      { id: "q6", question: "Welche Kraft wirkt zwischen zwei Leitern mit entgegengesetzten Strömen?", options: ["Abstoßung", "Nur eine elektrische Kraft", "Keine Kraft", "Anziehung"], correctIndex: 0, explanation: "Entgegengesetzt gerichtete Ströme erzeugen laut Lehrtext Magnetfelder, deren Wechselwirkung zu einer Abstoßung der Leiter führt – das Gegenteil des im Text behandelten Falls gleichgerichteter, sich anziehender Ströme." },
      { id: "q7", question: "B im Mittelpunkt einer Kreisschleife ist proportional zu …", options: ["I/r", "I/(r²)", "I·r²", "I·r"], correctIndex: 0, explanation: "Nach B = μ₀·I/(2r) aus dem Lehrtext ist das Feld im Mittelpunkt einer Kreisschleife proportional zu I und umgekehrt proportional zu r – also proportional zu I/r, nicht zu I/r², I·r² oder I·r." },
      { id: "q8", question: "Was ist die Einheit des magnetischen Flusses?", options: ["Tesla (T)", "Volt (V)", "Weber (Wb)", "Ampere (A)"], correctIndex: 2, explanation: "Der Lehrtext nennt für den magnetischen Fluss die Einheit Weber (Wb = T·m²). Tesla ist dagegen die Einheit der Flussdichte B selbst, Volt die der Spannung und Ampere die des Stroms – jeweils andere Größen." },
      { id: "q9", question: "Wie ändert sich B im Solenoidinnern, wenn die Windungsdichte n verdoppelt wird (I konstant)?", options: ["B bleibt gleich", "B halbiert sich", "B vervierfacht sich", "B verdoppelt sich"], correctIndex: 3, explanation: "Da B = μ₀·n·I aus dem Lehrtext direkt proportional zu n ist, führt eine Verdopplung der Windungsdichte n bei konstantem Strom I zu einer Verdopplung von B – nicht zu einer Vervierfachung oder Halbierung." },
      { id: "q10", question: "Was berechnet das Biot-Savart-Gesetz?", options: ["Die induzierte Spannung", "Die Lorentzkraft", "Den elektrischen Widerstand eines Leiters", "Das Magnetfeld eines Leiterstücks"], correctIndex: 3, explanation: "Das Biot-Savart-Gesetz dB = (μ₀/4π)·I·dl×r̂/r² aus dem Lehrtext berechnet das Magnetfeld, das ein stromdurchflossenes Leiterstück erzeugt. Induzierte Spannung, Lorentzkraft und Widerstand sind andere, im Text separat behandelte Größen." }
    ]
  },
  {
    id: "natwiss-induktion",
    chapter: 12,
    order: 3,
    title: "Elektromagnetische Induktion",
    icon: "🔌",
    summary: "Ändert sich der magnetische Fluss durch eine Leiterschleife, wird eine Spannung induziert – Grundlage von Generatoren, Transformatoren und Induktivitäten.",
    explanation: [
      { type: "p", text: "Das Faradaysche Induktionsgesetz ist das Herzstück der elektromagnetischen Kopplung von Feldern und Strömen:" },
      { type: "formula", tex: "U_{\\text{ind}} = -N \\cdot \\frac{d\\Phi}{dt} \\quad (N = \\text{Windungszahl})" },
      { type: "p", text: "Das Lenzsche Gesetz (das Minuszeichen) besagt: Der induzierte Strom erzeugt ein Magnetfeld, das der Ursache der Induktion entgegenwirkt (Energieerhaltung). Für einen bewegten Leiter der Länge L mit Geschwindigkeit v in Magnetfeld B:" },
      { type: "formula", tex: "U_{\\text{ind}} = B \\cdot L \\cdot v \\quad (\\text{motionale Induktion})" },
      { type: "list", items: [
        "Selbstinduktion: Ändert sich der Strom in einer Spule, wird eine Gegenspannung induziert: U_L = −L·(dI/dt)",
        "Induktivität einer Spule: L [Henry = V·s/A = Ω·s]",
        "Solenoid: L = μ₀·n²·V = μ₀·N²·A/l",
        "Energie in der Spule: E_L = ½·L·I²",
        "Transformator: U₁/U₂ = N₁/N₂ (Spannungsübersetzung)"
      ]}
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Eine Spule mit N = 100 Windungen hat einen Fluss, der sich in Δt = 0,5 s von Φ₁ = 0 auf Φ₂ = 0,02 Wb ändert. Berechnen Sie die induzierte Spannung.",
        solution: [
          { type: "formula", tex: "U_{\\text{ind}} = -N \\cdot \\frac{\\Delta\\Phi}{\\Delta t} = -100 \\cdot \\frac{0{,}02 - 0}{0{,}5} = -100 \\cdot 0{,}04 = -4 \\; \\text{V}" },
          { type: "p", text: "Der Betrag der induzierten Spannung beträgt 4 V. Das Minuszeichen zeigt die Richtung (Lenzsches Gesetz)." }
        ]
      },
      {
        id: "ex2",
        prompt: "Ein Stab der Länge L = 0,5 m bewegt sich mit v = 10 m/s senkrecht zu B = 0,3 T. Berechnen Sie die motionale EMF.",
        solution: [
          { type: "formula", tex: "U_{\\text{ind}} = B \\cdot L \\cdot v = 0{,}3 \\cdot 0{,}5 \\cdot 10 = 1{,}5 \\; \\text{V}" }
        ]
      },
      {
        id: "ex3",
        prompt: "Ein Solenoid hat N = 1000 Windungen, Länge l = 0,5 m, Querschnittsfläche A = 4 cm². Berechnen Sie die Induktivität L (μ₀ = 4π × 10⁻⁷ T·m/A).",
        solution: [
          { type: "p", text: "n = N/l = 1000/0,5 = 2000 Windungen/m." },
          { type: "formula", tex: "L = \\mu_0 \\cdot n^2 \\cdot A \\cdot l = 4\\pi \\times 10^{-7} \\cdot 2000^2 \\cdot 4 \\times 10^{-4} \\cdot 0{,}5 \\approx 1{,}005 \\; \\text{mH}" }
        ]
      },
      {
        id: "ex4",
        prompt: "Welche Flussänderung dΦ/dt induziert eine größere Spannung: B halbiert sich in 1 s (A = 1 m²), oder B verdoppelt sich in 0,1 s (A = 0,5 m²)?",
        solution: [
          { type: "list", items: [
            "Fall 1: dΦ/dt = A · dB/dt = 1 · (−ΔB)/Δt. Wenn B von B₀ auf B₀/2 halbiert wird: |dΦ/dt| = 1 · B₀/(2·1) = B₀/2",
            "Fall 2: B verdoppelt sich: |dΦ/dt| = 0,5 · B₀/0,1 = 5·B₀"
          ]},
          { type: "p", text: "Fall 2 erzeugt eine 10-fach größere Spannung (schnelle Änderung in kleiner Zeit dominiert)." }
        ]
      },
      {
        id: "ex5",
        prompt: "Erklären Sie, warum ein rotierendes Magnetfeld in einer Spule eine Wechselspannung erzeugt (Generator-Prinzip).",
        solution: [
          { type: "p", text: "Dreht sich ein Magnet (oder eine Spule im Magnetfeld) mit Winkelgeschwindigkeit ω, ändert sich der magnetische Fluss durch die Spule sinusförmig:" },
          { type: "formula", tex: "\\Phi(t) = N \\cdot B \\cdot A \\cdot \\cos(\\omega t)" },
          { type: "p", text: "Die induzierte Spannung ist: U_ind = −dΦ/dt = N·B·A·ω·sin(ωt). Dies ist eine Wechselspannung mit Amplitude Û = N·B·A·ω – das Grundprinzip jedes Wechselstromgenerators." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was besagt das Faradaysche Induktionsgesetz?", options: ["Ein fließender Strom erzeugt stets ein Magnetfeld", "Gleiche Ladungen stoßen sich ab", "Flussänderung induziert eine Spannung", "Ladung erzeugt elektrisches Feld"], correctIndex: 2, explanation: "Faradays Gesetz U_ind = −N·dΦ/dt aus dem Lehrtext besagt, dass eine zeitliche Änderung des magnetischen Flusses durch eine Leiterschleife eine Spannung induziert. Das ist etwas anderes als die Tatsache, dass Strom ein Magnetfeld erzeugt, oder die Abstoßung gleicher Ladungen." },
      { id: "q2", question: "Was besagt das Lenzsche Gesetz?", options: ["Entropie nimmt zu", "Der induzierte Strom verstärkt die Flussänderung", "Der induzierte Strom wirkt der Ursache entgegen", "Die induzierte Spannung ist proportional zum Strom"], correctIndex: 2, explanation: "Das Lenzsche Gesetz, sichtbar am Minuszeichen in Faradays Gleichung U_ind = −N·dΦ/dt, besagt laut Lehrtext, dass der induzierte Strom ein Magnetfeld erzeugt, das seiner Ursache (der Flussänderung) entgegenwirkt. Ein verstärkender Strom widerspräche der Energieerhaltung." },
      { id: "q3", question: "Wie groß ist U_ind, wenn der Fluss sich um ΔΦ = 0,1 Wb in Δt = 0,2 s durch N = 50 Windungen ändert?", options: ["10 V", "25 V", "0,5 V", "1 V"], correctIndex: 1, explanation: "Nach |U_ind| = N·|ΔΦ/Δt| aus dem Lehrtext ergibt sich |U_ind| = 50 · 0,1/0,2 = 50 · 0,5 = 25 V. Ohne die Windungszahl N im Faktor würde man fälschlich nur 0,5 V erhalten." },
      { id: "q4", question: "Wie groß ist die motionale EMF eines Stabs mit L = 1 m, v = 5 m/s, B = 2 T?", options: ["0,4 V, bei vertauschter Divisionsreihenfolge", "2,5 V, bei falscher Zuordnung der Größen", "5 V, ohne den Beitrag der Länge L", "10 V"], correctIndex: 3, explanation: "Nach der Formel für motionale Induktion U_ind = B·L·v aus dem Lehrtext ergibt sich U = 2 T · 1 m · 5 m/s = 10 V. Die anderen Werte entstehen, wenn man einen der drei Faktoren B, L oder v beim Multiplizieren auslässt oder vertauscht." },
      { id: "q5", question: "Was ist Selbstinduktion?", options: ["Induktion, die ausschließlich in einem Kondensator auftritt", "Induktion durch ruhende, statische Ladungen", "Induktion ausschließlich durch ein äußeres Magnetfeld", "Induktion durch das eigene, sich ändernde Feld der Spule"], correctIndex: 3, explanation: "Ändert sich der Strom in einer Spule, ändert sich damit auch ihr eigenes Magnetfeld, was eine Gegenspannung U_L = −L·dI/dt induziert — das ist Selbstinduktion. Sie entsteht also aus dem Feld der Spule selbst, nicht aus einem externen Feld, statischen Ladungen oder in einem Kondensator." },
      { id: "q6", question: "Wie lautet die Einheit der Induktivität L?", options: ["Henry (H), also V·s/A", "Tesla (T), Einheit der Flussdichte B", "Weber (Wb), Einheit des magnetischen Flusses", "Farad (F), Einheit der Kapazität"], correctIndex: 0, explanation: "Induktivität wird in Henry gemessen, definiert als 1 H = 1 V·s/A = 1 Ω·s. Tesla, Weber und Farad sind reale, aber andere Einheiten — für Flussdichte, magnetischen Fluss bzw. Kapazität, nicht für Induktivität." },
      { id: "q7", question: "Ein Transformator hat N₁ = 2000 und N₂ = 100 Windungen bei U₁ = 230 V. Wie groß ist U₂?", options: ["11,5 V", "115 V, bei falschem Übersetzungsverhältnis", "230 V, als wäre keine Übersetzung vorhanden", "4600 V, bei vertauschtem Verhältnis"], correctIndex: 0, explanation: "Aus U₂/U₁ = N₂/N₁ folgt U₂ = 230 V · 100/2000 = 11,5 V. Der Distraktor 4600 V entsteht, wenn man das Windungsverhältnis versehentlich umgekehrt einsetzt (N₁/N₂ statt N₂/N₁)." },
      { id: "q8", question: "Wie viel Energie speichert eine Spule mit L = 0,5 H bei I = 4 A?", options: ["2 J, bei fehlendem Quadrat des Stroms", "4 J", "8 J, ohne den Faktor ½", "1 J, bei doppelt angewendetem Faktor ½"], correctIndex: 1, explanation: "Nach E_L = ½·L·I² aus dem Lehrtext ergibt sich E = ½ · 0,5 H · (4 A)² = ½ · 0,5 · 16 = 4 J. Die anderen Werte entstehen, wenn man den Faktor ½ auslässt, doppelt anwendet oder den Strom nicht quadriert." },
      { id: "q9", question: "Was erzeugt ein Generator nach dem Induktionsprinzip?", options: ["Wechselspannung durch rotierende Leiterschleifen im Magnetfeld", "Elektrostatische Ladung ohne jede Bewegung", "Magnetische Monopole als isolierte Pole", "Reinen Gleichstrom unabhängig vom Magnetfeld"], correctIndex: 0, explanation: "Ein Generator rotiert eine Spule (oder einen Magneten) im Magnetfeld, wodurch sich der magnetische Fluss sinusförmig ändert und eine sinusförmige Wechselspannung induziert wird. Elektrostatische Ladung, Monopole oder reiner Gleichstrom entstehen dabei gerade nicht — das Generatorprinzip beruht direkt auf zeitlicher Flussänderung." },
      { id: "q10", question: "Beim Trafoprinzip: Wie verhält sich der Strom im Sekundärkreis zum Primärkreis?", options: ["Der Sekundärstrom I₂ ist stets null", "Der Sekundärstrom I₂ entspricht genau I₁", "I₂/I₁ entspricht dem Verhältnis N₁/N₂", "I₂/I₁ entspricht dem Verhältnis N₂/N₁"], correctIndex: 2, explanation: "Aus der Energieerhaltung P₁ = P₂, also U₁·I₁ = U₂·I₂, und dem Spannungsverhältnis U₂/U₁ = N₂/N₁ folgt für den Strom das umgekehrte Verhältnis I₂/I₁ = N₁/N₂. Das Stromverhältnis verläuft also gerade entgegengesetzt zum Windungs- und Spannungsverhältnis." }
    ]
  }
];
