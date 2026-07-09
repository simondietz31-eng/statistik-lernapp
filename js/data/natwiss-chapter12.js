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
      { id: "q1", question: "Was ist die Lorentzkraft?", options: ["Die Kraft zwischen zwei Magneten", "Die Kraft auf eine bewegte Ladung im Magnetfeld", "Die elektrische Anziehungskraft", "Die Gravitationskraft auf geladene Teilchen"], correctIndex: 1, explanation: "Die Lorentzkraft F = q·(v×B) wirkt auf bewegte elektrische Ladungen in einem Magnetfeld." },
      { id: "q2", question: "In welche Richtung wirkt die Lorentzkraft?", options: ["In Richtung E-Feld", "Senkrecht zu v und B (Kreuzprodukt)", "Parallel zu v", "Parallel zu B"], correctIndex: 1, explanation: "F = q·(v×B): das Kreuzprodukt steht senkrecht auf v und B – deshalb ändert die Lorentzkraft die Richtung, aber nicht die Geschwindigkeit." },
      { id: "q3", question: "Leistet die Lorentzkraft Arbeit?", options: ["Ja, proportional zu B²", "Nur wenn θ = 90°", "Ja, sie beschleunigt die Ladung", "Nein, da F ⊥ v immer gilt"], correctIndex: 3, explanation: "Da die Lorentzkraft immer senkrecht zur Geschwindigkeit steht (F ⊥ v), ist das Skalarprodukt F·v = 0 – keine Arbeit, keine Energieänderung, nur Richtungsänderung." },
      { id: "q4", question: "Eine Ladung q bewegt sich parallel zum B-Feld. Wie groß ist die Lorentzkraft?", options: ["F = q·v·B/2", "F = q·v·B", "F = 0", "Maximal"], correctIndex: 2, explanation: "F = q·v·B·sin(θ). Bei θ = 0° (v parallel B) gilt sin(0) = 0 → F = 0." },
      { id: "q5", question: "Was passiert mit dem Zyklotronradius, wenn die Teilchengeschwindigkeit verdoppelt wird?", options: ["Er vervierfacht sich", "Er bleibt gleich", "Er halbiert sich", "Er verdoppelt sich"], correctIndex: 3, explanation: "r = m·v/(|q|·B): r ist proportional zu v. Doppelte Geschwindigkeit → doppelter Radius." },
      { id: "q6", question: "Wie lautet die Kraft auf einen stromdurchflossenen Leiter im Magnetfeld?", options: ["F = I·L·B·sin(θ)", "F = B²·L/I", "F = q·v·B", "F = U·I/B"], correctIndex: 0, explanation: "Die Kraft auf einen Leiter der Länge L mit Strom I in einem Feld B bei Winkel θ ist F = I·L·B·sin(θ)." },
      { id: "q7", question: "In welcher Einheit wird B gemessen?", options: ["Ampere (A)", "Volt (V)", "Newton (N)", "Tesla (T)"], correctIndex: 3, explanation: "Die magnetische Flussdichte B wird in Tesla (T) gemessen: 1 T = 1 kg/(A·s²)." },
      { id: "q8", question: "Wie kreist ein Proton in einem homogenen Magnetfeld?", options: ["Es spiralisiert nach außen", "Es folgt den Feldlinien", "Es kreist gleichförmig mit Radius r = mv/(qB)", "Es beschleunigt geradlinig"], correctIndex: 2, explanation: "Die Lorentzkraft als Zentripetalkraft bewirkt gleichförmige Kreisbewegung mit r = mv/(qB)." },
      { id: "q9", question: "Was ist der Hall-Effekt?", options: ["Querspannung, die in einem Leiter mit Strom im B-Feld auftritt", "Kraft zwischen parallelen Strömen", "Magnetfeld um einen Leiter", "Induktion durch sich änderndes Magnetfeld"], correctIndex: 0, explanation: "Der Hall-Effekt: In einem Leiter mit Strom und transversalem B-Feld häufen sich Ladungen an der Seite, sodass eine messbare Querspannung (Hall-Spannung) entsteht." },
      { id: "q10", question: "Zwei parallele Drähte führen Strom in der gleichen Richtung. Wie wirken sie aufeinander?", options: ["Sie ziehen sich an", "Sie haben keine Kraftwirkung", "Sie erzeugen nur elektrische Felder", "Sie stoßen sich ab"], correctIndex: 0, explanation: "Zwei parallele Leiter mit gleichgerichteten Strömen ziehen sich an (parallele Lorentzkräfte in Richtung aufeinander). Bei entgegengesetzten Strömen stoßen sie sich ab." }
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
      { id: "q1", question: "Welches Symbol steht für die magnetische Permeabilität des Vakuums?", options: ["λ", "ε₀", "μ₀", "σ"], correctIndex: 2, explanation: "μ₀ = 4π × 10⁻⁷ T·m/A ist die magnetische Permeabilität des Vakuums." },
      { id: "q2", question: "Wie verlaufen die Magnetfeldlinien um einen geraden stromdurchflossenen Leiter?", options: ["Senkrecht radial vom Leiter weg", "In Spiralen", "Konzentrisch (kreisförmig) um den Leiter", "Parallel zum Leiter"], correctIndex: 2, explanation: "Das B-Feld eines geraden Leiters besteht aus konzentrischen Kreisen um den Leiter (Rechte-Hand-Regel)." },
      { id: "q3", question: "B eines geraden Leiters verdoppelt sich, wenn …", options: ["B ist konstant", "I verdoppelt oder r halbiert wird", "r verdoppelt wird", "I halbiert wird"], correctIndex: 1, explanation: "B = μ₀·I/(2π·r): B ist proportional zu I und antiproportional zu r." },
      { id: "q4", question: "Was ist der magnetische Fluss Φ?", options: ["Das Vektorfeld B", "Das Produkt B·A·cos(θ)", "Die Kraft auf eine Ladung", "B·I"], correctIndex: 1, explanation: "Magnetischer Fluss: Φ = B·A·cos(θ), gemessen in Weber (Wb = T·m²)." },
      { id: "q5", question: "Warum ist das Innere eines Solenoids für Experimente so nützlich?", options: ["Wegen der hohen Temperatur im Innern", "Weil das Feld homogen und kontrollierbar ist (B = μ₀nI)", "Weil das Feld dort null ist", "Weil kein Strom fließt"], correctIndex: 1, explanation: "Im Solenoidinnern herrscht ein homogenes Magnetfeld B = μ₀·n·I, das durch Strom I und Windungsdichte n präzise eingestellt werden kann." },
      { id: "q6", question: "Welche Kraft wirkt zwischen zwei Leitern mit entgegengesetzten Strömen?", options: ["Abstoßung", "Nur eine elektrische Kraft", "Keine Kraft", "Anziehung"], correctIndex: 0, explanation: "Entgegengesetzte Ströme erzeugen Magnetfelder, die zu abstoßenden Kräften führen." },
      { id: "q7", question: "B im Mittelpunkt einer Kreisschleife ist proportional zu …", options: ["I/r", "I/(r²)", "I·r²", "I·r"], correctIndex: 0, explanation: "B = μ₀·I/(2r): proportional zu I und antiproportional zu r." },
      { id: "q8", question: "Was ist die Einheit des magnetischen Flusses?", options: ["Tesla (T)", "Volt (V)", "Weber (Wb)", "Ampere (A)"], correctIndex: 2, explanation: "Magnetischer Fluss wird in Weber (Wb) gemessen: 1 Wb = 1 T·m²." },
      { id: "q9", question: "Wie ändert sich B im Solenoidinnern, wenn die Windungsdichte n verdoppelt wird (I konstant)?", options: ["B bleibt gleich", "B halbiert sich", "B vervierfacht sich", "B verdoppelt sich"], correctIndex: 3, explanation: "B = μ₀·n·I: direkt proportional zu n. Doppelte Windungsdichte → doppeltes Feld." },
      { id: "q10", question: "Was berechnet das Biot-Savart-Gesetz?", options: ["Die induzierte Spannung", "Die Lorentzkraft", "Den Widerstand eines Leiters", "Das Magnetfeld eines stromdurchflossenen Leiterstücks"], correctIndex: 3, explanation: "Das Biot-Savart-Gesetz dB = (μ₀/4π)·I·dl×r̂/r² berechnet das Magnetfeld, das ein Stromelement erzeugt." }
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
      { id: "q1", question: "Was besagt das Faradaysche Induktionsgesetz?", options: ["Strom erzeugt Magnetfeld", "Gleiche Ladungen stoßen sich ab", "Eine Flussänderung durch eine Leiterschleife induziert eine Spannung", "Ladung erzeugt elektrisches Feld"], correctIndex: 2, explanation: "Faraday: U_ind = −N·dΦ/dt – eine zeitliche Änderung des magnetischen Flusses induziert eine Spannung." },
      { id: "q2", question: "Was besagt das Lenzsche Gesetz?", options: ["Entropie nimmt zu", "Der induzierte Strom verstärkt die Flussänderung", "Der induzierte Strom wirkt seiner Ursache entgegen (Minuszeichen bei Faraday)", "Die induzierte Spannung ist proportional zum Strom"], correctIndex: 2, explanation: "Das Lenzsche Gesetz (Minuszeichen in Faradays Gleichung) besagt, dass der induzierte Strom ein Magnetfeld erzeugt, das die Ursache (Flussänderung) hemmt." },
      { id: "q3", question: "Wie groß ist U_ind, wenn der Fluss sich um ΔΦ = 0,1 Wb in Δt = 0,2 s durch N = 50 Windungen ändert?", options: ["10 V", "25 V", "0,5 V", "1 V"], correctIndex: 1, explanation: "|U_ind| = N·|ΔΦ/Δt| = 50 · 0,1/0,2 = 50 · 0,5 = 25 V." },
      { id: "q4", question: "Motionale EMF eines Stabs (L = 1 m, v = 5 m/s, B = 2 T)?", options: ["0,4 V", "2,5 V", "5 V", "10 V"], correctIndex: 3, explanation: "U = B·L·v = 2·1·5 = 10 V." },
      { id: "q5", question: "Was ist Selbstinduktion?", options: ["Induktion in einem Kondensator", "Induktion durch statische Ladungen", "Induktion durch äußeres Magnetfeld", "Induktion durch das eigene, sich ändernde Feld der Spule selbst"], correctIndex: 3, explanation: "Selbstinduktion: Ändert sich der Strom in einer Spule, ändert sich ihr eigenes Magnetfeld und induziert eine Gegenspannung U_L = −L·dI/dt." },
      { id: "q6", question: "Wie ist die Einheit der Induktivität L?", options: ["Henry (H = V·s/A)", "Tesla (T)", "Weber (Wb)", "Farad (F)"], correctIndex: 0, explanation: "Induktivität L wird in Henry (H) gemessen: 1 H = 1 V·s/A = 1 Ω·s." },
      { id: "q7", question: "Ein Transformator mit N₁ = 2000 und N₂ = 100 Windungen: U₁ = 230 V. Welche U₂?", options: ["11,5 V", "115 V", "230 V", "4600 V"], correctIndex: 0, explanation: "U₂/U₁ = N₂/N₁ → U₂ = 230 · 100/2000 = 11,5 V." },
      { id: "q8", question: "Wie viel Energie speichert eine Spule L = 0,5 H bei I = 4 A?", options: ["2 J", "4 J", "8 J", "1 J"], correctIndex: 1, explanation: "E = ½·L·I² = ½·0,5·16 = 4 J." },
      { id: "q9", question: "Was erzeugt ein Generator?", options: ["Wechselspannung durch rotierende Schleifen im Magnetfeld", "Elektrostatische Ladung", "Magnetische Monopole", "Gleichstrom durch Magnetfelder"], correctIndex: 0, explanation: "Ein Generator rotiert eine Spule (oder einen Magneten) im Magnetfeld; die sinusförmige Flussänderung erzeugt eine sinusförmige Wechselspannung." },
      { id: "q10", question: "Beim Trafoprinzip: Wie ändert sich der Strom im Sekundärstromkreis relativ zum Primärstromkreis?", options: ["I₂ = 0", "I₂ = I₁", "I₂/I₁ = N₁/N₂", "I₂/I₁ = N₂/N₁"], correctIndex: 2, explanation: "Energieerhaltung: P₁ = P₂ → U₁·I₁ = U₂·I₂. Da U₂/U₁ = N₂/N₁, folgt I₂/I₁ = N₁/N₂ (umgekehrt zur Spannungsübersetzung)." }
    ]
  }
];
