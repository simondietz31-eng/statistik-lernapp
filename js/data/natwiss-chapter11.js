const NATWISS_CHAPTER11_TOPICS = [
  {
    id: "natwiss-strom-widerstand",
    chapter: 11,
    order: 1,
    title: "Elektrischer Strom und Widerstand",
    icon: "💡",
    summary: "Definition des elektrischen Stroms und der Stromdichte, das Ohmsche Gesetz, die geometrische Berechnung des Widerstands, Temperaturabhängigkeit und der Unterschied zwischen ohmschen und nicht-ohmschen Bauelementen.",
    explanation: [
      { type: "p", text: "Elektrischer Strom entsteht durch die gerichtete Bewegung von Ladungsträgern in einem Leiter. Als Maß für den Strom gilt die pro Zeit durch einen Querschnitt fließende Ladung:" },
      { type: "formula", tex: "I = \\frac{dQ}{dt}, \\quad [I] = \\text{A (Ampere)}" },
      { type: "p", text: "Die technische Stromrichtung ist per Konvention von der positiven zur negativen Klemme (von Plus nach Minus außerhalb der Quelle) festgelegt – entgegengesetzt zur tatsächlichen Bewegungsrichtung der Elektronen. Die Stromdichte j beschreibt den Strom pro Querschnittsfläche:" },
      { type: "formula", tex: "j = \\frac{I}{A}, \\quad [j] = \\frac{\\text{A}}{\\text{m}^2}" },
      { type: "p", text: "Das Ohmsche Gesetz beschreibt den linearen Zusammenhang zwischen Spannung U und Strom I für ohmsche Widerstände bei konstanter Temperatur:" },
      { type: "formula", tex: "U = R \\cdot I \\quad \\Leftrightarrow \\quad R = \\frac{U}{I}, \\quad [R] = \\Omega\\,\\text{(Ohm)}" },
      { type: "p", text: "Der elektrische Widerstand R eines homogenen Leiters hängt von seiner Geometrie (Länge L, Querschnittsfläche A) und dem Werkstoff (spezifischer Widerstand ρ) ab:" },
      { type: "formula", tex: "R = \\rho \\cdot \\frac{L}{A}, \\quad [\\rho] = \\Omega \\cdot \\text{m}" },
      { type: "p", text: "Typische Werte des spezifischen Widerstands: Kupfer ρ_Cu = 1,7 × 10⁻⁸ Ω·m (sehr guter Leiter), Aluminium ρ_Al = 2,8 × 10⁻⁸ Ω·m, Silizium ρ_Si ≈ 2,3 × 10³ Ω·m (Halbleiter), Glas ρ ≈ 10¹² Ω·m (Isolator)." },
      { type: "p", text: "Der Widerstand ist temperaturabhängig. Für Metalle steigt R mit der Temperatur (mehr Gitterschwingungen = mehr Streuung der Elektronen):" },
      { type: "formula", tex: "R(T) = R_0 \\cdot (1 + \\alpha \\cdot \\Delta T)" },
      { type: "p", text: "Dabei ist α der Temperaturkoeffizient des Widerstands (für Kupfer: α_Cu = 3,9 × 10⁻³ K⁻¹) und ΔT = T − T₀ die Temperaturänderung gegenüber der Referenztemperatur T₀ = 0 °C (oder 20 °C je nach Konvention)." },
      { type: "p", text: "Nicht-ohmsche Bauelemente wie Dioden oder LEDs folgen nicht dem linearen Ohmschen Gesetz. Ihre Strom-Spannungs-Kennlinie (I-U-Kennlinie) ist nichtlinear – der Widerstand ist nicht konstant, sondern hängt vom Arbeitspunkt ab." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Kupferdraht (ρ = 1,7 × 10⁻⁸ Ω·m) hat die Länge L = 100 m und einen Durchmesser d = 2 mm. Berechnen Sie den elektrischen Widerstand.",
        solution: [
          { type: "p", text: "Querschnittsfläche des Drahtes (Kreisquerschnitt):" },
          { type: "formula", tex: "A = \\pi \\cdot \\left(\\frac{d}{2}\\right)^2 = \\pi \\cdot (0{,}001)^2 = \\pi \\times 10^{-6}\\,\\text{m}^2 \\approx 3{,}14 \\times 10^{-6}\\,\\text{m}^2" },
          { type: "p", text: "Widerstand:" },
          { type: "formula", tex: "R = \\rho \\cdot \\frac{L}{A} = 1{,}7 \\times 10^{-8} \\cdot \\frac{100}{3{,}14 \\times 10^{-6}} = \\frac{1{,}7 \\times 10^{-6}}{3{,}14 \\times 10^{-6}} \\approx 0{,}54\\,\\Omega" },
          { type: "p", text: "Der Kupferdraht hat einen Widerstand von ca. 0,54 Ω. Kupfer ist ein sehr guter elektrischer Leiter." }
        ]
      },
      {
        id: "ex2",
        prompt: "An einem Widerstand R = 50 Ω liegt eine Spannung U = 230 V an. Berechnen Sie den fließenden Strom I.",
        solution: [
          { type: "p", text: "Aus dem Ohmschen Gesetz U = R·I folgt:" },
          { type: "formula", tex: "I = \\frac{U}{R} = \\frac{230\\,\\text{V}}{50\\,\\Omega} = 4{,}6\\,\\text{A}" },
          { type: "p", text: "Durch den Widerstand fließt ein Strom von 4,6 A. Dies entspricht einer Leistungsaufnahme von P = U·I = 230 V · 4,6 A = 1058 W ≈ 1,06 kW." }
        ]
      },
      {
        id: "ex3",
        prompt: "Ein Kupferdraht hat bei T₀ = 0 °C den Widerstand R₀ = 10 Ω. Der Temperaturkoeffizient von Kupfer beträgt α = 3,9 × 10⁻³ K⁻¹. Berechnen Sie den Widerstand bei T = 100 °C.",
        solution: [
          { type: "p", text: "Mit der Formel für die Temperaturabhängigkeit des Widerstands:" },
          { type: "formula", tex: "R(T) = R_0 \\cdot (1 + \\alpha \\cdot \\Delta T) = 10\\,\\Omega \\cdot (1 + 3{,}9 \\times 10^{-3} \\cdot 100)" },
          { type: "formula", tex: "R(100\\,°\\text{C}) = 10 \\cdot (1 + 0{,}39) = 10 \\cdot 1{,}39 = 13{,}9\\,\\Omega" },
          { type: "p", text: "Bei 100 °C beträgt der Widerstand 13,9 Ω – er hat sich um 39 % erhöht. Bei Metallen steigt der Widerstand mit der Temperatur, bei Halbleitern (z. B. NTC-Widerstand) sinkt er dagegen." }
        ]
      },
      {
        id: "ex4",
        prompt: "Durch einen Leiterquerschnitt fließt ein Strom von I = 5 A. Wie viele Elektronen passieren diesen Querschnitt pro Sekunde?",
        solution: [
          { type: "p", text: "In einer Sekunde fließt die Ladung Q = I·t = 5 A · 1 s = 5 C. Die Anzahl der Elektronen (Ladungsträger mit je e = 1,602 × 10⁻¹⁹ C):" },
          { type: "formula", tex: "n = \\frac{Q}{e} = \\frac{5\\,\\text{C}}{1{,}602 \\times 10^{-19}\\,\\text{C}} \\approx 3{,}12 \\times 10^{19}" },
          { type: "p", text: "Pro Sekunde passieren ca. 3,12 × 10¹⁹ Elektronen (rund 31 Trillionen) den Querschnitt. Dies verdeutlicht die enorme Anzahl an Ladungsträgern in einem Stromkreis." }
        ]
      },
      {
        id: "ex5",
        prompt: "Ein Widerstandsdraht hat den Widerstand R. Um wie viel ändert sich R, wenn (a) die Länge verdoppelt wird und (b) der Durchmesser halbiert wird? Begründen Sie Ihre Antworten.",
        solution: [
          { type: "p", text: "(a) Verdopplung der Länge (L' = 2L, A bleibt gleich):" },
          { type: "formula", tex: "R' = \\rho \\cdot \\frac{2L}{A} = 2 \\cdot \\rho \\cdot \\frac{L}{A} = 2R" },
          { type: "p", text: "Der Widerstand verdoppelt sich, da R linear von L abhängt." },
          { type: "p", text: "(b) Halbierung des Durchmessers (d' = d/2): Die Querschnittsfläche ändert sich quadratisch:" },
          { type: "formula", tex: "A' = \\pi \\left(\\frac{d'}{2}\\right)^2 = \\pi \\left(\\frac{d}{4}\\right)^2 = \\frac{\\pi d^2}{16} = \\frac{A}{4}" },
          { type: "formula", tex: "R' = \\rho \\cdot \\frac{L}{A/4} = 4 \\cdot \\rho \\cdot \\frac{L}{A} = 4R" },
          { type: "p", text: "Bei halbiertem Durchmesser vervierfacht sich der Widerstand! Die Querschnittsfläche geht quadratisch ein, daher ist die Wirkung viel stärker als bei der Längenänderung." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie ist der elektrische Strom I definiert?", options: ["I = dQ/dt", "I = U² / R", "I = U · R", "I = P / R"], correctIndex: 0, explanation: "Der Strom ist per Definition die pro Zeiteinheit fließende Ladung, I = dQ/dt, wie im Lehrtext eingeführt; die Einheit Ampere entspricht C/s. Die übrigen Antworten sind Leistungs- bzw. Widerstandsformeln, die etwas anderes als den Strom selbst berechnen." },
      { id: "q2", question: "Welche Aussage zum Ohmschen Gesetz ist korrekt?", options: ["Es gilt nur bei sehr hohen Temperaturen", "Es besagt, dass R von der Spannung abhängt", "Es gilt für alle elektrischen Bauelemente", "U = R·I gilt für ohmsche Widerstände"], correctIndex: 3, explanation: "Das Ohmsche Gesetz U = R·I beschreibt einen linearen Zusammenhang, der laut Lehrtext nur für ohmsche Widerstände bei konstanter Temperatur gilt. Nicht-ohmsche Bauelemente wie Dioden folgen ihm gerade nicht, weshalb 'für alle Bauelemente' falsch ist." },
      { id: "q3", question: "Von welchen Größen hängt der Widerstand R = ρ·L/A ab?", options: ["Von der angelegten Spannung", "Nur von der Länge und dem Querschnitt, unabhängig vom Material", "Vom Material ρ, der Länge L und dem Querschnitt A", "Nur vom Material"], correctIndex: 2, explanation: "Die Formel R = ρ·L/A zeigt direkt, dass der Widerstand vom spezifischen Widerstand ρ (Material), der Länge L und der Querschnittsfläche A abhängt. Spannung fließt hier nicht ein, und Material oder Geometrie allein reichen laut Formel jeweils nicht aus." },
      { id: "q4", question: "Welche Einheit hat der spezifische Widerstand ρ?", options: ["Ohm·Meter (Ω·m)", "Siemens (S)", "Ampere pro Meter (A/m)", "Ohm (Ω)"], correctIndex: 0, explanation: "Laut Lehrtext hat der spezifische Widerstand die Einheit Ω·m, was auch aus R = ρ·L/A folgt (Ω = Ω·m · m/m²). Er ist eine reine Materialeigenschaft und unterscheidet sich damit von Siemens oder Ampere pro Meter, die andere Größen beschreiben." },
      { id: "q5", question: "Wie verhält sich der Widerstand eines Metallleiters bei steigender Temperatur?", options: ["Er wird negativ", "Er sinkt stark ab (wie bei Halbleitern)", "Er bleibt konstant", "Er steigt an"], correctIndex: 3, explanation: "Für Metalle steigt der Widerstand mit der Temperatur, R(T) = R₀·(1 + α·ΔT) mit α > 0, weil stärkere Gitterschwingungen die Elektronen häufiger streuen. Das Gegenteil – sinkender Widerstand bei Erwärmung – gilt laut Lehrtext für Halbleiter, nicht für Metalle." },
      { id: "q6", question: "In welche Richtung fließt der konventionelle (technische) Strom?", options: ["Nur durch Isolatoren", "Von Plus nach Minus (entgegen der Elektronenbewegung)", "Von Minus nach Plus (in Richtung der Elektronenbewegung)", "Abwechselnd in beide Richtungen"], correctIndex: 1, explanation: "Die technische Stromrichtung ist per Konvention von Plus nach Minus festgelegt – entgegengesetzt zur tatsächlichen Bewegung der Elektronen, die sich laut Lehrtext von Minus nach Plus bewegen. Diese Konvention wurde bewusst vom tatsächlichen Elektronenfluss abweichend festgelegt." },
      { id: "q7", question: "Was ist die Stromdichte j?", options: ["Spannung mal Strom, wie bei der Leistung P = U·I", "Strom pro Querschnittsfläche (I/A)", "Widerstand pro Längeneinheit des Leiters", "Ladung mal Strom, ähnlich wie bei Q = I·t"], correctIndex: 1, explanation: "Die Stromdichte ist im Lehrtext als Strom pro Querschnittsfläche definiert, j = I/A, mit Einheit A/m². Sie unterscheidet sich von Spannung mal Strom (das ergibt die Leistung P) und von Größen wie Ladung mal Strom, die im Text nicht als Stromdichte eingeführt werden." },
      { id: "q8", question: "Welchen Wert hat der spezifische Widerstand von Kupfer?", options: ["10¹² Ω·m", "2,3 × 10³ Ω·m", "1,7 × 10⁻⁸ Ω·m", "3,9 × 10⁻³ Ω·m"], correctIndex: 2, explanation: "Der Lehrtext nennt für Kupfer den sehr kleinen spezifischen Widerstand ρ_Cu = 1,7 × 10⁻⁸ Ω·m, typisch für einen sehr guten Leiter. Die anderen Werte passen zu anderen genannten Materialien: 2,3 × 10³ Ω·m zu Silizium (Halbleiter) und 10¹² Ω·m zu Glas (Isolator)." },
      { id: "q9", question: "Was geschieht mit dem Widerstand eines Drahtes, wenn sein Durchmesser verdoppelt wird (Länge und Material gleich)?", options: ["R verdoppelt sich", "R wird viermal kleiner", "R halbiert sich (bei größerem Querschnitt)", "R bleibt unverändert gleich"], correctIndex: 1, explanation: "Die Querschnittsfläche A = π(d/2)² wächst quadratisch mit dem Durchmesser. Verdoppelt sich d, vervierfacht sich A, und da R = ρL/A umgekehrt proportional zu A ist, wird R viermal kleiner – der Lehrtext zeigt die entsprechende Vervierfachung von R für den umgekehrten Fall der Halbierung." },
      { id: "q10", question: "Was unterscheidet nicht-ohmsche Bauelemente (z. B. Dioden) von ohmschen Widerständen?", options: ["Ihr Widerstand ist konstant und unabhängig von Spannung", "Sie haben keinen elektrischen Widerstand", "Ihre Strom-Spannungs-Kennlinie ist nichtlinear", "Sie leiten Strom nur bei sehr hohen Spannungen"], correctIndex: 2, explanation: "Nicht-ohmsche Bauelemente wie Dioden haben laut Lehrtext eine nichtlineare Strom-Spannungs-Kennlinie – ihr Widerstand ist also keine Konstante, sondern hängt vom Arbeitspunkt ab. Das unterscheidet sie von ohmschen Widerständen, bei denen U und I proportional zueinander sind." }
    ]
  },
  {
    id: "natwiss-kirchhoff",
    chapter: 11,
    order: 2,
    title: "Kirchhoffsche Gesetze",
    icon: "🔌",
    summary: "Die Knotenregel (KCL) und die Maschenregel (KVL) als Grundlage der Netzwerkanalyse, Reihen- und Parallelschaltung von Widerständen, Spannungs- und Stromteiler sowie die Wirkung des Innenwiderstands einer Spannungsquelle.",
    explanation: [
      { type: "p", text: "Die Kirchhoffschen Gesetze (formuliert 1845 von Gustav Robert Kirchhoff) bilden die Grundlage zur Analyse beliebiger elektrischer Netzwerke. Sie folgen aus fundamentalen Erhaltungssätzen." },
      { type: "p", text: "Erstes Kirchhoffsches Gesetz – Knotenregel (KCL): An jedem Knotenpunkt eines Netzwerks ist die Summe aller zufließenden Ströme gleich der Summe aller abfließenden Ströme (Ladungserhaltung):" },
      { type: "formula", tex: "\\sum I_{\\text{zu}} = \\sum I_{\\text{ab}} \\quad \\Leftrightarrow \\quad \\sum_k I_k = 0" },
      { type: "p", text: "Zweites Kirchhoffsches Gesetz – Maschenregel (KVL): Die Summe aller Spannungen entlang einer geschlossenen Masche ist null (Energieerhaltung):" },
      { type: "formula", tex: "\\sum_k U_k = 0" },
      { type: "p", text: "Reihenschaltung von Widerständen: Alle Widerstände tragen denselben Strom I. Die Spannungen teilen sich proportional zu den Widerstandswerten auf:" },
      { type: "formula", tex: "R_{\\text{reihe}} = R_1 + R_2 + R_3 + \\ldots" },
      { type: "p", text: "Parallelschaltung von Widerständen: Alle Widerstände liegen an derselben Spannung U. Die Ströme teilen sich umgekehrt proportional zu den Widerstandswerten auf:" },
      { type: "formula", tex: "\\frac{1}{R_{\\text{parallel}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} + \\ldots" },
      { type: "p", text: "Spannungsteiler (Reihenschaltung): Die Teilspannung U₂ an R₂ berechnet sich zu:" },
      { type: "formula", tex: "U_2 = U_{\\text{ges}} \\cdot \\frac{R_2}{R_1 + R_2}" },
      { type: "p", text: "Stromteiler (Parallelschaltung): Der Teilstrom I₁ durch R₁ bei zwei parallelen Widerständen:" },
      { type: "formula", tex: "I_1 = I_{\\text{ges}} \\cdot \\frac{R_2}{R_1 + R_2}" },
      { type: "p", text: "Eine reale Spannungsquelle (EMK = elektromagnetische Kraft) hat einen Innenwiderstand r_i. Die Klemmenspannung U_kl fällt unter Last ab:" },
      { type: "formula", tex: "U_{\\text{kl}} = \\text{EMK} - I \\cdot r_i" },
      { type: "p", text: "Wheatstonesche Brücke: Die Brücke ist abgeglichen (kein Strom durch das Galvanometer), wenn gilt:" },
      { type: "formula", tex: "\\frac{R_1}{R_2} = \\frac{R_3}{R_4}" }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Drei Widerstände R₁ = 10 Ω, R₂ = 20 Ω und R₃ = 30 Ω sind in Reihe an eine Spannung von U = 60 V angeschlossen. Berechnen Sie (a) den Gesamtwiderstand, (b) den fließenden Strom und (c) die Spannung an jedem Widerstand.",
        solution: [
          { type: "p", text: "(a) Gesamtwiderstand der Reihenschaltung:" },
          { type: "formula", tex: "R_{\\text{ges}} = R_1 + R_2 + R_3 = 10 + 20 + 30 = 60\\,\\Omega" },
          { type: "p", text: "(b) Strom (gleich für alle Widerstände):" },
          { type: "formula", tex: "I = \\frac{U}{R_{\\text{ges}}} = \\frac{60\\,\\text{V}}{60\\,\\Omega} = 1\\,\\text{A}" },
          { type: "p", text: "(c) Teilspannungen:" },
          { type: "formula", tex: "U_1 = I \\cdot R_1 = 1 \\cdot 10 = 10\\,\\text{V}, \\quad U_2 = 20\\,\\text{V}, \\quad U_3 = 30\\,\\text{V}" },
          { type: "p", text: "Probe: U₁ + U₂ + U₃ = 10 + 20 + 30 = 60 V ✓ (Maschenregel bestätigt)" }
        ]
      },
      {
        id: "ex2",
        prompt: "Die gleichen Widerstände R₁ = 10 Ω, R₂ = 20 Ω und R₃ = 30 Ω werden nun parallel an U = 12 V angeschlossen. Berechnen Sie den Ersatzwiderstand und den Gesamtstrom.",
        solution: [
          { type: "p", text: "Kehrwert des Parallelwiderstands:" },
          { type: "formula", tex: "\\frac{1}{R_{\\text{p}}} = \\frac{1}{10} + \\frac{1}{20} + \\frac{1}{30} = \\frac{6}{60} + \\frac{3}{60} + \\frac{2}{60} = \\frac{11}{60}" },
          { type: "formula", tex: "R_{\\text{p}} = \\frac{60}{11} \\approx 5{,}45\\,\\Omega" },
          { type: "p", text: "Gesamtstrom:" },
          { type: "formula", tex: "I_{\\text{ges}} = \\frac{U}{R_{\\text{p}}} = \\frac{12\\,\\text{V}}{5{,}45\\,\\Omega} \\approx 2{,}2\\,\\text{A}" },
          { type: "p", text: "Probe über Teilströme: I₁ = 1,2 A, I₂ = 0,6 A, I₃ = 0,4 A → Summe = 2,2 A ✓" }
        ]
      },
      {
        id: "ex3",
        prompt: "Eine Batterie mit EMK = 12 V und Innenwiderstand r_i = 0,5 Ω ist an einen Außenwiderstand R_a = 5,5 Ω angeschlossen. Berechnen Sie den Strom I und die Klemmenspannung U_kl.",
        solution: [
          { type: "p", text: "Der Strom ergibt sich mit dem Gesamtwiderstand (Innen- plus Außenwiderstand):" },
          { type: "formula", tex: "I = \\frac{\\text{EMK}}{R_a + r_i} = \\frac{12\\,\\text{V}}{5{,}5\\,\\Omega + 0{,}5\\,\\Omega} = \\frac{12}{6} = 2\\,\\text{A}" },
          { type: "p", text: "Die Klemmenspannung (Spannung an den Batteriepolen) unter Last:" },
          { type: "formula", tex: "U_{\\text{kl}} = \\text{EMK} - I \\cdot r_i = 12\\,\\text{V} - 2\\,\\text{A} \\cdot 0{,}5\\,\\Omega = 12 - 1 = 11\\,\\text{V}" },
          { type: "p", text: "Die Klemmenspannung beträgt 11 V (statt 12 V im Leerlauf). Der Spannungsabfall am Innenwiderstand beträgt 1 V." }
        ]
      },
      {
        id: "ex4",
        prompt: "In einer Spannungsteilerschaltung liegen R₁ = 1 kΩ und R₂ = 3 kΩ in Reihe an U_ges = 12 V. Berechnen Sie die Ausgangsspannung U₂ (Spannung an R₂).",
        solution: [
          { type: "p", text: "Die Ausgangsspannung eines Spannungsteilers:" },
          { type: "formula", tex: "U_2 = U_{\\text{ges}} \\cdot \\frac{R_2}{R_1 + R_2} = 12\\,\\text{V} \\cdot \\frac{3\\,\\text{k}\\Omega}{1\\,\\text{k}\\Omega + 3\\,\\text{k}\\Omega} = 12 \\cdot \\frac{3}{4} = 9\\,\\text{V}" },
          { type: "p", text: "An R₂ liegt eine Spannung von 9 V an, an R₁ entsprechend 3 V. Der Spannungsteiler teilt die Gesamtspannung proportional zu den Widerstandswerten auf." }
        ]
      },
      {
        id: "ex5",
        prompt: "In einem einfachen Zweimaschennetz (Beispiel: Batterie EMK₁ = 10 V mit r₁ = 1 Ω, Batterie EMK₂ = 6 V mit r₂ = 1 Ω, verbunden über R = 4 Ω) stellen Sie die Kirchhoffschen Gleichungen auf und bestimmen die Ströme I₁ und I₂.",
        solution: [
          { type: "p", text: "Wir definieren: I₁ fließt aus EMK₁ im Uhrzeigersinn, I₂ fließt aus EMK₂. Knoten A: I₁ = I₂ + I₃ (I₃ durch R). Masche 1 (EMK₁, r₁, R): EMK₁ = I₁·r₁ + (I₁−I₂)·R" },
          { type: "formula", tex: "10 = I_1 \\cdot 1 + (I_1 - I_2) \\cdot 4 = 5I_1 - 4I_2" },
          { type: "p", text: "Masche 2 (EMK₂, r₂, R): EMK₂ = I₂·r₂ + (I₂−I₁)·R" },
          { type: "formula", tex: "6 = I_2 \\cdot 1 + (I_2 - I_1) \\cdot 4 = 5I_2 - 4I_1" },
          { type: "p", text: "Aus Gleichung 1: I₁ = (10 + 4I₂)/5. Einsetzen in Gleichung 2: 6 = 5I₂ − 4(10 + 4I₂)/5 → 30 = 25I₂ − 40 − 16I₂ → 9I₂ = 70 → I₂ ≈ 7,78 A; I₁ ≈ (10 + 31,1)/5 ≈ 8,22 A. (Hinweis: Für kompaktere Netzwerke empfiehlt sich der Einsatz von Matrizenrechnung.)" }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was besagt die Knotenregel (1. Kirchhoffsches Gesetz)?", options: ["Die Summe aller Widerstände in einer Masche ist null", "Die Spannung im Stromkreis ist konstant", "Zufließende Ströme = abfließende Ströme", "Parallelwiderstände haben immer gleiche Ströme"], correctIndex: 2, explanation: "Die Knotenregel folgt laut Lehrtext aus der Ladungserhaltung: An jedem Knoten gilt ΣI_zu = ΣI_ab, da sich keine Ladung ansammeln kann. Die Maschenregel betrifft dagegen Spannungen, nicht Ströme an Knoten." },
      { id: "q2", question: "Was besagt die Maschenregel (2. Kirchhoffsches Gesetz)?", options: ["Alle Spannungen entlang einer Masche summieren sich zu null", "In jeder Masche fließt derselbe Strom", "Die Leistung in jeder Masche ist konstant", "Die Summe aller Widerstände in einer Masche ist gleich der Spannung"], correctIndex: 0, explanation: "Die Maschenregel folgt laut Lehrtext aus der Energieerhaltung: ΣU_k = 0 entlang einer geschlossenen Masche, da sich Spannungsquellen und Spannungsabfälle an Widerständen aufheben. Strom und Leistung sind dagegen Thema der Knotenregel bzw. der Leistungsberechnung, nicht der Maschenregel." },
      { id: "q3", question: "Drei Widerstände 10 Ω, 20 Ω, 30 Ω in Reihenschaltung ergeben welchen Gesamtwiderstand?", options: ["60 Ω", "6 Ω", "180 Ω", "5,45 Ω"], correctIndex: 0, explanation: "Bei Reihenschaltung gilt laut Lehrtext R_reihe = R₁ + R₂ + R₃ + …, also 10 + 20 + 30 = 60 Ω. Der Wert 5,45 Ω wäre dagegen das Ergebnis einer Parallelschaltung derselben drei Widerstände, wie das zugehörige Rechenbeispiel im Text zeigt." },
      { id: "q4", question: "Welche Formel gilt für zwei Widerstände R₁ und R₂ in Parallelschaltung?", options: ["R_p = (R₁ + R₂) / 2", "R_p = R₁ + R₂", "R_p = R₁ · R₂", "1/R_p = 1/R₁ + 1/R₂"], correctIndex: 3, explanation: "Der Lehrtext nennt für Parallelschaltungen 1/R_parallel = 1/R₁ + 1/R₂ + …. Die Formel R_p = R₁ + R₂ gehört stattdessen zur Reihenschaltung, weshalb sie hier falsch ist." },
      { id: "q5", question: "Wie lautet die Formel für die Ausgangsspannung U₂ eines Spannungsteilers (R₁ und R₂ in Reihe, Gesamtspannung U)?", options: ["U₂ = U / (R₁ · R₂)", "U₂ = U · (R₁ + R₂) / R₂", "U₂ = U · R₁ / (R₁ + R₂)", "U₂ = U · R₂ / (R₁ + R₂)"], correctIndex: 3, explanation: "Laut Lehrtext gilt für den Spannungsteiler U₂ = U_ges · R₂/(R₁+R₂): Die Spannung teilt sich proportional zum eigenen Widerstand auf. Die Variante mit R₁ im Zähler würde stattdessen die Spannung an R₁ liefern, nicht an R₂." },
      { id: "q6", question: "Welche Eigenschaft haben alle Widerstände in einer Reihenschaltung gemeinsam?", options: ["Sie haben alle die gleiche Verlustleistung", "Sie haben alle den gleichen Widerstandswert", "Sie haben alle den gleichen Strom", "Sie haben alle die gleiche Spannung"], correctIndex: 2, explanation: "Laut Lehrtext tragen bei einer Reihenschaltung alle Widerstände denselben Strom I, während sich die Spannung proportional zu den Widerstandswerten aufteilt. Gleiche Spannung ist dagegen das Kennzeichen der Parallelschaltung." },
      { id: "q7", question: "Was passiert mit der Klemmenspannung einer Batterie (mit Innenwiderstand), wenn der Laststrom steigt?", options: ["Sie steigt an", "Sie wird negativ", "Sie bleibt konstant", "Sie sinkt"], correctIndex: 3, explanation: "Nach der Formel U_kl = EMK − I·r_i aus dem Lehrtext wächst der Spannungsabfall am Innenwiderstand mit steigendem Strom, wodurch die Klemmenspannung sinkt. Nur bei r_i = 0 bliebe sie konstant, was für eine reale Quelle nicht zutrifft." },
      { id: "q8", question: "Wann ist eine Wheatstonesche Brücke abgeglichen?", options: ["Wenn R₁ = R₂ = R₃ = R₄", "Wenn R₁/R₂ = R₃/R₄", "Wenn alle Widerstände in Reihe liegen", "Wenn der Gesamtstrom null ist"], correctIndex: 1, explanation: "Laut Lehrtext fließt kein Strom durch das Galvanometer, wenn das Widerstandsverhältnis R₁/R₂ = R₃/R₄ gilt. Gleiche Widerstandswerte sind dafür nicht nötig – es genügt das gleiche Verhältnis auf beiden Seiten der Brücke." },
      { id: "q9", question: "Welche Eigenschaft haben alle Widerstände in einer Parallelschaltung gemeinsam?", options: ["Sie haben alle denselben Widerstandswert", "Sie haben alle die gleiche Spannung", "Sie haben alle den gleichen Strom", "Sie verbrauchen alle dieselbe Leistung"], correctIndex: 1, explanation: "Laut Lehrtext liegt in einer Parallelschaltung an allen Widerständen dieselbe Spannung U an, während sich die Ströme umgekehrt proportional zu den Widerstandswerten aufteilen. Gleicher Strom ist dagegen das Kennzeichen der Reihenschaltung." },
      { id: "q10", question: "Ein Stromteiler besteht aus R₁ = 2 Ω und R₂ = 6 Ω in Parallele. Wie groß ist der Anteil des Gesamtstroms durch R₁?", options: ["25 %", "50 %", "75 %", "33 %"], correctIndex: 2, explanation: "Nach der Stromteiler-Formel I₁ = I_ges · R₂/(R₁+R₂) aus dem Lehrtext ergibt sich I₁ = I_ges · 6/(2+6) = 0,75 · I_ges, also 75 %. Der kleinere Widerstand R₁ erhält dabei den größeren Stromanteil, da der Strom den Weg geringeren Widerstands bevorzugt." }
    ]
  },
  {
    id: "natwiss-elektrische-leistung",
    chapter: 11,
    order: 3,
    title: "Elektrische Leistung und Energie",
    icon: "⚡",
    summary: "Berechnung der elektrischen Leistung P = U·I und der umgesetzten Energie, die Joulesche Wärme, Wirkungsgrad elektrischer Geräte und die wichtigsten Sicherheitsaspekte in Stromkreisen.",
    explanation: [
      { type: "p", text: "Die elektrische Leistung P ist die pro Zeit umgesetzte elektrische Energie. Sie berechnet sich aus Spannung U und Strom I:" },
      { type: "formula", tex: "P = U \\cdot I = I^2 \\cdot R = \\frac{U^2}{R}, \\quad [P] = \\text{W (Watt)}" },
      { type: "p", text: "Die drei Formen P = UI = I²R = U²/R sind alle gleichwertig und ineinander umrechenbar (mit U = IR). Die Wahl der Formel richtet sich danach, welche Größen bekannt sind." },
      { type: "p", text: "Die in der Zeit t verbrauchte elektrische Energie W berechnet sich zu:" },
      { type: "formula", tex: "W = P \\cdot t = U \\cdot I \\cdot t" },
      { type: "p", text: "In der Praxis wird elektrische Energie oft in Kilowattstunden (kWh) angegeben:" },
      { type: "formula", tex: "1\\,\\text{kWh} = 1000\\,\\text{W} \\cdot 3600\\,\\text{s} = 3{,}6 \\times 10^6\\,\\text{J}" },
      { type: "p", text: "Joulesche Wärme: Fließt ein Strom I durch einen Widerstand R, so wird unabhängig von der Stromrichtung Wärme erzeugt. Die erzeugte Wärmemenge Q_W in der Zeit t beträgt:" },
      { type: "formula", tex: "Q_W = I^2 \\cdot R \\cdot t" },
      { type: "p", text: "Das Prinzip der maximalen Leistungsübertragung besagt: Die maximal übertragbare Leistung vom Quellwiderstand (Innenwiderstand) an den Lastwiderstand wird erreicht, wenn Lastwiderstand und Innenwiderstand gleich groß sind: R_Last = r_innen." },
      { type: "p", text: "Der Wirkungsgrad η eines elektrischen Systems beschreibt das Verhältnis von abgegebener Nutzleistung zur aufgenommenen Gesamtleistung:" },
      { type: "formula", tex: "\\eta = \\frac{P_{\\text{nutz}}}{P_{\\text{gesamt}}} \\cdot 100\\,\\%" },
      { type: "p", text: "Sicherheitsaspekte: Sicherungen (Schmelzsicherungen oder Leitungsschutzschalter) unterbrechen den Stromkreis bei Überstrom. Sie schützen Leitungen vor Überhitzung durch Joulesche Wärme. Im Wechselstromnetz gilt für die Wirkleistung P = U_eff · I_eff · cos(φ), wobei cos(φ) der Leistungsfaktor ist." },
      { type: "formula", tex: "P_{\\text{AC}} = U_{\\text{eff}} \\cdot I_{\\text{eff}} \\cdot \\cos(\\varphi)" }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Eine Glühlampe mit P = 60 W ist an U = 230 V angeschlossen. Berechnen Sie (a) den Widerstand der Glühlampe und (b) den fließenden Strom.",
        solution: [
          { type: "p", text: "(a) Widerstand der Glühlampe:" },
          { type: "formula", tex: "R = \\frac{U^2}{P} = \\frac{(230)^2}{60} = \\frac{52{.}900}{60} \\approx 881{,}7\\,\\Omega" },
          { type: "p", text: "(b) Strom:" },
          { type: "formula", tex: "I = \\frac{P}{U} = \\frac{60\\,\\text{W}}{230\\,\\text{V}} \\approx 0{,}261\\,\\text{A} = 261\\,\\text{mA}" },
          { type: "p", text: "Probe: P = U·I = 230 · 0,261 ≈ 60 W ✓. (Hinweis: Im Betrieb ist der Widerstand durch die hohe Temperatur des Glühfadens deutlich höher als im kalten Zustand.)" }
        ]
      },
      {
        id: "ex2",
        prompt: "Ein Heizgerät mit P = 2 kW wird täglich 5 Stunden betrieben. Berechnen Sie den täglichen Energieverbrauch in kWh und die Kosten bei einem Strompreis von 0,30 €/kWh.",
        solution: [
          { type: "p", text: "Täglicher Energieverbrauch:" },
          { type: "formula", tex: "W = P \\cdot t = 2\\,\\text{kW} \\cdot 5\\,\\text{h} = 10\\,\\text{kWh}" },
          { type: "p", text: "Tägliche Stromkosten:" },
          { type: "formula", tex: "\\text{Kosten} = W \\cdot \\text{Preis} = 10\\,\\text{kWh} \\cdot 0{,}30\\,\\frac{€}{\\text{kWh}} = 3{,}00\\,€" },
          { type: "p", text: "Das Heizgerät verbraucht täglich 10 kWh und kostet 3,00 € pro Tag. Im Monat (30 Tage) ergäben sich Kosten von 90 €." }
        ]
      },
      {
        id: "ex3",
        prompt: "In einem Stromkreis darf die maximale elektrische Leistung P_max = 3 kW bei einer Netzspannung von U = 230 V nicht überschritten werden. Berechnen Sie den erforderlichen Nennstrom der Sicherung.",
        solution: [
          { type: "p", text: "Der maximale Strom bei gegebener Leistung und Spannung:" },
          { type: "formula", tex: "I_{\\max} = \\frac{P_{\\max}}{U} = \\frac{3000\\,\\text{W}}{230\\,\\text{V}} \\approx 13{,}0\\,\\text{A}" },
          { type: "p", text: "Es muss eine Sicherung mit einem Nennstrom von mindestens 13 A verwendet werden. In der Praxis wählt man die nächste Standard-Sicherungsgröße: 16 A. Eine 10-A-Sicherung würde bereits bei ca. 2,3 kW ansprechen und wäre zu schwach." }
        ]
      },
      {
        id: "ex4",
        prompt: "Durch einen Widerstand R = 10 Ω fließt ein Strom I = 3 A. Berechnen Sie die elektrische Leistung und die in 5 Minuten erzeugte Wärmemenge.",
        solution: [
          { type: "p", text: "Elektrische Leistung (Joulesche Verlustleistung):" },
          { type: "formula", tex: "P = I^2 \\cdot R = (3\\,\\text{A})^2 \\cdot 10\\,\\Omega = 9 \\cdot 10 = 90\\,\\text{W}" },
          { type: "p", text: "Erzeugte Wärmemenge in t = 5 min = 300 s:" },
          { type: "formula", tex: "Q_W = P \\cdot t = 90\\,\\text{W} \\cdot 300\\,\\text{s} = 27{.}000\\,\\text{J} = 27\\,\\text{kJ}" },
          { type: "p", text: "In 5 Minuten werden 27 kJ Wärme erzeugt. Dies entspricht einer Temperaturerhöhung von ca. 6,4 K in einem Liter Wasser (c_Wasser = 4186 J/(kg·K))." }
        ]
      },
      {
        id: "ex5",
        prompt: "Ein Elektromotor nimmt eine elektrische Leistung von P_el = 500 W auf und gibt eine mechanische Leistung von P_mech = 420 W ab. Berechnen Sie (a) den Wirkungsgrad η und (b) die als Wärme abgegebene Verlustleistung.",
        solution: [
          { type: "p", text: "(a) Wirkungsgrad:" },
          { type: "formula", tex: "\\eta = \\frac{P_{\\text{nutz}}}{P_{\\text{gesamt}}} = \\frac{420\\,\\text{W}}{500\\,\\text{W}} = 0{,}84 = 84\\,\\%" },
          { type: "p", text: "(b) Verlustleistung (Wärme):" },
          { type: "formula", tex: "P_{\\text{verlust}} = P_{\\text{el}} - P_{\\text{mech}} = 500\\,\\text{W} - 420\\,\\text{W} = 80\\,\\text{W}" },
          { type: "p", text: "Der Motor hat einen Wirkungsgrad von 84 %. 80 W werden als Wärme (Reibung, ohmscher Verlust in den Wicklungen) abgegeben. Moderne Elektromotoren erreichen Wirkungsgrade von über 95 %." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche Einheit hat die elektrische Leistung?", options: ["Coulomb (C)", "Joule (J)", "Watt (W)", "Ohm (Ω)"], correctIndex: 2, explanation: "Laut Lehrtext gilt P = U·I mit der Einheit Watt (W), also 1 W = 1 J/s. Joule ist dagegen die Einheit der Energie (nicht der Leistung), Coulomb die der Ladung und Ohm die des Widerstands." },
      { id: "q2", question: "Wie viel Joule entsprechen 1 Kilowattstunde (1 kWh)?", options: ["3,6 × 10⁶ J", "1000 J", "1,602 × 10⁻¹⁹ J", "3,6 × 10³ J"], correctIndex: 0, explanation: "Laut Lehrtext gilt 1 kWh = 1000 W · 3600 s = 3,6 × 10⁶ J. Die Antwort 3,6 × 10³ J vergisst den Faktor 1000 aus dem Kilo-Präfix, und 1,602 × 10⁻¹⁹ J ist ein völlig anderer Wert (die Elementarladung in Coulomb, keine Energie)." },
      { id: "q3", question: "Wie lautet die Formel für die Joulesche Wärme Q_W, die in einem Widerstand R bei Strom I in der Zeit t entsteht?", options: ["Q_W = I² · R · t", "Q_W = U · I · t", "Q_W = I · R · t", "Q_W = U² · t / R"], correctIndex: 0, explanation: "Der Lehrtext nennt für die Joulesche Wärme Q_W = I²·R·t, was aus P = I²·R multipliziert mit der Zeit t folgt. Q_W = I·R·t fehlt dagegen ein Faktor I, da Leistung stets quadratisch vom Strom abhängt." },
      { id: "q4", question: "Was ist der Leistungsfaktor cos(φ) im Wechselstromnetz?", options: ["Der Wirkungsgrad des Generators", "Das Verhältnis von Wirkleistung zu Scheinleistung", "Der Phasenwinkel zwischen Strom und Spannung", "Das Verhältnis von Scheinleistung zu Wirkleistung"], correctIndex: 1, explanation: "Laut Lehrtext gilt P_AC = U_eff·I_eff·cos(φ), also ist cos(φ) das Verhältnis von Wirkleistung P zur Scheinleistung U_eff·I_eff. Der Phasenwinkel φ selbst ist nur das Argument der Kosinusfunktion, nicht der Leistungsfaktor." },
      { id: "q5", question: "Wann wird die maximale Leistung vom Innenwiderstand r_i einer Quelle an den Lastwiderstand R_L übertragen?", options: ["Wenn R_L = r_i", "Wenn R_L = 0", "Wenn R_L >> r_i", "Wenn R_L << r_i"], correctIndex: 0, explanation: "Nach dem im Lehrtext genannten Prinzip der maximalen Leistungsübertragung wird die größte Leistung übertragen, wenn Lastwiderstand und Innenwiderstand gleich groß sind, R_L = r_i. Ist R_L viel größer oder viel kleiner als r_i, sinkt die übertragene Leistung." },
      { id: "q6", question: "Wie berechnet sich der Wirkungsgrad η eines elektrischen Geräts?", options: ["η = P_nutz · P_gesamt", "η = P_gesamt / P_nutz", "η = P_nutz / P_gesamt", "η = P_verlust / P_nutz"], correctIndex: 2, explanation: "Der Lehrtext definiert η = P_nutz/P_gesamt als Anteil der Nutzleistung an der aufgenommenen Gesamtleistung. Der Kehrwert P_gesamt/P_nutz wäre stets ≥ 1 und würde keinen sinnvollen Prozentwert unter 100 % liefern." },
      { id: "q7", question: "Welche Leistung nimmt eine Glühlampe auf, wenn R = 900 Ω und U = 230 V gilt?", options: ["P = 207.000 W", "P = 2070 W", "P = 0,256 W", "P = 58,8 W"], correctIndex: 3, explanation: "Mit der im Lehrtext genannten Formel P = U²/R ergibt sich P = 230²/900 = 52900/900 ≈ 58,8 W. Die anderen Werte entstehen durch typische Rechenfehler wie das Vergessen der Quadrierung oder eine falsche Kommastelle." },
      { id: "q8", question: "Was schützt eine Schmelzsicherung?", options: ["Vor zu hoher Spannung", "Vor Überströmen", "Vor Unterspannung", "Vor Blindleistung"], correctIndex: 1, explanation: "Laut Lehrtext unterbrechen Schmelzsicherungen den Stromkreis bei Überstrom und schützen Leitungen so vor Überhitzung durch Joulesche Wärme (Q_W = I²·R·t). Über- oder Unterspannung sowie Blindleistung werden im Text nicht als deren Aufgabe genannt." },
      { id: "q9", question: "Ein Gerät nimmt P = 1 kW auf. Wie viel Energie verbraucht es in 4 Stunden in kWh?", options: ["400 kWh", "4 kWh", "0,25 kWh", "0,004 kWh"], correctIndex: 1, explanation: "Nach der Lehrtext-Formel W = P·t ergibt sich W = 1 kW · 4 h = 4 kWh. Die Antwort 0,25 kWh entspräche fälschlich einer Division statt Multiplikation von P und t." },
      { id: "q10", question: "Warum sind Elektrofahrzeuge in Bezug auf den Wirkungsgrad vorteilhafter als Verbrennungsmotoren?", options: ["Weil Elektrofahrzeuge grundsätzlich keinerlei elektrische Energie jemals verbrauchen", "Weil Elektromotoren keinen Strom benötigen", "Weil der Leistungsfaktor bei Elektrofahrzeugen immer 1 ist", "Elektromotoren erreichen 85–95 % Wirkungsgrad, Verbrennungsmotoren nur 25–40 %"], correctIndex: 3, explanation: "Der Lehrtext nennt für Elektromotoren Wirkungsgrade von 85–95 %, während Verbrennungsmotoren typischerweise nur 25–40 % erreichen – der Rest wird als Wärme abgegeben. Die anderen Optionen widersprechen dem Text: Auch Elektrofahrzeuge verbrauchen Energie und benötigen Strom." }
    ]
  }
];
