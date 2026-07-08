const KLR_CHAPTER5_TOPICS = [
  {
    id: "produktionsprogramm-engpass",
    chapter: 5,
    order: 1,
    title: "Produktionsprogramm bei einem Engpass",
    icon: "⚙️",
    summary: "Wenn ein einziger Faktor knapp ist, entscheidet nicht der absolute, sondern der relative Deckungsbeitrag über das optimale Produktionsprogramm.",
    explanation: [
      { type: "p", text: "Der Deckungsbeitrag (db) je Stück ergibt sich als Verkaufspreis je Stück minus variable Stückkosten je Stück. Er zeigt, was eine zusätzlich verkaufte Einheit zur Deckung der Fixkosten und zum Gewinn beiträgt. Ist die Absatzmenge jedes Produkts unabhängig von den anderen frei wählbar (kein Engpass), so ist die Entscheidung einfach: Man produziert und verkauft von jedem Produkt mit positivem Stück-Deckungsbeitrag so viel wie am Markt absetzbar ist." },
      { type: "p", text: "Ist die Produktions- oder Absatzkapazität dagegen durch genau einen Engpassfaktor begrenzt - etwa eine knappe Rohstoffmenge oder eine begrenzte Anzahl an Maschinenstunden -, reicht der absolute Stück-Deckungsbeitrag als Entscheidungskriterium nicht mehr aus. Er sagt nämlich nichts darüber aus, wie viel von dem knappen Faktor für die Herstellung einer Einheit verbraucht wird. Entscheidend ist stattdessen der relative Deckungsbeitrag: der Stück-Deckungsbeitrag geteilt durch den Produktionskoeffizienten, also den Verbrauch des Engpassfaktors je Stück. Er gibt an, wie viel Deckungsbeitrag je Einheit des knappen Faktors erwirtschaftet wird, und ist damit der richtige Maßstab, um die knappe Ressource optimal zu verteilen." },
      { type: "list", items: [
        "Schritt 1: Produkte mit negativem Stück-Deckungsbeitrag von vornherein ausschließen. Sie werden nie produziert, unabhängig davon, ob und wo ein Engpass besteht, da sie nicht einmal ihre eigenen variablen Kosten decken.",
        "Schritt 2: Falls mehrere Faktoren als Engpass in Frage kommen, für jeden Faktor einzeln prüfen, ob der Bedarf bei voller Absatzmenge der verbleibenden Produkte die verfügbare Kapazität übersteigt. Häufig zeigt sich, dass am Ende nur ein einziger Faktor tatsächlich bindend ist, während bei den anderen ausreichend Kapazität vorhanden bleibt.",
        "Schritt 3: Die verbleibenden Produkte nach fallendem relativem Deckungsbeitrag je Engpasseinheit in eine Rangfolge bringen und der Reihe nach - beginnend beim höchsten relativen db - bis zur jeweiligen Absatzobergrenze einplanen, bis der Engpass vollständig ausgeschöpft ist."
      ]},
      { type: "p", text: "Das zuletzt eingeplante Produkt in dieser Rangfolge wird oft nur teilweise produziert, weil der Engpass bereits während seiner Einplanung erschöpft ist. Man bezeichnet es als \"Grenzprodukt\": Es markiert die Grenze zwischen den Produkten, die (voll) produziert werden, und denen, für die keine Kapazität mehr übrig bleibt." },
      { type: "p", text: "Aus dem Grenzprodukt lässt sich das Konzept der \"wertmäßigen Kosten\" eines Engpassfaktors ableiten. Sie setzen sich aus zwei Bestandteilen zusammen: der Grenzausgabe, also dem am Markt zu zahlenden Preis für eine zusätzliche Einheit des Faktors, und dem Grenzgewinn, also dem entgangenen relativen Deckungsbeitrag des Grenzprodukts (den Opportunitätskosten des Engpasses). Die wertmäßigen Kosten zeigen damit, wie viel eine zusätzliche Einheit des knappen Faktors dem Unternehmen tatsächlich wert wäre - mehr als der reine Marktpreis, weil mit jeder zusätzlichen Einheit auch zusätzlicher Deckungsbeitrag durch mehr Grenzprodukt-Produktion möglich würde." },
      { type: "p", text: "Ändert sich lediglich der Marktpreis des Engpassfaktors, ohne dass sich die Rangfolge oder das Grenzprodukt dadurch verändert, bleiben die wertmäßigen Kosten oft unverändert: Steigt der Marktpreis, sinkt der relative Deckungsbeitrag jedes Produkts (und damit auch der Grenzgewinn des Grenzprodukts) um genau denselben Betrag je Einheit des Faktors - Grenzausgabe und Grenzgewinn passen sich also gegenläufig an und heben sich in der Summe auf." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Unternehmen stellt vier Erzeugnisse A, B, C und D her, die alle denselben knappen Rohstoff benötigen. Es stehen insgesamt 3.000 kg Rohstoff zur Verfügung. Gegeben sind: A - Stück-Deckungsbeitrag 20 €, Rohstoffverbrauch 2 kg/Stk, Absatzobergrenze 500 Stk; B - db 30 €, Verbrauch 4 kg/Stk, Absatzobergrenze 300 Stk; C - db 8 €, Verbrauch 1 kg/Stk, Absatzobergrenze 800 Stk; D - db 45 €, Verbrauch 5 kg/Stk, Absatzobergrenze 200 Stk. Bestimmen Sie das optimale Produktionsprogramm und den maximal erreichbaren Deckungsbeitrag.",
        solution: [
          { type: "list", items: [
            "Relativer Deckungsbeitrag je kg Rohstoff: A = 20 € / 2 kg = 10,00 €/kg; B = 30 € / 4 kg = 7,50 €/kg; C = 8 € / 1 kg = 8,00 €/kg; D = 45 € / 5 kg = 9,00 €/kg.",
            "Rangfolge nach fallendem relativem Deckungsbeitrag: A (10,00 €/kg) > D (9,00 €/kg) > C (8,00 €/kg) > B (7,50 €/kg). Alle vier Produkte haben einen positiven Stück-Deckungsbeitrag, keines wird von vornherein ausgeschlossen.",
            "Einplanung: A voll mit 500 Stk verbraucht 500 x 2 kg = 1.000 kg, es verbleiben 3.000 - 1.000 = 2.000 kg.",
            "D voll mit 200 Stk verbraucht 200 x 5 kg = 1.000 kg, es verbleiben 2.000 - 1.000 = 1.000 kg.",
            "C voll mit 800 Stk verbraucht 800 x 1 kg = 800 kg, es verbleiben 1.000 - 800 = 200 kg.",
            "Für B stehen nur noch 200 kg zur Verfügung: 200 kg / 4 kg je Stk = 50 Stk. B ist damit das Grenzprodukt und wird statt der möglichen 300 Stk nur mit 50 Stk produziert; der Rohstoff (3.000 kg) ist damit vollständig ausgeschöpft.",
            "Optimales Produktionsprogramm: A = 500 Stk, D = 200 Stk, C = 800 Stk, B = 50 Stk.",
            "Gesamt-Deckungsbeitrag: A 500 x 20 € = 10.000 €; D 200 x 45 € = 9.000 €; C 800 x 8 € = 6.400 €; B 50 x 30 € = 1.500 €. Summe = 10.000 + 9.000 + 6.400 + 1.500 = 26.900 €."
          ]}
        ]
      },
      {
        id: "ex2",
        prompt: "Für die Daten aus Aufgabe 1 beträgt der Marktpreis des Rohstoffs 3 €/kg (dieser Preis ist bereits in den variablen Stückkosten der vier Produkte enthalten). Bestimmen Sie die wertmäßigen Kosten je kg Rohstoff.",
        solution: [
          { type: "p", text: "Das Grenzprodukt aus Aufgabe 1 ist B mit einem relativen Deckungsbeitrag von 7,50 €/kg. Dieser Wert entspricht dem Grenzgewinn: Er zeigt, welcher zusätzliche Deckungsbeitrag je kg entgeht, wenn ein kg Rohstoff nicht zur Verfügung stünde (bzw. welcher zusätzliche Deckungsbeitrag möglich wäre, stünde ein weiteres kg zur Verfügung, da dann mehr B produziert werden könnte)." },
          { type: "list", items: [
            "Wertmäßige Kosten = Grenzausgabe (Marktpreis) + Grenzgewinn (relativer db des Grenzprodukts) = 3,00 €/kg + 7,50 €/kg = 10,50 €/kg.",
            "Interpretation: Dem Unternehmen wäre es wirtschaftlich sinnvoll, für eine zusätzliche Einheit Rohstoff bis zu 10,50 €/kg zu zahlen - deutlich mehr als der aktuelle Marktpreis von 3,00 €/kg -, da jedes zusätzliche kg einen zusätzlichen Deckungsbeitrag von 7,50 € über den Marktpreis hinaus ermöglichen würde."
          ]}
        ]
      },
      {
        id: "ex3",
        prompt: "Ein Zulieferer fertigt drei Bauteile X, Y und Z, die zwei Fertigungsstufen durchlaufen. Gegeben sind: X - Preis 100 €, variable Kosten 70 €/Stk, Bedarf Stufe 1: 2 h/Stk, Stufe 2: 1 h/Stk, Absatzobergrenze 300 Stk; Y - Preis 80 €, variable Kosten 90 €/Stk, Bedarf Stufe 1: 3 h/Stk, Stufe 2: 2 h/Stk, Absatzobergrenze 250 Stk; Z - Preis 60 €, variable Kosten 30 €/Stk, Bedarf Stufe 1: 1 h/Stk, Stufe 2: 3 h/Stk, Absatzobergrenze 400 Stk. Die Kapazität von Stufe 1 beträgt 1.200 Std., die von Stufe 2 beträgt 1.600 Std. Prüfen Sie, ob überhaupt ein Engpass bindend ist, und bestimmen Sie das optimale Produktionsprogramm.",
        solution: [
          { type: "list", items: [
            "Stück-Deckungsbeiträge: X = 100 - 70 = 30 €; Y = 80 - 90 = -10 €; Z = 60 - 30 = 30 €.",
            "Y hat einen negativen Deckungsbeitrag und wird deshalb von vornherein ausgeschlossen - unabhängig davon, ob ein Engpass besteht.",
            "Prüfung Stufe 1 (nur X und Z, jeweils volle Absatzobergrenze): 300 x 2 h + 400 x 1 h = 600 h + 400 h = 1.000 h. Das liegt unter der Kapazität von 1.200 Std. - Stufe 1 ist nicht bindend.",
            "Prüfung Stufe 2 (nur X und Z, jeweils volle Absatzobergrenze): 300 x 1 h + 400 x 3 h = 300 h + 1.200 h = 1.500 h. Das liegt unter der Kapazität von 1.600 Std. - Stufe 2 ist ebenfalls nicht bindend.",
            "Da nach Ausschluss von Y keine der beiden Fertigungsstufen tatsächlich einen Engpass darstellt, ist keine Rangfolge nach relativem Deckungsbeitrag nötig: X und Z werden jeweils in voller Absatzobergrenze produziert (X = 300 Stk, Z = 400 Stk), Y = 0 Stk.",
            "Gesamt-Deckungsbeitrag: 300 x 30 € + 400 x 30 € = 9.000 € + 12.000 € = 21.000 €."
          ]}
        ]
      },
      {
        id: "ex4",
        prompt: "Ein Unternehmen produziert sechs Erzeugnisse P1 bis P6. Gegeben sind Preis, variable Stückkosten, Rohstoffverbrauch (kg/Stk), Zeitverbrauch (Std./Stk) und Absatzobergrenze: P1 - Preis 20 €, var. Kosten 26 €/Stk; P2 - Preis 42 €, var. Kosten 27 €/Stk, 3 kg/Stk, 1 Std./Stk, Absatzobergrenze 400 Stk; P3 - Preis 70 €, var. Kosten 40 €/Stk, 5 kg/Stk, 2 Std./Stk, Absatzobergrenze 280 Stk; P4 - Preis 33 €, var. Kosten 21 €/Stk, 3 kg/Stk, 0,5 Std./Stk, Absatzobergrenze 600 Stk; P5 - Preis 50 €, var. Kosten 25 €/Stk, 4 kg/Stk, 1,5 Std./Stk, Absatzobergrenze 250 Stk; P6 - Preis 60 €, var. Kosten 45 €/Stk, 2 kg/Stk, 0,5 Std./Stk, Absatzobergrenze 500 Stk. Verfügbar sind 4.000 kg Rohstoff und 2.000 Std. Fertigungszeit; die Fixkosten betragen 15.000 €. Bestimmen Sie, welcher der beiden potenziellen Engpässe tatsächlich bindend ist, das optimale Produktionsprogramm sowie den Gewinn.",
        solution: [
          { type: "list", items: [
            "Stück-Deckungsbeiträge: P1 = 20 - 26 = -6 € (wird ausgeschlossen); P2 = 42 - 27 = 15 €; P3 = 70 - 40 = 30 €; P4 = 33 - 21 = 12 €; P5 = 50 - 25 = 25 €; P6 = 60 - 45 = 15 €.",
            "Bedarf an Rohstoff bei voller Absatzmenge der verbleibenden fünf Produkte: P2 400x3=1.200 kg; P3 280x5=1.400 kg; P4 600x3=1.800 kg; P5 250x4=1.000 kg; P6 500x2=1.000 kg. Summe = 6.400 kg. Das übersteigt die verfügbaren 4.000 kg - der Rohstoff ist ein potenziell bindender Engpass.",
            "Bedarf an Fertigungszeit bei voller Absatzmenge: P2 400x1=400 Std.; P3 280x2=560 Std.; P4 600x0,5=300 Std.; P5 250x1,5=375 Std.; P6 500x0,5=250 Std. Summe = 1.885 Std. Das liegt unter den verfügbaren 2.000 Std. - die Fertigungszeit ist nicht bindend.",
            "Damit ist ausschließlich der Rohstoff der tatsächlich bindende Engpass; die Fertigungszeit muss bei der Optimierung nicht weiter berücksichtigt werden.",
            "Relativer Deckungsbeitrag je kg Rohstoff: P2 = 15/3 = 5,00 €/kg; P3 = 30/5 = 6,00 €/kg; P4 = 12/3 = 4,00 €/kg; P5 = 25/4 = 6,25 €/kg; P6 = 15/2 = 7,50 €/kg. Rangfolge: P6 > P5 > P3 > P2 > P4.",
            "Einplanung: P6 voll (500 Stk) verbraucht 1.000 kg, Rest 4.000-1.000=3.000 kg. P5 voll (250 Stk) verbraucht 1.000 kg, Rest 3.000-1.000=2.000 kg. P3 voll (280 Stk) verbraucht 1.400 kg, Rest 2.000-1.400=600 kg. P2: 600 kg / 3 kg je Stk = 200 Stk (Grenzprodukt, statt möglicher 400 Stk); Rohstoff damit vollständig verbraucht. P4 = 0 Stk.",
            "Deckungsbeiträge: P6 500x15=7.500 €; P5 250x25=6.250 €; P3 280x30=8.400 €; P2 200x15=3.000 €; P4 0 €. Summe = 25.150 €.",
            "Gewinn = Gesamt-Deckungsbeitrag - Fixkosten = 25.150 € - 15.000 € = 10.150 €."
          ]}
        ]
      },
      {
        id: "ex5",
        prompt: "Aufbauend auf Aufgabe 4: Der bisherige Marktpreis des Rohstoffs betrug 2 €/kg (bereits anteilig in den variablen Stückkosten der sechs Produkte enthalten) und steigt nun auf 3 €/kg, wobei sich die variablen Stückkosten jedes Produkts entsprechend seinem kg-Verbrauch je Stück erhöhen. Rangfolge und Grenzprodukt (P2) ändern sich dabei nicht. Bestimmen Sie die wertmäßigen Kosten je kg Rohstoff vor und nach der Preiserhöhung und interpretieren Sie das Ergebnis.",
        solution: [
          { type: "list", items: [
            "Vorher: Grenzprodukt P2 hat einen relativen Deckungsbeitrag (Grenzgewinn) von 5,00 €/kg. Wertmäßige Kosten = Marktpreis (2,00 €/kg) + Grenzgewinn (5,00 €/kg) = 7,00 €/kg.",
            "Nach der Preiserhöhung um 1 €/kg steigen die variablen Kosten jedes Produkts um (kg-Verbrauch x 1 €), wodurch der relative Deckungsbeitrag jedes Produkts um genau 1 €/kg sinkt: P6 neu 6,50 €/kg, P5 neu 5,25 €/kg, P3 neu 5,00 €/kg, P2 neu 4,00 €/kg, P4 neu 3,00 €/kg.",
            "Da sich alle relativen Deckungsbeiträge um denselben Betrag verschieben, bleibt die Rangfolge unverändert (P6 > P5 > P3 > P2 > P4) und P2 bleibt das Grenzprodukt.",
            "Nachher: Wertmäßige Kosten = neuer Marktpreis (3,00 €/kg) + neuer Grenzgewinn von P2 (4,00 €/kg) = 7,00 €/kg.",
            "Die wertmäßigen Kosten bleiben mit 7,00 €/kg unverändert, obwohl der Marktpreis gestiegen ist: Grenzausgabe und Grenzgewinn passen sich exakt gegenläufig an. Der Gesamt-Deckungsbeitrag und damit der Gewinn des Unternehmens sinken durch die Preiserhöhung dennoch, da alle produzierten Mengen nun teurer eingekauften Rohstoff enthalten - nur die wertmäßigen Kosten je kg als Entscheidungsgröße bleiben stabil."
          ]}
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie berechnet sich der Deckungsbeitrag je Stück?", options: ["Verkaufspreis je Stück minus variable Stückkosten", "Verkaufspreis je Stück minus Gesamtkosten je Stück", "Fixkosten geteilt durch die Absatzmenge", "Variable Stückkosten minus Fixkosten je Stück"], correctIndex: 0, explanation: "Der Stück-Deckungsbeitrag ergibt sich als Verkaufspreis je Stück minus variable Stückkosten je Stück." },
      { id: "q2", question: "Warum reicht der absolute Stück-Deckungsbeitrag bei einem Engpass als Entscheidungskriterium nicht mehr aus?", options: ["Weil er nichts darüber aussagt, wie viel vom knappen Faktor je Stück verbraucht wird", "Weil er immer negativ ist", "Weil er nur bei einem einzigen Produkt berechnet werden kann", "Weil Fixkosten dabei doppelt gezählt werden"], correctIndex: 0, explanation: "Der absolute db berücksichtigt nicht den Verbrauch des knappen Faktors je Stück, weshalb bei einem Engpass der relative Deckungsbeitrag (db je Einheit des Engpassfaktors) entscheidend ist." },
      { id: "q3", question: "Wie wird der relative Deckungsbeitrag je Einheit des Engpassfaktors berechnet?", options: ["Stück-Deckungsbeitrag geteilt durch den Produktionskoeffizienten (Faktorverbrauch je Stück)", "Verkaufspreis geteilt durch die Absatzobergrenze", "Fixkosten geteilt durch die Anzahl der Produkte", "Variable Stückkosten mal Absatzmenge"], correctIndex: 0, explanation: "Der relative Deckungsbeitrag ergibt sich aus dem Stück-Deckungsbeitrag geteilt durch den Verbrauch des Engpassfaktors je Stück." },
      { id: "q4", question: "Was geschieht mit Produkten, deren Stück-Deckungsbeitrag negativ ist?", options: ["Sie werden unabhängig vom Engpass von vornherein ausgeschlossen", "Sie erhalten automatisch Vorrang in der Rangfolge", "Sie werden nur produziert, wenn kein Engpass besteht", "Sie werden gleichmäßig auf alle Engpässe verteilt"], correctIndex: 0, explanation: "Produkte mit negativem db decken nicht einmal ihre eigenen variablen Kosten und werden deshalb grundsätzlich ausgeschlossen." },
      { id: "q5", question: "Wie prüft man, ob ein potenzieller Engpassfaktor tatsächlich bindend ist?", options: ["Man vergleicht den Bedarf bei voller Absatzmenge der verbleibenden Produkte mit der verfügbaren Kapazität", "Man addiert einfach alle Verkaufspreise", "Man betrachtet nur das Produkt mit dem höchsten absoluten Deckungsbeitrag", "Man prüft, ob die Fixkosten gedeckt sind"], correctIndex: 0, explanation: "Ein Faktor ist nur dann tatsächlich ein Engpass, wenn der Bedarf bei voller Absatzmenge der verbleibenden Produkte die verfügbare Kapazität übersteigt." },
      { id: "q6", question: "Wie geht man bei genau einem bindenden Engpass vor, um das optimale Produktionsprogramm zu bestimmen?", options: ["Produkte nach fallendem relativem Deckungsbeitrag ordnen und der Reihe nach bis zur Absatzobergrenze einplanen, bis der Engpass ausgeschöpft ist", "Alle Produkte gleichmäßig auf die Kapazität verteilen", "Nur das Produkt mit dem höchsten Verkaufspreis produzieren", "Die Produkte in alphabetischer Reihenfolge einplanen"], correctIndex: 0, explanation: "Das Rangfolgeverfahren ordnet die Produkte nach fallendem relativem Deckungsbeitrag und plant sie bis zur jeweiligen Absatzobergrenze ein, bis die Engpasskapazität erschöpft ist." },
      { id: "q7", question: "Was versteht man unter dem \"Grenzprodukt\"?", options: ["Das Produkt mit dem niedrigsten Verkaufspreis", "Das letzte in der Rangfolge eingeplante Produkt, das oft nur teilweise produziert wird", "Das Produkt, das immer ausgeschlossen wird", "Das Produkt mit den höchsten Fixkosten"], correctIndex: 1, explanation: "Das Grenzprodukt ist das zuletzt eingeplante Produkt in der Rangfolge; bei ihm ist der Engpass meist bereits während der Einplanung erschöpft, sodass es nur teilweise produziert wird." },
      { id: "q8", question: "Woraus setzen sich die wertmäßigen Kosten eines Engpassfaktors zusammen?", options: ["Ausschließlich aus dem Marktpreis des Faktors", "Aus Grenzausgabe (Marktpreis) und Grenzgewinn (entgangener relativer Deckungsbeitrag des Grenzprodukts)", "Ausschließlich aus den Fixkosten des Unternehmens", "Aus der Summe aller Stück-Deckungsbeiträge"], correctIndex: 1, explanation: "Die wertmäßigen Kosten bestehen aus der Grenzausgabe (Marktpreis) zuzüglich des Grenzgewinns, also der Opportunitätskosten in Höhe des entgangenen relativen Deckungsbeitrags des Grenzprodukts." },
      { id: "q9", question: "Was zeigt der Grenzgewinn im Konzept der wertmäßigen Kosten?", options: ["Den entgangenen relativen Deckungsbeitrag des Grenzprodukts, also die Opportunitätskosten des Engpasses", "Den Gesamtgewinn des Unternehmens", "Die Differenz zwischen Ist- und Sollkosten", "Den Anteil der Fixkosten am Umsatz"], correctIndex: 0, explanation: "Der Grenzgewinn entspricht den Opportunitätskosten des Engpasses: dem Deckungsbeitrag, der entgeht, weil wegen der Knappheit nicht mehr vom Grenzprodukt produziert werden kann." },
      { id: "q10", question: "Was passiert mit den wertmäßigen Kosten, wenn nur der Marktpreis des Engpassfaktors steigt, sich Rangfolge und Grenzprodukt aber nicht ändern?", options: ["Sie steigen um denselben Betrag wie der Marktpreis", "Sie bleiben oft unverändert, da Grenzausgabe und Grenzgewinn sich gegenläufig anpassen", "Sie sinken immer auf null", "Sie sind davon grundsätzlich nicht berechenbar"], correctIndex: 1, explanation: "Steigt der Marktpreis, sinkt der relative Deckungsbeitrag (und damit der Grenzgewinn) aller Produkte um denselben Betrag je Faktoreinheit, sodass sich die Summe aus Grenzausgabe und Grenzgewinn oft nicht ändert." }
    ]
  },
  {
    id: "stufenweise-fixkostendeckung",
    chapter: 5,
    order: 2,
    title: "Stufenweise Fixkostendeckungsrechnung",
    icon: "🪜",
    summary: "Fixkosten dort zuordnen, wo sie tatsächlich entstehen - vom Produkt über die Produktgruppe und die Sparte bis zum Unternehmen.",
    explanation: [
      { type: "p", text: "Eine einstufige Deckungsbeitragsrechnung, die alle Fixkosten schematisch (z. B. gleichmäßig je Produkt) auf die Erzeugnisse umlegt, kann irreführend sein: Ein Produkt kann rechnerisch einen \"Verlust\" ausweisen, obwohl es tatsächlich einen positiven Beitrag zur Deckung der Fixkosten leistet. Die Ursache liegt darin, dass viele Fixkosten gar nicht durch das einzelne Produkt verursacht werden, sondern durch eine höhere Ebene des Unternehmens." },
      { type: "p", text: "Die stufenweise (mehrstufige) Fixkostendeckungsrechnung löst dieses Problem, indem sie Fixkosten der Hierarchieebene zuordnet, auf der sie tatsächlich verursachungsgerecht entstehen: Produkt, Produktgruppe, Sparte bzw. Bereich und schließlich das Unternehmen als Ganzes. Grundprinzip dabei ist, Fixkosten so weit unten wie möglich in der Hierarchie zuzuordnen - aber nicht künstlich tiefer, als es sachlich gerechtfertigt ist." },
      { type: "list", items: [
        "Umsatz minus variable Kosten = Deckungsbeitrag I (DB I).",
        "DB I minus Produktfixkosten (z. B. produktspezifische Maschinenabschreibungen) = Deckungsbeitrag II (DB II).",
        "DB II je Produktgruppe bzw. Sparte aufsummiert, minus Produktgruppen- bzw. Sparten-Fixkosten = Deckungsbeitrag III (DB III).",
        "DB III über alle Sparten aufsummiert, minus Unternehmensfixkosten = Deckungsbeitrag IV (DB IV) = Betriebsergebnis."
      ]},
      { type: "p", text: "Aus dieser Stufung ergeben sich zwei unterschiedliche Kriterien für eine Eliminationsentscheidung: Kurzfristig sollte ein Produkt aus dem Programm genommen werden, wenn bereits DB I negativ ist - es deckt dann nicht einmal seine eigenen variablen Kosten, jede produzierte Einheit vernichtet also Wert. Langfristig kann eine Elimination sinnvoll sein, wenn DB II (oder eine höhere Stufe) negativ ist und die zugehörigen Fixkosten tatsächlich abbaubar sind." },
      { type: "p", text: "Ein wichtiger Fallstrick betrifft nicht abbaubare, am Markt wertlose Spezialinvestitionen (\"sunk costs\"), etwa eine hochspezialisierte Maschine ohne Alternativverwendung oder Wiederverkaufswert. Ihre Abschreibungen fallen auch nach einer Produkteliminierung unverändert weiter an. Die tatsächlich erzielbare Kostenersparnis bei Elimination ist dann geringer als der ausgewiesene Fixkostenbetrag vermuten lässt - ein negativer DB II allein rechtfertigt eine Elimination also nicht automatisch." },
      { type: "p", text: "Ein zweiter Fallstrick sind Verbundeffekte zwischen Produkten: Manche Kunden kaufen ein Produkt A überhaupt nur, weil auch ein anderes Produkt B im Sortiment ist (z. B. weil sie beides zusammen bestellen oder weil B als Lockangebot dient). Eine auf den ersten Blick vorteilhafte Elimination von B kann durch den Wegfall dieser gekoppelten Verkäufe von A stark relativiert oder sogar ins Gegenteil verkehrt werden." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Familienunternehmen aus dem Münsterland gliedert sich in zwei Sparten mit je zwei Produkten. Sparte I: A1 (Umsatz 100.000 €, variable Kosten 60.000 €), A2 (Umsatz 80.000 €, variable Kosten 55.000 €). Sparte II: B1 (Umsatz 120.000 €, variable Kosten 70.000 €), B2 (Umsatz 60.000 €, variable Kosten 50.000 €). Die gesamten Fixkosten des Unternehmens betragen 100.000 € und werden bislang gleichmäßig auf die vier Produkte umgelegt. Berechnen Sie DB I und den Gewinn je Produkt bei dieser schematischen Fixkostenumlage.",
        solution: [
          { type: "list", items: [
            "DB I: A1 = 100.000 - 60.000 = 40.000 €; A2 = 80.000 - 55.000 = 25.000 €; B1 = 120.000 - 70.000 = 50.000 €; B2 = 60.000 - 50.000 = 10.000 €.",
            "Gleichmäßige Fixkostenumlage je Produkt: 100.000 € / 4 = 25.000 € je Produkt.",
            "Gewinn je Produkt: A1 = 40.000 - 25.000 = 15.000 € (Gewinn); A2 = 25.000 - 25.000 = 0 € (Nullergebnis); B1 = 50.000 - 25.000 = 25.000 € (Gewinn); B2 = 10.000 - 25.000 = -15.000 € (scheinbarer Verlust).",
            "Gesamtgewinn des Unternehmens: 15.000 + 0 + 25.000 - 15.000 = 25.000 €.",
            "Die schematische Umlage suggeriert, dass B2 ein Verlustprodukt ist - ob das tatsächlich zutrifft, lässt sich erst mit einer stufenweisen Fixkostendeckungsrechnung beurteilen."
          ]}
        ]
      },
      {
        id: "ex2",
        prompt: "Für dasselbe Unternehmen liegen nun folgende verursachungsgerechte Angaben vor: Produktfixkosten A1 = 10.000 €, A2 = 8.000 €, B1 = 12.000 €, B2 = 15.000 €. Produktgruppen- bzw. Sparten-Fixkosten: Sparte I = 10.000 €, Sparte II = 15.000 €. Unternehmensfixkosten (nicht auf einzelne Sparten aufteilbar) = 30.000 €. Stellen Sie eine vollständige stufenweise Fixkostendeckungsrechnung (DB I bis DB IV) auf und vergleichen Sie das Betriebsergebnis mit dem Gesamtgewinn aus Aufgabe 1.",
        solution: [
          { type: "list", items: [
            "Kontrolle: Produktfixkosten (10.000+8.000+12.000+15.000=45.000 €) + Sparten-Fixkosten (10.000+15.000=25.000 €) + Unternehmensfixkosten (30.000 €) = 100.000 € - identisch mit den gesamten Fixkosten aus Aufgabe 1.",
            "DB I (wie in Aufgabe 1): A1 = 40.000 €; A2 = 25.000 €; B1 = 50.000 €; B2 = 10.000 €.",
            "DB II = DB I - Produktfixkosten: A1 = 40.000 - 10.000 = 30.000 €; A2 = 25.000 - 8.000 = 17.000 €; B1 = 50.000 - 12.000 = 38.000 €; B2 = 10.000 - 15.000 = -5.000 €.",
            "DB II je Sparte aufsummiert: Sparte I = 30.000 + 17.000 = 47.000 €; Sparte II = 38.000 + (-5.000) = 33.000 €.",
            "DB III = Sparten-DB II - Sparten-Fixkosten: Sparte I = 47.000 - 10.000 = 37.000 €; Sparte II = 33.000 - 15.000 = 18.000 €.",
            "DB IV (Betriebsergebnis) = Summe DB III - Unternehmensfixkosten = (37.000 + 18.000) - 30.000 = 55.000 - 30.000 = 25.000 €.",
            "Das Betriebsergebnis von 25.000 € stimmt exakt mit dem Gesamtgewinn aus Aufgabe 1 überein - die stufenweise Rechnung ändert also nichts am Gesamtergebnis, zeigt aber differenzierter, dass B2 zwar DB I positiv (10.000 €), DB II jedoch negativ (-5.000 €) hat: B2 deckt seine eigenen variablen Kosten, aber nicht seine eigenen Produktfixkosten - ein deutlich anderes Bild als der scheinbare Verlust von 15.000 € aus der schematischen Umlage."
          ]}
        ]
      },
      {
        id: "ex3",
        prompt: "Die DEF-GmbH produziert drei Erzeugnisse D, E und F. Umsatz und variable Kosten: D (Umsatz 200.000 €, variable Kosten 120.000 €), E (Umsatz 150.000 €, variable Kosten 100.000 €), F (Umsatz 90.000 €, variable Kosten 70.000 €). Produktfixkosten: D = 30.000 €, E = 25.000 €, F = 35.000 €. Unternehmensfixkosten (nicht produktspezifisch) = 40.000 €. Berechnen Sie DB I, DB II und das Betriebsergebnis. Prüfen Sie anschließend, wie sich das Betriebsergebnis verändert, wenn F eliminiert wird - wissend, dass von den 35.000 € Produktfixkosten für F nur 15.000 € tatsächlich abbaubar sind, während 20.000 € auf eine hochspezialisierte, am Markt wertlose Abschreibung entfallen, die auch nach Elimination unverändert weiter anfällt.",
        solution: [
          { type: "list", items: [
            "DB I: D = 200.000 - 120.000 = 80.000 €; E = 150.000 - 100.000 = 50.000 €; F = 90.000 - 70.000 = 20.000 €.",
            "DB II = DB I - Produktfixkosten: D = 80.000 - 30.000 = 50.000 €; E = 50.000 - 25.000 = 25.000 €; F = 20.000 - 35.000 = -15.000 €.",
            "Betriebsergebnis (vor Elimination) = Summe DB II - Unternehmensfixkosten = (50.000 + 25.000 - 15.000) - 40.000 = 60.000 - 40.000 = 20.000 €.",
            "F weist mit DB II = -15.000 € auf den ersten Blick ein Eliminationskandidat aus - da DB I aber positiv ist (20.000 €), ist eine kurzfristige Elimination nicht gerechtfertigt; zu prüfen ist die langfristige Wirkung.",
            "Bei Elimination von F entfällt dessen Deckungsbeitrag I vollständig (-20.000 €), da F nicht mehr verkauft wird. Eingespart werden nur die abbaubaren Produktfixkosten von F in Höhe von 15.000 €; die 20.000 € sunk costs (wertlose Spezialabschreibung) fallen unverändert weiter an und wirken nun wie zusätzliche Unternehmensfixkosten.",
            "Effekt der Elimination auf das Betriebsergebnis: -20.000 € (entgangener DB I) + 15.000 € (eingesparte Fixkosten) = -5.000 €. Das Betriebsergebnis verschlechtert sich also um 5.000 €.",
            "Neues Betriebsergebnis nach Elimination von F: 20.000 - 5.000 = 15.000 €. Obwohl DB II von F negativ war, ist die Elimination wegen der nicht abbaubaren Sunk Costs unwirtschaftlich - F sollte im Sortiment bleiben."
          ]}
        ]
      },
      {
        id: "ex4",
        prompt: "Aufbauend auf Aufgabe 3: Zusätzlich stellt sich heraus, dass 15 % des Umsatzes (und damit auch des Deckungsbeitrags I) von Produkt D nur deshalb zustande kommen, weil Kunden D und F gemeinsam bestellen (Verbundeffekt/Kopplungskäufe). Fiele F weg, würden auch diese Kunden D nicht mehr kaufen. Berechnen Sie die tatsächliche Wirkung einer Elimination von F auf das Betriebsergebnis unter Berücksichtigung dieses Verbundeffekts.",
        solution: [
          { type: "list", items: [
            "Durch den Wegfall von F entfällt zusätzlich der Verbundanteil von D: 15 % von DB I(D) = 0,15 x 80.000 € = 12.000 €, der ebenfalls verloren geht.",
            "Gesamteffekt der Elimination = bisheriger Effekt aus Aufgabe 3 (-5.000 €) zuzüglich des entgangenen Verbund-Deckungsbeitrags von D (-12.000 €) = -17.000 €.",
            "Neues Betriebsergebnis nach Elimination von F unter Berücksichtigung des Verbundeffekts: 20.000 - 17.000 = 3.000 €.",
            "Der Verbundeffekt verstärkt damit deutlich, wie nachteilig die Elimination von F tatsächlich wäre: Statt eines vermeintlichen Gewinnsprungs (weil DB II von F negativ aussah) sinkt das Betriebsergebnis von 20.000 € auf nur noch 3.000 €. Eine Eliminationsentscheidung allein anhand von DB II ohne Prüfung von Sunk Costs und Verbundeffekten wäre hier gravierend falsch gewesen."
          ]}
        ]
      },
      {
        id: "ex5",
        prompt: "Nennen Sie je ein kurzfristiges und ein langfristiges Kriterium für die Entscheidung, ein Produkt aus dem Sortiment zu eliminieren, und erläutern Sie kurz das Konzept der Verbundprodukte.",
        solution: [
          { type: "list", items: [
            "Kurzfristiges Kriterium: Ist bereits DB I (Umsatz minus variable Kosten) negativ, deckt das Produkt nicht einmal seine eigenen variablen Kosten - jede produzierte und verkaufte Einheit vernichtet Wert, weshalb das Produkt kurzfristig eliminiert werden sollte.",
            "Langfristiges Kriterium: Ist DB II (oder eine höhere Stufe) negativ und sind die zugehörigen Fixkosten tatsächlich abbaubar (also keine unvermeidbaren Sunk Costs), kann eine Elimination langfristig sinnvoll sein, weil dann echte Kosten eingespart werden, ohne dass ein positiver DB I verloren geht, der die Fixkosten übersteigt.",
            "Verbundprodukte: Produkte, deren Absatz sich gegenseitig beeinflusst, weil Kunden sie gemeinsam oder nur wegen des jeweils anderen Produkts kaufen (Kopplungskäufe, Sortimentsverbund). Bei einer Eliminationsentscheidung dürfen solche Produkte nicht isoliert betrachtet werden, da der Wegfall eines Produkts über den Verbundeffekt auch den Deckungsbeitrag anderer, eigentlich profitabler Produkte verringern kann."
          ]}
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie lautet das Rechenschema der stufenweisen Fixkostendeckungsrechnung?", options: ["Umsatz - variable Kosten = DB I; DB I - Produktfixkosten = DB II; DB II je Gruppe - Gruppenfixkosten = DB III; DB III - Unternehmensfixkosten = DB IV (Betriebsergebnis)", "Umsatz - Fixkosten = DB I; DB I - variable Kosten = DB II", "Gewinn - Verlust = DB I; DB I x Absatzmenge = DB II", "Nur eine einzige Stufe: Umsatz minus alle Kosten"], correctIndex: 0, explanation: "Das Schema führt über DB I (Umsatz minus variable Kosten), DB II (minus Produktfixkosten), DB III (minus Gruppen-/Sparten-Fixkosten) bis DB IV, dem Betriebsergebnis nach Abzug der Unternehmensfixkosten." },
      { id: "q2", question: "Warum kann eine einstufige, schematische Fixkostenumlage irreführend sein?", options: ["Weil sie Produkte scheinbar Verluste ausweisen lässt, obwohl sie tatsächlich einen positiven Beitrag zur Fixkostendeckung leisten", "Weil sie immer zu einem zu hohen Gesamtgewinn führt", "Weil sie variable Kosten komplett ignoriert", "Weil sie nur bei Dienstleistungsunternehmen anwendbar ist"], correctIndex: 0, explanation: "Werden Fixkosten schematisch (z. B. gleichmäßig) verteilt, obwohl sie eigentlich einer höheren Ebene zuzuordnen sind, können einzelne Produkte fälschlich als Verlustbringer erscheinen." },
      { id: "q3", question: "Was ist das Grundprinzip bei der Zuordnung von Fixkosten in der stufenweisen Rechnung?", options: ["Fixkosten so weit unten wie möglich in der Hierarchie zuordnen, aber nicht künstlich tiefer als gerechtfertigt", "Alle Fixkosten immer auf Unternehmensebene belassen", "Fixkosten proportional zum Umsatz verteilen", "Fixkosten ignorieren, solange DB I positiv ist"], correctIndex: 0, explanation: "Fixkosten werden möglichst verursachungsgerecht der niedrigsten sinnvollen Ebene (Produkt, Gruppe, Sparte, Unternehmen) zugeordnet." },
      { id: "q4", question: "Welches ist das kurzfristige Kriterium für eine Produktelimination?", options: ["DB I ist negativ, das Produkt deckt nicht einmal seine eigenen variablen Kosten", "Der Umsatz ist geringer als bei anderen Produkten", "DB IV des gesamten Unternehmens ist negativ", "Die Absatzmenge ist unter 1.000 Stück"], correctIndex: 0, explanation: "Ist DB I negativ, vernichtet jede verkaufte Einheit Wert - das Produkt sollte kurzfristig eliminiert werden." },
      { id: "q5", question: "Unter welcher zusätzlichen Bedingung ist ein negativer DB II ein sinnvoller langfristiger Eliminationsgrund?", options: ["Wenn die zugehörigen Produktfixkosten tatsächlich abbaubar sind", "Immer, unabhängig von den Fixkosten", "Nur wenn auch DB I negativ ist", "Nur bei Dienstleistungsunternehmen"], correctIndex: 0, explanation: "Ein negativer DB II rechtfertigt eine Elimination langfristig nur, wenn die Produktfixkosten bei Wegfall tatsächlich eingespart werden können." },
      { id: "q6", question: "Was sind in diesem Zusammenhang \"Sunk Costs\"?", options: ["Nicht abbaubare, am Markt wertlose Fixkosten (z. B. Spezialabschreibungen), die auch nach einer Produktelimination weiter anfallen", "Variable Kosten, die proportional zur Menge steigen", "Kosten, die sich durch Rabatte reduzieren lassen", "Nur Personalkosten"], correctIndex: 0, explanation: "Sunk Costs sind bereits gebundene, nicht abbaubare Kosten ohne Marktwert der zugrunde liegenden Investition - sie bleiben auch nach Elimination des Produkts bestehen." },
      { id: "q7", question: "Warum ist ein negativer DB II allein kein ausreichender Grund für eine Elimination?", options: ["Weil ein Teil der zugehörigen Fixkosten unvermeidbare Sunk Costs sein können, die auch ohne das Produkt weiter anfallen", "Weil DB II niemals negativ sein kann", "Weil DB II nur auf Unternehmensebene berechnet wird", "Weil variable Kosten dabei doppelt gezählt werden"], correctIndex: 0, explanation: "Sind Teile der Produktfixkosten nicht abbaubar, ist die tatsächliche Kostenersparnis bei Elimination kleiner als der ausgewiesene Fixkostenbetrag - die Elimination kann trotz negativem DB II unwirtschaftlich sein." },
      { id: "q8", question: "Was versteht man unter Verbundeffekten zwischen Produkten?", options: ["Manche Kunden kaufen ein Produkt nur, weil ein anderes Produkt ebenfalls im Sortiment ist", "Zwei Produkte haben immer denselben Verkaufspreis", "Verbundeffekte betreffen nur Fixkosten, nie den Umsatz", "Sie treten ausschließlich bei Exportgeschäften auf"], correctIndex: 0, explanation: "Verbundeffekte (Kopplungskäufe) bedeuten, dass der Absatz eines Produkts vom Vorhandensein eines anderen Produkts im Sortiment abhängt." },
      { id: "q9", question: "Welche Konsequenz haben Verbundeffekte für eine Eliminationsentscheidung?", options: ["Sie können eine auf den ersten Blick vorteilhafte Elimination stark relativieren oder ins Gegenteil verkehren", "Sie sind für die Entscheidung immer irrelevant", "Sie erhöhen automatisch DB I des eliminierten Produkts", "Sie wirken sich nur auf die Unternehmensfixkosten aus"], correctIndex: 0, explanation: "Da der Wegfall eines Produkts über den Verbundeffekt auch Umsatz und Deckungsbeitrag anderer Produkte verringern kann, muss dieser Effekt in die Eliminationsentscheidung einbezogen werden." },
      { id: "q10", question: "Was ergibt sich aus DB III über alle Sparten aufsummiert minus Unternehmensfixkosten?", options: ["DB IV, das Betriebsergebnis", "DB I des gesamten Unternehmens", "Die gesamten variablen Kosten", "Der Umsatz des Unternehmens"], correctIndex: 0, explanation: "Die letzte Stufe der Rechnung zieht von der Summe aller Sparten-DB III die Unternehmensfixkosten ab und ergibt so DB IV, das Betriebsergebnis." }
    ]
  },
  {
    id: "break-even-analyse",
    chapter: 5,
    order: 3,
    title: "Break-even-Analyse",
    icon: "📈",
    summary: "Die Gewinnschwelle bestimmen: ab welcher Absatzmenge die Erlöse genau die Gesamtkosten decken - und wie sich Preis- oder Kostenänderungen darauf auswirken.",
    explanation: [
      { type: "p", text: "Die Break-even-Menge, auch Gewinnschwelle genannt, ist die Absatzmenge, bei der die Erlöse genau die Gesamtkosten decken - der Gewinn ist an diesem Punkt also gleich null. Im Englischen wird das zugehörige Modell auch \"Cost-Volume-Profit Analysis\" genannt, weil Kosten, Absatzmenge (Volume) und Gewinn (Profit) systematisch zueinander in Beziehung gesetzt werden, um zu zeigen, wie Veränderungen einer Größe die anderen beeinflussen." },
      { type: "p", text: "Das Grundmodell trifft dabei einige vereinfachende Annahmen: einen linearen Kosten- und Erlösverlauf über den betrachteten Mengenbereich, ein einzelnes Produkt (oder zumindest ein konstantes Sortiment mit gleichbleibender Mischung), sowie einen konstanten Verkaufspreis und konstante variable Stückkosten unabhängig von der Absatzmenge." },
      { type: "p", text: "Da der Gewinn am Break-even-Punkt null ist, muss der Stück-Deckungsbeitrag (Preis minus variable Stückkosten) mal Menge gerade die Fixkosten decken. Daraus ergibt sich die zentrale Formel:" },
      { type: "list", items: [
        "Break-even-Menge = Fixkosten / Stück-Deckungsbeitrag = Kf / (Preis - variable Stückkosten)."
      ]},
      { type: "p", text: "Die Break-even-Analyse lässt sich für mehrere praktische Fragestellungen einsetzen: Sie prüft, ob eine geplante oder maximal mögliche Absatzmenge ausreicht, um überhaupt kostendeckend zu produzieren; sie beantwortet, wie sich eine Preisänderung auf die notwendige Mindestabsatzmenge auswirkt; und sie zeigt unmittelbar, mit welchen Maßnahmen sich die Gewinnsituation verbessern lässt." },
      { type: "p", text: "Aus der Formel lassen sich vier Stellhebel zur Verbesserung der Gewinnsituation direkt ablesen: Fixkosten senken (verringert den Zähler und damit die Break-even-Menge), variable Stückkosten senken (erhöht den Stück-Deckungsbeitrag im Nenner und senkt so die Break-even-Menge), den Verkaufspreis erhöhen (erhöht ebenfalls den Stück-Deckungsbeitrag) oder die Absatzmenge steigern (bringt das Unternehmen über eine bereits fixierte Break-even-Menge hinaus in die Gewinnzone)." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Eine Universitätsdruckerei erstellt für einen Lehrstuhl zwei Skripte und kalkuliert dafür in einem Angebot Fixkosten sowie variable Stückkosten. Skript 1: Fixkosten 500 €, variable Kosten 2 €/Stk, Verkaufspreis 7 €/Stk. Skript 2: Fixkosten 800 €, variable Kosten 3 €/Stk, Verkaufspreis 8 €/Stk. Berechnen Sie für beide Skripte die jeweilige Break-even-Menge.",
        solution: [
          { type: "list", items: [
            "Skript 1: Stück-Deckungsbeitrag = 7 - 2 = 5 €/Stk. Break-even-Menge = 500 € / 5 €/Stk = 100 Stk.",
            "Skript 2: Stück-Deckungsbeitrag = 8 - 3 = 5 €/Stk. Break-even-Menge = 800 € / 5 €/Stk = 160 Stk.",
            "Beide Skripte müssen also mindestens die berechnete Stückzahl absetzen, damit sich das jeweilige Angebot für die Druckerei überhaupt kostendeckend rechnet."
          ]}
        ]
      },
      {
        id: "ex2",
        prompt: "Die VeggiSchoki GmbH plant ihr Gewinnziel und ermittelt zunächst ihre Kostenfunktion anhand zweier Monatswerte: Im Monat 1 wurden 1.000 Stück zu Gesamtkosten von 8.000 € produziert, im Monat 2 waren es 1.500 Stück zu Gesamtkosten von 10.000 €. Der Verkaufspreis liegt bei 10 €/Stk, die maximale Produktionskapazität bei 600 Stück pro Monat. Ermitteln Sie die Kostenfunktion, berechnen Sie die Break-even-Menge und vergleichen Sie diese mit der Kapazitätsgrenze.",
        solution: [
          { type: "list", items: [
            "Kostenauflösung (Zwei-Punkte-Verfahren): variable Stückkosten kv = (10.000 - 8.000) / (1.500 - 1.000) = 2.000 / 500 = 4 €/Stk.",
            "Fixkosten Kf = Gesamtkosten - kv x Menge = 8.000 - 4 x 1.000 = 4.000 €. Kontrolle mit Monat 2: 10.000 - 4 x 1.500 = 10.000 - 6.000 = 4.000 € - stimmt überein.",
            "Kostenfunktion: K(x) = 4.000 + 4x.",
            "Break-even-Menge = Kf / (p - kv) = 4.000 / (10 - 4) = 4.000 / 6 = 666,67 Stk, aufgerundet 667 Stk (ab dieser ganzzahligen Menge ist das Unternehmen tatsächlich in der Gewinnzone).",
            "Die maximale Produktionskapazität liegt bei nur 600 Stk/Monat und damit unter der Break-even-Menge von 667 Stk. Bei voller Auslastung (600 Stk) ergibt sich: Umsatz = 600 x 10 = 6.000 €, Kosten = 4.000 + 4 x 600 = 6.400 €, also ein Verlust von 400 €. Mit der aktuellen Kapazität kann die Gewinnschwelle nicht erreicht werden - das Unternehmen müsste Preis, Kostenstruktur oder Kapazität verändern."
          ]}
        ]
      },
      {
        id: "ex3",
        prompt: "Ein Unternehmen hat Fixkosten von 12.000 €, einen Verkaufspreis von 50 €/Stk und variable Stückkosten von 30 €/Stk. Berechnen Sie die Break-even-Menge.",
        solution: [
          { type: "list", items: [
            "Stück-Deckungsbeitrag = 50 - 30 = 20 €/Stk.",
            "Break-even-Menge = Kf / (p - kv) = 12.000 / 20 = 600 Stk."
          ]}
        ]
      },
      {
        id: "ex4",
        prompt: "Aufbauend auf Aufgabe 3: Wegen verstärkter Konkurrenz muss das Unternehmen den Verkaufspreis um 5 € auf 45 €/Stk senken; Fixkosten und variable Stückkosten bleiben unverändert. Wie verändert sich die Break-even-Menge?",
        solution: [
          { type: "list", items: [
            "Neuer Stück-Deckungsbeitrag = 45 - 30 = 15 €/Stk.",
            "Neue Break-even-Menge = 12.000 / 15 = 800 Stk.",
            "Die Break-even-Menge steigt von 600 Stk auf 800 Stk, also um 200 Stk. Der Grund: Sinkt der Preis, sinkt der Stück-Deckungsbeitrag (Nenner der Formel), wodurch eine größere Absatzmenge notwendig wird, um dieselben Fixkosten zu decken."
          ]}
        ]
      },
      {
        id: "ex5",
        prompt: "Nennen Sie zwei Maßnahmen, mit denen ein Unternehmen laut Break-even-Analyse seine Gewinnsituation verbessern kann, und erläutern Sie jeweils kurz den Wirkmechanismus über die Formel.",
        solution: [
          { type: "list", items: [
            "Fixkosten senken: Da die Break-even-Menge = Kf / (p - kv) ist, verringert eine Senkung der Fixkosten (Zähler) direkt und proportional die notwendige Mindestabsatzmenge, ohne dass sich Preis oder variable Kosten ändern müssen.",
            "Verkaufspreis erhöhen (alternativ: variable Stückkosten senken): Beides vergrößert den Stück-Deckungsbeitrag (Nenner der Formel) und senkt dadurch die Break-even-Menge, da jede verkaufte Einheit mehr zur Deckung der Fixkosten beiträgt - das Unternehmen erreicht die Gewinnzone bereits bei geringerer Absatzmenge."
          ]}
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie lautet die Formel für die Break-even-Menge?", options: ["Fixkosten / Stück-Deckungsbeitrag", "Fixkosten x Verkaufspreis", "Variable Stückkosten / Fixkosten", "Umsatz / Gesamtkosten"], correctIndex: 0, explanation: "Die Break-even-Menge ergibt sich aus den Fixkosten geteilt durch den Stück-Deckungsbeitrag (Preis minus variable Stückkosten)." },
      { id: "q2", question: "Was gilt am Break-even-Punkt für den Gewinn?", options: ["Der Gewinn ist maximal", "Der Gewinn ist gleich null", "Der Gewinn ist negativ", "Der Gewinn entspricht den Fixkosten"], correctIndex: 1, explanation: "Am Break-even-Punkt decken die Erlöse genau die Gesamtkosten, sodass der Gewinn gleich null ist." },
      { id: "q3", question: "Warum wird das Modell im Englischen auch \"Cost-Volume-Profit Analysis\" genannt?", options: ["Weil es Kosten, Absatzmenge und Gewinn systematisch zueinander in Beziehung setzt", "Weil es nur die Kosten betrachtet", "Weil es ausschließlich für internationale Konzerne gilt", "Weil es keine Berechnung des Gewinns erlaubt"], correctIndex: 0, explanation: "Der Name betont, dass Kosten (Cost), Absatzmenge (Volume) und Gewinn (Profit) im Modell systematisch verknüpft werden." },
      { id: "q4", question: "Welche Annahme trifft das Grundmodell der Break-even-Analyse nicht?", options: ["Linearer Kosten- und Erlösverlauf", "Konstanter Verkaufspreis und konstante variable Stückkosten", "Ein einzelnes Produkt oder ein konstantes Sortiment", "Progressiv steigende variable Stückkosten mit der Menge"], correctIndex: 3, explanation: "Das Grundmodell geht von konstanten (nicht progressiv steigenden) variablen Stückkosten sowie linearen Kosten- und Erlösverläufen aus." },
      { id: "q5", question: "Ein Produkt hat Fixkosten von 12.000 €, Preis 50 €/Stk und variable Kosten 30 €/Stk. Wie hoch ist die Break-even-Menge?", options: ["400 Stk", "600 Stk", "240 Stk", "1.200 Stk"], correctIndex: 1, explanation: "Break-even-Menge = 12.000 / (50 - 30) = 12.000 / 20 = 600 Stk." },
      { id: "q6", question: "Wie verändert sich die Break-even-Menge, wenn der Verkaufspreis sinkt und alles andere gleich bleibt?", options: ["Sie sinkt", "Sie bleibt unverändert", "Sie steigt, da der Stück-Deckungsbeitrag kleiner wird", "Sie wird null"], correctIndex: 2, explanation: "Ein sinkender Preis verringert den Stück-Deckungsbeitrag (Nenner der Formel), wodurch eine größere Menge nötig wird, um die Fixkosten zu decken." },
      { id: "q7", question: "Wie verändert sich die Break-even-Menge, wenn die Fixkosten steigen und alles andere gleich bleibt?", options: ["Sie sinkt", "Sie steigt proportional zum Anstieg der Fixkosten", "Sie bleibt unverändert", "Sie kann nicht mehr berechnet werden"], correctIndex: 1, explanation: "Da die Fixkosten im Zähler der Formel stehen, führt ein Anstieg der Fixkosten zu einer proportional höheren Break-even-Menge." },
      { id: "q8", question: "Mit dem Zwei-Punkte-Verfahren (Kostenauflösung) aus zwei Monatswerten (1.000 Stk / 8.000 € und 1.500 Stk / 10.000 €) ergeben sich welche variablen Stückkosten?", options: ["2 €/Stk", "4 €/Stk", "8 €/Stk", "6 €/Stk"], correctIndex: 1, explanation: "kv = (10.000 - 8.000) / (1.500 - 1.000) = 2.000 / 500 = 4 €/Stk." },
      { id: "q9", question: "Welche vier Stellhebel lassen sich direkt aus der Break-even-Formel zur Gewinnverbesserung ableiten?", options: ["Fixkosten senken, variable Stückkosten senken, Verkaufspreis erhöhen, Absatzmenge steigern", "Nur den Verkaufspreis erhöhen", "Nur die Fixkosten senken", "Personal einstellen und Werbung erhöhen"], correctIndex: 0, explanation: "Aus der Formel Kf / (p - kv) lassen sich vier Hebel ablesen: Fixkosten senken, variable Stückkosten senken, Preis erhöhen oder Absatzmenge steigern." },
      { id: "q10", question: "Ein Unternehmen kann bei voller Kapazitätsauslastung nur weniger Stück produzieren, als die berechnete Break-even-Menge verlangt. Was bedeutet das?", options: ["Das Unternehmen erwirtschaftet trotzdem automatisch Gewinn", "Das Unternehmen kann mit der aktuellen Kapazität die Gewinnschwelle nicht erreichen und bleibt in der Verlustzone", "Die Break-even-Menge ist in diesem Fall irrelevant", "Die Fixkosten sinken automatisch auf null"], correctIndex: 1, explanation: "Reicht die maximale Kapazität nicht aus, um die Break-even-Menge zu erreichen, bleibt das Unternehmen selbst bei voller Auslastung in der Verlustzone." }
    ]
  }
];
