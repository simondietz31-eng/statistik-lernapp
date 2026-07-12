const VERTRIEB_CHAPTER9_TOPICS = [
  {
    id: "vertrieb-controlling-kennzahlen",
    chapter: 9,
    order: 1,
    title: "Vertriebscontrolling: Zielkategorien und Kennzahlenmatrix",
    icon: "📋",
    summary: "Wie Vertriebscontrolling an der Schnittstelle zwischen Verkauf und Controlling die Vertriebsziele plant, steuert und kontrolliert, und wie sich Kennzahlen in eine 3×2-Matrix aus Zielkategorien und Effektivität/Effizienz einordnen lassen.",
    explanation: [
      { type: "p", text: "Das Vertriebscontrolling sitzt an der Schnittstelle zwischen Verkauf und Controlling. Seine Kernaufgabe ist die Planung, Steuerung, Koordination und Kontrolle aller Vertriebsprozesse — insbesondere die Kontrolle, ob die gesetzten Vertriebsziele erreicht werden." },
      { type: "p", text: "Die Vertriebsziele lassen sich in drei Zielkategorien einteilen, die sich am zeitlichen Ablauf des Verkaufsprozesses orientieren:" },
      { type: "list", items: [
        "Potenzialbezogene Ziele: dem eigentlichen Verkauf vorgelagert, z. B. Image, Bekanntheitsgrad.",
        "Markterfolgsbezogene Ziele: betreffen den eigentlichen Verkaufsvorgang, z. B. Menge, Preis, Umsatz.",
        "Ergebnisbezogene Ziele: erst nachträglich überprüfbar, z. B. Gewinn."
      ]},
      { type: "p", text: "Merksatz: Potenzial baut Grundlagen auf, Markterfolg zeigt, was verkauft wurde, Ergebnis zeigt, was übrig bleibt." },
      { type: "p", text: "Quer zu diesen drei Zielkategorien steht die Unterscheidung zwischen Effektivität und Effizienz: Effektivität bedeutet, 'die richtigen Dinge zu tun' (wird das übergeordnete Ziel erreicht?), Effizienz bedeutet, 'die Dinge richtig zu tun' (wie gut werden die eingesetzten Ressourcen genutzt?). Kombiniert man die drei Zielkategorien mit diesen zwei Dimensionen, ergibt sich eine 3×2-Matrix mit sechs Kategorien. Eine klassische Klausuraufgabe besteht darin, gegebene Kennzahlen korrekt in die passende Matrixzelle einzusortieren." },
      { type: "p", text: "Worked Example anhand einer Aufgabe zu einem Telefonanbieter — Einordnung typischer Kennzahlen in die Matrix:" },
      { type: "list", items: [
        "Markenimage/Bekanntheitsgrad → Potenzialbezogen / Effektivität",
        "Floprate (Anteil nicht wahrgenommener Produktfeatures) → Potenzialbezogen / Effizienz",
        "Anzahl Website-Besucher / Anzahl Anrufe im Call Center → Potenzialbezogen / Effizienz",
        "Anzahl bzw. Umsatz von Neukunden → Markterfolgsbezogen / Effektivität",
        "Kosten-Nutzen-Vergleich einer Messeteilnahme → Markterfolgsbezogen / Effizienz",
        "Trefferquote (Verhältnis von Aufträgen zu Angeboten) → Markterfolgsbezogen / Effizienz",
        "Kundenprofitabilität / Umsatzverteilung auf Kunden → Ergebnisbezogen / Effizienz",
        "Marktanteil, der trotz aller Bemühungen gering ausfällt → Ergebnisbezogen / Effektivität"
      ]},
      { type: "p", text: "Damit Vertriebscontrolling erfolgreich ist, müssen mehrere Anforderungen erfüllt sein:" },
      { type: "list", items: [
        "Konsistenz mit der Vertriebsstrategie",
        "Mix aus 'harten' Zielgrößen (z. B. Umsatz) und 'weichen' Zielgrößen (z. B. Kundenzufriedenheit)",
        "Situative Anpassung an die jeweiligen Marktgegebenheiten",
        "Planung nach Marktsegmenten",
        "Anreize für eine realitätsnahe Planung",
        "Sorgfältige Konsolidierung von Top-Down- und Bottom-Up-Plänen",
        "Zeitliches Herunterbrechen der Ziele, um frühzeitiges Eingreifen zu ermöglichen",
        "Sorgfältige Abweichungsanalyse — man darf sich nicht nur von nackten Zahlen leiten lassen",
        "Ein angemessener Planungsaufwand"
      ]}
    ],
    exercises: [
      {
        id: "vertrieb-controlling-kennzahlen-e1",
        prompt: "Nennen und erläutern Sie die drei Zielkategorien des Vertriebscontrollings.",
        solution: [{ type: "p", text: "Die drei Zielkategorien orientieren sich am zeitlichen Ablauf des Verkaufsprozesses. Potenzialbezogene Ziele sind dem eigentlichen Verkauf vorgelagert und betreffen z. B. Image oder Bekanntheitsgrad. Markterfolgsbezogene Ziele betreffen den eigentlichen Verkaufsvorgang, also z. B. Menge, Preis oder Umsatz. Ergebnisbezogene Ziele sind erst nachträglich überprüfbar, z. B. der erzielte Gewinn. Der Merksatz dazu lautet: Potenzial baut Grundlagen auf, Markterfolg zeigt, was verkauft wurde, und Ergebnis zeigt, was übrig bleibt." }]
      },
      {
        id: "vertrieb-controlling-kennzahlen-e2",
        prompt: "Ordnen Sie die Kennzahlen 'Trefferquote (Aufträge/Angebote)' und 'Marktanteil, der trotz aller Bemühungen gering ausfällt' jeweils in die richtige Zelle der 3×2-Matrix aus Zielkategorie und Effektivität/Effizienz ein und begründen Sie Ihre Einordnung.",
        solution: [{ type: "p", text: "Die Trefferquote (Verhältnis von Aufträgen zu Angeboten) ist markterfolgsbezogen/Effizienz, da sie misst, wie gut der eigentliche Verkaufsvorgang unter Ressourceneinsatz gelingt, also 'die Dinge richtig zu tun'. Der Marktanteil, der trotz aller Bemühungen gering ausfällt, ist ergebnisbezogen/Effektivität, da er erst nachträglich überprüfbar ist und die Frage betrifft, ob insgesamt das richtige (übergeordnete) Ziel erreicht wurde — unabhängig vom Ressourceneinsatz." }]
      },
      {
        id: "vertrieb-controlling-kennzahlen-e3",
        prompt: "Ein Unternehmen misst die Anzahl der Anrufe im Call Center und die Kundenprofitabilität. Ordnen Sie beide Kennzahlen in die Matrix ein.",
        solution: [{ type: "p", text: "Die Anzahl der Anrufe im Call Center ist potenzialbezogen/Effizienz, da sie ein dem eigentlichen Verkauf vorgelagertes Maß dafür ist, wie effizient Kontaktkanäle genutzt werden, ähnlich der Anzahl der Website-Besucher. Die Kundenprofitabilität ist ergebnisbezogen/Effizienz, da sie erst nachträglich überprüfbar ist und misst, wie gut die eingesetzten Ressourcen im Verhältnis zu den erzielten Kundenerträgen genutzt wurden." }]
      },
      {
        id: "vertrieb-controlling-kennzahlen-e4",
        prompt: "Erklären Sie den Unterschied zwischen Effektivität und Effizienz im Kontext des Vertriebscontrollings.",
        solution: [{ type: "p", text: "Effektivität bedeutet 'die richtigen Dinge zu tun' — es geht darum, ob ein übergeordnetes Ziel überhaupt erreicht wird, unabhängig vom Ressourceneinsatz. Effizienz bedeutet 'die Dinge richtig zu tun' — es geht um die Frage, wie gut die eingesetzten Ressourcen zur Zielerreichung genutzt werden, also um das Verhältnis von Aufwand zu Ergebnis. Beide Dimensionen lassen sich mit den drei Zielkategorien (potenzial-, markterfolgs- und ergebnisbezogen) zu einer 3×2-Matrix kombinieren." }]
      },
      {
        id: "vertrieb-controlling-kennzahlen-e5",
        prompt: "Nennen Sie mindestens vier Anforderungen an ein erfolgreiches Vertriebscontrolling.",
        solution: [{ type: "p", text: "Zu den Anforderungen zählen unter anderem: Konsistenz mit der Vertriebsstrategie, ein Mix aus harten (z. B. Umsatz) und weichen (z. B. Kundenzufriedenheit) Zielgrößen, situative Anpassung an die Marktgegebenheiten, Planung nach Marktsegmenten, Anreize für realitätsnahe Planung, sorgfältige Konsolidierung von Top-Down- und Bottom-Up-Plänen, zeitliches Herunterbrechen der Ziele für frühzeitiges Eingreifen, sorgfältige Abweichungsanalyse sowie ein angemessener Planungsaufwand." }]
      }
    ],
    quiz: [
      { id: "q1", question: "An welcher Schnittstelle ist das Vertriebscontrolling angesiedelt?", options: ["Zwischen Verkauf und Controlling", "Zwischen Personal und IT", "Zwischen Produktion und Einkauf", "Zwischen Marketing und Finanzen"], correctIndex: 0, explanation: "Vertriebscontrolling sitzt an der Schnittstelle zwischen Verkauf und Controlling." },
      { id: "q2", question: "Was ist die Kernaufgabe des Vertriebscontrollings?", options: ["Ausschließlich die Buchhaltung", "Planung, Steuerung, Koordination und Kontrolle aller Vertriebsprozesse", "Nur die Personalentwicklung im Vertrieb", "Die Preisgestaltung ohne Bezug zu Zielen"], correctIndex: 1, explanation: "Die Kernaufgabe umfasst Planung, Steuerung, Koordination und insbesondere die Kontrolle der Vertriebsziele." },
      { id: "q3", question: "Zu welcher Zielkategorie gehört die Kennzahl 'Bekanntheitsgrad'?", options: ["Keiner der drei Kategorien", "Markterfolgsbezogen", "Ergebnisbezogen", "Potenzialbezogen"], correctIndex: 3, explanation: "Bekanntheitsgrad ist dem eigentlichen Verkauf vorgelagert und zählt daher zu den potenzialbezogenen Zielen." },
      { id: "q4", question: "Welche Zielkategorie ist erst nachträglich überprüfbar, z. B. anhand des Gewinns?", options: ["Markterfolgsbezogene Ziele", "Prozessbezogene Ziele", "Ergebnisbezogene Ziele", "Potenzialbezogene Ziele"], correctIndex: 2, explanation: "Ergebnisbezogene Ziele, wie der Gewinn, lassen sich erst im Nachhinein überprüfen." },
      { id: "q5", question: "Was bedeutet 'Effizienz' im Sinne der Kennzahlenmatrix?", options: ["Nur langfristige Ziele verfolgen", "Ein Ziel um jeden Preis erreichen", "Die richtigen Dinge tun", "Die Dinge richtig tun, d. h. Ressourcen gut nutzen"], correctIndex: 3, explanation: "Effizienz bedeutet, die Dinge richtig zu tun, also die eingesetzten Ressourcen gut zu nutzen." },
      { id: "q6", question: "Wie viele Kategorien ergeben sich aus der Kombination der drei Zielkategorien mit Effektivität und Effizienz?", options: ["Sechs", "Acht", "Drei", "Vier"], correctIndex: 0, explanation: "3 Zielkategorien × 2 Dimensionen (Effektivität/Effizienz) ergeben eine 3×2-Matrix mit sechs Kategorien." },
      { id: "q7", question: "In welche Matrixzelle gehört die Kennzahl 'Anzahl bzw. Umsatz von Neukunden'?", options: ["Potenzialbezogen/Effizienz", "Potenzialbezogen/Effektivität", "Markterfolgsbezogen/Effektivität", "Ergebnisbezogen/Effizienz"], correctIndex: 2, explanation: "Neukundenzahl bzw. -umsatz betreffen den eigentlichen Verkaufsvorgang und die Frage, ob das richtige Ziel erreicht wurde: markterfolgsbezogen/Effektivität." },
      { id: "q8", question: "In welche Matrixzelle gehört die 'Floprate' (nicht wahrgenommene Produktfeatures)?", options: ["Ergebnisbezogen/Effektivität", "Potenzialbezogen/Effizienz", "Ergebnisbezogen/Effizienz", "Markterfolgsbezogen/Effektivität"], correctIndex: 1, explanation: "Die Floprate misst, wie effizient die vorgelagerten Potenziale (z. B. Produktkommunikation) genutzt werden: potenzialbezogen/Effizienz." },
      { id: "q9", question: "Welche der folgenden Aussagen ist eine Anforderung an erfolgreiches Vertriebscontrolling?", options: ["Konsistenz mit der Vertriebsstrategie", "Vollständiger Verzicht auf Bottom-Up-Planung", "Maximale Formalisierung ohne situative Anpassung", "Ausschließliche Verwendung harter Zielgrößen"], correctIndex: 0, explanation: "Konsistenz mit der Vertriebsstrategie ist eine zentrale Anforderung an erfolgreiches Vertriebscontrolling." },
      { id: "q10", question: "Warum ist eine sorgfältige Abweichungsanalyse wichtig?", options: ["Weil Abweichungen grundsätzlich ignoriert werden sollten", "Weil man sich nicht nur von nackten Zahlen leiten lassen sollte", "Weil sie den Planungsaufwand überflüssig macht", "Weil sie nur bei ergebnisbezogenen Zielen relevant ist"], correctIndex: 1, explanation: "Eine sorgfältige Abweichungsanalyse ist nötig, damit man sich nicht nur von den nackten Zahlen leiten lässt, sondern Ursachen versteht." }
    ]
  }
];
