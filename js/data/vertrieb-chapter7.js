const VERTRIEB_CHAPTER7_TOPICS = [
  {
    id: "vertrieb-verkaufsformen-fragetechniken",
    chapter: 7,
    order: 1,
    title: "Verkaufsformen, Verkaufsgespräch und Fragetechniken",
    icon: "❓",
    summary: "Die drei Verkaufsformen, die Besonderheiten des persönlichen Verkaufs, die drei Phasen eines Verkaufsgesprächs und die vier zentralen Fragetechniken der Bedarfsanalyse.",
    explanation: [
      { type: "p", text: "Verkauf lässt sich danach unterscheiden, wie viel unmittelbaren menschlichen Kontakt Verkäufer und Kunde zueinander haben. Man unterscheidet drei Verkaufsformen:" },
      { type: "list", items: [
        "Persönlicher Verkauf — Beispiel: Ladengeschäft; Merkmal: unmittelbare Anwesenheit der Verkaufsperson, direkter Sichtkontakt zum Kunden",
        "Semi-persönlicher Verkauf — Beispiel: Telefon; Merkmal: menschlicher Kontakt, aber kein Sichtkontakt",
        "Nicht-persönlicher Verkauf — Beispiel: Onlineshop; Merkmal: kein direkter menschlicher Kontakt"
      ]},
      { type: "p", text: "Der persönliche Verkauf weist laut Maurer (2006) drei Besonderheiten auf, die ihn von den anderen Verkaufsformen abheben:" },
      { type: "list", items: [
        "Unmittelbare Anwesenheit der Verkaufsperson (Sichtkontakt zum Kunden)",
        "Möglichkeit, unmittelbar auf Mimik und Gestik des Kunden zu reagieren",
        "Möglichkeit, die eigene nonverbale Kommunikation gezielt zu gestalten"
      ]},
      { type: "p", text: "Nach Jäger (2007) lässt sich ein Verkaufsgespräch in drei aufeinander aufbauende Phasen gliedern:" },
      { type: "list", items: [
        "Phase 1 — Bedarfsanalyse: Einsatz von Fragetechniken, um die Bedürfnisse des Kunden zu ermitteln",
        "Phase 2 — Argumentation: Character-Selling oder Benefit-Selling, um das Angebot passgenau zu präsentieren",
        "Phase 3 — Abschluss: Einsatz von Abschlusstechniken, um das Gespräch zu einer Kaufentscheidung zu führen"
      ]},
      { type: "p", text: "In Phase 1 (Bedarfsanalyse) stehen dem Verkäufer vier Fragetechniken zur Verfügung, die jeweils ein unterschiedliches Ziel verfolgen:" },
      { type: "list", items: [
        "Offene Frage: alle W-Fragen (wer, was, wie, wo, warum ...) außer wann, weshalb und wieso. Diese drei Fragewörter sollen vermieden werden, weil sie den Kunden in eine Rechtfertigungsposition drängen. Ziel: den Kunden zum Reden bringen und Details erfahren. Auch Suggestivfragen sollten vermieden werden, da sie die Antwort vorwegnehmen und den Kunden manipulativ wirken lassen.",
        "Geschlossene Frage: begrenzter Antwortspielraum (Ja/Nein, konkrete Zahlen). Ziel: Bedürfnisse konkretisieren und den Kunden zu einer Entscheidung hinführen. Angestrebt wird dabei immer ein 'Ja' — ein 'Nein' erschwert den weiteren Gesprächsverlauf erheblich, da der Verkäufer dann gegen eine bereits geäußerte Ablehnung argumentieren muss.",
        "Begründet offene Frage: eine offene Frage, der eine Begründung vorangestellt wird. Diese Begründung liefert zugleich eine Rechtfertigung für alle nachfolgenden (auch geschlossenen) Fragen im Gespräch. Beispiel: 'Damit wir den passenden Anzug finden, müsste ich wissen, für welchen Anlass er gedacht ist?'",
        "Alternativfrage: dem Kunden werden vordefinierte Alternativen angeboten. Das vereinfacht komplexe Entscheidungen für den Kunden und erhöht die Erfolgswahrscheinlichkeit des Verkäufers, da beide Antwortoptionen zum Abschluss führen können."
      ]},
      { type: "p", text: "Merksatz zu den Fragewörtern: 'Wer, was, wie, wo, warum — ja. Aber wann, weshalb, wieso — nein!'" }
    ],
    exercises: [
      {
        id: "vertrieb-verkaufsformen-fragetechniken-e1",
        prompt: "Ordnen Sie die drei Verkaufsformen jeweils einem Beispiel zu und nennen Sie das entscheidende Unterscheidungsmerkmal.",
        solution: [{ type: "p", text: "Persönlicher Verkauf (z. B. Ladengeschäft) ist durch die unmittelbare Anwesenheit der Verkaufsperson und direkten Sichtkontakt zum Kunden gekennzeichnet. Semi-persönlicher Verkauf (z. B. Telefon) findet mit menschlichem Kontakt, aber ohne Sichtkontakt statt. Nicht-persönlicher Verkauf (z. B. Onlineshop) erfolgt ganz ohne direkten menschlichen Kontakt. Das entscheidende Unterscheidungsmerkmal ist also der Grad an unmittelbarer, persönlicher (visueller) Präsenz zwischen Verkäufer und Kunde." }]
      },
      {
        id: "vertrieb-verkaufsformen-fragetechniken-e2",
        prompt: "Nennen Sie die drei Besonderheiten des persönlichen Verkaufs nach Maurer (2006) und erklären Sie kurz, warum diese speziell für den persönlichen Verkauf gelten.",
        solution: [{ type: "p", text: "Die drei Besonderheiten sind: (1) die unmittelbare Anwesenheit der Verkaufsperson mit direktem Sichtkontakt zum Kunden, (2) die Möglichkeit, unmittelbar auf Mimik und Gestik des Kunden zu reagieren, und (3) die Möglichkeit, die eigene nonverbale Kommunikation bewusst zu gestalten. Diese Besonderheiten gelten nur im persönlichen Verkauf, weil dort — anders als am Telefon (kein Sichtkontakt) oder im Onlineshop (kein menschlicher Kontakt) — beide Gesprächspartner sich gegenseitig sehen und nonverbal aufeinander reagieren können." }]
      },
      {
        id: "vertrieb-verkaufsformen-fragetechniken-e3",
        prompt: "Formulieren Sie ein Beispiel für eine begründet offene Frage in einem Beratungsgespräch bei einem Küchenverkauf.",
        solution: [{ type: "p", text: "Beispiel: 'Damit ich Ihnen eine Küche vorschlagen kann, die wirklich zu Ihrem Alltag passt, müsste ich wissen: Wie oft und mit wie vielen Personen kochen Sie üblicherweise?' Die vorangestellte Begründung ('damit ich Ihnen eine Küche vorschlagen kann, die zu Ihrem Alltag passt') rechtfertigt die anschließende offene Frage und legitimiert zugleich weitere Nachfragen im weiteren Gesprächsverlauf." }]
      },
      {
        id: "vertrieb-verkaufsformen-fragetechniken-e4",
        prompt: "Erklären Sie den Unterschied zwischen offenen und geschlossenen Fragen hinsichtlich Ziel und Einsatzzeitpunkt im Verkaufsgespräch.",
        solution: [{ type: "p", text: "Offene Fragen (W-Fragen außer wann, weshalb, wieso) lassen dem Kunden einen großen Antwortspielraum. Ihr Ziel ist es, den Kunden zum Reden zu bringen und möglichst viele Details über seine Bedürfnisse zu erfahren — sie eignen sich daher besonders am Anfang der Bedarfsanalyse. Geschlossene Fragen dagegen begrenzen den Antwortspielraum auf Ja/Nein oder konkrete Zahlen. Ihr Ziel ist es, die zuvor gesammelten Bedürfnisse zu konkretisieren und den Kunden Schritt für Schritt zu einer Entscheidung hinzuführen — sie werden daher eher im späteren Gesprächsverlauf eingesetzt, wenn genug Informationen vorliegen. Da eine geschlossene Frage auch mit 'Nein' beantwortet werden kann, was den weiteren Gesprächsverlauf erschwert, sollten sie mit Bedacht gestellt werden." }]
      },
      {
        id: "vertrieb-verkaufsformen-fragetechniken-e5",
        prompt: "Warum sollten Verkäufer die Fragewörter 'wann', 'weshalb' und 'wieso' sowie Suggestivfragen vermeiden? Formulieren Sie je ein Gegenbeispiel mit einer besseren Formulierung.",
        solution: [{ type: "p", text: "'Wann', 'weshalb' und 'wieso' zwingen den Kunden häufig dazu, sich zu rechtfertigen, was als Vorwurf empfunden werden kann und die Gesprächsatmosphäre belastet. Statt 'Weshalb haben Sie sich noch nicht entschieden?' ist besser: 'Was hält Sie aktuell noch von einer Entscheidung ab?' Suggestivfragen legen dem Kunden die gewünschte Antwort bereits in den Mund und wirken manipulativ, z. B. 'Sie wollen doch sicher auch Qualität, oder?'. Besser ist eine neutral formulierte offene Frage wie: 'Welche Eigenschaften sind Ihnen bei diesem Produkt besonders wichtig?'" }]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche der folgenden Verkaufsformen ist durch unmittelbaren Sichtkontakt zwischen Verkäufer und Kunde gekennzeichnet?", options: ["Onlineshop-Verkauf", "Semi-persönlicher Verkauf", "Nicht-persönlicher Verkauf", "Persönlicher Verkauf"], correctIndex: 3, explanation: "Der persönliche Verkauf (z. B. Ladengeschäft) ist durch die unmittelbare Anwesenheit der Verkaufsperson und direkten Sichtkontakt gekennzeichnet." },
      { id: "q2", question: "Welche Verkaufsform wird typischerweise mit dem Telefon assoziiert?", options: ["Semi-persönlicher Verkauf", "Digitaler Verkauf", "Nicht-persönlicher Verkauf", "Persönlicher Verkauf"], correctIndex: 0, explanation: "Beim Telefonverkauf besteht menschlicher Kontakt, aber kein Sichtkontakt — daher semi-persönlicher Verkauf." },
      { id: "q3", question: "Welche drei Besonderheiten des persönlichen Verkaufs nennt Maurer (2006)?", options: ["Anwesenheit, Mimikreaktion, nonverbale Gestaltung", "Automatisierung, Standardisierung und hohe Effizienz", "Niedrige Kosten, hohe Reichweite, Skalierbarkeit", "Anonymität, Bequemlichkeit, 24/7-Verfügbarkeit"], correctIndex: 0, explanation: "Maurer (2006) nennt die unmittelbare Anwesenheit mit Sichtkontakt, die Reaktionsmöglichkeit auf Mimik und Gestik sowie die bewusste Gestaltung der eigenen nonverbalen Kommunikation." },
      { id: "q4", question: "Wie lauten die drei Phasen eines Verkaufsgesprächs nach Jäger (2007)?", options: ["Kontakt, Beratung, Nachfass", "Akquise, Verhandlung, Vertragsabschluss", "Bedarfsanalyse, Argumentation, Abschluss", "Begrüßung, Präsentation, Verabschiedung"], correctIndex: 2, explanation: "Jäger (2007) unterteilt das Verkaufsgespräch in Bedarfsanalyse (Fragetechniken), Argumentation (Character-/Benefit-Selling) und Abschluss (Abschlusstechniken)." },
      { id: "q5", question: "Welche Fragewörter sollten laut Merksatz im Verkaufsgespräch vermieden werden?", options: ["Was, wo, wann", "Wo, warum, wer", "Wer, was, wie", "Wann, weshalb, wieso"], correctIndex: 3, explanation: "'Wann', 'weshalb' und 'wieso' zwingen den Kunden häufig zur Rechtfertigung und sollten daher vermieden werden." },
      { id: "q6", question: "Was ist das Ziel einer geschlossenen Frage im Verkaufsgespräch?", options: ["Den Kunden möglichst lange reden zu lassen", "Ausschließlich Small Talk zu ermöglichen", "Dem Kunden die Kontrolle über das Gespräch zu geben", "Bedürfnisse zu konkretisieren und zur Entscheidung hinzuführen"], correctIndex: 3, explanation: "Geschlossene Fragen dienen dazu, Bedürfnisse zu konkretisieren und den Kunden zu einer Entscheidung (idealerweise einem 'Ja') hinzuführen." },
      { id: "q7", question: "Was zeichnet eine begründet offene Frage aus?", options: ["Sie besteht ausschließlich aus Ja/Nein-Antwortmöglichkeiten", "Sie darf nur am Ende des Gesprächs gestellt werden", "Ihr wird eine Begründung vorangestellt, die auch Folgefragen rechtfertigt", "Sie ist identisch mit einer Alternativfrage"], correctIndex: 2, explanation: "Bei der begründet offenen Frage liefert die vorangestellte Begründung eine Rechtfertigung für die Frage selbst und alle nachfolgenden Fragen." },
      { id: "q8", question: "Welchen Vorteil bietet eine Alternativfrage im Verkaufsgespräch?", options: ["Sie ersetzt die Bedarfsanalyse vollständig", "Sie vereinfacht komplexe Entscheidungen und erhöht die Erfolgswahrscheinlichkeit", "Sie vermeidet jegliche Entscheidung des Kunden", "Sie ist nur im nicht-persönlichen Verkauf einsetzbar"], correctIndex: 1, explanation: "Die Alternativfrage bietet vordefinierte Optionen an, was komplexe Entscheidungen vereinfacht und die Wahrscheinlichkeit eines Abschlusses erhöht." },
      { id: "q9", question: "Warum sollten Suggestivfragen im Verkaufsgespräch vermieden werden?", options: ["Weil sie ausschließlich in Phase 3 erlaubt sind", "Weil sie zu lang formuliert sind", "Weil sie die Antwort vorwegnehmen und manipulativ wirken", "Weil sie gesetzlich verboten sind"], correctIndex: 2, explanation: "Suggestivfragen legen dem Kunden bereits die gewünschte Antwort in den Mund, was manipulativ wirkt und Vertrauen kosten kann." },
      { id: "q10", question: "In welcher Phase des Verkaufsgesprächs nach Jäger (2007) werden Fragetechniken eingesetzt?", options: ["Phase 2 — Argumentation", "Phase 1 — Bedarfsanalyse", "In keiner der drei Phasen", "Phase 3 — Abschluss"], correctIndex: 1, explanation: "Fragetechniken sind das zentrale Werkzeug der Phase 1, der Bedarfsanalyse." }
    ]
  },
  {
    id: "vertrieb-argumentation-nonverbal",
    chapter: 7,
    order: 2,
    title: "Argumentation: Character- vs. Benefit-Selling und nonverbales Verhalten",
    icon: "🗣️",
    summary: "Wie sich Character-Selling und Benefit-Selling in der Argumentationsphase unterscheiden, und warum die Unterscheidung zwischen funktionalem und nichtfunktionalem nonverbalem Verhalten für den Verkäufer diagnostisch wertvoll ist.",
    explanation: [
      { type: "p", text: "In Phase 2 des Verkaufsgesprächs (Argumentation) unterscheidet man zwei grundlegende Argumentationsstile:" },
      { type: "list", items: [
        "Character Selling: fokussiert direkt auf Produkteigenschaften bzw. Features. Der Kunde muss den daraus resultierenden Nutzen selbst ableiten.",
        "Benefit Selling: übersetzt die Produkteigenschaft aktiv in den konkreten Kundennutzen — der Verkäufer nimmt dem Kunden die Ableitung des Nutzens ab."
      ]},
      { type: "p", text: "Beispiele zur Gegenüberstellung von Character Selling und Benefit Selling:" },
      { type: "list", items: [
        "Actioncam — Character Selling: 'Mit dieser Actioncam sind 4K-Aufnahmen möglich.' Benefit Selling: 'Mit den Action Cams bleiben atemberaubende Ski- und Snowboard-Stunts für die Ewigkeit erhalten.'",
        "Versicherung — Character Selling: 'Bis zu 50 Mio. € für alle Personen-, Sach- und Vermögensschäden.' Benefit Selling: 'Günstig gegen finanzielle Folgen abgesichert: Die Privat-Haftpflichtversicherung Classic.'",
        "Zahnbürste — Character Selling: 'Der runde Bürstenkopf ist von Zahnarztinstrumenten inspiriert.' Benefit Selling: 'Der Bürstenkopf oszilliert, rotiert und pulsiert, um Zahnbelag zu lösen und zu entfernen.'",
        "Akkuschrauber — Character Selling: 'Der DF331D ist kompakt, ergonomisch und wiegt nur 1,3 kg.' Benefit Selling: 'Dies sorgt dafür, dass der DF331D ideal für Arbeiten auf engem Raum oder über Kopf geeignet ist.'"
      ]},
      { type: "p", text: "Ein zweiter zentraler Baustein der Argumentationsphase ist das nonverbale Verhalten von Verkäufer und Kunde. Grundregel: Nonverbales Verhalten 'framed' immer und wirkt daher immer — es ist kaum vermeidbar und erfordert Übung, um aktiv gesteuert werden zu können." },
      { type: "p", text: "Zentral ist die Unterscheidung zwischen zwei Arten von nonverbalem Verhalten:" },
      { type: "list", items: [
        "Funktionales Verhalten: dient nur einem biologischen bzw. persönlichen Komfortzweck der Person selbst, z. B. verschränkte Arme aus rein motorischer, beiläufiger Haltung oder eine bequemere, aber unprofessionelle Sitzhaltung. Es sendet kein bewusstes Signal an den Gesprächspartner, kann aber unbeabsichtigt Desinteresse kommunizieren.",
        "Nicht-/Unfunktionales Verhalten: wird bewusst und strategisch eingesetzt, um dem Gesprächspartner ein bestimmtes Signal zu senden, z. B. bewusst verschränkte Arme als Abwehrsignal, bewusster Augenkontakt, um Vertrauen zu signalisieren, oder eine aufrechte Haltung, um Kompetenz zu signalisieren."
      ]},
      { type: "p", text: "Nur nichtfunktionales Verhalten hat diagnostischen Wert für den Verkäufer, wenn er den Kunden 'liest' — denn es ist bewusst gesendetes Signal und lässt Rückschlüsse auf die innere Haltung des Kunden zu. Die richtige Interpretation dieser Signale ist entscheidend für das weitere Gesprächsvorgehen." },
      { type: "p", text: "Weitere wichtige Aspekte zum nonverbalen Verhalten im Verkaufsgespräch:" },
      { type: "list", items: [
        "Der Fokus auf nonverbales Verhalten dient auch dazu, beim Gesprächspartner den Eindruck zu erwecken, dass 'alles gut' ist.",
        "Arten, wie sich Unsicherheit nonverbal auswirken kann: Aggressivität, Humor bzw. sich lustig machen.",
        "Frauen lächeln im Durchschnitt mehr — dies wirkt selbstbewusst.",
        "Es gibt per se keine 'schlechte' Körpersprache — die Wirkung hängt immer vom Kontext ab.",
        "Eine breite Beinstellung wirkt territorial und tendenziell unsympathisch.",
        "Körpersprache wird vom Gegenüber schneller registriert als das gesprochene Wort — sie kommt gewissermaßen 'vor' dem Gesagten an."
      ]}
    ],
    exercises: [
      {
        id: "vertrieb-argumentation-nonverbal-e1",
        prompt: "Erklären Sie den Unterschied zwischen Character Selling und Benefit Selling und formulieren Sie ein eigenes Beispiel (Produkt Ihrer Wahl) für beide Stile.",
        solution: [{ type: "p", text: "Character Selling beschreibt eine Produkteigenschaft oder ein Feature direkt, ohne den daraus resultierenden Nutzen zu benennen — der Kunde muss diesen Nutzen selbst ableiten. Benefit Selling übersetzt dieselbe Eigenschaft aktiv in den konkreten Kundennutzen. Beispiel Laptop: Character Selling: 'Der Laptop hat einen Akku mit 20 Stunden Laufzeit.' Benefit Selling: 'Mit diesem Laptop kommen Sie problemlos durch einen ganzen Arbeitstag ohne Steckdose — auch auf langen Reisen oder im Homeoffice.'" }]
      },
      {
        id: "vertrieb-argumentation-nonverbal-e2",
        prompt: "Formulieren Sie zum Beispiel 'Actioncam' zusätzlich zum gegebenen Benefit-Selling-Satz eine zweite Benefit-Selling-Formulierung, die eine andere Zielgruppe (z. B. Familien im Urlaub) anspricht.",
        solution: [{ type: "p", text: "Benefit-Selling-Beispiel für Familien: 'Mit der Actioncam halten Sie jeden Sprung ins Schwimmbad und jeden Lachanfall im Familienurlaub in gestochen scharfer Qualität fest — Erinnerungen, die Sie noch in Jahren genauso lebendig erleben wie im Moment selbst.' Der Fokus verschiebt sich vom Character-Merkmal '4K-Aufnahme' auf den emotionalen Nutzen für die Zielgruppe Familie: das Festhalten und Wiedererleben gemeinsamer Momente." }]
      },
      {
        id: "vertrieb-argumentation-nonverbal-e3",
        prompt: "Ein Kunde sitzt während des Beratungsgesprächs mit verschränkten Armen da, wirkt aber insgesamt entspannt und blickt dem Verkäufer freundlich in die Augen. Handelt es sich eher um funktionales oder nichtfunktionales Verhalten? Begründen Sie.",
        solution: [{ type: "p", text: "Da die verschränkten Arme hier nicht mit weiteren Abwehrsignalen (z. B. abgewandter Blick, angespannte Mimik) einhergehen, sondern der Kunde entspannt wirkt und aktiv Augenkontakt hält, handelt es sich vermutlich um funktionales Verhalten: eine beiläufige, komfortable Sitzhaltung ohne bewusste Signalabsicht. Der Verkäufer sollte dies daher nicht vorschnell als Ablehnung interpretieren, sondern das Gesamtbild (Mimik, Blickkontakt, Tonfall) für eine korrekte Einschätzung heranziehen." }]
      },
      {
        id: "vertrieb-argumentation-nonverbal-e4",
        prompt: "Warum hat laut Vorlesung nur nichtfunktionales, nicht aber funktionales nonverbales Verhalten diagnostischen Wert für den Verkäufer?",
        solution: [{ type: "p", text: "Funktionales Verhalten dient lediglich einem persönlichen Komfortzweck der Person selbst und sendet kein bewusstes Signal an den Gesprächspartner — es lässt daher keinen verlässlichen Rückschluss auf die innere Haltung des Kunden zu, auch wenn es unbeabsichtigt Desinteresse suggerieren kann. Nichtfunktionales Verhalten dagegen wird bewusst und strategisch eingesetzt, um dem Gegenüber ein bestimmtes Signal zu senden (z. B. Abwehr, Vertrauen, Kompetenz). Nur dieses bewusst gesendete Signal lässt sich sinnvoll interpretieren und liefert dem Verkäufer verwertbare Informationen für sein weiteres Vorgehen." }]
      },
      {
        id: "vertrieb-argumentation-nonverbal-e5",
        prompt: "Erläutern Sie die Aussage, dass Körpersprache 'vor dem Gesprochenen kommt' und welche praktische Konsequenz sich daraus für den Verkäufer ergibt.",
        solution: [{ type: "p", text: "Nonverbale Signale werden vom Gehirn des Gesprächspartners schneller verarbeitet und registriert als gesprochene Worte — der erste Eindruck entsteht also über Körpersprache, noch bevor die eigentliche inhaltliche Argumentation greift. Für den Verkäufer bedeutet das, dass er seine eigene Körpersprache (aufrechte Haltung, offener Blick, ruhige Gestik) von Beginn an bewusst gestalten muss, da diese bereits vor den ersten Worten Vertrauen oder Kompetenz signalisiert bzw. untergräbt. Gleichzeitig sollte er die nonverbalen Signale des Kunden von Anfang an aufmerksam beobachten, da sie oft früher Aufschluss über dessen Haltung geben als das Gesagte." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Was kennzeichnet Character Selling im Unterschied zu Benefit Selling?", options: ["Es übersetzt die Produkteigenschaft aktiv in Kundennutzen", "Es beschreibt ausschließlich den Preis eines Produkts", "Direkter Eigenschaftsfokus; Kunde leitet Nutzen selbst ab", "Es wird nur in der Abschlussphase überhaupt eingesetzt"], correctIndex: 2, explanation: "Character Selling nennt die Eigenschaft direkt, ohne den Nutzen zu übersetzen — das muss der Kunde selbst leisten." },
      { id: "q2", question: "Welche Aussage ist ein Beispiel für Benefit Selling zur Actioncam?", options: ["'Die Actioncam kostet 249 €.'", "'Mit dieser Actioncam sind 4K-Aufnahmen möglich.'", "'Die Actioncam wiegt 120 Gramm.'", "'Mit den Action Cams bleiben atemberaubende Ski- und Snowboard-Stunts für die Ewigkeit erhalten.'"], correctIndex: 3, explanation: "Dieser Satz übersetzt das Feature (4K-Aufnahme) in den emotionalen Kundennutzen (Erinnerungen festhalten) — klassisches Benefit Selling." },
      { id: "q3", question: "Welche Grundregel gilt laut Vorlesung für nonverbales Verhalten?", options: ["Es wirkt nur, wenn es bewusst eingesetzt wird", "Es spielt im Verkaufsgespräch nur eine untergeordnete Rolle", "Es wirkt immer, ist kaum vermeidbar, erfordert Übung", "Es lässt sich mit etwas Übung vollständig vermeiden"], correctIndex: 2, explanation: "Nonverbales Verhalten wirkt laut Grundregel immer, ist kaum vermeidbar und muss aktiv trainiert werden, um es gezielt steuern zu können." },
      { id: "q4", question: "Was ist funktionales nonverbales Verhalten?", options: ["Dient nur dem eigenen Komfort, sendet kein Signal", "Verhalten, das ausschließlich in der Abschlussphase auftritt", "Bewusst eingesetztes Verhalten, um ein Signal zu senden", "Verhalten, das immer Desinteresse ausdrücken soll"], correctIndex: 0, explanation: "Funktionales Verhalten dient dem eigenen Komfort und sendet kein bewusstes Signal, kann aber unbeabsichtigt Desinteresse kommunizieren." },
      { id: "q5", question: "Welche Art von nonverbalem Verhalten hat diagnostischen Wert für den Verkäufer?", options: ["Keine Art von nonverbalem Verhalten ist verwertbar", "Nur funktionales Verhalten allein", "Funktionales und nichtfunktionales gleichermaßen", "Nichtfunktionales, da bewusst als Signal eingesetzt"], correctIndex: 3, explanation: "Nur nichtfunktionales Verhalten wird bewusst als Signal eingesetzt und lässt daher sinnvolle Rückschlüsse auf die Haltung des Kunden zu." },
      { id: "q6", question: "Welches Beispiel beschreibt nichtfunktionales (bewusst eingesetztes) nonverbales Verhalten?", options: ["Der Verkäufer räuspert sich rein zufällig", "Bewusst gesuchter Augenkontakt, um Vertrauen zu signalisieren", "Der Kunde verschränkt beiläufig die Arme aus Bequemlichkeit", "Der Kunde rutscht unbewusst auf dem Stuhl hin und her"], correctIndex: 1, explanation: "Bewusst gesuchter Augenkontakt zur gezielten Signalisierung von Vertrauen ist ein klassisches Beispiel für nichtfunktionales Verhalten." },
      { id: "q7", question: "Was wird laut Vorlesung als Anzeichen für Unsicherheit im nonverbalen Verhalten genannt?", options: ["Ruhiges, langsames Sprechen", "Aufrechte, entspannte Haltung", "Aggressivität und Humor bzw. sich lustig machen", "Freundliches, offenes Lächeln"], correctIndex: 2, explanation: "Aggressivität sowie Humor/sich-lustig-machen werden als Arten genannt, mit denen sich Unsicherheit nonverbal auswirken kann." },
      { id: "q8", question: "Welche Aussage zur Körpersprache ist laut Vorlesung korrekt?", options: ["Eine breite Beinstellung wirkt territorial und tendenziell unsympathisch", "Es gibt eine allgemein 'schlechte' Körpersprache, die immer negativ wirkt", "Körpersprache wird immer langsamer verarbeitet als das gesprochene Wort", "Nonverbales Verhalten spielt nur bei Frauen eine Rolle"], correctIndex: 0, explanation: "Eine breite Beinstellung wird als territorial wirkend und tendenziell unsympathisch beschrieben." },
      { id: "q9", question: "Wie verhält sich Körpersprache im Vergleich zum gesprochenen Wort in Bezug auf die Wahrnehmungsgeschwindigkeit?", options: ["Beide werden exakt gleich schnell wahrgenommen", "Körpersprache wird schneller registriert als das gesprochene Wort", "Körpersprache wird langsamer wahrgenommen als das gesprochene Wort", "Körpersprache wird erst nach dem Gespräch bewusst"], correctIndex: 1, explanation: "Körpersprache kommt laut Vorlesung 'vor' dem Gesprochenen an, sie wird also schneller registriert." },
      { id: "q10", question: "Welches Ziel verfolgt der bewusste Einsatz von nonverbalem Verhalten im Verkaufsgespräch unter anderem?", options: ["Ausschließlich den Preis zu rechtfertigen", "Das Gespräch möglichst schnell zu beenden", "Den Kunden gezielt zu verunsichern", "Beim Gegenüber den Eindruck zu erwecken, dass 'alles gut' ist"], correctIndex: 3, explanation: "Der gezielte Fokus auf nonverbales Verhalten dient unter anderem dazu, dem Gesprächspartner zu vermitteln, dass alles in Ordnung ist." }
    ]
  },
  {
    id: "vertrieb-abschlusstechniken-gespraechsablauf",
    chapter: 7,
    order: 3,
    title: "Abschlusstechniken und idealtypischer Gesprächsablauf",
    icon: "🤝",
    summary: "Zwölf Abschlusstechniken der dritten Verkaufsgesprächsphase sowie der idealtypische 13-Schritte-Ablauf eines Verkaufsgesprächs inklusive vorgezogener Abschlussfrage.",
    explanation: [
      { type: "p", text: "In Phase 3 des Verkaufsgesprächs (Abschluss) stehen dem Verkäufer zahlreiche Abschlusstechniken zur Verfügung, um das Gespräch zu einer Kaufentscheidung zu führen. Unabhängig davon, welche Technik gewählt wird, gilt: Der Kundennutzen muss dabei stets maximal sein." },
      { type: "list", items: [
        "Verknappungstechnik: Hinweis auf eine begrenzte Verfügbarkeit. Beispiel: 'Nur noch 15 Stück.'",
        "Referenztechnik: positive Erfahrungen anderer werden angeführt. Beispiel: 'Andere sind auch zufrieden damit', 'Experten empfehlen das.'",
        "Konjunktivtechnik: der Kunde wird gedanklich zum Besitzer des Produkts gemacht. Beispiel: 'Mal angenommen, Sie würden das Produkt kaufen ...'",
        "Zeitdrucktechnik: die zeitlich begrenzte Gültigkeit eines Angebots wird betont. Beispiel: 'Das Angebot gilt nur noch bis ...'",
        "Alternativtechnik: es werden zwei positive Alternativen angeboten, wodurch eine grundsätzliche Ja/Nein-Entscheidung vermieden wird. Beispiel: 'Nehmen Sie lieber A oder B?'",
        "Zusammenfassungstechnik: die wichtigsten Argumente werden gebündelt, das stärkste Argument wird zum Schluss genannt. Beispiel: 'Lassen Sie mich zusammenfassen ...'",
        "Technik der Vorteile: die Vorteilhaftigkeit eines sofortigen Kaufs wird betont. Beispiel: 'Wenn Sie sich jetzt entscheiden, kaufen Sie noch zum alten Preis.'",
        "Technik der falschen Entscheidung: dem Kunden wird eine vermutlich nicht präferierte Alternative vorgeschlagen, um eine Entscheidung zu erzwingen. Beispiel: 'Sie wollen sicher das Komplettpaket mit PC, Drucker und Monitor.'",
        "Teilentscheidungstechnik: für Rand- oder Teilgebiete wird bereits eine Entscheidung herbeigeführt. Beispiel: 'Sie brauchen die Maschine schon zu Saisonbeginn?'",
        "Empfehlungstechnik: eine Empfehlung wird in objektiver Form geäußert. Beispiel: 'So wie die Situation bei Ihnen ist, empfiehlt es sich ...'",
        "Möglichst direkter Kontakt zum Produkt: der Kunde nimmt das Produkt selbst in die Hand.",
        "Ausstiegsmöglichkeiten aufzeigen: es wird auf eine mögliche Rückgabe hingewiesen."
      ]},
      { type: "p", text: "Der idealtypische Ablauf eines Verkaufsgesprächs lässt sich in 13 Schritten darstellen:" },
      { type: "list", items: [
        "1. Stille — nonverbale Signale werden beachtet",
        "2. Evtl. Smalltalk",
        "3. Thema formulieren (durch Kunde oder Verkäufer)",
        "4. Begründet offene Frage (Verkäufer)",
        "5. Kunde formuliert Bedürfnis/Rahmenbedingungen",
        "6. Verkäufer: aktives Zuhören, Notizen, Anerkennung der Bedürfnisse",
        "7. Verkäufer: Detailfragen (Alternativfragen, mit Bedacht auch geschlossene Fragen)",
        "8. Kunde gibt Details bekannt",
        "9. Vorgezogene Abschlussfrage (Verkäufer): 'Angenommen, ich könnte eine Lösung präsentieren, die alle Ihre Bedürfnisse abdeckt, würden Sie den Anzug dann sofort kaufen?'",
        "10. 'Ja, natürlich!' (Kunde)",
        "11. Lösung präsentieren (Verkäufer)",
        "12. Kunde trifft Kaufentscheidung",
        "13. Gratulation zur richtigen Entscheidung (Verkäufer)"
      ]},
      { type: "p", text: "Die vorgezogene Abschlussfrage in Schritt 9 sichert psychologische Verbindlichkeit, bevor die eigentliche Lösung präsentiert wird: Sobald der Kunde bereits 'Ja' gesagt hat, wird ein späteres 'Nein' psychologisch deutlich schwerer, da es dem eigenen zuvor gegebenen Versprechen widersprechen würde." }
    ],
    exercises: [
      {
        id: "vertrieb-abschlusstechniken-gespraechsablauf-e1",
        prompt: "Ein Verkäufer sagt: 'Mal angenommen, Sie würden sich für diese Maschine entscheiden — welche der beiden Zusatzfunktionen wäre Ihnen dann wichtiger?' Welche Abschlusstechnik wird hier verwendet und warum?",
        solution: [{ type: "p", text: "Es handelt sich um die Konjunktivtechnik. Der Verkäufer macht den Kunden durch die Formulierung 'mal angenommen, Sie würden sich entscheiden' gedanklich bereits zum Besitzer des Produkts, obwohl die eigentliche Kaufentscheidung noch gar nicht gefallen ist. Dadurch wird der Kunde implizit dazu gebracht, sich in der Rolle des Käufers zu sehen und über Details der Anwendung nachzudenken, statt über das 'Ob' des Kaufs." }]
      },
      {
        id: "vertrieb-abschlusstechniken-gespraechsablauf-e2",
        prompt: "Formulieren Sie ein eigenes Beispiel für die Alternativtechnik in einem Verkaufsgespräch über einen Mobilfunkvertrag.",
        solution: [{ type: "p", text: "Beispiel: 'Möchten Sie den Tarif mit 20 GB Datenvolumen oder lieber den mit unbegrenztem Datenvolumen für Ihr Smartphone?' Beide Antwortmöglichkeiten führen zu einem Vertragsabschluss, eine grundsätzliche Entscheidung zwischen 'Vertrag ja oder nein' wird durch die Fragestellung vermieden." }]
      },
      {
        id: "vertrieb-abschlusstechniken-gespraechsablauf-e3",
        prompt: "Erklären Sie den Unterschied zwischen der Technik der falschen Entscheidung und der Teilentscheidungstechnik.",
        solution: [{ type: "p", text: "Bei der Technik der falschen Entscheidung schlägt der Verkäufer bewusst eine Alternative vor, die der Kunde vermutlich gar nicht präferiert (z. B. das teure Komplettpaket), um durch den Widerspruch des Kunden eine klare Entscheidung zu erzwingen — der Kunde korrigiert den Verkäufer und legt sich damit fest. Die Teilentscheidungstechnik dagegen zielt darauf ab, für Rand- oder Teilaspekte des Geschäfts (z. B. den Liefertermin) bereits eine kleine, unverbindlich wirkende Entscheidung herbeizuführen, die den Kunden Schritt für Schritt an die eigentliche Gesamtentscheidung heranführt, ohne dass er sich dessen vollständig bewusst wird." }]
      },
      {
        id: "vertrieb-abschlusstechniken-gespraechsablauf-e4",
        prompt: "Warum ist die vorgezogene Abschlussfrage (Schritt 9 des idealtypischen Gesprächsablaufs) psychologisch wirksam, bevor die eigentliche Lösung präsentiert wird?",
        solution: [{ type: "p", text: "Indem der Kunde bereits vor der Präsentation der konkreten Lösung eine hypothetische Kaufzusage gibt ('Angenommen, ich könnte eine Lösung präsentieren, die alle Ihre Bedürfnisse abdeckt, würden Sie dann sofort kaufen?' — 'Ja, natürlich!'), entsteht eine psychologische Verbindlichkeit. Menschen neigen dazu, konsistent mit zuvor getroffenen Aussagen zu bleiben (Konsistenzprinzip). Ein späteres 'Nein', nachdem die passende Lösung tatsächlich präsentiert wurde, würde diesem eigenen Versprechen widersprechen und fällt dem Kunden daher psychologisch deutlich schwerer." }]
      },
      {
        id: "vertrieb-abschlusstechniken-gespraechsablauf-e5",
        prompt: "Nennen Sie die ersten fünf Schritte des idealtypischen Verkaufsgesprächsablaufs und ordnen Sie ihnen jeweils zu, ob der Verkäufer oder der Kunde aktiv ist.",
        solution: [{ type: "p", text: "Schritt 1 (Stille, nonverbale Signale beachten): beide Seiten, primär Wahrnehmung. Schritt 2 (evtl. Smalltalk): beide Seiten. Schritt 3 (Thema formulieren): kann von Kunde oder Verkäufer ausgehen. Schritt 4 (begründet offene Frage): der Verkäufer ist aktiv. Schritt 5 (Kunde formuliert Bedürfnis/Rahmenbedingungen): der Kunde ist aktiv. Insgesamt zeigt sich, dass der Verkäufer das Gespräch durch gezielte Fragetechnik strukturiert, während der Kunde die inhaltlichen Informationen liefert." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche Abschlusstechnik liegt vor, wenn der Verkäufer sagt: 'Nur noch 15 Stück verfügbar'?", options: ["Empfehlungstechnik", "Referenztechnik", "Konjunktivtechnik", "Verknappungstechnik"], correctIndex: 3, explanation: "Der Hinweis auf begrenzte Verfügbarkeit ist die Verknappungstechnik." },
      { id: "q2", question: "Welche Abschlusstechnik nutzt Aussagen wie 'Experten empfehlen das' oder 'Andere sind auch zufrieden damit'?", options: ["Alternativtechnik", "Zeitdrucktechnik", "Referenztechnik", "Teilentscheidungstechnik"], correctIndex: 2, explanation: "Die Referenztechnik führt positive Erfahrungen anderer Personen bzw. Experten an." },
      { id: "q3", question: "Was ist das Ziel der Alternativtechnik?", options: ["Den Kunden vor eine reine Ja/Nein-Entscheidung zu stellen", "Ja/Nein-Entscheidung vermeiden durch zwei positive Optionen", "Das Verkaufsgespräch möglichst sofort zu beenden", "Ausschließlich den Verkaufspreis neu zu verhandeln"], correctIndex: 1, explanation: "Die Alternativtechnik bietet zwei positive Optionen an und umgeht dadurch eine grundsätzliche Ja/Nein-Entscheidung." },
      { id: "q4", question: "Bei welcher Technik wird eine vermutlich nicht präferierte Alternative vorgeschlagen, um eine Entscheidung zu erzwingen?", options: ["Zusammenfassungstechnik", "Technik der Vorteile", "Technik der falschen Entscheidung", "Konjunktivtechnik"], correctIndex: 2, explanation: "Bei der Technik der falschen Entscheidung provoziert der Verkäufer bewusst einen Widerspruch, um eine klare Aussage des Kunden zu erhalten." },
      { id: "q5", question: "Was gilt laut Vorlesung unabhängig von der gewählten Abschlusstechnik?", options: ["Der Kundennutzen muss maximal sein", "Der Preis muss immer gesenkt werden", "Es darf nur eine Technik pro Gespräch verwendet werden", "Die Technik muss dem Kunden vorher angekündigt werden"], correctIndex: 0, explanation: "Unabhängig von der gewählten Technik muss der Kundennutzen stets maximal sein." },
      { id: "q6", question: "Welcher Schritt des idealtypischen Gesprächsablaufs ist die vorgezogene Abschlussfrage?", options: ["Schritt 9", "Schritt 4", "Schritt 13", "Schritt 1"], correctIndex: 0, explanation: "Die vorgezogene Abschlussfrage ist Schritt 9 des 13-Schritte-Ablaufs." },
      { id: "q7", question: "Was passiert im letzten Schritt (Schritt 13) des idealtypischen Verkaufsgesprächs?", options: ["Der Verkäufer stellt eine begründet offene Frage", "Der Verkäufer gratuliert dem Kunden zur richtigen Entscheidung", "Der Kunde formuliert das Thema", "Es herrscht Stille"], correctIndex: 1, explanation: "Im letzten Schritt gratuliert der Verkäufer dem Kunden zu seiner Kaufentscheidung." },
      { id: "q8", question: "Welche Aussage beschreibt die Zusammenfassungstechnik korrekt?", options: ["Es wird ausschließlich auf Zeitdruck verwiesen", "Argumente werden zufällig in beliebiger Reihenfolge genannt", "Die wichtigsten Argumente werden gebündelt, das stärkste Argument wird zum Schluss genannt", "Der Kunde muss zuerst zusammenfassen"], correctIndex: 2, explanation: "Bei der Zusammenfassungstechnik bündelt der Verkäufer die wichtigsten Argumente und platziert das stärkste Argument gezielt am Ende." },
      { id: "q9", question: "Welcher Schritt folgt direkt auf 'Kunde formuliert Bedürfnis/Rahmenbedingungen' (Schritt 5) im idealtypischen Ablauf?", options: ["Gratulation zur richtigen Entscheidung", "Aktives Zuhören, Notizen, Anerkennung der Bedürfnisse (Verkäufer)", "Lösung präsentieren", "Vorgezogene Abschlussfrage"], correctIndex: 1, explanation: "Schritt 6 besteht darin, dass der Verkäufer aktiv zuhört, Notizen macht und die Bedürfnisse des Kunden anerkennt." },
      { id: "q10", question: "Warum wird bei der Technik der falschen Entscheidung eine vermutlich unerwünschte Alternative genannt?", options: ["Um das laufende Verkaufsgespräch abzubrechen", "Um den vereinbarten Verkaufspreis zu erhöhen", "Um dem Kunden gezielt zu schmeicheln", "Um durch Widerspruch eine verbindliche Entscheidung zu provozieren"], correctIndex: 3, explanation: "Der Kunde widerspricht der vorgeschlagenen unerwünschten Alternative und legt sich damit auf eine konkrete Entscheidung fest." }
    ]
  }
];
