const FORSCHUNG_CHAPTER4_TOPICS = [
  {
    id: "fo-skalenniveaus",
    chapter: 4,
    order: 1,
    title: "Skalenniveaus von Variablen",
    icon: "📏",
    summary: "Die vier Skalenniveaus Nominal, Ordinal, Intervall und Verhältnis, ihre jeweiligen Eigenschaften (Reihenfolge, Abstände, Verhältnisse) sowie die zulässigen statistischen Operationen pro Niveau.",
    explanation: [
      { type: "p", text: "Das Skalenniveau einer Variable bestimmt, welche statistischen Verfahren auf sie angewendet werden dürfen: Je höher das Skalenniveau, desto mehr mathematische Operationen sind erlaubt. Es existiert eine Hierarchie von vier Skalenniveaus, von der einfachsten zur komplexesten Regel: Nominalskala, Ordinalskala, Intervallskala, Verhältnisskala." },
      { type: "list", items: [
        "Nominalskala: reine Benennung von Kategorien. Reihenfolge, Abstände und Verhältnisse sind bedeutungslos — nur Unterscheidung ist möglich (z. B. Haarfarbe, Geschlecht, \"übergewichtig: ja/nein\"). Rot ist nicht näher an blond als an schwarz; es ist unsinnig zu sagen, rot sei \"doppelt so haarfarbig\" wie schwarz.",
        "Ordinalskala: Kategorien lassen sich sinnvoll in eine Reihenfolge bringen, aber nicht exakt messen (z. B. Gesundheitszustand: schlecht–normal–sehr gut; Schulnoten). Abstände sind nicht messbar — der Unterschied zwischen \"schlecht\" und \"normal\" muss nicht gleich groß sein wie zwischen \"normal\" und \"sehr gut\". Verhältnisse sind bedeutungslos: \"sehr gut\" ist nicht das Dreifache von \"ausreichend\".",
        "Intervallskala: metrische Daten mit bedeutsamer Reihenfolge und sinnvollen, gleich großen Abständen (z. B. Körpertemperatur in °C, Kalenderjahre). 39 °C − 38 °C = 38 °C − 37 °C. Es fehlt jedoch ein echter Nullpunkt, weshalb Verhältnisse sinnlos sind: 30 °C ist nicht doppelt so heiß wie 15 °C.",
        "Verhältnisskala: metrische Daten mit bedeutsamer Reihenfolge, sinnvollen Abständen UND einem absoluten Nullpunkt (z. B. Größe, Gewicht, Alter, Schrittzahl). Dadurch sind auch Verhältnisse zulässig: 20 kg ist doppelt so viel wie 10 kg; 20 Jahre ist doppelt so alt wie 10 Jahre."
      ]},
      { type: "p", text: "Zulässige Verfahren nach Skalenniveau: Nominal erlaubt nur Auszählen; Ordinal erlaubt zusätzlich Ordnen (Rangfolgen bilden); Intervallskaliert erlaubt zusätzlich Summen und Differenzen (z. B. Mittelwertberechnung); erst Verhältnisskaliert erlaubt zusätzlich Quotienten (Verhältnisse, \"doppelt so viel\"). Jede höhere Stufe schließt alle Operationen der niedrigeren Stufen mit ein." },
      { type: "p", text: "Übergeordnet werden Variablen in kategorial (nominal, ordinal) und metrisch unterschieden. Metrische Variablen gliedern sich weiter in metrisch ohne Nullpunkt (Intervallskala) und metrisch mit Nullpunkt (Verhältnisskala)." }
    ],
    exercises: [
      {
        id: "fo-skalenniveaus-e1",
        prompt: "Bestimmen Sie das Skalenniveau folgender Merkmale: a) Preis eines Medikaments in Euro, b) Körperkerntemperatur in °C, c) Geschlecht, d) höchste abgeschlossene Schulbildung.",
        solution: [{ type: "p", text: "a) Verhältnisskala (0 € ist ein echter Nullpunkt, Verhältnisse wie \"doppelt so teuer\" sind sinnvoll). b) Intervallskala (0 °C ist kein absoluter Nullpunkt der Temperatur). c) Nominalskala (keine sinnvolle Rangordnung). d) Ordinalskala (Schulabschlüsse lassen sich ordnen, aber die Abstände zwischen den Stufen sind nicht exakt gleich groß)." }]
      },
      {
        id: "fo-skalenniveaus-e2",
        prompt: "Warum ist es unsinnig zu sagen, 30 °C sei \"doppelt so heiß\" wie 15 °C?",
        solution: [{ type: "p", text: "Weil die Celsius-Skala eine Intervallskala ohne echten, absoluten Nullpunkt ist — 0 °C bedeutet nicht \"keine Temperatur\", sondern ist willkürlich als Gefrierpunkt von Wasser festgelegt. Verhältnisaussagen (\"doppelt so viel\") sind nur bei Skalen mit echtem Nullpunkt (Verhältnisskala, z. B. Kelvin) sinnvoll." }]
      },
      {
        id: "fo-skalenniveaus-e3",
        prompt: "Welche statistischen Operationen sind bei ordinalskalierten Daten zulässig, welche nicht?",
        solution: [{ type: "p", text: "Zulässig: Auszählen (Häufigkeiten) und Ordnen (Rangfolgen bilden, Median berechnen). Nicht zulässig: Summen/Differenzen bilden (z. B. arithmetisches Mittel berechnen) und Quotienten/Verhältnisse bilden, da bei Ordinaldaten keine gleich großen Abstände zwischen den Kategorien unterstellt werden dürfen." }]
      },
      {
        id: "fo-skalenniveaus-e4",
        prompt: "Ein Forschungsteam möchte fünf typische Variablen für die Gesundheitsförderung erheben. Nennen Sie fünf Variablen mit jeweiligem Skalenniveau.",
        solution: [{ type: "p", text: "Beispiele: 1) Raucherstatus (ja/nein) → Nominalskala. 2) Subjektives Wohlbefinden (schlecht–mittel–gut) → Ordinalskala. 3) Körpertemperatur in °C → Intervallskala. 4) Körpergewicht in kg → Verhältnisskala. 5) Anzahl der Arztbesuche im letzten Jahr → Verhältnisskala (echter Nullpunkt: keine Besuche)." }]
      },
      {
        id: "fo-skalenniveaus-e5",
        prompt: "Erklären Sie den Unterschied zwischen Intervall- und Verhältnisskala anhand von Kalenderjahren und Alter.",
        solution: [{ type: "p", text: "Kalenderjahre sind intervallskaliert: Die Abstände zwischen Jahren sind gleich groß (1 Jahr Abstand ist immer gleich lang), aber das Jahr 0 ist kein echter Nullpunkt der Zeit — man kann Jahre nicht sinnvoll multiplizieren oder als Verhältnis ausdrücken. Alter in Jahren ist dagegen verhältnisskaliert: 0 Jahre bedeutet tatsächlich \"kein Alter\" (Geburt), weshalb Aussagen wie \"20 Jahre ist doppelt so alt wie 10 Jahre\" sinnvoll sind." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Welches Skalenniveau erlaubt ausschließlich das Unterscheiden von Kategorien ohne Rangordnung?", options: ["Ordinalskala", "Intervallskala", "Nominalskala laut gängiger, aber unzutreffender Annahme", "Verhältnisskala"], correctIndex: 2, explanation: "Die Nominalskala besteht aus einer reinen Benennung von Kategorien — es gibt keine sinnvolle Rangordnung, keine messbaren Abstände und keine sinnvollen Verhältnisse zwischen den Ausprägungen." },
      { id: "q2", question: "Was zeichnet die Ordinalskala im Vergleich zur Nominalskala zusätzlich aus?", options: ["Ein absoluter Nullpunkt im Rahmen der Vorlesung unabhängig vom jeweiligen Kontext", "Sinnvolle Verhältnisaussagen wie \"doppelt so viel\"", "Gleich große, exakt messbare Abstände zwischen den Kategorien", "Eine sinnvolle Rangordnung der Kategorien, aber ohne gleich große Abstände"], correctIndex: 3, explanation: "Bei der Ordinalskala lassen sich Kategorien sinnvoll ordnen (z. B. Schulnoten), aber die Abstände zwischen den Rängen sind nicht notwendigerweise gleich groß oder überhaupt messbar." },
      { id: "q3", question: "Warum sind bei der Intervallskala keine Verhältnisaussagen zulässig?", options: ["Weil ihr ein echter, absoluter Nullpunkt fehlt", "Weil sie keine Rangordnung der Werte zulässt", "Weil ihre Abstände nicht gleich groß sind", "Weil sie nur für kategoriale Daten gilt ungeachtet der konkreten Umstände"], correctIndex: 0, explanation: "Intervallskalen haben zwar gleich große, sinnvolle Abstände (z. B. zwischen Temperaturgraden), aber keinen echten Nullpunkt — daher sind Verhältnisaussagen wie \"doppelt so heiß\" nicht zulässig." },
      { id: "q4", question: "Welches Skalenniveau erlaubt als einziges sinnvolle Verhältnisaussagen wie \"doppelt so viel\"?", options: ["Nominalskala nach traditioneller, überholter Sichtweise", "Verhältnisskala", "Ordinalskala", "Intervallskala"], correctIndex: 1, explanation: "Nur die Verhältnisskala besitzt einen echten, absoluten Nullpunkt, wodurch Verhältnisaussagen wie \"20 kg ist doppelt so viel wie 10 kg\" sinnvoll und zulässig werden." },
      { id: "q5", question: "Welches statistische Verfahren wird erst ab intervallskalierten Daten zulässig?", options: ["Auszählen von Häufigkeiten in jeder denkbaren Situation", "Bildung von Rangfolgen nach verbreiteter Fehlvorstellung", "Berechnung von Summen und Differenzen (z. B. Mittelwert)", "Bildung von Quotienten und Verhältnissen ohne jede Einschränkung"], correctIndex: 2, explanation: "Erst ab Intervallskalenniveau sind Summen und Differenzen sinnvoll berechenbar (z. B. der arithmetische Mittelwert). Quotienten/Verhältnisse sind dagegen erst ab Verhältnisskalenniveau zulässig." },
      { id: "q6", question: "Welches Skalenniveau hat die Variable \"Körpergröße in cm\"?", options: ["Nominalskala", "Ordinalskala", "Intervallskala", "Verhältnisskala"], correctIndex: 3, explanation: "Körpergröße hat einen echten Nullpunkt (0 cm = keine Größe) und erlaubt sinnvolle Verhältnisaussagen (200 cm ist doppelt so groß wie 100 cm) — sie ist damit verhältnisskaliert." },
      { id: "q7", question: "Welches Skalenniveau hat die Variable \"höchste abgeschlossene Schulbildung\"?", options: ["Ordinalskala", "Nominalskala", "Intervallskala", "Verhältnisskala"], correctIndex: 0, explanation: "Schulabschlüsse lassen sich sinnvoll in eine Rangfolge bringen (z. B. Hauptschulabschluss < Realschulabschluss < Abitur), die Abstände zwischen den Stufen sind aber nicht exakt gleich groß messbar — daher Ordinalskala." },
      { id: "q8", question: "Was gilt für die Hierarchie der vier Skalenniveaus?", options: ["Je höher das Skalenniveau, desto weniger mathematische Operationen sind zulässig", "Je höher das Skalenniveau, desto mehr mathematische Operationen sind zulässig", "Alle vier Skalenniveaus erlauben exakt dieselben statistischen Verfahren", "Die Reihenfolge der Skalenniveaus spielt für die Statistik keine Rolle"], correctIndex: 1, explanation: "Mit steigendem Skalenniveau (Nominal → Ordinal → Intervall → Verhältnis) werden zunehmend mehr statistische Operationen zulässig, da jede höhere Stufe zusätzliche Informationseigenschaften (Rangordnung, Abstände, Nullpunkt) besitzt." },
      { id: "q9", question: "Zu welcher übergeordneten Gruppe von Variablen zählen sowohl Nominal- als auch Ordinalskala?", options: ["Zu den metrischen Variablen mit Nullpunkt", "Zu den metrischen Variablen ohne Nullpunkt", "Zu den kategorialen Variablen", "Zu keiner der genannten Gruppen"], correctIndex: 2, explanation: "Nominal- und Ordinalskala werden gemeinsam als kategoriale Variablen bezeichnet, während Intervall- und Verhältnisskala zu den metrischen Variablen zählen (mit bzw. ohne echten Nullpunkt)." },
      { id: "q10", question: "Welche Aussage über die Variable \"Blutgruppe\" trifft zu?", options: ["Sie ist verhältnisskaliert, da Blutgruppen addiert werden können grundsätzlich und ausnahmslos", "Sie ist intervallskaliert mit gleich großen Abständen zwischen den Gruppen", "Sie ist ordinalskaliert, da eine Blutgruppe \"höher\" als eine andere ist", "Sie ist nominalskaliert, da zwischen den Blutgruppen keine sinnvolle Rangordnung besteht"], correctIndex: 3, explanation: "Blutgruppen (A, B, AB, 0) lassen sich nicht sinnvoll in eine Rangfolge bringen — es gibt keine \"höhere\" oder \"niedrigere\" Blutgruppe. Die Variable ist daher rein nominalskaliert." }
    ]
  }
];
