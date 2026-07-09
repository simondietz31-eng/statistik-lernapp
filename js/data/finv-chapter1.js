const FINV_CHAPTER1_TOPICS = [
  {
    id: "finv-zusammenhang-f-i",
    chapter: 1,
    order: 1,
    title: "Zusammenhang von Finanzierung und Investition",
    icon: "⚖️",
    summary: "Wie Finanzierung (Passivseite) und Investition (Aktivseite) über die Bilanz zusammenhängen, und welche Fragestellungen die betriebliche Finanzwirtschaft behandelt.",
    explanation: [
      { type: "p", text: "Die betriebliche Finanzwirtschaft umfasst alle Fragestellungen, die sich im Zusammenhang mit der Beschaffung und Verwendung finanzieller Mittel durch Unternehmen ergeben. Sie lässt sich anhand der beiden Bilanzseiten strukturieren:" },
      { type: "list", items: [
        "Investition = Verwendung der finanziellen Mittel (Aktivseite): langfristige Vermögenswerte (Anlagevermögen) und kurzfristige Vermögenswerte (Umlaufvermögen)",
        "Finanzierung = Herkunft der finanziellen Mittel (Passivseite): Eigenkapital, langfristiges Fremdkapital, kurzfristiges Fremdkapital"
      ]},
      { type: "p", text: "Zentrale Leitfragen der Finanzierung: Welche Möglichkeiten der Kapitalbeschaffung gibt es? Was erwarten Kapitalgeber? Welche Kosten und welchen Einfluss (Mitspracherecht) bringt eine Finanzierungsform mit sich?" },
      { type: "p", text: "Zentrale Leitfragen der Investition: Wie sollten die beschafften Mittel verwendet werden? Wie berechnet man, ob sich eine Investition lohnt (\"was bringt sie\")? Dafür braucht man Finanzmathematik — Barwerte, Renten, Renditen." },
      { type: "p", text: "Finanzwirtschaftliche Aufgaben eines Unternehmens gliedern sich in Kapitalbeschaffung & Kapitalverwaltung/Zahlungsverkehr (= Kapitalaufbringung, Finanzierung) sowie Kapitalverwendung/Kapitalanlage (= Investition)." }
    ],
    exercises: [
      {
        id: "finv-zusammenhang-f-i-e1",
        prompt: "Ordnen Sie folgende Bilanzpositionen der Investitions- oder der Finanzierungsseite zu: a) Maschinenpark, b) Bankdarlehen mit 5 Jahren Laufzeit, c) Vorräte, d) Gezeichnetes Kapital.",
        solution: "a) Maschinenpark → Investition (Anlagevermögen, Aktivseite). b) Bankdarlehen 5 Jahre → Finanzierung (langfristiges Fremdkapital, Passivseite). c) Vorräte → Investition (Umlaufvermögen, Aktivseite). d) Gezeichnetes Kapital → Finanzierung (Eigenkapital, Passivseite)."
      },
      {
        id: "finv-zusammenhang-f-i-e2",
        prompt: "Warum reicht es nicht aus, nur die Finanzierungsseite oder nur die Investitionsseite eines Unternehmens zu betrachten?",
        solution: "Beide Seiten der Bilanz hängen unmittelbar zusammen: Die Investition (Mittelverwendung) kann nur in der Höhe erfolgen, in der zuvor Finanzierungsmittel (Mittelherkunft) beschafft wurden. Umgekehrt bestimmt die geplante Investition, wie viel und welche Art von Kapital beschafft werden muss (z. B. fristenkongruent). Eine isolierte Betrachtung würde diesen wechselseitigen Zusammenhang übersehen."
      },
      {
        id: "finv-zusammenhang-f-i-e3",
        prompt: "Nennen Sie je zwei zentrale Leitfragen der Finanzierung und der Investition.",
        solution: "Finanzierung: Welche Möglichkeiten der Kapitalbeschaffung gibt es? Was erwarten die Kapitalgeber (Investoren) hinsichtlich Rendite und Mitsprache? Investition: Wie sollten die beschafften Mittel verwendet werden? Wie berechnet man, ob sich eine konkrete Investition lohnt?"
      },
      {
        id: "finv-zusammenhang-f-i-e4",
        prompt: "Ein Unternehmen nimmt einen Kredit über 200.000 € auf und kauft davon eine neue Produktionsanlage. Beschreiben Sie den Vorgang aus Sicht von Finanzierung und Investition.",
        solution: "Die Kreditaufnahme über 200.000 € ist ein Finanzierungsvorgang (Zufluss von Fremdkapital, Passivseite wächst, gleichzeitig steigt die Kasse/Aktivseite). Der anschließende Kauf der Produktionsanlage ist ein Investitionsvorgang (Kasse sinkt, Anlagevermögen steigt in gleicher Höhe — reiner Aktivtausch). In Summe wächst die Bilanz zunächst um 200.000 € (Bilanzverlängerung durch die Finanzierung), danach bleibt sie bei der Investition gleich groß (Aktivtausch)."
      },
      {
        id: "finv-zusammenhang-f-i-e5",
        prompt: "Welche zwei Hauptaufgabenbereiche umfasst die finanzwirtschaftliche Tätigkeit eines Unternehmens laut Vorlesung?",
        solution: "1) Kapitalbeschaffung und Kapitalverwaltung/Zahlungsverkehr — das entspricht der Kapitalaufbringung, also der Finanzierung. 2) Kapitalverwendung/Kapitalanlage — das entspricht der Investition."
      }
    ],
    quiz: [
      { id: "q1", question: "Auf welcher Bilanzseite steht die Finanzierung?", options: ["Passivseite", "Aktivseite", "Weder noch, sie steht außerhalb der Bilanz", "Auf beiden Seiten gleichermaßen"], correctIndex: 0, explanation: "Finanzierung = Herkunft der Mittel = Passivseite (Eigenkapital, Fremdkapital)." },
      { id: "q2", question: "Auf welcher Bilanzseite steht die Investition?", options: ["Passivseite", "Im Anhang", "Aktivseite", "In der Gewinn- und Verlustrechnung"], correctIndex: 2, explanation: "Investition = Verwendung der Mittel = Aktivseite (Anlage- und Umlaufvermögen)." },
      { id: "q3", question: "Was zählt zum Anlagevermögen?", options: ["Nur liquide Mittel", "Nur Eigenkapitalpositionen", "Kurzfristige Vermögenswerte wie Vorräte", "Langfristige Vermögenswerte wie Maschinen und Gebäude"], correctIndex: 3, explanation: "Anlagevermögen umfasst langfristig gebundene Vermögenswerte, z. B. Maschinen, Gebäude, Grundstücke." },
      { id: "q4", question: "Was zählt zum Umlaufvermögen?", options: ["Nur Grundstücke", "Kurzfristige Vermögenswerte wie Vorräte und Forderungen", "Nur langfristige Fremdkapitalpositionen", "Nur das Eigenkapital"], correctIndex: 1, explanation: "Umlaufvermögen sind kurzfristig gebundene, im Geschäftsprozess umlaufende Vermögenswerte (Vorräte, Forderungen, liquide Mittel)." },
      { id: "q5", question: "Warum braucht man für Investitionsentscheidungen Finanzmathematik?", options: ["Weil das gesetzlich vorgeschrieben ist", "Nur zur Berechnung der Umsatzsteuer", "Finanzmathematik wird dafür nicht benötigt", "Um zu berechnen, ob und wie sehr sich eine Investition zeitlich betrachtet lohnt (Barwerte, Renditen)"], correctIndex: 3, explanation: "Da Zahlungen zu unterschiedlichen Zeitpunkten anfallen, braucht man Barwert-/Endwertrechnung, um die Vorteilhaftigkeit einer Investition zu beurteilen." },
      { id: "q6", question: "Welche Aussage zum Zusammenhang von Finanzierung und Investition trifft zu?", options: ["Nur die Finanzierung ist für Unternehmen relevant", "Beide sind völlig unabhängig voneinander", "Die Investition erfolgt immer vor der Finanzierung", "Die Investition bestimmt (u. a. über die Fristenkongruenz) mit, welche Art von Finanzierung sinnvoll ist"], correctIndex: 3, explanation: "Investition und Finanzierung sind eng verzahnt, u. a. weil die Kapitalüberlassungsdauer zur Nutzungsdauer der Investition passen sollte (Fristenkongruenz, siehe Kapitel 4)." },
      { id: "q7", question: "Was erwarten Kapitalgeber typischerweise, wenn sie einem Unternehmen Kapital zur Verfügung stellen?", options: ["Eine angemessene Rendite und/oder Mitspracherechte, je nach Kapitalart", "Nichts, Kapitalüberlassung ist immer unentgeltlich", "Nur eine Spende ohne Gegenleistung", "Ausschließlich Sachleistungen als Gegenleistung"], correctIndex: 0, explanation: "Kapitalgeber erwarten eine Gegenleistung — bei Eigenkapital typischerweise Rendite plus Mitspracherechte, bei Fremdkapital vor allem Zinsen und Rückzahlung." },
      { id: "q8", question: "Ein Unternehmen kauft eine Maschine bar aus vorhandenen liquiden Mitteln. Wie wirkt sich das auf die Bilanzsumme aus?", options: ["Die Bilanzsumme verkürzt sich", "Die Bilanzsumme verdoppelt sich", "Die Bilanzsumme bleibt gleich (Aktivtausch: Kasse sinkt, Anlagevermögen steigt)", "Die Bilanzsumme verlängert sich"], correctIndex: 2, explanation: "Ein Barkauf ist ein reiner Aktivtausch: Ein Aktivposten (Kasse) sinkt, ein anderer (Maschine) steigt in gleicher Höhe — die Bilanzsumme bleibt unverändert." },
      { id: "q9", question: "Was gehört zum langfristigen Fremdkapital?", options: ["Bankdarlehen mit mehrjähriger Laufzeit", "Kurzfristige Lieferantenverbindlichkeiten", "Kassenbestand", "Das gezeichnete Kapital"], correctIndex: 0, explanation: "Langfristiges Fremdkapital sind Verbindlichkeiten mit einer Laufzeit von typischerweise mehr als einem Jahr, z. B. langfristige Bankdarlehen." },
      { id: "q10", question: "Welche der folgenden Fragen ist eine typische Leitfrage der Investition (nicht der Finanzierung)?", options: ["Welche Sicherheiten verlangt die Bank?", "Lohnt sich eine bestimmte Investition unter Berücksichtigung der Zeitwerte der Zahlungen?", "Welche Kosten hat eine bestimmte Finanzierungsform?", "Wie viel Einfluss/Mitsprache erhält ein Kapitalgeber?"], correctIndex: 1, explanation: "Die Frage nach der Vorteilhaftigkeit einer Investition unter Einbeziehung von Zeitwerten (Barwerten) gehört zur Investitionsrechnung, während Kosten, Mitsprache und Sicherheiten Finanzierungsfragen sind." }
    ]
  },
  {
    id: "finv-finanzmaerkte-systematisierung",
    chapter: 1,
    order: 2,
    title: "Finanzmärkte — Systematisierung",
    icon: "🏦",
    summary: "Wie sich Finanzmärkte nach Produkten, Handelsform und Fristigkeit gliedern lassen, und wie Termingeschäfte (Futures) funktionieren.",
    explanation: [
      { type: "p", text: "Finanzmärkte lassen sich auf verschiedene Arten systematisieren:" },
      { type: "list", items: [
        "Nach Produkten/Risikomerkmalen: ECM (Equity Capital Markets, Aktien), DCM (Debt Capital Markets, Anleihen), FEM (Foreign Exchange Markets, Devisen), CM (Commodity Markets, Rohstoffe), AIM (Alternative Investment Markets, z. B. Immobilien, Hedgefonds)",
        "Nach Kassa- und Terminmarkt: Kassamarkt = Geschäftsabschluss und Erfüllung fallen zeitlich zusammen. Terminmarkt = Abschluss und Erfüllung liegen zeitlich auseinander",
        "Nach Fristigkeit des Finanzgeschäfts: Geldmarkt (kurzfristige Geldanlagen/-aufnahmen, Laufzeit < 1 Jahr) vs. Kapitalmarkt (längerfristige Kapitalanlagen/-aufnahmen, Laufzeit > 1 Jahr)"
      ]},
      { type: "p", text: "Der Kapitalmarkt gliedert sich weiter in Primärmarkt (Neuemission von Wertpapieren) und Sekundärmarkt (Handel bereits emittierter Wertpapiere, z. B. an der Börse). Der Geldmarkt unterscheidet Bankgeldmarkt (z. B. Repo-Geschäfte, Floating Rate Notes, Commercial Paper) und Unternehmens-Geldmarkt (z. B. Industrial Clearing)." },
      { type: "p", text: "Termingeschäfte unterscheidet man in unbedingte (Financial Futures/Forwards — beide Parteien sind zur Erfüllung verpflichtet) und bedingte Termingeschäfte (Optionen — der Käufer hat ein Wahlrecht, keine Pflicht zur Ausübung). Findet der Handel nicht über eine Börse statt, spricht man von OTC-Handel (Over the Counter, außerbörslicher Handel)." },
      { type: "p", text: "Futures/Forwards auf Agrarprodukte als Beispiel: Ein Landwirt (Verkäufer) kann sich mit einem Future gegen fallende Preise absichern, ein Verarbeiter (Käufer) gegen steigende Preise. Vorteil: Preissicherheit/Planbarkeit. Nachteil: Verzicht auf Chancen bei einer für die eigene Position günstigen Preisentwicklung." }
    ],
    exercises: [
      {
        id: "finv-finanzmaerkte-systematisierung-e1",
        prompt: "Ordnen Sie folgende Geschäfte dem Geld- oder dem Kapitalmarkt zu: a) Ausgabe einer Unternehmensanleihe mit 10 Jahren Laufzeit, b) Aufnahme eines 3-Monats-Commercial-Paper, c) Aktienemission (IPO).",
        solution: "a) Unternehmensanleihe 10 Jahre → Kapitalmarkt (Laufzeit > 1 Jahr). b) Commercial Paper mit 3 Monaten Laufzeit → Geldmarkt (Laufzeit < 1 Jahr). c) Aktienemission (IPO) → Kapitalmarkt (Eigenkapitalmarkt, langfristig)."
      },
      {
        id: "finv-finanzmaerkte-systematisierung-e2",
        prompt: "Ein Anleger kauft eine bereits vor drei Jahren emittierte Aktie an der Börse. Handelt es sich um Primär- oder Sekundärmarkt? Begründen Sie.",
        solution: "Sekundärmarkt: Es findet keine Neuemission (Erstausgabe durch das Unternehmen) statt, sondern ein Handel zwischen bestehenden Marktteilnehmern mit einem bereits umlaufenden Wertpapier. Der Primärmarkt betrifft ausschließlich die Neuausgabe von Wertpapieren."
      },
      {
        id: "finv-finanzmaerkte-systematisierung-e3",
        prompt: "Erläutern Sie den Unterschied zwischen einem unbedingten und einem bedingten Termingeschäft anhand eines Future und einer Option.",
        solution: "Bei einem Future (unbedingtes Termingeschäft) sind beide Vertragsparteien zur Erfüllung des Geschäfts zum vereinbarten Termin und Preis verpflichtet — es gibt kein Wahlrecht. Bei einer Option (bedingtes Termingeschäft) hat der Käufer der Option das Recht, aber nicht die Pflicht, das zugrunde liegende Geschäft auszuüben; der Verkäufer (Stillhalter) ist zur Erfüllung verpflichtet, falls der Käufer ausübt. Für dieses Wahlrecht zahlt der Käufer eine Optionsprämie."
      },
      {
        id: "finv-finanzmaerkte-systematisierung-e4",
        prompt: "Ein Getreidehändler befürchtet steigende Einkaufspreise für Weizen in sechs Monaten. Wie könnte er sich mit einem Future absichern, und welchen Nachteil nimmt er dabei in Kauf?",
        solution: "Der Händler kauft einen Weizen-Future mit Fälligkeit in sechs Monaten zu einem heute fixierten Preis (er geht eine Long-Position ein). Damit sichert er sich gegen steigende Preise ab — er zahlt in sechs Monaten den vereinbarten Preis, unabhängig vom dann geltenden Marktpreis. Nachteil: Sollte der Marktpreis in sechs Monaten tatsächlich niedriger sein als der vereinbarte Terminpreis, muss er dennoch den höheren, vereinbarten Preis zahlen — er verzichtet auf die Chance eines günstigeren Einkaufs."
      },
      {
        id: "finv-finanzmaerkte-systematisierung-e5",
        prompt: "Was bedeutet OTC-Handel, und nennen Sie ein Beispiel aus der Systematisierung der Finanzmärkte.",
        solution: "OTC (Over the Counter) bezeichnet außerbörslichen Handel, bei dem Geschäfte direkt zwischen zwei Parteien (oft über Banken) und nicht über eine organisierte Börse abgewickelt werden. Beispiel: individuell zugeschnittene (bedingte oder unbedingte) Termingeschäfte, die nicht standardisiert an einer Terminbörse gehandelt werden, sondern direkt zwischen Unternehmen und Bank vereinbart werden."
      }
    ],
    quiz: [
      { id: "q1", question: "Wofür steht die Abkürzung ECM in der Systematisierung der Finanzmärkte?", options: ["European Central Market", "External Credit Market", "Equal Commodity Market", "Equity Capital Markets — Aktienmärkte"], correctIndex: 3, explanation: "ECM = Equity Capital Markets, der Markt für Eigenkapitaltitel (Aktien)." },
      { id: "q2", question: "Was unterscheidet Kassamarkt und Terminmarkt?", options: ["Am Kassamarkt fallen Geschäftsabschluss und Erfüllung zeitlich zusammen, am Terminmarkt liegen sie auseinander", "Am Kassamarkt wird nur mit Bargeld bezahlt", "Es gibt keinen Unterschied", "Der Terminmarkt existiert nur für Aktien"], correctIndex: 0, explanation: "Kassamarkt: sofortige Erfüllung. Terminmarkt: Erfüllung erst zu einem späteren, vereinbarten Zeitpunkt." },
      { id: "q3", question: "Ab welcher Laufzeit spricht man typischerweise vom Kapitalmarkt statt vom Geldmarkt?", options: ["Ab 1 Woche", "Ab 1 Monat", "Ab mehr als 1 Jahr", "Ab 10 Jahren"], correctIndex: 2, explanation: "Geldmarkt: Laufzeit < 1 Jahr. Kapitalmarkt: Laufzeit > 1 Jahr." },
      { id: "q4", question: "Wo findet die Neuemission von Wertpapieren statt?", options: ["Ausschließlich am Geldmarkt", "Nur im OTC-Handel", "Am Sekundärmarkt", "Am Primärmarkt"], correctIndex: 3, explanation: "Der Primärmarkt ist der Markt für die Erstausgabe (Neuemission) von Wertpapieren." },
      { id: "q5", question: "Ein Investor kauft eine Aktie an der Börse von einem anderen Anleger. Auf welchem Markt findet das statt?", options: ["Geldmarkt", "Sekundärmarkt", "Primärmarkt", "OTC-Markt zwingend"], correctIndex: 1, explanation: "Handel zwischen Marktteilnehmern mit bereits emittierten Wertpapieren findet am Sekundärmarkt statt." },
      { id: "q6", question: "Was ist ein unbedingtes Termingeschäft?", options: ["Ein Geschäft, das nur am Kassamarkt stattfindet", "Ein Geschäft ohne festen Preis", "Eine Option, bei der der Käufer ein Wahlrecht hat", "Ein Future/Forward, bei dem beide Parteien zur Erfüllung verpflichtet sind"], correctIndex: 3, explanation: "Bei unbedingten Termingeschäften (Futures/Forwards) sind beide Seiten zur Erfüllung verpflichtet — anders als bei Optionen." },
      { id: "q7", question: "Was ist der Unterschied zwischen Financial Futures und Optionen bezüglich der Erfüllungspflicht?", options: ["Bei Futures besteht eine Erfüllungspflicht für beide Seiten, bei Optionen hat der Käufer ein Wahlrecht", "Es gibt keinen Unterschied", "Futures haben nie eine Erfüllungspflicht", "Bei Optionen besteht immer eine Erfüllungspflicht für beide Seiten"], correctIndex: 0, explanation: "Futures = unbedingtes Termingeschäft (Pflicht für beide). Optionen = bedingtes Termingeschäft (Wahlrecht für den Käufer)." },
      { id: "q8", question: "Was bedeutet 'OTC-Handel'?", options: ["Ein staatlich reguliertes Handelssystem", "Ein Synonym für den Primärmarkt", "Außerbörslicher Handel direkt zwischen zwei Parteien", "Organisierter Terminhandel an der Börse"], correctIndex: 2, explanation: "OTC = Over the Counter = außerbörslicher Handel, meist individuell zwischen zwei Parteien vereinbart." },
      { id: "q9", question: "Welche zwei Bestandteile hat der Geldmarkt laut Systematisierung?", options: ["Kassa- und Terminmarkt", "Bankgeldmarkt und Unternehmens(UN)-Geldmarkt", "Primär- und Sekundärmarkt", "ECM und DCM"], correctIndex: 1, explanation: "Der Geldmarkt gliedert sich in Bankgeldmarkt (z. B. Repo, Floating Rate Notes) und Unternehmens-Geldmarkt (z. B. Industrial Clearing, Commercial Paper)." },
      { id: "q10", question: "Warum sichert sich ein Verkäufer landwirtschaftlicher Produkte häufig über einen Future ab?", options: ["Weil Futures gesetzlich vorgeschrieben sind", "Um sich gegen fallende Preise abzusichern und Planungssicherheit zu erhalten", "Um garantiert vom höchsten künftigen Marktpreis zu profitieren", "Um Steuern zu sparen"], correctIndex: 1, explanation: "Ein Future fixiert den Verkaufspreis im Voraus und schützt so vor dem Risiko sinkender Marktpreise — auf Kosten des Verzichts, von künftig steigenden Preisen zu profitieren." }
    ]
  },
  {
    id: "finv-finanzintermediaere-wechselkurs",
    chapter: 1,
    order: 3,
    title: "Finanzintermediäre und Wechselkursrisiko",
    icon: "🌐",
    summary: "Aufgaben und Arten von Finanzintermediären sowie das Wechselkursrisiko bei einer Kreditaufnahme im Ausland (ungedeckte Zinsparität).",
    explanation: [
      { type: "p", text: "Finanzintermediäre lösen Probleme, die beim direkten Aufeinandertreffen von Geldgebern und Geldnehmern entstehen. Ihre zentralen Aufgaben:" },
      { type: "list", items: [
        "Informationsbedarfstransformation: Abbau von Informationsasymmetrien zwischen Anlegern und Kapitalsuchenden",
        "Fristentransformation: kurzfristige Einlagen werden in langfristige Kredite umgewandelt (und umgekehrt)",
        "Risikotransformation: Bündelung/Streuung von Risiken (z. B. Kreditausfallrisiko) über viele Geschäfte hinweg",
        "Losgrößentransformation: Zusammenführung vieler kleiner Anlagebeträge zu großen Kreditsummen (und umgekehrt)",
        "Sonstige Informations-Dienstleistungen und Vermittlungsleistung"
      ]},
      { type: "p", text: "Man unterscheidet Commercial Banking (klassisches Einlagen- und Kreditgeschäft mit Privat- und Firmenkunden) von Investmentbanking (Kapitalmarktgeschäfte, M&A-Beratung, Emissionsbegleitung). Daneben haben sich FinTechs etabliert — junge, technologiegetriebene Finanzdienstleister, z. B. für Rechnungsvorfinanzierung, die trotzdem (wie klassische Institute) einer BaFin-Lizenzierung unterliegen können." },
      { type: "p", text: "Wechselkursrisiko bei Kreditaufnahme im Ausland: Ist der Zinssatz in einer Fremdwährung niedriger als im Euroraum, kann eine Fremdwährungsfinanzierung günstiger erscheinen. Entscheidend ist aber auch die erwartete Wechselkursentwicklung — man vergleicht den Zinsvorteil mit der erwarteten prozentualen Wechselkursänderung (\"ungedeckte Zinsparität\"):" },
      { type: "list", items: [
        "Wird die Fremdwährung gegenüber dem Euro stärker (Wechselkurs FW/EUR sinkt), muss das Unternehmen bei Rückzahlung mehr Euro aufwenden, um dieselbe Fremdwährungssumme zu erhalten — der Zinsvorteil kann dadurch aufgezehrt oder sogar überkompensiert werden.",
        "Ist der erwartete prozentuale Wechselkursverlust kleiner als der Zinsvorteil, lohnt sich die Fremdwährungsfinanzierung; ist er größer, ist der Eurokredit trotz höherem Zins günstiger.",
        "Das Risiko lässt sich z. B. über Devisentermingeschäfte (Forwards) oder Optionen absichern (Hedging) — dann entfällt allerdings meist auch ein Teil des Zinsvorteils."
      ]}
    ],
    exercises: [
      {
        id: "finv-finanzintermediaere-wechselkurs-e1",
        prompt: "Nennen Sie die vier zentralen Transformationsleistungen von Finanzintermediären mit je einem kurzen Beispiel.",
        solution: "Informationsbedarfstransformation: Eine Bank prüft die Kreditwürdigkeit eines Unternehmens, statt dass jeder einzelne Sparer das selbst tun müsste. Fristentransformation: Eine Bank finanziert einen 10-Jahres-Kredit aus täglich fälligen Spareinlagen vieler Kunden. Risikotransformation: Eine Bank streut das Ausfallrisiko über viele Kredite und gleicht Verluste einzelner Kredite durch Zinserträge anderer Kredite aus. Losgrößentransformation: Viele kleine Spareinlagen (z. B. je 1.000 €) werden zu einem großen Unternehmenskredit (z. B. 5 Mio. €) gebündelt."
      },
      {
        id: "finv-finanzintermediaere-wechselkurs-e2",
        prompt: "Ein deutsches Unternehmen will 100.000 € für 1 Jahr aufnehmen. Zinssatz Euroraum = 8,0 % p.a., Zinssatz Fremdwährung = 6,0 % p.a., aktueller Wechselkurs 1,2 FW/EUR (unverändert erwartet). Bei welcher Variante zahlt das Unternehmen weniger, wenn der Wechselkurs unverändert bleibt?",
        solution: "Bei unverändertem Wechselkurs ist ausschließlich der niedrigere Nominalzins entscheidend. Der Fremdwährungskredit mit 6,0 % p.a. ist günstiger als der Eurokredit mit 8,0 % p.a. Zinskosten in der Fremdwährungsvariante: 100.000 € entsprechen bei Kurs 1,2 FW/EUR = 120.000 FW; Zinsen = 120.000 FW × 6 % = 7.200 FW, umgerechnet (bei unverändertem Kurs) = 6.000 €, gegenüber 8.000 € beim Eurokredit."
      },
      {
        id: "finv-finanzintermediaere-wechselkurs-e3",
        prompt: "Dieselbe Ausgangslage wie in Aufgabe 2, aber die Finanzchefin erwartet, dass der Wechselkurs von 1,2 FW/EUR auf 1,00 FW/EUR sinkt (die Fremdwährung wird stärker). Lohnt sich die Fremdwährungsfinanzierung trotzdem?",
        solution: "Zinsvorteil der Fremdwährung: 8,0 % − 6,0 % = 2,0 Prozentpunkte. Erwartete Wechselkursänderung: von 1,2 auf 1,00 FW/EUR bedeutet, dass man am Ende der Laufzeit für dieselbe Menge Euro weniger Fremdwährung bekommt bzw. für dieselbe Fremdwährungsschuld mehr Euro aufwenden muss — das entspricht einer prozentualen Aufwertung der Fremdwährung von (1,2−1,0)/1,0 = 20 %. Da diese erwartete 20%ige Verteuerung deutlich größer ist als der Zinsvorteil von 2 Prozentpunkten, lohnt sich die Fremdwährungsfinanzierung unter dieser Erwartung NICHT — der Eurokredit ist trotz höherem Nominalzins vorzuziehen."
      },
      {
        id: "finv-finanzintermediaere-wechselkurs-e4",
        prompt: "Welches Risiko trägt ein Unternehmen bei einer Fremdwährungsfinanzierung, und wie kann es dieses Risiko steuern?",
        solution: "Das Unternehmen trägt das Wechselkursrisiko: Entwickelt sich der Wechselkurs ungünstig (die Fremdwährung wird gegenüber dem Euro stärker), steigen die effektiven Finanzierungskosten in Euro, unter Umständen so stark, dass der ursprüngliche Zinsvorteil aufgezehrt wird. Steuerung: durch Kurssicherungsgeschäfte (z. B. Devisentermingeschäfte/Forwards, Optionen), durch natürliche Absicherung (Hedging über Fremdwährungserlöse aus dem operativen Geschäft) oder durch bewusste Übernahme des Risikos, falls die Kurserwartung stabil positiv ist."
      },
      {
        id: "finv-finanzintermediaere-wechselkurs-e5",
        prompt: "Ist die Deutsche Bundesbank ein Kreditinstitut im Sinne des § 1 KWG? Begründen Sie kurz.",
        solution: "Nein. Die Deutsche Bundesbank ist die Zentralbank Deutschlands und unterliegt einem eigenen gesetzlichen Rahmen (Bundesbankgesetz); sie betreibt kein klassisches Einlagen- oder Kreditgeschäft mit der breiten Öffentlichkeit im Sinne des § 1 KWG und fällt daher nicht unter die Definition eines Kreditinstituts nach KWG, sondern hat eine gesonderte hoheitliche/geldpolitische Funktion."
      }
    ],
    quiz: [
      { id: "q1", question: "Welche Aufgabe erfüllt die Fristentransformation von Finanzintermediären?", options: ["Umwandlung kurzfristiger Einlagen in langfristige Kredite (und umgekehrt)", "Bündelung kleiner Anlagebeträge zu großen Krediten", "Streuung von Ausfallrisiken über viele Kredite", "Abbau von Informationsasymmetrien"], correctIndex: 0, explanation: "Fristentransformation gleicht unterschiedliche Laufzeitwünsche von Anlegern und Kreditnehmern aus." },
      { id: "q2", question: "Was ist der Hauptunterschied zwischen Commercial Banking und Investmentbanking?", options: ["Commercial Banking ist nur für Privatkunden zulässig", "Es gibt keinen Unterschied", "Commercial Banking = klassisches Einlagen-/Kreditgeschäft, Investmentbanking = Kapitalmarktgeschäfte/M&A", "Investmentbanking betreibt nur Bargeldgeschäfte"], correctIndex: 2, explanation: "Commercial Banking fokussiert auf Einlagen und Kredite, Investmentbanking auf Kapitalmarkttransaktionen, Emissionen und M&A." },
      { id: "q3", question: "Was unterliegen FinTechs wie Anbieter von Rechnungsvorfinanzierung häufig?", options: ["Ausschließlich dem Wettbewerbsrecht", "Nur der EU-Kommission direkt", "Keinerlei Regulierung", "Einer Lizenzierung/Aufsicht durch die BaFin"], correctIndex: 3, explanation: "Viele FinTechs mit Finanzdienstleistungscharakter benötigen eine BaFin-Lizenz, ähnlich wie klassische Institute." },
      { id: "q4", question: "Was versteht man unter 'ungedeckter Zinsparität' im Kontext von Fremdwährungskrediten?", options: ["Den reinen Vergleich der Nominalzinssätze ohne Berücksichtigung des Wechselkurses", "Den Vergleich von Zinsvorteil und erwarteter Wechselkursänderung zur Beurteilung der Vorteilhaftigkeit", "Die Differenz zwischen Geld- und Briefkurs einer Währung", "Ein Verfahren zur Absicherung von Aktienkursrisiken"], correctIndex: 1, explanation: "Die ungedeckte Zinsparität stellt den Zinsvorteil einer Fremdwährungsanlage/-finanzierung der erwarteten Wechselkursänderung gegenüber." },
      { id: "q5", question: "Ein Fremdwährungskredit hat einen um 2 Prozentpunkte niedrigeren Zins als ein Eurokredit. Die erwartete Aufwertung der Fremdwährung beträgt 3 %. Welche Variante ist vorteilhafter?", options: ["Der Fremdwährungskredit, da der Zins niedriger ist", "Das lässt sich ohne weitere Daten nicht beurteilen", "Beide sind exakt gleichwertig", "Der Eurokredit, da die erwartete Wechselkursverteuerung (3 %) den Zinsvorteil (2 %) übersteigt"], correctIndex: 3, explanation: "Übersteigt die erwartete prozentuale Wechselkursänderung den Zinsvorteil, wird der scheinbare Vorteil des Fremdwährungskredits durch höhere Rückzahlungskosten in Euro aufgezehrt." },
      { id: "q6", question: "Wie kann sich ein Unternehmen gegen Wechselkursrisiken bei Fremdwährungskrediten absichern?", options: ["Durch höhere Eigenkapitalquote allein", "Durch Devisentermingeschäfte/Forwards oder Optionen (Hedging)", "Nur durch Verzicht auf jegliche Auslandsgeschäfte", "Gar nicht, das Risiko ist nicht steuerbar"], correctIndex: 1, explanation: "Kurssicherungsinstrumente wie Devisentermingeschäfte oder Optionen können das Wechselkursrisiko begrenzen." },
      { id: "q7", question: "Was bedeutet Losgrößentransformation durch Finanzintermediäre?", options: ["Abbau von Informationsasymmetrien", "Zusammenführung vieler kleiner Anlagebeträge zu großen Kreditvolumina", "Verkürzung der Kreditlaufzeit", "Diversifikation von Ausfallrisiken"], correctIndex: 1, explanation: "Losgrößentransformation bündelt viele kleine Einlagen zu großen, für einzelne Kreditnehmer benötigten Summen." },
      { id: "q8", question: "Welche Institution ist typischerweise KEIN Kreditinstitut im Sinne des § 1 KWG?", options: ["Die Deutsche Bundesbank", "Eine Sparkasse", "Eine Bank mit Kreditvergabe an Unternehmen", "Eine Geschäftsbank mit Einlagengeschäft"], correctIndex: 0, explanation: "Die Bundesbank hat eine gesonderte hoheitliche/geldpolitische Funktion und fällt nicht unter die klassische KWG-Definition eines Kreditinstituts." },
      { id: "q9", question: "Was passiert mit dem Zinsvorteil eines Fremdwährungskredits, wenn sich die Fremdwährung stärker aufwertet als im Zinsvorteil eingepreist?", options: ["Er wird durch die höheren Rückzahlungskosten in Euro teilweise oder ganz aufgezehrt", "Er verdoppelt sich automatisch", "Er wird steuerlich neutralisiert", "Er bleibt unverändert bestehen"], correctIndex: 0, explanation: "Eine stärkere Aufwertung der Fremdwährung als im Zinsvorteil eingepreist frisst den Zinsvorteil auf und kann den Fremdwährungskredit teurer machen als den Eurokredit." },
      { id: "q10", question: "Welche der folgenden Aufgaben zählt NICHT zu den klassischen Transformationsleistungen von Finanzintermediären?", options: ["Risikotransformation", "Losgrößentransformation", "Steuerbefreiung der Kapitalerträge", "Fristentransformation"], correctIndex: 2, explanation: "Steuerbefreiung ist keine Transformationsleistung von Finanzintermediären; die klassischen Aufgaben sind Informationsbedarfs-, Fristen-, Risiko- und Losgrößentransformation sowie Vermittlungsleistungen." }
    ]
  }
];
