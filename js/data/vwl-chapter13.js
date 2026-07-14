const VWL_CHAPTER13_TOPICS = [
  {
    id: "vwl-uebung7-volkswirtschaftliche-gesamtrechnung",
    chapter: 13,
    order: 1,
    title: "Übung 7: Volkswirtschaftliche Gesamtrechnung",
    icon: "📝",
    summary: "Übungsaufgaben zum Kreislaufmodell, den Verwendungskomponenten des BIP, sowie eine vollständig durchgerechnete Berechnung von nominalem BIP, realem BIP und BIP-Deflator am Beispiel des 'Schlaraffenlands' mit Milch und Honig.",
    explanation: [
      { type: "p", text: "Diese Übung vertieft Kapitel 7 (Volkswirtschaftliche Gesamtrechnung) mit einer vollständig durchgerechneten Aufgabe zu nominalem und realem BIP sowie dem BIP-Deflator anhand eines einfachen Zwei-Güter-Beispiels ('Schlaraffenland' mit Milch und Honig), das zeigt, wie sich reines Preiswachstum von echtem Mengenwachstum unterscheiden lässt." }
    ],
    exercises: [
      {
        id: "vwl-uebung7-e1",
        prompt: "Erklären Sie im Rahmen eines einfachen Kreislaufmodells, warum sich Ausgaben, Einnahmen und Einkommen einer Volkswirtschaft im Prinzip entsprechen.",
        solution: [{ type: "p", text: "Jede Ausgabe eines Wirtschaftssubjekts ist zugleich die Einnahme eines anderen: Zahlt ein Haushalt für ein Gut, erhält ein Unternehmen genau diesen Betrag als Einnahme. Diese Einnahme verwendet das Unternehmen wiederum, um Löhne, Zinsen, Mieten und Gewinne an die Produktionsfaktoren auszuzahlen, die letztlich wieder bei Haushalten als Einkommen ankommen. In diesem geschlossenen Kreislauf müssen sich Gesamtausgaben, Gesamteinnahmen und Gesamteinkommen einer Volkswirtschaft daher im Prinzip entsprechen." }]
      },
      {
        id: "vwl-uebung7-e2",
        prompt: "Zählen Sie die vier verwendungsseitigen Bestandteile des BIP auf und geben Sie je ein Beispiel.",
        solution: [{ type: "p", text: "Private Konsumausgaben (C), z. B. der Kauf von Lebensmitteln; Bruttoinvestitionen (I), z. B. der Kauf einer neuen Maschine durch ein Unternehmen; staatliche Konsumausgaben (G), z. B. Gehälter im öffentlichen Dienst; Nettoexporte (NX), z. B. der Wert exportierter Maschinen abzüglich importierter Rohstoffe." }]
      },
      {
        id: "vwl-uebung7-e3",
        prompt: "Im Schlaraffenland gilt: 2023: Milch 1 €/l (100 l), Honig 2 €/l (50 l). 2024: Milch 1 €/l (200 l), Honig 2 €/l (100 l). 2025: Milch 2 €/l (200 l), Honig 4 €/l (100 l). Berechnen Sie das nominale BIP für jedes Jahr sowie das reale BIP für 2024 und 2025 (jeweils zu Vorjahrespreisen).",
        solution: [{ type: "p", text: "Nominales BIP (aktuelle Preise × aktuelle Mengen): 2023 = 1×100 + 2×50 = 100+100 = 200. 2024 = 1×200 + 2×100 = 200+200 = 400. 2025 = 2×200 + 4×100 = 400+400 = 800. Reales BIP zu Vorjahrespreisen: Reales BIP 2024 (zu Preisen von 2023) = 1×200 + 2×100 = 400 (identisch zum nominalen BIP 2024, weil sich die Preise von 2023 auf 2024 nicht verändert haben). Reales BIP 2025 (zu Preisen von 2024) = 1×200 + 2×100 = 400 (die Mengen sind 2025 identisch zu 2024, nur die Preise haben sich verdoppelt, daher bleibt das reale BIP bei Bewertung zu 2024er-Preisen unverändert bei 400)." }]
      },
      {
        id: "vwl-uebung7-e4",
        prompt: "Berechnen Sie den BIP-Deflator für 2024 und 2025. Was lässt sich daraus über die Preisentwicklung im Schlaraffenland ablesen?",
        solution: [{ type: "p", text: "BIP-Deflator = nominales BIP ÷ reales BIP × 100. Für 2024: 400 ÷ 400 × 100 = 100 — der Deflator ist unverändert gegenüber dem Vorjahr, es gab also keine Inflation zwischen 2023 und 2024 (die Preise blieben tatsächlich konstant). Für 2025: 800 ÷ 400 × 100 = 200 — der Deflator hat sich verdoppelt, was eine Inflationsrate von 100 % zwischen 2024 und 2025 anzeigt. Das deckt sich genau mit den Ausgangsdaten: Sowohl der Milch- als auch der Honigpreis haben sich von 2024 auf 2025 exakt verdoppelt (1→2 bzw. 2→4), während die produzierten Mengen unverändert blieben." }]
      },
      {
        id: "vwl-uebung7-e5",
        prompt: "In welchem Jahr ist der ökonomische Wohlstand im Schlaraffenland höher, 2024 oder 2025?",
        solution: [{ type: "p", text: "Obwohl das nominale BIP von 400 auf 800 gestiegen ist (scheinbar eine Verdopplung des Wohlstands), zeigt das reale BIP, dass die tatsächlich verfügbare Gütermenge (200 l Milch und 100 l Honig) in beiden Jahren identisch ist. Der Anstieg des nominalen BIP ist also ausschließlich auf Preissteigerungen (Inflation) zurückzuführen, nicht auf zusätzliche Produktion. Der tatsächliche materielle Wohlstand — gemessen an der Menge verfügbarer Güter — ist in beiden Jahren gleich hoch; 2025 ist die Bevölkerung also nicht wohlhabender als 2024, obwohl das nominale BIP doppelt so hoch ist. Dieses Beispiel verdeutlicht anschaulich, warum für Wohlstandsvergleiche stets das reale und nicht das nominale BIP herangezogen werden sollte." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie hoch ist das nominale BIP des Schlaraffenlands im Jahr 2023 (100 l Milch à 1 €, 50 l Honig à 2 €)?", options: ["150","300","200","250"], correctIndex: 2, explanation: "1×100 + 2×50 = 100 + 100 = 200." },
      { id: "q2", question: "Wie hoch ist das nominale BIP 2025 (200 l Milch à 2 €, 100 l Honig à 4 €)?", options: ["600","1.000","800","400"], correctIndex: 2, explanation: "2×200 + 4×100 = 400 + 400 = 800." },
      { id: "q3", question: "Wie hoch ist das reale BIP 2025, bewertet zu Preisen von 2024?", options: ["400","600","1.000","800"], correctIndex: 0, explanation: "Bei unveränderten Mengen (200 l Milch, 100 l Honig) zu 2024er-Preisen (1 €, 2 €): 1×200 + 2×100 = 400." },
      { id: "q4", question: "Wie hoch ist der BIP-Deflator für 2025 (nominales BIP 800, reales BIP 400)?", options: ["100","150","200","50"], correctIndex: 2, explanation: "BIP-Deflator = 800/400 × 100 = 200." },
      { id: "q5", question: "Was zeigt ein BIP-Deflator von 100 für das Jahr 2024 an?", options: ["Eine Deflation von 100 %","Einen Produktionsrückgang","Eine Verdopplung der Preise","Keine Preisveränderung gegenüber dem Vorjahr"], correctIndex: 3, explanation: "Ein unveränderter Deflator von 100 zeigt an, dass sich das Preisniveau gegenüber dem Vorjahr nicht verändert hat." },
      { id: "q6", question: "Warum ist der materielle Wohlstand im Schlaraffenland 2024 und 2025 trotz unterschiedlichem nominalem BIP gleich hoch?", options: ["Weil es keinen Unterschied zwischen nominal und real gibt","Weil die Bevölkerung geschrumpft ist","Weil die produzierten Mengen an Milch und Honig in beiden Jahren identisch sind","Weil das nominale BIP falsch berechnet wurde"], correctIndex: 2, explanation: "Die tatsächlich verfügbare Gütermenge (200 l Milch, 100 l Honig) ist 2024 und 2025 identisch; der Anstieg des nominalen BIP beruht ausschließlich auf Preissteigerungen." },
      { id: "q7", question: "Welche allgemeine Lehre lässt sich aus dem Schlaraffenland-Beispiel für Wohlstandsvergleiche ziehen?", options: ["Man sollte für Wohlstandsvergleiche das reale statt des nominalen BIP heranziehen","Man sollte stets das nominale BIP verwenden","Der BIP-Deflator ist irrelevant","BIP-Vergleiche sind grundsätzlich nicht möglich"], correctIndex: 0, explanation: "Da das nominale BIP auch reine Preiseffekte enthält, muss man für echte Wohlstandsvergleiche das reale (preisbereinigte) BIP verwenden." },
      { id: "q8", question: "Was bedeutet es für eine Volkswirtschaft, wenn das reale BIP über zwei Jahre konstant bleibt, das nominale BIP aber stark steigt?", options: ["Der Anstieg beruht ausschließlich auf Inflation, nicht auf zusätzlicher Produktion","Es gibt keinen Unterschied zu einem realen Wachstum","Die Produktionsmenge hat sich real erhöht","Es liegt eine Deflation vor"], correctIndex: 0, explanation: "Steigt nur das nominale, nicht aber das reale BIP, liegt der gesamte Anstieg an gestiegenen Preisen (Inflation), nicht an mehr produzierten Gütern." }
    ]
  },
  {
    id: "vwl-uebung8-lebenshaltungskosten",
    chapter: 13,
    order: 2,
    title: "Übung 8: Messung der Lebenshaltungskosten",
    icon: "📝",
    summary: "Übungsaufgaben zu Problemen bei der Ermittlung des Verbraucherpreisindex (neue Produkte, technische Qualitätsverbesserungen, Substitutionseffekte) sowie eine vollständig durchgerechnete Kaufkraftanalyse anhand des Zeitungspreises der New York Times von 1970 bis 2025.",
    explanation: [
      { type: "p", text: "Diese Übung vertieft Kapitel 8 (Messung der Lebenshaltungskosten) mit konzeptionellen Fragen zu Messproblemen des Verbraucherpreisindex sowie einer klassischen, vollständig durchgerechneten Aufgabe, die zeigt, wie man Kaufkraft über lange Zeiträume mithilfe von Arbeitszeit statt Geldbeträgen vergleichen kann." }
    ],
    exercises: [
      {
        id: "vwl-uebung8-e1",
        prompt: "Welche Probleme kann es bei der Ermittlung des Verbraucherpreisindex geben? Erläutern Sie dies anhand von (a) der Erfindung des iPhones, (b) der Einführung des Einparkassistenten in PKW, (c) einer Zunahme der Käufe von Tablet-PCs infolge eines Preisrückgangs.",
        solution: [{ type: "p", text: "(a) Die Erfindung des iPhones ist ein Beispiel für das Problem neuer Güter: Ein völlig neues Produkt, das es zuvor nicht gab, lässt sich nicht ohne Weiteres in einen bestehenden Warenkorb mit historischer Preisreihe einordnen, obwohl es erheblichen Nutzen für Konsumenten stiftet — der VPI erfasst diesen Nutzenzuwachs nur mit Verzögerung, wenn das Produkt in den Warenkorb aufgenommen wird. (b) Die Einführung des Einparkassistenten ist ein Beispiel für das Problem unberücksichtigter Qualitätsveränderungen: Steigt der Autopreis auch wegen zusätzlicher, wertvoller Ausstattung, ist ein Teil der Preissteigerung eigentlich eine Qualitätsverbesserung und keine 'echte' Verteuerung — wird das nicht korrekt herausgerechnet, überschätzt der VPI die tatsächliche Inflation. (c) Die Zunahme der Tablet-PC-Käufe nach einem Preisrückgang zeigt das Substitutionsbias-Problem: Der VPI verwendet einen festen (nicht laufend angepassten) Warenkorb und unterstellt implizit ein unverändertes Kaufverhalten, während Konsumenten in Wirklichkeit stärker zu den relativ günstiger gewordenen Gütern wechseln — dadurch überschätzt ein statischer Warenkorb tendenziell die tatsächlichen Lebenshaltungskosten." }]
      },
      {
        id: "vwl-uebung8-e2",
        prompt: "Die New York Times (Wochentagsausgabe, Print) kostete 1970 0,10 $ und 2025 3,00 $. Der durchschnittliche Stundenlohn im Verarbeitenden Gewerbe betrug 1970 ca. 3,30 $ und 2025 ca. 30,00 $. Um wie viel Prozent sind Zeitungspreis und Lohn jeweils gestiegen?",
        solution: [{ type: "p", text: "Zeitungspreis: Anstieg von 0,10 $ auf 3,00 $, also um 2,90 $. Prozentualer Anstieg = 2,90 / 0,10 × 100 = 2.900 %. Stundenlohn: Anstieg von 3,30 $ auf 30,00 $, also um 26,70 $. Prozentualer Anstieg = 26,70 / 3,30 × 100 ≈ 809 %. Der Zeitungspreis ist damit prozentual sehr viel stärker gestiegen als der Stundenlohn." }]
      },
      {
        id: "vwl-uebung8-e3",
        prompt: "Wie viele Minuten musste ein Arbeiter 1970 bzw. 2025 arbeiten, um sich eine Zeitung leisten zu können?",
        solution: [{ type: "p", text: "1970: Bei einem Stundenlohn von 3,30 $ verdient ein Arbeiter 3,30/60 = 0,055 $ pro Minute. Für eine Zeitung zu 0,10 $ braucht er 0,10 / 0,055 ≈ 1,8 Minuten. 2025: Bei einem Stundenlohn von 30,00 $ verdient ein Arbeiter 30/60 = 0,50 $ pro Minute. Für eine Zeitung zu 3,00 $ braucht er 3,00 / 0,50 = 6 Minuten." }]
      },
      {
        id: "vwl-uebung8-e4",
        prompt: "Ist die Kaufkraft der Arbeiter, gemessen in Zeitungen, zwischen 1970 und 2025 gestiegen oder gesunken?",
        solution: [{ type: "p", text: "Die Kaufkraft, gemessen in Zeitungen, ist gesunken: 1970 musste ein Arbeiter nur rund 1,8 Minuten arbeiten, um sich eine Zeitung leisten zu können, 2025 dagegen rund 6 Minuten — mehr als das Dreifache. Obwohl der nominale Stundenlohn um 809 % gestiegen ist, ist der Zeitungspreis mit 2.900 % noch viel stärker gestiegen, sodass die relative Kaufkraft in Bezug auf dieses spezifische Gut gesunken ist. Das zeigt, dass die allgemeine Kaufkraftentwicklung (gemessen am gesamten Warenkorb bzw. VPI) sich deutlich von der Preisentwicklung einzelner Güter unterscheiden kann — Zeitungen sind hier relativ zum allgemeinen Lohnniveau deutlich teurer geworden, u. a. weil sich die Kostenstruktur des Printjournalismus (sinkende Auflagen, gestiegene Produktionskosten pro Exemplar) anders entwickelt hat als die Durchschnittslöhne." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Welches Messproblem des VPI illustriert die Erfindung des iPhones?", options: ["Das Problem neuer Güter, die sich nicht ohne Weiteres in eine historische Preisreihe einordnen lassen","Ein reiner Rechenfehler-Problem","Das Substitutionsbias-Problem","Es gibt kein Messproblem in diesem Fall"], correctIndex: 0, explanation: "Neue Güter wie das iPhone stiften Nutzen, der sich erst mit Verzögerung im VPI niederschlägt, wenn sie in den Warenkorb aufgenommen werden." },
      { id: "q2", question: "Welches Messproblem illustriert die Einführung des Einparkassistenten?", options: ["Ein reiner Übersetzungsfehler","Das Problem negativer Preise","Das Problem unberücksichtigter Qualitätsverbesserungen","Das Problem fehlender Verbraucherpreise"], correctIndex: 2, explanation: "Ein Teil der Preissteigerung eines Autos mit Einparkassistent ist eine Qualitätsverbesserung, keine reine Inflation — wird das nicht korrekt bereinigt, überschätzt der VPI die tatsächliche Teuerung." },
      { id: "q3", question: "Welches Messproblem illustriert die Zunahme von Tablet-Käufen nach einem Preisrückgang?", options: ["Das Problem der Kerninflationsrate","Das Problem der Golddeckung","Ein Rechenfehler bei der Elastizität","Das Substitutionsbias-Problem eines statischen Warenkorbs"], correctIndex: 3, explanation: "Ein fester Warenkorb bildet nicht ab, dass Konsumenten stärker zu relativ günstiger gewordenen Gütern wechseln, was die gemessenen Lebenshaltungskosten verzerren kann." },
      { id: "q4", question: "Um wie viel Prozent ist der Zeitungspreis von 1970 bis 2025 gestiegen (von 0,10 $ auf 3,00 $)?", options: ["Um 809 %","Um 30 %","Um 2.900 %","Um 300 %"], correctIndex: 2, explanation: "Der Anstieg um 2,90 $ entspricht bei einem Ausgangswert von 0,10 $ einer Steigerung um 2.900 %." },
      { id: "q5", question: "Um wie viel Prozent ist der Stundenlohn von 1970 bis 2025 gestiegen (von 3,30 $ auf 30,00 $)?", options: ["Um 2.900 %","Um 30 %","Um 809 %","Um 100 %"], correctIndex: 2, explanation: "Der Anstieg um 26,70 $ entspricht bei einem Ausgangswert von 3,30 $ einer Steigerung um rund 809 %." },
      { id: "q6", question: "Wie viele Minuten musste ein Arbeiter 1970 für eine Zeitung arbeiten?", options: ["Etwa 6 Minuten","Etwa 1,8 Minuten","Etwa 60 Minuten","Etwa 30 Minuten"], correctIndex: 1, explanation: "Bei 0,055 $ pro Minute (3,30 $/Std.) und einem Zeitungspreis von 0,10 $ ergeben sich rund 1,8 Minuten." },
      { id: "q7", question: "Wie viele Minuten musste ein Arbeiter 2025 für eine Zeitung arbeiten?", options: ["Etwa 1,8 Minuten","18 Minuten","60 Minuten","6 Minuten"], correctIndex: 3, explanation: "Bei 0,50 $ pro Minute (30 $/Std.) und einem Zeitungspreis von 3,00 $ ergeben sich genau 6 Minuten." },
      { id: "q8", question: "Ist die Kaufkraft der Arbeiter, gemessen in Zeitungen, zwischen 1970 und 2025 gestiegen oder gesunken?", options: ["Gesunken, weil der Zeitungspreis prozentual stärker gestiegen ist als der Lohn","Unverändert geblieben","Nicht bestimmbar","Gestiegen, weil der Lohn absolut stärker gestiegen ist"], correctIndex: 0, explanation: "Weil der Zeitungspreis (2.900 %) viel stärker gestiegen ist als der Lohn (809 %), musste 2025 deutlich länger gearbeitet werden, um sich eine Zeitung zu leisten — die Kaufkraft in Zeitungen gemessen ist gesunken." }
    ]
  },
  {
    id: "vwl-uebung9-monetaeres-system",
    chapter: 13,
    order: 3,
    title: "Übung 9: Das monetäre System",
    icon: "📝",
    summary: "Übungsaufgaben zu Geldfunktionen und -eigenschaften, zur Unabhängigkeit der EZB, sowie zum Mechanismus, mit dem die EZB die Geldmenge über Offenmarktgeschäfte steuert.",
    explanation: [
      { type: "p", text: "Diese Übung vertieft Kapitel 9 (Das monetäre System) mit Verständnisfragen zu Geld und zur EZB sowie einer Anwendungsaufgabe dazu, wie die EZB die Geldmenge erhöht oder verringert. Zwei der ursprünglichen Aufgaben verlangen die Recherche tagesaktueller Zeitreihen (EZB-Leitzinsen, Bundesbank-Daten zur Geldmenge M3) — diese lassen sich nicht abschließend beantworten, ohne die jeweils aktuellen Datenportale der EZB und Bundesbank zum Zeitpunkt der Bearbeitung zu konsultieren, und werden hier daher nur in ihrer grundsätzlichen Methodik behandelt." }
    ],
    exercises: [
      {
        id: "vwl-uebung9-e1",
        prompt: "Welche Geldfunktionen und welche Geldeigenschaften unterscheidet man in der Volkswirtschaftslehre?",
        solution: [{ type: "p", text: "Geldfunktionen: Zahlungsmittel (Tauschmittel), Recheneinheit (Wertmaßstab) und Wertaufbewahrungsmittel. Geldeigenschaften: Gutes Geld sollte knapp, haltbar, teilbar, transportfähig und fälschungssicher sein." }]
      },
      {
        id: "vwl-uebung9-e2",
        prompt: "Was bedeutet es, dass die Europäische Zentralbank unabhängig ist? Welchem Ziel ist die EZB in erster Linie verpflichtet?",
        solution: [{ type: "p", text: "Unabhängigkeit bedeutet, dass die EZB ihre Geldpolitik ohne politische Weisungen selbstständig durchführen kann und sich weigern kann bzw. soll, die Haushaltsdefizite von Regierungen direkt zu finanzieren. Das vorrangige Ziel der EZB ist die Sicherung der Preisstabilität, konkretisiert als mittelfristige Inflationsrate von rund zwei Prozent." }]
      },
      {
        id: "vwl-uebung9-e3",
        prompt: "Wie kann die EZB die umlaufende Geldmenge grundsätzlich erhöhen bzw. verringern?",
        solution: [{ type: "p", text: "Über Offenmarktgeschäfte: Kauft die EZB Wertpapiere von Geschäftsbanken an, fließt Geld von der Zentralbank in die Wirtschaft, wodurch die umlaufende Geldmenge steigt (expansive Geldpolitik). Verkauft die EZB dagegen Wertpapiere, fließt Geld von der Wirtschaft zur Zentralbank zurück, wodurch sich die umlaufende Geldmenge verringert (kontraktive Geldpolitik). Ergänzend kann die EZB auch über die Leitzinsen (z. B. Einlage- und Spitzenrefinanzierungsfazilität) sowie über gezielte Anleihekaufprogramme auf die Geldmenge einwirken." }]
      },
      {
        id: "vwl-uebung9-e4",
        prompt: "Wie könnte man methodisch untersuchen, ob es einen Zusammenhang zwischen der Entwicklung der Geldmenge, kurzfristigen Zinsen und der Inflationsrate gibt?",
        solution: [{ type: "p", text: "Ein solcher Zusammenhang lässt sich anhand von Zeitreihen der Bundesbank (z. B. für die Geldmenge M3, die Tagesgeldzinsen und die Veränderung des Verbraucherpreisindex) grafisch und statistisch untersuchen: Man würde prüfen, ob Phasen mit besonders starkem Wachstum der Geldmenge M3 (nach der Quantitätstheorie, siehe Kapitel 10) mit zeitlich versetzt höheren Inflationsraten einhergehen, und ob niedrige kurzfristige Zinsen (die tendenziell die Kreditvergabe und damit das Geldmengenwachstum begünstigen) diesem Muster vorausgehen. Für eine belastbare Aussage müssten die tatsächlichen, aktuellen Zeitreihendaten der Bundesbank herangezogen werden, da sich die konkreten Werte und damit auch die beobachtete Stärke des Zusammenhangs im Zeitverlauf ändern." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche drei Funktionen erfüllt Geld?", options: ["Recheneinheit, Sparanreiz, Handelsware","Wertaufbewahrungsmittel, Zollgut, Importgut","Zahlungsmittel, Recheneinheit, Wertaufbewahrungsmittel","Zahlungsmittel, Steuerbasis, Exportgut"], correctIndex: 2, explanation: "Geld erfüllt die drei Funktionen Zahlungsmittel, Recheneinheit und Wertaufbewahrungsmittel." },
      { id: "q2", question: "Was bedeutet die Unabhängigkeit der EZB?", options: ["Sie muss jede Entscheidung vom EU-Parlament genehmigen lassen","Sie darf keine geldpolitischen Entscheidungen treffen","Sie untersteht direkt der Bundesregierung","Sie kann Geldpolitik ohne politische Weisungen selbstständig betreiben"], correctIndex: 3, explanation: "Unabhängigkeit bedeutet, dass die EZB ihre Geldpolitik selbstständig und ohne politische Weisungen durchführen kann." },
      { id: "q3", question: "Was ist das vorrangige Ziel der EZB?", options: ["Preisstabilität (mittelfristig rund 2 % Inflation)","Ein niedriger Euro-Wechselkurs","Maximales Wirtschaftswachstum","Direkte Staatsfinanzierung"], correctIndex: 0, explanation: "Das vorrangige Ziel der EZB ist die Sicherung der Preisstabilität, konkretisiert als mittelfristige Inflationsrate von rund 2 %." },
      { id: "q4", question: "Wie kann die EZB die Geldmenge über Offenmarktgeschäfte erhöhen?", options: ["Durch den Verkauf von Wertpapieren","Durch die Festlegung des Wechselkurses","Durch den Ankauf von Wertpapieren von Geschäftsbanken","Durch die Erhebung von Steuern"], correctIndex: 2, explanation: "Kauft die EZB Wertpapiere an, fließt Geld in die Wirtschaft, wodurch die Geldmenge steigt." },
      { id: "q5", question: "Wie kann die EZB die Geldmenge über Offenmarktgeschäfte verringern?", options: ["Durch Zinssenkungen","Durch höhere Staatsausgaben","Durch den Ankauf von Wertpapieren","Durch den Verkauf von Wertpapieren an die Wirtschaft"], correctIndex: 3, explanation: "Verkauft die EZB Wertpapiere, fließt Geld von der Wirtschaft zur Zentralbank zurück, wodurch die Geldmenge sinkt." },
      { id: "q6", question: "Welche zwei zusätzlichen Instrumente kann die EZB neben Offenmarktgeschäften nutzen, um die Geldmenge zu beeinflussen?", options: ["Zollsätze und Handelsembargos","Leitzinsänderungen und Anleihekaufprogramme","Steuererhöhungen und Exportquoten","Preisdeckelungen und Lohnstopps"], correctIndex: 1, explanation: "Neben Offenmarktgeschäften kann die EZB über Leitzinsänderungen (z. B. Einlage-/Spitzenrefinanzierungsfazilität) und gezielte Anleihekaufprogramme wirken." },
      { id: "q7", question: "Welche Quelle bietet sich laut Vorlesung an, um den Zusammenhang zwischen Geldmenge M3, Zinsen und Inflation empirisch zu untersuchen?", options: ["Es gibt keine geeigneten Datenquellen","Nur historische Zeitungsartikel","Zeitreihen der Bundesbank zu M3, Tagesgeldzinsen und VPI","Ausschließlich private Finanzblogs"], correctIndex: 2, explanation: "Die Bundesbank stellt Zeitreihen zur Geldmenge M3, zu Tagesgeldzinsen und zur VPI-Entwicklung bereit, mit denen sich ein solcher Zusammenhang untersuchen lässt." },
      { id: "q8", question: "Warum lässt sich die Frage 'Erhöht oder verringert die EZB aktuell die Geldmenge?' nicht allgemeingültig, sondern nur zeitpunktbezogen beantworten?", options: ["Weil es keine geldpolitischen Instrumente gibt","Weil die EZB nie ihre Politik ändert","Weil sich die geldpolitische Ausrichtung im Zeitverlauf je nach Konjunktur- und Inflationslage ändert","Weil die Frage keinen ökonomischen Sinn ergibt"], correctIndex: 2, explanation: "Die geldpolitische Ausrichtung (expansiv oder kontraktiv) hängt von der jeweils aktuellen Konjunktur- und Inflationslage ab und ändert sich im Zeitverlauf, weshalb eine aktuelle Einschätzung stets die jeweils neuesten EZB-Daten erfordert." }
    ]
  }
];
