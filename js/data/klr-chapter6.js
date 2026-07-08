const KLR_CHAPTER6_TOPICS = [
  {
    id: "plankostenrechnung-formen",
    chapter: 6,
    order: 1,
    title: "Plankostenrechnung: starr und flexibel",
    icon: "📐",
    summary: "Starre, flexible Plankostenrechnung auf Voll- und auf Grenzkostenbasis - Soll-Kosten, Verbrauchs- und Beschäftigungsabweichung im Überblick.",
    explanation: [
      { type: "p", text: "Die Plankostenrechnung arbeitet nicht mit reinen Ist-Werten, sondern mit im Voraus geplanten (Soll-)Werten. Sie verfolgt zwei Zwecke: die Wirtschaftlichkeitskontrolle (Soll-Ist-Vergleich, um festzustellen, ob wirtschaftlich gearbeitet wurde) und die Preisbildung bzw. Kalkulation (über den Plan-Verrechnungssatz, mit dem z. B. innerbetrieblich verrechnet oder Angebote kalkuliert werden)." },
      { type: "list", items: [
        "Wirtschaftlichkeitskontrolle: Vergleich der geplanten mit den tatsächlich angefallenen Kosten, um Abweichungen aufzudecken und Verantwortlichkeiten zuzuordnen.",
        "Preisbildung: Der Plan-Verrechnungssatz = Plankosten / Planbeschäftigung wird z. B. zur innerbetrieblichen Leistungsverrechnung oder zur Vorkalkulation von Produkten verwendet, bevor die Ist-Kosten überhaupt bekannt sind."
      ]},
      { type: "p", text: "Starre Plankostenrechnung: Die Plankosten werden nicht an die tatsächliche (Ist-)Beschäftigung angepasst, sondern es wird schlicht mit dem ursprünglich geplanten Betrag verglichen. Die Gesamtabweichung ergibt sich als GA = Ist-Kosten − verrechnete Plankosten, wobei verrechnete Plankosten = Plan-Verrechnungssatz × Ist-Beschäftigung. Problem: Diese Gesamtabweichung vermischt echte Wirtschaftlichkeitsabweichungen mit reinen Beschäftigungsschwankungen, weil die Fixkosten nicht gesondert berücksichtigt werden - sie ist daher zur Wirtschaftlichkeitskontrolle ungeeignet." },
      { type: "p", text: "Flexible Plankostenrechnung auf Vollkostenbasis: Die Kosten werden mithilfe eines Variators in einen fixen und einen variablen Anteil aufgespalten. Der Variator gibt an, mit welchem Faktor bzw. zu wie viel Prozent sich eine Kostenart mit der Beschäftigung ändert. Damit lassen sich Soll-Kosten für die tatsächliche Beschäftigung berechnen und die Gesamtabweichung sauber in zwei Teile zerlegen:" },
      { type: "list", items: [
        "Soll-Kosten = fixe Plankosten + variable Plankosten bei Ist-Beschäftigung",
        "Verbrauchsabweichung (VA) = Ist-Kosten − Soll-Kosten (zeigt die tatsächliche Wirtschaftlichkeit, unabhängig vom Beschäftigungsgrad)",
        "Beschäftigungsabweichung (BA) = Soll-Kosten − verrechnete Plankosten = (1 − Ist-Beschäftigung / Planbeschäftigung) × Fixkosten (zeigt die Kosten der Unter- bzw. Überbeschäftigung, insbesondere ungenutzte oder übermäßig genutzte Fixkostenanteile)",
        "Gesamtabweichung (GA) = VA + BA = Ist-Kosten − verrechnete Plankosten"
      ]},
      { type: "p", text: "Flexible Plankostenrechnung auf Grenzkostenbasis (Grenzplankostenrechnung): Hier werden nur die variablen Kosten verrechnet, die Fixkosten werden als eigener Block ausgewiesen statt (oft willkürlich) über Bezugsgrößen auf die Kostenträger geschlüsselt zu werden. Das vermeidet Verzerrungen, die durch eine ungenaue Fixkostenschlüsselung entstehen können, und macht das Fixkostenmanagement transparenter." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Fertigungsbereich plant mit einer Planbeschäftigung von 1.000 Stück und Plankosten von 50.000 € (davon 20.000 € fix). Tatsächlich wurden 800 Stück produziert, die Ist-Kosten betrugen 46.000 €. Berechnen Sie die Soll-Kosten, die Verbrauchsabweichung und die Beschäftigungsabweichung.",
        solution: [
          { type: "list", items: [
            "Plan-Verrechnungssatz = 50.000 € / 1.000 Stück = 50 €/Stück",
            "Variabler Plankostensatz = (50.000 − 20.000) € / 1.000 Stück = 30 €/Stück",
            "Soll-Kosten = 20.000 € + 30 €/Stück × 800 Stück = 20.000 € + 24.000 € = 44.000 €",
            "Verrechnete Plankosten = 50 €/Stück × 800 Stück = 40.000 €",
            "Verbrauchsabweichung VA = Ist-Kosten − Soll-Kosten = 46.000 € − 44.000 € = 2.000 € (unvorteilhaft)",
            "Beschäftigungsabweichung BA = Soll-Kosten − verrechnete Plankosten = 44.000 € − 40.000 € = 4.000 € (Kosten der Unterbeschäftigung)"
          ]}
        ]
      },
      {
        id: "ex2",
        prompt: "Ein anderer Bereich plant mit einer Planbeschäftigung von 2.000 Stück und Plankosten von 80.000 € (davon 30.000 € fix). Tatsächlich wurden 2.400 Stück produziert (Überbeschäftigung), die Ist-Kosten betrugen 95.000 €. Berechnen Sie die Soll-Kosten, die Verbrauchsabweichung und die Beschäftigungsabweichung.",
        solution: [
          { type: "list", items: [
            "Plan-Verrechnungssatz = 80.000 € / 2.000 Stück = 40 €/Stück",
            "Variabler Plankostensatz = (80.000 − 30.000) € / 2.000 Stück = 25 €/Stück",
            "Soll-Kosten = 30.000 € + 25 €/Stück × 2.400 Stück = 30.000 € + 60.000 € = 90.000 €",
            "Verrechnete Plankosten = 40 €/Stück × 2.400 Stück = 96.000 €",
            "Verbrauchsabweichung VA = 95.000 € − 90.000 € = 5.000 € (unvorteilhaft)",
            "Beschäftigungsabweichung BA = 90.000 € − 96.000 € = −6.000 € (vorteilhaft: die Überbeschäftigung deckt mehr Fixkosten als geplant, Kontrolle: (1 − 2.400/2.000) × 30.000 € = −6.000 €)"
          ]}
        ]
      },
      {
        id: "ex3",
        prompt: "Ein Bereich plant mit 1.500 Stunden Planbeschäftigung und Plankosten von 60.000 € (davon 24.000 € fix). Tatsächlich wurden 1.200 Stunden bei Ist-Kosten von 53.000 € geleistet. Berechnen Sie die Gesamtabweichung direkt (Ist-Kosten − verrechnete Plankosten) und weisen Sie durch eine Kontrollrechnung nach, dass GA = VA + BA gilt.",
        solution: [
          { type: "list", items: [
            "Plan-Verrechnungssatz = 60.000 € / 1.500 Std. = 40 €/Std.; variabler Satz = (60.000 − 24.000) € / 1.500 Std. = 24 €/Std.",
            "Verrechnete Plankosten = 40 €/Std. × 1.200 Std. = 48.000 €",
            "Gesamtabweichung GA = Ist-Kosten − verrechnete Plankosten = 53.000 € − 48.000 € = 5.000 €",
            "Soll-Kosten = 24.000 € + 24 €/Std. × 1.200 Std. = 24.000 € + 28.800 € = 52.800 €",
            "Verbrauchsabweichung VA = 53.000 € − 52.800 € = 200 € (unvorteilhaft)",
            "Beschäftigungsabweichung BA = 52.800 € − 48.000 € = 4.800 €",
            "Kontrollrechnung: VA + BA = 200 € + 4.800 € = 5.000 € = GA - stimmt überein."
          ]}
        ]
      },
      {
        id: "ex4",
        prompt: "Erläutern Sie, warum die in der starren Plankostenrechnung ermittelte Gesamtabweichung zur Kontrolle der Wirtschaftlichkeit ungeeignet ist.",
        solution: [
          { type: "p", text: "In der starren Plankostenrechnung werden die Plankosten nicht an die tatsächliche Beschäftigung angepasst - es wird immer mit dem ursprünglich für die Planbeschäftigung geplanten Betrag verglichen. Weicht die Ist-Beschäftigung von der Planbeschäftigung ab, entsteht automatisch eine Differenz allein durch die Fixkosten, die sich mit der Beschäftigung nicht proportional verändern. Diese rein beschäftigungsbedingte Differenz vermischt sich in der Gesamtabweichung mit der eigentlichen Wirtschaftlichkeitsabweichung (zu hoher oder zu niedriger Verbrauch). Man kann also nicht erkennen, ob eine Abweichung durch unwirtschaftliches Arbeiten oder nur durch einen anderen Beschäftigungsgrad entstanden ist - für eine aussagekräftige Wirtschaftlichkeitskontrolle ist die starre Gesamtabweichung damit ungeeignet." }
        ]
      },
      {
        id: "ex5",
        prompt: "Vergleichen Sie die flexible Plankostenrechnung auf Vollkostenbasis mit der auf Grenzkostenbasis. Was ist der Hauptunterschied, und welcher Nachteil der Vollkostenbasis wird auf Grenzkostenbasis vermieden?",
        solution: [
          { type: "p", text: "Auf Vollkostenbasis werden sowohl die variablen als auch die fixen Plankosten über den Plan-Verrechnungssatz auf die Kostenträger bzw. Bezugsgrößen verrechnet - dazu müssen die Fixkosten mittels eines Schlüssels (Variator) den Kostenträgern zugerechnet werden. Auf Grenzkostenbasis (Grenzplankostenrechnung) werden dagegen nur die variablen (Grenz-)Kosten verrechnet, während die Fixkosten als separater Block ausgewiesen und nicht auf Kostenträger geschlüsselt werden." },
          { type: "p", text: "Der Hauptunterschied liegt also darin, ob Fixkosten überhaupt anteilig verrechnet werden. Der Nachteil der Vollkostenbasis, der auf Grenzkostenbasis vermieden wird, ist die oft willkürliche und verzerrende Fixkostenschlüsselung: Da Fixkosten sich nicht ursächlich durch einzelne Kostenträger verursachen lassen, führt ihre Verrechnung über pauschale Schlüssel zu ungenauen, teils irreführenden Kosteninformationen. Die Grenzplankostenrechnung schafft hier mehr Transparenz." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche zwei Zwecke verfolgt die Plankostenrechnung?", options: ["Nur die Wirtschaftlichkeitskontrolle", "Wirtschaftlichkeitskontrolle und Preisbildung/Kalkulation", "Nur die Steuerbilanz", "Nur die Lagerbewertung"], correctIndex: 1, explanation: "Die Plankostenrechnung dient sowohl der Soll-Ist-Kontrolle als auch der Preisbildung über den Plan-Verrechnungssatz." },
      { id: "q2", question: "Wie berechnet sich der Plan-Verrechnungssatz?", options: ["Ist-Kosten / Ist-Beschäftigung", "Plankosten / Planbeschäftigung", "Fixkosten / variable Kosten", "Soll-Kosten / verrechnete Plankosten"], correctIndex: 1, explanation: "Der Plan-Verrechnungssatz ergibt sich aus den geplanten Kosten geteilt durch die Planbeschäftigung." },
      { id: "q3", question: "Was ist kennzeichnend für die starre Plankostenrechnung?", options: ["Die Plankosten werden an die Ist-Beschäftigung angepasst", "Die Plankosten werden nicht an die Ist-Beschäftigung angepasst", "Es werden nur variable Kosten betrachtet", "Fixkosten werden separat ausgewiesen"], correctIndex: 1, explanation: "Bei der starren Plankostenrechnung bleibt der ursprüngliche Planwert unverändert, egal wie hoch die Ist-Beschäftigung ist." },
      { id: "q4", question: "Warum ist die Gesamtabweichung der starren Plankostenrechnung zur Wirtschaftlichkeitskontrolle ungeeignet?", options: ["Weil sie immer null ist", "Weil sie Verbrauchs- und Beschäftigungsabweichung vermischt und Fixkosten nicht berücksichtigt", "Weil sie nur für Dienstleistungsunternehmen gilt", "Weil sie ausschließlich Fixkosten enthält"], correctIndex: 1, explanation: "Beschäftigungsbedingte Effekte auf die Fixkosten werden nicht von echten Wirtschaftlichkeitsabweichungen getrennt." },
      { id: "q5", question: "Wie lautet die Formel für die Soll-Kosten in der flexiblen Plankostenrechnung auf Vollkostenbasis?", options: ["Fixe Plankosten + variable Plankosten bei Planbeschäftigung", "Fixe Plankosten + variable Plankosten bei Ist-Beschäftigung", "Verrechnete Plankosten − Ist-Kosten", "Ist-Kosten × Beschäftigungsgrad"], correctIndex: 1, explanation: "Die Soll-Kosten passen die variablen Kosten an die tatsächliche Beschäftigung an, die Fixkosten bleiben unverändert." },
      { id: "q6", question: "Was zeigt die Verbrauchsabweichung (VA)?", options: ["Die Kosten der Unter- oder Überbeschäftigung", "Die tatsächliche Wirtschaftlichkeit unabhängig vom Beschäftigungsgrad", "Den Plan-Verrechnungssatz", "Die Differenz zwischen zwei Planjahren"], correctIndex: 1, explanation: "VA = Ist-Kosten − Soll-Kosten misst, wie wirtschaftlich bei der tatsächlichen Beschäftigung gearbeitet wurde." },
      { id: "q7", question: "Was zeigt die Beschäftigungsabweichung (BA)?", options: ["Die reine Wirtschaftlichkeit der Fertigung", "Die Kosten der Unter- bzw. Überbeschäftigung, insbesondere bei den Fixkosten", "Den Materialverbrauch", "Den Lohnsatz der Mitarbeiter"], correctIndex: 1, explanation: "BA = Soll-Kosten − verrechnete Plankosten = (1 − Ist-Beschäftigung/Planbeschäftigung) × Fixkosten." },
      { id: "q8", question: "Was gibt der Variator in der flexiblen Plankostenrechnung an?", options: ["Den Gesamtbetrag der Fixkosten", "Mit welchem Faktor bzw. zu wie viel Prozent sich eine Kostenart mit der Beschäftigung ändert", "Die Höhe der Ist-Kosten", "Den Plan-Verrechnungssatz je Kostenstelle"], correctIndex: 1, explanation: "Der Variator dient zur Aufspaltung der Kosten in einen fixen und einen variablen Anteil." },
      { id: "q9", question: "Was unterscheidet die Grenzplankostenrechnung von der flexiblen Plankostenrechnung auf Vollkostenbasis?", options: ["Es werden nur variable Kosten verrechnet, Fixkosten werden separat ausgewiesen statt geschlüsselt", "Es gibt keine Soll-Ist-Vergleiche mehr", "Sie berücksichtigt nur die Planbeschäftigung", "Sie verzichtet vollständig auf einen Plan-Verrechnungssatz"], correctIndex: 0, explanation: "Die Grenzplankostenrechnung vermeidet die oft willkürliche Schlüsselung der Fixkosten auf Kostenträger." },
      { id: "q10", question: "Eine Kostenstelle plant mit 1.000 Stück Planbeschäftigung, 10.000 € Fixkosten und einem Verrechnungssatz von 30 €/Stück. Die Ist-Beschäftigung beträgt 900 Stück. Wie hoch ist die Beschäftigungsabweichung?", options: ["1.000 €", "900 €", "3.000 €", "10.000 €"], correctIndex: 0, explanation: "BA = (1 − 900/1.000) × 10.000 € = 0,1 × 10.000 € = 1.000 €." }
    ]
  },
  {
    id: "abweichungsanalyse-material-lohn",
    chapter: 6,
    order: 2,
    title: "Abweichungsanalyse: Material und Fertigungslöhne",
    icon: "🧮",
    summary: "Materialpreis- und Materialverbrauchsabweichung, Lohnpreis- und Effizienzabweichung - wie sich Einzelkostenabweichungen exakt auf Verantwortungsbereiche zurückführen lassen.",
    explanation: [
      { type: "p", text: "Bei Einzelkosten wie Material und Fertigungslöhnen lässt sich die Gesamtabweichung (Ist-Kosten − Standardkosten zu Standardmenge/-zeit und Standardpreis/-satz) weiter aufspalten - in eine Preisabweichung und eine Verbrauchs- bzw. Effizienzabweichung. Diese Aufspaltung ist wichtig, um die Verantwortung im Unternehmen klar zuzuordnen, denn Preis und Verbrauch werden meist von unterschiedlichen Stellen beeinflusst." },
      { type: "list", items: [
        "Materialpreisabweichung = (Ist-Einkaufspreis − Standardpreis) × Ist-/Beschaffungsmenge; i. d. R. dem Einkauf zurechenbar (z. B. höhere oder niedrigere Einstandspreise als geplant, etwa durch Marktpreisschwankungen oder Verhandlungserfolge).",
        "Materialverbrauchsabweichung (Mengenabweichung) = (Ist-Verbrauchsmenge − Standard-/Soll-Menge) × Standardpreis; i. d. R. der Fertigung zurechenbar (z. B. Mehrverbrauch durch Verschnitt, Ausschuss oder Qualitätsprobleme)."
      ]},
      { type: "list", items: [
        "Lohnpreisabweichung (Ratenabweichung) = (Ist-Lohnsatz − Standardlohnsatz) × Ist-Zeit; i. d. R. der Personaleinsatzplanung zurechenbar (z. B. ein anderer Mix an eingesetztem Personal bzw. Qualifikationsstufen als geplant).",
        "Effizienzabweichung (Zeitabweichung) = (Ist-Zeit − Standard-/Vorgabezeit) × Standardlohnsatz; i. d. R. der Fertigung bzw. Produktionsleitung zurechenbar (z. B. Mehrstunden gegenüber der kalkulierten Vorgabezeit)."
      ]},
      { type: "p", text: "In beiden Fällen gilt als Kontrollrechnung: Gesamtabweichung = Preisabweichung + Verbrauchs-/Effizienzabweichung. Die Systematik ist bei Material und Fertigungslöhnen strukturell identisch: eine Abweichung, die aus einem abweichenden Preis bzw. Satz entsteht, wird von einer Abweichung getrennt, die aus einer abweichenden Menge bzw. Zeit entsteht." },
      { type: "p", text: "Diese Zerlegung erlaubt eine differenzierte Analyse: Eine insgesamt unauffällige, kleine Gesamtabweichung kann in Wirklichkeit aus einer vorteilhaften Preisabweichung und einer stark unvorteilhaften Verbrauchsabweichung (oder umgekehrt) bestehen, die sich gegenseitig teilweise ausgleichen. Erst die Aufspaltung macht solche gegenläufigen Effekte sichtbar und ermöglicht dem Management, gezielt an der richtigen Stelle - Einkauf, Personaleinsatz oder Fertigung - gegenzusteuern." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Möbelhersteller produziert 500 Sitzgarnituren. Je Sitzgarnitur sind standardmäßig 4 m² Leder zum Standardpreis von 25 €/m² vorgesehen. Tatsächlich wurden 2.100 m² Leder zum Ist-Einkaufspreis von 24 €/m² verbraucht. Berechnen Sie die Materialpreisabweichung, die Materialverbrauchsabweichung und die Gesamtabweichung. Ordnen Sie jede Abweichung als vorteilhaft/unvorteilhaft ein und nennen Sie die jeweils verantwortliche Stelle.",
        solution: [
          { type: "list", items: [
            "Standardmenge = 500 Sitzgarnituren × 4 m² = 2.000 m²; Standardkosten = 2.000 m² × 25 €/m² = 50.000 €",
            "Ist-Kosten = 2.100 m² × 24 €/m² = 50.400 €",
            "Materialpreisabweichung = (24 € − 25 €) × 2.100 m² = −2.100 € (vorteilhaft, günstiger eingekauft) - Verantwortung: Einkauf",
            "Materialverbrauchsabweichung = (2.100 m² − 2.000 m²) × 25 €/m² = 2.500 € (unvorteilhaft, Mehrverbrauch) - Verantwortung: Fertigung",
            "Gesamtabweichung = Ist-Kosten − Standardkosten = 50.400 € − 50.000 € = 400 € (Kontrolle: −2.100 € + 2.500 € = 400 €)"
          ]},
          { type: "p", text: "Obwohl die Gesamtabweichung mit 400 € klein wirkt, verbergen sich dahinter eine deutlich günstigere Beschaffung und ein deutlich höherer Materialverbrauch, die sich fast gegenseitig ausgleichen." }
        ]
      },
      {
        id: "ex2",
        prompt: "Für dieselben 500 Sitzgarnituren sind je Einheit standardmäßig 3 Fertigungsstunden zum Standardlohnsatz von 20 €/Stunde vorgesehen. Tatsächlich wurden 1.600 Fertigungsstunden geleistet, die Fertigungslöhne beliefen sich auf 33.600 €. Berechnen Sie die Lohnpreisabweichung, die Effizienzabweichung und die Gesamtabweichung. Ordnen Sie die Abweichungen ein.",
        solution: [
          { type: "list", items: [
            "Standardzeit = 500 × 3 Std. = 1.500 Std.; Standardkosten = 1.500 Std. × 20 €/Std. = 30.000 €",
            "Ist-Lohnsatz = 33.600 € / 1.600 Std. = 21 €/Std.",
            "Lohnpreisabweichung = (21 € − 20 €) × 1.600 Std. = 1.600 € (unvorteilhaft, höherer Lohnsatz gezahlt) - Verantwortung: Personaleinsatzplanung",
            "Effizienzabweichung = (1.600 Std. − 1.500 Std.) × 20 €/Std. = 2.000 € (unvorteilhaft, mehr Zeit benötigt) - Verantwortung: Fertigung/Produktionsleitung",
            "Gesamtabweichung = 33.600 € − 30.000 € = 3.600 € (Kontrolle: 1.600 € + 2.000 € = 3.600 €)"
          ]}
        ]
      },
      {
        id: "ex3",
        prompt: "Eine Schreinerei fertigt 300 Schreibtische. Je Schreibtisch sind standardmäßig 5 kg Stahl zum Standardpreis von 8 €/kg vorgesehen. Tatsächlich wurden 1.400 kg Stahl zum Ist-Einkaufspreis von 9 €/kg verbraucht. Berechnen Sie die Materialpreisabweichung, die Materialverbrauchsabweichung und die Gesamtabweichung und ordnen Sie die Abweichungen ein.",
        solution: [
          { type: "list", items: [
            "Standardmenge = 300 × 5 kg = 1.500 kg; Standardkosten = 1.500 kg × 8 €/kg = 12.000 €",
            "Ist-Kosten = 1.400 kg × 9 €/kg = 12.600 €",
            "Materialpreisabweichung = (9 € − 8 €) × 1.400 kg = 1.400 € (unvorteilhaft) - Verantwortung: Einkauf",
            "Materialverbrauchsabweichung = (1.400 kg − 1.500 kg) × 8 €/kg = −800 € (vorteilhaft, weniger verbraucht) - Verantwortung: Fertigung",
            "Gesamtabweichung = 12.600 € − 12.000 € = 600 € (Kontrolle: 1.400 € − 800 € = 600 €)"
          ]}
        ]
      },
      {
        id: "ex4",
        prompt: "Für die Fertigung von 400 Regalen sind je Einheit standardmäßig 2 Fertigungsstunden zum Standardlohnsatz von 18 €/Stunde vorgesehen. Tatsächlich wurden 750 Fertigungsstunden geleistet, die Fertigungslöhne betrugen 14.250 €. Berechnen Sie die Lohnpreisabweichung, die Effizienzabweichung und die Gesamtabweichung und ordnen Sie die Abweichungen ein.",
        solution: [
          { type: "list", items: [
            "Standardzeit = 400 × 2 Std. = 800 Std.; Standardkosten = 800 Std. × 18 €/Std. = 14.400 €",
            "Ist-Lohnsatz = 14.250 € / 750 Std. = 19 €/Std.",
            "Lohnpreisabweichung = (19 € − 18 €) × 750 Std. = 750 € (unvorteilhaft) - Verantwortung: Personaleinsatzplanung",
            "Effizienzabweichung = (750 Std. − 800 Std.) × 18 €/Std. = −900 € (vorteilhaft, weniger Zeit benötigt) - Verantwortung: Fertigung/Produktionsleitung",
            "Gesamtabweichung = 14.250 € − 14.400 € = −150 € (Kontrolle: 750 € − 900 € = −150 €)"
          ]}
        ]
      },
      {
        id: "ex5",
        prompt: "Erläutern Sie an einem selbst gewählten Beispiel, warum eine insgesamt kleine Gesamtabweichung trotzdem große, sich gegenseitig ausgleichende Preis- und Verbrauchsabweichungen verbergen kann, und warum die Aufspaltung für das Management wichtig ist.",
        solution: [
          { type: "p", text: "Beispiel: Ein Unternehmen kauft Rohstoffe deutlich günstiger ein als geplant (z. B. weil ein neuer, billigerer Lieferant gefunden wurde), verbraucht aber wegen minderer Qualität dieses Rohstoffs deutlich mehr Material in der Fertigung (mehr Ausschuss). Die vorteilhafte Preisabweichung und die unvorteilhafte Verbrauchsabweichung heben sich in der Summe fast auf, sodass die Gesamtabweichung nahe null liegt und auf den ersten Blick alles unauffällig wirkt." },
          { type: "p", text: "Für das Management ist die Aufspaltung dennoch entscheidend: Ohne sie bliebe verborgen, dass der Einkauf zwar Kosten gespart, die Fertigung aber durch die schlechtere Materialqualität zusätzliche Kosten verursacht hat. Erst die getrennte Betrachtung von Preis- und Verbrauchsabweichung zeigt, dass hier Handlungsbedarf besteht (z. B. Prüfung der Lieferantenqualität), obwohl die Gesamtkosten kaum vom Plan abweichen." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie berechnet sich die Materialpreisabweichung?", options: ["(Ist-Menge − Standardmenge) × Standardpreis", "(Ist-Einkaufspreis − Standardpreis) × Ist-/Beschaffungsmenge", "(Ist-Zeit − Standardzeit) × Standardlohnsatz", "Ist-Kosten − verrechnete Plankosten"], correctIndex: 1, explanation: "Die Materialpreisabweichung misst den Effekt eines abweichenden Einkaufspreises auf die tatsächlich beschaffte Menge." },
      { id: "q2", question: "Wem ist die Materialpreisabweichung typischerweise zurechenbar?", options: ["Der Fertigung", "Dem Einkauf/der Beschaffungsabteilung", "Der Geschäftsführung", "Dem Vertrieb"], correctIndex: 1, explanation: "Höhere oder niedrigere Einstandspreise werden meist durch die Beschaffung verursacht." },
      { id: "q3", question: "Wie berechnet sich die Materialverbrauchsabweichung?", options: ["(Ist-Verbrauchsmenge − Standardmenge) × Standardpreis", "(Ist-Preis − Standardpreis) × Ist-Menge", "(Ist-Lohnsatz − Standardlohnsatz) × Ist-Zeit", "Ist-Kosten / Standardkosten"], correctIndex: 0, explanation: "Die Verbrauchsabweichung bewertet die Mengenabweichung zum Standardpreis." },
      { id: "q4", question: "Wem ist die Materialverbrauchsabweichung typischerweise zurechenbar?", options: ["Dem Einkauf", "Der Fertigung", "Der Buchhaltung", "Dem Controlling ausschließlich formal"], correctIndex: 1, explanation: "Mehrverbrauch entsteht meist durch Verschnitt, Ausschuss oder Qualitätsprobleme in der Fertigung." },
      { id: "q5", question: "Wie berechnet sich die Lohnpreisabweichung (Ratenabweichung)?", options: ["(Ist-Lohnsatz − Standardlohnsatz) × Ist-Zeit", "(Ist-Zeit − Standardzeit) × Standardlohnsatz", "(Ist-Menge − Standardmenge) × Standardpreis", "Ist-Fertigungslöhne / Ist-Zeit"], correctIndex: 0, explanation: "Die Lohnpreisabweichung bewertet den abweichenden Lohnsatz mit der tatsächlich geleisteten Zeit." },
      { id: "q6", question: "Wem ist die Effizienzabweichung (Zeitabweichung) typischerweise zurechenbar?", options: ["Der Personaleinsatzplanung", "Der Fertigung/Produktionsleitung", "Dem Einkauf", "Der Marketingabteilung"], correctIndex: 1, explanation: "Mehr oder weniger benötigte Zeit gegenüber der Vorgabezeit liegt meist im Verantwortungsbereich der Fertigung." },
      { id: "q7", question: "Wie lautet die Kontrollrechnung, mit der die Aufspaltung überprüft werden kann?", options: ["Gesamtabweichung = Preisabweichung − Verbrauchs-/Effizienzabweichung", "Gesamtabweichung = Preisabweichung + Verbrauchs-/Effizienzabweichung", "Gesamtabweichung = Standardkosten − Plankosten", "Gesamtabweichung = Ist-Menge × Ist-Preis"], correctIndex: 1, explanation: "Preis- und Verbrauchs-/Effizienzabweichung addieren sich zur Gesamtabweichung." },
      { id: "q8", question: "Ein Unternehmen kauft Material günstiger ein als geplant, verbraucht aber wegen schlechterer Qualität deutlich mehr davon. Was passiert typischerweise mit den beiden Teilabweichungen?", options: ["Beide sind vorteilhaft", "Beide sind unvorteilhaft und addieren sich zu einer großen Gesamtabweichung", "Sie sind gegenläufig (eine vorteilhaft, eine unvorteilhaft) und gleichen sich teilweise aus", "Sie sind immer identisch groß"], correctIndex: 2, explanation: "Eine vorteilhafte Preisabweichung kann eine unvorteilhafte Verbrauchsabweichung teilweise oder ganz kompensieren." },
      { id: "q9", question: "Warum ist die Aufspaltung der Gesamtabweichung in Preis- und Verbrauchs-/Effizienzabweichung wichtig?", options: ["Weil sie gesetzlich für die Steuerbilanz vorgeschrieben ist", "Weil sie erlaubt, Verantwortlichkeiten klar zuzuordnen, statt sich mit der Gesamtabweichung allein zu begnügen", "Weil sonst keine Ist-Kosten ermittelt werden können", "Weil dadurch die Fixkosten wegfallen"], correctIndex: 1, explanation: "Erst die getrennte Betrachtung zeigt, wo tatsächlich Handlungsbedarf besteht (Einkauf, Personal, Fertigung)." },
      { id: "q10", question: "Für 200 Einheiten sind je Einheit 3 kg Material zu 10 €/kg geplant. Tatsächlich wurden 650 kg zu 9 €/kg verbraucht. Wie hoch ist die Materialverbrauchsabweichung?", options: ["500 € unvorteilhaft", "500 € vorteilhaft", "650 € unvorteilhaft", "50 € vorteilhaft"], correctIndex: 0, explanation: "Standardmenge = 200 × 3 kg = 600 kg. Verbrauchsabweichung = (650 kg − 600 kg) × 10 €/kg = 500 € (unvorteilhaft)." }
    ]
  }
];
