const BWL_STRANG_B_TOPICS = [
  {
    id: "b1-grundlagen-leistungserstellung",
    chapter: 2,
    order: 1,
    title: "Grundlagen betrieblicher Leistungserstellung",
    icon: "⚙️",
    summary: "Input, Throughput, Output: wie Produktionsfaktoren zu Sach- oder Dienstleistungen transformiert werden.",
    explanation: [
      { type: "p", text: "Betriebliche Leistungserstellung ist die Gesamtheit der Aktivitäten, mit denen Einsatzfaktoren (Input) über einen Transformationsprozess (Throughput) in Leistungen (Output) überführt werden. Wertschöpfung ist dabei die Differenz zwischen dem Marktwert der erstellten Leistung und dem Wert der bezogenen Vorleistungen." },
      { type: "p", text: "Der Transformationsprozess läuft auf mehreren Ebenen gleichzeitig ab: der Güterebene (Realgüterstrom, Materialfluss), der Finanzebene (Zahlungsströme zwischen Kunde, Produzent und Lieferant) und der Dispositionsebene (Planung/Entscheidung durch strategisches, taktisches und operatives Management, das die anderen Ebenen koordiniert)." },
      { type: "p", text: "Produktionsfaktoren (Input) lassen sich systematisieren in: Potenzialfaktoren (stellen Leistungsvermögen über mehrere Perioden bereit, z. B. Betriebsmittel, Arbeitskraft), Repetierfaktoren (werden im Prozess verbraucht, z. B. Werkstoffe, Energie), Objektfaktoren (vom Kunden selbst bereitgestellt, z. B. das zu behandelnde Fahrzeug oder der Patient) sowie zunehmend Informationen als eigener Produktionsfaktor." },
      { type: "p", text: "Bei der Kombination dieser Faktoren im Throughput unterscheidet man zwei Grundprinzipien:" },
      { type: "list", items: [
        "Substitutionalität: Faktoren können ohne festes Verhältnis gegeneinander ausgetauscht werden (total oder partiell), das Verhältnis von Faktoreinsatz zu Output ist gemäß Ertragsgesetz nicht linear.",
        "Limitationalität: Faktoren müssen in einem festen Verhältnis eingesetzt werden - z. B. 1 Tischplatte + 4 Tischbeine ergeben einen Tisch; mehr Platten allein erhöhen den Output nicht. Ertragssteigerung ist hier nur durch intensitätsmäßige, zeitliche oder mengenmäßige Anpassung möglich."
      ]},
      { type: "p", text: "Der Output unterscheidet sich grundlegend nach Sachgütern (materiell, lagerfähig, Produktion vor Kundenkonsum) und Dienstleistungen (immateriell, meist simultane Produktion und Konsum, hohe Kundenintegration). Zur Bewertung der Faktoreffizienz dienen Kennzahlensysteme: Wirtschaftlichkeit (Erträge/Aufwendungen), Produktivität (Output/Input-Mengenrelation), Rentabilität (Verzinsung des eingesetzten Kapitals) und Liquidität (Fähigkeit, Zahlungsverpflichtungen zu erfüllen) - häufig gebündelt in einem ROI-System (Return on Investment) als Spitzenkennzahl." },
      { type: "p", text: "Gesundheitsbezug: Mitarbeitende sind der zentrale Produktionsfaktor - ihre Leistungsfähigkeit ist ein beeinflussbares Potenzial. Betriebliches Gesundheitsmanagement setzt genau hier an der Input-Seite an (Qualifikation, Regeneration, Arbeitsfähigkeit) und wird auf der Output-Seite als mitproduziertes Ergebnis der Wertschöpfung verstanden - nicht als Zusatzprogramm. Wichtig: Limitationalität führt bei Engpässen (häufig: Personal) zu Zeitdruck und Überstunden - Engpassmanagement sollte daher immer mit Personalbemessung gekoppelt werden." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Zulieferer stellt Fahrradsättel her. Für jeden Sattel werden exakt 1 Sattelschale, 2 Federn und 4 Nieten benötigt - unabhängig von der Menge der übrigen Bauteile kann kein zusätzlicher Sattel produziert werden, wenn eines der Teile fehlt. Um welches Prinzip der Faktorkombination handelt es sich, und was folgt daraus für die Planung?",
        solution: [
          { type: "p", text: "Es handelt sich um Limitationalität (linear-limitationale Produktionsfunktion): Die Faktoren müssen in einem festen Mengenverhältnis eingesetzt werden. Konsequenz für die Planung: Der Engpassfaktor (das knappste Bauteil) bestimmt die maximal mögliche Produktionsmenge - eine Erhöhung der Ausbringungsmenge ist nur durch intensitätsmäßige, zeitliche oder mengenmäßige Anpassung (z. B. mehr Schichten, mehr Maschinen) möglich, nicht durch bloßes Aufstocken eines einzelnen Faktors." }
        ]
      },
      {
        id: "ex2",
        prompt: "Erklären Sie den Unterschied zwischen Produktivität und Rentabilität anhand eines Unternehmens, das mehr Stück pro Stunde produziert (höhere Produktivität), aber wegen gesunkener Verkaufspreise weniger Gewinn im Verhältnis zum eingesetzten Kapital erzielt.",
        solution: [
          { type: "p", text: "Die Produktivität (Output-Menge je eingesetzter Input-Menge) ist gestiegen, da mehr Stück pro Stunde produziert werden - eine rein mengenbezogene Kennzahl. Die Rentabilität (Verzinsung des eingesetzten Kapitals, z. B. Gewinn/Kapital) kann trotzdem sinken, weil sie wertmäßig ist und von den erzielten Preisen abhängt: Sinkende Verkaufspreise verringern den Gewinn, selbst wenn mengenmäßig mehr und effizienter produziert wird. Produktivität und Rentabilität können sich also gegenläufig entwickeln." }
        ]
      },
      {
        id: "ex3",
        prompt: "Ein Krankenhaus behandelt den Patienten selbst als 'Objektfaktor' im Produktionsprozess. Erläutern Sie, was diese Bezeichnung bedeutet und warum sie sich von Potenzial- und Repetierfaktoren unterscheidet.",
        solution: [
          { type: "p", text: "Ein Objektfaktor wird vom Kunden bzw. Abnehmer selbst in den Produktionsprozess eingebracht - beim Krankenhaus ist es der Patient, dessen Behandlung erst den eigentlichen Leistungserstellungsprozess auslöst. Anders als Potenzialfaktoren (z. B. medizinisches Gerät, das über mehrere Perioden Leistungsvermögen bereitstellt) oder Repetierfaktoren (z. B. Verbrauchsmaterial, das im Prozess aufgezehrt wird) stammt der Objektfaktor nicht aus der Disposition des Betriebs selbst, sondern wird von außen eingebracht und ist notwendige Voraussetzung für die Erstellung der Leistung." }
        ]
      },
      {
        id: "ex4",
        prompt: "Ein Unternehmen erhöht seine Wirtschaftlichkeit (Ertrag/Aufwand), indem es Materialkosten senkt - gleichzeitig sinkt aber die Liquidität, weil mehr Kapital in Vorräten gebunden bleibt, um von Mengenrabatten zu profitieren. Erklären Sie anhand dieses Beispiels, warum ein ROI-System als Spitzenkennzahl mehrere Einzelkennzahlen bündelt.",
        solution: [
          { type: "p", text: "Das Beispiel zeigt, dass Wirtschaftlichkeit, Rentabilität und Liquidität sich gegenläufig entwickeln können: Eine Verbesserung der Wirtschaftlichkeit durch Mengenrabatte kann gleichzeitig die Liquidität verschlechtern, wenn dafür mehr Kapital in Lagerbeständen gebunden wird. Ein isolierter Blick auf nur eine Kennzahl würde daher ein verzerrtes Bild liefern. Ein ROI-System als Spitzenkennzahl bündelt mehrere Kennzahlen (u. a. Wirtschaftlichkeit, Produktivität, Rentabilität) zu einem Gesamtbild, sodass Zielkonflikte zwischen den Einzelgrößen sichtbar und steuerbar werden, statt eine einzelne Kennzahl isoliert zu optimieren." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche drei Ebenen umfasst der Transformationsprozess der betrieblichen Leistungserstellung?", options: ["Angebots-, Nachfrage- und Preisebene", "Nur die Güterebene", "Güter-, Finanz- und Dispositionsebene", "Personal-, Kapital- und Bodenebene"], correctIndex: 2, explanation: "Materialfluss, Zahlungsfluss und die koordinierende Planungs-/Entscheidungsebene bilden zusammen den Transformationsprozess." },
      { id: "q2", question: "Ein Potenzialfaktor unterscheidet sich von einem Repetierfaktor dadurch, dass er...", options: ["nur bei Dienstleistungen vorkommt", "Leistungsvermögen über mehrere Perioden bereitstellt statt einmalig verbraucht zu werden", "im Produktionsprozess vollständig verbraucht wird", "niemals ersetzt werden muss"], correctIndex: 1, explanation: "Potenzialfaktoren wie Betriebsmittel oder Arbeitskraft stellen wiederholt nutzbares Leistungsvermögen bereit." },
      { id: "q3", question: "Limitationalität liegt vor, wenn...", options: ["Faktoren nur in einem festen Mengenverhältnis eingesetzt werden können", "nur ein einziger Faktor existiert", "Faktoren beliebig gegeneinander austauschbar sind", "der Output unabhängig vom Input ist"], correctIndex: 0, explanation: "Bei Limitationalität ist z. B. das Verhältnis Tischplatte zu Tischbeinen fest vorgegeben." },
      { id: "q4", question: "Welche Kennzahl misst die Verzinsung des eingesetzten Kapitals?", options: ["Rentabilität", "Wirtschaftlichkeit", "Produktivität", "Liquidität"], correctIndex: 0, explanation: "Rentabilität setzt Gewinn ins Verhältnis zu Kapital bzw. Umsatz." },
      { id: "q5", question: "Warum ist Arbeitskraft ein Produktionsfaktor mit 'Sonderstellung'?", options: ["Weil sie nie ausfällt", "Weil sie gesetzlich nicht reguliert ist", "Weil sie nur bei Dienstleistungen vorkommt", "Weil sie sowohl geistige (potenzialfaktorartige) als auch physische (eher verbrauchsnahe) Komponenten hat"], correctIndex: 3, explanation: "Arbeitskraft lässt sich nicht eindeutig nur einer Faktorkategorie zuordnen." },
      { id: "q6", question: "Betriebliches Gesundheitsmanagement setzt laut Vorlesung primär an...", options: ["ausschließlich der Finanzebene", "der Input-Seite, um den Potenzialfaktor Arbeitskraft zu stabilisieren", "gar keiner der Transformationsebenen", "der Output-Seite als reines Marketinginstrument"], correctIndex: 1, explanation: "BGM zielt auf Qualifikation, Regeneration und Arbeitsfähigkeit als Teil des Inputs 'Arbeitskraft'." },
      { id: "q7", question: "Ein Objektfaktor im Sinne der Produktionsfaktorsystematik ist...", options: ["identisch mit einem Repetierfaktor", "ein Synonym für Betriebsmittel", "ausschließlich bei Sachgütern relevant", "ein vom Kunden selbst bereitgestelltes Element, z. B. das zu reparierende Fahrzeug"], correctIndex: 3, explanation: "Objektfaktoren wie das Kundenfahrzeug oder der Patient werden vom Kunden eingebracht, nicht vom Betrieb disponiert." },
      { id: "q8", question: "Welche Aussage zum Ertragsgesetz bei Substitutionalität ist richtig?", options: ["Das Verhältnis von Faktoreinsatz zu Output ist stets exakt linear", "Substitutionalität schließt jede Form von Faktoraustausch aus", "Das Verhältnis von Faktoreinsatz zu Output ist gemäß Ertragsgesetz nicht linear", "Das Ertragsgesetz gilt nur für Limitationalität"], correctIndex: 2, explanation: "Bei Substitutionalität verläuft der Zusammenhang zwischen Faktoreinsatz und Output gemäß Ertragsgesetz nicht linear." },
      { id: "q9", question: "Welche der folgenden Aussagen zu Sachgütern und Dienstleistungen ist laut Vorlesung korrekt?", options: ["Sachgüter erfordern immer eine hohe Kundenintegration", "Sachgüter werden meist vor dem Kundenkonsum produziert, Dienstleistungen meist simultan zum Konsum", "Es gibt keinen Unterschied zwischen Sachgütern und Dienstleistungen im Output", "Dienstleistungen sind grundsätzlich lagerfähig wie Sachgüter"], correctIndex: 1, explanation: "Sachgüter sind materiell und lagerfähig, Dienstleistungen meist immateriell mit simultaner Produktion und Konsum." },
      { id: "q10", question: "Informationen werden in der Vorlesung als...", options: ["ausschließlich Teil der Repetierfaktoren gezählt", "nur bei der Finanzebene berücksichtigt", "zunehmend als eigener Produktionsfaktor betrachtet", "irrelevanter Nebenaspekt der Produktion bezeichnet"], correctIndex: 2, explanation: "Neben Potenzial-, Repetier- und Objektfaktoren gewinnen Informationen zunehmend an Bedeutung als eigenständiger Produktionsfaktor." }
    ]
  },
  {
    id: "b2-leistungstiefe",
    chapter: 2,
    order: 2,
    title: "Leistungstiefe (Make-or-Buy)",
    icon: "⚖️",
    summary: "Eigenfertigung oder Fremdbezug? Entscheidungskriterien, Instrumente und ein Fallbeispiel aus der Klinik-Verpflegung.",
    explanation: [
      { type: "p", text: "Die Leistungstiefe beschreibt den Anteil der selbst erbrachten Wertschöpfung im Verhältnis zu fremdbezogenen Vorleistungen. Die Make-or-Buy-Entscheidung folgt dabei dem Grundprinzip: 'Wir machen nur das, was wir besser können als andere.' Hohe Leistungstiefe bedeutet interne Kompetenz und Nähe zu Mitarbeitenden, aber höhere Fixkosten; geringe Leistungstiefe bedeutet externe Expertise und Flexibilität, aber ein Integrationsrisiko." },
      { type: "p", text: "Wichtige Entscheidungskriterien sind unter anderem der Zusammenhang zur Kernkompetenz (Kernkompetenz-nahe Leistungen tendenziell selbst erstellen), Höhe und Regelmäßigkeit des Bedarfs (Grundbedarf eher Eigenfertigung, sporadischer Bedarf eher Fremdbezug), Autonomie-/Abhängigkeitsrisiken (Know-how-Preisgabe beim Fremdbezug) sowie ein Kostenvergleich zwischen interner Herstellung und Marktpreis." },
      { type: "p", text: "Als Entscheidungsinstrumente dienen unter anderem die Break-even-Analyse (Vergleich von Fixkosten plus variablen Kosten der Eigenfertigung mit dem Bezugspreis, um die kritische Menge zu ermitteln), das Make-or-Buy-Portfolio (zwei Dimensionen: strategische Bedeutung × Beschaffungsrisiko) sowie die Nutzwertanalyse für komplexe Entscheidungen: Zunächst werden Mindestanforderungen definiert, dann erfolgt eine gewichtete Punktbewertung mehrerer Zielkriterien (Kosten, Qualität, Risiko, Kernkompetenz)." },
      { type: "p", text: "Die Transaktionskostentheorie liefert eine ökonomische Begründung: Marktkoordination (Fremdbezug) verursacht Transaktionskosten (Such-, Verhandlungs-, Kontrollkosten), interne Erstellung verursacht Koordinationskosten (Schnittstellen, Bürokratie). Bei hoher Spezifität der benötigten Leistung steigt das Risiko opportunistischen Verhaltens von Lieferanten - das spricht für Eigenfertigung; bei hoher Unsicherheit (schwankende Nachfrage/Technologie) bietet der Markt dagegen Flexibilitätsvorteile." },
      { type: "p", text: "Ein anschauliches Fallbeispiel ist die Patientenverpflegung einer fiktiven Klinik 'Zur wilden Wutz': Nach Qualitätsproblemen in Eigenregie (u. a. Norovirus-Ausbruch) steht die Entscheidung zwischen Eigenregie und drei möglichen Catering-Anbietern mit unterschiedlichem Profil (günstig und einfach vs. Spitzenqualität vs. lokal und im Aufbau) an - je nach gewähltem Szenario (Kostenminimierung, Attraktivierung, Sicherheit) fällt die Nutzwertanalyse unterschiedlich aus." },
      { type: "p", text: "Gesundheitsbezug: Die Entscheidung 'BGM intern aufbauen oder extern einkaufen' ist eine klassische Make-or-Buy-Frage. Bei hoher Spezifität (z. B. branchenspezifische Belastungsprofile) ist interne Kompetenzentwicklung vorzuziehen, bei hoher Unsicherheit kann externe Flexibilität sinnvoller sein - die Wahl der BGM-Organisationsform ist damit eine strategische Investitionsentscheidung, keine reine Kostenfrage." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Unternehmen kann ein Bauteil entweder selbst fertigen (Fixkosten 20.000€ pro Jahr, variable Kosten 8€/Stück) oder für 12€/Stück zukaufen. Ab welcher Stückzahl lohnt sich die Eigenfertigung (Break-even)?",
        solution: [
          { type: "p", text: "Gesamtkosten Eigenfertigung: $20.000 + 8x$. Gesamtkosten Fremdbezug: $12x$. Gleichsetzen: $20.000 + 8x = 12x \\Rightarrow 20.000 = 4x \\Rightarrow x = 5.000$ Stück." },
          { type: "p", text: "Ab einer Menge von 5.000 Stück pro Jahr ist die Eigenfertigung günstiger als der Fremdbezug; darunter lohnt sich der Zukauf." }
        ]
      },
      {
        id: "ex2",
        prompt: "Die Klinik 'Zur wilden Wutz' wählt Szenario III (Sicherheit) für ihre Patientenverpflegung. Welcher der drei Anbieter - 'Billig und Mies GmbH' (günstig, Standard), 'SchickiMicki GmbH' (Spitzenqualität, EFQM-Award) oder 'WbM GmbH' (lokal, im Aufbau) - würde in einer Nutzwertanalyse mit Fokus auf wirtschaftliche Sicherheit und Qualität/Sicherheit voraussichtlich am besten abschneiden, und warum?",
        solution: [
          { type: "p", text: "Voraussichtlich 'SchickiMicki GmbH': Als etablierter Anbieter mit Spitzenqualität und einem anerkannten Qualitätsaward (EFQM) bietet er die höchste Verlässlichkeit bei den Kriterien Qualität/Sicherheit und wirtschaftliche Stabilität - beides zentrale Kriterien im Sicherheits-Szenario. 'Billig und Mies GmbH' würde eher im Kostenszenario gewinnen, 'WbM GmbH' ist als im Aufbau befindlicher Anbieter mit höherem Risiko behaftet und würde eher in einem Szenario punkten, das lokale/regionale Aspekte stark gewichtet." }
        ]
      },
      {
        id: "ex3",
        prompt: "Warum spricht eine hohe Spezifität der benötigten Leistung (z. B. eine hochgradig maßgeschneiderte IT-Lösung) laut Transaktionskostentheorie eher für Eigenfertigung statt Fremdbezug?",
        solution: [
          { type: "p", text: "Bei hoher Spezifität ist die Leistung nur für einen bestimmten Abnehmer sinnvoll nutzbar. Das erhöht das Risiko, dass ein externer Lieferant nach getätigten spezifischen Investitionen seine Verhandlungsmacht opportunistisch ausnutzt ('Hold-up-Problem'). Um dieses Risiko zu vermeiden, wird die interne Erstellung (Eigenfertigung) trotz höherer Koordinationskosten oft bevorzugt." }
        ]
      },
      {
        id: "ex4",
        prompt: "Ein Unternehmen fertigt ein Bauteil selbst (Fixkosten 30.000€/Jahr, variable Kosten 10€/Stück) statt es für 16€/Stück zuzukaufen. Bei welcher Stückzahl liegt der Break-even, und was bedeutet das für eine geplante Jahresproduktion von 4.000 Stück?",
        solution: [
          { type: "formula", block: true, tex: "30.000 + 10x = 16x \\Rightarrow 30.000 = 6x \\Rightarrow x = 5.000 \\text{ St\\\"uck}" },
          { type: "p", text: "Der Break-even liegt bei 5.000 Stück. Bei einer geplanten Produktion von nur 4.000 Stück (unterhalb des Break-even) wäre der Fremdbezug günstiger als die Eigenfertigung." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was beschreibt die Leistungstiefe eines Unternehmens?", options: ["Den Anteil der selbst erbrachten Wertschöpfung im Verhältnis zu fremdbezogenen Vorleistungen", "Die Anzahl der Mitarbeitenden", "Die Anzahl der Produktionsstandorte", "Die Tiefe der Lagerhaltung"], correctIndex: 0, explanation: "Leistungstiefe misst, wie viel Wertschöpfung intern versus extern erfolgt." },
      { id: "q2", question: "Welches Instrument vergleicht Fixkosten und variable Kosten der Eigenfertigung mit dem Bezugspreis, um eine kritische Menge zu ermitteln?", options: ["Break-even-Analyse", "SWOT-Analyse", "ABC-Analyse", "Lorenzkurve"], correctIndex: 0, explanation: "Die Break-even-Analyse liefert die Menge, ab der Eigenfertigung günstiger ist als Fremdbezug." },
      { id: "q3", question: "Laut Transaktionskostentheorie spricht hohe Unsicherheit (z. B. schwankende Nachfrage) eher für...", options: ["Fremdbezug, wegen der Flexibilitätsvorteile des Marktes", "weder Eigenfertigung noch Fremdbezug", "Eigenfertigung, wegen besserer Kontrolle", "eine sofortige Betriebsschließung"], correctIndex: 0, explanation: "Bei hoher Unsicherheit bietet der Markt mehr Flexibilität als eine starre interne Struktur." },
      { id: "q4", question: "Welche Kriterien werden bei einer Nutzwertanalyse für Make-or-Buy-Entscheidungen typischerweise gewichtet bewertet?", options: ["Nur die Anzahl der Mitarbeitenden des Lieferanten", "Ausschließlich das Firmenalter des Anbieters", "Mehrere Zielkriterien wie Kosten, Qualität, Risiko und Kernkompetenz", "Nur der Preis"], correctIndex: 2, explanation: "Die Nutzwertanalyse erlaubt die Berücksichtigung mehrerer, unterschiedlich gewichteter Kriterien." },
      { id: "q5", question: "Warum ist die Entscheidung, ob BGM intern oder extern organisiert wird, laut Vorlesung keine reine Kostenfrage?", options: ["Weil externe Anbieter immer verboten sind", "Weil BGM gesetzlich immer intern sein muss", "Weil interne Lösungen immer günstiger sind", "Weil sie bestimmt, wie nachhaltig Leistungsfähigkeit und Wohlbefinden im Unternehmen verankert werden"], correctIndex: 3, explanation: "Die Wahl der BGM-Organisationsform ist eine strategische Investitionsentscheidung mit langfristiger Wirkung." },
      { id: "q6", question: "Ein 'Hold-up-Problem' im Kontext von Make-or-Buy entsteht vor allem bei...", options: ["vollständiger Eigenfertigung ohne externe Partner", "hoch spezifischen Leistungen, bei denen der Lieferant nachträglich Verhandlungsmacht ausnutzen kann", "sehr standardisierten, überall verfügbaren Leistungen", "sehr kurzfristigen Verträgen ohne jede Spezifität"], correctIndex: 1, explanation: "Spezifische Investitionen erhöhen die Abhängigkeit vom Lieferanten und damit das Opportunismusrisiko." },
      { id: "q7", question: "Das Make-or-Buy-Portfolio ordnet Entscheidungen entlang welcher zwei Dimensionen an?", options: ["Preis und Farbe", "Anzahl Mitarbeitende und Umsatz", "Lagerbestand und Lieferzeit", "Strategische Bedeutung und Beschaffungsrisiko"], correctIndex: 3, explanation: "Diese zwei Dimensionen strukturieren das Make-or-Buy-Portfolio." },
      { id: "q8", question: "Hohe Leistungstiefe bedeutet tendenziell...", options: ["immer den günstigsten Marktpreis", "mehr interne Kompetenz und Nähe zu Mitarbeitenden, aber höhere Fixkosten", "automatisch geringere Qualität", "niedrigere Fixkosten und weniger interne Kompetenz"], correctIndex: 1, explanation: "Mehr Eigenfertigung bringt Nähe und Kontrolle mit sich, aber auch höhere Fixkostenbelastung." },
      { id: "q9", question: "Bei der Nutzwertanalyse werden zunächst...", options: ["nur die Kosten verglichen", "ausschließlich juristische Aspekte geprüft", "Mindestanforderungen definiert, bevor eine gewichtete Punktbewertung erfolgt", "zufällige Punkte vergeben"], correctIndex: 2, explanation: "Erst Mindestanforderungen, dann gewichtete Bewertung mehrerer Kriterien." },
      { id: "q10", question: "Im Klinik-Beispiel würde 'Billig und Mies GmbH' voraussichtlich in welchem Szenario am besten abschneiden?", options: ["Attraktivierungs-Szenario mit Fokus auf Spitzenqualität", "Sicherheits-Szenario", "In keinem Szenario", "Kostenminimierungs-Szenario"], correctIndex: 3, explanation: "Als günstiger Standardanbieter passt dieser Anbieter am besten zu einem auf Kosten fokussierten Szenario." }
    ]
  },
  {
    id: "b3-beschaffungsmanagement",
    chapter: 2,
    order: 3,
    title: "Beschaffungsmanagement",
    icon: "📦",
    summary: "Beschaffungsobjekte, -ziele und der Zielkonflikt zwischen hohem Servicegrad und niedrigen Kosten.",
    explanation: [
      { type: "p", text: "Beschaffung umfasst im weiteren Sinne alle Maßnahmen zur Versorgung mit nicht selbst erstellten Produktionsfaktoren (Material, Dienstleistungen, Betriebsmittel, Personal, Informationen, Kapital), im engeren Sinne fokussiert sie auf Material und Dienstleistungen. Zu den Beschaffungsfunktionen zählen Bedarfsermittlung, Beschaffungsmarktforschung, Make-or-Buy-Entscheidungen, Lieferantenmanagement sowie die Bestellabwicklung selbst." },
      { type: "p", text: "Beschaffungsobjekte lassen sich unter anderem unterscheiden in Rohstoffe (hoher Mengen-/Wertanteil im Endprodukt), Hilfsstoffe (geringer Anteil, z. B. Nähgarn), Betriebsstoffe (nicht im Endprodukt enthalten, z. B. Schmierstoffe), Zulieferteile, Betriebsmittel (Maschinen/Anlagen) sowie Personal, Informationen und Kapital." },
      { type: "p", text: "Beschaffungsziele gliedern sich in Sachziele (Versorgungsziel: richtige Menge/Qualität/Zeit/Ort; Servicegrad: Verfügbarkeitswahrscheinlichkeit) und Formalziele (Wirtschaftlichkeitsziel: Minimierung der Beschaffungskosten; Risikoziel: Absicherung gegen Lieferausfälle; Nachhaltigkeitsziel: Umwelt- und Sozialstandards). Zwischen diesen Zielen bestehen typische Konflikte: Der Bedarfsträger wünscht einen hohen Servicegrad, das Management wünscht Kostensenkung - und die Kosten steigen mit zunehmendem Servicegrad überproportional (exponentiell) an." },
      { type: "p", text: "Wichtige Trends in der Beschaffung sind die Erhöhung des Zukaufanteils (Outsourcing), Single- bzw. Global Sourcing (große Volumina bei wenigen, weltweit ausgewählten Lieferanten), der Aufbau partnerschaftlicher Lieferantenbeziehungen sowie E-Procurement (elektronischer Einkauf über Internet-Plattformen)." },
      { type: "p", text: "Organisatorisch kann Beschaffung zentral (Bündelung von Anforderungen, einheitliche Rahmenverträge, aber geringere Bedarfsnähe), dezentral (Bedarfsdeckung direkt durch die Bedarfsträger, aber Gefahr inkonsistenter Standards) oder als Mischform mit Spezialisten-Struktur organisiert werden." },
      { type: "p", text: "Gesundheitsbezug: Beschaffung entscheidet über die Qualität von Arbeitsmitteln (Ergonomie, Sicherheit, technische Ausstattung) und ist damit ein struktureller Gesundheitsfaktor - Sparmaßnahmen im Einkauf können indirekt Gesundheitskosten erhöhen (z. B. durch billige, nicht-ergonomische Ausstattung). Ein hybrides Organisationsmodell (strategische Standards zentral, bedarfsspezifische Anpassung dezentral) wird empfohlen, um einheitliche ergonomische Mindeststandards mit Bedarfsnähe zu verbinden." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ordnen Sie folgende Beschaffungsobjekte korrekt zu: a) Stahlblech für eine Karosserie, b) Schmieröl für die Fertigungsmaschinen, c) eine neue Produktionsanlage, d) Nähgarn für die Textilproduktion.",
        solution: [
          { type: "list", items: [
            "Stahlblech: Rohstoff (hoher Mengen-/Wertanteil, unmittelbar im Endprodukt)",
            "Schmieröl: Betriebsstoff (nicht im Endprodukt enthalten, dient der Aufrechterhaltung des Betriebs)",
            "Produktionsanlage: Betriebsmittel",
            "Nähgarn: Hilfsstoff (im Endprodukt enthalten, aber geringer Mengen-/Wertanteil)"
          ]}
        ]
      },
      {
        id: "ex2",
        prompt: "Warum steigen die Kosten für einen höheren Servicegrad (Verfügbarkeitswahrscheinlichkeit) typischerweise nicht linear, sondern überproportional an, und welchen Zielkonflikt löst das aus?",
        solution: [
          { type: "p", text: "Um die letzten Prozentpunkte Verfügbarkeit abzusichern (z. B. von 98% auf 99,9%), sind unverhältnismäßig hohe zusätzliche Sicherheitsbestände, redundante Lieferanten oder Eillieferungen nötig - der Grenzaufwand steigt also mit zunehmendem Servicegrad stark an. Das erzeugt den klassischen Zielkonflikt zwischen dem Bedarfsträger, der möglichst nie einen Engpass erleben möchte (hoher Servicegrad), und dem Management, das die Beschaffungskosten möglichst niedrig halten möchte." }
        ]
      },
      {
        id: "ex3",
        prompt: "Nennen Sie je ein Beispiel für ein Sachziel und ein Formalziel der Beschaffung und erklären Sie den Unterschied.",
        solution: [
          { type: "p", text: "Sachziel-Beispiel: Versorgungsziel (richtige Menge, Qualität, Zeit, Ort). Formalziel-Beispiel: Wirtschaftlichkeitsziel (Minimierung der Beschaffungskosten). Sachziele betreffen den inhaltlichen Gegenstand der Beschaffung (was, wann, wie viel), während Formalziele übergeordnete wirtschaftliche oder risikobezogene Maßstäbe an das gesamte Beschaffungshandeln anlegen." }
        ]
      },
      {
        id: "ex4",
        prompt: "Ein Unternehmen entscheidet sich für dezentrale Beschaffung, um näher am tatsächlichen Bedarf der einzelnen Abteilungen zu sein. Welchen Nachteil nimmt es dafür in Kauf, und wie könnte ein hybrides Modell diesen Nachteil abmildern?",
        solution: [
          { type: "p", text: "Nachteil: Bei rein dezentraler Beschaffung droht die Gefahr inkonsistenter Standards (z. B. unterschiedliche Qualitäts- oder Ergonomieanforderungen je Abteilung) und geringere Verhandlungsmacht gegenüber Lieferanten, da Bedarfe nicht gebündelt werden. Ein hybrides Modell mildert das ab, indem strategische Standards (z. B. Mindestqualität, Rahmenverträge) zentral festgelegt werden, während die konkrete, bedarfsspezifische Bestellung dezentral bei den Abteilungen verbleibt." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welches Beschaffungsziel gehört zu den Formalzielen?", options: ["Wirtschaftlichkeitsziel (Kostenminimierung)", "Versorgungsziel (richtige Menge, Qualität, Zeit)", "Servicezeit", "Servicegrad"], correctIndex: 0, explanation: "Das Wirtschaftlichkeitsziel ist ein Formalziel; Versorgungsziel, Servicegrad und Servicezeit sind Sachziele." },
      { id: "q2", question: "Was beschreibt der Servicegrad in der Beschaffung?", options: ["Die Höhe der Lagerkosten", "Die Anzahl der Beschaffungsobjekte", "Die Freundlichkeit des Lieferanten", "Die Verfügbarkeitswahrscheinlichkeit eines Beschaffungsobjekts"], correctIndex: 3, explanation: "Der Servicegrad gibt an, mit welcher Wahrscheinlichkeit ein Bedarf gedeckt werden kann." },
      { id: "q3", question: "Zentrale Beschaffung bietet vor allem den Vorteil...", options: ["geringerer Verhandlungsmacht gegenüber Lieferanten", "höherer Bedarfsnähe der einzelnen Abteilungen", "einheitlicher Standards und gebündelter Anforderungen (z. B. Rahmenverträge)", "vollständiger Autonomie der Fachabteilungen"], correctIndex: 2, explanation: "Zentrale Beschaffung bündelt Bedarfe und ermöglicht einheitliche, oft günstigere Rahmenverträge." },
      { id: "q4", question: "Welcher Trend beschreibt den elektronischen Einkauf über Internet-Plattformen?", options: ["Single Sourcing", "E-Procurement", "Insourcing", "Just-in-Time"], correctIndex: 1, explanation: "E-Procurement bezeichnet digitale Beschaffungsprozesse über elektronische Plattformen." },
      { id: "q5", question: "Warum kann Sparen bei der Beschaffung von Arbeitsmitteln indirekt Gesundheitskosten erhöhen?", options: ["Weil Beschaffung nichts mit Gesundheit zu tun hat", "Weil teure Materialien gesetzlich verboten sind", "Weil billigere Materialien immer besser sind", "Weil nicht-ergonomische, minderwertige Ausstattung die Belastung der Mitarbeitenden erhöhen kann"], correctIndex: 3, explanation: "Schlechte Ausstattung (z. B. unergonomische Werkzeuge) kann Belastung und in der Folge Gesundheitskosten erhöhen." },
      { id: "q6", question: "Ein hybrides Beschaffungsmodell kombiniert...", options: ["zentrale strategische Standards mit dezentraler, bedarfsspezifischer Anpassung", "Beschaffung und Vertrieb in einer Abteilung", "nur dezentrale Elemente", "nur zentrale Elemente"], correctIndex: 0, explanation: "Das hybride Modell verbindet einheitliche Mindeststandards mit lokaler Flexibilität." },
      { id: "q7", question: "Welches Beschaffungsobjekt hat typischerweise einen geringen Mengen-/Wertanteil im Endprodukt, ist aber dennoch darin enthalten?", options: ["Rohstoff", "Hilfsstoff", "Kapital", "Betriebsmittel"], correctIndex: 1, explanation: "Hilfsstoffe wie Nähgarn sind im Endprodukt enthalten, aber mit geringem Mengen-/Wertanteil." },
      { id: "q8", question: "Global Sourcing bezeichnet...", options: ["den Verzicht auf jede Lieferantenbeziehung", "eine Form der Personalbeschaffung", "große Volumina bei wenigen, weltweit ausgewählten Lieferanten", "den Einkauf ausschließlich im Inland"], correctIndex: 2, explanation: "Global Sourcing bündelt Bedarfe international bei ausgewählten Lieferanten." },
      { id: "q9", question: "Der Zielkonflikt zwischen Bedarfsträger und Management in der Beschaffung besteht typischerweise zwischen...", options: ["Qualität und Nachhaltigkeit ausschließlich", "hohem Servicegrad und niedrigen Kosten", "Inland und Ausland", "Personal und Kapital"], correctIndex: 1, explanation: "Der Bedarfsträger wünscht hohe Verfügbarkeit, das Management niedrige Kosten - ein klassischer Zielkonflikt." },
      { id: "q10", question: "Welche Beschaffungsfunktion steht üblicherweise am Anfang des Beschaffungsprozesses?", options: ["Bedarfsermittlung", "Wareneingangskontrolle", "Bestellabwicklung", "Lieferantenmanagement"], correctIndex: 0, explanation: "Ohne Kenntnis des Bedarfs können die nachfolgenden Beschaffungsschritte nicht sinnvoll geplant werden." }
    ]
  },
  {
    id: "b4-bedarfsermittlung",
    chapter: 2,
    order: 4,
    title: "Bedarfsermittlung",
    icon: "🧮",
    summary: "Primär-, Sekundär- und Tertiärbedarf, Ermittlungsmethoden und die ABC-Analyse am Beispiel einer Backwarenproduktion.",
    explanation: [
      { type: "p", text: "Bei der Bedarfsermittlung unterscheidet man mehrere Bedarfsarten: Primärbedarf (Menge verkaufsfähiger Erzeugnisse gemäß Produktionsprogramm), Sekundärbedarf (Rohstoffe, Teile und Baugruppen zur Herstellung dieser Erzeugnisse) und Tertiärbedarf (abgeleiteter Bedarf an Hilfs- und Betriebsstoffen). Der Bruttobedarf ergibt sich aus Primärbedarf plus Sekundär-/Tertiärbedarf plus Ersatzteil- und Zusatzbedarf; der Nettobedarf ist der Bruttobedarf abzüglich Lagerbestand und bereits laufender Bestellungen, zuzüglich Vormerkbedarf." },
      { type: "p", text: "Zur Ermittlung des Bedarfs gibt es drei Ansätze: die programmorientierte Bedarfsermittlung (Ableitung aus dem Produktionsprogramm über Stücklisten, bei Gütern mit hohem Wertanteil), die verbrauchsorientierte Bedarfsermittlung (basierend auf historischem Verbrauch, bei geringerwertigen, gut vorhersehbaren Gütern) und die Schätzung als Notlösung, wenn beide anderen Methoden nicht greifen." },
      { type: "p", text: "Die ABC-Analyse klassifiziert Materialien nach ihrem Mengen-Wert-Verhältnis, um Dispositionsressourcen gezielt einzusetzen: A-Güter (typischerweise 10-20% der Menge, aber 60-80% des Werts) erhalten höchste Priorität, B-Güter mittleren Aufwand, C-Güter (60-80% der Menge, nur 5-10% des Werts) geringen Dispositionsaufwand. Das Vorgehen: Menge und Wert je Artikel erfassen, nach fallendem Wertanteil sortieren, kumulierte Wert- und Mengenanteile gegenüberstellen, Klassen bilden und grafisch als Lorenzkurve darstellen." },
      { type: "p", text: "Ein konkretes Beispiel aus einer Backwarenproduktion mit 16 Rohstoffarten (Mehl, Eier, Butter, Zucker, Marmeladen, Nüsse usw.) zeigt: Mehl und Eier allein machen als A-Güter bereits über 63% des Gesamtwerts aus, obwohl sie nur einen kleinen Teil der Artikelarten darstellen; Vanillezucker, Nüsse, Rosinen und andere C-Güter machen zwar 62,5% der Artikelarten, aber nur knapp 9% des Werts aus." },
      { type: "p", text: "Gesundheitsbezug: Präzise Personalbedarfsermittlung stabilisiert Prozesse - Fehlprognosen führen zu Belastungsspitzen in beide Richtungen: Unterdeckung erzeugt Überstunden, Zeitdruck und Stress; Überdeckung erzeugt Leerlauf und Motivationsverlust. Personal wird dabei explizit wie ein 'Sicherheitsbestand' behandelt: fehlende Personalpuffer erhöhen chronische Überlastung, während resiliente Personalplanung die Leistungsfähigkeit stabilisiert." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Eine Möbelfabrik plant, 500 Schränke zu produzieren (Primärbedarf). Für jeden Schrank werden 6 Bretter benötigt. Im Lager befinden sich bereits 400 Bretter, 200 sind zusätzlich bereits bestellt. Berechnen Sie Brutto- und Nettobedarf an Brettern.",
        solution: [
          { type: "p", text: "Bruttobedarf (Sekundärbedarf für die Bretter): $500 \\times 6 = 3.000$ Bretter." },
          { type: "p", text: "Nettobedarf: $3.000 - 400 \\text{ (Lager)} - 200 \\text{ (Bestellungen)} = 2.400$ Bretter, die noch zusätzlich beschafft werden müssen." }
        ]
      },
      {
        id: "ex2",
        prompt: "In der Backwaren-ABC-Analyse machen Mehl und Eier zusammen 63,13% des Gesamtwerts aus, obwohl sie nur 12,5% der 16 Rohstoffarten darstellen. Erklären Sie, was diese Diskrepanz für die Materialdisposition praktisch bedeutet.",
        solution: [
          { type: "p", text: "Mehl und Eier sind A-Güter: Obwohl sie nur einen kleinen Teil der Artikelvielfalt ausmachen, binden sie den mit Abstand größten Anteil des Materialwerts. Für die Disposition bedeutet das: Genau diese wenigen Artikel sollten besonders sorgfältig und häufig überwacht werden (z. B. präzise Bedarfsplanung, engmaschige Bestandskontrolle), während für die zahlreichen, aber wertmäßig unbedeutenden C-Güter (z. B. Vanillezucker, Muskat) ein einfacheres, weniger aufwendiges Dispositionsverfahren ausreicht." }
        ]
      },
      {
        id: "ex3",
        prompt: "Ein Unternehmen hat für ein Produkt einen Bruttobedarf von 8.000 Stück ermittelt. Im Lager sind noch 1.500 Stück vorhanden, 500 Stück sind bereits bestellt, und es gibt einen Vormerkbedarf von 300 Stück für eine Sonderaktion. Berechnen Sie den Nettobedarf.",
        solution: [
          { type: "formula", block: true, tex: "\\text{Nettobedarf} = 8.000 - 1.500 - 500 + 300 = 6.300 \\text{ St\\\"uck}" }
        ]
      },
      {
        id: "ex4",
        prompt: "Warum eignet sich die verbrauchsorientierte Bedarfsermittlung eher für C-Güter als für A-Güter?",
        solution: [
          { type: "p", text: "C-Güter haben einen geringen Wertanteil, sodass sich der höhere Planungsaufwand einer programmorientierten (stücklistenbasierten) Ermittlung nicht lohnt - eine einfache Fortschreibung des historischen Verbrauchs reicht aus. Bei A-Gütern mit hohem Wertanteil lohnt sich dagegen der genauere, aufwendigere programmorientierte Ansatz, da Fehleinschätzungen hier wertmäßig viel stärker ins Gewicht fallen." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Der Sekundärbedarf bezeichnet...", options: ["den bereits gedeckten Lagerbestand", "den Bedarf an Rohstoffen, Teilen und Baugruppen zur Herstellung der Enderzeugnisse", "nur den Bedarf an Hilfsstoffen", "die Menge verkaufsfähiger Enderzeugnisse"], correctIndex: 1, explanation: "Sekundärbedarf leitet sich aus dem Primärbedarf über die Stückliste ab." },
      { id: "q2", question: "Wie berechnet sich der Nettobedarf?", options: ["Primärbedarf mal Anzahl der Artikel", "Bruttobedarf minus Lagerbestand minus laufende Bestellungen plus Vormerkbedarf", "Bruttobedarf plus Lagerbestand", "Bruttobedarf geteilt durch die Anzahl der Perioden"], correctIndex: 1, explanation: "Der Nettobedarf berücksichtigt bereits vorhandene und zugesagte Mengen." },
      { id: "q3", question: "A-Güter in der ABC-Analyse zeichnen sich aus durch...", options: ["keinerlei Priorität in der Disposition", "hohen Mengenanteil, aber geringen Wertanteil", "geringen Mengenanteil, aber hohen Wertanteil", "gleich hohen Mengen- und Wertanteil"], correctIndex: 2, explanation: "A-Güter machen typischerweise nur 10-20% der Menge, aber 60-80% des Werts aus." },
      { id: "q4", question: "Welche Bedarfsermittlungsmethode basiert auf dem historischen Verbrauch?", options: ["Programmorientierte Bedarfsermittlung", "Nutzwertanalyse", "Deduktive Ermittlung", "Verbrauchsorientierte Bedarfsermittlung"], correctIndex: 3, explanation: "Die verbrauchsorientierte Methode nutzt Vergangenheitswerte zur Prognose." },
      { id: "q5", question: "Warum wird Personal in der Vorlesung explizit als 'Sicherheitsbestand' bezeichnet?", options: ["Weil fehlende Personalpuffer zu chronischer Überlastung führen können, ähnlich wie fehlende Sicherheitsbestände bei Material", "Weil Personal keine Rolle in der Bedarfsplanung spielt", "Weil Personal wie Lagerbestände eingelagert werden kann", "Weil Personal immer im Überfluss vorhanden ist"], correctIndex: 0, explanation: "Analog zu Materialbeständen wirken Personalpuffer stabilisierend gegen Belastungsspitzen." },
      { id: "q6", question: "Was ist der Hauptzweck der ABC-Analyse?", options: ["Alle Artikel gleich intensiv zu bearbeiten", "Lieferanten zu bewerten", "Knappe Dispositionsressourcen gezielt auf die wertmäßig bedeutsamsten Artikel zu konzentrieren", "Nur die Lagerhaltungskosten zu berechnen"], correctIndex: 2, explanation: "Die ABC-Analyse priorisiert die Materialdisposition nach Wertigkeit." },
      { id: "q7", question: "Der Tertiärbedarf bezieht sich auf...", options: ["Hilfs- und Betriebsstoffe", "die verkaufsfähigen Enderzeugnisse", "den Lagerbestand am Jahresende", "ausschließlich Personal"], correctIndex: 0, explanation: "Tertiärbedarf ist der abgeleitete Bedarf an Hilfs- und Betriebsstoffen." },
      { id: "q8", question: "Wie wird die ABC-Analyse grafisch typischerweise dargestellt?", options: ["Als Lorenzkurve (kumulierte Wert- vs. Mengenanteile)", "Als Histogramm", "Als Tortendiagramm", "Als Netzdiagramm"], correctIndex: 0, explanation: "Die kumulierten Anteile werden klassischerweise als Lorenzkurve dargestellt." },
      { id: "q9", question: "Eine Überdeckung bei der Personalbedarfsermittlung führt tendenziell zu...", options: ["Überstunden und Zeitdruck", "Leerlauf und Motivationsverlust", "keinen Auswirkungen", "höherer Produktivität automatisch"], correctIndex: 1, explanation: "Zu viel eingeplantes Personal führt zu Leerlaufzeiten, was die Motivation senken kann." },
      { id: "q10", question: "Programmorientierte Bedarfsermittlung stützt sich rechnerisch vor allem auf...", options: ["reine Schätzungen ohne Datengrundlage", "das Wetter", "nur die Lagerkapazität", "die Stückliste"], correctIndex: 3, explanation: "Über die Stückliste wird der Bedarf an Teilen/Baugruppen aus dem Produktionsprogramm abgeleitet." }
    ]
  },
  {
    id: "b5-lieferantenmanagement",
    chapter: 2,
    order: 5,
    title: "Lieferantenmanagement",
    icon: "🤝",
    summary: "Single- bis Modular Sourcing, Beziehungsebenen und wie Lieferanten systematisch bewertet werden.",
    explanation: [
      { type: "p", text: "Lieferantenmanagement gestaltet die Beziehung zwischen Abnehmer und Lieferant über deren gesamten Lebenszyklus - von vorausgewähltem über freigegebenen Lieferanten bis hin zu Abbruchkandidat oder gesperrtem Lieferanten. Die Beziehung selbst lässt sich auf mehreren Ebenen betrachten: der Wertebene (vertragliche/verfügungsrechtliche Beziehung), der flussbezogenen Ebene (Beschaffungsobjektfluss, Finanzfluss, Datenfluss) und der Ebene menschlichen Verhaltens (soziale Beziehungen zwischen den beteiligten Personen)." },
      { type: "p", text: "Bei der Anzahl der Lieferanten (Sourcing-Strategie) unterscheidet man:" },
      { type: "list", items: [
        "Single Sourcing: Konzentration auf einen Lieferanten - Vorteile sind Preiszugeständnisse und einfaches Qualitätsmanagement, Risiken sind Abhängigkeit und Lieferengpässe.",
        "Double Sourcing: zwei Lieferanten - ermöglicht Preisdruck und Leistungsvergleich, aber aufwendigeres Vertragsmanagement.",
        "Multiple Sourcing: mehrere Lieferanten zur Stimulierung von Wettbewerb und Erhöhung der Beschaffungssicherheit, z. B. über Klauseln, die maximale Auftragsanteile je Lieferant begrenzen (Risikoreduktion durch Streuung).",
        "Modular Sourcing: Systemlieferanten liefern ganze Baugruppen statt Einzelteile (z. B. eine komplette Fahrzeugfront) - erfordert enge Entwicklungspartnerschaften, verlagert aber auch mehr Risiko auf den Lieferanten."
      ]},
      { type: "p", text: "Zur Lieferantenbewertung dienen mehrere Instrumente: die Lieferantendatei (systematische Sammlung aller Informationen zu Qualität, Liefertreue, Finanzsituation), die ABC-Analyse der Lieferanten (Kategorisierung nach Bedeutung), die Punktbewertung/Scoring-Tabelle (Kriterien festlegen, gewichten, je Lieferant bepunkten und zu einem Gesamtnutzwert verrechnen) sowie das Qualitätsaudit (Verfahrens-, Produkt- oder System-Audit zur Überprüfung des Qualitätsmanagementsystems)." },
      { type: "p", text: "Gesundheitsbezug: Qualitätsmängel bei gelieferten Materialien erzeugen Mehrarbeit und Zusatzbelastung, Lieferverzögerungen erhöhen Engpassdruck und Überstunden. Die Auswahl ergonomischer und sicherer Produkte ist explizit eine Lieferantenentscheidung; langfristige Partnerschaften reduzieren operative Unsicherheit und psychische Belastung. Ein Abhängigkeitsrisiko besteht insbesondere bei Single Sourcing: fällt der einzige Lieferant aus, kann das zu extremer Belastung führen." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Automobilzulieferer bezieht komplette, vormontierte Türmodule (inklusive Fensterheber, Verkabelung, Verkleidung) von einem einzigen Systemlieferanten, statt jedes Einzelteil separat einzukaufen. Welche Sourcing-Strategie liegt hier vor, und welche Voraussetzung muss dafür erfüllt sein?",
        solution: [
          { type: "p", text: "Es handelt sich um Modular Sourcing: Statt Einzelteile wird eine ganze, funktionsfertige Baugruppe von einem Systemlieferanten bezogen. Voraussetzung ist eine enge Entwicklungspartnerschaft zwischen Abnehmer und Lieferant, da der Lieferant ein höheres Entwicklungs-, Fertigungs- und Qualitätsrisiko trägt." }
        ]
      },
      {
        id: "ex2",
        prompt: "Ein Unternehmen bezieht ein kritisches Bauteil ausschließlich von einem einzigen Lieferanten (Single Sourcing), weil dieser die günstigsten Preise bietet. Welches zentrale Risiko geht das Unternehmen damit ein, und wie könnte es dieses Risiko im Sinne des Lieferantenmanagements reduzieren?",
        solution: [
          { type: "p", text: "Zentrales Risiko: Abhängigkeit vom einzigen Lieferanten - fällt dieser aus (z. B. durch Insolvenz, Produktionsausfall oder Naturkatastrophe), entsteht sofort ein Versorgungsengpass ohne Alternative. Reduzierung möglich z. B. durch Übergang zu Double oder Multiple Sourcing (Streuung des Risikos auf mehrere Lieferanten), auch wenn das tendenziell höhere Stückkosten und mehr Koordinationsaufwand bedeutet - ein klassischer Zielkonflikt zwischen Kosten und Versorgungssicherheit." }
        ]
      },
      {
        id: "ex3",
        prompt: "Ein neuer Lieferant wird zunächst als 'vorausgewählter Lieferant' geführt. Beschreiben Sie die möglichen weiteren Phasen der Lieferanten-Abnehmer-Beziehung, die anschließend durchlaufen werden können.",
        solution: [
          { type: "p", text: "Nach der Vorauswahl kann der Lieferant zum Aufbaulieferant werden (ggf. mit Maßnahmen der Lieferantenförderung), danach zum freigegebenen Lieferanten mit regelmäßiger Lieferbeziehung aufsteigen. Bei Problemen kann er zum Abbruchkandidat werden (bis zur endgültigen Beendigung der Beziehung) oder im schlimmsten Fall dauerhaft oder temporär gesperrt werden." }
        ]
      },
      {
        id: "ex4",
        prompt: "Erklären Sie den Unterschied zwischen der 'flussbezogenen Ebene' und der 'Ebene menschlichen Verhaltens' der Lieferanten-Abnehmer-Beziehung.",
        solution: [
          { type: "p", text: "Die flussbezogene Ebene betrachtet die konkreten Ströme zwischen den Parteien: Beschaffungsobjektfluss (Warenlieferung), Finanzfluss (Zahlungen) und Datenfluss (Informationsaustausch). Die Ebene menschlichen Verhaltens betrachtet dagegen die sozialen Beziehungen zwischen den beteiligten Personen beider Organisationen - also z. B. Vertrauen, Kommunikationsstil und persönliche Zusammenarbeit, die über die reinen Waren-/Geld-/Datenströme hinausgeht." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche Sourcing-Strategie konzentriert sich bewusst auf genau einen Lieferanten?", options: ["Modular Sourcing", "Single Sourcing", "Double Sourcing", "Multiple Sourcing"], correctIndex: 1, explanation: "Single Sourcing bedeutet die Beschränkung auf einen einzigen Lieferanten." },
      { id: "q2", question: "Der größte Nachteil von Single Sourcing ist:", options: ["fehlende Möglichkeit zur Qualitätskontrolle", "zu hoher Koordinationsaufwand mit vielen Lieferanten", "hohe Abhängigkeit und Risiko bei Lieferausfall", "zu geringe Preiszugeständnisse"], correctIndex: 2, explanation: "Die Konzentration auf einen Lieferanten erhöht das Abhängigkeitsrisiko erheblich." },
      { id: "q3", question: "Ein Qualitätsaudit als Bewertungsinstrument kann sich beziehen auf...", options: ["die Anzahl der Mitarbeitenden des Lieferanten", "nur auf den Preis eines Lieferanten", "Verfahren, Produkte oder das gesamte Qualitätsmanagementsystem", "ausschließlich die Finanzberichte des Lieferanten"], correctIndex: 2, explanation: "Verfahrens-, Produkt- und System-Audit sind die drei genannten Auditarten." },
      { id: "q4", question: "Die 'Wertebene' der Lieferanten-Abnehmer-Beziehung bezieht sich vor allem auf...", options: ["die vertragliche/verfügungsrechtliche Beziehung zwischen den Parteien", "die persönliche Sympathie zwischen Einkäufern", "die Werbung des Lieferanten", "nur den physischen Warenfluss"], correctIndex: 0, explanation: "Die Wertebene betrachtet Verfügungsrechte, Verträge und Zusicherungen." },
      { id: "q5", question: "Modular Sourcing setzt typischerweise voraus...", options: ["eine enge Entwicklungspartnerschaft mit dem Systemlieferanten", "den vollständigen Verzicht auf Lieferantenbewertung", "möglichst viele unabhängige Einzellieferanten", "ausschließlich Lagerproduktion"], correctIndex: 0, explanation: "Da der Lieferant komplette Baugruppen entwickelt und liefert, ist eine enge Partnerschaft nötig." },
      { id: "q6", question: "Warum ist die Wahl ergonomischer, sicherer Produkte laut Vorlesung explizit eine Lieferantenentscheidung mit Gesundheitsbezug?", options: ["Weil ergonomische Produkte immer teurer sind", "Weil die gelieferten Materialien/Arbeitsmittel unmittelbar die Belastung der Mitarbeitenden beeinflussen", "Weil Lieferanten keinen Einfluss auf Arbeitsbedingungen haben", "Weil das nur die Personalabteilung betrifft"], correctIndex: 1, explanation: "Die Qualität der bezogenen Arbeitsmittel wirkt sich direkt auf Sicherheit und Belastung am Arbeitsplatz aus." },
      { id: "q7", question: "Double Sourcing bedeutet im Vergleich zu Single Sourcing...", options: ["Konzentration auf einen Lieferanten", "ausschließlich internationale Lieferanten", "den vollständigen Verzicht auf Lieferantenauswahl", "Verteilung des Bedarfs auf zwei Lieferanten, was Preisvergleich ermöglicht, aber mehr Aufwand erzeugt"], correctIndex: 3, explanation: "Zwei Lieferanten ermöglichen Wettbewerb, erhöhen aber Vertragsmanagement-Aufwand." },
      { id: "q8", question: "Die Lieferantendatei dient vor allem dazu...", options: ["den Beschaffungspreis festzulegen", "Informationen zu Qualität, Liefertreue und Finanzsituation systematisch zu sammeln", "ausschließlich Kontaktdaten zu speichern", "Lieferanten automatisch zu sperren"], correctIndex: 1, explanation: "Sie bündelt alle relevanten Bewertungsinformationen zu einem Lieferanten." },
      { id: "q9", question: "Ein 'Abbruchkandidat' in der Lieferanten-Lebenszyklus-Phase ist ein Lieferant, der...", options: ["auf dem Weg zur endgültigen Beendigung der Lieferbeziehung ist", "gerade erst vorausgewählt wurde", "automatisch wieder freigegeben wird", "der wichtigste strategische Partner ist"], correctIndex: 0, explanation: "Der Abbruchkandidat-Status markiert das Ende einer Lieferbeziehung." },
      { id: "q10", question: "Welche Sourcing-Strategie zielt explizit auf die Stimulierung von Wettbewerb zwischen mehreren Lieferanten ab?", options: ["Modular Sourcing ausschließlich", "Single Sourcing", "keine der genannten", "Multiple Sourcing"], correctIndex: 3, explanation: "Multiple Sourcing verteilt den Bedarf bewusst auf mehrere Lieferanten, um Wettbewerb zu fördern." }
    ]
  },
  {
    id: "b6-bestellmanagement",
    chapter: 2,
    order: 6,
    title: "Bestellmanagement",
    icon: "🛒",
    summary: "Bestandsgrenzen, optimale Bestellmenge und die Wahl zwischen Bestellpunkt- und Bestellrhythmusverfahren.",
    explanation: [
      { type: "p", text: "Bestellmanagement löst das Grundproblem, dass Bedarfsmenge, Bestellmenge und Liefermenge selten exakt übereinstimmen. Der Lagerbestand überbrückt dabei die Zeitdifferenz zwischen Bestellung und Lieferung - mit einem klassischen Zielkonflikt zwischen Versorgungssicherheit und Kapitalbindung. Drei Bestandsgrenzen sind zentral:" },
      { type: "list", items: [
        "Mindestbestand (Sicherheitsbestand): deckt externe (Lieferstörungen) und interne (unerwarteter Mehrbedarf) Risikofaktoren ab.",
        "Meldebestand: Mindestbestand plus erwarteter Verbrauch während der Wiederbeschaffungszeit - bei Erreichen wird eine neue Bestellung ausgelöst.",
        "Höchstbestand: Obergrenze, begrenzt durch Raum-/Kapitalkosten und physische Lagerkapazität."
      ]},
      { type: "p", text: "Bei der Bestellmengenentscheidung stehen sich bestellfixe Kosten (mengenunabhängig: Administration, Wareneingang - sinken pro Stück bei größeren Bestellungen) und bestellvariable Kosten (Zinskosten für gebundenes Kapital, Lagerhaltungskosten - steigen mit der Bestellmenge) gegenüber. Die optimale Bestellmenge minimiert die Summe aus beiden Kostenarten - berechenbar über die Andlersche Formel:" },
      { type: "formula", block: true, tex: "q^{*} = \\sqrt{\\frac{2 \\cdot D \\cdot K_{fix}}{h \\cdot p}}" },
      { type: "p", text: "wobei $D$ der Periodenbedarf, $K_{fix}$ die bestellfixen Kosten je Bestellung, $h$ der Lagerhaltungskostensatz und $p$ der Preis pro Stück ist. Die optimale Bestellmenge ist hoch bei hohen bestellfixen Kosten und hohem Periodenbedarf, aber niedrig bei hohem Zins-/Lagerhaltungskostensatz und hohen Preisen." },
      { type: "p", text: "Da die exakte Optimierung aufwendig ist, arbeitet die Praxis meist mit Bestellpolitiken: dem Bestellpunktverfahren (mengengesteuert - bei Unterschreiten des Meldebestands wird bestellt) oder dem Bestellrhythmusverfahren (zeitgesteuert - feste Bestellzeitpunkte). Zur Auswahl der passenden Politik hilft die XYZ-Analyse: X-Güter (regelmäßiger, gut vorhersehbarer Verbrauch), Y-Güter (saisonaler Verbrauch) und Z-Güter (unregelmäßiger, kaum vorhersehbarer Verbrauch)." },
      { type: "p", text: "Gesundheitsbezug: Fehlbestellungen erzeugen Engpassdruck, Zeitdruck und Improvisation. Just-in-Time-Strategien erhöhen zwar die Effizienz, aber auch die Stressanfälligkeit bei Störungen, während Rahmenverträge durch planbare Versorgung die operative Belastung reduzieren. Digitalisierung im Bestellwesen wirkt doppelt: Automatisierung entlastet von Routinetätigkeiten, aber Systemfehler und permanente Echtzeitkontrolle können 'digitalen Stress' erzeugen." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Unternehmen benötigt pro Jahr 10.000 Stück eines Artikels ($D = 10.000$). Die bestellfixen Kosten je Bestellung betragen $K_{fix} = 50$€, der Lagerhaltungskostensatz $h = 0{,}2$ (20% des Stückpreises pro Jahr) und der Stückpreis $p = 25$€. Berechnen Sie die optimale Bestellmenge nach der Andlerschen Formel.",
        solution: [
          { type: "formula", block: true, tex: "q^{*} = \\sqrt{\\frac{2 \\cdot 10.000 \\cdot 50}{0{,}2 \\cdot 25}} = \\sqrt{\\frac{1.000.000}{5}} = \\sqrt{200.000} \\approx 447 \\text{ St\\\"uck}" },
          { type: "p", text: "Die optimale Bestellmenge liegt bei rund 447 Stück je Bestellung." }
        ]
      },
      {
        id: "ex2",
        prompt: "Ein Artikel wird sehr unregelmäßig und schwer vorhersehbar nachgefragt (z. B. ein selten benötigtes Ersatzteil). Welcher XYZ-Klasse gehört er an, und welche Konsequenz hat das für die Wahl der Bestellpolitik im Vergleich zu einem regelmäßig verbrauchten Artikel?",
        solution: [
          { type: "p", text: "Der Artikel gehört zur Z-Klasse (unregelmäßiger, kaum vorhersehbarer Verbrauch). Für Z-Güter eignet sich eher ein bedarfs- bzw. mengengesteuertes Verfahren (Bestellpunktverfahren) mit ausreichendem Sicherheitsbestand, da feste Zeitintervalle (Bestellrhythmusverfahren) bei stark schwankendem Bedarf zu häufigen Fehlmengen oder unnötig hohen Lagerbeständen führen würden. X-Güter mit regelmäßigem Verbrauch eignen sich dagegen gut für ein einfaches, planbares Bestellrhythmusverfahren." }
        ]
      },
      {
        id: "ex3",
        prompt: "Wie verändert sich die optimale Bestellmenge nach der Andlerschen Formel, wenn die bestellfixen Kosten $K_{fix}$ von 50€ auf 200€ steigen (alle anderen Werte wie im ursprünglichen Beispiel: $D=10.000$, $h=0{,}2$, $p=25$€ bleiben gleich)?",
        solution: [
          { type: "formula", block: true, tex: "q^{*} = \\sqrt{\\frac{2 \\cdot 10.000 \\cdot 200}{0{,}2 \\cdot 25}} = \\sqrt{\\frac{4.000.000}{5}} = \\sqrt{800.000} \\approx 894 \\text{ St\\\"uck}" },
          { type: "p", text: "Die optimale Bestellmenge steigt von rund 447 auf etwa 894 Stück - eine Vervierfachung der bestellfixen Kosten führt (wegen der Quadratwurzel) zu einer Verdopplung der optimalen Bestellmenge." }
        ]
      },
      {
        id: "ex4",
        prompt: "Erklären Sie, warum Meldebestand und Mindestbestand nicht dasselbe sind.",
        solution: [
          { type: "p", text: "Der Mindestbestand (Sicherheitsbestand) deckt nur die Risikofaktoren ab (z. B. Lieferstörungen, unerwarteter Mehrbedarf). Der Meldebestand ist dagegen größer: er setzt sich aus dem Mindestbestand PLUS dem erwarteten Verbrauch während der Wiederbeschaffungszeit zusammen - also der Menge, die zwischen Bestellauslösung und Wareneingang voraussichtlich noch verbraucht wird. Bei Erreichen des (höheren) Meldebestands wird die neue Bestellung ausgelöst, damit der Mindestbestand bis zum Eintreffen der Lieferung nicht unterschritten wird." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Der Meldebestand ist definiert als...", options: ["Mindestbestand plus Verbrauch während der Wiederbeschaffungszeit", "der niedrigste jemals erreichte Lagerbestand", "die maximale Lagerkapazität", "identisch mit dem Höchstbestand"], correctIndex: 0, explanation: "Bei Erreichen des Meldebestands muss spätestens eine neue Bestellung ausgelöst werden." },
      { id: "q2", question: "Bestellfixe Kosten sind Kosten, die...", options: ["nur bei sehr großen Bestellungen entstehen", "identisch mit Lagerhaltungskosten sind", "mit der Bestellmenge linear steigen", "unabhängig von der Bestellmenge anfallen (z. B. Administration)"], correctIndex: 3, explanation: "Bestellfixe Kosten fallen pro Bestellvorgang an, unabhängig von der bestellten Menge." },
      { id: "q3", question: "Die Andlersche Formel dient zur Berechnung...", options: ["der optimalen Bestellmenge", "des Meldebestands", "des Gini-Koeffizienten", "der Servicegrad-Kosten-Kurve"], correctIndex: 0, explanation: "Sie minimiert die Summe aus bestellfixen und bestellvariablen Kosten." },
      { id: "q4", question: "Das Bestellpunktverfahren ist...", options: ["mengengesteuert - Bestellung bei Unterschreiten des Meldebestands", "nur für Dienstleistungen anwendbar", "identisch mit dem Bestellrhythmusverfahren", "zeitgesteuert mit festen Bestellterminen"], correctIndex: 0, explanation: "Das Bestellpunktverfahren reagiert auf den Lagerbestand, nicht auf feste Zeitpunkte." },
      { id: "q5", question: "Die XYZ-Analyse klassifiziert Materialien nach...", options: ["ihrem Herkunftsland", "ihrem Wertanteil", "ihrer Lagertemperatur", "der Vorhersehbarkeit/Regelmäßigkeit ihres Verbrauchs"], correctIndex: 3, explanation: "X = regelmäßig, Y = saisonal, Z = unregelmäßig - jeweils bezogen auf die Verbrauchsvorhersehbarkeit." },
      { id: "q6", question: "Warum kann Digitalisierung im Bestellwesen laut Vorlesung 'digitalen Stress' erzeugen?", options: ["Weil Digitalisierung immer die Kosten senkt, ohne Nachteile", "Weil permanente Echtzeitkontrolle und mögliche Systemfehler psychischen Druck erhöhen können, trotz Entlastung bei Routinetätigkeiten", "Weil digitale Bestellungen gesetzlich verboten sind", "Weil digitale Systeme nie Fehler haben"], correctIndex: 1, explanation: "Digitalisierung wirkt zweischneidig: Entlastung bei Routine, aber neue Belastung durch Kontrolle und Störanfälligkeit." },
      { id: "q7", question: "Der Höchstbestand wird vor allem begrenzt durch...", options: ["den Meldebestand", "Raum-/Kapitalkosten und physische Lagerkapazität", "die Anzahl der Lieferanten", "das Bestellrhythmusverfahren"], correctIndex: 1, explanation: "Kapazitäts- und Kostenschranken setzen dem Lagerbestand eine Obergrenze." },
      { id: "q8", question: "Bestellvariable Kosten verhalten sich wie?", options: ["Sie sinken immer mit steigender Menge", "Sie existieren nur bei Dienstleistungen", "Sie steigen mit der Bestellmenge (z. B. Zins-/Lagerhaltungskosten)", "Sie sind unabhängig von der Bestellmenge"], correctIndex: 2, explanation: "Je mehr auf einmal bestellt wird, desto höher die Kapitalbindung und Lagerhaltungskosten." },
      { id: "q9", question: "Just-in-Time-Strategien erhöhen laut Vorlesung typischerweise...", options: ["ausschließlich die Sicherheit der Versorgung", "die Lagerbestände", "die Effizienz, aber auch die Stressanfälligkeit bei Störungen", "nur die Kosten ohne jeden Vorteil"], correctIndex: 2, explanation: "JIT reduziert Lagerkosten, macht den Prozess aber störanfälliger." },
      { id: "q10", question: "Y-Güter in der XYZ-Analyse zeichnen sich aus durch...", options: ["regelmäßigen, gut vorhersehbaren Verbrauch", "keinerlei Verbrauch", "saisonalen Verbrauch", "völlig unregelmäßigen, unvorhersehbaren Verbrauch"], correctIndex: 2, explanation: "Y-Güter liegen zwischen den gut vorhersehbaren X-Gütern und den unregelmäßigen Z-Gütern." }
    ]
  },
  {
    id: "b7-grundlagen-produktion",
    chapter: 2,
    order: 7,
    title: "Grundlagen Produktion",
    icon: "🏭",
    summary: "Das Gesetz von Little (Durchlaufzeit, Bestand, Output-Rate) und die wichtigsten Produktionstypen.",
    explanation: [
      { type: "p", text: "Produktionsprozesse lassen sich über drei zentrale Prozesskennzahlen beschreiben: die Durchlaufzeit $T$ (Zeit, die ein Input braucht, um den Prozess als Output zu verlassen), die Output-Rate $R$ (Menge, die den Prozess je Zeiteinheit verlässt, auch Durchsatz genannt) und den Bestand $I$ (Menge/Wert der Einheiten, die sich aktuell im Prozess befinden)." },
      { type: "p", text: "Diese drei Größen stehen über das Gesetz von Little in einem festen Zusammenhang:" },
      { type: "formula", block: true, tex: "I = R \\cdot T \\qquad \\text{bzw. } T = \\frac{I}{R}" },
      { type: "p", text: "Ein Restaurant verarbeitet beispielsweise 3.000 kg Kalbfleisch pro Woche ($R$) bei einem durchschnittlichen Fleischbestand von 1.500 kg ($I$) - die Durchlaufzeit eines Kilogramms Fleisch beträgt damit $T = I/R = 1.500/3.000 = 0{,}5$ Wochen, also 3,5 Tage. Eine Zahnklinik behandelt 120 Patienten in 10 Stunden ($R = 12$ Patienten/Stunde) bei durchschnittlich 15 Patienten im System ($I = 15$) - die Durchlaufzeit beträgt $T = 15/12 = 1{,}25$ Stunden, also 75 Minuten." },
      { type: "p", text: "Produktionstypen lassen sich nach dem Output klassifizieren: nach der Erzeugnisstruktur (linear, konvergierend, divergierend, generell), nach der Auflagengröße (Massenproduktion - zeitlich unbegrenzte Großmengen; Serienproduktion - identische Erzeugnisse für begrenzte Zeit; Sortenproduktion - Varianten eines Grundprodukts; Einzelproduktion - individuelle Einzelstücke) sowie nach dem Bezug zum Absatzmarkt (Kundenauftragsproduktion vs. Lagerproduktion vs. auftragsbezogene Fertigstellung)." },
      { type: "p", text: "Bei den Organisationstypen unterscheidet man das Funktionsprinzip (Verrichtungsprinzip: gleichartige Arbeitssysteme werden räumlich zusammengefasst) vom Objektprinzip (Zusammenfassung aller Arbeitsgänge zur Rundumbearbeitung eines Objekts)." },
      { type: "p", text: "Gesundheitsbezug: Fließfertigung (taktgebundene Arbeit) kann monotone Belastung erzeugen, während Werkstattfertigung höhere Autonomie, aber auch höhere Koordinationsanforderungen mit sich bringt. Dauerhafte Überauslastung ohne Pufferkapazitäten führt zu chronischer Überforderung und Burnout-Risiko - Pufferkapazitäten reduzieren Belastungsspitzen und Fehlerquote, während Überstunden nur eine kurzfristige, langfristig gesundheitlich riskante Lösung darstellen." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Aluminiumwerk hat einen durchschnittlichen Bestand (gebundenes Kapital) von 10 Mio. €. Die jährlichen Gesamtkosten (Rohstoff + Produktion) betragen 40 Mio. €. Berechnen Sie mit dem Gesetz von Little die durchschnittliche Kapitalbindungsdauer eines Euros.",
        solution: [
          { type: "formula", block: true, tex: "T = \\frac{I}{R} = \\frac{10 \\text{ Mio.}€}{40 \\text{ Mio.}€/\\text{Jahr}} = 0{,}25 \\text{ Jahre} = 3 \\text{ Monate}" },
          { type: "p", text: "Ein im Prozess gebundener Euro bleibt im Durchschnitt 3 Monate lang gebunden, bevor er als Output den Prozess verlässt." }
        ]
      },
      {
        id: "ex2",
        prompt: "Ordnen Sie folgende Beispiele der passenden Auflagengröße zu: a) Herstellung von Glühlampen in großer, zeitlich unbegrenzter Menge, b) Bau eines individuellen Einfamilienhauses, c) Produktion mehrerer Geschmacksvarianten von Kaffee auf denselben Anlagen.",
        solution: [
          { type: "list", items: [
            "Glühlampen: Massenproduktion (zeitlich unbegrenzt, hochautomatisiert)",
            "Individuelles Einfamilienhaus: Einzelproduktion (individuelles Einzelstück, hohe Flexibilität)",
            "Kaffee-Geschmacksvarianten: Sortenproduktion (mehrere Varianten eines Grundprodukts auf denselben Anlagen)"
          ]}
        ]
      },
      {
        id: "ex3",
        prompt: "Eine Bäckerei stellt täglich 200 Brote her und hat im Durchschnitt 25 Brote gleichzeitig 'im Prozess' (Teigruhe, Backen, Abkühlen). Berechnen Sie mit dem Gesetz von Little die durchschnittliche Durchlaufzeit eines Brotes (Output-Rate in Broten pro Tag).",
        solution: [
          { type: "formula", block: true, tex: "T = \\frac{I}{R} = \\frac{25}{200} = 0{,}125 \\text{ Tage} \\approx 3 \\text{ Stunden}" },
          { type: "p", text: "Ein Brot verbringt im Durchschnitt etwa 3 Stunden im Produktionsprozess." }
        ]
      },
      {
        id: "ex4",
        prompt: "Erklären Sie den Unterschied zwischen Kundenauftragsproduktion und Lagerproduktion und nennen Sie je ein Beispiel.",
        solution: [
          { type: "p", text: "Bei der Kundenauftragsproduktion löst erst eine konkrete Kundenbestellung den Produktionsprozess aus (Beispiel: ein maßgefertigtes Möbelstück). Bei der Lagerproduktion wird dagegen auf Basis von Nachfrageprognosen auf Vorrat produziert, bevor eine konkrete Bestellung vorliegt (Beispiel: Standardprodukte im Supermarktregal)." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Das Gesetz von Little lautet:", options: ["$I = R + T$", "$I = R - T$", "$I = R / T^2$", "$I = R \\cdot T$"], correctIndex: 3, explanation: "Bestand ist das Produkt aus Output-Rate und Durchlaufzeit." },
      { id: "q2", question: "Die Output-Rate $R$ beschreibt...", options: ["die Zeit, die eine Einheit im Prozess verbringt", "die Menge, die den Prozess je Zeiteinheit verlässt", "die Anzahl der Maschinen", "die Menge an Einheiten aktuell im Prozess"], correctIndex: 1, explanation: "R ist der Durchsatz - Output je Zeiteinheit." },
      { id: "q3", question: "Bei linear-limitationaler Faktorkombination und einer Zunahme des Bestands $I$ bei gleichbleibender Output-Rate $R$ steigt gemäß Little's Law...", options: ["die Durchlaufzeit T", "die Output-Rate R automatisch mit", "nichts verändert sich", "die Anzahl der Produkttypen"], correctIndex: 0, explanation: "Da $T = I/R$, führt ein höherer Bestand bei gleicher Rate zu einer längeren Durchlaufzeit." },
      { id: "q4", question: "Massenproduktion unterscheidet sich von Serienproduktion vor allem dadurch, dass sie...", options: ["keine Automatisierung nutzt", "ausschließlich für Dienstleistungen gilt", "zeitlich unbegrenzt und ohne Umrüstung auf andere Produkte läuft", "immer nur ein einzelnes Stück produziert"], correctIndex: 2, explanation: "Massenproduktion läuft dauerhaft ohne notwendige Umrüstung, Serienproduktion für begrenzte Zeit mit anschließender Umrüstung." },
      { id: "q5", question: "Das Funktionsprinzip (Verrichtungsprinzip) in der Produktionsorganisation bedeutet:", options: ["Alle Arbeitsgänge zur Rundumbearbeitung eines Objekts werden zusammengefasst", "Es gibt keine Struktur in der Fertigung", "Nur ein einziger Arbeitsschritt existiert", "Gleichartige Arbeitssysteme werden räumlich/organisatorisch zusammengefasst"], correctIndex: 3, explanation: "Das Gegenstück ist das Objektprinzip mit Rundumbearbeitung." },
      { id: "q6", question: "Warum kann taktgebundene Fließfertigung gesundheitlich belastend sein?", options: ["Weil sie zu viel Autonomie bietet", "Weil sie ausschließlich in Büros stattfindet", "Weil sie monotone Belastung durch repetitive, streng getaktete Arbeit erzeugen kann", "Weil sie nie zu Zeitdruck führt"], correctIndex: 2, explanation: "Die enge Taktbindung kann zu einseitiger, monotoner Belastung führen." },
      { id: "q7", question: "Eine divergierende Erzeugnisstruktur liegt vor, wenn...", options: ["keine Struktur erkennbar ist", "ein Produkt mehrere Nachfolger hat", "ein Produkt aus mehreren Einzelteilen besteht", "ein Produkt maximal einen Vorgänger hat"], correctIndex: 1, explanation: "Divergierend bedeutet, dass aus einem Ausgangsteil mehrere unterschiedliche Endprodukte entstehen können (z. B. eine Zündkerze für mehrere Motortypen)." },
      { id: "q8", question: "Werkstattfertigung (Objektprinzip) bietet im Vergleich zur Fließfertigung typischerweise...", options: ["mehr Autonomie, aber auch höhere Koordinationsanforderungen", "keinerlei Unterschiede zur Fließfertigung", "weniger Autonomie, aber geringere Koordinationsanforderungen", "ausschließlich Nachteile"], correctIndex: 0, explanation: "Werkstattfertigung erlaubt mehr Gestaltungsspielraum, erfordert aber mehr Abstimmung." },
      { id: "q9", question: "Warum reduzieren Pufferkapazitäten laut Vorlesung die Fehlerquote?", options: ["Weil sie automatisch die Maschinen reparieren", "Puffer haben keinen Einfluss auf Fehlerquoten", "Weil sie Belastungsspitzen abfedern und damit Stress und Hetze verringern", "Weil sie den Materialpreis senken"], correctIndex: 2, explanation: "Weniger Zeitdruck durch Puffer senkt die Wahrscheinlichkeit von Fehlern." },
      { id: "q10", question: "Eine konvergierende Erzeugnisstruktur liegt zum Beispiel vor bei...", options: ["einem Holzlöffel aus einem einzigen Holzstück", "einem Produkt ohne Vorgänger", "einer Zündkerze für mehrere Motortypen", "der Herstellung eines Telefons aus vielen Einzelteilen"], correctIndex: 3, explanation: "Konvergierend bedeutet, dass mehrere Teile zu einem Endprodukt zusammengeführt werden." }
    ]
  },
  {
    id: "b8-grundlagen-dienstleistungen",
    chapter: 2,
    order: 8,
    title: "Grundlagen Dienstleistungen",
    icon: "🛎️",
    summary: "Das Uno-actu-Prinzip und warum Personal in Dienstleistungsorganisationen der klassische Engpassfaktor ist.",
    explanation: [
      { type: "p", text: "Dienstleistungen unterscheiden sich grundlegend von Sachgütern durch mehrere konstitutive Merkmale: Immaterialität (die Leistung ist nicht greifbar), das Uno-actu-Prinzip (Simultanität von Produktion und Konsum - die Leistung entsteht und wird gleichzeitig verbraucht), die Integration des externen Faktors (der Kunde oder sein Objekt ist selbst integraler Bestandteil des Produktionsprozesses) und die Nicht-Lagerungsfähigkeit (es gibt keine zeitliche Entkopplung von Produktion und Konsum, also keinen Lagerpuffer)." },
      { type: "p", text: "Im Vergleich zu Sachgütern (lagerfähig, Produktion vor dem Konsum, geringe Kundenintegration, Qualitätskontrolle im Nachhinein möglich) ist bei Dienstleistungen die Qualität stark personenabhängig und wird subjektiv während der Leistungserbringung selbst wahrgenommen. In der zugrunde liegenden Produktionsfunktion dominiert der Potenzialfaktor 'Personal' - Limitationalität (Personalengpässe) ist hier besonders relevant, da fehlendes Personal nicht kurzfristig durch andere Faktoren ersetzt werden kann." },
      { type: "p", text: "Dienstleistungen lassen sich außerdem nach dem Grad des Kundenkontakts unterscheiden (individuelle Bedienung wie beim Arzt, standardisierte Bedienung wie im Fast-Food-Restaurant, Selbstbedienung wie am Automaten) sowie nach der Ortsbindung (gebundene Leistung - der Kunde muss zum Anbieter kommen - vs. ungebundene Leistung, die im Umfeld des Kunden erbracht wird)." },
      { type: "p", text: "Aus den konstitutiven Merkmalen folgen zentrale Managementkonsequenzen: Kapazitätsplanung muss Nachfrage und Kapazität synchronisieren, da keine Lagerpuffer möglich sind; Qualitätssteuerung muss mit hoher Personenabhängigkeit und subjektiver Kundenwahrnehmung umgehen; Prozessstabilität erfordert eine Balance zwischen standardisierten Abläufen und individueller Anpassung an den jeweiligen Kunden." },
      { type: "p", text: "Gesundheitsbezug: Personal ist in Dienstleistungsorganisationen der klassische Engpassfaktor - hohe Auslastung erhöht Stress und Fehleranfälligkeit direkt und unmittelbar. Das Uno-actu-Prinzip macht Belastung sofort sichtbar und nicht vorproduzierbar - anders als bei Sachgütern gibt es keinen Lagerpuffer, Kapazitätsengpässe schlagen unmittelbar auf die Mitarbeitenden durch. Hohe Kundenintegration (z. B. Pflege, Beratung) erzeugt zusätzliche emotionale Beanspruchung ('emotionale Arbeit'). Resilientes Kapazitätsmanagement (Mehrfachqualifikation, zeitliche Flexibilisierung, Puffer statt Maximalauslastung) reduziert das Burnout-Risiko - integrative Gesundheitsförderung ist hier strukturell identisch mit resilienter Kapazitätsplanung, kein Zusatz, sondern Voraussetzung stabiler Wertschöpfung." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Erklären Sie, warum ein Friseursalon anders als eine Möbelfabrik keinen 'Lagerbestand' an fertigen Dienstleistungen aufbauen kann, um Nachfragespitzen abzufedern - und welche Konsequenz das für die Personalplanung hat.",
        solution: [
          { type: "p", text: "Wegen des Uno-actu-Prinzips fallen Produktion (Haareschneiden) und Konsum (der Kunde erhält die Leistung) zeitlich zusammen - man kann keine 'Haarschnitte auf Vorrat' produzieren wie Möbelstücke, die vorproduziert und gelagert werden können. Konsequenz für die Personalplanung: Nachfragespitzen (z. B. samstags) müssen direkt durch entsprechend vorhandene Personalkapazität abgedeckt werden - es gibt keinen Lagerpuffer, der Nachfrageschwankungen abfedern könnte, daher sind flexible Personaleinsatzmodelle (z. B. Aushilfen an Spitzentagen) besonders wichtig." }
        ]
      },
      {
        id: "ex2",
        prompt: "Ein Pflegeheim führt aus Kostengründen konsequente Maximalauslastung des Personals ein (keine Pufferzeiten zwischen Betreuungsterminen). Bewerten Sie diese Entscheidung im Licht des Gesundheitsbezugs von Dienstleistungsorganisationen.",
        solution: [
          { type: "p", text: "Diese Entscheidung ist aus Gesundheitssicht riskant: Da Personal der klassische Engpassfaktor in Dienstleistungsorganisationen ist und das Uno-actu-Prinzip Belastung sofort sichtbar macht (kein Lagerpuffer), führt Maximalauslastung ohne Pufferzeiten direkt zu erhöhtem Stress und Fehleranfälligkeit. In der Pflege kommt die zusätzliche emotionale Beanspruchung durch hohe Kundenintegration hinzu. Resilientes Kapazitätsmanagement mit bewussten Pufferzeiten würde stattdessen das Burnout-Risiko senken und ist laut Vorlesung eher Voraussetzung als Hindernis für stabile Wertschöpfung." }
        ]
      },
      {
        id: "ex3",
        prompt: "Ordnen Sie folgende Dienstleistungen nach dem Grad des Kundenkontakts ein: a) Rechtsberatung, b) Bedienung an der Supermarktkasse durch Personal, c) Fahrkartenkauf am Automaten.",
        solution: [
          { type: "list", items: [
            "Rechtsberatung: individuelle Bedienung (hoch personalisiert, an den Einzelfall angepasst)",
            "Supermarktkasse mit Personal: standardisierte Bedienung (weitgehend einheitlicher Ablauf für alle Kunden)",
            "Fahrkartenautomat: Selbstbedienung (kein Personalkontakt nötig)"
          ]}
        ]
      },
      {
        id: "ex4",
        prompt: "Erklären Sie den Unterschied zwischen 'gebundener' und 'ungebundener' Dienstleistung anhand von je einem Beispiel.",
        solution: [
          { type: "p", text: "Gebundene Leistung (facility based services): Der Kunde muss den Ort des Dienstleisters aufsuchen, z. B. ein Friseursalon oder ein Kino. Ungebundene Leistung (field based services): Die Dienstleistung wird im persönlichen Umfeld des Kunden erbracht, z. B. ein mobiler Pflegedienst oder ein Handwerker, der zum Kunden nach Hause kommt." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Das Uno-actu-Prinzip beschreibt...", options: ["eine Preisstrategie", "die Lagerfähigkeit von Dienstleistungen", "ein Qualitätssiegel", "die Gleichzeitigkeit von Produktion und Konsum einer Dienstleistung"], correctIndex: 3, explanation: "Dienstleistungen werden im selben Moment produziert und konsumiert." },
      { id: "q2", question: "Welcher Produktionsfaktor dominiert typischerweise bei Dienstleistungen?", options: ["Rohstoffe", "Personal", "Betriebsmittel", "Information allein"], correctIndex: 1, explanation: "Personal ist bei Dienstleistungen der zentrale, oft limitierende Faktor." },
      { id: "q3", question: "Die 'Integration des externen Faktors' bei Dienstleistungen bedeutet:", options: ["Kunden haben keinen Einfluss auf die Leistung", "Externe Berater erstellen die Dienstleistung", "Der Kunde bzw. sein Objekt ist integraler Bestandteil des Erstellungsprozesses", "Die Dienstleistung wird komplett automatisiert erbracht"], correctIndex: 2, explanation: "Ohne die Mitwirkung des Kunden (oder seines Objekts) kann die Dienstleistung oft nicht erbracht werden." },
      { id: "q4", question: "Warum ist Kapazitätsplanung bei Dienstleistungen besonders anspruchsvoll?", options: ["Weil mangels Lagerpuffer Nachfrage und Kapazität synchronisiert werden müssen", "Weil Kapazitätsplanung bei Dienstleistungen gesetzlich verboten ist", "Weil es bei Dienstleistungen keine Nachfrageschwankungen gibt", "Weil Dienstleistungen beliebig lagerbar sind"], correctIndex: 0, explanation: "Ohne Lagerpuffer muss die Kapazität möglichst genau der schwankenden Nachfrage entsprechen." },
      { id: "q5", question: "Individuelle Bedienung (z. B. Arztbesuch) und Selbstbedienung (z. B. Getränkeautomat) unterscheiden sich nach...", options: ["der Lagerfähigkeit", "dem Grad des Kundenkontakts", "dem Rohstoffverbrauch", "der Rechtsform des Anbieters"], correctIndex: 1, explanation: "Diese Einteilung bezieht sich auf die Intensität und Form des Kundenkontakts." },
      { id: "q6", question: "Warum ist integrative Gesundheitsförderung in Dienstleistungsorganisationen laut Vorlesung 'kein Zusatz, sondern Voraussetzung stabiler Wertschöpfung'?", options: ["Weil Personal als dominanter, engpassanfälliger Faktor direkt über die Stabilität der Leistungserstellung entscheidet", "Weil es gesetzlich vorgeschrieben ist", "Weil Gesundheitsförderung nichts kostet", "Weil Dienstleistungen ohnehin nie unter Druck stehen"], correctIndex: 0, explanation: "Da Personal der zentrale Engpassfaktor ist und Belastung unmittelbar durchschlägt, ist seine Gesunderhaltung strukturell für die Wertschöpfung selbst entscheidend." },
      { id: "q7", question: "Warum ist Qualitätskontrolle bei Dienstleistungen schwieriger als bei Sachgütern?", options: ["Weil es bei Dienstleistungen keine Kunden gibt", "Weil die Qualität stark personenabhängig ist und subjektiv während der Leistungserbringung wahrgenommen wird, statt im Nachhinein prüfbar zu sein", "Weil Dienstleistungen billiger sind", "Weil Dienstleistungen nie Fehler haben"], correctIndex: 1, explanation: "Anders als bei Sachgütern lässt sich die Qualität nicht vor der Auslieferung isoliert prüfen." },
      { id: "q8", question: "Emotionale Arbeit im Sinne der Vorlesung entsteht besonders bei...", options: ["Selbstbedienungsautomaten", "vollautomatisierten Fertigungsstraßen", "reiner Sachgüterproduktion", "hoher Kundenintegration wie in Pflege oder Beratung"], correctIndex: 3, explanation: "Direkter, intensiver Kundenkontakt erzeugt zusätzliche emotionale Beanspruchung." },
      { id: "q9", question: "Warum können bei Dienstleistungen Kapazitätsengpässe nicht wie bei Sachgütern durch Lagerbestände abgefedert werden?", options: ["Weil es bei Dienstleistungen keine Nachfrage gibt", "Weil Lagerhaltung gesetzlich verboten ist", "Weil Dienstleistungen nicht lagerfähig sind (Uno-actu-Prinzip)", "Weil Dienstleistungen zu billig sind"], correctIndex: 2, explanation: "Da Produktion und Konsum zeitlich zusammenfallen, kann nicht auf Vorrat produziert werden." },
      { id: "q10", question: "Resilientes Kapazitätsmanagement in Dienstleistungsorganisationen umfasst laut Vorlesung unter anderem...", options: ["die vollständige Automatisierung aller Kundenkontakte", "die Abschaffung von Pausenzeiten", "Mehrfachqualifikation, zeitliche Flexibilisierung und Puffer statt Maximalauslastung", "ausschließlich Personalabbau"], correctIndex: 2, explanation: "Diese Maßnahmen reduzieren das Burnout-Risiko und stabilisieren die Wertschöpfung." }
    ]
  },
  {
    id: "b9-fazit-gesamtintegration",
    chapter: 2,
    order: 9,
    title: "Wertschöpfungskette – Fazit und Gesamtintegration",
    icon: "🔗",
    summary: "Der rote Faden der Wertschöpfungskette: von der Beschaffung bis zur Dienstleistung - und warum Gesundheit dabei kein Add-on ist.",
    explanation: [
      { type: "p", text: "Die Wertschöpfungskette fragt, welche konkreten betrieblichen Funktionen die im Prozessmanagement-Strang erlernte Steuerungslogik inhaltlich ausfüllen: Ein Prozess transformiert Input (Produktionsfaktoren) über einen Throughput in einen Output (Güter/Dienstleistungen) - die Wertschöpfungskette liefert dafür die inhaltlichen Bausteine, die chronologisch aufeinander aufbauen: Beschaffung → Bedarfsermittlung → Lieferantenmanagement → Bestellung → Produktion → Dienstleistung." },
      { type: "p", text: "Dieser rote Faden zeigt sich in mehreren wiederkehrenden Mustern über alle acht Themen der Wertschöpfungskette hinweg:" },
      { type: "list", items: [
        "Von der Leistungserstellung (B1) über Leistungstiefe (B2) bis zur Beschaffung (B3) wird geklärt, WAS ein Unternehmen selbst herstellt und WAS es woher bezieht - die Grundsatzentscheidungen der Wertschöpfung.",
        "Bedarfsermittlung (B4), Lieferantenmanagement (B5) und Bestellmanagement (B6) konkretisieren, WIE die benötigten Produktionsfaktoren mengen-, qualitäts- und zeitgerecht beschafft werden.",
        "Produktion (B7) und Dienstleistungen (B8) zeigen schließlich, WIE aus den beschafften Faktoren der eigentliche Output entsteht - mit grundlegend unterschiedlicher Logik je nach Sachgut oder Dienstleistung."
      ]},
      { type: "p", text: "Wie schon im Prozessmanagement-Strang münden beide Perspektiven in eine gemeinsame Integration: Wertschöpfung muss sowohl marktorientiert (Kunde, Wettbewerb) als auch ressourcenorientiert (Kernkompetenzen, vorhandene Kapazitäten) gestaltet werden - und zunehmend wird dabei auch die gesundheits- und mitarbeiterbezogene Wirkung jeder einzelnen Entscheidung mitgedacht." },
      { type: "p", text: "Gesamtfazit über alle 16 Themen des Moduls (Prozessmanagement und Wertschöpfungskette gemeinsam betrachtet) - aus Sicht der Wertschöpfungskette besonders greifbar:" },
      { type: "list", items: [
        "1. Dispositionsebene als zentraler Hebel: Nicht die operative Ausführung allein, sondern die vorgelagerten Planungs- und Managemententscheidungen (Personalbemessung bei der Bedarfsermittlung, Kapazitätsplanung in der Produktion, Lieferantenauswahl) entscheiden darüber, ob Wertschöpfung leistungsfähig und gesundheitsförderlich bleibt.",
        "2. Personal als wiederkehrender Engpassfaktor: Von der Bedarfsermittlung (Personal als 'Sicherheitsbestand') über das Bestellmanagement bis zu Produktion und Dienstleistungen (Personal als Potenzialfaktor) taucht Personal immer wieder als limitierender UND gesundheitlich vulnerabler Faktor auf - eine direkte Folge der in B1 erläuterten Limitationalitätslogik.",
        "3. Doppelwirkung von Effizienzinstrumenten: Digitalisierung im Bestellwesen, Just-in-Time-Strategien und Kennzahlensteuerung schaffen Effizienz entlang der gesamten Kette, können aber bei Überoptimierung neue Belastungen erzeugen (z. B. Störanfälligkeit bei JIT, digitaler Stress bei permanenter Kontrolle).",
        "4. Strukturelle statt additive Gesundheitsförderung: Ob in der Beschaffung (ergonomische Arbeitsmittel), der Produktion (Pufferkapazitäten) oder bei Dienstleistungen (resiliente Kapazitätsplanung) - Gesundheitsförderung ist an jeder Stelle der Wertschöpfungskette integraler Bestandteil der Gestaltungsentscheidung selbst, kein nachträgliches Zusatzprogramm."
      ]}
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Zeichnen Sie in Worten den 'roten Faden' der Wertschöpfungskette nach: Nennen Sie die sechs inhaltlichen Bausteine in der richtigen chronologischen Reihenfolge.",
        solution: [
          { type: "p", text: "Beschaffung → Bedarfsermittlung → Lieferantenmanagement → Bestellung → Produktion → Dienstleistung. Diese Kette bildet die inhaltlichen Bausteine, die die abstrakte Steuerungslogik des Prozessmanagements (Effektivität, Effizienz, Qualität, Transparenz) mit konkretem betrieblichem Inhalt füllen." }
        ]
      },
      {
        id: "ex2",
        prompt: "Erklären Sie anhand von zwei verschiedenen Themen der Wertschöpfungskette (Ihrer Wahl), wie sich Punkt 2 des Gesamtfazits ('Personal als wiederkehrender Engpassfaktor') konkret zeigt.",
        solution: [
          { type: "p", text: "Beispiel Bedarfsermittlung (B4): Personal wird explizit wie ein 'Sicherheitsbestand' behandelt - fehlende Personalpuffer erhöhen chronische Überlastung, Fehlprognosen führen zu Belastungsspitzen in beide Richtungen." },
          { type: "p", text: "Beispiel Grundlagen Dienstleistungen (B8): Personal ist der klassische Engpassfaktor, da Dienstleistungen nicht lagerfähig sind (Uno-actu-Prinzip) - Kapazitätsengpässe beim Personal schlagen unmittelbar auf die Mitarbeitenden durch, ohne dass ein Lagerpuffer abfedern könnte. In beiden Fällen ist Personal gleichzeitig der limitierende Faktor für die Wertschöpfung UND der gesundheitlich am stärksten betroffene Faktor." }
        ]
      },
      {
        id: "ex3",
        prompt: "Warum wird im Gesamtfazit betont, dass Wertschöpfung sowohl marktorientiert als auch ressourcenorientiert gestaltet werden muss - reicht nicht eine der beiden Perspektiven allein?",
        solution: [
          { type: "p", text: "Eine rein marktorientierte Betrachtung würde nur fragen, was der Kunde will, ohne zu prüfen, ob die eigenen Ressourcen und Kapazitäten dafür ausreichen. Eine rein ressourcenorientierte Betrachtung würde umgekehrt vorhandene Kompetenzen ausbauen, ohne zu prüfen, ob dafür überhaupt Marktnachfrage besteht. Erst die Integration beider Perspektiven stellt sicher, dass Wertschöpfung sowohl marktfähig als auch mit den vorhandenen Ressourcen tatsächlich leistbar ist - dieselbe Logik, die bereits im Prozessmanagement-Strang für Markt- und Ressourcenorientierung gilt." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche sechs inhaltlichen Bausteine bilden den roten Faden der Wertschöpfungskette?", options: ["Marketing, Vertrieb, Service, Finanzen, Personal, IT", "Planung, Kontrolle, Steuerung, Organisation, Führung, Bewertung", "Nur Produktion und Dienstleistung", "Beschaffung, Bedarfsermittlung, Lieferantenmanagement, Bestellung, Produktion, Dienstleistung"], correctIndex: 3, explanation: "Diese sechs Bausteine bilden die chronologische Kette der Wertschöpfung." },
      { id: "q2", question: "Was liefert die Wertschöpfungskette im Vergleich zum Prozessmanagement-Strang?", options: ["Die konkreten inhaltlichen Bausteine, die die Steuerungslogik des Prozessmanagements ausfüllen", "Dieselbe abstrakte Steuerungslogik ohne inhaltlichen Unterschied", "Ausschließlich rechtliche Vorgaben", "Keinen Zusammenhang zum Prozessmanagement"], correctIndex: 0, explanation: "Prozessmanagement liefert die Steuerungslogik, die Wertschöpfungskette die inhaltlichen Funktionen." },
      { id: "q3", question: "Laut Gesamtfazit ist Personal entlang der gesamten Wertschöpfungskette...", options: ["nur in der Produktion relevant", "ein wiederkehrender, zugleich limitierender und gesundheitlich vulnerabler Faktor", "ausschließlich eine Kostenposition ohne weitere Bedeutung", "irrelevant für die Wertschöpfung"], correctIndex: 1, explanation: "Von der Bedarfsermittlung bis zu Dienstleistungen taucht Personal immer wieder in dieser Doppelrolle auf." },
      { id: "q4", question: "Warum reicht laut Fazit-Kapitel weder eine rein marktorientierte noch eine rein ressourcenorientierte Perspektive auf Wertschöpfung allein aus?", options: ["Weil beide Perspektiven identisch sind", "Weil nur die Marktorientierung überhaupt relevant ist", "Weil Ressourcenorientierung gesetzlich vorgeschrieben ist", "Weil erst die Integration beider sicherstellt, dass Wertschöpfung sowohl marktfähig als auch mit vorhandenen Ressourcen leistbar ist"], correctIndex: 3, explanation: "Beide Perspektiven ergänzen sich - wie bereits im Prozessmanagement-Strang erläutert." },
      { id: "q5", question: "Welches Beispiel zeigt die 'Doppelwirkung von Effizienzinstrumenten' entlang der Wertschöpfungskette am deutlichsten?", options: ["Die Anzahl der Feiertage im Jahr", "Die Wahl des Firmensitzes", "Just-in-Time-Bestellungen, die Effizienz schaffen, aber die Störanfälligkeit erhöhen", "Die Struktur des Organigramms"], correctIndex: 2, explanation: "JIT ist das zentrale Beispiel für gleichzeitig positive und negative Effizienzwirkungen." },
      { id: "q6", question: "'Strukturelle statt additive Gesundheitsförderung' zeigt sich in der Wertschöpfungskette zum Beispiel durch...", options: ["ergonomische Arbeitsmittel in der Beschaffung und Pufferkapazitäten in der Produktion", "den Verzicht auf jede Gesundheitsmaßnahme", "ausschließlich finanzielle Boni", "ein separates Wellness-Zusatzprogramm ohne Bezug zu Prozessen"], correctIndex: 0, explanation: "Gesundheitsförderung ist in jeder Gestaltungsentscheidung entlang der Kette mitgedacht, nicht nachträglich angehängt." }
    ]
  }
];
