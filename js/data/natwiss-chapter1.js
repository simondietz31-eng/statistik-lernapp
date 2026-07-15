const NATWISS_CHAPTER1_TOPICS = [
  {
    id: "natwiss-kinematik-grundlagen",
    chapter: 1,
    order: 1,
    title: "Grundbegriffe der Kinematik",
    icon: "📐",
    summary: "Orts-, Geschwindigkeits- und Beschleunigungsvektoren sowie die Gleichungen für geradlinige und gleichmäßig beschleunigte Bewegungen.",
    explanation: [
      { type: "p", text: "Die Kinematik beschreibt die Bewegung von Körpern, ohne die verursachenden Kräfte zu berücksichtigen. Sie untersucht, wie sich Position, Geschwindigkeit und Beschleunigung zeitlich verändern." },
      { type: "p", text: "Man unterscheidet skalare Größen (z. B. Betrag der Geschwindigkeit, Masse, Zeit) und vektorielle Größen (z. B. Ortsvektor, Geschwindigkeitsvektor, Beschleunigungsvektor)." },
      { type: "p", text: "Der Ortsvektor r(t) beschreibt die Position eines Körpers. Die Momentangeschwindigkeit ist die zeitliche Ableitung des Ortsvektors:" },
      { type: "formula", tex: "\\vec{v} = \\frac{d\\vec{r}}{dt}" },
      { type: "p", text: "Die Beschleunigung ist die zeitliche Ableitung der Geschwindigkeit:" },
      { type: "formula", tex: "\\vec{a} = \\frac{d\\vec{v}}{dt}" },
      { type: "p", text: "Gleichförmige geradlinige Bewegung (a = 0): Die Geschwindigkeit bleibt konstant." },
      { type: "formula", tex: "x(t) = x_0 + v \\cdot t" },
      { type: "p", text: "Gleichmäßig beschleunigte Bewegung (a = const): Position und Geschwindigkeit ändern sich nach:" },
      { type: "formula", tex: "x(t) = x_0 + v_0 \\cdot t + \\frac{1}{2} \\cdot a \\cdot t^2" },
      { type: "formula", tex: "v(t) = v_0 + a \\cdot t" },
      { type: "p", text: "Beim freien Fall gilt a = g = 9,81 m/s² (nach unten). Im Vakuum fallen alle Körper gleich schnell, unabhängig von ihrer Masse (Galilei-Experiment)." },
      { type: "p", text: "Beim schiefen Wurf werden horizontale (konstante Geschwindigkeit) und vertikale Bewegung (freier Fall) getrennt betrachtet:" },
      { type: "formula", tex: "x(t) = v_0 \\cdot \\cos(\\alpha) \\cdot t" },
      { type: "formula", tex: "y(t) = v_0 \\cdot \\sin(\\alpha) \\cdot t - \\frac{1}{2} \\cdot g \\cdot t^2" },
      { type: "p", text: "Die Wurfweite (Reichweite) und die Flugzeit berechnen sich zu:" },
      { type: "formula", tex: "R = \\frac{v_0^2 \\cdot \\sin(2\\alpha)}{g}" },
      { type: "formula", tex: "t_{\\text{Flug}} = \\frac{2 \\cdot v_0 \\cdot \\sin(\\alpha)}{g}" },
      { type: "p", text: "Die maximale Reichweite wird bei einem Wurfwinkel von α = 45° erreicht." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Stein wird aus einer Höhe von h = 45 m fallen gelassen (Anfangsgeschwindigkeit = 0). Wie lange dauert der Fall, und mit welcher Geschwindigkeit trifft der Stein auf dem Boden auf? (g = 9,81 m/s²)",
        solution: [
          { type: "p", text: "Beim freien Fall gilt h = ½ · g · t². Umstellen nach t:" },
          { type: "formula", tex: "t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{2 \\cdot 45}{9{,}81}} = \\sqrt{9{,}17} \\approx 3{,}03 \\text{ s}" },
          { type: "p", text: "Die Auftreffgeschwindigkeit:" },
          { type: "formula", tex: "v = g \\cdot t = 9{,}81 \\cdot 3{,}03 \\approx 29{,}7 \\text{ m/s} \\approx 107 \\text{ km/h}" }
        ]
      },
      {
        id: "ex2",
        prompt: "Ein Ball wird mit einer Anfangsgeschwindigkeit von v₀ = 20 m/s unter einem Winkel von α = 30° abgeschossen. Berechnen Sie die Wurfweite R.",
        solution: [
          { type: "p", text: "Die Wurfweite beim schiefen Wurf berechnet sich mit der Reichweitenformel:" },
          { type: "formula", tex: "R = \\frac{v_0^2 \\cdot \\sin(2\\alpha)}{g} = \\frac{20^2 \\cdot \\sin(60°)}{9{,}81} = \\frac{400 \\cdot 0{,}866}{9{,}81} \\approx 35{,}3 \\text{ m}" }
        ]
      },
      {
        id: "ex3",
        prompt: "Ein Auto fährt mit v₀ = 72 km/h und bremst gleichmäßig mit einer Verzögerung von a = 4 m/s² bis zum Stillstand. Berechnen Sie den Bremsweg.",
        solution: [
          { type: "p", text: "Umrechnung: 72 km/h = 20 m/s. Im Stillstand gilt v = 0. Aus v² = v₀² + 2 · a · s folgt:" },
          { type: "formula", tex: "s = \\frac{v_0^2}{2 \\cdot |a|} = \\frac{20^2}{2 \\cdot 4} = \\frac{400}{8} = 50 \\text{ m}" }
        ]
      },
      {
        id: "ex4",
        prompt: "Ein Ball wird senkrecht nach oben mit v₀ = 20 m/s geworfen. Welche maximale Höhe erreicht er, und wie lange dauert es bis zum höchsten Punkt?",
        solution: [
          { type: "p", text: "Am höchsten Punkt ist v = 0. Aus v² = v₀² − 2 · g · h folgt die maximale Höhe:" },
          { type: "formula", tex: "h_{\\text{max}} = \\frac{v_0^2}{2 \\cdot g} = \\frac{400}{2 \\cdot 9{,}81} \\approx 20{,}4 \\text{ m}" },
          { type: "p", text: "Die Zeit bis zum höchsten Punkt:" },
          { type: "formula", tex: "t = \\frac{v_0}{g} = \\frac{20}{9{,}81} \\approx 2{,}04 \\text{ s}" }
        ]
      },
      {
        id: "ex5",
        prompt: "Auto A beschleunigt gleichmäßig von 0 auf 108 km/h in 12 s. Auto B erreicht dieselbe Endgeschwindigkeit in 8 s. Berechnen Sie die Beschleunigungen beider Autos und vergleichen Sie.",
        solution: [
          { type: "p", text: "Umrechnung: 108 km/h = 30 m/s. Beschleunigung Auto A:" },
          { type: "formula", tex: "a_A = \\frac{\\Delta v}{\\Delta t} = \\frac{30}{12} = 2{,}5 \\text{ m/s}^2" },
          { type: "p", text: "Beschleunigung Auto B:" },
          { type: "formula", tex: "a_B = \\frac{30}{8} = 3{,}75 \\text{ m/s}^2" },
          { type: "p", text: "Auto B beschleunigt 1,5-mal stärker als Auto A und ist damit das leistungsstärkere Fahrzeug." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was untersucht die Kinematik?", options: ["Die Wechselwirkung zwischen elektrischen und magnetischen Feldern", "Bewegungen ohne Berücksichtigung der Ursachen (Kräfte)", "Nur die Kräfte und ihre Wirkungen auf ruhende Körper", "Thermodynamische Prozesse in abgeschlossenen Gasen"], correctIndex: 1, explanation: "Die Kinematik beschreibt Ort, Geschwindigkeit und Beschleunigung rein als Funktionen der Zeit, ohne nach den verursachenden Kräften zu fragen – das Aufspüren der Kräfte ist Aufgabe der Dynamik (siehe 2. Newtonsches Gesetz F = m·a in Kapitel 2). Die anderen Optionen gehören zu ganz anderen Teilgebieten der Physik (Elektrodynamik, Statik, Thermodynamik) und haben mit der reinen Bewegungsbeschreibung nichts zu tun." },
      { id: "q2", question: "Welche Einheit hat die Beschleunigung im SI-System?", options: ["N/m", "kg·m/s", "m/s²", "m/s"], correctIndex: 2, explanation: "Die Beschleunigung ist definiert als a = dv/dt, die zeitliche Änderungsrate der Geschwindigkeit. Da v die Einheit m/s hat, ergibt die nochmalige Division durch die Zeit s die Einheit m/s². Die Verwechslungsgefahr liegt bei m/s (das ist die Geschwindigkeit selbst) und kg·m/s (das ist der Impuls p = m·v) – beide werden oft mit der Beschleunigung durcheinandergebracht." },
      { id: "q3", question: "Ein Körper startet aus der Ruhe und wird gleichmäßig beschleunigt. Wie lautet der zurückgelegte Weg nach Zeit t?", options: ["s = v · t + ½ · a²", "s = v₀ · t", "s = ½ · a · t²", "s = a · t"], correctIndex: 2, explanation: "Zweifache Integration einer konstanten Beschleunigung a liefert zunächst v(t) = a·t (da v₀ = 0) und daraus s(t) = ½·a·t². Die Formel s = v·t + ½·a² ist dimensional unsinnig, da a² nicht die Einheit einer Strecke ergibt; s = v₀·t gilt nur bei gleichförmiger Bewegung ohne Beschleunigung." },
      { id: "q4", question: "Wie groß ist die Erdbeschleunigung g in der Nähe der Erdoberfläche?", options: ["8,91 m/s²", "10,00 m/s²", "9,18 m/s²", "9,81 m/s²"], correctIndex: 3, explanation: "Der Standardwert der Erdbeschleunigung an der Erdoberfläche beträgt g = 9,81 m/s², wie er auch beim freien Fall und beim schiefen Wurf verwendet wird. Die Distraktoren sind bewusst als Ziffernvertauschungen (8,91 statt 9,81) oder als gerundeter Näherungswert (10,00) gewählt, um Zahlendreher beim Auswendiglernen abzufragen." },
      { id: "q5", question: "Bei welchem Wurfwinkel ist die Wurfweite eines schiefen Wurfs (ohne Luftwiderstand) maximal?", options: ["30°", "60°", "90°", "45°"], correctIndex: 3, explanation: "Die Reichweite R = v₀²·sin(2α)/g wird maximal, wenn der Sinusterm seinen größtmöglichen Wert 1 erreicht, also bei 2α = 90° und damit α = 45°. Bei 30° und 60° ist sin(2α) nur sin(60°) = sin(120°) ≈ 0,866, und bei 90° ist sin(180°) = 0 – der Körper würde dann senkrecht nach oben fliegen und ohne horizontale Weite zurückfallen." },
      { id: "q6", question: "Zwei Kugeln – eine schwere und eine leichte – werden gleichzeitig aus derselben Höhe fallen gelassen. Was gilt im Vakuum?", options: ["Die leichte Kugel trifft zuerst auf", "Beide Kugeln treffen gleichzeitig auf", "Es kommt allein auf die Form der Kugeln an", "Die schwere Kugel trifft immer zuerst auf"], correctIndex: 1, explanation: "Nach x(t) = x₀ + ½·g·t² hängt die Fallzeit nur von g und h ab, nicht von der Masse – im Vakuum wirkt keine Reibung, die schwerere Körper bevorzugen könnte. Deshalb treffen beide Kugeln gleichzeitig auf (Galilei-Experiment). In Luft würde die Formfrage relevant, weil dort der geschwindigkeitsabhängige Luftwiderstand F_L eine zusätzliche, formabhängige Kraft einbringt." },
      { id: "q7", question: "Was ist die Momentangeschwindigkeit mathematisch?", options: ["Das Produkt aus Weg und Zeit", "Der Quotient aus Gesamtweg und Gesamtzeit (Durchschnittsgeschwindigkeit)", "Die zeitliche Ableitung des Ortsvektors", "Die zeitliche Ableitung der Beschleunigung"], correctIndex: 2, explanation: "Die Momentangeschwindigkeit ist als v = dr/dt definiert, also die zeitliche Ableitung des Ortsvektors r(t) – sie beschreibt die Geschwindigkeit zu einem exakten Zeitpunkt. Die Durchschnittsgeschwindigkeit (Gesamtweg/Gesamtzeit) ist davon zu unterscheiden, da sie über ein ganzes Zeitintervall mittelt und lokale Geschwindigkeitsänderungen verschleiert." },
      { id: "q8", question: "Was passiert mit der horizontalen Geschwindigkeitskomponente beim schiefen Wurf (ohne Luftwiderstand)?", options: ["Sie bleibt konstant (da keine Kraft horizontal wirkt)", "Sie verdoppelt sich bei jedem Meter", "Sie ist null", "Sie nimmt durch g ständig ab"], correctIndex: 0, explanation: "Beim schiefen Wurf wirkt die Erdbeschleunigung g ausschließlich vertikal nach unten. Da horizontal keine Kraft angreift, gilt nach dem Trägheitsprinzip (1. Newtonsches Gesetz), dass sich v_x = v₀·cos(α) während des gesamten Fluges nicht ändert. Nur die vertikale Komponente v_y wird durch g ständig verringert (Aufstieg) bzw. vergrößert (Fall)." },
      { id: "q9", question: "Ein Körper bewegt sich gleichförmig (a = 0). Wie verhält sich seine Geschwindigkeit?", options: ["Sie bleibt konstant", "Sie schwankt periodisch", "Sie nimmt quadratisch ab", "Sie nimmt linear zu"], correctIndex: 0, explanation: "Aus a = dv/dt = 0 folgt direkt v = const, denn eine Größe ohne zeitliche Änderungsrate ändert sich per Definition nicht. Ein linearer oder quadratischer Zuwachs der Geschwindigkeit würde jeweils eine konstante bzw. zeitlich veränderliche Beschleunigung voraussetzen, die hier per Aufgabenstellung ausgeschlossen ist." },
      { id: "q10", question: "Welche Formel gilt für die Fallzeit t beim freien Fall aus der Höhe h?", options: ["t = h / g", "t = √(2h / g)", "t = 2h / g", "t = √(h / g)"], correctIndex: 1, explanation: "Aus h = ½·g·t² folgt durch Auflösen nach t: t² = 2h/g und damit t = √(2h/g). Die übrigen Formeln entstehen durch typische Umstellungsfehler – etwa das Vergessen der Wurzel (t = 2h/g) oder des Faktors 2 unter der Wurzel (t = √(h/g))." }
    ]
  },
  {
    id: "natwiss-kreisbewegung",
    chapter: 1,
    order: 2,
    title: "Kreisbewegung",
    icon: "🔄",
    summary: "Winkelgeschwindigkeit, Zentripetalbeschleunigung und die Beziehungen zwischen rotatorischen und linearen Bewegungsgrößen.",
    explanation: [
      { type: "p", text: "Bei der Kreisbewegung bewegt sich ein Körper auf einer kreisförmigen Bahn. Der Winkel φ (in Radiant) beschreibt die aktuelle Position auf der Kreisbahn." },
      { type: "p", text: "Die Winkelgeschwindigkeit ω (in rad/s) gibt an, wie schnell sich der Winkel ändert:" },
      { type: "formula", tex: "\\omega = \\frac{d\\varphi}{dt}" },
      { type: "p", text: "Die Winkelgeschwindigkeit hängt mit Frequenz f und Periode T zusammen:" },
      { type: "formula", tex: "\\omega = 2\\pi \\cdot f = \\frac{2\\pi}{T}" },
      { type: "p", text: "Die Bahngeschwindigkeit v (Tangentialgeschwindigkeit) am Rand eines Kreises mit Radius r beträgt:" },
      { type: "formula", tex: "v = \\omega \\cdot r" },
      { type: "p", text: "Auch bei konstantem Betrag von v ändert sich die Richtung ständig – es liegt also eine Beschleunigung vor, die sogenannte Zentripetalbeschleunigung, die stets zur Kreismitte zeigt:" },
      { type: "formula", tex: "a_z = \\omega^2 \\cdot r = \\frac{v^2}{r}" },
      { type: "p", text: "Die Winkelwinkelbeschleunigung α (nicht der Wurfwinkel!) ist die zeitliche Ableitung der Winkelgeschwindigkeit:" },
      { type: "formula", tex: "\\alpha = \\frac{d\\omega}{dt}" },
      { type: "p", text: "Bei gleichförmiger Kreisbewegung gilt φ(t) = ω · t. Wichtige Umrechnungen:" },
      { type: "list", items: [
        "1 Umdrehung = 2π rad ≈ 6,283 rad",
        "1 rad ≈ 57,3°",
        "Drehzahl n in min⁻¹ (U/min): ω = 2π · n / 60"
      ]}
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Auto fährt mit v = 90 km/h durch eine Kurve mit Radius r = 50 m. Berechnen Sie die Zentripetalbeschleunigung.",
        solution: [
          { type: "p", text: "Umrechnung: 90 km/h = 25 m/s. Zentripetalbeschleunigung:" },
          { type: "formula", tex: "a_z = \\frac{v^2}{r} = \\frac{25^2}{50} = \\frac{625}{50} = 12{,}5 \\text{ m/s}^2 \\approx 1{,}27\\,g" },
          { type: "p", text: "Die Zentripetalbeschleunigung beträgt 12,5 m/s². Das entspricht dem 1,27-fachen der Erdbeschleunigung." }
        ]
      },
      {
        id: "ex2",
        prompt: "Ein Bohrmaschinenbohrer dreht sich mit n = 1500 min⁻¹. Berechnen Sie die Winkelgeschwindigkeit ω und die Bahngeschwindigkeit v am Rand des Bohrers bei r = 5 mm.",
        solution: [
          { type: "p", text: "Winkelgeschwindigkeit:" },
          { type: "formula", tex: "\\omega = \\frac{2\\pi \\cdot n}{60} = \\frac{2\\pi \\cdot 1500}{60} \\approx 157{,}1 \\text{ rad/s}" },
          { type: "p", text: "Bahngeschwindigkeit am Rand (r = 0,005 m):" },
          { type: "formula", tex: "v = \\omega \\cdot r = 157{,}1 \\cdot 0{,}005 \\approx 0{,}79 \\text{ m/s}" }
        ]
      },
      {
        id: "ex3",
        prompt: "Vergleichen Sie die Bahngeschwindigkeit eines Punktes am Äquator mit einem Punkt am Pol aufgrund der Erdrotation. (R_Erde = 6371 km, T = 24 h)",
        solution: [
          { type: "p", text: "Die Erde dreht sich mit einer Winkelgeschwindigkeit von:" },
          { type: "formula", tex: "\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{86400 \\text{ s}} \\approx 7{,}27 \\times 10^{-5} \\text{ rad/s}" },
          { type: "p", text: "Am Äquator (r = R_Erde = 6,371·10⁶ m):" },
          { type: "formula", tex: "v_{\\text{Äquator}} = \\omega \\cdot R_E = 7{,}27 \\times 10^{-5} \\cdot 6{,}371 \\times 10^6 \\approx 463 \\text{ m/s}" },
          { type: "p", text: "Am Pol ist der Abstand zur Drehachse r = 0, daher ist v_Pol = 0. Ein Punkt am Äquator bewegt sich mit beachtlichen 463 m/s ≈ 1667 km/h." }
        ]
      },
      {
        id: "ex4",
        prompt: "Ein Rad dreht sich mit konstanter Winkelgeschwindigkeit ω = 3 rad/s. Wie viele vollständige Umdrehungen vollführt es in 30 Sekunden?",
        solution: [
          { type: "p", text: "Gesamter Drehwinkel in 30 s:" },
          { type: "formula", tex: "\\varphi = \\omega \\cdot t = 3 \\cdot 30 = 90 \\text{ rad}" },
          { type: "p", text: "Anzahl der Umdrehungen (1 Umdrehung = 2π rad):" },
          { type: "formula", tex: "N = \\frac{\\varphi}{2\\pi} = \\frac{90}{2\\pi} \\approx 14{,}3 \\text{ Umdrehungen}" }
        ]
      },
      {
        id: "ex5",
        prompt: "Die ISS (Internationale Raumstation) befindet sich in einer Höhe von h = 400 km. Berechnen Sie näherungsweise die Umlaufzeit T. (R_Erde = 6371 km, g = 9,81 m/s²)",
        solution: [
          { type: "p", text: "Bahnradius: r = R_E + h = 6371 + 400 = 6771 km = 6,771·10⁶ m" },
          { type: "p", text: "Gravitationskraft = Zentripetalkraft. Mit g(r) = g · R_E² / r² ergibt sich:" },
          { type: "formula", tex: "T = 2\\pi \\sqrt{\\frac{r^3}{g \\cdot R_E^2}} = 2\\pi \\sqrt{\\frac{(6{,}771 \\times 10^6)^3}{9{,}81 \\cdot (6{,}371 \\times 10^6)^2}} \\approx 5542 \\text{ s} \\approx 92 \\text{ min}" }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche Einheit hat die Winkelgeschwindigkeit ω?", options: ["m/s", "Umdrehungen/min", "Hz", "rad/s"], correctIndex: 3, explanation: "Die Winkelgeschwindigkeit ist als ω = dφ/dt definiert – die zeitliche Änderungsrate des Winkels φ, der in Radiant angegeben wird. Daraus folgt die Einheit rad/s. m/s beschreibt stattdessen die Bahngeschwindigkeit v = ω·r, Hz die Frequenz f = ω/(2π) und U/min die Drehzahl n – alle drei sind eng verwandt, aber nicht identisch mit ω." },
      { id: "q2", question: "In welche Richtung zeigt die Zentripetalbeschleunigung bei einer Kreisbewegung?", options: ["Zur Kreismitte hin (radial einwärts)", "In Bewegungsrichtung (tangential, vorwärts)", "Senkrecht nach oben", "Von der Kreismitte weg (radial auswärts)"], correctIndex: 0, explanation: "Zentripetal bedeutet wörtlich 'zur Mitte strebend'. Da sich bei Kreisbewegung die Richtung des Geschwindigkeitsvektors ständig ändert, muss die Beschleunigung a_z = v²/r stets senkrecht zur Bahn und radial nach innen zeigen, damit der Körper auf der Kreisbahn bleibt. Nach außen zeigt lediglich die Scheinkraft (Zentrifugalkraft), die nur im mitrotierenden Bezugssystem auftritt." },
      { id: "q3", question: "Wie lautet die Formel für die Bahngeschwindigkeit v bei Kreisbewegung mit Winkelgeschwindigkeit ω und Radius r?", options: ["v = ω · r", "v = ω / r", "v = r / ω", "v = ω² · r"], correctIndex: 0, explanation: "Die Bahngeschwindigkeit (Tangentialgeschwindigkeit) ergibt sich aus der zurückgelegten Bogenlänge s = r·φ durch Ableiten nach der Zeit: v = ds/dt = r·dφ/dt = r·ω. Die Formeln mit Division durch ω oder mit ω² sind dimensional falsch bzw. entsprechen keiner physikalisch definierten Größe." },
      { id: "q4", question: "Ein Körper bewegt sich auf einer Kreisbahn mit konstantem Betrag der Geschwindigkeit. Ist eine Beschleunigung vorhanden?", options: ["Nein, Beschleunigung heißt immer Betragszunahme der Geschwindigkeit", "Nur bei sehr kleinem Kreisradius", "Nein, weil der Betrag der Geschwindigkeit konstant bleibt", "Ja, weil sich die Richtung des Geschwindigkeitsvektors ständig ändert"], correctIndex: 3, explanation: "Beschleunigung ist als Vektor a = dv/dt definiert und erfasst jede Änderung des Geschwindigkeitsvektors – nicht nur seines Betrags, sondern auch seiner Richtung. Bei Kreisbewegung ändert sich die Richtung ständig, obwohl der Betrag |v| gleich bleibt; diese Richtungsänderung ist genau die Zentripetalbeschleunigung a_z = v²/r." },
      { id: "q5", question: "Wie hängen Frequenz f und Winkelgeschwindigkeit ω zusammen?", options: ["ω = f", "ω = f²", "ω = 2π · f", "ω = f / (2π)"], correctIndex: 2, explanation: "Eine vollständige Umdrehung entspricht einem Winkel von 2π Radiant. Da die Frequenz f angibt, wie viele Umdrehungen pro Sekunde stattfinden, folgt ω = 2π·f. Wer stattdessen ω = f oder f/(2π) wählt, verwechselt Radiant und Umdrehungen als Winkeleinheit." },
      { id: "q6", question: "Ein Rad mit Radius r = 0,5 m dreht sich mit ω = 10 rad/s. Wie groß ist die Bahngeschwindigkeit am Rand?", options: ["0,05 m/s", "20 m/s", "5 m/s", "50 m/s"], correctIndex: 2, explanation: "Mit v = ω · r = 10 rad/s · 0,5 m = 5 m/s ergibt sich die Bahngeschwindigkeit direkt aus der Formel. Wer stattdessen dividiert (0,05 m/s) oder ω und r vertauscht bzw. quadriert (20 oder 50 m/s), erhält eines der typischen Fehlresultate." },
      { id: "q7", question: "Was versteht man unter der Periode T einer Kreisbewegung?", options: ["Die Winkelgeschwindigkeit geteilt durch 2π", "Die Anzahl der Umdrehungen pro Sekunde", "Die zurückgelegte Strecke bei einer Umdrehung", "Die Zeit für eine vollständige Umdrehung"], correctIndex: 3, explanation: "Die Periode T (Umlaufzeit) ist die Zeit, die für eine vollständige Umdrehung (360° = 2π rad) benötigt wird. Sie hängt mit ω über T = 2π/ω zusammen. Die 'Anzahl der Umdrehungen pro Sekunde' beschreibt dagegen die Frequenz f = 1/T, nicht die Periode selbst." },
      { id: "q8", question: "Wie ändert sich die Zentripetalbeschleunigung, wenn die Bahngeschwindigkeit verdoppelt wird (r konstant)?", options: ["Sie verdoppelt sich", "Sie vervierfacht sich", "Sie halbiert sich", "Sie bleibt unverändert"], correctIndex: 1, explanation: "Da a_z = v²/r quadratisch von v abhängt, ergibt sich bei Verdoppelung von v: a_z' = (2v)²/r = 4v²/r = 4·a_z. Wer nur linear mitskaliert und 'Sie verdoppelt sich' wählt, übersieht das Quadrat in der Formel." },
      { id: "q9", question: "Wie viele Radiant entsprechen 360°?", options: ["π rad", "2π rad", "4π rad", "π/2 rad"], correctIndex: 1, explanation: "Das Bogenmaß eines vollen Kreises ist gleich dem Verhältnis von Umfang zu Radius: φ = 2πr/r = 2π ≈ 6,283 rad. π rad entspricht dagegen nur einem Halbkreis (180°), π/2 rad einem Viertelkreis (90°)." },
      { id: "q10", question: "Ein Satellit umkreist die Erde in einer Kreisbahn. Welche Kräftegleichung muss erfüllt sein?", options: ["Gravitationskraft gleich Zentripetalkraft: F_G = m · v² / r", "Nur die Masse des Satelliten bestimmt die Umlaufbahn", "Die Gravitationskraft ist null (der Satellit schwebt frei)", "Die Bahngeschwindigkeit des Satelliten ist null"], correctIndex: 0, explanation: "Damit der Satellit auf der Kreisbahn bleibt, muss die Gravitationskraft exakt die Rolle der Zentripetalkraft übernehmen: F_G = G·m·M_Erde/r² = m·v²/r. Aus dieser Gleichung lässt sich die erforderliche Bahngeschwindigkeit berechnen. Die Vorstellung, der Satellit 'schwebe kräftefrei', ist ein verbreiteter Irrtum – tatsächlich fällt er ständig um die Erde herum." }
    ]
  },
  {
    id: "natwiss-si-einheiten",
    chapter: 1,
    order: 3,
    title: "SI-Einheiten und Naturkonstanten",
    icon: "📏",
    summary: "Die sieben SI-Basiseinheiten, wichtige Naturkonstanten und die Dimensionsanalyse als Werkzeug zur Überprüfung physikalischer Gleichungen.",
    explanation: [
      { type: "p", text: "Das Internationale Einheitensystem (SI) definiert sieben Basiseinheiten, aus denen alle anderen Einheiten abgeleitet werden:" },
      { type: "list", items: [
        "Meter (m) – Länge",
        "Kilogramm (kg) – Masse",
        "Sekunde (s) – Zeit",
        "Kelvin (K) – Temperatur",
        "Ampere (A) – elektrische Stromstärke",
        "Mol (mol) – Stoffmenge",
        "Candela (cd) – Lichtstärke"
      ]},
      { type: "p", text: "Wichtige Naturkonstanten, die man kennen sollte:" },
      { type: "list", items: [
        "Lichtgeschwindigkeit: c = 3·10⁸ m/s",
        "Erdbeschleunigung: g = 9,81 m/s²",
        "Gravitationskonstante: G = 6,674·10⁻¹¹ N·m²/kg²",
        "Boltzmann-Konstante: k_B = 1,381·10⁻²³ J/K",
        "Avogadro-Konstante: N_A = 6,022·10²³ mol⁻¹",
        "Plancksches Wirkungsquantum: h = 6,626·10⁻³⁴ J·s"
      ]},
      { type: "p", text: "Metrische Vorsätze für häufige Zehnerpotenzen:" },
      { type: "list", items: [
        "Nano (n): 10⁻⁹  (z.B. 1 nm = 10⁻⁹ m)",
        "Mikro (μ): 10⁻⁶  (z.B. 1 μs = 10⁻⁶ s)",
        "Milli (m): 10⁻³  (z.B. 1 mm = 10⁻³ m)",
        "Kilo (k): 10³  (z.B. 1 km = 10³ m)",
        "Mega (M): 10⁶  (z.B. 1 MHz = 10⁶ Hz)",
        "Giga (G): 10⁹  (z.B. 1 GHz = 10⁹ Hz)"
      ]},
      { type: "p", text: "Die Dimensionsanalyse prüft, ob beide Seiten einer physikalischen Gleichung dieselbe Dimension haben. Beispiel für Energie E = m · g · h:" },
      { type: "formula", tex: "[E] = \\text{kg} \\cdot \\frac{\\text{m}}{\\text{s}^2} \\cdot \\text{m} = \\frac{\\text{kg} \\cdot \\text{m}^2}{\\text{s}^2} = \\text{J} \\quad \\checkmark" },
      { type: "p", text: "Wichtige Einheitenumrechnungen:" },
      { type: "list", items: [
        "km/h → m/s: Teilen durch 3,6 (z.B. 72 km/h ÷ 3,6 = 20 m/s)",
        "m/s → km/h: Multiplizieren mit 3,6",
        "1 kWh = 3,6·10⁶ J (Kilowattstunde in Joule)"
      ]}
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Rechnen Sie 108 km/h in m/s um.",
        solution: [
          { type: "p", text: "Umrechnung von km/h in m/s durch Division durch 3,6:" },
          { type: "formula", tex: "v = \\frac{108 \\text{ km/h}}{3{,}6} = 30 \\text{ m/s}" },
          { type: "p", text: "108 km/h entsprechen genau 30 m/s." }
        ]
      },
      {
        id: "ex2",
        prompt: "Drücken Sie 5,2 Nanometer (nm) in Meter aus. Schreiben Sie den Wert in wissenschaftlicher Notation.",
        solution: [
          { type: "p", text: "Der Vorsatz Nano steht für 10⁻⁹:" },
          { type: "formula", tex: "5{,}2 \\text{ nm} = 5{,}2 \\times 10^{-9} \\text{ m}" },
          { type: "p", text: "Das entspricht 0,0000000052 m, also einem sehr kleinen Abstand (typische Atomgröße liegt im Bereich von 0,1 nm)." }
        ]
      },
      {
        id: "ex3",
        prompt: "Überprüfen Sie die Dimensionskonsistenz der Gleichung für potenzielle Energie: E_pot = m · g · h. Das Ergebnis muss die Einheit Joule ergeben.",
        solution: [
          { type: "p", text: "Einheiten der rechten Seite einsetzen:" },
          { type: "formula", tex: "[m \\cdot g \\cdot h] = \\text{kg} \\cdot \\frac{\\text{m}}{\\text{s}^2} \\cdot \\text{m} = \\frac{\\text{kg} \\cdot \\text{m}^2}{\\text{s}^2}" },
          { type: "p", text: "Definition des Joule: 1 J = 1 N·m = 1 kg·m²/s². Die Einheiten stimmen überein, die Gleichung ist dimensionskonsistent." }
        ]
      },
      {
        id: "ex4",
        prompt: "Welche SI-Einheit hat der Impuls p = m · v? Zeigen Sie, dass [p] = N·s gilt.",
        solution: [
          { type: "p", text: "Direkte Berechnung aus der Definition p = m · v:" },
          { type: "formula", tex: "[p] = \\text{kg} \\cdot \\frac{\\text{m}}{\\text{s}} = \\text{kg} \\cdot \\text{m} \\cdot \\text{s}^{-1}" },
          { type: "p", text: "Überprüfung mit Newton: 1 N = 1 kg·m/s², daher:" },
          { type: "formula", tex: "1 \\text{ N} \\cdot \\text{s} = 1 \\frac{\\text{kg} \\cdot \\text{m}}{\\text{s}^2} \\cdot \\text{s} = 1 \\frac{\\text{kg} \\cdot \\text{m}}{\\text{s}} = [p] \\quad \\checkmark" }
        ]
      },
      {
        id: "ex5",
        prompt: "Wie viele Moleküle enthält 1 Mol Wasser (H₂O)? Wie viel Gramm wiegt 1 Mol Wasser?",
        solution: [
          { type: "p", text: "Die Avogadro-Konstante gibt die Teilchenzahl pro Mol an:" },
          { type: "formula", tex: "N = N_A = 6{,}022 \\times 10^{23} \\text{ Moleküle/mol}" },
          { type: "p", text: "Die molare Masse von Wasser berechnet sich aus den Atommassen: M(H₂O) = 2 · 1 + 16 = 18 g/mol. 1 Mol Wasser hat also eine Masse von 18 g und enthält 6,022·10²³ Moleküle." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie viele SI-Basiseinheiten gibt es?", options: ["7", "6", "10", "5"], correctIndex: 0, explanation: "Das SI-System definiert genau 7 Basiseinheiten, aus denen alle übrigen Einheiten abgeleitet werden: m (Länge), kg (Masse), s (Zeit), K (Temperatur), A (Stromstärke), mol (Stoffmenge) und cd (Lichtstärke). Jede andere physikalische Einheit (z. B. Newton, Joule, Watt) lässt sich als Kombination dieser sieben Basiseinheiten schreiben." },
      { id: "q2", question: "Was bedeutet der Vorsatz 'Mikro' (μ)?", options: ["10⁻⁹", "10⁻³", "10⁻⁶", "10⁻¹²"], correctIndex: 2, explanation: "Mikro (μ) steht für den Faktor 10⁻⁶, also ein Millionstel. Beispiel: 1 μm = 10⁻⁶ m = 0,000001 m. Zum Vergleich: Nano (n) steht für 10⁻⁹ (noch kleiner) und Milli (m) für 10⁻³ (deutlich größer) – diese Vorsätze werden in der Praxis häufig verwechselt." },
      { id: "q3", question: "Welche Einheit hat die Gravitationskonstante G (aus F = G·m₁·m₂/r²)?", options: ["m³/(kg·s²)", "N/m²", "kg·m/s²", "J/K"], correctIndex: 0, explanation: "Löst man F = G·m₁·m₂/r² nach G auf, ergibt sich [G] = [F]·[r²]/([m₁]·[m₂]) = N·m²/kg². Setzt man N = kg·m/s² ein, folgt [G] = kg·m/s²·m²/kg² = m³/(kg·s²). N/m² wäre die Einheit eines Drucks (Pascal) und kg·m/s² lediglich die Einheit einer Kraft (Newton) – beide sind mit der tatsächlichen Dimension von G nicht identisch." },
      { id: "q4", question: "Wie groß ist die Lichtgeschwindigkeit im Vakuum?", options: ["c = 3·10⁶ m/s", "c = 3·10¹⁰ m/s", "c = 3·10⁸ m/s", "c = 3·10⁴ m/s"], correctIndex: 2, explanation: "Die Lichtgeschwindigkeit im Vakuum beträgt c ≈ 3·10⁸ m/s = 300.000 km/s und ist eine der fundamentalen Naturkonstanten. Die Distraktoren unterscheiden sich jeweils um zwei bis vier Zehnerpotenzen und prüfen, ob die Größenordnung sicher erinnert wird." },
      { id: "q5", question: "Wie rechnet man km/h in m/s um?", options: ["Multiplizieren mit 3,6", "Multiplizieren mit 100", "Dividieren durch 36", "Dividieren durch 3,6"], correctIndex: 3, explanation: "Da 1 km/h = 1000 m / 3600 s = (1/3,6) m/s gilt, muss man den km/h-Wert durch 3,6 dividieren, um m/s zu erhalten. Der umgekehrte Fall (m/s in km/h) erfordert die Multiplikation mit 3,6 – dieser Vorzeichenfehler bei Dividieren/Multiplizieren ist der klassische Umrechnungsfehler." },
      { id: "q6", question: "Was gibt die Avogadro-Konstante N_A an?", options: ["Die Anzahl der Elektronen in einem Atom", "Die Anzahl der Protonen in 1 kg Wasserstoff", "Die universelle Gaskonstante R", "Die Teilchenzahl pro Mol (≈ 6,022·10²³ mol⁻¹)"], correctIndex: 3, explanation: "Die Avogadro-Konstante N_A = 6,022·10²³ mol⁻¹ gibt an, wie viele Teilchen (Atome oder Moleküle) in genau einem Mol enthalten sind. Sie ist nicht mit der Gaskonstante R = 8,314 J/(mol·K) zu verwechseln, mit der sie über R = N_A·k_B (Boltzmann-Konstante) zusammenhängt, und hat nichts mit der Elektronen- oder Protonenzahl in einem einzelnen Atom zu tun." },
      { id: "q7", question: "Wozu dient die Dimensionsanalyse in der Physik?", options: ["Um die räumliche Ausdehnung von Körpern zu messen", "Um SI-Einheiten in nicht-metrische Einheiten umzurechnen", "Um zu prüfen, ob beide Seiten einer Gleichung dieselbe Einheit haben", "Um Naturkonstanten wie G oder h experimentell zu bestimmen"], correctIndex: 2, explanation: "Die Dimensionsanalyse überprüft, ob die Einheiten auf beiden Seiten einer physikalischen Gleichung übereinstimmen – wie im Beispiel E = m·g·h, wo sich kg·(m/s²)·m korrekt zu J vereinfacht. Sie deckt so Rechen- oder Formelfehler auf, dient aber weder der Umrechnung in nicht-metrische Einheiten noch der experimentellen Bestimmung von Naturkonstanten." },
      { id: "q8", question: "Wie viel Joule entsprechen 1 Kilowattstunde (kWh)?", options: ["3,6·10³ J", "3,6·10⁶ J", "1000 J", "3,6·10⁹ J"], correctIndex: 1, explanation: "Da 1 kWh = 1000 W · 3600 s ist und Watt·Sekunde gleich Joule ergibt, folgt 1 kWh = 3,6·10⁶ J = 3,6 MJ. Wer nur die Wattzahl (1000 J) nimmt oder Stunden fälschlich in Minuten statt Sekunden umrechnet, landet bei den falschen Zehnerpotenzen 10³ bzw. 10⁹." },
      { id: "q9", question: "Welche SI-Einheit gehört zur Temperatur?", options: ["Grad Celsius (°C)", "Kelvin (K)", "Grad Fahrenheit (°F)", "Joule pro Mol (J/mol)"], correctIndex: 1, explanation: "Die SI-Basiseinheit der Temperatur ist Kelvin (K), da diese Skala beim absoluten Nullpunkt (0 K = −273,15 °C) beginnt und keine negativen Werte kennt. Celsius und Fahrenheit sind gebräuchliche, aber abgeleitete Alltagsskalen und keine SI-Basiseinheiten." },
      { id: "q10", question: "Was bedeutet der SI-Vorsatz 'Giga' (G)?", options: ["10⁹", "10⁶", "10¹²", "10³"], correctIndex: 0, explanation: "Giga (G) steht für den Faktor 10⁹, also eine Milliarde. Beispiel: 1 GHz = 10⁹ Hz. Zur Abgrenzung: Mega (M) steht für 10⁶ und Tera (T) für 10¹² – diese benachbarten Vorsätze werden in der Praxis oft vertauscht." }
    ]
  }
];
