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
      },
      {
        id: "ex4",
        prompt: "Eine Gesundheitsförderungsmaßnahme wird als Einzelaktion ohne definierte Zielgrößen durchgeführt. Nennen Sie die vier Zielgrößen des Prozessmanagements und erläutern Sie kurz, was jeweils fehlt, wenn sie nicht berücksichtigt werden.",
        solution: [
          { type: "list", items: [
            "Effektivität: Ohne definierte Gesundheitsziele lässt sich der Grad der Zielerreichung nicht feststellen.",
            "Effizienz: Ohne Betrachtung des Ressourceneinsatzes bleibt unklar, ob das Verhältnis von Output zu Aufwand angemessen ist.",
            "Qualität: Ohne definierte Anforderungen fehlt der Maßstab für die Erfüllung von Kunden-/Stakeholder-Erwartungen.",
            "Transparenz: Ohne klare Beschreibung von Input, Aktivitäten, Output und Zielbezug ist die Maßnahme nicht steuerbar."
          ]}
        ]
      },
      {
        id: "ex5",
        prompt: "Ordnen Sie die folgenden Aussagen den Begriffen 'primäre Geschäftsprozesse', 'sekundäre Geschäftsprozesse' und 'nicht wertschöpfende Prozesse' zu: a) Ein Prozess ohne erkennbaren Kundennutzen, entstanden durch mangelhafte Planung. b) Ein Prozess mit unmittelbarem Kundennutzen, der auf schwer imitierbaren Kernkompetenzen beruht. c) Ein Prozess, der interne Kunden bedient und keinen direkten Marktbezug hat.",
        solution: [
          { type: "list", items: [
            "a) Nicht wertschöpfender Prozess",
            "b) Primärer Geschäftsprozess (Kernprozess)",
            "c) Sekundärer Geschäftsprozess"
          ]}
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was unterscheidet einen Geschäftsprozess von einem allgemeinen Prozess?", options: ["Er ist zusätzlich funktions-/organisationsübergreifend, kundenorientiert und aus der Strategie abgeleitet", "Ein Geschäftsprozess hat per Definition nie einen erkennbaren Bezug zum externen Kunden", "Es gibt keinen Unterschied, da beide Begriffe in der Vorlesung synonym verwendet werden", "Ein Geschäftsprozess besteht immer nur aus einer einzigen, nicht weiter zerlegbaren Aktivität"], correctIndex: 0, explanation: "Der allgemeine Prozessbegriff verlangt nur Input, Aktivität und Output. Der Geschäftsprozess ist der engere Spezialfall davon: Er ist zusätzlich funktions- und organisationsübergreifend, erzeugt vom Kunden erwartete Leistungen und erfüllt Ziele, die aus der Geschäftsstrategie abgeleitet sind. Die Distraktoren widersprechen dem Text direkt, etwa weil gerade der Kundenbezug den Geschäftsprozess kennzeichnet, nicht sein Fehlen." },
      { id: "q2", question: "Welcher Prozesstyp hat in der Regel keinen direkten Marktbezug?", options: ["Keiner der beiden Prozesstypen, da jeder Prozess zwingend Marktbezug hat", "Beide Prozesstypen gleichermaßen, da Marktbezug prozesstypunabhängig ist", "Primäre Geschäftsprozesse, da sie unmittelbar für externe Kunden wertschöpfend sind", "Sekundäre Prozesse (Führungs- und Unterstützungsprozesse)"], correctIndex: 3, explanation: "Sekundäre Prozesse bedienen laut Text interne Kunden und wirken sich damit nur indirekt auf die Wettbewerbsfähigkeit aus. Primäre Geschäftsprozesse (Kernprozesse) haben dagegen per Definition unmittelbaren Kundennutzen und damit direkten Marktbezug, weil sie die eigentliche Marktleistung erzeugen. Die Verwechslungsgefahr entsteht, weil beide Typen intern ablaufen - entscheidend ist aber, ob der Adressat extern (Markt) oder intern (andere Abteilung) ist." },
      { id: "q3", question: "'Die richtigen Dinge tun' beschreibt am ehesten...", options: ["Effektivität", "Effizienz (Verhältnis von Output zu Ressourceneinsatz)", "Qualität (Erfüllung von Kundenanforderungen)", "Transparenz (Klarheit über Input, Aktivität, Output)"], correctIndex: 0, explanation: "Effektivität ist im Text der Grad der Zielerreichung, verkürzt formuliert als 'die richtigen Dinge tun'. Der naheliegendste Verwechslungskandidat ist Effizienz - die aber laut Faustregel 'das Holz richtig hacken' bedeutet, also mit möglichst wenig Aufwand arbeiten, unabhängig davon, ob überhaupt das richtige Ziel verfolgt wird." },
      { id: "q4", question: "Was sind typische Ursachen für Ineffizienz in Prozessen?", options: ["Zu hohe Kundenorientierung der beteiligten Abteilungen", "Zu viel Transparenz über Input, Aktivitäten und Output", "Zu klare, widerspruchsfreie Zieldefinitionen der Prozessbeteiligten", "Schnittstellenverluste, Medienbrüche und Doppelarbeiten"], correctIndex: 3, explanation: "Diese drei Phänomene verschlechtern gezielt das Verhältnis von Output zu eingesetzten Ressourcen, also die Effizienz. Die Distraktoren drehen den Zusammenhang um: Kundenorientierung, Transparenz und klare Ziele sind laut Text gerade die anderen drei Zielgrößen des Prozessmanagements und wirken der Ineffizienz entgegen, statt sie zu verursachen." },
      { id: "q5", question: "Im Autohaus-Beispiel zeigt die Prozessorientierung, dass...", options: ["der Kunde im Gesamtprozess praktisch keine steuernde Rolle spielt", "einzelne Fachabteilungen im neuen Modell komplett überflüssig werden", "zuerst der Gesamtprozess end-to-end identifiziert wird und danach Aufgaben/Stellen abgeleitet werden", "zuerst Abteilungen gebildet werden und danach erst der Prozess identifiziert wird"], correctIndex: 2, explanation: "Die Prozessorientierung kehrt die klassische Logik des Autohaus-Beispiels um: Statt wie bei der funktionsorientierten Organisation zuerst Abteilungen zu bilden, wird zuerst der Prozess vom Kundenwunsch zur Wunscherfüllung end-to-end identifiziert - erst danach werden Aufgaben und Stellen daraus abgeleitet. Option vier beschreibt genau die kritisierte klassische Reihenfolge, nicht die Prozessorientierung." },
      { id: "q6", question: "Übertragen auf Gesundheitsförderungsprozesse bedeutet 'Transparenz' im Sinne der vier Zielgrößen:", options: ["Klare Definition von Kern-, Steuerungs- und Unterstützungsprozessen der Gesundheitsförderung", "Bewusster Verzicht auf jede Evaluation der Maßnahmenwirkung", "Steuerung ausschließlich anhand finanzieller Kennzahlen ohne weitere Kriterien", "Geheimhaltung der Maßnahmen vor den betroffenen Mitarbeitenden"], correctIndex: 0, explanation: "Transparenz bedeutet laut Text eine klare Beschreibung von Input, Aktivitäten, Output und Zielbezug als Voraussetzung für Steuerbarkeit. Auf Gesundheitsförderung übertragen heißt das konkret, Kern-, Steuerungs- und Unterstützungsprozesse eindeutig zu benennen. Geheimhaltung und Evaluationsverzicht wären das genaue Gegenteil von Transparenz." },
      { id: "q7", question: "Welche Aussage zu Führungsprozessen (als Teil der sekundären Geschäftsprozesse) trifft zu?", options: ["Sie sind laut Text identisch mit Unterstützungsprozessen wie IT oder Personal", "Sie sichern das Zusammenspiel aller Prozesse, definieren Ziele und koordinieren", "Sie erzeugen unmittelbaren Kundennutzen für externe Kunden des Unternehmens", "Sie entstehen laut Text ausschließlich durch mangelhafte Planung und Steuerung"], correctIndex: 1, explanation: "Führungs-/Steuerungsprozesse sichern laut Text das Zusammenspiel aller Prozesse, definieren Ziele und koordinieren - das unterscheidet sie sowohl von Unterstützungsprozessen (Basisdienste wie IT oder Personal) als auch von primären Prozessen mit direktem Kundennutzen. Die vierte Option beschreibt stattdessen die Entstehung nicht wertschöpfender Prozesse." },
      { id: "q8", question: "Welche Aussage ist laut Text FALSCH?", options: ["Standardisierung erhöht die Reproduzierbarkeit der Qualität", "Primäre Geschäftsprozesse beruhen auf leicht imitierbaren, austauschbaren Fähigkeiten", "Qualität bezeichnet den Grad der Erfüllung definierter Kunden-/Stakeholder-Anforderungen", "Effizienz beschreibt das Verhältnis von Output zu eingesetzten Ressourcen"], correctIndex: 1, explanation: "Primäre Geschäftsprozesse beruhen laut Text gerade auf Kernkompetenzen, die schwer imitierbar sind - das ist Teil ihrer strategischen Bedeutung. Die Aussage behauptet das Gegenteil und ist damit falsch, während die übrigen drei Optionen die im Text gegebenen Definitionen von Standardisierung, Qualität und Effizienz korrekt wiedergeben." },
      { id: "q9", question: "Im Autohaus-Beispiel besteht das zentrale Problem der funktionsorientierten Organisation darin, dass...", options: ["die Werkstatt in diesem Modell praktisch keine Aufgaben übernimmt", "der ursprüngliche Kundenwunsch beim Prozessstart gar nicht erfasst wird", "jede Abteilung sich selbst optimiert, aber niemand den Gesamtprozess im Blick hat", "im Autohaus laut Beispiel zu wenige Fachabteilungen existieren"], correctIndex: 2, explanation: "Die klassische Aufbauorganisation zerlegt den Kundenwunsch in Abteilungsaufgaben, wobei jede Abteilung sich selbst optimiert - dadurch hat niemand den Gesamtprozess vom Kundenwunsch zur Wunscherfüllung im Blick, und es entstehen Schnittstellenprobleme. Die anderen Optionen beschreiben weder das im Text benannte Kernproblem noch sind sie durch das Beispiel gedeckt." }
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
      },
      {
        id: "ex3",
        prompt: "Ein Entwurfsteam nimmt bewusst idealtypische Referenzprozesse aus der Branche als Ausgangspunkt und passt diese anschließend an die konkrete Unternehmenssituation an. Um welchen Entwurfsansatz handelt es sich, und wie unterscheidet er sich vom induktiven Entwurf?",
        solution: [
          { type: "p", text: "Es handelt sich um den deduktiven Entwurf: Basis sind idealtypische Referenzprozesse, die an die konkrete Situation angepasst werden. Der induktive Entwurf geht dagegen umgekehrt vor - er setzt bei den konkreten, unternehmensspezifischen Kundenbedürfnissen an, statt von einem allgemeinen Referenzmodell auszugehen." }
        ]
      },
      {
        id: "ex4",
        prompt: "Nennen Sie mindestens vier Merkmale, die einen 'guten' Prozess laut Vorlesung auszeichnen, und erläutern Sie kurz eines davon.",
        solution: [
          { type: "p", text: "Merkmale eines guten Prozesses sind u.a.: effektiv, effizient, beherrscht (geringe Ergebnisstreuung), deterministisch (vorhersehbares Ergebnis), atomar (kleine Einheiten), flexibel, robust gegenüber Störungen von außen, neben- und nachwirkungsfrei, dokumentiert und ständig verbesserbar. Beispiel 'beherrscht': Ein beherrschter Prozess liefert bei wiederholter Durchführung immer wieder ähnliche Ergebnisse, es gibt also nur eine geringe Streuung der Resultate - das schafft Verlässlichkeit und Planbarkeit." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was ist das zentrale Ziel der Prozessidentifikation?", options: ["Aus möglichen Aktivitäten diejenigen zu identifizieren, die zur Marktleistung notwendig sind", "Ausschließlich die Reduktion laufender Kosten im Unternehmen", "Die vollständige Abschaffung aller bestehenden Fachabteilungen", "Alle denkbaren Unternehmensaktivitäten lückenlos zu dokumentieren"], correctIndex: 0, explanation: "Prozessidentifikation filtert laut Text aus der Menge möglicher Unternehmensaktivitäten gezielt jene heraus, die zur Erstellung der Marktleistung notwendig sind - nicht jede Aktivität soll dokumentiert werden, sondern nur die relevanten. Die übrigen Optionen verwechseln das Ziel mit möglichen Nebeneffekten (Kosten) oder mit völlig anderen Maßnahmen (Abteilungsabschaffung, Volldokumentation)." },
      { id: "q2", question: "Welches Merkmal gehört NICHT zu einem 'guten' Prozess?", options: ["Beherrscht, also mit geringer Ergebnisstreuung bei wiederholter Durchführung", "Möglichst viele Abhängigkeiten und Verknüpfungen zu anderen Prozessen", "Deterministisch, also mit vorhersehbarem Ergebnis", "Robust gegenüber Störungen von außen"], correctIndex: 1, explanation: "Gute Prozesse sind laut Text 'neben- und nachwirkungsfrei' - sie sollen also möglichst wenige, nicht möglichst viele Abhängigkeiten zu anderen Prozessen haben, weil solche Kopplungen Störungen fortpflanzen. Beherrscht, deterministisch und robust sind dagegen ausdrücklich genannte Positivmerkmale eines guten Prozesses." },
      { id: "q3", question: "Die 'harte Tour' der Prozessverbesserung wird auch als was bezeichnet?", options: ["Marktorientierter Entwurfsansatz", "Kontinuierliche, schrittweise Verbesserung im Team", "Bombenwurfstrategie", "Bottom-up-Ansatz mit breiter Mitarbeiterbeteiligung"], correctIndex: 2, explanation: "Das radikale, exklusiv von der Unternehmensleitung erarbeitete und den Mitarbeitenden am 'Tag X' präsentierte Vorgehen wird im Text bildlich 'Bombenwurf' genannt. Kontinuierliche Verbesserung und Bottom-up beschreiben dagegen gerade das Gegenteil, nämlich die 'sanfte Tour'." },
      { id: "q4", question: "Ein typischer Auslöser für 'schlechte' Prozesse ist:", options: ["Eine zu klare, durchgängige Kundenorientierung der Abteilungen", "Zu geringe, kaum spürbare Abteilungsgrenzen im Unternehmen", "Silodenken in funktionalen Hierarchien", "Zu intensiver Informationsaustausch zwischen den Abteilungen"], correctIndex: 2, explanation: "Silodenken in funktionalen Hierarchien wird im Text explizit als Ursache 'schlechter' Prozesse genannt, gemeinsam mit Schnittstellenproblemen, mangelndem Informationsaustausch und Abteilungsegoismen. Die Distraktoren behaupten fälschlich das Gegenteil - mehr Kundenorientierung oder mehr Informationsaustausch würden Prozesse eher verbessern als verschlechtern." },
      { id: "q5", question: "Der marktorientierte Entwurfsansatz zur Prozessidentifikation geht...", options: ["von außen nach innen, ausgehend vom Kundennutzen", "ausschließlich von historischen, unveränderten Referenzprozessen aus", "von innen nach außen, ausgehend von vorhandenen Ressourcen und Vorgaben", "von zufällig ausgewählten Mitarbeitenden ohne festes Konzept aus"], correctIndex: 0, explanation: "Der marktorientierte Entwurf setzt laut Text von außen nach innen beim Kundennutzen an und leitet daraus die internen Prozesse ab. Die dritte Option beschreibt stattdessen den ressourcenorientierten Entwurf, der genau umgekehrt von innen nach außen von vorhandenen Ressourcen ausgeht." },
      { id: "q6", question: "Warum ist eine Prozesslandkarte für die Gesundheitsförderung im Unternehmen wichtig?", options: ["Sie ist ausschließlich für externe Dienstleister von Bedeutung", "Sie ist gesetzlich vorgeschrieben, hat aber keinen erkennbaren praktischen Nutzen", "Sie macht sichtbar, ob Gesundheitsförderung strategisch als Kernprozess integriert oder isoliert ist", "Sie ersetzt vollständig die Evaluation von Gesundheitsprogrammen"], correctIndex: 2, explanation: "Laut Text macht eine Prozesslandkarte sichtbar, ob Kern-, Steuerungs- und Unterstützungsprozesse der Gesundheitsförderung identifiziert und strategisch integriert sind. Fehlt sie, bleibt Gesundheitsförderung eine isolierte Einzelmaßnahme statt eines echten Kernprozesses - sie ersetzt aber keine Evaluation, sondern schafft nur die strukturelle Grundlage dafür." },
      { id: "q7", question: "Der Bottom-up-Entwurf zur Prozessidentifikation zeichnet sich aus durch:", options: ["Wenige, höherrangige Mitarbeiter als alleinige Entscheidungsbasis", "Einen laut Text grundsätzlich fehlenden Praxisbezug", "Ausschließliche Orientierung an idealtypischen Referenzprozessen", "Breite Mitarbeiterbeteiligung und Nutzung konkreter Wirkungszusammenhänge/dezentralen Wissens"], correctIndex: 3, explanation: "Bottom-up nutzt laut Text dezentrales Wissen und breite Mitarbeiterbeteiligung, was hohe Akzeptanz und direkte Nutzbarkeit erzeugt. Die erste Option beschreibt stattdessen das Gegenmodell Top-down, dem im Text gerade der geringe Praxisbezug als Nachteil zugeschrieben wird - nicht dem Bottom-up-Ansatz." },
      { id: "q8", question: "Welche Aussage zur 'sanften Tour' (Evolution) trifft zu?", options: ["Sie wird im Text ebenfalls als 'Bombenwurf' bezeichnet", "Mitarbeitende erarbeiten fachübergreifend im Team kontinuierliche kleine Verbesserungsschritte", "Sie stellt radikal alles bisher Bestehende grundsätzlich infrage", "Die Lösung wird exklusiv von der Unternehmensleitung ohne Beteiligung erarbeitet"], correctIndex: 1, explanation: "Die sanfte Tour lässt laut Text Mitarbeitende die Lösung fachübergreifend im Team erarbeiten, mit kontinuierlichen kleinen Verbesserungsschritten. Die anderen drei Optionen beschreiben stattdessen exakt die gegensätzliche Strategie, die 'harte Tour' bzw. 'Bombenwurf'-Strategie." },
      { id: "q9", question: "Welche Folge wird laut Text NICHT als typische Konsequenz 'schlechter' Prozesse genannt?", options: ["Zerstückelte und intransparente Abläufe im Unternehmen", "Zu hohe Kosten und eine geringere Flexibilität", "Fehlende Kundenorientierung der beteiligten Bereiche", "Sinkende Personalkosten durch automatisch mehr Effizienz"], correctIndex: 3, explanation: "Schlechte Prozesse führen laut Text zu fehlender Kundenorientierung, zerstückelten und intransparenten Abläufen, mangelnder Gesamtverantwortung sowie zu hohen Kosten und geringer Flexibilität - also tendenziell zu höheren, nicht sinkenden Kosten. Sinkende Personalkosten durch mehr Effizienz widerspricht damit direkt der im Text beschriebenen Wirkung." }
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
      },
      {
        id: "ex3",
        prompt: "Welcher GoM-Grundsatz wird verletzt, wenn ein Prozessmodell Details enthält, die für den eigentlichen Modellierungszweck (z. B. eine grobe Übersicht für das Management) gar nicht gebraucht werden?",
        solution: [
          { type: "p", text: "Verletzt wird der Grundsatz der Relevanz: Es sollen nur für den Modellierungszweck relevante Sachverhalte dargestellt werden. Irrelevante Details überladen das Modell unnötig, ohne dem eigentlichen Zweck zu dienen." }
        ]
      },
      {
        id: "ex4",
        prompt: "Ein Unternehmen möchte für einen Kernprozess sowohl ein Organigramm als auch ein separates Prozessmodell erstellen. Welcher GoM-Grundsatz stellt sicher, dass beide Darstellungen zueinander passen, und warum ist das wichtig?",
        solution: [
          { type: "p", text: "Der Grundsatz des systematischen Aufbaus verlangt, dass unterschiedliche Sichten (hier: Organigramm und Prozessmodell) konsistent zueinander sind. Das ist wichtig, damit z. B. im Organigramm genannte Zuständigkeiten mit den im Prozessmodell dargestellten Verantwortlichkeiten übereinstimmen - sonst entstehen Widersprüche zwischen den Dokumenten." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was bedeutet 'one face to the customer'?", options: ["Ein reines Planungsprinzip aus der Produktion ohne jeden Kundenbezug", "Der Kunde soll bei einem Anliegen mit möglichst vielen Abteilungen sprechen", "Eine einzige, eindeutige Kundenschnittstelle je Prozess mit klarer Verantwortung", "Jeder Mitarbeitende darf unabhängig vom Prozess Kundenkontakt aufnehmen"], correctIndex: 2, explanation: "Das Prinzip fordert laut Text eine einzige Kundenschnittstelle je Prozess mit eindeutiger Verantwortung, um systematisch Kundennähe aufzubauen. Genau das Gegenteil - dass der Kunde selbst zwischen mehreren Abteilungen wechseln muss - ist das Problem, das dieses Prinzip beheben soll, etwa im Reklamationsbeispiel." },
      { id: "q2", question: "Welcher GoM-Grundsatz fordert, dass gleiche Realabläufe im Modell identisch dargestellt werden?", options: ["Klarheit (Verständlichkeit und Lesbarkeit des Modells)", "Wirtschaftlichkeit (Aufwand im Verhältnis zum Nutzen)", "Vergleichbarkeit", "Relevanz (nur zweckrelevante Sachverhalte darstellen)"], correctIndex: 2, explanation: "Vergleichbarkeit verlangt laut Text, dass gleiche Realabläufe im Modell identisch dargestellt werden, damit ähnliche Prozesse über verschiedene Bereiche hinweg konsistent bleiben. Klarheit und Relevanz betreffen dagegen Lesbarkeit bzw. Zweckbezug des Modells, nicht die Einheitlichkeit gleichartiger Abläufe." },
      { id: "q3", question: "Was beschreibt das Detaillierungsdilemma?", options: ["Dass Prozessmodelle grundsätzlich nie detailliert werden sollten", "Dass mehr Detaillierung immer besser ist und keinerlei Nachteile hat", "Dass dieses Dilemma ausschließlich die IT-Abteilung betrifft", "Mehr Detaillierung ist für bestimmte Zwecke nötig, geht aber zulasten von Klarheit und Wirtschaftlichkeit"], correctIndex: 3, explanation: "Das Detaillierungsdilemma beschreibt laut Text den Zielkonflikt, dass mehr Detaillierung für Software, Simulation oder Kostenplanung notwendig ist, gleichzeitig aber Klarheit und Wirtschaftlichkeit beeinträchtigt. Die anderen Optionen behaupten fälschlich, es gäbe gar keinen Zielkonflikt oder er sei nur auf einen Bereich beschränkt." },
      { id: "q4", question: "Vertikale Hierarchisierung bei der Prozessmodellierung bedeutet:", options: ["Den vollständigen Verzicht auf jede erkennbare Modellstruktur", "Verfeinerung eines Prozesses in Teilprozesse auf verschiedenen Detaillierungsebenen", "Das Zusammenlegen aller Einzelprozesse zu einem einzigen Großprozess", "Die Bildung von Prozessvarianten für unterschiedliche Kundengruppen"], correctIndex: 1, explanation: "Vertikale Hierarchisierung verfeinert laut Text einen Prozess in Teilprozesse auf verschiedenen Detaillierungsebenen, etwa Makro-, Meso- und Mikroebene im Gesundheitsförderungsbeispiel. Die vierte Option beschreibt stattdessen die horizontale Differenzierung, die Prozessvarianten für unterschiedliche Objekte oder Kunden bildet." },
      { id: "q5", question: "Prozessarchitektur unterscheidet sich vom Prozessdesign dadurch, dass sie...", options: ["ausschließlich technische IT-Systeme ohne organisatorischen Bezug beschreibt", "nur einen einzelnen Prozess bis ins letzte Detail beschreibt", "in der Prozessmodellierung laut Text keine eigenständige Rolle spielt", "die Bündelung/Verknüpfung mehrerer Prozesse zu einer Gesamtstruktur betrifft"], correctIndex: 3, explanation: "Prozessarchitektur bezieht sich laut Text auf die Bündelung von Prozessen zu einer Gesamtstruktur, während das Prozessdesign die Strukturierung des einzelnen Prozesses betrifft. Die zweite Option beschreibt daher eher das Design als die Architektur." },
      { id: "q6", question: "Bei der Modellierung von Gesundheitsförderungsprozessen hilft die vertikale Hierarchisierung, weil...", options: ["sie komplexe Programme über Makro-, Meso- und Mikroebene steuerbar macht", "sie laut Text ausschließlich für klassische Produktionsprozesse gilt", "sie sämtliche Kennzahlen automatisch ohne Erhebung berechnet", "sie jede weitere Detaillierung der Teilschritte überflüssig macht"], correctIndex: 0, explanation: "Laut Text hilft die vertikale Hierarchisierung, komplexe Gesundheitsförderungsprogramme über Makroebene (Gesamtprozess), Mesoebene (Planung/Durchführung/Evaluation) und Mikroebene (Einzelschritte) steuerbar zu machen. Sie ersetzt keine Kennzahlenerhebung und ist nicht auf Produktionsprozesse beschränkt." },
      { id: "q7", question: "Welcher GoM-Grundsatz verlangt, dass ein Modell syntaktisch regelkonform und fachlich korrekt ist?", options: ["Klarheit (Verständlichkeit, Lesbarkeit, Hierarchisierung)", "Wirtschaftlichkeit (Rechtfertigung des Detaillierungsaufwands)", "Richtigkeit", "Relevanz (nur zweckbezogene Sachverhalte)"], correctIndex: 2, explanation: "Richtigkeit umfasst laut Text sowohl die syntaktische (regelkonforme) als auch die semantische (fachlich korrekte) Korrektheit eines Modells. Klarheit betrifft dagegen die Verständlichkeit, Relevanz den Zweckbezug - beides ist von der inhaltlichen Korrektheit zu unterscheiden." },
      { id: "q8", question: "Das Prinzip des parallelen Prozessdesigns zielt darauf ab,...", options: ["Kern- und Supportprozesse gleichzeitig zu bearbeiten, um Zeit zu sparen", "die Kundenschnittstelle auf mehrere Abteilungen zu vervielfachen", "vollständig auf Supportprozesse im Unternehmen zu verzichten", "Kern- und Supportprozesse strikt nacheinander abzuarbeiten"], correctIndex: 0, explanation: "Paralleles Prozessdesign bearbeitet laut Text Kern- und Supportprozesse parallel statt sequentiell, um Zeitvorteile zu erzielen. Die vierte Option beschreibt das genaue Gegenteil, nämlich die sequentielle Abarbeitung, die gerade vermieden werden soll." },
      { id: "q9", question: "Ganzheitliche Rundumbearbeitung bedeutet, dass ein Prozess...", options: ["möglichst beim Kunden beginnt und endet, mit Verantwortung bei einer Person/einem Team", "grundsätzlich in mehrere unabhängige Teilprozesse zerlegt werden muss", "möglichst viele unterschiedliche Verantwortliche gleichzeitig haben sollte", "nie in direkte Berührung mit dem Kunden kommt"], correctIndex: 0, explanation: "Ganzheitliche Rundumbearbeitung bündelt laut Text die Verantwortung bei einer Person oder einem Team und lässt den Prozess möglichst beim Kunden beginnen und enden. Die dritte Option widerspricht dem direkt, da verteilte statt gebündelte Verantwortung genau die Schnittstellenprobleme erzeugt, die dieses Prinzip vermeiden soll." },
      { id: "q10", question: "Warum ist ein Kompromiss zwischen Detailtiefe und Wirtschaftlichkeit bei der Prozessmodellierung nötig?", options: ["Weil zusätzliche Detaillierung angeblich die Kundenorientierung verringert", "Weil höhere Detaillierung mehr Aufwand verursacht, der durch den Nutzen gerechtfertigt sein muss", "Weil Prozessmodelle laut Text gesetzlich auf eine Seite Umfang begrenzt sind", "Weil zusätzliche Detaillierung im Modell grundsätzlich keine Kosten verursacht"], correctIndex: 1, explanation: "Der Grundsatz der Wirtschaftlichkeit verlangt laut Text, dass der Detaillierungsaufwand durch den Nutzen gerechtfertigt sein muss - das ist einer der Abwägungspunkte im Detaillierungsdilemma. Eine gesetzliche Seitenbegrenzung oder ein Zusammenhang zur Kundenorientierung wird im Text nicht genannt." }
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
      },
      {
        id: "ex3",
        prompt: "Ein Unternehmen misst nur die Kosten seines Kundenservice-Prozesses, nicht aber die Kundenzufriedenheit oder die Bearbeitungszeit. Welche Bemessungsdimensionen fehlen, und welches Risiko entsteht dadurch?",
        solution: [
          { type: "p", text: "Es fehlen die Dimensionen Qualität (Kundenzufriedenheit) und Zeit (Bearbeitungsdauer). Risiko: Das Unternehmen könnte einen zwar kostengünstigen, aber langsamen oder für Kunden unbefriedigenden Prozess fälschlich als 'gut' bewerten, weil nur die Kostendimension betrachtet wird - ein einseitiges Bild der Prozessleistung." }
        ]
      },
      {
        id: "ex4",
        prompt: "Warum eignet sich 'das Holz richtig hacken' als Merkspruch für Effizienz und nicht für Effektivität?",
        solution: [
          { type: "p", text: "'Richtig hacken' bezieht sich auf die Art und Weise der Durchführung - also wie sparsam und geschickt eine Aufgabe erledigt wird, unabhängig davon, ob überhaupt das richtige Holz (die richtige Aufgabe) gewählt wurde. Das entspricht genau der Definition von Effizienz: Verhältnis von Output zu eingesetzten Ressourcen. Effektivität würde dagegen fragen, ob überhaupt das richtige Holz gehackt wird - also ob die richtigen Ziele verfolgt werden." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "'Das Holz richtig hacken' beschreibt in der Vorlesungsmetapher...", options: ["Effektivität, also ob überhaupt das richtige Holz gewählt wurde", "Qualität im Sinne der Kundenerwartung", "Transparenz über Input, Aktivität und Ergebnis", "Effizienz"], correctIndex: 3, explanation: "'Das Holz richtig hacken' bezieht sich auf die Art der Durchführung, also mit möglichst wenig Aufwand arbeiten - das entspricht der Definition von Effizienz. Die Gegenmetapher 'das richtige Holz hacken' beschreibt dagegen Effektivität, also ob überhaupt die richtige Aufgabe gewählt wurde, unabhängig von der Ausführung." },
      { id: "q2", question: "Warum erfolgt die Beurteilung eines Prozesses immer relativ zum Wettbewerb?", options: ["Weil für jeden Prozess eine Kundenalternative existiert", "Das trifft laut Text nicht zu - die Beurteilung erfolgt nie relativ zu etwas", "Weil interne Kennzahlen grundsätzlich fehlerhaft und unbrauchbar sind", "Weil ausschließlich der Wettbewerb die zu verwendenden Kennzahlen vorgibt"], correctIndex: 0, explanation: "Kunden können laut Text jederzeit zu einer Alternative wechseln, weshalb die Beurteilung eines Prozesses immer im Vergleich zum Wettbewerb erfolgen muss, statt sich nur an internen Zielwerten zu orientieren. Interne Kennzahlen sind dabei nicht per se falsch - sie müssen nur relativ eingeordnet werden." },
      { id: "q3", question: "Welche drei Dimensionen werden bei der Prozessbemessung typischerweise betrachtet?", options: ["Qualität, Kosten, Zeit", "Effektivität, Personalstand, Unternehmensstandort", "Ausschließlich die Kostendimension allein", "Umsatz, Gewinn und Marktanteil des Unternehmens"], correctIndex: 0, explanation: "Prozesse werden laut Text entlang der drei zentralen Dimensionen Qualität, Kosten und Zeit bemessen - jeweils bezogen auf Kundenerwartung, Ressourceneinsatz und wettbewerbsrelevante Geschwindigkeit. Umsatz, Gewinn und Marktanteil sind übergeordnete Unternehmenskennzahlen, keine Prozessbemessungsdimensionen im engeren Sinn." },
      { id: "q4", question: "Was ist ein Kostentreiber (cost driver)?", options: ["Ein Fachbegriff, der ausschließlich im Marketing verwendet wird", "Eine Einflussgröße auf den Kosten-/Ressourcenverbrauch eines Prozesses", "Die Berufsbezeichnung eines Mitarbeiters der Finanzabteilung", "Ein reines Synonym für die Gesamtkosten eines Unternehmens"], correctIndex: 1, explanation: "Ein Kostentreiber ist laut Text eine Einflussgröße, über die sich Prozesskosten verursachungsgerecht zurechnen lassen - etwa die Anzahl der Bestellungen bei Beschaffungskosten. Er ist weder ein Marketingbegriff noch mit den Gesamtkosten selbst gleichzusetzen, sondern deren Erklärungsgröße." },
      { id: "q5", question: "Der Hauptvorteil der Prozesskostenrechnung gegenüber der klassischen Kostenstellenrechnung ist:", options: ["Sie rechnet Kosten verursachungsgerecht über Kostentreiber statt pauschal zu", "Sie verursacht in der Durchführung grundsätzlich geringere Kosten", "Sie macht die klassische Buchhaltung vollständig überflüssig", "Sie blendet indirekte, schwer zurechenbare Kostenbereiche komplett aus"], correctIndex: 0, explanation: "Die verursachungsgerechte Zurechnung über Kostentreiber ist laut Text der zentrale Vorteil gegenüber der pauschalen Umlage der klassischen Kostenstellenrechnung, gerade in schwer zurechenbaren indirekten Bereichen. Sie ersetzt damit gezielt eine Schwäche der alten Methode, nicht die Buchhaltung als Ganzes." },
      { id: "q6", question: "Das Messvorgehen bei der Prozessbemessung umfasst welche Schritte?", options: ["Nur das Definieren von Kennzahlen, ganz ohne tatsächliche Messung", "Eine zufällige Stichprobenziehung ohne festgelegten Zielwert", "Soll-Wert festlegen, Ist-Wert erheben, Vergleich durchführen", "Ausschließlich die einmalige Erhebung des Ist-Werts"], correctIndex: 2, explanation: "Diese drei Schritte - Soll-Wert festlegen, Ist-Wert erheben, Vergleich durchführen - bilden laut Text den systematischen Soll-Ist-Vergleich, der auch der Risikoprophylaxe dient. Ohne festgelegten Soll-Wert wäre eine bloße Ist-Erhebung nicht aussagekräftig, weil ein Vergleichsmaßstab fehlt." },
      { id: "q7", question: "Wozu dient ein 'Takt' bei der Definition eines Prozesskennzahlen-Systems?", options: ["Er ist im Text ein reines Synonym für den Begriff Kostentreiber", "Er legt den Verkaufspreis eines Produkts oder einer Leistung fest", "Er legt fest, wie oft gemessen wird (Messhäufigkeit)", "Er beschreibt lediglich die bevorzugte Musikrichtung im Unternehmen"], correctIndex: 2, explanation: "Der Takt gibt laut Text an, mit welcher Häufigkeit eine Kennzahl erhoben wird - er ist neben Kennzahl, Messvorschrift und Verantwortlichem einer der vier Bestandteile, die für jedes kaufentscheidende Kriterium definiert werden. Mit Preisfestlegung oder Kostentreibern hat er nichts zu tun." },
      { id: "q8", question: "Prozessbemessung dient laut Vorlesung nicht nur der Reaktion auf akuten Druck, sondern auch...", options: ["einer einmaligen Messung, die danach nicht mehr wiederholt wird", "der vollständigen Abschaffung sämtlicher Kennzahlensysteme", "der Risikoprophylaxe durch laufenden Soll-Ist-Vergleich", "ausschließlich Werbezwecken gegenüber Kunden"], correctIndex: 2, explanation: "Laut Text dient Prozessbemessung nicht nur der Reaktion auf akuten Druck, sondern vor allem der Risikoprophylaxe durch einen laufenden Soll-Ist-Vergleich - Abweichungen sollen erkannt werden, bevor Druck überhaupt entsteht. Eine einmalige Messung würde diesem präventiven Zweck gerade widersprechen." },
      { id: "q9", question: "Warum sind indirekte Kostenbereiche für die klassische Kostenstellenrechnung schwer zurechenbar?", options: ["Weil ihre Erfassung gesetzlich grundsätzlich untersagt ist", "Weil sie keinen direkten, offensichtlichen Bezug zu einzelnen Produkten/Aufträgen haben", "Weil in solchen Bereichen laut Text nie tatsächliche Kosten anfallen", "Weil indirekte Kostenbereiche ausschließlich in der Produktion vorkommen"], correctIndex: 1, explanation: "Indirekte Bereiche wie Beschaffung oder Verwaltung lassen sich laut Text nicht ohne Weiteres einem einzelnen Produkt zuordnen, weil ihr Bezug zum einzelnen Auftrag nicht offensichtlich ist - genau dieses Problem löst die Prozesskostenrechnung über Kostentreiber. Sie kommen zudem gerade häufig außerhalb der Produktion vor, etwa in Verwaltung oder Einkauf." },
      { id: "q10", question: "Effektivitätskennzahlen im BGM-Kontext messen vor allem...", options: ["äußere Rahmenbedingungen wie das Wetter am Veranstaltungstag", "rein quantitative Ausstattungsmerkmale wie die Anzahl der Bürostühle", "ausschließlich die Kosten pro teilnehmender Person", "die Zielerreichung gesundheitsbezogener Indikatoren"], correctIndex: 3, explanation: "Effektivitätskennzahlen beziehen sich laut Text auf die Zielerreichung gesundheitsbezogener Indikatoren, während Kosten pro Teilnehmer der Effizienzdimension zugeordnet werden. Die Verwechslung von Effektivität und Effizienz ist hier der naheliegendste Fehler, da beide Begriffe oft synonym missverstanden werden." }
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
      },
      {
        id: "ex3",
        prompt: "Welches der zehn Erfolgsfaktoren-Prinzipien passt am besten zu folgender Situation: Ein Unternehmen kopiert unreflektiert ein Prozessmodell eines Wettbewerbers, ohne eigene Stärken oder Erfahrungen einzubeziehen?",
        solution: [
          { type: "p", text: "Das verstößt am ehesten gegen Prinzip 6 ('Von bewährten Konzepten lernen'): Dieses Prinzip fordert, sowohl eigene als auch fremde Erfahrungen zu nutzen - nicht aber, fremde Konzepte unreflektiert zu übernehmen, ohne die eigene Situation zu berücksichtigen. Zudem widerspricht dies tendenziell Prinzip 5 ('Maßschneiderei statt Standardkonfektion'), da ein kopiertes Modell selten zur spezifischen Situation des eigenen Unternehmens passt." }
        ]
      },
      {
        id: "ex4",
        prompt: "Erklären Sie den Unterschied zwischen der Segmentierung 'nach Funktion' und 'nach Problemhaltigkeit/Komplexität' bei der horizontalen Segmentierung von Prozessen.",
        solution: [
          { type: "p", text: "Die Segmentierung nach Funktion ähnelt der traditionellen Organisation mit vielen internen Schnittstellen und bietet kaum Vorteile gegenüber der klassischen Form. Die Segmentierung nach Problemhaltigkeit/Komplexität gliedert dagegen nach Routinisierbarkeit der Aufgaben (z. B. einfache vs. komplexe Fälle) und ermöglicht eine kundenorientierte Rundumbearbeitung - allerdings ist die Komplexität eines Falls nicht immer im Voraus bekannt, was die Zuordnung erschwert." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was ist die Kernaufgabe eines Process Owners?", options: ["Nur die technischen IT-Systeme des Prozesses zu verwalten", "Ausschließlich externe Lieferanten und deren Verträge zu koordinieren", "Weisungsbefugnis wie eine klassische, hierarchische Führungskraft auszuüben", "Gesamtverantwortung für einen Prozess tragen und das Team durch Selbstabstimmung koordinieren"], correctIndex: 3, explanation: "Der Process Owner trägt laut Text die Gesamtverantwortung für einen Prozess und koordiniert das Prozess-Team durch Selbstabstimmung - nicht durch Weisung wie eine klassische Führungskraft. Genau dieser Unterschied zur hierarchischen Weisungsbefugnis ist die zentrale Abgrenzung, die der dritte Distraktor bewusst verkehrt." },
      { id: "q2", question: "Welche Segmentierungsform bietet die konsequenteste Kundenorientierung?", options: ["Segmentierung nach Problemhaltigkeit/Komplexität der Fälle", "Segmentierung nach Funktion, ähnlich der traditionellen Organisation", "Segmentierung nach Kundengruppen", "Keine der drei Formen berücksichtigt den Kunden in irgendeiner Weise"], correctIndex: 2, explanation: "Die Segmentierung nach Kundengruppen setzt laut Text das Prinzip 'one face to the customer' am konsequentesten um, weil jede Gruppe eine feste, spezialisierte Ansprechstruktur erhält. Nach Funktion zu segmentieren ähnelt dagegen der traditionellen Organisation mit vielen internen Schnittstellen und bietet kaum Vorteile." },
      { id: "q3", question: "Prinzip 10 der Erfolgsfaktoren ('Keine Bombenwurfstrategie') fordert:", options: ["Ausschließlich Bottom-up-Vorgehen ohne jede strategische Ausrichtung von oben", "Geheimhaltung der Prozessänderung bis zum Umsetzungstag", "Top down für die Ziele, bottom up für den Weg dorthin", "Ausschließlich Top-down-Entscheidungen ganz ohne Mitarbeiterbeteiligung"], correctIndex: 2, explanation: "Prinzip 10 fordert laut Text die Balance 'top down für die Ziele, bottom up für den Weg dorthin' - strategische Zielvorgabe von oben kombiniert mit operativer Mitgestaltung von unten. Reine Geheimhaltung bis zum Stichtag beschreibt dagegen exakt die kritisierte 'Bombenwurfstrategie', die dieses Prinzip verhindern soll." },
      { id: "q4", question: "Prinzip 2 der Erfolgsfaktoren empfiehlt:", options: ["Bestehende Abläufe ausschließlich in kleinen, inkrementellen Schritten zu optimieren", "Prozesse neu zu gestalten statt bestehende Abläufe nur zu optimieren, mit Fokus auf wenige robuste Kernprozesse", "Kernprozesse regelmäßig vollständig an externe Anbieter auszulagern", "Möglichst viele unterschiedliche Prozesse gleichzeitig parallel zu betreiben"], correctIndex: 1, explanation: "Business Reengineering setzt laut Prinzip 2 auf die radikale Neugestaltung der Prozesse statt auf die Optimierung bestehender Abläufe, mit Konzentration auf wenige, robuste Kernprozesse. Die erste Option beschreibt dagegen eher die 'sanfte Tour' der inkrementellen Verbesserung, die diesem Prinzip gerade nicht entspricht." },
      { id: "q5", question: "Ein typisches Problem traditioneller, vertikaler Organisationen ist:", options: ["Eine zu geringe Anzahl an bestehenden Fachabteilungen", "Eine laut Text zu hohe Kundenorientierung der einzelnen Abteilungen", "Eine zu geringe Anzahl an internen Hierarchieebenen", "Organisatorische Unverantwortlichkeit, da Fehler an Schnittstellen kaum zurechenbar sind"], correctIndex: 3, explanation: "Traditionelle vertikale Organisationen leiden laut Text unter organisatorischer Unverantwortlichkeit, weil Fehler an Schnittstellen ('Liegestellen') kaum eindeutig zurechenbar sind, neben Koordinationsbedarf, Informationsverlusten und Überforderung zentraler Stellen. Zu hohe Kundenorientierung wird im Text dagegen nirgends als Problem beschrieben." },
      { id: "q6", question: "Bei der Optimierung eines Gesundheitsmanagementsystems sollte laut Vorlesung berücksichtigt werden:", options: ["Dass eine einmalige Maßnahme für nachhaltigen Erfolg vollkommen ausreicht", "Ausschließlich die persönliche Meinung der Geschäftsleitung als alleiniges Kriterium", "Nur die Kostenfrage, während alle anderen Faktoren irrelevant sind", "Wirksamkeit, Ressourcensituation sowie kulturelle/organisatorische Rahmenbedingungen"], correctIndex: 3, explanation: "Laut Text müssen bei der Wahl zwischen inkrementeller Optimierung und radikaler Neuausrichtung Wirksamkeit, Ressourcensituation und kulturelle Rahmenbedingungen berücksichtigt werden, denn Nachhaltigkeit entsteht durch regelmäßige Erfolgskontrolle - nicht durch einmalige Maßnahmen, wie es der erste Distraktor fälschlich nahelegt." },
      { id: "q7", question: "Prinzip 9 der Erfolgsfaktoren ('Hohes Engagement der Unternehmensleitung') fordert unter anderem...", options: ["dass ausschließlich externe Berater über die Umsetzung entscheiden", "dass grundsätzlich überhaupt keine Widerstände gegen die Veränderung zugelassen werden", "dass die Leitung Ressourcen freigibt und Widerstände gegen die Prozessveränderung überwindet", "dass sich die Unternehmensleitung aus dem Prozess komplett heraushält"], correctIndex: 2, explanation: "Engagement der Unternehmensleitung bedeutet laut Prinzip 9 aktives Freigeben von Ressourcen und das Überwinden von Widerständen gegen die Veränderung. Damit widerspricht es direkt der Vorstellung, die Leitung solle sich heraushalten oder Entscheidungen komplett an externe Berater abgeben." },
      { id: "q8", question: "Prinzip 4 ('Zukunftsgerichtete Entwicklung von Kernkompetenzen') warnt insbesondere vor...", options: ["zu vielen direkten Kundenkontakten der Mitarbeitenden", "einer kurzfristigen Reduktion der Wertschöpfungstiefe, die Kernkompetenzen aushöhlen könnte", "der grundsätzlichen Einbindung von Lieferanten in die Organisation", "einer zu hohen langfristigen Investition in eigene Kernkompetenzen"], correctIndex: 1, explanation: "Prinzip 4 warnt laut Text vor einer kurzfristigen Reduktion der Wertschöpfungstiefe, die wichtige Kernkompetenzen zerstören könnte - Kompetenzentwicklung soll zukunftsgerichtet erfolgen, nicht kurzfristig ausgedünnt werden. Zu hohe Investition in Kernkompetenzen ist damit das Gegenteil dessen, wovor gewarnt wird." },
      { id: "q9", question: "Was ist laut Prinzip 7 ('Dynamik schützen') bei Redundanzen zu beachten?", options: ["Notwendige Redundanzen müssen von unnötigen unterschieden werden, um Handlungsspielraum zu erhalten", "Alle Redundanzen sind laut Text grundsätzlich schädlich und müssen vollständig entfernt werden", "Redundanzen erhöhen laut Text ausnahmslos immer die Effizienz eines Prozesses", "Redundanzen sind ausschließlich in der IT-Abteilung von praktischer Relevanz"], correctIndex: 0, explanation: "Prinzip 7 fordert, notwendige von unnötigen Redundanzen zu unterscheiden, weil manche Redundanzen die Anpassungsfähigkeit (Dynamik) eines Unternehmens schützen. Die pauschale Aussage, alle Redundanzen seien schädlich, widerspricht damit direkt der differenzierten Sichtweise des Prinzips." },
      { id: "q10", question: "Die 'Flotillen-Organisation' aus Prinzip 1 steht im Gegensatz zu...", options: ["der 'Silo-Organisation' mit großen, unbeweglichen, isolierten Einheiten", "der funktionsübergreifenden, kundenorientierten Rundumbearbeitung selbst", "dem Konzept des Business Reengineering insgesamt", "der Prozessorientierung als übergeordnetem Leitgedanken"], correctIndex: 0, explanation: "Die 'Flotille' aus wendigen, kundenorientierten Einheiten wird in Prinzip 1 explizit der starren 'Silo-Organisation' mit großen, isolierten Abteilungen gegenübergestellt. Sie ist also gerade ein Ausdruck der funktionsübergreifenden Rundumbearbeitung, nicht deren Gegenteil - das schließt die übrigen Optionen aus." }
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
      },
      {
        id: "ex3",
        prompt: "Ein Unternehmen möchte sowohl auf ein bestimmtes Kundensegment (z. B. Premiumkunden) fokussieren als auch gleichzeitig durch Einzigartigkeit überzeugen. Ist diese Kombination laut Porter möglich? Begründen Sie.",
        solution: [
          { type: "p", text: "Ja, das ist möglich: Fokussierung ist laut Porter mit den anderen beiden generischen Strategien (Kostenführerschaft oder Differenzierung) kombinierbar. In diesem Fall würde das Unternehmen eine fokussierte Differenzierungsstrategie verfolgen - Einzigartigkeit speziell für ein enges Marktsegment (Premiumkunden)." }
        ]
      },
      {
        id: "ex4",
        prompt: "Erklären Sie, warum 'Marktorientierung' laut Vorlesung nicht mit 'Absatzorientierung' gleichzusetzen ist.",
        solution: [
          { type: "p", text: "Absatzorientierung würde sich nur auf den Verkauf/Vertrieb beziehen. Marktorientierte Unternehmensführung betrifft dagegen die strategische Ausrichtung des gesamten Systems - Strategie, Struktur UND Prozesslogik - auf Kundenbedürfnisse und Wettbewerbsanforderungen. Sie geht also weit über die reine Verkaufsfunktion hinaus und durchdringt die gesamte Organisation." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche drei generischen Wettbewerbsstrategien unterscheidet Porter?", options: ["Push-Strategie, Pull-Strategie und Just-in-Time-Strategie", "Kostenführerschaft, Differenzierung, Fokussierung", "Wachstumsstrategie, Stabilitätsstrategie und Rückzugsstrategie", "Zentrale, dezentrale und hybride Organisationsstrategie"], correctIndex: 1, explanation: "Kostenführerschaft, Differenzierung und Fokussierung bilden laut Text Porters klassisches Grundmodell generischer Wettbewerbsstrategien. Die übrigen Optionen stammen aus anderen betriebswirtschaftlichen Zusammenhängen (Logistik, Portfoliostrategie, Organisationsform) und sind keine Porter-Strategien." },
      { id: "q2", question: "Für welche Strategie ist Prozessmanagement laut Vorlesung besonders gut geeignet?", options: ["Differenzierung", "Nur für Fokussierung, unabhängig von den anderen beiden Strategien", "Für keine der drei generischen Strategien in nennenswertem Maß", "Kostenführerschaft"], correctIndex: 0, explanation: "Prozessmanagement kann über crossfunktionale Integration die für Differenzierung nötige Einzigartigkeit von Prozessen herstellen und ist laut Text daher besonders zur Unterstützung der Differenzierungsstrategie geeignet. Für Kostenführerschaft ist es dagegen weniger prädestiniert, da diese primär auf Skaleneffekten statt auf Koordinationskostenreduktion beruht." },
      { id: "q3", question: "Worauf fokussiert sich Prozessmanagement primär bei der Kostenwirkung?", options: ["Auf die gezielte Erhöhung von Lagerbeständen zur Risikoabsicherung", "Auf Fixkostendegression durch klassische Skaleneffekte", "Reduzierung von Koordinationskosten", "Auf die Reduzierung der Personalkosten durch Stellenabbau"], correctIndex: 2, explanation: "Prozessmanagement fokussiert laut Text nicht die Fixkostendegression, sondern primär die Reduzierung von Koordinationskosten - also den Aufwand für Schnittstellen und Abstimmung. Fixkostendegression durch Skaleneffekte ist dagegen der Hebel der klassischen Kostenführerschaftsstrategie, nicht des Prozessmanagements." },
      { id: "q4", question: "Marktorientierte Unternehmensführung bedeutet:", options: ["Eine reine Kostenorientierung vollständig ohne jeden Kundenbezug", "Den weitgehenden Verzicht auf jede Form interner Organisation", "Strategische Ausrichtung von Strategie, Struktur und Prozesslogik auf Kundenbedürfnisse und Wettbewerb", "Eine ausschließliche Fokussierung auf die reine Vertriebsfunktion"], correctIndex: 2, explanation: "Marktorientierung betrifft laut Text die strategische Ausrichtung des gesamten Systems - Strategie, Struktur UND Prozesslogik - auf Kundenbedürfnisse und Wettbewerb, nicht nur den Absatz. Die vierte Option verwechselt das mit reiner Absatzorientierung, von der der Text ausdrücklich abgrenzt." },
      { id: "q5", question: "Fokussierung als generische Strategie bedeutet:", options: ["Sie ist laut Porter immer eine eigenständige, nicht kombinierbare Strategie", "Konzentration auf ein spezifisches Marktsegment, kombinierbar mit Kostenführerschaft oder Differenzierung", "Den vollständigen Verzicht auf jede Form der Marktsegmentierung", "Ein Konzept, das ausschließlich für kleine Unternehmen praktische Relevanz hat"], correctIndex: 1, explanation: "Fokussierung bedeutet laut Text die Konzentration auf ein spezifisches Marktsegment und ist ausdrücklich mit den anderen beiden generischen Strategien kombinierbar. Sie ist damit gerade keine eigenständige, isolierte Strategie, wie es die erste Option unterstellt." },
      { id: "q6", question: "Übertragen auf Gesundheitsförderung bedeutet Marktorientierung:", options: ["Dass für die Angebote ausschließlich die entstehenden Kosten zählen", "Dass Gesundheitsangebote unabhängig vom tatsächlichen Bedarf der Mitarbeitenden festgelegt werden", "Angebote richten sich end-to-end am tatsächlichen Bedarf der Mitarbeitenden aus und werden laufend angepasst", "Dass Gesundheitsförderung grundsätzlich keine Evaluation benötigt"], correctIndex: 2, explanation: "Laut Text werden Mitarbeitende wie 'Kunden' behandelt, deren Bedarf end-to-end von der Bedarfserhebung über das Angebot bis zur Evaluation erhoben und laufend angepasst werden muss. Angebote unabhängig vom Bedarf festzulegen widerspricht diesem Grundgedanken der Marktorientierung direkt." },
      { id: "q7", question: "Die Branchenstrukturanalyse nach Porter untersucht...", options: ["primär die interne Ressourcenausstattung eines einzelnen Unternehmens", "ausschließlich die interne Personalstruktur eines Unternehmens", "ausschließlich Kennzahlen zur Kundenzufriedenheit", "die fünf Wettbewerbskräfte einer Branche"], correctIndex: 3, explanation: "Die Branchenstrukturanalyse (Five Forces) ist laut Text Porters zentrales Instrument zur Analyse der externen Wettbewerbsstruktur einer Branche. Die interne Ressourcenausstattung ist dagegen Gegenstand des Resource Based View, nicht der Branchenstrukturanalyse - eine typische Verwechslung der beiden Perspektiven." },
      { id: "q8", question: "Worauf beruht die Kostenführerschaft-Strategie hauptsächlich?", options: ["Ausschließlich auf hohen Marketing- und Werbeausgaben", "Skaleneffekte, Erfahrungskurveneffekte und funktionale Spezialisierung", "Auf der weitgehenden Individualisierung jedes einzelnen Produkts", "Auf zufälligen, nicht beeinflussbaren Marktentwicklungen"], correctIndex: 1, explanation: "Kostenführerschaft beruht laut Text auf Skaleneffekten, Erfahrungskurveneffekten, Verfahrensinvestitionen und funktional spezialisierter Aufgabengliederung - diese Faktoren ermöglichen die Fixkostendegression. Individualisierung jedes einzelnen Produkts ist dagegen eher ein Merkmal der Differenzierungsstrategie, nicht der Kostenführerschaft." },
      { id: "q9", question: "Wodurch entsteht laut Vorlesung das Differenzierungspotenzial von Prozessmanagement konkret?", options: ["Durch eine ausnahmslose Standardisierung sämtlicher Abläufe", "Durch reine Kostensenkung ohne jede qualitative Wirkung", "Durch den vollständigen Verzicht auf jegliche prozessuale Koordination", "Durch crossfunktionale Integration, die einzigartige Prozesse schafft"], correctIndex: 3, explanation: "Das Differenzierungspotenzial von Prozessmanagement entsteht laut Text durch crossfunktionale Integration, die einzigartige, schwer kopierbare Prozesse schafft. Vollständige Standardisierung würde dem eher entgegenwirken, da Einzigartigkeit gerade das Gegenteil reiner Vereinheitlichung ist." },
      { id: "q10", question: "Welche Aussage zur Fokussierungsstrategie ist korrekt?", options: ["Sie kann mit Kostenführerschaft ODER mit Differenzierung kombiniert werden", "Sie kann laut Porter nur alleine, nie in Kombination mit anderen Strategien verfolgt werden", "Sie widerspricht laut Text grundsätzlich dem Prinzip der Kundenorientierung", "Sie ist inhaltlich identisch mit der Differenzierungsstrategie"], correctIndex: 0, explanation: "Fokussierung ist laut Text eine Segmentwahl, die zusätzlich mit Kostenführerschaft oder Differenzierung kombiniert werden kann - etwa als fokussierte Differenzierung für ein enges Premiumsegment. Sie ist damit weder eine reine Einzelstrategie noch identisch mit der Differenzierung selbst." }
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
      },
      {
        id: "ex3",
        prompt: "Nennen Sie die vier Phasen des Kompetenz-Lebenszyklus in der richtigen Reihenfolge und beschreiben Sie jede Phase in einem Satz.",
        solution: [
          { type: "p", text: "1. Identifikation: Potenziale werden zu Prozessen. 2. Entwicklung: Lernen und Wissensakkumulation bauen die Kompetenz aus. 3. Integration: Die Kompetenz wird in Wettbewerbsvorteile eingebettet. 4. Nutzung: Die Stärken der Kernprozesse werden ausgeschöpft." }
        ]
      },
      {
        id: "ex4",
        prompt: "Ein Unternehmen verfügt über eine seltene Maschine, die aber problemlos von jedem Wettbewerber am freien Markt gekauft werden kann. Erfüllt diese Ressource die Voraussetzungen für einen nachhaltigen Wettbewerbsvorteil? Begründen Sie mit mindestens einer der genannten Eigenschaften.",
        solution: [
          { type: "p", text: "Nein: Da die Maschine frei am Markt erhältlich ist, fehlt die Faktormarktinsuffizienz (sie ist eben doch käuflich) und meist auch die Unternehmensspezifität - jeder Wettbewerber kann sie ebenso erwerben. Ohne diese Eigenschaften kann die Ressource keinen dauerhaften Wettbewerbsvorteil begründen, selbst wenn sie aktuell selten im Einsatz ist." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche drei Kategorien strategisch relevanter Ressourcen werden unterschieden?", options: ["Physikalische, humane, organisatorische Ressourcen", "Ausschließlich immaterielle Ressourcen ohne weitere Unterteilung", "Finanzielle, rechtliche und politische Ressourcen des Unternehmens", "Ausschließlich materielle, physisch greifbare Ressourcen"], correctIndex: 0, explanation: "Physikalische (Technologie, Standort, Rohstoffzugang), humane (Ausbildung, Erfahrung, Motivation) und organisatorische Ressourcen (Innovationsfähigkeit, Kundennähe, Flexibilität) bilden laut Text die Grundlage des Resource Based View. Die anderen Optionen greifen jeweils nur einen Teilaspekt heraus oder nennen Kategorien, die im Text nicht als die drei Grundtypen genannt werden." },
      { id: "q2", question: "Was besagt die 'kausale Mehrdeutigkeit' als Isolationsbarriere?", options: ["Dass die zugrundeliegende Kompetenz öffentlich vollständig dokumentiert ist", "Der Ursache-Wirkungs-Zusammenhang einer Kompetenz ist für Außenstehende schwer nachvollziehbar", "Dass die Kompetenz laut Definition keinerlei Marktbezug besitzt", "Dass die Kompetenz von Wettbewerbern beliebig oft kopiert werden kann"], correctIndex: 1, explanation: "Kausale Mehrdeutigkeit bedeutet laut Text, dass der Ursache-Wirkungs-Zusammenhang zwischen internen Abläufen und Erfolg für Außenstehende schwer nachvollziehbar ist, was die Imitation erschwert. Öffentliche Dokumentation oder beliebige Kopierbarkeit stehen im direkten Widerspruch zu dieser Schutzwirkung." },
      { id: "q3", question: "Ist das bloße Vorhandensein wertvoller Ressourcen laut Vorlesung ausreichend für eine Kernkompetenz?", options: ["Nein, Ressourcen sind für die Entstehung von Kernkompetenzen völlig irrelevant", "Ja, das reicht laut Text in jedem Fall vollständig aus", "Nein, es ist allenfalls eine notwendige, aber keine hinreichende Bedingung", "Nur bei physikalischen Ressourcen reicht das Vorhandensein allein aus"], correctIndex: 2, explanation: "Laut Text ist das bloße Vorhandensein von Ressourcen allenfalls eine notwendige, aber keine hinreichende Bedingung - erst eine erfolgskritische, unternehmensspezifische Kombination mit explizitem Marktbezug erzeugt eine Kernkompetenz. Ressourcen als 'völlig irrelevant' zu bezeichnen widerspricht dem ebenso wie die Behauptung, sie allein reichten immer aus." },
      { id: "q4", question: "Pfadabhängigkeit als Isolationsbarriere bedeutet:", options: ["Dass die Kompetenz an überhaupt keinen bestimmten Entwicklungsweg gebunden ist", "Dass Wettbewerber die Kompetenz jederzeit vollständig kostenlos imitieren können", "Dass sich der Begriff ausschließlich auf physische Unternehmensstandorte bezieht", "Imitation würde bedeuten, den bisherigen strategischen Entwicklungspfad aufzugeben (sunk costs)"], correctIndex: 3, explanation: "Pfadabhängigkeit bedeutet laut Text, dass Imitation den eigenen strategischen Entwicklungspfad aufgeben würde und bereits getätigte Investitionen (sunk costs) entwertet - das schreckt Wettbewerber von der Nachahmung ab. Kostenlose, beliebige Imitierbarkeit ist damit das genaue Gegenteil dessen, was diese Barriere bewirkt." },
      { id: "q5", question: "Wie verhalten sich markt- und ressourcenorientierte Strategie laut Vorlesung zueinander?", options: ["Sie ergänzen sich - Ressourcen wirken erst in marktwirksamen Prozessen", "Nur die marktorientierte Strategie besitzt laut Text tatsächliche Relevanz", "Sie schließen sich laut Text grundsätzlich gegenseitig aus", "Nur die ressourcenorientierte Strategie besitzt laut Text tatsächliche Relevanz"], correctIndex: 0, explanation: "Beide Perspektiven ergänzen sich laut Text, denn Ressourcen entfalten ihre Wirkung erst, wenn sie in marktwirksamen Leistungsprozessen zusammengeführt werden. Die Vorstellung, sie schlössen sich gegenseitig aus oder nur eine der beiden sei relevant, widerspricht dieser ausdrücklichen Ergänzungslogik." },
      { id: "q6", question: "In welcher Phase des Kompetenz-Lebenszyklus werden Kernprozess-Stärken ausgeschöpft?", options: ["Entwicklung (Lernen und Wissensakkumulation)", "Identifikation (Potenziale werden zu Prozessen)", "Nutzung", "Integration (Einbettung in Wettbewerbsvorteile)"], correctIndex: 2, explanation: "Die Nutzungsphase ist laut Text die vierte und letzte Phase des Kompetenz-Lebenszyklus, in der die Stärken der Kernprozesse tatsächlich ausgeschöpft werden - nach Identifikation, Entwicklung und Integration. In den vorangehenden Phasen wird die Kompetenz erst aufgebaut bzw. eingebettet, nicht bereits ausgeschöpft." },
      { id: "q7", question: "Welche Eigenschaft muss eine Ressource NICHT zwingend erfüllen, um einen nachhaltigen Wettbewerbsvorteil zu begründen?", options: ["Leichte Käuflichkeit am freien Markt für praktisch jeden Wettbewerber", "Nicht-Imitierbarkeit durch Wettbewerber", "Unternehmensspezifität der Ressource", "Nicht-Substituierbarkeit durch andere Ressourcen"], correctIndex: 0, explanation: "Im Gegenteil: Eine für alle leicht käufliche Ressource weist keine Faktormarktinsuffizienz auf und kann daher laut Text keinen dauerhaften Wettbewerbsvorteil begründen, selbst wenn sie aktuell selten im Einsatz ist. Nicht-Imitierbarkeit, Unternehmensspezifität und Nicht-Substituierbarkeit gehören dagegen ausdrücklich zu den geforderten Eigenschaften." },
      { id: "q8", question: "Implizites/tazites Wissen als Isolationsbarriere ist schwer kopierbar, weil...", options: ["es laut Text ausschließlich bei physikalischen Ressourcen vorkommt", "es vollständig und öffentlich zugänglich dokumentiert vorliegt", "es sich definitionsgemäß im Zeitverlauf nie verändern lässt", "es auf mehrere Personen verteilt und in organisatorischen Routinen gespeichert ist"], correctIndex: 3, explanation: "Implizites Wissen ist laut Text auf mehrere Personen verteilt und in organisatorischen Routinen gespeichert, wodurch es sich nicht einfach abschreiben oder durch Abwerbung einzelner Mitarbeitender kopieren lässt. Öffentliche Dokumentation würde dieser Schutzwirkung direkt entgegenstehen." },
      { id: "q9", question: "Eine Kernkompetenz manifestiert sich laut Vorlesung insbesondere in...", options: ["reinen, isoliert betrachteten Finanzkennzahlen des Unternehmens", "Kernprodukten bzw. Kernleistungen des Unternehmens", "dem geografischen Standort der Unternehmenszentrale", "der reinen Anzahl der beschäftigten Mitarbeitenden"], correctIndex: 1, explanation: "Eine Kernkompetenz manifestiert sich laut Text in den Kernprodukten bzw. Kernleistungen des Unternehmens, da sie durch eine erfolgskritische Ressourcenkombination mit explizitem Marktbezug entsteht. Finanzkennzahlen, Standort oder Mitarbeiterzahl sind dagegen allenfalls indirekte Begleiterscheinungen, keine Manifestationsform der Kompetenz selbst." },
      { id: "q10", question: "Organisatorische Ressourcen (eine der drei Kategorien) umfassen zum Beispiel...", options: ["Ausschließlich den Standort und den Zugang zu Rohstoffen", "Innovationsfähigkeit, Kundennähe und Flexibilität", "Ausschließlich Ausbildung und Motivation einzelner Mitarbeitender", "Ausschließlich physisches, im Unternehmen gebundenes Kapital"], correctIndex: 1, explanation: "Organisatorische Ressourcen betreffen laut Text Fähigkeiten der Organisation als Ganzes wie Innovationsfähigkeit, Kundennähe und Flexibilität. Standort/Rohstoffzugang zählen dagegen zu den physikalischen, Ausbildung/Motivation zu den humanen Ressourcen - beides sind andere der drei Kategorien." }
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
      },
      {
        id: "ex3",
        prompt: "Nennen Sie die vier Bausteine, die sich laut Fazit-Kapitel zu einer systematischen Prozessverbesserung zusammenfügen.",
        solution: [
          { type: "p", text: "1. Prozessidentifikation und -modellierung (Definition, Struktur, Transparenz). 2. Prozessmessung und -bewertung (Kennzahlen zu Zeit, Qualität, Kosten). 3. Prozessgestaltung und -optimierung (kontinuierliche Verbesserung nach PDCA). 4. Integration mit Strategie und Ressourcen (markt- und ressourcenorientierte Perspektiven)." }
        ]
      },
      {
        id: "ex4",
        prompt: "Erklären Sie Punkt 2 des Gesamtfazits ('Personal als wiederkehrender Engpassfaktor') anhand eines selbst gewählten Beispiels aus dem Wertschöpfungsketten-Strang (z. B. Bestellmanagement oder Dienstleistungen).",
        solution: [
          { type: "p", text: "Beispiel Dienstleistungen: Da Dienstleistungen nicht lagerfähig sind (Uno-actu-Prinzip), muss ausreichend Personal in dem Moment verfügbar sein, in dem die Nachfrage entsteht - fehlt Personal, entsteht sofort ein Engpass, der nicht durch Lagerbestände abgefedert werden kann. Gleichzeitig ist genau dieses Personal durch hohe Auslastung und emotionale Beanspruchung (z. B. im Kundenkontakt) besonders vulnerabel für Stress und Belastung - Personal ist hier also gleichzeitig der limitierende UND der gesundheitlich gefährdete Faktor." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Wofür steht PDCA im Kontext der Prozessgestaltung?", options: ["Ein Synonym für Business Reengineering", "Plan-Do-Check-Act als Kreislauf kontinuierlicher Verbesserung", "Eine Abkürzung für Prozessdokumentation", "Ein Kennzahlensystem für Lieferanten"], correctIndex: 1, explanation: "PDCA beschreibt den Kreislauf kontinuierlicher Verbesserung, nicht eine einmalige Reorganisation." },
      { id: "q2", question: "Welches Spannungsfeld muss Prozessmanagement laut Fazit-Kapitel immer wieder ausbalancieren?", options: ["Inland vs. Ausland", "Effizienz, Qualität und Flexibilität", "Marketing vs. Vertrieb", "Umsatz vs. Gewinn"], correctIndex: 1, explanation: "Überstandardisierung vs. fehlende Standards ist der zentrale Zielkonflikt." },
      { id: "q3", question: "Laut Gesamtfazit ist der zentrale Hebel für Gesundheit in Organisationen:", options: ["Ausschließlich das persönliche Verhalten jedes Einzelnen", "Individuelle Verhaltensangebote für Mitarbeitende", "Zufällige externe Einflüsse", "Management-/Planungsentscheidungen auf der Dispositionsebene"], correctIndex: 3, explanation: "Dispositive Entscheidungen (Personal, Kapazität, Kennzahlen, Lieferanten) prägen Gesundheit primär." },
      { id: "q4", question: "Welcher Faktor wird laut Gesamtfazit über nahezu alle 16 Themen hinweg als wiederkehrender Engpassfaktor identifiziert?", options: ["Personal", "Energie", "Information", "Kapital"], correctIndex: 0, explanation: "Personal wird durchgängig als limitierender und zugleich vulnerabler Faktor benannt." },
      { id: "q5", question: "'Strukturelle statt additive Gesundheitsförderung' bedeutet:", options: ["Gesundheitsförderung sollte nur additiv zu Boni ausgezahlt werden", "Der Begriff hat keine Bedeutung für Unternehmen", "Gesundheitsförderung ist integraler Bestandteil der Prozess- und Wertschöpfungsgestaltung selbst", "Gesundheitsförderung ist ein optionales Zusatzprogramm ohne Bezug zu Prozessen"], correctIndex: 2, explanation: "Gesundheitsförderung soll strukturell mitgedacht, nicht nachträglich angehängt werden." },
      { id: "q6", question: "Klare, stabile Prozesse wirken sich auf Mitarbeitende typischerweise wie aus?", options: ["Sie reduzieren Unsicherheit und stärken Motivation, Selbstwirksamkeit und Kooperation", "Sie führen automatisch zu Überlastung", "Sie erhöhen Unsicherheit und senken Motivation", "Sie haben keinerlei psychologische Wirkung"], correctIndex: 0, explanation: "Prozessklarheit wirkt positiv auf Handlungssicherheit und Wohlbefinden." },
      { id: "q7", question: "Wie viele Bausteine systematischer Prozessverbesserung nennt das Fazit-Kapitel?", options: ["Sechs", "Vier", "Zwei", "Drei"], correctIndex: 1, explanation: "Identifikation/Modellierung, Messung/Bewertung, Gestaltung/Optimierung und Integration mit Strategie/Ressourcen." },
      { id: "q8", question: "Was passiert laut Gesamtfazit bei 'Überoptimierung' von Effizienzinstrumenten wie Digitalisierung oder Just-in-Time?", options: ["Es entstehen ausschließlich Vorteile ohne jedes Risiko", "Sie werden automatisch günstiger", "Sie können trotz Effizienzgewinn neue Belastungen erzeugen", "Sie verbessern immer die Gesundheit der Mitarbeitenden"], correctIndex: 2, explanation: "Die 'Doppelwirkung' beschreibt genau dieses zweischneidige Risiko." },
      { id: "q9", question: "Fehlende Standards führen laut Fazit-Kapitel tendenziell zu...", options: ["höherer Flexibilität, aber höheren Koordinations- und Fehlerkosten", "geringerer Mitarbeiterbeteiligung", "höherer Effizienz und Qualität", "vollständiger Prozessstabilität"], correctIndex: 0, explanation: "Fehlende Standards erhöhen zwar die Flexibilität, aber auch Abstimmungs- und Fehleraufwand." },
      { id: "q10", question: "Welche Organisationskultur fördert laut Fazit-Kapitel erfolgreiches Prozessmanagement?", options: ["Eine Kultur der Geheimhaltung und Kontrolle", "Eine rein finanziell orientierte Kultur", "Eine Kultur ohne jede Führungsstruktur", "Eine Kultur der Fehleroffenheit, des Vertrauens und der Beteiligung"], correctIndex: 3, explanation: "Fehleroffenheit, Vertrauen und Beteiligung werden explizit als förderlich genannt." }
    ]
  }
];
