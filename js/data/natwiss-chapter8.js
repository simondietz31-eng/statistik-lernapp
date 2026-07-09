const NATWISS_CHAPTER8_TOPICS = [
  {
    id: "natwiss-erster-hauptsatz",
    chapter: 8,
    order: 1,
    title: "1. Hauptsatz der Thermodynamik",
    icon: "♻️",
    summary: "Der 1. Hauptsatz ist der Energieerhaltungssatz für thermodynamische Systeme: Innere Energie ändert sich durch zugeführte Wärme und geleistete Arbeit.",
    explanation: [
      { type: "p", text: "Die innere Energie U eines Systems ist die Summe aller mikroskopischen kinetischen und potenziellen Energien der Teilchen. Der erste Hauptsatz der Thermodynamik (Energieerhaltungssatz) lautet:" },
      { type: "formula", tex: "\\Delta U = Q + W" },
      { type: "p", text: "Dabei ist Q die dem System zugeführte Wärme (positiv wenn Wärme ins System fließt) und W die am System verrichtete Arbeit (positiv wenn das System komprimiert wird, also W = −p·ΔV bei Ausdehnung). Für ein ideales Gas gilt für die innere Energie:" },
      { type: "formula", tex: "U = n \\cdot C_V \\cdot T" },
      { type: "p", text: "Die Wärmekapazität beschreibt, wie viel Wärme ein Körper aufnehmen muss, um seine Temperatur um 1 K zu erhöhen:" },
      { type: "list", items: [
        "Wärmekapazität: C = Q/ΔT [J/K]",
        "Spezifische Wärmekapazität: c = Q/(m·ΔT) [J/(kg·K)]",
        "Molare Wärmekapazität bei konst. Volumen: C_V = (f/2)·R",
        "Molare Wärmekapazität bei konst. Druck: C_p = C_V + R (Meyersche Relation)",
        "Adiabatenexponent: γ = C_p / C_V",
        "Einatomiges Gas: C_V = (3/2)R, C_p = (5/2)R, γ = 5/3",
        "Zweiatomiges Gas: C_V = (5/2)R, C_p = (7/2)R, γ = 1,4"
      ]},
      { type: "formula", tex: "C_p - C_V = R \\quad (\\text{Meyersche Relation})" }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "2 mol Stickstoff (N₂, zweiatomig, C_V = 5/2·R) werden bei konstantem Volumen von 20 °C auf 120 °C erwärmt. Berechnen Sie die zugeführte Wärme Q (R = 8,314 J/(mol·K)).",
        solution: [
          { type: "p", text: "Bei isochorer Erwärmung gilt ΔU = Q (keine Volumenarbeit):" },
          { type: "formula", tex: "Q = n \\cdot C_V \\cdot \\Delta T = 2 \\cdot \\frac{5}{2} \\cdot 8{,}314 \\cdot (120 - 20) = 2 \\cdot 2{,}5 \\cdot 8{,}314 \\cdot 100 \\approx 4157 \\; \\text{J}" }
        ]
      },
      {
        id: "ex2",
        prompt: "Ein System erhält Q = 500 J Wärme und der Kolben leistet dabei Volumenarbeit W = −200 J (System dehnt sich aus). Berechnen Sie die Änderung der inneren Energie ΔU.",
        solution: [
          { type: "formula", tex: "\\Delta U = Q + W = 500 \\; \\text{J} + (-200 \\; \\text{J}) = 300 \\; \\text{J}" },
          { type: "p", text: "Das System nimmt 500 J auf, gibt aber 200 J als Volumenarbeit ab; die innere Energie steigt um 300 J." }
        ]
      },
      {
        id: "ex3",
        prompt: "1 kg Wasser wird von 20 °C auf 100 °C erwärmt (c_Wasser = 4186 J/(kg·K)). Berechnen Sie die benötigte Wärme Q.",
        solution: [
          { type: "formula", tex: "Q = m \\cdot c \\cdot \\Delta T = 1 \\; \\text{kg} \\cdot 4186 \\; \\frac{\\text{J}}{\\text{kg}\\cdot\\text{K}} \\cdot 80 \\; \\text{K} = 334\\,880 \\; \\text{J} \\approx 335 \\; \\text{kJ}" }
        ]
      },
      {
        id: "ex4",
        prompt: "Berechnen Sie C_V, C_p und γ für ein einatomiges ideales Gas (z.B. Helium, Argon). Verwenden Sie R = 8,314 J/(mol·K).",
        solution: [
          { type: "list", items: [
            "C_V = (3/2)·R = 1,5 · 8,314 = 12,47 J/(mol·K)",
            "C_p = C_V + R = 12,47 + 8,314 = 20,78 J/(mol·K)",
            "γ = C_p/C_V = 20,78/12,47 = 5/3 ≈ 1,667"
          ]}
        ]
      },
      {
        id: "ex5",
        prompt: "Warum braucht man bei konstantem Druck mehr Wärme als bei konstantem Volumen, um die gleiche Temperaturdifferenz ΔT zu erzeugen?",
        solution: [
          { type: "p", text: "Bei konstantem Druck darf sich das Gas ausdehnen. Es leistet dabei Volumenarbeit W = p·ΔV = n·R·ΔT gegen den äußeren Druck." },
          { type: "p", text: "Diese Arbeit muss zusätzlich zur Erhöhung der inneren Energie aufgebracht werden: Q_p = ΔU + p·ΔV = n·C_V·ΔT + n·R·ΔT = n·C_p·ΔT. Deshalb ist C_p > C_V um genau R." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was besagt der 1. Hauptsatz der Thermodynamik?", options: ["Wärme fließt stets von warm nach kalt", "Energie ist in thermodynamischen Systemen erhalten: ΔU = Q + W", "Kein Prozess hat 100% Wirkungsgrad", "Entropie nimmt stets zu"], correctIndex: 1, explanation: "Der 1. Hauptsatz ist der Energieerhaltungssatz: ΔU = Q + W, die innere Energie ändert sich durch Wärme und Arbeit." },
      { id: "q2", question: "Was ist die innere Energie eines idealen Gases?", options: ["Nur die kinetische Energie der Schwerpunktbewegung", "Nur die potenzielle Energie", "Die Summe aller mikroskopischen kinetischen Energien der Moleküle", "Die Gravitationsenergie der Gasmasse"], correctIndex: 2, explanation: "Die innere Energie ist die Summe aller mikroskopischen kinetischen (und potenziellen) Energien der Moleküle; beim idealen Gas nur kinetische Anteile." },
      { id: "q3", question: "Welche Wärmekapazität ist größer: C_p oder C_V?", options: ["C_V ist größer", "C_p ist größer", "Sie sind gleich", "Das hängt vom Gas ab"], correctIndex: 1, explanation: "C_p > C_V immer, weil bei konstantem Druck zusätzlich Volumenarbeit geleistet werden muss: C_p = C_V + R." },
      { id: "q4", question: "Ein System gibt Wärme ab (Q < 0) und empfängt Arbeit (W > 0). Was passiert mit U?", options: ["U steigt immer", "U sinkt immer", "ΔU = Q + W, das Ergebnis hängt von den Beträgen ab", "U bleibt konstant"], correctIndex: 2, explanation: "ΔU = Q + W: Q ist negativ, W ist positiv. Das Vorzeichen von ΔU hängt davon ab, welcher Term überwiegt." },
      { id: "q5", question: "Wie viele Freiheitsgrade hat ein zweiatomiges Gasmolekül bei Raumtemperatur?", options: ["3", "5", "6", "2"], correctIndex: 1, explanation: "Zweiatomige Moleküle haben 3 Translationsfreiheitsgrade + 2 Rotationsfreiheitsgrade = 5 Freiheitsgrade bei Raumtemperatur." },
      { id: "q6", question: "Was ist die Meyersche Relation?", options: ["C_p = C_V", "C_p - C_V = R", "C_p · C_V = R²", "C_V = γ · R"], correctIndex: 1, explanation: "Die Meyersche Relation besagt C_p − C_V = R (pro Mol), was aus dem 1. Hauptsatz und dem idealen Gasgesetz folgt." },
      { id: "q7", question: "Welche spezifische Wärmekapazität hat Wasser ungefähr?", options: ["100 J/(kg·K)", "1000 J/(kg·K)", "4186 J/(kg·K)", "418 J/(kg·K)"], correctIndex: 2, explanation: "Wasser hat eine spezifische Wärmekapazität von c ≈ 4186 J/(kg·K), was für ein kleines Molekül ungewöhnlich hoch ist (Wasserstoffbrücken)." },
      { id: "q8", question: "Was passiert bei einem isochoren Prozess?", options: ["V = const, W = 0, ΔU = Q", "p = const, ΔU = Q + W", "T = const, ΔU = 0", "Q = 0, ΔU = W"], correctIndex: 0, explanation: "Isochor = konstantes Volumen → keine Volumenarbeit (W = 0) → ΔU = Q." },
      { id: "q9", question: "Welchen Wert hat der Adiabatenexponent γ für Luft (zweiatomig, N₂ + O₂) ungefähr?", options: ["1,0", "1,2", "1,4", "1,67"], correctIndex: 2, explanation: "Für zweiatomige Gase: γ = C_p/C_V = (7/2·R)/(5/2·R) = 7/5 = 1,4. Das gilt für N₂ und O₂, die Hauptbestandteile der Luft." },
      { id: "q10", question: "Wie ändert sich die innere Energie eines idealen Gases bei isothermer Expansion?", options: ["Sie nimmt zu", "Sie nimmt ab", "Sie bleibt konstant (ΔU = 0)", "Sie hängt vom Druck ab"], correctIndex: 2, explanation: "Beim idealen Gas hängt U nur von T ab: U = n·C_V·T. Bei T = const gilt ΔU = 0." }
    ]
  },
  {
    id: "natwiss-zustandsaenderungen",
    chapter: 8,
    order: 2,
    title: "Zustandsänderungen idealer Gase",
    icon: "📊",
    summary: "Isochor, isobar, isotherm und adiabatisch – vier fundamentale Zustandsänderungen, die das Verhalten idealer Gase in technischen Maschinen beschreiben.",
    explanation: [
      { type: "p", text: "Zustandsänderungen idealer Gase lassen sich durch eine oder zwei der Zustandsgrößen p, V, T als konstant charakterisieren:" },
      { type: "list", items: [
        "Isochor (V = const): W = 0; Q = ΔU = n·C_V·ΔT; p/T = const",
        "Isobar (p = const): W = −p·ΔV = −n·R·ΔT; Q = n·C_p·ΔT; V/T = const",
        "Isotherm (T = const): ΔU = 0; W = −Q = −n·RT·ln(V₂/V₁) = n·RT·ln(p₂/p₁); p·V = const",
        "Adiabatisch (Q = 0): ΔU = W; p·Vᵞ = const; T·V^(γ−1) = const"
      ]},
      { type: "p", text: "Die Adiabate (adiabatische Zustandsänderung) tritt auf, wenn kein Wärmeaustausch mit der Umgebung stattfindet (z. B. schnelle Kompression im Motor). Sie folgt:" },
      { type: "formula", tex: "p \\cdot V^\\gamma = \\text{const} \\quad \\text{(Poisson-Gleichung)}" },
      { type: "p", text: "Im p-V-Diagramm liegt die Adiabate steiler als die Isotherme (gleicher Ausgangspunkt), weil γ > 1. Die Fläche unter der Kurve im p-V-Diagramm entspricht der geleisteten Volumenarbeit." },
      { type: "formula", tex: "W_{\\text{isotherm}} = n \\cdot R \\cdot T \\cdot \\ln\\left(\\frac{V_2}{V_1}\\right)" }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "1 mol N₂ dehnt sich isotherm bei T = 300 K von V₁ = 10 L auf V₂ = 20 L aus. Berechnen Sie die geleistete Arbeit W und die aufgenommene Wärme Q.",
        solution: [
          { type: "formula", tex: "W = -n \\cdot R \\cdot T \\cdot \\ln\\left(\\frac{V_2}{V_1}\\right) = -1 \\cdot 8{,}314 \\cdot 300 \\cdot \\ln(2) \\approx -1729 \\; \\text{J}" },
          { type: "p", text: "Das Gas verrichtet W = −1729 J Arbeit (negative Vorzeichen: Arbeit wird vom System abgegeben). Da ΔU = 0 (isotherm): Q = −W = +1729 J (Wärme wird aufgenommen)." }
        ]
      },
      {
        id: "ex2",
        prompt: "2 mol Luft (γ = 1,4) werden isobar bei p = 1 bar von T₁ = 300 K auf T₂ = 500 K erwärmt. Berechnen Sie Q, ΔU und W.",
        solution: [
          { type: "list", items: [
            "Q = n·C_p·ΔT = 2 · (7/2)·8,314 · 200 = 2 · 29,1 · 200 ≈ 11 640 J",
            "ΔU = n·C_V·ΔT = 2 · (5/2)·8,314 · 200 = 2 · 20,785 · 200 ≈ 8314 J",
            "W = ΔU − Q = 8314 − 11640 = −3326 J (Ausdehnungsarbeit an Umgebung)"
          ]}
        ]
      },
      {
        id: "ex3",
        prompt: "Luft (γ = 1,4) wird adiabatisch von p₁ = 1 bar, T₁ = 300 K auf p₂ = 10 bar komprimiert. Auf welche Temperatur T₂ erwärmt sie sich?",
        solution: [
          { type: "p", text: "Für adiabatische Zustandsänderung gilt: T·V^(γ−1) = const. Mit idealem Gasgesetz lässt sich zeigen:" },
          { type: "formula", tex: "T_2 = T_1 \\cdot \\left(\\frac{p_2}{p_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = 300 \\cdot 10^{\\frac{0{,}4}{1{,}4}} = 300 \\cdot 10^{0{,}286} \\approx 300 \\cdot 1{,}931 \\approx 579 \\; \\text{K}" }
        ]
      },
      {
        id: "ex4",
        prompt: "Welcher Prozess liefert bei gleicher Volumenänderung (V₁ → V₂ > V₁) mehr Arbeit: isotherme oder adiabatische Expansion?",
        solution: [
          { type: "p", text: "Die isotherme Expansion liefert mehr Arbeit. Im p-V-Diagramm liegt die Isotherme (p·V = const) oberhalb der Adiabate (p·V^γ = const, γ > 1) für gleichen Startpunkt. Die Fläche unter der Isotherme ist größer → mehr Arbeit." },
          { type: "p", text: "Bei der adiabatischen Expansion sinkt die Temperatur, weil keine Wärme zugeführt wird; damit sinkt auch der Druck schneller als bei der isothermen Expansion." }
        ]
      },
      {
        id: "ex5",
        prompt: "Was bedeutet es, dass die Adiabate im p-V-Diagramm steiler als die Isotherme verläuft?",
        solution: [
          { type: "p", text: "Isotherme: p·V = const → p = nRT/V (Steigung: −nRT/V²)" },
          { type: "p", text: "Adiabate: p·V^γ = const → p = K/V^γ (Steigung: −γ·K/V^(γ+1))" },
          { type: "p", text: "Da γ > 1, ist die Adiabate betragsmäßig steiler. Bei adiabatischer Kompression steigt der Druck stärker als bei isothermer, weil sich das Gas auch erwärmt (kein Wärmeabfluss möglich)." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Bei welchem Prozess bleibt die Temperatur konstant?", options: ["Isobar", "Isochor", "Isotherm", "Adiabatisch"], correctIndex: 2, explanation: "Isotherm bedeutet T = konstant." },
      { id: "q2", question: "Was gilt für einen isochoren Prozess?", options: ["p = const", "T = const", "V = const, W = 0", "Q = 0"], correctIndex: 2, explanation: "Isochor: V = konstant → keine Volumenarbeit (W = 0), daher gilt ΔU = Q." },
      { id: "q3", question: "Poisson-Gleichung gilt für welchen Prozess?", options: ["Isotherme: p·V = const", "Isobare: p = const", "Adiabatische: p·Vᵞ = const", "Isochore: V = const"], correctIndex: 2, explanation: "Die Poisson-Gleichung p·V^γ = const beschreibt die Adiabate (Q = 0 Prozess)." },
      { id: "q4", question: "Was passiert mit der Temperatur bei adiabatischer Expansion?", options: ["T steigt", "T sinkt", "T bleibt konstant", "T hängt nur vom Druck ab"], correctIndex: 1, explanation: "Bei adiabatischer Expansion (Q = 0) muss das Gas die Arbeit aus seiner inneren Energie aufbringen → T sinkt (ΔU = W < 0)." },
      { id: "q5", question: "Was ist die Arbeit bei einem isochoren Prozess?", options: ["W = p·ΔV", "W = 0", "W = Q", "W = n·R·T·ln(V₂/V₁)"], correctIndex: 1, explanation: "Isochor: ΔV = 0 → W = −p·ΔV = 0. Keine Volumenarbeit." },
      { id: "q6", question: "Ein Gas expandiert isotherm. Wie ändert sich die innere Energie?", options: ["Sie steigt proportional zu V", "Sie sinkt auf null", "Sie bleibt konstant (ΔU = 0)", "Sie steigt um Q"], correctIndex: 2, explanation: "Bei idealem Gas: U = n·C_V·T. Isotherm: T = const → ΔU = 0." },
      { id: "q7", question: "Was ist W_isotherm für 1 mol bei T = 400 K, V₂/V₁ = e (Euler)?", options: ["R·400·ln(e) = 400R ≈ 3326 J", "400 J", "0 J", "−400 J"], correctIndex: 0, explanation: "W = −n·R·T·ln(V₂/V₁) = −1·R·400·ln(e) = −400R ≈ −3326 J. Das Gas leistet 3326 J Arbeit (Vorzeichen: Gas gibt Arbeit ab)." },
      { id: "q8", question: "Bei welchem Prozess nimmt das Gas keine Wärme auf oder ab?", options: ["Isotherm", "Isobar", "Adiabatisch", "Isochor"], correctIndex: 2, explanation: "Adiabatisch: Q = 0 (kein Wärmeaustausch). Dann gilt ΔU = W." },
      { id: "q9", question: "Wie lautet die Bedingung für isobare Zustandsänderung beim idealen Gas?", options: ["p·V = const", "V/T = const", "p/T = const", "V = const"], correctIndex: 1, explanation: "Isobar (p = const): aus pV = nRT folgt V/T = nR/p = const (Charles'sches Gesetz)." },
      { id: "q10", question: "Welcher Prozess ist in einem gut isolierten Behälter (Thermosflasche) am besten beschrieben?", options: ["Isotherme Zustandsänderung", "Isobare Zustandsänderung", "Adiabatische Zustandsänderung", "Isochore Zustandsänderung"], correctIndex: 2, explanation: "In einem perfekt isolierten Behälter findet kein Wärmeaustausch statt: Q = 0 → adiabatischer Prozess." }
    ]
  },
  {
    id: "natwiss-waermetransport",
    chapter: 8,
    order: 3,
    title: "Wärmetransport",
    icon: "🔥",
    summary: "Wärme wird durch Leitung, Konvektion und Strahlung transportiert – drei Mechanismen mit je eigenen Gesetzmäßigkeiten und technischen Anwendungen.",
    explanation: [
      { type: "p", text: "Wärme fließt immer von einem wärmeren zu einem kälteren Körper. Es gibt drei grundlegende Transportmechanismen:" },
      { type: "list", items: [
        "Wärmeleitung (Konduktion): direkter Energietransfer durch Stöße zwischen Teilchen; wichtig in Feststoffen",
        "Konvektion: Wärmetransport durch Strömung (Fluid bewegt sich); natürlich (Dichteanomalie) oder erzwungen",
        "Wärmestrahlung: elektromagnetische Strahlung; kein Medium erforderlich"
      ]},
      { type: "p", text: "Das Fouriersche Gesetz der Wärmeleitung beschreibt den Wärmestrom durch eine Wand der Dicke d, Fläche A und Wärmeleitfähigkeit λ:" },
      { type: "formula", tex: "\\frac{dQ}{dt} = \\lambda \\cdot A \\cdot \\frac{\\Delta T}{d}" },
      { type: "p", text: "Typische Wärmeleitfähigkeiten: λ_Kupfer = 380 W/(m·K), λ_Aluminium = 230 W/(m·K), λ_Glas = 1 W/(m·K), λ_Wasser = 0,6 W/(m·K), λ_Luft = 0,025 W/(m·K). Der Stefan-Boltzmann-Gesetz beschreibt die Wärmestrahlung eines Körpers:" },
      { type: "formula", tex: "P = \\varepsilon \\cdot \\sigma \\cdot A \\cdot T^4 \\quad (\\sigma = 5{,}67 \\times 10^{-8} \\; \\text{W/m}^2\\text{K}^4)" }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Eine Ziegelwand (d = 0,30 m, A = 15 m², λ = 0,6 W/(m·K)) trennt Innen (20 °C) von Außen (−5 °C). Berechnen Sie den Wärmestrom dQ/dt.",
        solution: [
          { type: "formula", tex: "\\frac{dQ}{dt} = \\lambda \\cdot A \\cdot \\frac{\\Delta T}{d} = 0{,}6 \\cdot 15 \\cdot \\frac{25}{0{,}30} = 0{,}6 \\cdot 15 \\cdot 83{,}3 \\approx 750 \\; \\text{W}" },
          { type: "p", text: "Die Wand verliert bei einem Temperaturunterschied von 25 K einen Wärmestrom von 750 W." }
        ]
      },
      {
        id: "ex2",
        prompt: "Die Sonnenoberfläche hat T = 5778 K. Berechnen Sie die abgestrahlte Leistung pro m² (Schwarzkörper, ε = 1, σ = 5,67 × 10⁻⁸ W/(m²·K⁴)).",
        solution: [
          { type: "formula", tex: "P/A = \\sigma \\cdot T^4 = 5{,}67 \\times 10^{-8} \\cdot (5778)^4 \\approx 6{,}3 \\times 10^7 \\; \\text{W/m}^2 = 63 \\; \\text{MW/m}^2" }
        ]
      },
      {
        id: "ex3",
        prompt: "Warum friert ein See im Winter von oben nach unten zu, obwohl kalte Luft oben ist?",
        solution: [
          { type: "p", text: "Wasser hat bei 4 °C seine maximale Dichte. Beim Abkühlen unter 4 °C wird Wasser leichter und steigt auf. Dadurch bleibt das 4 °C warme Wasser unten, während die kälteste Schicht (0 °C) an der Oberfläche bleibt und zuerst gefriert (Anomalie des Wassers)." }
        ]
      },
      {
        id: "ex4",
        prompt: "Ein Doppelglasfenster hat zwei 4 mm Scheiben (λ_Glas = 1 W/(m·K)) und eine 12 mm Luftschicht (λ_Luft = 0,025 W/(m·K)), A = 2 m², ΔT = 20 K. Welcher Wärmewiderstand überwiegt?",
        solution: [
          { type: "list", items: [
            "Wärmewiderstand Glasscheibe (× 2): R₁ = d₁/(λ₁·A) = 0,004/(1·2) = 0,002 K/W (× 2 = 0,004 K/W)",
            "Wärmewiderstand Luft: R₂ = 0,012/(0,025·2) = 0,24 K/W"
          ]},
          { type: "p", text: "Die Luftschicht dominiert: R_Luft ≈ 60× größer als das Glas. Daher ist die Luftschicht die entscheidende Dämmmaßnahme beim Doppelglasfenster." }
        ]
      },
      {
        id: "ex5",
        prompt: "Ein Mensch (Körperoberfläche 2 m², T_Körper = 37 °C, ε = 0,9) befindet sich in einem Raum bei T_Raum = 20 °C. Berechnen Sie die Netto-Strahlungsleistung (σ = 5,67 × 10⁻⁸ W/(m²·K⁴)).",
        solution: [
          { type: "formula", tex: "P_{\\text{netto}} = \\varepsilon \\cdot \\sigma \\cdot A \\cdot (T_K^4 - T_R^4) = 0{,}9 \\cdot 5{,}67 \\times 10^{-8} \\cdot 2 \\cdot (310^4 - 293^4)" },
          { type: "list", items: [
            "310⁴ = 9,235 × 10⁹ K⁴",
            "293⁴ = 7,371 × 10⁹ K⁴",
            "P ≈ 0,9 · 5,67×10⁻⁸ · 2 · 1,864×10⁹ ≈ 190 W"
          ]}
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welcher Wärmetransportmechanismus kommt ohne Medium aus?", options: ["Konduktion", "Konvektion", "Wärmestrahlung", "Diffusion"], correctIndex: 2, explanation: "Wärmestrahlung (elektromagnetische Strahlung) kann sich auch im Vakuum ausbreiten – deshalb erreicht uns Sonnenwärme." },
      { id: "q2", question: "Was beschreibt das Fouriersche Gesetz?", options: ["Zusammenhang zwischen Temperatur und Druck", "Wärmestrom durch Leitung proportional zu ΔT und A, antiproportional zu d", "Strahlungsleistung des Schwarzen Körpers", "Effizienz von Wärmekraftmaschinen"], correctIndex: 1, explanation: "Fouriersches Gesetz: dQ/dt = λ·A·ΔT/d beschreibt den Wärmestrom durch Wärmeleitung." },
      { id: "q3", question: "Welches Material leitet Wärme am besten?", options: ["Luft", "Wasser", "Glas", "Kupfer"], correctIndex: 3, explanation: "Kupfer: λ ≈ 380 W/(m·K) – eines der besten Wärmeleitmaterialien unter Metallen. Luft ist mit λ ≈ 0,025 ein sehr schlechter Wärmeleiter." },
      { id: "q4", question: "Die Stefan-Boltzmann-Gleichung P = ε·σ·A·T⁴ zeigt: Wenn T verdoppelt wird, wie ändert sich P?", options: ["P verdoppelt sich", "P vervierfacht sich", "P wächst um Faktor 8", "P wächst um Faktor 16"], correctIndex: 3, explanation: "P ∝ T⁴: Verdopplung von T → P wächst um Faktor 2⁴ = 16." },
      { id: "q5", question: "Was ist natürliche Konvektion?", options: ["Wärmeleitung durch ein flüssiges Medium", "Durch Temperaturunterschiede verursachte Dichteunterschiede treiben Strömung an", "Erzwungene Luftbewegung durch einen Ventilator", "Strahlungsaustausch zwischen zwei Flächen"], correctIndex: 1, explanation: "Natürliche Konvektion: warme Flüssigkeit/Gas ist leichter und steigt auf; kaltes sinkt – treibende Kraft ist der Dichteunterschied." },
      { id: "q6", question: "Warum ist Styropor ein guter Wärmeisolator?", options: ["Weil es aus Plastik besteht", "Weil es viele Lufteinschlüsse hat (λ_Luft sehr klein)", "Weil es sehr dicht ist", "Weil es Wärmestrahlung reflektiert"], correctIndex: 1, explanation: "Styropor enthält ca. 98% Luft in kleinen Poren. Da Luft einen sehr niedrigen λ-Wert hat (0,025 W/(m·K)) und die Poren Konvektion verhindern, ist Styropor ein ausgezeichneter Isolator." },
      { id: "q7", question: "Was ist ein Schwarzer Körper (Schwarzkörper)?", options: ["Ein Körper mit schwarzer Oberfläche", "Ein idealer Absorber und Emitter mit ε = 1", "Ein Körper bei 0 K", "Ein Körper ohne Wärmekapazität"], correctIndex: 1, explanation: "Der Schwarze Körper (ε = 1) absorbiert alle auftreffende Strahlung vollständig und emittiert maximal (Stefan-Boltzmann mit ε = 1)." },
      { id: "q8", question: "In einem Kühlschrank gibt der Kompressor Wärme an die Umgebung ab. Welcher Mechanismus kühlt den Innenraum?", options: ["Wärmeleitung durch die Wand", "Konvektion durch den Kältemittelkreislauf (erzwungen)", "Wärmestrahlung der Rückwand", "Sublimation des Kältemittels"], correctIndex: 1, explanation: "Das Kältemittel wird erzwungen durch Kompressor und Ventile zirkuliert (Konvektion), nimmt im Innenraum Wärme auf und gibt sie außen ab." },
      { id: "q9", question: "Eine Wand mit doppelter Dicke bei gleicher Fläche und ΔT: Wie ändert sich der Wärmestrom?", options: ["Er verdoppelt sich", "Er halbiert sich", "Er bleibt gleich", "Er vervierfacht sich"], correctIndex: 1, explanation: "dQ/dt = λ·A·ΔT/d: Bei doppelter Dicke d → halber Wärmestrom." },
      { id: "q10", question: "Warum ist eine Thermoskanne mit Vakuum und verspiegelter Innenwand so effizient?", options: ["Vakuum leitet Wärme gut", "Vakuum verhindert Konduktion/Konvektion; Spiegel reduziert Strahlung", "Die Wände absorbieren alle Strahlung", "Niederdruck kühlt den Inhalt"], correctIndex: 1, explanation: "Das Vakuum eliminiert Wärmeleitung und Konvektion. Die Verspiegelung reflektiert Infrarotstrahlung → minimaler Wärmeverlust durch alle drei Mechanismen." }
    ]
  }
];
