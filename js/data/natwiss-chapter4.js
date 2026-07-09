const NATWISS_CHAPTER4_TOPICS = [
  {
    id: "natwiss-rotation-kinematik",
    chapter: 4,
    order: 1,
    title: "Kinematik der Rotation",
    icon: "🔄",
    summary: "Beschreibung von Drehbewegungen durch Winkel φ, Winkelgeschwindigkeit ω und Winkelbeschleunigung α sowie deren Analogie zur linearen Kinematik.",
    explanation: [
      { type: "p", text: "Die Kinematik der Rotation beschreibt Drehbewegungen durch drei Grundgrößen: den Drehwinkel φ (in Radiant), die Winkelgeschwindigkeit ω = dφ/dt (in rad/s) und die Winkelbeschleunigung α = dω/dt (in rad/s²). Diese Größen sind exakt analog zu den linearen Größen Weg s, Geschwindigkeit v und Beschleunigung a." },
      { type: "list", items: [
        "Gleichmäßige Rotation (α = 0): φ(t) = φ₀ + ω · t",
        "Gleichmäßig beschleunigte Rotation: φ(t) = φ₀ + ω₀ · t + ½ · α · t²",
        "Drehzahlumrechnung: ω = 2π · n / 60  (n in U/min, ω in rad/s)",
        "Bogen-Radius-Beziehung: s = r · φ",
        "Bahngeschwindigkeit: v = r · ω",
        "Tangentialbeschleunigung: a_t = r · α",
        "Rollbedingung (kein Schlupf): v_Mittelpunkt = ω · r"
      ]},
      { type: "formula", tex: "\\omega = \\frac{d\\varphi}{dt}, \\quad \\alpha = \\frac{d\\omega}{dt}" },
      { type: "formula", tex: "\\varphi(t) = \\varphi_0 + \\omega_0 \\cdot t + \\frac{1}{2} \\, \\alpha \\, t^2" },
      { type: "formula", tex: "v = r \\cdot \\omega, \\quad a_t = r \\cdot \\alpha, \\quad \\omega = \\frac{2\\pi \\, n}{60}" }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Rad dreht sich mit n = 1500 U/min. Berechnen Sie die Winkelgeschwindigkeit ω und die Bahngeschwindigkeit v am Rand (r = 0,3 m).",
        solution: [
          { type: "p", text: "Umrechnung der Drehzahl in Winkelgeschwindigkeit:" },
          { type: "formula", tex: "\\omega = \\frac{2\\pi \\cdot n}{60} = \\frac{2\\pi \\cdot 1500}{60} = 50\\pi \\approx 157{,}1 \\; \\text{rad/s}" },
          { type: "p", text: "Bahngeschwindigkeit am Rand:" },
          { type: "formula", tex: "v = r \\cdot \\omega = 0{,}3 \\cdot 50\\pi \\approx 47{,}1 \\; \\text{m/s}" }
        ]
      },
      {
        id: "ex2",
        prompt: "Ein Schwungrad beschleunigt gleichmäßig von 0 auf n = 3000 U/min innerhalb von t = 10 s. Berechnen Sie die Winkelbeschleunigung α und die Anzahl der Umdrehungen.",
        solution: [
          { type: "p", text: "Endwinkelgeschwindigkeit:" },
          { type: "formula", tex: "\\omega_{end} = \\frac{2\\pi \\cdot 3000}{60} = 100\\pi \\approx 314{,}2 \\; \\text{rad/s}" },
          { type: "p", text: "Winkelbeschleunigung (Start aus Ruhe):" },
          { type: "formula", tex: "\\alpha = \\frac{\\Delta \\omega}{\\Delta t} = \\frac{100\\pi}{10} = 10\\pi \\approx 31{,}4 \\; \\text{rad/s}^2" },
          { type: "p", text: "Überstrichener Winkel:" },
          { type: "formula", tex: "\\varphi = \\frac{1}{2} \\alpha t^2 = \\frac{1}{2} \\cdot 10\\pi \\cdot 100 = 500\\pi \\; \\text{rad}" },
          { type: "p", text: "Anzahl der Umdrehungen:" },
          { type: "formula", tex: "N = \\frac{\\varphi}{2\\pi} = \\frac{500\\pi}{2\\pi} = 250 \\; \\text{Umdrehungen}" }
        ]
      },
      {
        id: "ex3",
        prompt: "Ein Autoreifen hat den Radius r = 0,35 m. Das Fahrzeug fährt mit v = 90 km/h. Berechnen Sie die Winkelgeschwindigkeit ω des Reifens und seine Drehzahl n in U/min.",
        solution: [
          { type: "p", text: "Umrechnung der Fahrgeschwindigkeit:" },
          { type: "formula", tex: "v = 90 \\; \\frac{\\text{km}}{\\text{h}} = 25 \\; \\text{m/s}" },
          { type: "p", text: "Winkelgeschwindigkeit des Reifens (Rollbedingung):" },
          { type: "formula", tex: "\\omega = \\frac{v}{r} = \\frac{25}{0{,}35} \\approx 71{,}4 \\; \\text{rad/s}" },
          { type: "p", text: "Drehzahl in U/min:" },
          { type: "formula", tex: "n = \\frac{\\omega \\cdot 60}{2\\pi} = \\frac{71{,}4 \\cdot 60}{2\\pi} \\approx 682 \\; \\text{U/min}" }
        ]
      },
      {
        id: "ex4",
        prompt: "Eine Scheibe startet aus der Ruhe und wird gleichmäßig mit α = 2 rad/s² beschleunigt. Welchen Winkel hat sie nach t = 5 s überstrichen? Wie vielen vollen Umdrehungen entspricht das?",
        solution: [
          { type: "p", text: "Überstrichener Winkel bei gleichmäßig beschleunigter Rotation (ω₀ = 0, φ₀ = 0):" },
          { type: "formula", tex: "\\varphi = \\frac{1}{2} \\alpha t^2 = \\frac{1}{2} \\cdot 2 \\cdot 5^2 = 25 \\; \\text{rad}" },
          { type: "p", text: "Anzahl der vollen Umdrehungen:" },
          { type: "formula", tex: "N = \\frac{\\varphi}{2\\pi} = \\frac{25}{2\\pi} \\approx 3{,}98 \\approx 4 \\; \\text{Umdrehungen}" }
        ]
      },
      {
        id: "ex5",
        prompt: "Eine Scheibe mit r = 0,2 m rollt ohne Schlupf eine Strecke von s = 10 m. Wie viele vollständige Umdrehungen führt sie dabei aus?",
        solution: [
          { type: "p", text: "Mit der Rollbedingung gilt s = r · φ, umgestellt nach φ:" },
          { type: "formula", tex: "\\varphi = \\frac{s}{r} = \\frac{10 \\; \\text{m}}{0{,}2 \\; \\text{m}} = 50 \\; \\text{rad}" },
          { type: "p", text: "Anzahl der vollen Umdrehungen:" },
          { type: "formula", tex: "N = \\frac{\\varphi}{2\\pi} = \\frac{50}{2\\pi} \\approx 7{,}96" },
          { type: "p", text: "Die Scheibe führt 7 vollständige Umdrehungen und knapp eine weitere (ca. 96 % einer weiteren Umdrehung) aus." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche Einheit hat die Winkelgeschwindigkeit ω?", options: ["rad/s", "U/min", "rad/s²", "m/s"], correctIndex: 0, explanation: "Die Winkelgeschwindigkeit ω wird in rad/s (Radiant pro Sekunde) angegeben. U/min ist die Einheit der Drehzahl n, m/s ist die der Bahngeschwindigkeit, und rad/s² ist die der Winkelbeschleunigung." },
      { id: "q2", question: "Wie lautet die Formel zur Umrechnung von Drehzahl n (in U/min) in Winkelgeschwindigkeit ω (in rad/s)?", options: ["ω = 2π · n", "ω = 2π · n / 60", "ω = n / 60", "ω = π · n / 30"], correctIndex: 1, explanation: "Die korrekte Formel lautet ω = 2π · n / 60. Eine Umdrehung entspricht 2π rad, und der Faktor 1/60 rechnet von Minuten in Sekunden um." },
      { id: "q3", question: "Ein Punkt auf einem Rad mit r = 0,5 m rotiert mit ω = 10 rad/s. Wie groß ist seine Bahngeschwindigkeit v?", options: ["5 m/s", "0,05 m/s", "10 m/s", "50 m/s"], correctIndex: 0, explanation: "v = r · ω = 0,5 m · 10 rad/s = 5 m/s. Die Bahngeschwindigkeit ist das Produkt aus Radius und Winkelgeschwindigkeit." },
      { id: "q4", question: "Was besagt die Rollbedingung (kein Schlupf)?", options: ["Die Winkelbeschleunigung ist null", "Die Bahngeschwindigkeit des Mittelpunkts ist null", "Die Bahngeschwindigkeit des Mittelpunkts ist gleich ω · r", "Die Winkelbeschleunigung ist gleich v · r"], correctIndex: 2, explanation: "Die Rollbedingung lautet v_Mittelpunkt = ω · r. Sie gilt, solange das rollende Objekt nicht schleudert (kein Schlupf). Der Berührungspunkt mit dem Untergrund hat dann die Geschwindigkeit null." },
      { id: "q5", question: "Welchem Winkel in Radiant entspricht eine vollständige Umdrehung (360°)?", options: ["360 rad", "1 rad", "π rad ≈ 3,14 rad", "2π rad ≈ 6,28 rad"], correctIndex: 3, explanation: "Eine vollständige Umdrehung entspricht 2π ≈ 6,28 Radiant. Das Bogenmaß ergibt sich aus dem Verhältnis Bogenlänge zu Radius: Für einen vollen Kreis ist die Bogenlänge gleich dem Umfang 2πr, also φ = 2πr / r = 2π." },
      { id: "q6", question: "Ein Rad dreht sich gleichmäßig mit ω = 5 rad/s. Welchen Winkel überstreicht es in t = 4 s?", options: ["1,25 rad", "20 rad", "5 rad", "80 rad"], correctIndex: 1, explanation: "Bei gleichmäßiger Rotation (α = 0) gilt φ = ω · t = 5 rad/s · 4 s = 20 rad." },
      { id: "q7", question: "Welche Gleichung beschreibt den überstrichenen Winkel bei gleichmäßig beschleunigter Rotation, wenn der Start aus der Ruhe erfolgt (φ₀ = 0, ω₀ = 0)?", options: ["φ = α · t²", "φ = 2 · α · t²", "φ = ½ · α · t²", "φ = α · t"], correctIndex: 2, explanation: "Analog zur linearen Gleichung s = ½ · a · t² gilt für die Rotation φ = ½ · α · t². Diese Formel ergibt sich durch zweifache Integration der konstanten Winkelbeschleunigung α." },
      { id: "q8", question: "Was ist das rotatorische Analogon zum linearen Weg s?", options: ["Die Winkelbeschleunigung α", "Der Winkel φ", "Der Radius r", "Die Winkelgeschwindigkeit ω"], correctIndex: 1, explanation: "In der Analogie zwischen Translation und Rotation entspricht der Drehwinkel φ dem linearen Weg s. Weiter gilt: ω ↔ v und α ↔ a." },
      { id: "q9", question: "Wie groß ist die Drehzahl n in U/min, wenn ω = 20π rad/s beträgt?", options: ["200 U/min", "1200 U/min", "300 U/min", "600 U/min"], correctIndex: 3, explanation: "n = ω · 60 / (2π) = 20π · 60 / (2π) = 20 · 30 = 600 U/min." },
      { id: "q10", question: "Wie verhält sich die Tangentialbeschleunigung a_t zu Radius r und Winkelbeschleunigung α?", options: ["a_t = r · ω", "a_t = r² · α", "a_t = α / r", "a_t = r · α"], correctIndex: 3, explanation: "Die Tangentialbeschleunigung berechnet sich zu a_t = r · α. Analog gilt für die Bahngeschwindigkeit v = r · ω. Beide Formeln verknüpfen rotatorische mit translatorischen Größen über den Radius." }
    ]
  },
  {
    id: "natwiss-traegheitsmoment",
    chapter: 4,
    order: 2,
    title: "Trägheitsmoment und Steinerscher Anteil",
    icon: "⚙️",
    summary: "Das Trägheitsmoment I beschreibt den Widerstand gegen Änderungen der Rotationsbewegung und hängt von der Massenverteilung sowie der Lage der Drehachse ab.",
    explanation: [
      { type: "p", text: "Das Trägheitsmoment I ist das rotatorische Analogon zur trägen Masse m. Es hängt nicht nur von der Gesamtmasse ab, sondern auch davon, wie die Masse um die Drehachse verteilt ist: Massen weit von der Achse entfernt tragen stärker bei als nahe Massen." },
      { type: "formula", tex: "I = \\int r^2 \\, dm = \\sum_i m_i \\, r_i^2 \\quad [\\text{kg} \\cdot \\text{m}^2]" },
      { type: "p", text: "Wichtige Formeln für häufige Körperformen (bezüglich der Symmetrieachse durch den Schwerpunkt):" },
      { type: "list", items: [
        "Vollzylinder / Scheibe: I = ½ · m · r²",
        "Hohlzylinder (dünnwandig): I = m · r²",
        "Vollkugel: I = (2/5) · m · r²",
        "Hohlkugel (dünnwandig): I = (2/3) · m · r²",
        "Dünner Stab (Achse durch Schwerpunkt): I = (1/12) · m · l²",
        "Dünner Stab (Achse durch Ende): I = (1/3) · m · l²"
      ]},
      { type: "p", text: "Der Steinersche Satz (Parallelachsentheorem) erlaubt die Berechnung des Trägheitsmoments I für eine beliebige Achse, die parallel zur Schwerpunktachse liegt:" },
      { type: "formula", tex: "I = I_S + m \\cdot d^2" },
      { type: "p", text: "Dabei ist I_S das Trägheitsmoment bezüglich der Schwerpunktachse und d der Abstand der neuen Achse vom Schwerpunkt. Die rotatorische kinetische Energie berechnet sich analog zur translatorischen:" },
      { type: "formula", tex: "E_{rot} = \\frac{1}{2} \\, I \\, \\omega^2" }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Berechnen Sie das Trägheitsmoment einer Vollscheibe mit m = 5 kg und r = 0,4 m bezüglich der Symmetrieachse durch den Schwerpunkt.",
        solution: [
          { type: "p", text: "Für eine Vollscheibe (Vollzylinder) gilt:" },
          { type: "formula", tex: "I = \\frac{1}{2} \\, m \\, r^2 = \\frac{1}{2} \\cdot 5 \\; \\text{kg} \\cdot (0{,}4 \\; \\text{m})^2 = \\frac{1}{2} \\cdot 5 \\cdot 0{,}16 = 0{,}4 \\; \\text{kg\\,m}^2" }
        ]
      },
      {
        id: "ex2",
        prompt: "Berechnen Sie das Trägheitsmoment einer Vollkugel mit m = 2 kg und r = 0,15 m bezüglich der Achse durch den Mittelpunkt.",
        solution: [
          { type: "p", text: "Für eine Vollkugel gilt:" },
          { type: "formula", tex: "I = \\frac{2}{5} \\, m \\, r^2 = \\frac{2}{5} \\cdot 2 \\; \\text{kg} \\cdot (0{,}15 \\; \\text{m})^2 = 0{,}4 \\cdot 2 \\cdot 0{,}0225 = 0{,}018 \\; \\text{kg\\,m}^2" }
        ]
      },
      {
        id: "ex3",
        prompt: "Ein dünner Stab (m = 3 kg, l = 1 m) dreht sich (a) um eine Achse durch seinen Schwerpunkt und (b) um eine Achse durch sein Ende. Berechnen Sie beide Trägheitsmomente und überprüfen Sie das Ergebnis (b) mit dem Steinerschen Satz.",
        solution: [
          { type: "p", text: "(a) Trägheitsmoment durch den Schwerpunkt (Mitte des Stabs):" },
          { type: "formula", tex: "I_S = \\frac{1}{12} \\, m \\, l^2 = \\frac{1}{12} \\cdot 3 \\cdot 1^2 = 0{,}25 \\; \\text{kg\\,m}^2" },
          { type: "p", text: "(b) Trägheitsmoment durch das Ende (direkte Formel):" },
          { type: "formula", tex: "I_{Ende} = \\frac{1}{3} \\, m \\, l^2 = \\frac{1}{3} \\cdot 3 \\cdot 1^2 = 1{,}0 \\; \\text{kg\\,m}^2" },
          { type: "p", text: "Überprüfung mit dem Steinerschen Satz (Abstand d = l/2 = 0,5 m):" },
          { type: "formula", tex: "I_{Ende} = I_S + m \\, d^2 = 0{,}25 + 3 \\cdot (0{,}5)^2 = 0{,}25 + 0{,}75 = 1{,}0 \\; \\text{kg\\,m}^2 \\; \\checkmark" }
        ]
      },
      {
        id: "ex4",
        prompt: "Eine Vollscheibe und ein Hohlzylinder (beide Masse m, Radius r) rollen ohne Schlupf eine schiefe Ebene hinunter. Welcher Körper erreicht die untere Kante zuerst, und warum?",
        solution: [
          { type: "p", text: "Die Höhenenergie wird in Translations- und Rotationsenergie umgewandelt:" },
          { type: "formula", tex: "mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2 = \\frac{1}{2}mv^2\\left(1 + \\frac{I}{mr^2}\\right)" },
          { type: "p", text: "Vollscheibe: I = ½mr²  →  I/(mr²) = ½  →  Faktor (1 + ½) = 1,5" },
          { type: "p", text: "Hohlzylinder: I = mr²  →  I/(mr²) = 1  →  Faktor (1 + 1) = 2" },
          { type: "p", text: "Ein kleinerer Faktor bedeutet, dass weniger Energie in Rotation fließt und mehr für Translation verfügbar bleibt. Die Vollscheibe hat das kleinere Trägheitsmoment und erreicht daher die untere Kante zuerst." }
        ]
      },
      {
        id: "ex5",
        prompt: "Ein Schwungrad mit dem Trägheitsmoment I = 2 kg·m² dreht sich mit ω = 100 rad/s. Berechnen Sie die gespeicherte rotatorische kinetische Energie.",
        solution: [
          { type: "p", text: "Die rotatorische kinetische Energie berechnet sich zu:" },
          { type: "formula", tex: "E_{rot} = \\frac{1}{2} \\, I \\, \\omega^2 = \\frac{1}{2} \\cdot 2 \\; \\text{kg\\,m}^2 \\cdot (100 \\; \\text{rad/s})^2 = 10\\,000 \\; \\text{J} = 10 \\; \\text{kJ}" }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche Formel gilt für das Trägheitsmoment einer Vollscheibe (Vollzylinder) bezüglich der Symmetrieachse?", options: ["I = ½ · m · r²", "I = (2/5) · m · r²", "I = m · r²", "I = (1/12) · m · r²"], correctIndex: 0, explanation: "Für eine Vollscheibe oder einen Vollzylinder gilt I = ½ · m · r². Der Hohlzylinder hat I = m · r² (höher, weil alle Masse am Rand liegt), und die Vollkugel hat I = (2/5) · m · r²." },
      { id: "q2", question: "Wovon hängt das Trägheitsmoment eines Körpers ab?", options: ["Von der Massenverteilung relativ zur Drehachse", "Nur vom äußeren Radius des Körpers", "Nur von der Gesamtmasse des Körpers", "Von der Winkelgeschwindigkeit"], correctIndex: 0, explanation: "Das Trägheitsmoment hängt von der Massenverteilung relativ zur Drehachse ab: I = ∫r²dm. Massen weit von der Achse entfernt tragen quadratisch stärker bei als nahe Massen." },
      { id: "q3", question: "Was besagt der Steinersche Satz (Parallelachsentheorem)?", options: ["I = I_S / (m · d²)", "I_S = I − m · d²", "I = I_S · m · d", "I = I_S + m · d²"], correctIndex: 3, explanation: "Der Steinersche Satz lautet I = I_S + m · d², wobei I_S das Trägheitsmoment um die Schwerpunktachse und d der Abstand der neuen (parallelen) Achse vom Schwerpunkt ist." },
      { id: "q4", question: "Welcher der folgenden Körper hat bei gleicher Masse m und gleichem Außenradius r das größte Trägheitsmoment bezüglich der Symmetrieachse?", options: ["Hohlzylinder, dünnwandig (I = m · r²)", "Vollkugel (I = 2/5 · m · r²)", "Vollzylinder (I = 1/2 · m · r²)", "Alle drei sind gleich"], correctIndex: 0, explanation: "Der dünnwandige Hohlzylinder hat das größte Trägheitsmoment I = m · r², weil seine gesamte Masse am äußersten Rand liegt. Vollzylinder (½mr²) und Vollkugel (2/5 · mr²) haben jeweils einen Teil ihrer Masse näher an der Achse." },
      { id: "q5", question: "Wie lautet die Formel für die rotatorische kinetische Energie?", options: ["E_rot = I · ω²", "E_rot = ½ · I · ω²", "E_rot = I · ω", "E_rot = ½ · m · v²"], correctIndex: 1, explanation: "Die rotatorische kinetische Energie lautet E_rot = ½ · I · ω², analog zur translatorischen E_kin = ½ · m · v². Dabei nimmt I die Rolle der Masse und ω die Rolle der Geschwindigkeit ein." },
      { id: "q6", question: "Ein Schwungrad dreht doppelt so schnell (ω → 2ω). Um welchen Faktor ändert sich die gespeicherte Rotationsenergie?", options: ["Faktor 1 (keine Änderung)", "Faktor 8", "Faktor 2", "Faktor 4"], correctIndex: 3, explanation: "Da E_rot = ½ · I · ω² und ω quadratisch eingeht, führt eine Verdopplung von ω zu E_neu = ½ · I · (2ω)² = 4 · ½ · I · ω² = 4 · E_rot. Die Energie vervierfacht sich." },
      { id: "q7", question: "Wie lautet das Trägheitsmoment eines dünnen Stabs der Masse m und Länge l bezüglich einer Achse durch sein Ende?", options: ["I = m · l²", "I = (1/2) · m · l²", "I = (1/3) · m · l²", "I = (1/12) · m · l²"], correctIndex: 2, explanation: "Für den dünnen Stab gilt durch das Ende: I = (1/3) · m · l². Durch den Schwerpunkt (Mitte) gilt I = (1/12) · m · l². Der Unterschied entspricht dem Steinerschen Anteil m · (l/2)²." },
      { id: "q8", question: "Ein Körper hat I_S = 0,1 kg·m² (durch Schwerpunkt). Die Drehachse wird um d = 0,2 m verschoben, Masse m = 5 kg. Wie groß ist das neue Trägheitsmoment I?", options: ["0,2 kg·m²", "0,3 kg·m²", "0,5 kg·m²", "0,1 kg·m²"], correctIndex: 1, explanation: "Mit dem Steinerschen Satz: I = I_S + m · d² = 0,1 + 5 · (0,2)² = 0,1 + 5 · 0,04 = 0,1 + 0,2 = 0,3 kg·m²." },
      { id: "q9", question: "Warum erreicht eine Vollscheibe beim Rollen die untere Kante einer schiefen Ebene früher als ein Hohlzylinder (gleiche Masse, gleicher Radius)?", options: ["Weil die Vollscheibe mehr Masse besitzt", "Es gibt keinen Unterschied zwischen den beiden Körpern", "Weil die Vollscheibe ein kleineres Trägheitsmoment hat und weniger Energie in Rotation fließt", "Weil der Hohlzylinder mehr Gleitreibung erzeugt"], correctIndex: 2, explanation: "Bei der Vollscheibe (I = ½mr²) fließt weniger Energie in die Rotation als beim Hohlzylinder (I = mr²). Daher steht bei der Vollscheibe mehr Energie für die Translationsbewegung zur Verfügung, und sie wird schneller." },
      { id: "q10", question: "Die Masse eines Körpers verdoppelt sich bei unveränderter Geometrie und Achse. Wie verändert sich sein Trägheitsmoment?", options: ["Es halbiert sich", "Es vervierfacht sich", "Es bleibt gleich", "Es verdoppelt sich"], correctIndex: 3, explanation: "Da I = ∫r²dm und die Massenverteilung proportional zur Gesamtmasse ist, verdoppelt sich das Trägheitsmoment bei Verdopplung der Masse (gleiche Form und Achse)." }
    ]
  },
  {
    id: "natwiss-drehmoment",
    chapter: 4,
    order: 3,
    title: "Drehmoment und Drehimpuls",
    icon: "🌀",
    summary: "Drehmoment M = r × F und Drehimpuls L = I · ω sind die rotatorischen Analoga zu Kraft und Impuls; ohne äußeres Drehmoment bleibt L erhalten.",
    explanation: [
      { type: "p", text: "Das Drehmoment M beschreibt die drehmomentwirksame Wirkung einer Kraft F, die im Abstand r von der Drehachse angreift. Es ist das rotatorische Analogon zur Kraft und besitzt die Einheit N·m." },
      { type: "formula", tex: "M = r \\times F \\quad \\Rightarrow \\quad |M| = r \\cdot F \\cdot \\sin(\\theta)" },
      { type: "p", text: "Dabei ist θ der Winkel zwischen dem Hebelarm r und der Kraftrichtung F. Das Drehmoment ist maximal, wenn Kraft und Hebelarm senkrecht aufeinanderstehen (θ = 90°). Das 2. Newtonsche Gesetz für die Rotation lautet:" },
      { type: "formula", tex: "M = I \\cdot \\alpha" },
      { type: "p", text: "Der Drehimpuls L ist das rotatorische Analogon zum Linearimpuls p = m · v:" },
      { type: "formula", tex: "L = I \\cdot \\omega \\quad \\Rightarrow \\quad M = \\frac{dL}{dt}" },
      { type: "p", text: "Drehimpulserhaltung: Wenn kein äußeres Drehmoment wirkt, bleibt L = I · ω konstant. Nimmt das Trägheitsmoment I ab (z. B. Eisläuferin zieht Arme ein), so steigt ω entsprechend an." },
      { type: "list", items: [
        "Drehimpulserhaltung: L = I₁ · ω₁ = I₂ · ω₂ (wenn ΣM_ext = 0)",
        "Arbeit durch Drehmoment: W = M · φ",
        "Rotationsleistung: P = M · ω"
      ]},
      { type: "formula", tex: "P = M \\cdot \\omega, \\quad W = M \\cdot \\varphi" }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "An einem Hebelarm der Länge r = 0,8 m greift eine Kraft von F = 30 N senkrecht an (θ = 90°). Wie groß ist das Drehmoment M?",
        solution: [
          { type: "p", text: "Das Drehmoment bei senkrechtem Kraftangriff (sin 90° = 1):" },
          { type: "formula", tex: "M = r \\cdot F \\cdot \\sin(90°) = 0{,}8 \\; \\text{m} \\cdot 30 \\; \\text{N} \\cdot 1 = 24 \\; \\text{N\\,m}" }
        ]
      },
      {
        id: "ex2",
        prompt: "Eine Scheibe (I = 0,5 kg·m²) befindet sich in Ruhe. Ein Drehmoment von M = 10 N·m wird für t = 3 s aufgebracht. Welche Winkelgeschwindigkeit ω erreicht sie am Ende?",
        solution: [
          { type: "p", text: "Winkelbeschleunigung aus dem 2. Newtonschen Gesetz für Rotation:" },
          { type: "formula", tex: "\\alpha = \\frac{M}{I} = \\frac{10 \\; \\text{N\\,m}}{0{,}5 \\; \\text{kg\\,m}^2} = 20 \\; \\text{rad/s}^2" },
          { type: "p", text: "Endwinkelgeschwindigkeit (Start aus Ruhe):" },
          { type: "formula", tex: "\\omega = \\alpha \\cdot t = 20 \\cdot 3 = 60 \\; \\text{rad/s}" }
        ]
      },
      {
        id: "ex3",
        prompt: "Eine Eisläuferin dreht sich mit I₁ = 3 kg·m² und ω₁ = 2 rad/s. Durch Heranziehen der Arme verringert sie ihr Trägheitsmoment auf I₂ = 1,5 kg·m². Welche neue Winkelgeschwindigkeit ω₂ erreicht sie?",
        solution: [
          { type: "p", text: "Da kein äußeres Drehmoment wirkt, ist der Drehimpuls erhalten:" },
          { type: "formula", tex: "L = I_1 \\cdot \\omega_1 = I_2 \\cdot \\omega_2" },
          { type: "formula", tex: "\\omega_2 = \\frac{I_1 \\cdot \\omega_1}{I_2} = \\frac{3 \\cdot 2}{1{,}5} = 4 \\; \\text{rad/s}" },
          { type: "p", text: "Durch Halbierung des Trägheitsmoments verdoppelt sich die Winkelgeschwindigkeit." }
        ]
      },
      {
        id: "ex4",
        prompt: "Eine Scheibe (I = 0,8 kg·m²) dreht sich mit ω = 20 rad/s und soll innerhalb von t = 5 s zum Stillstand gebracht werden. Welches Bremsmoment M ist erforderlich?",
        solution: [
          { type: "p", text: "Erforderliche Winkelbeschleunigung (Bremsung: ω₀ = 20 rad/s → 0):" },
          { type: "formula", tex: "\\alpha = \\frac{\\Delta \\omega}{\\Delta t} = \\frac{0 - 20}{5} = -4 \\; \\text{rad/s}^2" },
          { type: "p", text: "Erforderliches Bremsmoment (Betrag):" },
          { type: "formula", tex: "M = I \\cdot |\\alpha| = 0{,}8 \\; \\text{kg\\,m}^2 \\cdot 4 \\; \\text{rad/s}^2 = 3{,}2 \\; \\text{N\\,m}" }
        ]
      },
      {
        id: "ex5",
        prompt: "Ein Motor erzeugt ein Drehmoment von M = 50 N·m bei einer Drehzahl von n = 1500 U/min. Berechnen Sie die Leistung P des Motors.",
        solution: [
          { type: "p", text: "Umrechnung der Drehzahl in Winkelgeschwindigkeit:" },
          { type: "formula", tex: "\\omega = \\frac{2\\pi \\cdot 1500}{60} = 50\\pi \\approx 157{,}1 \\; \\text{rad/s}" },
          { type: "p", text: "Rotationsleistung:" },
          { type: "formula", tex: "P = M \\cdot \\omega = 50 \\cdot 50\\pi = 2500\\pi \\approx 7854 \\; \\text{W} \\approx 7{,}85 \\; \\text{kW}" }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie lautet der Betrag des Drehmoments M, das eine Kraft F im Abstand r von der Achse unter dem Winkel θ erzeugt?", options: ["M = F / (r · sin(θ))", "M = r · F · cos(θ)", "M = r / (F · sin(θ))", "M = r · F · sin(θ)"], correctIndex: 3, explanation: "Der Betrag des Drehmoments ist M = r · F · sin(θ), wobei θ der Winkel zwischen Hebelarm und Kraftrichtung ist. Maximal ist M bei θ = 90° (Kraft senkrecht zum Hebelarm)." },
      { id: "q2", question: "Wie lautet das 2. Newtonsche Gesetz für die Rotationsbewegung?", options: ["M = I · α", "P = M · ω", "L = I · ω", "W = M · φ"], correctIndex: 0, explanation: "Das rotatorische Analogon zu F = m · a lautet M = I · α. Das Drehmoment M bewirkt eine Winkelbeschleunigung α, die umso kleiner ist, je größer das Trägheitsmoment I ist." },
      { id: "q3", question: "Wann bleibt der Drehimpuls L eines Systems erhalten?", options: ["Wenn die Winkelgeschwindigkeit konstant bleibt", "Wenn die Rotationsenergie konstant bleibt", "Wenn kein resultierendes äußeres Drehmoment wirkt (ΣM_ext = 0)", "Wenn das Trägheitsmoment konstant bleibt"], correctIndex: 2, explanation: "Der Drehimpuls L = I · ω ist erhalten, wenn kein äußeres Drehmoment angreift. Analog bleibt der Linearimpuls p erhalten, wenn keine äußere Kraft wirkt (Newtonsches Trägheitsgesetz)." },
      { id: "q4", question: "Welche Einheit hat der Drehimpuls L?", options: ["kg · m / s", "kg · m² / s", "W", "N · m"], correctIndex: 1, explanation: "L = I · ω hat die Einheit [kg·m²] · [rad/s] = kg·m²/s. Diese Einheit entspricht auch J·s (Joule mal Sekunde) und ist identisch mit der Einheit des Wirkungsquantums ħ." },
      { id: "q5", question: "Wie lautet die Formel für die von einem Drehmoment M bei einer Winkeldrehung φ verrichtete Arbeit?", options: ["W = M · ω", "W = M / φ", "W = I · ω²", "W = M · φ"], correctIndex: 3, explanation: "Analog zu W = F · s (translatorisch) gilt rotatorisch W = M · φ. Dabei muss M und φ konsistente Vorzeichen haben (gleiches Drehsinn → positive Arbeit)." },
      { id: "q6", question: "Eine Eisläuferin halbiert ihr Trägheitsmoment durch Heranziehen der Arme. Was passiert mit ihrer Winkelgeschwindigkeit?", options: ["Sie vervierfacht sich (Energieerhaltung)", "Sie bleibt gleich (kein äußeres Drehmoment)", "Sie verdoppelt sich (Drehimpulserhaltung)", "Sie halbiert sich (Impulserhaltung)"], correctIndex: 2, explanation: "Wegen der Drehimpulserhaltung (L = I · ω = const) gilt: Wenn I auf die Hälfte sinkt, verdoppelt sich ω. Die Eisläuferin dreht sich also doppelt so schnell." },
      { id: "q7", question: "Wie lautet die Formel für die Rotationsleistung P?", options: ["P = I · α", "P = M · φ", "P = M / ω", "P = M · ω"], correctIndex: 3, explanation: "Die Rotationsleistung berechnet sich zu P = M · ω, analog zu P = F · v in der Translationsbewegung. Damit lässt sich z. B. die Motorleistung aus Drehmoment und Drehzahl bestimmen." },
      { id: "q8", question: "Bei welchem Winkel θ zwischen Hebelarm und Kraft ist das Drehmoment am größten?", options: ["θ = 45°", "θ = 180° (antiparallel)", "θ = 90° (senkrecht)", "θ = 0° (parallel)"], correctIndex: 2, explanation: "M = r · F · sin(θ) ist maximal bei θ = 90°, da sin(90°) = 1. Bei θ = 0° oder 180° (Kraft parallel zum Hebelarm) ist das Drehmoment null, da sin(0°) = sin(180°) = 0." },
      { id: "q9", question: "Eine Scheibe (I = 0,4 kg·m²) soll mit α = 5 rad/s² beschleunigt werden. Welches Drehmoment wird benötigt?", options: ["0,08 N·m", "2 N·m", "0,8 N·m", "8 N·m"], correctIndex: 1, explanation: "M = I · α = 0,4 kg·m² · 5 rad/s² = 2 N·m." },
      { id: "q10", question: "Welche Aussage über den Drehimpuls L = I · ω ist korrekt?", options: ["Wenn ΣM_ext = 0, bleibt L = I · ω konstant (Drehimpulserhaltungssatz)", "L ändert sich, wenn die Rotationsenergie konstant bleibt", "L = dM/dt, d. h. der Drehimpuls ist die zeitliche Ableitung des Drehmoments", "L ist immer konstant, unabhängig von äußeren Kräften"], correctIndex: 0, explanation: "Der Drehimpulserhaltungssatz besagt: Wenn kein äußeres Drehmoment wirkt (ΣM_ext = 0), bleibt L = I · ω = const. Es gilt zudem dL/dt = M (nicht umgekehrt)." }
    ]
  }
];
