const KLR_CHAPTER1_TOPICS = [
  {
    id: "zwecke-systeme-rechnungswesen",
    chapter: 1,
    order: 1,
    title: "Zwecke und Systeme des Rechnungswesens",
    icon: "🏦",
    summary: "Was das Rechnungswesen leisten soll, wer seine Adressaten sind und in welche Teilsysteme es sich gliedert.",
    explanation: [
      { type: "p", text: "Coenenberg/Fischer/Günther definieren das Rechnungswesen als \"System zur quantitativen Ermittlung, Aufbereitung und Darstellung von wirtschaftlichen Zuständen und Abläufen\". Diese klassische Definition betont bewusst die technische, wertneutrale Seite: Zahlen werden erfasst, verarbeitet und für Entscheidungen aufbereitet, ohne dass dabei implizit ein moralischer oder gesellschaftlicher Anspruch mitschwingt." },
      { type: "p", text: "Modernere und weiter gefasste Definitionen, etwa von Carnegie/Parker/Tsahuridu, gehen über diese rein technische Sicht hinaus. Sie verstehen Rechnungswesen zusätzlich als soziale und moralische Praxis: Unternehmen legen gegenüber ihren Stakeholdern Rechenschaft ab (Accountability), und zunehmend fließen auch ökologische, soziale und Nachhaltigkeitsaspekte in die Berichterstattung ein - etwa CO2-Emissionen, Ressourcenverbrauch oder die Frauenquote in Führungspositionen. Der Fokus verschiebt sich damit von einer reinen Shareholder-Perspektive (nur die Eigentümer zählen) hin zu einer Stakeholder-Perspektive, die auch Mitarbeiter, Gesellschaft und Umwelt einbezieht." },
      { type: "p", text: "Innerhalb des betriebswirtschaftlichen Rechnungswesens unterscheidet man grundsätzlich zwei Bereiche, die sich vor allem durch ihre Adressaten unterscheiden:" },
      { type: "list", items: [
        "Externes Rechnungswesen (Finanzbuchhaltung): richtet sich primär an außenstehende, dem Unternehmen nicht direkt angehörende Adressaten - z. B. Lieferanten, den Staat/Fiskus, Anteilseigner, Banken bzw. Gläubiger und Gewerkschaften. Es unterliegt gesetzlichen Vorschriften (z. B. HGB) und mündet im Jahresabschluss.",
        "Internes Rechnungswesen (Betriebsbuchhaltung, insbesondere die Kosten- und Leistungsrechnung): richtet sich primär an unternehmensinterne Adressaten - z. B. Mitarbeiter, die Geschäftsführung, den Aufsichtsrat, den Vorstand, Gründer sowie das Management bzw. Abteilungsleiter. Es unterliegt keinen gesetzlichen Formvorschriften und dient vor allem der Steuerung des Betriebs."
      ]},
      { type: "p", text: "Das betriebswirtschaftliche Rechnungswesen als Ganzes gliedert sich in drei Rechnungssysteme: erstens die Bilanz- und Erfolgsrechnung (Finanzbuchhaltung mit Jahresabschluss aus Bilanz und Gewinn- und Verlustrechnung), zweitens die Kosten- und Leistungsrechnung (KLR), die den innerbetrieblichen Werteverzehr und -zuwachs abbildet, und drittens Sonderrechnungen wie die Investitionsrechnung, die Planungsrechnung sowie Statistik- und Vergleichsrechnungen, die für spezielle Fragestellungen zusätzliche Auswertungen liefern." },
      { type: "p", text: "Unabhängig vom jeweiligen Teilsystem verfolgt das Rechnungswesen drei zentrale Zwecke, die eng zusammenhängen: Die Dokumentation erfasst vergangene Geschäftsvorfälle und liefert damit die Datenbasis, auf der alles andere aufbaut. Die Planung nutzt diese Datenbasis, um vorausschauend Größen wie Kosten, Erlöse, Mengen oder Beschäftigung/Kapazitäten festzulegen, mit denen bestimmte Ziele erreicht werden sollen. Die Kontrolle vergleicht im Nachhinein die geplanten (Soll-) mit den tatsächlich eingetretenen (Ist-) Werten und deckt so Abweichungen auf. Bei besonders regulierten und beaufsichtigten Unternehmen wie Banken oder Versicherungen hat der Dokumentationszweck gegenüber Aufsichtsbehörden (z. B. BaFin) eine noch höhere Bedeutung als in anderen Branchen, da hier zusätzlich strenge gesetzliche Nachweis- und Meldepflichten bestehen." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ordnen Sie die folgenden aktuellen Begriffe jeweils kurz ein, ob und wie sie sich im betriebswirtschaftlichen Sinne als \"Kosten\" fassen lassen: a) Zölle, b) Energiekosten, c) Personalkostenabbau, d) Produktionskosten, e) Opportunitätskosten, f) Bürokratiekosten.",
        solution: [
          { type: "list", items: [
            "Zölle: sind für ein importierendes Unternehmen betriebszweckbezogener, bewerteter Werteverzehr und damit echte Kosten (zusätzliche Materialkosten pro importierter Einheit).",
            "Energiekosten: klassische Kosten, da regelmäßiger, betriebszweckbezogener und bewerteter Verbrauch von Energie zur Leistungserstellung vorliegt.",
            "Personalkostenabbau: bezeichnet keine eigene Kostenart, sondern die Reduktion bestehender Personalkosten (z. B. durch Stellenabbau) - das \"Abbauen\" selbst ist keine Kostengröße, sondern eine Maßnahme, die künftige Personalkosten senkt.",
            "Produktionskosten: Sammelbegriff für alle Kosten, die bei der Erstellung von Erzeugnissen anfallen (Material-, Personal-, Maschinenkosten etc.) - eindeutig Kosten im betriebswirtschaftlichen Sinn.",
            "Opportunitätskosten: sind keine tatsächlich verausgabten Kosten im engeren Sinn, sondern entgangener Nutzen einer nicht gewählten Alternative; sie werden in der KLR eher als kalkulatorische Größe (z. B. kalkulatorische Zinsen) berücksichtigt als als klassischer Aufwand.",
            "Bürokratiekosten: der Verwaltungsaufwand zur Erfüllung gesetzlicher Pflichten ist betriebszweckbezogener Werteverzehr (Arbeitszeit, Beratungskosten) und damit grundsätzlich Kosten, auch wenn er nicht der eigentlichen Leistungserstellung dient."
          ]}
        ]
      },
      {
        id: "ex2",
        prompt: "Ordnen Sie die folgenden Adressaten jeweils dem externen oder internen Rechnungswesen zu und begründen Sie kurz: Mitarbeiter, Lieferanten, Finanzamt, Aktionäre, Geschäftsführung, Gewerkschaft.",
        solution: [
          { type: "list", items: [
            "Mitarbeiter: internes Rechnungswesen - sie sind Teil des Unternehmens und interessieren sich für interne Steuerungsgrößen (z. B. Abteilungsergebnisse).",
            "Lieferanten: externes Rechnungswesen - sie stehen außerhalb des Unternehmens und interessieren sich vor allem für dessen Zahlungsfähigkeit laut Jahresabschluss.",
            "Finanzamt: externes Rechnungswesen - der Fiskus benötigt den handelsrechtlichen bzw. steuerlichen Jahresabschluss zur Besteuerung.",
            "Aktionäre: externes Rechnungswesen - als Anteilseigner sind sie externe Adressaten, die sich am veröffentlichten Jahresabschluss orientieren.",
            "Geschäftsführung: internes Rechnungswesen - sie benötigt detaillierte, unternehmensinterne Kosten- und Leistungsinformationen zur Steuerung.",
            "Gewerkschaft: externes Rechnungswesen - sie steht außerhalb des Unternehmens und nutzt vor allem öffentlich zugängliche Zahlen, etwa für Tarifverhandlungen."
          ]}
        ]
      },
      {
        id: "ex3",
        prompt: "Erläutern Sie am Beispiel einer Bank, warum der Dokumentationszweck des Rechnungswesens hier eine besonders hohe Bedeutung hat.",
        solution: [
          { type: "p", text: "Banken unterliegen einer besonders strengen staatlichen Aufsicht (in Deutschland u. a. durch die BaFin und die EZB), da ihre Stabilität für die gesamte Volkswirtschaft von großer Bedeutung ist (Systemrelevanz) und sie in hohem Maße mit fremdem Geld (Kundeneinlagen) arbeiten. Deshalb müssen Banken sehr detailliert und lückenlos dokumentieren, etwa im Rahmen von Eigenkapital- und Liquiditätsvorschriften (z. B. Basel III), um gegenüber den Aufsichtsbehörden jederzeit nachweisen zu können, dass sie die regulatorischen Anforderungen einhalten. Der Dokumentationszweck tritt hier also nicht nur zur allgemeinen Rechenschaftslegung gegenüber Anteilseignern hinzu, sondern dient direkt der Erfüllung gesetzlicher Aufsichtspflichten." }
        ]
      },
      {
        id: "ex4",
        prompt: "Nennen Sie die drei Rechnungssysteme des betriebswirtschaftlichen Rechnungswesens und erläutern Sie jedes in ein bis zwei Sätzen.",
        solution: [
          { type: "list", items: [
            "Bilanz- und Erfolgsrechnung: die Finanzbuchhaltung im engeren Sinn, die im gesetzlich vorgeschriebenen Jahresabschluss (Bilanz und Gewinn- und Verlustrechnung) mündet und primär externen Adressaten dient.",
            "Kosten- und Leistungsrechnung (KLR): erfasst den betriebszweckbezogenen Werteverzehr (Kosten) und -zuwachs (Leistungen) einer Periode und dient vor allem der innerbetrieblichen Steuerung, Kalkulation und Wirtschaftlichkeitskontrolle.",
            "Sonderrechnungen: ergänzende Rechnungen für spezielle Fragestellungen, z. B. die Investitionsrechnung (Vorteilhaftigkeit von Investitionen), die Planungsrechnung (Budgetierung künftiger Perioden) sowie Statistik- und Vergleichsrechnungen (z. B. Zeit- oder Betriebsvergleiche)."
          ]}
        ]
      },
      {
        id: "ex5",
        prompt: "Vergleichen Sie die \"technische\" Definition von Rechnungswesen nach Coenenberg/Fischer/Günther mit einer erweiterten Definition, die soziale, moralische und Nachhaltigkeitsaspekte einbezieht (z. B. nach Carnegie/Parker/Tsahuridu). Arbeiten Sie Gemeinsamkeiten und Unterschiede heraus.",
        solution: [
          { type: "p", text: "Gemeinsam ist beiden Definitionen, dass Rechnungswesen der quantitativen Erfassung, Aufbereitung und Darstellung von wirtschaftlichen Sachverhalten dient und damit Grundlage für Entscheidungen und Rechenschaftslegung ist." },
          { type: "p", text: "Der Unterschied liegt im Anspruch: Die technische Definition beschreibt Rechnungswesen als neutrales Instrument zur Abbildung wirtschaftlicher Zustände und Abläufe, ohne eine gesellschaftliche oder moralische Dimension zu betonen. Die erweiterte Definition versteht Rechnungswesen zusätzlich als soziale Praxis der Rechenschaftslegung (Accountability) gegenüber einer breiteren Gruppe von Stakeholdern - nicht nur Eigentümern, sondern auch Mitarbeitern, Gesellschaft und Umwelt - und bezieht explizit ökologische und soziale Kennzahlen (z. B. CO2-Emissionen, Diversität) sowie moralische Verantwortung mit ein. Die technische Sicht ist also enger und wertneutraler, die erweiterte Sicht normativer und stakeholderorientierter." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie definieren Coenenberg/Fischer/Günther das Rechnungswesen?", options: ["Als reine Sammlung gesetzlicher Vorschriften zur Buchführung", "Als Instrument zur ausschließlichen Steuerbelastungsminimierung", "Als System zur quantitativen Ermittlung, Aufbereitung und Darstellung von wirtschaftlichen Zuständen und Abläufen", "Als System zur qualitativen Bewertung von Mitarbeitermotivation"], correctIndex: 2, explanation: "Die klassische Definition betont die quantitative Ermittlung, Aufbereitung und Darstellung wirtschaftlicher Zustände und Abläufe." },
      { id: "q2", question: "Was ergänzen erweiterte, modernere Definitionen von Rechnungswesen (z. B. nach Carnegie/Parker/Tsahuridu) gegenüber der klassischen, technischen Definition?", options: ["Ausschließlich neue mathematische Berechnungsverfahren", "Eine Beschränkung auf rein steuerliche Aspekte", "Soziale, moralische und Nachhaltigkeitsdimensionen sowie Stakeholder-Rechenschaftslegung", "Nichts, sie sind inhaltlich identisch"], correctIndex: 2, explanation: "Erweiterte Definitionen betonen zusätzlich soziale, moralische und Nachhaltigkeitsaspekte sowie die Rechenschaftslegung gegenüber Stakeholdern, nicht nur Shareholdern." },
      { id: "q3", question: "Welche Adressaten sind primär dem externen Rechnungswesen zuzuordnen?", options: ["Nur unternehmensinterne Controller", "Lieferanten, Fiskus, Anteilseigner und Gläubiger", "Mitarbeiter und Abteilungsleiter", "Ausschließlich der Vorstand"], correctIndex: 1, explanation: "Das externe Rechnungswesen richtet sich an außenstehende Adressaten wie Lieferanten, den Staat/Fiskus, Anteilseigner und Banken/Gläubiger." },
      { id: "q4", question: "Welche Adressaten sind primär dem internen Rechnungswesen zuzuordnen?", options: ["Mitarbeiter, Geschäftsführung, Aufsichtsrat und Management", "Banken und sonstige Gläubiger", "Ausschließlich das Finanzamt", "Lieferanten und Gewerkschaften"], correctIndex: 0, explanation: "Das interne Rechnungswesen (Betriebsbuchhaltung/KLR) dient vor allem unternehmensinternen Adressaten wie Mitarbeitern, Geschäftsführung, Aufsichtsrat und Management." },
      { id: "q5", question: "Welche drei Zwecke verfolgt das betriebswirtschaftliche Rechnungswesen?", options: ["Werbung, Vertrieb, Produktion", "Besteuerung, Export, Import", "Marketing, Personal, Logistik", "Dokumentation, Planung, Kontrolle"], correctIndex: 3, explanation: "Die drei zentralen Zwecke sind Dokumentation (Datenbasis), Planung (vorausschauende Zielgrößen) und Kontrolle (Soll-Ist-Vergleich)." },
      { id: "q6", question: "Wie hängen Dokumentation, Planung und Kontrolle zusammen?", options: ["Die Planung ersetzt die Dokumentation vollständig", "Sie sind völlig unabhängig voneinander", "Die Kontrolle findet immer vor der Planung statt", "Die Dokumentation liefert die Datenbasis, die Planung legt vorausschauend Zielgrößen fest, die Kontrolle vergleicht im Nachhinein Soll und Ist"], correctIndex: 3, explanation: "Dokumentation schafft die Datengrundlage, darauf aufbauend werden in der Planung Zielgrößen festgelegt, und die Kontrolle vergleicht danach die tatsächlichen mit den geplanten Werten." },
      { id: "q7", question: "Bei welchen Unternehmen hat der Dokumentationszweck des Rechnungswesens eine besonders hohe Bedeutung?", options: ["Bei besonders regulierten und beaufsichtigten Unternehmen wie Banken und Versicherungen", "Bei kleinen Familienbetrieben ohne Fremdkapital", "Bei Unternehmen ohne Mitarbeiter", "Bei rein internationalen Start-ups"], correctIndex: 0, explanation: "Regulierte Branchen wie Banken und Versicherungen unterliegen strengen Nachweispflichten gegenüber Aufsichtsbehörden, wodurch der Dokumentationszweck zusätzliches Gewicht erhält." },
      { id: "q8", question: "Welche drei Rechnungssysteme umfasst das betriebswirtschaftliche Rechnungswesen?", options: ["Steuerrechnung, Zollrechnung, Lohnrechnung", "Marketingrechnung, Personalrechnung, Exportrechnung", "Bilanz- und Erfolgsrechnung, Kosten- und Leistungsrechnung, Sonderrechnungen", "Nur die Kosten- und Leistungsrechnung"], correctIndex: 2, explanation: "Die drei Rechnungssysteme sind Bilanz-/Erfolgsrechnung, Kosten- und Leistungsrechnung (KLR) und Sonderrechnungen (z. B. Investitions-, Planungs-, Statistik- und Vergleichsrechnung)." },
      { id: "q9", question: "Welche Beispiele werden für in der Planung des internen Rechnungswesens festgelegte Größen genannt?", options: ["Nur Steuersätze", "Kosten, Erlöse, Mengen und Beschäftigung/Kapazitäten", "Nur die Anzahl der Aufsichtsratsmitglieder", "Ausschließlich Aktienkurse"], correctIndex: 1, explanation: "Im internen Rechnungswesen werden vorausschauend u. a. Kosten, Erlöse, Mengen sowie Beschäftigung und Kapazitäten geplant." },
      { id: "q10", question: "Welche Entwicklung wird im Zusammenhang mit wachsender Bedeutung von Nachhaltigkeit im Rechnungswesen beschrieben?", options: ["Ein reiner Rückzug auf finanzielle Kennzahlen", "Eine Ergänzung der klassischen finanziellen Sicht um ökologische und soziale Aspekte sowie eine Verschiebung hin zur Stakeholder-Perspektive", "Eine ausschließliche Fokussierung auf Shareholder-Interessen", "Die vollständige Abschaffung der externen Rechnungslegung"], correctIndex: 1, explanation: "Ökologische und soziale Kennzahlen (z. B. CO2-Emissionen, Frauenquote) ergänzen zunehmend die finanzielle Sicht, und der Fokus verschiebt sich von reiner Shareholder- zu einer Stakeholder-Perspektive." }
    ]
  },
  {
    id: "grundbegriffe-rechnungswesen",
    chapter: 1,
    order: 2,
    title: "Grundbegriffe: Von der Einzahlung zu den Kosten",
    icon: "💶",
    summary: "Vier Begriffsebenen vom Zahlungsmittelbestand bis zum betriebsnotwendigen Vermögen - und die Abgrenzung von Aufwand und Kosten.",
    explanation: [
      { type: "p", text: "Das Rechnungswesen kennt vier aufeinander aufbauende Begriffspaare, die jeweils an eine andere Vermögens- bzw. \"Fonds\"-Größe anknüpfen: Der Zahlungsmittelbestand (Kasse und Bank) verändert sich durch Einzahlungen und Auszahlungen. Das Geldvermögen (Zahlungsmittel plus Forderungen minus Verbindlichkeiten) verändert sich durch Einnahmen und Ausgaben. Das Reinvermögen bzw. Eigenkapital laut Bilanz verändert sich durch Ertrag und Aufwand. Und das betriebsnotwendige Vermögen verändert sich durch Leistung und Kosten. Je weiter man in dieser Reihe nach rechts wandert, desto stärker rückt die eigentliche betriebliche Tätigkeit in den Fokus, unabhängig von reinen Zahlungsvorgängen." },
      { type: "p", text: "Einzahlung/Auszahlung bezeichnen den unmittelbaren Zu- bzw. Abfluss von Zahlungsmitteln, also von Bargeld oder Buchgeld auf Bankkonten. Einnahme/Ausgabe gehen einen Schritt weiter und erfassen jede Veränderung des Geldvermögens - auch dann, wenn noch gar kein Geld geflossen ist. Eine Rechnung auf Ziel (also gegen spätere Zahlung) ist deshalb bereits eine Ausgabe (die Verbindlichkeiten steigen bzw. Forderungen entstehen), obwohl noch keine Auszahlung stattgefunden hat." },
      { type: "p", text: "Ertrag/Aufwand beziehen sich auf die handelsrechtliche Gewinn- und Verlustrechnung (GuV) und erfassen jeden Werte-Zu- bzw. -abgang einer Periode, unabhängig davon, ob dieser betriebszweckbezogen ist. Es gilt: Ertrag minus Aufwand ergibt den handelsrechtlichen Jahresüberschuss bzw. Jahresfehlbetrag nach HGB." },
      { type: "p", text: "Leistung/Kosten schließlich sind Begriffe des internen Rechnungswesens und beziehen sich ausschließlich auf den betriebszweckbezogenen Werteverzehr bzw. -zuwachs einer Periode. Nach Mumm (2007) sind Kosten durch drei Kriterien gekennzeichnet: Es muss ein tatsächlicher Verzehr (Verbrauch) von Gütern oder Dienstleistungen vorliegen, dieser Verbrauch muss betriebszweck- und periodenbezogen sein (Sachzielbezogenheit), und der Verbrauch muss bewertet werden, also in Geldeinheiten ausgedrückt sein." },
      { type: "p", text: "Aus dem Zusammenspiel von Aufwand und Kosten ergibt sich eine wichtige Abgrenzung:" },
      { type: "list", items: [
        "Neutraler Aufwand: Aufwand ohne zugehörige Kosten, weil er nicht betriebszweckbezogen ist. Beispiele: Spenden, außerordentliche, betriebsfremde oder periodenfremde Aufwendungen.",
        "Zweckaufwand (= Grundkosten): Aufwand, der deckungsgleich zugleich Kosten ist, z. B. eine planmäßige Abschreibung in handelsrechtlich zulässiger Höhe.",
        "Kalkulatorische Kosten: Kosten ohne (deckungsgleichen) Aufwand. Sie unterteilen sich in Anderskosten (Kosten in anderer Höhe als der zugehörige Aufwand, z. B. eine kalkulatorische Abschreibung, die von der bilanziellen Abschreibung abweicht) und Zusatzkosten (denen überhaupt kein Aufwands-Gegenstück gegenübersteht, z. B. kalkulatorische Zinsen auf das eingesetzte Eigenkapital, ein kalkulatorischer Unternehmerlohn, eine kalkulatorische Miete für unternehmenseigene Gebäude oder kalkulatorische Wagnisse)."
      ]},
      { type: "p", text: "Aus echten Klausuraufgaben ergeben sich daraus einige wichtige Merksätze: Kalkulatorische Zinsen auf das Eigenkapital sind niemals Aufwand, aber immer Kosten, da ihnen kein handelsrechtlicher Aufwand gegenübersteht, sie aber betriebszweckbezogen und bewertbar sind (Zusatzkosten). Spenden sind Aufwand, aber keine Kosten, da ihnen die Sachzielbezogenheit fehlt (neutraler Aufwand). Die Entnahme von Material aus dem eigenen Lager ist Kosten (es liegt ein Werteverzehr vor), aber keine Ausgabe oder Auszahlung mehr - diese fanden bereits beim ursprünglichen Einkauf des Materials statt. Eine planmäßige Abschreibung ist meist sowohl Aufwand als auch Kosten in gleicher Höhe (Zweckaufwand bzw. Grundkosten)." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Die Möbelmanufaktur Holzwerk GmbH hatte im März folgende Geschäftsvorfälle: a) Auszahlung einer Dividende von 30.000 €, b) Kauf einer Hobelmaschine für 45.000 € auf Ziel, sofortige Zahlung erfolgt jedoch nicht, c) Spende von 2.000 € an einen gemeinnützigen Verein, d) im Voraus gezahlte Gehälter für April in Höhe von 18.000 €, e) kalkulatorische Zinsen auf das Eigenkapital in Höhe von 4.500 €, f) planmäßige Abschreibung auf Anlagen in Höhe von 6.000 €, g) Anzahlung eines Kunden über 5.000 € für eine noch nicht gelieferte Bestellung. Bestimmen Sie für jeden Vorfall, ob und in welcher Höhe eine Auszahlung, Ausgabe, ein Aufwand bzw. Kosten vorliegen.",
        solution: [
          { type: "list", items: [
            "Dividendenauszahlung 30.000 €: Auszahlung und Ausgabe in Höhe von 30.000 € (Zahlungsmittel fließen sofort ab); kein Aufwand und keine Kosten, da die Gewinnverwendung das Eigenkapital nicht über die GuV, sondern über die Ergebnisverwendung mindert.",
            "Kauf der Hobelmaschine auf Ziel, 45.000 €: Ausgabe in Höhe von 45.000 € (Verbindlichkeit entsteht), aber keine Auszahlung, da noch kein Geld geflossen ist. Kein Aufwand und keine Kosten zum Kaufzeitpunkt - der Werteverzehr entsteht erst über die Abschreibung in Folgeperioden.",
            "Spende 2.000 €: Auszahlung, Ausgabe und Aufwand in Höhe von 2.000 €, jedoch keine Kosten, da die Spende nicht betriebszweckbezogen ist (neutraler Aufwand).",
            "Vorausgezahlte Gehälter 18.000 €: Auszahlung und Ausgabe in Höhe von 18.000 € im März; Aufwand und Kosten entstehen jedoch erst in der Periode, in der die Arbeitsleistung tatsächlich erbracht wird (April), nicht bereits im März.",
            "Kalkulatorische Zinsen auf Eigenkapital 4.500 €: Kosten in Höhe von 4.500 € (Zusatzkosten), aber keine Auszahlung, Ausgabe oder Aufwand, da kein handelsrechtlicher Aufwand gegenübersteht.",
            "Planmäßige Abschreibung 6.000 €: Aufwand und Kosten in gleicher Höhe von 6.000 € (Zweckaufwand/Grundkosten); keine Auszahlung oder Ausgabe, da kein Zahlungsmittelabfluss stattfindet.",
            "Kundenanzahlung 5.000 €: Einzahlung und Einnahme in Höhe von 5.000 € (Zahlungsmittelbestand und Geldvermögen steigen); kein Ertrag oder Leistung, da die eigentliche Lieferung noch nicht erbracht wurde."
          ]}
        ]
      },
      {
        id: "ex2",
        prompt: "Ordnen Sie für folgende Positionen jeweils ein, ob Aufwand, Kosten, beides oder weder noch vorliegt: a) Darlehen an einen Prokuristen, b) Provisionen für freie Handelsvertreter, c) Feuerversicherungsprämie für das Betriebsgebäude, d) Privatentnahme des Eigentümers, e) Gewinnausschüttung einer GmbH, f) Abschreibung auf Fertigungsmaschinen, g) Gehalt der Geschäftsleitung, h) Sozialversicherungsbeiträge (Arbeitgeberanteil), i) Spende an einen gemeinnützigen Verein, j) kalkulatorische Miete für ein eigenes Betriebsgebäude, k) Reparatur einer EDV-Anlage, l) Kfz-Steuer für einen Dienstwagen, m) Gehalt eines Meisters in der Fertigung.",
        solution: [
          { type: "list", items: [
            "Darlehen an einen Prokuristen: weder Aufwand noch Kosten - es handelt sich um einen bloßen Aktivtausch (Zahlungsmittel gegen Forderung), kein Werteverzehr.",
            "Provisionen für freie Handelsvertreter: Aufwand und Kosten (Zweckaufwand), da betriebszweckbezogener, bewerteter Verbrauch für den Vertrieb.",
            "Feuerversicherungsprämie für das Betriebsgebäude: Aufwand und Kosten, da betriebsnotwendig zur Absicherung des Betriebsvermögens.",
            "Privatentnahme des Eigentümers: weder Aufwand noch Kosten - es handelt sich um eine erfolgsneutrale Kapitalentnahme, keine Aufwendung der GuV.",
            "Gewinnausschüttung einer GmbH: Aufwand? Nein - weder Aufwand noch Kosten, da es sich um Gewinnverwendung nach Ermittlung des Jahresüberschusses handelt, nicht um einen GuV-wirksamen Vorgang.",
            "Abschreibung auf Fertigungsmaschinen: Aufwand und Kosten (Zweckaufwand/Grundkosten), sofern in planmäßiger, handelsrechtlich zulässiger Höhe.",
            "Gehalt der Geschäftsleitung: Aufwand und Kosten, da betriebszweckbezogener, bewerteter Personalverzehr.",
            "Sozialversicherungsbeiträge (Arbeitgeberanteil): Aufwand und Kosten, da unmittelbar mit der Personalleistung verbundener, betriebszweckbezogener Verzehr.",
            "Spende an einen gemeinnützigen Verein: nur Aufwand, keine Kosten (neutraler Aufwand), da nicht betriebszweckbezogen.",
            "Kalkulatorische Miete für ein eigenes Betriebsgebäude: nur Kosten, kein Aufwand (Zusatzkosten), da kein Mietaufwand in der GuV entsteht, wenn das Gebäude im Eigentum steht.",
            "Reparatur einer EDV-Anlage: Aufwand und Kosten, da betriebszweckbezogener, bewerteter Werteverzehr zur Aufrechterhaltung der Betriebsbereitschaft.",
            "Kfz-Steuer für einen Dienstwagen: Aufwand und Kosten, sofern der Dienstwagen betrieblich genutzt wird.",
            "Gehalt eines Meisters in der Fertigung: Aufwand und Kosten, da betriebszweckbezogener, bewerteter Personalverzehr in der Produktion."
          ]}
        ]
      },
      {
        id: "ex3",
        prompt: "Die Softtech GmbH hat folgende Vorgänge im Geschäftsjahr: a) Eigenentwicklung einer internen Software, für die 40.000 € an Personalkosten für die Programmierung angefallen sind, ein Verkauf ist nicht geplant, b) fakturierte Umsätze aus dem Verkauf von Standardsoftware in Höhe von 250.000 €, c) eine Bestandsmehrung an fertigen, aber noch nicht abgesetzten Erzeugnissen im Wert von 15.000 €, d) Verkauf eines nicht mehr benötigten Grundstücks für 120.000 € bei einem Buchwert von 90.000 €. Bestimmen Sie jeweils, ob und in welcher Höhe Ertrag und/oder Leistung vorliegen.",
        solution: [
          { type: "list", items: [
            "Eigenentwicklung der internen Software (40.000 €): Es handelt sich um Kosten für die Programmierung (Personalkosten), aber ohne Verkauf entsteht kein Ertrag. Eine Leistung liegt nur vor, wenn die selbst erstellte Software aktiviert wird (aktivierte Eigenleistung); ist dies der Fall, entspricht die Leistung den 40.000 € Herstellungskosten.",
            "Fakturierte Umsätze (250.000 €): Ertrag und Leistung in gleicher Höhe von 250.000 €, da es sich um einen betriebszweckbezogenen, ordentlichen Umsatzerlös handelt.",
            "Bestandsmehrung an fertigen, nicht abgesetzten Erzeugnissen (15.000 €): Ertrag und Leistung in Höhe von 15.000 €, da die Bestandsmehrung als betriebszweckbezogene Leistung erfasst wird, auch ohne dass ein Verkauf stattgefunden hat.",
            "Verkauf des Grundstücks (Verkaufspreis 120.000 €, Buchwert 90.000 €): Es entsteht ein außerordentlicher Ertrag von 30.000 € (Differenz zwischen Verkaufspreis und Buchwert), jedoch keine Leistung, da der Grundstücksverkauf nicht betriebszweckbezogen ist, sondern ein einmaliger, betriebsfremder Vorgang."
          ]}
        ]
      },
      {
        id: "ex4",
        prompt: "Die Metallbau Nord GmbH hat folgende Vorgänge: a) Kauf und sofortige Barzahlung einer Presse für 32.000 €, b) Kauf von Rohstoffen auf Ziel für 20.000 €, von denen im selben Monat für 12.000 € verbraucht und der Rest eingelagert wird, c) Verkauf eines Wertpapiers zum Buchwert von 8.000 € gegen sofortige Gutschrift, d) Rückzahlung eines Mitarbeiterdarlehens von 3.000 € zuzüglich 150 € Zinsen in bar, e) Personalkosten von 25.000 €, von denen 20.000 € sofort ausgezahlt werden und 5.000 € erst im Folgemonat fällig sind. Bestimmen Sie jeweils Einzahlung/Auszahlung sowie Einnahme/Ausgabe.",
        solution: [
          { type: "list", items: [
            "Kauf und Barzahlung der Presse (32.000 €): Auszahlung und Ausgabe in Höhe von 32.000 € (sofortiger Abfluss von Zahlungsmitteln, Geldvermögen sinkt in gleicher Höhe wie ein Sachwert zugeht - im Ergebnis reiner Aktivtausch beim Geldvermögen, da eine Anlage im Gegenwert entsteht; entscheidend für die Einordnung als Ausgabe ist der Abfluss liquider Mittel).",
            "Rohstoffkauf auf Ziel (20.000 €): Ausgabe in Höhe von 20.000 € bereits beim Kauf (Verbindlichkeit entsteht), aber keine Auszahlung, da noch nicht bezahlt wurde. Verbrauch von 12.000 € ist zusätzlich Kosten der Periode, die restlichen 8.000 € bleiben als Lagerbestand zunächst ohne Kostenwirkung.",
            "Verkauf des Wertpapiers zum Buchwert (8.000 €): Einzahlung und Einnahme in Höhe von 8.000 € (Zahlungsmittel und Geldvermögen steigen um den Verkaufserlös); da zum Buchwert verkauft wird, entsteht kein zusätzlicher Ertrag.",
            "Rückzahlung des Mitarbeiterdarlehens (3.000 € plus 150 € Zinsen): Einzahlung in Höhe von 3.150 € insgesamt. Die Darlehensrückzahlung (3.000 €) ist reine Einzahlung ohne Einnahme (Forderung wird beglichen, das Geldvermögen ändert sich per saldo nicht), die Zinsen (150 €) sind zusätzlich Einnahme und Ertrag.",
            "Personalkosten 25.000 € (20.000 € sofort ausgezahlt, 5.000 € im Folgemonat fällig): Ausgabe insgesamt 25.000 € bereits in diesem Monat, davon Auszahlung nur in Höhe von 20.000 €; die restlichen 5.000 € stellen eine Verbindlichkeit dar und werden erst im Folgemonat zur Auszahlung."
          ]}
        ]
      },
      {
        id: "ex5",
        prompt: "Diskutieren Sie anhand der Kriterien der Kostendefinition (Verzehr, Sachzielbezogenheit, Bewertung), warum kalkulatorische Zinsen auf Eigenkapital zwar Kosten, aber nie Aufwand sind, und wieso eine Spende zwar Aufwand, aber keine Kosten darstellt.",
        solution: [
          { type: "p", text: "Kalkulatorische Zinsen auf das eingesetzte Eigenkapital erfüllen alle drei Kriterien der Kostendefinition: Es liegt ein (kalkulatorischer) Verzehr in Form von entgangenem Nutzen vor, weil das Eigenkapital nicht anderweitig verzinslich angelegt wurde (Opportunitätskostengedanke); dieser Verzehr ist betriebszweckbezogen, da das Kapital dem Betrieb zur Verfügung gestellt wird; und er lässt sich in Geldeinheiten bewerten (z. B. anhand eines kalkulatorischen Zinssatzes). Da das Handelsrecht jedoch keine Verzinsung des Eigenkapitals als Aufwand anerkennt (Eigenkapitalkosten sind keine GuV-Position), entsteht hierfür niemals ein handelsrechtlicher Aufwand - es handelt sich um reine Zusatzkosten." },
          { type: "p", text: "Eine Spende erfüllt dagegen zwar das Kriterium des Verzehrs (Geld fließt ab und mindert das Vermögen) und ist auch bewertbar (der gespendete Betrag steht in Geldeinheiten fest), scheitert aber am Kriterium der Sachzielbezogenheit: Die Spende dient nicht der Erstellung der betrieblichen Leistung, sondern verfolgt einen außerbetrieblichen, gesellschaftlichen Zweck. Da mindestens eines der drei Kriterien der Kostendefinition fehlt, ist die Spende zwar handelsrechtlich Aufwand (sie mindert das Reinvermögen laut GuV), aber keine Kosten im Sinne der Kosten- und Leistungsrechnung (neutraler Aufwand)." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche vier Begriffspaare bauen im Rechnungswesen aufeinander auf?", options: ["Preis/Menge, Angebot/Nachfrage, Kosten/Nutzen, Soll/Ist", "Umsatz/Gewinn, Kredit/Debit, Bilanz/GuV, Kosten/Erlöse", "Einzahlung/Auszahlung, Einnahme/Ausgabe, Ertrag/Aufwand, Leistung/Kosten", "Gewinn/Verlust, Soll/Haben, Aktiva/Passiva, Ertrag/Kosten"], correctIndex: 2, explanation: "Die vier aufeinander aufbauenden Begriffspaare sind Einzahlung/Auszahlung (Zahlungsmittelbestand), Einnahme/Ausgabe (Geldvermögen), Ertrag/Aufwand (Reinvermögen laut Bilanz) und Leistung/Kosten (betriebsnotwendiges Vermögen)." },
      { id: "q2", question: "Welche Fondsgröße verändert sich durch Einnahmen und Ausgaben?", options: ["Das betriebsnotwendige Vermögen", "Der Zahlungsmittelbestand", "Das Geldvermögen (Zahlungsmittel plus Forderungen minus Verbindlichkeiten)", "Das Reinvermögen laut Bilanz"], correctIndex: 2, explanation: "Einnahmen und Ausgaben verändern das Geldvermögen, das sich aus Zahlungsmitteln zuzüglich Forderungen abzüglich Verbindlichkeiten zusammensetzt." },
      { id: "q3", question: "Ein Unternehmen kauft Waren auf Ziel im Wert von 10.000 €. Was liegt vor?", options: ["Eine Auszahlung, aber keine Ausgabe", "Eine Ausgabe, aber keine Auszahlung, da noch kein Geld geflossen ist", "Weder Ausgabe noch Auszahlung", "Sowohl Ausgabe als auch Auszahlung in gleicher Höhe"], correctIndex: 1, explanation: "Der Kauf auf Ziel erhöht die Verbindlichkeiten und mindert damit das Geldvermögen - das ist eine Ausgabe. Da noch keine Zahlungsmittel abgeflossen sind, liegt keine Auszahlung vor." },
      { id: "q4", question: "Was ergibt sich aus Ertrag minus Aufwand nach HGB?", options: ["Die Kostenüberdeckung", "Der Jahresüberschuss bzw. Jahresfehlbetrag", "Das betriebsnotwendige Vermögen", "Der Cashflow der Periode"], correctIndex: 1, explanation: "Ertrag minus Aufwand ergibt laut handelsrechtlicher GuV den Jahresüberschuss (positiv) bzw. Jahresfehlbetrag (negativ)." },
      { id: "q5", question: "Welche drei Kriterien kennzeichnen Kosten nach Mumm (2007)?", options: ["Planung, Kontrolle, Dokumentation", "Liquidität, Rentabilität, Wirtschaftlichkeit", "Aktivierung, Passivierung, Abschreibung", "Verzehr, Sachzielbezogenheit und Bewertung des Verbrauchs"], correctIndex: 3, explanation: "Nach Mumm (2007) müssen für Kosten ein Verzehr vorliegen, dieser betriebszweckbezogen (sachzielbezogen) sein und bewertet werden können." },
      { id: "q6", question: "Warum sind kalkulatorische Zinsen auf das Eigenkapital immer Kosten, aber nie Aufwand?", options: ["Weil sie nur bei Verlust anfallen", "Weil sie ausschließlich in der Bilanz erscheinen", "Weil sie handelsrechtlich verboten sind", "Weil ihnen kein handelsrechtlicher Aufwand gegenübersteht, sie aber betriebszweckbezogen und bewertbar sind (Zusatzkosten)"], correctIndex: 3, explanation: "Das Handelsrecht kennt keinen Aufwand für die Verzinsung des Eigenkapitals, weshalb kalkulatorische Zinsen reine Zusatzkosten sind - Kosten ohne zugehörigen Aufwand." },
      { id: "q7", question: "Warum ist eine Spende Aufwand, aber keine Kosten?", options: ["Weil kein Verzehr vorliegt", "Weil sie nur bei Kapitalgesellschaften vorkommt", "Weil sie nicht bewertbar ist", "Weil ihr die Sachzielbezogenheit (Betriebszweckbezug) fehlt"], correctIndex: 3, explanation: "Eine Spende ist zwar handelsrechtlicher Aufwand, aber nicht betriebszweckbezogen und erfüllt damit nicht das Kriterium der Sachzielbezogenheit - sie zählt daher als neutraler Aufwand, nicht als Kosten." },
      { id: "q8", question: "Ein Unternehmen entnimmt Material aus dem eigenen Lager für die Produktion. Was trifft zu?", options: ["Es liegen Kosten vor, aber keine Ausgabe oder Auszahlung, da diese bereits beim Einkauf stattfanden", "Es liegt eine Auszahlung, aber kein Werteverzehr vor", "Es liegt eine Ausgabe und Auszahlung vor, aber keine Kosten", "Es liegt weder Kosten noch Ausgabe vor"], correctIndex: 0, explanation: "Der Materialverbrauch ist Werteverzehr und damit Kosten der laufenden Periode; die zugehörige Ausgabe/Auszahlung erfolgte bereits beim ursprünglichen Einkauf des Materials." },
      { id: "q9", question: "Was unterscheidet neutralen Aufwand von Zweckaufwand?", options: ["Neutraler Aufwand ist Aufwand ohne zugehörige Kosten (nicht betriebszweckbezogen), Zweckaufwand ist zugleich Kosten (Grundkosten)", "Neutraler Aufwand ist stets höher als Zweckaufwand", "Zweckaufwand kommt nur bei Personalkosten vor", "Es gibt keinen inhaltlichen Unterschied"], correctIndex: 0, explanation: "Neutraler Aufwand (z. B. Spenden) ist nicht betriebszweckbezogen und daher keine Kosten. Zweckaufwand ist deckungsgleich mit Kosten und wird auch als Grundkosten bezeichnet." },
      { id: "q10", question: "Wie unterscheiden sich Anderskosten und Zusatzkosten innerhalb der kalkulatorischen Kosten?", options: ["Anderskosten weichen in der Höhe vom zugehörigen Aufwand ab (z. B. kalkulatorische Abschreibung), Zusatzkosten haben gar kein Aufwands-Gegenstück (z. B. kalkulatorische Zinsen auf Eigenkapital)", "Beide Begriffe sind synonym", "Anderskosten haben kein Aufwands-Gegenstück, Zusatzkosten schon", "Anderskosten entstehen nur bei Dienstleistungsunternehmen"], correctIndex: 0, explanation: "Anderskosten stehen einem Aufwand gegenüber, weichen aber in der Höhe davon ab (z. B. kalkulatorische vs. bilanzielle Abschreibung); Zusatzkosten wie kalkulatorische Zinsen auf Eigenkapital haben überhaupt kein Aufwands-Gegenstück." }
    ]
  }
];
