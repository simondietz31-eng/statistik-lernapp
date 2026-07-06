const BWL_STRANG_A_TOPICS = [
  {
    id: "a1-grundlagen-prozessmanagement",
    chapter: 1,
    order: 1,
    title: "Grundlagen des Prozessmanagements",
    icon: "🏢",
    summary: "Prozess vs. Geschäftsprozess, Prozesstypen und die vier Zielgrößen Effektivität, Effizienz, Qualität, Transparenz.",
    explanation: [
      { type: "p", text: "Ein Prozess ist eine Abfolge von Aktivitäten, die aus definierten Inputs definierte Outputs erzeugt (Eingabe → Aktivität → Ergebnis). Ein Geschäftsprozess ist enger gefasst: eine funktions- und organisationsübergreifende Folge wertschöpfender Aktivitäten, die vom Kunden erwartete Leistungen erzeugt und Prozessziele erfüllt, die aus der Geschäftsstrategie abgeleitet sind." },
      { type: "list", items: [
        "Primäre Geschäftsprozesse (Kernprozesse): erzeugen Leistungen für externe Kunden, stiften unmittelbaren Kundennutzen, beruhen auf Kernkompetenzen und sind schwer imitierbar - strategische Bedeutung. Beispiele: neue Produkte entwickeln, Aufträge gewinnen/abwickeln.",
        "Sekundäre Geschäftsprozesse: kein direkter Marktbezug, interne Kunden. Unterteilt in Führungsprozesse (Steuerungsprozesse: sichern das Zusammenspiel aller Prozesse, definieren Ziele, koordinieren) und Unterstützungs-/Supportprozesse (Basisdienste wie IT, Personal, Finanzen, Beschaffung).",
        "Nicht wertschöpfende Prozesse: kein erkennbarer Kundennutzen, entstehen oft durch mangelhafte Planung, Steuerung oder Information."
      ]},
      { type: "p", text: "Prozessmanagement verfolgt vier Zielgrößen:" },
      { type: "list", items: [
        "Effektivität: Grad der Zielerreichung - die richtigen Dinge tun.",
        "Effizienz: Verhältnis von Output zu eingesetzten Ressourcen; typische Ineffizienzen sind Schnittstellenverluste, Medienbrüche und Doppelarbeiten.",
        "Qualität: Grad der Erfüllung definierter Kunden-/Stakeholder-Anforderungen; Standardisierung erhöht die Reproduzierbarkeit.",
        "Transparenz: klare Beschreibung von Input, Aktivitäten, Output und Zielbezug - Voraussetzung für Steuerbarkeit."
      ]},
      { type: "p", text: "Klassisches Beispiel aus der Vorlesung ist das Autohaus: Die funktionsorientierte Organisation zerlegt den Kundenwunsch 'Auto kaufen' in Abteilungsaufgaben (Verkauf, Werkstatt, Ersatzteillager, Buchhaltung) - jede Abteilung optimiert sich selbst, aber niemand hat den Gesamtprozess im Blick. Die Prozessorientierung dreht das um: Zuerst wird der Prozess vom Kundenwunsch zur Wunscherfüllung end-to-end identifiziert, danach werden Aufgaben und Stellen daraus abgeleitet." },
      { type: "p", text: "Gesundheitsbezug: Die vier Zielgrößen gelten unmittelbar auch für Gesundheitsförderungsprozesse - Effektivität bedeutet dann das Erreichen definierter Gesundheitsziele, Effizienz eine ressourcenbewusste Maßnahmenumsetzung, Qualität standardisierte Evaluationsverfahren und Transparenz eine klare Definition von Kern-, Steuerungs- und Unterstützungsprozessen. Ohne klare Prozessverantwortung und End-to-End-Denken (Bedarf → Planung → Durchführung → Evaluation) bleibt betriebliche Gesundheitsförderung fragmentiert." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ordnen Sie folgende Aktivitäten eines Autohauses ihrem Prozesstyp zu: a) Ein Auto verkaufen, b) IT-Infrastruktur bereitstellen, c) Unternehmensziele definieren und deren Erreichung überwachen, d) Leerlaufzeiten durch schlechte Terminplanung.",
        solution: [
          { type: "list", items: [
            "a) Auto verkaufen: primärer Geschäftsprozess/Kernprozess (unmittelbarer Kundennutzen)",
            "b) IT-Infrastruktur bereitstellen: sekundärer Prozess, genauer Unterstützungs-/Supportprozess",
            "c) Ziele definieren und Zielerreichung überwachen: sekundärer Prozess, genauer Führungs-/Steuerungsprozess",
            "d) Leerlaufzeiten durch schlechte Terminplanung: nicht wertschöpfender Prozess"
          ]}
        ]
      },
      {
        id: "ex2",
        prompt: "Ein Kundenservice-Callcenter beantwortet 95% aller Anfragen fristgerecht (definiertes Ziel), benötigt dafür aber im Schnitt doppelt so viele Mitarbeiterstunden wie ein vergleichbares Callcenter. Beurteilen Sie das Callcenter hinsichtlich Effektivität und Effizienz.",
        solution: [
          { type: "p", text: "Effektivität: hoch - das definierte Ziel (95% fristgerechte Beantwortung) wird erreicht, die 'richtigen Dinge' werden also getan." },
          { type: "p", text: "Effizienz: niedrig - im Verhältnis zum Output (beantwortete Anfragen) wird deutlich mehr Ressourceneinsatz (Mitarbeiterstunden) benötigt als beim Vergleichsunternehmen. Das Verhältnis von Output zu eingesetzten Ressourcen ist also ungünstig." }
        ]
      },
      {
        id: "ex3",
        prompt: "Warum zerlegt die klassische funktionsorientierte Organisation den Kundenwunsch beim Autohaus-Beispiel in Abteilungsaufgaben, statt den Gesamtprozess zu betrachten - und welches Problem entsteht dadurch?",
        solution: [
          { type: "p", text: "Die klassische Aufbauorganisation geht vom Analyse-Synthese-Konzept aus: Die Unternehmensaufgabe wird in Teilaufgaben zerlegt und diese werden zu Abteilungen zusammengefasst (Verkauf, Werkstatt, Buchhaltung usw.), bevor überhaupt über Abläufe (Prozesse) nachgedacht wird. Jede Abteilung optimiert sich dann selbst. Problem: Niemand hat den Gesamtprozess 'vom Kundenwunsch zur Wunscherfüllung' im Blick - es entstehen Schnittstellenprobleme, Informationsverluste und eine fehlende Gesamtverantwortung." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was unterscheidet einen Geschäftsprozess von einem allgemeinen Prozess?", options: ["Nichts, beide Begriffe sind identisch", "Ein Geschäftsprozess ist zusätzlich funktions-/organisationsübergreifend, kundenorientiert und aus der Geschäftsstrategie abgeleitet", "Ein Geschäftsprozess hat nie einen Kundenbezug", "Ein Geschäftsprozess besteht nur aus einer einzigen Aktivität"], correctIndex: 1, explanation: "Der Geschäftsprozess ist ein enger gefasster, kundenorientierter und strategiegebundener Spezialfall des allgemeinen Prozessbegriffs." },
      { id: "q2", question: "Welcher Prozesstyp hat in der Regel keinen direkten Marktbezug?", options: ["Primäre Geschäftsprozesse (Kernprozesse)", "Sekundäre Prozesse (Führungs- und Unterstützungsprozesse)", "Beide gleichermaßen", "Keiner der beiden"], correctIndex: 1, explanation: "Sekundäre Prozesse dienen internen Kunden und wirken sich nur indirekt auf die Wettbewerbsfähigkeit aus." },
      { id: "q3", question: "'Die richtigen Dinge tun' beschreibt am ehesten...", options: ["Effizienz", "Effektivität", "Transparenz", "Qualität"], correctIndex: 1, explanation: "Effektivität ist der Grad der Zielerreichung - 'die richtigen Dinge tun'." },
      { id: "q4", question: "Was sind typische Ursachen für Ineffizienz in Prozessen?", options: ["Zu hohe Kundenorientierung", "Schnittstellenverluste, Medienbrüche und Doppelarbeiten", "Zu klare Zieldefinitionen", "Zu viel Transparenz"], correctIndex: 1, explanation: "Diese drei Phänomene verschlechtern das Verhältnis von Output zu eingesetzten Ressourcen." },
      { id: "q5", question: "Im Autohaus-Beispiel zeigt die Prozessorientierung, dass...", options: ["zuerst Abteilungen gebildet werden und danach der Prozess identifiziert wird", "zuerst der Gesamtprozess end-to-end identifiziert wird und danach Aufgaben/Stellen abgeleitet werden", "Abteilungen komplett überflüssig sind", "der Kunde im Prozess keine Rolle spielt"], correctIndex: 1, explanation: "Die Prozessorientierung kehrt die klassische Logik um: erst der Ende-zu-Ende-Prozess, dann die Organisationsstruktur." },
      { id: "q6", question: "Übertragen auf Gesundheitsförderungsprozesse bedeutet 'Transparenz' im Sinne der vier Zielgrößen:", options: ["Geheimhaltung der Maßnahmen vor den Mitarbeitenden", "Klare Definition von Kern-, Steuerungs- und Unterstützungsprozessen der Gesundheitsförderung", "Ausschließlich finanzielle Kennzahlen", "Verzicht auf jede Evaluation"], correctIndex: 1, explanation: "Transparenz bedeutet klare Prozessbeschreibung - auch bei Gesundheitsförderungsprozessen." }
    ]
  },
  {
    id: "a2-prozessidentifikation",
    chapter: 1,
    order: 2,
    title: "Prozessidentifikation",
    icon: "🔎",
    summary: "Wie man aus der Menge möglicher Aktivitäten die wirklich relevanten Prozesse herausarbeitet - und was gute von schlechten Prozessen unterscheidet.",
    explanation: [
      { type: "p", text: "Ziel der Prozessidentifikation ist es, aus der Menge möglicher Unternehmensaktivitäten diejenigen zu identifizieren, die zur Erstellung der Marktleistung notwendig sind. Dabei gibt es verschiedene Entwurfslogiken:" },
      { type: "list", items: [
        "Top-down-Entwurf: Basis sind Kunden-/Marktanforderungen und Unternehmensziele; wenige, höherrangige Mitarbeiter sind beteiligt. Vorteil: langfristig strategiekonform. Nachteil: geringer Praxisbezug.",
        "Bottom-up-Entwurf: Basis sind konkrete Wirkungszusammenhänge der Leistungserstellung und dezentrales Wissen, breite Mitarbeiterbeteiligung. Vorteil: hohe Akzeptanz und direkte Nutzbarkeit. Nachteil: möglicherweise fehlender strategischer Weitblick.",
        "Marktorientierter Entwurf: von außen nach innen, Basis ist der Kundennutzen.",
        "Ressourcenorientierter Entwurf: von innen nach außen, Basis sind vorhandene Ressourcen/Vorgaben.",
        "Deduktiver Entwurf: Basis sind idealtypische Referenzprozesse, angepasst an die konkrete Situation. Induktiver Entwurf: Basis sind konkrete, unternehmensspezifische Kundenbedürfnisse."
      ]},
      { type: "p", text: "Merkmale eines 'guten' Prozesses: effektiv, effizient, beherrscht (geringe Ergebnisstreuung), deterministisch (vorhersehbares Ergebnis), atomar (kleine Einheiten), flexibel, robust gegenüber Störungen von außen, neben- und nachwirkungsfrei, dokumentiert und ständig verbesserbar." },
      { type: "p", text: "Ursachen 'schlechter' Prozesse sind typischerweise Schnittstellen im Unternehmen, mangelnder Informationsaustausch, Silodenken in funktionalen Hierarchien sowie Abteilungs- und Bereichsegoismen. Die Folgen: fehlende Kundenorientierung, zerstückelte und intransparente Abläufe, mangelnde Gesamtverantwortung, zu hohe Kosten und geringe Flexibilität." },
      { type: "p", text: "Für die Prozessverbesserung gibt es zwei gegensätzliche Strategien: Die sanfte Tour (Evolution) lässt Mitarbeitende die Lösung fachübergreifend im Team erarbeiten, mit kontinuierlichen kleinen Verbesserungsschritten. Die harte Tour (Revolution, 'Bombenwurf') stellt radikal alles Bisherige infrage, die Lösung wird exklusiv von der Unternehmensleitung erarbeitet und den Mitarbeitenden am 'Tag X' als fertige Lösung präsentiert." },
      { type: "p", text: "Gesundheitsbezug: Eine Prozesslandkarte macht sichtbar, ob Gesundheitsförderung strategisch integriert oder isoliert organisiert ist - Kernprozesse (Bedarfserhebung → Konzeption → Durchführung → Evaluation), Steuerungsprozesse (Zieldefinition, Budgetierung) und Unterstützungsprozesse (IT, Personal, Datenschutz) müssen auch hier identifiziert werden. Fehlt diese Prozesslandkarte, bleibt Gesundheitsförderung eine isolierte Einzelmaßnahme statt eines echten Kernprozesses." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Unternehmen lässt sein Führungsteam allein und ohne Mitarbeiterbeteiligung eine neue Prozessstruktur festlegen, basierend auf den strategischen Unternehmenszielen. Um welchen Entwurfsansatz handelt es sich, und was ist der typische Nachteil?",
        solution: [
          { type: "p", text: "Es handelt sich um einen Top-down-Entwurf: Basis sind die Unternehmensziele, es sind nur wenige, höherrangige Mitarbeiter beteiligt. Typischer Nachteil: geringer Praxisbezug, da das konkrete, dezentrale Wissen der operativ Tätigen nicht einfließt." }
        ]
      },
      {
        id: "ex2",
        prompt: "Ein Unternehmen möchte seine Prozesse neu gestalten. Variante A: Mitarbeitende erarbeiten fachübergreifend im Team schrittweise Verbesserungen, das Management unterstützt laufend. Variante B: Die Geschäftsleitung erarbeitet geheim eine komplette Neustruktur und konfrontiert die Belegschaft am Stichtag mit der fertigen Lösung. Benennen Sie beide Strategien und nennen Sie je einen Vor- und Nachteil.",
        solution: [
          { type: "p", text: "Variante A ist die 'sanfte Tour' (Evolution): Vorteil ist hohe Akzeptanz und dass Mitarbeitende lernen, Optimierungen selbst umzusetzen; Nachteil ist die langsamere Geschwindigkeit gegenüber einer radikalen Neugestaltung." },
          { type: "p", text: "Variante B ist die 'harte Tour' (Revolution/'Bombenwurf'): Vorteil ist eine potenziell schnellere, radikalere Umsetzung; Nachteil ist geringe Akzeptanz, da Mitarbeitende als Teil des Problems statt der Lösung behandelt werden und Konflikte eher eskalieren." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was ist das zentrale Ziel der Prozessidentifikation?", options: ["Alle denkbaren Unternehmensaktivitäten zu dokumentieren", "Aus der Menge möglicher Aktivitäten diejenigen zu identifizieren, die zur Erstellung der Marktleistung notwendig sind", "Ausschließlich Kostenreduktion", "Die Abschaffung aller Abteilungen"], correctIndex: 1, explanation: "Prozessidentifikation filtert die relevanten, marktleistungsrelevanten Aktivitäten heraus." },
      { id: "q2", question: "Welches Merkmal gehört NICHT zu einem 'guten' Prozess?", options: ["Deterministisch (vorhersehbares Ergebnis)", "Beherrscht (geringe Ergebnisstreuung)", "Möglichst viele Abhängigkeiten zu anderen Prozessen", "Robust gegenüber Störungen von außen"], correctIndex: 2, explanation: "Gute Prozesse sind 'neben- und nachwirkungsfrei' - sie sollen möglichst wenige, nicht möglichst viele Abhängigkeiten zu anderen Prozessen haben." },
      { id: "q3", question: "Die 'harte Tour' der Prozessverbesserung wird auch als was bezeichnet?", options: ["Kontinuierliche Verbesserung", "Bombenwurfstrategie", "Bottom-up-Ansatz", "Marktorientierter Entwurf"], correctIndex: 1, explanation: "Das radikale, von der Leitung geheim erarbeitete Vorgehen wird bildlich 'Bombenwurf' genannt." },
      { id: "q4", question: "Ein typischer Auslöser für 'schlechte' Prozesse ist:", options: ["Zu viel Informationsaustausch zwischen Abteilungen", "Silodenken in funktionalen Hierarchien", "Zu klare Kundenorientierung", "Zu geringe Abteilungsgrenzen"], correctIndex: 1, explanation: "Silodenken und Abteilungsegoismen führen typischerweise zu fragmentierten, ineffizienten Prozessen." },
      { id: "q5", question: "Der marktorientierte Entwurfsansatz zur Prozessidentifikation geht...", options: ["von innen nach außen, ausgehend von vorhandenen Ressourcen", "von außen nach innen, ausgehend vom Kundennutzen", "ausschließlich von historischen Referenzprozessen aus", "von zufällig ausgewählten Mitarbeitenden aus"], correctIndex: 1, explanation: "Der marktorientierte Entwurf setzt beim Kundennutzen an und leitet daraus die internen Prozesse ab." },
      { id: "q6", question: "Warum ist eine Prozesslandkarte für die Gesundheitsförderung im Unternehmen wichtig?", options: ["Sie ist gesetzlich vorgeschrieben und hat keinen praktischen Nutzen", "Sie macht sichtbar, ob Gesundheitsförderung strategisch als Kernprozess integriert oder nur eine isolierte Einzelmaßnahme ist", "Sie ersetzt die Evaluation von Gesundheitsprogrammen", "Sie ist nur für externe Dienstleister relevant"], correctIndex: 1, explanation: "Ohne Prozesslandkarte bleibt Gesundheitsförderung oft eine isolierte Einzelmaßnahme statt eines integrierten Kernprozesses." }
    ]
  },
  {
    id: "a3-prozessmodellierung",
    chapter: 1,
    order: 3,
    title: "Prozessmodellierung",
    icon: "🗺️",
    summary: "Prozessarchitektur, Modellierungsgrundsätze und das Dilemma zwischen Detailtiefe und Übersichtlichkeit.",
    explanation: [
      { type: "p", text: "Prozessmodellierung analysiert und stellt die identifizierten Geschäftsprozesse verbessert dar - zum einen als Design (Strukturierung einzelner Prozesse), zum anderen als Architektur (Bündelung von Prozessen zu einer Gesamtstruktur)." },
      { type: "list", items: [
        "One face to the customer: Prinzip einer einzigen Kundenschnittstelle je Prozess - eindeutige Verantwortung, systematischer Aufbau von Kundennähe.",
        "Paralleles Prozessdesign: Kern- und Supportprozesse werden parallel statt sequentiell bearbeitet, um Zeitvorteile zu erzielen.",
        "Ganzheitliche Rundumbearbeitung: Prozesse beginnen und enden möglichst beim Kunden, Verantwortung liegt bei einer Person/einem Team.",
        "Horizontale Differenzierung: Bildung von Prozessvarianten für unterschiedliche Objekte/Kunden.",
        "Vertikale Hierarchisierung: Verfeinerung eines Prozesses in Teilprozesse (verschiedene Detaillierungsebenen)."
      ]},
      { type: "p", text: "Grundsätze ordnungsgemäßer Modellierung (GoM):" },
      { type: "list", items: [
        "Richtigkeit: syntaktisch (regelkonform) und semantisch (fachlich korrekt) korrekt",
        "Relevanz: nur für den Modellierungszweck relevante Sachverhalte darstellen",
        "Wirtschaftlichkeit: Detaillierungsaufwand muss durch den Nutzen gerechtfertigt sein",
        "Klarheit: Verständlichkeit, Lesbarkeit, klare Hierarchisierung",
        "Vergleichbarkeit: gleiche Realabläufe sollen im Modell identisch dargestellt werden",
        "Systematischer Aufbau: unterschiedliche Sichten (z. B. Organigramm und Prozessmodell) müssen konsistent zueinander sein"
      ]},
      { type: "p", text: "Das Detaillierungsdilemma: Mehr Detaillierung ist für Modellierungs-/Workflow-Software, Simulation, Kosten- und Kapazitätsplanung notwendig, geht aber zulasten von Klarheit und Wirtschaftlichkeit. Abwägungskriterien sind der Detaillierungsgrad an Kunden-/Lieferantenschnittstellen, die Mitarbeiterqualifikation und die strategische Bedeutung des Prozesses." },
      { type: "p", text: "Gesundheitsbezug: Bei Gesundheitsförderungsprozessen hilft die vertikale Hierarchisierung - Makroebene (Gesamtprozess 'Gesundheitsförderung'), Mesoebene (Planung/Durchführung/Evaluation als Teilprozesse), Mikroebene (Einzelschritte wie Einladungsprozess oder Feedbackauswertung) - komplexe Programme steuerbar zu machen. Transparente Rollen und sichtbare Schnittstellen zwischen Leitung, HR und externen Anbietern reduzieren Koordinationsprobleme." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Unternehmen möchte seinen Kundenservice-Prozess neu modellieren. Aktuell muss ein Kunde bei einer Reklamation nacheinander mit drei verschiedenen Abteilungen sprechen. Welches Modellierungsprinzip sollte angewendet werden, um das zu verbessern, und warum?",
        solution: [
          { type: "p", text: "'One face to the customer' - eine einzige, eindeutige Kundenschnittstelle je Prozess. Statt dass der Kunde selbst zwischen Abteilungen wechseln muss, sollte eine Person/ein Team die gesamte Reklamationsbearbeitung koordinieren und als einzige Ansprechperson auftreten. Das erhöht Kundennähe und Verantwortlichkeit." }
        ]
      },
      {
        id: "ex2",
        prompt: "Erklären Sie das Detaillierungsdilemma an einem Beispiel: Ein Prozessmodell soll sowohl für eine Simulation der Kapazitätsauslastung als auch als Übersichtsdokument für neue Mitarbeitende dienen. Warum ist das ein Zielkonflikt?",
        solution: [
          { type: "p", text: "Für die Simulation braucht man ein sehr detailliertes Modell mit exakten Zeiten, Kapazitäten und Verzweigungen, damit die Berechnung realistisch ist. Für neue Mitarbeitende soll das Modell dagegen klar, übersichtlich und schnell verständlich sein - zu viele Details würden hier eher verwirren. Ein einziges Modell kann daher selten beide Zwecke optimal erfüllen; man muss abwägen oder unterschiedlich detaillierte Modellvarianten erstellen." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was bedeutet 'one face to the customer'?", options: ["Der Kunde muss mit möglichst vielen Abteilungen sprechen", "Eine einzige, eindeutige Kundenschnittstelle je Prozess mit klarer Verantwortung", "Jeder Mitarbeitende darf Kundenkontakt haben", "Ein Prinzip aus der Produktionsplanung ohne Kundenbezug"], correctIndex: 1, explanation: "Das Prinzip fordert eine einzige, klar verantwortliche Schnittstelle zum Kunden." },
      { id: "q2", question: "Welcher GoM-Grundsatz fordert, dass gleiche Realabläufe im Modell identisch dargestellt werden?", options: ["Wirtschaftlichkeit", "Vergleichbarkeit", "Klarheit", "Relevanz"], correctIndex: 1, explanation: "Vergleichbarkeit sorgt für eine konsistente Modellierung gleichartiger Abläufe." },
      { id: "q3", question: "Was beschreibt das Detaillierungsdilemma?", options: ["Mehr Detaillierung ist immer besser und hat keine Nachteile", "Mehr Detaillierung ist für bestimmte Zwecke (Simulation, Kostenplanung) nötig, geht aber zulasten von Klarheit und Wirtschaftlichkeit", "Prozessmodelle sollten nie detailliert werden", "Das Dilemma betrifft nur die IT-Abteilung"], correctIndex: 1, explanation: "Der Zielkonflikt zwischen Detailtiefe und Übersichtlichkeit/Aufwand ist der Kern des Dilemmas." },
      { id: "q4", question: "Vertikale Hierarchisierung bei der Prozessmodellierung bedeutet:", options: ["Bildung von Prozessvarianten für unterschiedliche Kunden", "Verfeinerung eines Prozesses in Teilprozesse auf verschiedenen Detaillierungsebenen", "Das Zusammenlegen aller Prozesse zu einem einzigen Großprozess", "Der Verzicht auf jede Struktur"], correctIndex: 1, explanation: "Vertikale Hierarchisierung schafft Ebenen wie Makro-, Meso- und Mikroprozesse." },
      { id: "q5", question: "Prozessarchitektur unterscheidet sich vom Prozessdesign dadurch, dass sie...", options: ["nur einen einzelnen Prozess im Detail beschreibt", "die Bündelung/Verknüpfung mehrerer Prozesse zu einer Gesamtstruktur betrifft", "ausschließlich IT-Systeme beschreibt", "keine Rolle in der Prozessmodellierung spielt"], correctIndex: 1, explanation: "Architektur bezieht sich auf die Gesamtstruktur, Design auf den einzelnen Prozess." },
      { id: "q6", question: "Bei der Modellierung von Gesundheitsförderungsprozessen hilft die vertikale Hierarchisierung, weil...", options: ["sie jede Detaillierung überflüssig macht", "sie komplexe Programme über Makro-, Meso- und Mikroebene steuerbar macht", "sie nur für Produktionsprozesse gilt", "sie Kennzahlen automatisch berechnet"], correctIndex: 1, explanation: "Die Ebenen-Struktur hilft, den Gesamtprozess und seine Teilschritte transparent zu steuern." }
    ]
  },
  {
    id: "a4-prozessbemessung",
    chapter: 1,
    order: 4,
    title: "Prozessbemessung und -bewertung",
    icon: "📏",
    summary: "Effektivität, Effizienz, Qualität und Zeit messen - und warum sich Kosten über Kostentreiber verursachungsgerecht zurechnen lassen.",
    explanation: [
      { type: "p", text: "Prozessbemessung dient nicht nur der Reaktion auf akuten Druck, sondern auch der Risikoprophylaxe durch einen laufenden Soll-Ist-Vergleich. Eine anschauliche Faustregel aus der Vorlesung: Effizienz bedeutet 'das Holz richtig hacken' (mit möglichst wenig Aufwand arbeiten), Effektivität bedeutet 'das richtige Holz hacken' (die richtigen Dinge tun)." },
      { type: "p", text: "Prozesse werden entlang drei zentraler Dimensionen bemessen:" },
      { type: "list", items: [
        "Qualität: anvisierte Resultate bezüglich der Kundenerwartung (intern/extern)",
        "Kosten: wertmäßiger Ressourceneinsatz im Verhältnis zu Planung/Kalkulation",
        "Zeit: Leistungsfähigkeit bezüglich der vom Kunden geforderten, wettbewerbsrelevanten Zeit"
      ]},
      { type: "p", text: "Wichtig: Die Beurteilung erfolgt immer relativ zum Wettbewerb, da für jeden Prozess eine Kundenalternative existiert. Das Messvorgehen umfasst drei Schritte: Soll-Wert festlegen, Ist-Wert erheben, Vergleich durchführen. Für jedes kaufentscheidende Kriterium werden eine Kennzahl, eine Messvorschrift, ein Verantwortlicher und ein Takt (Messhäufigkeit) definiert." },
      { type: "p", text: "Die Prozesskostenrechnung ist ein Verfahren zur verursachungsgerechten Zurechnung von Prozesskosten über Kostentreiber (cost driver) - im Unterschied zur klassischen Kostenstellenrechnung, die Kosten pauschal umlegt. Vorteil: sie macht mittel- bis langfristige Kosten- und Ressourcenveränderungen sichtbar, gerade in indirekten Bereichen, die klassisch schwer zurechenbar sind." },
      { type: "p", text: "Gesundheitsbezug: Effektivitätskennzahlen (Zielerreichung gesundheitsbezogener Indikatoren), Effizienzkennzahlen (Kosten pro Teilnehmer, Ressourceneinsatz) und Qualitätskennzahlen (Zufriedenheit, Nachhaltigkeit) ermöglichen die strategische Einbettung von Gesundheitsförderung in ein Kennzahlensystem. Der Soll-Ist-Vergleich funktioniert analog: Ohne Messung bleibt unklar, ob Gesundheitsförderung tatsächlich wirkt." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Unternehmen möchte den Erfolg seines betrieblichen Gesundheitsmanagements messen. Definieren Sie für die Dimension 'Qualität' eine passende Kennzahl inklusive Messvorschrift und Verantwortlichem.",
        solution: [
          { type: "p", text: "Beispielkennzahl: Teilnehmerzufriedenheit mit dem Gesundheitsangebot. Messvorschrift: jährliche anonyme Befragung aller Teilnehmenden auf einer Skala von 1-10 nach Abschluss des Programms. Verantwortlicher: HR-Verantwortliche(r) für Gesundheitsmanagement. Takt: einmal jährlich nach Programmende." }
        ]
      },
      {
        id: "ex2",
        prompt: "Erklären Sie den Unterschied zwischen klassischer Kostenstellenrechnung und Prozesskostenrechnung anhand eines Beispiels aus der Beschaffungsabteilung.",
        solution: [
          { type: "p", text: "Bei der klassischen Kostenstellenrechnung würden die Gesamtkosten der Beschaffungsabteilung pauschal (z. B. nach Umsatzanteil) auf verschiedene Produkte umgelegt - unabhängig davon, wie viel Beschaffungsaufwand ein Produkt tatsächlich verursacht. Bei der Prozesskostenrechnung wird stattdessen ein Kostentreiber wie 'Anzahl Bestellungen' identifiziert: Ein Produkt, das viele kleine Einzelbestellungen benötigt, erhält mehr Beschaffungskosten zugerechnet als ein Produkt mit wenigen Großbestellungen - die Zurechnung erfolgt also verursachungsgerecht." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "'Das Holz richtig hacken' beschreibt in der Vorlesungsmetapher...", options: ["Effektivität", "Effizienz", "Transparenz", "Qualität"], correctIndex: 1, explanation: "Mit möglichst wenig Aufwand arbeiten = Effizienz, im Gegensatz zu 'das richtige Holz hacken' = Effektivität." },
      { id: "q2", question: "Warum erfolgt die Beurteilung eines Prozesses immer relativ zum Wettbewerb?", options: ["Weil für jeden Prozess eine Kundenalternative existiert", "Weil interne Kennzahlen grundsätzlich falsch sind", "Weil der Wettbewerb die Kennzahlen vorgibt", "Das ist nicht korrekt - die Beurteilung erfolgt nie relativ"], correctIndex: 0, explanation: "Kunden können immer zu Alternativen wechseln, daher ist die relative Positionierung entscheidend." },
      { id: "q3", question: "Welche drei Dimensionen werden bei der Prozessbemessung typischerweise betrachtet?", options: ["Qualität, Kosten, Zeit", "Effektivität, Personal, Standort", "Umsatz, Gewinn, Marktanteil", "Nur Kosten"], correctIndex: 0, explanation: "Qualität, Kosten und Zeit sind die drei zentralen Bemessungsdimensionen." },
      { id: "q4", question: "Was ist ein Kostentreiber (cost driver)?", options: ["Ein Synonym für Gesamtkosten", "Eine Einflussgröße auf den Kosten-/Ressourcenverbrauch eines Prozesses", "Ein Mitarbeiter der Finanzabteilung", "Ein Begriff aus dem Marketing"], correctIndex: 1, explanation: "Kostentreiber ermöglichen die verursachungsgerechte Zurechnung von Prozesskosten." },
      { id: "q5", question: "Der Hauptvorteil der Prozesskostenrechnung gegenüber der klassischen Kostenstellenrechnung ist:", options: ["Sie ist immer günstiger in der Durchführung", "Sie rechnet Kosten verursachungsgerecht über Kostentreiber statt pauschal zu", "Sie ignoriert indirekte Kostenbereiche komplett", "Sie ersetzt die Buchhaltung vollständig"], correctIndex: 1, explanation: "Die verursachungsgerechte Zurechnung ist der zentrale Vorteil gegenüber pauschaler Umlage." },
      { id: "q6", question: "Das Messvorgehen bei der Prozessbemessung umfasst welche Schritte?", options: ["Nur Ist-Wert erheben", "Soll-Wert festlegen, Ist-Wert erheben, Vergleich durchführen", "Nur Kennzahlen definieren, ohne Messung", "Zufällige Stichprobenziehung ohne Zielwert"], correctIndex: 1, explanation: "Diese drei Schritte bilden den systematischen Soll-Ist-Vergleich." }
    ]
  },
  {
    id: "a5-prozessgestaltung",
    chapter: 1,
    order: 5,
    title: "Prozessgestaltung und -optimierung",
    icon: "🛠️",
    summary: "Business Reengineering, Process Owner und die zehn Fallstricke der Prozessoptimierung.",
    explanation: [
      { type: "p", text: "Business Reengineering bedeutet die grundlegende Neugestaltung der Organisation mit dem Prozess statt der Funktion als Leitstrahl. Zentrale Rolle spielt der Prozessverantwortliche (Process Owner): eine Person mit Gesamtverantwortung für einen Prozess, die das Prozess-Team durch Selbstabstimmung koordiniert - nicht durch Weisung wie eine klassische Führungskraft." },
      { type: "p", text: "Traditionelle vertikale (funktionsorientierte) Organisationen haben typische Probleme: Koordinationsbedarf an Schnittstellen ('Liegestellen') mit Abstimmungsproblemen, Informationsverluste, organisatorische Unverantwortlichkeit (Fehler kaum zurechenbar) und Überforderung zentraler Stellen." },
      { type: "p", text: "Bei der horizontalen Segmentierung von Prozessen gibt es drei Formen: nach Funktion (ähnlich der traditionellen Form, viele interne Schnittstellen), nach Problemhaltigkeit/Komplexität (kundenorientierte Rundumbearbeitung möglich, aber Komplexität nicht immer vorhersehbar) und nach Kundengruppen (konsequenteste Kundenorientierung nach dem Prinzip 'one face to the customer', aber Spezialisierungsvorteile entfallen)." },
      { type: "p", text: "Zehn zentrale Erfolgsfaktoren der Geschäftsprozessoptimierung (nach Osterloh/Frost):" },
      { type: "list", items: [
        "1. Funktionsübergreifende, kundenorientierte Rundumbearbeitung - von der 'Silo-' zur 'Flotillen-Organisation'.",
        "2. Neugestaltung der Prozesse statt Optimierung bestehender Abläufe - Konzentration auf wenige, robuste Kernprozesse.",
        "3. Einbindung des Kunden in die eigene Organisation - und ebenso der Lieferanten.",
        "4. Zukunftsgerichtete Entwicklung von Kernkompetenzen - keine kurzfristige Reduktion der Wertschöpfungstiefe.",
        "5. Maßschneiderei statt Standardkonfektion - standardisierte Prozesse sind selten dauerhafter Wettbewerbsvorteil.",
        "6. Von bewährten Konzepten lernen - eigene und fremde Erfahrungen nutzen.",
        "7. Dynamik schützen - unnötige von notwendigen Redundanzen unterscheiden.",
        "8. Einbindung von Spezialisten bei der Teambildung - Groupthink vermeiden.",
        "9. Hohes Engagement der Unternehmensleitung - Ressourcen freigeben, Widerstände überwinden.",
        "10. Keine Bombenwurfstrategie! - 'Top down für die Ziele, bottom up für den Weg dorthin'. Menschen tragen Prozesse - man kann sie ihnen nicht hinterhertragen."
      ]},
      { type: "p", text: "Gesundheitsbezug: Bei der Wahl zwischen inkrementeller Optimierung (einzelne Maßnahmenabläufe verbessern) und radikaler Neuausrichtung eines Gesundheitsmanagementsystems müssen Wirksamkeit, Ressourcensituation und kulturelle Rahmenbedingungen berücksichtigt werden. Nachhaltigkeit in der Gesundheitsförderung entsteht durch regelmäßige Erfolgskontrolle - nicht durch einmalige Maßnahmen." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Krankenversicherer möchte seine Kundenbetreuung neu organisieren und zwischen drei Segmentierungsformen wählen: nach Funktion, nach Problemkomplexität oder nach Kundengruppen (z. B. Privatkunden vs. Firmenkunden). Welche Form passt am besten zum Ziel maximaler Kundenorientierung, und welchen Nachteil nimmt das Unternehmen dafür in Kauf?",
        solution: [
          { type: "p", text: "Die Segmentierung nach Kundengruppen passt am besten zum Ziel maximaler Kundenorientierung ('one face to the customer') - jede Kundengruppe hat eine feste, spezialisierte Ansprechstruktur, die eng auf ihre Bedürfnisse eingeht." },
          { type: "p", text: "Nachteil: Spezialisierungsvorteile (z. B. hochspezialisierte Bearbeitung bestimmter Fachthemen quer über alle Kundengruppen) entfallen, und für ähnliche Probleme können in unterschiedlichen Kundengruppen-Teams unterschiedliche Lösungen entstehen." }
        ]
      },
      {
        id: "ex2",
        prompt: "Erklären Sie anhand von zwei der zehn Erfolgsfaktoren (Ihrer Wahl), warum eine Geschäftsleitung, die eine Prozessoptimierung im Alleingang plant und den Mitarbeitenden am Ende nur das Ergebnis mitteilt, gegen wichtige Prinzipien verstößt.",
        solution: [
          { type: "p", text: "Verstoß gegen Prinzip 10 ('Keine Bombenwurfstrategie!'): Die Optimierung sollte 'top down für die Ziele, bottom up für den Weg dorthin' erfolgen - ein reiner Alleingang der Leitung ohne Mitarbeitereinbindung ist genau die kritisierte 'Bombenwurfstrategie'." },
          { type: "p", text: "Verstoß gegen Prinzip 8 (Einbindung von Spezialisten bei der Teambildung): Ohne Einbindung der operativ Tätigen und Fachspezialisten fehlt wichtiges Praxiswissen, und die Gefahr von Groupthink in einem rein leitungsinternen Zirkel steigt." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was ist die Kernaufgabe eines Process Owners?", options: ["Weisungsbefugnis wie eine klassische Führungskraft ausüben", "Gesamtverantwortung für einen Prozess tragen und das Team durch Selbstabstimmung koordinieren", "Nur die IT-Systeme des Prozesses verwalten", "Ausschließlich externe Lieferanten koordinieren"], correctIndex: 1, explanation: "Der Process Owner koordiniert durch Selbstabstimmung, nicht durch klassische hierarchische Weisung." },
      { id: "q2", question: "Welche Segmentierungsform bietet die konsequenteste Kundenorientierung?", options: ["Nach Funktion", "Nach Problemhaltigkeit/Komplexität", "Nach Kundengruppen", "Keine der drei berücksichtigt den Kunden"], correctIndex: 2, explanation: "Die Segmentierung nach Kundengruppen setzt 'one face to the customer' am konsequentesten um." },
      { id: "q3", question: "Prinzip 10 der Erfolgsfaktoren ('Keine Bombenwurfstrategie') fordert:", options: ["Top down für die Ziele, bottom up für den Weg dorthin", "Ausschließlich Top-down-Entscheidungen ohne Mitarbeiterbeteiligung", "Ausschließlich Bottom-up ohne strategische Ausrichtung", "Geheimhaltung bis zum Umsetzungstag"], correctIndex: 0, explanation: "Die Balance zwischen strategischer Zielvorgabe von oben und operativer Mitgestaltung von unten ist zentral." },
      { id: "q4", question: "Prinzip 2 der Erfolgsfaktoren empfiehlt:", options: ["Bestehende Abläufe in kleinen Schritten zu optimieren", "Prozesse neu zu gestalten statt bestehende Abläufe nur zu optimieren, mit Fokus auf wenige robuste Kernprozesse", "Möglichst viele Prozesse parallel zu betreiben", "Kernprozesse regelmäßig auszulagern"], correctIndex: 1, explanation: "Business Reengineering setzt auf radikale Neugestaltung statt inkrementeller Optimierung bestehender Abläufe." },
      { id: "q5", question: "Ein typisches Problem traditioneller, vertikaler Organisationen ist:", options: ["Zu geringe Anzahl an Hierarchieebenen", "Organisatorische Unverantwortlichkeit, da Fehler an Schnittstellen kaum zurechenbar sind", "Zu hohe Kundenorientierung", "Zu wenige Abteilungen"], correctIndex: 1, explanation: "Schnittstellenprobleme erschweren die klare Zurechnung von Verantwortung." },
      { id: "q6", question: "Bei der Optimierung eines Gesundheitsmanagementsystems sollte laut Vorlesung berücksichtigt werden:", options: ["Nur die Kosten, alle anderen Faktoren sind irrelevant", "Wirksamkeit, Ressourcensituation sowie kulturelle/organisatorische Rahmenbedingungen bei der Wahl zwischen inkrementeller und radikaler Vorgehensweise", "Ausschließlich die Meinung der Geschäftsleitung", "Eine einmalige Maßnahme reicht für nachhaltigen Erfolg"], correctIndex: 1, explanation: "Nachhaltigkeit entsteht durch regelmäßige Erfolgskontrolle und eine zum Kontext passende Optimierungsstrategie." }
    ]
  },
  {
    id: "a6-marktorientierte-unternehmensfuehrung",
    chapter: 1,
    order: 6,
    title: "Marktorientierte Unternehmensführung",
    icon: "🎯",
    summary: "Wie Porters generische Wettbewerbsstrategien mit Prozessmanagement zusammenhängen - und wo es wirklich hilft.",
    explanation: [
      { type: "p", text: "Der Market Based View (Porter) leitet Wettbewerbsvorteile aus der Marktstruktur ab, insbesondere über die Branchenstrukturanalyse (fünf Wettbewerbskräfte) und die Wertkette. Porter unterscheidet drei generische Wettbewerbsstrategien:" },
      { type: "list", items: [
        "Kostenführerschaft: Wettbewerbsvorteil über niedrigste Kosten, Skaleneffekte und Fixkostendegression.",
        "Differenzierung: Wettbewerbsvorteil über die Einzigartigkeit von Produkten/Dienstleistungen.",
        "Fokussierung: Konzentration auf ein spezifisches Marktsegment (kombinierbar mit den anderen beiden Strategien)."
      ]},
      { type: "p", text: "Prozessmanagement und Kostenführerschaft: Die Basis der Kostenführerschaft sind Skaleneffekte, Erfahrungskurveneffekte, Verfahrensinvestitionen und eine klare, funktional spezialisierte Aufgabengliederung. Prozessmanagement fokussiert dagegen nicht die Fixkostendegression, sondern die Reduzierung von Koordinationskosten - es ist daher nicht prädestiniert, die Kostenführerschaft zu unterstützen." },
      { type: "p", text: "Prozessmanagement und Differenzierung: Differenzierung basiert auf Einzigartigkeit, enger Koordination von Produktentwicklung und Marketing sowie einer für kreative Mitarbeitende attraktiven Kultur. Prozessmanagement kann hier die geforderte Verschiedenartigkeit herstellen - sein Kostensenkungspotenzial liegt in den Koordinationskosten, sein Differenzierungspotenzial in der crossfunktionalen Integration, die einzigartige Prozesse schafft. Prozessmanagement ist daher ein geeigneter Ansatz zur Unterstützung der Differenzierungsstrategie." },
      { type: "p", text: "Marktorientierte Unternehmensführung bedeutet die strategische Ausrichtung aller Aktivitäten (Strategie, Struktur und Prozesslogik) auf Kundenbedürfnisse und Wettbewerbsanforderungen - wichtig ist die Abgrenzung: Marktorientierung ist nicht identisch mit reiner Absatzorientierung, sondern betrifft das gesamte System." },
      { type: "p", text: "Gesundheitsbezug: Übertragen auf betriebliche Gesundheitsförderung bedeutet Marktorientierung, dass sich Gesundheitsangebote konsequent am tatsächlichen Bedarf der 'Kunden' (der Mitarbeitenden) ausrichten müssen - end-to-end von Bedarf über Angebot und Evaluation bis Feedback - und laufend angepasst werden, statt starr zu bleiben." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Unternehmen positioniert sich klar als Anbieter maßgeschneiderter, hochspezialisierter Beratungsleistungen mit einzigartigem Know-how - nicht als günstigster Anbieter am Markt. Welche der drei generischen Strategien verfolgt es, und ist Prozessmanagement dafür grundsätzlich geeignet?",
        solution: [
          { type: "p", text: "Das Unternehmen verfolgt die Differenzierungsstrategie (Einzigartigkeit statt niedrigster Preis). Prozessmanagement ist hierfür grundsätzlich gut geeignet, da es über crossfunktionale Integration die geforderte Verschiedenartigkeit/Einzigartigkeit der Prozesse herstellen kann - anders als bei einer reinen Kostenführerschaftsstrategie, wo Prozessmanagement weniger prädestiniert ist." }
        ]
      },
      {
        id: "ex2",
        prompt: "Warum ist Prozessmanagement laut Vorlesung nicht besonders gut geeignet, um eine reine Kostenführerschaftsstrategie zu unterstützen?",
        solution: [
          { type: "p", text: "Kostenführerschaft basiert vor allem auf Skaleneffekten, Erfahrungskurveneffekten und funktionaler Spezialisierung mit hoher Kontrollintensität - also auf Fixkostendegression durch Größe und Wiederholung. Prozessmanagement setzt dagegen primär bei der Reduzierung von Koordinationskosten (Schnittstellen, Abstimmung) an, nicht bei der Fixkostendegression. Diese unterschiedlichen Hebel passen nur eingeschränkt zusammen." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche drei generischen Wettbewerbsstrategien unterscheidet Porter?", options: ["Kostenführerschaft, Differenzierung, Fokussierung", "Wachstum, Stabilität, Rückzug", "Zentral, Dezentral, Hybrid", "Push, Pull, Just-in-Time"], correctIndex: 0, explanation: "Diese drei Strategien bilden Porters klassisches Grundmodell." },
      { id: "q2", question: "Für welche Strategie ist Prozessmanagement laut Vorlesung besonders gut geeignet?", options: ["Kostenführerschaft", "Differenzierung", "Keine der beiden", "Nur für Fokussierung ohne die anderen beiden"], correctIndex: 1, explanation: "Über crossfunktionale Integration kann Prozessmanagement Einzigartigkeit von Prozessen schaffen - das passt zur Differenzierungsstrategie." },
      { id: "q3", question: "Worauf fokussiert sich Prozessmanagement primär bei der Kostenwirkung?", options: ["Fixkostendegression durch Skaleneffekte", "Reduzierung von Koordinationskosten", "Erhöhung der Lagerbestände", "Reduzierung der Personalkosten durch Entlassungen"], correctIndex: 1, explanation: "Prozessmanagement wirkt vor allem über die Senkung von Koordinationskosten, nicht über Skaleneffekte." },
      { id: "q4", question: "Marktorientierte Unternehmensführung bedeutet:", options: ["Ausschließliche Fokussierung auf den Vertrieb", "Strategische Ausrichtung von Strategie, Struktur und Prozesslogik auf Kundenbedürfnisse und Wettbewerb", "Verzicht auf jede interne Organisation", "Reine Kostenorientierung ohne Kundenbezug"], correctIndex: 1, explanation: "Marktorientierung betrifft das gesamte System, nicht nur den Absatz." },
      { id: "q5", question: "Fokussierung als generische Strategie bedeutet:", options: ["Konzentration auf ein spezifisches Marktsegment, kombinierbar mit Kostenführerschaft oder Differenzierung", "Immer eine eigenständige, nicht kombinierbare Strategie", "Verzicht auf jede Marktsegmentierung", "Ausschließlich für kleine Unternehmen relevant"], correctIndex: 0, explanation: "Fokussierung lässt sich mit Kostenführerschaft oder Differenzierung kombinieren." },
      { id: "q6", question: "Übertragen auf Gesundheitsförderung bedeutet Marktorientierung:", options: ["Gesundheitsangebote werden unabhängig vom Bedarf der Mitarbeitenden festgelegt", "Angebote richten sich end-to-end am tatsächlichen Bedarf der Mitarbeitenden aus und werden laufend angepasst", "Nur die Kosten der Angebote zählen", "Gesundheitsförderung braucht keine Evaluation"], correctIndex: 1, explanation: "Die Mitarbeitenden werden wie 'Kunden' behandelt, deren Bedarf laufend erhoben und bedient wird." }
    ]
  },
  {
    id: "a7-ressourcenorientierte-unternehmensfuehrung",
    chapter: 1,
    order: 7,
    title: "Ressourcenorientierte Unternehmensführung",
    icon: "💎",
    summary: "Der Resource-Based View: Kernkompetenzen, Isolationsbarrieren und warum Ressourcen allein nicht reichen.",
    explanation: [
      { type: "p", text: "Der Resource Based View erklärt Wettbewerbsvorteile nicht primär über die Marktstruktur, sondern über die Ressourcen und Kompetenzen eines Unternehmens. Strategisch relevante Ressourcen lassen sich in drei Kategorien einteilen: physikalische Ressourcen (Technologie, Standort, Rohstoffzugang), humane Ressourcen (Ausbildung, Erfahrung, Motivation) und organisatorische Ressourcen (Innovationsfähigkeit, Kundennähe, Flexibilität)." },
      { type: "p", text: "Damit eine Ressource einen nachhaltigen Wettbewerbsvorteil begründen kann, muss sie mehrere Eigenschaften gleichzeitig erfüllen: Nicht-Imitierbarkeit, Nicht-Substituierbarkeit, Unternehmensspezifität, Immobilität, Heterogenität und Faktormarktinsuffizienz (nicht einfach am Markt käuflich). Wichtiges Fazit: Das bloße Vorhandensein von Ressourcen ist allenfalls eine notwendige, aber keine hinreichende Bedingung für das Vorhandensein von Kompetenzen." },
      { type: "p", text: "Eine Kernkompetenz entsteht durch eine erfolgskritische, unternehmensspezifische Ressourcenkombination mit explizitem Marktbezug - sie manifestiert sich in Kernprodukten/-leistungen und ist strategisch nur relevant, wenn sie verteidigungsfähig ist. Diese Verteidigung erfolgt über Isolationsbarrieren:" },
      { type: "list", items: [
        "Implizites/tazites Wissen: auf mehrere Personen verteilt, in organisatorischen Routinen gespeichert - schwer kopierbar.",
        "Kausale Mehrdeutigkeit: der Ursache-Wirkungs-Zusammenhang ist für Außenstehende schwer nachvollziehbar.",
        "Pfadabhängigkeit: Imitation würde bedeuten, den eigenen strategischen Entwicklungspfad zu verlassen (sunk costs).",
        "Interorganisationale Netzbeziehungen: beziehungsspezifische Ressourcen lassen sich nur schwer teilen/übertragen."
      ]},
      { type: "p", text: "Kernkompetenzen durchlaufen einen Lebenszyklus: Identifikation (Potenziale werden zu Prozessen), Entwicklung (Lernen und Wissensakkumulation), Integration (Einbettung in Wettbewerbsvorteile) und Nutzung (Ausschöpfung der Kernprozess-Stärken). Wichtig: Markt- und ressourcenorientierte Strategie schließen sich nicht aus, sondern ergänzen sich - Ressourcen entfalten ihre Wirkung erst, wenn sie in marktwirksamen Leistungsprozessen zusammengeführt werden." },
      { type: "p", text: "Gesundheitsbezug: Nachhaltigkeit in der Gesundheitsförderung entsteht durch kontinuierliche Kompetenzentwicklung und eine Kultur der Gesundheitsorientierung - analog zur Kernkompetenz-Logik. Fachliche Expertise wird selbst zur zentralen Prozessressource, die durch Integration von Markt- und Ressourcenlogik zu strategisch verankerten, ressourcengestützten Gesundheitsprogrammen führt." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Wettbewerber versucht seit Jahren erfolglos, die Innovationsfähigkeit eines Technologieunternehmens zu kopieren, kann aber nicht genau nachvollziehen, welche internen Abläufe und Routinen dafür verantwortlich sind. Um welche Isolationsbarriere handelt es sich hier am ehesten?",
        solution: [
          { type: "p", text: "Es handelt sich um kausale Mehrdeutigkeit: Der Ursache-Wirkungs-Zusammenhang zwischen den internen Abläufen und dem Erfolg ist für den Wettbewerber nicht klar nachvollziehbar, was die Imitation erschwert." }
        ]
      },
      {
        id: "ex2",
        prompt: "Erklären Sie, warum das bloße Vorhandensein von Ressourcen laut Vorlesung nicht ausreicht, um eine Kernkompetenz zu begründen. Nennen Sie ein Gegenbeispiel.",
        solution: [
          { type: "p", text: "Ressourcen sind lediglich eine notwendige, keine hinreichende Bedingung: Erst durch eine erfolgskritische, unternehmensspezifische Kombination und einen expliziten Marktbezug entsteht eine Kernkompetenz. Beispiel: Zwei Unternehmen können über dieselben qualifizierten Mitarbeitenden (Ressource) verfügen, aber nur eines davon kombiniert dieses Wissen so mit organisatorischen Routinen und Marktausrichtung, dass daraus tatsächlich ein schwer imitierbarer Wettbewerbsvorteil (Kernkompetenz) entsteht." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche drei Kategorien strategisch relevanter Ressourcen werden unterschieden?", options: ["Physikalische, humane, organisatorische Ressourcen", "Finanzielle, rechtliche, politische Ressourcen", "Nur materielle Ressourcen", "Nur immaterielle Ressourcen"], correctIndex: 0, explanation: "Diese drei Kategorien bilden die Grundlage des Resource Based View." },
      { id: "q2", question: "Was besagt die 'kausale Mehrdeutigkeit' als Isolationsbarriere?", options: ["Der Ursache-Wirkungs-Zusammenhang einer Kompetenz ist für Außenstehende schwer nachvollziehbar", "Die Kompetenz ist öffentlich dokumentiert", "Die Kompetenz hat keinen Marktbezug", "Die Kompetenz kann beliebig oft kopiert werden"], correctIndex: 0, explanation: "Schwer nachvollziehbare Ursache-Wirkungs-Beziehungen erschweren die Imitation." },
      { id: "q3", question: "Ist das bloße Vorhandensein wertvoller Ressourcen laut Vorlesung ausreichend für eine Kernkompetenz?", options: ["Ja, das allein reicht immer aus", "Nein, es ist allenfalls eine notwendige, aber keine hinreichende Bedingung", "Nein, Ressourcen sind für Kernkompetenzen irrelevant", "Nur bei physikalischen Ressourcen reicht es aus"], correctIndex: 1, explanation: "Erst die spezifische, marktbezogene Kombination macht aus Ressourcen eine Kernkompetenz." },
      { id: "q4", question: "Pfadabhängigkeit als Isolationsbarriere bedeutet:", options: ["Imitation würde bedeuten, den bisherigen strategischen Entwicklungspfad aufzugeben (sunk costs)", "Die Kompetenz ist an keinen bestimmten Weg gebunden", "Wettbewerber können jederzeit ohne Kosten imitieren", "Der Begriff bezieht sich nur auf physische Standorte"], correctIndex: 0, explanation: "Ein Wechsel des Entwicklungspfads würde bereits getätigte Investitionen entwerten." },
      { id: "q5", question: "Wie verhalten sich markt- und ressourcenorientierte Strategie laut Vorlesung zueinander?", options: ["Sie schließen sich grundsätzlich aus", "Sie ergänzen sich - Ressourcen wirken erst in marktwirksamen Prozessen", "Nur die marktorientierte Strategie ist relevant", "Nur die ressourcenorientierte Strategie ist relevant"], correctIndex: 1, explanation: "Beide Perspektiven ergänzen sich, entgegen einer verbreiteten Fehlannahme." },
      { id: "q6", question: "In welcher Phase des Kompetenz-Lebenszyklus werden Kernprozess-Stärken ausgeschöpft?", options: ["Identifikation", "Entwicklung", "Integration", "Nutzung"], correctIndex: 3, explanation: "Die Nutzungsphase ist die Phase der Ausschöpfung bestehender Stärken." }
    ]
  },
  {
    id: "a8-fazit-gesamtintegration",
    chapter: 1,
    order: 8,
    title: "Prozessmanagement – Fazit/Gesamtintegration",
    icon: "🧩",
    summary: "Alle Fäden zusammen: PDCA, das Spannungsfeld Effizienz-Qualität-Flexibilität und der rote Faden über das ganze Modul.",
    explanation: [
      { type: "p", text: "Prozessmanagement ist letztlich eine Organisations- und Steuerungslogik, die Organisationen auf durchgängige Wertschöpfungs- und Leistungsprozesse ausrichtet - statt auf Abteilungen. Vier Bausteine fügen sich zu einer systematischen Prozessverbesserung zusammen: Prozessidentifikation und -modellierung (Definition, Struktur, Transparenz), Prozessmessung und -bewertung (Kennzahlen zu Zeit, Qualität, Kosten), Prozessgestaltung und -optimierung (kontinuierliche Verbesserung statt punktueller Reorganisation, nach der PDCA-Logik: Plan-Do-Check-Act) sowie die Integration mit Strategie und Ressourcen (markt- und ressourcenorientierte Perspektiven)." },
      { type: "p", text: "Ein zentrales Spannungsfeld muss dabei immer wieder neu ausbalanciert werden: Überstandardisierung erhöht die Effizienz, begrenzt aber Innovationsfähigkeit und Handlungsspielräume (geringere Flexibilität); fehlende Standards erhöhen die Flexibilität, verursachen aber höhere Koordinations- und Fehlerkosten (geringere Effizienz/Qualität). Die Kunst liegt in der Abwägung zwischen Standardisierung und Flexibilität." },
      { type: "p", text: "Klare, stabile Prozesse reduzieren Unsicherheit, fördern Handlungssicherheit und stärken Motivation, Selbstwirksamkeit und Kooperation. Prozessstörungen dagegen - Zeitdruck, Konflikte an Schnittstellen, Doppelarbeit - erzeugen Belastungsfolgen und senken Leistungsfähigkeit und Wohlbefinden. Prozessmanagement erfordert daher bereichsübergreifende Führungs- und Kooperationsstrukturen sowie eine Organisationskultur, die Fehleroffenheit, Vertrauen und Beteiligung ermöglicht." },
      { type: "p", text: "Gesamtfazit - der rote Faden über alle 16 Themen des Moduls (Prozessmanagement und Wertschöpfungskette gemeinsam betrachtet):" },
      { type: "list", items: [
        "1. Dispositionsebene als zentraler Hebel: In praktisch jedem Kapitel wird deutlich, dass Gesundheit primär durch Management-/Planungsentscheidungen (Personalbemessung, Kapazitätsplanung, Kennzahlenwahl, Lieferantenauswahl) entsteht oder erodiert - nicht durch nachgelagerte individuelle Verhaltensangebote.",
        "2. Personal als wiederkehrender Engpassfaktor: Von der Bedarfsermittlung über das Bestellmanagement bis zu Produktion und Dienstleistungen wird Personal wiederholt als der limitierende, zugleich gesundheitlich vulnerable Faktor identifiziert.",
        "3. Doppelwirkung von Effizienzinstrumenten: Digitalisierung, Just-in-Time, Kennzahlensteuerung und Standardisierung wirken durchgängig zweischneidig - sie schaffen Effizienz, können aber bei Überoptimierung neue Belastungen erzeugen.",
        "4. Strukturelle statt additive Gesundheitsförderung: Gesundheitsförderung ist kein 'Add-on'-Programm, sondern integraler Bestandteil der Prozess- und Wertschöpfungsgestaltung selbst."
      ]}
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Unternehmen führt sehr strenge, bis ins letzte Detail standardisierte Arbeitsabläufe ein, um die Effizienz zu maximieren. Nach einiger Zeit klagen Mitarbeitende über sinkende Motivation und mangelnden Handlungsspielraum bei unerwarteten Kundenanfragen. Ordnen Sie dieses Beispiel in das Spannungsfeld Effizienz-Qualität-Flexibilität ein.",
        solution: [
          { type: "p", text: "Das Unternehmen hat das Spannungsfeld einseitig zugunsten der Effizienz aufgelöst: Überstandardisierung erhöht zwar kurzfristig die Effizienz, begrenzt aber die Innovations- und Anpassungsfähigkeit (Flexibilität) - genau das im Vorlesungstext beschriebene Risiko. Die sinkende Motivation zeigt zudem, dass die gesundheitlich/psychologisch positive Wirkung klarer Prozesse (Handlungssicherheit) hier in ihr Gegenteil umgeschlagen ist, weil zu wenig Handlungsspielraum bleibt." }
        ]
      },
      {
        id: "ex2",
        prompt: "Erläutern Sie anhand von Punkt 3 des Gesamtfazits ('Doppelwirkung von Effizienzinstrumenten'), warum die Einführung von Just-in-Time-Bestellungen sowohl positive als auch negative gesundheitliche Auswirkungen haben kann.",
        solution: [
          { type: "p", text: "Just-in-Time steigert die Effizienz, da kaum Lagerbestände und damit gebundenes Kapital nötig sind. Gleichzeitig erhöht es aber die Störanfälligkeit: Fällt eine Lieferung aus oder verzögert sich, entstehen sofort Engpässe, Zeitdruck und Improvisationsbedarf bei den Mitarbeitenden - die Effizienzsteigerung erkauft sich also potenziell mit höherer Belastung bei Störungen. Genau das ist die im Gesamtfazit beschriebene Doppelwirkung von Effizienzinstrumenten." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Wofür steht PDCA im Kontext der Prozessgestaltung?", options: ["Plan-Do-Check-Act als Kreislauf kontinuierlicher Verbesserung", "Ein Kennzahlensystem für Lieferanten", "Eine Abkürzung für Prozessdokumentation", "Ein Synonym für Business Reengineering"], correctIndex: 0, explanation: "PDCA beschreibt den Kreislauf kontinuierlicher Verbesserung, nicht eine einmalige Reorganisation." },
      { id: "q2", question: "Welches Spannungsfeld muss Prozessmanagement laut Fazit-Kapitel immer wieder ausbalancieren?", options: ["Umsatz vs. Gewinn", "Effizienz, Qualität und Flexibilität", "Marketing vs. Vertrieb", "Inland vs. Ausland"], correctIndex: 1, explanation: "Überstandardisierung vs. fehlende Standards ist der zentrale Zielkonflikt." },
      { id: "q3", question: "Laut Gesamtfazit ist der zentrale Hebel für Gesundheit in Organisationen:", options: ["Individuelle Verhaltensangebote für Mitarbeitende", "Management-/Planungsentscheidungen auf der Dispositionsebene", "Ausschließlich das persönliche Verhalten jedes Einzelnen", "Zufällige externe Einflüsse"], correctIndex: 1, explanation: "Dispositive Entscheidungen (Personal, Kapazität, Kennzahlen, Lieferanten) prägen Gesundheit primär." },
      { id: "q4", question: "Welcher Faktor wird laut Gesamtfazit über nahezu alle 16 Themen hinweg als wiederkehrender Engpassfaktor identifiziert?", options: ["Kapital", "Personal", "Information", "Energie"], correctIndex: 1, explanation: "Personal wird durchgängig als limitierender und zugleich vulnerabler Faktor benannt." },
      { id: "q5", question: "'Strukturelle statt additive Gesundheitsförderung' bedeutet:", options: ["Gesundheitsförderung ist ein optionales Zusatzprogramm ohne Bezug zu Prozessen", "Gesundheitsförderung ist integraler Bestandteil der Prozess- und Wertschöpfungsgestaltung selbst", "Gesundheitsförderung sollte nur additiv zu Boni ausgezahlt werden", "Der Begriff hat keine Bedeutung für Unternehmen"], correctIndex: 1, explanation: "Gesundheitsförderung soll strukturell mitgedacht, nicht nachträglich angehängt werden." },
      { id: "q6", question: "Klare, stabile Prozesse wirken sich auf Mitarbeitende typischerweise wie aus?", options: ["Sie erhöhen Unsicherheit und senken Motivation", "Sie reduzieren Unsicherheit und stärken Motivation, Selbstwirksamkeit und Kooperation", "Sie haben keinerlei psychologische Wirkung", "Sie führen automatisch zu Überlastung"], correctIndex: 1, explanation: "Prozessklarheit wirkt positiv auf Handlungssicherheit und Wohlbefinden." }
    ]
  }
];
