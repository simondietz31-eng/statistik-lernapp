const VWL_CHAPTER12_TOPICS = [
  {
    id: "vwl-uebung1-denken-wie-ein-volkswirt",
    chapter: 12,
    order: 1,
    title: "Übung 1: Denken wie ein Volkswirt",
    icon: "📝",
    summary: "Übungsaufgaben zur wissenschaftlichen Methode, zur Produktionsmöglichkeitenkurve am Beispiel von Raketen und Brot, und zur Schwierigkeit, Kausalität in den Wirtschaftswissenschaften nachzuweisen.",
    explanation: [
      { type: "p", text: "Diese Übung vertieft die Inhalte aus Kapitel 1 (Denken wie ein Volkswirt) anhand konkreter Aufgaben: die Rolle von Experimenten und Daten in der VWL, die Konstruktion einer Produktionsmöglichkeitenkurve für ein Land, das Raketen und Brot produziert, sowie die grundsätzliche Schwierigkeit, in den Wirtschafts- und Sozialwissenschaften kausale Effekte sauber nachzuweisen." }
    ],
    exercises: [
      {
        id: "vwl-uebung1-e1",
        prompt: "Inwiefern ist Volkswirtschaftslehre eine Wissenschaft? Was unterscheidet sie von einer Naturwissenschaft?",
        solution: [{ type: "p", text: "Die VWL ist eine Wissenschaft, weil sie nach der wissenschaftlichen Methode arbeitet: Beobachtung, Modellbildung, empirischer Test und gegebenenfalls Revision der Theorie (Falsifikation). Der zentrale Unterschied zu Naturwissenschaften ist das Erkenntnisobjekt: In der VWL ist es der Mensch mit freiem Handlungsspielraum, dessen Verhalten nicht vollständig vorhersehbar ist, sodass sich keine strengen 'Naturgesetze' formulieren lassen, wie sie etwa in der Physik gelten. Zudem sind kontrollierte Experimente in der VWL seltener möglich als in vielen Naturwissenschaften, weshalb Ökonomen stärker auf Beobachtungsdaten und natürliche Experimente angewiesen sind." }]
      },
      {
        id: "vwl-uebung1-e2",
        prompt: "Welche Rolle spielen Experimente in der Ökonomie?",
        solution: [{ type: "p", text: "Experimente spielen in der Ökonomie eine im Vergleich zu Naturwissenschaften geringere Rolle. Man unterscheidet Laborexperimente (kontrollierte Versuche mit Probanden, z. B. in der Verhaltensökonomik), Feldexperimente (seltener, z. B. kontrollierte Interventionsstudien in realen Märkten) und natürliche Experimente (seltene, durch historischen Zufall entstehende Situationen, die sich wie ein Experiment auswerten lassen, z. B. eine plötzliche Politikänderung, die zwei ansonsten ähnliche Regionen unterschiedlich betrifft)." }]
      },
      {
        id: "vwl-uebung1-e3",
        prompt: "Stellen Sie sich ein Land vor, in dem Militärgüter ('Raketen') und Konsumgüter ('Brot') hergestellt werden. Zeichnen Sie gedanklich die Produktionsmöglichkeitenkurve und markieren Sie: einen nicht erreichbaren Punkt, einen ineffizienten Punkt, sowie je einen von 'Falken' und 'Tauben' bevorzugten Punkt auf der Kurve.",
        solution: [{ type: "p", text: "Die Produktionsmöglichkeitenkurve verläuft fallend zwischen der maximal möglichen Raketenmenge (bei null Brotproduktion) und der maximal möglichen Brotmenge (bei null Raketenproduktion). Ein Punkt außerhalb der Kurve ist mit den vorhandenen Ressourcen nicht erreichbar. Ein Punkt innerhalb der Kurve ist erreichbar, aber ineffizient (z. B. weil Fabrikkapazitäten ungenutzt bleiben oder Arbeitskräfte arbeitslos sind). Die 'Falken' bevorzugen einen Punkt auf der Kurve mit vergleichsweise mehr Raketen und weniger Brot, die 'Tauben' einen Punkt mit vergleichsweise mehr Brot und weniger Raketen — beide Punkte liegen auf derselben, effizienten Kurve, unterscheiden sich aber in der politischen Präferenz für die Zusammensetzung." }]
      },
      {
        id: "vwl-uebung1-e4",
        prompt: "Ein aggressives Nachbarland reduziert seine Militärausgaben deutlich, woraufhin sowohl Falken als auch Tauben bereit sind, die eigenen Militärausgaben zu senken. Für welche Partei führt die Reduktion zu einer größeren 'Friedensdividende', gemessen an einem Anstieg der Brotproduktion?",
        solution: [{ type: "p", text: "Da beide Parteien ausgehend von ihrem jeweiligen Punkt auf derselben Produktionsmöglichkeitenkurve die Raketenproduktion um denselben Betrag senken, hängt der resultierende Anstieg der Brotproduktion von der Steigung der Kurve an der jeweiligen Stelle ab (Opportunitätskosten). Die Tauben, die schon vorher relativ mehr Brot und weniger Raketen produzierten, befinden sich tendenziell in einem Bereich der Kurve, in dem eine Rakete weniger in relativ mehr zusätzliches Brot 'umgewandelt' werden kann (je nach Krümmung der Kurve). Allgemein gilt: Die Partei, die sich auf dem flacheren, brotintensiveren Teil der Kurve befindet, kann bei gleicher Raketenreduktion tendenziell den größeren Brotzuwachs realisieren — die genaue Antwort hängt von der konkreten Form der jeweiligen Kurve ab, die die Vorlesung nicht exakt beziffert." }]
      },
      {
        id: "vwl-uebung1-e5",
        prompt: "Was versteht man unter Kausalität, und warum ist es in den Wirtschafts- und Sozialwissenschaften schwer, kausale Effekte nachzuweisen? Verdeutlichen Sie dies am Beispiel des Mindestlohns.",
        solution: [{ type: "p", text: "Kausalität bedeutet, dass ein Faktor A ursächlich auf einen anderen Faktor B wirkt, nicht nur, dass beide gemeinsam auftreten (Korrelation). Der Nachweis von Kausalität ist in den Wirtschaftswissenschaften schwer, weil sich reale Volkswirtschaften nicht wie im Labor kontrolliert experimentell manipulieren lassen und sich viele Faktoren gleichzeitig verändern (Störfaktoren). Am Beispiel des Mindestlohns: Steigt nach einer Mindestlohnerhöhung die Arbeitslosenquote, könnte das am Mindestlohn liegen — es könnte aber auch zufällig zeitgleich eine Rezession, ein technologischer Strukturwandel oder eine demografische Entwicklung die Arbeitslosigkeit beeinflusst haben. Ohne eine geeignete Vergleichsgruppe (z. B. eine ähnliche Region ohne Mindestlohnerhöhung) lässt sich der reine Kausaleffekt des Mindestlohns kaum von diesen anderen Einflüssen trennen." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Was unterscheidet das Erkenntnisobjekt der VWL grundlegend von dem vieler Naturwissenschaften?", options: ["Es gibt in der VWL keine Modelle","Das Erkenntnisobjekt ist der Mensch mit freiem Handlungsspielraum, daher keine strengen Naturgesetze","Die VWL verwendet keine Daten","Die VWL ist keine empirische Wissenschaft"], correctIndex: 1, explanation: "Da der Mensch im Zentrum steht und nicht vollständig vorhersehbar handelt, lassen sich in der VWL keine strengen Naturgesetze wie in der Physik formulieren." },
      { id: "q2", question: "Welche Art von Experiment ist in der Ökonomie besonders selten, weil sie auf einem historischen Zufall beruht?", options: ["Simulationen","Gedankenexperimente","Laborexperimente","Natürliche Experimente"], correctIndex: 3, explanation: "Natürliche Experimente sind seltene, durch historischen Zufall entstehende Situationen, die sich ökonomisch wie ein Experiment auswerten lassen." },
      { id: "q3", question: "Was zeigt ein Punkt außerhalb der Produktionsmöglichkeitenkurve?", options: ["Wirtschaftswachstum","Eine mit den aktuellen Ressourcen nicht erreichbare Kombination","Arbeitslosigkeit","Eine effiziente Produktion"], correctIndex: 1, explanation: "Ein Punkt außerhalb der Kurve ist mit den aktuell verfügbaren Ressourcen nicht erreichbar." },
      { id: "q4", question: "Was unterscheidet 'Falken' und 'Tauben' im Raketen-Brot-Beispiel?", options: ["Nur die Tauben produzieren effizient","Nur die Falken produzieren effizient","Sie liegen auf unterschiedlichen Produktionsmöglichkeitenkurven","Sie bevorzugen unterschiedliche Punkte auf derselben Kurve"], correctIndex: 3, explanation: "Beide Parteien bevorzugen unterschiedliche, aber jeweils effiziente Punkte auf derselben Produktionsmöglichkeitenkurve." },
      { id: "q5", question: "Was ist Kausalität?", options: ["Ein Begriff nur aus der Physik","Ein reiner statistischer Zusammenhang ohne Wirkungsrichtung","Ein Synonym für Korrelation","Eine Ursache-Wirkungs-Beziehung: Ein Faktor wirkt auf einen anderen"], correctIndex: 3, explanation: "Kausalität bezeichnet eine echte Ursache-Wirkungs-Beziehung, bei der ein Faktor auf einen anderen wirkt." },
      { id: "q6", question: "Warum ist der kausale Effekt des Mindestlohns auf die Beschäftigung schwer nachzuweisen?", options: ["Weil der Mindestlohn keinen Effekt haben kann","Weil es keine Arbeitslosenstatistik gibt","Weil der Mindestlohn nie verändert wird","Weil gleichzeitig andere Faktoren (z. B. Konjunktur) die Beschäftigung beeinflussen können"], correctIndex: 3, explanation: "Ohne geeignete Vergleichsgruppe lässt sich der reine Effekt des Mindestlohns kaum von anderen gleichzeitig wirkenden Störfaktoren trennen." },
      { id: "q7", question: "Was ist ein Beispiel für ein natürliches Experiment in der VWL?", options: ["Eine kontrollierte Laborstudie mit Studierenden","Eine reine Simulation am Computer","Eine plötzliche Politikänderung, die zwei ähnliche Regionen unterschiedlich betrifft","Eine willkürlich gewählte Zufallsstichprobe ohne Kontext"], correctIndex: 2, explanation: "Ein natürliches Experiment nutzt eine durch historischen Zufall entstandene Situation, z. B. eine Politikänderung mit unterschiedlicher regionaler Betroffenheit, um kausale Effekte abzuschätzen." },
      { id: "q8", question: "Ein Punkt innerhalb der Produktionsmöglichkeitenkurve zeigt an, dass...", options: ["...die Volkswirtschaft ihre Ressourcen nicht voll ausschöpft","...es keine Opportunitätskosten gibt","...der Punkt nicht erreichbar ist","...die Volkswirtschaft wächst"], correctIndex: 0, explanation: "Ein Punkt innerhalb der Kurve zeigt eine ineffiziente Nutzung der Ressourcen, z. B. durch Arbeitslosigkeit oder ungenutzte Kapazitäten." }
    ]
  },
  {
    id: "vwl-uebung2-marktkraefte",
    chapter: 12,
    order: 2,
    title: "Übung 2: Die Marktkräfte von Angebot und Nachfrage",
    icon: "📝",
    summary: "Übungsaufgaben zu Marktformen, Verschiebungen von Angebots- und Nachfragekurve, Substituten und Komplementen, sowie eine Berechnung von Gleichgewichtspreis und -menge aus gegebenen Angebots- und Nachfragefunktionen.",
    explanation: [
      { type: "p", text: "Diese Übung vertieft Kapitel 2 (Angebot und Nachfrage) mit Aufgaben zu Marktformen, den Bestimmungsgründen von Angebots- und Nachfrageverschiebungen, sowie einer rechnerischen Bestimmung des Marktgleichgewichts aus linearen Angebots- und Nachfragefunktionen." }
    ],
    exercises: [
      {
        id: "vwl-uebung2-e1",
        prompt: "Betrachten Sie drei Märkte: Markt X (viele Anbieter/Nachfrager, nahezu identische Produkte), Markt Y (ein Anbieter), Markt Z (wenige Anbieter, strategische Interaktion). Ordnen Sie X, Y, Z jeweils einer Marktform zu und begründen Sie, ob Anbieter Preisnehmer oder Preissetzer sind.",
        solution: [{ type: "p", text: "Markt X ist ein Polypol: Aufgrund vieler Anbieter und Nachfrager mit nahezu identischen Produkten hat kein Einzelner Einfluss auf den Marktpreis; alle sind Preisnehmer. Markt Y ist ein Monopol: Es gibt nur einen Verkäufer, der mangels Wettbewerb der Preissetzer ist. Markt Z ist ein Oligopol: Wenige Anbieter interagieren strategisch miteinander; sie sind innerhalb gewisser Grenzen Preissetzer, müssen dabei aber die Reaktionen der anderen Anbieter berücksichtigen." }]
      },
      {
        id: "vwl-uebung2-e2",
        prompt: "Das Einkommen der Konsumenten steigt deutlich. Wie verschiebt sich die Nachfragekurve nach Gut X, wenn X (a) ein normales Gut und (b) ein inferiores Gut ist? Welche zusätzliche Information ist nötig, um X empirisch zu klassifizieren?",
        solution: [{ type: "p", text: "Ist X ein normales Gut, verschiebt sich die Nachfragekurve nach rechts (die Nachfrage steigt bei jedem Preis). Ist X ein inferiores Gut, verschiebt sich die Nachfragekurve nach links (die Nachfrage sinkt bei jedem Preis, weil Konsumenten auf höherwertige Alternativen ausweichen). Um X empirisch zu klassifizieren, muss man beobachten, wie sich die nachgefragte Menge von X über die Zeit tatsächlich entwickelt, wenn sich das Einkommen der Konsumenten verändert (bei ansonsten möglichst gleichbleibenden Bedingungen), und daraus die Richtung des Zusammenhangs ableiten." }]
      },
      {
        id: "vwl-uebung2-e3",
        prompt: "Der Preis von Gut A sinkt durch technischen Fortschritt. Formulieren Sie eine Entscheidungsregel, um festzustellen, ob A und B (aus Sicht der Nachfrage nach B) Substitute oder Komplemente sind.",
        solution: [{ type: "p", text: "Sinkt der Preis von A und sinkt in der Folge auch die Nachfrage nach B, sind A und B Substitute (z. B. Cola und Pepsi: Wird Cola billiger, kaufen Konsumenten weniger Pepsi). Sinkt der Preis von A und steigt in der Folge die Nachfrage nach B, sind A und B komplementäre Güter (z. B. Benzin und Autos: Wird Benzin billiger, werden mehr Autos nachgefragt, weil beide Güter gemeinsam genutzt werden)." }]
      },
      {
        id: "vwl-uebung2-e4",
        prompt: "Ein Autofahrer fährt regelmäßig 120 km auf der Autobahn. Bei 120 km/h verbraucht sein Auto 8 l/100 km, bei 100 km/h nur 6 l/100 km. Steigende Benzinpreise (2,00 €/l) veranlassen ihn, von 120 km/h auf 100 km/h zu wechseln. Berechnen Sie Fahrzeit, Kraftstoffverbrauch, Kraftstoffkosten und die implizite Bewertung einer Stunde Zeit.",
        solution: [{ type: "p", text: "Fahrzeit: bei 120 km/h beträgt sie 120 km ÷ 120 km/h = 1,0 Std.; bei 100 km/h beträgt sie 120 km ÷ 100 km/h = 1,2 Std. — also 0,2 Std. (12 Minuten) mehr. Kraftstoffverbrauch: bei 120 km/h 8 l/100 km × 1,2 (für 120 km) = 9,6 l; bei 100 km/h 6 l/100 km × 1,2 = 7,2 l. Kraftstoffkosten: bei 120 km/h 9,6 l × 2,00 € = 19,20 €; bei 100 km/h 7,2 l × 2,00 € = 14,40 €. Ersparnis durch die langsamere Fahrt: 19,20 € − 14,40 € = 4,80 €. Für diese Ersparnis nimmt er 0,2 Std. zusätzliche Fahrzeit in Kauf. Der implizite Wert einer Stunde Zeit für ihn beträgt damit 4,80 € ÷ 0,2 Std. = 24 € pro Stunde: Nur wenn ihm eine Stunde Zeit weniger als 24 € wert ist, lohnt sich für ihn die langsamere, sparsamere Fahrweise." }]
      },
      {
        id: "vwl-uebung2-e5",
        prompt: "Die Marktforschung hat für einen Gütermarkt ermittelt: q = 1.600 − 300p und q = 1.400 + 700p. Welche Gleichung ist die Nachfrage-, welche die Angebotsfunktion? Berechnen Sie Gleichgewichtspreis und -menge.",
        solution: [{ type: "p", text: "q = 1.600 − 300p ist die Nachfragefunktion (fallend im Preis, wie es das Gesetz der Nachfrage verlangt). q = 1.400 + 700p ist die Angebotsfunktion (steigend im Preis, wie es das Gesetz des Angebots verlangt). Im Gleichgewicht gilt Nachfrage = Angebot: 1.600 − 300p = 1.400 + 700p ⟺ 200 = 1.000p ⟺ p* = 0,2. Eingesetzt in die Nachfragefunktion: q* = 1.600 − 300 × 0,2 = 1.600 − 60 = 1.540. Der Gleichgewichtspreis beträgt also 0,2 (Geldeinheiten), die Gleichgewichtsmenge 1.540 (Mengeneinheiten)." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche Marktform liegt bei vielen Anbietern und Nachfragern mit nahezu identischen Produkten vor?", options: ["Monopolistische Konkurrenz","Oligopol","Polypol","Monopol"], correctIndex: 2, explanation: "Viele Anbieter/Nachfrager mit nahezu identischen Produkten kennzeichnen ein Polypol." },
      { id: "q2", question: "Wie verschiebt sich die Nachfragekurve nach einem inferioren Gut, wenn das Einkommen steigt?", options: ["Nach links","Sie wird zur Angebotskurve","Sie bleibt unverändert","Nach rechts"], correctIndex: 0, explanation: "Bei einem inferioren Gut sinkt die Nachfrage mit steigendem Einkommen, die Kurve verschiebt sich nach links." },
      { id: "q3", question: "Zwei Güter A und B sind Substitute, wenn ein sinkender Preis von A...", options: ["...den Preis von B automatisch senkt","...die Nachfrage nach B erhöht","...die Nachfrage nach B verringert","...keinen Effekt auf B hat"], correctIndex: 2, explanation: "Substitute sind Güter, bei denen ein sinkender Preis des einen Gutes die Nachfrage nach dem anderen Gut verringert." },
      { id: "q4", question: "Im Autofahrer-Beispiel: Wie hoch ist die berechnete implizite Bewertung einer Stunde Zeit?", options: ["100 € pro Stunde","4,80 € pro Stunde","9,60 € pro Stunde","24 € pro Stunde"], correctIndex: 3, explanation: "Die Ersparnis von 4,80 € geteilt durch die zusätzliche Fahrzeit von 0,2 Stunden ergibt einen impliziten Zeitwert von 24 € pro Stunde." },
      { id: "q5", question: "Bei q = 1.600 − 300p und q = 1.400 + 700p: Welche Gleichung ist die Nachfragefunktion?", options: ["Keine der beiden ist eine Nachfragefunktion","Beide sind Nachfragefunktionen","q = 1.400 + 700p, weil sie steigend im Preis ist","q = 1.600 − 300p, weil sie fallend im Preis ist"], correctIndex: 3, explanation: "Die im Preis fallende Funktion q = 1.600 − 300p entspricht dem Gesetz der Nachfrage und ist daher die Nachfragefunktion." },
      { id: "q6", question: "Wie hoch ist der berechnete Gleichgewichtspreis im Beispiel q = 1.600 − 300p, q = 1.400 + 700p?", options: ["p* = 0,2","p* = 20","p* = 2","p* = 200"], correctIndex: 0, explanation: "Aus 1.600 − 300p = 1.400 + 700p folgt 200 = 1.000p, also p* = 0,2." },
      { id: "q7", question: "Wie hoch ist die berechnete Gleichgewichtsmenge im selben Beispiel?", options: ["q* = 200","q* = 1.000","q* = 1.600","q* = 1.540"], correctIndex: 3, explanation: "Eingesetzt in die Nachfragefunktion: q* = 1.600 − 300 × 0,2 = 1.540." },
      { id: "q8", question: "Warum lohnt sich für den Autofahrer die langsamere Fahrweise nur, wenn ihm eine Stunde Zeit weniger als 24 € wert ist?", options: ["Weil das Benzin sonst zu billig wäre","Weil er sonst schneller fahren müsste","Weil 24 € der gesetzliche Mindestlohn ist","Weil die Kraftstoffersparnis genau 24 € pro eingesparter Stunde beträgt"], correctIndex: 3, explanation: "Die berechnete implizite Zeitbewertung liegt bei 24 €/Stunde; ist ihm eine Stunde mehr wert, lohnt sich das Zeitsparen (schnelleres Fahren) trotz höherer Kosten." }
    ]
  },
  {
    id: "vwl-uebung3-preiselastizitaet",
    chapter: 12,
    order: 3,
    title: "Übung 3: Preiselastizität der Nachfrage",
    icon: "📝",
    summary: "Übungsaufgaben zur Berechnung der Preiselastizität aus Nachfragedaten für Geschäfts- und Urlaubsreisende, zur nötigen Preiserhöhung bei der Tabaksteuer, und zur Wirkung eines CO2-Preisaufschlags auf die Dieselnachfrage.",
    explanation: [
      { type: "p", text: "Diese Übung vertieft Kapitel 3 (Preiselastizität) anhand konkreter Berechnungen: dem Vergleich der Preiselastizität von Geschäfts- und Urlaubsreisenden, der Frage, wie stark der Zigarettenpreis steigen müsste, um den Konsum um ein bestimmtes Ausmaß zu senken, sowie der Wirkung eines CO2-Preisaufschlags auf die Nachfrage nach Diesel." }
    ],
    exercises: [
      {
        id: "vwl-uebung3-e1",
        prompt: "Bei einem Preisanstieg von 200 auf 250 € sinkt die Nachfrage nach Geschäftsreisen (München–Hamburg) von 2.000 auf 1.900, die Nachfrage nach Urlaubsreisen von 600 auf 400. Berechnen Sie die Preiselastizität der Nachfrage für beide Gruppen und interpretieren Sie das Ergebnis.",
        solution: [{ type: "p", text: "Preisänderung: von 200 auf 250, also +25 % (50/200). Geschäftsreisende: Mengenänderung von 2.000 auf 1.900, also −5 % (100/2.000). Preiselastizität = 5 % / 25 % = 0,2 — die Nachfrage ist stark unelastisch, weil geschäftliche Reisen meist notwendig sind und kaum aufgeschoben werden können. Urlaubsreisende: Mengenänderung von 600 auf 400, also −33,3 % (200/600). Preiselastizität = 33,3 % / 25 % ≈ 1,33 — die Nachfrage ist elastisch, weil Urlaubsreisen eher verschiebbar oder durch andere Ziele/Zeiten ersetzbar sind." }]
      },
      {
        id: "vwl-uebung3-e2",
        prompt: "Warum haben Urlaubsreisende eine andere Preiselastizität als Geschäftsreisende, und welche Implikation hat das für die Preisentwicklung dieser Reisen in der Post-Corona-Zeit?",
        solution: [{ type: "p", text: "Geschäftsreisende müssen aus beruflichen Gründen reisen, unabhängig vom Preis, und haben daher eine unelastischere Nachfrage; Urlaubsreisende können ihre Reise dagegen leichter verschieben, das Ziel wechseln oder ganz verzichten, wodurch ihre Nachfrage elastischer ist. Fluggesellschaften können daraus ableiten, dass sie bei Geschäftsreisenden (unelastische Nachfrage) höhere Preise durchsetzen können, ohne die Nachfrage stark zu verlieren, während sie bei Urlaubsreisenden (elastische Nachfrage) eher über niedrigere, wettbewerbsfähige Preise oder Rabatte um Nachfrage konkurrieren müssen — eine klassische Grundlage für Preisdifferenzierung zwischen beiden Kundengruppen." }]
      },
      {
        id: "vwl-uebung3-e3",
        prompt: "Die Preiselastizität der Zigarettennachfrage beträgt etwa 0,4. Um wie viel Prozent sollte der Preis einer 4-Euro-Packung steigen, um den Konsum um 20 % zu senken?",
        solution: [{ type: "p", text: "Aus der Definition der Preiselastizität folgt: prozentuale Preisänderung = prozentuale Mengenänderung ÷ Preiselastizität = 20 % ÷ 0,4 = 50 %. Der Preis müsste also um 50 % steigen, das entspricht bei einer 4-Euro-Packung einem Anstieg um 2 € auf 6 €." }]
      },
      {
        id: "vwl-uebung3-e4",
        prompt: "Warum haben Teenager bei Zigaretten laut empirischen Studien eine größere Preiselastizität als Erwachsene?",
        solution: [{ type: "p", text: "Teenager haben in der Regel ein geringeres verfügbares Einkommen (Taschengeld statt Gehalt), sodass eine Preiserhöhung einen größeren Anteil ihres Budgets betrifft. Zudem sind Teenager typischerweise noch nicht so lange nikotinabhängig wie langjährige erwachsene Raucher, wodurch ihre Nachfrage weniger stark durch Sucht 'fixiert' und damit preissensibler ist." }]
      },
      {
        id: "vwl-uebung3-e5",
        prompt: "Bei einem Dieselpreis von 2,30 €/l führt ein CO2-Preis von 60 €/t zu einem Preisaufschlag von rund 0,18 €/l. Wie hoch ist dieser Preisaufschlag in Prozent, und wovon hängt der resultierende Rückgang der Dieselnachfrage ab?",
        solution: [{ type: "p", text: "Der Preisaufschlag beträgt 0,18 € ÷ 2,30 € ≈ 7,8 % des Dieselpreises. Wie stark die Nachfrage dadurch tatsächlich sinkt, hängt von der Preiselastizität der Dieselnachfrage ab: Multipliziert man die prozentuale Preiserhöhung (≈7,8 %) mit der jeweiligen Preiselastizität, erhält man den prozentualen Nachfragerückgang. Da die kurzfristige Preiselastizität von Kraftstoffen in der empirischen Literatur typischerweise deutlich niedriger ist als die langfristige (weil Konsumenten kurzfristig kaum auf andere Fahrzeuge oder Verkehrsmittel umsteigen können, langfristig aber schon), fällt der Nachfragerückgang kurzfristig entsprechend geringer aus als langfristig. Für die exakten Elastizitätswerte des in der Vorlesung zitierten DIW-Gutachtens sollte die Originalstudie herangezogen werden, da sich die genauen Schätzwerte je nach Studie und Zeitraum unterscheiden." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie hoch ist die berechnete Preiselastizität der Nachfrage für Geschäftsreisende im Beispiel (Preis 200→250, Menge 2.000→1.900)?", options: ["2,0","0,2","1,33","5,0"], correctIndex: 1, explanation: "5 % Mengenrückgang geteilt durch 25 % Preisanstieg ergibt eine Preiselastizität von 0,2 (unelastisch)." },
      { id: "q2", question: "Wie hoch ist die berechnete Preiselastizität der Nachfrage für Urlaubsreisende im selben Beispiel (Menge 600→400)?", options: ["0,2","10,0","≈1,33","0,4"], correctIndex: 2, explanation: "33,3 % Mengenrückgang geteilt durch 25 % Preisanstieg ergibt eine Preiselastizität von rund 1,33 (elastisch)." },
      { id: "q3", question: "Warum ist die Nachfrage von Geschäftsreisenden unelastischer als die von Urlaubsreisenden?", options: ["Weil Geschäftsreisen meist notwendig und kaum verschiebbar sind","Weil es für Geschäftsreisen keine Nachfragekurve gibt","Weil Urlaubsreisende immer denselben Preis zahlen","Weil Geschäftsreisende ärmer sind"], correctIndex: 0, explanation: "Geschäftsreisen sind meist beruflich notwendig und lassen sich schwer verschieben oder vermeiden, daher reagiert die Nachfrage kaum auf den Preis." },
      { id: "q4", question: "Bei einer Preiselastizität von 0,4 und gewünschter Mengensenkung um 20 %: Um wie viel Prozent muss der Preis steigen?", options: ["20 %","50 %","80 %","8 %"], correctIndex: 1, explanation: "20 % ÷ 0,4 = 50 % nötige Preissteigerung." },
      { id: "q5", question: "Von 4 € ausgehend: Wie hoch wäre der neue Zigarettenpreis nach einer 50%igen Preiserhöhung?", options: ["8,00 €","5,00 €","4,50 €","6,00 €"], correctIndex: 3, explanation: "Eine 50%ige Erhöhung von 4 € entspricht +2 €, also einem neuen Preis von 6 €." },
      { id: "q6", question: "Warum haben Teenager laut empirischen Studien eine höhere Preiselastizität bei Zigaretten als Erwachsene?", options: ["Weil sie mehr Einkommen haben","Weil sie ausschließlich online einkaufen","Weil sie den Preis nicht kennen","Weil sie ein geringeres Budget haben und meist noch weniger stark abhängig sind"], correctIndex: 3, explanation: "Ein geringeres verfügbares Budget und eine noch nicht so verfestigte Abhängigkeit machen Teenager preissensibler." },
      { id: "q7", question: "Wie hoch ist der prozentuale Preisaufschlag durch den CO2-Preis im Diesel-Beispiel (0,18 € bei 2,30 € Grundpreis)?", options: ["Etwa 60 %","Etwa 18 %","Etwa 2,3 %","Etwa 7,8 %"], correctIndex: 3, explanation: "0,18 € geteilt durch 2,30 € ergibt einen Preisaufschlag von rund 7,8 %." },
      { id: "q8", question: "Warum fällt der Rückgang der Dieselnachfrage durch den CO2-Preis kurzfristig typischerweise geringer aus als langfristig?", options: ["Weil der CO2-Preis kurzfristig höher ist","Weil die kurzfristige Preiselastizität meist niedriger ist als die langfristige","Weil Diesel kurzfristig günstiger wird","Weil es keine langfristige Elastizität gibt"], correctIndex: 1, explanation: "Kurzfristig können Konsumenten kaum auf andere Fahrzeuge oder Verkehrsmittel ausweichen, daher ist die kurzfristige Preiselastizität meist niedriger als die langfristige." }
    ]
  },
  {
    id: "vwl-uebung4-kosten-unternehmen",
    chapter: 12,
    order: 4,
    title: "Übung 4: Unternehmen in Wettbewerbsmärkten (Kosten)",
    icon: "📝",
    summary: "Übungsaufgaben zur Berechnung von Grenzprodukt, durchschnittlichen Gesamtkosten und Grenzkosten anhand von Fallbeispielen einer Staubsauger-Firma, eines selbstständigen Fotografen und einer allgemeinen quadratischen Kostenfunktion.",
    explanation: [
      { type: "p", text: "Diese Übung vertieft Kapitel 4 (Produktion und Kosten) mit drei durchgerechneten Fallbeispielen: der Produktionsfunktion und Kostenstruktur einer Staubsaugerfirma, den Kosten eines selbstständigen Fotografen, sowie der algebraischen Herleitung von Grenz- und Durchschnittskosten aus einer gegebenen Gesamtkostenfunktion." }
    ],
    exercises: [
      {
        id: "vwl-uebung4-e1",
        prompt: "Die Firma StaubWeg produziert mit 0 bis 7 Arbeitskräften folgenden Output (Staubsauger/Tag): 0, 20, 50, 90, 120, 140, 150, 155. Eine Arbeitskraft kostet 100 € pro Tag, die Fixkosten betragen 200 €. Bestimmen Sie das Grenzprodukt der Arbeit sowie die durchschnittlichen Gesamtkosten, und beschreiben Sie den jeweiligen Verlauf.",
        solution: [{ type: "p", text: "Das Grenzprodukt (zusätzlicher Output je zusätzlicher Arbeitskraft) beträgt der Reihe nach: 20, 30, 40, 30, 20, 10, 5. Es steigt zunächst (0→1→2→3 Arbeitskräfte: 20, 30, 40 — zunehmende Grenzerträge, z. B. durch bessere Arbeitsteilung), erreicht bei der dritten Arbeitskraft sein Maximum und sinkt danach kontinuierlich (30, 20, 10, 5 — abnehmendes Grenzprodukt, weil sich die Arbeitskräfte bei fixer Anlagenkapazität zunehmend gegenseitig im Weg stehen). Die Gesamtkosten ergeben sich als 200 € Fixkosten plus 100 € je Arbeitskraft: 200, 300, 400, 500, 600, 700, 800, 900 €. Die durchschnittlichen Gesamtkosten (Gesamtkosten ÷ Output) betragen damit: bei 20 Stück 15,00 €; bei 50 Stück 8,00 €; bei 90 Stück ≈5,56 €; bei 120 Stück 5,00 €; bei 140 Stück 5,00 €; bei 150 Stück ≈5,33 €; bei 155 Stück ≈5,81 €. Die Durchschnittskosten fallen also zunächst, erreichen ihr Minimum bei einem Output zwischen 120 und 140 Stück (Betriebsoptimum), und steigen danach wieder — die klassische u-förmige Durchschnittskostenkurve." }]
      },
      {
        id: "vwl-uebung4-e2",
        prompt: "Berechnen Sie für dieselbe Firma die Grenzkosten je zusätzlich produziertem Staubsauger, und vergleichen Sie den Verlauf von Grenzprodukt, Grenzkosten und Durchschnittskosten.",
        solution: [{ type: "p", text: "Die Grenzkosten je Arbeitskraft-Schritt betragen 100 € geteilt durch das jeweilige Grenzprodukt: bei Grenzprodukt 20 → 5,00 €; bei 30 → 3,33 €; bei 40 → 2,50 €; bei 30 → 3,33 €; bei 20 → 5,00 €; bei 10 → 10,00 €; bei 5 → 20,00 €. Die Grenzkosten fallen also zunächst (solange das Grenzprodukt steigt) und steigen dann kontinuierlich (sobald das Grenzprodukt sinkt) — Grenzprodukt und Grenzkosten verlaufen also spiegelbildlich zueinander: Ein hohes Grenzprodukt bedeutet niedrige Grenzkosten und umgekehrt. Die Grenzkosten schneiden die u-förmige Durchschnittskostenkurve dabei erwartungsgemäß in deren Minimum, wie es die allgemeine Kostentheorie vorhersagt." }]
      },
      {
        id: "vwl-uebung4-e3",
        prompt: "Ein selbstständiger Fotograf hat monatliche Fixkosten von 1.500 €. Bei 100 Fotos betragen die variablen Kosten 500 €, bei 200 Fotos 900 €, bei 300 Fotos 1.200 €, bei 400 Fotos 1.600 €, bei 500 Fotos 2.100 €, bei 600 Fotos 2.800 €, bei 700 Fotos 3.800 €. Berechnen Sie Gesamtkosten und durchschnittliche Kosten je Foto.",
        solution: [{ type: "p", text: "Gesamtkosten (Fixkosten + variable Kosten): bei 100 Fotos 2.000 €; bei 200 Fotos 2.400 €; bei 300 Fotos 2.700 €; bei 400 Fotos 3.100 €; bei 500 Fotos 3.600 €; bei 600 Fotos 4.300 €; bei 700 Fotos 5.300 €. Durchschnittskosten je Foto (Gesamtkosten ÷ Anzahl Fotos): bei 100 Fotos 20,00 €; bei 200 Fotos 12,00 €; bei 300 Fotos 9,00 €; bei 400 Fotos 7,75 €; bei 500 Fotos 7,20 €; bei 600 Fotos ≈7,17 €; bei 700 Fotos ≈7,57 €. Die Durchschnittskosten fallen also zunächst deutlich (weil sich die hohen Fixkosten auf immer mehr Fotos verteilen) und erreichen ihr Minimum bei rund 600 Fotos, bevor sie durch steigende variable Grenzkosten wieder leicht ansteigen." }]
      },
      {
        id: "vwl-uebung4-e4",
        prompt: "Berechnen Sie für denselben Fotografen die Grenzkosten je zusätzliche 100 Fotos.",
        solution: [{ type: "p", text: "Grenzkosten (Änderung der Gesamtkosten je zusätzliche 100 Fotos): von 0 auf 100 Fotos: 500 €, also 5,00 € je Foto; von 100 auf 200: 400 €, also 4,00 € je Foto; von 200 auf 300: 300 €, also 3,00 € je Foto; von 300 auf 400: 400 €, also 4,00 € je Foto; von 400 auf 500: 500 €, also 5,00 € je Foto; von 500 auf 600: 700 €, also 7,00 € je Foto; von 600 auf 700: 1.000 €, also 10,00 € je Foto. Die Grenzkosten je Foto fallen zunächst bis 300 Fotos und steigen danach kontinuierlich — auch hier zeigt sich der typische u-förmige (bzw. hier zunächst fallende, dann steigende) Verlauf." }]
      },
      {
        id: "vwl-uebung4-e5",
        prompt: "Ein Unternehmen hat die Gesamtkostenfunktion K(q) = 100 + 10q + q². Leiten Sie die Grenzkosten- und die Durchschnittskostenfunktion her, berechnen Sie beide für q = 10, und bestimmen Sie die Menge mit minimalen Durchschnittskosten (Betriebsoptimum).",
        solution: [{ type: "p", text: "Die Grenzkostenfunktion ergibt sich als Ableitung der Gesamtkostenfunktion: GK(q) = K'(q) = 10 + 2q. Die Durchschnittskostenfunktion ergibt sich als K(q)/q: DK(q) = 100/q + 10 + q. Für q = 10: GK(10) = 10 + 20 = 30. DK(10) = 100/10 + 10 + 10 = 10 + 10 + 10 = 30. Grenz- und Durchschnittskosten sind bei q = 10 also identisch (GK = DK = 30) — das ist kein Zufall: Das Betriebsoptimum (Minimum der Durchschnittskosten) liegt genau dort, wo Grenzkosten und Durchschnittskosten übereinstimmen. Formal findet man dieses Minimum, indem man die Ableitung von DK(q) nach q gleich null setzt: DK'(q) = −100/q² + 1 = 0 ⟺ q² = 100 ⟺ q = 10. Die Menge mit minimalen Durchschnittskosten (das Betriebsoptimum) liegt also bei q = 10, mit minimalen Durchschnittskosten von 30." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie verläuft das Grenzprodukt der Arbeit im StaubWeg-Beispiel?", options: ["Es steigt kontinuierlich","Es ist konstant","Es sinkt kontinuierlich von Anfang an","Es steigt zunächst, erreicht ein Maximum und sinkt dann"], correctIndex: 3, explanation: "Das Grenzprodukt steigt zunächst (20, 30, 40) und sinkt danach kontinuierlich (30, 20, 10, 5) — ein Maximum bei der dritten Arbeitskraft." },
      { id: "q2", question: "Wie hoch sind die durchschnittlichen Gesamtkosten bei 120 Staubsaugern (Gesamtkosten 600 €)?", options: ["3,00 €","12,00 €","5,00 €","6,00 €"], correctIndex: 2, explanation: "600 € geteilt durch 120 Stück ergibt durchschnittliche Gesamtkosten von 5,00 €." },
      { id: "q3", question: "In welchem Verhältnis stehen Grenzprodukt und Grenzkosten zueinander?", options: ["Es gibt keinen Zusammenhang","Sie verlaufen parallel: hohes Grenzprodukt = hohe Grenzkosten","Grenzkosten sind immer null","Sie verlaufen spiegelbildlich: hohes Grenzprodukt = niedrige Grenzkosten"], correctIndex: 3, explanation: "Die Grenzkosten ergeben sich als Lohn geteilt durch das Grenzprodukt; ein hohes Grenzprodukt bedeutet daher niedrige Grenzkosten und umgekehrt." },
      { id: "q4", question: "Bei welcher ungefähren Fotomenge liegen im Fotografen-Beispiel die minimalen Durchschnittskosten?", options: ["Bei 700 Fotos","Bei 300 Fotos","Bei 100 Fotos","Bei etwa 600 Fotos"], correctIndex: 3, explanation: "Die Durchschnittskosten je Foto sind bei rund 600 Fotos am geringsten (ca. 7,17 €), bevor sie danach wieder leicht steigen." },
      { id: "q5", question: "Wie hoch sind die Grenzkosten je Foto beim Übergang von 200 auf 300 Fotos (Kostenanstieg um 300 €)?", options: ["9,00 € je Foto","3,00 € je Foto","30,00 € je Foto","1,00 € je Foto"], correctIndex: 1, explanation: "300 € zusätzliche Kosten geteilt durch 100 zusätzliche Fotos ergibt Grenzkosten von 3,00 € je Foto." },
      { id: "q6", question: "Für K(q) = 100 + 10q + q²: Wie lautet die Grenzkostenfunktion?", options: ["GK(q) = 10q + q²","GK(q) = 10 + 2q","GK(q) = 100 + 10q","GK(q) = 2q"], correctIndex: 1, explanation: "Die Ableitung von K(q) = 100 + 10q + q² nach q ergibt GK(q) = 10 + 2q." },
      { id: "q7", question: "Wie hoch sind Grenz- und Durchschnittskosten bei q = 10 für K(q) = 100 + 10q + q²?", options: ["GK = 10, DK = 30","GK = 20, DK = 20","GK = 30, DK = 10","GK = 30, DK = 30"], correctIndex: 3, explanation: "GK(10) = 10 + 2×10 = 30 und DK(10) = 100/10 + 10 + 10 = 30 — beide sind bei q = 10 identisch." },
      { id: "q8", question: "Warum liegt das Betriebsoptimum genau dort, wo Grenzkosten und Durchschnittskosten übereinstimmen?", options: ["Das ist reiner Zufall in diesem Beispiel","Weil das Betriebsoptimum keine mathematische Bedeutung hat","Weil die Grenzkostenkurve die Durchschnittskostenkurve immer in deren Minimum schneidet","Weil Grenzkosten und Durchschnittskosten immer identisch sind"], correctIndex: 2, explanation: "Es ist ein allgemeiner mathematischer Zusammenhang: Die Grenzkostenkurve schneidet die u-förmige Durchschnittskostenkurve stets in deren Minimum, dem Betriebsoptimum." }
    ]
  },
  {
    id: "vwl-uebung5-konsumenten-produzenten-effizienz",
    chapter: 12,
    order: 5,
    title: "Übung 5: Konsumenten, Produzenten und die Effizienz von Märkten",
    icon: "📝",
    summary: "Übungsaufgaben zur Berechnung von Konsumenten- und Produzentenrente aus linearen Angebots- und Nachfragefunktionen, zu einem Höchstpreis-Szenario, sowie zu Effizienz- und Gerechtigkeitsfragen bei knappen Fußball-Tickets.",
    explanation: [
      { type: "p", text: "Diese Übung vertieft Kapitel 5 (Konsumenten-, Produzentenrente und Markteffizienz) mit einer durchgerechneten Wohlfahrtsanalyse aus gegebenen Angebots- und Nachfragefunktionen, einschließlich der Wirkung eines staatlichen Höchstpreises, sowie einer Effizienz- und Gerechtigkeitsdiskussion am Beispiel verloster Champions-League-Tickets." }
    ],
    exercises: [
      {
        id: "vwl-uebung5-e1",
        prompt: "Gegeben seien Nachfrage p = 100 − 2q und Angebot p = 20 + q. Bestimmen Sie Gleichgewichtspreis, Gleichgewichtsmenge, Konsumentenrente, Produzentenrente und Gesamtwohlfahrt.",
        solution: [{ type: "p", text: "Im Gleichgewicht gilt 100 − 2q = 20 + q ⟺ 80 = 3q ⟺ q* = 80/3 ≈ 26,67. Eingesetzt: p* = 20 + 80/3 = 140/3 ≈ 46,67. Die Konsumentenrente ist die Dreiecksfläche zwischen der Nachfragekurve (Achsenabschnitt bei p = 100) und dem Gleichgewichtspreis: KR = 0,5 × (100 − 46,67) × 26,67 ≈ 711,11. Die Produzentenrente ist die Dreiecksfläche zwischen dem Gleichgewichtspreis und der Angebotskurve (Achsenabschnitt bei p = 20): PR = 0,5 × (46,67 − 20) × 26,67 ≈ 355,56. Die Gesamtwohlfahrt (Summe aus KR und PR) beträgt damit rund 1.066,67." }]
      },
      {
        id: "vwl-uebung5-e2",
        prompt: "Die Regierung führt einen Höchstpreis von 40 ein. Wie verändert sich die gehandelte Menge, und welche Auswirkungen hat das auf Konsumenten-, Produzentenrente und Gesamtwohlfahrt?",
        solution: [{ type: "p", text: "Da der Höchstpreis (40) unter dem Gleichgewichtspreis (≈46,67) liegt, ist er bindend. Bei p = 40 beträgt die nachgefragte Menge (100−40)/2 = 30, die angebotene Menge dagegen nur 40−20 = 20 (aus p=20+q folgt q=p−20). Es kann also nur die knappere, angebotsseitig begrenzte Menge von 20 gehandelt werden, wodurch eine Güterknappheit von 10 Einheiten entsteht. Die neue Konsumentenrente beträgt (Fläche zwischen Nachfragekurve und p=40 bis q=20) 0,5×(100−40+60−40)×20 = 800 (wobei 60 der Nachfragepreis bei q=20 ist). Die neue Produzentenrente beträgt (Fläche zwischen p=40 und Angebotskurve bis q=20) 0,5×(40−20)×20 = 200. Die neue Gesamtwohlfahrt sinkt damit auf 800+200 = 1.000, verglichen mit rund 1.066,67 ohne Höchstpreis — es entsteht ein Wohlfahrtsverlust (Deadweight Loss) von rund 66,67, weil weniger gehandelt wird, als ohne Eingriff effizient wäre." }]
      },
      {
        id: "vwl-uebung5-e3",
        prompt: "Der russische Angriffskrieg führte zu vermehrten Weizenexporten aus der Ukraine nach Polen und in die Slowakei. Welche Folgen hat das für den dortigen Weizenpreis, die Konsumentenrente auf dem Backwarenmarkt und die Produzentenrente der dortigen Weizenbauern?",
        solution: [{ type: "p", text: "Die zusätzlichen ukrainischen Weizenexporte verschieben die Angebotskurve für Weizen in Polen und der Slowakei nach rechts (mehr Angebot bei jedem Preis). Das führt zu einem sinkenden Gleichgewichtspreis für Weizen und einer steigenden gehandelten Menge. Für Konsumenten von Backwaren sinken dadurch tendenziell die Vorleistungskosten, was ceteris paribus die Konsumentenrente auf dem Backwarenmarkt erhöht (niedrigere Preise oder mehr Angebot an Backwaren). Für die einheimischen polnischen und slowakischen Weizenbauern bedeutet der niedrigere Weizenpreis dagegen eine sinkende Produzentenrente, weil sie nun mit zusätzlicher, günstigerer ukrainischer Konkurrenz konfrontiert sind — ein Grund, warum diese Importe in der Praxis politisch umstritten waren und zeitweise zu Protesten einheimischer Landwirte führten." }]
      },
      {
        id: "vwl-uebung5-e4",
        prompt: "Die Produktionskosten für Smartphones sind stark gesunken. Zeigen Sie, was das für Preis, Menge, Konsumenten- und Produzentenrente bedeutet.",
        solution: [{ type: "p", text: "Sinkende Produktionskosten verschieben die Angebotskurve nach rechts (bei jedem Preis wird mehr angeboten). Im neuen Gleichgewicht sinkt der Preis und die gehandelte Menge steigt. Die Konsumentenrente steigt eindeutig, weil Konsumenten sowohl einen niedrigeren Preis zahlen als auch mehr Smartphones konsumieren können. Die Wirkung auf die Produzentenrente ist dagegen nicht eindeutig festgelegt: Sie kann trotz niedrigerem Preis steigen, wenn der Mengeneffekt (mehr verkaufte Einheiten) den Preiseffekt (weniger Erlös pro Einheit) überkompensiert — was bei stark gesunkenen Kosten und entsprechend stark gestiegener Menge häufig der Fall ist." }]
      },
      {
        id: "vwl-uebung5-e5",
        prompt: "Ihr Freund wäre bereit gewesen, bis zu 500 € für ein Champions-League-Finalticket zu zahlen (offizieller Preis 180 €), geht aber bei der Verlosung leer aus. Ist dieses Ergebnis ökonomisch effizient? Wie ließe sich Effizienz erreichen, und wäre das auch gerecht?",
        solution: [{ type: "p", text: "Das Ergebnis ist nicht zwangsläufig effizient, weil die Verlosung Tickets nicht notwendigerweise an die Personen mit der höchsten Zahlungsbereitschaft vergibt — ein Effizienzkriterium des Marktes (Güter gehen an jene mit der höchsten Zahlungsbereitschaft). Ihr Freund wäre bereit gewesen, deutlich mehr als den offiziellen Preis zu zahlen, ging aber trotzdem leer aus, während jemand mit geringerer Zahlungsbereitschaft möglicherweise ein Ticket gewonnen hat. Ein effizientes Ergebnis ließe sich durch eine Marktlösung erreichen, z. B. eine Versteigerung der Tickets oder einen legalen Zweitmarkt (Wiederverkauf), bei dem die Tickets letztlich bei denjenigen landen, die am meisten dafür zu zahlen bereit sind. Ob das auch gerecht wäre, ist eine separate normative Frage: Eine reine Versteigerung würde Tickets tendenziell an zahlungskräftigere statt notwendigerweise 'verdientere' oder treueste Fans vergeben — Effizienz (maximale Zahlungsbereitschaft wird bedient) und Gerechtigkeit (wer 'verdient' das Ticket am meisten) fallen hier auseinander, ähnlich wie bereits in Kapitel 5 allgemein diskutiert." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Bei Nachfrage p = 100 − 2q und Angebot p = 20 + q: Wie hoch ist die Gleichgewichtsmenge?", options: ["q* = 20","q* ≈ 26,67","q* = 40","q* = 80"], correctIndex: 1, explanation: "Aus 100 − 2q = 20 + q folgt 80 = 3q, also q* = 80/3 ≈ 26,67." },
      { id: "q2", question: "Wie hoch ist der Gleichgewichtspreis im selben Beispiel?", options: ["p* = 100","p* ≈ 46,67","p* = 20","p* = 80"], correctIndex: 1, explanation: "Eingesetzt in die Angebotsfunktion: p* = 20 + 80/3 ≈ 46,67." },
      { id: "q3", question: "Was passiert, wenn die Regierung einen Höchstpreis von 40 einführt (unter dem Gleichgewichtspreis von ≈46,67)?", options: ["Es entsteht eine Güterknappheit, weil die angebotene Menge unter der nachgefragten liegt","Der Höchstpreis erhöht die Gesamtwohlfahrt","Die gehandelte Menge steigt über die Gleichgewichtsmenge","Es ändert sich nichts, weil der Höchstpreis nicht bindend ist"], correctIndex: 0, explanation: "Da der Höchstpreis unter dem Gleichgewichtspreis liegt, ist er bindend; bei p=40 übersteigt die nachgefragte Menge (30) die angebotene Menge (20), es entsteht eine Knappheit." },
      { id: "q4", question: "Was passiert mit der Gesamtwohlfahrt durch den bindenden Höchstpreis im Beispiel?", options: ["Sie steigt","Sie bleibt exakt gleich","Sie wird null","Sie sinkt (Wohlfahrtsverlust)"], correctIndex: 3, explanation: "Die Gesamtwohlfahrt sinkt von rund 1.066,67 auf 1.000, ein Wohlfahrtsverlust von rund 66,67, weil weniger als die effiziente Menge gehandelt wird." },
      { id: "q5", question: "Wie wirken sich zusätzliche ukrainische Weizenexporte auf den Weizenpreis in Polen und der Slowakei aus?", options: ["Der Preis bleibt konstant","Der Preis sinkt, weil sich die Angebotskurve nach rechts verschiebt","Der Preis steigt, weil die Nachfrage steigt","Es gibt keinen Effekt auf den Weizenmarkt"], correctIndex: 1, explanation: "Zusätzliches Angebot verschiebt die Angebotskurve nach rechts, wodurch der Gleichgewichtspreis sinkt." },
      { id: "q6", question: "Was passiert mit der Produzentenrente einheimischer Weizenbauern durch die zusätzlichen Importe?", options: ["Sie wird automatisch subventioniert","Sie sinkt tendenziell durch die zusätzliche Konkurrenz und den niedrigeren Preis","Sie steigt eindeutig","Sie bleibt unverändert"], correctIndex: 1, explanation: "Der niedrigere Weizenpreis durch zusätzliche Importe senkt tendenziell die Produzentenrente der einheimischen Landwirte." },
      { id: "q7", question: "Warum steigt die Konsumentenrente eindeutig, wenn sinkende Produktionskosten die Angebotskurve nach rechts verschieben?", options: ["Weil der Preis konstant bleibt","Weil Konsumenten sowohl weniger zahlen als auch mehr konsumieren können","Weil die Produzentenrente automatisch sinkt","Weil die Nachfragekurve sich verschiebt"], correctIndex: 1, explanation: "Ein niedrigerer Preis bei gleichzeitig höherer Menge erhöht die Konsumentenrente eindeutig." },
      { id: "q8", question: "Warum ist die Verlosung von Champions-League-Tickets möglicherweise nicht ökonomisch effizient?", options: ["Weil Verlosungen grundsätzlich illegal sind","Weil es keine Nachfrage nach Tickets gibt","Weil der Ticketpreis zu hoch ist","Weil Tickets nicht notwendigerweise an Personen mit der höchsten Zahlungsbereitschaft gehen"], correctIndex: 3, explanation: "Effizienz erfordert, dass Güter an jene mit der höchsten Zahlungsbereitschaft gehen; eine zufällige Verlosung erfüllt dieses Kriterium nicht notwendigerweise." }
    ]
  },
  {
    id: "vwl-uebung6-externalitaeten-emissionshandel",
    chapter: 12,
    order: 6,
    title: "Übung 6: Externalitäten und Marktversagen",
    icon: "📝",
    summary: "Übungsaufgaben zu negativen und positiven Externalitäten, zu privaten Lösungen (steuerliche Absetzbarkeit von Spenden), und eine durchgerechnete Aufgabe zum kostenminimalen Handel mit Umweltzertifikaten zwischen drei Industriebetrieben.",
    explanation: [
      { type: "p", text: "Diese Übung vertieft Kapitel 6 (Externalitäten und Marktversagen) mit einer ausführlich durchgerechneten Aufgabe zum Handel mit Umweltzertifikaten zwischen drei Unternehmen mit unterschiedlichen Vermeidungskosten, sowie konzeptionellen Fragen zu positiven Externalitäten und privaten Lösungsansätzen." }
    ],
    exercises: [
      {
        id: "vwl-uebung6-e1",
        prompt: "Was ist ein positiver externer Effekt? Könnte Hochschulbildung ein Beispiel dafür sein, und was würde das für eine staatliche versus private Bereitstellung von Hochschulbildung bedeuten?",
        solution: [{ type: "p", text: "Ein positiver externer Effekt liegt vor, wenn unbeteiligte Dritte von einer Handlung profitieren, ohne dafür zu bezahlen — der gesellschaftliche Wert übersteigt den privaten Wert. Hochschulbildung kann ein Beispiel sein, weil gut ausgebildete Absolventen gesellschaftlichen Zusatznutzen erzeugen (z. B. höhere Innovationskraft, mehr Steueraufkommen, informiertere gesellschaftliche Teilhabe), der über den privaten Ertrag des Einzelnen hinausgeht. Wäre Hochschulbildung rein privat finanziert, würde tendenziell zu wenig Bildung produziert, weil Einzelne nur ihren eigenen Ertrag abwägen — das spricht für eine (teilweise) staatliche Förderung, um die produzierte Menge näher an das gesellschaftlich optimale Niveau heranzuführen." }]
      },
      {
        id: "vwl-uebung6-e2",
        prompt: "Beiträge und Spenden an gemeinnützige Vereine sind von der Einkommensteuer absetzbar. Inwiefern ist das ein staatlicher Anreiz zu privaten Lösungen bei externen Effekten?",
        solution: [{ type: "p", text: "Gemeinnützige Vereine erzeugen häufig positive Externalitäten, von denen auch Nicht-Mitglieder profitieren. Ohne zusätzlichen Anreiz würden Privatpersonen tendenziell zu wenig spenden, weil sie nur ihren eigenen Nutzen (z. B. persönliche Genugtuung) abwägen, nicht den vollen gesellschaftlichen Nutzen. Die steuerliche Absetzbarkeit senkt die effektiven Kosten des Spendens und ist damit ein staatlicher Anreiz, der eine private Lösung (freiwillige Spenden) stärkt, statt die Externalität direkt zu regulieren oder zu besteuern." }]
      },
      {
        id: "vwl-uebung6-e3",
        prompt: "Drei Unternehmen verschmutzen anfangs wie folgt: Asbest AG 70 Einheiten (Vermeidungskosten 20 €/Einheit), Beton AG 80 Einheiten (25 €/Einheit), Chemie AG 50 Einheiten (10 €/Einheit). Der Staat begrenzt die Gesamtverschmutzung auf 120 Einheiten und vergibt an jedes Unternehmen 40 handelbare Zertifikate. Wer wird Zertifikate kaufen bzw. verkaufen, und wie hoch sind die Gesamtkosten der Verschmutzungssenkung?",
        solution: [{ type: "p", text: "Ausgangslage: 70+80+50 = 200 Einheiten Verschmutzung müssen auf 120 Einheiten gesenkt werden, also insgesamt um 80 Einheiten. Kosteneffizient wird zuerst dort vermieden, wo es am günstigsten ist: Chemie AG hat die niedrigsten Vermeidungskosten (10 €/Einheit) und wird daher ihre gesamte Verschmutzung auf null senken (50 Einheiten Vermeidung) und alle 40 zugeteilten Zertifikate verkaufen, da sie keine mehr benötigt. Es fehlen dann noch 80−50 = 30 Einheiten Vermeidung, die als Nächstes von der zweitgünstigsten Quelle erbracht werden: Asbest AG (20 €/Einheit) senkt ihre Verschmutzung um 30 Einheiten (von 70 auf 40) und kommt damit genau mit ihrer eigenen Zuteilung von 40 Zertifikaten aus, ohne kaufen oder verkaufen zu müssen. Beton AG (die teuerste Vermeidungsquelle, 25 €/Einheit) vermeidet gar nicht, bleibt bei 80 Einheiten Verschmutzung und muss die fehlenden 40 Zertifikate von Chemie AG kaufen. Die gesamten Vermeidungskosten betragen damit: Chemie AG 50 × 10 € = 500 €, Asbest AG 30 × 20 € = 600 €, Beton AG 0 € — insgesamt 1.100 €." }]
      },
      {
        id: "vwl-uebung6-e4",
        prompt: "Um wie viel höher wären die Kosten der umweltpolitischen Maßnahme, wenn die Zertifikate nicht handelbar wären (jedes Unternehmen müsste eigenständig auf 40 Einheiten reduzieren)?",
        solution: [{ type: "p", text: "Ohne Handel müsste jedes Unternehmen unabhängig von seinen Vermeidungskosten exakt auf seine eigene Zuteilung von 40 Einheiten reduzieren: Asbest AG von 70 auf 40 (30 Einheiten × 20 € = 600 €), Beton AG von 80 auf 40 (40 Einheiten × 25 € = 1.000 €), Chemie AG von 50 auf 40 (10 Einheiten × 10 € = 100 €). Gesamtkosten ohne Handel: 600 + 1.000 + 100 = 1.700 €. Mit handelbaren Zertifikaten betragen die Gesamtkosten dagegen nur 1.100 € (siehe vorherige Aufgabe) — der Handel spart also 1.700 € − 1.100 € = 600 €, weil die Vermeidung dorthin verlagert wird, wo sie am günstigsten ist (Chemie AG vermeidet mehr, Beton AG mit den höchsten Kosten vermeidet gar nicht)." }]
      },
      {
        id: "vwl-uebung6-e5",
        prompt: "Ein mehrtägiges Musikfestival mit 60.000 Besuchern belastet Anwohner, Umwelt und Infrastruktur einer Kleinstadt (Lärm, Staus, Vermüllung, Überlastung von Polizei und ÖPNV). Unter welchen Bedingungen liegt hier ein negativer externer Effekt vor, und wie ließe er sich internalisieren?",
        solution: [{ type: "p", text: "Ein negativer externer Effekt liegt vor, soweit die Kosten für Anwohner, Umwelt und Infrastruktur (Lärm, Vermüllung, Überlastung öffentlicher Dienste) nicht von den Veranstaltern oder Besuchern getragen werden, die stattdessen selbst nur die eigenen Kosten und Erlöse (Tickets, Sponsoring, Gastronomie) abwägen. Positive Externalitäten sind ebenfalls denkbar, etwa durch zusätzliche lokale Wirtschaftsaktivität (Übernachtungen, Gastronomieumsätze auch außerhalb des Festivalgeländes) oder überregionale Bekanntheit der Kleinstadt. Die negative Externalität ließe sich internalisieren, indem die Veranstalter für die zusätzlich verursachten Kosten (z. B. Reinigung, zusätzliche Polizei- und Rettungsdienstpräsenz) direkt zur Kasse gebeten werden, etwa über eine kommunale Veranstaltungsabgabe. Grundsätzlich wäre auch eine marktbasierte Strategie ähnlich dem Emissionshandel denkbar, z. B. eine begrenzte, handelbare Anzahl an Genehmigungen für Großveranstaltungen mit definierten Lärm- oder Umweltbelastungsobergrenzen — in der Praxis wird das Problem bei Festivals aber meist eher über direkte Auflagen und Gebühren (Regulierung) als über Zertifikatehandel gelöst." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie viele Einheiten muss die Gesamtverschmutzung der drei Unternehmen im Zertifikat-Beispiel gesenkt werden?", options: ["80 Einheiten","40 Einheiten","120 Einheiten","200 Einheiten"], correctIndex: 0, explanation: "Ausgehend von 200 Einheiten (70+80+50) auf ein Ziel von 120 Einheiten müssen insgesamt 80 Einheiten vermieden werden." },
      { id: "q2", question: "Welches Unternehmen vermeidet im kosteneffizienten Gleichgewicht am meisten?", options: ["Asbest AG","Beton AG (höchste Vermeidungskosten)","Chemie AG (niedrigste Vermeidungskosten)","Alle vermeiden gleich viel"], correctIndex: 2, explanation: "Chemie AG hat mit 10 €/Einheit die niedrigsten Vermeidungskosten und vermeidet daher zuerst und am meisten (ihre volle Verschmutzung von 50 Einheiten)." },
      { id: "q3", question: "Welches Unternehmen kauft im Gleichgewicht Zertifikate zu?", options: ["Keines","Beton AG (höchste Vermeidungskosten, vermeidet nicht)","Chemie AG","Asbest AG"], correctIndex: 1, explanation: "Beton AG hat die höchsten Vermeidungskosten (25 €/Einheit) und vermeidet daher nicht, sondern kauft die fehlenden Zertifikate von Chemie AG." },
      { id: "q4", question: "Wie hoch sind die gesamten Vermeidungskosten mit handelbaren Zertifikaten im Beispiel?", options: ["600 €","1.700 €","1.975 €","1.100 €"], correctIndex: 3, explanation: "Chemie AG: 500 € (50×10), Asbest AG: 600 € (30×20), Beton AG: 0 € — Summe 1.100 €." },
      { id: "q5", question: "Wie hoch wären die Gesamtkosten ohne Zertifikatehandel (jedes Unternehmen reduziert eigenständig auf 40 Einheiten)?", options: ["1.700 €","2.000 €","500 €","1.100 €"], correctIndex: 0, explanation: "Asbest AG 600 € + Beton AG 1.000 € + Chemie AG 100 € = 1.700 € ohne Handel." },
      { id: "q6", question: "Wie viel spart der Handel mit Zertifikaten in diesem Beispiel gegenüber der Lösung ohne Handel?", options: ["300 €","600 €","0 €","1.700 €"], correctIndex: 1, explanation: "1.700 € (ohne Handel) minus 1.100 € (mit Handel) ergibt eine Einsparung von 600 €." },
      { id: "q7", question: "Warum ist die steuerliche Absetzbarkeit von Spenden ein Beispiel für einen staatlichen Anreiz zu privaten Lösungen bei Externalitäten?", options: ["Weil sie die effektiven Kosten des Spendens senkt und dadurch mehr private Bereitstellung positiver Externalitäten fördert","Weil sie nur für Unternehmen gilt","Weil sie eine direkte Regulierung ist","Weil sie Spenden komplett verbietet"], correctIndex: 0, explanation: "Die Absetzbarkeit senkt die Kosten des Spendens und fördert dadurch private (statt staatlich regulierte) Lösungen für positive Externalitäten." },
      { id: "q8", question: "Welche Art von Externalität könnte ein großes Musikfestival für Anwohner einer Kleinstadt zusätzlich zu negativen Effekten auch erzeugen?", options: ["Ausschließlich negative Effekte sind möglich","Gar keine Externalitäten","Nur staatliche Subventionseffekte","Positive Effekte durch zusätzliche lokale Wirtschaftsaktivität und Bekanntheit"], correctIndex: 3, explanation: "Neben negativen Effekten (Lärm, Vermüllung) kann ein Festival auch positive Externalitäten erzeugen, z. B. durch zusätzliche Gastronomieumsätze und überregionale Bekanntheit der Stadt." }
    ]
  }
];
