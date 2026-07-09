const NATWISS_CHAPTER6_TOPICS = [
  {
    id: "natwiss-wellenfunktion",
    chapter: 6,
    order: 1,
    title: "Wellenfunktion und Wellenarten",
    icon: "🌊",
    summary: "Wellen transportieren Energie ohne Materialtransport; Wellenfunktion, Wellenzahl und Phasengeschwindigkeit beschreiben ihre räumlich-zeitliche Ausbreitung.",
    explanation: [
      { type: "p", text: "Eine mechanische Welle ist eine periodische Störung, die sich durch ein Medium ausbreitet und dabei Energie, aber keinen Stoff transportiert. Man unterscheidet zwei grundlegende Wellenarten: Bei Transversalwellen schwingt das Medium senkrecht zur Ausbreitungsrichtung (z. B. Seilwellen, Licht). Bei Longitudinalwellen schwingt das Medium parallel zur Ausbreitungsrichtung (z. B. Schall)." },
      { type: "p", text: "Eine harmonische Welle, die sich in +x-Richtung ausbreitet, wird durch die Wellenfunktion beschrieben:" },
      { type: "formula", tex: "y(x,\\,t) = A \\cdot \\sin(kx - \\omega t + \\varphi)" },
      { type: "p", text: "Dabei sind A die Amplitude, k = 2π/λ die Wellenzahl, ω = 2π/T = 2πf die Kreisfrequenz und φ die Anfangsphase. Die Wellenlänge λ ist der räumliche Abstand zweier benachbarter Wellenberge. Frequenz f und Periodendauer T sind über T = 1/f verknüpft." },
      { type: "list", items: [
        "Wellenzahl: k = 2π / λ (Einheit: rad/m)",
        "Kreisfrequenz: ω = 2π · f = 2π / T",
        "Phasengeschwindigkeit: c = λ · f = ω / k",
        "Wellengleichung: ∂²y/∂t² = c² · ∂²y/∂x²",
        "Schallgeschwindigkeit in Luft (20 °C): c ≈ 343 m/s",
        "Lichtgeschwindigkeit im Vakuum: c₀ = 3 × 10⁸ m/s"
      ]},
      { type: "formula", tex: "c = \\lambda \\cdot f = \\frac{\\omega}{k}" }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Eine Schallwelle hat die Frequenz f = 440 Hz und breitet sich mit c = 343 m/s in Luft aus. Berechnen Sie die Wellenlänge λ.",
        solution: [
          { type: "formula", tex: "\\lambda = \\frac{c}{f} = \\frac{343 \\; \\text{m/s}}{440 \\; \\text{Hz}} \\approx 0{,}780 \\; \\text{m}" },
          { type: "p", text: "Der Kammerton A₄ hat also eine Wellenlänge von etwa 78 cm in Luft." }
        ]
      },
      {
        id: "ex2",
        prompt: "Eine Welle wird durch y = 0,02 · sin(3x − 6t) beschrieben (SI-Einheiten). Bestimmen Sie Amplitude A, Wellenzahl k, Kreisfrequenz ω, Wellenlänge λ, Frequenz f und Phasengeschwindigkeit c.",
        solution: [
          { type: "list", items: [
            "Amplitude: A = 0,02 m",
            "Wellenzahl: k = 3 rad/m",
            "Kreisfrequenz: ω = 6 rad/s",
            "Wellenlänge: λ = 2π / k = 2π / 3 ≈ 2,09 m",
            "Frequenz: f = ω / (2π) = 6 / (2π) ≈ 0,955 Hz",
            "Phasengeschwindigkeit: c = ω / k = 6 / 3 = 2 m/s"
          ]}
        ]
      },
      {
        id: "ex3",
        prompt: "Sichtbares Licht hat eine Wellenlänge von λ = 500 nm. Berechnen Sie die Frequenz (c₀ = 3 × 10⁸ m/s).",
        solution: [
          { type: "formula", tex: "f = \\frac{c_0}{\\lambda} = \\frac{3 \\times 10^8 \\; \\text{m/s}}{500 \\times 10^{-9} \\; \\text{m}} = 6 \\times 10^{14} \\; \\text{Hz}" },
          { type: "p", text: "Licht im grünen Bereich hat also eine Frequenz von 600 THz." }
        ]
      },
      {
        id: "ex4",
        prompt: "Ein Echolot sendet einen Ultraschallpuls aus; das Echo kommt nach Δt = 0,8 s zurück. Berechnen Sie die Meerestiefe (Schallgeschwindigkeit in Wasser: c = 1500 m/s).",
        solution: [
          { type: "p", text: "Der Schall legt die Strecke hin und zurück zurück. Die einfache Tiefe beträgt:" },
          { type: "formula", tex: "d = \\frac{c \\cdot \\Delta t}{2} = \\frac{1500 \\; \\text{m/s} \\cdot 0{,}8 \\; \\text{s}}{2} = 600 \\; \\text{m}" }
        ]
      },
      {
        id: "ex5",
        prompt: "Vergleichen Sie die Wellenlängen von Schall mit f = 20 Hz und f = 20 000 Hz (Hörbereich) in Luft (c = 343 m/s).",
        solution: [
          { type: "list", items: [
            "λ(20 Hz) = 343 / 20 = 17,15 m (Infraschall, sehr lange Wellen)",
            "λ(20 000 Hz) = 343 / 20 000 = 0,01715 m = 1,715 cm (Ultraschallgrenze)"
          ]},
          { type: "p", text: "Der Hörbereich des Menschen umfasst damit Wellenlängen von etwa 1,7 cm bis 17 m." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche Wellenart transportiert Energie und Stoff?", options: ["Longitudinalwellen", "Transversalwellen", "Beide Typen transportieren Energie und Stoff", "Weder noch – Wellen transportieren nur Energie, keinen Stoff"], correctIndex: 3, explanation: "Wellen transportieren ausschließlich Energie (und Impuls), aber keinen Stoff." },
      { id: "q2", question: "Bei welcher Wellenart schwingt das Medium senkrecht zur Ausbreitungsrichtung?", options: ["Kompressionswelle", "Transversalwelle", "Longitudinalwelle", "Druckwelle"], correctIndex: 1, explanation: "Bei Transversalwellen (z. B. Seilwellen, Licht) ist die Schwingungsrichtung senkrecht zur Ausbreitung." },
      { id: "q3", question: "Eine Welle hat λ = 2 m und f = 5 Hz. Wie groß ist die Phasengeschwindigkeit?", options: ["2,5 m/s", "7 m/s", "10 m/s", "0,4 m/s"], correctIndex: 2, explanation: "c = λ · f = 2 m · 5 Hz = 10 m/s." },
      { id: "q4", question: "Was beschreibt die Wellenzahl k?", options: ["Die Amplitude der Welle", "Den räumlichen Abstand zweier Wellenberge", "Den Phasenhub pro Längeneinheit in rad/m", "Die Anzahl der Schwingungen pro Sekunde"], correctIndex: 2, explanation: "Die Wellenzahl k = 2π/λ gibt an, wie viel Phase (in Radiant) pro Meter durchlaufen wird." },
      { id: "q5", question: "Schall ist eine …", options: ["Transversalwelle", "Stehende Welle", "Longitudinalwelle", "Elektromagnetische Welle"], correctIndex: 2, explanation: "Schall ist eine Longitudinalwelle: die Luftmoleküle schwingen parallel zur Ausbreitungsrichtung (Kompressions- und Verdünnungszonen)." },
      { id: "q6", question: "Die Frequenz einer Welle wird verdoppelt (c konstant). Was passiert mit der Wellenlänge?", options: ["Sie verdoppelt sich", "Sie bleibt gleich", "Sie vervierfacht sich", "Sie halbiert sich"], correctIndex: 3, explanation: "λ = c/f → bei doppelter Frequenz halbiert sich die Wellenlänge (c = λ·f = const)." },
      { id: "q7", question: "Welche der folgenden Größen beschreibt die zeitliche Periodizität einer Welle?", options: ["Wellenzahl k", "Phasengeschwindigkeit c", "Wellenlänge λ", "Periodendauer T"], correctIndex: 3, explanation: "Die Periodendauer T = 1/f gibt die Zeit für eine vollständige Schwingung an." },
      { id: "q8", question: "Wie lautet die Wellengleichung?", options: ["∂²y/∂t² = c² · ∂²y/∂x²", "y = A · sin(kx)", "∂y/∂x = c · ∂y/∂t", "∂y/∂t = c · ∂y/∂x"], correctIndex: 0, explanation: "Die Wellengleichung lautet ∂²y/∂t² = c² · ∂²y/∂x² und ist eine lineare partielle Differentialgleichung 2. Ordnung." },
      { id: "q9", question: "Ein Sonargerät misst eine Laufzeit von 1,2 s (Hin- und Rückweg). Welche Tiefe entspricht das bei c = 1500 m/s?", options: ["900 m", "450 m", "1200 m", "1800 m"], correctIndex: 0, explanation: "d = c·Δt/2 = 1500·1,2/2 = 900 m." },
      { id: "q10", question: "Was ist die Amplitude einer Welle?", options: ["Der Abstand zwischen zwei Wellenbergen", "Die maximale Auslenkung aus der Gleichgewichtslage", "Die Ausbreitungsgeschwindigkeit", "Die Anzahl der Schwingungen pro Sekunde"], correctIndex: 1, explanation: "Die Amplitude A ist die maximale Auslenkung aus der Gleichgewichtslage; sie bestimmt die Energie der Welle." }
    ]
  },
  {
    id: "natwiss-interferenz",
    chapter: 6,
    order: 2,
    title: "Superposition und Interferenz",
    icon: "🔀",
    summary: "Überlagern sich zwei Wellen, addieren sich ihre Auslenkungen; konstruktive Interferenz verstärkt, destruktive Interferenz löscht aus.",
    explanation: [
      { type: "p", text: "Das Superpositionsprinzip gilt für lineare Wellen: Die resultierende Auslenkung ist die vektorielle (algebraische) Summe der Einzelauslenkungen. Dies ermöglicht Interferenzphänomene." },
      { type: "list", items: [
        "Konstruktive Interferenz: Wellen sind gleichphasig (Δφ = 0, 2π, 4π …), Amplituden addieren sich: A_ges = 2A",
        "Destruktive Interferenz: Wellen sind gegenphasig (Δφ = π, 3π …), Amplituden löschen sich aus: A_ges = 0",
        "Gangunterschied Δ = n·λ → konstruktiv (n = 0, ±1, ±2, …)",
        "Gangunterschied Δ = (n + ½)·λ → destruktiv"
      ]},
      { type: "p", text: "Überlagert man zwei harmonische Wellen gleicher Amplitude aber leicht verschiedener Frequenz f₁ und f₂, entsteht eine Schwebung: Die Einhüllende pulsiert mit der Schwebungsfrequenz:" },
      { type: "formula", tex: "f_{\\text{Schwebung}} = |f_1 - f_2|" },
      { type: "p", text: "Der Doppler-Effekt beschreibt die Frequenzverschiebung bei Relativbewegung zwischen Quelle und Beobachter. Nähert sich die Quelle mit Geschwindigkeit v_Q dem ruhenden Beobachter an:" },
      { type: "formula", tex: "f' = f \\cdot \\frac{c}{c - v_Q} \\quad (\\text{Quelle nähert sich})" }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Zwei kohärente Schallquellen strahlen mit λ = 0,4 m. Punkt P liegt 1,6 m von Quelle 1 und 2,4 m von Quelle 2 entfernt. Liegt dort konstruktive oder destruktive Interferenz vor?",
        solution: [
          { type: "p", text: "Gangunterschied: Δ = 2,4 m − 1,6 m = 0,8 m = 2 · λ." },
          { type: "p", text: "Da Δ = 2λ (ganzzahliges Vielfaches der Wellenlänge), liegt konstruktive Interferenz vor." }
        ]
      },
      {
        id: "ex2",
        prompt: "Zwei Lautsprecher im Abstand d = 5 m senden f = 680 Hz (c = 340 m/s). An welchen Punkten auf der Mittelsenkrechten in 2 m Abstand vor den Lautsprechern herrscht erstmals destruktive Interferenz?",
        solution: [
          { type: "p", text: "Wellenlänge: λ = c/f = 340/680 = 0,5 m. Erste destruktive Interferenz wenn Δ = λ/2 = 0,25 m. Geometrisch: mit Pythagoras den Weg x bestimmen, sodass |r₁ − r₂| = 0,25 m." },
          { type: "p", text: "Dies führt auf ca. x ≈ ±0,1 m seitlich der Mittelsenkrechten (je nach exakter Geometrie). Das Prinzip: destruktiv bei jedem halbzahligen Vielfachen der Wellenlänge." }
        ]
      },
      {
        id: "ex3",
        prompt: "Ein Klavierspieler stimmt seine A-Saite (Soll: 440 Hz) an einem anderen Instrument ab. Er hört 3 Schwebungen pro Sekunde. Welche Frequenz hat seine Saite?",
        solution: [
          { type: "p", text: "Schwebungsfrequenz f_S = |f₁ − f₂| = 3 Hz." },
          { type: "p", text: "Die Saite schwingt entweder bei 440 + 3 = 443 Hz oder 440 − 3 = 437 Hz. Durch Nachspannen oder Entspannen kann man feststellen, welcher Fall vorliegt." }
        ]
      },
      {
        id: "ex4",
        prompt: "Ein Krankenwagen fährt mit v = 30 m/s (108 km/h) auf einen stehenden Beobachter zu und heult mit f = 800 Hz. Welche Frequenz hört der Beobachter? (c = 340 m/s)",
        solution: [
          { type: "formula", tex: "f' = f \\cdot \\frac{c}{c - v_Q} = 800 \\cdot \\frac{340}{340 - 30} = 800 \\cdot \\frac{340}{310} \\approx 877 \\; \\text{Hz}" },
          { type: "p", text: "Der Beobachter hört einen höheren Ton als die tatsächliche Sirenfreequenz." }
        ]
      },
      {
        id: "ex5",
        prompt: "Was versteht man unter dem Huygensschen Prinzip und wie erklärt es die Beugung von Wellen an einem Spalt?",
        solution: [
          { type: "p", text: "Das Huygenssche Prinzip besagt: Jeder Punkt einer Wellenfront ist Ausgangspunkt einer neuen Elementarwelle (Kugelwelle). Die Einhüllende aller Elementarwellen ergibt die neue Wellenfront." },
          { type: "p", text: "An einem Spalt (Breite ≈ λ) entstehen aus jedem Spaltpunkt neue Elementarwellen, die sich in alle Richtungen ausbreiten – das erklärt, warum Wellen um Hindernisse herumgebeugt werden (Beugung/Diffraktion)." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Zwei Wellen treffen gleichphasig aufeinander. Was entsteht?", options: ["Resonanz", "Schwebung", "Destruktive Interferenz", "Konstruktive Interferenz"], correctIndex: 3, explanation: "Gleichphasige Überlagerung (Δφ = 0, 2π, …) führt zu konstruktiver Interferenz – die Amplituden addieren sich." },
      { id: "q2", question: "Welcher Gangunterschied führt zur destruktiven Interferenz?", options: ["Δ = 2·λ", "Δ = n·λ", "Δ = (n+½)·λ", "Δ = 0"], correctIndex: 2, explanation: "Destruktive Interferenz tritt auf wenn Δ = (n+½)·λ, also bei halbzahligen Vielfachen der Wellenlänge." },
      { id: "q3", question: "Was ist die Schwebungsfrequenz, wenn zwei Töne mit f₁ = 442 Hz und f₂ = 438 Hz gleichzeitig erklingen?", options: ["4 Hz", "880 Hz", "2 Hz", "440 Hz"], correctIndex: 0, explanation: "f_Schwebung = |f₁ − f₂| = |442 − 438| = 4 Hz." },
      { id: "q4", question: "Beim Doppler-Effekt: Was passiert wenn sich eine Schallquelle vom Beobachter entfernt?", options: ["Der Beobachter hört eine höhere Frequenz", "Die Frequenz ändert sich nicht", "Die Amplitude nimmt zu", "Der Beobachter hört eine niedrigere Frequenz"], correctIndex: 3, explanation: "Entfernt sich die Quelle, werden die Wellen 'auseinandergezogen' → größere Wellenlänge → niedrigere Frequenz für den Beobachter." },
      { id: "q5", question: "Das Superpositionsprinzip gilt für …", options: ["Alle physikalischen Phänomene", "Nur Schallwellen", "Lineare Wellen", "Nur elektromagnetische Wellen"], correctIndex: 2, explanation: "Das Superpositionsprinzip gilt für lineare Wellen, also wenn die Wellengleichung linear in der Amplitude ist." },
      { id: "q6", question: "Ein Gangunterschied von Δ = 2,5 · λ führt zu …", options: ["Schwebung", "Destruktiver Interferenz", "Keiner Interferenz", "Konstruktiver Interferenz"], correctIndex: 1, explanation: "Δ = 2,5λ = (2+½)λ ist ein halbzahliges Vielfaches → destruktive Interferenz." },
      { id: "q7", question: "Warum verwendet man Noise-Cancelling-Kopfhörer?", options: ["Sie erzeugen einen gegenphasigen Schall zur destruktiven Interferenz", "Sie reflektieren Schallwellen", "Sie nutzen Resonanz", "Sie verstärken den Schall"], correctIndex: 0, explanation: "Noise-Cancelling-Kopfhörer messen den Umgebungslärm und erzeugen ein genau gegenphasiges Signal – destruktive Interferenz löscht den Lärm aus." },
      { id: "q8", question: "Welche Frequenz hört ein ruhender Beobachter, wenn sich eine Quelle mit f = 500 Hz und v = c/2 nähert?", options: ["250 Hz", "1000 Hz", "500 Hz", "750 Hz"], correctIndex: 1, explanation: "f' = f · c/(c − c/2) = 500 · c/(c/2) = 500 · 2 = 1000 Hz." },
      { id: "q9", question: "Bei der Beugung von Wellen an einem Spalt ist die Beugung am stärksten wenn …", options: ["Die Spaltbreite in der Größenordnung von λ liegt", "Die Spaltbreite viel größer als λ ist", "Die Spaltbreite viel kleiner als λ ist", "Keine Beugung tritt auf"], correctIndex: 0, explanation: "Beugungseffekte treten am deutlichsten auf, wenn die Spaltbreite in der Größenordnung der Wellenlänge liegt." },
      { id: "q10", question: "Was zeigt das Doppelspaltexperiment?", options: ["Schall überträgt sich nicht im Vakuum", "Wellen können nur durch kleine Öffnungen treten", "Wellen können reflektiert werden", "Licht hat Wellencharakter (Interferenzmuster)"], correctIndex: 3, explanation: "Das Youngs Doppelspaltexperiment erzeugt ein Interferenzmuster (helle und dunkle Streifen) und beweist den Wellencharakter des Lichts." }
    ]
  },
  {
    id: "natwiss-stehende-wellen",
    chapter: 6,
    order: 3,
    title: "Stehende Wellen",
    icon: "📍",
    summary: "Stehende Wellen entstehen durch Überlagerung gegenläufiger Wellen; Knoten und Bäuche sind ortsfest, die Eigenfrequenzen bilden eine harmonische Reihe.",
    explanation: [
      { type: "p", text: "Wenn eine Welle an einem festen Ende reflektiert wird, läuft die reflektierte Welle der einfallenden entgegen. Die Überlagerung beider Wellen gleicher Amplitude und Frequenz ergibt eine stehende Welle:" },
      { type: "formula", tex: "y(x,\\,t) = 2A \\cdot \\sin(kx) \\cdot \\cos(\\omega t)" },
      { type: "p", text: "Charakteristisch sind Knoten (Punkte mit immer y = 0) und Bäuche (Punkte mit maximaler Auslenkung ±2A). Knoten liegen bei x = n·λ/2, Bäuche bei x = (2n+1)·λ/4." },
      { type: "p", text: "Für eine Saite der Länge L (an beiden Enden fest eingespannt) sind nur bestimmte Wellenlängen erlaubt:" },
      { type: "formula", tex: "L = n \\cdot \\frac{\\lambda_n}{2} \\implies \\lambda_n = \\frac{2L}{n}, \\quad f_n = n \\cdot \\frac{c}{2L} \\quad (n = 1,2,3,\\ldots)" },
      { type: "list", items: [
        "Grundton (Fundamentalfrequenz): n = 1, f₁ = c/(2L)",
        "1. Oberton: n = 2, f₂ = 2f₁",
        "2. Oberton: n = 3, f₃ = 3f₁",
        "Offenes Rohr (beide Enden offen): gleiche Formel wie Saite",
        "Geschlossenes Rohr (ein Ende zu): nur ungerade Harmonische, f_n = (2n−1)·c/(4L)"
      ]}
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Eine Gitarrensaite hat die Länge L = 0,65 m. Die Phasengeschwindigkeit auf der gespannten Saite beträgt c = 400 m/s. Berechnen Sie die Grundfrequenz und die ersten drei Obertöne.",
        solution: [
          { type: "formula", tex: "f_1 = \\frac{c}{2L} = \\frac{400}{2 \\cdot 0{,}65} \\approx 307{,}7 \\; \\text{Hz}" },
          { type: "list", items: [
            "Grundton f₁ ≈ 307,7 Hz",
            "1. Oberton f₂ = 2·307,7 ≈ 615,4 Hz",
            "2. Oberton f₃ = 3·307,7 ≈ 923,1 Hz",
            "3. Oberton f₄ = 4·307,7 ≈ 1230,8 Hz"
          ]}
        ]
      },
      {
        id: "ex2",
        prompt: "Ein einseitig geschlossenes Rohr (Orgelpfeife) hat die Länge L = 0,85 m (c = 340 m/s). Berechnen Sie die Grundfrequenz und den ersten Oberton.",
        solution: [
          { type: "formula", tex: "f_1 = \\frac{c}{4L} = \\frac{340}{4 \\cdot 0{,}85} = \\frac{340}{3{,}4} = 100 \\; \\text{Hz}" },
          { type: "p", text: "Erster Oberton (n = 2, aber nur ungerade): f₃ = 3·f₁ = 300 Hz. Bei einem geschlossenen Rohr fehlen die geradzahligen Harmonischen." }
        ]
      },
      {
        id: "ex3",
        prompt: "Ein offenes Rohr hat die Grundfrequenz f₁ = 200 Hz. Welche Frequenz hat der 3. Oberton (n = 4)?",
        solution: [
          { type: "p", text: "Beim offenen Rohr gilt f_n = n · f₁." },
          { type: "formula", tex: "f_4 = 4 \\cdot 200 \\; \\text{Hz} = 800 \\; \\text{Hz}" }
        ]
      },
      {
        id: "ex4",
        prompt: "Die Saitenspannung einer Gitarrensaite wird auf das 4-Fache erhöht (gleiche Länge und Masse). Wie verändert sich die Grundfrequenz?",
        solution: [
          { type: "p", text: "Die Wellengeschwindigkeit auf einer Saite: c = √(F/μ) mit μ = Masse pro Länge. Bei 4-facher Spannung gilt c' = √(4F/μ) = 2·c." },
          { type: "formula", tex: "f_1' = \\frac{c'}{2L} = \\frac{2c}{2L} = 2 \\cdot f_1" },
          { type: "p", text: "Die Grundfrequenz verdoppelt sich – die Saite klingt eine Oktave höher." }
        ]
      },
      {
        id: "ex5",
        prompt: "Wo befinden sich die Knoten und Bäuche der Grundschwingung einer Saite der Länge L = 2 m?",
        solution: [
          { type: "p", text: "Grundschwingung (n = 1): λ₁ = 2L = 4 m. Knotenabstand = λ/2 = 2 m." },
          { type: "list", items: [
            "Knoten: x = 0 m (eingespanntes Ende) und x = 2 m (anderes Ende)",
            "Bauch: x = 1 m (Mitte der Saite), Auslenkung maximal"
          ]},
          { type: "p", text: "Die Grundschwingung hat genau einen Bauch in der Mitte der Saite." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie entsteht eine stehende Welle?", options: ["Durch Überlagerung zweier gegenläufiger Wellen gleicher Frequenz und Amplitude", "Durch destruktive Interferenz an einem Punkt", "Durch eine Welle ohne Reflexion", "Durch eine Welle mit variabler Frequenz"], correctIndex: 0, explanation: "Stehende Wellen entstehen durch Überlagerung einer einfallenden und einer reflektierten Welle (gegenläufig, gleiche Frequenz und Amplitude)." },
      { id: "q2", question: "Was sind Knoten bei stehenden Wellen?", options: ["Punkte immer verschwindender Auslenkung (y = 0)", "Enden der Welle", "Punkte maximaler Auslenkung", "Punkte größter Energie"], correctIndex: 0, explanation: "Knoten sind Punkte, an denen die Auslenkung immer null ist – sie bewegen sich nicht." },
      { id: "q3", question: "Eine Saite der Länge L = 1 m hat c = 300 m/s. Welche Grundfrequenz hat sie?", options: ["600 Hz", "75 Hz", "300 Hz", "150 Hz"], correctIndex: 3, explanation: "f₁ = c/(2L) = 300/(2·1) = 150 Hz." },
      { id: "q4", question: "Ein geschlossenes Rohr schwingt mit Grundfrequenz f₁ = 100 Hz. Welche Frequenzen sind anregbar?", options: ["200, 400, 600 Hz", "50, 100, 150 Hz", "100, 300, 500, 700 Hz", "100, 200, 300, 400 Hz"], correctIndex: 2, explanation: "Beim geschlossenen Rohr existieren nur ungerade Harmonische: f_n = (2n−1)·f₁, also 100, 300, 500, 700 Hz usw." },
      { id: "q5", question: "Wo liegt der Bauch der Grundschwingung einer beidseitig eingespannten Saite?", options: ["Am rechten Ende", "In der Mitte der Saite", "An beiden Enden", "Am linken Ende"], correctIndex: 1, explanation: "Bei der Grundschwingung liegt genau ein Bauch in der Mitte der Saite; die Enden sind Knoten (fest eingespannt)." },
      { id: "q6", question: "Wie viele Bäuche hat der 3. Oberton (n = 4) einer Saite?", options: ["2", "1", "3", "4"], correctIndex: 3, explanation: "Die n-te Mode hat n Bäuche. Der 3. Oberton entspricht n = 4, also 4 Bäuche." },
      { id: "q7", question: "Was passiert mit der Grundfrequenz, wenn die Saitenlänge halbiert wird (c konstant)?", options: ["Sie vervierfacht sich", "Sie verdoppelt sich", "Sie halbiert sich", "Sie bleibt gleich"], correctIndex: 1, explanation: "f₁ = c/(2L) → bei L/2 wird f₁' = c/(2·L/2) = c/L = 2f₁. Die Frequenz verdoppelt sich." },
      { id: "q8", question: "Ein offenes Rohr hat Länge L = 0,5 m (c = 340 m/s). Wie groß ist die Grundfrequenz?", options: ["85 Hz", "680 Hz", "340 Hz", "170 Hz"], correctIndex: 2, explanation: "f₁ = c/(2L) = 340/(2·0,5) = 340 Hz." },
      { id: "q9", question: "Warum können Orgelpfeifen verschiedene Töne erzeugen?", options: ["Weil Rohre verschiedener Länge verschiedene Eigenfrequenzen haben", "Weil sie verschiedene Materialien haben", "Weil verschiedene Gase verwendet werden", "Weil die Windgeschwindigkeit variiert"], correctIndex: 0, explanation: "Jede Orgelpfeife hat eine bestimmte Länge, die ihre Eigenfrequenz(en) bestimmt: f₁ = c/(2L) (offen) oder f₁ = c/(4L) (geschlossen)." },
      { id: "q10", question: "Wie viele Wellenlängen passen bei der Grundschwingung in eine beidseitig eingespannte Saite?", options: ["Zwei Wellenlängen", "Keine ganze Anzahl", "Eine ganze Wellenlänge", "Eine halbe Wellenlänge"], correctIndex: 3, explanation: "Bei der Grundschwingung (n = 1) gilt L = λ/2, also passt genau eine halbe Wellenlänge auf die Saite." }
    ]
  }
];
