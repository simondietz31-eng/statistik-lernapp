const CHAPTER1_TOPICS = [
  {
    id: "grundbegriffe",
    chapter: 1,
    order: 1,
    title: "Grundbegriffe der Statistik",
    icon: "📚",
    summary: "Grundgesamtheit, Merkmalsträger, Merkmal und Merkmalswert - die Bausteine jeder statistischen Untersuchung.",
    explanation: [
      { type: "p", text: "Statistik ist die Entwicklung und Anwendung von Methoden zur Erhebung, Aufbereitung, Analyse und Interpretation von Daten. Das Fach gliedert sich in drei Teilgebiete: die deskriptive (beschreibende) Statistik, die Wahrscheinlichkeitstheorie und die induktive (schließende) Statistik." },
      { type: "p", text: "Bevor man mit Daten arbeitet, braucht man ein paar grundlegende Begriffe, die in praktisch jeder Aufgabe vorkommen:" },
      { type: "list", items: [
        "Grundgesamtheit: die Gesamtheit aller Merkmalsträger mit übereinstimmenden Identifikationsmerkmalen (auch: Kollektiv, statistische Gesamtheit). Beispiel: alle Studierenden einer Vorlesung.",
        "Merkmalsträger: das einzelne Objekt bzw. die einzelne Einheit der Grundgesamtheit (auch: statistische Einheit). Beispiel: ein einzelner Studierender.",
        "Merkmal: die interessierende Eigenschaft der Merkmalsträger (auch: Variable). Beispiel: das Alter.",
        "Merkmalswert: die konkret bei einem Merkmalsträger beobachtete Ausprägung des Merkmals. Beispiel: 23 Jahre."
      ]},
      { type: "p", text: "Merkmale lassen sich nach mehreren, unabhängigen Kriterien klassifizieren:" },
      { type: "list", items: [
        "Qualitativ vs. quantitativ: qualitative Merkmale beschreiben Kategorien (z. B. Geschlecht, Studienfach), quantitative Merkmale sind Zahlenwerte (z. B. Gewicht, Einkommen).",
        "Häufbar vs. nicht-häufbar: bei häufbaren Merkmalen kann ein Merkmalsträger gleichzeitig mehrere Werte annehmen (z. B. gesprochene Sprachen), bei nicht-häufbaren nur genau einen (z. B. Geburtsort). Häufbare Merkmale sind immer qualitativ.",
        "Diskret vs. stetig: diskrete Merkmale können nur abzählbar viele Werte annehmen (z. B. Anzahl Kinder), stetige Merkmale überabzählbar viele Werte innerhalb eines Intervalls (z. B. Körpergröße). Diese Unterscheidung betrifft nur quantitative Merkmale."
      ]}
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Klassifizieren Sie die folgenden Merkmale jeweils nach qualitativ/quantitativ, häufbar/nicht-häufbar und (falls quantitativ) diskret/stetig: a) Gewicht, b) Anzahl der Kinder, c) erlernter Beruf, d) gegenwärtig ausgeübter Hauptberuf.",
        solution: [
          { type: "list", items: [
            "Gewicht: quantitativ, nicht-häufbar, stetig",
            "Anzahl der Kinder: quantitativ, nicht-häufbar, diskret",
            "Erlernter Beruf: qualitativ, häufbar (man kann mehrere Berufe erlernt haben)",
            "Gegenwärtig ausgeübter Hauptberuf: qualitativ, nicht-häufbar (per Definition nur ein Hauptberuf)"
          ]}
        ]
      },
      {
        id: "ex2",
        prompt: "Eine Versicherung untersucht alle Kfz-Policen ihrer Kunden aus dem Jahr 2025. Was ist in dieser Untersuchung die Grundgesamtheit, was ein Merkmalsträger? Nennen Sie zwei mögliche Merkmale mit je einem Merkmalswert.",
        solution: [
          { type: "p", text: "Die Grundgesamtheit ist die Menge aller Kfz-Policen der Versicherung aus dem Jahr 2025. Ein Merkmalsträger ist die einzelne Kfz-Police (bzw. der zugehörige Vertrag)." },
          { type: "p", text: "Mögliche Merkmale: 'Schadenshöhe' (Merkmalswert z. B. 850 Euro, quantitativ-stetig) und 'Fahrzeugtyp' (Merkmalswert z. B. Kombi, qualitativ)." }
        ]
      },
      {
        id: "ex3",
        prompt: "Warum ist das Merkmal 'gesprochene Fremdsprachen' häufbar, das Merkmal 'Familienstand' aber nicht?",
        solution: [
          { type: "p", text: "Eine Person kann gleichzeitig mehrere Fremdsprachen sprechen - das Merkmal kann also mehrere Werte gleichzeitig annehmen und ist damit häufbar. Der Familienstand hingegen ist zu jedem Zeitpunkt eindeutig (z. B. ledig, verheiratet, geschieden) - ein Merkmalsträger hat immer nur genau einen Wert, das Merkmal ist nicht-häufbar." }
        ]
      },
      {
        id: "ex4",
        prompt: "Nennen Sie die drei Teilgebiete der Statistik und ordnen Sie kurz zu, was jedes Teilgebiet macht.",
        solution: [
          { type: "p", text: "Die Statistik gliedert sich in die deskriptive (beschreibende) Statistik, die Wahrscheinlichkeitstheorie und die induktive (schließende) Statistik. Die deskriptive Statistik beschreibt und fasst vorliegende Daten zusammen, die Wahrscheinlichkeitstheorie liefert die mathematischen Grundlagen für Zufallsvorgänge, und die induktive Statistik schließt von einer Stichprobe auf die Grundgesamtheit." }
        ]
      },
      {
        id: "ex5",
        prompt: "Eine Fahrschule erfasst von allen aktuell angemeldeten Fahrschülern das Merkmal 'Anzahl bereits absolvierter Fahrstunden'. Bestimmen Sie Grundgesamtheit, Merkmalsträger, Merkmal und einen möglichen Merkmalswert. Klassifizieren Sie das Merkmal zusätzlich nach qualitativ/quantitativ, häufbar/nicht-häufbar und diskret/stetig.",
        solution: [
          { type: "p", text: "Grundgesamtheit: alle aktuell angemeldeten Fahrschüler der Fahrschule. Merkmalsträger: der einzelne Fahrschüler. Merkmal: Anzahl bereits absolvierter Fahrstunden. Merkmalswert: z. B. 12." },
          { type: "p", text: "Klassifikation: quantitativ (es ist eine Zahl), nicht-häufbar (ein Fahrschüler hat zu einem Zeitpunkt genau eine Anzahl absolvierter Stunden), diskret (nur abzählbar viele Werte wie 0, 1, 2, ... möglich)." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was ist die Grundgesamtheit?", options: ["Ein einzelner Merkmalsträger", "Der Wert, den ein Merkmal annehmen kann", "Die grafische Darstellung von Daten", "Die Gesamtheit aller Merkmalsträger mit übereinstimmenden Identifikationsmerkmalen"], correctIndex: 3, explanation: "Die Grundgesamtheit (auch Kollektiv) umfasst alle Merkmalsträger, die zur Untersuchung gehören." },
      { id: "q2", question: "Welches der folgenden Merkmale ist häufbar?", options: ["Familienstand", "Gesprochene Fremdsprachen", "Sozialversicherungsnummer", "Geburtsort"], correctIndex: 1, explanation: "Man kann mehrere Fremdsprachen gleichzeitig sprechen - das Merkmal kann also mehrere Werte gleichzeitig annehmen." },
      { id: "q3", question: "Häufbare Merkmale sind immer...", options: ["diskret", "quantitativ", "stetig", "qualitativ"], correctIndex: 3, explanation: "Häufbare Merkmale sind per Definition immer qualitativ - eine Zahl kann man nicht 'mehrfach gleichzeitig' als Ausprägung haben." },
      { id: "q4", question: "Die Anzahl der Kinder einer Familie ist ein Beispiel für ein Merkmal, das...", options: ["qualitativ und stetig ist", "quantitativ und stetig ist", "quantitativ und diskret ist", "qualitativ und häufbar ist"], correctIndex: 2, explanation: "Die Anzahl ist eine Zahl (quantitativ) und kann nur abzählbare Werte (0, 1, 2, ...) annehmen (diskret)." },
      { id: "q5", question: "Was unterscheidet einen Merkmalsträger von einem Merkmalswert?", options: ["Der Merkmalsträger ist Teil der Wahrscheinlichkeitstheorie", "Der Merkmalswert ist immer eine Zahl, der Merkmalsträger nie", "Der Merkmalsträger ist das Objekt, der Merkmalswert die beobachtete Ausprägung bei diesem Objekt", "Es gibt keinen Unterschied"], correctIndex: 2, explanation: "Der Merkmalsträger ist z. B. eine Person, der Merkmalswert die konkrete Ausprägung eines Merkmals bei dieser Person (z. B. 'blond' bei Haarfarbe)." },
      { id: "q6", question: "Körpergröße ist ein Beispiel für ein...", options: ["qualitatives, häufbares Merkmal", "stetiges, quantitatives Merkmal", "nominal-diskretes Merkmal", "diskretes, quantitatives Merkmal"], correctIndex: 1, explanation: "Körpergröße ist eine Zahl (quantitativ) und kann theoretisch jeden Wert in einem Intervall annehmen (stetig)." },
      { id: "q7", question: "Welche Aussage über die Teilgebiete der Statistik ist richtig?", options: ["Die Statistik besteht nur aus deskriptiver und induktiver Statistik", "Die Wahrscheinlichkeitstheorie ist kein Teilgebiet der Statistik", "Die Statistik gliedert sich in deskriptive Statistik, Wahrscheinlichkeitstheorie und induktive Statistik", "Die induktive Statistik beschreibt nur vorliegende Daten, ohne zu schließen"], correctIndex: 2, explanation: "Das Fach Statistik gliedert sich laut Definition in drei Teilgebiete: deskriptive Statistik, Wahrscheinlichkeitstheorie und induktive Statistik." },
      { id: "q8", question: "Welche der folgenden Aussagen zur Klassifikation von Merkmalen ist korrekt?", options: ["Qualitativ/quantitativ, häufbar/nicht-häufbar und diskret/stetig sind drei unabhängige Klassifikationskriterien", "Häufbare Merkmale können sowohl qualitativ als auch quantitativ sein", "Ein Merkmal kann nicht gleichzeitig quantitativ und diskret sein", "Diskret/stetig gilt auch für qualitative Merkmale"], correctIndex: 0, explanation: "Es handelt sich um drei unabhängige Kriterien; die Unterscheidung diskret/stetig betrifft dabei nur quantitative Merkmale, und häufbare Merkmale sind immer qualitativ." },
      { id: "q9", question: "Ein Merkmalswert von '23 Jahre' beim Merkmal 'Alter' ist...", options: ["die konkret beobachtete Ausprägung des Merkmals bei einem Merkmalsträger", "die Grundgesamtheit", "der Merkmalsträger", "ein qualitatives Merkmal"], correctIndex: 0, explanation: "Der Merkmalswert ist die konkret bei einem Merkmalsträger beobachtete Ausprägung des Merkmals, hier 23 Jahre beim Merkmal Alter." },
      { id: "q10", question: "Welche Aussage trifft auf das Merkmal 'Studienfach' zu?", options: ["Es ist eine Grundgesamtheit", "Es ist qualitativ, da es Kategorien beschreibt", "Es ist quantitativ und stetig", "Es ist häufbar per Definition"], correctIndex: 1, explanation: "Studienfach wird explizit als Beispiel für ein qualitatives Merkmal genannt, da es Kategorien und keine Zahlenwerte beschreibt." }
    ]
  },
  {
    id: "messskalen",
    chapter: 1,
    order: 2,
    title: "Statistische Messskalen",
    icon: "📏",
    summary: "Nominal-, Ordinal-, Intervall- und Verhältnisskala: welches Rechnen mit welchen Daten sinnvoll ist.",
    explanation: [
      { type: "p", text: "Die Messskala eines Merkmals legt fest, welche Rechenoperationen und Vergleiche mit seinen Werten sinnvoll sind. Man unterscheidet vier Skalenniveaus, die aufeinander aufbauen - je höher das Niveau, desto mehr Information steckt in den Werten und desto mehr darf man mit ihnen rechnen." },
      { type: "list", items: [
        "Nominalskala: Werte sind reine Namen/Kategorien ohne Rangfolge. Nur Gleichheit/Ungleichheit ist sinnvoll (=, ≠). Beispiele: Geschlecht, Automarke, Postleitzahl.",
        "Ordinalskala: Werte lassen sich zusätzlich in eine Rangfolge bringen (<, >), Abstände zwischen den Werten sind aber nicht interpretierbar. Beispiele: Schulnote, Zufriedenheit (sehr zufrieden/zufrieden/unzufrieden).",
        "Intervallskala: zusätzlich sind Abstände zwischen Werten sinnvoll interpretierbar, es gibt aber keinen natürlichen Nullpunkt. Beispiel: Temperatur in °C (0°C bedeutet nicht 'keine Temperatur'), Kalenderjahr.",
        "Verhältnisskala: zusätzlich existiert ein natürlicher, absoluter Nullpunkt, sodass auch Verhältnisse zwischen Werten sinnvoll sind (doppelt so groß, halb so viel). Beispiele: Gewicht, Einkommen, Alter, Körpergröße."
      ]},
      { type: "p", text: "Intervall- und Verhältnisskala werden zusammen auch Kardinalskala oder metrische Skala genannt. Für die Berechnung des arithmetischen Mittels benötigt man mindestens Intervallskalenniveau; der Variationskoeffizient (ein Verhältnis von Standardabweichung zu Mittelwert) benötigt sogar Verhältnisskalenniveau, damit die Division überhaupt sinnvoll interpretierbar ist." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Bestimmen Sie das Skalenniveau der folgenden Merkmale: a) Familienstand, b) Schulnote, c) Temperatur in Grad Celsius, d) Jahresumsatz eines Unternehmens in Euro, e) Kontonummer.",
        solution: [
          { type: "list", items: [
            "Familienstand: Nominalskala (reine Kategorien, keine Rangfolge)",
            "Schulnote: Ordinalskala (Rangfolge vorhanden, Abstände zwischen 1 und 2 bzw. 2 und 3 sind aber nicht zwingend gleich groß in der Wirkung)",
            "Temperatur in °C: Intervallskala (Abstände sinnvoll, aber kein natürlicher Nullpunkt - 0°C ist willkürlich gewählt)",
            "Jahresumsatz in Euro: Verhältnisskala (natürlicher Nullpunkt: 0 Euro Umsatz, Verhältnisse wie 'doppelt so viel Umsatz' sind sinnvoll)",
            "Kontonummer: Nominalskala (dient nur der Identifikation, keine Rangfolge oder Rechenoperation sinnvoll)"
          ]}
        ]
      },
      {
        id: "ex2",
        prompt: "Warum ist es nicht sinnvoll, den 'Mittelwert' von Postleitzahlen zu berechnen, obwohl es sich um Zahlen handelt?",
        solution: [
          { type: "p", text: "Postleitzahlen sind nominalskaliert - die Zahlen dienen nur zur Identifikation/Unterscheidung von Regionen, nicht als Maß einer Größe. Abstände oder Mittelwerte zwischen Postleitzahlen haben keine sinnvolle inhaltliche Bedeutung, obwohl rein rechnerisch ein Mittelwert gebildet werden könnte." }
        ]
      },
      {
        id: "ex3",
        prompt: "Ein Café befragt Gäste nach ihrer Zufriedenheit auf einer Skala 'sehr zufrieden / zufrieden / unzufrieden'. Ein Kunde argumentiert, der Abstand zwischen 'sehr zufrieden' und 'zufrieden' sei genauso groß wie zwischen 'zufrieden' und 'unzufrieden', man könne also einfach den Mittelwert berechnen. Nehmen Sie dazu Stellung.",
        solution: [
          { type: "p", text: "Das Argument ist nicht haltbar: Zufriedenheit ist ein ordinalskaliertes Merkmal. Es gibt zwar eine Rangfolge (sehr zufrieden > zufrieden > unzufrieden), die Abstände zwischen den Kategorien sind jedoch nicht sinnvoll interpretierbar bzw. nicht notwendigerweise gleich groß. Für die Berechnung eines arithmetischen Mittelwerts wird jedoch mindestens Intervallskalenniveau benötigt, sodass ein Mittelwert hier inhaltlich nicht gerechtfertigt ist." }
        ]
      },
      {
        id: "ex4",
        prompt: "Ordnen Sie die vier Skalenniveaus (Nominal-, Ordinal-, Intervall-, Verhältnisskala) nach aufsteigendem Informationsgehalt und nennen Sie für jedes Niveau, welche Vergleiche bzw. Rechenoperationen jeweils neu hinzukommen.",
        solution: [
          { type: "list", items: [
            "Nominalskala: nur Gleichheit/Ungleichheit (=, ≠) sinnvoll.",
            "Ordinalskala: zusätzlich Rangfolge/Vergleich (<, >) sinnvoll.",
            "Intervallskala: zusätzlich sind Abstände zwischen Werten sinnvoll interpretierbar.",
            "Verhältnisskala: zusätzlich ein natürlicher Nullpunkt, wodurch auch Verhältnisse zwischen Werten sinnvoll werden."
          ]}
        ]
      },
      {
        id: "ex5",
        prompt: "Kalenderjahre (z. B. 2020, 2024) werden oft als Beispiel für eine Intervallskala genannt. Warum ist das Jahr 0 kein 'echter' Nullpunkt und was folgt daraus für Aussagen wie 'Das Jahr 2000 ist doppelt so groß wie das Jahr 1000'?",
        solution: [
          { type: "p", text: "Das Kalenderjahr besitzt keinen natürlichen, absoluten Nullpunkt - der Beginn der Zeitrechnung ist willkürlich festgelegt und bedeutet nicht 'keine Zeit'. Deshalb handelt es sich um Intervallskala, nicht um Verhältnisskala. Aussagen wie 'das Jahr 2000 ist doppelt so groß wie das Jahr 1000' sind daher nicht sinnvoll interpretierbar, da Verhältnisse nur bei einem echten Nullpunkt (Verhältnisskala) eine inhaltliche Bedeutung haben." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welches Skalenniveau erlaubt erstmals eine sinnvolle Rangfolge (< bzw. >) der Werte?", options: ["Ordinalskala", "Intervallskala", "Nominalskala", "Verhältnisskala"], correctIndex: 0, explanation: "Ab der Ordinalskala lassen sich Werte in eine Reihenfolge bringen." },
      { id: "q2", question: "Was unterscheidet die Intervallskala von der Verhältnisskala?", options: ["Die Verhältnisskala hat einen natürlichen Nullpunkt, die Intervallskala nicht", "Die Intervallskala hat keine Rangfolge", "Es gibt keinen Unterschied", "Die Intervallskala erlaubt keine Abstandsmessung"], correctIndex: 0, explanation: "Nur die Verhältnisskala besitzt einen absoluten Nullpunkt, wodurch auch Verhältnisse (z. B. 'doppelt so viel') sinnvoll interpretierbar werden." },
      { id: "q3", question: "Temperatur in Grad Celsius ist ein Beispiel für...", options: ["Nominalskala", "Ordinalskala", "Intervallskala", "Verhältnisskala"], correctIndex: 2, explanation: "0°C ist kein 'echter' Nullpunkt (es gibt ja noch tiefere Temperaturen), daher Intervallskala und keine Verhältnisskala." },
      { id: "q4", question: "Für welche Kennzahl braucht man mindestens Verhältnisskalenniveau?", options: ["Variationskoeffizient", "Median", "Rangordnung", "Modus"], correctIndex: 0, explanation: "Der Variationskoeffizient ist ein Quotient (Standardabweichung/Mittelwert) - eine Division ist nur bei einem echten Nullpunkt sinnvoll interpretierbar." },
      { id: "q5", question: "Automarke (z. B. VW, BMW, Toyota) ist ein Merkmal auf...", options: ["Ordinalskalenniveau", "Intervallskalenniveau", "Verhältnisskalenniveau", "Nominalskalenniveau"], correctIndex: 3, explanation: "Automarken sind reine Kategorien ohne natürliche Rangfolge - Nominalskala." },
      { id: "q6", question: "Intervall- und Verhältnisskala werden zusammenfassend auch bezeichnet als...", options: ["Ordinalskala", "Nominalskala", "Kardinalskala (metrische Skala)", "Qualitative Skala"], correctIndex: 2, explanation: "Beide Niveaus erlauben Abstandsmessungen mit reellen Zahlen und werden daher als Kardinal- bzw. metrische Skala zusammengefasst." },
      { id: "q7", question: "Für die Berechnung des arithmetischen Mittels benötigt man mindestens...", options: ["Ordinalskalenniveau", "keine bestimmte Skala, es geht immer", "Intervallskalenniveau", "Nominalskalenniveau"], correctIndex: 2, explanation: "Laut Text benötigt man für das arithmetische Mittel mindestens Intervallskalenniveau, da Abstände zwischen Werten sinnvoll interpretierbar sein müssen." },
      { id: "q8", question: "Welche Aussage über die Schulnote ist korrekt?", options: ["Sie ist verhältnisskaliert, da eine 2 doppelt so gut ist wie eine 4", "Sie ist ordinalskaliert, da eine Rangfolge, aber keine sinnvolle Abstandsinterpretation vorliegt", "Sie ist nominalskaliert, da keine Rangfolge existiert", "Sie ist intervallskaliert, da ein natürlicher Nullpunkt existiert"], correctIndex: 1, explanation: "Die Schulnote ist im Text explizit als Beispiel für Ordinalskala genannt: Rangfolge vorhanden, Abstände nicht zwingend gleich groß in der Wirkung." },
      { id: "q9", question: "Welche der folgenden Aussagen ist falsch?", options: ["Gewicht ist ein Beispiel für Verhältnisskala", "Bei der Nominalskala sind nur Gleichheit/Ungleichheit sinnvoll", "Jedes höhere Skalenniveau enthält mehr Information als das darunterliegende", "Kontonummern sind verhältnisskaliert, da man mit ihnen rechnen kann"], correctIndex: 3, explanation: "Kontonummern bzw. ähnliche Identifikationsnummern (wie Postleitzahlen) sind nominalskaliert - sie dienen nur der Identifikation, nicht als Maßzahl." },
      { id: "q10", question: "Welches Merkmal ist laut Text ein Beispiel für Verhältnisskala?", options: ["Geschlecht", "Einkommen", "Kalenderjahr", "Zufriedenheit (sehr zufrieden/zufrieden/unzufrieden)"], correctIndex: 1, explanation: "Einkommen wird explizit als Beispiel für Verhältnisskala genannt, da ein natürlicher Nullpunkt (0 Euro) existiert." }
    ]
  },
  {
    id: "ablauf-untersuchung",
    chapter: 1,
    order: 3,
    title: "Ablauf einer statistischen Untersuchung",
    icon: "🔄",
    summary: "Von der Planung über die Datenerhebung bis zur Analyse - die vier Phasen einer Untersuchung.",
    explanation: [
      { type: "p", text: "Eine statistische Untersuchung läuft typischerweise in vier Phasen ab: Planung, Datenerhebung, Datenaufbereitung und -darstellung sowie Datenanalyse und -interpretation." },
      { type: "list", items: [
        "Planung: Festlegen des Untersuchungsziels sowie der Methoden zur Erhebung, Aufbereitung und Analyse der Daten.",
        "Datenerhebung: die eigentliche Sammlung der Daten.",
        "Datenaufbereitung und -darstellung: Aufbau von Häufigkeitsverteilungen, Tabellen und Grafiken, um sich einen Überblick zu verschaffen.",
        "Datenanalyse und -interpretation: Berechnung und Interpretation statistischer Kennzahlen - deskriptiv (z. B. Mittelwerte, Streuungsmaße, Korrelation) oder induktiv (Schätz- und Testverfahren)."
      ]},
      { type: "p", text: "Bei der Datenerhebung unterscheidet man nach der Herkunft der Daten:" },
      { type: "list", items: [
        "Primärstatistik: Daten werden für den konkreten Untersuchungszweck neu erhoben. Vorteil: passgenau auf das Ziel zugeschnitten. Nachteil: zeit- und kostenintensiv.",
        "Sekundärstatistik: bereits vorhandene Daten (z. B. aus amtlichen Statistiken) werden weiterverwendet. Vorteil: zeit- und kosteneffizient. Nachteil: unter Umständen nur eingeschränkt für den eigenen Zweck geeignet."
      ]},
      { type: "p", text: "Und nach dem Erhebungsumfang:" },
      { type: "list", items: [
        "Vollerhebung: sämtliche Merkmalsträger der Grundgesamtheit werden erfasst (z. B. eine Volkszählung). Hohe Genauigkeit, aber hoher Zeit- und Kostenaufwand.",
        "Teilerhebung (Stichprobe): nur ein Teil der Merkmalsträger wird erfasst. Geringerer Aufwand, dafür geringere Genauigkeit - hier setzt später die induktive Statistik an, um von der Stichprobe auf die Grundgesamtheit zu schließen."
      ]},
      { type: "p", text: "Als Erhebungsarten kommen insbesondere die Beobachtung (direktes Beobachten von Verhalten/Reaktionen) und die Befragung (Personen werden direkt befragt) infrage." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Das Statistische Bundesamt führt alle paar Jahre eine Volkszählung durch, bei der alle Einwohner Deutschlands erfasst werden. Handelt es sich um eine Voll- oder Teilerhebung? Begründen Sie.",
        solution: [
          { type: "p", text: "Es handelt sich um eine Vollerhebung, da alle Merkmalsträger der Grundgesamtheit (alle Einwohner Deutschlands) erfasst werden und keine Stichprobe gezogen wird." }
        ]
      },
      {
        id: "ex2",
        prompt: "Ein Marktforschungsinstitut nutzt bereits erhobene Konsumdaten eines Statistikamtes, um eine neue Fragestellung zu beantworten, ohne selbst neue Daten zu erheben. Handelt es sich um Primär- oder Sekundärstatistik? Nennen Sie einen Vor- und einen Nachteil dieses Vorgehens.",
        solution: [
          { type: "p", text: "Es handelt sich um Sekundärstatistik, da bereits vorhandene Daten weiterverwendet werden." },
          { type: "p", text: "Vorteil: schnell und kostengünstig, da keine neue Erhebung nötig ist. Nachteil: die Daten wurden ursprünglich für einen anderen Zweck erhoben und passen eventuell nicht optimal zur neuen Fragestellung." }
        ]
      },
      {
        id: "ex3",
        prompt: "Ein Unternehmen befragt 200 von 50.000 Kunden zu ihrer Zufriedenheit. Ordnen Sie diese Untersuchung sowohl nach Erhebungsumfang als auch nach Erhebungsart ein.",
        solution: [
          { type: "p", text: "Erhebungsumfang: Teilerhebung (Stichprobe), da nur 200 von 50.000 Kunden befragt werden." },
          { type: "p", text: "Erhebungsart: Befragung, da die Kunden direkt zu ihrer Meinung befragt werden (kein reines Beobachten von Verhalten)." }
        ]
      },
      {
        id: "ex4",
        prompt: "Nennen Sie die vier Phasen einer statistischen Untersuchung in der richtigen Reihenfolge und beschreiben Sie jeweils in einem Satz, was in der Phase passiert.",
        solution: [
          { type: "list", items: [
            "Planung: Festlegen des Untersuchungsziels sowie der Methoden zur Erhebung, Aufbereitung und Analyse der Daten.",
            "Datenerhebung: die eigentliche Sammlung der Daten.",
            "Datenaufbereitung und -darstellung: Aufbau von Häufigkeitsverteilungen, Tabellen und Grafiken zur Verschaffung eines Überblicks.",
            "Datenanalyse und -interpretation: Berechnung und Interpretation statistischer Kennzahlen, deskriptiv oder induktiv."
          ]}
        ]
      },
      {
        id: "ex5",
        prompt: "Ein Verkehrsforscher zählt an einer Kreuzung, wie viele Fahrzeuge bei Rot über die Ampel fahren, ohne die Fahrer anzusprechen. Um welche Erhebungsart handelt es sich? Nennen Sie außerdem ein Beispiel für die jeweils andere in dieser Vorlesung genannte Erhebungsart.",
        solution: [
          { type: "p", text: "Es handelt sich um eine Beobachtung, da direktes Verhalten (Fahren bei Rot) erfasst wird, ohne die Personen aktiv zu befragen. Die andere im Text genannte Erhebungsart ist die Befragung, bei der Personen direkt befragt werden - wie z. B. im Beispiel der Kundenzufriedenheitsbefragung." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "In welcher Reihenfolge laufen die vier Phasen einer statistischen Untersuchung ab?", options: ["Datenaufbereitung, Datenerhebung, Planung, Datenanalyse", "Datenanalyse, Planung, Datenerhebung, Datenaufbereitung", "Datenerhebung, Planung, Datenanalyse, Datenaufbereitung", "Planung, Datenerhebung, Datenaufbereitung/-darstellung, Datenanalyse/-interpretation"], correctIndex: 3, explanation: "Erst wird geplant, dann erhoben, dann aufbereitet/dargestellt und schließlich analysiert/interpretiert." },
      { id: "q2", question: "Was ist der Hauptvorteil einer Sekundärstatistik gegenüber einer Primärstatistik?", options: ["Sie erfordert immer eine Vollerhebung", "Zeit- und kosteneffizienter, da Daten bereits vorliegen", "Höhere Genauigkeit", "Passgenauer auf die Fragestellung zugeschnitten"], correctIndex: 1, explanation: "Da die Daten schon vorhanden sind, entfällt der Aufwand einer neuen Erhebung." },
      { id: "q3", question: "Eine Stichprobe ist ein Beispiel für...", options: ["eine Beobachtung per Definition", "eine Vollerhebung", "eine Sekundärstatistik per Definition", "eine Teilerhebung"], correctIndex: 3, explanation: "Bei einer Stichprobe wird nur ein Teil der Grundgesamtheit erfasst - das ist die Definition einer Teilerhebung." },
      { id: "q4", question: "Welches Werkzeug gehört zur deskriptiven Datenanalyse?", options: ["Arithmetisches Mittel", "Signifikanzniveau", "Hypothesentest", "Konfidenzintervall"], correctIndex: 0, explanation: "Das arithmetische Mittel ist eine deskriptive Kennzahl. Konfidenzintervalle, Hypothesentests und Signifikanzniveau gehören zur induktiven Statistik." },
      { id: "q5", question: "Warum ist die induktive Statistik besonders bei Teilerhebungen relevant?", options: ["Weil Teilerhebungen immer repräsentativ sind", "Weil bei Vollerhebungen keine Zahlen anfallen", "Weil man von der Stichprobe auf die unbekannte Grundgesamtheit schließen muss", "Weil dort keine Deskriptive Statistik nötig ist"], correctIndex: 2, explanation: "Bei einer Teilerhebung kennt man nur die Stichprobe, nicht die gesamte Grundgesamtheit - die induktive Statistik liefert den wahrscheinlichkeitstheoretisch begründeten Rückschluss." },
      { id: "q6", question: "Was ist der Hauptnachteil einer Vollerhebung gegenüber einer Teilerhebung?", options: ["Hoher Zeit- und Kostenaufwand", "Sie ist grundsätzlich nicht durchführbar", "Sie liefert keine deskriptiven Kennzahlen", "Geringere Genauigkeit"], correctIndex: 0, explanation: "Eine Vollerhebung erfasst alle Merkmalsträger der Grundgesamtheit und bietet hohe Genauigkeit, ist dafür aber mit hohem Zeit- und Kostenaufwand verbunden." },
      { id: "q7", question: "Welche Aussage zur Primärstatistik ist korrekt?", options: ["Sie ist immer zeit- und kosteneffizienter als Sekundärstatistik", "Die Daten werden neu für den konkreten Untersuchungszweck erhoben", "Sie ist per Definition immer eine Teilerhebung", "Sie nutzt bereits vorhandene Daten"], correctIndex: 1, explanation: "Bei der Primärstatistik werden Daten passgenau für den konkreten Untersuchungszweck neu erhoben, was allerdings zeit- und kostenintensiv ist." },
      { id: "q8", question: "Eine Volkszählung, bei der alle Einwohner eines Landes erfasst werden, ist ein Beispiel für...", options: ["eine Vollerhebung", "eine Teilerhebung", "eine Stichprobe", "eine Sekundärstatistik"], correctIndex: 0, explanation: "Da sämtliche Merkmalsträger der Grundgesamtheit (alle Einwohner) erfasst werden, handelt es sich um eine Vollerhebung." },
      { id: "q9", question: "Welche zwei Erhebungsarten werden im Text als Beispiele genannt?", options: ["Primärstatistik und Sekundärstatistik", "Planung und Datenanalyse", "Beobachtung und Befragung", "Vollerhebung und Teilerhebung"], correctIndex: 2, explanation: "Als Erhebungsarten werden die Beobachtung (direktes Beobachten von Verhalten/Reaktionen) und die Befragung (direktes Befragen von Personen) genannt." },
      { id: "q10", question: "In welcher Phase einer statistischen Untersuchung werden Häufigkeitsverteilungen, Tabellen und Grafiken erstellt?", options: ["Datenanalyse und -interpretation", "Datenaufbereitung und -darstellung", "Datenerhebung", "Planung"], correctIndex: 1, explanation: "Die Phase der Datenaufbereitung und -darstellung dient dem Aufbau von Häufigkeitsverteilungen, Tabellen und Grafiken, um sich einen Überblick zu verschaffen." }
    ]
  }
];
