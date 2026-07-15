const KLR_CHAPTER4_TOPICS = [
  {
    id: "zuschlags-aequivalenzziffernkalkulation",
    chapter: 4,
    order: 1,
    title: "Zuschlagskalkulation und Äquivalenzziffernkalkulation",
    icon: "🧮",
    summary: "Wie die Selbstkosten je Erzeugniseinheit über Zuschlagssätze und über Äquivalenzziffern ermittelt werden - und wie Umsatzkosten- und Gesamtkostenverfahren das Betriebsergebnis berechnen.",
    explanation: [
      { type: "p", text: "Die Kostenträgerstückrechnung (Kalkulation) ermittelt die Selbstkosten je Erzeugniseinheit. Sie baut auf der Kostenartenrechnung (welche Kosten sind angefallen?) und der Kostenstellenrechnung/dem Betriebsabrechnungsbogen - BAB (wo sind sie angefallen?) auf und beantwortet die Frage, wofür die Kosten angefallen sind." },
      { type: "list", items: [
        "Herstellkosten = Materialeinzelkosten + Materialgemeinkosten + Fertigungslöhne + Fertigungsgemeinkosten (+ ggf. Sondereinzelkosten der Fertigung).",
        "Selbstkosten = Herstellkosten + Verwaltungsgemeinkosten + Vertriebsgemeinkosten (+ ggf. Sondereinzelkosten des Vertriebs, z. B. Ausgangsfrachten oder Verpackung für einen bestimmten Auftrag)."
      ]},
      { type: "p", text: "Bei der Zuschlagskalkulation werden Einzelkosten (Materialeinzelkosten, Fertigungslöhne), die sich einem Kostenträger direkt und verursachungsgerecht zurechnen lassen, unverändert übernommen. Die Gemeinkosten dagegen lassen sich nicht direkt zuordnen und werden über prozentuale Zuschlagssätze aufgeschlagen, die zuvor im BAB ermittelt wurden (z. B. Materialgemeinkostenzuschlag auf die Materialeinzelkosten, Fertigungsgemeinkostenzuschlag auf die Fertigungslöhne, Verwaltungs- und Vertriebsgemeinkostenzuschlag auf die Herstellkosten)." },
      { type: "p", text: "Die Äquivalenzziffernkalkulation ist ein Sonderfall für die Sortenfertigung: mehrere sehr ähnliche Produktvarianten (Sorten), die sich nur in Größe, Ausstattung oder Fertigungsaufwand unterscheiden, sich aber denselben Fertigungsprozess teilen. Eine Sorte wird als Standard- bzw. Basissorte festgelegt und erhält die Äquivalenzziffer 1. Alle anderen Sorten erhalten eine Äquivalenzziffer proportional zu ihrem tatsächlichen Kostenverursachungsverhältnis - verursacht eine Variante beispielsweise 20% mehr Kosten als die Basissorte, erhält sie die Äquivalenzziffer 1,2." },
      { type: "list", items: [
        "Schritt 1 - Recheneinheiten (RE) je Sorte = Menge der Sorte × Äquivalenzziffer dieser Sorte.",
        "Schritt 2 - Kosten je Recheneinheit = Gesamtkosten aller Sorten / Summe aller Recheneinheiten.",
        "Schritt 3 - Stückkosten je Sorte = Kosten je Recheneinheit × Äquivalenzziffer dieser Sorte.",
        "Schritt 4 - Gesamtkosten je Sorte = Menge der Sorte × Stückkosten je Sorte (Kontrolle: die Summe der Gesamtkosten aller Sorten muss wieder die ursprünglichen Gesamtkosten ergeben)."
      ]},
      { type: "p", text: "Die Kostenträgerzeitrechnung (kurzfristige Erfolgsrechnung, hier auf Vollkostenbasis) ermittelt das Betriebsergebnis einer Periode auf zwei Wegen. Das Umsatzkostenverfahren (UKV) stellt den Umsatzerlösen direkt die Selbstkosten der abgesetzten (verkauften) Menge gegenüber: Betriebsergebnis = Umsatzerlöse − Herstellkosten der abgesetzten Menge − Verwaltungs-/Vertriebskosten der abgesetzten Menge. Das Gesamtkostenverfahren (GKV) stellt den Umsatzerlösen dagegen die Gesamtkosten der Periode (bezogen auf die produzierte Menge) gegenüber und gleicht Produktions-/Absatzmengenunterschiede über eine Bestandsveränderung an fertigen und unfertigen Erzeugnissen aus: Betriebsergebnis = Umsatzerlöse − Gesamtkosten der Periode ± Bestandsveränderungen." },
      { type: "p", text: "Beide Verfahren müssen bei korrekter Rechnung zum selben Betriebsergebnis führen, da sie lediglich zwei unterschiedliche Rechenwege zur Erfassung derselben wirtschaftlichen Realität sind: Das UKV rechnet direkt mit der Absatzmenge, das GKV rechnet mit der Produktionsmenge und korrigiert die Differenz zur Absatzmenge explizit über die Bestandsveränderung." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Betrieb fertigt Blumenkübel in drei Größen im selben Produktionsprozess. Größe S (Standard) hat die Äquivalenzziffer 1,0 (Menge: 2.000 Stück), Größe M die Äquivalenzziffer 1,2 (Menge: 1.500 Stück) und Größe L die Äquivalenzziffer 1,5 (Menge: 1.000 Stück). Die Gesamtkosten der Periode betragen 42.400 €. Ermitteln Sie die Recheneinheiten, die Kosten je Recheneinheit, die Stückkosten je Sorte sowie die Gesamtkosten je Sorte (mit Kontrollsumme).",
        solution: [
          { type: "list", items: [
            "Recheneinheiten: S = 2.000 × 1,0 = 2.000 RE; M = 1.500 × 1,2 = 1.800 RE; L = 1.000 × 1,5 = 1.500 RE",
            "Summe der Recheneinheiten = 2.000 + 1.800 + 1.500 = 5.300 RE",
            "Kosten je Recheneinheit = 42.400 € / 5.300 RE = 8,00 €/RE",
            "Stückkosten je Sorte: S = 8,00 € × 1,0 = 8,00 €/Stück; M = 8,00 € × 1,2 = 9,60 €/Stück; L = 8,00 € × 1,5 = 12,00 €/Stück",
            "Gesamtkosten je Sorte: S = 2.000 × 8,00 € = 16.000 €; M = 1.500 × 9,60 € = 14.400 €; L = 1.000 × 12,00 € = 12.000 €",
            "Kontrollsumme: 16.000 € + 14.400 € + 12.000 € = 42.400 € - stimmt mit den ursprünglichen Gesamtkosten überein"
          ]}
        ]
      },
      {
        id: "ex2",
        prompt: "Ein Schraubenhersteller fertigt drei Schraubengrößen im gleichen Prozess. Größe A (Standard) hat die Äquivalenzziffer 1,0 (Menge: 10.000 Stück), Größe B die Äquivalenzziffer 1,4 (Menge: 6.000 Stück) und Größe C die Äquivalenzziffer 2,0 (Menge: 4.000 Stück). Die Gesamtkosten der Periode betragen 66.000 €. Ermitteln Sie Recheneinheiten, Kosten je Recheneinheit, Stückkosten je Sorte und Gesamtkosten je Sorte (mit Kontrollsumme).",
        solution: [
          { type: "list", items: [
            "Recheneinheiten: A = 10.000 × 1,0 = 10.000 RE; B = 6.000 × 1,4 = 8.400 RE; C = 4.000 × 2,0 = 8.000 RE",
            "Summe der Recheneinheiten = 10.000 + 8.400 + 8.000 = 26.400 RE",
            "Kosten je Recheneinheit = 66.000 € / 26.400 RE = 2,50 €/RE",
            "Stückkosten je Sorte: A = 2,50 € × 1,0 = 2,50 €/Stück; B = 2,50 € × 1,4 = 3,50 €/Stück; C = 2,50 € × 2,0 = 5,00 €/Stück",
            "Gesamtkosten je Sorte: A = 10.000 × 2,50 € = 25.000 €; B = 6.000 × 3,50 € = 21.000 €; C = 4.000 × 5,00 € = 20.000 €",
            "Kontrollsumme: 25.000 € + 21.000 € + 20.000 € = 66.000 € - stimmt mit den ursprünglichen Gesamtkosten überein"
          ]}
        ]
      },
      {
        id: "ex3",
        prompt: "Ein Betrieb stellt die Produkte X und Y her. Je Stück fallen an: X - Materialeinzelkosten 40 €, Fertigungslöhne 20 €; Y - Materialeinzelkosten 60 €, Fertigungslöhne 30 €. Aus dem BAB ergeben sich folgende Zuschlagssätze: Materialgemeinkosten 25% auf Materialeinzelkosten, Fertigungsgemeinkosten 150% auf Fertigungslöhne, Verwaltungsgemeinkosten 10% auf Herstellkosten, Vertriebsgemeinkosten 15% auf Herstellkosten. Ermitteln Sie Herstellkosten und Selbstkosten je Stück für beide Produkte.",
        solution: [
          { type: "list", items: [
            "Produkt X: Materialeinzelkosten 40,00 € + Materialgemeinkosten (25% von 40,00 €) 10,00 € + Fertigungslöhne 20,00 € + Fertigungsgemeinkosten (150% von 20,00 €) 30,00 € = Herstellkosten 100,00 €/Stück",
            "Produkt X: Herstellkosten 100,00 € + Verwaltungsgemeinkosten (10% von 100,00 €) 10,00 € + Vertriebsgemeinkosten (15% von 100,00 €) 15,00 € = Selbstkosten 125,00 €/Stück",
            "Produkt Y: Materialeinzelkosten 60,00 € + Materialgemeinkosten (25% von 60,00 €) 15,00 € + Fertigungslöhne 30,00 € + Fertigungsgemeinkosten (150% von 30,00 €) 45,00 € = Herstellkosten 150,00 €/Stück",
            "Produkt Y: Herstellkosten 150,00 € + Verwaltungsgemeinkosten (10% von 150,00 €) 15,00 € + Vertriebsgemeinkosten (15% von 150,00 €) 22,50 € = Selbstkosten 187,50 €/Stück"
          ]}
        ]
      },
      {
        id: "ex4",
        prompt: "Von Produkt X (Herstellkosten 100,00 €/Stück, Selbstkosten 125,00 €/Stück, siehe vorherige Aufgabe) wurden 1.000 Stück gefertigt, aber nur 900 Stück zu je 160,00 € abgesetzt. Von Produkt Y (Herstellkosten 150,00 €/Stück, Selbstkosten 187,50 €/Stück) wurden 500 Stück gefertigt und alle 500 Stück zu je 230,00 € abgesetzt. Stellen Sie das Betriebsergebnis nach dem Umsatzkostenverfahren in Kontoform auf.",
        solution: [
          { type: "p", text: "Achtung: Bei Produkt X weicht die Fertigungsmenge (1.000 Stück) von der Absatzmenge (900 Stück) ab - es liegt eine Bestandserhöhung von 100 Stück an fertigen Erzeugnissen vor. Das Umsatzkostenverfahren rechnet aber ausschließlich mit der abgesetzten Menge, sodass diese Bestandsveränderung hier nicht gesondert verrechnet werden muss (anders als beim Gesamtkostenverfahren)." },
          { type: "list", items: [
            "Soll (Aufwendungen): Herstellkosten der abgesetzten Menge X = 900 Stück × 100,00 € = 90.000 €",
            "Soll (Aufwendungen): Herstellkosten der abgesetzten Menge Y = 500 Stück × 150,00 € = 75.000 €",
            "Soll (Aufwendungen): Verwaltungs-/Vertriebskosten der abgesetzten Menge X = 900 Stück × 25,00 € (10,00 € + 15,00 €) = 22.500 €",
            "Soll (Aufwendungen): Verwaltungs-/Vertriebskosten der abgesetzten Menge Y = 500 Stück × 37,50 € (15,00 € + 22,50 €) = 18.750 €",
            "Summe Soll (Aufwendungen) = 90.000 € + 75.000 € + 22.500 € + 18.750 € = 206.250 €",
            "Haben (Erträge): Umsatzerlöse X = 900 Stück × 160,00 € = 144.000 €",
            "Haben (Erträge): Umsatzerlöse Y = 500 Stück × 230,00 € = 115.000 €",
            "Summe Haben (Erträge) = 144.000 € + 115.000 € = 259.000 €",
            "Betriebsergebnis (Saldo) = 259.000 € − 206.250 € = 52.750 € Gewinn"
          ]}
        ]
      },
      {
        id: "ex5",
        prompt: "Erläutern Sie den Unterschied zwischen Umsatzkosten- und Gesamtkostenverfahren und begründen Sie, warum beide Verfahren bei korrekter Rechnung zum selben Betriebsergebnis führen müssen, obwohl der Rechenweg unterschiedlich ist.",
        solution: [
          { type: "p", text: "Das Umsatzkostenverfahren stellt den Umsatzerlösen direkt die Selbstkosten der abgesetzten (verkauften) Menge gegenüber - produzierte, aber noch nicht verkaufte Mengen (Bestandserhöhungen) tauchen dort gar nicht erst auf, da nur mit der Absatzmenge gerechnet wird. Das Gesamtkostenverfahren stellt den Umsatzerlösen dagegen die Gesamtkosten der in der Periode produzierten Menge gegenüber und muss deshalb die Differenz zwischen Produktions- und Absatzmenge explizit über eine Bestandsveränderung (Bestandserhöhung wird addiert, Bestandsminderung wird subtrahiert, jeweils zu Herstellkosten bewertet) korrigieren." },
          { type: "p", text: "Beide Verfahren beschreiben dieselbe wirtschaftliche Realität einer Periode nur aus zwei verschiedenen Blickwinkeln (einmal absatzorientiert, einmal produktionsorientiert) und müssen daher bei korrekter Rechnung zwangsläufig zum identischen Betriebsergebnis führen - der einzige Unterschied liegt darin, an welcher Stelle der Rechnung Produktions- und Absatzmengenunterschiede berücksichtigt werden: beim UKV implizit durch die Beschränkung auf die Absatzmenge, beim GKV explizit durch die gesonderte Bestandsveränderungsrechnung." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie berechnen sich die Herstellkosten eines Erzeugnisses?", options: ["Materialeinzelkosten + Materialgemeinkosten + Fertigungslöhne + Fertigungsgemeinkosten (+ ggf. Sondereinzelkosten der Fertigung)", "Selbstkosten − Verwaltungsgemeinkosten", "Umsatzerlöse − Gewinn", "Materialeinzelkosten + Fertigungslöhne"], correctIndex: 0, explanation: "Die Herstellkosten fassen alle Kosten zusammen, die bei der Fertigung anfallen: die direkt zurechenbaren Einzelkosten (Materialeinzelkosten, Fertigungslöhne) sowie die zugehörigen Gemeinkosten, plus ggf. Sondereinzelkosten der Fertigung. Die anderen Antworten verwechseln Herstellkosten entweder mit den umfassenderen Selbstkosten, die zusätzlich Verwaltungs- und Vertriebsgemeinkosten enthalten, oder lassen die Gemeinkosten unzulässig weg, obwohl diese laut Definition Teil der Herstellkosten sind." },
      { id: "q2", question: "Wie berechnen sich die Selbstkosten eines Erzeugnisses?", options: ["Herstellkosten + Verwaltungsgemeinkosten + Vertriebsgemeinkosten", "Materialeinzelkosten + Fertigungslöhne ohne jegliche Gemeinkostenzuschläge", "Umsatzerlöse abzüglich der gesamten Herstellkosten der Periode", "Herstellkosten abzüglich der Fertigungsgemeinkosten des Produkts"], correctIndex: 0, explanation: "Die Selbstkosten bauen auf den Herstellkosten auf und ergänzen diese um die Verwaltungs- und Vertriebsgemeinkosten (sowie ggf. Sondereinzelkosten des Vertriebs), da neben der reinen Fertigung auch Verwaltung und Vertrieb Kosten verursachen, die dem Erzeugnis zuzurechnen sind. Wer nur Materialeinzelkosten und Fertigungslöhne addiert, berücksichtigt weder Gemeinkosten noch Verwaltung/Vertrieb und bleibt weit unter den tatsächlichen Selbstkosten." },
      { id: "q3", question: "Welche Kostenart wird bei der Zuschlagskalkulation dem Kostenträger direkt zugerechnet, ohne über einen Zuschlagssatz verteilt zu werden?", options: ["Verwaltungsgemeinkosten, die über den BAB verteilt werden", "Vertriebsgemeinkosten, die über einen Zuschlagssatz erfasst werden", "Sämtliche Gemeinkosten unabhängig von ihrer Verursachung", "Einzelkosten wie Materialeinzelkosten und Fertigungslöhne"], correctIndex: 3, explanation: "Einzelkosten wie Materialeinzelkosten und Fertigungslöhne lassen sich einem Kostenträger unmittelbar und verursachungsgerecht zuordnen, weshalb sie unverändert - also ohne Verteilung über einen Zuschlagssatz - übernommen werden. Gemeinkosten wie Verwaltungs- oder Vertriebsgemeinkosten lassen sich dagegen nicht direkt zuordnen und müssen deshalb über die im BAB ermittelten Zuschlagssätze verrechnet werden." },
      { id: "q4", question: "Woher stammen die Zuschlagssätze, mit denen Gemeinkosten in der Zuschlagskalkulation auf den Kostenträger verrechnet werden?", options: ["Sie werden willkürlich vom Vertrieb festgelegt", "Sie werden im Betriebsabrechnungsbogen (BAB) in der Kostenstellenrechnung ermittelt", "Sie ergeben sich direkt aus dem Verkaufspreis", "Sie sind gesetzlich fest vorgeschrieben"], correctIndex: 1, explanation: "Die Zuschlagssätze stammen aus der Kostenstellenrechnung, die im BAB die Gemeinkosten auf die Kostenstellen verteilt und daraus die jeweiligen Zuschlagssätze ableitet. Sie sind also weder willkürlich festgelegt noch direkt aus dem Verkaufspreis abgeleitet, sondern das Ergebnis einer vorgelagerten, rechnerisch fundierten Kostenstellenrechnung." },
      { id: "q5", question: "In welcher Fertigungssituation wird die Äquivalenzziffernkalkulation angewendet?", options: ["Bei völlig unterschiedlichen Einzelprodukten ohne jeglichen gemeinsamen Fertigungsprozess", "Nur wenn im Betrieb überhaupt keine Gemeinkosten anfallen", "Bei der Sortenfertigung ähnlicher Produktvarianten im selben Fertigungsprozess", "Nur bei reinen Dienstleistungsbetrieben ohne Produktion"], correctIndex: 2, explanation: "Die Äquivalenzziffernkalkulation eignet sich für die Sortenfertigung, bei der mehrere ähnliche Produktvarianten denselben Fertigungsprozess durchlaufen und sich nur in Größe, Ausstattung oder Fertigungsaufwand unterscheiden. Bei völlig unterschiedlichen Einzelprodukten ohne gemeinsamen Prozess fehlt die Vergleichsbasis für Äquivalenzziffern, weshalb dort stattdessen die Zuschlagskalkulation zum Einsatz kommt." },
      { id: "q6", question: "Welche Äquivalenzziffer erhält die Standard- bzw. Basissorte?", options: ["100", "1", "0", "Die Äquivalenzziffer der teuersten Sorte"], correctIndex: 1, explanation: "Die Standard- bzw. Basissorte dient als Bezugsgröße für alle anderen Sorten und erhält deshalb per Definition die Äquivalenzziffer 1. Alle anderen Sorten erhalten davon ausgehend eine Äquivalenzziffer proportional zu ihrem tatsächlichen Kostenverursachungsverhältnis, etwa 1,2 bei 20% höheren Kosten als die Basissorte - die teuerste Sorte hat also nicht automatisch die höchste, sondern die ihrem Mehraufwand entsprechende Ziffer." },
      { id: "q7", question: "Ein Betrieb hat zwei Sorten: Sorte 1 mit Äquivalenzziffer 1,0 und Menge 100 Stück, Sorte 2 mit Äquivalenzziffer 2,0 und Menge 50 Stück. Die Gesamtkosten betragen 700 €. Wie hoch sind die Stückkosten von Sorte 2?", options: ["14,00 €/Stück", "7,00 €/Stück", "3,50 €/Stück", "700,00 €/Stück"], correctIndex: 1, explanation: "Die Recheneinheiten ergeben sich aus Menge × Äquivalenzziffer je Sorte, hier also 100×1,0 + 50×2,0 = 200 RE. Die Kosten je Recheneinheit (700 €/200 RE = 3,50 €/RE) werden anschließend mit der Äquivalenzziffer der Sorte 2 multipliziert: 3,50 € × 2,0 = 7,00 €/Stück. Wer die Gesamtkosten stattdessen direkt durch die Stückzahl teilt oder die Äquivalenzziffer falsch anwendet, ignoriert die unterschiedliche Kostenverursachung der Sorten." },
      { id: "q8", question: "Ein Produkt hat Materialeinzelkosten von 50 € und einen Materialgemeinkostenzuschlagssatz von 20%. Wie hoch sind die Materialgemeinkosten?", options: ["5,00 €", "50,00 €", "10,00 €", "20,00 €"], correctIndex: 2, explanation: "Die Materialgemeinkosten ergeben sich, indem der Zuschlagssatz auf die Materialeinzelkosten angewendet wird: 20% von 50 € = 10,00 €. Die anderen Werte entstehen, wenn man den Zuschlagssatz mit den Materialeinzelkosten verwechselt, etwa die 50 € unverändert übernimmt oder den Prozentsatz selbst als Eurobetrag angibt." },
      { id: "q9", question: "Wie lautet die Grundformel des Umsatzkostenverfahrens?", options: ["Betriebsergebnis = Umsatzerlöse − Gesamtkosten der Periode ± Bestandsveränderungen", "Betriebsergebnis = Absatzmenge × Fertigungsmenge", "Betriebsergebnis = Herstellkosten − Selbstkosten", "Betriebsergebnis = Umsatzerlöse − Herstellkosten der abgesetzten Menge − Verwaltungs-/Vertriebskosten der abgesetzten Menge"], correctIndex: 3, explanation: "Das Umsatzkostenverfahren stellt den Umsatzerlösen direkt die Herstellkosten sowie die Verwaltungs-/Vertriebskosten der abgesetzten (verkauften) Menge gegenüber, ohne eine gesonderte Bestandsveränderungsrechnung. Die Formel mit Gesamtkosten und Bestandsveränderungen beschreibt dagegen das Gesamtkostenverfahren, das mit der Produktionsmenge rechnet und Mengenunterschiede explizit ausgleichen muss." },
      { id: "q10", question: "Warum führen Umsatzkosten- und Gesamtkostenverfahren bei korrekter Rechnung zum selben Betriebsergebnis?", options: ["Weil beide Verfahren rein zufällig auf ähnliche Zahlen kommen, ohne inhaltlichen Zusammenhang", "Weil beide Verfahren identische Formeln und exakt dieselben Rechenschritte verwenden", "Weil beide denselben Sachverhalt nur aus anderem Blickwinkel abbilden und Mengenunterschiede korrekt erfassen", "Weil das Gesamtkostenverfahren die Bestandsveränderung bei der Berechnung vollständig ignoriert"], correctIndex: 2, explanation: "Beide Verfahren bilden dieselbe wirtschaftliche Realität einer Periode nur aus unterschiedlichem Blickwinkel ab - das UKV rechnet mit der Absatzmenge, das GKV mit der Produktionsmenge und gleicht die Differenz über die Bestandsveränderung aus. Bei korrekter Rechnung berücksichtigen deshalb beide Wege die Mengenunterschiede vollständig, sodass sie zwangsläufig zum selben Betriebsergebnis führen müssen; die Annahme, das GKV ignoriere die Bestandsveränderung, ist falsch, da diese gerade sein zentrales Korrekturelement ist." }
    ]
  },
  {
    id: "maschinenstundensatzrechnung",
    chapter: 4,
    order: 2,
    title: "Maschinenstundensatzrechnung",
    icon: "⚙️",
    summary: "Warum bei zunehmender Automatisierung ein maschinenbezogener Stundensatz statt einer pauschalen Zuschlagskalkulation verwendet wird - und wie er berechnet wird.",
    explanation: [
      { type: "p", text: "Mit zunehmender Automatisierung sinkt der Anteil der Fertigungslöhne an den Fertigungskosten, während maschinenabhängige Gemeinkosten (Abschreibung, kalkulatorische Zinsen, Energie, Wartung) immer bedeutsamer werden. Eine pauschale Verteilung der Fertigungsgemeinkosten über einen einzigen, auf die Fertigungslöhne bezogenen Zuschlagssatz der gesamten Kostenstelle wird diesem Umstand nicht mehr gerecht, weil unterschiedliche Maschinen sehr unterschiedliche Kosten verursachen können. Deshalb wird stattdessen ein spezifischer Maschinenstundensatz je Maschine (oder Maschinengruppe) ermittelt." },
      { type: "list", items: [
        "Kalkulatorische Abschreibung = (Anschaffungskosten − Restwert) / Nutzungsdauer.",
        "Kalkulatorische Zinsen nach der Durchschnittswertmethode = ((Anschaffungskosten + Restwert) / 2) × kalkulatorischer Zinssatz.",
        "Energie-/Stromkosten = Leistungsaufnahme [kW] × Strompreis [€/kWh] × Maschinenlaufstunden pro Jahr.",
        "Instandhaltungs- und Wartungskosten (meist als Jahresbetrag geschätzt oder aus Erfahrungswerten übernommen).",
        "Sonstige raum- und betriebsstoffabhängige Kosten der Maschine (z. B. Kühlmittel, Schmierstoffe)."
      ]},
      { type: "p", text: "Der Maschinenstundensatz ergibt sich, indem die Summe der maschinenabhängigen Jahreskosten durch die tatsächlichen Maschinenlaufstunden pro Jahr geteilt wird: Maschinenstundensatz = Summe der maschinenabhängigen Jahreskosten / Maschinenlaufstunden pro Jahr. Für ein einzelnes Erzeugnis werden die maschinenabhängigen Kosten je Stück anschließend durch Multiplikation des Maschinenstundensatzes mit der Bearbeitungszeit je Stück ermittelt; alle übrigen (nicht maschinenabhängigen) Fertigungsgemeinkosten der Kostenstelle - z. B. Meistergehalt oder Raumkosten - werden weiterhin über einen Restgemeinkostenzuschlag auf die Fertigungslöhne verrechnet." },
      { type: "p", text: "Ein wichtiger Fallstrick betrifft die Bemessungsgrundlage für die kalkulatorische Abschreibung: Sinkt der aktuelle Wiederbeschaffungspreis einer Maschine unter die ursprünglichen (historischen) Anschaffungskosten - etwa wegen technologischem Fortschritt oder staatlicher Förderungen für neuere Maschinen - so sollte im Zweifel dennoch der höhere Wert angesetzt werden, in der Regel also die historischen Anschaffungskosten. Die Kostenrechnung verfolgt hier bewusst einen vorsichtigen (konservativen) Ansatz, um die tatsächliche Kapitalbindung nicht zu unterschätzen und eine ausreichende Substanzerhaltung sicherzustellen." },
      { type: "p", text: "Der Maschinenstundensatz ist besonders sinnvoll, wenn sich Maschinen einer Kostenstelle stark in Anschaffungswert, Nutzungsintensität oder Energiebedarf unterscheiden: Eine pauschale, auf Fertigungslöhne bezogene Zuschlagskalkulation würde arbeitsintensive und maschinenintensive Produkte gleich behandeln, obwohl sie ganz unterschiedliche Maschinenkosten verursachen - das verzerrt die Kalkulation und kann zu Fehlentscheidungen bei Preisgestaltung oder Produktprogramm führen." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Die COSCHLEIF GmbH betreibt den Schleifautomaten SG-100, auf dem Produkt A (Jahresmenge 8.000 Stück, Bearbeitungszeit 3 Minuten/Stück) und Produkt B (Jahresmenge 4.000 Stück, Bearbeitungszeit 6 Minuten/Stück) gefertigt werden. Angaben zur Maschine: Anschaffungskosten 180.000 €, aktueller (niedrigerer) Wiederbeschaffungspreis 150.000 €, Restwert 20.000 €, Nutzungsdauer 8 Jahre, kalkulatorischer Zinssatz 6%, Leistungsaufnahme 15 kW, Strompreis 0,30 €/kWh, Instandhaltungskosten 4.000 €/Jahr, sonstige Betriebsstoffkosten 2.000 €/Jahr. Ermitteln Sie den Maschinenstundensatz und begründen Sie, welche Bemessungsgrundlage für die Abschreibung verwendet werden sollte.",
        solution: [
          { type: "list", items: [
            "Maschinenlaufstunden pro Jahr: Produkt A = 8.000 Stück × 3 Min. = 24.000 Min. = 400 Std.; Produkt B = 4.000 Stück × 6 Min. = 24.000 Min. = 400 Std.; zusammen 800 Std./Jahr",
            "Bemessungsgrundlage für die Abschreibung: Da die Anschaffungskosten (180.000 €) höher sind als der aktuelle Wiederbeschaffungspreis (150.000 €), wird im Zweifel der höhere Wert - also die Anschaffungskosten - angesetzt, um die Kapitalbindung nicht zu unterschätzen",
            "Kalkulatorische Abschreibung = (180.000 € − 20.000 €) / 8 Jahre = 160.000 € / 8 = 20.000 €/Jahr",
            "Kalkulatorische Zinsen (Durchschnittswertmethode) = ((180.000 € + 20.000 €) / 2) × 6% = 100.000 € × 0,06 = 6.000 €/Jahr",
            "Energiekosten = 15 kW × 0,30 €/kWh × 800 Std. = 3.600 €/Jahr",
            "Instandhaltungskosten = 4.000 €/Jahr; sonstige Betriebsstoffkosten = 2.000 €/Jahr",
            "Summe der maschinenabhängigen Jahreskosten = 20.000 € + 6.000 € + 3.600 € + 4.000 € + 2.000 € = 35.600 €/Jahr",
            "Maschinenstundensatz = 35.600 € / 800 Std. = 44,50 €/Std."
          ]}
        ]
      },
      {
        id: "ex2",
        prompt: "Die CNC-Fräsmaschine FZ-200 fertigt Produkt C (Jahresmenge 10.000 Stück, Bearbeitungszeit 3 Minuten/Stück) und Produkt D (Jahresmenge 2.000 Stück, Bearbeitungszeit 15 Minuten/Stück). Angaben: Anschaffungskosten 250.000 €, aktueller (niedrigerer) Wiederbeschaffungspreis 220.000 €, Restwert 10.000 €, Nutzungsdauer 10 Jahre, kalkulatorischer Zinssatz 8%, Leistungsaufnahme 20 kW, Strompreis 0,25 €/kWh, Instandhaltungskosten 6.000 €/Jahr, sonstige Betriebsstoffkosten 3.000 €/Jahr. Ermitteln Sie den Maschinenstundensatz.",
        solution: [
          { type: "list", items: [
            "Maschinenlaufstunden pro Jahr: Produkt C = 10.000 Stück × 3 Min. = 30.000 Min. = 500 Std.; Produkt D = 2.000 Stück × 15 Min. = 30.000 Min. = 500 Std.; zusammen 1.000 Std./Jahr",
            "Bemessungsgrundlage für die Abschreibung: Anschaffungskosten (250.000 €) sind höher als der Wiederbeschaffungspreis (220.000 €), daher werden im Zweifel die Anschaffungskosten angesetzt",
            "Kalkulatorische Abschreibung = (250.000 € − 10.000 €) / 10 Jahre = 240.000 € / 10 = 24.000 €/Jahr",
            "Kalkulatorische Zinsen (Durchschnittswertmethode) = ((250.000 € + 10.000 €) / 2) × 8% = 130.000 € × 0,08 = 10.400 €/Jahr",
            "Energiekosten = 20 kW × 0,25 €/kWh × 1.000 Std. = 5.000 €/Jahr",
            "Instandhaltungskosten = 6.000 €/Jahr; sonstige Betriebsstoffkosten = 3.000 €/Jahr",
            "Summe der maschinenabhängigen Jahreskosten = 24.000 € + 10.400 € + 5.000 € + 6.000 € + 3.000 € = 48.400 €/Jahr",
            "Maschinenstundensatz = 48.400 € / 1.000 Std. = 48,40 €/Std."
          ]}
        ]
      },
      {
        id: "ex3",
        prompt: "Berechnen Sie mithilfe der Maschinenstundensätze aus den beiden vorherigen Aufgaben (SG-100: 44,50 €/Std.; FZ-200: 48,40 €/Std.) die maschinenabhängigen Kosten je Stück für die Produkte A, B, C und D.",
        solution: [
          { type: "list", items: [
            "Produkt A (SG-100, 3 Min./Stück = 0,05 Std./Stück): 44,50 €/Std. × 0,05 Std. = 2,225 €/Stück ≈ 2,23 €/Stück",
            "Produkt B (SG-100, 6 Min./Stück = 0,10 Std./Stück): 44,50 €/Std. × 0,10 Std. = 4,45 €/Stück",
            "Produkt C (FZ-200, 3 Min./Stück = 0,05 Std./Stück): 48,40 €/Std. × 0,05 Std. = 2,42 €/Stück",
            "Produkt D (FZ-200, 15 Min./Stück = 0,25 Std./Stück): 48,40 €/Std. × 0,25 Std. = 12,10 €/Stück"
          ]}
        ]
      },
      {
        id: "ex4",
        prompt: "Erläutern Sie, warum bei der Wahl der Bemessungsgrundlage für die kalkulatorische Abschreibung im Zweifel der höhere Wert (in der Regel die historischen Anschaffungskosten) angesetzt werden sollte, statt unreflektiert einen niedrigeren aktuellen Wiederbeschaffungspreis zu verwenden.",
        solution: [
          { type: "p", text: "Die kalkulatorische Abschreibung soll sicherstellen, dass über die Nutzungsdauer der Maschine genügend Mittel zurückgestellt bzw. verrechnet werden, um die tatsächlich gebundene Kapitalsumme zu decken (Substanzerhaltung). Würde man bei gesunkenen aktuellen Wiederbeschaffungspreisen unreflektiert den niedrigeren Wert ansetzen, würde die Abschreibung zu niedrig ausfallen und die Kapitalbindung der Vergangenheit systematisch unterschätzt - das Unternehmen könnte über die Nutzungsdauer hinweg zu wenig Kosten verrechnen. Aus Vorsichtsgründen (konservatives Prinzip der Kostenrechnung) wird deshalb im Zweifel der höhere Wert - meist die historischen Anschaffungskosten - angesetzt, auch wenn ein Ersatz der Maschine aktuell günstiger zu haben wäre." }
        ]
      },
      {
        id: "ex5",
        prompt: "Warum wird bei zunehmender Automatisierung häufig eine Maschinenstundensatzrechnung statt einer pauschalen, kostenstellenbezogenen Zuschlagskalkulation verwendet?",
        solution: [
          { type: "p", text: "Bei zunehmender Automatisierung sinkt der Anteil der Fertigungslöhne an den gesamten Fertigungskosten, während maschinenabhängige Kosten (Abschreibung, Zinsen, Energie, Wartung) einen immer größeren Anteil ausmachen. Eine pauschale Zuschlagskalkulation verteilt die Fertigungsgemeinkosten der gesamten Kostenstelle über einen einzigen, meist auf die Fertigungslöhne bezogenen Zuschlagssatz - das führt zu Verzerrungen, wenn innerhalb einer Kostenstelle unterschiedlich teure und unterschiedlich intensiv genutzte Maschinen eingesetzt werden, deren tatsächliche Kostenverursachung stark voneinander abweicht. Der maschinenbezogene Stundensatz rechnet die maschinenabhängigen Kosten jeder Maschine einzeln und verursachungsgerecht auf die damit bearbeiteten Produkte um, wodurch die Kalkulation deutlich genauer wird und bessere Grundlagen für Preisentscheidungen und Produktprogrammplanung liefert." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie wird die kalkulatorische Abschreibung im Rahmen der Maschinenstundensatzrechnung berechnet?", options: ["(Anschaffungskosten − Restwert) / Nutzungsdauer", "Anschaffungskosten × kalkulatorischer Zinssatz", "(Anschaffungskosten + Restwert) / Nutzungsdauer", "Anschaffungskosten / Nutzungsdauer"], correctIndex: 0, explanation: "Die kalkulatorische Abschreibung verteilt den Werteverzehr einer Maschine - also Anschaffungskosten abzüglich Restwert - gleichmäßig auf die Nutzungsdauer. Würde man den Restwert stattdessen addieren oder ihn ganz weglassen, würde der Werteverzehr über- bzw. unterschätzt und die jährliche Abschreibung verfälscht." },
      { id: "q2", question: "Wie werden die kalkulatorischen Zinsen nach der Durchschnittswertmethode berechnet?", options: ["Restwert allein × kalkulatorischer Zinssatz ohne Anschaffungskosten", "((Anschaffungskosten + Restwert) / 2) × kalkulatorischer Zinssatz", "(Anschaffungskosten − Restwert) × kalkulatorischer Zinssatz auf den Buchwert", "Anschaffungskosten allein × kalkulatorischer Zinssatz ohne Restwert"], correctIndex: 1, explanation: "Die Durchschnittswertmethode verzinst nicht den vollen Anschaffungswert, sondern das durchschnittlich über die Nutzungsdauer gebundene Kapital, also den Mittelwert aus Anschaffungskosten und Restwert. Wer stattdessen nur den Restwert oder nur die vollen Anschaffungskosten verzinst, unterschätzt bzw. überschätzt die tatsächliche Kapitalbindung systematisch." },
      { id: "q3", question: "Wie berechnen sich die maschinenabhängigen Energiekosten?", options: ["Strompreis [€/kWh] / Maschinenlaufstunden", "Leistungsaufnahme [kW] × Strompreis [€/kWh] × Maschinenlaufstunden pro Jahr", "Leistungsaufnahme [kW] / Strompreis [€/kWh]", "Nutzungsdauer × Strompreis"], correctIndex: 1, explanation: "Die Energiekosten ergeben sich aus dem Zusammenspiel von Leistungsaufnahme, Strompreis und tatsächlicher Laufzeit der Maschine, da der Stromverbrauch von allen drei Größen gemeinsam abhängt. Eine Formel, die nur zwei dieser Größen verknüpft, blendet entweder den tatsächlichen Verbrauch oder die Nutzungsdauer aus und liefert kein realistisches Ergebnis." },
      { id: "q4", question: "Wie wird der Maschinenstundensatz ermittelt?", options: ["Anschaffungskosten / Maschinenlaufstunden pro Jahr", "Fertigungslöhne / Maschinenlaufstunden pro Jahr", "Summe der maschinenabhängigen Jahreskosten / Maschinenlaufstunden pro Jahr", "Summe der maschinenabhängigen Jahreskosten × Maschinenlaufstunden pro Jahr"], correctIndex: 2, explanation: "Der Maschinenstundensatz verteilt die Summe aller maschinenabhängigen Jahreskosten (Abschreibung, Zinsen, Energie, Wartung usw.) gleichmäßig auf die tatsächlichen Maschinenlaufstunden pro Jahr. Eine Division nur der Anschaffungskosten oder der Fertigungslöhne durch die Laufstunden erfasst weder alle relevanten Kostenarten noch die richtige Bezugsgröße." },
      { id: "q5", question: "Der aktuelle Wiederbeschaffungspreis einer Maschine liegt unter ihren historischen Anschaffungskosten. Welche Bemessungsgrundlage sollte für die kalkulatorische Abschreibung im Zweifel gewählt werden?", options: ["Immer der niedrigere aktuelle Wiederbeschaffungspreis, weil er zeitnäher und aktueller ist", "Der Mittelwert aus beiden Werten", "Es spielt keine Rolle, welcher Wert verwendet wird", "Der höhere Wert, meist die historischen Anschaffungskosten"], correctIndex: 3, explanation: "Aus Vorsichtsgründen setzt die Kostenrechnung im Zweifel den höheren Wert an, in der Regel also die historischen Anschaffungskosten, damit die tatsächliche Kapitalbindung nicht unterschätzt wird und die Substanzerhaltung gesichert bleibt. Würde man unreflektiert den niedrigeren aktuellen Wiederbeschaffungspreis ansetzen, fiele die Abschreibung zu gering aus und es würden über die Nutzungsdauer zu wenig Mittel verrechnet." },
      { id: "q6", question: "Eine Maschine hat Anschaffungskosten von 100.000 €, einen Restwert von 10.000 € und eine Nutzungsdauer von 5 Jahren. Wie hoch ist die kalkulatorische Abschreibung pro Jahr?", options: ["18.000 €", "22.000 €", "20.000 €", "10.000 €"], correctIndex: 0, explanation: "Nach der Formel (Anschaffungskosten − Restwert) / Nutzungsdauer ergibt sich (100.000 € − 10.000 €) / 5 Jahre = 90.000 € / 5 = 18.000 €/Jahr. Die anderen Werte entstehen typischerweise, wenn der Restwert addiert statt abgezogen oder gar nicht berücksichtigt wird." },
      { id: "q7", question: "Eine Maschine hat Anschaffungskosten von 50.000 €, einen Restwert von 0 € und einen kalkulatorischen Zinssatz von 10%. Wie hoch sind die kalkulatorischen Zinsen pro Jahr nach der Durchschnittswertmethode?", options: ["5.000 €", "500 €", "10.000 €", "2.500 €"], correctIndex: 3, explanation: "Nach der Durchschnittswertmethode wird der Mittelwert aus Anschaffungskosten und Restwert verzinst: ((50.000 € + 0 €) / 2) × 10% = 25.000 € × 0,10 = 2.500 €/Jahr. Wer stattdessen die vollen 50.000 € verzinst, erhält fälschlich 5.000 € und ignoriert, dass durchschnittlich nur die Hälfte des Kapitals über die Nutzungsdauer gebunden ist." },
      { id: "q8", question: "Die maschinenabhängigen Jahreskosten einer Maschine betragen 60.000 €, die Maschinenlaufstunden 1.200 Std./Jahr. Wie hoch ist der Maschinenstundensatz?", options: ["50,00 €/Std.", "60,00 €/Std.", "72,00 €/Std.", "20,00 €/Std."], correctIndex: 0, explanation: "Der Maschinenstundensatz ergibt sich aus den maschinenabhängigen Jahreskosten geteilt durch die Maschinenlaufstunden: 60.000 € / 1.200 Std. = 50,00 €/Std. Die übrigen Werte entstehen durch Rechenfehler bei dieser Division und entsprechen nicht dem korrekten Verhältnis von Kosten zu Laufzeit." },
      { id: "q9", question: "Welche Kostenart gehört NICHT zu den maschinenabhängigen Jahreskosten im Sinne der Maschinenstundensatzrechnung?", options: ["Kalkulatorische Zinsen", "Energie-/Stromkosten", "Fertigungslöhne der an der Maschine tätigen Mitarbeitenden", "Kalkulatorische Abschreibung"], correctIndex: 2, explanation: "Fertigungslöhne sind Personalkosten, die von den anwesenden Mitarbeitenden und nicht von der Maschine selbst verursacht werden, und zählen deshalb nicht zu den maschinenabhängigen Jahreskosten - sie werden getrennt als Einzelkosten erfasst. Abschreibung, Zinsen und Energiekosten hängen dagegen unmittelbar vom Betrieb der Maschine ab und gehören zur Kostenbasis des Maschinenstundensatzes." },
      { id: "q10", question: "Warum wird bei zunehmender Automatisierung eher ein maschinenbezogener Stundensatz als eine pauschale, kostenstellenbezogene Zuschlagskalkulation verwendet?", options: ["Weil der Maschinenstundensatz gesetzlich vorgeschrieben ist", "Weil dadurch keine Gemeinkosten mehr anfallen", "Weil maschinenabhängige Kosten einen wachsenden Anteil ausmachen und sich zwischen einzelnen Maschinen stark unterscheiden können, was eine pauschale Verteilung verzerren würde", "Weil Fertigungslöhne dann komplett entfallen und keine Berechnung mehr nötig ist"], correctIndex: 2, explanation: "Mit zunehmender Automatisierung sinkt der Anteil der Fertigungslöhne, während maschinenabhängige Kosten wie Abschreibung, Zinsen und Energie einen wachsenden und je nach Maschine sehr unterschiedlichen Anteil ausmachen. Eine pauschale, auf Fertigungslöhne bezogene Zuschlagskalkulation würde diese Unterschiede zwischen den Maschinen einer Kostenstelle verwischen und die Kalkulation verzerren, weshalb der maschinenbezogene Stundensatz genauere, verursachungsgerechte Ergebnisse liefert." }
    ]
  }
];
