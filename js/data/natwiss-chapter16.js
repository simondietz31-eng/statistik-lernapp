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
      { id: "natwiss-ueb-thermo1-q1", question: "Ein Gas wird bei konstantem Volumen (isochor) erwärmt. Was passiert?", options: ["Der Druck bleibt trotz Erwärmung konstant", "Druck und Temperatur steigen proportional", "Das Volumen nimmt trotz Isochorie zu", "Die Temperatur sinkt entgegen der Erwärmung"], correctIndex: 1, explanation: "Bei konstantem Volumen (V = const.) folgt aus dem idealen Gasgesetz p/T = nR/V = const., also p ∝ T — Druck und Temperatur steigen proportional zueinander an. Das Volumen bleibt dabei per Definition unverändert, ganz im Gegensatz zur genannten Option, dass es zunähme." },
      { id: "natwiss-ueb-thermo1-q2", question: "Wie lautet die Formel für die Volumendehnung?", options: ["ΔV = γ·L₀·ΔT, mit Länge statt Volumen", "ΔV = γ·V₀·ΔT", "ΔV = ΔT/V₀, ohne den Ausdehnungskoeffizienten", "ΔV = α·V₀·ΔT, mit dem linearen statt dem Volumenkoeffizienten"], correctIndex: 1, explanation: "Die Volumenausdehnung folgt ΔV = γ·V₀·ΔT mit dem Volumenausdehnungskoeffizienten γ, wobei γ = 3α für isotrope Materialien gilt (da sich das Volumen in alle drei Raumrichtungen ausdehnt). Der lineare Koeffizient α gehört stattdessen zur Längenausdehnung ΔL = α·L₀·ΔT." },
      { id: "natwiss-ueb-thermo1-q3", question: "Was gilt beim idealen Gas für pV bei konstanter Temperatur?", options: ["pV ist stets null", "pV steigt mit wachsender Temperatur T", "pV = nRT = const. bei T = const.", "pV = p/V, eine willkürliche Umformung"], correctIndex: 2, explanation: "Das Boyle-Mariotte-Gesetz besagt, dass bei konstanter Temperatur pV = nRT konstant bleibt — steigt der Druck, sinkt entsprechend das Volumen und umgekehrt. Da T in diesem Fall konstant gehalten wird, kann pV gerade nicht mit T ansteigen." },
      { id: "natwiss-ueb-thermo1-q4", question: "Wie ist das Druckverhältnis mit dem Molmassenverhältnis verknüpft (gleicher Tank, gleiche Temperatur)?", options: ["p₁/p₂ = m₁M₂/(m₂M₁)", "p₁/p₂ = M₁/M₂, ohne Berücksichtigung der Massen", "p₁/p₂ = m₁M₁/(m₂M₂), mit falsch zugeordneten Molmassen", "p₁/p₂ = m₁/m₂, ohne Berücksichtigung der Molmassen"], correctIndex: 0, explanation: "Aus pV = (m/M)RT bei gleichem V und T folgt p ∝ m/M, sodass p₁/p₂ = (m₁/M₁)/(m₂/M₂) = m₁M₂/(m₂M₁) gilt. Sowohl die eingefüllte Masse als auch die Molmasse des jeweiligen Gases gehen dabei ein — keine der beiden Größen darf isoliert betrachtet werden." },
      { id: "natwiss-ueb-thermo1-q5", question: "Was ist die mittlere kinetische Energie eines einatomigen Gasmoleküls?", options: ["E_kin = 3/2 k_BT", "E_kin = ½k_BT, nur ein Freiheitsgrad", "E_kin = k_BT, nur zwei Freiheitsgrade", "E_kin = 3k_BT, um den Faktor 2 zu groß"], correctIndex: 0, explanation: "Nach dem Gleichverteilungssatz entfällt auf jeden Freiheitsgrad ½k_BT Energie; ein einatomiges Gas hat genau 3 Translationsfreiheitsgrade (x, y, z), sodass E_kin = 3·½k_BT = 3/2 k_BT resultiert. Mehratomige Moleküle mit zusätzlichen Rotationsfreiheitsgraden hätten dementsprechend eine höhere mittlere kinetische Energie." },
      { id: "natwiss-ueb-thermo1-q6", question: "Wie lautet die Van-der-Waals-Gleichung für reale Gase?", options: ["pV = nRT + ab, als additive statt multiplikative Korrektur", "(p − a/V²)(V + b) = nRT, mit falschen Vorzeichen", "(p + an²/V²)(V − nb) = nRT", "pV = nRT, die Gleichung für ideale Gase"], correctIndex: 2, explanation: "Die Van-der-Waals-Gleichung (p + an²/V²)(V − nb) = nRT korrigiert das ideale Gasgesetz um zwei reale Effekte: der Term an²/V² erhöht den effektiven Druck wegen intermolekularer Anziehung, während nb das von den Molekülen selbst eingenommene Eigenvolumen vom Gesamtvolumen abzieht. Beide Korrekturen wirken in entgegengesetzter Richtung zu den Vorzeichen im Distraktor." },
      { id: "natwiss-ueb-thermo1-q7", question: "Bei konstanter Temperatur (isotherm) wird das Volumen eines idealen Gases verdoppelt. Was passiert mit dem Druck?", options: ["Er verdoppelt sich zusammen mit dem Volumen", "Er bleibt trotz Volumenänderung konstant", "Er wird viermal so groß wie zuvor", "Er halbiert sich"], correctIndex: 3, explanation: "Da bei konstanter Temperatur pV = const. gilt (Boyle-Mariotte), folgt aus V₂ = 2V₁ direkt p₂ = p₁·V₁/V₂ = p₁/2 — der Druck halbiert sich genau umgekehrt proportional zur Volumenverdopplung." },
      { id: "natwiss-ueb-thermo1-q8", question: "Welchen Zusammenhang beschreibt die Gay-Lussac-Gleichung?", options: ["T·p = const., als wäre der Prozess isotherm", "V/T = const., was stattdessen isobar beschreibt", "p/T = const. bei konstantem Volumen (isochor)", "p·V = const., was stattdessen isotherm beschreibt"], correctIndex: 2, explanation: "Das Gay-Lussac-Gesetz beschreibt den isochoren Prozess (konstantes Volumen), bei dem p/T = const. gilt — Druck und Temperatur steigen proportional. Die Beziehung V/T = const. gehört dagegen zum isobaren Gay-Lussac-Gesetz bei konstantem Druck, und p·V = const. zum isothermen Boyle-Mariotte-Gesetz." },
      { id: "natwiss-ueb-thermo1-q9", question: "Wie groß ist die allgemeine Gaskonstante R?", options: ["6,022·10²³ J/(mol·K), das ist stattdessen die Avogadro-Zahl", "8,314 J/(mol·K)", "1,381·10⁻²³ J/K, das ist stattdessen die Boltzmann-Konstante", "9,81 J/(mol·K), das ist stattdessen die Erdbeschleunigung"], correctIndex: 1, explanation: "Die allgemeine Gaskonstante R = 8,314 J/(mol·K) ergibt sich als Produkt aus Avogadro-Zahl N_A und Boltzmann-Konstante k_B, also R = N_A·k_B. Die anderen Werte sind reale, aber andere Naturkonstanten — Avogadro-Zahl, Boltzmann-Konstante bzw. Erdbeschleunigung." },
      { id: "natwiss-ueb-thermo1-q10", question: "Was gibt die relative Luftfeuchtigkeit an?", options: ["Ausschließlich die Temperatur des Taupunkts", "Die absolute Menge Wasserdampf in g/m³ Luft", "Ausschließlich den Sättigungsdampfdruck selbst", "Das Verhältnis des tatsächlichen Wasserdampfpartialdrucks zum Sättigungsdampfdruck"], correctIndex: 3, explanation: "Die relative Luftfeuchtigkeit ist definiert als RL = p_ist/p_sätt, also das Verhältnis von tatsächlichem zu maximal möglichem (gesättigtem) Wasserdampfpartialdruck bei gegebener Temperatur. Bei RL = 100 % ist die Luft wassergesättigt, was dem Taupunkt entspricht — Taupunkt und Sättigungsdampfdruck allein sind aber jeweils nur Teilaspekte, keine vollständige Definition der relativen Feuchtigkeit." }
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
      { id: "natwiss-ueb-thermo2-q1", question: "Was gilt für die innere Energie bei einer isothermen Zustandsänderung eines idealen Gases?", options: ["ΔU = W, als wäre keine Wärme beteiligt", "ΔU = Q, als wäre keine Arbeit beteiligt", "ΔU = 0", "ΔU = nCᵥΔT > 0, als gäbe es eine Temperaturänderung"], correctIndex: 2, explanation: "Beim idealen Gas hängt die innere Energie U ausschließlich von der Temperatur T ab (U = nCᵥT). Da isotherm gerade ΔT = 0 bedeutet, folgt zwingend ΔU = 0 — unabhängig davon, wie viel Wärme zu- oder Arbeit abgeführt wird." },
      { id: "natwiss-ueb-thermo2-q2", question: "Wie lautet der erste Hauptsatz der Thermodynamik?", options: ["ΔU = W − Q, mit vertauschten Vorzeichen", "ΔU = Q − W_vom_Gas", "Q = W, als gäbe es keine innere Energie", "ΔU = Q + W = 0, als wäre die Summe stets null"], correctIndex: 1, explanation: "In der Techniker-Konvention gilt ΔU = Q − W_vom_Gas: Die zugeführte Wärme erhöht die innere Energie, die vom Gas geleistete Arbeit senkt sie. Äquivalent dazu ist die Physiker-Konvention ΔU = Q + W_am_Gas, bei der die am Gas verrichtete Arbeit positiv eingeht." },
      { id: "natwiss-ueb-thermo2-q3", question: "Was gilt bei einer adiabatischen Zustandsänderung?", options: ["Es wird stets W = 0 angenommen", "Q = 0, und damit ΔU = W", "Die innere Energie bleibt stets unverändert (ΔU = 0)", "Die Temperatur bleibt stets konstant (ΔT = 0)"], correctIndex: 1, explanation: "Adiabatisch bedeutet, dass kein Wärmeaustausch mit der Umgebung stattfindet (Q = 0); nach dem ersten Hauptsatz folgt daraus ΔU = W — die gesamte am oder vom Gas verrichtete Arbeit wird direkt in innere Energie umgewandelt oder daraus entnommen. Weder bleibt dabei die Temperatur noch die innere Energie konstant, wie es bei isothermen bzw. isochoren Prozessen der Fall wäre." },
      { id: "natwiss-ueb-thermo2-q4", question: "Ein Gas wird isochor erwärmt. Welche Arbeit wird dabei geleistet?", options: ["W = nRΔT, die isobare Formel", "W = Q, als wären Arbeit und Wärme identisch", "W = nCᵥΔT, was stattdessen ΔU entspricht", "W = p·ΔV = 0"], correctIndex: 3, explanation: "Isochor bedeutet konstantes Volumen, ΔV = 0, sodass die Volumenarbeit W = p·ΔV zwangsläufig null ist — die gesamte zugeführte Wärme fließt in diesem Fall vollständig in die innere Energie (Q = ΔU = nCᵥΔT), nicht in mechanische Arbeit." },
      { id: "natwiss-ueb-thermo2-q5", question: "Was ist die Wärmekapazität bei konstantem Druck Cₚ für ein zweiatomiges ideales Gas?", options: ["Cₚ = 3/2 R, der Wert für einatomige Gase", "Cₚ = 5/2 R, was stattdessen Cᵥ entspricht", "Cₚ = 7/2 R", "Cₚ = R, ohne Berücksichtigung der Freiheitsgrade"], correctIndex: 2, explanation: "Ein zweiatomiges Gas hat neben 3 Translations- auch 2 Rotationsfreiheitsgrade, sodass Cᵥ = 5/2 R gilt. Über die Mayer-Relation Cₚ = Cᵥ + R ergibt sich daraus Cₚ = 7/2 R — der zusätzliche Term R entsteht durch die bei konstantem Druck zusätzlich geleistete Ausdehnungsarbeit." },
      { id: "natwiss-ueb-thermo2-q6", question: "Wie viel Arbeit leistet ein Gas bei isothermer Expansion von V₁ = 1 m³ auf V₂ = 2 m³ bei T = 300 K (n = 1 mol)?", options: ["W = nRT·ln(2) ≈ 1729 J", "W = 0, als fände keine Expansion statt", "W = nRT·2 ≈ 4988 J, mit falscher Multiplikation statt Logarithmus", "W = nRT ≈ 2494 J, ohne den Logarithmus-Faktor"], correctIndex: 0, explanation: "Bei isothermer Expansion gilt W = nRT·ln(V₂/V₁) = 1·8,314·300·ln(2) ≈ 2494·0,693 ≈ 1729 J. Der natürliche Logarithmus des Volumenverhältnisses ist dabei entscheidend — eine reine Multiplikation mit dem Faktor 2 oder das Weglassen des Logarithmus führt zu falschen Werten." },
      { id: "natwiss-ueb-thermo2-q7", question: "Was ist der Unterschied zwischen Cₚ und Cᵥ bei idealen Gasen?", options: ["Es gilt stets Cᵥ > Cₚ", "Zwischen beiden Größen besteht keine feste Beziehung", "Es gilt stets Cₚ = Cᵥ", "Cₚ − Cᵥ = R (Mayer-Relation)"], correctIndex: 3, explanation: "Die Mayer-Relation Cₚ − Cᵥ = R zeigt, dass Cₚ stets um genau R größer ist als Cᵥ — bei konstantem Druck muss das Gas zusätzlich Ausdehnungsarbeit gegen den Umgebungsdruck leisten, wofür mehr Wärme pro Kelvin nötig ist als bei konstantem Volumen." },
      { id: "natwiss-ueb-thermo2-q8", question: "Ein 100-g-Kalorimeter (c = 900 J/(kg·K)) und 500 g Wasser (c = 4186 J/(kg·K)) nehmen Wärme auf. Was dominiert die Gesamtwärmekapazität?", options: ["Das Wasser", "Das Kalorimeter", "Beide tragen exakt gleich viel bei", "Keines der beiden nimmt Wärme auf"], correctIndex: 0, explanation: "Die Wärmekapazität des Wassers C_W = 0,5 kg · 4186 J/(kg·K) ≈ 2093 J/K übersteigt die des Kalorimeters C_kal = 0,1 kg · 900 J/(kg·K) = 90 J/K um mehr als das 20-Fache. Das Wasser dominiert die Gesamtwärmekapazität also deutlich, obwohl beide Massen zur Gesamtwärmeaufnahme beitragen." },
      { id: "natwiss-ueb-thermo2-q9", question: "Wie ändert sich die Temperatur bei adiabatischer Expansion eines Gases?", options: ["Sie bleibt trotz Expansion konstant", "Sie sinkt", "Sie hängt ausschließlich vom Druck ab, nicht vom Volumen", "Sie steigt trotz Expansion an"], correctIndex: 1, explanation: "Bei adiabatischer Expansion (Q = 0) leistet das Gas Arbeit ausschließlich auf Kosten seiner eigenen inneren Energie, da keine Wärme von außen nachfließt — die Temperatur sinkt daher zwangsläufig. Bliebe sie konstant, läge stattdessen ein isothermer Prozess vor, der zusätzliche Wärmezufuhr voraussetzt." },
      { id: "natwiss-ueb-thermo2-q10", question: "Was ist die Schmelzenthalpie (Schmelzwärme)?", options: ["Energie pro Kelvin zum Erwärmen eines Stoffes", "Energie zum reinen Aufheizen eines Kilogramms Stoff", "Energie zum Schmelzen eines Kilogramms bei konstantem Druck", "Energie, die für die Verdampfung benötigt wird"], correctIndex: 2, explanation: "Die Schmelzwärme L gibt die Energie pro Kilogramm an, die bei konstantem Druck und konstanter Schmelztemperatur benötigt wird, um einen Stoff vollständig von fest in flüssig zu überführen (für Wasser L ≈ 334 kJ/kg). Das unterscheidet sie von der spezifischen Wärmekapazität (Energie pro Kelvin zum Erwärmen) und von der Verdampfungswärme, die den Übergang flüssig → gasförmig beschreibt." }
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
      { id: "natwiss-ueb-thermo3-q1", question: "Was ist der Wirkungsgrad einer Wärmekraftmaschine?", options: ["η = Q_H/W, mit vertauschtem Zähler und Nenner", "η = Q_C/Q_H, was stattdessen 1 − η entspricht", "η = T_C/T_H, was stattdessen 1 − η_Carnot entspricht", "η = W/Q_H"], correctIndex: 3, explanation: "Der Wirkungsgrad ist definiert als das Verhältnis von gewonnener Nutzarbeit zu zugeführter Wärme, η = W/Q_H = (Q_H − Q_C)/Q_H = 1 − Q_C/Q_H. Die Distraktoren verwechseln η entweder mit seinem Kehrwert oder mit dem Komplement 1 − η." },
      { id: "natwiss-ueb-thermo3-q2", question: "Was sagt der zweite Hauptsatz der Thermodynamik aus?", options: ["Alle physikalischen Prozesse laufen reversibel ab", "Energie kann grundsätzlich nicht erzeugt werden (1. HS)", "Wärme fließt stets von selbst zum heißeren Körper", "Die Entropie eines abgeschlossenen Systems nimmt nie ab"], correctIndex: 3, explanation: "Der zweite Hauptsatz besagt, dass in einem abgeschlossenen System stets ΔS ≥ 0 gilt, mit strikter Zunahme (ΔS > 0) bei irreversiblen Prozessen. Die Energieerhaltung selbst ist dagegen Inhalt des ersten Hauptsatzes, und Wärme fließt spontan gerade vom heißen zum kalten Körper, nicht umgekehrt." },
      { id: "natwiss-ueb-thermo3-q3", question: "Bei einem Carnot-Kreisprozess: Warum ist T_H > T_C zwingend erforderlich?", options: ["Damit Wärme gemäß dem 2. Hauptsatz freiwillig von T_H zu T_C fließt", "Es besteht überhaupt keine Bedingung an die Temperaturen", "Damit der Druck im Kreisprozess kontinuierlich abnimmt", "Damit ein Wirkungsgrad über 100 % erreicht werden kann"], correctIndex: 0, explanation: "Wärme fließt gemäß dem zweiten Hauptsatz nur spontan vom heißeren zum kälteren Reservoir; der Carnot-Prozess nutzt genau diesen spontanen Fluss, um daraus mechanische Arbeit zu gewinnen. Ohne T_H > T_C gäbe es keinen nutzbaren Wärmestrom und damit keine Arbeitsgewinnung." },
      { id: "natwiss-ueb-thermo3-q4", question: "Welche Entropieänderung hat ein reversibler Kreisprozess insgesamt?", options: ["ΔS > 0, wie bei einem irreversiblen Prozess", "ΔS < 0, was dem 2. Hauptsatz widerspräche", "Es hängt ausschließlich von der absoluten Temperatur ab", "ΔS = 0"], correctIndex: 3, explanation: "Da ein Kreisprozess zum Ausgangszustand zurückkehrt und die Entropie eine Zustandsgröße ist, muss die Entropieänderung über einen vollständigen reversiblen Zyklus exakt null sein (ΔS_ges = 0). Bei irreversiblen Kreisprozessen ist dagegen ΔS_ges > 0, niemals negativ, da dies dem zweiten Hauptsatz widerspräche." },
      { id: "natwiss-ueb-thermo3-q5", question: "Eine Maschine arbeitet zwischen 500 °C und 20 °C. Wie groß ist der maximale Carnot-Wirkungsgrad?", options: ["62 %", "96 %, deutlich zu hoch angesetzt", "38 %, mit vertauschten Temperaturen gerechnet", "50 %, grob überschlagen ohne Kelvin-Umrechnung"], correctIndex: 0, explanation: "Nach Umrechnung in Kelvin (T_H = 773 K, T_C = 293 K) ergibt sich η_C = 1 − 293/773 = 1 − 0,379 ≈ 0,621 = 62 %. Ein Rechnen mit den Celsius-Werten statt Kelvin oder ein Vertauschen der Temperaturen würde zu den anderen, falschen Werten führen." },
      { id: "natwiss-ueb-thermo3-q6", question: "Woran erkennt man im p-V-Diagramm, ob ein Kreisprozess als Wärmekraftmaschine oder Wärmepumpe läuft?", options: ["An der eingeschlossenen Fläche allein", "An der absoluten Temperatur des Prozesses", "Am Umlaufsinn: Uhrzeigersinn = Kraftmaschine, Gegenuhrzeigersinn = Pumpe", "Am absoluten Druckniveau des Kreisprozesses"], correctIndex: 2, explanation: "Läuft der Kreisprozess im p-V-Diagramm im Uhrzeigersinn, ist die Netto-Arbeit positiv und das System liefert Arbeit nach außen (Wärmekraftmaschine); im Gegenuhrzeigersinn muss dagegen Arbeit zugeführt werden (Kältemaschine/Wärmepumpe). Die eingeschlossene Fläche zeigt zwar den Betrag der Arbeit, aber erst der Umlaufsinn verrät die Richtung des Energieflusses." },
      { id: "natwiss-ueb-thermo3-q7", question: "Was beschreibt die Boltzmann-Entropieformel S = k_B·ln(Ω)?", options: ["Statistische Entropie als Funktion der Mikrozustände Ω", "Die Wärmekapazität eines idealen Gases", "Den Druck in einem abgeschlossenen Gasvolumen", "Eine reine Temperaturänderung ohne weitere Bedeutung"], correctIndex: 0, explanation: "Boltzmanns Formel verknüpft die makroskopische Entropie S mit der Anzahl Ω der mikroskopisch zugänglichen Zustände eines Systems: je mehr Mikrozustände zu einem Makrozustand passen, desto höher die Entropie. Wärmekapazität, Druck und Temperatur sind davon unabhängige thermodynamische Größen." },
      { id: "natwiss-ueb-thermo3-q8", question: "Ein Kühlschrank pumpt Wärme von innen (T_C) nach außen (T_H). Welche Mindestarbeit ist dafür nötig?", options: ["W = 0, als bräuchte es keine Arbeit", "W = Q_C·(T_H/T_C − 1)", "W = Q_C, ohne Berücksichtigung der Temperaturen", "W = Q_H/η_C, eine andere Kombination der Größen"], correctIndex: 1, explanation: "Die ideale Leistungszahl der Kältemaschine ist COP = T_C/(T_H − T_C); daraus folgt für die Mindestarbeit W = Q_C/COP = Q_C·(T_H − T_C)/T_C = Q_C·(T_H/T_C − 1). Ohne Arbeitsaufwand (W = 0) könnte gemäß dem zweiten Hauptsatz keine Wärme von kalt nach warm gepumpt werden." },
      { id: "natwiss-ueb-thermo3-q9", question: "Was gilt beim isothermen Prozess (T = const.) des idealen Gases für die Entropieänderung?", options: ["ΔS = nCᵥ·ln(T₂/T₁), was eine Temperaturänderung voraussetzt", "ΔS = 0, als gäbe es keine Volumenänderung", "ΔS = Q/T = nR·ln(V₂/V₁)", "ΔS ist bei diesem Prozess immer negativ"], correctIndex: 2, explanation: "Bei isotherm-reversibler Expansion wird die Wärme Q = nRT·ln(V₂/V₁) zugeführt; damit ergibt sich die Entropieänderung ΔS = Q_rev/T = nR·ln(V₂/V₁). Da ΔT = 0 ist, kann nCᵥ·ln(T₂/T₁) — die Formel für einen reinen Temperatursprung — hier nicht zutreffen, und ΔS ist bei Expansion (V₂ > V₁) sogar positiv, nicht negativ." },
      { id: "natwiss-ueb-thermo3-q10", question: "Warum kann kein realer Motor den Carnot-Wirkungsgrad tatsächlich erreichen?", options: ["Weil der Carnot-Wirkungsgrad ohnehin stets unter 100 % liegt", "Weil alle realen Prozesse irreversibel sind (Reibung, endliche ΔT)", "Weil T_C dafür exakt 0 K betragen müsste", "Weil der Carnot-Wirkungsgrad nur für Gase überhaupt gilt"], correctIndex: 1, explanation: "Der Carnot-Wirkungsgrad ist ein idealisiertes theoretisches Maximum, das nur bei vollständig reversiblen Prozessen erreicht wird. Reale Maschinen haben dagegen stets irreversible Verluste — Reibung, Wärmeübertragung über endliche Temperaturdifferenzen —, die den tatsächlichen Wirkungsgrad unter dieses Maximum drücken." }
    ]
  }
];
