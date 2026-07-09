const NATWISS_CHAPTER7_TOPICS = [
  {
    id: "natwiss-temperatur-ausdehnung",
    chapter: 7,
    order: 1,
    title: "Temperatur und Wärmeausdehnung",
    icon: "🌡️",
    summary: "Temperaturskalen, absoluter Nullpunkt und thermische Ausdehnung von Feststoffen und Flüssigkeiten.",
    explanation: [
      { type: "p", text: "Temperatur ist ein Maß für die mittlere kinetische Energie der Teilchen eines Stoffes. Sie wird in drei gebräuchlichen Skalen angegeben: Celsius (°C), Kelvin (K) und Fahrenheit (°F)." },
      { type: "p", text: "Die Umrechnungsformeln zwischen den Skalen lauten:" },
      { type: "formula", tex: "T(\\mathrm{K}) = T(°\\mathrm{C}) + 273{,}15" },
      { type: "formula", tex: "T(°\\mathrm{F}) = \\frac{9}{5} \\cdot T(°\\mathrm{C}) + 32" },
      { type: "p", text: "Der absolute Nullpunkt liegt bei 0 K = −273,15 °C. Bei dieser Temperatur ist die thermische Teilchenbewegung auf ein Minimum reduziert; er ist die tiefste theoretisch erreichbare Temperatur." },
      { type: "p", text: "Beim Erwärmen dehnen sich feste Körper aus. Die lineare Wärmeausdehnung beschreibt die Längenänderung ΔL eines Körpers der Ausgangslänge L₀ bei einer Temperaturänderung ΔT:" },
      { type: "formula", tex: "\\Delta L = \\alpha \\cdot L_0 \\cdot \\Delta T" },
      { type: "p", text: "Dabei ist α der lineare Ausdehnungskoeffizient [K⁻¹]. Typische Werte: α_Stahl = 12 × 10⁻⁶ K⁻¹, α_Aluminium = 24 × 10⁻⁶ K⁻¹, α_Beton ≈ 12 × 10⁻⁶ K⁻¹." },
      { type: "p", text: "Für die Volumenausdehnung gilt analog:" },
      { type: "formula", tex: "\\Delta V = \\gamma \\cdot V_0 \\cdot \\Delta T" },
      { type: "p", text: "Für isotrope Festkörper gilt γ ≈ 3α, da sich die Ausdehnung in allen drei Raumrichtungen addiert." },
      { type: "p", text: "Praktische Konsequenzen: Dehnungsfugen in Brücken und Schienen verhindern Spannungsschäden. Bimetallstreifen (zwei Metalle mit unterschiedlichem α) biegen sich bei Temperaturänderung und dienen als Thermostate und Schutzschalter." },
      { type: "p", text: "Anomalie des Wassers: Wasser erreicht seine größte Dichte bei 4 °C. Beim Abkühlen unter 4 °C dehnt es sich aus. Daher ist Eis weniger dicht als flüssiges Wasser und schwimmt oben – biologisch entscheidend für das Überleben von Wasserorganismen im Winter." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Der Eiffelturm hat eine Höhe von h = 324 m und besteht aus Stahl (α_Stahl = 12 × 10⁻⁶ K⁻¹). Um wie viel ändert sich seine Höhe, wenn die Temperatur von −10 °C auf +35 °C steigt?",
        solution: [
          { type: "p", text: "Die Temperaturänderung beträgt:" },
          { type: "formula", tex: "\\Delta T = 35\\,°\\mathrm{C} - (-10\\,°\\mathrm{C}) = 45\\,\\mathrm{K}" },
          { type: "p", text: "Die lineare Wärmeausdehnung ergibt sich zu:" },
          { type: "formula", tex: "\\Delta L = \\alpha \\cdot L_0 \\cdot \\Delta T = 12 \\times 10^{-6}\\,\\mathrm{K}^{-1} \\cdot 324\\,\\mathrm{m} \\cdot 45\\,\\mathrm{K}" },
          { type: "formula", tex: "\\Delta L \\approx 0{,}175\\,\\mathrm{m} = 17{,}5\\,\\mathrm{cm}" },
          { type: "p", text: "Der Eiffelturm ist im Sommer gegenüber dem Winter rund 17,5 cm höher. Diese Änderung ist messtechnisch nachweisbar." }
        ]
      },
      {
        id: "ex2",
        prompt: "Stahlschienen sind je L₀ = 25 m lang und werden bei 20 °C verlegt (α_Stahl = 12 × 10⁻⁶ K⁻¹). Wie groß muss der Mindest-Spalt zwischen zwei Schienen sein, damit sie bei Erwärmung auf +50 °C nicht knicken?",
        solution: [
          { type: "p", text: "Der Spalt muss die maximale Ausdehnung gegenüber der Verlegetemperatur aufnehmen. Kritisch ist die Erwärmung von 20 °C auf 50 °C:" },
          { type: "formula", tex: "\\Delta T = 50\\,°\\mathrm{C} - 20\\,°\\mathrm{C} = 30\\,\\mathrm{K}" },
          { type: "formula", tex: "\\Delta L = \\alpha \\cdot L_0 \\cdot \\Delta T = 12 \\times 10^{-6}\\,\\mathrm{K}^{-1} \\cdot 25\\,\\mathrm{m} \\cdot 30\\,\\mathrm{K}" },
          { type: "formula", tex: "\\Delta L = 9 \\times 10^{-3}\\,\\mathrm{m} = 9\\,\\mathrm{mm}" },
          { type: "p", text: "Der Mindest-Spalt beträgt 9 mm. Bei Abkühlung auf −30 °C zieht sich die Schiene gegenüber der Verlegetemperatur um ΔL = 12 × 10⁻⁶ · 25 · 50 = 15 mm zusammen – dieser Fall verursacht Zusspannungen, kein Knicken." }
        ]
      },
      {
        id: "ex3",
        prompt: "Die normale menschliche Körpertemperatur beträgt 37 °C. Rechnen Sie diesen Wert in Kelvin und in Grad Fahrenheit um.",
        solution: [
          { type: "p", text: "Umrechnung in Kelvin:" },
          { type: "formula", tex: "T(\\mathrm{K}) = 37 + 273{,}15 = 310{,}15\\,\\mathrm{K}" },
          { type: "p", text: "Umrechnung in Fahrenheit:" },
          { type: "formula", tex: "T(°\\mathrm{F}) = \\frac{9}{5} \\cdot 37 + 32 = 66{,}6 + 32 = 98{,}6\\,°\\mathrm{F}" },
          { type: "p", text: "Die Körpertemperatur beträgt 310,15 K bzw. 98,6 °F. Der Wert 98,6 °F ist in den USA der bekannte Referenzwert für normale Körpertemperatur." }
        ]
      },
      {
        id: "ex4",
        prompt: "Ein Glasgefäß hat bei 0 °C ein Volumen von V₀ = 500 mL. Der kubische Ausdehnungskoeffizient von Glas beträgt γ = 9 × 10⁻⁶ K⁻¹. Welches Volumen hat das Gefäß bei 100 °C?",
        solution: [
          { type: "p", text: "Die Volumenänderung berechnet sich zu:" },
          { type: "formula", tex: "\\Delta V = \\gamma \\cdot V_0 \\cdot \\Delta T = 9 \\times 10^{-6}\\,\\mathrm{K}^{-1} \\cdot 500\\,\\mathrm{mL} \\cdot 100\\,\\mathrm{K} = 0{,}45\\,\\mathrm{mL}" },
          { type: "p", text: "Das neue Volumen beträgt:" },
          { type: "formula", tex: "V = V_0 + \\Delta V = 500\\,\\mathrm{mL} + 0{,}45\\,\\mathrm{mL} = 500{,}45\\,\\mathrm{mL}" },
          { type: "p", text: "Die Ausdehnung von Glas ist sehr gering (< 0,1 %). In der Messtechnik müssen diese Korrekturen jedoch berücksichtigt werden." }
        ]
      },
      {
        id: "ex5",
        prompt: "Ein Bimetallstreifen besteht aus zwei Metallschichten (Messing mit α₁ = 19 × 10⁻⁶ K⁻¹ und Invar mit α₂ = 1,2 × 10⁻⁶ K⁻¹), die fest miteinander verbunden sind. Erklären Sie qualitativ, warum sich der Streifen beim Erwärmen biegt, und nennen Sie eine technische Anwendung.",
        solution: [
          { type: "p", text: "Beim Erwärmen dehnt sich Messing (α₁ = 19 × 10⁻⁶ K⁻¹) deutlich stärker aus als Invar (α₂ = 1,2 × 10⁻⁶ K⁻¹)." },
          { type: "p", text: "Da beide Schichten fest verbunden sind, kann sich die Messingschicht nicht frei ausdehnen. Die unterschiedliche Längenänderung erzeugt innere mechanische Spannungen, die den Streifen zwingen, sich zur Seite des weniger ausdehnenden Metalls (Invar) zu biegen." },
          { type: "p", text: "Beim Abkühlen biegt sich der Streifen in die entgegengesetzte Richtung. Diese Eigenschaft wird genutzt in: Thermostaten (Heizungsregler), thermischen Sicherungsschaltern (Überstromschutz) und mechanischen Uhren zur Temperaturkompensation." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche Temperatur entspricht dem absoluten Nullpunkt 0 K in Celsius?", options: ["−273,15 °C", "−373,15 °C", "−100 °C", "0 °C"], correctIndex: 0, explanation: "Der absolute Nullpunkt 0 K entspricht −273,15 °C. Bei dieser Temperatur ist die thermische Bewegung der Teilchen auf ein Minimum reduziert." },
      { id: "q2", question: "Welche Formel beschreibt die lineare Wärmeausdehnung eines Festkörpers?", options: ["ΔL = α · L₀² · ΔT", "ΔL = α · L₀ / ΔT", "ΔL = α · L₀ · ΔT", "ΔL = γ · L₀ · ΔT"], correctIndex: 2, explanation: "Die lineare Wärmeausdehnung lautet ΔL = α · L₀ · ΔT. α ist der lineare Ausdehnungskoeffizient [K⁻¹], L₀ die Ausgangslänge und ΔT die Temperaturänderung." },
      { id: "q3", question: "Wie ist der kubische Ausdehnungskoeffizient γ mit dem linearen Koeffizienten α verknüpft (isotroper Festkörper)?", options: ["γ = 2α", "γ = α", "γ ≈ 3α", "γ = α / 3"], correctIndex: 2, explanation: "Für einen isotropen Festkörper gilt γ ≈ 3α, da sich die Ausdehnung in alle drei Raumrichtungen überlagert und die Volumenausdehnung dreimal so groß wie die lineare ist." },
      { id: "q4", question: "Welches der genannten Materialien hat den größten linearen Ausdehnungskoeffizienten α?", options: ["Alle sind gleich groß", "Aluminium (α ≈ 24 × 10⁻⁶ K⁻¹)", "Beton (α ≈ 12 × 10⁻⁶ K⁻¹)", "Stahl (α ≈ 12 × 10⁻⁶ K⁻¹)"], correctIndex: 1, explanation: "Aluminium hat mit α ≈ 24 × 10⁻⁶ K⁻¹ den größten linearen Ausdehnungskoeffizienten der genannten Materialien – doppelt so groß wie Stahl oder Beton." },
      { id: "q5", question: "Warum wird in der Thermodynamik die Kelvin-Skala bevorzugt?", options: ["Sie gilt ausschließlich für Gase", "Aus rein historischen Gründen", "Sie ist einfacher zu messen als Celsius", "Sie beginnt beim absoluten Nullpunkt und hat keine negativen Werte"], correctIndex: 3, explanation: "Die Kelvin-Skala beginnt beim absoluten Nullpunkt (0 K). Da alle Temperaturen positiv sind, eignet sie sich für thermodynamische Berechnungen, bei denen Temperaturverhältnisse und -produkte auftreten." },
      { id: "q6", question: "Was passiert mit Wasser, wenn es von 4 °C auf 0 °C abgekühlt wird?", options: ["Es dehnt sich aus (Anomalie des Wassers)", "Die Dichte bleibt konstant", "Es zieht sich weiter zusammen", "Es verdampft sofort"], correctIndex: 0, explanation: "Die Anomalie des Wassers: Unterhalb von 4 °C dehnt sich Wasser beim weiteren Abkühlen aus, statt sich zusammenzuziehen. Daher ist Eis weniger dicht als flüssiges Wasser und schwimmt oben." },
      { id: "q7", question: "Aus welchen Komponenten besteht ein Bimetallstreifen und weshalb biegt er sich?", options: ["Aus einem Metall und einer Kunststoffschicht", "Aus einem Metall mit zwei Lackschichten", "Aus zwei Metallen mit gleichem Ausdehnungskoeffizienten", "Aus zwei Metallen mit unterschiedlichem Ausdehnungskoeffizienten"], correctIndex: 3, explanation: "Ein Bimetallstreifen besteht aus zwei verschiedenen Metallen mit unterschiedlichem α. Da sie fest verbunden sind, erzeugt die unterschiedliche Wärmeausdehnung mechanische Spannungen, die den Streifen zur Biegung zwingen." },
      { id: "q8", question: "Welcher Temperatur in Kelvin entspricht 100 °C?", options: ["373,15 K", "273,15 K", "173,15 K", "100 K"], correctIndex: 0, explanation: "T(K) = T(°C) + 273,15 = 100 + 273,15 = 373,15 K. Die Kelvin-Temperatur ist stets um 273,15 größer als die Celsius-Temperatur." },
      { id: "q9", question: "Warum werden in Brücken und langen Stahlbauwerken Dehnungsfugen eingebaut?", options: ["Zum Schutz vor Korrosion", "Zur Gewichtsreduktion des Bauwerks", "Um temperaturbedingten Längenänderungen spannungsfrei Raum zu geben", "Aus ästhetischen Gründen"], correctIndex: 2, explanation: "Ohne Dehnungsfugen würden temperaturbedingte Längenänderungen zu inneren Druckspannungen führen, die das Bauwerk verbiegen oder zerstören könnten. Dehnungsfugen ermöglichen eine spannungsfreie Ausdehnung." },
      { id: "q10", question: "Bei welcher Temperatur hat flüssiges Wasser seine größte Dichte?", options: ["0 °C", "4 °C", "100 °C", "20 °C"], correctIndex: 1, explanation: "Wasser hat bei 4 °C seine größte Dichte (≈ 1000 kg/m³). Sowohl Erwärmung als auch Abkühlung unter 4 °C senken die Dichte – dies ist die Anomalie des Wassers und biologisch bedeutsam für Gewässerlebewesen." }
    ]
  },
  {
    id: "natwiss-gasgesetz",
    chapter: 7,
    order: 2,
    title: "Ideales Gasgesetz",
    icon: "💨",
    summary: "Das ideale Gasgesetz verknüpft Druck, Volumen und Temperatur und beschreibt Isothermen, Isobaren und Isochoren.",
    explanation: [
      { type: "p", text: "Ein ideales Gas ist ein Modellgas, dessen Teilchen als punktförmig betrachtet werden und keine Wechselwirkungen untereinander haben. Das ideale Gasgesetz in molarer Form lautet:" },
      { type: "formula", tex: "pV = nRT" },
      { type: "p", text: "Dabei sind: p der Druck [Pa], V das Volumen [m³], n die Stoffmenge [mol], R = 8,314 J/(mol·K) die universelle Gaskonstante, T die absolute Temperatur [K]. In molekularer Form gilt:" },
      { type: "formula", tex: "pV = N k_\\mathrm{B} T" },
      { type: "p", text: "Hier ist N die Anzahl der Moleküle und k_B = 1,381 × 10⁻²³ J/K die Boltzmann-Konstante. Beide Formen sind über die Avogadro-Konstante N_A = 6,022 × 10²³ mol⁻¹ verknüpft: R = N_A · k_B." },
      { type: "p", text: "Spezialfälle (besondere Zustandsänderungen):" },
      { type: "p", text: "Isotherme Änderung (T = const) – Boyle-Mariotte-Gesetz:" },
      { type: "formula", tex: "p \\cdot V = \\text{const}" },
      { type: "p", text: "Isobare Änderung (p = const) – Charles'sches Gesetz:" },
      { type: "formula", tex: "\\frac{V}{T} = \\text{const}" },
      { type: "p", text: "Isochore Änderung (V = const) – Gay-Lussac-Gesetz:" },
      { type: "formula", tex: "\\frac{p}{T} = \\text{const}" },
      { type: "p", text: "Normalbedingungen (STP): T₀ = 273,15 K (0 °C), p₀ = 101 325 Pa (1 atm). Das Molvolumen eines idealen Gases bei Normalbedingungen beträgt V_m = 22,414 L/mol." },
      { type: "p", text: "Das Dalton'sche Partialdruckgesetz: Der Gesamtdruck eines Gasgemisches ist gleich der Summe der Partialdrücke der Einzelkomponenten:" },
      { type: "formula", tex: "p_\\mathrm{ges} = \\sum_i p_i" },
      { type: "p", text: "Reale Gase weichen bei hohem Druck oder tiefer Temperatur vom idealen Verhalten ab. Die van-der-Waals-Gleichung berücksichtigt das Eigenvolumen der Moleküle (Parameter b) und die intermolekularen Anziehungskräfte (Parameter a):" },
      { type: "formula", tex: "\\left(p + \\frac{an^2}{V^2}\\right)(V - nb) = nRT" }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "n = 2 mol eines idealen Gases befinden sich bei T = 300 K und einem Druck von p = 2 × 10⁵ Pa. Berechnen Sie das Volumen V des Gases.",
        solution: [
          { type: "p", text: "Aus dem idealen Gasgesetz pV = nRT folgt:" },
          { type: "formula", tex: "V = \\frac{nRT}{p} = \\frac{2\\,\\mathrm{mol} \\cdot 8{,}314\\,\\frac{\\mathrm{J}}{\\mathrm{mol\\cdot K}} \\cdot 300\\,\\mathrm{K}}{2 \\times 10^5\\,\\mathrm{Pa}}" },
          { type: "formula", tex: "V = \\frac{4988{,}4\\,\\mathrm{J}}{2 \\times 10^5\\,\\mathrm{Pa}} \\approx 0{,}0249\\,\\mathrm{m}^3 = 24{,}9\\,\\mathrm{L}" }
        ]
      },
      {
        id: "ex2",
        prompt: "Ein Gas befindet sich bei 20 °C und p₁ = 1 atm (101 325 Pa) in einem Behälter mit Volumen V₁. Es wird isotherm auf das halbe Volumen komprimiert: V₂ = V₁/2. Welchen Druck p₂ hat das Gas danach?",
        solution: [
          { type: "p", text: "Bei isothermer Zustandsänderung (T = const) gilt das Boyle-Mariotte-Gesetz:" },
          { type: "formula", tex: "p_1 \\cdot V_1 = p_2 \\cdot V_2" },
          { type: "formula", tex: "p_2 = p_1 \\cdot \\frac{V_1}{V_2} = 1\\,\\mathrm{atm} \\cdot \\frac{V_1}{V_1/2} = 2\\,\\mathrm{atm} \\approx 202\\,650\\,\\mathrm{Pa}" },
          { type: "p", text: "Bei Halbierung des Volumens verdoppelt sich der Druck. Dies entspricht dem intuitiven Bild: dieselbe Gasmenge in halbem Raum übt doppelten Druck aus." }
        ]
      },
      {
        id: "ex3",
        prompt: "Ein Luftballon hat bei T₁ = 20 °C ein Volumen von V₁ = 10 L. Er wird bei konstantem Druck auf T₂ = 80 °C erwärmt. Welches Volumen V₂ hat er danach?",
        solution: [
          { type: "p", text: "Temperaturen in Kelvin: T₁ = 293 K, T₂ = 353 K. Bei isobarer Zustandsänderung (Charles'sches Gesetz):" },
          { type: "formula", tex: "\\frac{V_1}{T_1} = \\frac{V_2}{T_2}" },
          { type: "formula", tex: "V_2 = V_1 \\cdot \\frac{T_2}{T_1} = 10\\,\\mathrm{L} \\cdot \\frac{353\\,\\mathrm{K}}{293\\,\\mathrm{K}} \\approx 12{,}05\\,\\mathrm{L}" },
          { type: "p", text: "Der Ballon dehnt sich auf ca. 12,05 L aus. Wichtig: Immer absolute Temperaturen (Kelvin) verwenden!" }
        ]
      },
      {
        id: "ex4",
        prompt: "Ein Autoreifen hat bei T₁ = 10 °C einen (Überdruck-)Fülldruck von p₁ = 2,5 bar. Das Reifenvolumen bleibt konstant. Welchen Druck hat der Reifen nach einer Fahrt bei T₂ = 40 °C?",
        solution: [
          { type: "p", text: "Temperaturen in Kelvin: T₁ = 283 K, T₂ = 313 K. Bei isochorer Zustandsänderung (Gay-Lussac-Gesetz):" },
          { type: "formula", tex: "\\frac{p_1}{T_1} = \\frac{p_2}{T_2}" },
          { type: "formula", tex: "p_2 = p_1 \\cdot \\frac{T_2}{T_1} = 2{,}5\\,\\mathrm{bar} \\cdot \\frac{313\\,\\mathrm{K}}{283\\,\\mathrm{K}} \\approx 2{,}77\\,\\mathrm{bar}" },
          { type: "p", text: "Der Reifendruck steigt um ca. 0,27 bar. Reifen sollten daher immer im kalten Zustand geprüft werden." }
        ]
      },
      {
        id: "ex5",
        prompt: "Wie viele Mol Luft befinden sich in einem Behälter mit V = 50 L bei T = 25 °C und p = 1 atm (101 325 Pa)?",
        solution: [
          { type: "p", text: "Temperatur in Kelvin: T = 25 + 273,15 = 298,15 K ≈ 298 K. Aus pV = nRT folgt:" },
          { type: "formula", tex: "n = \\frac{pV}{RT} = \\frac{101\\,325\\,\\mathrm{Pa} \\cdot 0{,}050\\,\\mathrm{m}^3}{8{,}314\\,\\frac{\\mathrm{J}}{\\mathrm{mol\\cdot K}} \\cdot 298\\,\\mathrm{K}}" },
          { type: "formula", tex: "n = \\frac{5066{,}3}{2477{,}6} \\approx 2{,}04\\,\\mathrm{mol}" }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche Einheit hat die universelle Gaskonstante R?", options: ["J · mol", "Pa · L", "K / mol", "J / (mol · K)"], correctIndex: 3, explanation: "R = 8,314 J/(mol·K). Die Einheit ergibt sich, da R die thermische Energie pro Mol und pro Kelvin beschreibt." },
      { id: "q2", question: "Was besagt das Boyle-Mariotte-Gesetz?", options: ["V / T = const (bei p = const)", "p · V = const (bei T = const)", "p · V · T = const", "p / T = const (bei V = const)"], correctIndex: 1, explanation: "Das Boyle-Mariotte-Gesetz gilt für isotherme Zustandsänderungen: Bei konstanter Temperatur ist p · V = const. Druckverdopplung halbiert das Volumen." },
      { id: "q3", question: "Wie groß ist das Molvolumen eines idealen Gases bei Normalbedingungen (0 °C, 1 atm)?", options: ["22,414 L/mol", "8,314 L/mol", "22,414 m³/mol", "1,000 L/mol"], correctIndex: 0, explanation: "Das Molvolumen unter Normalbedingungen beträgt V_m = 22,414 L/mol. Dies folgt aus pV = nRT mit T = 273,15 K und p = 101 325 Pa." },
      { id: "q4", question: "Wie lautet das ideale Gasgesetz in molarer Form?", options: ["p = nRT / V²", "pV = N k_B T", "pV = NT", "pV = nRT"], correctIndex: 3, explanation: "Das ideale Gasgesetz in molarer Form lautet pV = nRT mit n in mol und R = 8,314 J/(mol·K). Die molekulare Form ist pV = Nk_BT." },
      { id: "q5", question: "Was ist bei einer isochoren Zustandsänderung konstant?", options: ["Die zugeführte Wärme Q", "Das Volumen V", "Die Temperatur T", "Der Druck p"], correctIndex: 1, explanation: "Isochor bedeutet 'gleiches Volumen': V = const. Es gilt Gay-Lussacs Gesetz p/T = const – Druckerhöhung erfordert Temperaturerhöhung." },
      { id: "q6", question: "Wie groß ist die Avogadro-Konstante N_A?", options: ["22,414 L/mol", "8,314 J/(mol·K)", "6,022 × 10²³ mol⁻¹", "1,381 × 10⁻²³ J/K"], correctIndex: 2, explanation: "N_A = 6,022 × 10²³ mol⁻¹ gibt die Anzahl der Teilchen (Atome, Moleküle) in einem Mol an. Sie verknüpft molare und molekulare Beschreibung: R = N_A · k_B." },
      { id: "q7", question: "Ein Gas wird bei konstanter Temperatur auf die Hälfte seines Volumens komprimiert. Was passiert mit dem Druck?", options: ["Er verdoppelt sich", "Er halbiert sich", "Er wird null", "Er bleibt gleich"], correctIndex: 0, explanation: "Nach dem Boyle-Mariotte-Gesetz gilt p · V = const. Wenn V auf V/2 sinkt, muss p auf 2p steigen." },
      { id: "q8", question: "Was gilt bei einer isobaren Zustandsänderung?", options: ["T = const (Isotherme)", "V = const (Isochore)", "p = const (Charles'sches Gesetz: V/T = const)", "U = const"], correctIndex: 2, explanation: "Isobar bedeutet 'gleicher Druck': p = const. Es gilt das Charles'sche Gesetz V/T = const – Temperaturerhöhung führt zu Volumenzunahme." },
      { id: "q9", question: "Was besagt das Dalton'sche Partialdruckgesetz?", options: ["p_ges = p₁ · p₂", "p_ges = p₁ / p₂", "p_ges = Σ pᵢ", "p_ges = p₁ − p₂"], correctIndex: 2, explanation: "Das Dalton'sche Gesetz besagt, dass der Gesamtdruck eines Gasgemisches gleich der Summe der Partialdrücke der einzelnen Gase ist: p_ges = Σpᵢ." },
      { id: "q10", question: "Welche Korrekturen enthält die van-der-Waals-Gleichung gegenüber dem idealen Gasgesetz?", options: ["Weder Eigenvolumen noch Wechselwirkungen", "Nur das Eigenvolumen der Moleküle (Parameter b)", "Nur intermolekulare Anziehungskräfte (Parameter a)", "Eigenvolumen der Moleküle (b) und intermolekulare Wechselwirkungen (a)"], correctIndex: 3, explanation: "Die van-der-Waals-Gleichung korrigiert das ideale Gasgesetz um das Eigenvolumen der Moleküle (Parameter b) und die intermolekularen Anziehungskräfte (Parameter a, bewirkt Druckerniedrigung)." }
    ]
  },
  {
    id: "natwiss-kinetische-gastheorie",
    chapter: 7,
    order: 3,
    title: "Kinetische Gastheorie",
    icon: "⚛️",
    summary: "Die kinetische Gastheorie erklärt Temperatur, Druck und Diffusion durch die ungeordnete Wärmebewegung von Gasmolekülen.",
    explanation: [
      { type: "p", text: "Die kinetische Gastheorie betrachtet ein Gas als Ansammlung sehr vieler Teilchen, die sich in ständiger ungeordneter Wärmebewegung befinden und elastische Stöße miteinander und mit den Gefäßwänden ausführen. Druck entsteht durch den Impulsübertrag der Teilchen auf die Wand." },
      { type: "p", text: "Die mittlere kinetische Energie pro Gasmolekül hängt nur von der absoluten Temperatur T ab:" },
      { type: "formula", tex: "\\langle E_\\mathrm{kin} \\rangle = \\frac{3}{2} k_\\mathrm{B} T" },
      { type: "p", text: "Pro Mol ergibt sich (3/2)RT. Temperatur ist somit ein direktes Maß für die mittlere kinetische Energie der Teilchen." },
      { type: "p", text: "Die quadratische Mittelgeschwindigkeit (root mean square speed) gibt an, welche Geschwindigkeit ein Molekül der Masse m (Molmasse M) im Mittel besitzt:" },
      { type: "formula", tex: "v_\\mathrm{rms} = \\sqrt{\\frac{3 k_\\mathrm{B} T}{m}} = \\sqrt{\\frac{3RT}{M}}" },
      { type: "p", text: "Neben v_rms gibt es zwei weitere charakteristische Geschwindigkeiten der Maxwell-Boltzmann-Verteilung:" },
      { type: "formula", tex: "v_p = \\sqrt{\\frac{2 k_\\mathrm{B} T}{m}} \\quad \\text{(wahrscheinlichste Geschwindigkeit)}" },
      { type: "formula", tex: "\\bar{v} = \\sqrt{\\frac{8 k_\\mathrm{B} T}{\\pi m}} \\quad \\text{(mittlere Geschwindigkeit)}" },
      { type: "p", text: "Es gilt stets: v_p < v̄ < v_rms. Die Maxwell-Boltzmann-Verteilung beschreibt die Häufigkeitsverteilung der Molekülgeschwindigkeiten bei Temperatur T. Mit steigender Temperatur verschiebt sich das Maximum zu höheren Geschwindigkeiten und die Verteilung wird breiter." },
      { type: "p", text: "Diffusion ist die zufällige Wanderung von Teilchen aufgrund ihrer thermischen Energie. Nach Einstein wächst das mittlere quadratische Auslenkung mit der Zeit:" },
      { type: "formula", tex: "\\langle x^2 \\rangle = 2Dt" },
      { type: "p", text: "D ist der Diffusionskoeffizient [m²/s]. Schwerere Moleküle diffundieren langsamer (Graham'sches Effusionsgesetz: Geschwindigkeit ∝ 1/√M)." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Berechnen Sie die quadratische Mittelgeschwindigkeit v_rms von Stickstoff (N₂, M = 28 g/mol) bei T = 300 K.",
        solution: [
          { type: "p", text: "Molmasse in kg/mol: M = 0,028 kg/mol. Die Formel für v_rms lautet:" },
          { type: "formula", tex: "v_\\mathrm{rms} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3 \\cdot 8{,}314\\,\\frac{\\mathrm{J}}{\\mathrm{mol\\cdot K}} \\cdot 300\\,\\mathrm{K}}{0{,}028\\,\\frac{\\mathrm{kg}}{\\mathrm{mol}}}}" },
          { type: "formula", tex: "v_\\mathrm{rms} = \\sqrt{\\frac{7482{,}6}{0{,}028}\\,\\frac{\\mathrm{m}^2}{\\mathrm{s}^2}} = \\sqrt{267\\,236\\,\\frac{\\mathrm{m}^2}{\\mathrm{s}^2}} \\approx 517\\,\\frac{\\mathrm{m}}{\\mathrm{s}}" },
          { type: "p", text: "Stickstoffmoleküle bewegen sich bei Raumtemperatur mit einer quadratischen Mittelgeschwindigkeit von etwa 517 m/s ≈ 1860 km/h." }
        ]
      },
      {
        id: "ex2",
        prompt: "Bei welcher Temperatur T hat Wasserstoff (H₂, M = 2 g/mol) dieselbe quadratische Mittelgeschwindigkeit v_rms wie Stickstoff (N₂, M = 28 g/mol) bei T_N₂ = 300 K?",
        solution: [
          { type: "p", text: "v_rms ist gleich, wenn 3RT/M für beide Gase denselben Wert hat:" },
          { type: "formula", tex: "\\frac{T_{\\mathrm{H_2}}}{M_{\\mathrm{H_2}}} = \\frac{T_{\\mathrm{N_2}}}{M_{\\mathrm{N_2}}}" },
          { type: "formula", tex: "T_{\\mathrm{H_2}} = T_{\\mathrm{N_2}} \\cdot \\frac{M_{\\mathrm{H_2}}}{M_{\\mathrm{N_2}}} = 300\\,\\mathrm{K} \\cdot \\frac{2}{28} \\approx 21{,}4\\,\\mathrm{K}" },
          { type: "p", text: "Wasserstoff hat bei nur 21,4 K (≈ −252 °C) dieselbe v_rms wie Stickstoff bei 300 K, weil H₂-Moleküle 14-mal leichter sind." }
        ]
      },
      {
        id: "ex3",
        prompt: "Vergleichen Sie die mittlere kinetische Energie eines N₂-Moleküls und eines O₂-Moleküls bei derselben Temperatur T = 300 K. Was ist Ihre Schlussfolgerung?",
        solution: [
          { type: "p", text: "Die mittlere kinetische Energie pro Molekül berechnet sich zu:" },
          { type: "formula", tex: "\\langle E_\\mathrm{kin} \\rangle = \\frac{3}{2} k_\\mathrm{B} T = \\frac{3}{2} \\cdot 1{,}381 \\times 10^{-23}\\,\\frac{\\mathrm{J}}{\\mathrm{K}} \\cdot 300\\,\\mathrm{K} = 6{,}21 \\times 10^{-21}\\,\\mathrm{J}" },
          { type: "p", text: "Die Formel hängt nur von der Temperatur T ab, nicht von der Molekülmasse. Daher haben N₂ (M = 28 g/mol) und O₂ (M = 32 g/mol) bei T = 300 K exakt dieselbe mittlere kinetische Energie." },
          { type: "p", text: "Schlussfolgerung: O₂-Moleküle sind schwerer und daher langsamer als N₂-Moleküle, besitzen aber bei gleicher Temperatur dieselbe mittlere kinetische Energie." }
        ]
      },
      {
        id: "ex4",
        prompt: "Berechnen Sie die mittlere kinetische Energie eines Luftmoleküls bei T = 27 °C.",
        solution: [
          { type: "p", text: "Temperatur in Kelvin: T = 27 + 273,15 ≈ 300 K." },
          { type: "formula", tex: "\\langle E_\\mathrm{kin} \\rangle = \\frac{3}{2} k_\\mathrm{B} T = \\frac{3}{2} \\cdot 1{,}381 \\times 10^{-23}\\,\\frac{\\mathrm{J}}{\\mathrm{K}} \\cdot 300\\,\\mathrm{K}" },
          { type: "formula", tex: "\\langle E_\\mathrm{kin} \\rangle = 6{,}21 \\times 10^{-21}\\,\\mathrm{J} \\approx 0{,}039\\,\\mathrm{eV}" },
          { type: "p", text: "Dies entspricht der thermischen Energie k_BT ≈ 0,026 eV × 3/2 ≈ 0,039 eV. Der Wert k_BT ≈ 25 meV ist ein wichtiger Richtwert in der Physik bei Raumtemperatur." }
        ]
      },
      {
        id: "ex5",
        prompt: "Erklären Sie, warum ein schwereres Gasmolekül bei derselben Temperatur eine geringere quadratische Mittelgeschwindigkeit v_rms hat als ein leichteres Molekül.",
        solution: [
          { type: "p", text: "Die mittlere kinetische Energie ist für alle Gase bei gleicher Temperatur identisch:" },
          { type: "formula", tex: "\\frac{1}{2} m v_\\mathrm{rms}^2 = \\frac{3}{2} k_\\mathrm{B} T" },
          { type: "p", text: "Umgestellt nach v_rms:" },
          { type: "formula", tex: "v_\\mathrm{rms} = \\sqrt{\\frac{3 k_\\mathrm{B} T}{m}}" },
          { type: "p", text: "Da die Masse m im Nenner der Wurzel steht, ergibt sich: Je größer die Molekülmasse m, desto kleiner ist v_rms. Ein schwereres Molekül muss sich langsamer bewegen, damit (1/2)mv² denselben Wert hat wie bei einem leichteren, schnelleren Molekül. Dies ist auch die Grundlage des Graham'schen Effusionsgesetzes." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was ist die mittlere kinetische Energie eines Gasmoleküls bei der absoluten Temperatur T?", options: ["(1/2) · k_B · T", "2 · k_B · T", "k_B · T", "(3/2) · k_B · T"], correctIndex: 3, explanation: "Die mittlere kinetische Energie pro Molekül beträgt (3/2) · k_B · T. Der Faktor 3/2 kommt von den drei translatorischen Freiheitsgraden (x-, y-, z-Richtung)." },
      { id: "q2", question: "Welche der drei charakteristischen Geschwindigkeiten der Maxwell-Boltzmann-Verteilung ist am größten?", options: ["v̄ (mittlere Geschwindigkeit)", "Alle sind gleich groß", "v_p (wahrscheinlichste Geschwindigkeit)", "v_rms (quadratischer Mittelwert)"], correctIndex: 3, explanation: "Es gilt v_p < v̄ < v_rms. Der quadratische Mittelwert v_rms ist am größten, weil das Quadrieren schnelle Teilchen stärker gewichtet als langsame." },
      { id: "q3", question: "Wie hängt die quadratische Mittelgeschwindigkeit v_rms von der absoluten Temperatur T ab?", options: ["v_rms ∝ T²", "v_rms ∝ T", "v_rms ∝ 1/T", "v_rms ∝ √T"], correctIndex: 3, explanation: "v_rms = √(3RT/M) ∝ √T. Wird die Temperatur vervierfacht, verdoppelt sich v_rms. Die Abhängigkeit ist eine Wurzelfunktion." },
      { id: "q4", question: "Was misst die Temperatur auf molekularer Ebene?", options: ["Die mittlere kinetische Energie der Moleküle", "Die potentielle Energie der Moleküle", "Den Druck mal Volumen", "Die Dichte des Gases"], correctIndex: 0, explanation: "Temperatur ist ein direktes Maß für die mittlere translatorische kinetische Energie der Moleküle: ⟨E_kin⟩ = (3/2)k_BT." },
      { id: "q5", question: "Was beschreibt die Maxwell-Boltzmann-Verteilung?", options: ["Die Druckverteilung im Gas in Abhängigkeit vom Ort", "Die Energieverteilung in Festkörpern", "Die Verteilung der Molekülgeschwindigkeiten bei Temperatur T", "Die Dichteverteilung in einem Behälter"], correctIndex: 2, explanation: "Die Maxwell-Boltzmann-Verteilung gibt an, welcher Anteil der Moleküle eine bestimmte Geschwindigkeit hat. Bei höherer Temperatur verschiebt sich das Maximum zu größeren Geschwindigkeiten." },
      { id: "q6", question: "Warum diffundiert Wasserstoff (H₂) schneller als Stickstoff (N₂) bei gleicher Temperatur?", options: ["Weil H₂-Moleküle kleiner sind und weniger Platz benötigen", "Weil H₂ eine viel kleinere Molmasse hat und daher eine höhere v_rms besitzt", "Weil H₂ polarer ist", "Weil N₂ eine stärkere Dreifachbindung hat"], correctIndex: 1, explanation: "Da v_rms ∝ 1/√M gilt, bewegen sich H₂-Moleküle (M = 2 g/mol) etwa √(28/2) = √14 ≈ 3,7-mal schneller als N₂-Moleküle (M = 28 g/mol) – und diffundieren entsprechend schneller." },
      { id: "q7", question: "Um welchen Faktor ändert sich v_rms, wenn die absolute Temperatur T auf den vierfachen Wert steigt?", options: ["v_rms verdoppelt sich (Faktor 2)", "v_rms nimmt um Faktor √2 zu", "v_rms vervierfacht sich (Faktor 4)", "v_rms bleibt gleich"], correctIndex: 0, explanation: "Da v_rms ∝ √T gilt: Wenn T → 4T, dann v_rms → √4 · v_rms = 2 · v_rms. Die Verdoppelung von T erhöht v_rms um Faktor √2 ≈ 1,41." },
      { id: "q8", question: "Welche Formel beschreibt die quadratische Mittelgeschwindigkeit v_rms?", options: ["√(2RT / M)", "√(RT / M)", "√(3RT / M)", "√(8RT / (πM))"], correctIndex: 2, explanation: "v_rms = √(3RT/M). Zum Vergleich: Die wahrscheinlichste Geschwindigkeit ist v_p = √(2RT/M) und die mittlere ist v̄ = √(8RT/(πM))." },
      { id: "q9", question: "Gas A hat M_A = 4 g/mol, Gas B hat M_B = 16 g/mol. Beide befinden sich bei gleicher Temperatur T. Welches Gas hat die größere v_rms?", options: ["Gas A (v_rms doppelt so groß wie Gas B)", "Gas B", "Das hängt vom Druck ab", "Beide haben dieselbe v_rms"], correctIndex: 0, explanation: "Da v_rms ∝ 1/√M, gilt: v_rms(A)/v_rms(B) = √(M_B/M_A) = √(16/4) = 2. Gas A ist doppelt so schnell wie Gas B." },
      { id: "q10", question: "Welche Einheit hat die mittlere kinetische Energie pro Molekül?", options: ["eV/mol", "J", "K", "J/mol"], correctIndex: 1, explanation: "Die mittlere kinetische Energie pro Molekül wird in Joule (J) angegeben: ⟨E_kin⟩ = (3/2)k_BT, wobei k_B die Einheit J/K und T die Einheit K hat." }
    ]
  }
];
