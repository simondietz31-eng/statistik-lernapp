const PRODUKTIONSWIRTSCHAFT_CHAPTER7_TOPICS = [
  {
    id: "produktionswirtschaft-beschaffung-grundlagen",
    chapter: 7,
    order: 1,
    title: "Grundlagen der Beschaffung",
    icon: "📦",
    summary: "Begriffliche Abgrenzung von Beschaffung und Materialwirtschaft, die Sach- und Formalziele der Beschaffung, ihre Entscheidungsfreiheiten (Instrumente) sowie ihre wirtschaftliche Bedeutung im Unternehmen.",
    explanation: [
      {
        type: "p",
        text: "Beschaffung umfasst alle betrieblichen Tätigkeiten, mit denen die verschiedenen Bedarfsträger eines Unternehmens (v.a. die Produktion, aber auch andere Abteilungen) mit denjenigen Einsatzgütern versorgt werden, die das Unternehmen nicht selbst herstellt, sondern von außen bezieht. Es geht also um die Versorgung mit Gütern und Dienstleistungen, die entweder grundsätzlich nicht im eigenen Haus erzeugt werden können oder aus wirtschaftlichen bzw. strategischen Gründen bewusst extern eingekauft werden (Fremdbezug statt Eigenfertigung). Entscheidend ist dabei nicht nur das reine Beschaffen an sich, sondern die zielgerichtete Versorgung: Die richtigen Güter müssen in der richtigen Menge, der geforderten Qualität, zur passenden Zeit und zu einem angemessenen Preis bereitgestellt werden, damit die nachgelagerten Prozesse (insbesondere die Produktion) reibungslos ablaufen können."
      },
      {
        type: "p",
        text: "Von der Beschaffung ist der umfassendere Begriff der Materialwirtschaft abzugrenzen. Die Materialwirtschaft bündelt sämtliche materialbezogenen Funktionen eines Unternehmens und schließt die Beschaffung als eine ihrer Teilaufgaben mit ein. Zusätzlich zur reinen Beschaffung gehören zur Materialwirtschaft auch die Steuerung des innerbetrieblichen Materialflusses (also z.B. Transport und Bereitstellung der Materialien an den Bedarfsorten) sowie die Lagerwirtschaft (Lagerhaltung, Bestandsführung, Ein- und Auslagerung). Man kann sich das Verhältnis so vorstellen: Beschaffung sorgt dafür, dass Material überhaupt ins Unternehmen gelangt, während die Materialwirtschaft als übergeordnetes Konzept zusätzlich regelt, wie dieses Material danach innerbetrieblich bewegt, gelagert und für die Produktion bereitgestellt wird."
      },
      {
        type: "list",
        items: [
          "Beschaffung: Versorgung der Bedarfsträger mit extern bezogenen Gütern (Fremdbezug statt Eigenfertigung)",
          "Materialwirtschaft: Oberbegriff, der die Beschaffung sowie zusätzlich die Materialflusssteuerung und die Lagerwirtschaft umfasst",
          "Zielgerichtete Bereitstellung bedeutet: passende Art, Menge, Qualität, Preis und Zeitpunkt der Güter für die Produktion"
        ]
      },
      {
        type: "p",
        text: "Die Ziele der Beschaffung lassen sich in zwei Kategorien einteilen: Sachziele und Formalziele. Die Sachziele beschreiben, WAS im Kern erreicht werden soll, nämlich die Versorgungssicherheit der Bedarfsträger: Es sollen die richtigen Güter und Dienstleistungen in der richtigen Art, Menge und Qualität, zur richtigen Zeit und am richtigen Ort bereitgestellt werden. Aus Sicht der Produktion bedeutet das vor allem, Produktionsstillstände wegen fehlendem oder mangelhaftem Material zu vermeiden — jede Unterbrechung der Fertigung durch Materialengpässe verursacht Folgekosten, die weit über den reinen Materialwert hinausgehen können (z.B. Stillstandskosten, Vertragsstrafen bei verspäteter Auslieferung an Kunden, Imageschäden)."
      },
      {
        type: "p",
        text: "Die Formalziele betreffen dagegen die wirtschaftliche Dimension der Beschaffung: Im Mittelpunkt steht die Minimierung der Beschaffungskosten. Dazu zählen nicht nur die reinen Einstandspreise der Materialien, sondern auch Bestellabwicklungskosten, Transportkosten, Lagerkosten des beschafften Materials sowie Kosten, die durch Fehlmengen oder Qualitätsmängel entstehen können. Sach- und Formalziele stehen dabei in einem Spannungsverhältnis zueinander: Eine möglichst hohe Versorgungssicherheit (z.B. durch große Sicherheitsbestände oder besonders zuverlässige, aber teurere Lieferanten) treibt tendenziell die Kosten nach oben, während eine reine Kostenminimierung die Versorgungssicherheit gefährden kann. Gute Beschaffungsentscheidungen müssen deshalb stets einen Kompromiss zwischen Sach- und Formalzielen finden."
      },
      {
        type: "formula",
        block: true,
        tex: "\\text{Beschaffungsziele} = \\underbrace{\\text{richtige Güter, Menge, Qualität, Zeit, Ort}}_{\\text{Sachziele (Versorgungssicherheit)}} \\;+\\; \\underbrace{\\text{Minimierung der Beschaffungskosten}}_{\\text{Formalziele (Wirtschaftlichkeit)}}"
      },
      {
        type: "p",
        text: "Neben den klassischen Sach- und Formalzielen gewinnen zunehmend weitere, ergänzende Zielsetzungen an Bedeutung, etwa ökologische und soziale Ziele (nachhaltige Beschaffung, Einhaltung von Umwelt- und Sozialstandards in der Lieferkette) sowie Risikoziele (Reduktion von Abhängigkeiten von einzelnen Lieferanten oder Regionen). Ein Beispiel dafür ist ein Lebensmittelhändler, der sich verpflichtet, nur Fisch mit einem Nachhaltigkeitssiegel (z.B. MSC) einzukaufen: Hier wird bewusst ein ökologisches bzw. Umweltziel neben die klassischen Sach- und Formalziele gestellt, auch wenn dies möglicherweise höhere Beschaffungskosten oder eine kleinere Lieferantenauswahl zur Folge hat."
      },
      {
        type: "p",
        text: "Um diese Ziele zu erreichen, verfügt die Beschaffung über mehrere Instrumente bzw. Entscheidungsfreiheiten (auch als beschaffungspolitische Aktionsparameter bezeichnet), die einzeln oder in Kombination gestaltet werden können. Die wichtigsten sind: die Bestellmenge (wie viel wird auf einmal bestellt — abzuwägen zwischen Bestellkosten und Lagerkosten), die Preisgestaltung (Konditionenverhandlung, Rabatte, Zahlungsziele), der Beschaffungsweg (direkter Bezug unmittelbar vom Hersteller oder indirekter Bezug über Zwischenhändler/Großhandel), die Anzahl der Lieferanten (Single Sourcing mit einem einzigen Lieferanten je Teil vs. Multiple Sourcing mit mehreren parallelen Lieferanten) sowie die Marktauswahl bzw. das Beschaffungsgebiet (lokale, nationale oder internationale/globale Beschaffungsmärkte, z.B. Global Sourcing)."
      },
      {
        type: "list",
        items: [
          "Bestellmenge: Abwägung zwischen Bestellkosten (je Bestellvorgang) und Lagerhaltungskosten (je gelagerter Einheit)",
          "Preisgestaltung: Verhandlung von Preisen, Rabatten, Boni und Zahlungskonditionen mit dem Lieferanten",
          "Beschaffungsweg: direkter Bezug vom Hersteller vs. indirekter Bezug über Handelsstufen (Großhandel, Distributoren)",
          "Anzahl der Lieferanten: Single Sourcing (ein Lieferant, engere Bindung, aber höheres Abhängigkeitsrisiko) vs. Multiple Sourcing (mehrere Lieferanten, mehr Verhandlungsmacht und geringeres Ausfallrisiko, aber höherer Koordinationsaufwand)",
          "Marktauswahl: lokale, nationale oder internationale (globale) Beschaffungsmärkte, abhängig von Kostenvorteilen, Verfügbarkeit und Risikoerwägungen"
        ]
      },
      {
        type: "p",
        text: "Diese Instrumente lassen sich nicht isoliert betrachten, sondern müssen zu einem stimmigen Beschaffungskonzept zusammengeführt werden. Ein Zulieferer, der einen Automobilhersteller mit hohem Anspruch an Liefertreue beliefert, gleichzeitig aber wegen des Preisdrucks auf günstige Lieferanten aus Fernost angewiesen ist, muss beispielsweise abwägen: Der lange Beschaffungsweg aus Fernost erhöht das Risiko von Lieferverzögerungen, weshalb zusätzliche Sicherheitsbestände oder eine sorgfältige Auswahl mehrerer Lieferanten (Multiple Sourcing) sinnvoll sein können, um trotz der geografischen Distanz eine hohe Liefertreue sicherzustellen und das Risiko eines Lieferausfalls auf mehrere Schultern zu verteilen."
      },
      {
        type: "p",
        text: "Die Beschaffung hat für Industrieunternehmen eine erhebliche wirtschaftliche Bedeutung. In der deutschen Industrie macht das Beschaffungsvolumen häufig deutlich mehr als die Hälfte des gesamten Unternehmensumsatzes aus; bei Endherstellern (OEMs) in der Automobilindustrie, die einen Großteil der Wertschöpfung an Zulieferer ausgelagert haben, liegt dieser Anteil sogar oft bei 80 bis 90 Prozent. Diese Fremdbezugsquote steigt tendenziell weiter an, weil viele Unternehmen ihre Fertigungstiefe verringern und sich stärker auf ihre Kernkompetenzen konzentrieren, während sie andere Wertschöpfungsstufen bewusst an spezialisierte Lieferanten auslagern. Damit rückt die Beschaffung immer stärker in den strategischen Fokus des Unternehmens, denn selbst kleine prozentuale Einsparungen bei den Einstandspreisen wirken sich wegen des hohen Beschaffungsvolumens überproportional stark auf das Betriebsergebnis aus (Hebelwirkung des Einkaufs)."
      },
      {
        type: "list",
        items: [
          "Ein erheblicher Teil der Unternehmen betreibt inzwischen ein systematisches Lieferantenmanagement, um Leistung und Risiken der Lieferanten laufend zu überwachen",
          "Nachhaltige Beschaffung gewinnt an Bedeutung, u.a. befördert durch gesetzliche Vorgaben wie das Lieferkettensorgfaltspflichtengesetz",
          "Viele Unternehmen bauen strategische Partnerschaften mit ihren wichtigsten Lieferanten auf, um langfristige Kosten- und Innovationsvorteile zu sichern"
        ]
      }
    ],
    exercises: [
      {
        id: "produktionswirtschaft-beschaffung-grundlagen-e1",
        prompt: "Erläutern Sie den Unterschied zwischen den Begriffen Beschaffung und Materialwirtschaft anhand eines eigenen Beispiels.",
        solution: [{ type: "p", text: "Beschaffung bezeichnet die Versorgung der Bedarfsträger eines Unternehmens mit Gütern und Dienstleistungen, die nicht selbst erstellt werden, sondern von externen Lieferanten bezogen werden — im Mittelpunkt steht also der eigentliche Einkaufsprozess. Materialwirtschaft ist der übergeordnete Begriff: Sie umfasst die Beschaffung, ergänzt sie aber um die innerbetriebliche Materialflusssteuerung und die Lagerwirtschaft. Beispiel: Eine Möbelfabrik bestellt Holzplatten bei einem Zulieferer (das ist die Beschaffung). Sobald die Platten im Werk ankommen, müssen sie eingelagert, im Lager verwaltet und zum richtigen Zeitpunkt an die Fertigungslinie transportiert werden (das ist zusätzlich Aufgabe der Materialwirtschaft). Die Beschaffung ist somit ein Teilbereich der Materialwirtschaft." }]
      },
      {
        id: "produktionswirtschaft-beschaffung-grundlagen-e2",
        prompt: "Ein Unternehmen möchte künftig ausschließlich Kaffeebohnen mit Fairtrade-Siegel einkaufen, auch wenn dadurch der Einstandspreis um 15 % steigt. Ordnen Sie diese Entscheidung den Zielkategorien der Beschaffung zu und diskutieren Sie den Zielkonflikt.",
        solution: [{ type: "p", text: "Die Entscheidung, ausschließlich fair gehandelte Kaffeebohnen zu beziehen, ist in erster Linie ein ökologisch-soziales Ziel (bzw. Nachhaltigkeitsziel) der Beschaffung, das über die klassischen Sach- und Formalziele hinausgeht. Es tritt hier in einen direkten Zielkonflikt mit dem Formalziel der Kostenminimierung: Der um 15 % höhere Einstandspreis erhöht die Beschaffungskosten unmittelbar. Gleichzeitig kann diese Entscheidung aber positiv auf andere Ziele wirken, etwa auf die Versorgungssicherheit (stabilere, langfristige Lieferbeziehungen mit Fairtrade-Partnern) und auf das Unternehmensimage, was sich langfristig wieder positiv auf den Absatz und damit auf das Gesamtergebnis auswirken kann. Die Entscheidung zeigt, dass Beschaffungsziele nicht isoliert, sondern im Zusammenspiel und unter Abwägung von Kosten- und Nicht-Kosten-Zielen betrachtet werden müssen." }]
      },
      {
        id: "produktionswirtschaft-beschaffung-grundlagen-e3",
        prompt: "Nennen und erläutern Sie die fünf zentralen Instrumente (Entscheidungsfreiheiten), über die die Beschaffung verfügt, um ihre Ziele zu erreichen.",
        solution: [{ type: "p", text: "Die Beschaffung verfügt über folgende zentrale Instrumente: 1) Bestellmenge — die Festlegung, wie viel je Bestellvorgang beschafft wird, im Spannungsfeld zwischen Bestell- und Lagerkosten. 2) Preisgestaltung — die Verhandlung von Preisen, Rabatten, Boni und Zahlungskonditionen mit den Lieferanten. 3) Beschaffungsweg — die Wahl zwischen direktem Bezug unmittelbar vom Hersteller und indirektem Bezug über Zwischenhandelsstufen. 4) Anzahl der Lieferanten — die Entscheidung zwischen Single Sourcing (ein Lieferant je Teil) und Multiple Sourcing (mehrere parallele Lieferanten). 5) Marktauswahl — die Wahl des Beschaffungsgebiets, also ob lokal, national oder international/global eingekauft wird. Diese fünf Instrumente können einzeln oder kombiniert eingesetzt werden, um die Sach- und Formalziele der Beschaffung bestmöglich zu erreichen." }]
      },
      {
        id: "produktionswirtschaft-beschaffung-grundlagen-e4",
        prompt: "Ein Zulieferbetrieb beliefert einen Automobilhersteller, der sehr großen Wert auf Liefertreue legt. Um wettbewerbsfähige Preise anbieten zu können, ist der Zulieferer auf günstige Vorlieferanten aus Fernost angewiesen. Welche Überlegungen sollte der Zulieferer hinsichtlich Beschaffungsweg, Anzahl der Lieferanten und Marktauswahl anstellen?",
        solution: [{ type: "p", text: "Beschaffungsweg: Wegen der großen Distanz zu Fernost sind lange Transportwege und damit verbundene Zeit- und Störanfälligkeitsrisiken (z.B. Verzögerungen im Seetransport) zu berücksichtigen; ein direkter Bezug vom Hersteller kann helfen, zusätzliche Handelsstufen und damit verbundene Intransparenz zu vermeiden, ein indirekter Bezug über einen lokalen Distributor kann dagegen Vorteile bei Flexibilität und Reaktionsgeschwindigkeit bringen. Anzahl der Lieferanten: Angesichts der hohen geforderten Liefertreue empfiehlt sich Multiple Sourcing, also die Zusammenarbeit mit mehreren Lieferanten aus Fernost (oder ergänzend auch näher gelegenen Lieferanten), um das Risiko eines Lieferausfalls zu streuen und die Verhandlungsposition zu stärken. Marktauswahl: Die Wahl von Fernost als Beschaffungsmarkt ist preislich vorteilhaft, erhöht aber Abhängigkeits- und Ausfallrisiken (z.B. durch politische, logistische oder Wechselkursrisiken); ergänzend könnte eine Diversifizierung auf mehrere Beschaffungsregionen oder zusätzliche Sicherheitsbestände sinnvoll sein, um die geforderte Liefertreue trotz der weiten Beschaffungswege abzusichern." }]
      },
      {
        id: "produktionswirtschaft-beschaffung-grundlagen-e5",
        prompt: "Erklären Sie den Unterschied zwischen Sachzielen und Formalzielen der Beschaffung und nennen Sie jeweils ein Beispiel.",
        solution: [{ type: "p", text: "Sachziele beschreiben den inhaltlichen Auftrag der Beschaffung: die Versorgung der Bedarfsträger mit den richtigen Gütern und Dienstleistungen in der richtigen Art, Menge und Qualität, zur richtigen Zeit und am richtigen Ort. Beispiel: Ein Automobilwerk benötigt täglich pünktlich exakt die Menge an Karosserieteilen, die für die Tagesproduktion vorgesehen ist — fehlen diese Teile, steht das Fließband still. Formalziele betreffen dagegen die wirtschaftliche Dimension, insbesondere die Minimierung der Beschaffungskosten (Einstandspreise, Bestell-, Transport- und Lagerkosten). Beispiel: Der Einkauf verhandelt mit dem Lieferanten einen Mengenrabatt, um den Stückpreis der bezogenen Karosserieteile zu senken. Beide Zielkategorien stehen oft im Spannungsverhältnis zueinander, da eine höhere Versorgungssicherheit tendenziell höhere Kosten verursacht." }]
      },
      {
        id: "produktionswirtschaft-beschaffung-grundlagen-e6",
        prompt: "Warum hat die Beschaffung insbesondere für Unternehmen mit sinkender Fertigungstiefe eine wachsende strategische Bedeutung?",
        solution: [{ type: "p", text: "Sinkt die Fertigungstiefe eines Unternehmens, weil es sich zunehmend auf seine Kernkompetenzen konzentriert und andere Wertschöpfungsstufen an spezialisierte Lieferanten auslagert, steigt automatisch der Anteil fremdbezogener Güter und Dienstleistungen am Gesamtumsatz — in Teilen der Automobilindustrie erreicht das Beschaffungsvolumen bei Endherstellern bereits 80 bis 90 Prozent des Umsatzes. Damit wird die Beschaffung zu einem der größten Kostenblöcke im Unternehmen, und schon kleine prozentuale Verbesserungen bei Einstandspreisen oder Prozesskosten wirken sich überproportional stark auf das Betriebsergebnis aus. Zugleich steigt die Abhängigkeit von der Leistungsfähigkeit und Zuverlässigkeit der Lieferanten, weshalb Themen wie systematisches Lieferantenmanagement, Risikomanagement in der Lieferkette und strategische Lieferantenpartnerschaften zunehmend an Bedeutung gewinnen. Die Beschaffung wandelt sich damit von einer reinen operativen Abwicklungsfunktion zu einer strategischen Managementaufgabe." }]
      },
      {
        id: "produktionswirtschaft-beschaffung-grundlagen-e7",
        prompt: "Diskutieren Sie anhand des Beispiels einer Impfstoffbeschaffung während einer Pandemie, wie sich die Sach- und Formalziele der Beschaffung gegenüberstehen können.",
        solution: [{ type: "p", text: "Bei der Beschaffung von Impfstoffen in einer Pandemie steht das Sachziel — schnelle, ausreichende und zuverlässige Versorgung der Bevölkerung mit dem richtigen Impfstoff zur richtigen Zeit — klar im Vordergrund, da Verzögerungen unmittelbar Gesundheits- und Menschenleben betreffen. Um diese Versorgungssicherheit zu gewährleisten, wurden häufig sehr hohe Mengen frühzeitig und teils zu ungünstigeren Konditionen bestellt (z.B. Vorabzahlungen, Verträge mit mehreren Herstellern parallel als eine Art Multiple Sourcing zur Risikostreuung), was das Formalziel der Kostenminimierung deutlich in den Hintergrund treten ließ. Ergebnis war ein bewusster Zielkonflikt zugunsten der Sachziele: Eine im Vergleich zu 'normalen' Beschaffungssituationen unwirtschaftlichere Beschaffung wurde in Kauf genommen, um die Versorgungssicherheit so schnell und so robust wie möglich abzusichern. Dies verdeutlicht, dass in Ausnahmesituationen die Gewichtung zwischen Sach- und Formalzielen deutlich von der Normalsituation abweichen kann." }]
      }
    ],
    quiz: [
      {
        id: "q1",
        question: "Wie lässt sich der Begriff 'Beschaffung' am treffendsten beschreiben?",
        options: [
          "Als die Gesamtheit aller Prozesse zur Versorgung der Bedarfsträger mit nicht selbst erstellten Gütern",
          "Als reine innerbetriebliche Lagerverwaltung",
          "Als ausschließlich die Verhandlung von Einkaufspreisen",
          "Als Synonym für die Produktionsplanung"
        ],
        correctIndex: 0,
        explanation: "Beschaffung bezeichnet alle Prozesse zur Versorgung der Bedarfsträger mit Inputfaktoren, die das Unternehmen nicht selbst erstellt, also durch Fremdbezug statt Eigenfertigung bereitgestellt werden."
      },
      {
        id: "q2",
        question: "Was unterscheidet die Materialwirtschaft von der Beschaffung?",
        options: [
          "Materialwirtschaft ist nur ein anderes Wort für Beschaffung, es gibt keinen inhaltlichen Unterschied",
          "Materialwirtschaft betrifft ausschließlich die Personalplanung im Einkauf",
          "Materialwirtschaft ist enger gefasst als Beschaffung und schließt nur die Preisverhandlung ein",
          "Materialwirtschaft umfasst zusätzlich zur Beschaffung auch die Materialflusssteuerung und die Lagerwirtschaft"
        ],
        correctIndex: 3,
        explanation: "Die Materialwirtschaft ist der Oberbegriff: Sie umfasst neben der Beschaffung auch die Steuerung des Materialflusses und die Lagerwirtschaft."
      },
      {
        id: "q3",
        question: "Welche Aussage beschreibt die Sachziele der Beschaffung korrekt?",
        options: [
          "Sie betreffen ausschließlich die Minimierung der Beschaffungskosten",
          "Sie fordern die Versorgung der Bedarfsträger mit den richtigen Gütern in richtiger Art, Menge, Qualität, zur richtigen Zeit und am richtigen Ort",
          "Sie beziehen sich nur auf die Wahl des Beschaffungsweges",
          "Sie sind identisch mit den Formalzielen"
        ],
        correctIndex: 1,
        explanation: "Die Sachziele betreffen die inhaltliche Versorgungssicherheit: richtige Güter, Menge, Qualität, Zeit und Ort."
      },
      {
        id: "q4",
        question: "Worauf zielen die Formalziele der Beschaffung in erster Linie ab?",
        options: [
          "Auf die Minimierung der Beschaffungskosten",
          "Auf die Maximierung der Lagerbestände",
          "Auf die Auswahl möglichst vieler Beschaffungsmärkte",
          "Auf die Vermeidung jeglicher Lieferantenwechsel"
        ],
        correctIndex: 0,
        explanation: "Formalziele stellen die wirtschaftliche Dimension in den Vordergrund, insbesondere die Minimierung der gesamten Beschaffungskosten."
      },
      {
        id: "q5",
        question: "Ein Lebensmittelhändler kauft ausschließlich Fisch mit einem Nachhaltigkeitssiegel ein, auch wenn dies teurer ist. Welchem Zieltyp ist diese Politik in erster Linie zuzuordnen?",
        options: [
          "Dem klassischen Formalziel der Kostenminimierung",
          "Einem ökologischen Ziel (Nachhaltigkeitsziel), das über klassische Sach-/Formalziele hinausgeht",
          "Ausschließlich dem Sachziel der richtigen Menge",
          "Dem Ziel der Verkürzung des Beschaffungsweges"
        ],
        correctIndex: 1,
        explanation: "Die Bindung an ein Nachhaltigkeitssiegel ist ein ökologisches bzw. Umweltziel, das zusätzlich zu den klassischen Sach- und Formalzielen verfolgt wird und mit der Kostenminimierung in Konflikt stehen kann."
      },
      {
        id: "q6",
        question: "Welches der folgenden Elemente zählt NICHT zu den klassischen Entscheidungsfreiheiten (Instrumenten) der Beschaffung?",
        options: [
          "Die Bestellmenge",
          "Die Anzahl der Lieferanten",
          "Die Festlegung des Unternehmenssitzes der Produktion",
          "Die Marktauswahl"
        ],
        correctIndex: 2,
        explanation: "Die Festlegung des Produktionsstandortes ist keine beschaffungspolitische Entscheidungsfreiheit; zu den Instrumenten zählen dagegen Bestellmenge, Preisgestaltung, Beschaffungsweg, Anzahl der Lieferanten und Marktauswahl."
      },
      {
        id: "q7",
        question: "Was bedeutet 'Multiple Sourcing' im Rahmen der beschaffungspolitischen Entscheidungsfreiheit 'Anzahl der Lieferanten'?",
        options: [
          "Der bewusste Verzicht auf jegliche Lieferantenbeziehung",
          "Die Beschaffung ausschließlich über einen einzigen Lieferanten je Teil",
          "Die parallele Zusammenarbeit mit mehreren Lieferanten je Teil zur Risikostreuung und Stärkung der Verhandlungsposition",
          "Die Beschränkung der Beschaffung auf lokale Märkte"
        ],
        correctIndex: 2,
        explanation: "Multiple Sourcing bedeutet, mehrere Lieferanten parallel für dasselbe Teil einzusetzen, um Abhängigkeiten und Ausfallrisiken zu reduzieren."
      },
      {
        id: "q8",
        question: "Wie hoch liegt das Beschaffungsvolumen bei Endherstellern (OEMs) der Automobilindustrie häufig im Verhältnis zum Umsatz?",
        options: [
          "Unter 10 Prozent",
          "Etwa 20 bis 30 Prozent",
          "Etwa 80 bis 90 Prozent",
          "Es lässt sich grundsätzlich nicht in Prozent des Umsatzes ausdrücken"
        ],
        correctIndex: 2,
        explanation: "Bei OEMs der Automobilindustrie erreicht das Beschaffungsvolumen aufgrund der geringen Fertigungstiefe häufig 80 bis 90 Prozent des Umsatzes."
      },
      {
        id: "q9",
        question: "Warum steigt die strategische Bedeutung der Beschaffung tendenziell, wenn Unternehmen ihre Fertigungstiefe verringern?",
        options: [
          "Weil dadurch automatisch die Lagerkosten auf null sinken",
          "Weil der Anteil fremdbezogener Güter am Umsatz steigt und sich Einsparungen im Einkauf dadurch überproportional auf das Ergebnis auswirken",
          "Weil die Materialwirtschaft dadurch komplett entfällt",
          "Weil dadurch keine Lieferanten mehr benötigt werden"
        ],
        correctIndex: 1,
        explanation: "Eine sinkende Fertigungstiefe erhöht den Fremdbezugsanteil, sodass das Beschaffungsvolumen einen immer größeren Teil des Umsatzes ausmacht und Einsparungen im Einkauf das Betriebsergebnis überproportional stark verbessern."
      },
      {
        id: "q10",
        question: "Welche Aussage zum Zusammenhang von Sach- und Formalzielen der Beschaffung trifft zu?",
        options: [
          "Sach- und Formalziele stehen niemals in Konflikt zueinander",
          "Eine höhere Versorgungssicherheit (Sachziel) verursacht tendenziell keine zusätzlichen Kosten",
          "Formalziele haben in der Praxis grundsätzlich Vorrang vor Sachzielen",
          "Eine höhere Versorgungssicherheit erhöht tendenziell die Kosten, sodass zwischen Sach- und Formalzielen ein Zielkonflikt bestehen kann"
        ],
        correctIndex: 3,
        explanation: "Sach- und Formalziele stehen häufig im Spannungsverhältnis: Mehr Versorgungssicherheit (z.B. durch höhere Sicherheitsbestände) treibt tendenziell die Beschaffungskosten nach oben."
      }
    ]
  }
];
