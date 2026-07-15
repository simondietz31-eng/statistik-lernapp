const FINV_CHAPTER4_TOPICS = [
  {
    id: "finv-aktienarten-ipo",
    chapter: 4,
    order: 1,
    title: "Aktienarten und Börsengang (IPO)",
    icon: "📈",
    summary: "Welche Aktienarten es gibt, wie ein Initial Public Offering (IPO) abläuft und wie sich Grundkapital und Marktkapitalisierung berechnen.",
    explanation: [
      { type: "p", text: "Aktien lassen sich nach mehreren Merkmalen unterscheiden:" },
      { type: "list", items: [
        "Nennwertaktien (mit fest zugeordnetem Nennbetrag am Grundkapital) vs. Stückaktien (ohne Nennbetrag, jede Aktie hat denselben rechnerischen Anteil am Grundkapital)",
        "Inhaberaktien (Übertragung formlos durch Einigung und Übergabe, Inhaber ist nicht namentlich im Aktienregister vermerkt) vs. Namensaktien (Eigentümer wird im Aktienregister der Gesellschaft eingetragen)",
        "Stammaktien (mit vollem Stimmrecht) vs. Vorzugsaktien (i. d. R. ohne Stimmrecht, dafür meist mit einer bevorzugten/höheren Dividende)"
      ]},
      { type: "p", text: "Ein Initial Public Offering (IPO) ist der erstmalige Börsengang eines Unternehmens. Ziele eines IPO sind u. a. die Beschaffung von Eigenkapital, die Erhöhung der Bekanntheit, eine Bewertung des Unternehmens durch den Markt sowie die Schaffung einer \"Akquisitionswährung\" (eigene Aktien als Zahlungsmittel bei Übernahmen)." },
      { type: "formula", tex: "\\text{Grundkapital} = \\text{Aktienanzahl} \\cdot \\text{Nennwert}" },
      { type: "p", text: "Der Ausgabepreis (IPO-Preis) wird häufig im Bookbuilding-Verfahren ermittelt: Institutionelle Investoren geben Kaufangebote (Preis-Mengen-Kombinationen) ab, aus denen die Emissionsbank den endgültigen Ausgabepreis festlegt." },
      { type: "p", text: "Übersteigt der Ausgabepreis den Nennwert, wird der Differenzbetrag als gezeichnetes Kapital (in Höhe des Nennwerts) und Kapitalrücklage (in Höhe des Agios, also der Differenz zum Ausgabepreis) verbucht." },
      { type: "formula", tex: "\\text{Marktkapitalisierung} = \\text{Anzahl der Aktien} \\cdot \\text{Börsenkurs}" }
    ],
    exercises: [
      {
        id: "finv-aktienarten-ipo-e1",
        prompt: "Eine AG gibt 500.000 Stückaktien mit einem rechnerischen Nennwert von 1 € aus. Wie hoch ist das Grundkapital?",
        solution: [{ type: "p", text: "Grundkapital = Aktienanzahl × Nennwert = 500.000 × 1 € = 500.000 €." }]
      },
      {
        id: "finv-aktienarten-ipo-e2",
        prompt: "Die AG aus Aufgabe 1 platziert die Aktien beim IPO zu einem Ausgabepreis von 12 € je Aktie. Wie hoch sind gezeichnetes Kapital und Kapitalrücklage (Agio) insgesamt?",
        solution: [{ type: "p", text: "Gezeichnetes Kapital = Grundkapital = 500.000 € (entspricht dem Nennwert je Aktie × Anzahl). Agio je Aktie = Ausgabepreis − Nennwert = 12 € − 1 € = 11 €. Kapitalrücklage = 500.000 × 11 € = 5.500.000 €. Insgesamt fließen dem Unternehmen 500.000 × 12 € = 6.000.000 € zu, davon 500.000 € als gezeichnetes Kapital und 5.500.000 € als Kapitalrücklage." }]
      },
      {
        id: "finv-aktienarten-ipo-e3",
        prompt: "Ein Unternehmen hat 2.000.000 Aktien im Umlauf, die aktuell an der Börse zu 45 € gehandelt werden. Berechnen Sie die Marktkapitalisierung.",
        solution: [{ type: "p", text: "Marktkapitalisierung = Anzahl der Aktien × Börsenkurs = 2.000.000 × 45 € = 90.000.000 € = 90 Mio. €." }]
      },
      {
        id: "finv-aktienarten-ipo-e4",
        prompt: "Erläutern Sie den Unterschied zwischen Stamm- und Vorzugsaktien und nennen Sie einen Grund, warum ein Anleger Vorzugsaktien bevorzugen könnte.",
        solution: [{ type: "p", text: "Stammaktien gewähren dem Aktionär volles Stimmrecht in der Hauptversammlung. Vorzugsaktien verzichten i. d. R. auf das Stimmrecht, gewähren dafür aber meist eine höhere oder bevorzugte (vorrangige) Dividende gegenüber Stammaktien. Ein Anleger, der primär an der Rendite interessiert ist und kein Interesse an Mitspracherechten hat (z. B. weil er sich nicht aktiv an der Unternehmenssteuerung beteiligen möchte), könnte Vorzugsaktien wegen der höheren erwarteten Dividende bevorzugen." }]
      },
      {
        id: "finv-aktienarten-ipo-e5",
        prompt: "Was ist das Bookbuilding-Verfahren, und wozu dient es beim IPO?",
        solution: [{ type: "p", text: "Beim Bookbuilding-Verfahren geben institutionelle Investoren im Rahmen eines vorgegebenen Preiskorridors verbindliche Kaufangebote (Preis-Mengen-Kombinationen) für die zu emittierenden Aktien ab. Anhand dieser gesammelten Nachfrage (des 'Orderbuchs') legt die begleitende Emissionsbank gemeinsam mit dem emittierenden Unternehmen den endgültigen Ausgabepreis fest. Ziel ist es, einen Preis zu finden, der die tatsächliche Marktnachfrage widerspiegelt und weder zu einer Unter- noch zu einer Überzeichnung mit ungünstigen Folgen führt." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Was unterscheidet Nennwertaktien von Stückaktien?", options: ["Stückaktien gewähren immer mehr Stimmrechte", "Nennwertaktien sind in Deutschland verboten", "Nennwertaktien haben festen Nennbetrag, Stückaktien nicht", "Es gibt zwischen beiden Aktienarten überhaupt gar keinen Unterschied"], correctIndex: 2, explanation: "Nennwertaktien sind einem festen Nennbetrag am Grundkapital zugeordnet, während Stückaktien keinen Nennbetrag tragen, sondern jede denselben rechnerischen Anteil am Grundkapital repräsentiert. Das Stimmrecht hängt nicht von dieser Unterscheidung ab." },
      { id: "q2", question: "Was ist der Hauptunterschied zwischen Inhaber- und Namensaktien?", options: ["Namensaktien haben nie ein Stimmrecht", "Namensaktien werden im Aktienregister eingetragen, Inhaberaktien nicht", "Inhaberaktien dürfen grundsätzlich niemals an der Börse gehandelt werden", "Es gibt keinen praktischen Unterschied"], correctIndex: 1, explanation: "Bei Namensaktien wird der Eigentümer namentlich im Aktienregister der Gesellschaft eingetragen, während Inhaberaktien formlos durch Einigung und Übergabe übertragen werden, ohne dass der Inhaber registriert wird." },
      { id: "q3", question: "Welche Formel gilt für das Grundkapital einer AG?", options: ["Grundkapital = Aktienanzahl × Nennwert", "Grundkapital = Nennwert − Ausgabepreis", "Grundkapital = Börsenkurs × Aktienanzahl", "Grundkapital = Aktienanzahl / Nennwert"], correctIndex: 0, explanation: "Das Grundkapital einer AG ergibt sich als Aktienanzahl multipliziert mit dem Nennwert je Aktie. Börsenkurs und Ausgabepreis spielen für das bilanzielle Grundkapital keine Rolle, da dieses unabhängig vom aktuellen Marktpreis festgelegt ist." },
      { id: "q4", question: "Was wird beim Bookbuilding-Verfahren ermittelt?", options: ["Der Steuersatz des Unternehmens", "Die Höhe der Dividende für das übernächste Geschäftsjahr", "Der endgültige Ausgabepreis der Aktien", "Die Fristigkeit von Anleihen"], correctIndex: 2, explanation: "Beim Bookbuilding-Verfahren geben institutionelle Investoren Kaufangebote (Preis-Mengen-Kombinationen) ab, aus denen die Emissionsbank den endgültigen Ausgabepreis der Aktien beim IPO festlegt — nicht Steuersätze, Dividenden oder Anleihelaufzeiten." },
      { id: "q5", question: "Wie berechnet sich die Marktkapitalisierung?", options: ["Eigenkapital minus Fremdkapital insgesamt", "Anzahl der Aktien × Börsenkurs", "Bilanzsumme / Aktienanzahl", "Grundkapital × Nennwert"], correctIndex: 1, explanation: "Die Marktkapitalisierung ergibt sich als Anzahl der ausstehenden Aktien multipliziert mit dem aktuellen Börsenkurs — sie spiegelt den vom Markt zugeschriebenen Gesamtwert des Eigenkapitals wider, im Unterschied zum bilanziellen Eigenkapital." },
      { id: "q6", question: "Übersteigt der Ausgabepreis den Nennwert einer Aktie, wie wird die Differenz (Agio) verbucht?", options: ["Als Kapitalrücklage", "Als sofortiger Gewinn in der GuV", "Als zusätzliches Fremdkapital", "Sie wird gar nicht verbucht"], correctIndex: 0, explanation: "Der Betrag oberhalb des Nennwerts (das Agio) wird als Kapitalrücklage verbucht, während der Nennwertanteil selbst als gezeichnetes Kapital erfasst wird. Das Agio ist kein Gewinn und kein Fremdkapital, sondern erhöht direkt das Eigenkapital." },
      { id: "q7", question: "Welches Aktienmerkmal verzichtet üblicherweise auf ein Stimmrecht, bietet dafür aber eine bevorzugte Dividende?", options: ["Stammaktien", "Vorzugsaktien", "Inhaberaktien", "Namensaktien"], correctIndex: 1, explanation: "Vorzugsaktien verzichten typischerweise auf das Stimmrecht, gewähren dafür aber meist eine höhere oder vorrangige Dividende gegenüber Stammaktien, die im Gegenzug das volle Stimmrecht besitzen." },
      { id: "q8", question: "Was ist ein zentrales Ziel eines IPO?", options: ["Ausschließlich die Vermeidung von Steuern", "Die vollständige Umwandlung von sämtlichem Eigenkapital in Fremdkapital", "Die Abschaffung des Aufsichtsrats", "Beschaffung von Eigenkapital und Erhöhung der Bekanntheit"], correctIndex: 3, explanation: "Zentrale Ziele eines IPO sind die Beschaffung von Eigenkapital, eine höhere Bekanntheit, die Bewertung des Unternehmens durch den Markt sowie die Schaffung einer Akquisitionswährung — nicht Steuervermeidung oder die Abschaffung von Kontrollorganen." },
      { id: "q9", question: "Ein Unternehmen hat 1.000.000 Aktien im Umlauf bei einem Kurs von 20 €. Wie hoch ist die Marktkapitalisierung?", options: ["20.000.000 €", "20.000 €", "1.000.000 € insgesamt", "200.000 €"], correctIndex: 0, explanation: "Marktkapitalisierung = Anzahl der Aktien × Börsenkurs = 1.000.000 × 20 € = 20.000.000 €. Die anderen Werte ergeben sich aus falscher Multiplikation oder Division der gegebenen Zahlen." },
      { id: "q10", question: "Was gilt bei Stückaktien für den rechnerischen Anteil jeder Aktie am Grundkapital?", options: ["Er ist immer null", "Er variiert stark von Aktie zu Aktie je nach Ausgabejahr", "Er wird täglich neu festgelegt", "Er ist bei jeder Aktie gleich groß"], correctIndex: 3, explanation: "Stückaktien haben keinen festen Nennwert, aber jede Aktie repräsentiert denselben rechnerischen Anteil am Grundkapital — der Anteil ist also bei jeder Stückaktie gleich groß, unabhängig davon, wann sie ausgegeben wurde." }
    ]
  },
  {
    id: "finv-bewertungskennzahlen-aktien",
    chapter: 4,
    order: 2,
    title: "Bewertungskennzahlen für Aktien",
    icon: "🧮",
    summary: "Bilanzkurs, Ertragskurs und das Kurs-Gewinn-Verhältnis (KGV) zur Beurteilung des Börsenkurses einer Aktie.",
    explanation: [
      { type: "p", text: "Zur Beurteilung, ob eine Aktie fair, teuer oder günstig bewertet ist, werden verschiedene Kennzahlen herangezogen:" },
      { type: "list", items: [
        "Bilanzkurs: leitet den fairen Wert einer Aktie aus dem bilanziellen Eigenkapital ab (Eigenkapital laut Bilanz / Aktienanzahl). Eine erweiterte Variante berücksichtigt zusätzlich stille Reserven (Differenz zwischen Zeitwert und Buchwert von Vermögensgegenständen), die im bilanziellen Eigenkapital nicht sichtbar sind.",
        "Ertragskurs: leitet den fairen Wert aus der erwarteten künftigen Ertragskraft (z. B. kapitalisierter Gewinn) statt aus dem bilanziellen Vermögen ab."
      ]},
      { type: "p", text: "Das Kurs-Gewinn-Verhältnis (KGV, Price Earnings Ratio) setzt den aktuellen Aktienkurs ins Verhältnis zum Gewinn je Aktie und zeigt, das Wievielfache des Jahresgewinns der Markt für die Aktie bezahlt:" },
      { type: "formula", tex: "\\text{KGV} = \\dfrac{1}{\\text{Renditeerwartung} - \\text{Wachstumsrate}}" },
      { type: "p", text: "Je mehr Wachstum ein Unternehmen erwarten lässt, desto kleiner wird der Nenner (Renditeerwartung minus Wachstumsrate) — und desto größer wird das KGV. Ein hohes KGV kann also entweder auf eine hohe erwartete Wachstumsrate oder auf eine niedrige geforderte Rendite hindeuten (oder auf eine Überbewertung)." }
    ],
    exercises: [
      {
        id: "finv-bewertungskennzahlen-aktien-e1",
        prompt: "Eine AG weist ein bilanzielles Eigenkapital von 40.000.000 € bei 2.000.000 Aktien aus. Berechnen Sie den Bilanzkurs (ohne stille Reserven).",
        solution: [{ type: "p", text: "Bilanzkurs = Eigenkapital / Aktienanzahl = 40.000.000 € / 2.000.000 = 20 € je Aktie." }]
      },
      {
        id: "finv-bewertungskennzahlen-aktien-e2",
        prompt: "Dieselbe AG hat stille Reserven in Höhe von 10.000.000 € (Differenz zwischen Zeitwert und Buchwert bestimmter Vermögensgegenstände). Berechnen Sie den Bilanzkurs unter Berücksichtigung der stillen Reserven.",
        solution: [{ type: "p", text: "Angepasstes Eigenkapital = 40.000.000 € + 10.000.000 € = 50.000.000 €. Bilanzkurs (mit stillen Reserven) = 50.000.000 € / 2.000.000 = 25 € je Aktie — also 5 € höher als ohne Berücksichtigung stiller Reserven." }]
      },
      {
        id: "finv-bewertungskennzahlen-aktien-e3",
        prompt: "Ein Anleger erwartet eine Renditeerwartung von 9 % p.a. und eine langfristige Wachstumsrate der Gewinne von 3 % p.a. Berechnen Sie das theoretisch faire KGV.",
        solution: [{ type: "p", text: "KGV = 1 / (Renditeerwartung − Wachstumsrate) = 1 / (0,09 − 0,03) = 1 / 0,06 ≈ 16,67." }]
      },
      {
        id: "finv-bewertungskennzahlen-aktien-e4",
        prompt: "Wie verändert sich das faire KGV aus Aufgabe 3, wenn die erwartete Wachstumsrate auf 6 % steigt (Renditeerwartung bleibt bei 9 %)? Interpretieren Sie das Ergebnis.",
        solution: [{ type: "p", text: "KGV = 1 / (0,09 − 0,06) = 1 / 0,03 ≈ 33,33. Das KGV steigt deutlich, weil der Nenner (Renditeerwartung minus Wachstumsrate) kleiner wird. Höheres erwartetes Wachstum rechtfertigt also einen höheren Preis pro Euro Gewinn — Anleger sind bereit, mehr für Wachstumsaktien zu zahlen." }]
      },
      {
        id: "finv-bewertungskennzahlen-aktien-e5",
        prompt: "Was ist der konzeptionelle Unterschied zwischen Bilanzkurs und Ertragskurs bei der Aktienbewertung?",
        solution: [{ type: "p", text: "Der Bilanzkurs bewertet die Aktie ausgehend vom bereits vorhandenen (bilanziellen) Vermögen des Unternehmens, also einer eher vergangenheitsorientierten, substanzbezogenen Sichtweise. Der Ertragskurs bewertet die Aktie dagegen ausgehend von der erwarteten künftigen Ertragskraft des Unternehmens — er ist zukunftsorientiert und berücksichtigt, wie viel Gewinn/Cashflow das Unternehmen voraussichtlich erwirtschaften wird, unabhängig vom bilanziellen Buchwert." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie wird der einfache Bilanzkurs (ohne stille Reserven) berechnet?", options: ["Fremdkapital / Aktienanzahl", "Gewinn / Aktienanzahl", "Börsenkurs / Nennwert", "Eigenkapital / Aktienanzahl"], correctIndex: 3, explanation: "Der einfache Bilanzkurs ergibt sich, indem das bilanzielle Eigenkapital durch die Anzahl der Aktien geteilt wird — er leitet den fairen Wert je Aktie also direkt aus der Bilanz ab, ohne stille Reserven oder künftige Ertragskraft zu berücksichtigen." },
      { id: "q2", question: "Was sind 'stille Reserven'?", options: ["Rücklagen, die ausschließlich in Verlustjahren neu gebildet werden können", "Die Differenz zwischen Zeitwert und Buchwert eines Vermögensgegenstands", "Bar vorhandene, aber nicht ausgeschüttete Gewinne", "Ein anderer Begriff für Kapitalrücklage"], correctIndex: 1, explanation: "Stille Reserven entstehen, wenn der tatsächliche Zeitwert eines Vermögensgegenstands über seinem niedrigeren bilanziellen Buchwert liegt — dieser Mehrwert ist im ausgewiesenen Eigenkapital nicht sichtbar, erhöht aber den wirtschaftlichen Wert des Unternehmens." },
      { id: "q3", question: "Wie verändert sich der Bilanzkurs, wenn stille Reserven berücksichtigt werden?", options: ["Er wird negativ", "Er sinkt immer", "Er steigt im Vergleich zum einfachen Bilanzkurs", "Er bleibt unter allen Umständen exakt und vollständig unverändert"], correctIndex: 2, explanation: "Stille Reserven erhöhen das wirtschaftliche Eigenkapital über den bilanziellen Buchwert hinaus; werden sie beim Bilanzkurs berücksichtigt, steigt der angepasste Bilanzkurs entsprechend gegenüber dem einfachen Bilanzkurs." },
      { id: "q4", question: "Worauf basiert der Ertragskurs im Unterschied zum Bilanzkurs?", options: ["Auf der erwarteten künftigen Ertragskraft", "Auf dem historischen Ausgabepreis", "Auf dem bilanziellen Buchwert des vorhandenen Vermögens laut Bilanz", "Ausschließlich auf dem Nennwert der Aktie"], correctIndex: 0, explanation: "Der Ertragskurs ist zukunftsorientiert und leitet den fairen Wert einer Aktie aus der erwarteten künftigen Ertragskraft des Unternehmens ab, während der Bilanzkurs auf dem bereits vorhandenen bilanziellen Vermögen (Substanzwert) basiert." },
      { id: "q5", question: "Wie lautet die Formel für das (theoretisch faire) KGV?", options: ["KGV = die Wachstumsrate dividiert durch die Renditeerwartung", "KGV = 1 / (Renditeerwartung − Wachstumsrate)", "KGV = Renditeerwartung × Wachstumsrate", "KGV = Renditeerwartung − Wachstumsrate"], correctIndex: 1, explanation: "Das theoretisch faire KGV ergibt sich als Kehrwert der Differenz aus Renditeerwartung und Wachstumsrate: KGV = 1 / (Renditeerwartung − Wachstumsrate). Je kleiner diese Differenz, desto größer das KGV." },
      { id: "q6", question: "Was passiert mit dem KGV, wenn die erwartete Wachstumsrate steigt (bei gleichbleibender Renditeerwartung)?", options: ["Das KGV bleibt unverändert", "Das KGV wird null", "Das KGV sinkt", "Das KGV steigt"], correctIndex: 3, explanation: "Da KGV = 1/(Renditeerwartung − Wachstumsrate), verkleinert eine steigende Wachstumsrate bei gleichbleibender Renditeerwartung den Nenner — ein kleinerer Nenner ergibt rechnerisch einen größeren Bruchwert, das KGV steigt also." },
      { id: "q7", question: "Was bedeutet ein sehr hohes KGV im Vergleich zum Branchendurchschnitt (mögliche Interpretation)?", options: ["Hohe Wachstumserwartungen, niedrigere Renditeforderung oder Überbewertung", "Das KGV hat keinerlei Aussagekraft", "Es bedeutet automatisch einen sicheren Kauf", "Die Aktie ist in absolut jedem denkbaren Fall grundsätzlich immer klar unterbewertet"], correctIndex: 0, explanation: "Da KGV = 1/(Renditeerwartung − Wachstumsrate), kann ein hohes KGV auf hohe erwartete Wachstumsraten oder eine niedrige geforderte Rendite hindeuten — es kann aber auch schlicht eine Überbewertung anzeigen, wenn Kurs und fundamentale Erwartungen auseinanderlaufen." },
      { id: "q8", question: "Steigt die geforderte Renditeerwartung der Anleger (bei gleichbleibender Wachstumsrate), was passiert mit dem fairen KGV?", options: ["Es wird unendlich", "Es steigt", "Es sinkt", "Es bleibt konstant"], correctIndex: 2, explanation: "Eine höhere geforderte Renditeerwartung vergrößert bei gleichbleibender Wachstumsrate den Nenner (Renditeerwartung − Wachstumsrate) in der KGV-Formel — ein größerer Nenner ergibt rechnerisch einen kleineren Bruchwert, das faire KGV sinkt also." },
      { id: "q9", question: "Welche Kennzahl ist eher substanz-/vergangenheitsorientiert?", options: ["Die Marktkapitalisierung", "Der Ertragskurs", "Der Bilanzkurs", "Das KGV"], correctIndex: 2, explanation: "Der Bilanzkurs leitet den fairen Wert aus dem bereits vorhandenen bilanziellen Eigenkapital ab und ist damit substanz- bzw. vergangenheitsorientiert, während der Ertragskurs zukunftsorientiert auf der erwarteten künftigen Ertragskraft basiert." },
      { id: "q10", question: "Renditeerwartung = 8 %, Wachstumsrate = 2 %. Wie hoch ist das faire KGV?", options: ["10,00", "16,67", "12,50", "20,00"], correctIndex: 1, explanation: "KGV = 1 / (Renditeerwartung − Wachstumsrate) = 1 / (0,08 − 0,02) = 1 / 0,06 ≈ 16,67 — die anderen Werte entstehen durch fehlerhafte Rechenoperationen mit denselben Ausgangsgrößen." }
    ]
  },
  {
    id: "finv-kapitalerhoehung-bezugsrecht",
    chapter: 4,
    order: 3,
    title: "Kapitalerhöhung, Bezugsrecht und Mischkurs",
    icon: "➕",
    summary: "Wie eine Kapitalerhöhung durch Ausgabe weiterer Aktien abläuft, welche Funktion das Bezugsrecht hat und wie der Mischkurs berechnet wird.",
    explanation: [
      { type: "p", text: "Bei einer Kapitalerhöhung gibt eine bestehende AG zusätzliche Aktien aus, oft zu einem Verkaufspreis, der unter dem aktuellen Börsenkurs liegt, um die Platzierung attraktiv zu gestalten und die Emission auch bei fallenden Kursen abzusichern." },
      { type: "p", text: "Da neue Aktien zu einem niedrigeren Preis als dem bisherigen Börsenkurs ausgegeben werden, würde der Anteil der Altaktionäre am Unternehmen ohne Schutzmechanismus verwässert (ihr prozentualer Anteil und der Wert ihrer Aktien würden sinken). Das Bezugsrecht schützt Altaktionäre davor: Es räumt ihnen das Recht ein, im Verhältnis ihres bisherigen Anteils bevorzugt neue Aktien zum vergünstigten Ausgabepreis zu beziehen (oder das Bezugsrecht am Markt zu verkaufen, falls sie nicht teilnehmen möchten)." },
      { type: "p", text: "Der Mischkurs (rechnerischer Kurs nach der Kapitalerhöhung) ergibt sich als gewichteter Durchschnitt aus dem alten Kurs und dem Ausgabepreis der neuen Aktien:" },
      { type: "formula", tex: "M = \\dfrac{K_{alt} \\cdot N_{alt} + K_{neu} \\cdot N_{neu}}{N_{alt} + N_{neu}}" },
      { type: "p", text: "Dabei ist K_alt der Kurs vor der Kapitalerhöhung, N_alt die Anzahl der alten Aktien, K_neu der Ausgabepreis der neuen Aktien und N_neu die Anzahl der neu ausgegebenen Aktien. Der Wert des Bezugsrechts entspricht ungefähr der Differenz zwischen dem alten Kurs und dem Mischkurs — er kompensiert die Altaktionäre für den rechnerischen Kursverlust durch die vergünstigte Neuausgabe." },
      { type: "p", text: "Vorteile eines hohen (stabilen) Aktienkurses für eine AG: günstigere künftige Kapitalerhöhungen (weniger Verwässerung nötig), höheres Prestige/Vertrauen am Kapitalmarkt, bessere Konditionen bei Fremdfinanzierung, und die Aktie eignet sich besser als \"Akquisitionswährung\" bei Übernahmen." }
    ],
    exercises: [
      {
        id: "finv-kapitalerhoehung-bezugsrecht-e1",
        prompt: "Eine AG hat 1.000.000 Aktien im Umlauf zu einem Kurs von 50 €. Sie gibt 200.000 neue Aktien zu einem Ausgabepreis von 40 € aus. Berechnen Sie den Mischkurs.",
        solution: [{ type: "p", text: "M = (K_alt·N_alt + K_neu·N_neu) / (N_alt+N_neu) = (50·1.000.000 + 40·200.000) / (1.000.000+200.000) = (50.000.000 + 8.000.000) / 1.200.000 = 58.000.000 / 1.200.000 ≈ 48,33 €." }]
      },
      {
        id: "finv-kapitalerhoehung-bezugsrecht-e2",
        prompt: "Wie hoch ist der rechnerische Kursrückgang je Altaktie durch die Kapitalerhöhung aus Aufgabe 1, und wie wird dieser Rückgang für Altaktionäre kompensiert?",
        solution: [{ type: "p", text: "Kursrückgang = alter Kurs − Mischkurs = 50 € − 48,33 € = 1,67 € je Aktie. Dieser rechnerische Wertverlust wird durch das Bezugsrecht kompensiert: Altaktionäre erhalten für jede alte Aktie ein Bezugsrecht, das ihnen entweder erlaubt, neue Aktien vergünstigt zu erwerben, oder das sie am Markt verkaufen können — der Wert des Bezugsrechts entspricht ungefähr diesem rechnerischen Kursrückgang." }]
      },
      {
        id: "finv-kapitalerhoehung-bezugsrecht-e3",
        prompt: "Warum wird der Ausgabepreis bei einer Kapitalerhöhung häufig unter dem aktuellen Börsenkurs festgelegt?",
        solution: [{ type: "p", text: "Ein Abschlag zum aktuellen Kurs macht die neuen Aktien für Investoren attraktiver und stellt sicher, dass die Emission auch bei zwischenzeitlich leicht fallenden Kursen erfolgreich platziert werden kann (Sicherheitspuffer). Zudem erleichtert ein niedrigerer Preis den Altaktionären, ihr Bezugsrecht auszuüben, da sie die neuen Aktien günstiger erwerben können als am Markt." }]
      },
      {
        id: "finv-kapitalerhoehung-bezugsrecht-e4",
        prompt: "Ein Altaktionär entscheidet sich, sein Bezugsrecht nicht auszuüben, sondern es zu verkaufen. Bleibt er dadurch wirtschaftlich vollständig unbeteiligt an der Verwässerung?",
        solution: [{ type: "p", text: "Näherungsweise ja: Verkauft der Altaktionär sein Bezugsrecht zum fairen Marktwert (der etwa dem rechnerischen Kursrückgang durch die Kapitalerhöhung entspricht), gleicht der Verkaufserlös den Wertverlust seiner bestehenden Aktien (durch den gesunkenen Mischkurs) in etwa aus. Er verliert dann zwar relativ an Unternehmensanteil (prozentuale Verwässerung seiner Stimmrechte), wird aber wertmäßig durch den Bezugsrechtsverkauf weitgehend kompensiert." }]
      },
      {
        id: "finv-kapitalerhoehung-bezugsrecht-e5",
        prompt: "Nennen Sie zwei Vorteile eines dauerhaft hohen Aktienkurses für eine AG.",
        solution: [{ type: "p", text: "1) Künftige Kapitalerhöhungen können zu einem höheren Ausgabepreis erfolgen, wodurch weniger neue Aktien für denselben Kapitalbedarf ausgegeben werden müssen — das reduziert die Verwässerung der Altaktionäre. 2) Ein hoher, stabiler Kurs signalisiert Vertrauen des Marktes und stärkt das Prestige des Unternehmens, was z. B. Verhandlungen mit Fremdkapitalgebern oder die Nutzung eigener Aktien als Akquisitionswährung bei Übernahmen erleichtert." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Wozu dient das Bezugsrecht bei einer Kapitalerhöhung?", options: ["Es verpflichtet Altaktionäre zum Verkauf ihrer Aktien", "Es hat keine praktische Funktion mehr", "Es garantiert Altaktionären eine feste Dividende", "Es schützt Altaktionäre vor Verwässerung ihres Anteils durch bevorzugten Bezug neuer Aktien"], correctIndex: 3, explanation: "Das Bezugsrecht sichert Altaktionären das vorrangige Recht, neue Aktien im Verhältnis ihres Anteils zu erwerben, und schützt so vor Verwässerung." },
      { id: "q2", question: "Wie lautet die Formel für den Mischkurs M nach einer Kapitalerhöhung?", options: ["M = K_alt + K_neu", "M = (K_alt·N_alt + K_neu·N_neu) / (N_alt+N_neu)", "M = K_alt / K_neu", "M = N_alt / N_neu"], correctIndex: 1, explanation: "Der Mischkurs ist ein mit den jeweiligen Aktienanzahlen gewichteter Durchschnitt aus altem Kurs und Ausgabepreis." },
      { id: "q3", question: "Warum liegt der Ausgabepreis bei Kapitalerhöhungen häufig unter dem aktuellen Börsenkurs?", options: ["Weil das gesetzlich vorgeschrieben ist", "Um die Marktkapitalisierung zu verringern", "Um die Emission attraktiv zu machen und gegen zwischenzeitliche Kursrückgänge abzusichern", "Weil neue Aktien immer wertlos sind"], correctIndex: 2, explanation: "Ein Preisabschlag erhöht die Attraktivität und Platzierungssicherheit der neuen Aktien." },
      { id: "q4", question: "Was passiert mit dem Mischkurs im Vergleich zum alten Kurs, wenn der Ausgabepreis der neuen Aktien unter dem alten Kurs liegt?", options: ["Der Mischkurs bleibt exakt gleich", "Der Mischkurs ist immer null", "Der Mischkurs liegt zwischen Ausgabepreis und altem Kurs, also unter dem alten Kurs", "Der Mischkurs steigt über den alten Kurs"], correctIndex: 2, explanation: "Da der Ausgabepreis niedriger ist, sinkt der gewichtete Durchschnittskurs (Mischkurs) rechnerisch unter den alten Kurs." },
      { id: "q5", question: "Was wird durch den Wert des Bezugsrechts näherungsweise kompensiert?", options: ["Der Nennwert der neuen Aktien", "Die Körperschaftsteuer des Unternehmens", "Die Dividendenzahlung des laufenden Jahres", "Der rechnerische Kursverlust der Altaktien durch die Kapitalerhöhung"], correctIndex: 3, explanation: "Der Bezugsrechtswert gleicht ungefähr den rechnerischen Kursrückgang (alter Kurs minus Mischkurs) aus." },
      { id: "q6", question: "Eine AG hat 500.000 Aktien zu 100 € und gibt 500.000 neue Aktien zu 80 € aus. Wie hoch ist der Mischkurs?", options: ["80 €", "90 €", "180 €", "100 €"], correctIndex: 1, explanation: "M = (100·500.000+80·500.000)/(500.000+500.000) = (50.000.000+40.000.000)/1.000.000 = 90.000.000/1.000.000 = 90 €." },
      { id: "q7", question: "Was kann ein Altaktionär tun, wenn er sein Bezugsrecht nicht ausüben möchte?", options: ["Er verliert automatisch alle seine bisherigen Aktien", "Er muss die Gesellschaft verlassen", "Er kann das Bezugsrecht am Markt verkaufen", "Das Bezugsrecht verfällt ersatzlos ohne jede Kompensation"], correctIndex: 2, explanation: "Bezugsrechte sind handelbar und können am Markt verkauft werden, wenn der Aktionär nicht an der Kapitalerhöhung teilnehmen möchte." },
      { id: "q8", question: "Welchen Vorteil bietet ein hoher, stabiler Aktienkurs bei künftigen Kapitalerhöhungen?", options: ["Es müssen weniger neue Aktien für denselben Kapitalbedarf ausgegeben werden, was Verwässerung reduziert", "Der Ausgabepreis wird dadurch automatisch negativ", "Kapitalerhöhungen werden dadurch unmöglich", "Es müssen mehr neue Aktien für denselben Kapitalbedarf ausgegeben werden"], correctIndex: 0, explanation: "Bei höherem Kursniveau kann derselbe Kapitalbetrag mit weniger neuen Aktien eingesammelt werden — weniger Verwässerung." },
      { id: "q9", question: "Was bezeichnet man als 'Akquisitionswährung' im Zusammenhang mit einem hohen Aktienkurs?", options: ["Eine spezielle Fremdwährung für Übernahmen", "Die Nutzung eigener Aktien anstelle von Bargeld zur Bezahlung bei Unternehmensübernahmen", "Eine Steuer auf Aktienkäufe", "Eine staatliche Subvention für Übernahmen"], correctIndex: 1, explanation: "Ein hoher Aktienkurs erlaubt es, eigene Aktien statt Cash als Zahlungsmittel bei Übernahmen einzusetzen (Akquisitionswährung)." },
      { id: "q10", question: "Warum ist der Mischkurs immer ein Wert zwischen dem alten Kurs und dem Ausgabepreis der neuen Aktien (bei einem Preisabschlag)?", options: ["Weil er ein gewichteter Durchschnitt beider Werte ist", "Das ist nicht korrekt, der Mischkurs kann jeden beliebigen Wert annehmen", "Weil das Gesetz das vorschreibt", "Weil der Mischkurs zufällig bestimmt wird"], correctIndex: 0, explanation: "Als gewichteter Durchschnitt aus altem Kurs und Ausgabepreis liegt der Mischkurs stets zwischen diesen beiden Werten." }
    ]
  }
];
