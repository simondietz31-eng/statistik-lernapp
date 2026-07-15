const FINV_CHAPTER3_TOPICS = [
  {
    id: "finv-finanzierungsformen-fristen",
    chapter: 3,
    order: 1,
    title: "Finanzierungsanlass, Fristenkongruenz und Eigen-/Fremdkapital",
    icon: "🗂️",
    summary: "Wie sich Finanzierungsformen nach Anlass, Kapitalüberlassungsdauer und Herkunft systematisieren lassen, und wie Banken die Kreditwürdigkeit prüfen.",
    explanation: [
      { type: "p", text: "Finanzierungsformen lassen sich nach mehreren Kriterien systematisieren:" },
      { type: "list", items: [
        "Finanzierungsanlass im Lebenszyklus des Unternehmens: Gründungsphase → Wachstumsphase → Reifephase → ggf. Sanierungs-/Restrukturierungsphase. Der Finanzierungsbedarf und die passenden Finanzierungsinstrumente unterscheiden sich je nach Phase erheblich (z. B. Venture Capital eher in der Gründungs-/Wachstumsphase, Anleihen eher in der Reifephase).",
        "Kapitalüberlassungsdauer: kurzfristig (< 1 Jahr), mittelfristig (1–5 Jahre), langfristig (> 5 Jahre)",
        "Herkunft der Mittel: Außenfinanzierung (Mittel kommen von außen ins Unternehmen) vs. Innenfinanzierung (Mittel werden im Unternehmen selbst erwirtschaftet/freigesetzt)",
        "Rechtliche Stellung des Kapitalgebers: Eigenkapital (Eigentümerstellung) vs. Fremdkapital (Gläubigerstellung)"
      ]},
      { type: "p", text: "Fristenkongruenz / \"Goldene Bankregel\": Die Kapitalüberlassungsdauer der Finanzierung sollte zur Kapitalbindungsdauer (Nutzungsdauer) der finanzierten Investition passen. Wird eine langfristige Investition (z. B. eine Maschine mit 10 Jahren Nutzungsdauer) kurzfristig finanziert, entsteht ein Refinanzierungsrisiko, wenn der kurzfristige Kredit nicht rechtzeitig verlängert werden kann. Die Regel lässt allerdings Interpretationsspielräume, da nicht jede Position exakt fristenkongruent finanziert werden muss (z. B. wird laufendes Umlaufvermögen oft revolvierend kurzfristig finanziert)." },
      { type: "p", text: "Eigenkapital vs. Fremdkapital — zentrale Unterschiede:" },
      { type: "list", items: [
        "Eigenkapital: Eigentümerstellung, volle Haftung (bis zur Höhe der Einlage bzw. unbeschränkt je nach Rechtsform), Geschäftsführungs-/Mitspracherechte, grundsätzlich unbefristete Kapitalüberlassung",
        "Fremdkapital: Gläubigerstellung, keine Haftung (Rückzahlungsanspruch unabhängig vom Geschäftserfolg), i. d. R. keine Geschäftsführungsrechte, befristete Kapitalüberlassung mit vertraglich fixierter Verzinsung"
      ]},
      { type: "p", text: "Bei der Kreditvergabe prüft eine Bank sowohl harte Kriterien (z. B. Bilanzkennzahlen, verfügbare Sicherheiten, Verschuldungsgrad) als auch weiche Kriterien (z. B. Managementqualität, Branchenaussichten, Reputation). Wichtige Sicherheitenarten sind u. a. Grundschulden, Sicherungsübereignungen, Bürgschaften und Forderungsabtretungen." }
    ],
    exercises: [
      {
        id: "finv-finanzierungsformen-fristen-e1",
        prompt: "Ein Unternehmen finanziert eine Maschine mit 8 Jahren Nutzungsdauer über einen Kontokorrentkredit mit täglicher Kündigungsmöglichkeit durch die Bank. Beurteilen Sie diese Finanzierung anhand der Fristenkongruenz.",
        solution: [{ type: "p", text: "Diese Finanzierung verstößt gegen die Fristenkongruenz (goldene Bankregel): Eine langfristig gebundene Investition (8 Jahre Nutzungsdauer) wird durch extrem kurzfristiges, jederzeit kündbares Fremdkapital finanziert. Es besteht ein erhebliches Refinanzierungsrisiko — kündigt die Bank den Kontokorrentkredit oder verlängert ihn nicht, gerät das Unternehmen in Liquiditätsschwierigkeiten, obwohl die Investition selbst wirtschaftlich sinnvoll sein kann. Sinnvoller wäre ein langfristiges Darlehen mit zur Nutzungsdauer passender Laufzeit." }]
      },
      {
        id: "finv-finanzierungsformen-fristen-e2",
        prompt: "Bilanz eines Unternehmens: Sachanlagen 4.000.000 €, Vorräte 1.000.000 €, Forderungen L/L 800.000 €, Kasse 400.000 €. Passiva: Eigenkapital 3.000.000 €, Fremdkapital Laufzeit > 5 Jahre 1.500.000 €, Laufzeit 1–5 Jahre 1.100.000 €, Laufzeit < 1 Jahr 600.000 €. Prüfen Sie die goldene Bilanzregel (Anlagevermögen sollte durch langfristiges Kapital gedeckt sein).",
        solution: [{ type: "p", text: "Anlagevermögen (Sachanlagen) = 4.000.000 €. Langfristig verfügbares Kapital (Eigenkapital + Fremdkapital > 5 Jahre) = 3.000.000 € + 1.500.000 € = 4.500.000 €. Da 4.500.000 € > 4.000.000 €, ist die goldene Bilanzregel (im engeren Sinn: Anlagevermögen vollständig durch langfristiges Kapital gedeckt) erfüllt — es verbleiben sogar 500.000 € langfristiges Kapital zur (anteiligen) Finanzierung des Umlaufvermögens, was die Fristenkongruenz zusätzlich stützt." }]
      },
      {
        id: "finv-finanzierungsformen-fristen-e3",
        prompt: "Nennen Sie je zwei harte und zwei weiche Kriterien, die eine Bank bei der Kreditvergabeprüfung typischerweise heranzieht.",
        solution: [{ type: "p", text: "Harte Kriterien (quantitativ, aus Zahlen ableitbar): Eigenkapitalquote/Verschuldungsgrad, vorhandene Sicherheiten (z. B. Grundschulden, Bürgschaften). Weiche Kriterien (qualitativ): Qualität des Managements/der Geschäftsführung, Einschätzung der Branchen- und Marktaussichten (z. B. Wettbewerbssituation, Konjunkturabhängigkeit)." }]
      },
      {
        id: "finv-finanzierungsformen-fristen-e4",
        prompt: "Erläutern Sie den Unterschied zwischen Eigenkapital- und Fremdkapitalgebern hinsichtlich Haftung und Mitspracherecht.",
        solution: [{ type: "p", text: "Eigenkapitalgeber (Eigentümer) haften mit ihrer Einlage (je nach Rechtsform ggf. sogar unbeschränkt, z. B. bei Einzelunternehmen/OHG) für die Verbindlichkeiten des Unternehmens und tragen damit unmittelbar das unternehmerische Risiko; im Gegenzug erhalten sie Geschäftsführungs- und/oder Mitspracherechte (z. B. Stimmrechte in der Hauptversammlung). Fremdkapitalgeber (Gläubiger) haften nicht für die Verbindlichkeiten des Unternehmens — sie haben einen festen Rückzahlungs- und Zinsanspruch, der grundsätzlich unabhängig vom Geschäftserfolg besteht, verfügen aber i. d. R. über keine Geschäftsführungsrechte." }]
      },
      {
        id: "finv-finanzierungsformen-fristen-e5",
        prompt: "In welcher Lebenszyklusphase eines Unternehmens ist Venture Capital typischerweise am relevantesten, und warum eignen sich klassische Bankkredite hier oft weniger?",
        solution: [{ type: "p", text: "Venture Capital ist typischerweise in der Gründungs- und frühen Wachstumsphase relevant, wenn junge Unternehmen noch keine oder kaum belastbare Sicherheiten, Erfolgshistorie oder stabile Cashflows vorweisen können. Klassische Bankkredite eignen sich hier oft weniger, weil Banken i. d. R. Sicherheiten und eine verlässliche Zins-/Tilgungsfähigkeit erwarten — beides ist in der Gründungsphase häufig noch nicht ausreichend gegeben. Venture-Capital-Geber tragen dagegen bewusst ein höheres unternehmerisches Risiko gegen eine Beteiligung am (potenziell hohen) künftigen Erfolg." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Was besagt die Fristenkongruenz (goldene Bankregel) im Kern?", options: ["Kapitalüberlassungsdauer sollte zur Nutzungsdauer passen", "Eigenkapital darf unter keinen Umständen jemals langfristig gebunden werden", "Nur Banken dürfen Kredite vergeben", "Alle Kredite müssen kurzfristig sein"], correctIndex: 0, explanation: "Die Fristenkongruenz verlangt, dass die Kapitalüberlassungsdauer einer Finanzierung zur Kapitalbindungsdauer der finanzierten Investition passt. Wird eine langfristige Investition kurzfristig finanziert, entsteht ein Refinanzierungsrisiko, falls der Kredit nicht rechtzeitig verlängert werden kann." },
      { id: "q2", question: "Ab welcher Laufzeit spricht man von langfristiger Finanzierung (gemäß der in der Vorlesung genutzten Einteilung)?", options: ["Ab 6 Monaten", "Nur bei unbefristeten Verträgen", "Ab mehr als 5 Jahren", "Ab 1 Monat"], correctIndex: 2, explanation: "Die Vorlesung unterteilt Finanzierungen nach Kapitalüberlassungsdauer in kurzfristig (unter 1 Jahr), mittelfristig (1 bis 5 Jahre) und langfristig (mehr als 5 Jahre). Ab einer Laufzeit von über 5 Jahren gilt eine Finanzierung demnach als langfristig." },
      { id: "q3", question: "Was unterscheidet Eigenkapitalgeber grundlegend von Fremdkapitalgebern?", options: ["Fremdkapitalgeber haben immer Stimmrechte", "Eigenkapital ist grundsätzlich stets befristet, Fremdkapital dagegen niemals", "Es gibt keinen rechtlichen Unterschied", "Eigenkapitalgeber haften und haben Mitsprache, Fremdkapital nicht"], correctIndex: 3, explanation: "Eigenkapitalgeber sind Eigentümer, haften für die Verbindlichkeiten des Unternehmens und erhalten dafür Mitsprache-/Geschäftsführungsrechte. Fremdkapitalgeber sind dagegen Gläubiger mit festem Rückzahlungs- und Zinsanspruch, haften nicht und haben i. d. R. keine Mitspracherechte." },
      { id: "q4", question: "Welche Art von Kriterium ist die 'Managementqualität' bei der Bankkreditprüfung?", options: ["Ein rein rechtliches Kriterium ohne Bewertungsspielraum", "Ein weiches/qualitatives Kriterium", "Kein relevantes Kriterium für Banken", "Ein hartes/quantitatives Kriterium"], correctIndex: 1, explanation: "Managementqualität lässt sich nicht direkt aus Bilanzkennzahlen ablesen, sondern beruht auf Einschätzung und Erfahrung — sie zählt deshalb zu den weichen, qualitativen Kriterien der Kreditprüfung, im Unterschied zu harten Kennzahlen wie Eigenkapitalquote oder Verschuldungsgrad." },
      { id: "q5", question: "Was ist typischerweise KEIN hartes Kriterium der Kreditprüfung?", options: ["Eigenkapitalquote", "Verschuldungsgrad", "Reputation des Managements", "Verfügbare Sicherheiten (z. B. Grundschulden)"], correctIndex: 2, explanation: "Die Reputation bzw. Qualität des Managements lässt sich nicht direkt aus Bilanzzahlen ablesen und zählt daher zu den weichen, qualitativen Kriterien der Kreditprüfung. Eigenkapitalquote, Verschuldungsgrad und Sicherheiten sind dagegen harte, quantitative Kriterien." },
      { id: "q6", question: "In welcher Lebenszyklusphase eines Unternehmens ist der Finanzierungsbedarf typischerweise besonders hoch, während Sicherheiten oft noch fehlen?", options: ["Sanierungsphase", "Reifephase", "Nach der Liquidation", "Gründungsphase"], correctIndex: 3, explanation: "In der Gründungsphase besteht typischerweise ein hoher Kapitalbedarf für Aufbauinvestitionen, während belastbare Sicherheiten, Bilanzhistorie und stabile Cashflows meist noch fehlen — anders als in der Reife- oder Sanierungsphase, in denen bereits eine Geschäftshistorie vorliegt." },
      { id: "q7", question: "Wie wird die Kapitalüberlassungsdauer von 1 bis 5 Jahren eingeordnet?", options: ["Mittelfristig", "Ewig/unbefristet", "Kurzfristig", "Langfristig"], correctIndex: 0, explanation: "Gemäß der in der Vorlesung verwendeten Einteilung gilt eine Kapitalüberlassungsdauer von 1 bis 5 Jahren als mittelfristig — zur Abgrenzung: kurzfristig bedeutet unter 1 Jahr, langfristig mehr als 5 Jahre." },
      { id: "q8", question: "Was passiert, wenn eine langfristige Investition ausschließlich kurzfristig finanziert wird und die Bank die kurzfristige Finanzierung nicht verlängert?", options: ["Die Investition wird automatisch rückabgewickelt", "Es entsteht ein Refinanzierungsrisiko für das Unternehmen", "Das Fremdkapital wird automatisch zu Eigenkapital", "Nichts, das ist in jedem Fall finanzwirtschaftlich völlig unproblematisch"], correctIndex: 1, explanation: "Wird eine langfristige Investition ausschließlich kurzfristig finanziert und die Bank verlängert die Finanzierung nicht, entsteht ein Refinanzierungs- bzw. Liquiditätsrisiko: Das Unternehmen benötigt kurzfristig Ersatzkapital, obwohl die Investition selbst weiterhin langfristig gebunden ist." },
      { id: "q9", question: "Welche Aussage zur Herkunft der Mittel ist korrekt?", options: ["Es gibt keinen Unterschied zwischen Außen- und Innenfinanzierung", "Außenfinanzierung = im Unternehmen selbst erwirtschaftete Mittel", "Außenfinanzierung fließt von außen zu, Innenfinanzierung entsteht im Unternehmen", "Innenfinanzierung = Mittel, die stets ausschließlich von außen ins Unternehmen fließen"], correctIndex: 2, explanation: "Außenfinanzierung bringt neue Mittel von außen ins Unternehmen (z. B. Kredite oder Eigenkapitaleinlagen), während Innenfinanzierung Mittel nutzt, die im Unternehmen selbst erwirtschaftet oder freigesetzt werden. Die anderen Antworten kehren diese Definitionen fälschlich um oder verneinen den Unterschied ganz." },
      { id: "q10", question: "Warum lässt die goldene Bankregel Interpretationsspielräume zu?", options: ["Weil sie ausschließlich für Eigenkapital gilt", "Laufendes Umlaufvermögen wird oft revolvierend kurzfristig finanziert", "Weil sie nur für Aktiengesellschaften gilt", "Weil sie in jedem Land gesetzlich exakt definiert ist und absolut keinerlei Auslegung erlaubt"], correctIndex: 1, explanation: "In der Praxis wird z. B. laufendes Umlaufvermögen häufig revolvierend kurzfristig finanziert, ohne dass dies der Grundidee der Fristenkongruenz widerspricht — die goldene Bankregel muss deshalb nicht auf jede einzelne Bilanzposition starr angewendet werden." }
    ]
  },
  {
    id: "finv-leverage-effekt",
    chapter: 3,
    order: 2,
    title: "Der Leverage-Effekt",
    icon: "⚖️",
    summary: "Wie der Verschuldungsgrad die Eigenkapitalrendite verstärkt (positiver oder negativer Hebel), und wie der Degree of Financial Leverage diesen Verstärkungseffekt misst.",
    explanation: [
      { type: "p", text: "Der Leverage-Effekt (Hebelwirkung) beschreibt, wie die Aufnahme von Fremdkapital die Eigenkapitalrendite eines Unternehmens beeinflusst. Der Verschuldungsgrad (Leverage) ist definiert als:" },
      { type: "formula", tex: "Leverage = \\dfrac{FK}{EK}" },
      { type: "p", text: "Die Leverage-Formel (Zusammenhang zwischen Gesamtkapitalrendite r_GK, Fremdkapitalzinssatz r_FK und Eigenkapitalrendite r_EK):" },
      { type: "formula", tex: "r_{EK} = r_{GK} + \\dfrac{FK}{EK} \\cdot (r_{GK} - r_{FK})" },
      { type: "list", items: [
        "Ist r_GK > r_FK (die Gesamtkapitalrendite übersteigt den Fremdkapitalzins), erhöht zusätzliches Fremdkapital die Eigenkapitalrendite — positiver Leverage-Effekt.",
        "Ist r_GK < r_FK, senkt zusätzliches Fremdkapital die Eigenkapitalrendite — negativer Leverage-Effekt (Risiko!).",
        "Je größer der Verschuldungsgrad FK/EK, desto stärker wirkt sich diese Verstärkung (positiv wie negativ) aus."
      ]},
      { type: "p", text: "Der Leverage-Effekt ist deshalb ein zweischneidiges Schwert: In guten Geschäftsjahren (hohe r_GK) kann Fremdkapitaleinsatz die Eigenkapitalrendite deutlich steigern; in schlechten Jahren (niedrige oder negative r_GK) verstärkt derselbe Hebel die Verluste für die Eigenkapitalgeber überproportional." },
      { type: "p", text: "Der Degree of Financial Leverage (DFL) misst, wie stark sich eine Veränderung des EBIT (operatives Ergebnis) auf den Gewinn je Aktie bzw. auf die Eigenkapitalrendite auswirkt:" },
      { type: "formula", tex: "DFL = \\dfrac{\\text{prozentuale Veränderung des Gewinns je Aktie}}{\\text{prozentuale Veränderung des EBIT}}" },
      { type: "p", text: "Ein DFL größer als 1 zeigt an, dass Fremdkapitaleinsatz die Schwankungen der Eigenkapitalrendite verstärkt — je höher der Verschuldungsgrad, desto größer i. d. R. der DFL." }
    ],
    exercises: [
      {
        id: "finv-leverage-effekt-e1",
        prompt: "Ein Unternehmen hat Gesamtkapital 1.000.000 €, Gesamtrentabilität (r_GK) 10 %, Eigenkapital 900.000 €, Fremdkapitalzins 7 %. Berechnen Sie Leverage und r_EK.",
        solution: [{ type: "p", text: "Fremdkapital FK = 1.000.000 − 900.000 = 100.000 €. Leverage = FK/EK = 100.000/900.000 ≈ 0,111. r_EK = r_GK + FK/EK·(r_GK−r_FK) = 0,10 + 0,111·(0,10−0,07) = 0,10 + 0,111·0,03 ≈ 0,1033 = 10,33 %." }]
      },
      {
        id: "finv-leverage-effekt-e2",
        prompt: "Gleiche Ausgangssituation, aber Eigenkapital nur 500.000 € (also FK = 500.000 €), Fremdkapitalzins weiterhin 7 %, r_GK weiterhin 10 %. Berechnen Sie r_EK.",
        solution: [{ type: "p", text: "Leverage = FK/EK = 500.000/500.000 = 1. r_EK = 0,10 + 1·(0,10−0,07) = 0,10 + 0,03 = 0,13 = 13 %. Der höhere Verschuldungsgrad verstärkt hier die Eigenkapitalrendite deutlich (von 10,33 % auf 13 %), weil r_GK > r_FK gilt (positiver Leverage-Effekt)." }]
      },
      {
        id: "finv-leverage-effekt-e3",
        prompt: "Nehmen Sie an, r_GK sinkt in einem schlechten Geschäftsjahr auf 5 %, während r_FK bei 7 % bleibt. Eigenkapital = 500.000 €, Fremdkapital = 500.000 €. Berechnen Sie r_EK und interpretieren Sie das Ergebnis.",
        solution: [{ type: "p", text: "Leverage = 500.000/500.000 = 1. r_EK = 0,05 + 1·(0,05−0,07) = 0,05 − 0,02 = 0,03 = 3 %. Da r_GK (5 %) nun unter r_FK (7 %) liegt, wirkt der Hebel negativ: Die Eigenkapitalrendite (3 %) liegt sogar unter der Gesamtkapitalrendite (5 %) — der Fremdkapitaleinsatz verschlechtert die Situation der Eigenkapitalgeber in diesem Szenario." }]
      },
      {
        id: "finv-leverage-effekt-e4",
        prompt: "Warum ist ein sehr hoher Verschuldungsgrad (hoher Leverage) in wirtschaftlich unsicheren Zeiten besonders riskant?",
        solution: [{ type: "p", text: "Bei hohem Verschuldungsgrad wirkt der Leverage-Faktor FK/EK sehr stark verstärkend. Sinkt die Gesamtkapitalrendite r_GK in einer Krise unter den Fremdkapitalzinssatz r_FK, wird die Differenz (r_GK − r_FK) negativ und dieser negative Effekt wird durch den hohen Verschuldungsgrad überproportional verstärkt — die Eigenkapitalrendite kann dann stark negativ ausfallen und im Extremfall zur Überschuldung/Insolvenz führen. Je höher der Hebel, desto größer die Verlustgefahr in schlechten Jahren." }]
      },
      {
        id: "finv-leverage-effekt-e5",
        prompt: "Was zeigt ein DFL (Degree of Financial Leverage) von 2 an?",
        solution: [{ type: "p", text: "Ein DFL von 2 bedeutet, dass eine prozentuale Veränderung des EBIT (operatives Ergebnis) um beispielsweise 10 % zu einer etwa doppelt so großen prozentualen Veränderung des Gewinns je Aktie (bzw. der Eigenkapitalrendite) führt, hier also ca. 20 %. Der Fremdkapitaleinsatz verstärkt somit die Ergebnisschwankungen für die Eigenkapitalgeber deutlich — sowohl nach oben (Chance) als auch nach unten (Risiko)." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie ist der Leverage (Verschuldungsgrad) definiert?", options: ["EK/GK", "EK/FK", "FK/GK", "FK/EK"], correctIndex: 3, explanation: "Der Leverage bzw. Verschuldungsgrad ist laut Vorlesung definiert als Fremdkapital dividiert durch Eigenkapital (FK/EK) und misst, wie stark ein Unternehmen im Verhältnis zum Eigenkapital verschuldet ist — nicht zu verwechseln mit der Eigenkapitalquote EK/GK." },
      { id: "q2", question: "Wann wirkt der Leverage-Effekt positiv (erhöht r_EK)?", options: ["Immer, unabhängig von r_GK und r_FK", "Nur wenn kein Fremdkapital eingesetzt wird", "Wenn r_GK kleiner als r_FK ist", "Wenn r_GK größer als r_FK ist"], correctIndex: 3, explanation: "Laut Leverage-Formel r_EK = r_GK + FK/EK·(r_GK − r_FK) erhöht zusätzliches Fremdkapital die Eigenkapitalrendite genau dann, wenn die Gesamtkapitalrendite über dem Fremdkapitalzins liegt — die Differenz in der Klammer wird dann positiv und durch den Verschuldungsgrad verstärkt." },
      { id: "q3", question: "Wann wirkt der Leverage-Effekt negativ (senkt r_EK)?", options: ["Wenn r_GK größer als r_FK ist", "Wenn r_GK kleiner als r_FK ist", "Nur bei Eigenkapitalfinanzierung", "Nie, der Effekt ist immer positiv"], correctIndex: 1, explanation: "Liegt die Gesamtkapitalrendite unter dem Fremdkapitalzins, wird die Differenz (r_GK − r_FK) in der Leverage-Formel negativ; multipliziert mit dem Verschuldungsgrad senkt dies die Eigenkapitalrendite unter r_GK — der Hebel wirkt dann zulasten der Eigenkapitalgeber." },
      { id: "q4", question: "Wie lautet die Leverage-Formel?", options: ["r_EK = r_GK + FK/EK · (r_GK − r_FK)", "r_EK = r_GK · FK/EK", "r_EK = r_FK + EK/FK · (r_GK − r_FK)", "r_EK = r_GK − FK/EK · (r_GK − r_FK)"], correctIndex: 0, explanation: "Die zentrale Leverage-Formel r_EK = r_GK + FK/EK·(r_GK − r_FK) zeigt, wie die Eigenkapitalrendite von der Gesamtkapitalrendite, dem Verschuldungsgrad und der Renditedifferenz abhängt. Die anderen Formeln vertauschen Variablen oder verwenden ein falsches Vorzeichen." },
      { id: "q5", question: "Ein Unternehmen erhöht seinen Verschuldungsgrad deutlich, während r_GK konstant über r_FK bleibt. Was passiert mit r_EK?", options: ["r_EK bleibt exakt gleich", "r_EK sinkt", "r_EK steigt weiter an", "r_EK wird automatisch negativ"], correctIndex: 2, explanation: "Solange r_GK über r_FK liegt, ist die Differenz (r_GK − r_FK) positiv; ein steigender Verschuldungsgrad FK/EK verstärkt diesen positiven Term in der Leverage-Formel zusätzlich, sodass r_EK weiter ansteigt." },
      { id: "q6", question: "Was misst der Degree of Financial Leverage (DFL)?", options: ["Nur den nominalen Zinssatz des eingesetzten Fremdkapitals vor Steuern", "Die Eigenkapitalquote", "Wie stark EBIT-Änderungen den Gewinn je Aktie beeinflussen", "Die absolute Höhe des Fremdkapitals"], correctIndex: 2, explanation: "Der Degree of Financial Leverage (DFL) misst, wie stark sich eine prozentuale Veränderung des EBIT (operatives Ergebnis) auf den Gewinn je Aktie bzw. die Eigenkapitalrendite auswirkt. Ein DFL größer als 1 zeigt an, dass der Fremdkapitaleinsatz diese Schwankungen verstärkt." },
      { id: "q7", question: "Warum wird der Leverage-Effekt als 'zweischneidiges Schwert' bezeichnet?", options: ["Weil er je nach r_GK und r_FK sowohl Chancen als auch Risiken verstärkt", "Weil er ausschließlich und ohne Ausnahme bei börsennotierten Aktiengesellschaften auftritt", "Weil er ausschließlich negativ wirkt", "Weil er nur in der Theorie existiert"], correctIndex: 0, explanation: "Der Leverage-Effekt wird als zweischneidiges Schwert bezeichnet, weil er je nach Verhältnis von r_GK und r_FK die Eigenkapitalrendite in guten Jahren verstärkt steigern kann (Chance), aber die Verluste in schlechten Jahren ebenso überproportional vergrößern kann (Risiko)." },
      { id: "q8", question: "Ein Unternehmen mit r_GK = 6 %, r_FK = 8 %, FK/EK = 2. Ist der Leverage-Effekt hier positiv oder negativ?", options: ["Neutral, kein Effekt", "Positiv, r_EK steigt über r_GK", "Das lässt sich ohne mehr Daten nicht beurteilen", "Negativ, r_EK sinkt unter r_GK"], correctIndex: 3, explanation: "Da r_GK (6 %) unter r_FK (8 %) liegt, ist die Differenz (r_GK − r_FK) negativ; multipliziert mit dem Verschuldungsgrad FK/EK = 2 ergibt sich r_EK = 6% + 2·(6% − 8%) = 6% − 4% = 2%, also deutlich unter r_GK — ein negativer Leverage-Effekt." },
      { id: "q9", question: "Welcher Zusammenhang gilt für den Verschuldungsgrad und die Stärke des Leverage-Effekts?", options: ["Je höher der Verschuldungsgrad, desto schwächer der Effekt", "Je höher der Verschuldungsgrad, desto stärker der Effekt", "Der Verschuldungsgrad hat grundsätzlich überhaupt keinen Einfluss auf die Stärke des Effekts", "Der Effekt ist nur bei Verschuldungsgrad = 0 spürbar"], correctIndex: 1, explanation: "Der Verschuldungsgrad FK/EK ist der Faktor, mit dem die Renditedifferenz (r_GK − r_FK) in der Leverage-Formel multipliziert wird — je größer FK/EK, desto stärker wird diese Differenz verstärkt, sowohl im positiven als auch im negativen Fall." },
      { id: "q10", question: "Ein Unternehmen ohne jegliches Fremdkapital (FK = 0). Was gilt dann für r_EK?", options: ["r_EK wird dann rechnerisch unendlich groß", "r_EK ist immer negativ", "r_EK entspricht dann genau r_GK", "r_EK ist immer null"], correctIndex: 2, explanation: "Ist FK = 0, wird auch der Verschuldungsgrad FK/EK = 0, wodurch der gesamte Verstärkungsterm FK/EK·(r_GK − r_FK) in der Leverage-Formel entfällt. Damit vereinfacht sich die Formel zu r_EK = r_GK — ohne Fremdkapital gibt es keinen Leverage-Effekt." }
    ]
  },
  {
    id: "finv-kapitalkosten-wacc",
    chapter: 3,
    order: 3,
    title: "Kapitalkosten — WACC",
    icon: "💰",
    summary: "Wie sich die gewichteten Gesamtkapitalkosten (WACC) berechnen und als Kalkulationszinssatz in der Investitionsrechnung verwendet werden.",
    explanation: [
      { type: "p", text: "Der WACC (Weighted Average Cost of Capital, gewichtete Gesamtkapitalkosten) fasst die Kosten aller Kapitalquellen eines Unternehmens gewichtet nach ihrem jeweiligen Anteil am Gesamtkapital zusammen:" },
      { type: "formula", tex: "WACC = \\dfrac{EK}{GK} \\cdot r_{EK} + \\dfrac{FK}{GK} \\cdot r_{FK} \\cdot (1-s)" },
      { type: "p", text: "Dabei ist s der Unternehmenssteuersatz. Der Term (1−s) berücksichtigt das sogenannte \"tax shield\": Fremdkapitalzinsen sind als Betriebsausgaben steuerlich absetzbar und mindern damit den zu versteuernden Gewinn — die tatsächlichen (Nach-Steuer-)Kosten des Fremdkapitals sind daher niedriger als der Nominalzins. Eigenkapitalkosten (z. B. erwartete Dividenden/Kursgewinne) sind dagegen nicht steuerlich absetzbar." },
      { type: "list", items: [
        "EK/GK und FK/GK sind die Kapitalstrukturgewichte (Anteile von Eigen- bzw. Fremdkapital am Gesamtkapital, in Summe = 1)",
        "r_EK ist die von den Eigenkapitalgebern erwartete Rendite (Renditeerwartung)",
        "r_FK ist der Fremdkapitalzinssatz vor Steuern"
      ]},
      { type: "p", text: "Der WACC wird häufig als Kalkulationszinssatz in dynamischen Investitionsverfahren (Kapitalwertmethode, interne Zinsfußmethode, siehe Kapitel 9) verwendet: Er repräsentiert die Mindestrendite, die eine Investition erwirtschaften muss, um sowohl die Fremdkapitalgeber (Zinsen) als auch die Eigenkapitalgeber (Renditeerwartung) angemessen zu bedienen." }
    ],
    exercises: [
      {
        id: "finv-kapitalkosten-wacc-e1",
        prompt: "Ein Unternehmen hat Eigenkapital 6 Mio. € (r_EK = 12 %) und Fremdkapital 4 Mio. € (r_FK = 5 %). Der Steuersatz beträgt 30 %. Berechnen Sie den WACC.",
        solution: [{ type: "p", text: "GK = 6 + 4 = 10 Mio. €. EK/GK = 0,6, FK/GK = 0,4. WACC = 0,6·0,12 + 0,4·0,05·(1−0,3) = 0,072 + 0,4·0,05·0,7 = 0,072 + 0,014 = 0,086 = 8,6 %." }]
      },
      {
        id: "finv-kapitalkosten-wacc-e2",
        prompt: "Wie verändert sich der WACC aus Aufgabe 1, wenn der Steuersatz auf 40 % steigt (alle anderen Werte bleiben gleich)?",
        solution: [{ type: "p", text: "WACC = 0,6·0,12 + 0,4·0,05·(1−0,4) = 0,072 + 0,4·0,05·0,6 = 0,072 + 0,012 = 0,084 = 8,4 %. Ein höherer Steuersatz senkt den WACC, weil das steuerliche tax shield des Fremdkapitals dadurch wertvoller wird (die effektiven Fremdkapitalkosten sinken)." }]
      },
      {
        id: "finv-kapitalkosten-wacc-e3",
        prompt: "Erklären Sie, warum Fremdkapitalkosten im WACC mit dem Faktor (1−s) multipliziert werden, Eigenkapitalkosten aber nicht.",
        solution: [{ type: "p", text: "Fremdkapitalzinsen sind steuerlich als Betriebsausgabe absetzbar — sie mindern den zu versteuernden Gewinn und damit die Steuerlast. Die tatsächlichen, nach Steuern verbleibenden Kosten des Fremdkapitals sind deshalb niedriger als der nominale Zinssatz, nämlich r_FK·(1−s). Eigenkapitalkosten (z. B. Dividenden) werden dagegen aus dem bereits versteuerten Gewinn gezahlt und sind nicht steuerlich absetzbar — hier gibt es also kein tax shield, weshalb r_EK ohne Korrekturfaktor in den WACC eingeht." }]
      },
      {
        id: "finv-kapitalkosten-wacc-e4",
        prompt: "Ein Unternehmen erwägt eine Investition mit einer erwarteten Rendite von 7 %. Der WACC des Unternehmens beträgt 8,6 %. Sollte die Investition durchgeführt werden? Begründen Sie kurz mithilfe des Konzepts der Kapitalkosten.",
        solution: [{ type: "p", text: "Nein, die Investition sollte grundsätzlich nicht durchgeführt werden: Der WACC von 8,6 % stellt die Mindestrendite dar, die nötig ist, um sowohl Fremd- als auch Eigenkapitalgeber angemessen zu bedienen. Da die erwartete Investitionsrendite (7 %) unter dem WACC liegt, würde die Investition Wert vernichten (vgl. Kapitalwertmethode: bei Verwendung des WACC als Kalkulationszinssatz wäre der Kapitalwert negativ)." }]
      },
      {
        id: "finv-kapitalkosten-wacc-e5",
        prompt: "Ein Unternehmen ist zu 100 % eigenkapitalfinanziert (kein Fremdkapital). Wie vereinfacht sich der WACC in diesem Fall?",
        solution: [{ type: "p", text: "Ohne Fremdkapital gilt FK/GK = 0 und EK/GK = 1, sodass der zweite Term der WACC-Formel entfällt: WACC = 1·r_EK + 0 = r_EK. Der WACC entspricht dann exakt der Eigenkapitalrendite-Erwartung r_EK." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Wofür steht die Abkürzung WACC?", options: ["Weighted Asset Capital Contribution", "World Average Currency Conversion", "Weighted Average Cost of Capital", "Working Average Cash Cycle"], correctIndex: 2, explanation: "WACC steht für 'Weighted Average Cost of Capital', die gewichteten durchschnittlichen Kapitalkosten eines Unternehmens aus Eigen- und Fremdkapital. Die anderen Optionen sind erfundene Abkürzungen ohne Bezug zum in der Vorlesung behandelten Konzept." },
      { id: "q2", question: "Wie lautet die WACC-Formel?", options: ["WACC = r_EK · r_FK (Produkt beider Kostensätze)", "WACC = (EK/GK)·r_FK + (FK/GK)·r_EK", "WACC = r_EK + r_FK", "WACC = (EK/GK)·r_EK + (FK/GK)·r_FK·(1−s)"], correctIndex: 3, explanation: "Der WACC gewichtet die Eigenkapitalkosten r_EK mit dem Eigenkapitalanteil (EK/GK) und die Fremdkapitalkosten r_FK mit dem Fremdkapitalanteil (FK/GK), wobei r_FK zusätzlich um den Steuervorteil (1−s) reduziert wird, da Fremdkapitalzinsen steuerlich absetzbar sind." },
      { id: "q3", question: "Warum werden Fremdkapitalzinsen im WACC mit (1−s) multipliziert?", options: ["Weil Fremdkapital immer teurer als Eigenkapital ist", "Weil Fremdkapitalzinsen steuerlich absetzbar sind", "Weil Eigenkapital steuerlich absetzbar ist", "Weil das eine reine, historisch gewachsene Konvention ohne jeglichen inhaltlichen Grund ist"], correctIndex: 1, explanation: "Fremdkapitalzinsen mindern als Betriebsausgabe den steuerpflichtigen Gewinn — die tatsächlichen Kosten des Fremdkapitals sind dadurch niedriger als der Nominalzins. Der Faktor (1−s) bildet dieses sogenannte Tax Shield ab; für Eigenkapitalkosten gibt es kein vergleichbares Steuerprivileg." },
      { id: "q4", question: "Wofür wird der WACC häufig verwendet?", options: ["Zur Berechnung der Lohnsteuer", "Als Kalkulationszinssatz in Investitionsverfahren", "Nur zur Berechnung der Umsatzsteuer", "Ausschließlich und alleinig zur Bewertung von Aktienkursen an der Börse"], correctIndex: 1, explanation: "Der WACC wird häufig als Kalkulationszinssatz in dynamischen Investitionsverfahren wie der Kapitalwert- oder internen Zinsfußmethode verwendet: Er repräsentiert die Mindestrendite, die eine Investition erwirtschaften muss, um Fremd- und Eigenkapitalgeber angemessen zu bedienen." },
      { id: "q5", question: "Wie verändert sich der WACC tendenziell, wenn der Unternehmenssteuersatz steigt (bei sonst gleichen Werten)?", options: ["Der WACC sinkt (Tax Shield wird wertvoller)", "Der WACC wird negativ", "Der WACC steigt", "Der WACC bleibt in jedem Fall exakt und unverändert gleich"], correctIndex: 0, explanation: "Ein höherer Steuersatz erhöht den Wert des steuerlichen Tax Shields, das die Fremdkapitalzinsen im WACC über den Faktor (1−s) reduziert — die effektiven Fremdkapitalkosten sinken dadurch, und mit ihnen tendenziell der gesamte WACC." },
      { id: "q6", question: "Ein Unternehmen ist zu 100 % eigenkapitalfinanziert. Was gilt dann für den WACC?", options: ["WACC = r_FK", "WACC = r_EK", "WACC = 0", "WACC ist nicht definierbar"], correctIndex: 1, explanation: "Bei vollständiger Eigenkapitalfinanzierung gilt FK/GK = 0 und EK/GK = 1, sodass der Fremdkapital-Term in der WACC-Formel vollständig entfällt. Der WACC entspricht dann exakt der erwarteten Eigenkapitalrendite r_EK." },
      { id: "q7", question: "Was passiert, wenn eine Investition eine erwartete Rendite unterhalb des WACC hat?", options: ["Der WACC ist dann automatisch falsch berechnet", "Das hat für die Investitionsentscheidung überhaupt keinerlei Aussagekraft", "Die Investition vernichtet tendenziell Unternehmenswert", "Die Investition ist immer vorteilhaft"], correctIndex: 2, explanation: "Liegt die erwartete Rendite einer Investition unter dem WACC, wird die vom Kapitalmarkt geforderte Mindestverzinsung nicht erreicht — die Investition vernichtet tendenziell Unternehmenswert und sollte kritisch hinterfragt werden, etwa mithilfe der Kapitalwertmethode." },
      { id: "q8", question: "Welche Größe stellt EK/GK im WACC dar?", options: ["Die Steuerquote", "Den Fremdkapitalzins", "Den Eigenkapitalanteil am Gesamtkapital", "Den Verschuldungsgrad FK/EK des Unternehmens"], correctIndex: 2, explanation: "EK/GK ist eines der beiden Kapitalstrukturgewichte im WACC und gibt den Anteil des Eigenkapitals am gesamten eingesetzten Kapital an; das Gegenstück FK/GK misst entsprechend den Fremdkapitalanteil. Beide Gewichte addieren sich stets zu 1." },
      { id: "q9", question: "Gibt es beim Eigenkapital ein vergleichbares 'Tax Shield' wie beim Fremdkapital?", options: ["Das hängt ausschließlich vom Land ab", "Ja, aber ausschließlich bei börsennotierten Aktiengesellschaften", "Ja, in identischer Höhe", "Nein, Eigenkapitalkosten sind nicht steuerlich absetzbar"], correctIndex: 3, explanation: "Dividenden und andere Eigenkapitalkosten werden aus dem bereits versteuerten Gewinn gezahlt und sind steuerlich nicht absetzbar — anders als Fremdkapitalzinsen, für die der Faktor (1−s) im WACC ein Tax Shield abbildet. Für Eigenkapital gibt es dieses Steuerprivileg nicht." },
      { id: "q10", question: "Welche zwei Kapitalstrukturgewichte addieren sich im WACC immer zu 1?", options: ["EK/GK und FK/GK", "s und (1−s) zusammen", "GK und FK", "r_EK und r_FK"], correctIndex: 0, explanation: "EK/GK und FK/GK sind die Kapitalstrukturgewichte, die den Anteil von Eigen- bzw. Fremdkapital am Gesamtkapital ausdrücken; da beide Kapitalarten zusammen das gesamte Kapital GK ergeben, addieren sich diese beiden Gewichte immer zu 1." }
    ]
  }
];
