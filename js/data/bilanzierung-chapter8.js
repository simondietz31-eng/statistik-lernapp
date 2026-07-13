const BILANZIERUNG_CHAPTER8_TOPICS = [
  {
    id: "bilanzierung-guv-grundlagen",
    chapter: 8,
    order: 1,
    title: "Grundlagen und Gestaltungsmöglichkeiten der GuV",
    icon: "📋",
    summary: "Zweck, gesetzliche Grundlagen und zentrale Gestaltungsoptionen der Gewinn- und Verlustrechnung (Konto-/Staffelform, Brutto-/Nettoausweis, Gesamtkosten- vs. Umsatzkostenverfahren).",
    explanation: [
      { type: "p", text: "Die Gewinn- und Verlustrechnung (GuV) ist neben der Bilanz der zweite zentrale Bestandteil des handelsrechtlichen Jahresabschlusses. Ihr Zweck besteht in der Ermittlung des Jahresüberschusses bzw. Jahresfehlbetrags (umgangssprachlich: Gewinn bzw. Verlust) sowie im Ausweis der Quellen, aus denen sich das erzielte Ergebnis zusammensetzt. Während die Bilanz eine Zeitpunktrechnung ist (sie zeigt den Vermögens- und Kapitalbestand zu einem bestimmten Stichtag), ist die GuV eine Zeitraumrechnung: Sie stellt die Erträge und Aufwendungen eines Geschäftsjahres (i. d. R. eines Jahres) gegenüber und erklärt damit, wie sich das Eigenkapital innerhalb dieses Zeitraums durch die laufende Geschäftstätigkeit verändert hat." },
      { type: "p", text: "Der Umfang der gesetzlichen Regelung hängt von der Rechtsform ab. Personengesellschaften (einschließlich Einzelunternehmen, EiU) müssen gem. § 242 Abs. 2 HGB für den Schluss eines jeden Geschäftsjahres lediglich eine Gegenüberstellung der Aufwendungen und Erträge des Geschäftsjahres aufstellen; darüber hinausgehende Gliederungs- oder Ansatzvorschriften bestehen für sie nicht. Kapitalgesellschaften unterliegen dagegen einer detaillierten Regelung in §§ 275 ff. HGB, die Gliederung, Ausweis und Mindestinhalt der GuV genau vorschreiben." },
      { type: "list", items: [
        "Kontoform: die traditionelle, zweiseitige Darstellung mit Aufwandsarten auf der Sollseite und Ertragsarten auf der Habenseite (analog zu einem Konto); der Jahresüberschuss bzw. -fehlbetrag erscheint als Ausgleichsposten auf der jeweils kleineren Seite.",
        "Staffelform (Berichtsform): eine einspaltige, listenförmige Darstellung, bei der Erträge und Aufwendungen fortlaufend zu Zwischenergebnissen saldiert werden. Sie ist für Kapitalgesellschaften wegen der dadurch erreichten größeren Transparenz zwingend vorgeschrieben."
      ]},
      { type: "list", items: [
        "Umsatzerlöse",
        "+/- Erhöhung bzw. Verminderung des Bestandes an fertigen und unfertigen Erzeugnissen",
        "+ andere aktivierte Eigenleistungen",
        "+ sonstige betriebliche Erträge",
        "= Gesamtleistung (bei der Kennzahlenbildung teils eine wichtige Bezugsgröße)",
        "- Materialaufwand",
        "= Rohergebnis (ggf. der erste auszuweisende Wert bei Nutzung der größenabhängigen Erleichterungen gem. § 276 HGB)",
        "+ verschiedene weitere Erträge − verschiedene weitere Aufwendungen",
        "= Jahresüberschuss / Jahresfehlbetrag"
      ]},
      { type: "p", text: "Ein weiteres Gestaltungsmerkmal ist der Brutto- oder Nettoausweis von Aufwand und Ertrag. Nach § 246 Abs. 2 Satz 1 HGB gilt grundsätzlich das Bruttoprinzip: Erträge und Aufwendungen dürfen nicht miteinander saldiert werden. Ausnahmsweise sind bestimmte Aufwendungen und Erträge verrechenbar (Nettoausweis), z. B. Umsatzerlöse abzüglich Erlösminderungen; seit der BilMoG-Reform (2010) besteht darüber hinaus gem. § 246 Abs. 2 Satz 2 HGB in wenigen Fällen sogar eine Saldierungspflicht, insbesondere bei Vermögensgegenständen (z. B. Wertpapieren), die ausschließlich der Erfüllung von Schulden aus Altersversorgungsverpflichtungen dienen. Das Handelsrecht sieht dennoch — mit nur wenigen Ausnahmen — grundsätzlich den Bruttoausweis vor, da eine Nettorechnung das wahre Erfolgsbild verdecken und damit die erforderliche Transparenz beeinträchtigen würde." },
      { type: "list", items: [
        "Gesamtkostenverfahren (GKV): Gegenüberstellung aller Aufwendungen eines Abrechnungszeitraums — nach Aufwandsarten differenziert (z. B. Material-, Personalaufwand) —, der Umsatzerlöse und der sonstigen Erträge; Bestandsveränderungen des fertigen bzw. unfertigen Vermögens werden dabei explizit berücksichtigt.",
        "Umsatzkostenverfahren (UKV): Gegenüberstellung des Umsatzes eines bestimmten Zeitraums und der dafür angefallenen Kosten; der 'Umsatzaufwand' wird dabei i. d. R. nach Kostenstellen bzw. betrieblichen Funktionsbereichen (Herstellung, Vertrieb, Verwaltung) aufgeteilt. Beide Verfahren sind gem. § 275 Abs. 1 HGB zulässig und führen stets zum gleichen Jahresüberschuss."
      ]},
      { type: "list", items: [
        "Einzelunternehmen, OHG und KG, die nicht dem PublG unterliegen: keine gesetzliche Gliederungsvorschrift, lediglich die GoB (§§ 242 Abs. 3, 243 Abs. 1 HGB) sind zu beachten.",
        "Einzelunternehmen/Personenhandelsgesellschaften, die dem PublG unterliegen: GKV oder UKV nach § 275 HGB i. V. m. § 5 Abs. 1 PublG.",
        "(Kleinst-,) kleine und mittelgroße Kapitalgesellschaften bzw. bestimmte Personenhandelsgesellschaften: GKV oder UKV, wobei ein (stark) gekürztes Schema zulässig ist (§ 275 i. V. m. § 276 HGB; für Kleinstgesellschaften § 275 Abs. 5 HGB).",
        "Große Kapitalgesellschaften bzw. bestimmte Personenhandelsgesellschaften: GKV oder UKV mit dem vollständigen Schema nach § 275 HGB."
      ]},
      { type: "p", text: "Zu beachten sind zudem branchenspezifische Sonderformblätter bzw. -vorschriften, z. B. für Versicherungsunternehmen. Weiterführende Details zur GuV, insbesondere zur Handels- und Steuerbilanz sowie zur Jahresabschlussanalyse, werden in den entsprechenden Wahlmodulen vertieft." }
    ],
    exercises: [
      {
        id: "bilanzierung-guv-grundlagen-e1",
        prompt: "Der Erfolg der Unternehmung ergibt sich sowohl aus der Bilanz als auch aus der Gewinn- und Verlustrechnung. Worin besteht der grundsätzliche Unterschied zwischen beiden Instrumenten?",
        solution: [{ type: "p", text: "Die Bilanz ist eine Zeitpunktrechnung: Sie zeigt den Vermögens- und Kapitalbestand (und damit auch das Eigenkapital) zu einem bestimmten Stichtag, ohne die Ursachen der Veränderung gegenüber dem Vorjahr offenzulegen. Die GuV ist dagegen eine Zeitraumrechnung: Sie stellt die Erträge und Aufwendungen einer Periode gegenüber und erklärt damit, wodurch (aus welchen Quellen) sich das Periodenergebnis — und damit ein wesentlicher Teil der Eigenkapitalveränderung — zusammensetzt." }]
      },
      {
        id: "bilanzierung-guv-grundlagen-e2",
        prompt: "Erläutern Sie die Begriffe a) Bruttoerfolgsrechnung, b) Staffelform und c) Gesamtkostenverfahren (und Umsatzkostenverfahren).",
        solution: [{ type: "p", text: "a) Bruttoerfolgsrechnung bezeichnet eine GuV, die Aufwendungen und Erträge grundsätzlich nicht miteinander verrechnet, sondern beide Seiten unverkürzt gegenüberstellt (Gegensatz: Nettoerfolgsrechnung mit Saldierung einzelner Posten). b) Die Staffelform (Berichtsform) ist eine einspaltige, listenförmige Darstellung der GuV mit fortlaufenden Zwischensummen; sie ist für Kapitalgesellschaften zwingend vorgeschrieben. c) Das Gesamtkostenverfahren (GKV) gliedert die Aufwendungen nach Aufwandsarten und berücksichtigt Bestandsveränderungen explizit als eigenen Posten; das Umsatzkostenverfahren (UKV) gliedert die Aufwendungen dagegen nach betrieblichen Funktionsbereichen (Herstellung, Vertrieb, Verwaltung) und stellt ihnen direkt den Umsatz gegenüber." }]
      },
      {
        id: "bilanzierung-guv-grundlagen-e3",
        prompt: "Kennzeichnen Sie die wesentlichen Merkmale der Erfolgsrechnung (GuV) nach dem HGB.",
        solution: [{ type: "p", text: "Die GuV ist eine Zeitraumrechnung (Erträge ./. Aufwendungen einer Periode); es gilt grundsätzlich das Bruttoprinzip (§ 246 Abs. 2 HGB) mit nur wenigen Saldierungsausnahmen; für Kapitalgesellschaften ist die Staffelform zwingend vorgeschrieben; nach § 275 Abs. 1 HGB besteht ein Wahlrecht zwischen Gesamtkosten- und Umsatzkostenverfahren, das stets zum gleichen Jahresüberschuss führt; und die konkreten Gliederungsanforderungen sind je nach Rechtsform und Größenklasse unterschiedlich streng — von der freien GoB-Gestaltung bei kleinen Personengesellschaften bis zum vollständigen Schema nach § 275 HGB bei großen Kapitalgesellschaften." }]
      },
      {
        id: "bilanzierung-guv-grundlagen-e4",
        prompt: "Sind die Brutto- oder die Netto-Umsatzerlöse in der GuV auszuweisen (Bezug: Umsatzsteuer)?",
        solution: [{ type: "p", text: "Die Umsatzerlöse sind stets netto, also ohne Umsatzsteuer, auszuweisen. Die vom Kunden vereinnahmte Umsatzsteuer stellt keinen eigenen Ertrag des Unternehmens dar, sondern lediglich einen durchlaufenden Posten, der als Verbindlichkeit an das Finanzamt abzuführen ist; sie darf die Umsatzerlöse deshalb nicht erhöhen. Zusätzlich sind nach § 277 Abs. 1 HGB Erlösschmälerungen (z. B. Skonti, Boni) von den Umsatzerlösen abzuziehen." }]
      },
      {
        id: "bilanzierung-guv-grundlagen-e5",
        prompt: "Warum ist die Staffelform für Kapitalgesellschaften zwingend vorgeschrieben, während Personengesellschaften ohne PublG-Pflicht in der Form ihrer GuV weitgehend frei sind?",
        solution: [{ type: "p", text: "Kapitalgesellschaften richten sich typischerweise an einen großen Kreis außenstehender, nicht per se gut informierter Adressaten (Aktionäre, Gläubiger, Öffentlichkeit) und unterliegen daher erhöhten Publizitäts- und Transparenzanforderungen; die Staffelform macht die Entstehung des Ergebnisses über nachvollziehbare Zwischenergebnisse (Gesamtleistung, Rohergebnis, Betriebsergebnis, Jahresüberschuss) transparenter als die traditionelle Kontoform. Personengesellschaften ohne PublG-Pflicht haften i. d. R. unbeschränkt mit ihrem Privatvermögen und richten sich an einen kleineren, oft besser informierten Adressatenkreis, weshalb für sie die einfache GoB-Vorgabe des § 242 Abs. 2 HGB ohne feste Formvorschrift ausreicht." }]
      },
      {
        id: "bilanzierung-guv-grundlagen-e6",
        prompt: "Warum verlangt das Handelsrecht grundsätzlich den Bruttoausweis von Aufwendungen und Erträgen, statt eine Verrechnung (Nettoausweis) zuzulassen?",
        solution: [{ type: "p", text: "Eine Verrechnung von Aufwendungen und Erträgen würde das tatsächliche Ausmaß der betrieblichen Aktivität verschleiern — beispielsweise könnten hohe Erträge und ebenso hohe Aufwendungen bei einer Nettodarstellung ein Unternehmen kleiner und unbedeutender erscheinen lassen, als es tatsächlich ist. Der Bruttoausweis (§ 246 Abs. 2 Satz 1 HGB) sichert dagegen die im Handelsrecht geforderte Transparenz und Vergleichbarkeit des Jahresabschlusses; eine Saldierung ist deshalb nur in engen, gesetzlich klar definierten Ausnahmefällen zulässig." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Was ist der Zweck der Gewinn- und Verlustrechnung?", options: ["Ermittlung von Jahresüberschuss/-fehlbetrag und Ausweis der Ergebnisquellen", "Ermittlung des Vermögens- und Kapitalbestands zu einem Stichtag", "Berechnung der Umsatzsteuerschuld eines Geschäftsjahres", "Feststellung des aktuellen Marktwerts des Unternehmens"], correctIndex: 0, explanation: "Die GuV dient der Ermittlung von Jahresüberschuss bzw. -fehlbetrag sowie dem Ausweis der Quellen der erzielten Ergebnisse." },
      { id: "q2", question: "Welche Aussage zur GuV trifft zu?", options: ["Sie ist wie die Bilanz eine Zeitpunktrechnung", "Sie ist eine Zeitraumrechnung: Erträge ./. Aufwendungen einer Periode", "Sie ist ausschließlich eine Finanzplanungsrechnung", "Sie ist ein Bestandteil des Lageberichts"], correctIndex: 1, explanation: "Die GuV stellt als Zeitraumrechnung die Erträge und Aufwendungen eines Geschäftsjahres gegenüber, im Gegensatz zur Bilanz als Zeitpunktrechnung." },
      { id: "q3", question: "Für welche Rechtsform gilt nach § 242 Abs. 2 HGB nur die einfache Pflicht zur Gegenüberstellung von Aufwendungen und Erträgen, ohne weitere Gliederungsvorschrift?", options: ["Große Kapitalgesellschaften", "Personengesellschaften (inkl. Einzelunternehmen) ohne PublG-Pflicht", "Börsennotierte Aktiengesellschaften", "Konzerne mit ausländischen Tochtergesellschaften"], correctIndex: 1, explanation: "§ 242 Abs. 2 HGB verlangt vom Kaufmann nur eine Gegenüberstellung der Aufwendungen und Erträge; darüber hinausgehende Vorschriften bestehen für Personengesellschaften ohne PublG-Pflicht nicht." },
      { id: "q4", question: "Wo sind die detaillierten GuV-Gliederungsvorschriften für Kapitalgesellschaften geregelt?", options: ["§ 242 Abs. 2 HGB", "§ 266 HGB", "§§ 275 ff. HGB", "§ 5 EStG"], correctIndex: 2, explanation: "Für Kapitalgesellschaften enthalten §§ 275 ff. HGB die detaillierten Regelungen zur Gliederung der GuV." },
      { id: "q5", question: "Welche Ausweisform der GuV ist für Kapitalgesellschaften zwingend vorgeschrieben?", options: ["Kontoform", "Staffelform (Berichtsform)", "Freie Form nach Wahl der Geschäftsleitung", "Tabellenform nach IFRS"], correctIndex: 1, explanation: "Die Staffelform ist für Kapitalgesellschaften wegen der größeren Transparenz zwingend vorgeschrieben." },
      { id: "q6", question: "Was besagt das Bruttoprinzip nach § 246 Abs. 2 Satz 1 HGB?", options: ["Grundsätzlich keine Saldierung von Erträgen und Aufwendungen", "Alle Beträge sind zwingend inklusive Umsatzsteuer auszuweisen", "Nur Bruttogewinne dürfen ausgeschüttet werden", "Es betrifft ausschließlich die Bewertung des Anlagevermögens"], correctIndex: 0, explanation: "Das Bruttoprinzip verbietet grundsätzlich die Verrechnung (Saldierung) von Erträgen und Aufwendungen." },
      { id: "q7", question: "In welchem Fall lässt das HGB seit dem BilMoG (2010) eine Saldierungspflicht zu?", options: ["Bei sämtlichen Umsatzerlösen ohne Ausnahme", "Bei Vermögensgegenständen, die ausschließlich der Erfüllung von Schulden aus Altersversorgungsverpflichtungen dienen", "Bei allen Finanzanlagen ohne Ausnahme", "Nur bei außerplanmäßigen Abschreibungen auf Sachanlagen"], correctIndex: 1, explanation: "§ 246 Abs. 2 Satz 2 HGB sieht eine Saldierungspflicht insbesondere bei Wertpapieren vor, die ausschließlich Altersversorgungsverpflichtungen absichern." },
      { id: "q8", question: "Was unterscheidet das Gesamtkostenverfahren (GKV) grundsätzlich vom Umsatzkostenverfahren (UKV)?", options: ["Das GKV gliedert nach Aufwandsarten inkl. Bestandsveränderungen, das UKV nach Funktionsbereichen", "Das UKV ist nur für Personengesellschaften zulässig", "Das UKV berücksichtigt keine Umsatzerlöse", "GKV und UKV führen stets zu unterschiedlichen Jahresüberschüssen"], correctIndex: 0, explanation: "GKV gliedert die Aufwendungen nach Arten und berücksichtigt Bestandsveränderungen explizit; UKV gliedert nach Funktionsbereichen (Herstellung, Vertrieb, Verwaltung)." },
      { id: "q9", question: "Wie ist die GuV bei kleinen und mittelgroßen Kapitalgesellschaften grundsätzlich zu gliedern?", options: ["Völlig frei nach GoB, ohne festes Schema", "Nach GKV oder UKV, ggf. mit gekürztem Schema gem. § 275 i. V. m. § 276 HGB", "Ausschließlich nach IFRS-Vorschriften", "Ausschließlich in Kontoform"], correctIndex: 1, explanation: "Kleine und mittelgroße Kapitalgesellschaften dürfen GKV oder UKV mit einem (stark) gekürzten Schema nach § 275 i. V. m. § 276 HGB anwenden." },
      { id: "q10", question: "Welche Rechtsgrundlage regelt die GuV für Personengesellschaften/Einzelunternehmen, die dem Publizitätsgesetz (PublG) unterliegen?", options: ["§ 242 Abs. 2 HGB ohne weitere Vorgaben", "§ 275 HGB i. V. m. § 5 Abs. 1 PublG", "§ 320 HGB", "Ausschließlich das Aktiengesetz"], correctIndex: 1, explanation: "Personengesellschaften/Einzelunternehmen, die dem PublG unterliegen, müssen die GuV nach § 275 HGB i. V. m. § 5 Abs. 1 PublG (GKV oder UKV) aufstellen." }
    ]
  },
  {
    id: "bilanzierung-guv-ergebnisermittlung",
    chapter: 8,
    order: 2,
    title: "Ergebnisermittlungsrechnung",
    icon: "🧮",
    summary: "Der detaillierte Aufbau der GuV nach § 275 HGB im Gesamtkosten- und im Umsatzkostenverfahren, ihre jeweiligen Merkmale und Vorteile sowie die Überleitung zwischen beiden Verfahren.",
    explanation: [
      { type: "p", text: "Die Ergebnisermittlungsrechnung bildet den Kern der GuV: Sie zeigt, wie sich der Jahresüberschuss bzw. -fehlbetrag Schritt für Schritt aus den einzelnen Ertrags- und Aufwandsposten ergibt. § 275 Abs. 2 HGB gibt hierfür das Schema für das Gesamtkostenverfahren (GKV) vor, § 275 Abs. 3 HGB das Schema für das Umsatzkostenverfahren (UKV). Beide Schemata unterscheiden sich nur im operativen Teil (bis zum Betriebsergebnis); der anschließende Teil (Finanzergebnis, Steuern, Jahresüberschuss) ist bei beiden Verfahren identisch aufgebaut." },
      { type: "list", items: [
        "1. Umsatzerlöse",
        "2. +/- Erhöhung bzw. Verminderung des Bestandes an fertigen und unfertigen Erzeugnissen",
        "3. + andere aktivierte Eigenleistungen",
        "4. + sonstige betriebliche Erträge",
        "5. - Materialaufwand",
        "6. - Personalaufwand",
        "7. - Abschreibungen",
        "8. - sonstige betriebliche Aufwendungen",
        "= Betriebsergebnis"
      ]},
      { type: "list", items: [
        "1. Umsatzerlöse",
        "2. - Herstellungskosten der zur Erzielung der Umsatzerlöse erbrachten Leistungen",
        "3. = Bruttoergebnis vom Umsatz",
        "4. - Vertriebskosten",
        "5. - allgemeine Verwaltungskosten",
        "6. + sonstige betriebliche Erträge",
        "7. - sonstige betriebliche Aufwendungen",
        "= Betriebsergebnis"
      ]},
      { type: "list", items: [
        "+ Finanzergebnis (Erträge/Zinsen abzüglich Abschreibungen und Aufwendungen/Zinsen aus dem Finanzbereich, z. B. Erträge aus Beteiligungen, sonstige Zinsen und ähnliche Erträge sowie Zinsen und ähnliche Aufwendungen)",
        "- Steuern vom Einkommen und vom Ertrag",
        "= Ergebnis nach Steuern",
        "- sonstige Steuern",
        "= Jahresüberschuss / Jahresfehlbetrag"
      ]},
      { type: "list", items: [
        "Charakteristika des GKV: in Deutschland traditionell angewendetes Verfahren zur Ermittlung des Betriebsergebnisses; Gliederung der betrieblichen Aufwendungen nach Aufwandsarten; Ausweis sämtlicher in der Abrechnungsperiode angefallener Aufwendungen und Erträge.",
        "Vorteile des GKV gegenüber dem UKV: Möglichkeit zur direkten Übernahme der Aufwendungen aus der Finanzbuchhaltung sowie direkter Ausweis von Bestandsveränderungen."
      ]},
      { type: "list", items: [
        "Charakteristika des UKV: weltweit dominierendes, in Deutschland in der externen Rechnungslegung allerdings relativ neues Gliederungsprinzip; Gliederung der Aufwendungen nach betrieblichen Funktionsbereichen (Herstellung, Vertrieb, Verwaltung); Nebeneinander periodenbezogener (Vertriebs-/Verwaltungskosten) und produktbezogener Aufwendungen (Herstellungskosten der abgesetzten Erzeugnisse); Problematik der Festlegung des Herstellungskostenbegriffs.",
        "Vorteile des UKV gegenüber dem GKV: bessere internationale Akzeptanz (z. B. bei Auslandsfinanzierungen) sowie zusätzliche Informationsbereitstellung durch Angabe der Material- und Personalaufwendungen im Anhang gem. § 285 Nr. 8 HGB."
      ]},
      { type: "p", text: "Da beide Verfahren zum gleichen Jahresüberschuss führen, lässt sich rechnerisch vom GKV zum UKV überleiten: Die Umsatzerlöse werden unverändert übernommen; Bestandsveränderungen, andere aktivierte Eigenleistungen sowie Material-, Personalaufwand und Abschreibungen werden — jeweils um die auf Bestandserhöhungen bzw. aktivierte Eigenleistungen entfallenden Anteile bereinigt — den UKV-Funktionskostenposten (Herstellungskosten der Umsatzerlöse, Vertriebskosten, allgemeine Verwaltungskosten) zugeordnet. Die sonstigen betrieblichen Erträge (GKV-Position 4) können dagegen i. d. R. unmittelbar in das UKV-Schema (Position 6) übernommen werden." }
    ],
    exercises: [
      {
        id: "bilanzierung-guv-ergebnisermittlung-e1",
        prompt: "Die Kurzschluss-AG stellt Elektrogeräte her, vermietet und repariert sie. Ordnen Sie folgende Einnahmen/Erträge den passenden Posten der Gewinn- und Verlustrechnung nach § 275 Abs. 2 HGB (Gesamtkostenverfahren) zu: a) Verkauf der eigenen Elektrogeräte, b) Vermietung von Werkswohnungen an Mitarbeiter, c) Verkäufe der eigenen Betriebskantine, d) Beteiligungserträge der Tochtergesellschaft, e) Zinsen und ähnliche Erträge, f) Veräußerung eines Teilbetriebes.",
        solution: [{ type: "p", text: "a) Umsatzerlöse (Posten 1) — der Verkauf der Elektrogeräte ist die typische, gewöhnliche Geschäftstätigkeit. b) Sonstige betriebliche Erträge (Posten 4) — die Vermietung von Werkswohnungen gehört nicht zur typischen Geschäftstätigkeit eines Elektrogeräteherstellers. c) Sonstige betriebliche Erträge (Posten 4) — Kantinenverkäufe sind ein bloßer Nebenbetrieb. d) Erträge aus Beteiligungen (Finanzergebnis) — sie stammen aus einer Kapitalbeteiligung, nicht aus dem operativen Geschäft. e) Sonstige Zinsen und ähnliche Erträge (Finanzergebnis). f) Sonstige betriebliche Erträge (Posten 4) — nach dem seit dem BilRUG geltenden HGB gibt es keine gesonderte GuV-Position für 'außerordentliche' Erträge mehr; ist der Betrag von außergewöhnlicher Größenordnung oder Bedeutung, ist er zusätzlich im Anhang gem. § 285 Nr. 31 HGB anzugeben." }]
      },
      {
        id: "bilanzierung-guv-ergebnisermittlung-e2",
        prompt: "Ein Unternehmen schreibt planmäßig einen derivativen Geschäfts- oder Firmenwert in Höhe von 500.000 € ab. Unter welchem Posten der GuV nach § 275 Abs. 2 HGB ist dieser Betrag auszuweisen?",
        solution: [{ type: "p", text: "Die Abschreibung ist unter dem Posten 'Abschreibungen' (auf immaterielle Vermögensgegenstände des Anlagevermögens) auszuweisen. Der derivative Firmenwert gilt gem. § 246 Abs. 1 Satz 4 HGB als zeitlich begrenzt nutzbarer Vermögensgegenstand und ist planmäßig über seine voraussichtliche Nutzungsdauer abzuschreiben." }]
      },
      {
        id: "bilanzierung-guv-ergebnisermittlung-e3",
        prompt: "Ein Unternehmen verkauft Wertpapiere des Umlaufvermögens: Buchwert 1.200 €, Veräußerungserlös 1.500 €, Veräußerungskosten 25 €. Wie ist dieser Vorgang in der GuV auszuweisen?",
        solution: [{ type: "p", text: "Da grundsätzlich das Bruttoprinzip gilt (§ 246 Abs. 2 HGB), ist der Vorgang unverkürzt auszuweisen: Der Veräußerungserlös (1.500 €) ist als sonstiger betrieblicher Ertrag zu zeigen, der Buchwertabgang (1.200 €) und die Veräußerungskosten (25 €) sind als sonstige betriebliche Aufwendungen zu erfassen. Im Ergebnis verbleibt ein Gewinn von 1.500 € − 1.200 € − 25 € = 275 €, der sich erfolgswirksam im Betriebsergebnis niederschlägt." }]
      },
      {
        id: "bilanzierung-guv-ergebnisermittlung-e4",
        prompt: "Im Vorjahr wurde eine Forderung aus einer Warenlieferung wegen des Konkurses des Kunden voll abgeschrieben. Im laufenden Geschäftsjahr geht dennoch ein Betrag von 2.023 € (inkl. 19 % USt) auf diese Forderung ein. Wie ist der Ertrag zu ermitteln und auszuweisen?",
        solution: [{ type: "p", text: "Da der Zahlungseingang auch die Umsatzsteuer enthält, ist nur der Nettobetrag erfolgswirksam: 2.023 € / 1,19 ≈ 1.700 €. Der Umsatzsteueranteil (rund 323 €) ist keine Ertragsposition, sondern begründet eine Verbindlichkeit gegenüber dem Finanzamt. Der Nettobetrag von 1.700 € ist als sonstiger betrieblicher Ertrag auszuweisen, da es sich um den Eingang einer bereits abgeschriebenen Forderung aus einer abgeschlossenen Lieferung und nicht um einen neuen Umsatzerlös handelt." }]
      },
      {
        id: "bilanzierung-guv-ergebnisermittlung-e5",
        prompt: "Folgende Geschäftsvorfälle liegen vor: 1) Verlust aus dem Verkauf eines Teilbetriebes, 2) Verlust aufgrund einer Enteignung, 3) Verlust aus einem großen Schadensfall, 4) laufende Kantinenumsätze, 5) Ertrag aus der Auflösung einer Rückstellung, 6) Aufwand für einen Sozialplan wegen Massenentlassungen, 7) Bußgeld wegen eines Kartellrechtsverstoßes. a) Welche dieser Vorfälle sind als Erträge/Aufwendungen von außergewöhnlicher Größenordnung oder Bedeutung im Anhang gesondert anzugeben? b) Was ist dabei zu beachten?",
        solution: [{ type: "p", text: "a) Als außergewöhnlich (und damit grundsätzlich anhangangabepflichtig) gelten die seltenen, gravierenden Einzelvorgänge: Verkauf des Teilbetriebes (1), Enteignung (2), großer Schadensfall (3), Sozialplan/Massenentlassungen (6) und das Kartellrechts-Bußgeld (7). Nicht außergewöhnlich sind dagegen die laufenden Kantinenumsätze (4, regelmäßiger Nebenbetrieb) und — sofern nicht außergewöhnlich hoch — die Auflösung einer Rückstellung (5, ein im Rahmen des normalen Geschäftsbetriebs relativ gewöhnlicher bilanzieller Vorgang). b) Nach § 285 Nr. 31 HGB sind Betrag und Art solcher Posten im Anhang anzugeben, sofern sie nicht bereits gesondert in der GuV ausgewiesen sind und sofern die Beträge nicht von untergeordneter Bedeutung sind." }]
      },
      {
        id: "bilanzierung-guv-ergebnisermittlung-e6",
        prompt: "Ermitteln Sie das Rohergebnis (§ 276 i. V. m. § 275 Abs. 2 HGB) eines mittelgroßen Industrieunternehmens aus folgenden Angaben (in T€): Umsatzerlöse 5.000; Bestandserhöhung an fertigen Erzeugnissen 200; andere aktivierte Eigenleistungen 50; sonstige betriebliche Erträge 100; Materialaufwand (Roh-, Hilfs- und Betriebsstoffe sowie bezogene Waren) 2.000.",
        solution: [
          { type: "formula", block: true, tex: "\\text{Gesamtleistung} = 5.000 + 200 + 50 + 100 = 5.350 \\text{ T\\texteuro}" },
          { type: "formula", block: true, tex: "\\text{Rohergebnis} = \\text{Gesamtleistung} - \\text{Materialaufwand} = 5.350 - 2.000 = 3.350 \\text{ T\\texteuro}" },
          { type: "p", text: "Das Rohergebnis beträgt 3.350 T€." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Nach welcher HGB-Vorschrift ist die Gliederung des Gesamtkostenverfahrens (GKV) geregelt?", options: ["§ 275 Abs. 2 HGB", "§ 275 Abs. 3 HGB", "§ 266 HGB", "§ 246 HGB"], correctIndex: 0, explanation: "Das GKV-Schema ist in § 275 Abs. 2 HGB geregelt." },
      { id: "q2", question: "Nach welcher HGB-Vorschrift ist die Gliederung des Umsatzkostenverfahrens (UKV) geregelt?", options: ["§ 275 Abs. 2 HGB", "§ 275 Abs. 3 HGB", "§ 268 HGB", "§ 276 HGB"], correctIndex: 1, explanation: "Das UKV-Schema ist in § 275 Abs. 3 HGB geregelt." },
      { id: "q3", question: "Welcher Zwischensaldo markiert im GKV- wie im UKV-Schema den Übergang vom operativen zum finanzwirtschaftlichen Bereich?", options: ["Rohergebnis", "Gesamtleistung", "Betriebsergebnis", "Jahresüberschuss"], correctIndex: 2, explanation: "Das Betriebsergebnis ist bei beiden Verfahren der letzte rein operative Zwischensaldo, bevor das Finanzergebnis hinzukommt." },
      { id: "q4", question: "Wie heißt der erste Zwischensaldo im UKV nach Abzug der Herstellungskosten der zur Erzielung der Umsatzerlöse erbrachten Leistungen?", options: ["Rohergebnis", "Bruttoergebnis vom Umsatz", "Betriebsergebnis", "Gesamtleistung"], correctIndex: 1, explanation: "Umsatzerlöse abzüglich Herstellungskosten der Umsatzerlöse ergeben im UKV das Bruttoergebnis vom Umsatz." },
      { id: "q5", question: "Was folgt im GKV- wie im UKV-Schema unmittelbar nach dem Betriebsergebnis?", options: ["Steuern vom Einkommen und Ertrag", "Finanzergebnis (u. a. Beteiligungserträge, Zinserträge und -aufwendungen)", "Sonstige Steuern", "Materialaufwand"], correctIndex: 1, explanation: "Nach dem Betriebsergebnis folgt in beiden Schemata zunächst das Finanzergebnis, bevor die Steuern abgezogen werden." },
      { id: "q6", question: "Wie ermittelt sich das Rohergebnis nach § 276 HGB im GKV-Schema?", options: ["Gesamtleistung abzüglich Materialaufwand", "Umsatzerlöse abzüglich Personalaufwand", "Betriebsergebnis abzüglich Finanzergebnis", "Jahresüberschuss abzüglich Steuern"], correctIndex: 0, explanation: "Das Rohergebnis ergibt sich aus der Gesamtleistung (Umsatzerlöse, Bestandsveränderungen, aktivierte Eigenleistungen, sonstige betriebliche Erträge) abzüglich des Materialaufwands." },
      { id: "q7", question: "Welches ist ein zentraler Vorteil des GKV gegenüber dem UKV?", options: ["Bessere internationale Akzeptanz", "Direkte Übernahme der Aufwendungen aus der Finanzbuchhaltung und direkter Ausweis von Bestandsveränderungen", "Zusätzliche Anhangangabe zu Material- und Personalaufwand", "Verzicht auf jede Form der Erfolgsspaltung"], correctIndex: 1, explanation: "Das GKV lässt sich Aufwendungen direkt aus der Finanzbuchhaltung übernehmen und weist Bestandsveränderungen unmittelbar aus." },
      { id: "q8", question: "Welches ist ein zentraler Vorteil des UKV gegenüber dem GKV?", options: ["Direkte Übernahme der Aufwendungen aus der Finanzbuchhaltung", "Explizite Berücksichtigung von Bestandsveränderungen als eigener Posten", "Bessere internationale Akzeptanz sowie zusätzliche Anhangangaben zu Material- und Personalaufwand gem. § 285 Nr. 8 HGB", "Vollständiger Verzicht auf jede Gliederung der Aufwendungen"], correctIndex: 2, explanation: "Das UKV wird international besser akzeptiert und verlangt zusätzlich Anhangangaben zu Material- und Personalaufwand nach § 285 Nr. 8 HGB." },
      { id: "q9", question: "Wie werden die Aufwendungen im UKV gegliedert?", options: ["Nach Aufwandsarten wie Material- und Personalaufwand", "Nach betrieblichen Funktionsbereichen wie Herstellung, Vertrieb und Verwaltung", "Es erfolgt gar keine Gliederung der Aufwendungen", "Ausschließlich nach Kostenstellen der Verwaltung"], correctIndex: 1, explanation: "Kennzeichnend für das UKV ist die Gliederung der Aufwendungen nach Funktionsbereichen statt nach Aufwandsarten." },
      { id: "q10", question: "Welche Aussage zum Verhältnis von GKV und UKV ist richtig?", options: ["Beide führen stets zum gleichen Jahresüberschuss, unterscheiden sich aber in der Gliederungslogik", "Das GKV führt regelmäßig zu einem höheren Jahresüberschuss als das UKV", "Das UKV ist nur für Personengesellschaften zulässig", "Eine rechnerische Überleitung zwischen beiden Verfahren ist nicht möglich"], correctIndex: 0, explanation: "GKV und UKV sind lediglich zwei unterschiedliche Gliederungslogiken für denselben Sachverhalt und führen deshalb stets zum identischen Jahresüberschuss; eine Überleitung ist rechnerisch möglich." }
    ]
  },
  {
    id: "bilanzierung-guv-ergebnisverwendung",
    chapter: 8,
    order: 3,
    title: "Ergebnisverwendungsrechnung und sonstige Angaben",
    icon: "💰",
    summary: "Wie aus dem Jahresüberschuss über Gewinnvortrag und Rücklagenbewegungen der Bilanzgewinn entsteht, sowie wichtige Begriffsabgrenzungen rund um die GuV (Aufwand/Kosten, Steuerposten, Umsatzerlöse, Eigenleistungen).",
    explanation: [
      { type: "p", text: "Der in der GuV ermittelte Jahresüberschuss (bzw. Jahresfehlbetrag) ist noch nicht der Betrag, der tatsächlich an die Anteilseigner ausgeschüttet werden kann. In einem nachgelagerten Schritt — der Ergebnisverwendungsrechnung — wird aus dem Jahresüberschuss der sogenannte Bilanzgewinn bzw. Bilanzverlust abgeleitet (§ 268 Abs. 1 HGB). Über die tatsächliche Verwendung dieses Bilanzgewinns entscheiden anschließend die zuständigen Gesellschaftsorgane, z. B. die Hauptversammlung bei einer Aktiengesellschaft." },
      { type: "list", items: [
        "Ausgangspunkt: Jahresüberschuss bzw. Jahresfehlbetrag aus der GuV",
        "+/- Gewinnvortrag bzw. Verlustvortrag aus dem Vorjahr",
        "+/- Entnahmen aus Kapital- oder Gewinnrücklagen bzw. Einstellungen in Gewinnrücklagen (z. B. aufgrund gesetzlicher, satzungsmäßiger oder freiwilliger Rücklagenbildung)",
        "= Bilanzgewinn bzw. Bilanzverlust (§ 268 Abs. 1 HGB)",
        "Beschluss über die Verwendung des Bilanzgewinns: Ausschüttung (Dividende) an die Anteilseigner und/oder Vortrag auf das nächste Geschäftsjahr"
      ]},
      { type: "p", text: "Der Jahresüberschuss ist der positive Saldo (Endbetrag) der GuV einer Periode — der Betrag, um den die Erträge eines Geschäftsjahres die Aufwendungen dieses Geschäftsjahres übersteigen. Er ist die zentrale erfolgswirtschaftliche Kennzahl des Jahresabschlusses und Ausgangspunkt sowohl für die Ergebnisverwendung als auch für zwischenunternehmerische Vergleiche, wie sie z. B. jährlich anhand des veröffentlichten (Netto-)Ergebnisses großer, börsennotierter Konzerne (etwa der DAX-Unternehmen) vorgenommen werden. Übersteigen umgekehrt die Aufwendungen die Erträge, liegt ein Jahresfehlbetrag vor." },
      { type: "p", text: "Im Zusammenhang mit der GuV ist der handelsrechtliche Begriff 'Aufwand' vom betriebswirtschaftlichen Begriff 'Kosten' abzugrenzen: Aufwand ist der gesamte, in der GuV erfasste Werteverzehr einer Periode, unabhängig davon, ob er betriebsbedingt, periodengerecht oder 'normal' ist — er umfasst also auch außerordentliche, periodenfremde oder betriebsfremde Wertminderungen (sog. neutraler Aufwand). Kosten sind dagegen ein kalkulatorischer Begriff der Kosten- und Leistungsrechnung: der bewertete, sachzielbezogene Verzehr von Gütern und Dienstleistungen zur Erstellung der eigentlichen betrieblichen Leistung. Sie umfassen nur den betriebsbedingten, periodengerechten 'normalen' Werteverzehr sowie ggf. zusätzliche kalkulatorische Kosten (z. B. kalkulatorische Zinsen), die handelsrechtlich gar keinen Aufwand darstellen." },
      { type: "p", text: "Auch innerhalb der Steuerposten der GuV ist zu differenzieren: 'Steuern vom Einkommen' besteuern das erzielte Einkommen des Rechtsträgers — bei Kapitalgesellschaften die Körperschaftsteuer (zzgl. Solidaritätszuschlag), bei Personenunternehmen die Einkommensteuer. 'Steuern vom Ertrag' knüpfen dagegen an den betrieblichen Ertrag (Gewerbeertrag) an; hierzu zählt insbesondere die Gewerbesteuer. Beide werden gemeinsam im GuV-Posten 'Steuern vom Einkommen und vom Ertrag' erfasst, während ergebnisunabhängige Steuern (z. B. Grundsteuer, Kraftfahrzeugsteuer) gesondert unter 'sonstige Steuern' auszuweisen sind." },
      { type: "list", items: [
        "Umsatzerlöse (§ 277 Abs. 1 HGB) umfassen Erlöse aus dem Verkauf sowie aus der Vermietung oder Verpachtung von Produkten und aus der Erbringung von Dienstleistungen, die für die gewöhnliche Geschäftstätigkeit der Gesellschaft typisch sind, jeweils abzüglich Erlösschmälerungen und Umsatzsteuer. Abzugrenzen sind davon insbesondere sonstige betriebliche Erträge sowie Erträge aus Beteiligungen und Zinsen (Finanzergebnis), da diese nicht aus der typischen Absatztätigkeit, sondern aus Nebengeschäften bzw. Kapitalanlagen entstehen.",
        "'Andere aktivierte Eigenleistungen' sind selbst erstellte, aktivierungsfähige Vermögensgegenstände des Anlagevermögens (z. B. eine selbst gebaute Maschine). Da die dafür angefallenen Aufwendungen bereits in den Aufwandsposten der GuV enthalten sind, obwohl kein Umsatzerlös vorliegt, wird über diesen Ertragsposten der bereits erfasste Aufwand in Höhe der Herstellungskosten neutralisiert."
      ]},
      { type: "p", text: "Über die hier behandelten Grundlagen hinaus lassen sich weitere Details zur GuV — insbesondere zu Unterschieden zwischen Handels- und Steuerbilanz sowie zur vertieften Jahresabschlussanalyse — in den entsprechenden Wahlmodulen vertiefen." }
    ],
    exercises: [
      {
        id: "bilanzierung-guv-ergebnisverwendung-e1",
        prompt: "Was versteht man unter dem 'Jahresüberschuss'?",
        solution: [{ type: "p", text: "Der Jahresüberschuss ist der positive Saldo (Endbetrag) der GuV einer Periode — der Betrag, um den die Erträge eines Geschäftsjahres die Aufwendungen dieses Geschäftsjahres übersteigen. Er ist die zentrale erfolgswirtschaftliche Kennzahl des Jahresabschlusses und erhöht (vor Berücksichtigung der Ergebnisverwendung) grundsätzlich das Eigenkapital des Unternehmens. Übersteigen umgekehrt die Aufwendungen die Erträge, spricht man von einem Jahresfehlbetrag." }]
      },
      {
        id: "bilanzierung-guv-ergebnisverwendung-e2",
        prompt: "Beschreiben Sie in groben Zügen die Berechnung vom Jahresüberschuss hin zum auszuschüttenden Gewinn.",
        solution: [{ type: "p", text: "Ausgehend vom in der GuV ermittelten Jahresüberschuss (bzw. Jahresfehlbetrag) einer Kapitalgesellschaft wird in der Ergebnisverwendungsrechnung zunächst ein Gewinn- oder Verlustvortrag aus dem Vorjahr hinzugerechnet bzw. abgezogen. Anschließend werden Entnahmen aus Kapital- oder Gewinnrücklagen hinzugerechnet bzw. Einstellungen in Gewinnrücklagen (z. B. gesetzliche, satzungsmäßige oder freiwillige Rücklagenbildung) abgezogen. Das Ergebnis dieser Rechnung ist der Bilanzgewinn bzw. Bilanzverlust (§ 268 Abs. 1 HGB). Über die Verwendung des Bilanzgewinns — insbesondere Höhe der Ausschüttung (Dividende) und einen etwaigen Gewinnvortrag auf das nächste Jahr — entscheiden die zuständigen Gesellschaftsorgane, z. B. die Hauptversammlung bei der AG." }]
      },
      {
        id: "bilanzierung-guv-ergebnisverwendung-e3",
        prompt: "Erläutern Sie den Begriff 'Aufwand' und grenzen Sie diesen kurz vom Begriff 'Kosten' ab.",
        solution: [{ type: "p", text: "Aufwand ist der gesamte, handelsrechtlich in der GuV erfasste Werteverzehr einer Periode — unabhängig davon, ob er betriebsbedingt, periodengerecht oder 'normal' ist; er umfasst daher auch außerordentliche, periodenfremde oder betriebsfremde Wertminderungen (sog. neutraler Aufwand). Kosten sind demgegenüber ein kalkulatorischer Begriff der Kosten- und Leistungsrechnung: der bewertete, sachzielbezogene Verzehr von Gütern und Dienstleistungen zur Erstellung der eigentlichen betrieblichen Leistung. Kosten umfassen nur den betriebsbedingten, periodengerechten 'normalen' Werteverzehr (Zweckaufwand) und ggf. zusätzliche kalkulatorische Kosten (z. B. kalkulatorische Zinsen oder ein kalkulatorischer Unternehmerlohn), die handelsrechtlich gar keinen Aufwand darstellen." }]
      },
      {
        id: "bilanzierung-guv-ergebnisverwendung-e4",
        prompt: "Was versteht man unter a) Steuern vom Einkommen und b) Steuern vom Ertrag?",
        solution: [{ type: "p", text: "a) Steuern vom Einkommen besteuern das erzielte Einkommen des Rechtsträgers — bei Kapitalgesellschaften die Körperschaftsteuer (zzgl. Solidaritätszuschlag), bei Personenunternehmen bzw. natürlichen Personen die Einkommensteuer. b) Steuern vom Ertrag knüpfen an den betrieblichen Ertrag (Gewerbeertrag) an; dies ist insbesondere die Gewerbesteuer. Beide Steuerarten werden in der GuV gemeinsam im Posten 'Steuern vom Einkommen und vom Ertrag' ausgewiesen, während andere, ergebnisunabhängige Steuern (z. B. Grundsteuer, Kraftfahrzeugsteuer) gesondert unter 'sonstige Steuern' erfasst werden." }]
      },
      {
        id: "bilanzierung-guv-ergebnisverwendung-e5",
        prompt: "Was sind 'Eigenleistungen' und 'andere aktivierte Eigenleistungen'?",
        solution: [{ type: "p", text: "Eigenleistungen sind selbst erstellte, aktivierungsfähige Vermögensgegenstände des Anlagevermögens, z. B. eine im eigenen Betrieb gebaute Maschine oder selbst entwickelte Software. Da die dafür angefallenen Aufwendungen (Material-, Personalaufwand etc.) bereits in den entsprechenden Aufwandsposten der GuV enthalten sind, obwohl kein Umsatzerlös vorliegt, wird zum Ausgleich in der GuV ein eigener Ertragsposten 'andere aktivierte Eigenleistungen' gebildet: Er neutralisiert den bereits erfassten Aufwand in Höhe der Herstellungskosten des selbst erstellten Vermögensgegenstands und verhindert, dass der Erfolg fälschlich gemindert wird." }]
      },
      {
        id: "bilanzierung-guv-ergebnisverwendung-e6",
        prompt: "Grenzen Sie Inhalt und Umfang des Postens 'Umsatzerlöse' gegenüber anderen Ertragsposten ab.",
        solution: [{ type: "p", text: "Umsatzerlöse (§ 277 Abs. 1 HGB) umfassen Erlöse aus dem Verkauf sowie aus der Vermietung oder Verpachtung von Produkten und aus der Erbringung von Dienstleistungen, die für die gewöhnliche Geschäftstätigkeit der Gesellschaft typisch sind, jeweils abzüglich Erlösschmälerungen und Umsatzsteuer. Davon abzugrenzen sind insbesondere sonstige betriebliche Erträge (z. B. Erträge aus dem Abgang von Anlagevermögen oder aus für das Unternehmen untypischen Nebengeschäften) sowie Erträge aus Beteiligungen und Zinsen und ähnliche Erträge (beide dem Finanzergebnis zugeordnet) — diese entstehen nicht aus der typischen Absatztätigkeit, sondern aus Vermögens- bzw. Kapitalanlagen oder Nebentätigkeiten." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Was versteht man unter dem 'Jahresüberschuss'?", options: ["Der positive Saldo der GuV einer Periode — die Erträge übersteigen die Aufwendungen", "Der Bestand an liquiden Mitteln am Bilanzstichtag", "Die Summe aller Umsatzerlöse eines Geschäftsjahres", "Der im Anhang ausgewiesene Buchwert des Anlagevermögens"], correctIndex: 0, explanation: "Der Jahresüberschuss ist der positive Saldo der GuV, wenn die Erträge einer Periode die Aufwendungen übersteigen." },
      { id: "q2", question: "Wie wird der Endbetrag der GuV genannt, wenn die Aufwendungen die Erträge einer Periode übersteigen?", options: ["Jahresüberschuss", "Bilanzgewinn", "Jahresfehlbetrag", "Rohergebnis"], correctIndex: 2, explanation: "Übersteigen die Aufwendungen die Erträge, liegt ein Jahresfehlbetrag vor." },
      { id: "q3", question: "Wie ermittelt sich der Bilanzgewinn bzw. Bilanzverlust nach § 268 Abs. 1 HGB?", options: ["Jahresüberschuss/-fehlbetrag zzgl./abzgl. Gewinn-/Verlustvortrag sowie Rücklagenbewegungen", "Ausschließlich aus dem Rohergebnis der GuV", "Ausschließlich aus den Umsatzerlösen des laufenden Jahres", "Aus der Bilanzsumme abzüglich des gesamten Eigenkapitals"], correctIndex: 0, explanation: "Der Bilanzgewinn ergibt sich aus dem Jahresüberschuss zzgl./abzgl. Gewinn-/Verlustvortrag und Entnahmen aus bzw. Einstellungen in Rücklagen." },
      { id: "q4", question: "Wer entscheidet typischerweise über die Verwendung des Bilanzgewinns einer Aktiengesellschaft (z. B. Höhe der Dividende)?", options: ["Der Abschlussprüfer", "Die Hauptversammlung", "Das Finanzamt", "Ausschließlich der Vorstand ohne weitere Mitwirkung"], correctIndex: 1, explanation: "Über die Verwendung des Bilanzgewinns entscheidet bei der AG die Hauptversammlung." },
      { id: "q5", question: "Wie unterscheidet sich der Begriff 'Aufwand' vom Begriff 'Kosten'?", options: ["Beide Begriffe sind vollständig identisch und beliebig austauschbar", "Aufwand erfasst jeden handelsrechtlichen Werteverzehr der Periode, Kosten dagegen nur den betriebsbedingten, sachzielbezogenen Werteverzehr", "Kosten sind ausschließlich ein steuerrechtlicher Begriff ohne Bezug zur GuV", "Aufwand kommt nur in der Kosten- und Leistungsrechnung vor"], correctIndex: 1, explanation: "Aufwand ist der gesamte handelsrechtliche Werteverzehr, Kosten sind ein enger gefasster, kalkulatorischer Begriff der KLR." },
      { id: "q6", question: "Welche Steuer zählt zu den 'Steuern vom Einkommen'?", options: ["Gewerbesteuer", "Grundsteuer", "Körperschaftsteuer bzw. Einkommensteuer", "Kraftfahrzeugsteuer"], correctIndex: 2, explanation: "Körperschaftsteuer (bei Kapitalgesellschaften) bzw. Einkommensteuer (bei Personenunternehmen) sind Steuern vom Einkommen." },
      { id: "q7", question: "Welche Steuer zählt zu den 'Steuern vom Ertrag'?", options: ["Körperschaftsteuer", "Einkommensteuer", "Gewerbesteuer", "Umsatzsteuer"], correctIndex: 2, explanation: "Die Gewerbesteuer knüpft an den Gewerbeertrag an und zählt zu den Steuern vom Ertrag." },
      { id: "q8", question: "Unter welchem GuV-Posten werden ergebnisunabhängige Steuern wie die Grundsteuer erfasst?", options: ["Steuern vom Einkommen und vom Ertrag", "Sonstige Steuern", "Materialaufwand", "Ausschließlich unter sonstige betriebliche Aufwendungen"], correctIndex: 1, explanation: "Ergebnisunabhängige Steuern wie Grundsteuer oder Kfz-Steuer werden gesondert unter 'sonstige Steuern' ausgewiesen." },
      { id: "q9", question: "Was ist der Zweck des GuV-Postens 'andere aktivierte Eigenleistungen'?", options: ["Ausweis von Umsatzerlösen aus Fremdaufträgen", "Neutralisierung des bereits erfassten Aufwands für selbst erstellte, aktivierte Vermögensgegenstände des Anlagevermögens", "Ausweis von Zinserträgen aus Bankguthaben", "Erfassung von Erträgen aus dem Verkauf von Beteiligungen"], correctIndex: 1, explanation: "Der Posten gleicht den bereits als Aufwand erfassten Werteverzehr für selbst erstellte, aktivierungsfähige Vermögensgegenstände aus." },
      { id: "q10", question: "Was zählt gemäß § 277 Abs. 1 HGB zu den Umsatzerlösen?", options: ["Sämtliche Erträge eines Geschäftsjahres ohne Ausnahme", "Erlöse aus Verkauf, Vermietung/Verpachtung von Produkten und aus Dienstleistungen, die für die gewöhnliche Geschäftstätigkeit typisch sind", "Nur Erträge aus Finanzanlagen", "Ausschließlich Erträge aus dem Verkauf von Anlagevermögen"], correctIndex: 1, explanation: "Umsatzerlöse umfassen nach § 277 Abs. 1 HGB Erlöse aus der für die gewöhnliche Geschäftstätigkeit typischen Absatztätigkeit, abzüglich Erlösschmälerungen und USt." }
    ]
  }
];
