const FINV_CHAPTER2_TOPICS = [
  {
    id: "finv-guetertroeme-cfo",
    chapter: 2,
    order: 1,
    title: "Güter-, Leistungs- und Zahlungsströme; CFO-Aufgaben",
    icon: "🔄",
    summary: "Wie Beschaffungs-, Arbeits- und Absatzmärkte über den Transformationsprozess im Unternehmen mit dem Finanz- und Kapitalmarkt verbunden sind, und welche Aufgaben der CFO hat.",
    explanation: [
      { type: "p", text: "Ein Unternehmen ist über verschiedene Märkte mit seiner Umwelt verbunden: Am Beschaffungsmarkt kauft es Produktionsfaktoren ein, am Arbeitsmarkt beschäftigt es Personal, am Absatzmarkt verkauft es seine Leistungen. Im Transformationsprozess im Unternehmen werden diese eingekauften Faktoren zu verkaufsfähigen Produkten/Dienstleistungen umgewandelt." },
      { type: "list", items: [
        "Strom der materiellen Produktionsfaktoren: fließt vom Beschaffungsmarkt in den Transformationsprozess",
        "Strom der Arbeitsleistung: fließt vom Arbeitsmarkt in den Transformationsprozess",
        "Strom der fertigen Güter/Dienstleistungen: fließt vom Transformationsprozess zum Absatzmarkt",
        "Zahlungsströme: laufen den Güter-/Leistungsströmen entgegengesetzt — Auszahlungen an Beschaffungs- und Arbeitsmarkt, Einzahlungen vom Absatzmarkt",
        "Der Finanz-/Kapitalmarkt verbindet sich zusätzlich über Kapitalaufnahme (Einzahlung ins Unternehmen) und Kapitalrückzahlung/Ausschüttung (Auszahlung aus dem Unternehmen)"
      ]},
      { type: "p", text: "Die Finanzorganisation eines Unternehmens ist typischerweise dem CEO unterstellt und umfasst i. d. R. den CFO (Chief Financial Officer), der für die finanzielle Lage des Unternehmens verantwortlich ist. Der CFO nimmt zwei Rollen wahr:" },
      { type: "list", items: [
        "CFO als Treasurer: Steuerung von Zahlungsvorgängen, generelle Koordinationsverantwortung, Kapitalbeschaffung, Kapitalanlage",
        "CFO als Controller: generelle Rechnungswesenverantwortung, Informationsverarbeitung, Planungsverantwortung"
      ]},
      { type: "p", text: "Aufgaben des CFO im Überblick: Kapitalbeschaffung, Kapitalanlage, Finanzplanung, Bilanzmanagement. Ziel: Sicherung der Existenz des Unternehmens durch Erhalt des finanziellen Gleichgewichts (jederzeitige Zahlungsfähigkeit bei angemessener Rentabilität und tragbarem Risiko)." }
    ],
    exercises: [
      {
        id: "finv-guetertroeme-cfo-e1",
        prompt: "Beschreiben Sie in eigenen Worten den Kreislauf von Güter-, Leistungs- und Zahlungsströmen zwischen Beschaffungsmarkt, Unternehmen und Absatzmarkt.",
        solution: [{ type: "p", text: "Vom Beschaffungsmarkt fließen materielle Produktionsfaktoren (z. B. Rohstoffe, Maschinen) ins Unternehmen; im Gegenzug fließen Auszahlungen an die Lieferanten. Vom Arbeitsmarkt fließt Arbeitsleistung ins Unternehmen; im Gegenzug fließen Lohn-/Gehaltsauszahlungen. Im Unternehmen werden diese Faktoren im Transformationsprozess zu fertigen Gütern/Dienstleistungen umgewandelt, die zum Absatzmarkt fließen; im Gegenzug fließen Einzahlungen (Umsatzerlöse) vom Absatzmarkt zurück ins Unternehmen. Der Finanz-/Kapitalmarkt ergänzt diesen Kreislauf durch Kapitalaufnahmen (Einzahlung) und Kapitalrückzahlungen/Ausschüttungen (Auszahlung)." }]
      },
      {
        id: "finv-guetertroeme-cfo-e2",
        prompt: "Erklären Sie den Unterschied zwischen der Rolle des CFO als Treasurer und als Controller.",
        solution: [{ type: "p", text: "Als Treasurer steuert der CFO die Zahlungsströme des Unternehmens (Kapitalbeschaffung, Kapitalanlage, Liquiditätssteuerung) und trägt die generelle Koordinationsverantwortung für Finanzierungsvorgänge. Als Controller ist der CFO für das Rechnungswesen, die Informationsaufbereitung und die Planung (inkl. Budgetierung) verantwortlich. Beide Rollen zusammen sichern, dass das Unternehmen jederzeit über die nötige Übersicht über seine finanzielle Lage verfügt." }]
      },
      {
        id: "finv-guetertroeme-cfo-e3",
        prompt: "Nennen Sie vier zentrale Aufgabenbereiche des CFO.",
        solution: [{ type: "p", text: "Kapitalbeschaffung (Finanzmittel für das Unternehmen beschaffen), Kapitalanlage (überschüssige Mittel gewinnbringend anlegen), Finanzplanung (Liquiditäts- und Kapitalbedarfsplanung), Bilanzmanagement (Steuerung der Bilanzstruktur, z. B. Fristenkongruenz, Eigenkapitalquote)." }]
      },
      {
        id: "finv-guetertroeme-cfo-e4",
        prompt: "Warum ist der Arbeitsmarkt in der Betrachtung der Güter-, Leistungs- und Finanzströme eines Unternehmens genauso relevant wie der Beschaffungsmarkt für Sachgüter?",
        solution: [{ type: "p", text: "Auch Arbeitsleistung ist ein Produktionsfaktor, der von außen (vom Arbeitsmarkt) ins Unternehmen fließt und dort im Transformationsprozess eingesetzt wird — analog zu Rohstoffen oder Maschinen vom Beschaffungsmarkt. Diesem Zufluss steht ein entsprechender Zahlungsabfluss (Löhne und Gehälter) gegenüber. Ohne Berücksichtigung des Arbeitsmarktes wäre die Darstellung der Unternehmensströme unvollständig, da Personalkosten in den meisten Unternehmen einen erheblichen Anteil der Auszahlungen ausmachen." }]
      },
      {
        id: "finv-guetertroeme-cfo-e5",
        prompt: "Was ist das übergeordnete Ziel der finanzwirtschaftlichen Steuerung durch den CFO?",
        solution: [{ type: "p", text: "Die Sicherung der Existenz des Unternehmens durch Erhalt des finanziellen Gleichgewichts — d. h. das Unternehmen muss jederzeit zahlungsfähig (liquide) bleiben, dabei eine angemessene Rentabilität erwirtschaften und die damit verbundenen Risiken in einem tragbaren Rahmen halten (vgl. Spannungsdreieck aus Liquidität, Rentabilität, Risiko)." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Wohin fließen die materiellen Produktionsfaktoren eines Unternehmens?", options: ["Vom Unternehmen an den Arbeitsmarkt", "Vom Absatzmarkt in das Unternehmen", "Vom Kapitalmarkt in das Unternehmen (durch Kapitalaufnahme)", "Vom Beschaffungsmarkt in das Unternehmen"], correctIndex: 3, explanation: "Materielle Produktionsfaktoren wie Rohstoffe und Vorprodukte werden am Beschaffungsmarkt eingekauft und fließen von dort in den Transformationsprozess des Unternehmens. Der Arbeitsmarkt liefert dagegen Arbeitsleistung, der Absatzmarkt nimmt fertige Güter ab, und über den Kapitalmarkt fließt nur Kapital, keine Produktionsfaktoren." },
      { id: "q2", question: "In welche Richtung laufen die Zahlungsströme im Vergleich zu den Güter-/Leistungsströmen?", options: ["Nur bei Exportgeschäften entgegengesetzt", "Es besteht kein Zusammenhang", "Genau entgegengesetzt", "In dieselbe Richtung"], correctIndex: 2, explanation: "Güter/Leistungen und die dafür fließenden Zahlungen sind zwei Seiten desselben Tauschvorgangs, deshalb verläuft der Zahlungsstrom stets entgegengesetzt zum Güter-/Leistungsstrom: Wer Güter empfängt, zahlt dafür; wer sie liefert, erhält die Zahlung — egal ob am Beschaffungs-, Arbeits- oder Absatzmarkt." },
      { id: "q3", question: "Welche Rolle nimmt der CFO als 'Treasurer' wahr?", options: ["Nur die externe Rechnungslegung", "Rechnungswesen und Informationsaufbereitung", "Steuerung der Zahlungsströme, Kapitalbeschaffung und -anlage", "Ausschließlich Personalverwaltung und Recruiting-Aktivitäten"], correctIndex: 2, explanation: "Der CFO als Treasurer verantwortet die Steuerung der Zahlungsvorgänge sowie Kapitalbeschaffung und -anlage und trägt die generelle Koordinationsverantwortung für Finanzierungsfragen. Rechnungswesen und Planung fallen dagegen in die Controller-Rolle." },
      { id: "q4", question: "Welche Rolle nimmt der CFO als 'Controller' wahr?", options: ["Verhandlung von Großfinanzierungen im internationalen Kapitalmarkt", "Marketing und Vertrieb", "Steuerung der Produktionsprozesse", "Rechnungswesenverantwortung, Informationsverarbeitung und Planung"], correctIndex: 3, explanation: "Als Controller trägt der CFO die generelle Rechnungswesenverantwortung, bereitet Informationen für Entscheidungen auf und ist für die Planung zuständig. Zahlungssteuerung und Kapitalbeschaffung gehören dagegen zur Treasurer-Rolle, nicht zur Controller-Rolle." },
      { id: "q5", question: "Welcher Markt liefert dem Unternehmen Arbeitsleistung?", options: ["Arbeitsmarkt", "Absatzmarkt", "Kapitalmarkt", "Beschaffungsmarkt"], correctIndex: 0, explanation: "Der Arbeitsmarkt ist definitionsgemäß die Quelle der Arbeitsleistung, die ins Unternehmen fließt und im Transformationsprozess eingesetzt wird; im Gegenzug fließen Lohn- und Gehaltsauszahlungen dorthin zurück. Beschaffungs- und Absatzmarkt betreffen dagegen Sachgüter bzw. fertige Produkte." },
      { id: "q6", question: "Was ist das übergeordnete Ziel des Finanzmanagements laut Vorlesung?", options: ["Maximierung des Umsatzes um jeden Preis", "Minimierung aller Kosten ohne jegliche Rücksicht auf die Liquidität", "Sicherung des finanziellen Gleichgewichts des Unternehmens", "Ausschließlich Gewinnmaximierung im laufenden Jahr"], correctIndex: 2, explanation: "Ziel ist laut Vorlesung die Sicherung der Existenz des Unternehmens durch Erhalt des finanziellen Gleichgewichts — also jederzeitige Zahlungsfähigkeit bei angemessener Rentabilität und tragbarem Risiko, nicht einseitige Umsatz- oder Kostenziele." },
      { id: "q7", question: "Wie fließen die fertigen Güter/Leistungen eines Unternehmens?", options: ["Vom Beschaffungsmarkt zum Absatzmarkt direkt", "Vom Unternehmen zum Absatzmarkt", "Vom Absatzmarkt zum Unternehmen", "Sie fließen nicht, nur Zahlungen fließen"], correctIndex: 1, explanation: "Im Transformationsprozess werden eingekaufte Produktionsfaktoren zu verkaufsfähigen Gütern und Dienstleistungen umgewandelt, die anschließend vom Unternehmen zum Absatzmarkt fließen; im Gegenzug erhält das Unternehmen von dort Einzahlungen aus Umsatzerlösen." },
      { id: "q8", question: "Welcher Zahlungsstrom fließt typischerweise vom Absatzmarkt zum Unternehmen?", options: ["Einzahlungen aus Umsatzerlösen", "Auszahlungen für Rohstoffe", "Dividendenzahlungen an Aktionäre", "Lohnzahlungen"], correctIndex: 0, explanation: "Verkauft das Unternehmen Güter oder Dienstleistungen am Absatzmarkt, fließen ihm dafür Einzahlungen aus Umsatzerlösen zu — der Gegenstrom zum Güterfluss vom Unternehmen zum Absatzmarkt. Auszahlungen für Rohstoffe und Löhne betreffen dagegen Beschaffungs- bzw. Arbeitsmarkt." },
      { id: "q9", question: "Welche zwei Aufgabenbereiche verbindet der Finanz-/Kapitalmarkt zusätzlich mit dem Unternehmen?", options: ["Nur die Beschaffung von Rohstoffen und Vorprodukten", "Kapitalaufnahme und Kapitalrückzahlung/Ausschüttung", "Produktentwicklung", "Personalbeschaffung"], correctIndex: 1, explanation: "Der Finanz-/Kapitalmarkt verbindet sich zusätzlich mit dem Unternehmen über die Kapitalaufnahme (Einzahlung ins Unternehmen) sowie die Kapitalrückzahlung bzw. Ausschüttung (Auszahlung), ergänzend zu den Strömen mit Beschaffungs-, Arbeits- und Absatzmarkt." },
      { id: "q10", question: "Wem ist die Finanzorganisation eines Unternehmens typischerweise unterstellt?", options: ["Externen Wirtschaftsprüfern", "Ausschließlich dem Aufsichtsrat", "Direkt den Aktionären ohne jegliche Managementebene oder Aufsicht", "Dem CEO, mit dem CFO als zuständiger Führungskraft für Finanzen"], correctIndex: 3, explanation: "Die Finanzorganisation ist laut Vorlesung typischerweise dem CEO unterstellt; innerhalb dieser trägt der CFO als Führungskraft die Verantwortung für die finanzielle Lage des Unternehmens, während Wirtschaftsprüfer und Aufsichtsrat externe Kontrollfunktionen wahrnehmen." }
    ]
  },
  {
    id: "finv-spannungsdreieck-bilanzvorgaenge",
    chapter: 2,
    order: 2,
    title: "Spannungsdreieck und Geschäftsvorfälle in der Bilanz",
    icon: "📐",
    summary: "Das Spannungsdreieck aus Liquidität, Rentabilität und Risiko, sowie wie sich typische Geschäftsvorfälle auf die Bilanz auswirken (Aktivtausch, Passivtausch, Bilanzverlängerung/-verkürzung).",
    explanation: [
      { type: "p", text: "Das Finanzmanagement muss laufend zwischen drei teilweise gegenläufigen Zielen abwägen — dem sogenannten Spannungsdreieck (vergleichbar dem \"magischen Dreieck\" der Kapitalanlage):" },
      { type: "list", items: [
        "Liquidität: Zahlungsbereitschaft, Fähigkeit, jederzeit fällige Zahlungsverpflichtungen zu erfüllen",
        "Rentabilität: Verzinsung des eingesetzten (Eigen-)Kapitals, erwirtschafteter Gewinn im Verhältnis zum eingesetzten Kapital",
        "Risiko/Sicherheit: Verhalten der Liquidität und Solvenz unter unsicheren Rahmenbedingungen"
      ]},
      { type: "p", text: "Diese drei Ziele stehen häufig im Widerspruch zueinander: Höhere Liquidität (z. B. hohe Kassenbestände) kostet meist Rentabilität (entgangene Zinserträge aus besserer Anlage); höhere Rentabilität geht oft mit höherem Risiko einher (z. B. durch mehr Fremdkapitaleinsatz, vgl. Leverage-Effekt in Kapitel 4)." },
      { type: "p", text: "Geschäftsvorfälle lassen sich in vier Grundtypen der Bilanzveränderung einordnen:" },
      { type: "list", items: [
        "Aktivtausch: Ein Aktivposten steigt, ein anderer sinkt in gleicher Höhe (Bilanzsumme unverändert). Beispiel: Kauf einer Maschine gegen Kasse.",
        "Passivtausch: Ein Passivposten steigt, ein anderer sinkt in gleicher Höhe (Bilanzsumme unverändert). Beispiel: Umwandlung eines kurzfristigen in ein langfristiges Darlehen.",
        "Bilanzverlängerung: Ein Aktiv- und ein Passivposten steigen gleichzeitig um denselben Betrag (Bilanzsumme wächst). Beispiel: Kreditaufnahme, die auf dem Bankkonto gutgeschrieben wird.",
        "Bilanzverkürzung: Ein Aktiv- und ein Passivposten sinken gleichzeitig um denselben Betrag (Bilanzsumme schrumpft). Beispiel: Rückzahlung eines Kredits aus der Kasse."
      ]}
    ],
    exercises: [
      {
        id: "finv-spannungsdreieck-bilanzvorgaenge-e1",
        prompt: "Ein Unternehmen nimmt einen Kredit in Höhe von 100.000 € auf. Um welchen der vier Bilanzvorgänge handelt es sich, und wie verändert sich die Bilanzsumme?",
        solution: [{ type: "p", text: "Es handelt sich um eine Bilanzverlängerung: Die Kasse (Aktivposten) steigt um 100.000 €, gleichzeitig steigt das Fremdkapital/die Verbindlichkeit (Passivposten) um 100.000 €. Die Bilanzsumme wächst insgesamt um 100.000 €." }]
      },
      {
        id: "finv-spannungsdreieck-bilanzvorgaenge-e2",
        prompt: "Das Unternehmen aus Aufgabe 1 kauft anschließend Rohmaterialien im Wert von 50.000 € gegen Barzahlung. Um welchen Bilanzvorgang handelt es sich?",
        solution: [{ type: "p", text: "Aktivtausch: Die Kasse sinkt um 50.000 €, die Vorräte (Rohmaterialien) steigen um 50.000 €. Die Bilanzsumme bleibt unverändert." }]
      },
      {
        id: "finv-spannungsdreieck-bilanzvorgaenge-e3",
        prompt: "Das Unternehmen begleicht eine Lieferantenrechnung in Höhe von 30.000 € durch Überweisung von der Bank. Um welchen Bilanzvorgang handelt es sich, und warum?",
        solution: [{ type: "p", text: "Bilanzverkürzung: Die Kasse/Bankguthaben (Aktivposten) sinkt um 30.000 €, gleichzeitig sinken die Verbindlichkeiten aus Lieferungen und Leistungen (Passivposten) um 30.000 €. Da ein Aktiv- und ein Passivposten gleichzeitig um denselben Betrag sinken, verkürzt sich die Bilanzsumme insgesamt um 30.000 €." }]
      },
      {
        id: "finv-spannungsdreieck-bilanzvorgaenge-e4",
        prompt: "Erläutern Sie an einem Beispiel, warum eine höhere Liquidität oft zulasten der Rentabilität geht.",
        solution: [{ type: "p", text: "Hält ein Unternehmen sehr hohe Kassenbestände oder kurzfristig verfügbare, niedrig verzinste Sichteinlagen, um jederzeit zahlungsfähig zu sein, verzichtet es auf die höhere Rendite, die es mit einer längerfristigen, aber weniger liquiden Kapitalanlage (z. B. einer Anleihe mit mehrjähriger Laufzeit) erzielen könnte. Die zusätzliche Sicherheit/Liquidität wird also durch entgangene Erträge (Opportunitätskosten) erkauft." }]
      },
      {
        id: "finv-spannungsdreieck-bilanzvorgaenge-e5",
        prompt: "Ein Unternehmen wandelt ein kurzfristiges Bankdarlehen (Laufzeit 6 Monate) in ein langfristiges Bankdarlehen (Laufzeit 5 Jahre) über denselben Betrag um. Um welchen Bilanzvorgang handelt es sich?",
        solution: [{ type: "p", text: "Passivtausch: Das kurzfristige Fremdkapital (ein Passivposten) sinkt, das langfristige Fremdkapital (ein anderer Passivposten) steigt in gleicher Höhe. Die Aktivseite und die Bilanzsumme bleiben unverändert." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche drei Ziele bilden das Spannungsdreieck des Finanzmanagements?", options: ["Umsatz, Gewinn, Marktanteil", "Eigenkapital, Fremdkapital, Mischkapital", "Kosten, Qualität, Zeit", "Liquidität, Rentabilität, Risiko"], correctIndex: 3, explanation: "Das Spannungsdreieck des Finanzmanagements besteht aus Liquidität (Zahlungsbereitschaft), Rentabilität (Verzinsung des eingesetzten Kapitals) und Risiko/Sicherheit — vergleichbar dem 'magischen Dreieck' der Kapitalanlage. Diese drei Ziele stehen häufig im Widerspruch zueinander." },
      { id: "q2", question: "Warum stehen Liquidität und Rentabilität häufig im Widerspruch zueinander?", options: ["Rentabilität hat überhaupt nichts mit der Kapitalanlage zu tun", "Liquidität erhöht in jedem Fall automatisch auch die Rentabilität", "Sie hängen überhaupt nicht zusammen", "Hohe Liquidität kostet oft Rendite (niedrigere Verzinsung)"], correctIndex: 3, explanation: "Wer sehr liquide, jederzeit verfügbare Mittel hält (z. B. hohe Kassenbestände), verzichtet meist auf die höhere Rendite langfristiger, weniger liquider Anlagen — Liquidität und Rentabilität stehen deshalb typischerweise im Zielkonflikt, wie im Spannungsdreieck beschrieben." },
      { id: "q3", question: "Ein Unternehmen kauft eine Maschine gegen Barzahlung. Welcher Bilanzvorgang liegt vor?", options: ["Aktivtausch", "Passivtausch", "Bilanzverlängerung", "Bilanzverkürzung"], correctIndex: 0, explanation: "Kasse (sinkt) und Maschine (steigt) sind beides Aktivposten; da sich nur die Zusammensetzung der Aktivseite ändert und die Bilanzsumme gleich bleibt, handelt es sich um einen Aktivtausch — nicht um Passivtausch oder eine Bilanzverlängerung/-verkürzung, bei denen sich die Bilanzsumme ändern würde." },
      { id: "q4", question: "Ein Unternehmen nimmt einen Kredit auf, der auf dem Bankkonto gutgeschrieben wird. Welcher Bilanzvorgang liegt vor?", options: ["Bilanzverkürzung", "Bilanzverlängerung", "Aktivtausch", "Passivtausch (Veränderung nur auf der Passivseite)"], correctIndex: 1, explanation: "Sowohl ein Aktivposten (Bankguthaben) als auch ein Passivposten (Verbindlichkeit) steigen gleichzeitig um den Kreditbetrag, wodurch die Bilanzsumme insgesamt wächst — das ist per Definition eine Bilanzverlängerung, im Gegensatz zu Aktiv-/Passivtausch, bei denen sie unverändert bleibt." },
      { id: "q5", question: "Ein Unternehmen tilgt einen Kredit aus der Kasse. Welcher Bilanzvorgang liegt vor?", options: ["Passivtausch", "Bilanzverkürzung", "Aktivtausch", "Bilanzverlängerung"], correctIndex: 1, explanation: "Kasse (Aktivposten) und Kreditverbindlichkeit (Passivposten) sinken gleichzeitig um denselben Betrag, wodurch die Bilanzsumme insgesamt schrumpft — das entspricht per Definition einer Bilanzverkürzung, nicht einem bloßen Tausch innerhalb einer Bilanzseite." },
      { id: "q6", question: "Ein Unternehmen wandelt kurzfristiges in langfristiges Fremdkapital um (gleicher Betrag). Welcher Bilanzvorgang liegt vor?", options: ["Passivtausch", "Aktivtausch", "Bilanzverkürzung", "Bilanzverlängerung"], correctIndex: 0, explanation: "Kurzfristiges und langfristiges Fremdkapital sind beides Passivposten; das eine sinkt, das andere steigt in gleicher Höhe, während Aktivseite und Bilanzsumme unverändert bleiben. Das ist die Definition eines Passivtauschs, im Unterschied zum Aktivtausch, der nur die Aktivseite betrifft." },
      { id: "q7", question: "Was passiert mit der Bilanzsumme bei einem Aktivtausch?", options: ["Sie verdoppelt sich in jedem Fall", "Sie steigt", "Sie bleibt unverändert", "Sie sinkt"], correctIndex: 2, explanation: "Beim Aktivtausch verändern sich nur zwei Posten auf derselben (Aktiv-)Seite der Bilanz gegenläufig um denselben Betrag — die Bilanzsumme bleibt daher rechnerisch unverändert, anders als bei Bilanzverlängerung oder -verkürzung." },
      { id: "q8", question: "Welche Kennzahl / welches Ziel misst am ehesten, wie gut ein Unternehmen unsicheren Entwicklungen standhält?", options: ["Rentabilität", "Risiko/Sicherheit", "Umsatzwachstum im Vergleich zum Vorjahr", "Marktanteil"], correctIndex: 1, explanation: "Das Risiko-/Sicherheitsziel im Spannungsdreieck erfasst gezielt, wie sich Liquidität und Solvenz eines Unternehmens unter unsicheren Rahmenbedingungen verhalten — Rentabilität und Umsatzwachstum sind reine Ertragsgrößen und sagen dazu nichts aus." },
      { id: "q9", question: "Warum ist reine Gewinnmaximierung ohne Berücksichtigung von Liquidität und Risiko gefährlich?", options: ["Risiko spielt für Unternehmen keine Rolle", "Sie ist überhaupt nicht gefährlich", "Ein profitables Unternehmen kann trotzdem zahlungsunfähig werden", "Gewinn und Liquidität sind in jedem Unternehmen zu jeder Zeit identisch"], correctIndex: 2, explanation: "Gewinn und Liquidität sind nicht dasselbe: Ein Unternehmen kann Gewinne ausweisen und trotzdem zahlungsunfähig werden, wenn es Liquidität und Risiko vernachlässigt — das widerspricht dem Spannungsdreieck, das Rentabilität stets zusammen mit Liquidität und Risiko betrachtet." },
      { id: "q10", question: "Ein Unternehmen bezahlt eine fällige Lieferantenrechnung per Überweisung. Welcher Bilanzvorgang liegt vor?", options: ["Bilanzverkürzung", "Aktivtausch", "Bilanzverlängerung", "Passivtausch"], correctIndex: 0, explanation: "Bankguthaben (Aktivposten) und Verbindlichkeiten aus Lieferungen und Leistungen (Passivposten) sinken gleichzeitig um denselben Betrag, wodurch sich die Bilanzsumme insgesamt verringert — das ist definitionsgemäß eine Bilanzverkürzung." }
    ]
  }
];
