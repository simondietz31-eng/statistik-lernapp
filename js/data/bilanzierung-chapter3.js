const BILANZIERUNG_CHAPTER3_TOPICS = [
  {
    id: "bilanzierung-av-begriff",
    chapter: 3,
    order: 1,
    title: "Begriff und Positionen des Anlagevermögens",
    icon: "🏢",
    summary: "Was das Anlagevermögen nach § 247 Abs. 2 HGB ausmacht, wie es sich vom Umlaufvermögen abgrenzt und welche drei Hauptgruppen die Bilanzgliederung vorsieht.",
    explanation: [
      { type: "p", text: "Anlagevermögen sind nach § 247 Abs. 2 HGB (bzw. R 6.1 Abs. 1 EStR) Gegenstände, die dazu bestimmt sind, dem Geschäftsbetrieb dauernd zu dienen. Entscheidend ist also die Zweckbestimmung: Ein Vermögensgegenstand gehört zum Anlagevermögen, wenn er langfristig im Unternehmen genutzt werden soll — nicht der Verkauf oder Verbrauch steht im Vordergrund, sondern der dauerhafte Gebrauch." },
      { type: "p", text: "Davon abzugrenzen ist das Umlaufvermögen: Es umfasst Vermögensgegenstände, die kurzfristig gebunden sind und im Rahmen des Leistungserstellungsprozesses umgesetzt, verbraucht oder veräußert werden sollen (z. B. Vorräte, Forderungen, liquide Mittel). Diese Abgrenzung ist bilanzrechtlich zentral, weil für Anlage- und Umlaufvermögen unterschiedliche Bewertungsregeln gelten (u. a. gemildertes vs. strenges Niederstwertprinzip)." },
      { type: "list", items: [
        "Nach § 266 Abs. 2 HGB gliedert sich das Anlagevermögen in drei Hauptpositionen:",
        "I. Immaterielle Vermögensgegenstände",
        "II. Sachanlagen",
        "III. Finanzanlagen"
      ]},
      { type: "p", text: "Immaterielle Vermögensgegenstände sind alle identifizierbaren, in der Verfügungsmacht des Unternehmens stehenden, nicht-monetären Vermögensgegenstände ohne physische Substanz. Dazu zählen u. a. selbst geschaffene gewerbliche Schutzrechte, entgeltlich erworbene Konzessionen, Patente, Marken-, Urheber- und Verlagsrechte, Lizenzen, der Geschäfts- oder Firmenwert sowie geleistete Anzahlungen auf solche Rechte." },
      { type: "list", items: [
        "Der Geschäfts- oder Firmenwert (GoF) wird unterschiedlich behandelt, je nachdem, wie er entstanden ist:",
        "Derivativer (entgeltlich erworbener) GoF: gilt handelsrechtlich per Fiktion als Vermögensgegenstand — Aktivierungspflicht (§ 246 Abs. 1 S. 4 HGB) und ebenso steuerrechtlich (§ 5 Abs. 1 EStG); planmäßige Abschreibung über die voraussichtliche Nutzungsdauer, steuerlich linear über 15 Jahre (§ 7 Abs. 1 S. 3 EStG), handelsrechtlich nach BilRUG über 10 Jahre, falls die Nutzungsdauer nicht verlässlich geschätzt werden kann",
        "Originärer (selbst geschaffener) GoF: strenges Aktivierungsverbot in Handels- und Steuerbilanz (§ 248 Abs. 2 HGB; § 5 Abs. 2 EStG), da kein objektivierbarer Erwerbsvorgang vorliegt",
        "Selbst geschaffene immaterielle Vermögensgegenstände des Anlagevermögens im Übrigen (z. B. Entwicklungskosten): Aktivierungswahlrecht nach § 248 Abs. 2 S. 1 HGB; bestimmte Tatbestände (z. B. selbst geschaffene Marken, Drucktitel, Kundenlisten) dürfen dagegen nach § 248 Abs. 2 S. 2 HGB keinesfalls aktiviert werden"
      ]},
      { type: "p", text: "Sachanlagen umfassen körperliche, langfristig genutzte Vermögensgegenstände: Grundstücke, grundstücksgleiche Rechte und Bauten (einschließlich Bauten auf fremdem Grund und Mietereinbauten), technische Anlagen und Maschinen, andere Anlagen sowie Betriebs- und Geschäftsausstattung (z. B. Fahrzeuge, Werkzeuge) und geleistete Anzahlungen bzw. Anlagen im Bau." },
      { type: "p", text: "Finanzanlagen gliedern sich in sechs Positionen: Anteile an verbundenen Unternehmen, Ausleihungen an verbundene Unternehmen, Beteiligungen, Ausleihungen an Unternehmen mit Beteiligungsverhältnis, Wertpapiere des Anlagevermögens und sonstige Ausleihungen. Der Begriff der verbundenen Unternehmen ist im HGB (§ 271 Abs. 2 HGB: Mutter- oder Tochterunternehmen, die in einen Konzernabschluss nach § 290 HGB einzubeziehen sind) enger gefasst als im AktG (§ 15 AktG), das zusätzlich in Mehrheitsbesitz stehende und mit Mehrheit beteiligte Unternehmen, Konzernunternehmen, abhängige und herrschende Unternehmen sowie Vertragsteile eines Unternehmensvertrags erfasst." },
      { type: "p", text: "Für die spätere Bewertung ist außerdem die Unterscheidung zwischen abnutzbarem Anlagevermögen (z. B. Gebäude, Maschinen — planmäßige Abschreibung über die Nutzungsdauer) und nicht abnutzbarem Anlagevermögen (z. B. unbebaute Grundstücke, Beteiligungen — keine planmäßige, sondern ggf. nur außerplanmäßige Abschreibung) von großer Bedeutung." }
    ],
    exercises: [
      {
        id: "bilanzierung-av-begriff-e1",
        prompt: "Ordnen Sie folgende Posten den Bilanzpositionen des Anlagevermögens zu (oder begründen Sie, warum es sich nicht um Anlagevermögen handelt): a) ein vom Unternehmen erworbenes Patent, b) eine Fabrikhalle, c) eine 30%ige Beteiligung an einem Zulieferer, d) Rohstoffvorräte im Lager, e) der eigene Lkw-Fuhrpark.",
        solution: [{ type: "p", text: "a) Immaterielle Vermögensgegenstände (entgeltlich erworbene gewerbliche Schutzrechte). b) Sachanlagen (Grundstücke und Bauten). c) Finanzanlagen (Beteiligungen, § 271 Abs. 1 HGB). d) Kein Anlagevermögen, sondern Umlaufvermögen (Vorräte) — Rohstoffe sind zum Verbrauch, nicht zum dauernden Gebrauch bestimmt. e) Sachanlagen (andere Anlagen, Betriebs- und Geschäftsausstattung)." }]
      },
      {
        id: "bilanzierung-av-begriff-e2",
        prompt: "Warum darf ein originärer (selbst geschaffener) Geschäfts- oder Firmenwert handelsrechtlich nicht aktiviert werden, während der derivative (entgeltlich erworbene) Geschäfts- oder Firmenwert aktiviert werden muss?",
        solution: [{ type: "p", text: "Der derivative GoF entsteht durch einen objektivierbaren, entgeltlichen Erwerbsvorgang (Kaufpreis abzüglich Zeitwert der übernommenen Vermögensgegenstände und Schulden) und wird deshalb per gesetzlicher Fiktion zum Vermögensgegenstand mit Aktivierungspflicht (§ 246 Abs. 1 S. 4 HGB). Der originäre GoF beruht dagegen auf selbst erwirtschafteten, nicht objektiv nachweisbaren Werten (z. B. gutes Image, Kundenbindung); ein Ansatz wäre reine Schätzung ohne verlässlichen Wertnachweis. Aus Gründen der kaufmännischen Vorsicht besteht daher ein strenges Aktivierungsverbot (§ 248 Abs. 2 HGB)." }]
      },
      {
        id: "bilanzierung-av-begriff-e3",
        prompt: "Die Muster-AG übernimmt im Wege eines Asset Deals sämtliche Vermögensgegenstände (Zeitwert 5.000.000 €) und Schulden (Zeitwert 3.000.000 €) eines anderen Unternehmens zu einem Kaufpreis von 2.500.000 €. Ist ein Geschäfts- oder Firmenwert zu bilanzieren, und wenn ja, in welcher Höhe?",
        solution: [{ type: "p", text: "Reinvermögen (Zeitwert) = 5.000.000 € − 3.000.000 € = 2.000.000 €. Da der Kaufpreis (2.500.000 €) über dem Reinvermögen liegt, ergibt sich ein positiver derivativer Geschäfts- oder Firmenwert von 500.000 € (2.500.000 € − 2.000.000 €). Dieser ist gemäß § 246 Abs. 1 S. 4 HGB aktivierungspflichtig und in der Folge planmäßig über seine voraussichtliche Nutzungsdauer abzuschreiben." }]
      },
      {
        id: "bilanzierung-av-begriff-e4",
        prompt: "Nennen Sie die drei Hauptgruppen des Anlagevermögens nach der handelsrechtlichen Bilanzgliederung (§ 266 Abs. 2 HGB) und ordnen Sie jeweils ein Beispiel zu.",
        solution: [{ type: "p", text: "I. Immaterielle Vermögensgegenstände (z. B. ein erworbenes Patent). II. Sachanlagen (z. B. eine Produktionsmaschine). III. Finanzanlagen (z. B. eine Beteiligung an einem anderen Unternehmen)." }]
      },
      {
        id: "bilanzierung-av-begriff-e5",
        prompt: "Worin unterscheidet sich der Begriff der 'verbundenen Unternehmen' im Sinne des § 271 Abs. 2 HGB von dem im Sinne des § 15 AktG?",
        solution: [{ type: "p", text: "§ 271 Abs. 2 HGB fasst den Kreis enger: Verbundene Unternehmen sind hier Mutter- oder Tochterunternehmen, die als solche in einen Konzernabschluss nach § 290 HGB einzubeziehen sind. § 15 AktG erfasst einen deutlich weiteren Kreis, u. a. in Mehrheitsbesitz stehende und mit Mehrheit beteiligte Unternehmen (§ 16 AktG), Konzernunternehmen unter einheitlicher Leitung bzw. mit beherrschendem Einfluss (§§ 17, 18 AktG), abhängige und herrschende Unternehmen sowie wechselseitig beteiligte Unternehmen (§ 19 AktG) und Vertragsteile eines Unternehmensvertrags (§§ 291, 292 AktG)." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie definiert § 247 Abs. 2 HGB das Anlagevermögen?", options: ["Vermögensgegenstände mit einem Wert unter 800 €", "Vermögensgegenstände, die dazu bestimmt sind, dem Geschäftsbetrieb dauernd zu dienen", "Nur liquide Mittel und kurzfristige Forderungen", "Ausschließlich Grundstücke und Gebäude"], correctIndex: 1, explanation: "§ 247 Abs. 2 HGB stellt auf die Zweckbestimmung ab: dauernd dem Geschäftsbetrieb zu dienen." },
      { id: "q2", question: "Welche drei Hauptpositionen umfasst das Anlagevermögen nach § 266 Abs. 2 HGB?", options: ["Vorräte, Forderungen, liquide Mittel", "Eigenkapital, Rückstellungen, Verbindlichkeiten", "Immaterielle Vermögensgegenstände, Sachanlagen, Finanzanlagen", "Umsatzerlöse, Materialaufwand, Personalaufwand"], correctIndex: 2, explanation: "Die Bilanzgliederung sieht genau diese drei Hauptgruppen für das Anlagevermögen vor." },
      { id: "q3", question: "Wie ist der derivative (entgeltlich erworbene) Geschäfts- oder Firmenwert handelsrechtlich zu behandeln?", options: ["Aktivierungsverbot", "Aktivierungswahlrecht ohne weitere Pflichten", "Aktivierungspflicht mit anschließender planmäßiger Abschreibung", "Sofortige Verrechnung mit dem Eigenkapital"], correctIndex: 2, explanation: "Der derivative GoF gilt per Fiktion als Vermögensgegenstand mit Aktivierungspflicht (§ 246 Abs. 1 S. 4 HGB) und ist planmäßig abzuschreiben." },
      { id: "q4", question: "Wie ist der originäre (selbst geschaffene) Geschäfts- oder Firmenwert zu behandeln?", options: ["Aktivierungspflicht wie beim derivativen GoF", "Aktivierungswahlrecht analog zu Entwicklungskosten", "Aktivierungsverbot in Handels- und Steuerbilanz", "Nur steuerrechtlich aktivierungspflichtig"], correctIndex: 2, explanation: "Für den originären GoF besteht ein strenges Aktivierungsverbot (§ 248 Abs. 2 HGB; § 5 Abs. 2 EStG), da kein objektivierbarer Erwerbsvorgang vorliegt." },
      { id: "q5", question: "Welche zwei Gruppen von Finanzanlagen lassen sich nach HGB grob unterscheiden?", options: ["Vorräte und Forderungen", "Eigenkapital und Fremdkapital", "Anteile/Beteiligungen (i. d. R. Daueranlagen) und Ausleihungen (schuldrechtliche Kapitalforderungen)", "Sachanlagen und immaterielle Vermögensgegenstände"], correctIndex: 2, explanation: "Finanzanlagen umfassen einerseits Anteile/Beteiligungen (gesellschaftsrechtlich) und andererseits Ausleihungen (schuldrechtlich)." },
      { id: "q6", question: "Warum wird im Bilanzrecht so stark zwischen materiellem und immateriellem Anlagevermögen unterschieden?", options: ["Weil immaterielle Vermögensgegenstände steuerfrei sind", "Weil für immaterielle Vermögensgegenstände strengere Aktivierungsregeln gelten (u. a. Aktivierungsverbote für selbst geschaffene Werte ohne objektivierbaren Erwerbsvorgang)", "Der Unterschied hat keine bilanzrechtliche Relevanz", "Weil nur Sachanlagen abgeschrieben werden dürfen"], correctIndex: 1, explanation: "Immaterielle Vermögensgegenstände ohne physische Substanz sind schwerer objektiv bewertbar; deshalb gelten besondere, teils strengere Aktivierungsregeln (Vorsichtsprinzip)." },
      { id: "q7", question: "Welche Unternehmen gelten nach § 271 Abs. 2 HGB als 'verbundene Unternehmen'?", options: ["Alle Unternehmen derselben Branche", "Mutter- oder Tochterunternehmen, die in einen Konzernabschluss nach § 290 HGB einzubeziehen sind", "Alle Kunden und Lieferanten eines Unternehmens", "Nur börsennotierte Aktiengesellschaften"], correctIndex: 1, explanation: "§ 271 Abs. 2 HGB definiert verbundene Unternehmen über die Einbeziehungspflicht in den Konzernabschluss nach § 290 HGB." },
      { id: "q8", question: "Was ist unter 'geleisteten Anzahlungen' im Anlagevermögen zu verstehen?", options: ["Rückzahlungen an Gesellschafter", "Vorleistungen des Unternehmens auf noch schwebende Geschäfte im Zusammenhang mit Anlagegütern", "Erhaltene Zahlungen von Kunden", "Abschreibungsbeträge des laufenden Jahres"], correctIndex: 1, explanation: "Geleistete Anzahlungen sind Vorleistungen auf im Übrigen noch schwebende Geschäfte, z. B. Anzahlungen auf eine bestellte, aber noch nicht gelieferte Maschine." },
      { id: "q9", question: "Nennen Sie ein Beispiel für nicht abnutzbares Anlagevermögen.", options: ["Eine Produktionsmaschine", "Ein Firmenfahrzeug", "Ein unbebautes Grundstück", "Ein Bürogebäude"], correctIndex: 2, explanation: "Unbebaute Grundstücke, Beteiligungen und Wertpapiere des Anlagevermögens gelten typischerweise als nicht abnutzbares Anlagevermögen — im Gegensatz z. B. zu Gebäuden oder Maschinen." },
      { id: "q10", question: "Was unterscheidet Anlagevermögen grundlegend vom Umlaufvermögen?", options: ["Anlagevermögen ist immer wertvoller als Umlaufvermögen", "Anlagevermögen ist zum dauernden Gebrauch bestimmt, Umlaufvermögen wird kurzfristig verbraucht, veräußert oder umgesetzt", "Umlaufvermögen erscheint nicht in der Bilanz", "Es gibt keinen bilanzrechtlichen Unterschied"], correctIndex: 1, explanation: "Die Zweckbestimmung ist entscheidend: dauernder Gebrauch (Anlagevermögen) versus kurzfristiger Verbrauch/Umsatz (Umlaufvermögen)." }
    ]
  },
  {
    id: "bilanzierung-av-bewertungsgrundlagen",
    chapter: 3,
    order: 2,
    title: "Bewertungsgrundlagen: Anschaffungs- und Herstellungskosten",
    icon: "🧾",
    summary: "Wie sich Anschaffungs- und Herstellungskosten als Ausgangswert und Wertobergrenze des Anlagevermögens zusammensetzen, und welche Aktivierungspflichten, -wahlrechte und -verbote gelten.",
    explanation: [
      { type: "p", text: "Nach § 253 Abs. 1 Satz 1 HGB sind die Anschaffungs- oder Herstellungskosten (AHK) der Ausgangswert und zugleich die Wertobergrenze für die Bewertung des Anlagevermögens — höher als zu den (fortgeführten) AHK darf ein Vermögensgegenstand grundsätzlich nie bilanziert werden. Anschaffungskosten fallen an, wenn ein Vermögensgegenstand von Dritten erworben wird; Herstellungskosten, wenn er im eigenen Betrieb selbst erstellt wird." },
      { type: "formula", tex: "\\text{AK} = \\text{Anschaffungspreis} - \\text{Anschaffungspreisminderungen} + \\text{Anschaffungsnebenkosten} + \\text{nachträgliche AK}" },
      { type: "p", text: "Anschaffungspreisminderungen (z. B. Rabatte, Boni, Skonti) reduzieren die Anschaffungskosten. Anschaffungsnebenkosten erhöhen sie dagegen — dazu zählen alle Kosten, die notwendig sind, um den Vermögensgegenstand in einen betriebsbereiten Zustand zu versetzen, z. B. Notar- und Grundbuchkosten, Grunderwerbsteuer, Maklerprovision, Transport-, Fracht- und Montagekosten. Auch Abbruchkosten für ein in Abbruchabsicht mit erworbenes Altgebäude zählen zu den Anschaffungsnebenkosten des Grundstücks, nicht des neuen Gebäudes." },
      { type: "list", items: [
        "Für die Aktivierung von Vermögensgegenständen gelten je nach Sachverhalt unterschiedliche Regeln:",
        "Aktivierungspflicht: z. B. entgeltlich erworbene immaterielle Vermögensgegenstände, derivativer Geschäfts- oder Firmenwert",
        "Aktivierungswahlrecht: z. B. selbst geschaffene immaterielle Vermögensgegenstände des Anlagevermögens wie Entwicklungskosten (§ 248 Abs. 2 S. 1 HGB)",
        "Aktivierungsverbot: z. B. Forschungskosten (lassen sich i. d. R. nicht von Entwicklungskosten trennen, wenn doch, gilt für sie ein Verbot), originärer Geschäfts- oder Firmenwert, bestimmte selbst geschaffene immaterielle Werte nach § 248 Abs. 2 S. 2 HGB (z. B. selbst geschaffene Marken)"
      ]},
      { type: "p", text: "Die allgemeinen Bewertungsgrundsätze folgen dem Vorsichtsprinzip: Für Vermögensgegenstände gilt grundsätzlich das Niederstwertprinzip (der niedrigere von zwei möglichen Werten wird angesetzt), für Schulden das Höchstwertprinzip. Beim (Finanz-)Anlagevermögen gilt ein gemildertes Niederstwertprinzip (außerplanmäßige Abschreibung bei dauerhafter Wertminderung ist Pflicht, bei vorübergehender Wertminderung — außer bei Finanzanlagen — nicht zulässig), während beim Umlaufvermögen das strenge Niederstwertprinzip gilt (jede, auch vorübergehende Wertminderung ist zu berücksichtigen)." },
      { type: "p", text: "Diese Grundsätze stützen sich auf das Realisationsprinzip (Gewinne erst bei Realisierung ausweisen) und das Imparitätsprinzip (Verluste bereits bei Erkennbarkeit, also unrealisiert, berücksichtigen) — beide Ausprägungen der kaufmännischen Vorsicht." },
      { type: "p", text: "Wichtig für die Praxis: Der aus den AHK abzüglich der kumulierten Abschreibungen ermittelte Restbuchwert entspricht nicht notwendigerweise dem tatsächlichen (Markt-)Wert eines Vermögensgegenstandes. Er ist eine rein rechnerische, an bilanzrechtlichen Vorschriften orientierte Größe und kann vom tatsächlichen Veräußerungs- oder Nutzungswert erheblich abweichen." }
    ],
    exercises: [
      {
        id: "bilanzierung-av-bewertungsgrundlagen-e1",
        prompt: "Eine Maschine wird für netto 30.000 € gekauft. Der Lieferant gewährt 2 % Skonto, das ausgenutzt wird. Zusätzlich fallen 800 € Transportkosten und 1.200 € Montagekosten an (jeweils netto). Ermitteln Sie die Anschaffungskosten der Maschine.",
        solution: [{ type: "p", text: "Anschaffungspreis nach Skonto: 30.000 € · (1 − 0,02) = 29.400 €. Zuzüglich Anschaffungsnebenkosten (Transport 800 € + Montage 1.200 € = 2.000 €). Anschaffungskosten insgesamt: 29.400 € + 2.000 € = 31.400 €." }]
      },
      {
        id: "bilanzierung-av-bewertungsgrundlagen-e2",
        prompt: "Ein Unternehmen erwirbt ein unbebautes Grundstück mit einem alten, abbruchreifen Gebäude zu einem Kaufpreis von 200.000 €. Für Notar und Grundbuch fallen 8.000 € an, die Abbruchkosten für das Altgebäude betragen 15.000 €. Wie hoch sind die Anschaffungskosten des Grundstücks?",
        solution: [{ type: "p", text: "Anschaffungskosten = Kaufpreis + Anschaffungsnebenkosten = 200.000 € + 8.000 € (Notar/Grundbuch) + 15.000 € (Abbruchkosten des in Abbruchabsicht erworbenen Altgebäudes) = 223.000 €. Die Abbruchkosten zählen zu den Anschaffungskosten des Grundstücks, da das Altgebäude von Anfang an nicht weiter genutzt, sondern beseitigt werden sollte." }]
      },
      {
        id: "bilanzierung-av-bewertungsgrundlagen-e3",
        prompt: "Ordnen Sie die folgenden Positionen den Anschaffungspreisminderungen bzw. den Anschaffungsnebenkosten zu: a) Skonto, b) Grunderwerbsteuer, c) Rabatt, d) Notargebühren, e) Fracht.",
        solution: [{ type: "p", text: "Anschaffungspreisminderungen (mindern die AK): a) Skonto, c) Rabatt. Anschaffungsnebenkosten (erhöhen die AK): b) Grunderwerbsteuer, d) Notargebühren, e) Fracht." }]
      },
      {
        id: "bilanzierung-av-bewertungsgrundlagen-e4",
        prompt: "Eine Forschungsabteilung entwickelt ein neues Verfahren. Die Aufwendungen lassen sich sauber in 300.000 € Forschungskosten und 250.000 € Entwicklungskosten trennen. Wie sind beide Beträge handelsrechtlich zu behandeln?",
        solution: [{ type: "p", text: "Die 300.000 € Forschungskosten unterliegen einem strikten Aktivierungsverbot und sind sofort als Aufwand zu verbuchen. Für die 250.000 € Entwicklungskosten besteht dagegen ein Aktivierungswahlrecht nach § 248 Abs. 2 S. 1 HGB — das Unternehmen kann sie als selbst geschaffenen immateriellen Vermögensgegenstand des Anlagevermögens aktivieren oder ebenfalls sofort als Aufwand verbuchen." }]
      },
      {
        id: "bilanzierung-av-bewertungsgrundlagen-e5",
        prompt: "Erläutern Sie den Unterschied zwischen dem gemilderten und dem strengen Niederstwertprinzip und ordnen Sie jeweils zu, für welche Vermögensart es gilt.",
        solution: [{ type: "p", text: "Das gemilderte Niederstwertprinzip gilt für das (Finanz-)Anlagevermögen: Eine außerplanmäßige Abschreibung ist nur bei einer voraussichtlich dauernden Wertminderung Pflicht; bei einer nur vorübergehenden Wertminderung besteht (außer bei Finanzanlagen) kein Abschreibungsgebot, teils sogar ein Abschreibungsverbot. Das strenge Niederstwertprinzip gilt für das Umlaufvermögen: Hier ist jede Wertminderung am Abschlussstichtag zu berücksichtigen, unabhängig davon, ob sie dauerhaft oder nur vorübergehend ist." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Was sind laut § 253 Abs. 1 Satz 1 HGB Ausgangswert und Wertobergrenze für die Bewertung des Anlagevermögens?", options: ["Der Marktwert am Bilanzstichtag", "Die Anschaffungs- oder Herstellungskosten (AHK)", "Der Wiederbeschaffungswert", "Der geschätzte Veräußerungswert"], correctIndex: 1, explanation: "Die AHK bilden nach § 253 Abs. 1 S. 1 HGB den Ausgangswert und die absolute Wertobergrenze der Bewertung." },
      { id: "q2", question: "Wodurch unterscheiden sich Anschaffungskosten von Herstellungskosten?", options: ["Anschaffungskosten fallen beim Erwerb von Dritten an, Herstellungskosten bei der Eigenerstellung im Betrieb", "Es gibt keinen inhaltlichen Unterschied", "Herstellungskosten gelten nur für immaterielle Vermögensgegenstände", "Anschaffungskosten dürfen nie aktiviert werden"], correctIndex: 0, explanation: "AK entstehen beim Fremderwerb, HK bei der Eigenherstellung eines Vermögensgegenstandes." },
      { id: "q3", question: "Welche der folgenden Positionen ist eine Anschaffungspreisminderung?", options: ["Skonto", "Grunderwerbsteuer", "Notargebühren", "Transportkosten"], correctIndex: 0, explanation: "Skonto (wie auch Rabatt und Boni) mindert den Anschaffungspreis; die anderen genannten Positionen sind Anschaffungsnebenkosten." },
      { id: "q4", question: "Zu welchen Anschaffungskosten zählen die Abbruchkosten für ein in Abbruchabsicht mit erworbenes Altgebäude?", options: ["Zu den Anschaffungskosten des Grundstücks", "Sie werden sofort erfolgswirksam als außerordentlicher Aufwand verbucht", "Zu den Herstellungskosten des neuen Gebäudes", "Sie mindern das Eigenkapital direkt"], correctIndex: 0, explanation: "Da das Altgebäude von Anfang an beseitigt werden sollte, gehören die Abbruchkosten zu den Anschaffungsnebenkosten des Grundstücks." },
      { id: "q5", question: "Wie sind selbst geschaffene Entwicklungskosten handelsrechtlich zu behandeln?", options: ["Aktivierungspflicht", "Aktivierungsverbot", "Aktivierungswahlrecht nach § 248 Abs. 2 S. 1 HGB", "Sie dürfen nur in der Steuerbilanz erfasst werden"], correctIndex: 2, explanation: "Für selbst geschaffene immaterielle Vermögensgegenstände wie Entwicklungskosten besteht ein Aktivierungswahlrecht." },
      { id: "q6", question: "Wie sind reine Forschungskosten zu behandeln, wenn sie sich von Entwicklungskosten trennen lassen?", options: ["Aktivierungswahlrecht wie bei Entwicklungskosten", "Aktivierungspflicht", "Aktivierungsverbot — sofortiger Aufwand", "Verteilung über 15 Jahre wie beim GoF"], correctIndex: 2, explanation: "Forschungskosten unterliegen einem Aktivierungsverbot und sind sofort als Aufwand zu erfassen." },
      { id: "q7", question: "Welches Prinzip gilt beim Anlagevermögen für die Bewertung von Vermögensgegenständen (im Gegensatz zum Höchstwertprinzip bei Schulden)?", options: ["Das Niederstwertprinzip", "Das Vollständigkeitsprinzip", "Das Stetigkeitsprinzip", "Das Fälligkeitsprinzip"], correctIndex: 0, explanation: "Für Vermögensgegenstände gilt das (beim Anlagevermögen gemilderte) Niederstwertprinzip, für Schulden das Höchstwertprinzip." },
      { id: "q8", question: "Was besagt das Imparitätsprinzip?", options: ["Gewinne und Verluste werden immer gleich behandelt", "Unrealisierte Verluste sind bereits bei Erkennbarkeit zu berücksichtigen, unrealisierte Gewinne nicht", "Nur realisierte Verluste dürfen erfasst werden", "Es betrifft ausschließlich das Eigenkapital"], correctIndex: 1, explanation: "Das Imparitätsprinzip verlangt eine ungleiche ('imparitätische') Behandlung: Verluste antizipieren, Gewinne erst bei Realisation ausweisen." },
      { id: "q9", question: "Entspricht der Restbuchwert eines Vermögensgegenstandes immer seinem tatsächlichen Wert?", options: ["Ja, per Definition immer", "Nein, der Restbuchwert ist eine bilanzrechtliche Rechengröße und kann vom tatsächlichen Wert abweichen", "Nur bei Finanzanlagen ja", "Nur im ersten Jahr der Nutzung"], correctIndex: 1, explanation: "Der Restbuchwert (AHK abzüglich kumulierter Abschreibungen) ist eine rechnerische Größe und muss nicht dem tatsächlichen Markt- oder Nutzwert entsprechen." },
      { id: "q10", question: "Welches Niederstwertprinzip gilt für das Umlaufvermögen?", options: ["Kein Niederstwertprinzip", "Das gemilderte Niederstwertprinzip", "Das strenge Niederstwertprinzip", "Nur das Höchstwertprinzip"], correctIndex: 2, explanation: "Beim Umlaufvermögen gilt das strenge Niederstwertprinzip — jede Wertminderung, auch eine vorübergehende, ist zu berücksichtigen." }
    ]
  },
  {
    id: "bilanzierung-av-planmaessige-abschreibung",
    chapter: 3,
    order: 3,
    title: "Planmäßige Abschreibung des Anlagevermögens",
    icon: "📉",
    summary: "Wie die lineare, die geometrisch-degressive und die leistungsbezogene Abschreibung funktionieren und berechnet werden.",
    explanation: [
      { type: "p", text: "Planmäßige Abschreibung bedeutet, den normalen Werteverzehr eines abnutzbaren Vermögensgegenstandes des Anlagevermögens festzuhalten, indem seine Anschaffungs- oder Herstellungskosten nach einem im Voraus festgelegten Plan über die voraussichtliche Nutzungsdauer verteilt und durch Aufwandsbuchung vermindert werden (§ 253 Abs. 3 S. 1 und 2 HGB; steuerrechtlich als Absetzung für Abnutzung, AfA, § 7 Abs. 1 EStG)." },
      { type: "list", items: [
        "Abschreibungsursachen lassen sich in drei Gruppen einteilen:",
        "Technische Ursachen: normaler nutzungs- oder zeitbedingter Verschleiß, Katastrophenverschleiß, Substanzabbau",
        "Wirtschaftliche Ursachen: technische Überholung, sinkende Wiederbeschaffungskosten, wirtschaftliche Überholung",
        "Rechtliche Ursachen: zeitlicher Ablauf von Verträgen oder Schutzrechten (z. B. Patenten, Lizenzen)"
      ]},
      { type: "p", text: "Bei der linearen Abschreibung wird das Abschreibungsvolumen (die AHK) in gleich hohen Jahresbeträgen über die gesamte Nutzungsdauer verteilt — der Buchwert sinkt gleichmäßig. Sie ist die steuerrechtlich zulässige Regelmethode für abnutzbare Wirtschaftsgüter des Anlagevermögens." },
      { type: "formula", tex: "a_i = \\dfrac{\\text{AHK}}{n}" },
      { type: "p", text: "Bei der geometrisch-degressiven Abschreibung wird jährlich ein fester Prozentsatz p vom jeweiligen Restbuchwert (Buchwert des Vorjahres) abgeschrieben — die Jahresbeträge fallen von Jahr zu Jahr, ohne den Buchwert je vollständig auf null zu bringen. Diese Methode war steuerlich lange unzulässig, wurde aber ab Mitte 2025 für bestimmte bewegliche Wirtschaftsgüter (u. a. Elektrofahrzeuge) befristet mit Höchstsatzgrenzen wieder zugelassen; handelsrechtlich ist sie zulässig, sofern sie dem tatsächlichen Werteverzehr entspricht. Da der Buchwert nie vollständig auf null sinkt, wird üblicherweise zu einem bestimmten Zeitpunkt zur linearen Abschreibung des Restwertes über die Restnutzungsdauer übergegangen — dieser Wechsel ist, anders als ein beliebiger Methodenwechsel (der dem Grundsatz der Bewertungsstetigkeit widerspräche), systemimmanent vorgesehen." },
      { type: "formula", tex: "a_i = BW_{i-1} \\cdot \\dfrac{p}{100}, \\quad BW_i = BW_{i-1} - a_i, \\quad i_{\\text{Wechsel}} = n - \\dfrac{100}{p} + 1" },
      { type: "p", text: "Bei der Abschreibung nach Maßgabe der Leistung (leistungsbezogene Abschreibung) wird der Jahresbetrag proportional zur tatsächlichen Nutzung/Leistung eines Wirtschaftsguts im jeweiligen Jahr (JNᵢ) im Verhältnis zum insgesamt geschätzten Nutzungspotential (GNP, z. B. Gesamtfahrleistung) ermittelt. Voraussetzung ist u. a., dass die Leistungseinheiten nachgewiesen werden können (§ 7 Abs. 1 EStG)." },
      { type: "formula", tex: "a_i = \\dfrac{JN_i}{GNP} \\cdot \\text{AHK}" }
    ],
    exercises: [
      {
        id: "bilanzierung-av-planmaessige-abschreibung-e1",
        prompt: "Eine Maschine wird für 40.000 € angeschafft, die Nutzungsdauer beträgt 8 Jahre. Berechnen Sie den jährlichen linearen Abschreibungsbetrag sowie den Buchwert nach 3 Jahren.",
        solution: [{ type: "p", text: "Jährlicher Abschreibungsbetrag: a = AHK/n = 40.000 € / 8 = 5.000 € pro Jahr. Nach 3 Jahren kumulierte Abschreibung: 3 · 5.000 € = 15.000 €. Buchwert nach 3 Jahren: 40.000 € − 15.000 € = 25.000 €." }]
      },
      {
        id: "bilanzierung-av-planmaessige-abschreibung-e2",
        prompt: "Ein Wirtschaftsgut mit AHK von 50.000 € wird geometrisch-degressiv mit einem Satz von 20 % abgeschrieben. Berechnen Sie Abschreibungsbetrag und Buchwert für die ersten drei Jahre.",
        solution: [{ type: "p", text: "Jahr 1: a₁ = 50.000 € · 0,20 = 10.000 €, Buchwert = 40.000 €. Jahr 2: a₂ = 40.000 € · 0,20 = 8.000 €, Buchwert = 32.000 €. Jahr 3: a₃ = 32.000 € · 0,20 = 6.400 €, Buchwert = 25.600 €. Die Jahresbeträge fallen von Jahr zu Jahr, da sich stets auf den (sinkenden) Restbuchwert bezogen wird." }]
      },
      {
        id: "bilanzierung-av-planmaessige-abschreibung-e3",
        prompt: "Ein Wirtschaftsgut mit einer Nutzungsdauer von 10 Jahren wird geometrisch-degressiv mit 20 % abgeschrieben. Ab welchem Jahr ist der Übergang zur linearen Abschreibung des Restbuchwertes günstiger?",
        solution: [{ type: "p", text: "Mit der Formel i = n − 100/p + 1 ergibt sich: i = 10 − 100/20 + 1 = 10 − 5 + 1 = 6. Ab dem 6. Jahr führt die lineare Verteilung des dann verbleibenden Restbuchwerts über die verbleibende Restnutzungsdauer zu einem höheren (oder mindestens gleich hohen) jährlichen Abschreibungsbetrag als eine Fortführung der degressiven Methode — deshalb wird üblicherweise zu diesem Zeitpunkt gewechselt." }]
      },
      {
        id: "bilanzierung-av-planmaessige-abschreibung-e4",
        prompt: "Ein Fahrzeug mit AHK von 20.000 € hat ein geschätztes Gesamtnutzungspotential von 100.000 Einheiten. Im ersten Nutzungsjahr werden 15.000 Einheiten in Anspruch genommen. Wie hoch ist die leistungsbezogene Abschreibung im ersten Jahr?",
        solution: [{ type: "p", text: "a₁ = (JN₁ / GNP) · AHK = (15.000 / 100.000) · 20.000 € = 0,15 · 20.000 € = 3.000 €." }]
      },
      {
        id: "bilanzierung-av-planmaessige-abschreibung-e5",
        prompt: "Darf ein Unternehmen die einmal gewählte Abschreibungsmethode für ein Wirtschaftsgut während der Nutzungsdauer beliebig wechseln?",
        solution: [{ type: "p", text: "Nein. Der Grundsatz der Bewertungsstetigkeit (§ 252 Abs. 1 Nr. 6 HGB) verlangt grundsätzlich die Beibehaltung der einmal gewählten Methode; ein Wechsel ist nur bei sachlich begründeten Ausnahmefällen zulässig. Eine im System selbst vorgesehene Ausnahme ist der Übergang von der geometrisch-degressiven zur linearen Abschreibung des Restwertes — der umgekehrte Wechsel (von linear zu degressiv) ist dagegen nicht vorgesehen." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Was versteht man unter dem Begriff 'Abschreibung' im bilanzrechtlichen Sinn?", options: ["Die Erhöhung des Eigenkapitals durch Gewinnthesaurierung", "Die systematische Erfassung des Werteverzehrs eines Vermögensgegenstandes durch Verminderung seines Buchwerts", "Die Bezahlung offener Verbindlichkeiten", "Die Ausschüttung von Dividenden an Aktionäre"], correctIndex: 1, explanation: "Abschreibung erfasst den Werteverzehr eines Vermögensgegenstandes, indem der Buchwert planmäßig oder außerplanmäßig gemindert wird." },
      { id: "q2", question: "Wie verläuft der jährliche Abschreibungsbetrag bei der linearen Abschreibung?", options: ["Er steigt von Jahr zu Jahr an", "Er bleibt über die gesamte Nutzungsdauer konstant", "Er fällt geometrisch mit einem festen Prozentsatz", "Er richtet sich ausschließlich nach der Leistung"], correctIndex: 1, explanation: "Bei linearer Abschreibung ist der Jahresbetrag AHK/n über die gesamte Nutzungsdauer konstant." },
      { id: "q3", question: "Wie unterscheidet sich der Restbuchwertverlauf bei der geometrisch-degressiven im Vergleich zur linearen Abschreibung?", options: ["Der Buchwert sinkt anfangs schneller und die Jahresbeträge fallen von Jahr zu Jahr", "Der Buchwert bleibt konstant", "Der Buchwert steigt zunächst an", "Es gibt keinen Unterschied zur linearen Methode"], correctIndex: 0, explanation: "Bei degressiver Abschreibung wird zunächst stärker abgeschrieben, die Jahresbeträge fallen dann kontinuierlich mit dem sinkenden Restbuchwert." },
      { id: "q4", question: "Was versteht man unter der Methodenfreiheit bei der Abschreibung, und wie ist sie beschränkt?", options: ["Es gibt keinerlei Beschränkungen bei der Methodenwahl", "Innerhalb bestimmter gesetzlicher Grenzen darf grundsätzlich frei zwischen zulässigen Methoden gewählt werden, ein späterer beliebiger Wechsel ist aber durch den Grundsatz der Bewertungsstetigkeit eingeschränkt", "Methodenfreiheit gilt nur für immaterielle Vermögensgegenstände", "Die Methode muss jährlich neu ausgelost werden"], correctIndex: 1, explanation: "Die Wahl der Methode ist zunächst frei (innerhalb der zulässigen Verfahren), ein späterer Wechsel unterliegt jedoch dem Stetigkeitsgebot." },
      { id: "q5", question: "Was ist unter planmäßiger Abschreibung zu verstehen?", options: ["Eine einmalige, außerordentliche Wertminderung", "Die Verteilung der AHK nach einem im Voraus festgelegten Plan über die voraussichtliche Nutzungsdauer", "Die vollständige Sofortabschreibung im Anschaffungsjahr", "Eine rein steuerlich motivierte Sonderabschreibung"], correctIndex: 1, explanation: "Planmäßige Abschreibung folgt einem im Voraus festgelegten Plan über die Nutzungsdauer und erfasst den normalen Werteverzehr." },
      { id: "q6", question: "Ist ein Wechsel der Abschreibungsmethode beliebig möglich?", options: ["Ja, jederzeit ohne Begründung", "Nein, grundsätzlich gilt der Grundsatz der Bewertungsstetigkeit; ein Wechsel bedarf einer sachlichen Begründung", "Nur am Ende der Nutzungsdauer", "Nur bei immateriellen Vermögensgegenständen"], correctIndex: 1, explanation: "Der Grundsatz der Bewertungsstetigkeit (§ 252 Abs. 1 Nr. 6 HGB) schränkt einen beliebigen Methodenwechsel ein." },
      { id: "q7", question: "Welche Kombination zweier Abschreibungsmethoden ist systemimmanent vorgesehen?", options: ["Der Übergang von der geometrisch-degressiven zur linearen Abschreibung des Restwertes", "Der gleichzeitige Einsatz von linearer und leistungsbezogener Abschreibung auf denselben Betrag", "Der Wechsel von linear zu degressiv", "Es gibt keine vorgesehene Kombination"], correctIndex: 0, explanation: "Der Übergang von degressiv zu linear (nicht umgekehrt) ist eine im System vorgesehene, gängige Kombination." },
      { id: "q8", question: "Können Abschreibungen auch rechtlich bedingt sein (neben technischen und wirtschaftlichen Ursachen)?", options: ["Nein, nur technische und wirtschaftliche Ursachen zählen", "Ja, z. B. durch den zeitlichen Ablauf von Verträgen oder Schutzrechten wie Patenten und Lizenzen", "Rechtliche Ursachen betreffen nur das Umlaufvermögen", "Rechtliche Ursachen führen nie zu einer Abschreibung"], correctIndex: 1, explanation: "Der Ablauf von Verträgen, Patenten oder Lizenzen ist eine typische rechtliche Abschreibungsursache." },
      { id: "q9", question: "Welche Abschreibungsart führt zu gleich hohen planmäßigen Abschreibungsbeträgen über die gesamte Nutzungsdauer?", options: ["Die progressive Abschreibung", "Die geometrisch-degressive Abschreibung", "Die lineare Abschreibung", "Die leistungsbezogene Abschreibung"], correctIndex: 2, explanation: "Nur die lineare Abschreibung erzeugt konstante Jahresbeträge (AHK/n)." },
      { id: "q10", question: "Welche zusätzliche Voraussetzung gilt für die steuerliche Zulässigkeit der Abschreibung nach Maßgabe der Leistung?", options: ["Sie ist ausschließlich bei immateriellen Vermögensgegenständen zulässig", "Es muss sich um ein bewegliches Wirtschaftsgut des Anlagevermögens handeln und die Leistungseinheiten müssen nachgewiesen werden können", "Sie darf nur bei Gebäuden angewendet werden", "Sie ist steuerlich generell nicht zugelassen"], correctIndex: 1, explanation: "§ 7 Abs. 1 EStG verlangt ein bewegliches Wirtschaftsgut des Anlagevermögens und einen Nachweis der Leistungseinheiten." }
    ]
  },
  {
    id: "bilanzierung-av-ausserplanmaessige-abschreibung",
    chapter: 3,
    order: 4,
    title: "Außerplanmäßige Abschreibung, Zuschreibung und Geringwertige Wirtschaftsgüter",
    icon: "🔧",
    summary: "Wann außerplanmäßig abgeschrieben und zugeschrieben werden muss bzw. darf, und welche besonderen Regeln für geringwertige Wirtschaftsgüter (GWG) gelten.",
    explanation: [
      { type: "p", text: "Außerplanmäßige Abschreibungen erfassen Wertminderungen, die über den normalen, planmäßigen Werteverzehr hinausgehen. Typische Ursachen sind Katastrophenverschleiß, versteckte Mängel, erhöhte Inanspruchnahme, unterlassene Instandhaltung, Abbruch, technischer Fortschritt, stark sinkende Rentabilität oder ein voraussichtlich dauerhaftes Fallen der Wiederbeschaffungspreise." },
      { type: "list", items: [
        "Die handelsrechtliche Pflicht bzw. das Wahlrecht zur außerplanmäßigen Abschreibung hängt von Art des Vermögensgegenstandes und Dauer der Wertminderung ab (§ 253 Abs. 3 HGB):",
        "Bei voraussichtlich dauernder Wertminderung: Abschreibungspflicht (§ 253 Abs. 3 S. 5 HGB) — unabhängig davon, ob abnutzbares oder nicht abnutzbares Anlagevermögen betroffen ist",
        "Bei voraussichtlich nicht dauernder (vorübergehender) Wertminderung: nur bei Finanzanlagen besteht ein Abschreibungswahlrecht (§ 253 Abs. 3 S. 6 HGB); bei anderem Anlagevermögen ist eine Abschreibung wegen nur vorübergehender Wertminderung nicht zulässig"
      ]},
      { type: "p", text: "Fällt der Grund für eine vorgenommene außerplanmäßige Abschreibung später weg, gilt grundsätzlich ein Wertaufholungsgebot: Der Vermögensgegenstand ist bis maximal zu den (fortgeführten) Anschaffungs- oder Herstellungskosten zuzuschreiben (§ 253 Abs. 5 HGB). Eine wichtige Ausnahme bildet der derivative Geschäfts- oder Firmenwert, für den ein Wertaufholungsverbot gilt (§ 253 Abs. 5 S. 2 HGB) — einmal abgeschrieben, darf er also nicht wieder höher angesetzt werden." },
      { type: "p", text: "Geringwertige Wirtschaftsgüter (GWG) sind eine Vereinfachungsregel für kleine, selbständig nutzbare Anlagegüter. Handelsrechtlich (und steuerrechtlich bei Überschusseinkünften) gilt ein Wirtschaftsgut als GWG, wenn es (1) ein abnutzbares, bewegliches Wirtschaftsgut des Anlagevermögens ist, (2) selbständig nutzbar und bewertbar ist und (3) netto-Anschaffungs- oder Herstellungskosten von höchstens 800 € hat. Für ein GWG ist die volle Abschreibung (Sofortaufwand) im Zugangsjahr möglich, andernfalls erfolgt die reguläre Abschreibung über die Nutzungsdauer." },
      { type: "list", items: [
        "Für Gewinneinkünfte gelten steuerrechtlich drei gestaffelte Wertgrenzen (§ 6 Abs. 2 und Abs. 2a EStG):",
        "Netto-AHK bis 250 €: Sofortabschreibung oder AfA nach gewöhnlicher Nutzungsdauer",
        "Netto-AHK 250,01 € bis 800 €: Sofortabschreibung, AfA nach Nutzungsdauer oder Sammelposten mit linearer 'Poolabschreibung' über 5 Jahre",
        "Netto-AHK 800,01 € bis 1.000 €: Sammelposten mit linearer Abschreibung über 5 Jahre oder AfA nach gewöhnlicher Nutzungsdauer",
        "Die Wahlrechte in den beiden letzten Stufen müssen für alle Wirtschaftsgüter eines Wirtschaftsjahres einheitlich ausgeübt werden; für GWG ab 250,01 € besteht außerdem eine besondere Aufzeichnungspflicht"
      ]},
      { type: "p", text: "Anlagegüter mit netto-AHK bis 250 € (sog. kleinwertige Wirtschaftsgüter) sowie kurzlebige Anlagegüter mit einer Nutzungsdauer von in der Regel nicht mehr als einem Jahr müssen gar nicht erst als Anlagevermögen aktiviert werden, sondern dürfen sofort als Aufwand verbucht werden." },
      { type: "p", text: "Ein Sonderfall sind digitale Wirtschaftsgüter (z. B. Computerhardware und Software zur Dateneingabe/-verarbeitung): Steuerrechtlich wird ihnen seit einem BMF-Schreiben von 2021 eine Nutzungsdauer von einem Jahr zugestanden, was faktisch einer Sofortabschreibung im Anschaffungsjahr entspricht. Handelsrechtlich gilt dies (außer bei GWG) nicht — dort ist weiterhin die tatsächliche Nutzungsdauer laut AfA-Tabelle maßgeblich." }
    ],
    exercises: [
      {
        id: "bilanzierung-av-ausserplanmaessige-abschreibung-e1",
        prompt: "Ein unbebautes Grundstück (Anschaffungskosten 150.000 €) wurde wegen des geplanten Baus einer Kläranlage in der Nähe außerplanmäßig auf 100.000 € abgeschrieben. Die Pläne werden später vollständig aufgegeben, die Wertminderung ist entfallen. Wie ist handelsrechtlich zu verfahren?",
        solution: [{ type: "p", text: "Da der Grund für die außerplanmäßige Abschreibung weggefallen ist, greift das Wertaufholungsgebot (§ 253 Abs. 5 HGB). Das Grundstück ist zuzuschreiben, und zwar bis maximal zu den ursprünglichen Anschaffungskosten von 150.000 € (Wertobergrenze). Eine Zuschreibung über die ursprünglichen AHK hinaus ist nicht zulässig." }]
      },
      {
        id: "bilanzierung-av-ausserplanmaessige-abschreibung-e2",
        prompt: "Ein Unternehmen kauft einen Bürostuhl für netto 180 €. Wie ist dieser bilanziell zu behandeln?",
        solution: [{ type: "p", text: "Der Bürostuhl ist ein abnutzbares, selbständig nutzbares bewegliches Wirtschaftsgut des Anlagevermögens mit netto-AHK unter 250 €. Er zählt damit zu den kleinwertigen bzw. GWG-fähigen Wirtschaftsgütern: Steuerrechtlich besteht ein Wahlrecht zwischen Sofortabschreibung im Zugangsjahr oder regulärer AfA nach der Nutzungsdauer. In der Praxis wird meist die Sofortabschreibung gewählt, da sie unter der 250-€-Grenze ohne besondere Aufzeichnungspflicht möglich ist." }]
      },
      {
        id: "bilanzierung-av-ausserplanmaessige-abschreibung-e3",
        prompt: "Ein Wirtschaftsgut kostet netto 500 € (also zwischen 250,01 € und 800 €). Welche steuerlichen Wahlrechte bestehen, und was ist dabei zu beachten?",
        solution: [{ type: "p", text: "Es besteht die Wahl zwischen (1) Sofortabschreibung im Jahr der Anschaffung, (2) regulärer AfA nach der gewöhnlichen Nutzungsdauer oder (3) Aufnahme in einen jahresbezogenen Sammelposten mit linearer Abschreibung über 5 Jahre ('Poolabschreibung'). Zu beachten ist, dass dieses Wahlrecht für alle Wirtschaftsgüter dieser Wertklasse in einem Wirtschaftsjahr einheitlich ausgeübt werden muss, und dass für GWG ab 250,01 € eine besondere Aufzeichnungspflicht gilt (§ 6 Abs. 2 S. 4 EStG)." }]
      },
      {
        id: "bilanzierung-av-ausserplanmaessige-abschreibung-e4",
        prompt: "Eine Produktionsanlage mit Anschaffungskosten von 300.000 € wurde im Jahr x1 wegen einer vermeintlich bahnbrechenden Konkurrenz-Erfindung außerplanmäßig auf 100.000 € abgeschrieben (angenommene dauernde Wertminderung). Ein Jahr später stellt sich heraus, dass die Meldung über die Erfindung falsch war. Wie ist zu verfahren?",
        solution: [{ type: "p", text: "Da sich die vermeintlich dauernde Wertminderung als nicht zutreffend erweist und der Grund für die außerplanmäßige Abschreibung damit entfallen ist, gilt sowohl handels- als auch grundsätzlich steuerrechtlich (bei entsprechender Teilwertabschreibung nach § 6 Abs. 1 Nr. 1 EStG) das Wertaufholungsgebot: Die Anlage ist zuzuschreiben, maximal bis zu dem fortgeführten Buchwert, der sich ohne die außerplanmäßige Abschreibung ergeben hätte (Obergrenze: fortgeführte Anschaffungskosten)." }]
      },
      {
        id: "bilanzierung-av-ausserplanmaessige-abschreibung-e5",
        prompt: "Ein Unternehmen kauft im Jahr x1 einen Computer für netto 1.200 €. Wie ist die Abschreibung im Steuerrecht und im Handelsrecht zu behandeln?",
        solution: [{ type: "p", text: "Steuerrechtlich wird digitalen Wirtschaftsgütern wie Computerhardware seit dem BMF-Schreiben vom 22.2.2022 eine Nutzungsdauer von einem Jahr zugestanden, sodass der Computer im Jahr der Anschaffung faktisch vollständig abgeschrieben werden kann. Handelsrechtlich greift diese Sonderregel nicht (der Computer ist mit netto 1.200 € auch kein GWG mehr), sodass dort die reguläre planmäßige Abschreibung über die tatsächliche, laut AfA-Tabelle übliche Nutzungsdauer vorzunehmen ist." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Wann besteht handelsrechtlich eine Pflicht zur außerplanmäßigen Abschreibung des Anlagevermögens?", options: ["Nur bei Finanzanlagen", "Bei jeder, auch nur vorübergehenden Wertminderung", "Bei einer voraussichtlich dauernden Wertminderung (§ 253 Abs. 3 S. 5 HGB)", "Nur am Ende der Nutzungsdauer"], correctIndex: 2, explanation: "Bei voraussichtlich dauernder Wertminderung besteht unabhängig von der Vermögensart eine Abschreibungspflicht." },
      { id: "q2", question: "Bei welcher Art von Anlagevermögen besteht auch bei nur vorübergehender Wertminderung ein Abschreibungswahlrecht?", options: ["Bei Sachanlagen", "Bei immateriellen Vermögensgegenständen", "Bei Finanzanlagen (§ 253 Abs. 3 S. 6 HGB)", "Bei keiner Art von Anlagevermögen"], correctIndex: 2, explanation: "Nur bei Finanzanlagen ist eine außerplanmäßige Abschreibung auch bei einer voraussichtlich nicht dauernden Wertminderung zulässig (Wahlrecht)." },
      { id: "q3", question: "Was ist zu tun, wenn der Grund für eine außerplanmäßige Abschreibung später wegfällt?", options: ["Es passiert nichts, die Abschreibung bleibt endgültig bestehen", "Der Vermögensgegenstand ist grundsätzlich bis max. zu den fortgeführten AHK zuzuschreiben (Wertaufholungsgebot)", "Der Vermögensgegenstand wird sofort aus der Bilanz entfernt", "Es entsteht automatisch ein neuer Geschäfts- oder Firmenwert"], correctIndex: 1, explanation: "§ 253 Abs. 5 HGB schreibt grundsätzlich eine Zuschreibung bis maximal zu den fortgeführten AHK vor." },
      { id: "q4", question: "Für welchen Vermögensgegenstand gilt ausnahmsweise ein Wertaufholungsverbot?", options: ["Für Grundstücke", "Für den derivativen Geschäfts- oder Firmenwert", "Für alle Finanzanlagen", "Für geringwertige Wirtschaftsgüter"], correctIndex: 1, explanation: "§ 253 Abs. 5 S. 2 HGB sieht für den derivativen GoF ein Wertaufholungsverbot vor." },
      { id: "q5", question: "Welche Kriterien muss ein Wirtschaftsgut erfüllen, um als geringwertiges Wirtschaftsgut (GWG) zu gelten?", options: ["Es muss ein Umlaufvermögensgegenstand sein", "Abnutzbares, bewegliches, selbständig nutzbares Wirtschaftsgut des Anlagevermögens mit netto-AHK bis 800 €", "Es muss zwingend immateriell sein", "Es darf keine Anschaffungsnebenkosten haben"], correctIndex: 1, explanation: "GWG sind abnutzbare, bewegliche, selbständig nutzbare Wirtschaftsgüter des AV mit netto-AHK bis 800 €." },
      { id: "q6", question: "Welches Wahlrecht besteht bei einem GWG mit netto-AHK zwischen 250,01 € und 800 €?", options: ["Nur Sofortabschreibung, kein anderes Wahlrecht", "Sofortabschreibung, AfA nach Nutzungsdauer, oder Sammelposten mit linearer Abschreibung über 5 Jahre", "Nur Sammelposten über 10 Jahre", "Es besteht überhaupt kein Wahlrecht"], correctIndex: 1, explanation: "In dieser Wertklasse besteht ein dreifaches Wahlrecht: Sofortabschreibung, reguläre AfA oder Poolabschreibung über 5 Jahre." },
      { id: "q7", question: "Welche Anlagegüter müssen gar nicht als Anlagevermögen aktiviert, sondern dürfen sofort als Aufwand verbucht werden?", options: ["Alle Wirtschaftsgüter über 1.000 € netto", "Anlagegüter mit netto-AHK bis 250 € (kleinwertige WG) sowie kurzlebige Anlagegüter mit ND i. d. R. nicht länger als ein Jahr", "Nur Finanzanlagen", "Nur immaterielle Vermögensgegenstände"], correctIndex: 1, explanation: "Kleinwertige WG bis 250 € und kurzlebige Anlagegüter dürfen sofort als Aufwand verbucht werden, ohne überhaupt aktiviert zu werden." },
      { id: "q8", question: "Nennen Sie ein Beispiel für eine Ursache einer außerplanmäßigen Abschreibung.", options: ["Regelmäßige, planbare Alterung eines Gebäudes über die Nutzungsdauer", "Katastrophenverschleiß, z. B. durch ein unvorhergesehenes Schadensereignis", "Der Ablauf der geplanten Nutzungsdauer laut AfA-Tabelle", "Eine bewusst gewählte lineare Abschreibungsmethode"], correctIndex: 1, explanation: "Katastrophenverschleiß, versteckte Mängel oder ein dauerhaftes Fallen der Wiederbeschaffungspreise sind typische Ursachen für außerplanmäßige Abschreibungen." },
      { id: "q9", question: "Wie werden digitale Wirtschaftsgüter (z. B. Computerhardware) steuerrechtlich seit dem BMF-Schreiben von 2021/2022 behandelt?", options: ["Es wird ihnen eine Nutzungsdauer von einem Jahr zugestanden, was faktisch einer Sofortabschreibung entspricht", "Sie dürfen grundsätzlich nie abgeschrieben werden", "Sie unterliegen einer Mindestnutzungsdauer von 20 Jahren", "Sie gelten automatisch als originärer Geschäfts- oder Firmenwert"], correctIndex: 0, explanation: "Die Finanzverwaltung erkennt für digitale Wirtschaftsgüter steuerlich eine Nutzungsdauer von einem Jahr an." },
      { id: "q10", question: "Gilt die steuerliche Sonderregel zur Nutzungsdauer digitaler Wirtschaftsgüter auch handelsrechtlich?", options: ["Ja, uneingeschränkt", "Nein, handelsrechtlich ist (außer bei GWG) weiterhin die tatsächliche Nutzungsdauer laut AfA-Tabelle maßgeblich", "Nur bei Finanzanlagen", "Nur bei Gebäuden"], correctIndex: 1, explanation: "Handelsrechtlich gilt weiterhin die reguläre, tatsächliche Nutzungsdauer — die steuerliche Sonderregel wirkt sich dort nicht aus." }
    ]
  }
];
