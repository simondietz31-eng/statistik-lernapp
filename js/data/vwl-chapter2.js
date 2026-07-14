const VWL_CHAPTER2_TOPICS = [
  {
    id: "vwl-marktstrukturen-nachfrage",
    chapter: 2,
    order: 1,
    title: "Märkte, Wettbewerbsformen und die Nachfrage nach Gütern",
    icon: "🛒",
    summary: "Wie Märkte und Wettbewerbsformen (Polypol, Monopol, Oligopol, monopolistische Konkurrenz) definiert sind, was das Gesetz der Nachfrage besagt, wie die Nachfragekurve entsteht, und wann eine Bewegung entlang der Kurve von einer Verschiebung der Kurve zu unterscheiden ist.",
    explanation: [
      { type: "p", text: "Angebot und Nachfrage gehören zu den meistgenutzten Begriffen der Ökonomik, weil sie die Triebkräfte sind, die eine Marktwirtschaft funktionieren lassen. Die moderne Mikroökonomik befasst sich im Kern damit, wie Angebot, Nachfrage und daraus resultierende Marktgleichgewichte zustande kommen." },
      { type: "p", text: "Ein Markt besteht aus einer Gruppe potenzieller Käufer und einer Gruppe potenzieller Verkäufer einer bestimmten Ware oder Dienstleistung. Die Käufer bestimmen dabei die Nachfrage, die Verkäufer das Angebot eines Gutes. Je nachdem, wie diese Gruppen strukturiert sind, unterscheidet man mehrere Marktformen:" },
      { type: "list", items: [
        "Vollständiger Wettbewerb (Polypol): viele Anbieter und viele Nachfrager mit homogenen, also identischen Produkten. Kein einzelner Marktteilnehmer kann den Preis beeinflussen — alle sind Preisnehmer bzw. Mengenanpasser.",
        "Monopol: nur ein einziger Verkäufer, der den Marktpreis selbst festsetzen kann. Es fehlt jeglicher Wettbewerb.",
        "Oligopol: wenige Anbieter stehen vielen Nachfragern gegenüber. Zwischen den wenigen Oligopolisten herrscht häufig, aber nicht immer, nur geringer Wettbewerb, weil sie strategisch aufeinander reagieren.",
        "Monopolistische Konkurrenz: viele Anbieter und viele Nachfrager wie im Polypol, allerdings mit differenzierten statt homogenen Produkten. Dadurch kann jeder Anbieter den Preis seines eigenen Produkts innerhalb gewisser Grenzen selbst beeinflussen."
      ]},
      { type: "p", text: "Um reale Marktstrukturen zu analysieren, greift man häufig auf die sogenannte SCP-Analyse zurück (Structure – Conduct – Performance): Die Marktstruktur (z. B. Marktanteile, Eintrittsbarrieren, Homogenität der Produkte) beeinflusst das Marktverhalten der Anbieter (z. B. Preis- und Mengenverhalten, Kollusion oder Abschottung), und dieses Verhalten wiederum bestimmt das Marktergebnis (Preise, Gewinne, Effizienz, Wohlfahrt, Innovation). In Deutschland überwachen Institutionen wie das Bundeskartellamt und die Monopolkommission, ob reale Märkte fairen Wettbewerbsbedingungen entsprechen." },
      { type: "p", text: "Die nachgefragte Menge eines Gutes ist die Menge, die Käufer erwerben wollen und können. Das Gesetz der Nachfrage besagt: Unter sonst gleichen Bedingungen (ceteris paribus) führt ein Preisanstieg zu einem Rückgang der nachgefragten Menge — bzw. umgekehrt: Ein sinkender Preis erhöht die nachgefragte Menge." },
      { type: "p", text: "Dieser Zusammenhang wird grafisch durch die Nachfragekurve dargestellt, die den Preis eines Gutes der jeweils nachgefragten Menge gegenüberstellt. Weil steigende Preise die Nachfragemenge senken, verläuft die Nachfragekurve fallend (negative Steigung). Ein Beispiel: Für Fahrten von Markus gilt bei einem Preis von 10 € eine Nachfragemenge von 60 Fahrten pro Jahr, bei 35 € sinkt sie auf 0. Als lineare Funktion lässt sich das schreiben als" },
      { type: "formula", tex: "x = 70 - 2p" },
      { type: "p", text: "wobei x die nachgefragte Menge und p der Preis pro Fahrt ist. Die Marktnachfrage ergibt sich aus der Summe aller individuellen Nachfragemengen bei einem gegebenen Preis; grafisch entsteht die Marktnachfragekurve durch horizontale Addition aller individuellen Nachfragekurven." },
      { type: "p", text: "Wichtig ist die Unterscheidung zwischen einer Bewegung entlang der Nachfragekurve und einer Verschiebung der gesamten Kurve. Eine reine Preisänderung führt zu einer Bewegung entlang derselben, unveränderten Nachfragekurve. Verändert sich dagegen eine der anderen Bestimmungsgrößen der Nachfrage, verschiebt sich die gesamte Kurve nach rechts (Zunahme der Nachfrage) oder nach links (Abnahme der Nachfrage):" },
      { type: "list", items: [
        "Einkommen: Bei einem normalen Gut steigt die Nachfrage mit dem Einkommen; bei einem inferioren Gut sinkt sie dagegen mit steigendem Einkommen.",
        "Preise verwandter Güter: Sinkt der Preis eines Gutes und verringert das die Nachfrage nach einem anderen Gut, sind die beiden Güter Substitute (Ersatzgüter). Erhöht das Sinken des Preises eines Gutes dagegen die Nachfrage nach einem anderen Gut, handelt es sich um komplementäre Güter.",
        "Vorlieben und Geschmack (Trends/Präferenzen).",
        "Erwartungen, insbesondere über künftige Preise.",
        "Bevölkerungsgröße und -struktur."
      ]},
      { type: "p", text: "Ein bekanntes ökonomisches Streitthema ist die Frage, ob Kinder ein normales oder ein inferiores Gut sind. Malthus argumentierte im 18. Jahrhundert, dass steigendes Einkommen zu mehr Geburten führt, sodass Bevölkerungswachstum das Einkommenswachstum immer wieder aufzehrt (Subsistenzniveau). Gary Becker zeigte im 20. Jahrhundert dagegen, dass steigendes Einkommen tendenziell zu weniger, dafür aber besser ausgebildeten Kindern führt — ein klassisches Beispiel dafür, wie unterschiedliche Annahmen zu unterschiedlichen Modellvorhersagen führen können." }
    ],
    exercises: [
      {
        id: "vwl-marktstrukturen-nachfrage-e1",
        prompt: "Erläutern Sie den Unterschied zwischen einem Polypol und einem Monopol.",
        solution: [{ type: "p", text: "Im Polypol (vollständiger Wettbewerb) stehen viele Anbieter vielen Nachfragern mit homogenen Produkten gegenüber; kein Einzelner kann den Marktpreis beeinflussen, alle sind Preisnehmer. Im Monopol gibt es dagegen nur einen einzigen Verkäufer, der mangels Wettbewerb den Marktpreis selbst festsetzen kann." }]
      },
      {
        id: "vwl-marktstrukturen-nachfrage-e2",
        prompt: "Was besagt das Gesetz der Nachfrage, und welche Form hat die Nachfragekurve deshalb?",
        solution: [{ type: "p", text: "Das Gesetz der Nachfrage besagt, dass unter sonst gleichen Bedingungen ein Preisanstieg zu einem Rückgang der nachgefragten Menge führt. Deshalb verläuft die Nachfragekurve fallend, sie hat eine negative Steigung." }]
      },
      {
        id: "vwl-marktstrukturen-nachfrage-e3",
        prompt: "Worin unterscheidet sich eine Bewegung entlang der Nachfragekurve von einer Verschiebung der Nachfragekurve?",
        solution: [{ type: "p", text: "Eine Bewegung entlang der Nachfragekurve wird ausschließlich durch eine Preisänderung des betrachteten Gutes selbst ausgelöst; die Kurve bleibt dabei unverändert. Eine Verschiebung der gesamten Kurve entsteht dagegen, wenn sich eine der anderen Bestimmungsgrößen der Nachfrage ändert, z. B. das Einkommen, die Preise verwandter Güter, Vorlieben, Erwartungen oder die Bevölkerungsgröße." }]
      },
      {
        id: "vwl-marktstrukturen-nachfrage-e4",
        prompt: "Was ist der Unterschied zwischen Substituten und komplementären Gütern? Nennen Sie je ein Beispiel.",
        solution: [{ type: "p", text: "Substitute sind Güter, bei denen ein sinkender Preis des einen Gutes die Nachfrage nach dem anderen Gut verringert, z. B. Butter und Margarine. Komplementäre Güter sind Güter, bei denen ein sinkender Preis des einen Gutes die Nachfrage nach dem anderen Gut erhöht, z. B. Autos und Benzin." }]
      },
      {
        id: "vwl-marktstrukturen-nachfrage-e5",
        prompt: "Was unterscheidet ein normales von einem inferioren Gut hinsichtlich des Einkommenseffekts?",
        solution: [{ type: "p", text: "Bei einem normalen Gut steigt die nachgefragte Menge, wenn das Einkommen der Konsumenten steigt. Bei einem inferioren Gut sinkt die nachgefragte Menge dagegen, wenn das Einkommen steigt, weil Konsumenten dann eher auf höherwertige Alternativen ausweichen." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Was kennzeichnet einen Wettbewerbsmarkt (Polypol)?", options: ["Ein einziger Anbieter setzt den Preis fest", "Viele Anbieter und viele Nachfrager mit homogenen Produkten, keiner kann den Preis beeinflussen", "Wenige Anbieter mit hoher Marktmacht", "Nur ein Nachfrager trifft auf viele Anbieter"], correctIndex: 1, explanation: "Im Polypol gibt es viele Anbieter und Nachfrager mit identischen Produkten; alle sind Preisnehmer." },
      { id: "q2", question: "Welche Marktform liegt vor, wenn nur ein Verkäufer den Marktpreis festsetzen kann?", options: ["Oligopol", "Monopolistische Konkurrenz", "Monopol", "Polypol"], correctIndex: 2, explanation: "Ein Monopol besteht aus nur einem Verkäufer, der mangels Wettbewerb den Preis selbst bestimmen kann." },
      { id: "q3", question: "Was kennzeichnet ein Oligopol?", options: ["Viele Anbieter mit homogenen Produkten", "Wenige Anbieter und viele Nachfrager, oft mit geringem Wettbewerb untereinander", "Nur ein Anbieter am Markt", "Viele Anbieter mit differenzierten Produkten"], correctIndex: 1, explanation: "Im Oligopol stehen wenige Anbieter vielen Nachfragern gegenüber, häufig mit geringem Wettbewerb zwischen den Oligopolisten." },
      { id: "q4", question: "Was besagt das Gesetz der Nachfrage?", options: ["Ein Preisanstieg führt c.p. zu einem Rückgang der nachgefragten Menge", "Ein Preisanstieg führt c.p. zu einem Anstieg der nachgefragten Menge", "Nachfrage ist unabhängig vom Preis", "Nachfrage hängt nur vom Angebot ab"], correctIndex: 0, explanation: "Das Gesetz der Nachfrage besagt, dass unter sonst gleichen Bedingungen ein Preisanstieg die nachgefragte Menge senkt." },
      { id: "q5", question: "Welche Steigung hat die Nachfragekurve typischerweise?", options: ["Positiv", "Negativ", "Konstant Null", "Unendlich"], correctIndex: 1, explanation: "Weil steigende Preise die Nachfragemenge senken, verläuft die Nachfragekurve fallend, also mit negativer Steigung." },
      { id: "q6", question: "Wodurch entsteht eine reine Bewegung entlang der Nachfragekurve (statt einer Verschiebung)?", options: ["Eine Änderung des Einkommens", "Eine Änderung des Preises des betrachteten Gutes selbst", "Eine Änderung der Bevölkerungsgröße", "Eine Änderung der Vorlieben der Konsumenten"], correctIndex: 1, explanation: "Nur eine Preisänderung des betrachteten Gutes selbst führt zu einer Bewegung entlang der unveränderten Nachfragekurve." },
      { id: "q7", question: "Wie wirkt sich ein Einkommensanstieg bei einem inferioren Gut auf die Nachfrage aus?", options: ["Die Nachfrage steigt", "Die Nachfrage sinkt", "Die Nachfrage bleibt konstant", "Die Nachfragekurve wird zur Angebotskurve"], correctIndex: 1, explanation: "Bei einem inferioren Gut sinkt die Nachfrage, wenn das Einkommen steigt." },
      { id: "q8", question: "Zwei Güter sind Substitute, wenn ...", options: ["ein sinkender Preis des einen Gutes die Nachfrage nach dem anderen Gut erhöht", "ein sinkender Preis des einen Gutes die Nachfrage nach dem anderen Gut verringert", "beide Güter immer gemeinsam konsumiert werden", "beide Güter denselben Preis haben"], correctIndex: 1, explanation: "Substitute sind Güter, bei denen ein sinkender Preis des einen Gutes die Nachfrage nach dem anderen Gut verringert." },
      { id: "q9", question: "Zwei Güter sind komplementär, wenn ...", options: ["ein sinkender Preis des einen Gutes die Nachfrage nach dem anderen Gut erhöht", "ein sinkender Preis des einen Gutes die Nachfrage nach dem anderen Gut verringert", "sie nie gemeinsam gekauft werden", "sie identische Produkte sind"], correctIndex: 0, explanation: "Komplementäre Güter zeichnen sich dadurch aus, dass ein sinkender Preis des einen Gutes die Nachfrage nach dem anderen Gut erhöht." },
      { id: "q10", question: "Wie ergibt sich die Marktnachfragekurve aus den individuellen Nachfragekurven?", options: ["Durch vertikale Addition der individuellen Kurven", "Durch horizontale Addition der individuellen Kurven", "Durch Multiplikation der individuellen Kurven", "Durch Subtraktion der individuellen Kurven"], correctIndex: 1, explanation: "Die Marktnachfragekurve ergibt sich grafisch aus der horizontalen Addition aller individuellen Nachfragekurven." }
    ]
  },
  {
    id: "vwl-angebot-marktgleichgewicht",
    chapter: 2,
    order: 2,
    title: "Das Angebot an Gütern und das Marktgleichgewicht",
    icon: "⚖️",
    summary: "Das Gesetz des Angebots, die Angebotskurve und ihre Bestimmungsgrößen, das Zustandekommen des Marktgleichgewichts, Angebots- und Nachfrageüberschuss, sowie die Drei-Schritte-Methode zur Analyse von Gleichgewichtsänderungen am Beispiel des deutschen Wohnungsmarkts.",
    explanation: [
      { type: "p", text: "Die Angebotsmenge eines Gutes ist die Menge, die Verkäufer veräußern wollen und können. Das Gesetz des Angebots besagt spiegelbildlich zur Nachfrage: Unter sonst gleichen Bedingungen (ceteris paribus) steigt die angebotene Menge mit dem Preis. Grafisch stellt die Angebotskurve diesen Zusammenhang zwischen Preis und Angebotsmenge dar; da eine steigende angebotene Menge mit einem steigenden Preis einhergeht, verläuft die Angebotskurve steigend (positive Steigung). Ein Beispiel: Bei einem Preis von 20 € bietet Anton 30 Fahrten pro Jahr an, als lineare Funktion" },
      { type: "formula", tex: "x = 2p - 10" },
      { type: "p", text: "Das Marktangebot ergibt sich analog zur Marktnachfrage aus der horizontalen Addition aller individuellen Angebotskurven, also der Summe aller individuellen Angebotsmengen bei einem gegebenen Preis." },
      { type: "p", text: "Auch beim Angebot ist zwischen einer Bewegung entlang der Kurve und einer Verschiebung der gesamten Kurve zu unterscheiden. Eine reine Preisänderung führt zu einer Bewegung entlang der unveränderten Angebotskurve. Eine Verschiebung der gesamten Kurve entsteht dagegen durch Veränderungen von:" },
      { type: "list", items: [
        "Input- bzw. Einkaufspreisen (z. B. Rohstoffkosten)",
        "Technologie und technologischem Fortschritt",
        "der Anzahl der Anbieter am Markt",
        "Erwartungen über die künftige Marktpreisentwicklung",
        "natürlichen und gesellschaftlichen Faktoren"
      ]},
      { type: "p", text: "Ein Gleichgewicht beschreibt den Zustand, in dem angebotene und nachgefragte Menge übereinstimmen. Der Gleichgewichtspreis ist der Preis, der Angebot und Nachfrage zur Übereinstimmung bringt; die Gleichgewichtsmenge ist die dabei gehandelte Menge. Grafisch liegt das Gleichgewicht am Schnittpunkt von Angebots- und Nachfragekurve." },
      { type: "p", text: "Liegt der aktuelle Marktpreis oberhalb des Gleichgewichtspreises, übersteigt die angebotene Menge die nachgefragte Menge — es entsteht ein Angebotsüberschuss. Anbieter reagieren darauf, indem sie ihre Preise senken, um den Absatz zu stimulieren, worauf Nachfrager wiederum mehr nachfragen; der Markt bewegt sich so zurück zum Gleichgewicht. Liegt der aktuelle Preis dagegen unterhalb des Gleichgewichtspreises, übersteigt die nachgefragte Menge das Angebot — es entsteht ein Nachfrageüberschuss bzw. eine Güterknappheit. Anbieter erhöhen dann ihre Preise, um den Erlös zu steigern, worauf Nachfrager weniger nachfragen; auch hier bewegt sich der Markt zum Gleichgewicht zurück. Dieser Mechanismus wird als Gesetz von Angebot und Nachfrage bezeichnet: Preisanpassungen führen zur Angleichung von angebotener und nachgefragter Menge." },
      { type: "p", text: "Um zu analysieren, wie sich ein Ereignis auf das Marktgleichgewicht auswirkt, empfiehlt sich eine Drei-Schritte-Methode: Erstens entscheiden, ob das Ereignis die Angebots- oder die Nachfragekurve (oder beide) beeinflusst. Zweitens entscheiden, in welche Richtung sich die betroffene(n) Kurve(n) verschiebt bzw. verschieben. Drittens mithilfe des Angebots-Nachfrage-Diagramms die resultierende Änderung von Gleichgewichtspreis und -menge ableiten. Ein Nachfrageanstieg (z. B. durch ein Großereignis wie ein Pokalfinale) führt bei konstantem Angebot zu einem höheren Gleichgewichtspreis und einer höheren Gleichgewichtsmenge. Ein Angebotsrückgang (z. B. weil Anbieter krankheitsbedingt ausfallen) führt bei konstanter Nachfrage zu einem höheren Gleichgewichtspreis, aber einer niedrigeren Gleichgewichtsmenge. Verschieben sich Angebot und Nachfrage gleichzeitig in dieselbe Richtung, ist die Wirkung auf den Preis oder die Menge teilweise nicht mehr eindeutig bestimmbar, ohne die relative Stärke beider Verschiebungen zu kennen." },
      { type: "p", text: "Ein aktuelles Anwendungsbeispiel ist der deutsche Wohnungsmarkt, der sich in einer Anspannungsphase befindet: In Ballungsräumen herrscht ein Nachfrageüberhang, während es in ländlichen Regionen teilweise ein Überangebot gibt; gleichzeitig ist die Neubautätigkeit schwach. Bei Mietwohnungen ist die Nachfrage durch Zuwanderung, Urbanisierung und die zunehmende Substitution von Wohneigentum durch Miete (weil Eigentum unerschwinglicher geworden ist) deutlich gestiegen, während das Angebot durch eine Neubaukrise und Regulierung (z. B. Mietendeckel, Preisbremsen) stagniert oder sinkt — das Ergebnis ist ein starker Nachfrageüberhang mit steigenden Mieten. Bei Eigentumswohnungen ist dagegen zunächst die Nachfrage zurückgegangen, weil gestiegene Zinsen die Finanzierung verteuert haben; das führte 2022–2024 zu sinkenden Preisen. Da inzwischen aber auch der Neubau eingebrochen ist und das Angebot langfristig knapper wird, stabilisieren sich die Preise aktuell wieder." }
    ],
    exercises: [
      {
        id: "vwl-angebot-marktgleichgewicht-e1",
        prompt: "Was besagt das Gesetz des Angebots, und welche Form hat die Angebotskurve deshalb?",
        solution: [{ type: "p", text: "Das Gesetz des Angebots besagt, dass unter sonst gleichen Bedingungen die angebotene Menge mit dem Preis steigt. Deshalb verläuft die Angebotskurve steigend, sie hat eine positive Steigung." }]
      },
      {
        id: "vwl-angebot-marktgleichgewicht-e2",
        prompt: "Nennen Sie die Bestimmungsgrößen, die die Angebotskurve verschieben (nicht nur eine Bewegung entlang der Kurve auslösen).",
        solution: [{ type: "p", text: "Die Angebotskurve verschiebt sich durch Änderungen der Input- bzw. Einkaufspreise, der Technologie, der Anzahl der Anbieter, der Erwartungen über künftige Marktpreise sowie natürlicher und gesellschaftlicher Faktoren. Eine reine Preisänderung des betrachteten Gutes führt dagegen nur zu einer Bewegung entlang der unveränderten Kurve." }]
      },
      {
        id: "vwl-angebot-marktgleichgewicht-e3",
        prompt: "Erklären Sie den Anpassungsmechanismus, der bei einem Angebotsüberschuss zum Marktgleichgewicht zurückführt.",
        solution: [{ type: "p", text: "Liegt der aktuelle Preis über dem Gleichgewichtspreis, übersteigt die angebotene die nachgefragte Menge (Angebotsüberschuss). Anbieter senken daraufhin ihre Preise, um den Absatz zu stimulieren. Durch die Preissenkung fragen Konsumenten wiederum mehr nach. Beide Effekte zusammen bewegen den Markt zurück zum Gleichgewicht." }]
      },
      {
        id: "vwl-angebot-marktgleichgewicht-e4",
        prompt: "Beschreiben Sie die drei Schritte, mit denen man die Auswirkung eines Ereignisses auf das Marktgleichgewicht analysiert.",
        solution: [{ type: "p", text: "Erstens entscheidet man, ob das Ereignis die Angebots- oder die Nachfragekurve (oder beide) betrifft. Zweitens bestimmt man die Richtung der jeweiligen Kurvenverschiebung. Drittens liest man mithilfe des Angebots-Nachfrage-Diagramms ab, wie sich Gleichgewichtspreis und Gleichgewichtsmenge dadurch verändern." }]
      },
      {
        id: "vwl-angebot-marktgleichgewicht-e5",
        prompt: "Erklären Sie anhand des deutschen Mietwohnungsmarkts, warum die Mieten in Ballungsräumen gestiegen sind.",
        solution: [{ type: "p", text: "Die Nachfrage nach Mietwohnungen ist durch Zuwanderung, Urbanisierung und die Substitution von unerschwinglich gewordenem Wohneigentum durch Miete deutlich gestiegen (Rechtsverschiebung der Nachfragekurve). Gleichzeitig stagniert oder sinkt das Angebot, weil die Neubautätigkeit eingebrochen ist und Regulierungen wie Mietendeckel die Marktanpassung hemmen. Steigende Nachfrage bei gleichzeitig stagnierendem oder sinkendem Angebot führt zu einem starken Nachfrageüberhang und damit zu steigenden Mieten." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Was besagt das Gesetz des Angebots?", options: ["Die angebotene Menge sinkt c.p. mit steigendem Preis", "Die angebotene Menge steigt c.p. mit steigendem Preis", "Das Angebot ist unabhängig vom Preis", "Das Angebot entspricht immer der Nachfrage"], correctIndex: 1, explanation: "Nach dem Gesetz des Angebots steigt die angebotene Menge unter sonst gleichen Bedingungen mit dem Preis." },
      { id: "q2", question: "Welche Steigung hat die Angebotskurve typischerweise?", options: ["Negativ", "Positiv", "Null", "Nicht definierbar"], correctIndex: 1, explanation: "Da die angebotene Menge mit dem Preis steigt, hat die Angebotskurve eine positive Steigung." },
      { id: "q3", question: "Welcher Faktor verschiebt die Angebotskurve NICHT, sondern führt nur zu einer Bewegung entlang ihr?", options: ["Technologischer Fortschritt", "Eine Preisänderung des betrachteten Gutes selbst", "Eine Änderung der Inputpreise", "Eine Änderung der Anzahl der Anbieter"], correctIndex: 1, explanation: "Nur eine Preisänderung des betrachteten Gutes selbst bewirkt eine Bewegung entlang der unveränderten Angebotskurve." },
      { id: "q4", question: "Wo liegt das Marktgleichgewicht grafisch?", options: ["Am linken Rand des Diagramms", "Am Schnittpunkt von Angebots- und Nachfragekurve", "Am höchsten Punkt der Nachfragekurve", "Am niedrigsten Punkt der Angebotskurve"], correctIndex: 1, explanation: "Das Marktgleichgewicht liegt am Schnittpunkt von Angebots- und Nachfragekurve." },
      { id: "q5", question: "Was passiert bei einem Angebotsüberschuss (Preis über dem Gleichgewichtspreis)?", options: ["Anbieter erhöhen ihre Preise weiter", "Anbieter senken ihre Preise, um den Absatz zu stimulieren", "Der Markt bleibt dauerhaft im Ungleichgewicht", "Die Nachfragekurve verschwindet"], correctIndex: 1, explanation: "Bei einem Angebotsüberschuss senken Anbieter ihre Preise, um den Absatz zu stimulieren, wodurch sich der Markt zum Gleichgewicht hin bewegt." },
      { id: "q6", question: "Was passiert bei einem Nachfrageüberschuss (Preis unter dem Gleichgewichtspreis)?", options: ["Anbieter senken ihre Preise weiter", "Anbieter erhöhen ihre Preise, um den Erlös zu steigern", "Die Angebotskurve verschwindet", "Der Preis bleibt unverändert"], correctIndex: 1, explanation: "Bei einem Nachfrageüberschuss (Knappheit) erhöhen Anbieter ihre Preise, um den Erlös zu steigern, wodurch sich der Markt zum Gleichgewicht hin bewegt." },
      { id: "q7", question: "Was ist der erste Schritt bei der Analyse, wie sich ein Ereignis auf das Marktgleichgewicht auswirkt?", options: ["Die neue Gleichgewichtsmenge berechnen", "Entscheiden, ob das Ereignis die Angebots- und/oder die Nachfragekurve beeinflusst", "Den alten Gleichgewichtspreis löschen", "Die Steigung der Kurven verändern"], correctIndex: 1, explanation: "Zuerst muss geklärt werden, ob ein Ereignis die Angebots- oder die Nachfragekurve (oder beide) betrifft." },
      { id: "q8", question: "Wie verändert ein Nachfrageanstieg bei konstantem Angebot das Marktgleichgewicht?", options: ["Höherer Preis, höhere Menge", "Höherer Preis, niedrigere Menge", "Niedrigerer Preis, höhere Menge", "Preis und Menge bleiben unverändert"], correctIndex: 0, explanation: "Ein Nachfrageanstieg bei konstantem Angebot führt zu einem höheren Gleichgewichtspreis und einer höheren Gleichgewichtsmenge." },
      { id: "q9", question: "Wie verändert ein Angebotsrückgang bei konstanter Nachfrage das Marktgleichgewicht?", options: ["Höherer Preis, niedrigere Menge", "Niedrigerer Preis, niedrigere Menge", "Höherer Preis, höhere Menge", "Preis und Menge bleiben unverändert"], correctIndex: 0, explanation: "Ein Angebotsrückgang bei konstanter Nachfrage führt zu einem höheren Gleichgewichtspreis, aber einer niedrigeren Gleichgewichtsmenge." },
      { id: "q10", question: "Was ist laut Vorlesung ein zentraler Treiber der gestiegenen Mietpreise in deutschen Ballungsräumen auf der Angebotsseite?", options: ["Ein starker Anstieg der Zinsen für Eigentumswohnungen", "Eine Neubaukrise und Regulierung, die die Marktanpassung hemmen (z. B. Mietendeckel)", "Ein Überangebot an Mietwohnungen", "Ein Rückgang der Zuwanderung"], correctIndex: 1, explanation: "Auf der Angebotsseite stagniert oder sinkt das Angebot an Mietwohnungen wegen der Neubaukrise und hemmender Regulierung wie Mietendeckeln." }
    ]
  }
];
