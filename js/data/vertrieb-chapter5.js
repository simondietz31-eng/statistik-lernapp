const VERTRIEB_CHAPTER5_TOPICS = [
  {
    id: "vertrieb-preisfindung-durchsetzung",
    chapter: 5,
    order: 1,
    title: "Preisfindung vs. Preisdurchsetzung: die drei Grundansätze",
    icon: "💶",
    summary: "Warum ein kalkulierter Preis am Markt oft nicht durchgesetzt wird, welche drei Erfolgsfaktoren die Preisdurchsetzung bestimmen, und wie sich Kosten-, Wettbewerbs- und Kundenorientierung als Preisfindungsansätze unterscheiden.",
    explanation: [
      { type: "p", text: "In der Preispolitik ist zwischen Preisfindung und Preisdurchsetzung zu unterscheiden. Preisfindung ist die Methode, mit der ein Preis berechnet wird. Preisdurchsetzung ist die Frage, ob dieser berechnete Preis tatsächlich am Markt erzielt wird. Preisdurchsetzung ist dabei häufig das größere Problem — besonders im B2B-Geschäft, wo der tatsächlich realisierte Preis nach Abzug von Rabatten, Boni und sonstigen Konditionen oft nur rund 50 % des Listenpreises beträgt." },
      { type: "p", text: "Drei Faktoren entscheiden über den Erfolg der Preisdurchsetzung:" },
      { type: "list", items: [
        "Professionelle Marktanalyse — z. B. systematisches Tracking von Zahlungsbereitschaften der Kunden",
        "Professionelle Umsetzung — systematischer, kontrollierter Umgang mit Preisnachlässen statt Ad-hoc-Entscheidungen",
        "Preisdisziplin — konsequente Einhaltung des einmal kalkulierten Preissystems, keine spontanen Sonderrabatte im Einzelfall"
      ]},
      { type: "p", text: "Der Preis wird dabei als der \"größte Hebel\" im Vertrieb beschrieben — sowohl nach oben (Gewinnsteigerung durch bessere Preisdurchsetzung) als auch nach unten (Gewinnvernichtung durch unkontrollierte Rabatte)." },
      { type: "p", text: "Für die eigentliche Preisfindung gibt es drei Grundansätze, die sich in Berechnungsprinzip sowie Vor- und Nachteilen unterscheiden:" },
      { type: "list", items: [
        "Kostenorientierung: Preis = Herstellkosten + Marge, wobei die für die Kostenumlage angenommene Menge selbst eigentlich vom Preis abhängt. Vorteil: kostendeckend, einfach zu berechnen. Nachteil: keine Garantie auf Kundenakzeptanz des Preises, methodisches Zirkelschluss-Problem (die zur Stückkostenberechnung angenommene Absatzmenge hängt selbst vom letztlich gesetzten Preis ab).",
        "Wettbewerbsorientierung: Preis = Ø Wettbewerbspreis ± Auf-/Abschlag. Vorteil: Kunden zahlen diesen Preis erwiesenermaßen bereits (da er sich am Marktniveau orientiert), einfach, kostengünstig und schnell zu ermitteln. Nachteil: nutzt die maximale Zahlungsbereitschaft der Kunden nicht aus, keine Garantie für Kostendeckung.",
        "Kundenorientierung: Preis = Berechnung/Durchschnitt der maximalen Zahlungsbereitschaft der Kunden. Vorteil: Ertragsmaximierung, garantierte Kundenakzeptanz, Kostendeckung ist faktisch gesichert. Nachteil: eine echte Datengrundlage ist schwer zu ermitteln, meist nur über hypothetische Fragebögen zugänglich, und die Erhebung ist kostenintensiv."
      ]},
      { type: "p", text: "Merksatz: Die Kosten sagen dir, was du mindestens brauchst. Der Wettbewerb sagt dir, was üblich ist. Der Kunde sagt dir, was möglich wäre." }
    ],
    exercises: [
      {
        id: "vertrieb-preisfindung-durchsetzung-e1",
        prompt: "Erklären Sie den Unterschied zwischen Preisfindung und Preisdurchsetzung und begründen Sie, warum Preisdurchsetzung besonders im B2B-Geschäft ein großes Problem darstellt.",
        solution: [{ type: "p", text: "Preisfindung bezeichnet die Methode, mit der ein Preis berechnet wird (z. B. kosten-, wettbewerbs- oder kundenorientiert). Preisdurchsetzung bezeichnet dagegen die Frage, ob dieser kalkulierte Preis tatsächlich am Markt erzielt wird. Im B2B-Geschäft ist Preisdurchsetzung besonders problematisch, weil der letztlich realisierte Preis nach Abzug von Rabatten, Boni und sonstigen Konditionen häufig nur rund 50 % des ursprünglichen Listenpreises beträgt — der kalkulierte Preis und der tatsächlich erzielte Preis klaffen also stark auseinander." }]
      },
      {
        id: "vertrieb-preisfindung-durchsetzung-e2",
        prompt: "Nennen Sie die drei Erfolgsfaktoren der Preisdurchsetzung und erläutern Sie jeweils kurz, was darunter zu verstehen ist.",
        solution: [{ type: "p", text: "Erstens die professionelle Marktanalyse, z. B. das systematische Tracking von Zahlungsbereitschaften der Kunden, um Preisentscheidungen datenbasiert zu treffen. Zweitens die professionelle Umsetzung, also ein systematischer statt willkürlicher Umgang mit Preisnachlässen im operativen Vertrieb. Drittens die Preisdisziplin, also die konsequente Einhaltung des einmal kalkulierten Preissystems ohne spontane Sonderrabatte im Einzelfall." }]
      },
      {
        id: "vertrieb-preisfindung-durchsetzung-e3",
        prompt: "Erläutern Sie das methodische Zirkelschluss-Problem der Kostenorientierung bei der Preisfindung.",
        solution: [{ type: "p", text: "Bei kostenorientierter Preisfindung wird der Preis aus den Herstellkosten pro Stück plus einer Marge berechnet. Die Herstellkosten pro Stück ergeben sich jedoch aus einer Umlage der Fixkosten auf eine angenommene Absatzmenge. Diese Absatzmenge hängt aber selbst vom letztlich gesetzten Preis ab (bei höherem Preis wird typischerweise weniger verkauft und umgekehrt). Damit entsteht ein Zirkelschluss: Um den Preis zu berechnen, braucht man die Menge, aber die Menge hängt eigentlich vom noch zu berechnenden Preis ab." }]
      },
      {
        id: "vertrieb-preisfindung-durchsetzung-e4",
        prompt: "Vergleichen Sie Wettbewerbsorientierung und Kundenorientierung als Preisfindungsansätze hinsichtlich ihrer jeweiligen Vor- und Nachteile.",
        solution: [{ type: "p", text: "Bei der Wettbewerbsorientierung wird der Preis als durchschnittlicher Wettbewerbspreis zuzüglich oder abzüglich eines Auf- bzw. Abschlags festgelegt. Vorteil ist, dass Kunden diesen Preis erwiesenermaßen bereits zahlen, sowie die Einfachheit, Schnelligkeit und geringen Kosten der Methode. Nachteil ist, dass die maximale Zahlungsbereitschaft der Kunden nicht ausgeschöpft wird und keine Garantie für Kostendeckung besteht. Bei der Kundenorientierung wird der Preis aus der berechneten bzw. durchschnittlichen maximalen Zahlungsbereitschaft der Kunden abgeleitet. Vorteil ist die mögliche Ertragsmaximierung, garantierte Kundenakzeptanz und faktisch gesicherte Kostendeckung. Nachteil ist, dass eine valide Datengrundlage schwer zu ermitteln ist, meist nur über hypothetische Befragungen zugänglich ist und die Erhebung kostenintensiv ist." }]
      },
      {
        id: "vertrieb-preisfindung-durchsetzung-e5",
        prompt: "Erklären Sie den Merksatz 'Die Kosten sagen dir, was du mindestens brauchst. Der Wettbewerb sagt dir, was üblich ist. Der Kunde sagt dir, was möglich wäre.'",
        solution: [{ type: "p", text: "Der Merksatz ordnet den drei Preisfindungsansätzen jeweils eine spezifische Information zu: Die Kostenorientierung liefert die Preisuntergrenze, die zur Kostendeckung mindestens nötig ist. Die Wettbewerbsorientierung liefert das am Markt übliche Preisniveau, an dem sich Kunden bereits orientieren. Die Kundenorientierung liefert dagegen die maximal mögliche Preishöhe, die aus der individuellen Zahlungsbereitschaft der Kunden abgeleitet werden kann. Ein durchdachter Preis berücksichtigt idealerweise alle drei Perspektiven." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Was beschreibt die Preisdurchsetzung im Unterschied zur Preisfindung?", options: ["Die Höhe der Herstellkosten pro produzierter Einheit", "Ob der berechnete Preis tatsächlich am Markt erzielt wird", "Wie ein Preis anhand einer bestimmten Methode berechnet wird", "Die Anzahl der Wettbewerber im relevanten Markt insgesamt"], correctIndex: 1, explanation: "Preisfindung ist die Methode, mit der ein Preis berechnet wird, während Preisdurchsetzung die Frage betrifft, ob dieser kalkulierte Preis tatsächlich am Markt erzielt wird. Laut Vorlesung ist Preisdurchsetzung häufig das größere Problem, besonders im B2B-Geschäft." },
      { id: "q2", question: "Wie hoch ist der realisierte Preis im B2B-Geschäft laut Vorlesung häufig im Vergleich zum Listenpreis, nach Abzug von Rabatten und Konditionen?", options: ["Etwa 50 %", "Etwa 100 %", "Etwa 90 %", "Etwa 10 %"], correctIndex: 0, explanation: "Im B2B-Geschäft beträgt der tatsächlich realisierte Preis nach Abzug von Rabatten, Boni und sonstigen Konditionen laut Vorlesung häufig nur rund 50 % des ursprünglichen Listenpreises. Dies zeigt, wie groß die Lücke zwischen kalkuliertem und durchgesetztem Preis in der Praxis sein kann." },
      { id: "q3", question: "Welches ist KEINER der drei genannten Erfolgsfaktoren der Preisdurchsetzung?", options: ["Maximale Produktvielfalt", "Preisdisziplin", "Professionelle Marktanalyse", "Professionelle Umsetzung"], correctIndex: 0, explanation: "Die drei genannten Erfolgsfaktoren der Preisdurchsetzung sind professionelle Marktanalyse, professionelle Umsetzung und Preisdisziplin. Maximale Produktvielfalt wird in der Vorlesung nirgends als Erfolgsfaktor genannt, sondern betrifft eher die Sortimentspolitik." },
      { id: "q4", question: "Als was wird der Preis im Vertrieb charakterisiert?", options: ["Als ausschließlich kostenbezogene Größe", "Als reines Marketinginstrument ohne Gewinnwirkung", "Als irrelevanter Faktor", "Als der größte Hebel, nach oben wie nach unten"], correctIndex: 3, explanation: "Der Preis wird in der Vorlesung als der größte Hebel im Vertrieb beschrieben, da er sowohl den Gewinn durch bessere Durchsetzung steigern als auch durch unkontrollierte Rabatte vernichten kann. Diese doppelte Wirkrichtung unterscheidet ihn von rein kostenbezogenen oder irrelevanten Größen." },
      { id: "q5", question: "Wie wird der Preis bei der Kostenorientierung berechnet?", options: ["Preis = maximale Zahlungsbereitschaft der Kunden", "Preis = Umsatz des Vorjahres", "Preis = Herstellkosten + Marge", "Preis = Ø Wettbewerbspreis ± Auf-/Abschlag"], correctIndex: 2, explanation: "Bei der Kostenorientierung ergibt sich der Preis laut Vorlesung aus den Herstellkosten zuzüglich einer Marge. Das unterscheidet diesen Ansatz von der Wettbewerbsorientierung, die sich am Marktpreis orientiert, und der Kundenorientierung, die auf der maximalen Zahlungsbereitschaft basiert." },
      { id: "q6", question: "Was ist ein zentraler methodischer Nachteil der Kostenorientierung?", options: ["Ein Zirkelschluss, da die angenommene Absatzmenge vom Preis abhängt", "Sie berücksichtigt ausschließlich die Preise der Wettbewerber im Markt", "Sie erfordert aufwendige und kostenintensive Kundenbefragungen im Vorfeld", "Sie ist grundsätzlich zu teuer in der praktischen Erhebung der Daten"], correctIndex: 0, explanation: "Ein zentraler methodischer Nachteil der Kostenorientierung ist laut Vorlesung ein Zirkelschluss: Die für die Kostenumlage angenommene Absatzmenge hängt eigentlich selbst vom letztlich gesetzten Preis ab, den man mit dieser Menge doch erst berechnen möchte." },
      { id: "q7", question: "Welcher Vorteil wird der Wettbewerbsorientierung zugeschrieben?", options: ["Maximale Ausschöpfung der individuellen Zahlungsbereitschaft der Kunden", "Kunden zahlen diesen Preis bereits, einfach und schnell ermittelbar", "Keine Datenerhebung bei Kunden oder Wettbewerbern notwendig", "Garantierte Kostendeckung in jeder denkbaren Marktsituation"], correctIndex: 1, explanation: "Der Wettbewerbsorientierung wird laut Vorlesung als Vorteil zugeschrieben, dass Kunden den ermittelten Preis erwiesenermaßen bereits zahlen, da er sich am etablierten Marktniveau orientiert, und dass die Methode einfach, kostengünstig und schnell anzuwenden ist." },
      { id: "q8", question: "Welcher Nachteil ist typisch für die Kundenorientierung bei der Preisfindung?", options: ["Sie ist stets deutlich günstiger als alle anderen Preisfindungsmethoden", "Eine valide Datengrundlage ist schwer und teuer zu ermitteln", "Keine Garantie für vollständige Kostendeckung in jedem Einzelfall", "Sie nutzt die maximale Zahlungsbereitschaft der Kunden nicht aus"], correctIndex: 1, explanation: "Bei der Kundenorientierung ist laut Vorlesung eine valide Datengrundlage schwer zu ermitteln, da die maximale Zahlungsbereitschaft meist nur über hypothetische Fragebögen zugänglich ist, und die Erhebung dieser Daten ist entsprechend kostenintensiv." },
      { id: "q9", question: "Welcher Preisfindungsansatz führt laut Vorlesung am ehesten zu Ertragsmaximierung?", options: ["Wettbewerbsorientierung", "Kostenorientierung", "Kundenorientierung", "Keiner der drei Ansätze"], correctIndex: 2, explanation: "Die Kundenorientierung zielt laut Vorlesung auf die maximale Zahlungsbereitschaft der Kunden und ermöglicht dadurch als einziger der drei Ansätze eine echte Ertragsmaximierung, während Wettbewerbs- und Kostenorientierung diese Zahlungsbereitschaft nicht vollständig ausschöpfen." },
      { id: "q10", question: "Was liefert laut Merksatz die Kostenorientierung?", options: ["Nichts wirklich Relevantes für die Preisfindung", "Was in der Zukunft maximal möglich wäre", "Was aktuell am Markt allgemein üblich ist", "Was mindestens benötigt wird"], correctIndex: 3, explanation: "Der Merksatz ordnet der Kostenorientierung die Information zu, was für die Kostendeckung mindestens benötigt wird - also die Preisuntergrenze. Der Wettbewerb zeigt dagegen das übliche Marktniveau, der Kunde die maximal mögliche Preishöhe." }
    ]
  },
  {
    id: "vertrieb-van-westendorp",
    chapter: 5,
    order: 2,
    title: "Van-Westendorp-Preisbereitschaftsanalyse",
    icon: "📈",
    summary: "Wie die Van-Westendorp-Methode über vier Preisfragen einen sinnvollen Preiskorridor ermittelt und wie Indifferenzpreis sowie optimaler Preis aus den Schnittpunkten der Kurven berechnet werden.",
    explanation: [
      { type: "p", text: "Die Van-Westendorp-Preisbereitschaftsanalyse (Price Sensitivity Meter) ist eine survey-basierte Methode zur Bestimmung eines sinnvollen Preiskorridors für ein Produkt. Dabei wird jeder Befragte zu vier Preispunkten befragt:" },
      { type: "list", items: [
        "\"Zu teuer\": der Preis, ab dem der Befragte das Produkt für zu teuer hält und es nicht mehr kaufen würde",
        "\"Teuer\": der Preis, den der Befragte als teuer empfindet, der aber noch gerade akzeptabel ist",
        "\"Günstig\": der Preis, den der Befragte als günstig empfindet",
        "\"Zu günstig\": der Preis, ab dem beim Befragten Qualitätszweifel aufkommen"
      ]},
      { type: "p", text: "Methodisch wird für jede der vier Kategorien die kumulierte Häufigkeitsverteilung gebildet: der Anteil der Befragten, die einem Preis X oder weniger diese Kategorie zuordnen, wird gegen den Preis X aufgetragen. Dies ergibt vier Treppenkurven. Die korrekte Reihenfolge der typischen Preisniveaus der vier Kategorien lautet: zu günstig < günstig < teuer < zu teuer." },
      { type: "p", text: "Aus dem Schnittpunkt jeweils zweier dieser Kurven lassen sich zwei zentrale Preispunkte ableiten:" },
      { type: "list", items: [
        "Indifferenzpreis: Schnittpunkt der beiden inneren Kurven \"teuer\" und \"günstig\". An diesem Punkt trifft sich die gleiche Anzahl an Kunden mit hoher und mit niedriger Preisbereitschaft — die Mehrheit der Befragten empfindet diesen Preis als fair. Der Indifferenzpreis eignet sich als langfristiger Preis.",
        "Optimaler Preis / Penetrationspreis: Schnittpunkt der beiden äußeren Kurven \"zu teuer\" und \"zu günstig\". An diesem Punkt ist der Kaufwiderstand am geringsten, hier liegt das Absatzmaximum. Der optimale Preis eignet sich als kurzfristiger Preis, z. B. beim Markteintritt (Penetrationsstrategie)."
      ]},
      { type: "p", text: "Praktisches Vorgehen bei der Auswertung: Jede der vier Antwortreihen wird zunächst aufsteigend sortiert, danach werden bei n Befragten die kumulierten Prozentanteile in 100/n-Prozent-Schritten gebildet (bei n = 10 also in 10-%-Schritten). Die Schnittpunkte der jeweils relevanten Kurvenpaare werden anschließend durch lineare Interpolation zwischen den benachbarten Datenpunkten bestimmt." }
    ],
    exercises: [
      {
        id: "vertrieb-van-westendorp-e1",
        prompt: "Nennen Sie die vier Preisfragen der Van-Westendorp-Methode und erläutern Sie kurz, was jede davon misst.",
        solution: [{ type: "p", text: "\"Zu teuer\" misst den Preis, ab dem der Befragte das Produkt für zu teuer hält und nicht mehr kaufen würde. \"Teuer\" misst den Preis, den der Befragte als teuer, aber noch gerade akzeptabel empfindet. \"Günstig\" misst den Preis, den der Befragte als günstig empfindet. \"Zu günstig\" misst den Preis, ab dem beim Befragten Qualitätszweifel aufkommen, weil das Produkt zu billig erscheint." }]
      },
      {
        id: "vertrieb-van-westendorp-e2",
        prompt: "Erklären Sie den Unterschied zwischen Indifferenzpreis und optimalem Preis (Penetrationspreis) hinsichtlich ihrer Berechnung und ihres jeweiligen Einsatzzwecks.",
        solution: [{ type: "p", text: "Der Indifferenzpreis ist der Schnittpunkt der beiden inneren Kurven \"teuer\" und \"günstig\": Hier treffen sich Kunden mit hoher und niedriger Preisbereitschaft, und die Mehrheit empfindet den Preis als fair — er eignet sich daher als langfristiger Preis. Der optimale Preis (Penetrationspreis) ist der Schnittpunkt der beiden äußeren Kurven \"zu teuer\" und \"zu günstig\": Hier ist der Kaufwiderstand am geringsten und das Absatzmaximum erreicht — er eignet sich daher eher als kurzfristiger Preis, etwa zur Marktdurchdringung beim Markteintritt." }]
      },
      {
        id: "vertrieb-van-westendorp-e3",
        prompt: "In einer Befragung mit n = 10 Personen wurden für die Kategorie \"zu teuer\" folgende Werte erhoben: 1,5 / 3,5 / 2,2 / 2,0 / 3,0 / 4,5 / 5,0 / 2,5 / 2,0 / 3,0 (in €). Sortieren Sie diese Werte aufsteigend und geben Sie die kumulierten Prozentanteile in 10-%-Schritten an.",
        solution: [{ type: "p", text: "Aufsteigend sortiert: 1,50 / 2,00 / 2,00 / 2,20 / 2,50 / 3,00 / 3,00 / 3,50 / 4,50 / 5,00 (€). Die kumulierten Prozentanteile in 10-%-Schritten lauten: bei 1,50 € → 10 %, bei 2,00 € → 20 % bzw. 30 % (da der Wert doppelt vorkommt), bei 2,20 € → 40 %, bei 2,50 € → 50 %, bei 3,00 € → 60 % bzw. 70 % (Wert doppelt), bei 3,50 € → 80 %, bei 4,50 € → 90 % und bei 5,00 € → 100 %." }]
      },
      {
        id: "vertrieb-van-westendorp-e4",
        prompt: "Für eine Befragung mit n = 10 Personen liegen folgende Rohdaten vor (in €):\nZu teuer: 1,5 / 3,5 / 2,2 / 2,0 / 3,0 / 4,5 / 5,0 / 2,5 / 2,0 / 3,0\nTeuer: 1,2 / 3,0 / 1,5 / 2,2 / 1,5 / 1,8 / 3,0 / 4,0 / 1,75 / 2,5\nGünstig: 1,5 / 1,0 / 0,5 / 2,0 / 1,5 / 2,2 / 1,2 / 1,75 / 1,25 / 1,5\nZu günstig: 0,75 / 0,5 / 0,8 / 0,5 / 0,2 / 0,5 / 0,8 / 1,2 / 0,7 / 0,5\nBestimmen Sie den Indifferenzpreis (langfristiger Preis) durch lineare Interpolation der kumulierten Kurven \"teuer\" und \"günstig\".",
        solution: [{ type: "p", text: "Nach Sortierung und Bildung der kumulierten 10-%-Häufigkeiten schneiden sich die Kurven \"teuer\" und \"günstig\" zwischen den Preispunkten 1,50 € und 1,75 €. Durch lineare Interpolation zwischen diesen beiden benachbarten Preispunkten ergibt sich ein Indifferenzpreis von rund 1,69 €. Dieser Preis ist als langfristiger Preis geeignet, da hier eine Mehrheit der Befragten den Preis als fair zwischen 'teuer' und 'günstig' empfindet." }]
      },
      {
        id: "vertrieb-van-westendorp-e5",
        prompt: "Bestimmen Sie für dieselben Daten aus Aufgabe 4 den optimalen Preis (Penetrationspreis) durch lineare Interpolation der kumulierten Kurven \"zu teuer\" und \"zu günstig\", und erläutern Sie, wofür sich dieser Preis eignet.",
        solution: [{ type: "p", text: "Die Kurven \"zu teuer\" und \"zu günstig\" schneiden sich zwischen den Preispunkten 1,20 € und 1,50 €. Durch lineare Interpolation zwischen diesen beiden Punkten ergibt sich ein optimaler Preis (Penetrationspreis) von rund 1,35 €. An diesem Preispunkt ist der Kaufwiderstand am geringsten, das heißt, hier liegt das Absatzmaximum. Dieser Preis eignet sich daher besonders als kurzfristiger Preis, etwa zur Marktdurchdringung bei einem Markteintritt (Penetrationsstrategie), weniger als dauerhafter, langfristiger Preis." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie viele Preispunkte werden in der Van-Westendorp-Methode pro Befragtem erhoben?", options: ["Fünf", "Drei", "Vier", "Zwei"], correctIndex: 2, explanation: "Bei der Van-Westendorp-Methode werden laut Vorlesung pro Befragtem vier Preispunkte erhoben: zu teuer, teuer, günstig und zu günstig. Aus den kumulierten Häufigkeitsverteilungen dieser vier Kategorien lassen sich anschließend Indifferenzpreis und optimaler Preis ableiten." },
      { id: "q2", question: "Was misst die Preisfrage \"zu günstig\"?", options: ["Den Preis, ab dem der Befragte das Produkt nicht mehr kaufen würde", "Den Preis, ab dem beim Befragten Qualitätszweifel aufkommen", "Den Preis, den der Befragte insgesamt als fair und angemessen empfindet", "Den durchschnittlichen Preis aller relevanten Wettbewerber im Markt"], correctIndex: 1, explanation: "Die Preisfrage 'zu günstig' misst laut Definition den Preis, ab dem beim Befragten Qualitätszweifel am Produkt aufkommen, weil es ihm zu billig erscheint. Sie unterscheidet sich damit von 'zu teuer', die den Preis misst, ab dem der Befragte gar nicht mehr kaufen würde." },
      { id: "q3", question: "Welche Reihenfolge der typischen Preisniveaus ist korrekt?", options: ["günstig < zu günstig < teuer < zu teuer", "zu teuer < teuer < günstig < zu günstig", "teuer < zu teuer < zu günstig < günstig", "zu günstig < günstig < teuer < zu teuer"], correctIndex: 3, explanation: "Die korrekte Reihenfolge lautet laut Vorlesung: zu günstig < günstig < teuer < zu teuer, da diese vier Preispunkte auf einer aufsteigenden Skala vom niedrigsten bis zum höchsten noch akzeptierten Preis liegen." },
      { id: "q4", question: "Wie wird der Indifferenzpreis bestimmt?", options: ["Als niedrigster erhobener Wert", "Als Mittelwert aller vier Kurven", "Als Schnittpunkt von 'zu teuer' und 'zu günstig'", "Als Schnittpunkt von 'teuer' und 'günstig'"], correctIndex: 3, explanation: "Der Indifferenzpreis ergibt sich laut Vorlesung als Schnittpunkt der beiden inneren Kurven 'teuer' und 'günstig'. An diesem Punkt trifft sich die gleiche Anzahl an Kunden mit hoher und niedriger Preisbereitschaft, weshalb die Mehrheit diesen Preis als fair empfindet." },
      { id: "q5", question: "Wie wird der optimale Preis (Penetrationspreis) bestimmt?", options: ["Als Median aller Werte", "Als Schnittpunkt der inneren Kurven 'teuer' und 'günstig'", "Als höchster erhobener Wert", "Als Schnittpunkt von 'zu teuer' und 'zu günstig'"], correctIndex: 3, explanation: "Der optimale Preis (Penetrationspreis) ergibt sich laut Vorlesung als Schnittpunkt der beiden äußeren Kurven 'zu teuer' und 'zu günstig'. An diesem Punkt ist der Kaufwiderstand am geringsten, weshalb hier das Absatzmaximum liegt." },
      { id: "q6", question: "Für welchen Einsatzzweck eignet sich der Indifferenzpreis besonders?", options: ["Als kurzfristiger Preis beim Markteintritt", "Als langfristiger Preis", "Er hat keinen praktischen Einsatzzweck", "Nur für Rabattaktionen"], correctIndex: 1, explanation: "Der Indifferenzpreis eignet sich laut Vorlesung besonders als langfristiger Preis, da ihn die Mehrheit der Befragten als fair zwischen 'teuer' und 'günstig' empfindet. Das unterscheidet ihn vom optimalen Preis, der eher für kurzfristige Zwecke geeignet ist." },
      { id: "q7", question: "Für welchen Einsatzzweck eignet sich der optimale Preis (Penetrationspreis) besonders?", options: ["Nur für den B2B-Vertrieb bei Großkunden mit hohem Umsatz", "Als dauerhafter Standardpreis über die gesamte Produktlebensdauer", "Als kurzfristiger Preis, z. B. beim Markteintritt (Penetration)", "Er wird in der Unternehmenspraxis nie tatsächlich eingesetzt"], correctIndex: 2, explanation: "Der optimale Preis (Penetrationspreis) markiert laut Vorlesung den Punkt mit dem geringsten Kaufwiderstand und damit dem Absatzmaximum. Er eignet sich deshalb besonders als kurzfristiger Preis, etwa beim Markteintritt im Rahmen einer Penetrationsstrategie." },
      { id: "q8", question: "Bei den gegebenen Beispieldaten (n = 10) liegt der Indifferenzpreis zwischen welchen beiden Preispunkten?", options: ["Zwischen 1,50 € und 1,75 €", "Zwischen 1,20 € und 1,50 €", "Zwischen 3,00 € und 3,50 €", "Zwischen 0,50 € und 0,80 €"], correctIndex: 0, explanation: "Im Beispiel mit n = 10 Befragten liegt der Indifferenzpreis laut Berechnung zwischen den benachbarten Preispunkten 1,50 € und 1,75 €, an denen sich die kumulierten Kurven 'teuer' und 'günstig' schneiden. Durch lineare Interpolation ergibt sich rund 1,69 €." },
      { id: "q9", question: "Bei den gegebenen Beispieldaten (n = 10) liegt der optimale Preis zwischen welchen beiden Preispunkten?", options: ["Zwischen 4,50 € und 5,00 €", "Zwischen 1,20 € und 1,50 €", "Zwischen 1,50 € und 1,75 €", "Zwischen 2,00 € und 2,50 €"], correctIndex: 1, explanation: "Im Beispiel mit n = 10 Befragten liegt der optimale Preis laut Berechnung zwischen den benachbarten Preispunkten 1,20 € und 1,50 €, an denen sich die kumulierten Kurven 'zu teuer' und 'zu günstig' schneiden. Durch lineare Interpolation ergibt sich rund 1,35 €." },
      { id: "q10", question: "Wie wird bei n = 10 Befragten die kumulierte Häufigkeitsverteilung für jede Kategorie gebildet?", options: ["In 10-%-Schritten nach aufsteigender Sortierung der Werte", "In festen 25-%-Schritten unabhängig von der Stichprobengröße", "In pauschalen 100-%-Schritten ohne weitere Zwischenwerte", "Zufällig und ohne jegliche feste Schrittweite oder Systematik"], correctIndex: 0, explanation: "Bei n = 10 Befragten wird die kumulierte Häufigkeitsverteilung laut Vorlesung in 10-%-Schritten (100/n) gebildet, nachdem die Werte jeder Kategorie zunächst aufsteigend sortiert wurden. Bei anderer Stichprobengröße ändert sich die Schrittweite entsprechend 100/n." }
    ]
  },
  {
    id: "vertrieb-preisdifferenzierung",
    chapter: 5,
    order: 3,
    title: "Preisdifferenzierung: Pigou-Grade und Implementierungsformen",
    icon: "🎯",
    summary: "Die Grundidee der Preisdifferenzierung, die drei Pigou-Grade, die sieben Implementierungsformen nach Diller/Herrmann, die sechs Differenzierungskriterien und das Reaktanz-Risiko.",
    explanation: [
      { type: "p", text: "Die Grundidee der Preisdifferenzierung besteht darin, den Preis nicht anhand eines objektivierten Leistungsniveaus, sondern anhand der individuellen Preisbereitschaft des Kunden zu setzen, um das durchschnittliche Preisniveau zu erhöhen. Da eine echte 1:1-Verhandlung mit jedem einzelnen Kunden in der Praxis selten realistisch ist, werden Kunden dazu homogen gruppiert." },
      { type: "p", text: "Nach Pigou lassen sich drei Grade der Preisdifferenzierung unterscheiden:" },
      { type: "list", items: [
        "1. Grades / perfekte Preisdifferenzierung: die Preisbereitschaft jedes einzelnen Kunden wird individuell abgeschöpft, die jeweils höchste Preisbereitschaft gewinnt. Beispiel: Auktionen, individuelle Verhandlungen.",
        "2. Grades: Preise sind abhängig von bestimmten Abnahmemengen bzw. -blöcken, Kunden selektieren sich selbst über die gewählte Menge. Beispiel: Mengenrabatt-Staffeln.",
        "3. Grades: unterschiedliche Preise nach beobachtbaren Dimensionen bzw. Kundengruppen, ethisch erklärbar und lässt sich kurzfristig nicht einfach ändern. Beispiel: Studierenden- oder Seniorenrabatte."
      ]},
      { type: "p", text: "Diller/Herrmann (2003) unterscheiden sieben konkrete Implementierungsformen der Preisdifferenzierung, die sich jeweils den Pigou-Graden zuordnen lassen:" },
      { type: "list", items: [
        "Mehr-Personen-Preisbildung (→ 2. Grad, z. B. Gruppentarif für den Museumsbesuch)",
        "Leistungsbezogene Preisdifferenzierung",
        "Mengenbezogene Preisdifferenzierung (→ 2. Grad)",
        "Preisbündelung (eine eigenständige Implementierungsform der Preisdifferenzierung — Details dazu in Kapitel 6)",
        "Personsbezogene Preisdifferenzierung (→ 3. Grad)",
        "Räumliche Preisdifferenzierung",
        "Zeitliche Preisdifferenzierung"
      ]},
      { type: "p", text: "Die Preisdifferenzierung kann anhand von sechs Differenzierungskriterien erfolgen: Kundenmerkmale, Regionen, Produkt-/Serviceeigenschaften, Vertriebskanäle, Zeit sowie Kaufmenge. Manche Kriterien kann der Kunde kurzfristig nicht ändern (z. B. Wohnregion, Studierendenstatus), andere kann er frei und schnell selbst wählen (z. B. die Kaufmenge)." },
      { type: "p", text: "Ein wesentliches Risiko der Preisdifferenzierung ist Reaktanz: Ist der Preis-Leistungs-Zusammenhang für den Kunden nicht nachvollziehbar — wirkt die Differenzierung also wie reine Ausnutzung der individuellen Zahlungsbereitschaft, etwa wenn Hotelpreise während einer Messe für das identische Zimmer stark vervielfacht werden — drohen Reaktanz (Widerstand/Ablehnung des Kunden) und ein langfristiger Kundenverlust." }
    ],
    exercises: [
      {
        id: "vertrieb-preisdifferenzierung-e1",
        prompt: "Erklären Sie die Grundidee der Preisdifferenzierung und warum Kunden dafür meist gruppiert statt einzeln verhandelt werden.",
        solution: [{ type: "p", text: "Die Grundidee der Preisdifferenzierung besteht darin, den Preis nicht anhand eines objektivierten Leistungsniveaus, sondern anhand der individuellen Preisbereitschaft des jeweiligen Kunden zu setzen, um so das durchschnittliche Preisniveau zu erhöhen und mehr von der vorhandenen Konsumentenrente abzuschöpfen. Da eine echte 1:1-Verhandlung mit jedem einzelnen Kunden in der Praxis kaum realistisch umsetzbar ist (zu aufwendig, zu intransparent), werden Kunden stattdessen zu homogenen Gruppen zusammengefasst, denen jeweils ein eigener Preis zugeordnet wird." }]
      },
      {
        id: "vertrieb-preisdifferenzierung-e2",
        prompt: "Beschreiben Sie die drei Pigou-Grade der Preisdifferenzierung mit je einem Beispiel.",
        solution: [{ type: "p", text: "Preisdifferenzierung 1. Grades (perfekte Preisdifferenzierung) schöpft die individuelle Preisbereitschaft jedes einzelnen Kunden ab, wobei die höchste Preisbereitschaft gewinnt — Beispiel: Auktionen oder individuelle Verhandlungen. Preisdifferenzierung 2. Grades knüpft die Preise an bestimmte Abnahmemengen bzw. -blöcke, wobei sich Kunden über ihre gewählte Menge selbst selektieren — Beispiel: Mengenrabatt-Staffeln. Preisdifferenzierung 3. Grades setzt unterschiedliche Preise nach beobachtbaren Dimensionen bzw. Kundengruppen an, ist ethisch erklärbar und lässt sich kurzfristig kaum ändern — Beispiel: Studierenden- oder Seniorenrabatte." }]
      },
      {
        id: "vertrieb-preisdifferenzierung-e3",
        prompt: "Nennen Sie die sieben Implementierungsformen der Preisdifferenzierung nach Diller/Herrmann und ordnen Sie, soweit im Kurs angegeben, den jeweiligen Pigou-Grad zu.",
        solution: [{ type: "p", text: "Die sieben Implementierungsformen sind: Mehr-Personen-Preisbildung (2. Grad), leistungsbezogene Preisdifferenzierung, mengenbezogene Preisdifferenzierung (2. Grad), Preisbündelung (eine eigenständige Implementierungsform, ausführlich in Kapitel 6 behandelt), personsbezogene Preisdifferenzierung (3. Grad), räumliche Preisdifferenzierung sowie zeitliche Preisdifferenzierung." }]
      },
      {
        id: "vertrieb-preisdifferenzierung-e4",
        prompt: "Nennen Sie die sechs Differenzierungskriterien der Preisdifferenzierung und erläutern Sie den Unterschied zwischen kurzfristig veränderbaren und nicht veränderbaren Kriterien anhand von Beispielen.",
        solution: [{ type: "p", text: "Die sechs Differenzierungskriterien sind Kundenmerkmale, Regionen, Produkt-/Serviceeigenschaften, Vertriebskanäle, Zeit und Kaufmenge. Manche dieser Kriterien kann der Kunde kurzfristig nicht ändern, z. B. seine Wohnregion oder seinen Studierendenstatus — diese Merkmale sind über einen längeren Zeitraum fix. Andere Kriterien kann der Kunde dagegen frei und schnell selbst wählen, z. B. die Kaufmenge, die er in einer bestimmten Kauftransaktion wählt." }]
      },
      {
        id: "vertrieb-preisdifferenzierung-e5",
        prompt: "Ein Hotel verlangt während einer großen Messe in der Stadt für das identische Zimmer ein Vielfaches des sonst üblichen Preises. Erläutern Sie anhand dieses Beispiels das Reaktanz-Risiko der Preisdifferenzierung.",
        solution: [{ type: "p", text: "Reaktanz entsteht, wenn der Preis-Leistungs-Zusammenhang für den Kunden nicht nachvollziehbar ist, die Preisdifferenzierung also wie reine Ausnutzung der individuellen bzw. situativen Zahlungsbereitschaft wirkt. Im Beispiel erhält der Kunde exakt dieselbe Leistung (identisches Zimmer) wie sonst auch, zahlt dafür aber ein Vielfaches — ohne erkennbaren Mehrwert. Dies wird vom Kunden häufig als unfair empfunden und kann zu Widerstand (Reaktanz) sowie langfristig zum Verlust dieses Kunden führen, selbst wenn er kurzfristig den überhöhten Preis zahlt, weil er keine Alternative hat." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Woran orientiert sich der Preis bei der Preisdifferenzierung anstelle eines objektivierten Leistungsniveaus?", options: ["An der individuellen Preisbereitschaft des Kunden", "Ausschließlich am jeweils niedrigsten verfügbaren Wettbewerbspreis", "An der zeitlichen Reihenfolge der eingegangenen Bestellungen", "Ausschließlich an den reinen Herstellkosten des Produkts"], correctIndex: 0, explanation: "Bei der Preisdifferenzierung orientiert sich der Preis laut Vorlesung nicht an einem objektivierten Leistungsniveau, sondern an der individuellen Preisbereitschaft des jeweiligen Kunden, um so das durchschnittliche Preisniveau zu erhöhen." },
      { id: "q2", question: "Welcher Pigou-Grad schöpft die individuelle Preisbereitschaft jedes einzelnen Kunden ab, z. B. bei Auktionen?", options: ["2. Grad", "3. Grad", "1. Grad", "4. Grad"], correctIndex: 2, explanation: "Preisdifferenzierung 1. Grades schöpft laut Pigou die individuelle Preisbereitschaft jedes einzelnen Kunden ab, wobei die jeweils höchste Preisbereitschaft gewinnt - typisches Beispiel sind Auktionen oder individuelle Verhandlungen." },
      { id: "q3", question: "Welcher Pigou-Grad liegt bei Mengenrabatt-Staffeln vor?", options: ["3. Grad", "2. Grad", "1. Grad", "Keiner der drei Grade"], correctIndex: 1, explanation: "Preisdifferenzierung 2. Grades knüpft die Preise laut Vorlesung an bestimmte Abnahmemengen bzw. -blöcke, wobei sich Kunden über die gewählte Menge selbst selektieren - typisches Beispiel sind Mengenrabatt-Staffeln." },
      { id: "q4", question: "Welcher Pigou-Grad liegt bei Studierendenrabatten vor?", options: ["1. Grad", "2. Grad", "0. Grad", "3. Grad"], correctIndex: 3, explanation: "Preisdifferenzierung 3. Grades setzt laut Vorlesung unterschiedliche Preise nach beobachtbaren Dimensionen bzw. Kundengruppen an, ist ethisch erklärbar und lässt sich kurzfristig nicht einfach ändern - typisches Beispiel sind Studierenden- oder Seniorenrabatte." },
      { id: "q5", question: "Welche der folgenden ist KEINE der sieben Implementierungsformen nach Diller/Herrmann?", options: ["Preisbündelung mehrerer Produkte zu einem Gesamtpreis", "Räumliche Preisdifferenzierung nach Regionen oder Ländern", "Preisdifferenzierung nach Aktienkurs", "Zeitliche Preisdifferenzierung nach Saison oder Tageszeit"], correctIndex: 2, explanation: "Die sieben Implementierungsformen nach Diller/Herrmann sind Mehr-Personen-Preisbildung, leistungsbezogene, mengenbezogene, personsbezogene, räumliche und zeitliche Preisdifferenzierung sowie Preisbündelung. Eine Differenzierung nach Aktienkurs wird nirgends genannt." },
      { id: "q6", question: "Zu welchem Kapitel des Kurses gehören die vertieften Details zur Preisbündelung?", options: ["Kapitel 6", "Kapitel 5", "Kapitel 7", "Kapitel 4"], correctIndex: 0, explanation: "Die vertieften Details zur Preisbündelung als eigenständiger Implementierungsform der Preisdifferenzierung werden laut Vorlesung in Kapitel 6 behandelt, während die grundlegende Einordnung bereits in diesem Kapitel erfolgt." },
      { id: "q7", question: "Welches ist KEINES der sechs genannten Differenzierungskriterien?", options: ["Kundenmerkmale wie Alter oder Status", "Kaufmenge bei einer einzelnen Transaktion", "Firmenlogo-Farbe", "Vertriebskanäle wie Online- oder Filialverkauf"], correctIndex: 2, explanation: "Die sechs genannten Differenzierungskriterien sind Kundenmerkmale, Regionen, Produkt-/Serviceeigenschaften, Vertriebskanäle, Zeit und Kaufmenge. Die Farbe des Firmenlogos wird in der Vorlesung nirgends als Differenzierungskriterium aufgeführt." },
      { id: "q8", question: "Welches Kriterium kann ein Kunde typischerweise am schnellsten selbst frei wählen?", options: ["Seine Wohnregion", "Sein Geburtsjahr", "Seinen Studierendenstatus", "Die Kaufmenge"], correctIndex: 3, explanation: "Die Kaufmenge kann ein Kunde laut Vorlesung bei jeder einzelnen Transaktion frei und kurzfristig selbst wählen. Merkmale wie Wohnregion, Geburtsjahr oder Studierendenstatus sind dagegen über einen längeren Zeitraum fix und nicht kurzfristig veränderbar." },
      { id: "q9", question: "Wann entsteht bei Preisdifferenzierung das Risiko der Reaktanz?", options: ["Nur bei ausschließlich mengenbezogener Preisdifferenzierung durch feste Staffelpreise", "Wenn der Preis-Leistungs-Zusammenhang für den Kunden nicht nachvollziehbar ist", "Wenn der Preis über alle Kundengruppen hinweg immer exakt gleich hoch ist", "Wenn Kunden grundsätzlich gar keine Preise miteinander vergleichen können"], correctIndex: 1, explanation: "Reaktanz entsteht laut Vorlesung, wenn der Preis-Leistungs-Zusammenhang für den Kunden nicht nachvollziehbar ist und die Differenzierung wie reine Ausnutzung der individuellen Zahlungsbereitschaft wirkt - etwa bei stark erhöhten Hotelpreisen für ein identisches Zimmer während einer Messe." },
      { id: "q10", question: "Was ist eine mögliche langfristige Folge von Reaktanz beim Kunden?", options: ["Kundenverlust", "Erhöhte Markentreue", "Keine Auswirkung", "Automatische Preisakzeptanz"], correctIndex: 0, explanation: "Eine mögliche langfristige Folge von Reaktanz ist laut Vorlesung der Verlust des betroffenen Kunden, selbst wenn dieser den überhöhten Preis kurzfristig zahlt, weil er keine Alternative hat. Reaktanz führt also nicht zu erhöhter Markentreue, sondern eher zu Widerstand." }
    ]
  }
];
