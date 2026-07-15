const FINV_CHAPTER8_TOPICS = [
  {
    id: "finv-zinseszins-geometrisch",
    chapter: 8,
    order: 1,
    title: "Zeitwerte bei geometrischer Verzinsung (Zinseszins)",
    icon: "📈",
    summary: "Die Grundformel der Zinseszinsrechnung, bei der Zinsen selbst mitverzinst werden, und wie man mit unterschiedlichen Zinssätzen über mehrere Perioden rechnet.",
    explanation: [
      { type: "p", text: "Bei der Zinseszinsrechnung (geometrische Verzinsung) wird Kapital über mehrere Zinsperioden (z. B. Jahre) angelegt, wobei die Zinsen nicht ausgezahlt, sondern angesammelt (kapitalisiert) und in den Folgeperioden mitverzinst werden. Für Investitionsrechnungen über mehr als ein Jahr wird standardmäßig mit Zinseszins gerechnet." },
      { type: "p", text: "Herleitung: Nach 1 Jahr: K₁ = K₀ + i·K₀ = K₀·(1+i). Nach 2 Jahren: K₂ = K₁ + i·K₁ = K₀·(1+i)². Nach n Jahren ergibt sich die zentrale Formel:" },
      { type: "formula", tex: "K_n = K_0 \\cdot (1+i)^n \\quad [n = \\text{ganze Jahre}]" },
      { type: "p", text: "Auch diese Formel lässt sich nach jedem Parameter umstellen — je nachdem, ob K₀, i, n oder Kₙ gesucht ist:" },
      { type: "list", items: [
        "Endwert gesucht: Kₙ = K₀·(1+i)ⁿ",
        "Barwert gesucht: K₀ = Kₙ/(1+i)ⁿ",
        "Zinssatz gesucht: i = (Kₙ/K₀)^(1/n) − 1",
        "Laufzeit gesucht: n = ln(Kₙ/K₀) / ln(1+i)"
      ]},
      { type: "p", text: "Gelten in verschiedenen Perioden unterschiedliche Zinssätze i₁, i₂, i₃, …, so multipliziert man die einzelnen Aufzinsungsfaktoren:" },
      { type: "formula", tex: "K_n = K_0 \\cdot (1+i_1)\\cdot(1+i_2)\\cdot(1+i_3)\\cdots" },
      { type: "p", text: "Musterbeispiel: Ein Kredit über 30.000 € wird erst in 3 Jahren mit 8 % Zinseszins zurückgezahlt. K₃ = 30.000 · (1,08)³ = 37.791,36 €." },
      { type: "p", text: "Vergleich mit linearer Verzinsung (Tom-Beispiel): 2.000 € über 2,5 Jahre bei 3 %. Linear: Kₜ = 2.000·(1+2,5·0,03) = 2.150 €. Geometrisch: Kₜ = 2.000·(1,03)^2,5 ≈ 2.153,39 € — bei Zinseszins ergibt sich ein etwas höherer Betrag (3,39 € mehr)." }
    ],
    exercises: [
      {
        id: "finv-zinseszins-geometrisch-e1",
        prompt: "30.000 € werden für 3 Jahre bei 8 % Zinseszins angelegt. Berechnen Sie den Endwert.",
        solution: [{ type: "p", text: "K₃ = K₀·(1+i)³ = 30.000·(1,08)³ = 30.000·1,259712 = 37.791,36 €." }]
      },
      {
        id: "finv-zinseszins-geometrisch-e2",
        prompt: "Ein Kapital von 2.000 € wird 2,5 Jahre bei 3 % Zinseszins angelegt. Berechnen Sie den Zeitwert und vergleichen Sie mit dem Ergebnis bei linearer Verzinsung (2.150 €).",
        solution: [{ type: "p", text: "Kₜ = K₀·(1+i)^t = 2.000·(1,03)^2,5 ≈ 2.000·1,07669 ≈ 2.153,39 €. Bei Zinseszins ergibt sich ein um 3,39 € höherer Wert als bei linearer Verzinsung (2.150 €) — Zinseszins führt bei positivem Zins über Laufzeiten mit Bruchteilen von Jahren zu einem etwas höheren Ergebnis." }]
      },
      {
        id: "finv-zinseszins-geometrisch-e3",
        prompt: "Welchen Betrag müsste man heute anlegen, um in 2,5 Jahren bei 3 % Zinseszins genau 5.000 € zu erhalten?",
        solution: [{ type: "p", text: "K₀ = Kₜ/(1+i)^t = 5.000/(1,03)^2,5 ≈ 5.000/1,07669 ≈ 4.643,84 €." }]
      },
      {
        id: "finv-zinseszins-geometrisch-e4",
        prompt: "Ein Kapital von 10.000 € soll sich verdoppeln. Bei welchem Zinssatz (Zinseszins) dauert das genau 10 Jahre?",
        solution: [{ type: "p", text: "Kₙ = K₀·(1+i)ⁿ → 20.000 = 10.000·(1+i)^10 → 2 = (1+i)^10 → 1+i = 2^(1/10) ≈ 1,0718 → i ≈ 0,0718 = 7,18 %." }]
      },
      {
        id: "finv-zinseszins-geometrisch-e5",
        prompt: "Ein Kapital wird 3 Jahre lang angelegt, wobei im 1. Jahr 5 %, im 2. Jahr 6 % und im 3. Jahr 4 % Zins gelten. Anfangskapital 10.000 €. Berechnen Sie den Endwert.",
        solution: [{ type: "p", text: "K₃ = K₀·(1+i₁)·(1+i₂)·(1+i₃) = 10.000·1,05·1,06·1,04 = 10.000·1,15752 = 11.575,20 €." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Was unterscheidet Zinseszinsrechnung von linearer Verzinsung?", options: ["Lineare Verzinsung wird ausschließlich bei negativen Zinssätzen verwendet", "Bei Zinseszins entstehen grundsätzlich überhaupt keine Zinsen", "Zwischen beiden Rechenarten besteht praktisch überhaupt kein Unterschied", "Bei Zinseszins werden bereits angefallene Zinsen mitverzinst, linear nicht"], correctIndex: 3, explanation: "Zinseszins bezeichnet die geometrische Verzinsung, bei der bereits gutgeschriebene Zinsen in den Folgeperioden selbst wieder Zinsen erzeugen — bei linearer Verzinsung bleibt dagegen stets nur das ursprüngliche Kapital verzinst." },
      { id: "q2", question: "Wie lautet die Grundformel der Zinseszinsrechnung?", options: ["Kₙ = K₀·(1+i)ⁿ", "Kₙ = K₀/(1+i)ⁿ", "Kₙ = K₀ + i·n", "Kₙ = K₀·(1+n·i)"], correctIndex: 0, explanation: "Kₙ = K₀·(1+i)ⁿ ist die zentrale Formel der geometrischen Verzinsung; sie ergibt sich, indem man die Aufzinsung Jahr für Jahr wiederholt anwendet, statt wie bei linearer Verzinsung nur einmal auf das Ausgangskapital." },
      { id: "q3", question: "10.000 € werden 2 Jahre bei 10 % Zinseszins angelegt. Wie hoch ist der Endwert?", options: ["12.000 €", "12.100 €", "11.000 €", "10.100 €"], correctIndex: 1, explanation: "K₂ = 10.000·(1,1)² = 10.000·1,21 = 12.100 € — die 100 € zusätzlich gegenüber der linearen Rechnung (12.000 €) entstehen dadurch, dass die Zinsen des ersten Jahres im zweiten Jahr mitverzinst werden." },
      { id: "q4", question: "Wie berechnet man den Barwert K₀ bei gegebenem Endwert Kₙ, Zinssatz i und Laufzeit n?", options: ["K₀ = Kₙ·i·n", "K₀ = Kₙ − i·n", "K₀ = Kₙ/(1+i)ⁿ", "K₀ = Kₙ·(1+i)ⁿ"], correctIndex: 2, explanation: "Durch Umstellen der Grundformel Kₙ = K₀·(1+i)ⁿ nach K₀ erhält man K₀ = Kₙ/(1+i)ⁿ — das Abzinsen ist die Umkehrung des Aufzinsens." },
      { id: "q5", question: "Wie berechnet man den Zinssatz i, wenn K₀, Kₙ und n bekannt sind?", options: ["i = n/(Kₙ/K₀)", "i = Kₙ·K₀·n", "i = Kₙ/K₀ − n", "i = (Kₙ/K₀)^(1/n) − 1"], correctIndex: 3, explanation: "Durch Umstellen der Zinseszinsformel nach i ergibt sich i = (Kₙ/K₀)^(1/n) − 1, da man dafür beide Seiten der Gleichung mit dem Exponenten 1/n potenzieren muss." },
      { id: "q6", question: "Wie geht man vor, wenn in unterschiedlichen Jahren verschiedene Zinssätze gelten?", options: ["Man multipliziert die einzelnen Aufzinsungsfaktoren (1+i₁)·(1+i₂)·...", "Man addiert einfach alle vorkommenden Zinssätze zusammen", "Man verwendet ausschließlich den jeweils höchsten Zinssatz", "Das ist bei unterschiedlichen Zinssätzen rechnerisch nicht möglich"], correctIndex: 0, explanation: "Kₙ = K₀·(1+i₁)·(1+i₂)·(1+i₃)·... — jeder Periodenzinssatz wirkt als eigener Aufzinsungsfaktor auf das jeweils bereits verzinste Kapital der Vorperiode, daher werden die Faktoren multipliziert, nicht die Zinssätze addiert." },
      { id: "q7", question: "Führt Zinseszins bei positivem Zins über eine Laufzeit von mehr als 1 Jahr zu einem höheren oder niedrigeren Endwert als lineare Verzinsung?", options: ["Zu einem höheren Endwert", "Zu exakt demselben Endwert", "Das hängt nicht vom Zins ab", "Zu einem niedrigeren Endwert"], correctIndex: 0, explanation: "Da beim Zinseszins bereits gutgeschriebene Zinsen selbst wieder verzinst werden, führt er bei Laufzeiten über 1 Jahr zu einem höheren Endwert als lineare Verzinsung, bei der stets nur das Ausgangskapital verzinst wird." },
      { id: "q8", question: "Welche Laufzeit n gehört typischerweise zur Zinseszinsformel Kₙ = K₀·(1+i)ⁿ?", options: ["Es sind nur negative Laufzeiten zulässig", "Nur unterjährige Laufzeiten (t < 1)", "Ganze Jahre (n = 1, 2, 3, ...)", "Ausschließlich Laufzeiten unter einem Monat"], correctIndex: 2, explanation: "Die Grundformel mit n bezieht sich exakt auf ganze Jahre; für Bruchteile von Jahren wird stattdessen die gemischte Verzinsung als Näherung verwendet (Kapitel 8, Thema 2)." },
      { id: "q9", question: "Ein Kapital verdoppelt sich in 10 Jahren bei Zinseszins. Welcher ungefähre Jahreszins liegt vor?", options: ["Etwa 20 %", "Etwa 2 %", "Etwa 50 %", "Etwa 7,2 %"], correctIndex: 3, explanation: "Aus 2 = (1+i)^10 folgt i = 2^(1/10) − 1 ≈ 0,0718 = 7,18 % — deutlich weniger als die naiv erwarteten 10 %, weil der Zinseszinseffekt die Verdopplung beschleunigt." },
      { id: "q10", question: "Warum wird bei betrieblichen Investitionsrechnungen (Kapitalwertmethode etc.) standardmäßig mit Zinseszins gerechnet?", options: ["Weil lineare Verzinsung nach geltendem Recht grundsätzlich verboten ist", "Weil Investitionen meist über mehrjährige Zeiträume laufen, für die Zinseszins der Standard ist", "Weil das reine Konvention ohne jeden inhaltlichen Grund ist", "Weil Zinseszins stets zu niedrigeren Werten als lineare Verzinsung führt"], correctIndex: 1, explanation: "Da Investitionsprojekte meist über mehrere Jahre laufen und über diesen Zeitraum Zinseszinseffekte wirtschaftlich relevant werden, wird bei betrieblichen Investitionsrechnungen durchgängig mit geometrischer Verzinsung gerechnet." }
    ]
  },
  {
    id: "finv-gemischte-verzinsung-effektivzins",
    chapter: 8,
    order: 2,
    title: "Gemischte Verzinsung, Effektivzins und Rendite",
    icon: "🔀",
    summary: "Wie man mit nicht-ganzzahligen Laufzeiten näherungsweise rechnet, sowie die Begriffe unterjähriger Zins, Effektivzins, konformer Periodenzins und Rendite.",
    explanation: [
      { type: "p", text: "Die reine Zinseszinsformel Kₙ = K₀·(1+i)ⁿ gilt exakt nur für ganze Jahre. Für nicht-ganzzahlige Laufzeiten nutzt man die Näherung der gemischten Verzinsung, basierend auf der mathematischen Beziehung (1+x)^m ≈ (1+m·x) für kleine x:" },
      { type: "formula", tex: "K_t \\approx K_0 \\cdot (1+i)^t \\quad \\text{gilt näherungsweise auch für nicht-ganze } t" },
      { type: "p", text: "Diese Näherung ist in der Praxis meist ausreichend genau (der Unterschied zur exakten gemischten Rechnung mit linearer Verzinsung für den unvollständigen Teil ist gering) und wird bei Zeiträumen über 1 Jahr standardmäßig verwendet, auch bei betrieblichen Investitionsrechnungen." },
      { type: "p", text: "Bei unterjähriger Zinszuteilung (Kapitalisierung z. B. monatlich statt jährlich) unterscheidet man:" },
      { type: "list", items: [
        "Unterjähriger relativer Zins: i_m = i/m (der Jahreszins wird einfach durch die Anzahl der Zinsperioden pro Jahr geteilt)",
        "Effektiver Jahreszins: i_eff = (1+i_m)^m − 1 — der tatsächliche Jahreszins, der sich ergibt, wenn mit dem relativen unterjährigen Zins und Zinseszinseffekt (m-mal pro Jahr) verzinst wird. Wegen des Zinseszinseffekts ist i_eff stets etwas höher als der nominale Jahreszins i.",
        "Konformer Periodenzins i*: derjenige unterjährige Zins, der bei unterjähriger Zinszuteilung (mit Zinseszins) einem gegebenen Jahreszins i entspricht: i* = (1+i)^(1/m) − 1",
        "Stetige Verzinsung: Grenzfall, bei dem die Zinsperiode in immer kleinere Teile unterteilt wird (m → ∞)"
      ]},
      { type: "p", text: "Die Rendite (durchschnittliche Verzinsung bei Zinseszins über mehrere Perioden mit unterschiedlichen Einzelzinsen) berechnet sich als geometrisches Mittel der einzelnen Periodenzinssätze — nicht als arithmetisches (einfaches) Mittel." }
    ],
    exercises: [
      {
        id: "finv-gemischte-verzinsung-effektivzins-e1",
        prompt: "5.000 € werden 4,25 Jahre bei 4 % Zinseszins angelegt (gemischte Verzinsung, Näherung). Berechnen Sie den Endwert.",
        solution: [{ type: "p", text: "Kₜ ≈ K₀·(1+i)^t = 5.000·(1,04)^4,25 ≈ 5.000·1,1815 ≈ 5.907 € (Näherungswert, exakte gemischte Rechnung liefert ≈ 5.908 € — der Unterschied ist minimal)." }]
      },
      {
        id: "finv-gemischte-verzinsung-effektivzins-e2",
        prompt: "Eine Bank bietet einen Nominalzins von 6 % p.a. bei monatlicher Zinszuteilung (m=12). Berechnen Sie den unterjährigen relativen Zins i_m und den Effektivzins i_eff.",
        solution: [{ type: "p", text: "i_m = i/m = 0,06/12 = 0,005 = 0,5 % pro Monat. i_eff = (1+i_m)^m − 1 = (1,005)^12 − 1 ≈ 1,06168 − 1 ≈ 0,06168 = 6,168 %. Der Effektivzins (6,168 %) liegt wegen des monatlichen Zinseszinseffekts über dem Nominalzins (6 %)." }]
      },
      {
        id: "finv-gemischte-verzinsung-effektivzins-e3",
        prompt: "Ein Jahreszins von 8 % soll bei vierteljährlicher Zinszuteilung (m=4) durch einen konformen Periodenzins ersetzt werden. Berechnen Sie i*.",
        solution: [{ type: "p", text: "i* = (1+i)^(1/m) − 1 = (1,08)^(1/4) − 1 ≈ 1,01943 − 1 ≈ 0,01943 = 1,943 % pro Quartal. Wird dieser konforme Quartalszins viermal mit Zinseszins angewendet, ergibt sich exakt wieder der Jahreszins von 8 %." }]
      },
      {
        id: "finv-gemischte-verzinsung-effektivzins-e4",
        prompt: "Ein Anleger erzielt in drei aufeinanderfolgenden Jahren die Renditen 10 %, −5 % und 15 %. Berechnen Sie die durchschnittliche Rendite als geometrisches Mittel.",
        solution: [{ type: "p", text: "Geometrisches Mittel: (1+i_ø)³ = (1,10)·(0,95)·(1,15) = 1,20175. i_ø = 1,20175^(1/3) − 1 ≈ 1,0632 − 1 ≈ 0,0632 = 6,32 % durchschnittliche Jahresrendite. (Das arithmetische Mittel [(10−5+15)/3=6,67%] wäre hier nicht korrekt, da es den Zinseszinseffekt und die tatsächliche Verkettung der Renditen nicht berücksichtigt.)" }]
      },
      {
        id: "finv-gemischte-verzinsung-effektivzins-e5",
        prompt: "Warum ist der Effektivzins bei unterjähriger Zinszuteilung stets höher als der zugrunde liegende Nominalzins?",
        solution: [{ type: "p", text: "Bei unterjähriger Zinszuteilung (z. B. monatlich) werden die bereits gutgeschriebenen Zinsen jeder Teilperiode innerhalb desselben Jahres bereits mitverzinst (Zinseszinseffekt), bevor das Jahr vorbei ist. Diese zusätzliche Verzinsung der Zinsen führt dazu, dass der tatsächlich erzielte (effektive) Jahreszins über dem nominalen Jahreszins liegt, der ja nur die Grundlage für die Berechnung der unterjährigen Teilzinsen bildet, ohne den Zinseszinseffekt selbst zu berücksichtigen." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Für welchen Fall wird die gemischte Verzinsung als Näherung verwendet?", options: ["Ausschließlich für glatte, ganzzahlige Laufzeiten", "Für nicht-ganzzahlige Laufzeiten (z. B. 4,25 Jahre)", "Ausschließlich für Laufzeiten unter einem Tag", "Sie wird in der Praxis niemals tatsächlich verwendet"], correctIndex: 1, explanation: "Für Laufzeiten mit Bruchteilen von Jahren nutzt man die Näherungsformel Kₜ ≈ K₀·(1+i)^t, weil die exakte Zinseszinsformel Kₙ = K₀·(1+i)ⁿ streng genommen nur für ganze Jahre gilt." },
      { id: "q2", question: "Wie lautet der unterjährige relative Zins bei einem Jahreszins von 12 % und monatlicher Zinszuteilung (m=12)?", options: ["0,12 %", "12 %", "6 %", "1 %"], correctIndex: 3, explanation: "i_m = i/m = 0,12/12 = 0,01 = 1 % pro Monat — der Jahreszins wird bei diesem relativen Ansatz einfach gleichmäßig auf die m Zinsperioden verteilt." },
      { id: "q3", question: "Wie berechnet sich der effektive Jahreszins i_eff?", options: ["i_eff = i_m − 1", "i_eff = i_m / m", "i_eff = i_m · m", "i_eff = (1+i_m)^m − 1"], correctIndex: 3, explanation: "i_eff = (1+i_m)^m − 1 berücksichtigt, dass der unterjährige relative Zins i_m m-mal mit Zinseszins angewendet wird — dadurch liegt der Effektivzins stets über dem einfach durch m geteilten Nominalzins." },
      { id: "q4", question: "Ist der Effektivzins bei unterjähriger Verzinsung (m>1) immer höher, gleich oder niedriger als der Nominalzins?", options: ["Immer höher (bei positivem Zins)", "Das lässt sich pauschal nicht sagen", "Immer gleich", "Immer niedriger"], correctIndex: 0, explanation: "Der Zinseszinseffekt innerhalb des Jahres — bereits gutgeschriebene unterjährige Zinsen werden selbst wieder verzinst — führt bei positivem Zins immer zu einem höheren Effektivzins als der reine Nominalzins." },
      { id: "q5", question: "Was ist der konforme Periodenzins i*?", options: ["Ein Zinssatz, der ausschließlich für Fremdwährungsgeschäfte gilt", "Der unterjährige Zins, der bei Zinseszins exakt dem Jahreszins entspricht", "Ein anderer Begriff, der dasselbe wie der Effektivzins bezeichnet", "Ein beliebiger, völlig frei wählbarer Zinssatz ohne feste Definition"], correctIndex: 1, explanation: "i* = (1+i)^(1/m) − 1 ist genau so definiert, dass m-malige Verzinsung mit i* über Zinseszins am Jahresende exakt denselben Endwert ergibt wie eine einmalige Verzinsung mit dem Jahreszins i." },
      { id: "q6", question: "Was passiert mit der Zinsperiode bei stetiger Verzinsung?", options: ["Stetige Verzinsung existiert nur theoretisch und wird nie erwähnt", "Sie wird unendlich groß", "Sie wird in immer kleinere Teile unterteilt (m → ∞)", "Sie bleibt exakt bei einem Jahr"], correctIndex: 2, explanation: "Stetige Verzinsung ist der mathematische Grenzfall unterjähriger Verzinsung, bei dem die Anzahl der Zinsperioden pro Jahr m gegen unendlich strebt und die einzelne Zinsperiode entsprechend gegen null geht." },
      { id: "q7", question: "Wie berechnet man die durchschnittliche Rendite über mehrere Jahre mit unterschiedlichen Jahresrenditen korrekt?", options: ["Als geometrisches Mittel der einzelnen Renditen", "Als arithmetisches Mittel der einzelnen Renditen", "Es gibt keine korrekte Berechnungsmethode", "Durch einfache Addition aller Renditen"], correctIndex: 0, explanation: "Da sich Renditen über die Jahre multiplikativ verketten (jede Periode baut auf dem Ergebnis der vorherigen auf), ist das geometrische Mittel die methodisch korrekte Berechnung, nicht das arithmetische Mittel." },
      { id: "q8", question: "Warum liefert das arithmetische Mittel bei schwankenden Jahresrenditen tendenziell ein zu optimistisches Bild?", options: ["Weil es nur für ausschließlich positive Zinssätze definiert ist", "Weil es den Zinseszinseffekt und die Verkettung der Renditen ignoriert", "Weil arithmetisches und geometrisches Mittel immer identisch sind", "Weil es aufgetretene Verluste stärker gewichtet als gleich große Gewinne"], correctIndex: 1, explanation: "Das arithmetische Mittel ignoriert, dass sich Renditen multiplikativ verketten und ein prozentualer Verlust den vorherigen Gewinn nicht symmetrisch ausgleicht — dadurch überschätzt es systematisch die tatsächliche Durchschnittsrendite bei schwankenden Werten." },
      { id: "q9", question: "Bei welcher Grundannahme (Taylor-Näherung) basiert die Formel für gemischte Verzinsung?", options: ["(1+x)^m ≈ (1+m·x) für kleine x", "(1+x) = m·x", "Es gibt keine mathematische Grundlage, es ist reine Konvention", "(1+x)^m = x^m für alle x"], correctIndex: 0, explanation: "Die Näherung (1+x)^m ≈ 1+m·x für kleine x rechtfertigt mathematisch, die exakte Zinseszinsformel vereinfacht auch auf nicht-ganze Zeiträume anzuwenden, da der Fehler dieser Approximation bei üblichen Zinssätzen gering bleibt." },
      { id: "q10", question: "Ist die Näherungsformel für gemischte Verzinsung in der Praxis meist ausreichend genau?", options: ["Sie funktioniert ausschließlich bei negativen Zinssätzen korrekt", "Sie ist ausschließlich bei sehr hohen Zinssätzen über 50 % brauchbar", "Ja, der Unterschied zur exakten Rechnung ist normalerweise gering", "Nein, sie ist in der praktischen Anwendung völlig unbrauchbar"], correctIndex: 2, explanation: "In der Praxis ist die Abweichung zwischen der Näherungsformel und der exakten gemischten Rechnung bei üblichen Zinssätzen meist vernachlässigbar gering, weshalb sie auch bei betrieblichen Investitionsrechnungen standardmäßig verwendet wird." }
    ]
  }
];
