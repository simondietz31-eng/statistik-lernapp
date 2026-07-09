const NATWISS_CHAPTER2_TOPICS = [
  {
    id: "natwiss-newton-axiome",
    chapter: 2,
    order: 1,
    title: "Newtonsche Axiome",
    icon: "⚖️",
    summary: "Die drei Newtonschen Grundgesetze der Mechanik: Trägheitsprinzip, Kraftgesetz F = m·a und das Prinzip der Wechselwirkung.",
    explanation: [
      { type: "p", text: "Die Dynamik untersucht die Ursachen von Bewegungen – die Kräfte. Isaac Newton formulierte drei grundlegende Gesetze, die die klassische Mechanik bis heute prägen." },
      { type: "p", text: "1. Newtonsches Gesetz (Trägheitsprinzip / Lex Prima): Ein Körper verharrt im Zustand der Ruhe oder der gleichförmigen geradlinigen Bewegung, solange keine resultierende äußere Kraft auf ihn einwirkt." },
      { type: "p", text: "2. Newtonsches Gesetz (Aktionsprinzip / Lex Secunda): Die Kraft ist gleich dem Produkt aus Masse und Beschleunigung. Im allgemeineren Fall gilt F = dp/dt:" },
      { type: "formula", tex: "\\vec{F} = m \\cdot \\vec{a}" },
      { type: "p", text: "Die Einheit der Kraft ist Newton: 1 N = 1 kg·m/s². Die Gewichtskraft eines Körpers ist:" },
      { type: "formula", tex: "F_G = m \\cdot g" },
      { type: "p", text: "Wichtig: Masse (in kg) und Gewichtskraft (in N) sind verschiedene physikalische Größen! Auf dem Mond ist die Masse gleich, die Gewichtskraft aber kleiner." },
      { type: "p", text: "3. Newtonsches Gesetz (Reaktionsprinzip / Actio = Reactio): Kräfte treten stets paarweise auf. Wenn Körper 1 eine Kraft auf Körper 2 ausübt, wirkt gleichzeitig eine gleich große, entgegengesetzte Kraft von Körper 2 auf Körper 1:" },
      { type: "formula", tex: "\\vec{F}_{12} = -\\vec{F}_{21}" },
      { type: "p", text: "Das Superpositionsprinzip der Kräfte: Wirken mehrere Kräfte auf einen Körper, so ist die Gesamtkraft die vektorielle Summe aller Einzelkräfte:" },
      { type: "formula", tex: "\\vec{F}_{\\text{ges}} = \\sum_i \\vec{F}_i" },
      { type: "p", text: "Zur Analyse von Kräften werden Kräftediagramme (Freikörperdiagramme) eingesetzt: Man zeichnet den Körper frei und trägt alle angreifenden Kräfte als Pfeile ein (Gewichtskraft, Normalkraft, Reibung, Seilkraft, ...)." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Welche Kraft ist erforderlich, um ein Auto der Masse m = 1500 kg mit einer Beschleunigung von a = 2 m/s² anzutreiben? (Reibung vernachlässigt)",
        solution: [
          { type: "p", text: "Anwendung des 2. Newtonschen Gesetzes:" },
          { type: "formula", tex: "F = m \\cdot a = 1500 \\text{ kg} \\cdot 2 \\text{ m/s}^2 = 3000 \\text{ N} = 3 \\text{ kN}" }
        ]
      },
      {
        id: "ex2",
        prompt: "An einem senkrechten Seil hängt eine Masse von m = 5 kg. Wie groß ist die Seilkraft (Spannung im Seil) im Gleichgewicht?",
        solution: [
          { type: "p", text: "Im Gleichgewicht heben sich Seilkraft und Gewichtskraft auf:" },
          { type: "formula", tex: "F_S = F_G = m \\cdot g = 5 \\cdot 9{,}81 = 49{,}05 \\text{ N} \\approx 49{,}1 \\text{ N}" }
        ]
      },
      {
        id: "ex3",
        prompt: "Auf einen Körper wirken zwei senkrecht aufeinanderstehende Kräfte: F₁ = 30 N und F₂ = 40 N. Berechnen Sie die Größe der resultierenden Kraft.",
        solution: [
          { type: "p", text: "Da die Kräfte senkrecht zueinander stehen, gilt der Satz des Pythagoras:" },
          { type: "formula", tex: "F_{\\text{res}} = \\sqrt{F_1^2 + F_2^2} = \\sqrt{30^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50 \\text{ N}" }
        ]
      },
      {
        id: "ex4",
        prompt: "Erklären Sie anhand des 3. Newtonschen Gesetzes, warum eine Rakete im leeren Weltall (ohne Luft zum Abstoßen) vorwärts beschleunigt werden kann.",
        solution: [
          { type: "p", text: "Actio = Reactio: Die Rakete stößt Verbrennungsgase mit großer Geschwindigkeit nach hinten aus. Laut dem 3. Newtonschen Gesetz übt die Rakete eine Kraft auf die Gase aus (rückwärts), und die Gase üben eine gleich große, entgegengesetzte Kraft auf die Rakete aus (vorwärts). Diese Reaktionskraft ist der Schub. Die Rakete braucht keine Luft als Widerlager – die Gesetze gelten auch im Vakuum." }
        ]
      },
      {
        id: "ex5",
        prompt: "Ein Auto (m = 1200 kg) bremst gleichmäßig von v₀ = 20 m/s bis zum Stillstand auf einer Strecke von s = 50 m. Berechnen Sie die Bremskraft.",
        solution: [
          { type: "p", text: "Zuerst die Verzögerung aus der kinematischen Formel v² = v₀² + 2·a·s bestimmen:" },
          { type: "formula", tex: "0 = 20^2 + 2 \\cdot a \\cdot 50 \\quad \\Rightarrow \\quad a = -\\frac{400}{100} = -4 \\text{ m/s}^2" },
          { type: "p", text: "Die Bremskraft (Betrag):" },
          { type: "formula", tex: "F_B = m \\cdot |a| = 1200 \\cdot 4 = 4800 \\text{ N} = 4{,}8 \\text{ kN}" }
        ]
      }
    ],
    quiz: [
      {
        id: "q1",
        question: "Was besagt das 1. Newtonsche Gesetz (Trägheitsprinzip)?",
        options: [
          "Kraft ist Masse mal Beschleunigung",
          "Ein Körper bleibt in Ruhe oder gleichförmiger Bewegung, solange keine resultierende Kraft wirkt",
          "Zu jeder Kraft gibt es eine gleich große Gegenkraft",
          "Kräfte kann man vektoriell addieren"
        ],
        correctIndex: 1,
        explanation: "Das Trägheitsprinzip (1. Newtonsches Gesetz) besagt: Ohne äußere resultierende Kraft ändert ein Körper seinen Bewegungszustand nicht."
      },
      {
        id: "q2",
        question: "Welche Einheit hat die Kraft im SI-System?",
        options: [
          "kg/m²",
          "kg·m/s",
          "Newton (N) = kg·m/s²",
          "Joule (J)"
        ],
        correctIndex: 2,
        explanation: "Aus F = m·a folgt: [F] = kg·m/s² = N (Newton). 1 N ist die Kraft, die einer Masse von 1 kg eine Beschleunigung von 1 m/s² erteilt."
      },
      {
        id: "q3",
        question: "Was ist der Unterschied zwischen Masse und Gewichtskraft?",
        options: [
          "Es gibt keinen Unterschied, beide sind gleich",
          "Masse ist in kg, Gewichtskraft in N. Die Masse ist konstant, die Gewichtskraft hängt von g ab",
          "Gewichtskraft ist immer größer als die Masse",
          "Die Masse wird auf der Waage gemessen und ist standortabhängig"
        ],
        correctIndex: 1,
        explanation: "Masse (kg) ist eine intrinsische Eigenschaft des Körpers und standortunabhängig. Die Gewichtskraft F_G = m·g (in Newton) hängt von der Ortsbeschleunigung g ab und ist z.B. auf dem Mond kleiner."
      },
      {
        id: "q4",
        question: "Was beschreibt das 3. Newtonsche Gesetz (Actio = Reactio)?",
        options: [
          "Die Summe aller Kräfte ist null",
          "Kräfte wirken immer paarweise: Kraft und Gegenkraft sind gleich groß und entgegengesetzt gerichtet",
          "Ein Körper kann keine Kraft auf sich selbst ausüben",
          "Reibungskräfte sind stets gleich der Normalkraft"
        ],
        correctIndex: 1,
        explanation: "Actio = Reactio: Jede Kraft zwischen zwei Körpern hat eine gleich große, entgegengesetzte Gegenkraft. F₁₂ = –F₂₁."
      },
      {
        id: "q5",
        question: "Eine Kraft von 500 N wirkt auf einen 50 kg schweren Körper. Welche Beschleunigung erfährt er?",
        options: [
          "a = 25000 m/s²",
          "a = 0,1 m/s²",
          "a = 10 m/s²",
          "a = 50 m/s²"
        ],
        correctIndex: 2,
        explanation: "F = m·a → a = F/m = 500/50 = 10 m/s²."
      },
      {
        id: "q6",
        question: "Wirken auf einen ruhenden Körper zwei entgegengesetzte Kräfte F₁ = 100 N und F₂ = 60 N. Was passiert?",
        options: [
          "Der Körper bleibt in Ruhe (Kräftegleichgewicht)",
          "Der Körper beschleunigt in Richtung der größeren Kraft F₁",
          "Der Körper beschleunigt in Richtung der kleineren Kraft F₂",
          "Beide Kräfte heben sich auf, da sie entgegengesetzt wirken"
        ],
        correctIndex: 1,
        explanation: "Die Resultierende beträgt F_res = 100 – 60 = 40 N in Richtung von F₁. Der Körper beschleunigt entsprechend a = 40 N / m in diese Richtung."
      },
      {
        id: "q7",
        question: "Warum gleitet ein Körper auf einer Fläche weiter, wenn man aufhört zu schieben (solange Reibung vernachlässigt wird)?",
        options: [
          "Weil eine Restkraft noch nachwirkt",
          "Wegen des Trägheitsprinzips: ohne äußere Kraft ändert sich die Bewegung nicht",
          "Weil die Normalkraft ihn vorwärtstreibt",
          "Wegen der Schwerkraft, die horizontal wirkt"
        ],
        correctIndex: 1,
        explanation: "Das 1. Newtonsche Gesetz (Trägheitsprinzip): Ohne resultierende äußere Kraft behält ein Körper seinen Bewegungszustand bei. Ohne Reibung bleibt die Geschwindigkeit konstant."
      },
      {
        id: "q8",
        question: "Wie wirkt Actio = Reactio beim Schwimmen? Eine Person stößt mit den Armen Wasser nach hinten.",
        options: [
          "Das Wasser hat keine Wirkung auf den Schwimmer",
          "Das Wasser drückt den Schwimmer nach vorne (Reaktionskraft)",
          "Die Trägheit des Wassers erzeugt eine Kraft nach hinten auf den Schwimmer",
          "Das Wasser zieht den Schwimmer nach unten"
        ],
        correctIndex: 1,
        explanation: "Actio = Reactio: Der Schwimmer drückt Wasser nach hinten (Actio). Das Wasser drückt den Schwimmer mit gleich großer Kraft nach vorne (Reactio) – so bewegt er sich vorwärts."
      },
      {
        id: "q9",
        question: "Was versteht man unter einem Freikörperdiagramm (Kräftediagramm)?",
        options: [
          "Ein Diagramm, das die Bewegungsbahn darstellt",
          "Eine Skizze, bei der ein Körper isoliert dargestellt und alle auf ihn wirkenden Kräfte eingezeichnet werden",
          "Ein Diagramm zur Darstellung der Energie als Funktion der Zeit",
          "Eine grafische Darstellung der Reibungskoeffizienten"
        ],
        correctIndex: 1,
        explanation: "Im Freikörperdiagramm wird der Körper frei gezeichnet (von seiner Umgebung losgelöst) und alle angreifenden Kräfte werden als Vektorpfeile eingetragen."
      },
      {
        id: "q10",
        question: "Ein Körper der Masse 2 kg hat auf der Erde eine Gewichtskraft von ca. 19,6 N. Wie groß ist seine Gewichtskraft auf dem Mond (g_Mond ≈ 1,62 m/s²)?",
        options: [
          "19,6 N (Masse und Gewichtskraft sind gleich)",
          "3,24 N",
          "12,1 N",
          "1,62 N"
        ],
        correctIndex: 1,
        explanation: "F_G = m · g_Mond = 2 · 1,62 = 3,24 N. Die Masse bleibt konstant (2 kg), aber die Gewichtskraft ist auf dem Mond nur ca. 1/6 so groß wie auf der Erde."
      }
    ]
  },
  {
    id: "natwiss-reibung-gravitation",
    chapter: 2,
    order: 2,
    title: "Reibungskräfte und Gravitationsgesetz",
    icon: "🪨",
    summary: "Haft- und Gleitreibung, Luftwiderstand, das Newtonsche Gravitationsgesetz und die Federkraft nach dem Hookeschen Gesetz.",
    explanation: [
      { type: "p", text: "Reibungskräfte entstehen an den Kontaktflächen zwischen Körpern. Man unterscheidet Haftreibung (Körper bewegt sich nicht) und Gleitreibung (Körper bewegt sich)." },
      { type: "p", text: "Haftreibung: Die Haftreibungskraft ist nach oben begrenzt und kann jeden Wert bis zu ihrem Maximum annehmen:" },
      { type: "formula", tex: "F_H \\leq \\mu_H \\cdot F_N" },
      { type: "p", text: "Gleitreibung: Wenn ein Körper gleitet, gilt:" },
      { type: "formula", tex: "F_R = \\mu_G \\cdot F_N" },
      { type: "p", text: "Dabei ist F_N die Normalkraft (senkrecht zur Fläche), μ_H der Haftreibungskoeffizient und μ_G der Gleitreibungskoeffizient. Es gilt stets μ_G < μ_H (daher ist es schwerer, etwas in Bewegung zu setzen als es zu halten)." },
      { type: "p", text: "Luftwiderstand: Bei Bewegung in der Luft wirkt eine Widerstandskraft, die proportional zum Quadrat der Geschwindigkeit ist:" },
      { type: "formula", tex: "F_L = \\frac{1}{2} \\cdot \\rho \\cdot c_W \\cdot A \\cdot v^2" },
      { type: "p", text: "Dabei ist ρ die Luftdichte, c_W der Strömungswiderstandskoeffizient (Cw-Wert) und A die Stirnfläche." },
      { type: "p", text: "Newtonsches Gravitationsgesetz: Zwei Massen m₁ und m₂ ziehen sich mit der Gravitationskraft an:" },
      { type: "formula", tex: "F = G \\cdot \\frac{m_1 \\cdot m_2}{r^2}" },
      { type: "p", text: "Mit der Gravitationskonstante G = 6,674·10⁻¹¹ N·m²/kg². Die Erdbeschleunigung ergibt sich daraus zu g = G·M_Erde/R_Erde²." },
      { type: "p", text: "Am schiefen Hang mit Neigungswinkel θ gilt für die Kraftkomponenten:" },
      { type: "formula", tex: "F_{\\parallel} = m \\cdot g \\cdot \\sin(\\theta) \\quad (\\text{hangparallel})" },
      { type: "formula", tex: "F_{\\perp} = m \\cdot g \\cdot \\cos(\\theta) = F_N \\quad (\\text{senkrecht zur Fläche})" },
      { type: "p", text: "Hookesches Gesetz (Federkraft): Eine Feder übt bei Auslenkung x eine rücktreibende Kraft proportional zur Auslenkung aus:" },
      { type: "formula", tex: "F = -k \\cdot x" },
      { type: "p", text: "Dabei ist k die Federkonstante (Federsteifigkeit) in N/m." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Block liegt auf einer Schiefen Ebene mit Neigungswinkel θ = 30°. Der Haftreibungskoeffizient beträgt μ_H = 0,6. Bleibt der Block liegen oder gleitet er?",
        solution: [
          { type: "p", text: "Der Block gleitet, wenn die Hangkomponente der Gewichtskraft die maximale Haftreibungskraft übersteigt:" },
          { type: "formula", tex: "m g \\sin(30°) > \\mu_H \\cdot m g \\cos(30°)" },
          { type: "formula", tex: "\\tan(30°) > \\mu_H \\quad \\Rightarrow \\quad 0{,}577 > 0{,}6 \\quad \\text{(FALSCH)}" },
          { type: "p", text: "Da tan(30°) ≈ 0,577 < μ_H = 0,6, ist die Haftreibung stark genug. Der Block bleibt liegen." }
        ]
      },
      {
        id: "ex2",
        prompt: "Ein 10 kg schwerer Block liegt auf einer horizontalen Fläche. Der Gleitreibungskoeffizient beträgt μ_G = 0,3. Wie groß ist die Reibungskraft beim Gleiten?",
        solution: [
          { type: "p", text: "Auf horizontaler Fläche gilt: Normalkraft F_N = Gewichtskraft = m · g" },
          { type: "formula", tex: "F_N = 10 \\cdot 9{,}81 = 98{,}1 \\text{ N}" },
          { type: "formula", tex: "F_R = \\mu_G \\cdot F_N = 0{,}3 \\cdot 98{,}1 = 29{,}43 \\text{ N} \\approx 29{,}4 \\text{ N}" }
        ]
      },
      {
        id: "ex3",
        prompt: "Wie groß ist die Gewichtskraft einer 60 kg schweren Person auf dem Mond? (g_Mond = 1,62 m/s²)",
        solution: [
          { type: "p", text: "Die Gewichtskraft auf dem Mond (die Masse bleibt konstant mit 60 kg):" },
          { type: "formula", tex: "F_G^{\\text{Mond}} = m \\cdot g_{\\text{Mond}} = 60 \\cdot 1{,}62 = 97{,}2 \\text{ N}" },
          { type: "p", text: "Zum Vergleich: Auf der Erde beträgt die Gewichtskraft 60 · 9,81 = 588,6 N – auf dem Mond ist sie also nur etwa 1/6 davon." }
        ]
      },
      {
        id: "ex4",
        prompt: "Eine Feder mit der Federkonstante k = 200 N/m wird um x = 15 cm gedehnt. Welche Kraft übt die Feder aus?",
        solution: [
          { type: "p", text: "Umrechnung: x = 15 cm = 0,15 m. Hookesches Gesetz (Betrag):" },
          { type: "formula", tex: "F = k \\cdot x = 200 \\text{ N/m} \\cdot 0{,}15 \\text{ m} = 30 \\text{ N}" }
        ]
      },
      {
        id: "ex5",
        prompt: "Berechnen Sie die Gravitationskraft zwischen Erde und Mond. (M_Erde = 5,972·10²⁴ kg, M_Mond = 7,342·10²² kg, r = 3,844·10⁸ m, G = 6,674·10⁻¹¹ N·m²/kg²)",
        solution: [
          { type: "p", text: "Anwendung des Newtonschen Gravitationsgesetzes:" },
          { type: "formula", tex: "F = G \\cdot \\frac{M_E \\cdot M_M}{r^2} = 6{,}674 \\times 10^{-11} \\cdot \\frac{5{,}972 \\times 10^{24} \\cdot 7{,}342 \\times 10^{22}}{(3{,}844 \\times 10^8)^2}" },
          { type: "formula", tex: "F \\approx \\frac{6{,}674 \\times 10^{-11} \\cdot 4{,}383 \\times 10^{47}}{1{,}478 \\times 10^{17}} \\approx 1{,}98 \\times 10^{20} \\text{ N}" }
        ]
      }
    ],
    quiz: [
      {
        id: "q1",
        question: "Welche Aussage über Haft- und Gleitreibungskoeffizient ist richtig?",
        options: [
          "μ_G > μ_H (Gleitreibung größer als Haftreibung)",
          "μ_G = μ_H (beide sind gleich groß)",
          "μ_G < μ_H (Haftreibung größer als Gleitreibung)",
          "Es kommt immer auf das Material an, ein allgemeiner Vergleich ist unmöglich"
        ],
        correctIndex: 2,
        explanation: "In der Regel gilt μ_G < μ_H: Es ist mehr Kraft nötig, einen Körper in Bewegung zu setzen (Haftreibung überwinden), als ihn in Bewegung zu halten (Gleitreibung)."
      },
      {
        id: "q2",
        question: "Von was hängt die Gleitreibungskraft ab?",
        options: [
          "Von der Geschwindigkeit des Körpers",
          "Vom Gleitreibungskoeffizient μ_G und der Normalkraft F_N",
          "Von der Kontaktfläche zwischen den Körpern",
          "Von der Masse des Körpers (nicht von F_N)"
        ],
        correctIndex: 1,
        explanation: "Gleitreibungskraft: F_R = μ_G · F_N. Sie hängt vom Koeffizienten μ_G und der Normalkraft F_N ab, nicht direkt von der Kontaktfläche oder Geschwindigkeit."
      },
      {
        id: "q3",
        question: "Wie verhält sich die Gravitationskraft, wenn der Abstand r zwischen zwei Massen verdoppelt wird?",
        options: [
          "Sie halbiert sich",
          "Sie bleibt gleich",
          "Sie wird viermal kleiner",
          "Sie wird viermal größer"
        ],
        correctIndex: 2,
        explanation: "F = G·m₁·m₂/r². Bei doppeltem Abstand: F' = G·m₁·m₂/(2r)² = F/4. Die Kraft wird auf ein Viertel reduziert (1/r²-Gesetz)."
      },
      {
        id: "q4",
        question: "Was beschreibt das Hookesche Gesetz?",
        options: [
          "Die Reibungskraft ist proportional zur Normalkraft",
          "Die Federkraft ist proportional zur Auslenkung: F = –k·x",
          "Die Gravitationskraft nimmt mit dem Quadrat des Abstands ab",
          "Die Luftwiderstandskraft ist proportional zur Geschwindigkeit"
        ],
        correctIndex: 1,
        explanation: "Das Hookesche Gesetz lautet F = –k·x: Die Federkraft ist proportional zur Auslenkung x und entgegen der Auslenkungsrichtung gerichtet (rücktreibend)."
      },
      {
        id: "q5",
        question: "Ein Block liegt auf einer schiefen Ebene mit Winkel θ. Welche Kraftkomponente drückt den Block senkrecht auf die Fläche (Normalkraft)?",
        options: [
          "F_N = m·g·sin(θ)",
          "F_N = m·g",
          "F_N = m·g·cos(θ)",
          "F_N = m·g·tan(θ)"
        ],
        correctIndex: 2,
        explanation: "Am schiefen Hang zerlegt man die Gewichtskraft in zwei Komponenten: senkrecht zur Fläche F_N = m·g·cos(θ) und parallel zur Fläche F_∥ = m·g·sin(θ)."
      },
      {
        id: "q6",
        question: "Die Gravitationskonstante G hat den Wert:",
        options: [
          "G = 9,81 m/s²",
          "G = 6,674·10⁻¹¹ N·m²/kg²",
          "G = 6,022·10²³ mol⁻¹",
          "G = 3·10⁸ m/s"
        ],
        correctIndex: 1,
        explanation: "Die Gravitationskonstante G = 6,674·10⁻¹¹ N·m²/kg² ist eine Naturkonstante. Sie darf nicht mit der Erdbeschleunigung g = 9,81 m/s² verwechselt werden."
      },
      {
        id: "q7",
        question: "Wovon hängt der Luftwiderstand F_L hauptsächlich ab?",
        options: [
          "Linear von der Geschwindigkeit: F_L ~ v",
          "Vom Quadrat der Geschwindigkeit: F_L ~ v²",
          "Von der Masse des bewegten Körpers",
          "Nur von der Stirnfläche A, nicht von v"
        ],
        correctIndex: 1,
        explanation: "F_L = ½·ρ·c_W·A·v². Der Luftwiderstand wächst mit dem Quadrat der Geschwindigkeit. Bei doppelter Geschwindigkeit ist er viermal so groß."
      },
      {
        id: "q8",
        question: "Warum ist es schwieriger, einen ruhenden Körper in Bewegung zu versetzen als ihn dann in Bewegung zu halten?",
        options: [
          "Weil die Trägheit des Körpers plötzlich zunimmt",
          "Weil der Haftreibungskoeffizient größer ist als der Gleitreibungskoeffizient",
          "Weil beim Bewegen die Normalkraft ansteigt",
          "Weil Reibung von der Geschwindigkeit abhängt und bei v = 0 maximal ist"
        ],
        correctIndex: 1,
        explanation: "μ_H > μ_G: Die maximale Haftreibungskraft ist größer als die Gleitreibungskraft. Deshalb muss man zum Anlaufen mehr Kraft aufwenden als zum Weiterziehen."
      },
      {
        id: "q9",
        question: "Wie berechnet sich die Erdbeschleunigung g aus der Gravitationskonstante G?",
        options: [
          "g = G · M_Erde",
          "g = G · M_Erde / R_Erde",
          "g = G · M_Erde / R_Erde²",
          "g = G / (M_Erde · R_Erde²)"
        ],
        correctIndex: 2,
        explanation: "Aus dem Gravitationsgesetz: g = G·M_E/R_E² ≈ 9,81 m/s². Dies ergibt sich aus der Gleichsetzung von m·g = G·m·M_E/R_E² (Gewichtskraft = Gravitationskraft an der Oberfläche)."
      },
      {
        id: "q10",
        question: "Eine Feder (k = 500 N/m) hält einen 2 kg schweren Körper im Gleichgewicht. Um wie viel wird sie gedehnt?",
        options: [
          "x = 2,5 cm",
          "x = 3,92 cm",
          "x = 9,81 cm",
          "x = 25 cm"
        ],
        correctIndex: 1,
        explanation: "Im Gleichgewicht: Federkraft = Gewichtskraft → k·x = m·g → x = m·g/k = 2·9,81/500 = 0,0392 m ≈ 3,92 cm."
      }
    ]
  },
  {
    id: "natwiss-bezugssysteme",
    chapter: 2,
    order: 3,
    title: "Nichtinertiale Bezugssysteme",
    icon: "🌀",
    summary: "Inertialsysteme, beschleunigte Bezugssysteme, Scheinkräfte (Trägheitskraft, Zentrifugalkraft) und der Corioliseffekt.",
    explanation: [
      { type: "p", text: "Ein Inertialsystem ist ein Bezugssystem, das sich in Ruhe oder in gleichförmiger, geradliniger Bewegung befindet. In Inertialsystemen gelten die Newtonschen Gesetze in ihrer einfachen Form." },
      { type: "p", text: "Beschleunigt sich das Bezugssystem (z. B. ein anfahrendes Auto oder ein rotierendes System), tritt ein nichtinertiales Bezugssystem auf. In solchen Systemen beobachtet man scheinbare Kräfte, sogenannte Scheinkräfte oder Pseudokräfte." },
      { type: "p", text: "Scheinkraft in einem linear beschleunigten System: Wenn das Bezugssystem mit a_System beschleunigt wird, wirkt auf jeden Körper der Masse m eine Pseudokraft:" },
      { type: "formula", tex: "\\vec{F}_{\\text{pseudo}} = -m \\cdot \\vec{a}_{\\text{System}}" },
      { type: "p", text: "Beispiel: Im anfahrenden Bus wird man nach hinten gedrückt, im bremsenden Bus nach vorne." },
      { type: "p", text: "Zentrifugalkraft im rotierenden System: In einem mit ω rotierenden Bezugssystem wirkt auf eine Masse m im Abstand r zur Drehachse eine nach außen gerichtete Zentrifugalkraft (Scheinkraft):" },
      { type: "formula", tex: "F_{\\text{ZF}} = m \\cdot \\omega^2 \\cdot r" },
      { type: "p", text: "Diese ist der Zentripetalkraft betragsmäßig gleich, aber entgegengesetzt gerichtet – sie ist eine Scheinkraft, die nur im rotierenden Bezugssystem erscheint." },
      { type: "p", text: "Corioliskraft: Bewegt sich ein Körper mit der Geschwindigkeit v' in einem rotierenden System, so wirkt zusätzlich die Corioliskraft:" },
      { type: "formula", tex: "\\vec{F}_C = -2m \\cdot (\\vec{\\omega} \\times \\vec{v}')" },
      { type: "p", text: "Der Corioliseffekt auf der Erde:" },
      { type: "list", items: [
        "Auf der Nordhalbkugel werden bewegte Körper nach rechts abgelenkt",
        "Auf der Südhalbkugel nach links",
        "Tiefdruckgebiete (Zyklone) drehen auf der Nordhalbkugel gegen den Uhrzeigersinn",
        "Das Foucaultsche Pendel demonstriert die Erdrotation"
      ]}
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Auto bremst mit a = 5 m/s². Ein 80 kg schwerer Fahrer befindet sich im Fahrzeug. Wie groß ist die Pseudokraft, die er im Bezugssystem des Autos spürt?",
        solution: [
          { type: "p", text: "Im bremsenden Auto (Bezugssystem beschleunigt rückwärts, d.h. in Fahrtrichtung verlangsamend) wirkt auf den Fahrer eine Pseudokraft in Fahrtrichtung (nach vorne):" },
          { type: "formula", tex: "F_{\\text{pseudo}} = m \\cdot |a_{\\text{System}}| = 80 \\text{ kg} \\cdot 5 \\text{ m/s}^2 = 400 \\text{ N}" },
          { type: "p", text: "Der Fahrer spürt eine Kraft von 400 N nach vorne – er wird in den Sicherheitsgurt gedrückt." }
        ]
      },
      {
        id: "ex2",
        prompt: "Ein 2 kg schweres Objekt befindet sich auf einem rotierenden Karussell in einem Abstand von r = 1 m von der Drehachse. Die Winkelgeschwindigkeit beträgt ω = 3 rad/s. Wie groß ist die Zentrifugalkraft?",
        solution: [
          { type: "p", text: "Zentrifugalkraft (Betrag, entspricht der Zentripetalkraft):" },
          { type: "formula", tex: "F_{\\text{ZF}} = m \\cdot \\omega^2 \\cdot r = 2 \\cdot 3^2 \\cdot 1 = 2 \\cdot 9 \\cdot 1 = 18 \\text{ N}" }
        ]
      },
      {
        id: "ex3",
        prompt: "Erklären Sie, warum sich Zyklone (Tiefdruckgebiete) auf der Nordhalbkugel gegen den Uhrzeigersinn drehen.",
        solution: [
          { type: "p", text: "Die Erde rotiert mit ω von West nach Ost. Die Corioliskraft lenkt auf der Nordhalbkugel alle bewegten Körper nach rechts ab (bezogen auf die Bewegungsrichtung)." },
          { type: "p", text: "Luft strömt in ein Tiefdruckgebiet ein (von allen Seiten zum Zentrum hin). Durch die Coriolisablenkung nach rechts wird diese einströmende Luft um das Zentrum herum abgelenkt. Das Ergebnis ist eine gegen den Uhrzeigersinn rotierende Strömung (zyklonale Drehung). Auf der Südhalbkugel ist die Ablenkung nach links, daher drehen Zyklone dort im Uhrzeigersinn." }
        ]
      },
      {
        id: "ex4",
        prompt: "Welche Kraft muss auf einen Satelliten der Masse m = 500 kg wirken, damit er auf einer Kreisbahn mit r = 7000 km und v = 7500 m/s bleibt?",
        solution: [
          { type: "p", text: "Die benötigte Zentripetalkraft (geliefert durch die Gravitation):" },
          { type: "formula", tex: "F_Z = \\frac{m \\cdot v^2}{r} = \\frac{500 \\cdot 7500^2}{7 \\times 10^6}" },
          { type: "formula", tex: "F_Z = \\frac{500 \\cdot 56{,}25 \\times 10^6}{7 \\times 10^6} = \\frac{28{,}125 \\times 10^9}{7 \\times 10^6} \\approx 4018 \\text{ N} \\approx 4{,}0 \\text{ kN}" }
        ]
      },
      {
        id: "ex5",
        prompt: "In welche Richtung wird eine Kanonenkugel auf der Nordhalbkugel abgelenkt, wenn sie von Süden nach Norden (in Richtung Nordpol) abgefeuert wird?",
        solution: [
          { type: "p", text: "Auf der Nordhalbkugel lenkt die Corioliskraft alle bewegten Körper nach rechts ab (bezogen auf die Bewegungsrichtung)." },
          { type: "p", text: "Eine Kugel, die von Süd nach Nord fliegt, wird in Bewegungsrichtung nach rechts abgelenkt. Blickt man nach Norden, so ist 'rechts' die Richtung Osten. Die Kugel wird also nach Osten abgelenkt." },
          { type: "p", text: "Dieser Effekt ist relevant in der Artillerie (Schiessen über große Entfernungen) sowie bei der Ablenkung von Flüssen und im Jet-Stream." }
        ]
      }
    ],
    quiz: [
      {
        id: "q1",
        question: "Was ist ein Inertialsystem?",
        options: [
          "Ein rotierendes Bezugssystem, in dem Newton-Gesetze gelten",
          "Ein Bezugssystem in Ruhe oder gleichförmiger Bewegung, in dem die Newtonschen Gesetze exakt gelten",
          "Jedes Bezugssystem, das sich relativ zur Erde befindet",
          "Ein Bezugssystem, das sich mit Lichtgeschwindigkeit bewegt"
        ],
        correctIndex: 1,
        explanation: "In einem Inertialsystem (Ruhe oder gleichförmige geradlinige Bewegung) gelten die Newtonschen Gesetze ohne Korrekturen. In beschleunigten Systemen müssen Scheinkräfte eingeführt werden."
      },
      {
        id: "q2",
        question: "Was versteht man unter einer Scheinkraft (Pseudokraft)?",
        options: [
          "Eine wirkliche Kraft, die man nicht direkt messen kann",
          "Eine Kraft, die nur im beschleunigten Bezugssystem auftritt und keinen realen Ursprungskörper hat",
          "Eine sehr kleine, vernachlässigbare Kraft",
          "Die Summe aller auf einen Körper wirkenden Kräfte"
        ],
        correctIndex: 1,
        explanation: "Scheinkräfte (Pseudokräfte) erscheinen nur in nicht-inertialen Bezugssystemen. Sie haben keine reale Ursache (kein Körper übt sie aus) und verschwinden, sobald man ins Inertialsystem wechselt."
      },
      {
        id: "q3",
        question: "In welche Richtung wirkt die Zentrifugalkraft?",
        options: [
          "Zur Drehachse hin (nach innen)",
          "Tangential zur Kreisbahn",
          "Von der Drehachse weg (nach außen)",
          "Senkrecht nach unten"
        ],
        correctIndex: 2,
        explanation: "Die Zentrifugalkraft ist eine Scheinkraft im rotierenden System und zeigt von der Drehachse weg (radial nach außen). Sie ist betragsmäßig gleich, aber entgegengesetzt zur Zentripetalkraft."
      },
      {
        id: "q4",
        question: "Ein Fahrer im gleichmäßig beschleunigenden Auto spürt, dass er in den Sitz gedrückt wird. Welche Kraft ist das aus Sicht des Fahrers?",
        options: [
          "Die Normalkraft des Sitzes",
          "Die Gravitationskraft",
          "Eine Scheinkraft (Pseudokraft) entgegen der Beschleunigungsrichtung",
          "Die Reibungskraft zwischen Reifen und Straße"
        ],
        correctIndex: 2,
        explanation: "Im beschleunigenden Auto (nicht-inertialer Rahmen) spürt der Fahrer eine Scheinkraft F_pseudo = –m·a_Auto, die ihn nach hinten (entgegen der Fahrtrichtung) drückt."
      },
      {
        id: "q5",
        question: "Wie dreht sich ein Zyklon (Tiefdruckgebiet) auf der Südhalbkugel?",
        options: [
          "Gegen den Uhrzeigersinn (wie auf der Nordhalbkugel)",
          "Im Uhrzeigersinn",
          "Gar nicht, der Corioliseffekt ist am Äquator maximal",
          "Die Drehrichtung hängt nur von der Windstärke ab"
        ],
        correctIndex: 1,
        explanation: "Auf der Südhalbkugel lenkt der Corioliseffekt Bewegungen nach links ab (Nordhalbkugel: nach rechts). Daher drehen Tiefdruckgebiete auf der Südhalbkugel im Uhrzeigersinn."
      },
      {
        id: "q6",
        question: "Was demonstriert das Foucaultsche Pendel?",
        options: [
          "Die Existenz der Zentrifugalkraft",
          "Die Rotation der Erde",
          "Das Prinzip der Energieerhaltung",
          "Die Gleichheit von träger und schwerer Masse"
        ],
        correctIndex: 1,
        explanation: "Das Foucaultsche Pendel schwingt scheinbar seine Schwingungsebene, tatsächlich dreht sich die Erde darunter. Es ist ein direkter Nachweis der Erdrotation."
      },
      {
        id: "q7",
        question: "Wie verhält sich die Zentrifugalkraft, wenn der Abstand zur Drehachse verdoppelt wird (ω konstant)?",
        options: [
          "Sie halbiert sich",
          "Sie verdoppelt sich",
          "Sie vervierfacht sich",
          "Sie bleibt gleich"
        ],
        correctIndex: 1,
        explanation: "F_ZF = m·ω²·r. Bei doppeltem Abstand r verdoppelt sich auch die Zentrifugalkraft (linear in r)."
      },
      {
        id: "q8",
        question: "Warum sind Inertialsysteme in der Praxis nur näherungsweise realisierbar?",
        options: [
          "Weil alle Objekte im Universum irgendwie miteinander wechselwirken",
          "Weil die Erde sich dreht und um die Sonne kreist – streng genommen beschleunigt jeder Erdoberflächen-Punkt",
          "Weil die Newtonschen Gesetze nur im Vakuum gelten",
          "Weil man Inertialsysteme nicht definieren kann"
        ],
        correctIndex: 1,
        explanation: "Die Erde rotiert und beschleunigt auf ihrer Umlaufbahn. Daher ist das Erdoberflächen-Bezugssystem streng genommen kein Inertialsystem. Für viele Alltagsprobleme ist die Näherung aber ausreichend genau."
      },
      {
        id: "q9",
        question: "In welche Richtung wird ein nach Süden fliegendes Flugzeug auf der Nordhalbkugel durch den Corioliseffekt abgelenkt?",
        options: [
          "Nach Osten (links in Bewegungsrichtung)",
          "Nach Westen (rechts in Bewegungsrichtung)",
          "Nach oben",
          "Gar nicht, Corioliseffekt wirkt nur in Ost-West-Richtung"
        ],
        correctIndex: 1,
        explanation: "Auf der Nordhalbkugel werden bewegte Objekte nach rechts abgelenkt. Ein nach Süden fliegendes Flugzeug wird nach Westen abgelenkt (rechts von Süd = West)."
      },
      {
        id: "q10",
        question: "Was ist der Unterschied zwischen Zentripetalkraft und Zentrifugalkraft?",
        options: [
          "Beide sind real und zeigen in dieselbe Richtung",
          "Zentripetalkraft ist real (zeigt nach innen), Zentrifugalkraft ist eine Scheinkraft (zeigt nach außen, nur im rotierenden System)",
          "Zentrifugalkraft ist real, Zentripetalkraft ist eine Scheinkraft",
          "Sie sind identisch, nur in verschiedenen Einheiten"
        ],
        correctIndex: 1,
        explanation: "Die Zentripetalkraft ist eine reale Kraft (z. B. Seilspannung, Gravitationskraft), die einen Körper auf der Kreisbahn hält und zur Mitte zeigt. Die Zentrifugalkraft ist eine Scheinkraft, die nur im rotierenden Bezugssystem erscheint und nach außen zeigt."
      }
    ]
  }
];
