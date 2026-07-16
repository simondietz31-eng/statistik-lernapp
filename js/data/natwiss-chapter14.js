const NATWISS_CHAPTER14_TOPICS = [
  {
    id: "natwiss-ueb-kinematik",
    chapter: 14,
    order: 1,
    title: "Übungsaufgaben: Kinematik",
    icon: "🏎️",
    summary: "Übungsaufgaben zu Bewegungsgleichungen, relativem Überholen, schiefer Wurf und Kreisbewegung.",
    explanation: [
      { type: "p", text: "Dieser Abschnitt enthält typische Klausuraufgaben zur Kinematik. Grundlage sind die Bewegungsgleichungen bei konstanter Beschleunigung:" },
      { type: "formula", tex: "x(t) = x_0 + v_0 t + \\tfrac{1}{2}a t^2, \\quad v(t) = v_0 + at" },
      { type: "p", text: "Beim schiefen Wurf wird die Bewegung in horizontale (keine Beschleunigung) und vertikale (a = −g) Komponenten zerlegt. Die Gesamtgeschwindigkeit ergibt sich aus dem Betrag des Geschwindigkeitsvektors." },
      { type: "p", text: "Musterlösung Aufgabe 11.1 (Überholvorgang):" },
      { type: "list", items: [
        "Auto A: x_A(t) = 80 km/h · t + 45 km",
        "Auto B: x_B(t) = 110 km/h · t",
        "Treffzeit: t_T = 45 km / (110−80) km/h = 7,5 h",
        "Weg von A: x_A = 80 · 7,5 = 720 km"
      ]},
      { type: "p", text: "Musterlösung Aufgabe 11.3 (Stein am Kran):" },
      { type: "list", items: [
        "Ablösung bei y₀ = 6 m mit v₀ = 5 m/s (nach oben)",
        "Max. Höhe: Δy = v₀²/(2g) = 1,27 m → h_max = 7,27 m",
        "Auftreffgeschwindigkeit: v = √(2g·h_max) = 12 m/s",
        "Auftreffzeit: t ≈ 1,7 s (bis zum Scheitelpunkt) + Fallzeit"
      ]},
      { type: "p", text: "Zentripetalbeschleunigung (Aufg. 11.5): Bei 15000 U/min und r = 15 cm gilt a_zp = ω²r = 3,7·10⁵ m/s² ≈ 37 700 g. Extreme Belastung!" }
    ],
    exercises: [
      {
        id: "natwiss-ueb-kinematik-e1",
        prompt: "Auto A fährt mit 80 km/h, Auto B mit 110 km/h. Auto B startet 45 km hinter A. Wie weit ist A gefahren, wenn B ihn einholt?",
        solution: [{ type: "p", text: "Treffzeit: t_T = 45 km / (110−80) km/h = 1,5 h. Weg von A: x_A = 80 km/h · 1,5 h = 120 km. (Alternative Lösung mit Absolutkoordinaten: t_T = 7,5 h wenn B nicht von 0 startet; x_A = 720 km. Hier: B startet 45 km hinter dem Bezugspunkt, wo A bei t=0 ist → x_A = v_A · t_T = 120 km, x_B = v_B · t_T = 165 km ✓)" }]
      },
      {
        id: "natwiss-ueb-kinematik-e2",
        prompt: "Ein Stein löst sich bei h₀ = 6 m Höhe mit v₀ = 5 m/s (nach oben) von einem Kran. Welche Maximalöhe erreicht er?",
        solution: [{ type: "p", text: "Δh = v₀²/(2g) = 25/(2·9,81) = 1,27 m. h_max = 6 + 1,27 = 7,27 m." }]
      },
      {
        id: "natwiss-ueb-kinematik-e3",
        prompt: "Mit welcher Geschwindigkeit trifft der Stein aus Aufgabe 2 auf den Boden? (h_max = 7,27 m)",
        solution: [{ type: "p", text: "v = √(2·g·h_max) = √(2·9,81·7,27) ≈ 12 m/s. (Energieerhaltung: ges. potenzielle Energie wird in kinetische umgewandelt)" }]
      },
      {
        id: "natwiss-ueb-kinematik-e4",
        prompt: "Eine Zentrifuge dreht mit 15 000 U/min. Berechnen Sie die Zentripetalbeschleunigung bei r = 15 cm.",
        solution: [{ type: "p", text: "ω = 2π·(15000/60) = 1571 rad/s. a_zp = ω²·r = 1571²·0,15 ≈ 3,7·10⁵ m/s² ≈ 37 700 g." }]
      },
      {
        id: "natwiss-ueb-kinematik-e5",
        prompt: "Die Zentrifuge (15 000 U/min) erreicht ihre Drehzahl in 1 min 15 s. Berechnen Sie die Tangentialbeschleunigung bei r = 15 cm.",
        solution: [{ type: "p", text: "v_end = ω·r = 1571·0,15 = 235,6 m/s. Δt = 75 s. a_t = v_end/Δt = 235,6/75 ≈ 3,1 m/s². (Oder a_t = r·α = 0,15·20,9 ≈ 3,1 m/s²)" }]
      }
    ],
    quiz: [
      { id: "natwiss-ueb-kinematik-q1", question: "Auto A (80 km/h) hat 45 km Vorsprung. Auto B (110 km/h) holt auf. Nach welcher Zeit holt B A ein?", options: ["3,0 h, bei falscher Differenzgeschwindigkeit", "7,5 h, bei vertauschten Geschwindigkeiten", "4,5 h, bei falscher Vorsprungsannahme", "1,5 h"], correctIndex: 3, explanation: "B holt pro Stunde nur die Differenzgeschwindigkeit Δv = 110−80 = 30 km/h auf, sodass die Zeit zum Aufholen des 45-km-Vorsprungs t = 45/30 = 1,5 h beträgt. Nicht die Einzelgeschwindigkeiten, sondern nur ihre Differenz bestimmt das Aufholtempo." },
      { id: "natwiss-ueb-kinematik-q2", question: "Ein Körper wird von h₀ = 6 m Höhe mit v₀ = 5 m/s nach oben geworfen. Wie hoch ist die Maximalhöhe über dem Boden?", options: ["5,00 m, ohne Berücksichtigung der Anfangshöhe", "6,00 m, ohne Berücksichtigung des Wurfanteils", "7,27 m", "8,50 m, bei überschätztem Zusatzweg"], correctIndex: 2, explanation: "Der zusätzliche Steigweg beträgt Δh = v₀²/(2g) = 25/19,62 ≈ 1,27 m, der zur Ausgangshöhe addiert wird: h_max = 6 + 1,27 = 7,27 m. Die Anfangshöhe h₀ darf dabei nicht vergessen werden, da sie zur reinen Wurfhöhe hinzukommt." },
      { id: "natwiss-ueb-kinematik-q3", question: "Welche Komponente des schiefen Wurfs ist beschleunigt?", options: ["Keine der beiden Komponenten", "Die vertikale Komponente (a = −g)", "Beide Komponenten gleichermaßen", "Die horizontale Komponente (a = g)"], correctIndex: 1, explanation: "Beim schiefen Wurf wirkt die Gravitationsbeschleunigung g ausschließlich vertikal, während horizontal keine Kraft angreift und die Geschwindigkeit konstant bleibt. Diese Trennung in eine beschleunigte und eine unbeschleunigte Komponente ist der Schlüssel zur Berechnung der Wurfparabel." },
      { id: "natwiss-ueb-kinematik-q4", question: "Wie ändert sich die Zentripetalbeschleunigung a_zp, wenn man die Winkelgeschwindigkeit ω verdoppelt?", options: ["Sie halbiert sich gegenüber dem Ausgangswert", "Sie verdoppelt sich linear mit ω", "Sie bleibt trotz höherer Drehzahl unverändert", "Sie vervierfacht sich"], correctIndex: 3, explanation: "Da a_zp = ω²r quadratisch von der Winkelgeschwindigkeit abhängt, führt eine Verdopplung von ω zu (2ω)²r = 4ω²r, also einer Vervierfachung von a_zp. Eine bloße Verdopplung würde eine lineare statt quadratische Abhängigkeit unterstellen." },
      { id: "natwiss-ueb-kinematik-q5", question: "Was ist die Fluchtgeschwindigkeit von der Erde (näherungsweise)?", options: ["7,9 km/s, die erste kosmische Geschwindigkeit", "11,2 km/s", "30 km/s, die ungefähre Bahngeschwindigkeit der Erde", "3,0 km/s, deutlich zu niedrig angesetzt"], correctIndex: 1, explanation: "Die Fluchtgeschwindigkeit v₀ = √(2GM_E/r_E) ≈ 11,2 km/s ist die zweite kosmische Geschwindigkeit, bei der die kinetische Energie gerade die gesamte potenzielle Bindungsenergie zur Erde überwindet. Sie ist deutlich höher als die erste kosmische Geschwindigkeit (7,9 km/s) für eine stabile Erdumlaufbahn." },
      { id: "natwiss-ueb-kinematik-q6", question: "Ein Körper fällt aus der Ruhe. Nach t = 3 s, wie weit ist er gefallen (g = 10 m/s²)?", options: ["15 m, ohne den Faktor ½", "90 m, ohne Quadrierung der Zeit", "45 m", "30 m, mit fehlerhafter Quadrierung"], correctIndex: 2, explanation: "Für den freien Fall aus der Ruhe gilt s = ½·g·t² = ½·10·3² = ½·10·9 = 45 m. Sowohl der Faktor ½ als auch die Quadrierung der Zeit sind entscheidend für das korrekte Ergebnis." },
      { id: "natwiss-ueb-kinematik-q7", question: "Bei einem Überholvorgang ist die Relativgeschwindigkeit 30 km/h. Wie lange dauert es, einen Vorsprung von 60 km aufzuholen?", options: ["1 h, bei zu niedrig angesetzter Zeit", "2 h", "0,5 h, deutlich zu kurz gerechnet", "3 h, deutlich zu lang gerechnet"], correctIndex: 1, explanation: "Die Aufholzeit ergibt sich aus t = Δx/Δv = 60 km / 30 km/h = 2 h — der Vorsprung wird durch die Relativgeschwindigkeit geteilt, nicht durch eine der Absolutgeschwindigkeiten." },
      { id: "natwiss-ueb-kinematik-q8", question: "Was ist die Kreisfrequenz ω bei 15000 U/min?", options: ["1571 rad/s", "15000 rad/s, ohne Umrechnung in rad/s", "78,5 rad/s, bei falscher Zeiteinheit", "250 rad/s, ohne den Faktor 2π"], correctIndex: 0, explanation: "Zunächst wird die Drehzahl auf Umdrehungen pro Sekunde umgerechnet, n = 15000/60 = 250 1/s, dann mit 2π multipliziert: ω = 2π·250 ≈ 1571 rad/s. Beide Umrechnungsschritte (Zeiteinheit und Faktor 2π) müssen dabei berücksichtigt werden." },
      { id: "natwiss-ueb-kinematik-q9", question: "Aus der Ruhe beschleunigt: v₀ = 0, a = 5 m/s². Welche Geschwindigkeit nach t = 4 s?", options: ["40 m/s, bei falscher Multiplikation", "10 m/s, deutlich zu niedrig", "20 m/s", "5 m/s, ohne Berücksichtigung der Zeit"], correctIndex: 2, explanation: "Aus v = v₀ + a·t folgt mit v₀ = 0 direkt v = 5 m/s² · 4 s = 20 m/s. Die Zeit geht hier linear ein, nicht quadratisch wie beim zurückgelegten Weg." },
      { id: "natwiss-ueb-kinematik-q10", question: "Welche kinematische Gleichung gilt für den zurückgelegten Weg bei gleichmäßig beschleunigter Bewegung aus der Ruhe?", options: ["s = ½·a·t²", "s = a·t, ohne Zeitquadrat", "s = v²/a, eine andere kinematische Beziehung", "s = v·t, was konstante Geschwindigkeit voraussetzt"], correctIndex: 0, explanation: "Aus der allgemeinen Weg-Zeit-Gleichung s = v₀·t + ½·a·t² folgt für v₀ = 0 direkt s = ½·a·t². Die Formel s = v·t gilt dagegen nur bei konstanter Geschwindigkeit ohne Beschleunigung." }
    ]
  },
  {
    id: "natwiss-ueb-dynamik",
    chapter: 14,
    order: 2,
    title: "Übungsaufgaben: Dynamik und Kräfte",
    icon: "⚙️",
    summary: "Übungsaufgaben zu Newtonschen Gesetzen, Reibung, geneigter Ebene und Kreisbewegung.",
    explanation: [
      { type: "p", text: "Die Newtonschen Gesetze bilden die Grundlage der Dynamik. Das 2. Newtonsche Gesetz lautet:" },
      { type: "formula", tex: "\\vec{F}_{\\rm res} = m \\cdot \\vec{a}" },
      { type: "p", text: "Musterlösung Aufg. 12.1 (Kugel im Baumstumpf): Bremsverzögerung a = −v₀²/(2s). Kraft F = m·|a| = m·v₀²/(2s) = 1,8·10⁻³·500²/0,12 = 3750 N ≈ 3,8·10³ N (entgegen Fahrtrichtung)." },
      { type: "p", text: "Musterlösung Aufg. 12.3 (Aufzug): Die Schnur reißt bei F = 150 N. Mit F = m·(g+a) gilt a = F/m − g = 15 − 9,81 = 5,19 m/s²." },
      { type: "p", text: "Musterlösung Aufg. 12.5 (geneigte Ebene): Für Block 1 und 2 auf Neigung θ = 10°, Reibungskoeffizienten μ₁=0,3, μ₂=0,2:" },
      { type: "formula", tex: "a = g\\left[\\sin\\theta - \\frac{\\mu_1 m_1 + \\mu_2 m_2}{m_1+m_2}\\cos\\theta\\right] \\approx 0{,}96 \\; {\\rm m/s^2}" }
    ],
    exercises: [
      {
        id: "natwiss-ueb-dynamik-e1",
        prompt: "Eine Kugel (m = 1,8·10⁻³ kg, v₀ = 500 m/s) bohrt sich 6 cm in Holz. Berechnen Sie die Bremskraft.",
        solution: [{ type: "p", text: "a = −v₀²/(2s) = −500²/0,12 = −2,08·10⁶ m/s². F = m·|a| = 1,8·10⁻³·2,08·10⁶ ≈ 3750 N ≈ 3,8·10³ N." }]
      },
      {
        id: "natwiss-ueb-dynamik-e2",
        prompt: "Eine Schnur hält max. 150 N. Ein 10-kg-Block hängt daran in einem aufwärtsfahrenden Aufzug. Bei welcher Mindestbeschleunigung reißt sie?",
        solution: [{ type: "p", text: "F = m·(g+a) → a = F/m − g = 150/10 − 9,81 = 15 − 9,81 = 5,19 m/s²." }]
      },
      {
        id: "natwiss-ueb-dynamik-e3",
        prompt: "Zwei Blöcke (m₁=0,8 kg, m₂=0,25 kg, μ₁=0,3, μ₂=0,2) gleiten eine 10°-Ebene herab. Berechnen Sie die Beschleunigung.",
        solution: [{ type: "p", text: "a = g·[sin10° − (0,3·0,8 + 0,2·0,25)/(0,8+0,25)·cos10°] = 9,81·[0,1736 − (0,29/1,05)·0,9848] = 9,81·[0,1736 − 0,272] ≈ 0,96 m/s²." }]
      },
      {
        id: "natwiss-ueb-dynamik-e4",
        prompt: "Wie ändert sich die Eindringtiefe der Kugel aus Aufg. 1, wenn ihre Masse halbiert wird (gleiche Kraft, gleiche Anfangsgeschwindigkeit)?",
        solution: [{ type: "p", text: "s = m·v₀²/(2F). Bei m' = m/2: s' = m'·v₀²/(2F) = s/2 = 3 cm. Die Eindringtiefe halbiert sich." }]
      },
      {
        id: "natwiss-ueb-dynamik-e5",
        prompt: "Welcher Überhöhungswinkel θ ist für Kurvenfahrt bei v = 90 km/h, r = 160 m notwendig (keine Seitenreibung)?",
        solution: [{ type: "p", text: "v = 90/3,6 = 25 m/s. tan θ = v²/(r·g) = 625/(160·9,81) = 0,398. θ = arctan(0,398) ≈ 21,7°." }]
      }
    ],
    quiz: [
      { id: "natwiss-ueb-dynamik-q1", question: "Eine Kraft F wirkt auf eine Masse m. Was ist die Beschleunigung?", options: ["a = F/m", "a = F+m, als Summe statt Quotient", "a = F·m, als Produkt statt Quotient", "a = m/F, mit vertauschtem Zähler und Nenner"], correctIndex: 0, explanation: "Aus dem 2. Newtonschen Gesetz F = m·a folgt direkt a = F/m — eine größere Masse bei gleicher Kraft ergibt also eine kleinere Beschleunigung, nicht eine Addition oder Multiplikation der beiden Größen." },
      { id: "natwiss-ueb-dynamik-q2", question: "Ein Aufzug beschleunigt aufwärts. Was ist die scheinbare Gewichtskraft (Normalkraft) des Passagiers?", options: ["F_N = m(g−a), wie beim abwärts beschleunigenden Aufzug", "F_N = m(g+a)", "F_N = mg, wie im ruhenden Aufzug", "F_N = ma, ohne die Erdanziehung"], correctIndex: 1, explanation: "Aus F_N − mg = ma folgt F_N = m(g+a): Beim Aufwärtsbeschleunigen muss die Normalkraft sowohl das Gewicht als auch die zusätzliche Beschleunigung tragen, weshalb sich der Passagier schwerer fühlt. Beim Abwärtsbeschleunigen gilt stattdessen F_N = m(g−a)." },
      { id: "natwiss-ueb-dynamik-q3", question: "Welche Kraft ist nötig, um einen Körper der Masse m gleichförmig auf einer Kreisbahn mit Radius r und Geschwindigkeit v zu halten?", options: ["F = mv/r, ohne Quadrierung der Geschwindigkeit", "F = mgr/v, mit Erdbeschleunigung statt v²", "F = mv²/r", "F = m²v/r, mit fälschlich quadrierter Masse"], correctIndex: 2, explanation: "Die Zentripetalkraft F_zp = mv²/r = mω²r hält den Körper auf der Kreisbahn und zeigt stets zum Kreismittelpunkt. Entscheidend ist, dass die Geschwindigkeit quadratisch eingeht, nicht linear." },
      { id: "natwiss-ueb-dynamik-q4", question: "Auf einer geneigten Ebene (θ) zieht die Hangabtriebskraft einen Körper bergab. Wie lautet sie?", options: ["F = mg·sin θ", "F = mg·cos θ, was die Normalkraft-Komponente wäre", "F = mg/sin θ, mit falscher Verknüpfung", "F = mg·tan θ, mit falscher Winkelfunktion"], correctIndex: 0, explanation: "Die Schwerkraft mg zerlegt sich auf der geneigten Ebene in eine Komponente parallel zur Ebene (Hangabtriebskraft F_H = mg·sin θ) und eine senkrecht dazu (Normalkraft-Komponente mg·cos θ). Nur der sin-θ-Anteil treibt den Körper bergab." },
      { id: "natwiss-ueb-dynamik-q5", question: "Ein Block rutscht auf einer horizontalen Fläche (μ = 0,3). Wie groß ist die Reibungskraft bei m = 5 kg?", options: ["1,5 N, ohne Berücksichtigung von g", "3 N, ohne Multiplikation mit g", "50 N, mit falsch gerundetem g", "14,7 N"], correctIndex: 3, explanation: "Auf horizontaler Fläche entspricht die Normalkraft dem Gewicht, F_N = mg, sodass die Reibungskraft F_R = μ·mg = 0,3·5·9,81 ≈ 14,7 N beträgt. Ohne die Erdbeschleunigung g im Ausdruck würde man fälschlich nur μ·m berechnen." },
      { id: "natwiss-ueb-dynamik-q6", question: "Das 3. Newtonsche Gesetz (actio = reactio) besagt:", options: ["Kraft ist gleich Masse mal Beschleunigung", "Kräfte wirken stets in Richtung der resultierenden Beschleunigung", "Ein Körper bleibt in Ruhe, solange keine Kraft wirkt", "Zu jeder Kraft gibt es eine gleich große, entgegengesetzte Gegenkraft auf den anderen Körper"], correctIndex: 3, explanation: "Das 3. Newtonsche Gesetz beschreibt Kraftpaare zwischen zwei Körpern: Actio und Reactio sind gleich groß, entgegengesetzt gerichtet und wirken jeweils auf den anderen Körper, nicht auf denselben. Die anderen Optionen beschreiben stattdessen das 2. bzw. 1. Newtonsche Gesetz." },
      { id: "natwiss-ueb-dynamik-q7", question: "Welche Bedingung gilt für einen Körper im Kräftegleichgewicht?", options: ["ΣF = m, als fehlerhafte Gleichsetzung", "ΣF ≠ 0, was gerade kein Gleichgewicht wäre", "ΣF = 0", "a ≠ 0, was Beschleunigung bedeuten würde"], correctIndex: 2, explanation: "Kräftegleichgewicht bedeutet, dass sich alle angreifenden Kräfte zu null summieren, ΣF = 0, woraus nach F = ma zwingend a = 0 folgt. Der Körper bleibt dann entweder in Ruhe oder bewegt sich gleichförmig geradlinig weiter." },
      { id: "natwiss-ueb-dynamik-q8", question: "Für eine Kurvenüberhöhung gilt tan θ = v²/(rg). Was passiert, wenn die Kurve für diese Geschwindigkeit ausgelegt ist?", options: ["Es tritt trotzdem zusätzliche Seitenreibung auf", "Die Normalkraft wird in diesem Fall null", "Keine Seitenreibungskraft ist nötig", "Der Wagen hebt von der Fahrbahn ab"], correctIndex: 2, explanation: "Bei exakt der Auslegungsgeschwindigkeit liefert allein die geneigte Normalkraft die volle benötigte Zentripetalkraft, sodass keine zusätzliche Seitenreibung erforderlich ist. Weder verschwindet die Normalkraft, noch hebt der Wagen ab — beides würde dem Zweck der Überhöhung widersprechen." },
      { id: "natwiss-ueb-dynamik-q9", question: "Eine Kugel dringt mit a = 2·10⁶ m/s² in ein Medium ein. Wie viel g-Beschleunigung ist das (g ≈ 10 m/s²)?", options: ["200 g, um zwei Zehnerpotenzen zu niedrig", "200 000 g", "2000 g, um eine Zehnerpotenz zu niedrig", "20 000 g, um eine Zehnerpotenz zu niedrig"], correctIndex: 1, explanation: "Das Verhältnis a/g = 2·10⁶/10 = 2·10⁵ = 200 000 zeigt, dass die Kugel eine 200 000-fache Erdbeschleunigung erfährt — eine extreme, aber für Aufprallvorgänge typische Größenordnung. Rechenfehler bei den Zehnerpotenzen führen leicht zu den anderen, jeweils zu kleinen Werten." },
      { id: "natwiss-ueb-dynamik-q10", question: "Hängt ein Block über eine masselose Rolle (Atwood-Maschine), was gilt für die Seilzugkraft?", options: ["F_S = (m₁+m₂)·g/2, ein einfacher Mittelwert", "F_S liegt zwischen m₁g und m₂g", "F_S = (m₁−m₂)·g, als reine Kraftdifferenz", "F_S entspricht immer genau m₁·g"], correctIndex: 1, explanation: "Die exakte Seilzugkraft der Atwood-Maschine ist F_S = 2m₁m₂g/(m₁+m₂), ein Wert, der stets zwischen den beiden Einzelgewichtskräften m₁g und m₂g liegt, da das System durch die ungleichen Massen beschleunigt statt im Gleichgewicht verharrt. Eine einfache Mittelwertbildung oder reine Differenzbildung träfe diesen Wert nicht exakt." }
    ]
  },
  {
    id: "natwiss-ueb-energie-rotation",
    chapter: 14,
    order: 3,
    title: "Übungsaufgaben: Energie, Impuls und Rotation",
    icon: "🌀",
    summary: "Übungsaufgaben zu Energieerhaltung, Impulserhaltung, Stoßprozessen und Rotationsdynamik.",
    explanation: [
      { type: "p", text: "Energieerhaltung: Im konservativen System bleibt E_kin + E_pot = const." },
      { type: "formula", tex: "\\tfrac{1}{2}mv_1^2 + mgh_1 = \\tfrac{1}{2}mv_2^2 + mgh_2" },
      { type: "p", text: "Musterlösung Aufg. 13.1 (ortsabhängige Kraft):" },
      { type: "formula", tex: "W = -\\int_{3{,}0}^{1{,}5} C x^3 \\, dx = -\\frac{C}{4}[x^4]_{3}^{1{,}5} = 9{,}5 \\; {\\rm J}" },
      { type: "p", text: "Musterlösung Aufg. 14.1 (Rad, α = 2,6 rad/s²):" },
      { type: "list", items: [
        "ω(t) = α·t = 2,6·6 = 15,6 rad/s (oder je nach Aufgabenversion 75,6 rad/s)",
        "θ = ½·α·t² = ½·2,6·36 = 47 rad = 7,4 Umdrehungen",
        "v = r·ω = 0,30·15,6 = 4,68 m/s (Tangentialgeschwindigkeit)"
      ]},
      { type: "p", text: "Keppler-Gesetze (Aufg. 14.5): Drehimpulserhaltung → m·r₁·v₁ = m·r₂·v₂ → v₁/v₂ = r₂/r₁." }
    ],
    exercises: [
      {
        id: "natwiss-ueb-energie-e1",
        prompt: "Eine Kraft F = C·x³ mit C = 0,5 N/m³ wirkt auf ein Teilchen. Berechnen Sie die Arbeit beim Weg von x = 3,0 m nach x = 1,5 m.",
        solution: [{ type: "p", text: "W = −∫_{3,0}^{1,5} C·x³ dx = −(C/4)·[x⁴]_{3}^{1,5} = −(0,5/4)·[(1,5)⁴ − (3,0)⁴] = −0,125·[5,0625 − 81] = 9,49 J." }]
      },
      {
        id: "natwiss-ueb-energie-e2",
        prompt: "Ein Rad dreht sich mit α = 2,6 rad/s². Welche Winkelgeschwindigkeit und welchen Drehwinkel hat es nach t = 6 s?",
        solution: [{ type: "p", text: "ω = α·t = 2,6·6 = 15,6 rad/s. θ = ½·α·t² = ½·2,6·36 = 46,8 rad ≈ 47 rad = 7,4 Umdrehungen." }]
      },
      {
        id: "natwiss-ueb-energie-e3",
        prompt: "Ein Planet hat im Perihel r₁ = 1 AE und v₁ = 30 km/s. Im Aphel r₂ = 1,5 AE. Wie groß ist v₂?",
        solution: [{ type: "p", text: "Drehimpulserhaltung: m·r₁·v₁ = m·r₂·v₂. v₂ = v₁·(r₁/r₂) = 30·(1/1,5) = 20 km/s." }]
      },
      {
        id: "natwiss-ueb-energie-e4",
        prompt: "Ein Achterbahnwagen (m = 1500 kg) startet aus 23 m Höhe aus der Ruhe. Im Looping-Scheitelpunkt (Durchmesser 15 m, also h = 15 m). Welche Normalkraft wirken die Schienen auf den Wagen?",
        solution: [{ type: "p", text: "v² = 2g(h_start − h_top) = 2·9,81·(23−15) = 156,96 m²/s². Zentripetalkraft + Gewicht: F_N + mg = mv²/r = 1500·156,96/7,5 = 31 392 N. F_N = 31 392 − 1500·9,81 = 31 392 − 14 715 = 16 677 N ≈ 16,7 kN." }]
      },
      {
        id: "natwiss-ueb-energie-e5",
        prompt: "⁸Be (ruhend) zerfällt in 2 α-Teilchen (m = 6,64·10⁻²⁷ kg). Freigesetzte Energie: 1,5·10⁻¹⁴ J. Wie schnell sind die α-Teilchen?",
        solution: [{ type: "p", text: "Impulserhaltung: die α-Teilchen fliegen mit gleicher Geschwindigkeit entgegengesetzt. 2×½mv² = E_frei → v = √(E_frei/m) = √(1,5·10⁻¹⁴/6,64·10⁻²⁷) = √(2,26·10¹²) ≈ 1,5·10⁶ m/s." }]
      }
    ],
    quiz: [
      { id: "natwiss-ueb-energie-q1", question: "Ein Körper fällt aus h = 10 m. Welche Geschwindigkeit hat er am Boden (g = 10 m/s²)?", options: ["20 m/s, ohne Wurzelziehen", "10 m/s, gleich der Fallhöhe in m/s", "100 m/s, ohne Wurzelziehen aus 2gh", "14,1 m/s"], correctIndex: 3, explanation: "Aus Energieerhaltung mgh = ½mv² folgt v = √(2gh) = √(2·10·10) = √200 ≈ 14,1 m/s. Die Wurzel darf dabei nicht vergessen werden — 2gh selbst (= 200) ist nur das Quadrat der gesuchten Geschwindigkeit." },
      { id: "natwiss-ueb-energie-q2", question: "Was ist das Trägheitsmoment einer dünnen Scheibe (Masse m, Radius R) bzgl. der Symmetrieachse?", options: ["J = ½mR²", "J = mR²/4, wie bei einem dünnen Stab", "J = mR², wie bei einem dünnen Ring", "J = 2mR²/3, wie bei einer Hohlkugel"], correctIndex: 0, explanation: "Für eine massive Scheibe bzw. einen Vollzylinder gilt J = ½mR², weil die Masse über den gesamten Radius verteilt ist, nicht nur am Rand konzentriert. Ein dünner Ring hätte dagegen J = mR², da dort die gesamte Masse am Rand sitzt." },
      { id: "natwiss-ueb-energie-q3", question: "Wie lautet der Steinersche Satz (Parallelachsensatz)?", options: ["J = J_S / md², als Division statt Addition", "J = J_S − md², mit falschem Vorzeichen", "J = J_S + md²", "J = J_S · md, als Produkt statt Summe"], correctIndex: 2, explanation: "Der Steinersche Satz J = J_S + md² verschiebt das Trägheitsmoment von der Schwerpunktachse J_S auf eine parallele Achse im Abstand d, wobei stets ein positiver Zusatzterm md² addiert wird — das Trägheitsmoment um eine Achse abseits des Schwerpunkts ist also immer größer als J_S selbst." },
      { id: "natwiss-ueb-energie-q4", question: "Drehimpulserhaltung gilt, wenn das äußere Drehmoment ...", options: ["null ist", "einen konstanten, von null verschiedenen Wert hat", "gleich 1 (in beliebigen Einheiten) ist", "positiv ist"], correctIndex: 0, explanation: "Aus dL/dt = M folgt: Nur wenn das äußere Drehmoment M exakt null ist, bleibt dL/dt = 0 und damit der Drehimpuls L konstant. Ein konstantes, aber von null verschiedenes Drehmoment würde L weiterhin gleichmäßig ändern, keine Erhaltung bewirken." },
      { id: "natwiss-ueb-energie-q5", question: "Was gilt beim vollkommen elastischen Stoß zwischen zwei gleichen Massen, wenn eine ruht?", options: ["Beide Massen werden nach dem Stoß vollständig gestoppt", "Die stoßende Masse bleibt stehen, die ruhende übernimmt die Geschwindigkeit", "Es gilt in diesem Fall keine Energieerhaltung", "Beide Massen bewegen sich anschließend gemeinsam weiter"], correctIndex: 1, explanation: "Beim elastischen Stoß gleicher Massen, von denen eine ruht, übertragen sich Impuls und kinetische Energie vollständig: Die stoßende Kugel kommt zur Ruhe, die zuvor ruhende übernimmt die gesamte Geschwindigkeit — das klassische Billardkugel-Phänomen. Ein gemeinsames Weiterbewegen beider Massen wäre dagegen typisch für einen vollkommen unelastischen Stoß." },
      { id: "natwiss-ueb-energie-q6", question: "Was ist die rotatorische kinetische Energie?", options: ["E_rot = ½mv², die Formel der Translationsenergie", "E_rot = ½Jω²", "E_rot = Jω, ohne den Faktor ½ und ohne Quadrat", "E_rot = mω²r, eine andere physikalische Größe"], correctIndex: 1, explanation: "Analog zur Translationsenergie E_kin = ½mv² ersetzt man bei der Rotation Masse durch Trägheitsmoment J und Geschwindigkeit durch Winkelgeschwindigkeit ω: E_rot = ½Jω². Diese Analogie funktioniert durchgängig, solange man die richtigen rotatorischen Gegenstücke verwendet." },
      { id: "natwiss-ueb-energie-q7", question: "Eine Kraft F = C·x² wirkt ortsabhängig. Was ist die Arbeit von x₁ nach x₂?", options: ["W = C(x₂²−x₁²)/2, als wäre F linear in x", "W = C(x₂³−x₁³)/3", "W = C(x₂−x₁), als wäre F konstant", "W = C·x₂, ohne Integration überhaupt"], correctIndex: 1, explanation: "Die Arbeit ergibt sich aus dem Integral W = ∫F dx = ∫C·x² dx = C·x³/3, ausgewertet zwischen x₁ und x₂. Da F selbst quadratisch von x abhängt, muss auch beim Integrieren eine Potenz hinzukommen — eine bloße Differenz oder ein konstanter Faktor würde die Ortsabhängigkeit der Kraft ignorieren." },
      { id: "natwiss-ueb-energie-q8", question: "Was besagt der Impulserhaltungssatz?", options: ["Der Impuls p = mv ist grundsätzlich immer null", "Der Impuls erhöht sich automatisch durch Reibung", "Der Gesamtimpuls eines abgeschlossenen Systems bleibt konstant", "Impuls ist prinzipiell keine erhaltbare Größe"], correctIndex: 2, explanation: "In einem abgeschlossenen System ohne äußere Kräfte bleibt der Gesamtimpuls Σp konstant, auch wenn sich Impuls zwischen den beteiligten Körpern umverteilt (z. B. bei Stößen). Reibung ist gerade eine äußere Kraft, die Impuls aus dem System abführen kann, nicht ihn automatisch erhöhen." },
      { id: "natwiss-ueb-energie-q9", question: "Bei einem Looping (Radius r) muss die Minimalgeschwindigkeit am Scheitelpunkt v_min betragen:", options: ["v_min = √(2gr), mit zusätzlichem Faktor 2", "v_min = √(g/r), mit vertauschtem Zähler und Nenner", "v_min = 0, als triviale Untergrenze", "v_min = √(gr)"], correctIndex: 3, explanation: "Am Scheitelpunkt liefern Gewichtskraft und Normalkraft gemeinsam die Zentripetalkraft. Im Grenzfall F_N = 0 gilt mv²/r = mg, woraus v_min = √(gr) folgt — sinkt die Geschwindigkeit darunter, verliert der Wagen den Kontakt zur Schiene, bevor er den Scheitelpunkt erreicht." },
      { id: "natwiss-ueb-energie-q10", question: "Beim Drehimpulserhaltungssatz eines Planeten: Im Perihel (kleinster Abstand r₁) ist die Geschwindigkeit ...", options: ["identisch mit der Geschwindigkeit im Aphel", "am kleinsten entlang der gesamten Bahn", "in diesem Bahnpunkt exakt null", "am größten entlang der gesamten Bahn"], correctIndex: 3, explanation: "Aus der Drehimpulserhaltung L = m·r·v = const folgt, dass bei kleinstem Abstand r₁ (Perihel) die Geschwindigkeit v₁ am größten sein muss, damit das Produkt r·v konstant bleibt — das ist gerade das 2. Keplersche Gesetz. Im Aphel, wo r am größten ist, ist die Geschwindigkeit entsprechend am kleinsten." }
    ]
  }
];
