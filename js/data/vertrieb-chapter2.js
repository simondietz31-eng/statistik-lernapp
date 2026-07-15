const VERTRIEB_CHAPTER2_TOPICS = [
  {
    id: "vertrieb-cd-paradigma",
    chapter: 2,
    order: 1,
    title: "Das C/D-Paradigma der Kundenzufriedenheit",
    icon: "⚖️",
    summary: "Wie Kundenzufriedenheit nach dem Confirmation/Disconfirmation-Paradigma aus dem Vergleich von Ist- und Soll-Leistung entsteht, und warum das Erwartungsniveau selbst innerhalb eines Segments und im Zeitverlauf schwankt.",
    explanation: [
      { type: "p", text: "Nach dem C/D-Paradigma (Confirmation/Disconfirmation-Paradigma, Homburg/Krohmer 2006) resultiert Kundenzufriedenheit aus dem Vergleich der Ist-Leistung — der wahrgenommenen, tatsächlichen Erfahrung des Kunden — mit einem individuellen Vergleichsstandard, der Soll-Leistung (Erwartung des Kunden)." },
      { type: "formula", tex: "\\text{Ist} = \\text{Soll} \\Rightarrow \\text{Konfirmation}" },
      { type: "p", text: "Aus diesem Vergleich ergeben sich drei mögliche Ergebnisse:" },
      { type: "list", items: [
        "Ist = Soll → Konfirmation → Zufriedenheit auf Konfirmationsniveau (die Erwartung wird genau erfüllt)",
        "Ist > Soll → positive Diskonfirmation → hohe Zufriedenheit (die Leistung übertrifft die Erwartung)",
        "Ist < Soll → negative Diskonfirmation → Unzufriedenheit (die Leistung bleibt hinter der Erwartung zurück)"
      ]},
      { type: "p", text: "Die praktische Anwendung des C/D-Paradigmas wird durch zwei Komplexitätsfaktoren erschwert (Stiller 2006):" },
      { type: "list", items: [
        "Faktor 1 — Heterogenität innerhalb eines Segments: Das Erwartungsniveau ist selbst innerhalb eines vermeintlich homogenen Kundensegments nicht immer gleich hoch. Im Idealfall müsste die Leistung daher individuell differenziert werden. Beispiel: Zwei Studierende kaufen denselben Laptop — der eine erwartet High-End-Leistung für aufwendige Anwendungen, der andere möchte lediglich, dass das Gerät zuverlässig funktioniert. Obwohl beide dasselbe Produkt erhalten, unterscheidet sich ihre Soll-Leistung erheblich.",
        "Faktor 2 — Schwankung im Zeitverlauf: Das Erwartungsniveau ein und desselben Kunden schwankt je nach Situation im Zeitverlauf. Die gleiche erbrachte Leistung führt deshalb nicht zwangsläufig zum gleichen Zufriedenheitsergebnis in einer anderen Kaufsituation. Beispiel: Derselbe Kellner-Service wird an einem entspannten Sonntagabend anders bewertet als unter Zeitdruck kurz vor einem wichtigen Meeting — im zweiten Fall ist die Erwartung an Schnelligkeit deutlich höher, sodass dieselbe Servicequalität als weniger zufriedenstellend empfunden werden kann."
      ]},
      { type: "p", text: "Diese beiden Komplexitätsfaktoren zeigen, dass Kundenzufriedenheit kein statischer, sondern ein individuell und situativ variabler Zustand ist, den ein Unternehmen bei der Gestaltung seiner Leistungen und bei der Interpretation von Zufriedenheitsmessungen berücksichtigen muss." }
    ],
    exercises: [
      {
        id: "vertrieb-cd-paradigma-e1",
        prompt: "Erklären Sie das C/D-Paradigma der Kundenzufriedenheit in eigenen Worten.",
        solution: [{ type: "p", text: "Das C/D-Paradigma (Confirmation/Disconfirmation-Paradigma) besagt, dass Kundenzufriedenheit aus dem Vergleich zwischen der Ist-Leistung, also der tatsächlich wahrgenommenen Erfahrung des Kunden, und der Soll-Leistung, also seinem individuellen Vergleichsstandard bzw. seiner Erwartung, entsteht. Stimmen Ist- und Soll-Leistung überein, spricht man von Konfirmation und der Kunde ist auf Konfirmationsniveau zufrieden. Übertrifft die Ist- die Soll-Leistung, entsteht positive Diskonfirmation und hohe Zufriedenheit; bleibt die Ist- hinter der Soll-Leistung zurück, entsteht negative Diskonfirmation und Unzufriedenheit." }]
      },
      {
        id: "vertrieb-cd-paradigma-e2",
        prompt: "Nennen Sie die drei möglichen Ergebnisse des Ist-Soll-Vergleichs im C/D-Paradigma und ordnen Sie jedem Ergebnis das resultierende Zufriedenheitsniveau zu.",
        solution: [{ type: "p", text: "Erstens: Ist = Soll führt zu Konfirmation und Zufriedenheit auf Konfirmationsniveau. Zweitens: Ist > Soll führt zu positiver Diskonfirmation und hoher Zufriedenheit. Drittens: Ist < Soll führt zu negativer Diskonfirmation und Unzufriedenheit." }]
      },
      {
        id: "vertrieb-cd-paradigma-e3",
        prompt: "Beschreiben Sie den ersten Komplexitätsfaktor nach Stiller (2006) und erläutern Sie ihn anhand des Laptop-Beispiels.",
        solution: [{ type: "p", text: "Der erste Komplexitätsfaktor besagt, dass das Erwartungsniveau selbst innerhalb eines Kundensegments nicht immer gleich hoch ist, sodass im Idealfall die Leistung individuell differenziert werden müsste. Im Beispiel kaufen zwei Studierende denselben Laptop, obwohl sie unterschiedliche Erwartungen haben: Der eine erwartet High-End-Leistung für anspruchsvolle Anwendungen, der andere erwartet lediglich, dass das Gerät zuverlässig funktioniert. Obwohl beide dieselbe Ist-Leistung erhalten, unterscheidet sich ihre jeweilige Zufriedenheit, weil ihre Soll-Leistung unterschiedlich ist." }]
      },
      {
        id: "vertrieb-cd-paradigma-e4",
        prompt: "Beschreiben Sie den zweiten Komplexitätsfaktor nach Stiller (2006) und erläutern Sie ihn anhand des Kellner-Beispiels.",
        solution: [{ type: "p", text: "Der zweite Komplexitätsfaktor besagt, dass das Erwartungsniveau eines Kunden im Zeitverlauf je nach Situation schwankt, sodass dieselbe erbrachte Leistung nicht zwangsläufig zum gleichen Zufriedenheitsergebnis führt. Im Beispiel wird derselbe Kellner-Service an einem entspannten Sonntagabend anders bewertet als unter Zeitdruck kurz vor einem wichtigen Meeting: In der Stresssituation ist die Erwartung an Schnelligkeit höher, sodass dieselbe Servicequalität als weniger zufriedenstellend wahrgenommen werden kann." }]
      },
      {
        id: "vertrieb-cd-paradigma-e5",
        prompt: "Warum ist es für Unternehmen wichtig, die beiden Komplexitätsfaktoren des C/D-Paradigmas zu kennen?",
        solution: [{ type: "p", text: "Die beiden Komplexitätsfaktoren zeigen, dass Kundenzufriedenheit kein einheitlicher, statischer Wert ist, sondern individuell und situativ stark variieren kann. Ein Unternehmen, das dies ignoriert und alle Kunden eines Segments gleich behandelt bzw. Zufriedenheitswerte ohne Rücksicht auf die jeweilige Kauf- oder Nutzungssituation interpretiert, läuft Gefahr, Erwartungsunterschiede zu übersehen und Leistungen falsch zu gestalten oder Messergebnisse falsch zu interpretieren. Das Wissen um diese Faktoren hilft, Leistungen differenzierter zu gestalten und Zufriedenheitsmessungen im jeweiligen Kontext richtig einzuordnen." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Was besagt das C/D-Paradigma nach Homburg/Krohmer (2006)?", options: ["Kundenzufriedenheit ist bei allen Kunden stets identisch", "Kundenzufriedenheit lässt sich grundsätzlich nicht messen", "Kundenzufriedenheit hängt ausschließlich vom Preis ab", "Kundenzufriedenheit entsteht aus dem Vergleich von Ist-Leistung und Soll-Leistung"], correctIndex: 3, explanation: "Das C/D-Paradigma beschreibt Kundenzufriedenheit als Ergebnis des Vergleichs zwischen der wahrgenommenen Ist-Leistung und der individuellen Soll-Leistung (Erwartung) des Kunden. Die anderen Optionen widersprechen dem Kerngedanken, dass Zufriedenheit ein individueller, relativer Vergleichswert ist und nicht von einer einzelnen Größe wie dem Preis allein oder gar nicht messbar wäre." },
      { id: "q2", question: "Was passiert bei Ist > Soll nach dem C/D-Paradigma?", options: ["Positive Diskonfirmation und hohe Zufriedenheit", "Negative Diskonfirmation und Unzufriedenheit", "Konfirmation und Zufriedenheit auf Konfirmationsniveau", "Es lässt sich in diesem Fall keine Aussage treffen"], correctIndex: 0, explanation: "Übertrifft die Ist-Leistung die Soll-Leistung, spricht man von positiver Diskonfirmation, die zu hoher Zufriedenheit führt. Negative Diskonfirmation entsteht dagegen bei Ist < Soll, und Konfirmation bei exakter Übereinstimmung — hier liegt aber ein Übertreffen der Erwartung vor, sodass keine dieser beiden Alternativen zutrifft." },
      { id: "q3", question: "Was passiert bei Ist < Soll nach dem C/D-Paradigma?", options: ["Es entsteht trotzdem hohe Zufriedenheit", "Negative Diskonfirmation und Unzufriedenheit", "Es entsteht positive Diskonfirmation", "Es liegt der Fall der Konfirmation vor"], correctIndex: 1, explanation: "Bleibt die Ist-Leistung hinter der Soll-Leistung zurück, entsteht negative Diskonfirmation und damit Unzufriedenheit. Positive Diskonfirmation und Konfirmation setzen dagegen voraus, dass die Ist-Leistung die Erwartung erreicht oder übertrifft, was hier gerade nicht der Fall ist." },
      { id: "q4", question: "Wie wird das Ergebnis bei Ist = Soll bezeichnet?", options: ["Eskalation der Kundenerwartung", "Konfirmation", "Frustration des Kunden", "Diskonfirmation"], correctIndex: 1, explanation: "Stimmen Ist- und Soll-Leistung exakt überein, spricht man von Konfirmation, die Zufriedenheit auf Konfirmationsniveau erzeugt. Diskonfirmation (positiv oder negativ) setzt dagegen eine Abweichung zwischen Ist und Soll voraus, die hier nicht vorliegt." },
      { id: "q5", question: "Was besagt der erste Komplexitätsfaktor nach Stiller (2006)?", options: ["Das Erwartungsniveau ist bei allen Kunden eines Segments stets identisch", "Erwartungen spielen für die Zufriedenheit grundsätzlich keine Rolle", "Ausschließlich die Ist-Leistung zählt, die Erwartung ist irrelevant", "Das Erwartungsniveau ist selbst innerhalb eines Segments nicht immer gleich hoch"], correctIndex: 3, explanation: "Der erste Komplexitätsfaktor besagt, dass das Erwartungsniveau selbst innerhalb eines vermeintlich homogenen Segments variieren kann, wie das Laptop-Beispiel mit den zwei Studierenden zeigt. Die übrigen Optionen behaupten das Gegenteil oder verneinen die Bedeutung von Erwartungen insgesamt, was dem Kern des C/D-Paradigmas widerspricht." },
      { id: "q6", question: "Im Laptop-Beispiel zu Komplexitätsfaktor 1: Warum sind zwei Studierende trotz identischen Produkts unterschiedlich zufrieden?", options: ["Weil ihre Soll-Leistung (Erwartung) unterschiedlich ist", "Weil sie unterschiedlich hohe Preise gezahlt haben", "Weil sie den Laptop bei unterschiedlichen Händlern gekauft haben", "Weil sie jeweils unterschiedliche Farben gewählt haben"], correctIndex: 0, explanation: "Obwohl die Ist-Leistung (derselbe Laptop) identisch ist, unterscheidet sich die Soll-Leistung der beiden Studierenden — der eine erwartet High-End-Leistung, der andere nur Zuverlässigkeit —, was gemäß dem C/D-Paradigma zu unterschiedlicher Zufriedenheit führt. Preis, Händler und Farbe sind im Beispiel gar nicht Teil der Erklärung." },
      { id: "q7", question: "Was besagt der zweite Komplexitätsfaktor nach Stiller (2006)?", options: ["Zufriedenheit ist vollkommen unabhängig von der jeweiligen Situation", "Das Erwartungsniveau eines Kunden schwankt im Zeitverlauf je nach Situation", "Ausschließlich der Preis beeinflusst die Erwartung des Kunden", "Das Erwartungsniveau bleibt über die Zeit stets konstant"], correctIndex: 1, explanation: "Der zweite Komplexitätsfaktor besagt, dass das Erwartungsniveau ein und desselben Kunden je nach Situation im Zeitverlauf schwankt, wie das Kellner-Beispiel zeigt. Die übrigen Optionen behaupten fälschlich, Erwartungen seien situationsunabhängig oder konstant, was dem beschriebenen Faktor widerspricht." },
      { id: "q8", question: "Im Kellner-Beispiel zu Komplexitätsfaktor 2: Warum wird derselbe Service unterschiedlich bewertet?", options: ["Weil die Erwartung je nach Situation (entspannter Abend vs. Zeitdruck) unterschiedlich ist", "Weil der Kellner an den beiden Tagen unterschiedlich gekleidet war", "Weil sich zwischen den Besuchen die Speisekarte geändert hat", "Weil sich zwischen den Besuchen der Preis geändert hat"], correctIndex: 0, explanation: "Unter Zeitdruck vor einem wichtigen Meeting ist die Erwartung an Schnelligkeit deutlich höher als an einem entspannten Sonntagabend, weshalb dieselbe Ist-Leistung des Kellners unterschiedlich bewertet wird. Kleidung, Speisekarte und Preis werden im Beispiel gar nicht als Ursache genannt." },
      { id: "q9", question: "Welche zwei Größen werden im C/D-Paradigma miteinander verglichen?", options: ["Angebot und Nachfrage am Markt", "Preis und wahrgenommene Qualität", "Ist-Leistung und Soll-Leistung", "Marktanteil und erzielter Umsatz"], correctIndex: 2, explanation: "Im Zentrum des C/D-Paradigmas steht der Vergleich von Ist-Leistung (der wahrgenommenen, tatsächlichen Erfahrung) und Soll-Leistung (dem individuellen Vergleichsstandard bzw. der Erwartung) des Kunden. Angebot/Nachfrage, Preis/Qualität und Marktanteil/Umsatz sind andere betriebswirtschaftliche Größenpaare, die mit dem C/D-Paradigma nichts zu tun haben." },
      { id: "q10", question: "Welche Konsequenz ergibt sich aus den beiden Komplexitätsfaktoren für die Unternehmenspraxis?", options: ["Alle Kunden eines Segments sollten grundsätzlich identisch behandelt werden", "Erwartungen sind für die Kundenzufriedenheit letztlich irrelevant", "Erwartungsniveaus können individuell und situativ variieren und sollten bei der Leistungsgestaltung berücksichtigt werden", "Zufriedenheit lässt sich völlig unabhängig von Erwartungen managen"], correctIndex: 2, explanation: "Da das Erwartungsniveau sowohl innerhalb eines Segments (Faktor 1) als auch im Zeitverlauf (Faktor 2) schwanken kann, sollten Unternehmen dies bei der Gestaltung ihrer Leistungen und bei der Interpretation von Zufriedenheitsmessungen berücksichtigen. Eine identische Behandlung aller Kunden oder das Ignorieren von Erwartungen widerspricht genau dieser Erkenntnis." }
    ]
  },
  {
    id: "vertrieb-zufriedenheitsfalle-loyalitaet",
    chapter: 2,
    order: 2,
    title: "Kundenzufriedenheitsfalle und Kundenloyalität",
    icon: "🪜",
    summary: "Wie Kundenzufriedenheit trotz steigender Leistung sinken kann, welche drei Dimensionen Kundenloyalität umfasst, und wie sich Zufriedenheit, Loyalität und Bindung als verwandte, aber unterschiedliche Konstrukte zueinander verhalten.",
    explanation: [
      { type: "p", text: "Die Kundenzufriedenheitsfalle beschreibt ein Phänomen, bei dem die Zufriedenheit der Kunden sinken kann, obwohl die tatsächlich erbrachte Leistung eines Unternehmens kontinuierlich steigt. Ursache ist, dass die Leistungserwartung der Kunden schneller steigt als die tatsächliche Leistung — mit der Folge einer steigenden Kundenfluktuation trotz objektiv besserer Leistung." },
      { type: "p", text: "Eine verwandte Darstellung zeigt: Steigt die Leistung eines Anbieters in Sprüngen, während der Preis gleich bleibt, kann dennoch Kundenfrustration entstehen — nämlich dann, wenn die Kundenansprüche, getrieben durch den Wettbewerb, schneller steigen als die einzelnen Leistungssprünge des Anbieters. Die relative Wahrnehmung der Leistung im Vergleich zu den (steigenden) Ansprüchen ist also entscheidend, nicht die absolute Leistungssteigerung." },
      { type: "p", text: "Kundenloyalität lässt sich in drei Dimensionen unterteilen, die häufig als Pyramide mit dem Wiederkauf als Basis dargestellt werden — sie sind jedoch als drei gleichrangige Dimensionen zu verstehen und nicht zwingend als starre Abfolge, da unterschiedliche Quellen sie in unterschiedlicher Reihenfolge darstellen:" },
      { type: "list", items: [
        "Wiederkauf: der Kunde kauft erneut beim selben Anbieter (Basis der Pyramide)",
        "Ausweitung: (a) ein höherer Anteil des eigenen Bedarfs wird beim Anbieter gedeckt (Anteil am Kundenbudget), und (b) Cross-Buying, also die Deckung des Bedarfs in zusätzlichen Produktkategorien beim gleichen Anbieter",
        "Empfehlung/Weiterempfehlung: der Kunde empfiehlt den Anbieter aktiv weiter (Spitze der Pyramide, seltenster Fall)"
      ]},
      { type: "p", text: "Zufriedenheit, Loyalität und Bindung sind drei verwandte, aber klar zu unterscheidende Konstrukte:" },
      { type: "list", items: [
        "Zufriedenheit ist eine Einstellung (kognitiv-affektive Bewertung der erlebten Leistung)",
        "Loyalität ist eine Verhaltensabsicht (die Absicht, wiederzukaufen, auszuweiten oder weiterzuempfehlen)",
        "Bindung ist tatsächliches, zukünftiges Verhalten"
      ]},
      { type: "p", text: "Diese drei Konstrukte können auseinanderfallen: So ist etwa eine hohe Bindung trotz niedriger Zufriedenheit möglich, wenn Wechselbarrieren (z. B. Vertragslaufzeiten, hohe Wechselkosten) den Kunden trotz Unzufriedenheit am Anbieter festhalten." },
      { type: "p", text: "Empirisch lassen sich zwei Formen des Zusammenhangs zwischen Zufriedenheit und wirtschaftlichem Erfolg (z. B. Loyalität) unterscheiden:" },
      { type: "list", items: [
        "Progressive Beziehung: ein linearer Zusammenhang, bei dem die Loyalität kontinuierlich mit steigender Zufriedenheit zunimmt",
        "Saddle-shaped (sattelförmige) Beziehung: z. B. bei der Zahlungsbereitschaft zu beobachten — es existiert eine mittlere 'Kein-Effekt'-Plateau-Zone, in der Zufriedenheitssteigerungen kaum Wirkung zeigen; erst ab einem bestimmten Schwellenwert wirkt Zufriedenheit stark auf das wirtschaftliche Ergebnis"
      ]}
    ],
    exercises: [
      {
        id: "vertrieb-zufriedenheitsfalle-loyalitaet-e1",
        prompt: "Erklären Sie die Kundenzufriedenheitsfalle. Warum kann die Zufriedenheit trotz steigender Leistung sinken?",
        solution: [{ type: "p", text: "Die Kundenzufriedenheitsfalle beschreibt, dass Kundenzufriedenheit sinken kann, obwohl die tatsächlich erbrachte Leistung eines Unternehmens kontinuierlich steigt. Der Grund liegt darin, dass die Leistungserwartung der Kunden schneller steigt als die tatsächliche Leistung des Unternehmens. Da Zufriedenheit gemäß dem C/D-Paradigma aus dem Vergleich von Ist- und Soll-Leistung entsteht, führt eine relativ stärker steigende Erwartung (Soll) im Vergleich zur Ist-Leistung zu sinkender Zufriedenheit — mit der Folge einer steigenden Kundenfluktuation trotz objektiv besserer Leistung." }]
      },
      {
        id: "vertrieb-zufriedenheitsfalle-loyalitaet-e2",
        prompt: "Nennen und beschreiben Sie die drei Dimensionen der Kundenloyalität.",
        solution: [{ type: "p", text: "Die erste Dimension ist der Wiederkauf, also die erneute Kaufentscheidung für denselben Anbieter, die häufig als Basis dargestellt wird. Die zweite Dimension ist die Ausweitung, die sich in zwei Formen zeigt: einen höheren Anteil des eigenen Bedarfs beim Anbieter zu decken, sowie Cross-Buying, also den Bedarf in zusätzlichen Produktkategorien beim gleichen Anbieter zu decken. Die dritte Dimension ist die Empfehlung bzw. Weiterempfehlung des Anbieters an Dritte, die als seltenster Fall gilt. Diese drei Dimensionen sind als gleichrangig zu verstehen, auch wenn sie oft als Pyramide dargestellt werden." }]
      },
      {
        id: "vertrieb-zufriedenheitsfalle-loyalitaet-e3",
        prompt: "Erklären Sie den Unterschied zwischen Zufriedenheit, Loyalität und Bindung und geben Sie ein Beispiel, in dem diese drei Konstrukte auseinanderfallen.",
        solution: [{ type: "p", text: "Zufriedenheit ist eine Einstellung, also eine kognitiv-affektive Bewertung der erlebten Leistung. Loyalität ist eine Verhaltensabsicht, also die Absicht, wiederzukaufen, den Bedarf auszuweiten oder weiterzuempfehlen. Bindung ist dagegen tatsächliches, zukünftiges Verhalten. Diese drei Konstrukte können auseinanderfallen: Ein Kunde kann trotz niedriger Zufriedenheit eine hohe Bindung aufweisen, wenn Wechselbarrieren wie lange Vertragslaufzeiten oder hohe Wechselkosten ihn davon abhalten, den Anbieter zu wechseln, obwohl er eigentlich unzufrieden ist." }]
      },
      {
        id: "vertrieb-zufriedenheitsfalle-loyalitaet-e4",
        prompt: "Beschreiben Sie die progressive und die sattelförmige (saddle-shaped) Beziehung zwischen Zufriedenheit und wirtschaftlichem Erfolg.",
        solution: [{ type: "p", text: "Die progressive Beziehung beschreibt einen linearen Zusammenhang, bei dem die Loyalität kontinuierlich mit steigender Zufriedenheit zunimmt. Die sattelförmige (saddle-shaped) Beziehung, die z. B. bei der Zahlungsbereitschaft zu beobachten ist, verläuft dagegen nicht linear: Es gibt eine mittlere Plateau-Zone, in der Zufriedenheitssteigerungen kaum eine Wirkung zeigen ('Kein-Effekt'-Zone). Erst wenn ein bestimmter Schwellenwert der Zufriedenheit überschritten wird, wirkt sich weitere Zufriedenheit stark auf das wirtschaftliche Ergebnis aus." }]
      },
      {
        id: "vertrieb-zufriedenheitsfalle-loyalitaet-e5",
        prompt: "Warum kann Kundenfrustration entstehen, obwohl die Leistung eines Anbieters in Sprüngen steigt und der Preis gleich bleibt?",
        solution: [{ type: "p", text: "Kundenfrustration kann entstehen, weil die Kundenansprüche — getrieben durch den Wettbewerb — schneller steigen können als die einzelnen Leistungssprünge des Anbieters. Auch wenn die absolute Leistung steigt und der Preis konstant bleibt, wird die Leistung relativ zu den (noch schneller steigenden) Ansprüchen der Kunden als unzureichend wahrgenommen, was zu Frustration führt. Entscheidend ist somit die relative Wahrnehmung der Leistung im Vergleich zu den Erwartungen, nicht die absolute Leistungssteigerung." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Was beschreibt die Kundenzufriedenheitsfalle?", options: ["Zufriedenheit sinkt ausschließlich bei objektiv sinkender Leistung", "Zufriedenheit ist grundsätzlich unabhängig von Erwartungen", "Zufriedenheit kann trotz kontinuierlich steigender Leistung sinken, wenn die Erwartung schneller steigt", "Zufriedenheit steigt automatisch immer mit der Leistung mit"], correctIndex: 2, explanation: "Die Kundenzufriedenheitsfalle beschreibt, dass Zufriedenheit sinken kann, obwohl die tatsächlich erbrachte Leistung steigt, weil die Leistungserwartung der Kunden noch schneller wächst als die Leistung selbst. Das folgt direkt aus dem C/D-Paradigma: Entscheidend ist nicht die absolute Ist-Leistung, sondern ihr relatives Verhältnis zur (mitwachsenden) Soll-Leistung." },
      { id: "q2", question: "Welche Folge hat die Kundenzufriedenheitsfalle typischerweise?", options: ["Steigende Kundenfluktuation trotz objektiv besserer Leistung", "In der Regel keine erkennbare Folge für das Unternehmen", "Eine spürbar sinkende Kundenfluktuation", "Automatisch und unabhängig davon steigende Umsätze"], correctIndex: 0, explanation: "Da die Erwartungen schneller steigen als die tatsächliche Leistung, sinkt die relative Zufriedenheit — mit der Folge einer steigenden Kundenfluktuation, obwohl die Leistung objektiv besser geworden ist. Die anderen Optionen unterstellen fälschlich, dass eine objektive Leistungssteigerung automatisch positive oder neutrale Effekte hätte." },
      { id: "q3", question: "Welche Dimension der Kundenloyalität bildet häufig die Basis der Pyramide?", options: ["Cross-Buying zusätzlicher Kategorien", "Wiederkauf", "Ausweitung des Bedarfsanteils", "Empfehlung an Dritte"], correctIndex: 1, explanation: "Der Wiederkauf — die erneute Kaufentscheidung für denselben Anbieter — wird häufig als Basisdimension der Pyramide dargestellt, da er die grundlegendste und häufigste Form von Loyalität ist. Cross-Buying gehört zur Dimension Ausweitung, und die Empfehlung bildet die seltenere Spitze der Pyramide." },
      { id: "q4", question: "Was versteht man unter Cross-Buying?", options: ["Der Kunde deckt Bedarf in zusätzlichen Produktkategorien beim gleichen Anbieter", "Der Kunde empfiehlt den Anbieter aktiv an Dritte weiter", "Der Kunde kauft beim Anbieter nur ein einziges Mal", "Der Kunde kauft ausschließlich noch beim Wettbewerber ein"], correctIndex: 0, explanation: "Cross-Buying bezeichnet konkret, dass ein Kunde seinen Bedarf zusätzlich in weiteren Produktkategorien beim selben Anbieter deckt, statt dort nur wiederzukaufen. Es ist Teil der Dimension Ausweitung, nicht der Empfehlung, und beschreibt gerade keinen einmaligen Kauf oder einen Wechsel zum Wettbewerb." },
      { id: "q5", question: "Welche Dimension der Kundenloyalität gilt als seltenster Fall?", options: ["Ausweitung des Bedarfsanteils", "Der reine Wiederkauf", "Cross-Buying in neuen Kategorien", "Empfehlung/Weiterempfehlung"], correctIndex: 3, explanation: "Die Empfehlung/Weiterempfehlung bildet die Spitze der Pyramide und gilt als seltenster Fall, da sie voraussetzt, dass ein Kunde aktiv sein eigenes Ansehen für den Anbieter einsetzt. Wiederkauf und Ausweitung (inkl. Cross-Buying) treten dagegen deutlich häufiger auf und bilden die breitere Basis bzw. Mitte der Pyramide." },
      { id: "q6", question: "Wie lässt sich Loyalität im Unterschied zu Zufriedenheit und Bindung charakterisieren?", options: ["Loyalität ist eine Verhaltensabsicht", "Loyalität ist inhaltlich identisch mit Zufriedenheit", "Loyalität ist bereits tatsächliches, gezeigtes Verhalten", "Loyalität ist eine reine Einstellung ohne Verhaltensbezug"], correctIndex: 0, explanation: "Loyalität wird als Verhaltensabsicht verstanden, also die Absicht, wiederzukaufen, auszuweiten oder weiterzuempfehlen. Zufriedenheit ist dagegen eine Einstellung (kognitiv-affektive Bewertung), und Bindung ist bereits tatsächliches, zukünftiges Verhalten — die drei Konstrukte sind also klar unterscheidbar und können sogar auseinanderfallen." },
      { id: "q7", question: "Wie kann eine hohe Bindung trotz niedriger Zufriedenheit entstehen?", options: ["Durch rein zufällige Effekte ohne erkennbare Ursache", "Das ist gemäß der Vorlesung grundsätzlich ausgeschlossen", "Ausschließlich durch besonders niedrige Preise", "Durch Wechselbarrieren, die den Kunden trotz Unzufriedenheit am Anbieter festhalten"], correctIndex: 3, explanation: "Wechselbarrieren wie lange Vertragslaufzeiten oder hohe Wechselkosten können einen unzufriedenen Kunden trotzdem am Anbieter festhalten, sodass Bindung (tatsächliches Verhalten) und Zufriedenheit (Einstellung) auseinanderfallen. Das zeigt gerade, dass hohe Bindung trotz niedriger Zufriedenheit sehr wohl möglich ist — anders als es zwei der Antwortoptionen unterstellen." },
      { id: "q8", question: "Was kennzeichnet die progressive Beziehung zwischen Zufriedenheit und Erfolg?", options: ["Einen nichtlinearen Verlauf mit einer mittleren Plateau-Zone", "Einen Zusammenhang, der erst bei sehr hoher Zufriedenheit überhaupt sichtbar wird", "Das vollständige Fehlen eines Zusammenhangs zwischen Zufriedenheit und Erfolg", "Einen linearen Zusammenhang, bei dem Loyalität kontinuierlich mit Zufriedenheit steigt"], correctIndex: 3, explanation: "Die progressive Beziehung beschreibt einen linearen Zusammenhang: Mit jeder Erhöhung der Zufriedenheit steigt die Loyalität kontinuierlich mit. Das unterscheidet sie von der sattelförmigen Beziehung, die gerade eine nichtlineare Plateau-Zone ohne nennenswerten Effekt aufweist." },
      { id: "q9", question: "Was kennzeichnet die sattelförmige (saddle-shaped) Beziehung, z. B. bei der Zahlungsbereitschaft?", options: ["Einen rein linearen Verlauf ohne jede Besonderheit", "Eine mittlere Plateau-Zone ohne Effekt, mit starker Wirkung erst ab einem Schwellenwert", "Dass Zufriedenheit hierbei überhaupt keinen messbaren Einfluss hat", "Dass der Effekt gerade bei niedriger Zufriedenheit am stärksten ist"], correctIndex: 1, explanation: "Bei der sattelförmigen Beziehung gibt es eine mittlere 'Kein-Effekt'-Plateau-Zone, in der Zufriedenheitssteigerungen kaum Wirkung zeigen; erst ab einem bestimmten Schwellenwert wirkt Zufriedenheit stark auf das wirtschaftliche Ergebnis. Das unterscheidet sie deutlich von der rein linearen progressiven Beziehung." },
      { id: "q10", question: "Warum kann Kundenfrustration entstehen, obwohl die Leistung eines Anbieters in Sprüngen steigt?", options: ["Weil der Preis in solchen Fällen automatisch mit ansteigt", "Weil Kunden die tatsächliche Leistungssteigerung in der Regel gar nicht bemerken", "Weil die Kundenansprüche, getrieben durch Wettbewerb, schneller steigen können als die Leistungssprünge", "Weil Leistungssprünge von Kunden grundsätzlich negativ wahrgenommen werden"], correctIndex: 2, explanation: "Wenn die durch Wettbewerb getriebenen Kundenansprüche schneller steigen als die einzelnen Leistungssprünge des Anbieters, wird die Leistung relativ zu den Ansprüchen als unzureichend wahrgenommen — entscheidend ist die relative, nicht die absolute Leistungssteigerung. Preisanstieg, Nichtwahrnehmung oder eine grundsätzlich negative Bewertung von Leistungssprüngen sind dagegen nicht die genannte Ursache." }
    ]
  },
  {
    id: "vertrieb-kzi-messung-bindung",
    chapter: 2,
    order: 3,
    title: "Kundenzufriedenheitsmessung und Kundenbindung",
    icon: "📊",
    summary: "Welche Anforderungen eine gute Kundenzufriedenheitsmessung erfüllen muss, wie ein gewichteter Kundenzufriedenheitsindex (KZI) aufgebaut ist, wie das Zufriedenheits-Bindungs-Profil zu interpretieren ist und mit welchen Instrumenten Kundenbindung aufgebaut wird.",
    explanation: [
      { type: "p", text: "Eine aussagekräftige Kundenzufriedenheitsmessung muss mehreren Anforderungen genügen:" },
      { type: "list", items: [
        "Systematik: eine klare Zielgruppe, Stichprobe und Methode",
        "Regelmäßigkeit: wiederkehrende Messung statt Einzelerhebung",
        "Vollständigkeit: Erfassung aller Leistungskomponenten, eine explizite Gesamtzufriedenheitsfrage, offene Fragen sowie Bindungsfacetten",
        "Differenzierung nach Marktsegmenten",
        "Differenzierung nach Befragtentyp (z. B. Einkäufer vs. technischer Planer)",
        "Anstoß systematischer Verbesserungsprozesse, damit die Messung tatsächlich zu Handlungen führt"
      ]},
      { type: "p", text: "Die Preiszufriedenheit sollte dabei separat erhoben werden. Kunden bewerten Preiskriterien aus psychologischen Gründen tendenziell kritischer als andere Leistungskomponenten. Empfohlen wird deshalb, bei der Interpretation von Preiszufriedenheits-Werten eine Korrektur von +10 bis +15 Punkten vorzunehmen." },
      { type: "p", text: "Zur Interpretation von Kundenzufriedenheitswerten (auf einer Skala von 0–100 Punkten) eignet sich eine Ampel-Skala:" },
      { type: "list", items: [
        "0–70 Punkte = Rot: mangelhafte Zufriedenheit, dringender Handlungsbedarf, starke Gefahr, Kunden zu verlieren",
        "70–75 Punkte = Gelb: unterdurchschnittlich, Handlungsbedarf, Gefahr",
        "75–80 Punkte = Gelb/Grün: durchschnittlich, im Allgemeinen Handlungsbedarf, geringe Gefahr",
        "80–100 Punkte = Grün: überdurchschnittlich, hohen Standard halten, punktuell optimieren, kaum Gefahr"
      ]},
      { type: "p", text: "Ein Kundenzufriedenheitsindex (KZI) fasst mehrere Leistungskomponenten gewichtet zu einer Gesamtkennzahl zusammen:" },
      { type: "formula", tex: "KZI = \\sum_{i=1}^{n} w_i \\cdot z_i, \\quad \\sum_i w_i = 1" },
      { type: "p", text: "Ein Beispiel aus dem Bereich eines Transportdienstleisters zeigt folgende Gewichtung der Leistungskomponenten:" },
      { type: "list", items: [
        "Buchungsprozess: 13,8%",
        "Mitarbeiter: 19,7%",
        "Sauberkeit: 14,7%",
        "Reiseumgebung: 18,4%",
        "Kulinarisches Angebot: 17,8%",
        "Zubringerverbindung: 2,8%",
        "Preis-Leistungs-Verhältnis: 12,8%"
      ]},
      { type: "p", text: "Jede dieser Hauptkomponenten setzt sich ihrerseits wieder aus gewichteten Einzelkriterien zusammen. So gliedert sich die Komponente 'Mitarbeiter' beispielsweise in: Begrüßung 14%, Auftreten allgemein 17%, Fachliche Kompetenz Serviceteam 23%, Auftreten Serviceteam 24%, Eingehen auf Wünsche 22%. Der KZI wird somit hierarchisch aus mehreren Ebenen gewichteter Einzelbewertungen aufgebaut." },
      { type: "p", text: "Das Kundenzufriedenheits-Kundenbindungs-Profil ordnet Kunden in einer 4-Felder-Matrix ein, mit Zufriedenheit auf der x-Achse und Bindung auf der y-Achse:" },
      { type: "list", items: [
        "Hohe Bindung / Niedrige Zufriedenheit = 'Gefährdete Kundenbindung' → Zufriedenheit mittelfristig steigern",
        "Hohe Bindung / Hohe Zufriedenheit = 'Echte Kundenbindung' → Position festigen",
        "Niedrige Bindung / Niedrige Zufriedenheit = 'Unzufriedene Kunden ohne Bindungspotenzial' → Sofort-Aktion oder aktive Betreuung einstellen",
        "Niedrige Bindung / Hohe Zufriedenheit = 'Kundenbindungspotenzial' → Bindung durch Zusatzleistungen anstreben"
      ]},
      { type: "p", text: "Zum Aufbau von Kundenbindung stehen fünf zentrale Instrumente zur Verfügung:" },
      { type: "list", items: [
        "Kontinuierlicher Ausbau der Produktqualität",
        "Ausbau von Value-Added-Services (z. B. Garantien, 24h-Hotline)",
        "Aufbau persönlicher Beziehungen",
        "Ausbau von Vorteilsprogrammen (z. B. Rabatte, Bonusprogramme)",
        "Aufbau von Wechselbarrieren (z. B. vertragliche Bindung, technische Standards)"
      ]},
      { type: "p", text: "Die Rationale hinter diesen Instrumenten: Es ist günstiger und einfacher, einen bestehenden Kunden zum Wiederkauf zu bewegen, als einen Interessenten zum Erstkäufer zu machen." }
    ],
    exercises: [
      {
        id: "vertrieb-kzi-messung-bindung-e1",
        prompt: "Nennen Sie die sechs Anforderungen an eine gute Kundenzufriedenheitsmessung.",
        solution: [{ type: "p", text: "Eine gute Kundenzufriedenheitsmessung erfordert erstens Systematik (klare Zielgruppe, Stichprobe, Methode), zweitens Regelmäßigkeit, drittens Vollständigkeit (alle Leistungskomponenten, eine explizite Gesamtzufriedenheitsfrage, offene Fragen und Bindungsfacetten), viertens Differenzierung nach Marktsegmenten, fünftens Differenzierung nach Befragtentyp (z. B. Einkäufer vs. technischer Planer) und sechstens den Anstoß systematischer Verbesserungsprozesse, damit die Messung tatsächlich Handlungskonsequenzen nach sich zieht." }]
      },
      {
        id: "vertrieb-kzi-messung-bindung-e2",
        prompt: "Warum sollte die Preiszufriedenheit separat erhoben werden, und welche Korrektur wird empfohlen?",
        solution: [{ type: "p", text: "Kunden bewerten Preiskriterien aus psychologischen Gründen tendenziell kritischer als andere Leistungskomponenten, sodass Preiszufriedenheitswerte im Vergleich zu anderen Werten systematisch niedriger ausfallen. Deshalb sollte die Preiszufriedenheit separat erhoben werden, und bei der Interpretation der Werte wird eine Korrektur von +10 bis +15 Punkten empfohlen, um diesen psychologischen Effekt auszugleichen." }]
      },
      {
        id: "vertrieb-kzi-messung-bindung-e3",
        prompt: "Ein Transportdienstleister ermittelt für drei Komponenten folgende Zufriedenheitswerte (Skala 0–100) und Gewichte: Mitarbeiter (Gewicht 40%, Wert 85 Punkte), Sauberkeit (Gewicht 35%, Wert 70 Punkte), Preis-Leistungs-Verhältnis (Gewicht 25%, Wert 60 Punkte). Berechnen Sie den gewichteten Kundenzufriedenheitsindex (KZI) und ordnen Sie das Ergebnis der Ampel-Skala zu.",
        solution: [{ type: "p", text: "Der KZI berechnet sich als Summe der gewichteten Einzelwerte: KZI = 0,40 · 85 + 0,35 · 70 + 0,25 · 60 = 34 + 24,5 + 15 = 73,5 Punkte. Nach der Ampel-Skala liegt dieser Wert im Bereich 70–75 Punkte (Gelb): unterdurchschnittliche Zufriedenheit mit Handlungsbedarf und einer gewissen Gefahr, Kunden zu verlieren." }]
      },
      {
        id: "vertrieb-kzi-messung-bindung-e4",
        prompt: "Beschreiben Sie die vier Felder des Kundenzufriedenheits-Kundenbindungs-Profils und die jeweils empfohlene Handlungsimplikation.",
        solution: [{ type: "p", text: "Bei hoher Bindung und niedriger Zufriedenheit spricht man von 'gefährdeter Kundenbindung' — hier sollte die Zufriedenheit mittelfristig gesteigert werden, da die Bindung sonst erodieren kann. Bei hoher Bindung und hoher Zufriedenheit liegt 'echte Kundenbindung' vor — die Position sollte gefestigt werden. Bei niedriger Bindung und niedriger Zufriedenheit handelt es sich um 'unzufriedene Kunden ohne Bindungspotenzial' — hier sollte entweder sofort gehandelt oder die aktive Betreuung eingestellt werden. Bei niedriger Bindung und hoher Zufriedenheit besteht 'Kundenbindungspotenzial' — hier sollte die Bindung durch Zusatzleistungen ausgebaut werden." }]
      },
      {
        id: "vertrieb-kzi-messung-bindung-e5",
        prompt: "Nennen Sie die fünf Instrumente der Kundenbindung und erläutern Sie die zugrunde liegende ökonomische Rationale.",
        solution: [{ type: "p", text: "Die fünf Instrumente sind: kontinuierlicher Ausbau der Produktqualität, Ausbau von Value-Added-Services (z. B. Garantien, 24h-Hotline), Aufbau persönlicher Beziehungen, Ausbau von Vorteilsprogrammen (z. B. Rabatte, Bonusprogramme) sowie Aufbau von Wechselbarrieren (z. B. vertragliche Bindung, technische Standards). Die zugrunde liegende Rationale ist, dass es günstiger und einfacher ist, einen bestehenden Kunden zum Wiederkauf zu bewegen, als einen neuen Interessenten zum Erstkäufer zu machen — Investitionen in Kundenbindung zahlen sich somit häufig stärker aus als reine Neukundenakquise." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche Anforderung an die Kundenzufriedenheitsmessung verlangt eine explizite Gesamtzufriedenheitsfrage, offene Fragen sowie Bindungsfacetten?", options: ["Vollständigkeit", "Regelmäßigkeit der Messung", "Differenzierung nach Marktsegmenten", "Systematik von Zielgruppe und Methode"], correctIndex: 0, explanation: "Die Anforderung der Vollständigkeit verlangt die Erfassung aller Leistungskomponenten, eine explizite Gesamtzufriedenheitsfrage, offene Fragen sowie Bindungsfacetten. Regelmäßigkeit betrifft dagegen den Wiederholungsrhythmus der Messung, Differenzierung die Aufschlüsselung nach Segmenten, und Systematik die klare Definition von Zielgruppe, Stichprobe und Methode — diese drei Anforderungen adressieren also andere Aspekte." },
      { id: "q2", question: "Warum sollte die Preiszufriedenheit separat erhoben werden?", options: ["Weil Preiszufriedenheit inhaltlich identisch mit Gesamtzufriedenheit ist", "Weil sich Preisdaten grundsätzlich nicht valide messen lassen", "Weil Kunden Preiskriterien aus psychologischen Gründen tendenziell kritischer bewerten", "Weil der Preis für die meisten Kunden keine relevante Rolle spielt"], correctIndex: 2, explanation: "Kunden bewerten Preiskriterien aus psychologischen Gründen tendenziell kritischer als andere Leistungskomponenten, sodass Preiswerte systematisch niedriger ausfallen können als der Rest der Zufriedenheit. Deshalb wird eine separate Erhebung mit anschließender Korrektur empfohlen — Preiszufriedenheit ist weder identisch mit der Gesamtzufriedenheit noch unmessbar oder irrelevant." },
      { id: "q3", question: "Welche Korrektur wird bei der Interpretation von Preiszufriedenheits-Werten empfohlen?", options: ["Es wird ausdrücklich keine Korrektur empfohlen", "Eine Korrektur von +10 bis +15 Punkten", "Eine Korrektur von +50 Punkten", "Eine Korrektur von −10 bis −15 Punkten"], correctIndex: 1, explanation: "Empfohlen wird eine Korrektur von +10 bis +15 Punkten nach oben, um den psychologischen Effekt kritischerer Preisbewertungen auszugleichen. Eine Korrektur nach unten wäre in die falsche Richtung, ein Verzicht auf jede Korrektur ließe die systematische Verzerrung unberücksichtigt, und +50 Punkte wären deutlich zu hoch angesetzt." },
      { id: "q4", question: "Welcher Bereich der Ampel-Skala steht für 'mangelhafte Zufriedenheit, dringender Handlungsbedarf'?", options: ["0–70 Punkte (Rot)", "70–75 Punkte (Gelb)", "75–80 Punkte (Gelb/Grün)", "80–100 Punkte (Grün)"], correctIndex: 0, explanation: "Der Bereich 0–70 Punkte (Rot) steht für mangelhafte Zufriedenheit mit dringendem Handlungsbedarf und starker Gefahr, Kunden zu verlieren. Die übrigen Bereiche der Ampel-Skala stehen für schrittweise geringeren Handlungsbedarf, bis hin zu 'Grün' mit kaum Gefahr im Bereich 80–100 Punkte." },
      { id: "q5", question: "Wie lautet die Grundformel für den gewichteten Kundenzufriedenheitsindex (KZI)?", options: ["KZI ergibt sich als Produkt aller Einzelwerte", "KZI = Summe der gewichteten Einzelwerte, wobei die Gewichte sich zu 1 summieren", "KZI ergibt sich als Durchschnitt aus höchstem und niedrigstem Wert", "KZI = Summe aller Einzelwerte ohne jede Gewichtung"], correctIndex: 1, explanation: "Der KZI berechnet sich als Summe der mit ihren jeweiligen Gewichten multiplizierten Einzelwerte, wobei sich die Summe aller Gewichte zu 1 addiert. Ein einfaches Produkt, ein reiner Min-Max-Durchschnitt oder eine ungewichtete Summe würden die unterschiedliche Bedeutung der Leistungskomponenten nicht abbilden." },
      { id: "q6", question: "Im Beispiel des Transportdienstleisters: Welche Komponente hat das höchste Gewicht?", options: ["Buchungsprozess", "Preis-Leistungs-Verhältnis", "Zubringerverbindung", "Mitarbeiter"], correctIndex: 3, explanation: "Die Komponente 'Mitarbeiter' hat im Beispiel mit 19,7% das höchste Gewicht unter allen sieben Leistungskomponenten. Buchungsprozess (13,8%), Preis-Leistungs-Verhältnis (12,8%) und Zubringerverbindung (2,8%) liegen im Vergleich dazu deutlich niedriger gewichtet." },
      { id: "q7", question: "Welches Feld des Kundenzufriedenheits-Kundenbindungs-Profils wird als 'echte Kundenbindung' bezeichnet?", options: ["Niedrige Bindung / Hohe Zufriedenheit", "Niedrige Bindung / Niedrige Zufriedenheit", "Hohe Bindung / Hohe Zufriedenheit", "Hohe Bindung / Niedrige Zufriedenheit"], correctIndex: 2, explanation: "Hohe Bindung kombiniert mit hoher Zufriedenheit wird als 'echte Kundenbindung' bezeichnet, bei der die Empfehlung lautet, die Position zu festigen. Bei den anderen drei Kombinationen liegt entweder gefährdete Bindung, ungenutztes Bindungspotenzial oder eine Gruppe ohne Bindungspotenzial vor." },
      { id: "q8", question: "Welche Handlungsempfehlung gilt für 'gefährdete Kundenbindung' (hohe Bindung, niedrige Zufriedenheit)?", options: ["Bindung gezielt durch Zusatzleistungen ausbauen", "Es ist in diesem Fall keine Maßnahme notwendig", "Die Zufriedenheit mittelfristig steigern", "Sofort-Aktion oder Betreuung vollständig einstellen"], correctIndex: 2, explanation: "Bei gefährdeter Kundenbindung sollte die Zufriedenheit mittelfristig gesteigert werden, da die aktuell hohe Bindung sonst erodieren könnte, sobald sich die Unzufriedenheit weiter aufstaut. Ausbau durch Zusatzleistungen passt eher zum Feld 'Kundenbindungspotenzial', und Sofort-Aktion bzw. Betreuungsstopp gilt für unzufriedene Kunden ohne Bindungspotenzial." },
      { id: "q9", question: "Welches der folgenden ist KEIN Instrument der Kundenbindung laut Vorlesung?", options: ["Ausbau von Vorteilsprogrammen wie Rabatten", "Aufbau von vertraglichen Wechselbarrieren", "Ausbau von Value-Added-Services wie Garantien", "Ausschließliche Fokussierung auf Neukundenakquise"], correctIndex: 3, explanation: "Die ausschließliche Fokussierung auf Neukundenakquise gehört nicht zu den fünf genannten Instrumenten der Kundenbindung — im Gegenteil ist Bestandskundenbindung meist günstiger als Neukundengewinnung. Vorteilsprogramme, Wechselbarrieren und Value-Added-Services zählen dagegen explizit zu den fünf Instrumenten." },
      { id: "q10", question: "Warum investieren Unternehmen gezielt in Kundenbindungsinstrumente?", options: ["Weil gesetzliche Vorschriften dies ausdrücklich verlangen", "Weil es günstiger und einfacher ist, einen bestehenden Kunden zum Wiederkauf zu bewegen als einen Interessenten zum Erstkäufer zu machen", "Weil Bestandskunden für das Unternehmen keinen eigenen Wert besitzen", "Weil Neukundenakquise grundsätzlich die günstigere Option ist"], correctIndex: 1, explanation: "Die zugrunde liegende Rationale ist, dass es günstiger und einfacher ist, bestehende Kunden zum Wiederkauf zu bewegen, als neue Interessenten zu Erstkäufern zu machen — Investitionen in Kundenbindung zahlen sich daher häufig stärker aus als reine Neukundenakquise. Eine gesetzliche Pflicht oder ein fehlender Wert von Bestandskunden werden dagegen an keiner Stelle genannt." }
    ]
  }
];
