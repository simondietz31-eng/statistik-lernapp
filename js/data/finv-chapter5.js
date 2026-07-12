const FINV_CHAPTER5_TOPICS = [
  {
    id: "finv-selbstfinanzierung",
    chapter: 5,
    order: 1,
    title: "Offene und stille Selbstfinanzierung",
    icon: "🔒",
    summary: "Wie ein Unternehmen sich durch einbehaltene Gewinne und stille Reserven aus dem eigenen Umsatzprozess finanziert.",
    explanation: [
      { type: "p", text: "Innenfinanzierung bedeutet, dass sich das Unternehmen aus eigener Kraft — ohne Zufluss neuer Mittel von außen — finanziert. Der zentrale Unterschied zur Außenfinanzierung: Bei Innenfinanzierung sinkt (durch die Einbehaltung von Mitteln) der ausgewiesene Gewinn bzw. steigen bestimmte Aufwandspositionen, wodurch weniger Steuern anfallen und weniger für eine Ausschüttung zur Verfügung steht — die frei werdenden Mittel bleiben im Unternehmen." },
      { type: "p", text: "Selbstfinanzierung aus dem Umsatzprozess gliedert sich in:" },
      { type: "list", items: [
        "Offene Selbstfinanzierung: Ein Teil des ausgewiesenen (offen in der Bilanz sichtbaren) Jahresüberschusses wird nicht ausgeschüttet, sondern in die Gewinnrücklagen eingestellt und bleibt so im Unternehmen gebunden.",
        "Stille Selbstfinanzierung: Durch die Bildung stiller Reserven (z. B. durch besonders vorsichtige Bewertung von Vermögensgegenständen oder durch überhöhte Rückstellungen) wird der ausgewiesene Gewinn planmäßig niedriger dargestellt, als er wirtschaftlich tatsächlich ist. Die dadurch nicht ausgeschütteten und nicht versteuerten Mittel verbleiben verdeckt im Unternehmen."
      ]},
      { type: "p", text: "Bedeutung des Umsatzes: Ohne ausreichenden Umsatz kann grundsätzlich nichts umgeschichtet oder abgeschrieben werden — Innenfinanzierung funktioniert nur, wenn die entsprechenden Mittel tatsächlich am Markt verdient und dem Unternehmen liquide zugeflossen sind. Eine reine Werterhöhung vorhandener Vermögensgegenstände (z. B. eine im Wert gestiegene, selbstgenutzte Immobilie) erhöht die Liquidität nicht und ist daher KEINE Innenfinanzierung im engeren Sinn." },
      { type: "p", text: "Vorteile der stillen Selbstfinanzierung: Die Mittel stehen dem Unternehmen unbemerkt von außen zur Verfügung, was z. B. Verhandlungsspielraum gegenüber Kapitalgebern oder Wettbewerbern schaffen kann. Nachteil: geringere Transparenz für Bilanzadressaten, mögliche Fehlsteuerung durch verzerrte Kennzahlen." }
    ],
    exercises: [
      {
        id: "finv-selbstfinanzierung-e1",
        prompt: "Eine AG erzielt einen Jahresüberschuss von 4.000.000 €. Die Hauptversammlung beschließt, 60 % davon einzubehalten und 40 % auszuschütten. Um welche Finanzierungsform handelt es sich beim einbehaltenen Teil, und wie hoch ist der einbehaltene Betrag?",
        solution: [{ type: "p", text: "Es handelt sich um offene Selbstfinanzierung (der Jahresüberschuss ist offen ausgewiesen, ein Teil wird sichtbar in Gewinnrücklagen eingestellt). Einbehaltener Betrag = 60 % × 4.000.000 € = 2.400.000 €." }]
      },
      {
        id: "finv-selbstfinanzierung-e2",
        prompt: "Ein Unternehmen bildet eine steuerlich anerkannte Sonderabschreibung, die über dem tatsächlichen Werteverzehr eines Vermögensgegenstands liegt. Um welche Form der Innenfinanzierung handelt es sich, und warum?",
        solution: [{ type: "p", text: "Es handelt sich um stille Selbstfinanzierung: Die überhöhte Abschreibung mindert den ausgewiesenen Gewinn stärker, als es der tatsächlichen Wertminderung entspricht. Dadurch entstehen stille Reserven — der wirtschaftliche Wert des Unternehmens ist höher, als es die Bilanz zeigt, und die zusätzlich einbehaltenen (nicht ausgeschütteten, geringer besteuerten) Mittel verbleiben verdeckt im Unternehmen." }]
      },
      {
        id: "finv-selbstfinanzierung-e3",
        prompt: "Der Wert eines unternehmenseigenen, selbstgenutzten Bürogebäudes steigt im Marktwert um 500.000 €, ohne dass das Unternehmen dies bilanziell auswertet oder verkauft. Handelt es sich um Innenfinanzierung? Begründen Sie.",
        solution: [{ type: "p", text: "Nein. Eine reine Wertsteigerung eines vorhandenen Vermögensgegenstands, die nicht realisiert (z. B. durch Verkauf) und nicht liquiditätswirksam wird, erhöht die Liquidität des Unternehmens nicht und ist daher keine Innenfinanzierung. Innenfinanzierung setzt voraus, dass finanzielle Mittel tatsächlich am Markt verdient und dem Unternehmen liquide zugeflossen sind — reine 'Buchgewinne' durch Wertsteigerung ohne Realisierung erfüllen das nicht." }]
      },
      {
        id: "finv-selbstfinanzierung-e4",
        prompt: "Warum spielt der Umsatz eine so zentrale Rolle für das Innenfinanzierungspotenzial eines Unternehmens?",
        solution: [{ type: "p", text: "Innenfinanzierung — egal ob offene Selbstfinanzierung, stille Selbstfinanzierung oder Finanzierung aus Abschreibungsgegenwerten — setzt voraus, dass dem Unternehmen tatsächlich liquide Mittel aus dem operativen Geschäft zufließen. Diese Mittel stammen letztlich aus dem Umsatz: Nur wenn genügend umgesetzt wird, können Kosten gedeckt, Gewinne erwirtschaftet und Abschreibungsgegenwerte tatsächlich am Markt verdient werden. Ohne ausreichenden Umsatz gibt es keine reale Basis für Umschichtungen oder Abschreibungsgegenwerte, die als Innenfinanzierung genutzt werden könnten." }]
      },
      {
        id: "finv-selbstfinanzierung-e5",
        prompt: "Nennen Sie einen Vor- und einen Nachteil der stillen Selbstfinanzierung gegenüber der offenen Selbstfinanzierung.",
        solution: [{ type: "p", text: "Vorteil: Die einbehaltenen Mittel sind für außenstehende Dritte (z. B. Wettbewerber, Gläubiger, Öffentlichkeit) nicht unmittelbar erkennbar, was dem Unternehmen stille finanzielle Reserven und Verhandlungsspielraum verschafft, ohne dass Erwartungen (z. B. bezüglich künftiger Dividenden) geweckt werden. Nachteil: Geringere Transparenz der Bilanz für Investoren und Gläubiger — die tatsächliche wirtschaftliche Lage des Unternehmens ist schwerer einzuschätzen, was z. B. die Bewertung durch den Kapitalmarkt erschweren kann." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Was passiert bei der Innenfinanzierung mit dem ausgewiesenen Gewinn im Vergleich zur Außenfinanzierung?", options: ["Innenfinanzierung hat keinen Einfluss auf den Gewinn", "Er steigt immer stark an", "Er wird verringert, wodurch weniger Steuern anfallen und weniger für Ausschüttungen zur Verfügung steht", "Er bleibt komplett unverändert"], correctIndex: 2, explanation: "Innenfinanzierung mindert i. d. R. den ausgewiesenen Gewinn (z. B. durch Einbehaltung oder stille Reserven), wodurch mehr Mittel im Unternehmen verbleiben." },
      { id: "q2", question: "Was ist offene Selbstfinanzierung?", options: ["Einbehaltung eines Teils des ausgewiesenen Jahresüberschusses in die Gewinnrücklagen", "Aufnahme eines neuen Bankkredits", "Bildung stiller Reserven durch überhöhte Abschreibungen", "Verkauf von nicht betriebsnotwendigem Vermögen"], correctIndex: 0, explanation: "Offene Selbstfinanzierung ist die sichtbare Einbehaltung von ausgewiesenem Gewinn in die Rücklagen." },
      { id: "q3", question: "Was ist stille Selbstfinanzierung?", options: ["Kreditaufnahme bei der Hausbank", "Eine Form der Außenfinanzierung", "Ausschüttung des gesamten Gewinns an die Aktionäre", "Bildung nicht sichtbarer stiller Reserven, z. B. durch vorsichtige Bewertung oder überhöhte Rückstellungen"], correctIndex: 3, explanation: "Stille Selbstfinanzierung erzeugt verdeckte (stille) Reserven, die den ausgewiesenen Gewinn mindern, ohne offen sichtbar zu sein." },
      { id: "q4", question: "Warum ist reine Wertsteigerung eines selbstgenutzten Vermögensgegenstands keine Innenfinanzierung?", options: ["Weil Wertsteigerungen gesetzlich verboten sind", "Weil das nur bei Immobilien gilt", "Weil die Liquidität dadurch nicht steigt und keine Mittel für neue Investitionen zur Verfügung stehen", "Weil Wertsteigerungen immer versteuert werden müssen"], correctIndex: 2, explanation: "Ohne liquiditätswirksamen Zufluss (z. B. durch Verkauf) kann eine reine Wertsteigerung nicht zur Finanzierung neuer Investitionen genutzt werden." },
      { id: "q5", question: "Welche Rolle spielt der Umsatz für die Innenfinanzierung?", options: ["Er ist die zentrale Voraussetzung, da die finanziellen Mittel am Markt verdient werden müssen", "Keine, Innenfinanzierung funktioniert auch ohne Umsatz", "Umsatz ist nur für die Außenfinanzierung relevant", "Umsatz mindert das Innenfinanzierungspotenzial"], correctIndex: 0, explanation: "Innenfinanzierung setzt voraus, dass Mittel tatsächlich am Markt (über Umsatz) erwirtschaftet und liquide zugeflossen sind." },
      { id: "q6", question: "Ein Unternehmen bildet eine übermäßig hohe Rückstellung für Gewährleistungen ohne rechtliche Verpflichtung dazu. Um welche Innenfinanzierungsform handelt es sich am ehesten?", options: ["Offene Selbstfinanzierung", "Stille Selbstfinanzierung", "Finanzierung aus Vermögensumschichtung", "Das ist keine Innenfinanzierung"], correctIndex: 1, explanation: "Überhöhte Rückstellungen mindern den ausgewiesenen Gewinn verdeckt und bilden stille Reserven — stille Selbstfinanzierung." },
      { id: "q7", question: "Was ist ein Nachteil der stillen Selbstfinanzierung?", options: ["Sie ist grundsätzlich illegal", "Geringere Transparenz für außenstehende Bilanzadressaten", "Sie ist nur bei Einzelunternehmen zulässig", "Sie erhöht immer die Steuerlast"], correctIndex: 1, explanation: "Stille Reserven verschleiern die tatsächliche wirtschaftliche Lage, was die Bewertung durch Dritte erschwert." },
      { id: "q8", question: "Eine AG schüttet die Hälfte ihres Gewinns aus und behält die andere Hälfte ein. Führt das zu Innenfinanzierung?", options: ["Ja, der einbehaltene Teil ist offene Selbstfinanzierung", "Nur bei GmbHs, nicht bei AGs", "Nur wenn das Unternehmen börsennotiert ist", "Nein, überhaupt nicht"], correctIndex: 0, explanation: "Der einbehaltene Gewinnanteil ist ein klassisches Beispiel für offene Selbstfinanzierung." },
      { id: "q9", question: "Welche der folgenden Aussagen zum Zusammenhang von Steuern und Innenfinanzierung ist korrekt?", options: ["Innenfinanzierung hat keinen Bezug zu Steuern", "Nur Außenfinanzierung beeinflusst die Steuerlast", "Innenfinanzierung erhöht immer die Steuerlast", "Ein niedrigerer ausgewiesener Gewinn (durch Innenfinanzierung) führt tendenziell zu geringeren Steuerzahlungen"], correctIndex: 3, explanation: "Da Innenfinanzierung häufig den ausgewiesenen Gewinn mindert (z. B. über stille Reserven), sinkt tendenziell auch die Steuerlast." },
      { id: "q10", question: "Wodurch unterscheidet sich Innenfinanzierung grundlegend von Außenfinanzierung?", options: ["Es gibt praktisch keinen Unterschied", "Bei Außenfinanzierung fließen zusätzliche Mittel von außen ins Unternehmen, bei Innenfinanzierung werden vorhandene/erwirtschaftete Mittel im Unternehmen freigesetzt/gehalten", "Innenfinanzierung erfordert immer einen Börsengang", "Außenfinanzierung ist immer teurer als Innenfinanzierung"], correctIndex: 1, explanation: "Außenfinanzierung bringt neues Kapital von außen, Innenfinanzierung setzt im Unternehmen bereits erwirtschaftete Mittel frei." }
    ]
  },
  {
    id: "finv-abschreibungsgegenwerte-kapazitaetserweiterung",
    chapter: 5,
    order: 2,
    title: "Finanzierung aus Abschreibungsgegenwerten & Kapazitätserweiterungseffekt",
    icon: "🏭",
    summary: "Wie Abschreibungen einen Finanzierungseffekt erzeugen, und wie der Lohmann-Ruchti-Effekt durch laufende Reinvestition die Periodenkapazität erhöhen kann.",
    explanation: [
      { type: "p", text: "Finanzierung aus Abschreibungsgegenwerten beruht auf dem Auseinanderfallen von Aufwand (die planmäßige Abschreibung mindert den ausgewiesenen Gewinn) und tatsächlicher Auszahlung (diese erfolgte bereits einmalig beim Kauf des Vermögensgegenstands). Solange der Umsatz die Abschreibung deckt, bleiben dem Unternehmen liquide Mittel in Höhe der verrechneten Abschreibung erhalten, ohne dass hierfür sofort eine Ersatzinvestition nötig wäre — diese Mittel stehen dem Unternehmen zur freien Verfügung, bis eine Ersatzinvestition ansteht." },
      { type: "p", text: "Der Kapazitätserweiterungseffekt (auch Lohmann-Ruchti-Effekt genannt) verdeutlicht, dass laufend freigesetzte Abschreibungsgegenwerte genutzt werden können, um die betriebliche Kapazität pro Periode dauerhaft zu erhöhen — wenn sie unmittelbar in identische Vermögensgegenstände reinvestiert werden, statt nur am Ende der Nutzungsdauer für eine einzelne Ersatzinvestition zurückgelegt zu werden." },
      { type: "list", items: [
        "Periodenkapazität: die Leistungsfähigkeit eines Vermögensgegenstands in einer bestimmten Periode (z. B. Stück pro Jahr)",
        "Gesamtkapazität: das Leistungsvermögen über die gesamte Nutzungsdauer (z. B. Stück über die gesamte Lebensdauer)",
        "Durch den Kapazitätserweiterungseffekt kann die Periodenkapazität gesteigert werden — die Gesamtkapazität bleibt bei planmäßiger, dem tatsächlichen Werteverzehr entsprechender Abschreibung dagegen unverändert (es werden lediglich Ersatzinvestitionen zeitlich vorgezogen)."
      ]},
      { type: "p", text: "Voraussetzungen für den (vereinfacht dargestellten) Kapazitätserweiterungseffekt: Die Abschreibungsgegenwerte müssen dem Unternehmen tatsächlich liquide zufließen (über Umsatzerlöse), lineare Abschreibung entspricht dem tatsächlichen Werteverzehr, Reinvestition erfolgt laufend am Periodenende in identische Vermögensgegenstände, gleichbleibende Anschaffungspreise und Kapazitäten." },
      { type: "p", text: "Liegt die verrechnete Abschreibung über dem tatsächlichen Werteverzehr (z. B. durch eine steuerliche Sonderabschreibung), verstärkt sich der Effekt zusätzlich — dieser überschießende Teil ist dann allerdings genau genommen stille Selbstfinanzierung, nicht reine Abschreibungsfinanzierung, und kann dann sogar die Gesamtkapazität erhöhen." }
    ],
    exercises: [
      {
        id: "finv-abschreibungsgegenwerte-kapazitaetserweiterung-e1",
        prompt: "Ein Taxiunternehmen kauft 4 Fahrzeuge zu je 60.000 € (linear über 3 Jahre abgeschrieben, jährliche Abschreibung je Fahrzeug = 20.000 €). Wie hoch ist die jährliche Gesamtabschreibung im ersten Jahr, und wie viele neue Fahrzeuge könnten davon (näherungsweise) finanziert werden?",
        solution: [{ type: "p", text: "Jährliche Gesamtabschreibung = 4 × 20.000 € = 80.000 €. Bei einem Neupreis von 60.000 € je Fahrzeug reicht dieser Betrag für den Kauf von 80.000/60.000 ≈ 1,33 Fahrzeugen — es kann also ein weiteres Fahrzeug angeschafft werden, mit einem Restbetrag von 80.000 − 60.000 = 20.000 €, der ins nächste Jahr vorgetragen wird." }]
      },
      {
        id: "finv-abschreibungsgegenwerte-kapazitaetserweiterung-e2",
        prompt: "Im zweiten Jahr verfügt das Unternehmen aus Aufgabe 1 über 5 Fahrzeuge (4 alte + 1 neues), abgeschrieben je 20.000 €/Jahr, plus den Restbetrag von 20.000 € aus Jahr 1. Wie viele weitere Fahrzeuge können angeschafft werden?",
        solution: [{ type: "p", text: "Abschreibung Jahr 2 = 5 × 20.000 € = 100.000 €. Zusammen mit dem Restbetrag aus Jahr 1 (20.000 €) stehen 120.000 € zur Verfügung. Das reicht für 120.000/60.000 = 2 weitere Fahrzeuge, ohne dass ein Restbetrag verbleibt — das Unternehmen verfügt nun über 5+2 = 7 Fahrzeuge." }]
      },
      {
        id: "finv-abschreibungsgegenwerte-kapazitaetserweiterung-e3",
        prompt: "Erklären Sie, warum sich durch den Kapazitätserweiterungseffekt die Periodenkapazität erhöht, die Gesamtkapazität bei planmäßiger Abschreibung aber unverändert bleibt.",
        solution: [{ type: "p", text: "Der Kapazitätserweiterungseffekt beruht darauf, dass künftig ohnehin nötige Ersatzinvestitionen zeitlich vorgezogen werden: Statt die Abschreibungsgegenwerte erst am Ende der Nutzungsdauer eines einzelnen Vermögensgegenstands für dessen Ersatz zurückzulegen, werden sie laufend in zusätzliche, parallel genutzte Vermögensgegenstände investiert. Dadurch stehen zu jedem Zeitpunkt mehr Einheiten gleichzeitig zur Verfügung — die Periodenkapazität (z. B. Fahrzeuge pro Jahr im Einsatz) steigt. Da bei planmäßiger, dem tatsächlichen Werteverzehr entsprechender Abschreibung aber insgesamt nicht mehr Kapital eingesetzt wird, als tatsächlich verzehrt wurde, bleibt die kumulierte Gesamtkapazität (Leistungsvermögen über die gesamte Lebensdauer aller eingesetzten Güter) unverändert — es wird nur zeitlich anders verteilt genutzt." }]
      },
      {
        id: "finv-abschreibungsgegenwerte-kapazitaetserweiterung-e4",
        prompt: "Zwei Maschinen werden zum gleichen Anschaffungspreis von 400.000 € beschafft: Maschine A wird linear über 4 Jahre abgeschrieben, Maschine B (mit Investitionsförderung) darf 200.000 € im ersten, 150.000 € im zweiten und 50.000 € im dritten Jahr abgeschrieben werden. Vergleichen Sie den Finanzierungseffekt in den ersten beiden Jahren.",
        solution: [{ type: "p", text: "Maschine A (linear, 4 Jahre): Abschreibung je Jahr = 400.000/4 = 100.000 €. Nach 2 Jahren kumuliert: 200.000 €. Maschine B (gefördert): Jahr 1 = 200.000 €, Jahr 2 = 150.000 €, kumuliert nach 2 Jahren = 350.000 €. Der Finanzierungseffekt (freigesetzte liquide Mittel durch Abschreibung, bei ausreichendem Gewinn vor Abschreibung) ist bei Maschine B in den ersten beiden Jahren deutlich höher (350.000 € statt 200.000 €) — die Investitionsfördermaßnahme beschleunigt die Mittelfreisetzung erheblich, wirkt aber genau genommen zum Teil wie stille Selbstfinanzierung, da die Abschreibung hier über dem gleichmäßigen Werteverzehr liegt." }]
      },
      {
        id: "finv-abschreibungsgegenwerte-kapazitaetserweiterung-e5",
        prompt: "Welche zentrale Voraussetzung muss erfüllt sein, damit die Finanzierung aus Abschreibungsgegenwerten überhaupt einen Finanzierungseffekt erzielt?",
        solution: [{ type: "p", text: "Die Abschreibungsgegenwerte müssen dem Unternehmen tatsächlich in liquider Form zugeflossen sein — das heißt, sie müssen über ausreichende Umsatzerlöse tatsächlich am Markt verdient worden sein. Verrechnet ein Unternehmen zwar Abschreibungen, erzielt aber keinen ausreichenden Umsatz bzw. Gewinn vor Abschreibungen, entsteht kein realer liquider Finanzierungseffekt, da schlicht keine entsprechenden Mittel zur Verfügung stehen." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Worauf beruht die Finanzierung aus Abschreibungsgegenwerten?", options: ["Auf dem Auseinanderfallen von Aufwand (Abschreibung) und tatsächlicher Auszahlung (die bereits beim Kauf erfolgte)", "Auf staatlichen Subventionen", "Auf einer zusätzlichen Kreditaufnahme", "Auf der Ausgabe neuer Aktien"], correctIndex: 0, explanation: "Die Abschreibung mindert den Gewinn (Aufwand), ohne dass eine neue Auszahlung erfolgt — die entsprechenden Mittel verbleiben im Unternehmen." },
      { id: "q2", question: "Wie wird der Effekt bezeichnet, bei dem laufende Reinvestition von Abschreibungsgegenwerten die Periodenkapazität erhöht?", options: ["Leverage-Effekt", "Bezugsrechtseffekt", "WACC-Effekt", "Kapazitätserweiterungseffekt (Lohmann-Ruchti-Effekt)"], correctIndex: 3, explanation: "Dieser Effekt wird als Kapazitätserweiterungs- oder Lohmann-Ruchti-Effekt bezeichnet." },
      { id: "q3", question: "Was unterscheidet Perioden- von Gesamtkapazität?", options: ["Es gibt keinen Unterschied", "Gesamtkapazität bezieht sich nur auf ein Jahr", "Periodenkapazität = Leistungsfähigkeit in einer Periode; Gesamtkapazität = Leistungsvermögen über die gesamte Nutzungsdauer", "Periodenkapazität gibt es nur bei Immobilien"], correctIndex: 2, explanation: "Periodenkapazität bezieht sich auf eine einzelne Periode (z. B. ein Jahr), Gesamtkapazität auf die gesamte Lebensdauer." },
      { id: "q4", question: "Was passiert mit der Gesamtkapazität durch den Kapazitätserweiterungseffekt bei planmäßiger, dem Werteverzehr entsprechender Abschreibung?", options: ["Sie steigt in gleichem Maße wie die Periodenkapazität", "Sie wird automatisch verdoppelt", "Sie sinkt", "Sie bleibt unverändert, nur die Periodenkapazität steigt"], correctIndex: 3, explanation: "Bei planmäßiger Abschreibung wird nur die zeitliche Verteilung geändert (Vorziehen von Ersatzinvestitionen) — die Gesamtkapazität bleibt gleich." },
      { id: "q5", question: "Welche zentrale Voraussetzung muss für den Kapazitätserweiterungseffekt erfüllt sein?", options: ["Die Abschreibungsgegenwerte müssen dem Unternehmen tatsächlich liquide zugeflossen sein", "Es dürfen keine Umsätze erzielt werden", "Die Abschreibung muss degressiv erfolgen", "Das Unternehmen muss börsennotiert sein"], correctIndex: 0, explanation: "Ohne tatsächlichen liquiden Zufluss der Abschreibungsgegenwerte (über Umsatzerlöse) entsteht kein realer Finanzierungseffekt." },
      { id: "q6", question: "Was passiert, wenn die verrechnete Abschreibung über dem tatsächlichen Werteverzehr liegt (z. B. durch Sonderabschreibungen)?", options: ["Das ist bilanziell nicht zulässig", "Der überschießende Teil wirkt wie stille Selbstfinanzierung und kann sogar die Gesamtkapazität erhöhen", "Es hat keine Auswirkung auf die Kapazität", "Der Effekt verschwindet vollständig"], correctIndex: 1, explanation: "Überhöhte Abschreibungen gehen über die reine Abschreibungsfinanzierung hinaus und wirken wie stille Selbstfinanzierung — dadurch kann sich sogar die Gesamtkapazität erhöhen." },
      { id: "q7", question: "Ein Unternehmen investiert die freigesetzten Abschreibungsgegenwerte NICHT laufend, sondern legt sie erst am Ende der Nutzungsdauer für die reine Ersatzbeschaffung zurück. Tritt dann der Kapazitätserweiterungseffekt auf?", options: ["Nein bzw. nur eingeschränkt, da keine zusätzlichen parallel genutzten Vermögensgegenstände entstehen", "Der Effekt verdoppelt sich dadurch", "Ja, in vollem Umfang", "Das spielt für den Effekt keine Rolle"], correctIndex: 0, explanation: "Der Kapazitätserweiterungseffekt setzt gerade die laufende Reinvestition voraus — ohne diese entsteht kein zusätzlicher Kapazitätsaufbau." },
      { id: "q8", question: "Welche Annahme ist typischerweise NICHT Teil der vereinfachten Modellannahmen zum Kapazitätserweiterungseffekt?", options: ["Laufende Reinvestition am Periodenende", "Gleichbleibende Anschaffungspreise", "Lineare Abschreibung entspricht dem tatsächlichen Werteverzehr", "Berücksichtigung des technologischen Fortschritts mit stark steigenden Leistungsfähigkeiten"], correctIndex: 3, explanation: "Das vereinfachte Modell blendet technologischen Fortschritt bewusst aus, um den reinen Kapazitätserweiterungseffekt zu isolieren." },
      { id: "q9", question: "Warum reduziert die Finanzierung aus Abschreibungsgegenwerten tendenziell den externen Kapitalbedarf eines wachsenden Unternehmens?", options: ["Das ist nicht korrekt, externer Kapitalbedarf bleibt immer gleich", "Weil intern freigesetzte Mittel für Wachstum genutzt werden können, statt zusätzliches Fremd- oder Eigenkapital aufzunehmen", "Weil Abschreibungen den Umsatz erhöhen", "Weil Abschreibungen steuerlich verboten sind"], correctIndex: 1, explanation: "Da die Wachstumsfinanzierung teilweise aus intern erwirtschafteten Abschreibungsgegenwerten erfolgt, sinkt der Bedarf an zusätzlicher Außenfinanzierung." },
      { id: "q10", question: "Was ist eine notwendige Bedingung dafür, dass laufende Reinvestition der Abschreibungsgegenwerte überhaupt zu einer Kapazitätserweiterung führt?", options: ["Das Unternehmen darf keine Gewinne ausweisen", "Es dürfen keine Rückstellungen gebildet werden", "Es müssen genügend zusätzliche Absatzmöglichkeiten (Markt) für die erweiterte Kapazität vorhanden sein", "Die Vermögensgegenstände müssen jedes Jahr teurer werden"], correctIndex: 2, explanation: "Eine Kapazitätserweiterung ist nur sinnvoll, wenn der Markt die zusätzliche Kapazität (z. B. mehr Fahrzeuge) auch auslasten kann." }
    ]
  },
  {
    id: "finv-rueckstellungen-vermoegensumschichtung",
    chapter: 5,
    order: 3,
    title: "Rückstellungen und Vermögensumschichtung",
    icon: "🔁",
    summary: "Wie Rückstellungen einen Finanzierungseffekt erzeugen und wie Innenfinanzierung durch Vermögensumschichtung (Desinvestition, Sale-and-Lease-Back) funktioniert.",
    explanation: [
      { type: "p", text: "Analog zur Finanzierung aus Abschreibungsgegenwerten beinhaltet auch die Bildung von Rückstellungen einen Finanzierungseffekt: Rückstellungen werden für ungewisse Verbindlichkeiten gebildet, deren Grund, Höhe oder Zeitpunkt noch nicht abschließend feststehen. In der Gewinn- und Verlustrechnung ist die Neubildung einer Rückstellung Aufwand — mindert also den ausgewiesenen Gewinn —, ohne dass zu diesem Zeitpunkt bereits eine tatsächliche Auszahlung erfolgt. Die entsprechenden Mittel verbleiben bis zur tatsächlichen Inanspruchnahme im Unternehmen." },
      { type: "p", text: "Nach § 249 Abs. 1 HGB sind Rückstellungen u. a. für folgende Fälle zu bilden:" },
      { type: "list", items: [
        "Rückstellungen für ungewisse Verbindlichkeiten (z. B. Pensionsrückstellungen, Gewährleistungsrückstellungen, Steuerrückstellungen)",
        "Rückstellungen für drohende Verluste aus schwebenden Geschäften (z. B. bei gestiegenen Beschaffungspreisen nach Vertragsabschluss)",
        "Rückstellungen für unterlassene Instandhaltung (bei Nachholung innerhalb bestimmter Fristen)",
        "Rückstellungen für Gewährleistungen, die ohne rechtliche Verpflichtung erbracht werden"
      ]},
      { type: "p", text: "Da Rückstellungen Ansprüche Dritter abbilden, zählen sie bilanziell zum Fremdkapital — anders als offene und stille Selbstfinanzierung, die dem Eigenkapitalbereich zuzurechnen sind." },
      { type: "p", text: "Innenfinanzierung aus Vermögensumschichtung setzt nicht am Umsatzprozess, sondern an bereits vorhandenem Vermögen an:" },
      { type: "list", items: [
        "Desinvestition: Verkauf nicht mehr betriebsnotwendiger Vermögensgegenstände (z. B. ein nicht mehr genutztes Lagerhaus) — die freiwerdenden Mittel stehen für andere Zwecke zur Verfügung",
        "Reduzierung der Kapitalbindung: z. B. Verkürzung von Lagerdauern oder Zahlungszielen, wodurch weniger Kapital im Umlaufvermögen gebunden ist",
        "Sale-and-Lease-Back: Ein Vermögensgegenstand wird verkauft und anschließend vom Käufer zurückgeleast — das Unternehmen erhält sofort liquide Mittel, kann den Gegenstand aber weiterhin nutzen (gegen Leasingraten)"
      ]}
    ],
    exercises: [
      {
        id: "finv-rueckstellungen-vermoegensumschichtung-e1",
        prompt: "Ordnen Sie folgende Vorgänge der Innen- oder Außenfinanzierung zu: a) Bildung einer Pensionsrückstellung, b) Aufnahme eines Bankkredits, c) Verkauf eines nicht mehr benötigten Lagerhauses.",
        solution: [{ type: "p", text: "a) Bildung einer Pensionsrückstellung → Innenfinanzierung (Rückstellungsfinanzierung; mindert den Gewinn, ohne sofortige Auszahlung). b) Aufnahme eines Bankkredits → Außenfinanzierung (neue Mittel fließen von außen zu). c) Verkauf eines nicht mehr benötigten Lagerhauses → Innenfinanzierung (Desinvestition, Vermögensumschichtung)." }]
      },
      {
        id: "finv-rueckstellungen-vermoegensumschichtung-e2",
        prompt: "Für Gewährleistungen wird eine deutlich zu hohe Rückstellung gebildet (über die tatsächlich erwartete Inanspruchnahme hinaus). Welche Art der Innenfinanzierung liegt hier vor, und warum?",
        solution: [{ type: "p", text: "Eine überhöhte Rückstellungsbildung entspricht wirtschaftlich stiller Selbstfinanzierung: Der ausgewiesene Gewinn wird stärker gemindert, als es der tatsächlich zu erwartenden Inanspruchnahme entspricht, wodurch stille Reserven entstehen. Die zusätzlich einbehaltenen, nicht ausgeschütteten und (im Rahmen der steuerlichen Anerkennung) geringer besteuerten Mittel verbleiben verdeckt im Unternehmen." }]
      },
      {
        id: "finv-rueckstellungen-vermoegensumschichtung-e3",
        prompt: "Erklären Sie den Ablauf und den finanzwirtschaftlichen Nutzen eines Sale-and-Lease-Back-Geschäfts an einem Beispiel (z. B. Firmengebäude).",
        solution: [{ type: "p", text: "Ein Unternehmen verkauft sein Firmengebäude an einen Investor (z. B. eine Leasinggesellschaft) und least es anschließend von diesem Investor zurück. Dadurch erhält das Unternehmen sofort einen größeren liquiden Betrag (den Verkaufserlös), kann das Gebäude aber weiterhin uneingeschränkt nutzen — gegen laufende Leasingraten. Finanzwirtschaftlicher Nutzen: Freisetzung gebundenen Kapitals (das zuvor im Anlagevermögen 'feststand') für andere Zwecke (z. B. Investitionen, Schuldentilgung), ohne den Betriebsablauf zu stören. Nachteil: künftige Leasingraten belasten die laufende Liquidität und Erfolgsrechnung." }]
      },
      {
        id: "finv-rueckstellungen-vermoegensumschichtung-e4",
        prompt: "Warum zählen Rückstellungen bilanziell zum Fremdkapital und nicht zum Eigenkapital, obwohl sie einen Innenfinanzierungseffekt haben?",
        solution: [{ type: "p", text: "Rückstellungen bilden Ansprüche Dritter ab — also potenzielle künftige Verpflichtungen des Unternehmens gegenüber außenstehenden Parteien (z. B. Kunden bei Gewährleistung, Arbeitnehmer bei Pensionszusagen, Finanzamt bei Steuernachzahlungen). Da es sich rechtlich um (der Höhe/dem Zeitpunkt nach ungewisse) Verbindlichkeiten gegenüber Dritten handelt, sind Rückstellungen dem Fremdkapital zuzuordnen — obwohl sie wirtschaftlich, ähnlich wie Abschreibungen, durch das Auseinanderfallen von Aufwand und Auszahlung einen Innenfinanzierungseffekt (temporäre Mittelbindung im Unternehmen) auslösen." }]
      },
      {
        id: "finv-rueckstellungen-vermoegensumschichtung-e5",
        prompt: "Nennen Sie zwei Möglichkeiten der Innenfinanzierung durch Vermögensumschichtung, die NICHT direkt am Umsatzprozess ansetzen.",
        solution: [{ type: "p", text: "1) Desinvestition: Verkauf von nicht mehr betriebsnotwendigem Vermögen (z. B. ungenutzte Grundstücke, Maschinen). 2) Reduzierung der Kapitalbindung, z. B. durch Verkürzung von Lagerhaltungsdauern oder Kundenzahlungszielen, wodurch weniger Kapital dauerhaft im Umlaufvermögen gebunden ist. (Alternativ: Sale-and-Lease-Back, bei dem ein Vermögensgegenstand verkauft und zurückgeleast wird.)" }]
      }
    ],
    quiz: [
      { id: "q1", question: "Warum entsteht bei der Bildung einer Rückstellung ein Innenfinanzierungseffekt?", options: ["Rückstellungen haben keinen Finanzierungseffekt", "Weil Rückstellungen sofort zu einer Auszahlung führen", "Weil die Rückstellungsbildung Aufwand darstellt (Gewinn sinkt), ohne dass eine sofortige Auszahlung erfolgt", "Weil Rückstellungen steuerfrei sind"], correctIndex: 2, explanation: "Wie bei Abschreibungen fallen Aufwand (Rückstellungsbildung) und Auszahlung (spätere Inanspruchnahme) zeitlich auseinander." },
      { id: "q2", question: "Zu welcher Bilanzseite zählen Rückstellungen?", options: ["Zum Eigenkapital", "Zum Anlagevermögen", "Zum Umlaufvermögen", "Zum Fremdkapital"], correctIndex: 3, explanation: "Rückstellungen bilden Ansprüche Dritter ab und zählen daher zum Fremdkapital." },
      { id: "q3", question: "Was versteht man unter Desinvestition als Form der Innenfinanzierung?", options: ["Ausgabe neuer Aktien", "Verkauf von nicht mehr benötigtem Vermögen zur Freisetzung liquider Mittel", "Kauf neuer Maschinen", "Aufnahme eines neuen Kredits"], correctIndex: 1, explanation: "Desinvestition setzt Mittel durch den Verkauf nicht mehr betriebsnotwendiger Vermögensgegenstände frei." },
      { id: "q4", question: "Was passiert bei einem Sale-and-Lease-Back-Geschäft?", options: ["Es handelt sich um eine reine Außenfinanzierung ohne Vermögensbezug", "Ein Vermögensgegenstand wird verkauft und anschließend vom Käufer zurückgeleast", "Ein Vermögensgegenstand wird gekauft und sofort verschrottet", "Es wird ausschließlich Eigenkapital erhöht"], correctIndex: 1, explanation: "Beim Sale-and-Lease-Back verkauft das Unternehmen einen Vermögensgegenstand und mietet/least ihn anschließend vom neuen Eigentümer zurück." },
      { id: "q5", question: "Welche Aussage zur Rückstellung für Instandhaltung nach § 249 HGB ist korrekt?", options: ["Sie dürfen nur bei Aktiengesellschaften gebildet werden", "Bei Nachholung innerhalb bestimmter Fristen besteht eine Passivierungspflicht bzw. ein -wahlrecht", "Sie zählen zum Eigenkapital", "Instandhaltungsrückstellungen sind grundsätzlich verboten"], correctIndex: 1, explanation: "Je nach Zeitraum der Nachholung (z. B. innerhalb von 3 bzw. 4–12 Monaten) besteht Passivierungspflicht oder -wahlrecht." },
      { id: "q6", question: "Was ist eine mögliche Form der Reduzierung der Kapitalbindung als Innenfinanzierungsmaßnahme?", options: ["Verlängerung der Zahlungsziele gegenüber Kunden", "Erhöhung des Anlagevermögens", "Erhöhung der Lagerbestände", "Verkürzung von Zahlungszielen gegenüber Kunden"], correctIndex: 3, explanation: "Kürzere Zahlungsziele reduzieren die im Umlaufvermögen gebundenen Mittel (weniger Forderungsbestand) und setzen Liquidität frei." },
      { id: "q7", question: "Was ist ein Nachteil von Sale-and-Lease-Back für das Unternehmen?", options: ["Das Unternehmen erhält dadurch niemals Liquidität", "Es führt automatisch zur Insolvenz", "Es entstehen künftige Leasingraten, die die laufende Liquidität und Erfolgsrechnung belasten", "Es ist rechtlich in Deutschland nicht zulässig"], correctIndex: 2, explanation: "Der Vorteil sofortiger Liquidität steht künftigen, laufenden Leasingzahlungen gegenüber." },
      { id: "q8", question: "Eine zu niedrige Rückstellung, die später deutlich erhöht werden muss, hat welchen bilanziellen Effekt zum Zeitpunkt der Erhöhung?", options: ["Zusätzlichen Aufwand, der den Gewinn zum Erhöhungszeitpunkt mindert", "Eine automatische Erhöhung des Eigenkapitals", "Keinen, Rückstellungen wirken sich nie auf den Gewinn aus", "Eine Verringerung der Bilanzsumme ohne GuV-Effekt"], correctIndex: 0, explanation: "Die Erhöhung einer Rückstellung ist Aufwand und mindert den ausgewiesenen Gewinn im Erhöhungsjahr." },
      { id: "q9", question: "Zählt eine Kapitalerhöhung durch Ausgabe neuer Aktien zur Innenfinanzierung?", options: ["Nein, das ist eine klassische Außenfinanzierung", "Nur wenn der Kurs über dem Nennwert liegt", "Nur bei GmbHs", "Ja, immer"], correctIndex: 0, explanation: "Eine Kapitalerhöhung bringt neue Mittel von außen ins Unternehmen — das ist Außenfinanzierung, keine Innenfinanzierung." },
      { id: "q10", question: "Wandelt eine AG offene Gewinnrücklagen in Grundkapital um, handelt es sich um Innenfinanzierung im engeren Sinn?", options: ["Ja, da neue liquide Mittel zufließen", "Nein, das ist überhaupt kein bilanzieller Vorgang", "Ja, weil dadurch neue Aktien entstehen", "Nein, es fließen dabei keine zusätzlichen liquiden Mittel zu — es handelt sich um eine reine Passivumbuchung innerhalb des bereits vorhandenen Eigenkapitals"], correctIndex: 3, explanation: "Die Umwandlung von Gewinnrücklagen in Grundkapital verschiebt Eigenkapital innerhalb der Passivseite, ohne dass zusätzliche liquide Mittel zufließen — kein Innenfinanzierungseffekt im Sinne einer Mittelfreisetzung." }
    ]
  }
];
