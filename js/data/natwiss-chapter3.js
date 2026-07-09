const NATWISS_CHAPTER3_TOPICS = [
  {
    id: "natwiss-impuls",
    chapter: 3,
    order: 1,
    title: "Impuls und Impulserhaltung",
    icon: "💨",
    summary: "Linearer Impuls, Impulserhaltungssatz, Kraftstoß und Anwendungen wie Raketen, Rückstoß und Schwerpunktsbewegung.",
    explanation: [
      { type: "p", text: "Der lineare Impuls p eines Körpers der Masse m mit Geschwindigkeit v ist definiert als:" },
      { type: "formula", tex: "\\vec{p} = m \\cdot \\vec{v}" },
      { type: "p", text: "Der Impuls ist ein Vektor (gleiche Richtung wie v) und hat die Einheit kg·m/s = N·s." },
      { type: "p", text: "Das 2. Newtonsche Gesetz in der allgemeinen Form lautet F = dp/dt (Kraft ist zeitliche Änderung des Impulses):" },
      { type: "formula", tex: "\\vec{F} = \\frac{d\\vec{p}}{dt}" },
      { type: "p", text: "Impulserhaltungssatz: Wenn keine äußere Kraft auf ein abgeschlossenes System wirkt (oder die Summe der äußeren Kräfte null ist), bleibt der Gesamtimpuls des Systems konstant:" },
      { type: "formula", tex: "\\sum_i \\vec{p}_i = \\text{const} \\quad \\text{(wenn } \\sum \\vec{F}_{\\text{ext}} = 0)" },
      { type: "p", text: "Kraftstoß (Impuls): Eine Kraft F, die über die Zeit Δt wirkt, ändert den Impuls um Δp:" },
      { type: "formula", tex: "\\vec{J} = \\vec{F} \\cdot \\Delta t = \\Delta \\vec{p}" },
      { type: "p", text: "Anwendungen des Impulserhaltungssatzes:" },
      { type: "list", items: [
        "Rückstoßprinzip: Raketen stoßen Gase aus und werden in Gegenrichtung beschleunigt",
        "Schusswaffe: Geschoss nach vorne, Waffe bewegt sich nach hinten (Rückstoß)",
        "Explosion: Splitter fliegen auseinander, Gesamtimpuls = 0 (war vorher null)"
      ]},
      { type: "p", text: "Schwerpunkt eines Teilchensystems: Der Schwerpunkt (Massenmittelpunkt) bewegt sich, als würde die Gesamtmasse dort konzentriert sein:" },
      { type: "formula", tex: "x_{\\text{SP}} = \\frac{\\sum_i m_i \\cdot x_i}{\\sum_i m_i}" }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein 0,5 kg schwerer Ball trifft mit v = 10 m/s auf eine Wand und prallt mit derselben Geschwindigkeit zurück (entgegengesetzte Richtung). Berechnen Sie den Kraftstoß (Impulsänderung).",
        solution: [
          { type: "p", text: "Vorzeichen festlegen: Anflug = positiv (+10 m/s), Rückprall = negativ (–10 m/s)." },
          { type: "p", text: "Impulsänderung des Balls:" },
          { type: "formula", tex: "\\Delta p = p_{\\text{nach}} - p_{\\text{vor}} = m \\cdot v_{\\text{nach}} - m \\cdot v_{\\text{vor}}" },
          { type: "formula", tex: "\\Delta p = 0{,}5 \\cdot (-10) - 0{,}5 \\cdot 10 = -5 - 5 = -10 \\text{ N·s}" },
          { type: "p", text: "Der Betrag des Kraftstoßes (auf den Ball von der Wand) beträgt 10 N·s. Der Ball erfährt eine Impulsänderung von 10 N·s in Richtung der Wand." }
        ]
      },
      {
        id: "ex2",
        prompt: "Zwei Eisläufer stehen zunächst beide ruhig auf dem Eis. Eisläufer A (m₁ = 70 kg) stößt sich von Eisläufer B (m₂ = 80 kg) ab und bewegt sich danach mit v₁ = 2 m/s nach rechts. Wie schnell und in welche Richtung bewegt sich Eisläufer B?",
        solution: [
          { type: "p", text: "Anfangs ist der Gesamtimpuls null (beide stehen). Impulserhaltung:" },
          { type: "formula", tex: "0 = m_1 \\cdot v_1 + m_2 \\cdot v_2" },
          { type: "formula", tex: "v_2 = -\\frac{m_1 \\cdot v_1}{m_2} = -\\frac{70 \\cdot 2}{80} = -\\frac{140}{80} = -1{,}75 \\text{ m/s}" },
          { type: "p", text: "Eisläufer B bewegt sich mit 1,75 m/s nach links (entgegen der Bewegung von A)." }
        ]
      },
      {
        id: "ex3",
        prompt: "Ein Auto (m = 1000 kg) fährt mit v₀ = 20 m/s. Die Bremskraft beträgt F_B = 4000 N. Wie lange dauert der Bremsvorgang bis zum Stillstand?",
        solution: [
          { type: "p", text: "Anfangsimpuls des Autos: p₀ = m · v₀ = 1000 · 20 = 20000 N·s" },
          { type: "p", text: "Die Bremskraft erzeugt einen Kraftstoß, der den Impuls auf null reduziert:" },
          { type: "formula", tex: "F_B \\cdot \\Delta t = \\Delta p = p_0 - 0 = 20000 \\text{ N·s}" },
          { type: "formula", tex: "\\Delta t = \\frac{\\Delta p}{F_B} = \\frac{20000}{4000} = 5 \\text{ s}" }
        ]
      },
      {
        id: "ex4",
        prompt: "Eine Rakete verbrennt 100 kg Treibstoff pro Sekunde und stößt die Abgase mit einer Ausstoßgeschwindigkeit von v_A = 3000 m/s aus. Berechnen Sie den Schub (Triebwerksschubkraft).",
        solution: [
          { type: "p", text: "Der Schub ergibt sich aus dem Rückstoßprinzip (Impulserhaltung). Pro Sekunde wird ein Impuls von Δp = dm/dt · v_A auf die Abgase übertragen. Der gleiche Impuls (entgegengesetzt) wirkt auf die Rakete:" },
          { type: "formula", tex: "F_{\\text{Schub}} = \\frac{dm}{dt} \\cdot v_A = 100 \\text{ kg/s} \\cdot 3000 \\text{ m/s} = 300000 \\text{ N} = 300 \\text{ kN}" }
        ]
      },
      {
        id: "ex5",
        prompt: "Eine 1 kg schwere Kugel (A) bewegt sich mit v_A = 4 m/s und stößt auf eine ruhende 3 kg schwere Kugel (B). Beide bleiben nach dem Stoß zusammen haften (vollkommen unelastischer Stoß). Berechnen Sie die gemeinsame Geschwindigkeit nach dem Stoß.",
        solution: [
          { type: "p", text: "Impulserhaltung: Gesamtimpuls vor = Gesamtimpuls nach." },
          { type: "formula", tex: "m_A \\cdot v_A + m_B \\cdot 0 = (m_A + m_B) \\cdot v'" },
          { type: "formula", tex: "v' = \\frac{m_A \\cdot v_A}{m_A + m_B} = \\frac{1 \\cdot 4}{1 + 3} = \\frac{4}{4} = 1 \\text{ m/s}" },
          { type: "p", text: "Die gemeinsame Geschwindigkeit nach dem Stoß beträgt 1 m/s in Richtung der ursprünglichen Bewegung von A." }
        ]
      }
    ],
    quiz: [
      {
        id: "q1",
        question: "Welche Einheit hat der Impuls?",
        options: [
          "N (Newton)",
          "J (Joule)",
          "kg·m/s",
          "m/s²"
        ],
        correctIndex: 2,
        explanation: "Der Impuls p = m·v hat die Einheit kg·m/s = N·s."
      },
      {
        id: "q2",
        question: "Wann gilt der Impulserhaltungssatz?",
        options: [
          "Immer, in jedem physikalischen System",
          "Wenn die Summe der äußeren Kräfte auf das System null ist",
          "Nur bei elastischen Stößen",
          "Nur wenn alle Körper dieselbe Masse haben"
        ],
        correctIndex: 1,
        explanation: "Der Impulserhaltungssatz gilt, wenn keine äußere Kraft auf das System wirkt (oder die Summe aller äußeren Kräfte null ist). Interne Kräfte (zwischen Teilsystemen) ändern den Gesamtimpuls nicht."
      },
      {
        id: "q3",
        question: "Wie lautet das 2. Newtonsche Gesetz in der allgemeinen Form?",
        options: [
          "F = m·a (gilt immer exakt)",
          "F = dp/dt (Kraft = zeitliche Änderung des Impulses)",
          "F = m·v",
          "F = Δp / Δv"
        ],
        correctIndex: 1,
        explanation: "Die allgemeine Form ist F = dp/dt. Für konstante Masse vereinfacht sich das zu F = m·(dv/dt) = m·a."
      },
      {
        id: "q4",
        question: "Was versteht man unter einem Kraftstoß?",
        options: [
          "Eine sehr große Kraft über eine sehr kurze Zeit",
          "Das Produkt F · Δt, das der Impulsänderung Δp entspricht",
          "Die Kraft, die ein Stoßprozess erzeugt",
          "Den maximalen Wert der Kraft während eines Stoßes"
        ],
        correctIndex: 1,
        explanation: "Der Kraftstoß J = F · Δt ist gleich der Impulsänderung: J = Δp. Er beschreibt, wie stark und wie lange eine Kraft wirkt, um den Impuls zu ändern."
      },
      {
        id: "q5",
        question: "Zwei gleich schwere Kugeln (m₁ = m₂ = 2 kg) stoßen aufeinander. Kugel 1 bewegt sich mit 3 m/s nach rechts, Kugel 2 ist in Ruhe. Was ist der Gesamtimpuls des Systems?",
        options: [
          "0 kg·m/s",
          "6 kg·m/s nach rechts",
          "3 kg·m/s nach rechts",
          "12 kg·m/s nach rechts"
        ],
        correctIndex: 1,
        explanation: "p_ges = m₁·v₁ + m₂·v₂ = 2·3 + 2·0 = 6 kg·m/s nach rechts. Dieser Wert bleibt beim Stoß erhalten."
      },
      {
        id: "q6",
        question: "Warum kann eine Rakete im Weltraum (Vakuum) beschleunigen?",
        options: [
          "Weil sie sich gegen Sterne abstößt",
          "Weil die Rakete Treibstoff nach hinten ausstößt und der Impulserhaltungssatz die Rakete nach vorne beschleunigt",
          "Weil im Vakuum keine Reibung vorhanden ist",
          "Weil das Gravitationsfeld der Sonne die Rakete antreibt"
        ],
        correctIndex: 1,
        explanation: "Durch Impulserhaltung: Die Rakete stößt Gase nach hinten aus (Impuls rückwärts). Da der Gesamtimpuls erhalten bleibt, erhält die Rakete einen gleich großen Impuls nach vorne (Rückstoßprinzip)."
      },
      {
        id: "q7",
        question: "Eine 70 kg schwere Person springt von einem 10 kg schweren Ruderboot (beide anfangs in Ruhe). Die Person springt mit 2 m/s nach vorne. Mit welcher Geschwindigkeit bewegt sich das Boot?",
        options: [
          "0,14 m/s vorwärts",
          "14 m/s rückwärts",
          "2 m/s rückwärts",
          "0,14 m/s rückwärts"
        ],
        correctIndex: 1,
        explanation: "Impulserhaltung: 0 = m_Person·v_P + m_Boot·v_B → v_B = –70·2/10 = –14 m/s. Das Boot bewegt sich mit 14 m/s in entgegengesetzter Richtung."
      },
      {
        id: "q8",
        question: "Was gilt beim Impuls im Vergleich zur kinetischen Energie?",
        options: [
          "Beide sind skalare Größen",
          "Beide sind vektorielle Größen",
          "Impuls ist ein Vektor, kinetische Energie ist ein Skalar",
          "Impuls ist ein Skalar, kinetische Energie ist ein Vektor"
        ],
        correctIndex: 2,
        explanation: "p = m·v ist ein Vektor (hat Richtung), während E_kin = ½·m·v² ein Skalar (ohne Richtung, immer positiv) ist."
      },
      {
        id: "q9",
        question: "Ein Ball (m = 0,2 kg) wird mit 15 m/s geworfen. Welchen Impuls hat er?",
        options: [
          "0,013 kg·m/s",
          "3 kg·m/s",
          "75 kg·m/s",
          "22,5 kg·m/s"
        ],
        correctIndex: 1,
        explanation: "p = m·v = 0,2 · 15 = 3 kg·m/s."
      },
      {
        id: "q10",
        question: "Was beschreibt der Schwerpunkt (Massenmittelpunkt) eines Teilchensystems?",
        options: [
          "Den Punkt mit der größten Massendichte",
          "Den geometrischen Mittelpunkt des Systems",
          "Den massengewichteten Mittelpunkt, an dem die Gesamtmasse als konzentriert gedacht werden kann",
          "Den Ort, an dem die Gravitationskraft maximal ist"
        ],
        correctIndex: 2,
        explanation: "Der Schwerpunkt (Massenmittelpunkt) ist x_SP = Σ(m_i · x_i) / Σm_i. Er ist der massengewichtete Mittelpunkt und verhält sich, als wäre die Gesamtmasse dort konzentriert."
      }
    ]
  },
  {
    id: "natwiss-energie",
    chapter: 3,
    order: 2,
    title: "Arbeit, Energie und Leistung",
    icon: "⚡",
    summary: "Mechanische Arbeit, kinetische und potenzielle Energie, Energieerhaltungssatz, Leistung und Wirkungsgrad.",
    explanation: [
      { type: "p", text: "Mechanische Arbeit W wird verrichtet, wenn eine Kraft F einen Körper um eine Strecke s in Richtung der Kraft bewegt. Im allgemeinen Fall (Winkel φ zwischen Kraft und Weg):" },
      { type: "formula", tex: "W = F \\cdot s \\cdot \\cos(\\varphi)" },
      { type: "p", text: "Die Einheit der Arbeit ist Joule: 1 J = 1 N·m = 1 kg·m²/s²." },
      { type: "p", text: "Kinetische Energie (Bewegungsenergie): Energie, die ein Körper aufgrund seiner Bewegung besitzt:" },
      { type: "formula", tex: "E_{\\text{kin}} = \\frac{1}{2} \\cdot m \\cdot v^2" },
      { type: "p", text: "Der Arbeit-Energie-Theorem: Die an einem Körper geleistete Netto-Arbeit ist gleich der Änderung seiner kinetischen Energie:" },
      { type: "formula", tex: "W_{\\text{netto}} = \\Delta E_{\\text{kin}}" },
      { type: "p", text: "Potenzielle Energie (Lageenergie, Hubarbeit): Energie, die ein Körper aufgrund seiner Position im Gravitationsfeld besitzt:" },
      { type: "formula", tex: "E_{\\text{pot}} = m \\cdot g \\cdot h" },
      { type: "p", text: "Energieerhaltungssatz (bei konservativen Kräften, z. B. ohne Reibung): Die mechanische Gesamtenergie bleibt konstant:" },
      { type: "formula", tex: "E_{\\text{kin}} + E_{\\text{pot}} = \\text{const}" },
      { type: "p", text: "Bei Reibung (nicht-konservative Kraft) wird mechanische Energie in Wärme umgewandelt. Die Gesamtenergie (inkl. Wärme) ist dennoch erhalten (1. Hauptsatz der Thermodynamik)." },
      { type: "p", text: "Leistung P ist die pro Zeiteinheit verrichtete Arbeit:" },
      { type: "formula", tex: "P = \\frac{W}{t} = \\vec{F} \\cdot \\vec{v}" },
      { type: "p", text: "Einheit: Watt (W) = J/s = kg·m²/s³. Der Wirkungsgrad η gibt an, welcher Anteil der zugeführten Energie nutzbar gemacht wird:" },
      { type: "formula", tex: "\\eta = \\frac{P_{\\text{nutz}}}{P_{\\text{zu}}} = \\frac{W_{\\text{nutz}}}{W_{\\text{zu}}} \\leq 1" }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Eine 500 kg schwere Kiste wird mit einer Kraft von F = 200 N über eine Strecke von s = 10 m gezogen. Die Kraft wirkt unter einem Winkel von φ = 30° zur Bewegungsrichtung. Wie viel Arbeit wird verrichtet?",
        solution: [
          { type: "p", text: "Die Arbeit bei schräg angreifender Kraft:" },
          { type: "formula", tex: "W = F \\cdot s \\cdot \\cos(\\varphi) = 200 \\cdot 10 \\cdot \\cos(30°) = 2000 \\cdot 0{,}866 \\approx 1732 \\text{ J}" },
          { type: "p", text: "Es werden ca. 1732 J ≈ 1,73 kJ mechanische Arbeit verrichtet." }
        ]
      },
      {
        id: "ex2",
        prompt: "Ein Ball wird aus einer Höhe von h = 25 m fallen gelassen (Anfangsgeschwindigkeit = 0). Mit welcher Geschwindigkeit trifft er auf dem Boden auf? (Reibung vernachlässigt)",
        solution: [
          { type: "p", text: "Energieerhaltung: Potenzielle Energie am Start = Kinetische Energie am Boden." },
          { type: "formula", tex: "m \\cdot g \\cdot h = \\frac{1}{2} \\cdot m \\cdot v^2" },
          { type: "formula", tex: "v = \\sqrt{2 \\cdot g \\cdot h} = \\sqrt{2 \\cdot 9{,}81 \\cdot 25} = \\sqrt{490{,}5} \\approx 22{,}1 \\text{ m/s}" },
          { type: "p", text: "Der Ball trifft mit ca. 22,1 m/s ≈ 80 km/h auf dem Boden auf." }
        ]
      },
      {
        id: "ex3",
        prompt: "Ein Fahrzeugmotor mit einer Leistung von P = 100 kW fährt mit einer konstanten Geschwindigkeit von v = 50 m/s (180 km/h). Wie groß ist der Antriebswiderstand (die Kraft gegen die Fahrtrichtung)?",
        solution: [
          { type: "p", text: "Bei konstanter Geschwindigkeit ist Antriebskraft = Widerstandskraft. Aus P = F · v:" },
          { type: "formula", tex: "F = \\frac{P}{v} = \\frac{100000 \\text{ W}}{50 \\text{ m/s}} = 2000 \\text{ N} = 2 \\text{ kN}" }
        ]
      },
      {
        id: "ex4",
        prompt: "Ein Elektromotor soll eine Last von m = 200 kg um h = 15 m in t = 30 s anheben. Welche Mindestleistung benötigt der Motor?",
        solution: [
          { type: "p", text: "Die zu verrichtende Hubarbeit:" },
          { type: "formula", tex: "W = m \\cdot g \\cdot h = 200 \\cdot 9{,}81 \\cdot 15 = 29430 \\text{ J}" },
          { type: "p", text: "Mindestleistung (Wirkungsgrad = 100%):" },
          { type: "formula", tex: "P = \\frac{W}{t} = \\frac{29430}{30} = 981 \\text{ W} \\approx 1 \\text{ kW}" }
        ]
      },
      {
        id: "ex5",
        prompt: "Ein Elektromotor nimmt eine elektrische Leistung von P_zu = 5 kW auf und gibt eine mechanische Nutzleistung von P_nutz = 4 kW ab. Berechnen Sie den Wirkungsgrad.",
        solution: [
          { type: "p", text: "Wirkungsgrad:" },
          { type: "formula", tex: "\\eta = \\frac{P_{\\text{nutz}}}{P_{\\text{zu}}} = \\frac{4 \\text{ kW}}{5 \\text{ kW}} = 0{,}8 = 80\\,\\%" },
          { type: "p", text: "Der Wirkungsgrad beträgt 80 %. 20 % der zugeführten Energie werden in Wärme umgewandelt (Verluste durch Reibung, Wärmeabstrahlung usw.)." }
        ]
      }
    ],
    quiz: [
      {
        id: "q1",
        question: "Welche Einheit hat die mechanische Arbeit?",
        options: [
          "Newton (N)",
          "Watt (W)",
          "Joule (J) = N·m",
          "Pascal (Pa)"
        ],
        correctIndex: 2,
        explanation: "Die Einheit der Arbeit ist Joule: 1 J = 1 N·m = 1 kg·m²/s²."
      },
      {
        id: "q2",
        question: "Wann ist die von einer Kraft F geleistete Arbeit null?",
        options: [
          "Wenn F = 0",
          "Wenn die Kraft senkrecht zur Bewegungsrichtung steht (φ = 90°)",
          "Wenn die Bewegung sehr langsam ist",
          "Wenn die Masse sehr groß ist"
        ],
        correctIndex: 1,
        explanation: "W = F·s·cos(φ). Bei φ = 90° ist cos(90°) = 0, also W = 0. Beispiel: Die Normalkraft auf einer horizontalen Fläche leistet keine Arbeit bei horizontaler Bewegung."
      },
      {
        id: "q3",
        question: "Wie lautet die Formel für die kinetische Energie?",
        options: [
          "E_kin = m·v",
          "E_kin = m·g·h",
          "E_kin = ½·m·v²",
          "E_kin = F·s"
        ],
        correctIndex: 2,
        explanation: "Die kinetische Energie (Bewegungsenergie) eines Körpers der Masse m mit Geschwindigkeit v beträgt E_kin = ½·m·v²."
      },
      {
        id: "q4",
        question: "Wann gilt der mechanische Energieerhaltungssatz (E_kin + E_pot = const)?",
        options: [
          "Nur bei sehr langsamen Bewegungen",
          "Nur wenn keine nicht-konservativen Kräfte (wie Reibung) wirken",
          "Immer, auch mit Reibung",
          "Nur bei senkrechten Bewegungen"
        ],
        correctIndex: 1,
        explanation: "Der mechanische Energieerhaltungssatz gilt nur bei konservativen Kräften (z. B. Gravitation, Federkraft). Mit Reibung wird mechanische Energie in Wärme umgewandelt."
      },
      {
        id: "q5",
        question: "Ein Auto wird von v = 0 auf v = 20 m/s beschleunigt (m = 1000 kg). Wie groß ist die dabei aufgenommene kinetische Energie?",
        options: [
          "20000 J",
          "10000 J",
          "200000 J",
          "400000 J"
        ],
        correctIndex: 2,
        explanation: "E_kin = ½·m·v² = ½·1000·20² = ½·1000·400 = 200000 J = 200 kJ."
      },
      {
        id: "q6",
        question: "Was ist Leistung?",
        options: [
          "Das Produkt aus Kraft und Weg",
          "Die pro Zeiteinheit verrichtete Arbeit: P = W/t",
          "Die gespeicherte potenzielle Energie",
          "Das Verhältnis von Kraft zu Masse"
        ],
        correctIndex: 1,
        explanation: "Die Leistung P = W/t = F·v beschreibt, wie schnell Arbeit verrichtet wird. Einheit: Watt (W) = J/s."
      },
      {
        id: "q7",
        question: "Was sagt der Wirkungsgrad η aus?",
        options: [
          "Das Verhältnis von Nutzleistung zu zugeführter Leistung (zwischen 0 und 1)",
          "Die maximal erreichbare Geschwindigkeit einer Maschine",
          "Der Anteil der Energie, der in Wärme umgewandelt wird",
          "Das Verhältnis von Kraft zu Geschwindigkeit"
        ],
        correctIndex: 0,
        explanation: "Wirkungsgrad η = P_nutz / P_zu (0 ≤ η ≤ 1). Er gibt an, welcher Bruchteil der zugeführten Energie als Nutzarbeit verfügbar ist. Der Rest wird z. B. in Wärme umgewandelt."
      },
      {
        id: "q8",
        question: "Ein Stein fällt von einem Turm. Welche Energieumwandlung findet statt?",
        options: [
          "Kinetische Energie wird in potenzielle Energie umgewandelt",
          "Potenzielle Energie wird in kinetische Energie umgewandelt",
          "Wärme wird in kinetische Energie umgewandelt",
          "Keine Energieumwandlung, Energie bleibt konstant"
        ],
        correctIndex: 1,
        explanation: "Beim Fall nimmt die Höhe h ab, daher nimmt E_pot = m·g·h ab. Gleichzeitig nimmt v und damit E_kin = ½·m·v² zu. Potenzielle Energie wird in kinetische umgewandelt."
      },
      {
        id: "q9",
        question: "Wie verdoppelt sich die kinetische Energie, wenn die Geschwindigkeit verdoppelt wird?",
        options: [
          "Die kinetische Energie verdoppelt sich",
          "Die kinetische Energie vervierfacht sich",
          "Die kinetische Energie nimmt um den Faktor √2 zu",
          "Die kinetische Energie bleibt gleich"
        ],
        correctIndex: 1,
        explanation: "E_kin = ½·m·v². Bei v' = 2v: E_kin' = ½·m·(2v)² = 4·½·m·v² = 4·E_kin. Die kinetische Energie vervierfacht sich bei Verdoppelung der Geschwindigkeit."
      },
      {
        id: "q10",
        question: "Welche Einheit hat die Leistung?",
        options: [
          "Joule (J)",
          "Newton·Meter (N·m)",
          "Watt (W) = J/s",
          "Kilogramm·Meter (kg·m)"
        ],
        correctIndex: 2,
        explanation: "Die Einheit der Leistung ist Watt: 1 W = 1 J/s = 1 kg·m²/s³."
      }
    ]
  },
  {
    id: "natwiss-stoesse",
    chapter: 3,
    order: 3,
    title: "Stoßprozesse",
    icon: "🎱",
    summary: "Elastische, unelastische und vollkommen unelastische Stöße – Impuls- und Energieerhaltung, Stoßformeln und die Stoßzahl.",
    explanation: [
      { type: "p", text: "Bei Stoßprozessen zwischen zwei Körpern gilt stets der Impulserhaltungssatz. Je nach Art des Stoßes bleibt die kinetische Energie erhalten oder nicht." },
      { type: "p", text: "Elastischer Stoß: Impuls UND kinetische Energie bleiben erhalten. Beispiel: Billardkugeln, Atome. Die Endgeschwindigkeiten beim zentralen elastischen Stoß in 1D:" },
      { type: "formula", tex: "v_1' = \\frac{(m_1 - m_2) \\cdot v_1 + 2 m_2 \\cdot v_2}{m_1 + m_2}" },
      { type: "formula", tex: "v_2' = \\frac{(m_2 - m_1) \\cdot v_2 + 2 m_1 \\cdot v_1}{m_1 + m_2}" },
      { type: "p", text: "Sonderfall gleiche Massen (m₁ = m₂): Die Geschwindigkeiten tauschen sich aus. v₁' = v₂ und v₂' = v₁." },
      { type: "p", text: "Sonderfall m₁ >> m₂ (schwerer Körper trifft leichten): Der schwere Körper ändert seine Geschwindigkeit kaum, der leichte erhält etwa die doppelte Geschwindigkeit." },
      { type: "p", text: "Unelastischer Stoß: Der Impuls ist erhalten, aber kinetische Energie wird in innere Energie (Wärme, Verformung) umgewandelt. Die Körper trennen sich nach dem Stoß." },
      { type: "p", text: "Vollkommen unelastischer Stoß: Die Körper bleiben nach dem Stoß zusammenhaften. Der Impulsverlust an kinetischer Energie ist maximal:" },
      { type: "formula", tex: "v' = \\frac{m_1 \\cdot v_1 + m_2 \\cdot v_2}{m_1 + m_2}" },
      { type: "p", text: "Die Stoßzahl e (Restitutionskoeffizient) charakterisiert die Art des Stoßes:" },
      { type: "formula", tex: "e = \\frac{|v_2' - v_1'|}{|v_1 - v_2|} = \\frac{\\text{Relativgeschwindigkeit nach Stoß}}{\\text{Relativgeschwindigkeit vor Stoß}}" },
      { type: "list", items: [
        "e = 1: vollkommen elastischer Stoß",
        "0 < e < 1: teilweise unelastischer Stoß",
        "e = 0: vollkommen unelastischer Stoß (Körper bleiben zusammen)"
      ]}
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Eine 2 kg schwere Kugel (A) bewegt sich mit v_A = 5 m/s und stößt zentral und elastisch auf eine gleichschwere ruhende Kugel (B). Berechnen Sie die Geschwindigkeiten nach dem Stoß.",
        solution: [
          { type: "p", text: "Bei gleichem Massen (m₁ = m₂) tauschen beim elastischen Stoß die Geschwindigkeiten:" },
          { type: "formula", tex: "v_A' = v_B = 0 \\text{ m/s (Kugel A kommt zum Stillstand)}" },
          { type: "formula", tex: "v_B' = v_A = 5 \\text{ m/s (Kugel B bewegt sich mit 5 m/s weiter)}" },
          { type: "p", text: "Dies ist das bekannte Billard-Prinzip: Die stoßende Kugel bleibt stehen, die gestoßene nimmt die Geschwindigkeit auf." }
        ]
      },
      {
        id: "ex2",
        prompt: "Eine 5 kg schwere Kugel (A) mit v_A = 4 m/s stößt elastisch auf eine 10 kg schwere Kugel (B) mit v_B = 1 m/s (beide bewegen sich in dieselbe Richtung). Berechnen Sie die Geschwindigkeiten nach dem Stoß.",
        solution: [
          { type: "p", text: "Verwendung der Stoßformeln für den elastischen Stoß:" },
          { type: "formula", tex: "v_A' = \\frac{(m_A - m_B)v_A + 2 m_B v_B}{m_A + m_B} = \\frac{(5-10) \\cdot 4 + 2 \\cdot 10 \\cdot 1}{15} = \\frac{-20 + 20}{15} = 0 \\text{ m/s}" },
          { type: "formula", tex: "v_B' = \\frac{(m_B - m_A)v_B + 2 m_A v_A}{m_A + m_B} = \\frac{(10-5) \\cdot 1 + 2 \\cdot 5 \\cdot 4}{15} = \\frac{5 + 40}{15} = \\frac{45}{15} = 3 \\text{ m/s}" },
          { type: "p", text: "Kugel A kommt zum Stillstand, Kugel B bewegt sich mit 3 m/s weiter." }
        ]
      },
      {
        id: "ex3",
        prompt: "Ein 1000 kg schweres Auto (v₁ = 20 m/s) fährt auf ein stehendes 1500 kg schweres Auto (v₂ = 0) auf. Sie bleiben ineinander verhakt (vollkommen unelastischer Stoß). Berechnen Sie die gemeinsame Geschwindigkeit nach dem Stoß.",
        solution: [
          { type: "p", text: "Beim vollkommen unelastischen Stoß (Körper bleiben zusammen):" },
          { type: "formula", tex: "v' = \\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2} = \\frac{1000 \\cdot 20 + 1500 \\cdot 0}{1000 + 1500} = \\frac{20000}{2500} = 8 \\text{ m/s}" }
        ]
      },
      {
        id: "ex4",
        prompt: "Beim Auffahrunfall aus Aufgabe 3: Welcher Anteil der kinetischen Energie geht verloren?",
        solution: [
          { type: "p", text: "Kinetische Energie vor dem Stoß:" },
          { type: "formula", tex: "E_{\\text{vor}} = \\frac{1}{2} m_1 v_1^2 = \\frac{1}{2} \\cdot 1000 \\cdot 20^2 = 200000 \\text{ J}" },
          { type: "p", text: "Kinetische Energie nach dem Stoß:" },
          { type: "formula", tex: "E_{\\text{nach}} = \\frac{1}{2} (m_1 + m_2) v'^2 = \\frac{1}{2} \\cdot 2500 \\cdot 8^2 = 80000 \\text{ J}" },
          { type: "p", text: "Verlorene kinetische Energie und Verlustanteil:" },
          { type: "formula", tex: "\\Delta E = 200000 - 80000 = 120000 \\text{ J}" },
          { type: "formula", tex: "\\text{Anteil} = \\frac{\\Delta E}{E_{\\text{vor}}} = \\frac{120000}{200000} = 0{,}6 = 60\\,\\%" },
          { type: "p", text: "60 % der kinetischen Energie gehen in Verformungsarbeit und Wärme über. Diese Energie ist für die Zerstörung der Fahrzeuge verantwortlich." }
        ]
      },
      {
        id: "ex5",
        prompt: "Ein Ball wird aus h₁ = 2 m Höhe fallen gelassen und prallt auf den Boden. Er springt bis auf h₂ = 1,5 m hoch. Berechnen Sie die Stoßzahl e.",
        solution: [
          { type: "p", text: "Auftreffgeschwindigkeit (vor dem Stoß, nach unten): v₁ = √(2·g·h₁)" },
          { type: "p", text: "Absprunggeschwindigkeit (nach dem Stoß, nach oben): v₂ = √(2·g·h₂)" },
          { type: "p", text: "Die Stoßzahl ist das Verhältnis der Relativgeschwindigkeiten. Da der Boden unbewegt bleibt, gilt:" },
          { type: "formula", tex: "e = \\frac{v_2'}{v_1} = \\frac{\\sqrt{2 g h_2}}{\\sqrt{2 g h_1}} = \\sqrt{\\frac{h_2}{h_1}} = \\sqrt{\\frac{1{,}5}{2}} = \\sqrt{0{,}75} \\approx 0{,}866" },
          { type: "p", text: "Die Stoßzahl beträgt ca. 0,866. Da e < 1, handelt es sich um einen unelastischen Stoß." }
        ]
      }
    ],
    quiz: [
      {
        id: "q1",
        question: "Was ist beim elastischen Stoß erhalten?",
        options: [
          "Nur der Impuls",
          "Nur die kinetische Energie",
          "Sowohl Impuls als auch kinetische Energie",
          "Weder Impuls noch kinetische Energie"
        ],
        correctIndex: 2,
        explanation: "Beim elastischen Stoß sind sowohl der Gesamtimpuls als auch die gesamte kinetische Energie erhalten. Beispiel: Billardkugeln, elastische Atome."
      },
      {
        id: "q2",
        question: "Was ist beim vollkommen unelastischen Stoß charakteristisch?",
        options: [
          "Beide Größen (Impuls und Energie) sind nicht erhalten",
          "Die Körper bleiben nach dem Stoß zusammen, der Impuls ist erhalten, aber ein Maximum an kinetischer Energie geht verloren",
          "Die kinetische Energie ist erhalten, aber der Impuls nicht",
          "Die Körper prallen voneinander ab, ohne Energie zu verlieren"
        ],
        correctIndex: 1,
        explanation: "Beim vollkommen unelastischen Stoß bleiben die Körper zusammen. Der Impuls ist erhalten, aber es geht maximal mögliche kinetische Energie in Wärme/Verformung über."
      },
      {
        id: "q3",
        question: "Zwei gleich schwere Kugeln stoßen elastisch zusammen. Kugel 1 bewegt sich mit v, Kugel 2 ist in Ruhe. Was passiert?",
        options: [
          "Beide Kugeln bewegen sich danach mit v/2",
          "Kugel 1 prallt zurück, Kugel 2 bleibt stehen",
          "Kugel 1 kommt zum Stillstand, Kugel 2 bewegt sich mit v",
          "Beide Kugeln bleiben stehen"
        ],
        correctIndex: 2,
        explanation: "Bei gleichen Massen tauschen die Geschwindigkeiten beim elastischen Stoß: v₁' = 0, v₂' = v. Dies ist das Billard-Prinzip."
      },
      {
        id: "q4",
        question: "Was gibt die Stoßzahl e an?",
        options: [
          "Den Quotienten aus kinetischer Energie nach und vor dem Stoß",
          "Das Verhältnis der Relativgeschwindigkeit nach dem Stoß zur Relativgeschwindigkeit vor dem Stoß",
          "Den Energieverlust beim Stoß in Prozent",
          "Die Masse des schwereren Körpers geteilt durch die Gesamtmasse"
        ],
        correctIndex: 1,
        explanation: "Die Stoßzahl e = |v₂'−v₁'| / |v₁−v₂|. Für e = 1: elastisch, e = 0: vollkommen unelastisch, 0 < e < 1: teilweise unelastisch."
      },
      {
        id: "q5",
        question: "Beim vollkommen unelastischen Stoß zwischen m₁ = m₂ = 1 kg (v₁ = 6 m/s, v₂ = 0). Welche Geschwindigkeit haben beide nach dem Stoß?",
        options: [
          "6 m/s",
          "3 m/s",
          "0 m/s",
          "4 m/s"
        ],
        correctIndex: 1,
        explanation: "v' = (m₁·v₁ + m₂·v₂)/(m₁+m₂) = (1·6 + 1·0)/2 = 6/2 = 3 m/s."
      },
      {
        id: "q6",
        question: "Was geschieht mit der kinetischen Energie beim vollkommen unelastischen Stoß?",
        options: [
          "Sie bleibt vollständig erhalten",
          "Sie wird verdoppelt",
          "Ein Teil wird in Wärme und Verformungsarbeit umgewandelt",
          "Sie wird komplett in potenzielle Energie umgewandelt"
        ],
        correctIndex: 2,
        explanation: "Beim unelastischen Stoß geht ein Teil der kinetischen Energie in innere Energie (Wärme, Verformung) über. Die Gesamtenergie bleibt zwar erhalten, aber die mechanische kinetische Energie nimmt ab."
      },
      {
        id: "q7",
        question: "Eine sehr schwere Kugel (m₁ >> m₂) stößt elastisch auf eine leichte ruhende Kugel. Was passiert näherungsweise?",
        options: [
          "Beide Kugeln kommen zum Stillstand",
          "Die schwere Kugel ändert ihre Geschwindigkeit kaum, die leichte bekommt die doppelte Geschwindigkeit der schweren",
          "Die Kugeln tauschen ihre Geschwindigkeiten",
          "Die schwere Kugel wird zurückgeworfen"
        ],
        correctIndex: 1,
        explanation: "Bei m₁ >> m₂: v₁' ≈ v₁ (kaum Änderung), v₂' ≈ 2·v₁. Die leichte Kugel bekommt die doppelte Geschwindigkeit des Stoßkörpers."
      },
      {
        id: "q8",
        question: "Gilt der Impulserhaltungssatz beim unelastischen Stoß?",
        options: [
          "Nein, der Impuls geht zusammen mit der kinetischen Energie verloren",
          "Ja, der Gesamtimpuls ist immer erhalten, auch beim unelastischen Stoß",
          "Nur wenn die Massen gleich sind",
          "Nur wenn keine Verformung auftritt"
        ],
        correctIndex: 1,
        explanation: "Der Impulserhaltungssatz gilt immer (wenn keine äußere Kraft wirkt), auch beim unelastischen Stoß. Nur die kinetische Energie ist beim unelastischen Stoß nicht erhalten."
      },
      {
        id: "q9",
        question: "Eine Kugel prallt von einer Wand mit derselben Geschwindigkeit zurück (Wandmasse → ∞). Wie groß ist die Stoßzahl e?",
        options: [
          "e = 0",
          "e = 0,5",
          "e = 1",
          "e > 1"
        ],
        correctIndex: 2,
        explanation: "Die Relativgeschwindigkeit bleibt bei diesem ideal-elastischen Stoß in ihrem Betrag gleich (Richtung kehrt um). Damit ist e = |v'| / |v| = 1. Vollkommen elastischer Stoß."
      },
      {
        id: "q10",
        question: "Warum ist bei Crashtests in der Fahrzeugsicherheit ein hoher Energieabbau (viel Verformungsarbeit) erwünscht?",
        options: [
          "Weil dann die Fahrzeuge mehr Impuls haben",
          "Weil durch plastische Verformung kinetische Energie vernichtet wird und so weniger Energie auf die Insassen übertragen wird",
          "Weil steifere Fahrzeuge weniger Reibung haben",
          "Weil der Impulserhaltungssatz bei verformbaren Körpern nicht gilt"
        ],
        correctIndex: 1,
        explanation: "Knautschzonen sind gewollt unelastisch. Sie wandeln kinetische Energie in Verformungsarbeit um. Je mehr Energie die Karosserie absorbiert, desto weniger Energie wirkt auf die Insassen. Der Impuls muss zwar abgebaut werden, aber über eine längere Zeit (größerer Weg) – also kleinere Kraft."
      }
    ]
  }
];
