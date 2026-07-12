const NATWISS_CHAPTER16_TOPICS = [
  {
    id: "natwiss-ueb-thermo1",
    chapter: 16,
    order: 1,
    title: "Übungsaufgaben: Gasgesetze und Wärmeausdehnung",
    icon: "🌡️",
    summary: "Übungsaufgaben zu thermischer Ausdehnung, idealem Gasgesetz und kinetischer Gastheorie.",
    explanation: [
      { type: "p", text: "Grundformeln:" },
      { type: "formula", tex: "\\Delta V = \\gamma \\cdot V_0 \\cdot \\Delta T, \\quad pV = nRT" },
      { type: "p", text: "Musterlösung Aufg. 31.1 (Behälterausdehnung):" },
      { type: "list", items: [
        "γ_W = 210·10⁻⁶ K⁻¹, V₁ = 55,5 ml, ΔT = 40 K",
        "Überlauf: ΔV = ΔV_W − ΔV_B = Δm_W/ρ_W",
        "γ_B = γ_W − Δm_W/(ρ_W·V₁·ΔT) = 210·10⁻⁶ − 49,6·10⁻⁶ · 49,6·10⁻⁶ K⁻¹",
        "α = γ/3 ≈ 17·10⁻⁶ K⁻¹ → Kupfer"
      ]},
      { type: "p", text: "Musterlösung Aufg. 31.3 (He statt O₂):" },
      { type: "formula", tex: "m_2 = \\frac{p_2}{p_1} \\cdot \\frac{M_2}{M_1} \\cdot m_1 = \\frac{8{,}0}{9{,}7} \\cdot \\frac{4}{32} \\cdot 30 \\; {\\rm kg} \\approx 3{,}09 \\; {\\rm kg}" },
      { type: "p", text: "Musterlösung Aufg. 32.1 (Wasserdampf):" },
      { type: "list", items: [
        "Δn = (p₀ − 0,8p₀)·V/(RT) = 0,2·3170·240/(8,314·298) ≈ 61,4 mol",
        "m = M·Δn = 18·10⁻³·61,4 ≈ 1,1 kg Wasser"
      ]},
      { type: "p", text: "Musterlösung Aufg. 32.3 (Fluchttemperatur O₂): T = m_O₂·v_Flucht²/(2k_B) ≈ 2,4·10⁵ K." }
    ],
    exercises: [
      {
        id: "natwiss-ueb-thermo1-e1",
        prompt: "55,5 ml Wasser bei 20°C dehnen sich auf 60°C aus. Es laufen 0,35 g über. ρ(60°C) = 0,983 g/ml, γ_W = 210·10⁻⁶ K⁻¹. Berechnen Sie γ_B des Behälters.",
        solution: [{ type: "p", text: "ΔV_überlauf = 0,35/0,983 = 0,356 ml. ΔV_W − ΔV_B = 0,356 ml. γ_B = γ_W − ΔV/(V₁·ΔT) = 210·10⁻⁶ − 0,356/(55,5·40) ≈ 210·10⁻⁶ − 160·10⁻⁶ = 50·10⁻⁶ K⁻¹ (Kupfer: α ≈ 17·10⁻⁶ K⁻¹ = γ/3)." }]
      },
      {
        id: "natwiss-ueb-thermo1-e2",
        prompt: "Tank: 30 kg O₂ bei 9,7 bar Absolutdruck. Wie viel kg He sind nötig für 8,0 bar Absolutdruck?",
        solution: [{ type: "p", text: "m₂ = (p₂/p₁)·(M₂/M₁)·m₁ = (8,0/9,7)·(4/32)·30 kg = 0,825·0,125·30 = 3,09 kg." }]
      },
      {
        id: "natwiss-ueb-thermo1-e3",
        prompt: "Raum: V = 240 m³, T = 25°C, relative Luftfeuchtigkeit = 80%. Wie viel Wasser kann noch verdunsten? (p₀(25°C) = 3170 Pa)",
        solution: [{ type: "p", text: "Δp = 0,2·p₀ = 634 Pa. Δn = Δp·V/(RT) = 634·240/(8,314·298) ≈ 61,5 mol. m = 18·10⁻³·61,5 ≈ 1,11 kg." }]
      },
      {
        id: "natwiss-ueb-thermo1-e4",
        prompt: "Bei welcher Temperatur würden O₂-Moleküle der Erde entfliehen? (v_Flucht = 11,2 km/s, m_O₂ = 5,314·10⁻²⁶ kg, k_B = 1,381·10⁻²³ J/K)",
        solution: [{ type: "p", text: "½mv² = k_BT → T = mv²/(2k_B) = 5,314·10⁻²⁶·(11200)²/(2·1,381·10⁻²³) = 5,314·10⁻²⁶·1,254·10⁸/(2,762·10⁻²³) ≈ 2,41·10⁵ K." }]
      },
      {
        id: "natwiss-ueb-thermo1-e5",
        prompt: "2 mol ideales Gas: V₁ = 3,5 m³, T = 300 K (isotherm). Es dehnt sich auf V₂ = 7,0 m³ aus. Berechnen Sie W, Q und ΔU.",
        solution: [{ type: "p", text: "W = nRT·ln(V₂/V₁) = 2·8,314·300·ln(2) = 4988·0,693 = 3456 J. Isotherm: ΔU = 0. Q = W = 3456 J." }]
      }
    ],
    quiz: [
      { id: "natwiss-ueb-thermo1-q1", question: "Ein Gas wird bei konstantem Volumen (isochor) erwärmt. Was passiert?", options: ["Druck bleibt konstant", "Druck und Temperatur steigen proportional", "Volumen nimmt zu", "Temperatur sinkt"], correctIndex: 1, explanation: "Isochor (V = const.): p/T = nR/V = const. → p ∝ T. Druck und Temperatur steigen proportional." },
      { id: "natwiss-ueb-thermo1-q2", question: "Wie lautet die Formel für die Volumendehnung?", options: ["ΔV = γ·L₀·ΔT", "ΔV = γ·V₀·ΔT", "ΔV = ΔT/V₀", "ΔV = α·V₀·ΔT"], correctIndex: 1, explanation: "ΔV = γ·V₀·ΔT mit γ = 3α (für isotrope Materialien)." },
      { id: "natwiss-ueb-thermo1-q3", question: "Was gilt beim idealen Gas für pV bei konstanter Temperatur?", options: ["pV = 0", "pV steigt mit T", "pV = nRT = const. (bei T = const.)", "pV = p/V"], correctIndex: 2, explanation: "Boyle-Mariotte-Gesetz: Bei T = const. gilt pV = nRT = const." },
      { id: "natwiss-ueb-thermo1-q4", question: "Wie ist die Wurzel des Druckverhältnisses mit dem Molmassenverhältnis verknüpft (gleicher Tank, gleiche T)?", options: ["p₁/p₂ = m₁M₂/(m₂M₁)", "p₁/p₂ = M₁/M₂", "p₁/p₂ = m₁M₁/(m₂M₂)", "p₁/p₂ = m₁/m₂"], correctIndex: 0, explanation: "Aus pV = (m/M)RT: p₁/p₂ = (m₁/M₁)/(m₂/M₂) = m₁M₂/(m₂M₁)." },
      { id: "natwiss-ueb-thermo1-q5", question: "Was ist die mittlere kinetische Energie eines einatomigen Gasmoleküls?", options: ["E_kin = 3/2 k_BT", "E_kin = ½k_BT", "E_kin = k_BT", "E_kin = 3k_BT"], correctIndex: 0, explanation: "Gleichverteilungssatz: pro Freiheitsgrad ½k_BT. Ein einatomiges Gas hat 3 Translationsfreiheitsgrade → E_kin = 3/2 k_BT." },
      { id: "natwiss-ueb-thermo1-q6", question: "Die Van-der-Waals-Gleichung für reale Gase lautet:", options: ["pV = nRT + ab", "(p − a/V²)(V + b) = nRT", "(p + an²/V²)(V − nb) = nRT", "pV = nRT"], correctIndex: 2, explanation: "(p + an²/V²)(V − nb) = nRT. Der Term an²/V² korrigiert den Druck (intermolekulare Anziehung), nb das Eigenvolumen der Moleküle." },
      { id: "natwiss-ueb-thermo1-q7", question: "Bei konstanter Temperatur (isotherm) wird Volumen eines idealen Gases verdoppelt. Was passiert mit dem Druck?", options: ["Verdoppelt sich", "Bleibt gleich", "Wird vier Mal größer", "Halbiert sich"], correctIndex: 3, explanation: "pV = const. → p₂ = p₁·V₁/V₂ = p₁/2. Der Druck halbiert sich." },
      { id: "natwiss-ueb-thermo1-q8", question: "Welchen Zusammenhang beschreibt die Gay-Lussac-Gleichung?", options: ["T·p = const. (isotherm)", "V/T = const. (isobar)", "p/T = const. (isochor)", "p·V = const. (isotherm)"], correctIndex: 2, explanation: "Gay-Lussac: Bei konstantem Volumen (isochor) gilt p/T = const." },
      { id: "natwiss-ueb-thermo1-q9", question: "Wie groß ist R (ideale Gaskonstante)?", options: ["6,022·10²³ J/(mol·K)", "8,314 J/(mol·K)", "1,381·10⁻²³ J/K", "9,81 J/(mol·K)"], correctIndex: 1, explanation: "R = 8,314 J/(mol·K) = N_A·k_B." },
      { id: "natwiss-ueb-thermo1-q10", question: "Die relative Luftfeuchtigkeit gibt an:", options: ["Die Temperatur des Taupunkts", "Die absolute Menge Wasserdampf in g/m³", "Den Sättigungsdampfdruck", "Das Verhältnis des tatsächlichen Wasserdampfpartialdrucks zum Sättigungsdampfdruck"], correctIndex: 3, explanation: "RL = p_ist/p_satt. Bei RL = 100% ist Luft wassergesättigt (Taupunkt)." }
    ]
  },
  {
    id: "natwiss-ueb-thermo2",
    chapter: 16,
    order: 2,
    title: "Übungsaufgaben: Erster Hauptsatz und Zustandsänderungen",
    icon: "🔥",
    summary: "Übungsaufgaben zu Wärme, Arbeit, Erster Hauptsatz und Kalorimetrie.",
    explanation: [
      { type: "p", text: "Der erste Hauptsatz der Thermodynamik:" },
      { type: "formula", tex: "\\Delta U = Q + W_{\\rm am \\; Gas}, \\quad W_{\\rm isotherm} = nRT \\ln\\frac{V_2}{V_1}" },
      { type: "p", text: "Kalorimetrie (Wärmemischung): Q₁ + Q₂ = 0 → Temperaturausgleich" },
      { type: "formula", tex: "m_1 c_1 (T_f - T_1) + m_2 c_2 (T_f - T_2) = 0" },
      { type: "p", text: "Zustandsänderungen idealer Gase:" },
      { type: "list", items: [
        "Isotherm (T=const.): W = nRT·ln(V₂/V₁), ΔU = 0, Q = W",
        "Isobar (p=const.): W = p·ΔV = nRΔT, Q = nCₚΔT",
        "Isochor (V=const.): W = 0, Q = ΔU = nCᵥΔT",
        "Adiabat (Q=0): W = −ΔU = −nCᵥΔT, T₁V₁^(γ−1) = T₂V₂^(γ−1)"
      ]},
      { type: "p", text: "Für Stickstoff (zweiatomig): Cᵥ = 5/2 R, Cₚ = 7/2 R, γ = 7/5 = 1,4." }
    ],
    exercises: [
      {
        id: "natwiss-ueb-thermo2-e1",
        prompt: "1 mol N₂ bei p = 10⁵ Pa wird isobar von 0°C auf 100°C erwärmt. Berechnen Sie ΔU, W und Q.",
        solution: [{ type: "p", text: "Cᵥ = 5/2 R = 20,79 J/(mol·K). ΔU = nCᵥΔT = 1·20,79·100 = 2079 J. W = nRΔT = 1·8,314·100 = 831 J. Q = ΔU + W = 2079 + 831 = 2910 J (oder Q = nCₚΔT = 7/2·8,314·100 = 2910 J ✓)." }]
      },
      {
        id: "natwiss-ueb-thermo2-e2",
        prompt: "Ein heißes Hufeisen (m = 0,4 kg, T₀ = ?) wird in 1,75 kg Wasser (20°C) abgekühlt bis T_f = 25°C. Eimer: 0,30 kg Eisen. Bestimmen Sie T₀. (c_Fe = 470 J/(kg·K), c_W = 4186 J/(kg·K))",
        solution: [{ type: "p", text: "Q_Hufeisen + Q_Wasser + Q_Eimer = 0. m_HS·c_Fe·(T_f−T₀) + m_W·c_W·(T_f−T_W) + m_E·c_Fe·(T_f−T_W) = 0. 0,4·470·(25−T₀) + 1,75·4186·5 + 0,3·470·5 = 0. 188·(25−T₀) = −(36 627 + 705) = −37 332. 25−T₀ = −198,6. T₀ ≈ 223,6°C ≈ 224°C." }]
      },
      {
        id: "natwiss-ueb-thermo2-e3",
        prompt: "2,6 mol einatomiges Gas (Cᵥ = 3/2 R) expandiert adiabatisch von V₁ = 0,084 m³, T₁ = 25°C auf T₂ = −68°C. Berechnen Sie V₂.",
        solution: [{ type: "p", text: "Adiabat: T₁V₁^(γ−1) = T₂V₂^(γ−1). γ = 5/3 → γ−1 = 2/3. V₂ = V₁·(T₁/T₂)^(1/(γ−1)) = 0,084·(298/205)^(3/2) = 0,084·(1,4537)^1,5 = 0,084·1,753 ≈ 0,147 m³." }]
      },
      {
        id: "natwiss-ueb-thermo2-e4",
        prompt: "Eiswürfel (bei −8,5°C) wird in 300 g Wasser (20°C) + 75 g Al-Kalorimeter (c = 900 J/(kg·K)) gegeben. Wasser kühlt auf 17°C. Schmelzwärme Eis: L = 334 kJ/kg, c_Eis = 2100 J/(kg·K). Bestimmen Sie die Eismasse m_E.",
        solution: [{ type: "p", text: "Q_Wasser + Q_Al = −Q_Eis. m_W·c_W·ΔT_W + m_Al·c_Al·ΔT_Al = m_E·(c_Eis·8,5 + L + c_W·17). 0,3·4186·(−3) + 0,075·900·(−3) = −m_E·(2100·8,5 + 334000 + 4186·17). −3768 − 202,5 = −m_E·(17850 + 334000 + 71162). −3970 = −m_E·423012. m_E = 3970/423012 ≈ 9,38 g." }]
      },
      {
        id: "natwiss-ueb-thermo2-e5",
        prompt: "2 mol ideales Gas: Isotherm von V₁ = 3,5 m³ auf V₂ = 7,0 m³ bei T = 300 K. Berechnen Sie W.",
        solution: [{ type: "p", text: "W = nRT·ln(V₂/V₁) = 2·8,314·300·ln(2) = 4988·0,6931 ≈ 3456 J." }]
      }
    ],
    quiz: [
      { id: "natwiss-ueb-thermo2-q1", question: "Was gilt für die innere Energie bei einer isothermen Zustandsänderung eines idealen Gases?", options: ["ΔU = W", "ΔU = Q", "ΔU = 0", "ΔU = nCᵥΔT > 0"], correctIndex: 2, explanation: "Bei idealem Gas hängt U nur von T ab. Isotherm bedeutet ΔT = 0 → ΔU = 0." },
      { id: "natwiss-ueb-thermo2-q2", question: "Wie lautet der erste Hauptsatz?", options: ["ΔU = W − Q", "ΔU = Q − W_vom_Gas", "Q = W", "ΔU = Q + W = 0"], correctIndex: 1, explanation: "ΔU = Q − W_vom_Gas (Techniker-Konvention) oder ΔU = Q + W_am_Gas (Physiker-Konvention)." },
      { id: "natwiss-ueb-thermo2-q3", question: "Bei einer adiabatischen Zustandsänderung gilt:", options: ["W = 0", "Q = 0, ΔU = W", "ΔU = 0", "ΔT = 0"], correctIndex: 1, explanation: "Adiabat: kein Wärmeaustausch (Q = 0). 1. HS: ΔU = W (Arbeit wird auf innere Energie übertragen)." },
      { id: "natwiss-ueb-thermo2-q4", question: "Ein Gas wird isochor erwärmt. Welche Arbeit wird geleistet?", options: ["W = nRΔT", "W = Q", "W = nCᵥΔT", "W = pΔV = 0"], correctIndex: 3, explanation: "Isochor: ΔV = 0 → W = p·ΔV = 0. Keine Volumenarbeit." },
      { id: "natwiss-ueb-thermo2-q5", question: "Was ist die spezifische Wärmekapazität bei konstantem Druck Cₚ für ein zweiatomiges ideales Gas?", options: ["Cₚ = 3/2 R", "Cₚ = 5/2 R", "Cₚ = 7/2 R", "Cₚ = R"], correctIndex: 2, explanation: "Zweiatomig: Cᵥ = 5/2 R (3 Translation + 2 Rotation). Cₚ = Cᵥ + R = 7/2 R." },
      { id: "natwiss-ueb-thermo2-q6", question: "Wie viel Arbeit leistet ein Gas bei isothermer Expansion von V₁ = 1 m³ auf V₂ = 2 m³ bei T = 300 K (n = 1 mol)?", options: ["W = nRT·ln(2) ≈ 1729 J", "W = 0", "W = nRT·2 = 4988 J", "W = nRT = 2494 J"], correctIndex: 0, explanation: "W = nRT·ln(V₂/V₁) = 1·8,314·300·ln(2) ≈ 2494·0,693 ≈ 1729 J." },
      { id: "natwiss-ueb-thermo2-q7", question: "Was ist der Unterschied zwischen Cₚ und Cᵥ bei idealen Gasen?", options: ["Cᵥ > Cₚ immer", "Keine Beziehung", "Cₚ = Cᵥ immer", "Cₚ − Cᵥ = R (Mayer-Relation)"], correctIndex: 3, explanation: "Mayer-Relation: Cₚ − Cᵥ = R. Bei konstantem Druck muss zusätzlich Ausdehnungsarbeit geleistet werden." },
      { id: "natwiss-ueb-thermo2-q8", question: "Ein 100 g Kalorimeter (c = 900 J/(kg·K)) und 500 g Wasser (c = 4186 J/(kg·K)) nehmen Wärme auf. Welches dominiert die Gesamtwärmekapazität?", options: ["Das Wasser", "Das Kalorimeter", "Beide gleich", "Keines nimmt Wärme auf"], correctIndex: 0, explanation: "C_W = 0,5·4186 = 2093 J/K >> C_kal = 0,1·900 = 90 J/K. Das Wasser dominiert stark." },
      { id: "natwiss-ueb-thermo2-q9", question: "Wie ändert sich die Temperatur bei adiabatischer Expansion eines Gases?", options: ["Bleibt konstant", "Sinkt", "Hängt vom Druck ab", "Steigt an"], correctIndex: 1, explanation: "Adiabatische Expansion: Gas leistet Arbeit ohne Wärmezufuhr → Temperatur sinkt." },
      { id: "natwiss-ueb-thermo2-q10", question: "Was ist die Schmelzenthalpie (Schmelzwärme)?", options: ["Energie pro Kelvin zum Erwärmen", "Energie zum Aufheizen eines Kilogramms", "Energie zum Schmelzen eines Kilogramms bei konstantem Druck", "Energie zur Verdampfung"], correctIndex: 2, explanation: "Schmelzwärme L: Energie pro kg, um Stoff vom Festkörper in die Flüssigkeit zu überführen (bei Schmelztemperatur). Für Wasser: L ≈ 334 kJ/kg." }
    ]
  },
  {
    id: "natwiss-ueb-thermo3",
    chapter: 16,
    order: 3,
    title: "Übungsaufgaben: Zweiter Hauptsatz und Wirkungsgrad",
    icon: "⚙️",
    summary: "Übungsaufgaben zum Carnot-Wirkungsgrad, Kreisprozessen und Entropieänderung.",
    explanation: [
      { type: "p", text: "Carnot-Wirkungsgrad und Entropie:" },
      { type: "formula", tex: "\\eta_C = 1 - \\frac{T_C}{T_H}, \\quad \\Delta S = m \\cdot c \\cdot \\ln\\frac{T_f}{T_0}" },
      { type: "p", text: "Musterlösung Aufg. 34.1 (Kreisprozess, Argon):" },
      { type: "list", items: [
        "a→b: isochor, Q_ab = 1870 J (zugeführt)",
        "b→c: isotherm, W_bc = +1540 J",
        "c→a: isobar, Q_ca = −3118 J (abgeführt)",
        "W_netto = 1540 − 1247 = 293 J",
        "η = 293/3410 = 8,6%"
      ]},
      { type: "p", text: "Musterlösung Aufg. 34.3 (Abwärme):" },
      { type: "formula", tex: "\\eta_{\\rm Carnot} = 1 - \\frac{553}{798} = 30{,}8\\%, \\quad \\eta = 15{,}4\\%" },
      { type: "list", items: [
        "Q_Abwärme/t = P·(1/η − 1) = 850 kW·(1/0,154 − 1) = 4670 kW",
        "Pro Stunde: 4670·3600 ≈ 1,68·10¹⁰ J"
      ]},
      { type: "p", text: "Musterlösung Aufg. 34.5 (Entropie Al/Wasser): ΔS_ges = ΔS_Al + ΔS_W = −61,4 + 63,8 = +2,4 J/K > 0 (irreversibel)." }
    ],
    exercises: [
      {
        id: "natwiss-ueb-thermo3-e1",
        prompt: "Carnot-Maschine: T_H = 798 K, T_C = 553 K. Berechnen Sie den Carnot-Wirkungsgrad.",
        solution: [{ type: "p", text: "η_C = 1 − T_C/T_H = 1 − 553/798 = 1 − 0,693 = 0,307 ≈ 30,7%." }]
      },
      {
        id: "natwiss-ueb-thermo3-e2",
        prompt: "Motor: η = 0,25, 180 J/Zyklus, 25 Zyklen/s, 4 Zylinder. Wie lange reichen 10 L Benzin (340 MJ)?",
        solution: [{ type: "p", text: "P = η·Q_Benzin/t → t/Q_Benzin = η/P. Arbeit/s = 4·25·180 = 18 000 W. Q_Benzin/t = P/η = 18000/0,25 = 72 000 W. t = 340·10⁶/72 000 ≈ 4722 s ≈ 79 min." }]
      },
      {
        id: "natwiss-ueb-thermo3-e3",
        prompt: "Maschine: η = η_Carnot/2, P = 850 kW, T_H = 798 K, T_C = 553 K. Wie viel Abwärme pro Stunde?",
        solution: [{ type: "p", text: "η = 0,154. Q_Abwärme/t = P·(1/η − 1) = 850·(6,49 − 1) = 850·5,49 = 4667 kW. Pro Stunde: 4667·3600 = 1,68·10⁷ kJ = 1,68·10¹⁰ J." }]
      },
      {
        id: "natwiss-ueb-thermo3-e4",
        prompt: "3,8 kg Al (30°C) und 1,0 kg Wasser (20°C) mischen sich. Berechnen Sie die Gleichgewichtstemperatur und ΔS_ges. (c_Al = 896, c_W = 4187 J/(kg·K))",
        solution: [{ type: "p", text: "T_f = (m_Al·c_Al·T_Al + m_W·c_W·T_W)/(m_Al·c_Al + m_W·c_W) = (3,8·896·303 + 1·4187·293)/(3,8·896 + 4187) = (1030310 + 1226791)/7591,8 ≈ 297,5 K (24,5°C). ΔS_Al = 3404,8·ln(297,5/303) = −61,4 J/K. ΔS_W = 4187·ln(297,5/293) = +63,8 J/K. ΔS_ges = +2,4 J/K." }]
      },
      {
        id: "natwiss-ueb-thermo3-e5",
        prompt: "Eine Carnot-Maschine leistet 570 kW, verbraucht 1350 kcal/s. T_H = 580°C. Bestimmen Sie T_C.",
        solution: [{ type: "p", text: "Q_H/t = 1350 kcal/s · 4186 J/kcal = 5,651·10⁶ W. η = P/Q_H = 570000/5651000 = 0,1009 ≈ 10,1%. η_C = 1 − T_C/T_H → T_C = T_H·(1 − η) = 853·0,899 ≈ 767 K = 494°C." }]
      }
    ],
    quiz: [
      { id: "natwiss-ueb-thermo3-q1", question: "Was ist der Wirkungsgrad einer Wärmekraftmaschine?", options: ["η = Q_H/W", "η = Q_C/Q_H", "η = T_C/T_H", "η = W/Q_H"], correctIndex: 3, explanation: "Wirkungsgrad: η = W/Q_H = (Q_H − Q_C)/Q_H = 1 − Q_C/Q_H." },
      { id: "natwiss-ueb-thermo3-q2", question: "Was sagt der zweite Hauptsatz der Thermodynamik aus?", options: ["Alle Prozesse sind reversibel", "Energie kann nicht erzeugt werden", "Wärme fließt immer zum heißen Körper", "Die Entropie eines abgeschlossenen Systems nimmt nie ab"], correctIndex: 3, explanation: "2. HS: In einem abgeschlossenen System gilt ΔS ≥ 0. Bei irreversiblen Prozessen strikt ΔS > 0." },
      { id: "natwiss-ueb-thermo3-q3", question: "Bei einem Carnot-Kreisprozess: Warum ist T_H > T_C zwingend?", options: ["Damit Wärme freiwillig von T_H zu T_C fließt (2. HS)", "Keine Bedingung", "Damit der Druck abnimmt", "Damit η > 100%"], correctIndex: 0, explanation: "Wärme fließt spontan vom heißen zum kalten Reservoir. Der Carnot-Prozess nutzt diesen Fluss zur Arbeitsgewinnung." },
      { id: "natwiss-ueb-thermo3-q4", question: "Welche Entropieänderung hat ein reversibler Kreisprozess insgesamt?", options: ["ΔS > 0", "ΔS < 0", "Hängt von der Temperatur ab", "ΔS = 0"], correctIndex: 3, explanation: "Reversibler Prozess: ΔS_ges = 0. Irreversibler Prozess: ΔS_ges > 0." },
      { id: "natwiss-ueb-thermo3-q5", question: "Eine Maschine arbeitet zwischen 500°C und 20°C. Wie groß ist der maximale Carnot-Wirkungsgrad?", options: ["62%", "96%", "38%", "50%"], correctIndex: 0, explanation: "η_C = 1 − T_C/T_H = 1 − 293/773 = 1 − 0,379 = 0,621 ≈ 62%." },
      { id: "natwiss-ueb-thermo3-q6", question: "Woran erkennt man im p-V-Diagramm, ob ein Kreisprozess als Wärmekraftmaschine oder Wärmepumpe läuft?", options: ["An der Fläche", "An der Temperatur", "Am Umlaufsinn: Uhrzeigersinn = Kraftmaschine, Gegenuhrzeigersinn = Pumpe", "Am Druck"], correctIndex: 2, explanation: "Uhrzeigersinn im p-V-Diagramm: Netto-Arbeit positiv → Kraftmaschine. Gegenuhrzeigersinn: Arbeit zugeführt → Kältemaschine/Wärmepumpe." },
      { id: "natwiss-ueb-thermo3-q7", question: "Was beschreibt die Boltzmann-Entropieformel S = k_B·ln(Ω)?", options: ["Statistische Entropie: verknüpft Entropie mit Anzahl der Mikrozustände Ω", "Wärmekapazität eines Gases", "Druck in einem Gas", "Temperaturänderung"], correctIndex: 0, explanation: "S = k_B·ln(Ω). Ω = Anzahl der möglichen Mikrozustände. Mehr Mikrozustände → höhere Entropie." },
      { id: "natwiss-ueb-thermo3-q8", question: "Ein Kühlschrank pumpt Wärme von innen (T_C) nach außen (T_H). Welche Mindestarbeit ist nötig?", options: ["W = 0", "W = Q_C·(T_H/T_C − 1)", "W = Q_C", "W = Q_H/η_C"], correctIndex: 1, explanation: "COP einer idealen Kältemaschine: COP = T_C/(T_H − T_C). W = Q_C/COP = Q_C·(T_H − T_C)/T_C = Q_C·(T_H/T_C − 1)." },
      { id: "natwiss-ueb-thermo3-q9", question: "Was ist beim isothermen Prozess (T = const.) des idealen Gases für die Entropieänderung korrekt?", options: ["ΔS = nCᵥ·ln(T₂/T₁)", "ΔS = 0", "ΔS = Q/T = nR·ln(V₂/V₁)", "ΔS < 0 immer"], correctIndex: 2, explanation: "ΔS = Q_rev/T. Bei isotherm-reversibler Expansion: Q = nRT·ln(V₂/V₁) → ΔS = nR·ln(V₂/V₁)." },
      { id: "natwiss-ueb-thermo3-q10", question: "Warum kann kein realer Motor den Carnot-Wirkungsgrad erreichen?", options: ["Weil Carnot η < 100% liefert", "Weil alle realen Prozesse irreversibel sind (Reibung, endliche Temperaturdifferenzen)", "Weil T_C immer 0 K sein müsste", "Weil Carnot nur für Gase gilt"], correctIndex: 1, explanation: "Der Carnot-Wirkungsgrad gilt nur für vollständig reversible Prozesse. Reale Maschinen haben stets irreversible Verluste (Reibung, Wärmeübertragung über endliche ΔT)." }
    ]
  }
];
