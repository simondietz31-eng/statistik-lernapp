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
        solution: "Diese Finanzierung verstößt gegen die Fristenkongruenz (goldene Bankregel): Eine langfristig gebundene Investition (8 Jahre Nutzungsdauer) wird durch extrem kurzfristiges, jederzeit kündbares Fremdkapital finanziert. Es besteht ein erhebliches Refinanzierungsrisiko — kündigt die Bank den Kontokorrentkredit oder verlängert ihn nicht, gerät das Unternehmen in Liquiditätsschwierigkeiten, obwohl die Investition selbst wirtschaftlich sinnvoll sein kann. Sinnvoller wäre ein langfristiges Darlehen mit zur Nutzungsdauer passender Laufzeit."
      },
      {
        id: "finv-finanzierungsformen-fristen-e2",
        prompt: "Bilanz eines Unternehmens: Sachanlagen 4.000.000 €, Vorräte 1.000.000 €, Forderungen L/L 800.000 €, Kasse 400.000 €. Passiva: Eigenkapital 3.000.000 €, Fremdkapital Laufzeit > 5 Jahre 1.500.000 €, Laufzeit 1–5 Jahre 1.100.000 €, Laufzeit < 1 Jahr 600.000 €. Prüfen Sie die goldene Bilanzregel (Anlagevermögen sollte durch langfristiges Kapital gedeckt sein).",
        solution: "Anlagevermögen (Sachanlagen) = 4.000.000 €. Langfristig verfügbares Kapital (Eigenkapital + Fremdkapital > 5 Jahre) = 3.000.000 € + 1.500.000 € = 4.500.000 €. Da 4.500.000 € > 4.000.000 €, ist die goldene Bilanzregel (im engeren Sinn: Anlagevermögen vollständig durch langfristiges Kapital gedeckt) erfüllt — es verbleiben sogar 500.000 € langfristiges Kapital zur (anteiligen) Finanzierung des Umlaufvermögens, was die Fristenkongruenz zusätzlich stützt."
      },
      {
        id: "finv-finanzierungsformen-fristen-e3",
        prompt: "Nennen Sie je zwei harte und zwei weiche Kriterien, die eine Bank bei der Kreditvergabeprüfung typischerweise heranzieht.",
        solution: "Harte Kriterien (quantitativ, aus Zahlen ableitbar): Eigenkapitalquote/Verschuldungsgrad, vorhandene Sicherheiten (z. B. Grundschulden, Bürgschaften). Weiche Kriterien (qualitativ): Qualität des Managements/der Geschäftsführung, Einschätzung der Branchen- und Marktaussichten (z. B. Wettbewerbssituation, Konjunkturabhängigkeit)."
      },
      {
        id: "finv-finanzierungsformen-fristen-e4",
        prompt: "Erläutern Sie den Unterschied zwischen Eigenkapital- und Fremdkapitalgebern hinsichtlich Haftung und Mitspracherecht.",
        solution: "Eigenkapitalgeber (Eigentümer) haften mit ihrer Einlage (je nach Rechtsform ggf. sogar unbeschränkt, z. B. bei Einzelunternehmen/OHG) für die Verbindlichkeiten des Unternehmens und tragen damit unmittelbar das unternehmerische Risiko; im Gegenzug erhalten sie Geschäftsführungs- und/oder Mitspracherechte (z. B. Stimmrechte in der Hauptversammlung). Fremdkapitalgeber (Gläubiger) haften nicht für die Verbindlichkeiten des Unternehmens — sie haben einen festen Rückzahlungs- und Zinsanspruch, der grundsätzlich unabhängig vom Geschäftserfolg besteht, verfügen aber i. d. R. über keine Geschäftsführungsrechte."
      },
      {
        id: "finv-finanzierungsformen-fristen-e5",
        prompt: "In welcher Lebenszyklusphase eines Unternehmens ist Venture Capital typischerweise am relevantesten, und warum eignen sich klassische Bankkredite hier oft weniger?",
        solution: "Venture Capital ist typischerweise in der Gründungs- und frühen Wachstumsphase relevant, wenn junge Unternehmen noch keine oder kaum belastbare Sicherheiten, Erfolgshistorie oder stabile Cashflows vorweisen können. Klassische Bankkredite eignen sich hier oft weniger, weil Banken i. d. R. Sicherheiten und eine verlässliche Zins-/Tilgungsfähigkeit erwarten — beides ist in der Gründungsphase häufig noch nicht ausreichend gegeben. Venture-Capital-Geber tragen dagegen bewusst ein höheres unternehmerisches Risiko gegen eine Beteiligung am (potenziell hohen) künftigen Erfolg."
      }
    ],
    quiz: [
      { id: "q1", question: "Was besagt die Fristenkongruenz (goldene Bankregel) im Kern?", options: ["Die Kapitalüberlassungsdauer sollte zur Nutzungsdauer/Kapitalbindungsdauer der Investition passen", "Eigenkapital darf nie langfristig gebunden werden", "Nur Banken dürfen Kredite vergeben", "Alle Kredite müssen kurzfristig sein"], correctIndex: 0, explanation: "Die Fristenkongruenz fordert eine Übereinstimmung von Kapitalüberlassungs- und Kapitalbindungsdauer, um Refinanzierungsrisiken zu vermeiden." },
      { id: "q2", question: "Ab welcher Laufzeit spricht man von langfristiger Finanzierung (gemäß der in der Vorlesung genutzten Einteilung)?", options: ["Ab 6 Monaten", "Nur bei unbefristeten Verträgen", "Ab mehr als 5 Jahren", "Ab 1 Monat"], correctIndex: 2, explanation: "Die Einteilung lautet: kurzfristig < 1 Jahr, mittelfristig 1–5 Jahre, langfristig > 5 Jahre." },
      { id: "q3", question: "Was unterscheidet Eigenkapitalgeber grundlegend von Fremdkapitalgebern?", options: ["Fremdkapitalgeber haben immer Stimmrechte", "Eigenkapital ist immer befristet, Fremdkapital nie", "Es gibt keinen rechtlichen Unterschied", "Eigenkapitalgeber haften für Verbindlichkeiten und haben Mitspracherechte, Fremdkapitalgeber nicht"], correctIndex: 3, explanation: "Eigenkapital = Eigentümerstellung mit Haftung und Mitsprache; Fremdkapital = Gläubigerstellung ohne Haftung und i. d. R. ohne Mitsprache." },
      { id: "q4", question: "Welche Art von Kriterium ist die 'Managementqualität' bei der Bankkreditprüfung?", options: ["Ein rein rechtliches Kriterium ohne Bewertungsspielraum", "Ein weiches/qualitatives Kriterium", "Kein relevantes Kriterium für Banken", "Ein hartes/quantitatives Kriterium"], correctIndex: 1, explanation: "Managementqualität lässt sich nicht direkt aus Zahlen ablesen und zählt daher zu den weichen Kriterien." },
      { id: "q5", question: "Was ist typischerweise KEIN hartes Kriterium der Kreditprüfung?", options: ["Eigenkapitalquote", "Verschuldungsgrad", "Einschätzung der Reputation des Managements", "Verfügbare Sicherheiten"], correctIndex: 2, explanation: "Die Reputation/Qualität des Managements ist ein weiches, qualitatives Kriterium, keine harte Bilanzkennzahl." },
      { id: "q6", question: "In welcher Lebenszyklusphase eines Unternehmens ist der Finanzierungsbedarf typischerweise besonders hoch, während Sicherheiten oft noch fehlen?", options: ["Sanierungsphase", "Reifephase", "Nach der Liquidation", "Gründungsphase"], correctIndex: 3, explanation: "In der Gründungsphase besteht hoher Kapitalbedarf für Aufbauinvestitionen, während belastbare Sicherheiten und Erfolgshistorie meist noch fehlen." },
      { id: "q7", question: "Wie wird die Kapitalüberlassungsdauer von 1 bis 5 Jahren eingeordnet?", options: ["Mittelfristig", "Ewig/unbefristet", "Kurzfristig", "Langfristig"], correctIndex: 0, explanation: "1–5 Jahre gilt als mittelfristige Kapitalüberlassung." },
      { id: "q8", question: "Was passiert, wenn eine langfristige Investition ausschließlich kurzfristig finanziert wird und die Bank die kurzfristige Finanzierung nicht verlängert?", options: ["Die Investition wird automatisch rückabgewickelt", "Es entsteht ein Refinanzierungs-/Liquiditätsrisiko für das Unternehmen", "Das Fremdkapital wird automatisch zu Eigenkapital", "Nichts, das ist finanzwirtschaftlich unproblematisch"], correctIndex: 1, explanation: "Ein Verstoß gegen die Fristenkongruenz erzeugt ein Refinanzierungsrisiko, wenn kurzfristiges Kapital nicht rechtzeitig verlängert werden kann." },
      { id: "q9", question: "Welche Aussage zur Herkunft der Mittel ist korrekt?", options: ["Es gibt keinen Unterschied zwischen Außen- und Innenfinanzierung", "Außenfinanzierung = im Unternehmen selbst erwirtschaftete Mittel", "Außenfinanzierung = Mittel kommen von außen (z. B. Kredite, Eigenkapitaleinlagen); Innenfinanzierung = Mittel werden im Unternehmen selbst erwirtschaftet/freigesetzt", "Innenfinanzierung = Mittel, die von außen ins Unternehmen fließen"], correctIndex: 2, explanation: "Außenfinanzierung bringt neue Mittel von außen ins Unternehmen, Innenfinanzierung setzt im Unternehmen bereits vorhandene bzw. erwirtschaftete Mittel frei." },
      { id: "q10", question: "Warum lässt die goldene Bankregel Interpretationsspielräume zu?", options: ["Weil sie ausschließlich für Eigenkapital gilt", "Weil nicht jede einzelne Position exakt fristenkongruent finanziert werden muss, z. B. bei revolvierend finanziertem Umlaufvermögen", "Weil sie nur für Aktiengesellschaften gilt", "Weil sie gesetzlich exakt definiert ist und keinerlei Auslegung erlaubt"], correctIndex: 1, explanation: "In der Praxis wird z. B. laufendes Umlaufvermögen oft revolvierend kurzfristig finanziert, ohne dass dies der Grundidee der Fristenkongruenz widerspricht — die Regel ist daher nicht starr auf jede Einzelposition anzuwenden." }
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
        solution: "Fremdkapital FK = 1.000.000 − 900.000 = 100.000 €. Leverage = FK/EK = 100.000/900.000 ≈ 0,111. r_EK = r_GK + FK/EK·(r_GK−r_FK) = 0,10 + 0,111·(0,10−0,07) = 0,10 + 0,111·0,03 ≈ 0,1033 = 10,33 %."
      },
      {
        id: "finv-leverage-effekt-e2",
        prompt: "Gleiche Ausgangssituation, aber Eigenkapital nur 500.000 € (also FK = 500.000 €), Fremdkapitalzins weiterhin 7 %, r_GK weiterhin 10 %. Berechnen Sie r_EK.",
        solution: "Leverage = FK/EK = 500.000/500.000 = 1. r_EK = 0,10 + 1·(0,10−0,07) = 0,10 + 0,03 = 0,13 = 13 %. Der höhere Verschuldungsgrad verstärkt hier die Eigenkapitalrendite deutlich (von 10,33 % auf 13 %), weil r_GK > r_FK gilt (positiver Leverage-Effekt)."
      },
      {
        id: "finv-leverage-effekt-e3",
        prompt: "Nehmen Sie an, r_GK sinkt in einem schlechten Geschäftsjahr auf 5 %, während r_FK bei 7 % bleibt. Eigenkapital = 500.000 €, Fremdkapital = 500.000 €. Berechnen Sie r_EK und interpretieren Sie das Ergebnis.",
        solution: "Leverage = 500.000/500.000 = 1. r_EK = 0,05 + 1·(0,05−0,07) = 0,05 − 0,02 = 0,03 = 3 %. Da r_GK (5 %) nun unter r_FK (7 %) liegt, wirkt der Hebel negativ: Die Eigenkapitalrendite (3 %) liegt sogar unter der Gesamtkapitalrendite (5 %) — der Fremdkapitaleinsatz verschlechtert die Situation der Eigenkapitalgeber in diesem Szenario."
      },
      {
        id: "finv-leverage-effekt-e4",
        prompt: "Warum ist ein sehr hoher Verschuldungsgrad (hoher Leverage) in wirtschaftlich unsicheren Zeiten besonders riskant?",
        solution: "Bei hohem Verschuldungsgrad wirkt der Leverage-Faktor FK/EK sehr stark verstärkend. Sinkt die Gesamtkapitalrendite r_GK in einer Krise unter den Fremdkapitalzinssatz r_FK, wird die Differenz (r_GK − r_FK) negativ und dieser negative Effekt wird durch den hohen Verschuldungsgrad überproportional verstärkt — die Eigenkapitalrendite kann dann stark negativ ausfallen und im Extremfall zur Überschuldung/Insolvenz führen. Je höher der Hebel, desto größer die Verlustgefahr in schlechten Jahren."
      },
      {
        id: "finv-leverage-effekt-e5",
        prompt: "Was zeigt ein DFL (Degree of Financial Leverage) von 2 an?",
        solution: "Ein DFL von 2 bedeutet, dass eine prozentuale Veränderung des EBIT (operatives Ergebnis) um beispielsweise 10 % zu einer etwa doppelt so großen prozentualen Veränderung des Gewinns je Aktie (bzw. der Eigenkapitalrendite) führt, hier also ca. 20 %. Der Fremdkapitaleinsatz verstärkt somit die Ergebnisschwankungen für die Eigenkapitalgeber deutlich — sowohl nach oben (Chance) als auch nach unten (Risiko)."
      }
    ],
    quiz: [
      { id: "q1", question: "Wie ist der Leverage (Verschuldungsgrad) definiert?", options: ["EK/GK", "EK/FK", "FK/GK", "FK/EK"], correctIndex: 3, explanation: "Leverage = Fremdkapital dividiert durch Eigenkapital (FK/EK)." },
      { id: "q2", question: "Wann wirkt der Leverage-Effekt positiv (erhöht r_EK)?", options: ["Immer, unabhängig von r_GK und r_FK", "Nur wenn kein Fremdkapital eingesetzt wird", "Wenn r_GK kleiner als r_FK ist", "Wenn r_GK größer als r_FK ist"], correctIndex: 3, explanation: "Ist die Gesamtkapitalrendite größer als der Fremdkapitalzins, erhöht zusätzliches Fremdkapital die Eigenkapitalrendite." },
      { id: "q3", question: "Wann wirkt der Leverage-Effekt negativ (senkt r_EK)?", options: ["Wenn r_GK größer als r_FK ist", "Wenn r_GK kleiner als r_FK ist", "Nur bei Eigenkapitalfinanzierung", "Nie, der Effekt ist immer positiv"], correctIndex: 1, explanation: "Liegt die Gesamtkapitalrendite unter dem Fremdkapitalzins, senkt zusätzliches Fremdkapital die Eigenkapitalrendite." },
      { id: "q4", question: "Wie lautet die Leverage-Formel?", options: ["r_EK = r_GK + FK/EK · (r_GK − r_FK)", "r_EK = r_GK · FK/EK", "r_EK = r_FK + EK/FK · (r_GK − r_FK)", "r_EK = r_GK − FK/EK · (r_GK − r_FK)"], correctIndex: 0, explanation: "r_EK = r_GK + (FK/EK)·(r_GK − r_FK) ist die zentrale Leverage-Formel." },
      { id: "q5", question: "Ein Unternehmen erhöht seinen Verschuldungsgrad deutlich, während r_GK konstant über r_FK bleibt. Was passiert mit r_EK?", options: ["r_EK bleibt exakt gleich", "r_EK sinkt", "r_EK steigt weiter an", "r_EK wird automatisch negativ"], correctIndex: 2, explanation: "Bei r_GK > r_FK verstärkt ein höherer Verschuldungsgrad den positiven Hebel — r_EK steigt weiter." },
      { id: "q6", question: "Was misst der Degree of Financial Leverage (DFL)?", options: ["Nur den Zinssatz des Fremdkapitals", "Die Eigenkapitalquote", "Wie stark sich eine prozentuale Änderung des EBIT auf den Gewinn je Aktie auswirkt", "Die absolute Höhe des Fremdkapitals"], correctIndex: 2, explanation: "DFL = %-Veränderung Gewinn je Aktie / %-Veränderung EBIT — misst den Verstärkungseffekt des Fremdkapitals." },
      { id: "q7", question: "Warum wird der Leverage-Effekt als 'zweischneidiges Schwert' bezeichnet?", options: ["Weil er sowohl Chancen (höhere r_EK) als auch Risiken (stärkere Verluste) verstärkt, je nach Verhältnis von r_GK und r_FK", "Weil er nur bei Aktiengesellschaften auftritt", "Weil er ausschließlich negativ wirkt", "Weil er nur in der Theorie existiert"], correctIndex: 0, explanation: "Der Hebel verstärkt sowohl positive als auch negative Renditedifferenzen — er ist Chance und Risiko zugleich." },
      { id: "q8", question: "Ein Unternehmen mit r_GK = 6 %, r_FK = 8 %, FK/EK = 2. Ist der Leverage-Effekt hier positiv oder negativ?", options: ["Neutral, kein Effekt", "Positiv, r_EK steigt über r_GK", "Das lässt sich ohne mehr Daten nicht beurteilen", "Negativ, r_EK sinkt unter r_GK"], correctIndex: 3, explanation: "Da r_GK (6 %) < r_FK (8 %), wirkt der Leverage negativ: r_EK = 6% + 2·(6%−8%) = 6% − 4% = 2%, also unter r_GK." },
      { id: "q9", question: "Welcher Zusammenhang gilt für den Verschuldungsgrad und die Stärke des Leverage-Effekts?", options: ["Je höher der Verschuldungsgrad, desto schwächer der Effekt", "Je höher der Verschuldungsgrad, desto stärker der Effekt (positiv wie negativ)", "Der Verschuldungsgrad hat keinen Einfluss auf die Stärke des Effekts", "Der Effekt ist nur bei Verschuldungsgrad = 0 spürbar"], correctIndex: 1, explanation: "Der Faktor FK/EK skaliert die Renditedifferenz (r_GK−r_FK) — je größer FK/EK, desto stärker die Verstärkung." },
      { id: "q10", question: "Ein Unternehmen ohne jegliches Fremdkapital (FK = 0). Was gilt dann für r_EK?", options: ["r_EK ist unendlich groß", "r_EK ist immer negativ", "r_EK entspricht genau r_GK, da kein Leverage-Effekt wirkt", "r_EK ist immer null"], correctIndex: 2, explanation: "Bei FK = 0 ist Leverage = FK/EK = 0, der Term FK/EK·(r_GK−r_FK) entfällt, also r_EK = r_GK." }
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
        solution: "GK = 6 + 4 = 10 Mio. €. EK/GK = 0,6, FK/GK = 0,4. WACC = 0,6·0,12 + 0,4·0,05·(1−0,3) = 0,072 + 0,4·0,05·0,7 = 0,072 + 0,014 = 0,086 = 8,6 %."
      },
      {
        id: "finv-kapitalkosten-wacc-e2",
        prompt: "Wie verändert sich der WACC aus Aufgabe 1, wenn der Steuersatz auf 40 % steigt (alle anderen Werte bleiben gleich)?",
        solution: "WACC = 0,6·0,12 + 0,4·0,05·(1−0,4) = 0,072 + 0,4·0,05·0,6 = 0,072 + 0,012 = 0,084 = 8,4 %. Ein höherer Steuersatz senkt den WACC, weil das steuerliche tax shield des Fremdkapitals dadurch wertvoller wird (die effektiven Fremdkapitalkosten sinken)."
      },
      {
        id: "finv-kapitalkosten-wacc-e3",
        prompt: "Erklären Sie, warum Fremdkapitalkosten im WACC mit dem Faktor (1−s) multipliziert werden, Eigenkapitalkosten aber nicht.",
        solution: "Fremdkapitalzinsen sind steuerlich als Betriebsausgabe absetzbar — sie mindern den zu versteuernden Gewinn und damit die Steuerlast. Die tatsächlichen, nach Steuern verbleibenden Kosten des Fremdkapitals sind deshalb niedriger als der nominale Zinssatz, nämlich r_FK·(1−s). Eigenkapitalkosten (z. B. Dividenden) werden dagegen aus dem bereits versteuerten Gewinn gezahlt und sind nicht steuerlich absetzbar — hier gibt es also kein tax shield, weshalb r_EK ohne Korrekturfaktor in den WACC eingeht."
      },
      {
        id: "finv-kapitalkosten-wacc-e4",
        prompt: "Ein Unternehmen erwägt eine Investition mit einer erwarteten Rendite von 7 %. Der WACC des Unternehmens beträgt 8,6 %. Sollte die Investition durchgeführt werden? Begründen Sie kurz mithilfe des Konzepts der Kapitalkosten.",
        solution: "Nein, die Investition sollte grundsätzlich nicht durchgeführt werden: Der WACC von 8,6 % stellt die Mindestrendite dar, die nötig ist, um sowohl Fremd- als auch Eigenkapitalgeber angemessen zu bedienen. Da die erwartete Investitionsrendite (7 %) unter dem WACC liegt, würde die Investition Wert vernichten (vgl. Kapitalwertmethode: bei Verwendung des WACC als Kalkulationszinssatz wäre der Kapitalwert negativ)."
      },
      {
        id: "finv-kapitalkosten-wacc-e5",
        prompt: "Ein Unternehmen ist zu 100 % eigenkapitalfinanziert (kein Fremdkapital). Wie vereinfacht sich der WACC in diesem Fall?",
        solution: "Ohne Fremdkapital gilt FK/GK = 0 und EK/GK = 1, sodass der zweite Term der WACC-Formel entfällt: WACC = 1·r_EK + 0 = r_EK. Der WACC entspricht dann exakt der Eigenkapitalrendite-Erwartung r_EK."
      }
    ],
    quiz: [
      { id: "q1", question: "Wofür steht die Abkürzung WACC?", options: ["Weighted Asset Capital Contribution", "World Average Currency Conversion", "Weighted Average Cost of Capital", "Working Average Cash Cycle"], correctIndex: 2, explanation: "WACC = Weighted Average Cost of Capital, gewichtete durchschnittliche Kapitalkosten." },
      { id: "q2", question: "Wie lautet die WACC-Formel?", options: ["WACC = r_EK · r_FK", "WACC = (EK/GK)·r_FK + (FK/GK)·r_EK", "WACC = r_EK + r_FK", "WACC = (EK/GK)·r_EK + (FK/GK)·r_FK·(1−s)"], correctIndex: 3, explanation: "WACC gewichtet Eigen- und Fremdkapitalkosten nach ihrem Anteil am Gesamtkapital, wobei die Fremdkapitalkosten um den Steuervorteil (1−s) reduziert werden." },
      { id: "q3", question: "Warum werden Fremdkapitalzinsen im WACC mit (1−s) multipliziert?", options: ["Weil Fremdkapital immer teurer als Eigenkapital ist", "Weil Fremdkapitalzinsen steuerlich absetzbar sind (tax shield)", "Weil Eigenkapital steuerlich absetzbar ist", "Weil das eine reine Konvention ohne inhaltlichen Grund ist"], correctIndex: 1, explanation: "FK-Zinsen mindern als Betriebsausgabe den steuerpflichtigen Gewinn — der Faktor (1−s) bildet diesen Steuervorteil ab." },
      { id: "q4", question: "Wofür wird der WACC häufig verwendet?", options: ["Zur Berechnung der Lohnsteuer", "Als Kalkulationszinssatz in dynamischen Investitionsverfahren", "Nur zur Berechnung der Umsatzsteuer", "Ausschließlich zur Bewertung von Aktienkursen"], correctIndex: 1, explanation: "Der WACC dient häufig als Mindestrenditeanforderung (Kalkulationszinssatz) bei der Kapitalwert- oder IZF-Methode." },
      { id: "q5", question: "Wie verändert sich der WACC tendenziell, wenn der Unternehmenssteuersatz steigt (bei sonst gleichen Werten)?", options: ["Der WACC sinkt (das Fremdkapital-Tax-Shield wird wertvoller)", "Der WACC wird negativ", "Der WACC steigt", "Der WACC bleibt exakt gleich"], correctIndex: 0, explanation: "Ein höherer Steuersatz erhöht den Wert des Tax Shields, wodurch die effektiven FK-Kosten sinken und der WACC tendenziell sinkt." },
      { id: "q6", question: "Ein Unternehmen ist zu 100 % eigenkapitalfinanziert. Was gilt dann für den WACC?", options: ["WACC = r_FK", "WACC = r_EK", "WACC = 0", "WACC ist nicht definierbar"], correctIndex: 1, explanation: "Ohne Fremdkapital entfällt der FK-Term vollständig, WACC entspricht dann genau r_EK." },
      { id: "q7", question: "Was passiert, wenn eine Investition eine erwartete Rendite unterhalb des WACC hat?", options: ["Der WACC ist dann automatisch falsch berechnet", "Das hat keinerlei Aussagekraft", "Die Investition vernichtet tendenziell Unternehmenswert und sollte kritisch geprüft werden", "Die Investition ist immer vorteilhaft"], correctIndex: 2, explanation: "Liegt die erwartete Rendite unter dem WACC, wird die geforderte Mindestverzinsung der Kapitalgeber nicht erreicht." },
      { id: "q8", question: "Welche Größe stellt EK/GK im WACC dar?", options: ["Die Steuerquote", "Den Fremdkapitalzins", "Den Anteil des Eigenkapitals am Gesamtkapital", "Den Verschuldungsgrad FK/EK"], correctIndex: 2, explanation: "EK/GK ist das Gewicht des Eigenkapitals am Gesamtkapital (Kapitalstrukturgewicht)." },
      { id: "q9", question: "Gibt es beim Eigenkapital ein vergleichbares 'Tax Shield' wie beim Fremdkapital?", options: ["Das hängt ausschließlich vom Land ab", "Ja, aber nur bei Aktiengesellschaften", "Ja, in identischer Höhe", "Nein, Eigenkapitalkosten (z. B. Dividenden) sind nicht steuerlich absetzbar"], correctIndex: 3, explanation: "Dividenden werden aus bereits versteuertem Gewinn gezahlt — es gibt kein Tax Shield für Eigenkapitalkosten." },
      { id: "q10", question: "Welche zwei Kapitalstrukturgewichte addieren sich im WACC immer zu 1?", options: ["EK/GK und FK/GK", "s und (1−s)", "GK und FK", "r_EK und r_FK"], correctIndex: 0, explanation: "EK/GK + FK/GK = 1, da Eigen- und Fremdkapital zusammen das gesamte Kapital (GK) ergeben." }
    ]
  }
];
