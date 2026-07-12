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
      { id: "q1", question: "Wohin fließen die materiellen Produktionsfaktoren eines Unternehmens?", options: ["Vom Unternehmen an den Arbeitsmarkt", "Vom Absatzmarkt in das Unternehmen", "Vom Kapitalmarkt in das Unternehmen", "Vom Beschaffungsmarkt in das Unternehmen"], correctIndex: 3, explanation: "Materielle Produktionsfaktoren (Rohstoffe, Vorprodukte, Anlagen) werden am Beschaffungsmarkt eingekauft und fließen ins Unternehmen." },
      { id: "q2", question: "In welche Richtung laufen die Zahlungsströme im Vergleich zu den Güter-/Leistungsströmen?", options: ["Nur bei Exportgeschäften entgegengesetzt", "Es besteht kein Zusammenhang", "Genau entgegengesetzt", "In dieselbe Richtung"], correctIndex: 2, explanation: "Zahlungsströme laufen entgegengesetzt zu den Güter-/Leistungsströmen: Wer Güter/Leistungen empfängt, zahlt dafür; wer sie liefert, erhält die Zahlung." },
      { id: "q3", question: "Welche Rolle nimmt der CFO als 'Treasurer' wahr?", options: ["Nur die externe Rechnungslegung", "Rechnungswesen und Informationsaufbereitung", "Steuerung der Zahlungsströme, Kapitalbeschaffung und -anlage", "Ausschließlich Personalverwaltung"], correctIndex: 2, explanation: "Als Treasurer koordiniert der CFO die Zahlungsströme sowie Kapitalbeschaffung und -anlage." },
      { id: "q4", question: "Welche Rolle nimmt der CFO als 'Controller' wahr?", options: ["Verhandlung von Großfinanzierungen", "Marketing und Vertrieb", "Steuerung der Produktionsprozesse", "Rechnungswesenverantwortung, Informationsverarbeitung und Planung"], correctIndex: 3, explanation: "Als Controller ist der CFO für Rechnungswesen, Informationsaufbereitung und Planung verantwortlich." },
      { id: "q5", question: "Welcher Markt liefert dem Unternehmen Arbeitsleistung?", options: ["Arbeitsmarkt", "Absatzmarkt", "Kapitalmarkt", "Beschaffungsmarkt"], correctIndex: 0, explanation: "Der Arbeitsmarkt ist die Quelle für die vom Unternehmen benötigte Arbeitsleistung." },
      { id: "q6", question: "Was ist das übergeordnete Ziel des Finanzmanagements laut Vorlesung?", options: ["Maximierung des Umsatzes um jeden Preis", "Minimierung aller Kosten ohne Rücksicht auf Liquidität", "Sicherung des finanziellen Gleichgewichts des Unternehmens", "Ausschließlich Gewinnmaximierung im laufenden Jahr"], correctIndex: 2, explanation: "Ziel ist die Sicherung der Existenz des Unternehmens durch Erhalt des finanziellen Gleichgewichts." },
      { id: "q7", question: "Wie fließen die fertigen Güter/Leistungen eines Unternehmens?", options: ["Vom Beschaffungsmarkt zum Absatzmarkt direkt", "Vom Unternehmen zum Absatzmarkt", "Vom Absatzmarkt zum Unternehmen", "Sie fließen nicht, nur Zahlungen fließen"], correctIndex: 1, explanation: "Fertige Produkte/Dienstleistungen fließen vom Transformationsprozess im Unternehmen zum Absatzmarkt." },
      { id: "q8", question: "Welcher Zahlungsstrom fließt typischerweise vom Absatzmarkt zum Unternehmen?", options: ["Einzahlungen aus Umsatzerlösen", "Auszahlungen für Rohstoffe", "Dividendenzahlungen an Aktionäre", "Lohnzahlungen"], correctIndex: 0, explanation: "Verkauft das Unternehmen am Absatzmarkt, erhält es dafür Einzahlungen (Umsatzerlöse)." },
      { id: "q9", question: "Welche zwei Aufgabenbereiche verbindet der Finanz-/Kapitalmarkt zusätzlich mit dem Unternehmen?", options: ["Nur Beschaffung von Rohstoffen", "Kapitalaufnahme und Kapitalrückzahlung/Ausschüttung", "Produktentwicklung", "Personalbeschaffung"], correctIndex: 1, explanation: "Über den Finanz-/Kapitalmarkt nimmt das Unternehmen Kapital auf (Einzahlung) und zahlt Kapital zurück bzw. schüttet Gewinne aus (Auszahlung)." },
      { id: "q10", question: "Wem ist die Finanzorganisation eines Unternehmens typischerweise unterstellt?", options: ["Externen Wirtschaftsprüfern", "Ausschließlich dem Aufsichtsrat", "Direkt den Aktionären ohne Managementebene", "Dem CEO, mit dem CFO als zuständiger Führungskraft für Finanzen"], correctIndex: 3, explanation: "Die Finanzorganisation ist üblicherweise dem CEO unterstellt, mit dem CFO als verantwortlicher Führungskraft für den Finanzbereich." }
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
      { id: "q1", question: "Welche drei Ziele bilden das Spannungsdreieck des Finanzmanagements?", options: ["Umsatz, Gewinn, Marktanteil", "Eigenkapital, Fremdkapital, Mischkapital", "Kosten, Qualität, Zeit", "Liquidität, Rentabilität, Risiko"], correctIndex: 3, explanation: "Das Spannungsdreieck besteht aus Liquidität, Rentabilität und Risiko (analog zum magischen Dreieck der Kapitalanlage)." },
      { id: "q2", question: "Warum stehen Liquidität und Rentabilität häufig im Widerspruch zueinander?", options: ["Rentabilität hat nichts mit Kapitalanlage zu tun", "Liquidität erhöht immer automatisch die Rentabilität", "Sie hängen überhaupt nicht zusammen", "Höhere Liquidität (z. B. Kassenhaltung) bedeutet oft, auf höher rentierliche, aber weniger liquide Anlagen zu verzichten"], correctIndex: 3, explanation: "Sehr liquide Mittel sind meist niedrig verzinst; für höhere Rendite muss man oft auf Liquidität verzichten (Kapitalbindung)." },
      { id: "q3", question: "Ein Unternehmen kauft eine Maschine gegen Barzahlung. Welcher Bilanzvorgang liegt vor?", options: ["Aktivtausch", "Passivtausch", "Bilanzverlängerung", "Bilanzverkürzung"], correctIndex: 0, explanation: "Ein Aktivposten (Kasse) sinkt, ein anderer (Maschine) steigt in gleicher Höhe — Bilanzsumme bleibt gleich: Aktivtausch." },
      { id: "q4", question: "Ein Unternehmen nimmt einen Kredit auf, der auf dem Bankkonto gutgeschrieben wird. Welcher Bilanzvorgang liegt vor?", options: ["Bilanzverkürzung", "Bilanzverlängerung", "Aktivtausch", "Passivtausch"], correctIndex: 1, explanation: "Sowohl ein Aktivposten (Bankguthaben) als auch ein Passivposten (Verbindlichkeit) steigen gleichzeitig — Bilanzsumme wächst: Bilanzverlängerung." },
      { id: "q5", question: "Ein Unternehmen tilgt einen Kredit aus der Kasse. Welcher Bilanzvorgang liegt vor?", options: ["Passivtausch", "Bilanzverkürzung", "Aktivtausch", "Bilanzverlängerung"], correctIndex: 1, explanation: "Aktivposten (Kasse) und Passivposten (Kreditverbindlichkeit) sinken gleichzeitig — Bilanzsumme schrumpft: Bilanzverkürzung." },
      { id: "q6", question: "Ein Unternehmen wandelt kurzfristiges in langfristiges Fremdkapital um (gleicher Betrag). Welcher Bilanzvorgang liegt vor?", options: ["Passivtausch", "Aktivtausch", "Bilanzverkürzung", "Bilanzverlängerung"], correctIndex: 0, explanation: "Zwei Passivposten verändern sich gegenläufig in gleicher Höhe — die Aktivseite bleibt unberührt: Passivtausch." },
      { id: "q7", question: "Was passiert mit der Bilanzsumme bei einem Aktivtausch?", options: ["Sie verdoppelt sich", "Sie steigt", "Sie bleibt unverändert", "Sie sinkt"], correctIndex: 2, explanation: "Beim Aktivtausch verändert sich nur die Zusammensetzung der Aktivseite, die Bilanzsumme bleibt konstant." },
      { id: "q8", question: "Welche Kennzahl / welches Ziel misst am ehesten, wie gut ein Unternehmen unsicheren Entwicklungen standhält?", options: ["Rentabilität", "Risiko/Sicherheit", "Umsatzwachstum", "Marktanteil"], correctIndex: 1, explanation: "Das Risiko-/Sicherheitsziel im Spannungsdreieck betrifft die Widerstandsfähigkeit gegenüber unsicheren Entwicklungen." },
      { id: "q9", question: "Warum ist reine Gewinnmaximierung ohne Berücksichtigung von Liquidität und Risiko gefährlich?", options: ["Risiko spielt für Unternehmen keine Rolle", "Sie ist überhaupt nicht gefährlich", "Ein Unternehmen kann trotz Gewinn zahlungsunfähig werden (Illiquidität), wenn Liquidität und Risiko vernachlässigt werden", "Gewinn und Liquidität sind immer identisch"], correctIndex: 2, explanation: "Auch profitable Unternehmen können insolvent werden, wenn sie zahlungsunfähig sind — Gewinn allein sichert nicht die Liquidität." },
      { id: "q10", question: "Ein Unternehmen bezahlt eine fällige Lieferantenrechnung per Überweisung. Welcher Bilanzvorgang liegt vor?", options: ["Bilanzverkürzung", "Aktivtausch", "Bilanzverlängerung", "Passivtausch"], correctIndex: 0, explanation: "Die Bankguthaben (Aktiv) und die Verbindlichkeiten (Passiv) sinken gleichzeitig um denselben Betrag: Bilanzverkürzung." }
    ]
  }
];
