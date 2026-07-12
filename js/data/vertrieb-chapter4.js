const VERTRIEB_CHAPTER4_TOPICS = [
  {
    id: "vertrieb-vertriebsweg-planung",
    chapter: 4,
    order: 1,
    title: "Vertriebswegplanung: direkt vs. indirekt, Tiefe und Breite",
    icon: "🛣️",
    summary: "Wie Vertriebswege aus Vertriebsorganen geplant werden, wann direkter statt indirekter Vertrieb sinnvoll ist, und wie sich Tiefe und Breite eines Vertriebssystems bemessen.",
    explanation: [
      { type: "p", text: "Ein Vertriebsweg besteht aus einem oder mehreren Vertriebsorganen, über die ein Produkt vom Hersteller zum Kunden gelangt. Die Summe aller Vertriebswege eines Unternehmens bildet dessen Vertriebssystem." },
      { type: "p", text: "Die Planung des Vertriebssystems erfolgt in drei Schritten:" },
      { type: "list", items: [
        "1. Auswahl der Vertriebsorgane — basierend auf den Marktgegebenheiten (Kunden, Wettbewerb, Produkt)",
        "2. Kombination der Vertriebsorgane zu Vertriebswegen",
        "3. Integration der einzelnen Vertriebswege zu einem Gesamt-Vertriebssystem"
      ]},
      { type: "p", text: "Eine zentrale Grundsatzentscheidung ist die zwischen direktem und indirektem Vertrieb. Direkter Vertrieb läuft über unternehmenseigene Organe, z. B. eigene Filialen, den eigenen Online-Shop oder unternehmenseigene Key-Account-Manager. Indirekter Vertrieb läuft über unternehmensfremde Organe bzw. Vertriebspartner, z. B. über die Kette Großhandel → Einzelhandel, über Handelsvertreter oder über Franchising." },
      { type: "p", text: "Ob direkter oder indirekter Vertrieb angemessen ist, wird anhand von Effizienzüberlegungen anhand folgender Entscheidungskriterien beurteilt:" },
      { type: "list", items: [
        "Spezifität des Produktes",
        "Komplexität des Produktes",
        "Zahl der Kunden",
        "Bedarfskonzentration",
        "Relativer monetärer Wert des Produktes in der Produktkategorie"
      ]},
      { type: "p", text: "Fallbeispiel: Ein Hersteller (\"Snackmaster\") möchte Mikrowellen-Wedges vertreiben. Das Produkt weist eine niedrige Produktkomplexität und einen niedrigen relativen Wert auf, gleichzeitig gibt es sehr viele Kunden. In dieser Konstellation sind unternehmensexterne, unabhängige Absatzmittler angemessen — konkret Großhandel und Einzelhandel. Eine mögliche Vertriebskette lautet: Hersteller → Importeur → Kunde, parallel dazu Hersteller → Großhandel → Einzelhandel → Kunde." },
      { type: "p", text: "Als Faustregel gilt: Eine zusätzliche Vertriebsstufe lohnt sich, wenn sie die Transaktionskosten senkt — auch wenn dadurch dem Vertriebspartner eine höhere Marge eingeräumt werden muss. Allerdings steigen mit der Anzahl der Vertriebsstufen auch die Effektivitätsprobleme, etwa Kontrollverlust über den Absatzprozess und eine geringere Kundenbindung an den Hersteller." },
      { type: "p", text: "Die Tiefe eines Vertriebswegs beschreibt die Anzahl der aufeinanderfolgenden Vertriebsstufen:" },
      { type: "list", items: [
        "Nullstufig: direkter Vertrieb ohne Zwischenhändler",
        "Einstufig: eine Vertriebsstufe, z. B. nur der Einzelhandel",
        "Mehrstufig: mindestens zwei Vertriebsstufen, z. B. Großhandel und Einzelhandel hintereinander"
      ]},
      { type: "p", text: "Die Tiefe des gesamten Vertriebssystems entspricht der Tiefe des längsten Vertriebswegs innerhalb des Systems." },
      { type: "p", text: "Die Breite eines Vertriebswegs beschreibt, über wie viele parallele Partner auf einer Stufe das Produkt angeboten wird:" },
      { type: "list", items: [
        "Exklusiver Vertrieb: sehr wenige, ausgewählte Partner je Region",
        "Selektiver Vertrieb: eine mittlere Partneranzahl, ausgewählt nach definierten Kriterien",
        "Intensiver Vertrieb: möglichst viele Partner zur maximalen Marktabdeckung"
      ]},
      { type: "p", text: "Die Breite des Vertriebssystems beschreibt, wie viele Vertriebswege parallel nebeneinander laufen. Die Breite wird dabei je Vertriebsstufe bewertet — z. B. die Anzahl der Key-Account-Manager auf der KAM-Stufe oder die Anzahl der Einzelhändler auf der Einzelhandelsstufe." },
      { type: "p", text: "Bei der Auswahl konkreter Vertriebspartner sind unter anderem folgende Kriterien relevant:" },
      { type: "list", items: [
        "Unternehmensgröße",
        "Gute finanzielle Lage",
        "Professionelle Marktbearbeitung",
        "Angemessenes Sortiment",
        "Gute Reputation",
        "Breite Marktabdeckung",
        "Fachliche Kompetenz",
        "Infrastruktur (Niederlassungen, EDV-Technik)",
        "Gutes Management",
        "Ähnliche Geschäftsphilosophie/Kultur"
      ]}
    ],
    exercises: [
      {
        id: "vertrieb-vertriebsweg-planung-e1",
        prompt: "Erklären Sie den Unterschied zwischen Vertriebsweg und Vertriebssystem.",
        solution: [{ type: "p", text: "Ein Vertriebsweg ist eine Kombination aus einem oder mehreren Vertriebsorganen, über die ein Produkt vom Hersteller zum Kunden gelangt. Das Vertriebssystem ist die Summe aller Vertriebswege eines Unternehmens — also die Gesamtheit aller parallel und nacheinander genutzten Vertriebsorgane und -wege, über die ein Unternehmen seine Produkte an den Markt bringt." }]
      },
      {
        id: "vertrieb-vertriebsweg-planung-e2",
        prompt: "Nennen Sie die drei Schritte der Vertriebswegplanung und beschreiben Sie kurz, was in jedem Schritt passiert.",
        solution: [{ type: "p", text: "Erster Schritt ist die Auswahl der Vertriebsorgane auf Basis der Marktgegebenheiten (z. B. Kundenstruktur, Wettbewerb, Produkteigenschaften). Zweiter Schritt ist die Kombination dieser einzelnen Vertriebsorgane zu konkreten Vertriebswegen. Dritter Schritt ist die Integration der so entstandenen Vertriebswege zu einem stimmigen Gesamt-Vertriebssystem." }]
      },
      {
        id: "vertrieb-vertriebsweg-planung-e3",
        prompt: "Der Snackmaster-Hersteller vertreibt Mikrowellen-Wedges: niedrige Produktkomplexität, niedriger relativer Wert, sehr viele Kunden. Begründen Sie anhand der Entscheidungskriterien, warum hier indirekter statt direkter Vertrieb sinnvoll ist.",
        solution: [{ type: "p", text: "Bei niedriger Produktkomplexität besteht kaum Erklärungs- oder Beratungsbedarf, den nur unternehmenseigene Organe leisten könnten. Bei niedrigem relativem Wert lohnt sich der hohe Fixkostenaufwand eines eigenen Vertriebsapparats pro verkaufter Einheit nicht. Und bei einer sehr großen Zahl an Kunden wäre eine direkte, unternehmenseigene Marktbearbeitung ineffizient teuer und logistisch kaum zu leisten. In dieser Konstellation sind daher unternehmensexterne, unabhängige Absatzmittler wie Großhandel und Einzelhandel angemessen, die durch ihre bestehende Marktabdeckung Transaktionskosten senken." }]
      },
      {
        id: "vertrieb-vertriebsweg-planung-e4",
        prompt: "Warum kann eine zusätzliche Vertriebsstufe sinnvoll sein, obwohl sie dem Vertriebspartner eine höhere Marge einräumt — und wo liegt die Grenze dieses Vorteils?",
        solution: [{ type: "p", text: "Eine zusätzliche Vertriebsstufe lohnt sich, wenn sie insgesamt die Transaktionskosten senkt, etwa weil ein spezialisierter Zwischenhändler Lagerhaltung, Marktbearbeitung oder Kundenkontakt günstiger und effizienter organisieren kann als der Hersteller selbst — auch wenn diesem Partner dafür eine höhere Marge zugestanden werden muss. Die Grenze liegt darin, dass mit steigender Anzahl an Vertriebsstufen auch die Effektivitätsprobleme zunehmen: Der Hersteller verliert zunehmend Kontrolle über den Absatzprozess und die Kundenbindung an ihn selbst nimmt ab." }]
      },
      {
        id: "vertrieb-vertriebsweg-planung-e5",
        prompt: "Erläutern Sie den Unterschied zwischen der Tiefe und der Breite eines Vertriebssystems und nennen Sie je ein Beispiel.",
        solution: [{ type: "p", text: "Die Tiefe beschreibt die Anzahl aufeinanderfolgender Vertriebsstufen auf einem Vertriebsweg (nullstufig = direkt ohne Zwischenhändler, einstufig = eine Stufe wie nur Einzelhandel, mehrstufig = mindestens zwei Stufen wie Großhandel und Einzelhandel hintereinander); die Tiefe des Gesamtsystems ist die Tiefe des längsten enthaltenen Vertriebswegs. Die Breite beschreibt dagegen, über wie viele parallele Partner auf einer Stufe das Produkt angeboten wird (exklusiv = sehr wenige Partner je Region, selektiv = mittlere Partneranzahl nach Kriterien, intensiv = möglichst viele Partner); die Breite des Gesamtsystems ergibt sich aus der Anzahl parallel laufender Vertriebswege, bewertet je Stufe, z. B. Anzahl der Einzelhändler auf der Einzelhandelsstufe." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Was ist ein Vertriebssystem?", options: ["Die Summe aller Vertriebswege eines Unternehmens", "Eine einzelne Vertriebsstufe", "Ein einzelner Vertriebspartner", "Nur der direkte Vertrieb eines Unternehmens"], correctIndex: 0, explanation: "Das Vertriebssystem ist die Summe aller Vertriebswege eines Unternehmens." },
      { id: "q2", question: "Welches ist der erste Schritt der dreistufigen Vertriebswegplanung?", options: ["Kombination von Vertriebsorganen zu Vertriebswegen", "Integration zu einem Gesamtsystem", "Festlegung des Endkundenpreises", "Auswahl der Vertriebsorgane basierend auf Marktgegebenheiten"], correctIndex: 3, explanation: "Erster Schritt ist die Auswahl der Vertriebsorgane anhand der Marktgegebenheiten." },
      { id: "q3", question: "Was kennzeichnet direkten Vertrieb?", options: ["Vertrieb über unternehmensfremde Organe", "Vertrieb über unternehmenseigene Organe, z. B. eigene Filialen oder eigenen Online-Shop", "Vertrieb ausschließlich über Großhandel", "Vertrieb ausschließlich über Franchising"], correctIndex: 1, explanation: "Direkter Vertrieb läuft über unternehmenseigene Organe wie eigene Filialen, den eigenen Online-Shop oder eigene Key-Account-Manager." },
      { id: "q4", question: "Welches der folgenden ist KEIN Entscheidungskriterium für direkten vs. indirekten Vertrieb?", options: ["Komplexität des Produktes", "Relativer monetärer Wert des Produktes", "Lieblingsfarbe der Geschäftsführung", "Zahl der Kunden"], correctIndex: 2, explanation: "Die Entscheidungskriterien sind Spezifität, Komplexität, Zahl der Kunden, Bedarfskonzentration und relativer monetärer Wert des Produktes — nicht persönliche Präferenzen der Geschäftsführung." },
      { id: "q5", question: "Im Snackmaster-Fallbeispiel (Mikrowellen-Wedges) sind Produktkomplexität und relativer Wert niedrig, die Kundenzahl hoch. Welche Vertriebsform ist angemessen?", options: ["Kein Vertrieb notwendig", "Ausschließlich Vertrieb über Key-Account-Manager", "Unternehmensexterne, unabhängige Absatzmittler wie Großhandel und Einzelhandel", "Ausschließlich Direktvertrieb über eigene Filialen"], correctIndex: 2, explanation: "Bei niedriger Komplexität, niedrigem relativem Wert und vielen Kunden sind unternehmensexterne, unabhängige Absatzmittler wie Großhandel und Einzelhandel angemessen." },
      { id: "q6", question: "Wann lohnt sich laut Faustregel eine zusätzliche Vertriebsstufe?", options: ["Nur bei Produkten mit sehr hoher Komplexität", "Wenn sie die Transaktionskosten senkt, auch wenn sie dem Partner eine höhere Marge einräumt", "Nur wenn sie keine zusätzliche Marge kostet", "Niemals, da mehr Stufen immer schlechter sind"], correctIndex: 1, explanation: "Eine zusätzliche Stufe lohnt sich, wenn sie die Transaktionskosten senkt — auch auf Kosten einer höheren Marge für den Partner." },
      { id: "q7", question: "Was nimmt mit steigender Anzahl an Vertriebsstufen tendenziell zu?", options: ["Die Effektivitätsprobleme wie Kontrollverlust und geringere Kundenbindung", "Die Kontrolle des Herstellers über den Absatzprozess", "Die Kundenbindung an den Hersteller", "Nichts, mehr Stufen sind immer neutral"], correctIndex: 0, explanation: "Mit mehr Vertriebsstufen steigen Effektivitätsprobleme wie Kontrollverlust und geringere Kundenbindung an den Hersteller." },
      { id: "q8", question: "Wie wird die Tiefe eines Vertriebswegs definiert, bei dem nur eine Einzelhandelsstufe zwischen Hersteller und Kunde liegt?", options: ["Mehrstufig", "Nullstufig", "Einstufig", "Intensiv"], correctIndex: 2, explanation: "Eine einzige Vertriebsstufe (nur Einzelhandel) macht den Vertriebsweg einstufig." },
      { id: "q9", question: "Was beschreibt die Breite eines Vertriebswegs?", options: ["Wie viele parallele Partner auf einer Stufe das Produkt anbieten", "Die Anzahl aufeinanderfolgender Vertriebsstufen", "Die Anzahl der Produktkategorien", "Die Höhe des Bündelpreises"], correctIndex: 0, explanation: "Die Breite beschreibt, über wie viele parallele Partner auf einer Stufe das Produkt angeboten wird." },
      { id: "q10", question: "Welches Kriterium gehört NICHT zu den genannten Auswahlkriterien für Vertriebspartner?", options: ["Fachliche Kompetenz", "Gute finanzielle Lage", "Ähnliche Geschäftsphilosophie/Kultur", "Standort der Konkurrenz des Herstellers"], correctIndex: 3, explanation: "Zu den Auswahlkriterien zählen u. a. Unternehmensgröße, finanzielle Lage, Marktbearbeitung, Sortiment, Reputation, Marktabdeckung, fachliche Kompetenz, Infrastruktur, Management und Geschäftsphilosophie — nicht der Standort der Konkurrenz." }
    ]
  },
  {
    id: "vertrieb-vertriebsorgane-taxonomie",
    chapter: 4,
    order: 2,
    title: "Taxonomie der Vertriebsorgane: intern, extern, Absatzmittler, Absatzhelfer",
    icon: "🏢",
    summary: "Die vollständige Gliederung der Vertriebsorgane in unternehmensinterne und -externe Organe sowie die rechtlichen Unterschiede zwischen Absatzmittlern und Absatzhelfern.",
    explanation: [
      { type: "p", text: "Vertriebsorgane lassen sich grundlegend in unternehmensinterne und unternehmensexterne Vertriebsorgane gliedern. Die vollständige Taxonomie:" },
      { type: "list", items: [
        "Unternehmensinterne Vertriebsorgane — Organisatorische Einheiten: Vertriebsaußendienst, Vertriebsinnendienst (administrativ/akquisitorisch, Call Center, E-Commerce), Kundendienst",
        "Unternehmensinterne Vertriebsorgane — Einzelne Personen: Geschäftsführer, Key Account Manager, Vertriebsleiter, Außendienstmitarbeiter",
        "Unternehmensexterne Vertriebsorgane/Vertriebspartner — An das Unternehmen gebundene Organe: Vertragshändler, Franchise-Systempartner",
        "Unternehmensexterne Vertriebsorgane/Vertriebspartner — Vom Unternehmen unabhängige Organe: Absatzmittler (erwerben Eigentum am Produkt: Großhandel, Einzelhandel) und Absatzhelfer (kein Eigentumserwerb: Handelsvertreter, Kommissionär, Makler, Vertriebsagentur, Logistikdienstleister)"
      ]},
      { type: "p", text: "Sowohl Absatzmittler als auch Absatzhelfer sind rechtlich selbstständig. Die zentrale Unterscheidung liegt im Eigentumserwerb am Produkt: Ein Absatzmittler erwirbt Eigentum am Produkt (Großhandel, Einzelhandel), ein Absatzhelfer erwirbt kein Eigentum (Handelsreisender, Handelsvertreter, Kommissionär, Handelsmakler, Vertriebsagentur, Logistikdienstleister)." },
      { type: "p", text: "Großhandel verkauft an gewerbliche Nachfrager, Einzelhandel an private Nachfrager/Endverbraucher. Der Vorteil von Absatzhelfern liegt vor allem in der Variabilisierung der Vertriebskosten (Bezahlung leistungsabhängig statt fix) sowie in speziellen Kompetenzen, die diese Organe mitbringen." },
      { type: "p", text: "Die folgende Übersicht zeigt die wichtigsten Absatzhelfer mit Selbstständigkeit, Handlungsform, Vergütung/Rechten und Pflichten:" },
      { type: "list", items: [
        "Handelsreisender: nicht selbstständig, angestellt über Arbeitsvertrag; handelt im Namen und auf Rechnung des Arbeitgebers; erhält Fixum + Spesen + Umsatzprovision; unterliegt einem Wettbewerbsverbot",
        "Handelsvertreter: selbstständig über Agenturvertrag; handelt im fremden Namen auf fremde Rechnung; Rechte: Abrechnung/Auskunft, Umsatz-, Inkasso- und Delkredereprovision, Ausgleichsanspruch; Pflichten: keine Konkurrenzartikel, Bemühungspflicht",
        "Kommissionär: selbstständig über Kommissionsvertrag; handelt im eigenen Namen auf fremde Rechnung; Rechte: Pfandrecht, Aufwendungsersatz, Selbsteintrittsrecht; Pflichten: Anzeigepflicht, Haftung bei Verlust",
        "Handelsmakler: selbstständig, nur von Fall zu Fall tätig; handelt im fremden Namen auf fremde Rechnung; Courtage wird je zur Hälfte von beiden Seiten getragen; unterliegt einer Beurkundungspflicht",
        "Vertriebsagentur: selbstständig; unterstützt bei Kontaktaufnahme und Auftragsabwicklung",
        "Logistikdienstleister: selbstständig; übernimmt Verpackung, Transport und Lagerung"
      ]},
      { type: "p", text: "Zur Einordnung der Begriffe \"im eigenen/fremden Namen\" und \"auf eigene/fremde Rechnung\" gilt folgende Disambiguierungsregel:" },
      { type: "list", items: [
        "\"Im eigenen Namen\": der Kunde muss nicht wissen, wer wirklich hinter dem Geschäft steht (z. B. beim Kommissionär)",
        "\"Im fremden Namen\": der Kunde weiß, dass er mit dem Hersteller/Auftraggeber zu tun hat (z. B. bei Handelsvertreter und Handelsmakler)",
        "\"Auf eigene Rechnung\": das wirtschaftliche Risiko trägt der Vermittler selbst",
        "\"Auf fremde Rechnung\": das wirtschaftliche Risiko trägt der Auftraggeber"
      ]},
      { type: "p", text: "Die Wahl zwischen einem angestellten Handelsreisenden und einem selbstständigen Handelsvertreter hängt von der erzielbaren Umsatzhöhe ab: Je höher der erzielbare Umsatz, desto eher lohnt sich ein angestellter Reisender mit seinen Fixkosten (Fixum), da sich diese Fixkosten über einen hohen Umsatz gut verteilen; bei niedrigerem, unsichererem Umsatz ist die rein erfolgsabhängige Vergütung eines Handelsvertreters vorteilhafter." }
    ],
    exercises: [
      {
        id: "vertrieb-vertriebsorgane-taxonomie-e1",
        prompt: "Skizzieren Sie die vollständige Taxonomie der Vertriebsorgane von der obersten Ebene (intern/extern) bis zu den konkreten Organtypen.",
        solution: [{ type: "p", text: "Vertriebsorgane gliedern sich zunächst in unternehmensinterne und unternehmensexterne Vertriebsorgane. Intern gibt es organisatorische Einheiten (Vertriebsaußendienst, Vertriebsinnendienst mit administrativem/akquisitorischem Bereich, Call Center, E-Commerce, sowie Kundendienst) und einzelne Personen (Geschäftsführer, Key Account Manager, Vertriebsleiter, Außendienstmitarbeiter). Extern gibt es an das Unternehmen gebundene Organe (Vertragshändler, Franchise-Systempartner) und vom Unternehmen unabhängige Organe. Letztere zerfallen weiter in Absatzmittler, die Eigentum am Produkt erwerben (Großhandel, Einzelhandel), und Absatzhelfer, die kein Eigentum erwerben (Handelsreisender, Handelsvertreter, Kommissionär, Handelsmakler, Vertriebsagentur, Logistikdienstleister)." }]
      },
      {
        id: "vertrieb-vertriebsorgane-taxonomie-e2",
        prompt: "Worin unterscheiden sich Absatzmittler und Absatzhelfer rechtlich, und welchen Vorteil bieten Absatzhelfer dem Hersteller?",
        solution: [{ type: "p", text: "Beide sind rechtlich selbstständige Organe, unterscheiden sich aber im Eigentumserwerb: Absatzmittler (Großhandel, Einzelhandel) erwerben Eigentum am Produkt, bevor sie es weiterverkaufen. Absatzhelfer (z. B. Handelsvertreter, Kommissionär, Handelsmakler, Vertriebsagentur, Logistikdienstleister) erwerben dagegen nie Eigentum am Produkt, sondern vermitteln oder unterstützen den Absatz nur. Der Vorteil von Absatzhelfern für den Hersteller liegt in der Variabilisierung der Vertriebskosten (Vergütung meist erfolgsabhängig statt fix) sowie in den speziellen Kompetenzen, die diese Organe mitbringen." }]
      },
      {
        id: "vertrieb-vertriebsorgane-taxonomie-e3",
        prompt: "Ein Kommissionär verkauft Waren, ohne dass der Endkunde weiß, für wen er eigentlich tätig ist, und trägt dabei nicht das wirtschaftliche Risiko des Geschäfts. Ordnen Sie dies anhand der Begriffe \"im eigenen/fremden Namen\" und \"auf eigene/fremde Rechnung\" ein.",
        solution: [{ type: "p", text: "Der Kommissionär handelt im eigenen Namen (der Kunde muss nicht wissen, wer wirklich hinter dem Geschäft steht), aber auf fremde Rechnung (das wirtschaftliche Risiko trägt der Auftraggeber, nicht der Kommissionär selbst). Das entspricht genau der Definition des Kommissionärs im Kommissionsvertrag." }]
      },
      {
        id: "vertrieb-vertriebsorgane-taxonomie-e4",
        prompt: "Vergleichen Sie Handelsreisenden und Handelsvertreter hinsichtlich Selbstständigkeit, Handlungsform und Vergütung.",
        solution: [{ type: "p", text: "Der Handelsreisende ist nicht selbstständig, sondern über einen Arbeitsvertrag angestellt; er handelt im Namen und auf Rechnung seines Arbeitgebers und erhält ein Fixum plus Spesen und Umsatzprovision, unterliegt dabei einem Wettbewerbsverbot. Der Handelsvertreter ist dagegen selbstständig und über einen Agenturvertrag gebunden; er handelt im fremden Namen auf fremde Rechnung und hat Rechte wie Abrechnung, Auskunft, Umsatz-, Inkasso- und Delkredereprovision sowie Ausgleichsanspruch, während er im Gegenzug keine Konkurrenzartikel führen darf und eine Bemühungspflicht hat." }]
      },
      {
        id: "vertrieb-vertriebsorgane-taxonomie-e5",
        prompt: "Ein Unternehmen erwägt, in einer neuen Region entweder einen angestellten Handelsreisenden oder einen selbstständigen Handelsvertreter einzusetzen. Welcher Faktor ist laut Vorlesung entscheidend für diese Wahl, und wie wirkt er sich aus?",
        solution: [{ type: "p", text: "Entscheidend ist die erzielbare Umsatzhöhe in der Region. Je höher der erzielbare Umsatz, desto eher lohnt sich ein angestellter Handelsreisender trotz des zu zahlenden Fixums, da sich diese Fixkosten über ein hohes Umsatzvolumen gut verteilen lassen. Bei niedrigerem oder unsichererem Umsatzpotenzial ist ein selbstständiger Handelsvertreter vorteilhafter, da seine Vergütung überwiegend erfolgsabhängig ist und das Unternehmen so kein Fixkostenrisiko trägt." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Zu welcher Kategorie gehören Key Account Manager und Vertriebsleiter?", options: ["Absatzhelfer", "Unternehmensexterne, an das Unternehmen gebundene Organe", "Unternehmensinterne Vertriebsorgane, einzelne Personen", "Absatzmittler"], correctIndex: 2, explanation: "Geschäftsführer, Key Account Manager, Vertriebsleiter und Außendienstmitarbeiter zählen als einzelne Personen zu den unternehmensinternen Vertriebsorganen." },
      { id: "q2", question: "Was unterscheidet Absatzmittler zentral von Absatzhelfern?", options: ["Es gibt keinen Unterschied", "Absatzmittler erwerben Eigentum am Produkt, Absatzhelfer nicht", "Absatzhelfer erwerben Eigentum am Produkt, Absatzmittler nicht", "Absatzmittler sind unselbstständig, Absatzhelfer selbstständig"], correctIndex: 1, explanation: "Absatzmittler wie Großhandel und Einzelhandel erwerben Eigentum am Produkt, Absatzhelfer wie Handelsvertreter oder Kommissionär nicht." },
      { id: "q3", question: "An wen verkauft der Großhandel typischerweise?", options: ["Ausschließlich an private Endverbraucher", "An keine spezifische Zielgruppe", "Ausschließlich an den Hersteller zurück", "An gewerbliche Nachfrager"], correctIndex: 3, explanation: "Der Großhandel verkauft an gewerbliche Nachfrager, der Einzelhandel an private Nachfrager/Endverbraucher." },
      { id: "q4", question: "Welcher Absatzhelfer ist NICHT selbstständig, sondern über einen Arbeitsvertrag angestellt?", options: ["Handelsreisender", "Handelsmakler", "Handelsvertreter", "Kommissionär"], correctIndex: 0, explanation: "Der Handelsreisende ist als einziger der genannten Absatzhelfer nicht selbstständig, sondern angestellt." },
      { id: "q5", question: "Wer handelt \"im eigenen Namen auf fremde Rechnung\"?", options: ["Handelsreisender", "Kommissionär", "Handelsmakler", "Handelsvertreter"], correctIndex: 1, explanation: "Der Kommissionär handelt im eigenen Namen (Kunde kennt den wahren Auftraggeber nicht), aber auf fremde Rechnung (Risiko trägt der Auftraggeber)." },
      { id: "q6", question: "Wie wird die Courtage eines Handelsmaklers typischerweise getragen?", options: ["Ausschließlich vom Verkäufer", "Vom Hersteller allein, unabhängig von Käufer oder Verkäufer", "Ausschließlich vom Käufer", "Je zur Hälfte von beiden Seiten"], correctIndex: 3, explanation: "Beim Handelsmakler wird die Courtage üblicherweise je zur Hälfte von beiden Vertragsseiten getragen." },
      { id: "q7", question: "Welche Rechte hat ein Handelsvertreter laut Vorlesung unter anderem?", options: ["Beurkundungspflicht und hälftige Courtage", "Kein besonderes Recht, nur ein Fixum", "Abrechnung/Auskunft sowie Umsatz-, Inkasso- und Delkredereprovision und Ausgleichsanspruch", "Selbsteintrittsrecht und Pfandrecht"], correctIndex: 2, explanation: "Der Handelsvertreter hat Rechte auf Abrechnung/Auskunft, verschiedene Provisionsarten und einen Ausgleichsanspruch." },
      { id: "q8", question: "Was übernimmt ein Logistikdienstleister als Absatzhelfer?", options: ["Verpackung, Transport und Lagerung", "Ausschließlich die Preisverhandlung", "Eigentumserwerb am Produkt vor dem Weiterverkauf", "Ausschließlich die Rechnungsstellung"], correctIndex: 0, explanation: "Der Logistikdienstleister übernimmt Verpackung, Transport und Lagerung, ohne Eigentum am Produkt zu erwerben." },
      { id: "q9", question: "Was bedeutet \"im fremden Namen\" zu handeln?", options: ["Es gibt keinen Auftraggeber", "Der Kunde weiß nicht, wer hinter dem Geschäft steht", "Der Kunde weiß, dass er mit dem Hersteller/Auftraggeber zu tun hat", "Der Vermittler trägt das komplette wirtschaftliche Risiko"], correctIndex: 2, explanation: "\"Im fremden Namen\" bedeutet, dass der Kunde erkennt, dass er mit dem Hersteller/Auftraggeber zu tun hat, wie bei Handelsvertreter und Handelsmakler." },
      { id: "q10", question: "Wovon hängt laut Vorlesung ab, ob eher ein angestellter Handelsreisender oder ein selbstständiger Handelsvertreter eingesetzt werden sollte?", options: ["Ausschließlich vom persönlichen Geschmack der Geschäftsführung", "Von der erzielbaren Umsatzhöhe", "Von der Anzahl der Konkurrenten im Markt", "Von der Farbe des Firmenlogos"], correctIndex: 1, explanation: "Je höher der erzielbare Umsatz, desto eher lohnt sich ein angestellter Reisender trotz Fixum." }
    ]
  },
  {
    id: "vertrieb-macht-handelsforderungen",
    chapter: 4,
    order: 3,
    title: "Macht im Vertriebskanal, Hersteller-Handel-Konflikte und Reimporte",
    icon: "⚡",
    summary: "Die fünf Machtkategorien im Vertriebskanal, Hebel zur Verschiebung der Machtverteilung, typische Hersteller-Handel-Zielkonflikte und der Umgang mit Reimporten.",
    explanation: [
      { type: "p", text: "Innerhalb eines Vertriebskanals stehen Hersteller und Vertriebspartner in einem Machtverhältnis zueinander. Es lassen sich fünf Machtkategorien unterscheiden:" },
      { type: "list", items: [
        "Belohnungsmacht: Fähigkeit, dem Partner Vorteile zu gewähren. Beispiel Anbieter: Chemiehersteller gewährt bevorzugte Zuteilung bei Lieferengpässen. Beispiel Vertriebspartner: Einzelhändler setzt Listungsgelder durch.",
        "Bestrafungsmacht: Möglichkeit, dem Partner Nachteile anzudrohen. Beispiel Anbieter: Androhung, zusätzliche Vertriebspartner in einer Region aufzunehmen. Beispiel Vertriebspartner: Automobilzulieferer droht mit Wechsel des Zulieferers.",
        "Legitimationsmacht: vertraglich zugesicherte Kontrollrechte. Beispiel Anbieter: Franchise-Geber kontrolliert die Buchführung des Franchisenehmers. Beispiel Vertriebspartner: vertraglich zugesicherte Marketingleistungen eines Herstellers.",
        "Identifikationsmacht: Einfluss durch Prestige/Image. Beispiel Anbieter: Bekleidungshersteller mit hohem Markenprestige überzeugt den Handel, das Sortiment zu listen. Beispiel Vertriebspartner: Finanzdienstleister als Referenzkunde einer Werbeagentur.",
        "Expertenmacht: Einfluss durch überlegenes Fachwissen. Beispiel Anbieter: Franchise-Geber verfügt über Technologiewissen. Beispiel Vertriebspartner: Großhändler beeinflusst mit seiner Markt- und Kundenkenntnis die Schulungen des Herstellers."
      ]},
      { type: "p", text: "Ein Unternehmen kann über verschiedene Hebel die Machtverteilung im Vertriebskanal zu seinen Gunsten verschieben:" },
      { type: "list", items: [
        "Präferenzschaffung bei Endkunden → nutzt Identifikations- und Belohnungsmacht → Aufbau von Markenpräferenz",
        "Einschränkung der Alternativen des Partners → nutzt Belohnungs- und Legitimationsmacht → vertragliche Bindungen, Wechselbarrieren",
        "Erweiterung der eigenen Handlungsalternativen → nutzt Bestrafungsmacht → Aufbau eines Mehrkanalsystems, Gewinnung zusätzlicher Key Accounts",
        "Steigerung der eigenen Expertise → nutzt Expertenmacht → Aufbau von spezifischem Markt- und Technikwissen"
      ]},
      { type: "p", text: "Merksatz: Ohne Macht schlechte Verhandlungsposition." },
      { type: "p", text: "Hersteller und Handel verfolgen im Vertriebskanal häufig gegensätzliche Interessen. Typische Konfliktpaare (Herstellerinteresse ↔ Handelsinteresse):" },
      { type: "list", items: [
        "Distribution des gesamten Produktprogramms ↔ zielgruppenbezogene Sortimentsgestaltung",
        "Fertigungsoptimale Bestellmengen ↔ regalfüllende Bestellmengen",
        "Mindestbestellmengen ↔ flexible Nachorder",
        "Preisprobleme zulasten der Handelsspanne ↔ Preisprobleme zulasten der Einkaufspreise",
        "Vermeidung von Warenrücknahmen ↔ Rückgaberecht für Lagerware",
        "Übernahme des Abverkaufsrisikos durch den Handel ↔ Übernahme des Abverkaufsrisikos durch den Hersteller",
        "Bevorzugte Regalplatzierung eigener Produkte ↔ sortimentsgerechte Warenplatzierung"
      ]},
      { type: "p", text: "Ein besonderes Problem im internationalen Vertrieb sind Reimporte: Sie entstehen, wenn die Preisunterschiede zwischen verbundenen Märkten zu groß werden — ein Händler kauft dann im günstigen Land ein und verkauft die Ware im teureren Land weiter, wodurch das dortige Preisgefüge und die Handelsspannen unterlaufen werden. Mögliche Gegenmaßnahmen sind:" },
      { type: "list", items: [
        "Tolerierung der Reimporte",
        "Verhinderung durch direkte Anweisung an die Vertriebspartner",
        "Verhinderung mit Marketing- und Vertriebsinstrumenten: preislich durch Ausrichtung des Preiskorridors an der Marge der Reimportfirmen, kommunikativ durch Fokus auf die Originalherkunft, vertrieblich durch Nutzung unterschiedlicher Vertriebswege"
      ]}
    ],
    exercises: [
      {
        id: "vertrieb-macht-handelsforderungen-e1",
        prompt: "Nennen und erläutern Sie die fünf Machtkategorien im Vertriebskanal.",
        solution: [{ type: "p", text: "Belohnungsmacht ist die Fähigkeit, dem Partner Vorteile zu gewähren, z. B. bevorzugte Zuteilung bei Lieferengpässen. Bestrafungsmacht ist die Möglichkeit, dem Partner Nachteile anzudrohen, z. B. die Androhung zusätzlicher Vertriebspartner in einer Region. Legitimationsmacht beruht auf vertraglich zugesicherten Kontrollrechten, z. B. die Kontrolle der Buchführung eines Franchisenehmers durch den Franchise-Geber. Identifikationsmacht entsteht durch Prestige/Image, z. B. wenn hohes Markenprestige den Handel zur Listung überzeugt. Expertenmacht beruht auf überlegenem Fachwissen, z. B. dem Technologiewissen eines Franchise-Gebers oder der Marktkenntnis eines Großhändlers." }]
      },
      {
        id: "vertrieb-macht-handelsforderungen-e2",
        prompt: "Ein Hersteller möchte seine Machtposition gegenüber dem Handel stärken, indem er ein Mehrkanalsystem aufbaut und zusätzliche Key Accounts gewinnt. Welchen Hebel und welche Machtart nutzt er damit?",
        solution: [{ type: "p", text: "Der Hersteller nutzt den Hebel \"Erweiterung der eigenen Handlungsalternativen\". Dieser Hebel stützt sich auf Bestrafungsmacht: Da der Hersteller nun über mehr alternative Absatzkanäle und Kunden verfügt, ist er weniger abhängig von einzelnen Vertriebspartnern und kann glaubwürdiger mit dem Wechsel zu Alternativen drohen bzw. Partner leichter ersetzen, was seine Verhandlungsposition stärkt." }]
      },
      {
        id: "vertrieb-macht-handelsforderungen-e3",
        prompt: "Nennen Sie drei typische Zielkonflikte zwischen Hersteller- und Handelsinteressen im Vertriebskanal.",
        solution: [{ type: "p", text: "Erstens möchte der Hersteller häufig das gesamte Produktprogramm distribuieren, während der Handel eine zielgruppenbezogene, also selektivere Sortimentsgestaltung bevorzugt. Zweitens bevorzugt der Hersteller fertigungsoptimale (meist größere) Bestellmengen, während der Handel eher regalfüllende (kleinere, häufigere) Bestellmengen möchte. Drittens will der Hersteller Warenrücknahmen vermeiden, während der Handel ein Rückgaberecht für nicht verkaufte Lagerware fordert." }]
      },
      {
        id: "vertrieb-macht-handelsforderungen-e4",
        prompt: "Was sind Reimporte, und wodurch entstehen sie?",
        solution: [{ type: "p", text: "Reimporte entstehen, wenn die Preisunterschiede zwischen verbundenen Märkten (z. B. verschiedenen Ländern desselben Vertriebssystems) zu groß werden. Ein Händler kauft die Ware dann im günstigeren Markt ein und verkauft sie im teureren Markt weiter, wodurch er von der Preisdifferenz profitiert und gleichzeitig das dortige offizielle Preisgefüge sowie die Margen der dortigen Vertriebspartner unterläuft." }]
      },
      {
        id: "vertrieb-macht-handelsforderungen-e5",
        prompt: "Welche drei grundsätzlichen Handlungsoptionen hat ein Unternehmen im Umgang mit Reimporten, und wie kann eine Verhinderung mit Marketing- und Vertriebsinstrumenten konkret aussehen?",
        solution: [{ type: "p", text: "Ein Unternehmen kann Reimporte erstens tolerieren, zweitens durch direkte Anweisung an seine Vertriebspartner zu verhindern versuchen, oder drittens mit Marketing- und Vertriebsinstrumenten gegensteuern. Konkret bedeutet Letzteres preislich, den Preiskorridor an der Marge der Reimportfirmen auszurichten, damit sich Reimporte wirtschaftlich weniger lohnen; kommunikativ, den Fokus auf die Originalherkunft der Ware zu legen; und vertrieblich, unterschiedliche Vertriebswege in den verschiedenen Märkten zu nutzen, um Preisvergleiche und Umgehungen zu erschweren." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche Machtart beschreibt die Fähigkeit, einem Vertriebspartner Vorteile zu gewähren?", options: ["Belohnungsmacht", "Expertenmacht", "Legitimationsmacht", "Bestrafungsmacht"], correctIndex: 0, explanation: "Belohnungsmacht bezeichnet die Fähigkeit, dem Partner Vorteile zu gewähren, z. B. bevorzugte Zuteilung bei Lieferengpässen." },
      { id: "q2", question: "Ein Franchise-Geber kontrolliert vertraglich die Buchführung seines Franchisenehmers. Welche Machtart nutzt er hier?", options: ["Identifikationsmacht", "Expertenmacht", "Bestrafungsmacht", "Legitimationsmacht"], correctIndex: 3, explanation: "Legitimationsmacht beruht auf vertraglich zugesicherten Kontrollrechten wie der Kontrolle der Buchführung." },
      { id: "q3", question: "Ein Bekleidungshersteller überzeugt den Handel durch hohes Markenprestige, sein Sortiment zu listen. Welche Machtart liegt vor?", options: ["Bestrafungsmacht", "Identifikationsmacht", "Belohnungsmacht", "Legitimationsmacht"], correctIndex: 1, explanation: "Identifikationsmacht entsteht durch Prestige/Image, das den Partner zum Handeln bewegt." },
      { id: "q4", question: "Ein Großhändler beeinflusst mit seiner überlegenen Markt- und Kundenkenntnis die Schulungsinhalte des Herstellers. Welche Machtart nutzt der Großhändler?", options: ["Bestrafungsmacht", "Belohnungsmacht", "Expertenmacht", "Legitimationsmacht"], correctIndex: 2, explanation: "Expertenmacht beruht auf überlegenem Fachwissen, hier der Markt- und Kundenkenntnis des Großhändlers." },
      { id: "q5", question: "Welcher Hebel nutzt Bestrafungsmacht, um die eigene Machtposition zu verbessern?", options: ["Aufbau von Markenpräferenz", "Aufbau spezifischen Markt- und Technikwissens", "Vertragliche Bindungen und Wechselbarrieren", "Erweiterung der eigenen Handlungsalternativen, z. B. durch ein Mehrkanalsystem"], correctIndex: 3, explanation: "Die Erweiterung der eigenen Handlungsalternativen (z. B. Mehrkanalsystem, zusätzliche Key Accounts) nutzt Bestrafungsmacht." },
      { id: "q6", question: "Welches Interesse verfolgt der Handel typischerweise im Gegensatz zu fertigungsoptimalen Bestellmengen des Herstellers?", options: ["Verzicht auf jegliche Bestellmengenplanung", "Noch größere Bestellmengen als der Hersteller wünscht", "Komplette Auslistung des Produkts", "Regalfüllende Bestellmengen"], correctIndex: 3, explanation: "Der Handel bevorzugt regalfüllende Bestellmengen, während der Hersteller fertigungsoptimale (oft größere) Mengen bevorzugt." },
      { id: "q7", question: "Wer möchte laut den genannten Konfliktpaaren typischerweise das Abverkaufsrisiko übernehmen?", options: ["Das Risiko wird immer hälftig automatisch geteilt", "Nur der Endkunde trägt das Risiko", "Beide Seiten wollen das Risiko jeweils der anderen Seite zuschieben", "Weder Hersteller noch Handel interessieren sich für das Risiko"], correctIndex: 2, explanation: "Der Handel möchte, dass der Hersteller das Abverkaufsrisiko übernimmt, der Hersteller möchte es umgekehrt beim Handel sehen — klassischer Zielkonflikt." },
      { id: "q8", question: "Wodurch entstehen Reimporte?", options: ["Durch fehlende Werbung", "Durch zu große Preisunterschiede zwischen verbundenen Märkten", "Durch zu hohe Qualitätsstandards", "Durch zu geringe Nachfrage in allen Märkten"], correctIndex: 1, explanation: "Reimporte entstehen, wenn die Preisunterschiede zwischen verbundenen Märkten zu groß werden." },
      { id: "q9", question: "Welche der folgenden ist KEINE genannte Gegenmaßnahme gegen Reimporte?", options: ["Tolerierung der Reimporte", "Ausrichtung des Preiskorridors an der Marge der Reimportfirmen", "Vollständige Einstellung der Produktion", "Verhinderung durch direkte Anweisung"], correctIndex: 2, explanation: "Genannte Gegenmaßnahmen sind Tolerierung, direkte Anweisung sowie preisliche, kommunikative und vertriebliche Maßnahmen — nicht die Einstellung der Produktion." },
      { id: "q10", question: "Was besagt der Merksatz zur Bedeutung von Macht im Vertriebskanal?", options: ["Ohne Macht schlechte Verhandlungsposition", "Nur der Handel besitzt jemals Macht", "Macht spielt im Vertrieb keine Rolle", "Macht ersetzt jegliche Vertragsgestaltung"], correctIndex: 0, explanation: "Der Merksatz lautet: Ohne Macht schlechte Verhandlungsposition." }
    ]
  },
  {
    id: "vertrieb-interne-organisation",
    chapter: 4,
    order: 4,
    title: "Gliederungsprinzipien der internen Vertriebsorganisation",
    icon: "🗺️",
    summary: "Die fünf Gliederungsprinzipien der internen Vertriebsorganisation mit ihren jeweiligen Vor- und Nachteilen sowie deren Kombination über mehrere Organisationsebenen.",
    explanation: [
      { type: "p", text: "Die interne Vertriebsorganisation eines Unternehmens kann nach fünf grundsätzlichen Prinzipien gegliedert werden. Jedes Prinzip bringt spezifische Vor- und Nachteile mit sich:" },
      { type: "list", items: [
        "Gliederung nach Produkten — Vorteil: hohes produktspezifisches Know-how, einfache Koordination mit produktorientierten Einheiten (z. B. Produktion). Nachteil: mangelnde Kundenorientierung, geringe Ausschöpfung von Cross-Selling-Potenzialen.",
        "Gliederung nach Regionen — Vorteil: Berücksichtigung regionaler Marktgegebenheiten, physische Nähe zum Kunden. Nachteil: Schwächung durch \"Regionalfürsten\" (zu starke regionale Eigenständigkeit), erschwerte Koordination zwischen den Regionen.",
        "Gliederung nach Absatzkanälen — Vorteil: vertriebskanalspezifische Kenntnisse. Nachteil: fehlende Gesamtsicht auf den Kunden, geringere produktspezifische Kenntnisse.",
        "Gliederung nach Kunden — Vorteil: ganzheitliche Sicht auf den Kunden, engere Kundenbeziehungen, Unterstützung von Cross-Selling. Nachteil: kaum spezifisches Produktwissen, geringere Anpassung an unternehmensweite Informations-/Controlling-Systeme.",
        "Gliederung nach Funktionen — Vorteil: Aufbau von Fachwissen und Expertentum, Economies of Scale und höhere Effizienz. Nachteil: kaum spezifisches Kundenwissen, innerhalb der Abteilung oft weitere, zusätzliche Spezialisierung notwendig."
      ]},
      { type: "p", text: "In der Praxis werden diese fünf Prinzipien selten isoliert, sondern über mehrere Organisationsebenen hinweg kombiniert. Ein Beispiel-Organigramm könnte wie folgt aufgebaut sein: Geschäftsführung → Vertriebsdirektor / Marketing-Direktor → Vertriebsleiter Europa / Asien / Afrika (regionale Gliederung) → Vertriebsleiter Großkunden / Endkunden (kundenbezogene Gliederung) → Vertrieb Produkt 1 / Produkt 2 / Produkt 3 (produktbezogene Gliederung). So lassen sich die Vorteile mehrerer Gliederungsprinzipien auf unterschiedlichen Ebenen der Organisation nutzen." }
    ],
    exercises: [
      {
        id: "vertrieb-interne-organisation-e1",
        prompt: "Nennen Sie die fünf Gliederungsprinzipien der internen Vertriebsorganisation.",
        solution: [{ type: "p", text: "Die fünf Gliederungsprinzipien sind: Gliederung nach Produkten, Gliederung nach Regionen, Gliederung nach Absatzkanälen, Gliederung nach Kunden und Gliederung nach Funktionen." }]
      },
      {
        id: "vertrieb-interne-organisation-e2",
        prompt: "Ein Unternehmen gliedert seinen Vertrieb rein nach Produkten. Welche Vor- und Nachteile ergeben sich daraus?",
        solution: [{ type: "p", text: "Vorteil einer produktbezogenen Gliederung ist ein hohes produktspezifisches Know-how der Vertriebsmitarbeiter sowie eine einfache Koordination mit produktorientierten Einheiten wie der Produktion. Nachteilig ist jedoch eine mangelnde Kundenorientierung, da der einzelne Kunde möglicherweise von mehreren produktspezifischen Vertriebseinheiten parallel betreut wird, sowie eine geringe Ausschöpfung von Cross-Selling-Potenzialen, da niemand die volle Kundenbeziehung über alle Produkte hinweg im Blick hat." }]
      },
      {
        id: "vertrieb-interne-organisation-e3",
        prompt: "Warum kann eine regionale Gliederung des Vertriebs zu sogenannten \"Regionalfürsten\" führen, und welches weitere Problem bringt diese Gliederung mit sich?",
        solution: [{ type: "p", text: "Bei einer regionalen Gliederung erhalten regionale Vertriebsleiter oft weitreichende Entscheidungsbefugnisse und Eigenständigkeit für \"ihre\" Region, um die dortigen Marktgegebenheiten optimal berücksichtigen zu können. Diese Eigenständigkeit kann dazu führen, dass sich einzelne Regionalleiter wie \"Regionalfürsten\" verhalten, die sich zu stark von der Unternehmenszentrale abkoppeln. Zusätzlich erschwert die regionale Gliederung die Koordination zwischen den einzelnen Regionen, z. B. bei überregional tätigen Kunden." }]
      },
      {
        id: "vertrieb-interne-organisation-e4",
        prompt: "Vergleichen Sie die Gliederung nach Kunden mit der Gliederung nach Funktionen hinsichtlich ihrer jeweiligen Stärken.",
        solution: [{ type: "p", text: "Die Gliederung nach Kunden ermöglicht eine ganzheitliche Sicht auf den einzelnen Kunden, engere Kundenbeziehungen und eine bessere Unterstützung von Cross-Selling, da ein Verantwortlicher den gesamten Kunden über alle Produkte hinweg betreut. Ihr Nachteil ist kaum spezifisches Produktwissen und eine geringere Anpassung an unternehmensweite Informations- und Controlling-Systeme. Die Gliederung nach Funktionen dagegen fördert den Aufbau von Fachwissen und Expertentum sowie Economies of Scale und höhere Effizienz durch Spezialisierung, hat aber den Nachteil, dass kaum spezifisches Kundenwissen vorhanden ist und innerhalb der funktionalen Abteilung oft noch zusätzliche Spezialisierung nötig wird." }]
      },
      {
        id: "vertrieb-interne-organisation-e5",
        prompt: "Erläutern Sie an dem im Kurs vorgestellten Beispiel-Organigramm, wie mehrere Gliederungsprinzipien über verschiedene Organisationsebenen hinweg kombiniert werden können.",
        solution: [{ type: "p", text: "Im Beispiel-Organigramm folgt auf die Geschäftsführung zunächst eine Trennung in Vertriebsdirektor und Marketing-Direktor. Unter dem Vertriebsdirektor gliedert sich der Vertrieb zunächst regional in Vertriebsleiter für Europa, Asien und Afrika. Innerhalb dieser Regionen erfolgt eine weitere Gliederung nach Kunden, z. B. in Vertriebsleiter Großkunden und Vertriebsleiter Endkunden. Auf der untersten Ebene erfolgt schließlich eine produktbezogene Gliederung in Vertrieb Produkt 1, Produkt 2 und Produkt 3. So werden die Vorteile der regionalen, kundenbezogenen und produktbezogenen Gliederung auf unterschiedlichen Hierarchieebenen kombiniert genutzt." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Welches ist KEINES der fünf Gliederungsprinzipien der internen Vertriebsorganisation?", options: ["Gliederung nach Aktienkurs", "Gliederung nach Produkten", "Gliederung nach Funktionen", "Gliederung nach Regionen"], correctIndex: 0, explanation: "Die fünf Prinzipien sind Produkte, Regionen, Absatzkanäle, Kunden und Funktionen — nicht der Aktienkurs." },
      { id: "q2", question: "Welcher Nachteil ist typisch für die Gliederung nach Produkten?", options: ["Zu hohes Produktwissen", "Zu geringe Koordination mit der Produktion", "Mangelnde Kundenorientierung und geringe Ausschöpfung von Cross-Selling", "Zu geringe regionale Marktnähe"], correctIndex: 2, explanation: "Bei produktbezogener Gliederung leidet die Kundenorientierung, und Cross-Selling wird kaum ausgeschöpft." },
      { id: "q3", question: "Welcher Vorteil wird der Gliederung nach Regionen zugeschrieben?", options: ["Maximale Standardisierung weltweit", "Hohes produktspezifisches Know-how", "Physische Nähe zum Kunden und Berücksichtigung regionaler Marktgegebenheiten", "Vollständige Vermeidung von Koordinationsproblemen"], correctIndex: 2, explanation: "Die regionale Gliederung ermöglicht physische Kundennähe und Berücksichtigung lokaler Marktbedingungen." },
      { id: "q4", question: "Was ist ein Nachteil der Gliederung nach Regionen?", options: ["Schwächung durch 'Regionalfürsten' und erschwerte Koordination zwischen Regionen", "Zu geringe Marktnähe", "Fehlende Kundenorientierung", "Fehlendes produktspezifisches Wissen"], correctIndex: 0, explanation: "Regionale Eigenständigkeit kann zu 'Regionalfürsten' führen und die Koordination zwischen Regionen erschweren." },
      { id: "q5", question: "Welcher Vorteil wird der Gliederung nach Kunden zugeschrieben?", options: ["Hohes vertriebskanalspezifisches Wissen", "Maximale Standardisierung der Prozesse", "Hohe Economies of Scale", "Ganzheitliche Sicht auf den Kunden und Unterstützung von Cross-Selling"], correctIndex: 3, explanation: "Die kundenbezogene Gliederung ermöglicht eine ganzheitliche Kundensicht und fördert Cross-Selling." },
      { id: "q6", question: "Welcher Nachteil ist typisch für die Gliederung nach Kunden?", options: ["Zu hohe Ausschöpfung von Cross-Selling", "Zu starke Produktorientierung", "Kaum spezifisches Produktwissen und geringere Anpassung an Informations-/Controlling-Systeme", "Zu enge Kundenbeziehungen"], correctIndex: 2, explanation: "Bei kundenbezogener Gliederung fehlt oft spezifisches Produktwissen, und die Anpassung an unternehmensweite Systeme ist geringer." },
      { id: "q7", question: "Welcher Vorteil ist typisch für die Gliederung nach Funktionen?", options: ["Maximale regionale Marktnähe", "Hohes vertriebskanalspezifisches Wissen", "Ganzheitliche Kundensicht", "Aufbau von Fachwissen/Expertentum sowie Economies of Scale"], correctIndex: 3, explanation: "Funktionale Gliederung fördert Spezialisierung, Fachwissen und Effizienzgewinne (Economies of Scale)." },
      { id: "q8", question: "Was ist ein Nachteil der Gliederung nach Absatzkanälen?", options: ["Fehlende Gesamtsicht des Kunden und geringere produktspezifische Kenntnisse", "Zu hohe Kundenorientierung", "Zu hohes Fachwissen in einzelnen Kanälen", "Keine Nachteile bekannt"], correctIndex: 0, explanation: "Bei Gliederung nach Absatzkanälen fehlt oft die Gesamtsicht auf den Kunden, und produktspezifisches Wissen ist geringer." },
      { id: "q9", question: "Im Beispiel-Organigramm folgt unter dem Vertriebsdirektor zunächst eine regionale Gliederung (Europa/Asien/Afrika). Welche Gliederung folgt darunter laut Beispiel?", options: ["Keine weitere Gliederung", "Nach Kunden (Großkunden/Endkunden)", "Nach Funktionen", "Nach Absatzkanälen"], correctIndex: 1, explanation: "Im Beispiel folgt nach der regionalen Ebene eine kundenbezogene Gliederung in Großkunden und Endkunden." },
      { id: "q10", question: "Warum kombinieren Unternehmen in der Praxis häufig mehrere Gliederungsprinzipien über verschiedene Organisationsebenen?", options: ["Um die Kundenorientierung bewusst zu reduzieren", "Um die jeweiligen Vorteile der Prinzipien auf unterschiedlichen Ebenen zu nutzen", "Weil ein einzelnes Prinzip gesetzlich verboten ist", "Um Kosten komplett zu vermeiden"], correctIndex: 1, explanation: "Durch die Kombination mehrerer Prinzipien auf verschiedenen Ebenen lassen sich deren jeweilige Vorteile gleichzeitig nutzen." }
    ]
  }
];
