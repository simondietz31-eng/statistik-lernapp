const FINV_CHAPTER7_TOPICS = [
  {
    id: "finv-lineare-verzinsung-grundlagen",
    chapter: 7,
    order: 1,
    title: "Lineare Verzinsung — Grundformel und Zeitwerte",
    icon: "📏",
    summary: "Die Grundformel der linearen (einfachen) Verzinsung ohne Zinseszins, und wie sich daraus Zeitwerte für beliebige Laufzeiten berechnen lassen.",
    explanation: [
      { type: "p", text: "Lineare (einfache) Verzinsung bedeutet Verzinsung ohne Zinseszins — die Zinsen selbst werden nicht mitverzinst. In der Praxis wird die lineare Verzinsung meist nur für unterjährige Zeiträume (0 < t < 1, also innerhalb eines Jahres) angewendet." },
      { type: "formula", tex: "\\text{Zinsen} = K_0 \\cdot i \\cdot t = K_0 \\cdot i \\cdot \\dfrac{\\text{Tage}}{360}" },
      { type: "p", text: "Dabei ist K₀ das Anfangskapital, i der Jahreszinssatz (z. B. 3 % = 0,03) und t die Zeit als Vielfaches eines Jahres (z. B. ½ Jahr oder 165/360 Jahr). In der Praxis wird häufig mit 360 Tagen pro Jahr gerechnet (kaufmännische Zinsmethode)." },
      { type: "p", text: "Der Zeitwert (Endkapital) nach n vollen Jahren bzw. t Zeiteinheiten bei linearer Verzinsung:" },
      { type: "formula", tex: "K_n = K_0 \\cdot (1 + n \\cdot i) \\quad \\text{bzw.} \\quad K_t = K_0 \\cdot (1 + t \\cdot i)" },
      { type: "p", text: "Diese Formel lässt sich nach jedem der vier Parameter (K₀, i, t, Kₙ bzw. Kₜ) umstellen — je nachdem, welche Größe gesucht ist." },
      { type: "p", text: "Musterbeispiel (Zinsberechnung): 3.500 € werden 165 Tage lang zu 3,25 % p.a. angelegt. Zinsen = 3.500 · 0,0325 · 165/360 ≈ 52,14 €." },
      { type: "p", text: "Musterbeispiel (Zinssatz gesucht): Ein Kredit über 1,68 Mio. € kostet für 60 Tage 25.200 €. Gesucht ist der lineare Zinssatz: 25.200 = 1.680.000 · i · 60/360 → i = 25.200 / (1.680.000 · 60/360) = 25.200 / 280.000 = 0,09 = 9 % p.a." }
    ],
    exercises: [
      {
        id: "finv-lineare-verzinsung-grundlagen-e1",
        prompt: "3.500 € werden 165 Tage lang zu 3,25 % p.a. linear verzinst angelegt. Berechnen Sie die Zinsen.",
        solution: [{ type: "p", text: "Zinsen = K₀·i·(Tage/360) = 3.500 · 0,0325 · (165/360) = 3.500 · 0,0325 · 0,4583 ≈ 52,14 €." }]
      },
      {
        id: "finv-lineare-verzinsung-grundlagen-e2",
        prompt: "Wie hoch ist ein Kredit K₀, für den in einem halben Jahr bei 4 % Jahreszins 657,44 € Zinsen gezahlt werden müssen?",
        solution: [{ type: "p", text: "Zinsen = K₀·i·½ → 657,44 = K₀ · 0,04 · 0,5 → K₀ = 657,44 / 0,02 = 32.872 €." }]
      },
      {
        id: "finv-lineare-verzinsung-grundlagen-e3",
        prompt: "Ein Wertpapier über 5.000 € mit einem Kupon (Zins) von 6,25 % p.a. wird mit Stückzinsen von 36,46 € gehandelt. Wie viele Zinstage wurden dabei berechnet?",
        solution: [{ type: "p", text: "Zinsen = K₀·i·(Tage/360) → 36,46 = 5.000 · 0,0625 · (Tage/360) → Tage = 36,46 / (5.000·0,0625/360) = 36,46 / 0,8681 ≈ 42 Tage." }]
      },
      {
        id: "finv-lineare-verzinsung-grundlagen-e4",
        prompt: "Anna nimmt einen Kredit über 1,68 Mio. € für 60 Tage auf, der 25.200 € kostet. Welcher lineare Jahreszinssatz wurde angesetzt?",
        solution: [{ type: "p", text: "25.200 = 1.680.000 · i · (60/360) → i = 25.200 / (1.680.000 · 60/360) = 25.200 / 280.000 = 0,09 = 9 % p.a." }]
      },
      {
        id: "finv-lineare-verzinsung-grundlagen-e5",
        prompt: "Tom hat 2.000 € geschenkt bekommen und legt den Betrag für 2,5 Jahre bei 3 % linearer Verzinsung an. Welchen Betrag bekommt er am Ende?",
        solution: [{ type: "p", text: "K_n = K₀·(1+n·i) = 2.000 · (1 + 2,5·0,03) = 2.000 · 1,075 = 2.150 €." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie lautet die Grundformel für die Zinsen bei linearer Verzinsung?", options: ["Zinsen = i / (K₀·t)", "Zinsen = K₀ · i · t", "Zinsen = K₀ + i + t", "Zinsen = K₀ / (i·t)"], correctIndex: 1, explanation: "Zinsen = K₀·i·t (bei Tagesrechnung: K₀·i·Tage/360)." },
      { id: "q2", question: "Für welchen Zeitraum wird lineare Verzinsung in der Praxis typischerweise angewendet?", options: ["Für unterjährige Zeiträume (0 < t < 1)", "Nie in der Praxis", "Nur für Laufzeiten über 10 Jahre", "Nur für ganzzahlige Jahre"], correctIndex: 0, explanation: "Lineare Verzinsung wird in der Praxis überwiegend für unterjährige Zeiträume verwendet." },
      { id: "q3", question: "Wie lautet die Formel für den Endwert Kₙ bei linearer Verzinsung?", options: ["Kₙ = K₀ · (1+i)ⁿ", "Kₙ = K₀ · (1 + n·i)", "Kₙ = K₀ · n · i", "Kₙ = K₀ / (1+n·i)"], correctIndex: 1, explanation: "Bei linearer Verzinsung gilt Kₙ = K₀·(1+n·i), nicht die geometrische Formel mit Exponent." },
      { id: "q4", question: "Mit wie vielen Tagen pro Jahr wird bei der kaufmännischen Zinsmethode i. d. R. gerechnet?", options: ["360 Tagen", "300 Tagen", "365 Tagen", "366 Tagen"], correctIndex: 0, explanation: "In der Praxis wird häufig mit 360 Tagen pro Jahr gerechnet (kaufmännische/deutsche Zinsmethode)." },
      { id: "q5", question: "3.000 € werden 90 Tage zu 4 % p.a. linear angelegt. Wie hoch sind die Zinsen?", options: ["30 €", "120 €", "40 €", "300 €"], correctIndex: 0, explanation: "Zinsen = 3.000·0,04·(90/360) = 3.000·0,04·0,25 = 30 €." },
      { id: "q6", question: "Welche Größe lässt sich NICHT direkt aus der Formel Kₙ = K₀·(1+n·i) berechnen?", options: ["Der Barwert K₀", "Der Zinssatz i", "Die Laufzeit n", "Der Aktienkurs am Bilanzstichtag"], correctIndex: 3, explanation: "Die Formel bezieht sich ausschließlich auf K₀, i, n und Kₙ — der Aktienkurs ist damit nicht berechenbar." },
      { id: "q7", question: "Ein Kredit über 500.000 € kostet für 30 Tage 2.500 € Zinsen. Wie hoch ist der lineare Jahreszinssatz?", options: ["3 %", "5 %", "10 %", "6 %"], correctIndex: 3, explanation: "i = Zinsen/(K₀·Tage/360) = 2.500/(500.000·30/360) = 2.500/41.666,67 = 0,06 = 6 %." },
      { id: "q8", question: "Was passiert bei linearer Verzinsung mit bereits angefallenen Zinsen im Vergleich zur Zinseszinsrechnung?", options: ["Sie werden ebenfalls verzinst wie beim Zinseszins", "Sie werden verdoppelt", "Sie werden NICHT mitverzinst — kein Zinseszins", "Sie verschwinden vollständig"], correctIndex: 2, explanation: "Der zentrale Unterschied zur Zinseszinsrechnung: bei linearer Verzinsung werden Zinsen nicht mitverzinst." },
      { id: "q9", question: "K₀ = 10.000 €, i = 5 %, n = 3 Jahre (linear). Wie hoch ist Kₙ?", options: ["11.576,25 €", "10.500 €", "11.500 €", "15.000 €"], correctIndex: 2, explanation: "Kₙ = 10.000·(1+3·0,05) = 10.000·1,15 = 11.500 € (lineare, nicht geometrische Verzinsung!)." },
      { id: "q10", question: "Warum ist die Formel Kₙ = K₀·(1+n·i) für sehr lange Laufzeiten (viele Jahre) unrealistisch bzw. unüblich?", options: ["Weil die Formel mathematisch falsch ist", "Weil in der Praxis über mehrjährige Laufzeiten Zinseszins-Effekte relevant werden, weshalb dann meist die Zinseszinsrechnung verwendet wird", "Weil sie nur für Aktien gilt", "Weil sie nur für negative Zinssätze gilt"], correctIndex: 1, explanation: "Für Laufzeiten über 1 Jahr wird in der Praxis i. d. R. mit Zinseszins (geometrischer Verzinsung, Kapitel 8) gerechnet." }
    ]
  },
  {
    id: "finv-barwertvergleich-linear",
    chapter: 7,
    order: 2,
    title: "Barwertvergleich von Zahlungsalternativen",
    icon: "⚖️",
    summary: "Wie man zwei Zahlungsalternativen mit unterschiedlichen Fälligkeiten und Beträgen über Bar- oder Endwertvergleich fair vergleicht, und wie man den Gleichgewichtszins berechnet.",
    explanation: [
      { type: "p", text: "Sollen zwei Zahlungsalternativen mit unterschiedlichen Beträgen und Fälligkeitszeitpunkten verglichen werden, zinst man beide auf einen gemeinsamen Zeitpunkt ab bzw. auf — meist wird der Barwertvergleich als Standard verwendet." },
      { type: "p", text: "Musterbeispiel (Einkauf von Gastronomie-Equipment): Alternative 1 kostet 4.500 € nach 30 Tagen, Alternative 2 kostet 4.542,50 € nach 90 Tagen. Bei 6 % Verzinsung:" },
      { type: "formula", tex: "K_0^{(1)} = \\dfrac{4500}{1 + \\frac{30}{360}\\cdot 0{,}06} \\approx 4477{,}61 \\; €, \\quad K_0^{(2)} = \\dfrac{4542{,}5}{1 + \\frac{90}{360}\\cdot 0{,}06} \\approx 4475{,}37 \\; €" },
      { type: "p", text: "Da der Barwert von Alternative 2 (4.475,37 €) niedriger ist als der von Alternative 1 (4.477,61 €), ist Alternative 2 bei 6 % Verzinsung günstiger — obwohl der Nominalbetrag höher ist, weil man den Vorteil hat, erst später zu zahlen." },
      { type: "p", text: "Gleichwertigkeit der Alternativen bedeutet, dass ihre Barwerte (oder Endwerte) bei einem bestimmten Zinssatz identisch sind. Diesen Gleichgewichtszins findet man, indem man beide Barwertformeln gleichsetzt und nach i auflöst:" },
      { type: "formula", tex: "\\dfrac{K_{30}}{1+\\frac{30}{360}i} = \\dfrac{K_{90}}{1+\\frac{90}{360}i} \\quad \\Rightarrow \\quad i = \\dfrac{K_{30}-K_{90}}{K_{90}\\cdot\\frac{30}{360} - K_{30}\\cdot\\frac{90}{360}}" },
      { type: "p", text: "Für das Beispiel ergibt sich ein Gleichgewichtszins von ca. 5,69 % — bei diesem Zins wären beide Zahlungsalternativen wertgleich." }
    ],
    exercises: [
      {
        id: "finv-barwertvergleich-linear-e1",
        prompt: "Berechnen Sie den Barwert von Alternative 1 (4.500 € nach 30 Tagen) bei 6 % linearer Verzinsung.",
        solution: [{ type: "p", text: "K₀ = 4.500 / (1 + (30/360)·0,06) = 4.500 / (1 + 0,005) = 4.500 / 1,005 ≈ 4.477,61 €." }]
      },
      {
        id: "finv-barwertvergleich-linear-e2",
        prompt: "Berechnen Sie den Barwert von Alternative 2 (4.542,50 € nach 90 Tagen) bei 6 % linearer Verzinsung, und entscheiden Sie, welche Alternative günstiger ist.",
        solution: [{ type: "p", text: "K₀ = 4.542,50 / (1 + (90/360)·0,06) = 4.542,50 / (1 + 0,015) = 4.542,50 / 1,015 ≈ 4.475,37 €. Da dieser Barwert (4.475,37 €) niedriger ist als der von Alternative 1 (4.477,61 €), ist Alternative 2 die günstigere (billigere) Option." }]
      },
      {
        id: "finv-barwertvergleich-linear-e3",
        prompt: "Bestätigen Sie das Ergebnis aus Aufgabe 2 alternativ über einen Endwertvergleich auf Tag 90 (statt Barwert auf Tag 0).",
        solution: [{ type: "p", text: "Endwert Alternative 1 auf Tag 90 (60 Tage Zinsen ab Tag 30): 4.500 · (1 + (60/360)·0,06) = 4.500 · 1,01 = 4.545,00 €. Endwert Alternative 2 auf Tag 90: einfach 4.542,50 € (bereits am Fälligkeitstag). Da 4.542,50 € < 4.545,00 €, ist Alternative 2 auch im Endwertvergleich günstiger — das Ergebnis stimmt mit dem Barwertvergleich überein." }]
      },
      {
        id: "finv-barwertvergleich-linear-e4",
        prompt: "Bei welchem Zinssatz sind die beiden Alternativen aus dem Gastronomie-Equipment-Beispiel (4.500 € nach 30 Tagen vs. 4.542,50 € nach 90 Tagen) exakt gleichwertig?",
        solution: [{ type: "p", text: "Gleichsetzen der Barwerte und Auflösen nach i (siehe Formel) ergibt i ≈ 5,69 %. Bei diesem Zinssatz führen beide Zahlungsalternativen zum selben Barwert — unterhalb dieses Zinssatzes ist Alternative 1 günstiger, oberhalb ist Alternative 2 günstiger." }]
      },
      {
        id: "finv-barwertvergleich-linear-e5",
        prompt: "Warum ist es für das Ergebnis eines Barwertvergleichs unerheblich, ob man Alternative 1 oder Alternative 2 als Bezugspunkt für den Vergleichszeitpunkt wählt (solange beide Alternativen konsistent auf denselben Zeitpunkt bezogen werden)?",
        solution: [{ type: "p", text: "Solange beide Alternativen konsistent auf denselben Zeitpunkt (egal ob Tag 0, Tag 30, Tag 90 oder ein beliebiger anderer Zeitpunkt) ab- bzw. aufgezinst werden, bleibt das relative Verhältnis zwischen den beiden umgerechneten Werten unverändert — die Frage, welche Alternative den kleineren (günstigeren) bzw. größeren (vorteilhafteren) umgerechneten Wert hat, führt unabhängig vom gewählten Bezugszeitpunkt zum selben Ergebnis. Nur die absolute Höhe der verglichenen Werte ändert sich je nach gewähltem Zeitpunkt, nicht aber die Rangfolge der Alternativen." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie werden zwei Zahlungsalternativen mit unterschiedlicher Fälligkeit korrekt verglichen?", options: ["Durch Ab-/Aufzinsung auf einen gemeinsamen Zeitpunkt", "Nur durch den höheren Betrag, unabhängig von der Frist", "Durch direkten Vergleich der Nominalbeträge", "Gar nicht, ein Vergleich ist unmöglich"], correctIndex: 0, explanation: "Nur nach Umrechnung auf einen gemeinsamen Zeitpunkt sind die Alternativen fair vergleichbar." },
      { id: "q2", question: "Bei einem Barwertvergleich: Welche Alternative ist bei sonst gleichen Voraussetzungen vorteilhafter (günstiger für den Zahler)?", options: ["Die Alternative mit dem höheren Barwert", "Die Alternative mit dem niedrigeren Barwert", "Barwerte sagen nichts über Vorteilhaftigkeit aus", "Immer die nominal höhere Zahlung"], correctIndex: 1, explanation: "Für den Zahler ist die Alternative mit dem niedrigeren Barwert (geringere heutige Kostenbelastung) günstiger." },
      { id: "q3", question: "Was bedeutet 'gleichwertige Alternativen' im Kontext des Barwertvergleichs?", options: ["Beide haben exakt denselben Nominalbetrag", "Sie stammen vom selben Anbieter", "Sie haben dieselbe Laufzeit", "Ihre Barwerte (bzw. Endwerte) sind beim betrachteten Zinssatz identisch"], correctIndex: 3, explanation: "Gleichwertigkeit bedeutet identische Barwerte (bzw. äquivalent: identische Endwerte) bei einem bestimmten Zinssatz." },
      { id: "q4", question: "Im Gastronomie-Equipment-Beispiel: Welche Alternative ist bei 6 % Verzinsung günstiger?", options: ["Beide sind exakt gleich teuer", "Alternative 1 (4.500 € nach 30 Tagen)", "Das lässt sich ohne mehr Daten nicht bestimmen", "Alternative 2 (4.542,50 € nach 90 Tagen)"], correctIndex: 3, explanation: "Bei 6 % ist der Barwert von Alternative 2 (≈4.475,37 €) niedriger als der von Alternative 1 (≈4.477,61 €)." },
      { id: "q5", question: "Wie hoch ist ungefähr der Gleichgewichtszins im Gastronomie-Equipment-Beispiel?", options: ["10 %", "15 %", "5,69 %", "1,5 %"], correctIndex: 2, explanation: "Der Zinssatz, bei dem beide Alternativen wertgleich sind, beträgt ca. 5,69 %." },
      { id: "q6", question: "Was passiert, wenn der tatsächliche Zinssatz UNTER dem Gleichgewichtszins liegt (im Gastronomie-Beispiel)?", options: ["Alternative 2 bleibt immer günstiger, unabhängig vom Zins", "Es lässt sich nichts dazu sagen", "Alternative 1 wird günstiger", "Beide werden automatisch gleich teuer"], correctIndex: 2, explanation: "Unterhalb des Gleichgewichtszinses (5,69 %) kehrt sich die Vorteilhaftigkeit um — Alternative 1 wird dann günstiger." },
      { id: "q7", question: "Warum ist ein Endwertvergleich zum selben Ergebnis wie ein Barwertvergleich gekommen (im Beispiel)?", options: ["Das war reiner Zufall in diesem Beispiel", "Weil hier zufällig kein Zins verwendet wurde", "Weil beide Verfahren bei konsistenter Anwendung mathematisch äquivalent sind", "Endwertvergleiche sind grundsätzlich unzulässig"], correctIndex: 2, explanation: "Bar- und Endwertvergleich sind bei gleichem Zinssatz und konsistentem Bezugszeitpunkt mathematisch äquivalent." },
      { id: "q8", question: "Welche Formel nutzt man, um den Gleichgewichtszins zwischen zwei Zahlungsalternativen zu bestimmen?", options: ["Der Gleichgewichtszins ist immer 0 %", "Man addiert einfach beide Nominalbeträge", "Man verwendet ausschließlich die Zinseszinsformel", "Man setzt die beiden Barwertformeln gleich und löst nach i auf"], correctIndex: 3, explanation: "Durch Gleichsetzen der Barwertformeln beider Alternativen und Auflösen nach i erhält man den Gleichgewichtszins." },
      { id: "q9", question: "Zwei Zahlungsalternativen: A = 1.000 € nach 60 Tagen, B = 1.010 € nach 120 Tagen. Bei sehr hohem Zinssatz — welche Tendenz zeigt sich für die Vorteilhaftigkeit von B (spätere, aber höhere Zahlung)?", options: ["B wird bei hohem Zins tendenziell relativ günstiger, da der spätere Zeitpunkt bei hohem Zins stärker 'entlastet'", "A wird bei jedem Zinssatz immer günstiger bleiben", "Der Zinssatz hat überhaupt keinen Einfluss auf die Vorteilhaftigkeit", "B wird bei hohem Zins immer automatisch ungünstiger"], correctIndex: 0, explanation: "Je höher der Zins, desto stärker wird eine spätere Zahlung abgezinst — bei ausreichend hohem Zins kann die später fällige, nominal etwas höhere Zahlung B relativ günstiger werden." },
      { id: "q10", question: "Was ist der Standardansatz zum Vergleich von Finanzierungsalternativen laut Vorlesung?", options: ["Ein Vergleich nur über die Laufzeit", "Der Barwertvergleich", "Der Vergleich der Nominalwerte ohne Verzinsung", "Ein rein qualitativer Vergleich ohne Berechnung"], correctIndex: 1, explanation: "In der Praxis wird meist der Barwertvergleich als Standardmethode verwendet." }
    ]
  },
  {
    id: "finv-unterjaehrige-ratenzahlung",
    chapter: 7,
    order: 3,
    title: "Unterjährige Ratenzahlung und mehrfache Zahlungen",
    icon: "🔁",
    summary: "Wie man Ratenzahlungsvarianten (z. B. Versicherungsprämien) mittels Barwertvergleich beurteilt, und wie sich der Endwert regelmäßiger monatlicher Zahlungen berechnet.",
    explanation: [
      { type: "p", text: "Musterbeispiel (Ratenzahlung bei Versicherungen): Ein Versicherer bietet zwei Zahlungsvarianten für eine Jahresprämie P an — Variante A: die volle Prämie P am Jahresanfang; Variante B: zu Beginn jedes Halbjahres die halbe Prämie plus 2 % Aufschlag, also 2× (P/2 · 1,02)." },
      { type: "p", text: "Durch Gleichsetzen der Barwerte beider Varianten lässt sich der Zinssatz bestimmen, den man am Kapitalmarkt erzielen müsste, damit sich der spätere Ratenaufschlag lohnt:" },
      { type: "formula", tex: "P = \\dfrac{P}{2}\\cdot 1{,}02 + \\dfrac{P}{2}\\cdot 1{,}02 \\cdot \\dfrac{1}{1+\\frac{1}{2}i}" },
      { type: "p", text: "Auflösen nach i ergibt einen erforderlichen Zinssatz von 8,16 %. Da ein Anleger diesen Zins am Kapitalmarkt aktuell realistischerweise nicht erzielt, ist die Einmalzahlung (Variante A) in diesem Fall günstiger — der 2%ige Ratenaufschlag entspricht effektiv einer Verzinsung von 8,16 % p.a., die höher ist als am Markt erzielbar." },
      { type: "p", text: "Für regelmäßige (z. B. monatliche) Mehrfachzahlungen innerhalb einer Zinsperiode gilt bei linearer Verzinsung (m gleiche Teile der Periode, Rate r):" },
      { type: "formula", tex: "\\text{Endwert}_{\\text{vorschüssig}} = r \\cdot \\left(m + \\dfrac{m+1}{2}\\cdot i\\right)" },
      { type: "formula", tex: "\\text{Endwert}_{\\text{nachschüssig}} = r \\cdot \\left(m + \\dfrac{m-1}{2}\\cdot i\\right)" },
      { type: "p", text: "Vorschüssig bedeutet Zahlung jeweils am Anfang der Teilperiode (z. B. Monatsanfang), nachschüssig am Ende (z. B. Monatsende). Da vorschüssige Zahlungen länger verzinst werden, ist ihr Endwert stets etwas höher als bei nachschüssiger Zahlung derselben Rate." }
    ],
    exercises: [
      {
        id: "finv-unterjaehrige-ratenzahlung-e1",
        prompt: "Bestätigen Sie rechnerisch, dass der Ratenaufschlag von 2 % (halbjährlich, siehe Erklärung) einer Verzinsung von rund 8,16 % entspricht.",
        solution: [{ type: "p", text: "Aus P = 0,51P + 0,51P·1/(1+0,5i): 1 − 0,51 = 0,51/(1+0,5i) → 0,49·(1+0,5i) = 0,51 → 0,49 + 0,245i = 0,51 → 0,245i = 0,02 → i = 0,02/0,245 ≈ 0,0816 = 8,16 %." }]
      },
      {
        id: "finv-unterjaehrige-ratenzahlung-e2",
        prompt: "Jan und Lisa können aktuell nur ca. 5 % Zins am Kapitalmarkt erzielen. Für welche Zahlungsvariante sollten sie sich bei der Versicherungsprämie entscheiden, und warum?",
        solution: [{ type: "p", text: "Sie sollten sich für Variante A (Einmalzahlung der vollen Prämie am Jahresanfang) entscheiden. Der Ratenaufschlag der Variante B entspricht effektiv einer Verzinsung von 8,16 %, die deutlich über den am Markt erzielbaren 5 % liegt. Würden sie stattdessen den halben Prämienbetrag zunächst zu 5 % anlegen, würde der Anlageertrag den späteren Ratenaufschlag von 2 % nicht ausgleichen — Variante A ist damit finanziell günstiger." }]
      },
      {
        id: "finv-unterjaehrige-ratenzahlung-e3",
        prompt: "Tom zahlt zu Beginn jedes Monats 50 € bei 3 % linearer Jahresverzinsung ein. Welchen Betrag hat er am Jahresende gespart (vorschüssige Zahlung, m=12)?",
        solution: [{ type: "p", text: "Endwert = r·(m + (m+1)/2·i) = 50·(12 + 13/2·0,03) = 50·(12 + 0,195) = 50·12,195 = 609,75 €." }]
      },
      {
        id: "finv-unterjaehrige-ratenzahlung-e4",
        prompt: "Wie ändert sich der Endwert aus Aufgabe 3, wenn Tom stattdessen jeweils am Monatsende einzahlt (nachschüssig)?",
        solution: [{ type: "p", text: "Endwert = r·(m + (m−1)/2·i) = 50·(12 + 11/2·0,03) = 50·(12 + 0,165) = 50·12,165 = 608,25 €. Der nachschüssige Endwert (608,25 €) ist niedriger als der vorschüssige (609,75 €), da die einzelnen Raten jeweils einen Monat kürzer verzinst werden." }]
      },
      {
        id: "finv-unterjaehrige-ratenzahlung-e5",
        prompt: "Warum ist der Endwert bei vorschüssiger Zahlung grundsätzlich höher als bei nachschüssiger Zahlung derselben Rate über denselben Zeitraum?",
        solution: [{ type: "p", text: "Bei vorschüssiger Zahlung erfolgt jede einzelne Rate bereits zu Beginn der jeweiligen Teilperiode (z. B. Monatsanfang) und wird somit über die gesamte Teilperiode hinweg verzinst. Bei nachschüssiger Zahlung erfolgt dieselbe Rate erst am Ende der Teilperiode und wird dementsprechend eine Teilperiode kürzer verzinst. Da jede vorschüssige Rate länger im Zinsgenuss steht als die entsprechende nachschüssige Rate, ist der kumulierte Endwert bei vorschüssiger Zahlung stets etwas höher." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie hoch ist der effektive Zins, dem der Ratenaufschlag von 2 % im Versicherungsbeispiel entspricht?", options: ["16 %", "8,16 %", "2 %", "4 %"], correctIndex: 1, explanation: "Der Barwertvergleich ergibt einen impliziten Zinssatz von ca. 8,16 % p.a." },
      { id: "q2", question: "Wann ist die Ratenzahlung mit Aufschlag (statt Einmalzahlung) finanziell vorteilhaft?", options: ["Immer, unabhängig vom Marktzins", "Nur wenn der Marktzins 0 % beträgt", "Wenn der am Markt erzielbare Zins höher ist als der implizite Zins des Aufschlags", "Nie, Ratenzahlung ist immer schlechter"], correctIndex: 2, explanation: "Nur wenn der am Kapitalmarkt erzielbare Zins den impliziten Zins des Ratenaufschlags übersteigt, lohnt sich die Ratenzahlung." },
      { id: "q3", question: "Was bedeutet 'vorschüssige' Zahlung?", options: ["Zahlung genau in der Mitte der Periode", "Eine Zahlung, die niemals erfolgt", "Zahlung am Anfang der Periode", "Zahlung am Ende der Periode"], correctIndex: 2, explanation: "Vorschüssig = Zahlung zu Beginn der (Teil-)Periode." },
      { id: "q4", question: "Welche Formel gilt für den Endwert einer vorschüssigen Mehrfachzahlung (Rate r, m Teilperioden)?", options: ["Endwert = r·(m + (m+1)/2·i)", "Endwert = r·(m + (m−1)/2·i)", "Endwert = r/(m·i)", "Endwert = r·m·i"], correctIndex: 0, explanation: "Vorschüssig: Endwert = r·(m + (m+1)/2·i)." },
      { id: "q5", question: "Welche Formel gilt für den Endwert einer nachschüssigen Mehrfachzahlung?", options: ["Endwert = r·(m + (m+1)/2·i)", "Endwert = r·(m−1)·i", "Endwert = r·m²·i", "Endwert = r·(m + (m−1)/2·i)"], correctIndex: 3, explanation: "Nachschüssig: Endwert = r·(m + (m−1)/2·i)." },
      { id: "q6", question: "Ist der Endwert bei vorschüssiger oder nachschüssiger Zahlung bei sonst gleichen Bedingungen höher?", options: ["Das hängt nicht von der Zahlungsweise ab", "Bei vorschüssiger Zahlung", "Bei nachschüssiger Zahlung", "Beide sind immer exakt identisch"], correctIndex: 1, explanation: "Vorschüssige Zahlungen werden länger verzinst und ergeben daher einen höheren Endwert." },
      { id: "q7", question: "Tom zahlt monatlich 100 € vorschüssig bei 6 % p.a. ein (m=12). Wie lautet der korrekte Formelansatz?", options: ["100/(12·0,06)", "100·(12 + 11/2·0,06)", "100·12·0,06", "100·(12 + 13/2·0,06)"], correctIndex: 3, explanation: "Vorschüssig: r·(m + (m+1)/2·i) = 100·(12 + 13/2·0,06)." },
      { id: "q8", question: "Was ist die Methode zur Beurteilung von Ratenzahlungsangeboten mit Aufschlag?", options: ["Ausschließlich subjektive Einschätzung ohne Rechnung", "Barwertvergleich: Barwerte der beiden Varianten gleichsetzen und Zinssatz ermitteln", "Ratenzahlung sofort ablehnen, ohne zu rechnen", "Nur die Nominalbeträge addieren"], correctIndex: 1, explanation: "Der Barwertvergleich (Gleichsetzen und Auflösen nach i) ist die methodisch korrekte Vorgehensweise." },
      { id: "q9", question: "Welcher Faktor bestimmt maßgeblich, ob sich eine Ratenzahlung mit Aufschlag lohnt?", options: ["Der Vergleich des impliziten Zinssatzes des Aufschlags mit dem tatsächlich am Markt erzielbaren Zins", "Die Anzahl der Vertragsjahre allein", "Der Name des Versicherers", "Nur die Höhe des Aufschlags in Euro"], correctIndex: 0, explanation: "Entscheidend ist der Vergleich zwischen implizitem Zins des Aufschlags und real erzielbarem Marktzins." },
      { id: "q10", question: "Bei m=1 (nur eine Zahlung pro Periode) — was ergibt die Formel für vorschüssig und nachschüssig jeweils?", options: ["Die Formeln funktionieren nur für m > 12", "Beide ergeben immer null", "Nur die vorschüssige Formel ist bei m=1 definiert", "Beide ergeben denselben einfachen Endwert wie bei einer Einzelzahlung r·(1+i) bzw. r"], correctIndex: 3, explanation: "Bei m=1 vereinfacht sich vorschüssig zu r·(1+i) und nachschüssig zu r·1 = r, was den einfachen Fällen einer einzigen Zahlung entspricht." }
    ]
  }
];
