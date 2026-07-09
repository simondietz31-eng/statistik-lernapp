const FINV_CHAPTER6_TOPICS = [
  {
    id: "finv-investitionsarten-ebenen-ziele",
    chapter: 6,
    order: 1,
    title: "Investitionsarten, -ebenen und -ziele",
    icon: "🎯",
    summary: "Wie sich Investitionen nach Art, Planungsebene und Zielsetzung systematisieren lassen, und der Unterschied zwischen statischen und dynamischen Investitionsrechenverfahren.",
    explanation: [
      { type: "p", text: "Investitionen lassen sich nach der Art des investierten Gegenstands unterscheiden:" },
      { type: "list", items: [
        "Sachinvestitionen: Grundstücke, Sachanlagen, Kraftfahrzeuge",
        "Immaterielle Investitionen: Patente, Lizenzen, Software",
        "Finanzinvestitionen: Beteiligungen, Anleihen, Forderungen"
      ]},
      { type: "p", text: "Investitionsentscheidungen werden auf verschiedenen Planungsebenen getroffen:" },
      { type: "list", items: [
        "Strategische Investitionsplanung: langfristig ausgerichtet, bezieht sich auf das am Markt angebotene Produkt-/Dienstleistungsangebot (z. B. Forschungs- und Entwicklungsinvestitionen, Kapazitätserweiterung)",
        "Taktische Investitionsplanung: mittelfristig, aus der strategischen Planung abgeleitet, bezieht sich auf die Aufrechterhaltung der laufenden Geschäftstätigkeit (z. B. Ersatzbeschaffung von Maschinen, Rationalisierungsinvestitionen)",
        "Operative Investitionsplanung: kurzfristig, aus der taktischen Planung abgeleitet, bezieht sich auf regelmäßig wiederkehrende Investitionsanlässe (z. B. laufende Ersatzbeschaffung geringwertiger Investitionsobjekte)"
      ]},
      { type: "p", text: "Investitionsziele gliedern sich in monetäre Ziele (Gewinnsteigerung, Rentabilitätssteigerung, Umsatzsteigerung, Kostensenkung — diese sind Gegenstand von Investitionsrechnungen) und nicht-monetäre Ziele (Streben nach Prestige, Marktanteilswachstum, soziale Ziele, ökologische Ziele)." },
      { type: "p", text: "Investitionsrechenverfahren gliedern sich grundlegend in:" },
      { type: "list", items: [
        "Statische Investitionsrechenverfahren: Kostenvergleichsrechnung, Gewinnvergleichsrechnung, Rentabilitätsvergleichsrechnung — arbeiten meist mit Durchschnittswerten einer Periode, ohne Zeitwerte explizit zu berücksichtigen",
        "Dynamische Investitionsrechenverfahren: Kapitalwertmethode, Kapitalwertrate, interne Zinsfußmethode, modifizierte IZF-Methode, Amortisationsrechnung, Annuitätenmethode — berücksichtigen den Zeitpunkt der Zahlungen (Zeitwerte, Barwerte) und basieren auf Cashflows über den gesamten Planungszeitraum"
      ]}
    ],
    exercises: [
      {
        id: "finv-investitionsarten-ebenen-ziele-e1",
        prompt: "Ordnen Sie folgende Investitionen der jeweiligen Investitionsart zu: a) Kauf eines Patents, b) Erwerb von Unternehmensanleihen, c) Kauf eines neuen Lkw.",
        solution: "a) Kauf eines Patents → immaterielle Investition. b) Erwerb von Unternehmensanleihen → Finanzinvestition. c) Kauf eines neuen Lkw → Sachinvestition."
      },
      {
        id: "finv-investitionsarten-ebenen-ziele-e2",
        prompt: "Ein Unternehmen plant den Bau eines neuen Werks zur Erschließung eines neuen Marktsegments in den nächsten 10 Jahren. Welcher Planungsebene ist diese Entscheidung zuzuordnen, und warum?",
        solution: "Strategische Investitionsplanung: Die Entscheidung ist langfristig ausgerichtet (10 Jahre) und bezieht sich auf das künftige Produkt-/Marktangebot des Unternehmens (Erschließung eines neuen Marktsegments) — beides sind typische Kennzeichen der strategischen Ebene, im Gegensatz zur taktischen (mittelfristig, laufende Geschäftstätigkeit) oder operativen (kurzfristig, wiederkehrend) Ebene."
      },
      {
        id: "finv-investitionsarten-ebenen-ziele-e3",
        prompt: "Nennen Sie je zwei monetäre und zwei nicht-monetäre Investitionsziele.",
        solution: "Monetäre Ziele: Gewinnsteigerung, Kostensenkung (alternativ: Rentabilitätssteigerung, Umsatzsteigerung). Nicht-monetäre Ziele: Marktanteilswachstum, ökologische Ziele (alternativ: Prestige, soziale Ziele)."
      },
      {
        id: "finv-investitionsarten-ebenen-ziele-e4",
        prompt: "Was ist der zentrale methodische Unterschied zwischen statischen und dynamischen Investitionsrechenverfahren?",
        solution: "Statische Verfahren (Kosten-, Gewinn-, Rentabilitätsvergleichsrechnung) arbeiten typischerweise mit Durchschnittswerten einer repräsentativen Periode und berücksichtigen den Zeitpunkt einzelner Zahlungen nicht explizit — sie sind rechnerisch einfacher, aber weniger präzise. Dynamische Verfahren (Kapitalwert-, interne Zinsfuß-, Amortisations-, Annuitätenmethode) basieren auf den tatsächlichen Cashflows über den gesamten Planungszeitraum und berücksichtigen die Zeitwerte der Zahlungen durch Ab-/Aufzinsung — sie sind genauer, aber rechenaufwändiger."
      },
      {
        id: "finv-investitionsarten-ebenen-ziele-e5",
        prompt: "Die Ersatzbeschaffung einer einzelnen, regelmäßig auszutauschenden Bürodruckerpatrone/eines geringwertigen Wirtschaftsguts — welcher Planungsebene ist das zuzuordnen?",
        solution: "Operative Investitionsplanung: Es handelt sich um eine kurzfristige, regelmäßig wiederkehrende Ersatzbeschaffung eines geringwertigen Investitionsobjekts — genau das kennzeichnet die operative Ebene, im Gegensatz zur strategischen oder taktischen Ebene."
      }
    ],
    quiz: [
      { id: "q1", question: "Zu welcher Investitionsart zählt der Kauf einer Softwarelizenz?", options: ["Finanzinvestition", "Sachinvestition", "Keine der genannten", "Immaterielle Investition"], correctIndex: 3, explanation: "Software/Lizenzen zählen zu den immateriellen Investitionen." },
      { id: "q2", question: "Zu welcher Investitionsart zählt der Erwerb einer Unternehmensbeteiligung?", options: ["Finanzinvestition", "Operative Investition", "Sachinvestition", "Immaterielle Investition"], correctIndex: 0, explanation: "Beteiligungen, Anleihen und Forderungen zählen zu den Finanzinvestitionen." },
      { id: "q3", question: "Welche Planungsebene ist langfristig ausgerichtet und bezieht sich auf das Produkt-/Dienstleistungsangebot des Unternehmens?", options: ["Keine dieser Ebenen", "Strategische Investitionsplanung", "Taktische Investitionsplanung", "Operative Investitionsplanung"], correctIndex: 1, explanation: "Die strategische Planung ist langfristig und betrifft grundlegende Marktangebots-Entscheidungen." },
      { id: "q4", question: "Welche Investitionsplanungsebene betrifft typischerweise die Ersatzbeschaffung von Maschinen?", options: ["Taktische Investitionsplanung", "Nicht-monetäre Investitionsplanung", "Strategische Investitionsplanung", "Es gibt keine passende Ebene"], correctIndex: 0, explanation: "Ersatzbeschaffung von Maschinen ist ein typisches Beispiel für die mittelfristige, taktische Investitionsplanung." },
      { id: "q5", question: "Welches Ziel zählt zu den nicht-monetären Investitionszielen?", options: ["Kostensenkung", "Rentabilitätssteigerung", "Gewinnsteigerung", "Marktanteilswachstum"], correctIndex: 3, explanation: "Marktanteilswachstum ist ein nicht-monetäres (strategisches) Ziel, während die anderen genannten Ziele monetär sind." },
      { id: "q6", question: "Welche Verfahren zählen zu den statischen Investitionsrechenverfahren?", options: ["Nur die Amortisationsrechnung", "Annuitätenmethode und Amortisationsrechnung", "Kostenvergleichs-, Gewinnvergleichs- und Rentabilitätsvergleichsrechnung", "Kapitalwertmethode und interne Zinsfußmethode"], correctIndex: 2, explanation: "Kosten-, Gewinn- und Rentabilitätsvergleichsrechnung sind die klassischen statischen Verfahren." },
      { id: "q7", question: "Was ist ein zentrales Merkmal dynamischer Investitionsrechenverfahren?", options: ["Sie ignorieren den Zeitpunkt von Zahlungen vollständig", "Sie werden nie für langfristige Investitionen verwendet", "Sie basieren ausschließlich auf Gewinngrößen statt Cashflows", "Sie berücksichtigen die Zeitwerte der Zahlungen (Ab-/Aufzinsung)"], correctIndex: 3, explanation: "Dynamische Verfahren zinsen Zahlungen auf einen gemeinsamen Zeitpunkt ab/auf und basieren auf Cashflows." },
      { id: "q8", question: "Welches Verfahren zählt zu den dynamischen Investitionsrechenverfahren?", options: ["Rentabilitätsvergleichsrechnung", "Kapitalwertmethode", "Kostenvergleichsrechnung", "Gewinnvergleichsrechnung"], correctIndex: 1, explanation: "Die Kapitalwertmethode ist das zentrale dynamische Verfahren (Kapitel 9)." },
      { id: "q9", question: "Was ist der wesentliche Vorteil dynamischer gegenüber statischen Verfahren?", options: ["Sie sind gesetzlich vorgeschrieben", "Sie benötigen keinerlei Datenbasis", "Sie berücksichtigen den Zeitpunkt der Zahlungen genauer und sind daher präziser", "Sie sind grundsätzlich einfacher zu berechnen"], correctIndex: 2, explanation: "Durch die Berücksichtigung von Zeitwerten bilden dynamische Verfahren die tatsächliche Vorteilhaftigkeit von Investitionen genauer ab." },
      { id: "q10", question: "Auf welcher Investitionsplanungsebene werden Forschungs- und Entwicklungsinvestitionen typischerweise angesiedelt?", options: ["Keine der drei Ebenen", "Operative Ebene", "Strategische Ebene", "Taktische Ebene"], correctIndex: 2, explanation: "F&E-Investitionen sind langfristig ausgerichtet und betreffen das künftige Produktangebot — strategische Ebene." }
    ]
  },
  {
    id: "finv-finanzmathematik-grundbegriffe",
    chapter: 6,
    order: 2,
    title: "Finanzmathematik — Grundbegriffe",
    icon: "🔢",
    summary: "Cashflow, Barwert, Endwert und Zeitwert als Grundbausteine der Finanzmathematik, und warum Zahlungsströme nur bei gleichem Bezugszeitpunkt vergleichbar sind.",
    explanation: [
      { type: "p", text: "Für die Beurteilung von Investitionsentscheidungen ist stets der Zeitpunkt einer Zahlung entscheidend — 100 € heute sind (bei positivem Zins) mehr wert als 100 € in einem Jahr. Zentrale Grundbegriffe:" },
      { type: "list", items: [
        "Cashflow: alle Ein- und Auszahlungen eines Investitionsprojekts zusammen mit den jeweiligen Zeitpunkten = Zahlungsströme",
        "Barwert (K₀): der Wert eines Zahlungsstroms zu Beginn (heute) — man ermittelt ihn durch Abzinsen (Diskontieren) künftiger Zahlungen",
        "Endwert (Kₙ): der Wert eines Zahlungsstroms am Ende der Laufzeit — man ermittelt ihn durch Aufzinsen früherer Zahlungen",
        "Zeitwert zum Zeitpunkt t (Kₜ): der Wert eines Zahlungsstroms zu einem beliebigen Zwischenzeitpunkt t"
      ]},
      { type: "p", text: "Grundregel: Verschiedene Zahlungsströme (bzw. Finanzierungs- oder Investitionsalternativen) lassen sich nur dann sinnvoll miteinander vergleichen, wenn sie auf einen identischen Zeitpunkt ab- oder aufgezinst werden. Dabei ist es rechnerisch egal, welchen konkreten Zeitpunkt man dafür wählt — Barwert-, Zeitwert- und Endwertvergleich führen bei korrekter Rechnung zum selben Ergebnis (welche Alternative vorteilhafter ist). In der Praxis wird meist der Barwertvergleich als Standard verwendet." },
      { type: "p", text: "Zur Umsetzung in der Praxis wird häufig Excel verwendet: Dabei sollten (Eingabe-)Parameter und Berechnungsformeln in getrennten Bereichen stehen, um die Übersichtlichkeit zu wahren und Fehler zu vermeiden." }
    ],
    exercises: [
      {
        id: "finv-finanzmathematik-grundbegriffe-e1",
        prompt: "Erklären Sie in eigenen Worten den Unterschied zwischen Barwert, Endwert und Zeitwert.",
        solution: "Der Barwert (K₀) ist der Wert eines Zahlungsstroms zu Beginn der Betrachtung (heute) — man erhält ihn durch Abzinsen künftiger Zahlungen auf den Startzeitpunkt. Der Endwert (Kₙ) ist der Wert am Ende der Laufzeit — man erhält ihn durch Aufzinsen aller Zahlungen auf den Endzeitpunkt. Der Zeitwert (Kₜ) verallgemeinert dieses Konzept auf einen beliebigen Zwischenzeitpunkt t: Man zinst frühere Zahlungen auf t auf und spätere Zahlungen auf t ab."
      },
      {
        id: "finv-finanzmathematik-grundbegriffe-e2",
        prompt: "Warum kann man zwei Zahlungsalternativen nicht einfach anhand ihrer nominalen (unverzinsten) Beträge vergleichen, wenn sie zu unterschiedlichen Zeitpunkten fällig sind?",
        solution: "Weil Geld einen Zeitwert hat: Ein Betrag, der später zur Verfügung steht, hat wegen entgangener Zinserträge (Opportunitätskosten) einen geringeren heutigen Wert als derselbe Nominalbetrag, der bereits jetzt verfügbar ist. Ein direkter Vergleich der Nominalbeträge ohne Berücksichtigung des Zeitpunkts würde daher zu falschen Schlussfolgerungen über die tatsächliche Vorteilhaftigkeit führen — die Beträge müssen zuerst auf einen gemeinsamen Zeitpunkt ab- oder aufgezinst werden."
      },
      {
        id: "finv-finanzmathematik-grundbegriffe-e3",
        prompt: "Ist es für das Ergebnis eines Alternativenvergleichs entscheidend, ob man den Barwert- oder den Endwertvergleich wählt? Begründen Sie.",
        solution: "Nein, bei korrekter Rechnung mit demselben Zinssatz führen Barwert- und Endwertvergleich (und jeder Zeitwertvergleich zu einem beliebigen Zeitpunkt) zum identischen Ergebnis bezüglich der Frage, welche Alternative vorteilhafter ist. Entscheidend ist nur, dass beide Alternativen konsequent auf denselben Vergleichszeitpunkt bezogen werden. In der Praxis wird aus Konvention meist der Barwertvergleich als Standard genutzt."
      },
      {
        id: "finv-finanzmathematik-grundbegriffe-e4",
        prompt: "Was versteht man unter einem Cashflow im finanzmathematischen Sinn?",
        solution: "Der Cashflow umfasst sämtliche Ein- und Auszahlungen eines Projekts, jeweils mit dem Zeitpunkt ihres Anfalls verknüpft — also die vollständige zeitliche Struktur der Zahlungsströme. Im Gegensatz zu reinen Erfolgsgrößen (wie dem bilanziellen Gewinn) stellt der Cashflow ausschließlich auf tatsächliche Zahlungen ab, nicht auf periodisierte Aufwands-/Ertragsgrößen."
      },
      {
        id: "finv-finanzmathematik-grundbegriffe-e5",
        prompt: "Warum wird bei der praktischen Umsetzung in Excel empfohlen, Eingabeparameter und Berechnungsformeln in getrennten Bereichen zu platzieren?",
        solution: "Werden Parameterwerte direkt in Formeln 'hart codiert' oder unübersichtlich vermischt, wird das Tabellenblatt schnell unübersichtlich und fehleranfällig — Änderungen an einem Parameter (z. B. dem Zinssatz) erfordern dann das Auffinden und Anpassen zahlreicher Formeln. Trennt man dagegen einen klar erkennbaren Parameterbereich von einem separaten Berechnungsbereich (der auf die Parameterzellen verweist), lassen sich Annahmen zentral ändern, Fehler leichter erkennen und die Nachvollziehbarkeit der Berechnung deutlich verbessern."
      }
    ],
    quiz: [
      { id: "q1", question: "Was bezeichnet man als Barwert?", options: ["Ausschließlich den Kaufpreis einer Aktie", "Den Wert eines Zahlungsstroms zu Beginn (heute)", "Den Wert eines Zahlungsstroms am Ende der Laufzeit", "Den Nominalwert ohne jede Verzinsung"], correctIndex: 1, explanation: "Der Barwert K₀ ist der auf den Startzeitpunkt abgezinste Wert eines Zahlungsstroms." },
      { id: "q2", question: "Wie ermittelt man den Endwert eines Zahlungsstroms?", options: ["Durch einfache Addition ohne Verzinsung", "Durch Abzinsen künftiger Zahlungen", "Durch Aufzinsen der Zahlungen auf den Endzeitpunkt", "Durch Multiplikation mit dem Nennwert"], correctIndex: 2, explanation: "Der Endwert Kₙ ergibt sich durch Aufzinsen aller Zahlungen auf das Ende der Laufzeit." },
      { id: "q3", question: "Wann sind zwei Zahlungsströme sinnvoll miteinander vergleichbar?", options: ["Nur wenn sie exakt gleich hoch sind", "Niemals, Zahlungsströme sind grundsätzlich nicht vergleichbar", "Nur wenn beide am selben Tag fällig sind", "Wenn sie auf denselben Zeitpunkt ab- oder aufgezinst werden"], correctIndex: 3, explanation: "Vergleichbarkeit erfordert, beide Zahlungsströme auf einen gemeinsamen Bezugszeitpunkt zu beziehen." },
      { id: "q4", question: "Führt ein Barwertvergleich bei korrekter Rechnung zu einem anderen Ergebnis als ein Endwertvergleich?", options: ["Ja, immer zu einem völlig anderen Ergebnis", "Endwertvergleiche sind grundsätzlich unzulässig", "Nur bei negativen Zinssätzen unterscheiden sie sich", "Nein, beide führen (bei gleichem Zinssatz) zur selben Vorteilhaftigkeitsaussage"], correctIndex: 3, explanation: "Barwert- und Endwertvergleich sind rechnerisch äquivalent und liefern dieselbe Vorteilhaftigkeitsaussage." },
      { id: "q5", question: "Was umfasst der Cashflow eines Investitionsprojekts?", options: ["Nur den bilanziellen Gewinn", "Alle Ein- und Auszahlungen mit ihren jeweiligen Zeitpunkten", "Nur die Abschreibungen", "Ausschließlich die Anfangsinvestition"], correctIndex: 1, explanation: "Der Cashflow bildet sämtliche tatsächlichen Zahlungsströme über die Zeit ab." },
      { id: "q6", question: "Warum hat Geld einen 'Zeitwert'?", options: ["Weil Geldscheine physisch altern", "Weil der Zeitwert reine Willkür ist", "Weil ein heute verfügbarer Betrag angelegt werden und Zinsen erwirtschaften kann, ein später verfügbarer Betrag das nicht kann", "Weil Inflation immer null ist"], correctIndex: 2, explanation: "Durch entgangene Zinserträge (Opportunitätskosten) hat ein früherer Zahlungszeitpunkt einen höheren Wert." },
      { id: "q7", question: "Was ist der Zeitwert Kₜ?", options: ["Ein Wert, der nur am Ende der Laufzeit existiert", "Ein rein steuerlicher Begriff", "Nur ein anderer Name für den Endwert", "Der Wert eines Zahlungsstroms zu einem beliebigen Zwischenzeitpunkt t"], correctIndex: 3, explanation: "Kₜ verallgemeinert Barwert (t=0) und Endwert (t=n) auf einen beliebigen Zeitpunkt t." },
      { id: "q8", question: "Warum wird beim Aufbau einer Excel-Berechnung empfohlen, Parameter und Berechnungen zu trennen?", options: ["Um Übersichtlichkeit zu wahren und Änderungen/Fehlersuche zu erleichtern", "Weil Excel das technisch erzwingt", "Weil sonst keine Formeln verwendet werden können", "Aus rein ästhetischen Gründen ohne praktischen Nutzen"], correctIndex: 0, explanation: "Getrennte Bereiche erleichtern Nachvollziehbarkeit, Fehlersuche und das Anpassen von Annahmen." },
      { id: "q9", question: "Welche Aussage zum Vergleich von Investitionsalternativen ist korrekt?", options: ["Man muss für beide Alternativen denselben Bezugszeitpunkt wählen", "Ein Vergleich ist grundsätzlich nur über Barwerte zulässig", "Ein Vergleich ist grundsätzlich nur über Endwerte zulässig", "Man darf beliebige, unterschiedliche Bezugszeitpunkte für die beiden Alternativen wählen"], correctIndex: 0, explanation: "Nur bei identischem Bezugszeitpunkt für beide Alternativen ist der Vergleich methodisch korrekt." },
      { id: "q10", question: "Was unterscheidet den Cashflow-Ansatz von einem reinen Gewinnvergleich?", options: ["Der Cashflow-Ansatz berücksichtigt nur bilanzielle Größen", "Der Cashflow-Ansatz stellt auf tatsächliche Zahlungen ab statt auf periodisierte Erfolgsgrößen", "Ein Gewinnvergleich berücksichtigt immer die Zeitwerte der Zahlungen", "Es gibt keinen Unterschied"], correctIndex: 1, explanation: "Cashflows sind tatsächliche Zahlungsströme, während der bilanzielle Gewinn durch Periodisierung (z. B. Abschreibungen) von den tatsächlichen Zahlungen abweichen kann." }
    ]
  }
];
