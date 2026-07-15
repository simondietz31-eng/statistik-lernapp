const KLR_CHAPTER7_TOPICS = [
  {
    id: "klausur-kostenarten-kostenauflösung",
    chapter: 7,
    order: 1,
    title: "Klausuraufgaben: Kostenarten und Kostenauflösung",
    icon: "📄",
    summary: "Original-Aufgaben aus den HS-Coburg-Probeklausuren (WS 2022/23, 2024/25, 2025/26): FIFO-Bewertung, Kostenauflösung und Grundbegriffe des Rechnungswesens.",
    explanation: [
      { type: "p", text: "Dieses Kapitel enthält reale Klausuraufgaben aus den Probeklausuren zur Kosten- und Leistungsrechnung an der Hochschule Coburg (Prof. Dr. Mirko Kraft, Wintersemester 2022/23, 2024/25 und 2025/26). Die Aufgaben sind inhaltlich unverändert, teils leicht gekürzt für die Übungsform." },
      { type: "p", text: "Verbrauchsfolgeverfahren (FIFO/LIFO): Bei schwankenden Einstandspreisen muss festgelegt werden, in welcher Reihenfolge Lagerabgänge bewertet werden. FIFO (First In, First Out) unterstellt, dass die zuerst eingelagerten Mengen zuerst wieder abgehen - der Endbestand wird daher zu den jüngsten (meist höheren) Preisen bewertet. LIFO (Last In, First Out) unterstellt das Gegenteil." },
      { type: "p", text: "Kostenauflösung: Um eine Kostenfunktion K(x) = Kf + kv·x (Fixkosten + variable Kosten je Beschäftigungseinheit) aus beobachteten Werten zu schätzen, eignet sich die Höchst-/Mindestwertmethode bzw. das allgemeinere Zwei-Punkt-Verfahren: Aus zwei Wertepaaren (x₁,K₁) und (x₂,K₂) wird der variable Kostensatz kv = (K₂−K₁)/(x₂−x₁) berechnet, anschließend Kf = K₁ − kv·x₁." },
      { type: "list", items: [
        "Grundbegriffe-Pyramide: Einzahlung/Auszahlung (Zahlungsmittelbestand) → Einnahme/Ausgabe (Geldvermögen) → Ertrag/Aufwand (Reinvermögen laut Bilanz) → Leistung/Kosten (betriebsnotwendiges Vermögen)",
        "Jede Stufe baut auf der vorherigen auf: nicht jede Ausgabe ist ein Aufwand (z. B. Kreditrückzahlung), nicht jeder Aufwand ist eine Kosten (z. B. außerordentliche Verluste), nicht jede Kosten entspricht direkt einem Aufwand (kalkulatorische Zusatzkosten wie kalkulatorische Zinsen auf Eigenkapital)."
      ]}
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Zu Beginn der Abrechnungsperiode Januar befinden sich 350 kg eines Rohstoffs im Lager, bewertet zu 5,00 €/kg. Im Verlauf des Monats gab es folgende Bewegungen: 02.01. Abgang 150 kg; 05.01. Zugang 400 kg zu 4,50 €/kg; 12.01. Abgang 100 kg; 18.01. Abgang 380 kg; 21.01. Zugang 100 kg zu 5,40 €/kg; 25.01. Zugang 150 kg zu 5,20 €/kg; 28.01. Abgang 200 kg. Bewerten Sie den Endbestand nach der FIFO-Methode.",
        solution: [
          { type: "list", items: [
            "02.01. Abgang 150 kg aus Anfangsbestand (5,00 €/kg) → Restbestand: 200 kg @5,00 €",
            "05.01. Zugang 400 kg @4,50 €. Lager: 200 kg@5,00 + 400 kg@4,50",
            "12.01. Abgang 100 kg aus Anfangsbestand (5,00 €/kg) → Restbestand: 100 kg @5,00 €",
            "18.01. Abgang 380 kg: erst 100 kg @5,00 €, dann 280 kg @4,50 € (aus 05.01.) → Restbestand: 120 kg @4,50 €",
            "21.01. Zugang 100 kg @5,40 €. 25.01. Zugang 150 kg @5,20 €. Lager: 120 kg@4,50 + 100 kg@5,40 + 150 kg@5,20",
            "28.01. Abgang 200 kg: erst 120 kg @4,50 €, dann 80 kg @5,40 € (aus 21.01.) → Restbestand: 20 kg @5,40 € + 150 kg @5,20 €"
          ]},
          { type: "p", text: "Endbestand FIFO = 20 kg × 5,40 € + 150 kg × 5,20 € = 108,00 € + 780,00 € = 888,00 €." }
        ]
      },
      {
        id: "ex2",
        prompt: "Für eine Kostenstelle mit der Beschäftigung x in Fertigungsstunden liegen folgende Werte vor: x = 90 h → K = 4.250 €; x = 160 h → K = 6.000 €. Ermitteln Sie mit der Höchst-/Mindestwertmethode die Kostenfunktion, die Fixkosten und die Plan-Kosten bei x = 130 h.",
        solution: [
          { type: "list", items: [
            "kv = (6.000 − 4.250) / (160 − 90) = 1.750 / 70 = 25 €/h",
            "Kf = 6.000 − 25 × 160 = 6.000 − 4.000 = 2.000 €",
            "Kostenfunktion: K(x) = 2.000 + 25 × x",
            "Plan-Kosten bei x = 130: K(130) = 2.000 + 25 × 130 = 5.250 €"
          ]}
        ]
      },
      {
        id: "ex3",
        prompt: "Für eine Kostenstelle liegen die Werte April (x = 1.200 h, K = 5.500 €) und Juli (x = 1.400 h, K = 5.000 €) vor. Ermitteln Sie mit dem Zwei-Punkt-Verfahren die Kostenfunktion, die Fixkosten und die Plan-Kosten bei x = 1.500 h. Beurteilen Sie kurz die Prognosegüte, wenn zusätzlich bekannt ist, dass im Mai bei x = 900 h nur K = 4.250 € und im Juni bei x = 1.600 h sogar K = 6.000 € anfielen.",
        solution: [
          { type: "list", items: [
            "kv = (K_Juli − K_April) / (x_Juli − x_April) = (5.000 − 5.500) / (1.400 − 1.200) = −2,5 €/h",
            "Kf = 5.500 − 1.200 × (−2,5) = 5.500 + 3.000 = 8.500 € (Kontrolle über Juli: 5.000 − 1.400×(−2,5) = 8.500 € ✓)",
            "Kostenfunktion: K(x) = 8.500 − 2,5 × x",
            "Plan-Kosten bei x = 1.500 h: K(1.500) = 8.500 − 2,5 × 1.500 = 4.750 €"
          ]},
          { type: "p", text: "Die Prognosegüte ist fragwürdig: Der negative variable Kostensatz (kv < 0, Kosten sinken mit steigender Beschäftigung) ist ökonomisch untypisch. Zudem widersprechen die Werte für Mai (x=900h, K=4.250€, deutlich niedriger als die lineare Fortschreibung erwarten ließe) und Juni (x=1.600h, K=6.000€, deutlich höher) der unterstellten linearen Kostenfunktion - eine lineare Zwei-Punkt-Schätzung ist hier keine verlässliche Basis für Kostenprognosen." }
        ]
      },
      {
        id: "ex4",
        prompt: "Eine Produktionsmaschine wird planmäßig linear abgeschrieben. Die Anschaffungskosten betrugen 6 Mio. €, die wirtschaftliche Nutzungsdauer wird auf 8 Jahre geschätzt. Ordnen Sie den jährlichen Betrag den Kategorien Auszahlung, Ausgabe, Aufwand und Kosten zu (mit Begründung).",
        solution: [
          { type: "list", items: [
            "Auszahlung: keine (die Auszahlung erfolgte bereits vollständig beim Kauf der Maschine, nicht jährlich)",
            "Ausgabe: keine (aus demselben Grund - die Anschaffungsausgabe fiel einmalig beim Erwerb an)",
            "Aufwand: 6 Mio. € / 8 Jahre = 0,75 Mio. € pro Jahr (planmäßige, handelsrechtlich anerkannte Abschreibung)",
            "Kosten: 0,75 Mio. € pro Jahr (deckt sich hier mit dem handelsrechtlichen Aufwand, da bilanzielle und kalkulatorische Abschreibung übereinstimmen)"
          ]}
        ]
      },
      {
        id: "ex5",
        prompt: "Eine Maschine wird zu 6 Mio. € verkauft. Der Buchwert betrug 5 Mio. € nach HGB, aber noch 8 Mio. € im internen Rechnungswesen (kalkulatorischer Restwert). Ordnen Sie den Verkauf den Kategorien Einzahlung, Einnahme, Ertrag und Leistung zu.",
        solution: [
          { type: "list", items: [
            "Einzahlung: 6 Mio. € (Zufluss liquider Mittel in dieser Höhe)",
            "Einnahme: 6 Mio. € (Zunahme des Geldvermögens in gleicher Höhe, da bar/sofort fällig)",
            "Ertrag: 1 Mio. € (Verkaufserlös 6 Mio. € abzüglich HGB-Buchwert 5 Mio. € = außerordentlicher Buchgewinn)",
            "Leistung: keine bzw. −2 Mio. € (kalkulatorisch, da der interne Restwert mit 8 Mio. € über dem Verkaufspreis liegt - dies wäre eher als außergewöhnlicher, nicht betriebstypischer Vorgang zu werten und würde nicht in die Kostenrechnung einfließen)"
          ]}
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welches Verfahren führt bei anhaltend hoher Inflation (steigenden Einstandspreisen) tendenziell zu vorsichtigeren, das heißt höheren, Materialkosten in der Kalkulation?", options: ["Beide Verfahren liefern bei stark schwankenden Einstandspreisen stets exakt identische Ergebnisse", "FIFO, weil dabei ausschließlich die ältesten, günstigsten Einstandspreise verrechnet werden", "LIFO, weil die zuletzt beschafften, teureren Mengen zuerst verrechnet werden", "Der gleitende Durchschnitt, weil er jede Preisschwankung über die gesamte Periode hinweg glättet"], correctIndex: 2, explanation: "LIFO unterstellt, dass die zuletzt eingelagerten Mengen zuerst wieder abgehen; bei steigenden Preisen sind das gerade die teuersten Zugänge. Dadurch fließen die aktuellen, höheren Preise sofort in die Materialkosten ein, was zu einer vorsichtigeren (höheren) Kalkulation führt. FIFO würde stattdessen die älteren, günstigeren Bestände zuerst verrechnen und die Kosten damit tendenziell unterschätzen." },
      { id: "q2", question: "Wie wird bei der FIFO-Methode der Endbestand bewertet?", options: ["Zum niedrigsten jemals im Betrachtungszeitraum gezahlten Einstandspreis", "Zu den ältesten, zu Periodenbeginn im Lager befindlichen Einstandspreisen", "Immer einheitlich zum gewogenen Durchschnittspreis aller Zugänge", "Zu den jüngsten Einstandspreisen"], correctIndex: 3, explanation: "FIFO (First In, First Out) unterstellt, dass zuerst eingelagerte Mengen zuerst wieder abgehen. Übrig im Lager bleiben daher gedanklich die zuletzt zugegangenen, jüngsten Mengen, und genau zu deren Einstandspreisen wird der Endbestand bewertet. Der Durchschnittspreis (Option 3) gehört dagegen zu einem anderen Verfahren, dem gleitenden Durchschnitt, nicht zu FIFO." },
      { id: "q3", question: "Wie lautet die Formel für den variablen Kostensatz kv im Zwei-Punkt-Verfahren?", options: ["kv = (K₂ − K₁) / (x₂ − x₁)", "kv = (K₁ + K₂) / (x₁ + x₂)", "kv = (x₂ − x₁) / (K₂ − K₁)", "kv = K₁ / x₁"], correctIndex: 0, explanation: "Der variable Kostensatz kv entspricht der Steigung der linearen Kostenfunktion K(x) = Kf + kv·x und beschreibt, um wie viel sich die Kosten je zusätzlicher Beschäftigungseinheit ändern. Er ergibt sich aus der Differenz der beiden Kostenwerte geteilt durch die Differenz der zugehörigen Beschäftigungswerte, wie im Zwei-Punkt-Verfahren beschrieben. Die übrigen Formeln vertauschen entweder Zähler und Nenner oder bilden statt einer Differenz eine Summe bzw. einen einzelnen Quotienten, was keine Steigung liefert." },
      { id: "q4", question: "Was bedeutet ein negativer variabler Kostensatz kv in einer geschätzten Kostenfunktion?", options: ["Die Fixkosten sind in diesem Rechenmodell grundsätzlich gleich null", "Die Kosten sinken laut der Funktion mit steigender Beschäftigung - ökonomisch untypisch", "Es handelt sich um eine besondere Form der Kostenerstattung durch den Auftraggeber", "Ein Rechenfehler bei der Datenerhebung liegt in diesem Fall zwingend vor"], correctIndex: 1, explanation: "Rechnerisch ist ein negativer kv möglich, wenn der zweite Beobachtungswert bei höherer Beschäftigung einen niedrigeren Kostenwert aufweist - wie im Beispiel mit April und Juli in diesem Kapitel. Ökonomisch ist das aber untypisch, da Kosten mit steigender Beschäftigung normalerweise nicht sinken. Ein solcher Befund deutet meist darauf hin, dass die gewählten Datenpunkte nicht repräsentativ sind oder die tatsächliche Kostenfunktion nicht linear verläuft, wie auch die Prognosegüte-Diskussion in der zugehörigen Übungsaufgabe zeigt." },
      { id: "q5", question: "Was besagt die Grundbegriffe-Pyramide des Rechnungswesens (Reihenfolge von 'außen' nach 'innen')?", options: ["Es gibt hierbei grundsätzlich keine feste, verbindliche Reihenfolge der Ebenen", "Einzahlung/Auszahlung → Einnahme/Ausgabe → Ertrag/Aufwand → Leistung/Kosten", "Ertrag → Einnahme → Kosten → Auszahlung, in exakt dieser festen Abfolge", "Kosten → Leistung → Aufwand → Ertrag, jeweils von innen nach außen betrachtet"], correctIndex: 1, explanation: "Die Pyramide beschreibt, wie sich die Rechnungswesen-Größen von außen (Zahlungsmittelbestand) nach innen (betriebsnotwendiges Vermögen) verengen: Einzahlung/Auszahlung bilden die Basis, darauf bauen Einnahme/Ausgabe (Geldvermögen), dann Ertrag/Aufwand (Reinvermögen laut Bilanz) und schließlich Leistung/Kosten (KLR) auf. Jede Stufe ist eine Teilmenge der vorherigen, wie die Beispiele mit Kreditrückzahlung (Ausgabe ohne Aufwand) und kalkulatorischen Zinsen (Kosten ohne Aufwand) im Kapitel zeigen." },
      { id: "q6", question: "Warum ist nicht jeder Aufwand automatisch auch eine Kosten?", options: ["Weil Aufwand ausschließlich im internen Rechnungswesen erfasst und dokumentiert wird", "Weil Kosten grundsätzlich nur bei reinen Dienstleistungsunternehmen überhaupt vorkommen", "Weil der handelsrechtliche Aufwand stets und ausnahmslos höher ist als die Kosten", "Weil es betriebsfremden, außerordentlichen oder periodenfremden neutralen Aufwand gibt"], correctIndex: 3, explanation: "Aufwand und Kosten unterscheiden sich, weil in der Finanzbuchhaltung auch neutraler Aufwand erfasst wird, der nichts mit dem eigentlichen Betriebszweck zu tun hat - etwa Spenden, außerordentliche Verluste oder periodenfremde Positionen. Solcher Aufwand fließt nicht in die Kostenrechnung ein, da er den normalen Betriebsablauf nicht abbildet. Das Beispiel der Kreditrückzahlung zeigt denselben Mechanismus eine Stufe früher: nicht jede Ausgabe ist Aufwand, ebenso ist nicht jeder Aufwand automatisch Kosten." },
      { id: "q7", question: "Was sind kalkulatorische Zusatzkosten?", options: ["Kosten ohne Gegenstück im handelsrechtlichen Aufwand, z. B. kalkulatorische Zinsen", "Kosten, die stets in exakt gleicher Höhe auch als Aufwand in der Handelsbilanz erscheinen", "Ausschließlich Materialkosten ohne jeglichen Bezug zum Eigenkapital", "Kosten, die grundsätzlich und unter keinen Umständen verrechnet werden dürfen"], correctIndex: 0, explanation: "Kalkulatorische Zusatzkosten sind Kosten, denen kein Aufwand in der Finanzbuchhaltung gegenübersteht - das klassische Beispiel aus diesem Kapitel sind kalkulatorische Zinsen auf das Eigenkapital oder der kalkulatorische Unternehmerlohn. Sie werden nur in der internen Kostenrechnung angesetzt, um die tatsächliche wirtschaftliche Beanspruchung aller Produktionsfaktoren abzubilden, auch wenn dafür kein Zahlungsvorgang oder Bilanzaufwand existiert. Das unterscheidet sie von Anderskosten, bei denen zwar ein Aufwand existiert, dieser aber kalkulatorisch abweichend angesetzt wird." },
      { id: "q8", question: "Ein Gut wird bar verkauft, der Verkaufspreis liegt über dem HGB-Buchwert. Wie wird die Differenz kategorisiert?", options: ["Als eine ganz normale, laufende betriebliche Leistung", "Als außerordentlicher Ertrag (Buchgewinn)", "Als besondere Art kalkulatorischer Zusatzkosten der Periode", "Als eine zusätzliche, sofort fällige Auszahlung liquider Mittel"], correctIndex: 1, explanation: "Übersteigt der Verkaufspreis den handelsrechtlichen Buchwert, entsteht eine Differenz, die nicht aus dem gewöhnlichen Betriebsgeschehen stammt, sondern aus dem einmaligen Verkaufsvorgang - sie zählt daher als außerordentlicher Ertrag (Buchgewinn), wie im zugehörigen Beispiel mit der verkauften Maschine gezeigt. Leistung wäre sie nur, wenn sie aus dem typischen, betriebsnotwendigen Wertansatz stammen würde, was bei einem außerordentlichen Vorgang gerade nicht der Fall ist." },
      { id: "q9", question: "Welche Methode zur Kostenauflösung nutzt gezielt die Wertepaare mit der höchsten und der niedrigsten Beschäftigung?", options: ["Die statistische Regressionsanalyse über mehrere Datenpunkte", "Das Stufenleiterverfahren der innerbetrieblichen Leistungsverrechnung", "Die Höchst-/Mindestwertmethode (Extremwertverfahren)", "Das Gleichungsverfahren der simultanen Kostenstellenrechnung"], correctIndex: 2, explanation: "Die Höchst-/Mindestwertmethode ist ein Spezialfall des allgemeinen Zwei-Punkt-Verfahrens: Statt beliebiger Wertepaare werden gezielt der höchste und der niedrigste Beschäftigungswert herangezogen, um kv und Kf zu schätzen, wie im Beispiel mit x=90h und x=160h in diesem Kapitel. Regressionsanalyse, Stufenleiterverfahren und Gleichungsverfahren sind andere Verfahren aus der KLR, die aber nicht der Kostenauflösung, sondern z. B. der innerbetrieblichen Leistungsverrechnung dienen." },
      { id: "q10", question: "Warum ist eine mittels Zwei-Punkt-Verfahren geschätzte Kostenfunktion außerhalb des beobachteten Wertebereichs (Extrapolation) besonders unsicher?", options: ["Weil die Linearitätsannahme dort nicht empirisch abgesichert ist", "Weil außerhalb des beobachteten Bereichs grundsätzlich überhaupt keine Kosten mehr anfallen", "Weil außerhalb des beobachteten Bereichs stets und ausschließlich nur noch Fixkosten anfallen", "Weil dort der variable Kostensatz sich automatisch und zwangsläufig auf null verringert"], correctIndex: 0, explanation: "Das Zwei-Punkt-Verfahren schätzt die Kostenfunktion nur auf Basis von zwei beobachteten Werten innerhalb eines bestimmten Beschäftigungsbereichs. Außerhalb dieses Bereichs ist nicht gesichert, dass sich die Kosten weiterhin linear verhalten - es können etwa Sprungfixkosten auftreten, wenn z. B. eine zusätzliche Maschine angeschafft werden muss. Die Übungsaufgabe zu April/Juli/Mai/Juni verdeutlicht genau dieses Risiko: zusätzliche Datenpunkte außerhalb der beiden Stützstellen widersprachen dort der unterstellten Linearität." }
    ]
  },
  {
    id: "klausur-kostenstellen-ilv-maschinenstundensatz",
    chapter: 7,
    order: 2,
    title: "Klausuraufgaben: Kostenstellenrechnung, ILV & Maschinenstundensatz",
    icon: "🏭",
    summary: "Original-Klausuraufgaben zur innerbetrieblichen Leistungsverrechnung (Stufenleiterverfahren), zum Rest-BAB und zur Maschinenstundensatzrechnung.",
    explanation: [
      { type: "p", text: "Diese Aufgaben stammen aus den Probeklausuren der HS Coburg und behandeln die Kostenstellenrechnung im Betriebsabrechnungsbogen (BAB): die Verrechnung von Vorkostenstellen auf Endkostenstellen (innerbetriebliche Leistungsverrechnung, ILV) sowie die Maschinenstundensatzrechnung als spezielle Form der Zuschlagskalkulation." },
      { type: "p", text: "Beim Stufenleiterverfahren (Treppenumlageverfahren) werden die Vorkostenstellen in einer festgelegten Reihenfolge nacheinander vollständig verteilt - einmal verrechnete Kostenstellen erhalten selbst keine weiteren Kosten mehr zurück. Bei wechselseitigen Leistungsbeziehungen zwischen den Vorkostenstellen liefert die gewählte Reihenfolge ein näherungsweises, reihenfolgeabhängiges Ergebnis; nur das (aufwändigere) Gleichungsverfahren liefert das exakt korrekte Ergebnis." },
      { type: "list", items: [
        "Verrechnungssatz einer Vorkostenstelle = (primäre Kosten + bereits empfangene Umlagen) / Verteilungsbasis (z. B. qm, km, Stunden)",
        "Kontrollrechnung: Die Summe der Kosten aller Endkostenstellen nach vollständiger Umlage muss der Summe der ursprünglichen primären Gemeinkosten entsprechen."
      ]},
      { type: "p", text: "Die Maschinenstundensatzrechnung ordnet einer Maschine gezielt ihre maschinenabhängigen Kosten zu (kalkulatorische Abschreibung, kalkulatorische Zinsen, Energie-, Wartungs- und Betriebsstoffkosten) und verteilt sie auf die tatsächlich genutzte Maschinenlaufzeit. Für die Abschreibung werden i. d. R. die historischen Anschaffungskosten (nicht der aktuelle, oft niedrigere Wiederbeschaffungspreis) verwendet." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Für die innerbetriebliche Leistungsverrechnung in einem Ingenieurbüro liegen vor: Gebäude liefert an Fuhrpark 150 qm, Vermessung 100 qm, Tiefbau 200 qm, Hochbau 300 qm (primäre GK Gebäude 6.000 €). Fuhrpark liefert an Vermessung 6.000 km, Tiefbau 8.000 km, Hochbau 10.000 km (primäre GK Fuhrpark 7.200 €). Vermessung liefert an Tiefbau 680 h, Hochbau 320 h (primäre GK Vermessung 33.100 €). Führen Sie die ILV nach dem Stufenleiterverfahren in der Reihenfolge Gebäude → Fuhrpark → Vermessung durch und ermitteln Sie die drei Verrechnungssätze.",
        solution: [
          { type: "list", items: [
            "Verrechnungssatz Gebäude = 6.000 € / (150+100+200+300 qm) = 6.000 / 750 = 8 €/qm",
            "Umlage Gebäude: Fuhrpark +1.200 €, Vermessung +800 €, Tiefbau +1.600 €, Hochbau +2.400 €",
            "Verrechnungssatz Fuhrpark = (7.200 + 1.200) € / (6.000+8.000+10.000 km) = 8.400 / 24.000 = 0,35 €/km",
            "Umlage Fuhrpark: Vermessung +2.100 €, Tiefbau +2.800 €, Hochbau +3.500 €",
            "Verrechnungssatz Vermessung = (33.100 + 800 + 2.100) € / (680+320 h) = 36.000 / 1.000 = 36 €/h",
            "Umlage Vermessung: Tiefbau +24.480 €, Hochbau +11.520 €"
          ]},
          { type: "p", text: "Verrechnungssätze: Gebäude 8 €/qm, Fuhrpark 0,35 €/km, Vermessung 36 €/h." }
        ]
      },
      {
        id: "ex2",
        prompt: "Dieselbe Ausgangssituation wie in Aufgabe 1, aber mit der umgekehrten Reihenfolge Fuhrpark → Gebäude. Beachten Sie, dass Fuhrpark selbst 300 qm vom Gebäude erhält, dies aber beim Stufenleiterverfahren mit dieser Reihenfolge nicht mehr zurückverrechnet wird. Ermitteln Sie den neuen Verrechnungssatz für das Gebäude und erklären Sie, warum sich ein anderer Wert als in Aufgabe 1 ergibt.",
        solution: [
          { type: "list", items: [
            "Verrechnungssatz Fuhrpark = 7.200 € / (6.000+8.000+10.000 km) = 7.200 / 24.000 = 0,30 €/km",
            "Umlage Fuhrpark: Vermessung +1.800 €, Tiefbau +2.400 €, Hochbau +3.000 € (Gebäude erhält hier nichts mehr, da bereits abgerechnet)",
            "Verrechnungssatz Gebäude = 6.000 € / (100+200+300 qm, ohne Fuhrpark!) = 6.000 / 600 = 10 €/qm (näherungsweise; laut Musterlösung mit Rundung 10,15 €/qm)"
          ]},
          { type: "p", text: "Der Unterschied entsteht, weil beim Stufenleiterverfahren wechselseitige Leistungsbeziehungen (Gebäude liefert an Fuhrpark UND Fuhrpark liefert an Gebäude) nicht symmetrisch berücksichtigt werden können - die zuerst verrechnete Stelle gibt Kosten an alle nachfolgenden ab, erhält aber selbst nichts zurück. Je nach gewählter Reihenfolge ergeben sich daher unterschiedliche (näherungsweise) Verrechnungssätze. Nur das Gleichungsverfahren würde ein reihenfolgeunabhängiges, exaktes Ergebnis liefern." }
        ]
      },
      {
        id: "ex3",
        prompt: "In einem Rest-BAB liegen für die Vorkostenstellen vor: Wasser (primäre GK 750 €) liefert 150 cbm insgesamt. Heizwerk (primäre GK 1.975 €) erhält 5 cbm Wasser und liefert 20.000 kWh insgesamt. Kantine (primäre GK 730 €) erhält 1.200 kWh Heizwerk und 30 cbm Wasser und liefert 500 Essen insgesamt. Ermitteln Sie die drei Verrechnungspreise in der Reihenfolge Wasser → Heizwerk → Kantine.",
        solution: [
          { type: "list", items: [
            "Verrechnungspreis Wasser = 750 € / 150 cbm = 5 €/cbm",
            "Heizwerk erhält aus Wasser: 5 cbm × 5 €/cbm = 25 €. Verrechnungspreis Heizwerk = (1.975 + 25) € / 20.000 kWh = 2.000 / 20.000 = 0,10 €/kWh",
            "Kantine erhält aus Heizwerk: 1.200 kWh × 0,10 €/kWh = 120 €; aus Wasser: 30 cbm × 5 €/cbm = 150 €. Verrechnungspreis Kantine = (730 + 120 + 150) € / 500 Essen = 1.000 / 500 = 2 €/Essen"
          ]}
        ]
      },
      {
        id: "ex4",
        prompt: "Auf einem Schleifautomaten werden pro Jahr 1.000 Stück Produkt A (1,5 h/Stk) und 3.500 Stück Produkt B (1 h/Stk) hergestellt. Anschaffungskosten 350.000 €, Restwert 50.000 €, Nutzungsdauer 15 Jahre, lineare Abschreibung. Kalkulatorischer Zinssatz 8 % (Durchschnittsmethode: kalk. Zinsen = 8 % × (350.000+50.000)/2 = 16.000 €). Leistungsaufnahme 25 kW/h, Strompreis 0,16 €/kWh. Betriebsstoffe 3.000 €/Jahr, Wartung 12.000 €/Jahr. Ermitteln Sie den kalkulatorischen Maschinenstundensatz.",
        solution: [
          { type: "list", items: [
            "Gesamtzeit = 1.000×1,5 h + 3.500×1 h = 1.500 + 3.500 = 5.000 h",
            "Kalk. Abschreibung = (350.000 − 50.000) / 15 = 20.000 €",
            "Kalk. Zinsen = 16.000 € (gegeben, Durchschnittsmethode)",
            "Stromkosten = 5.000 h × 25 kW × 0,16 €/kWh = 20.000 €",
            "Summe = 20.000 + 16.000 + 20.000 + 3.000 (Betriebsstoffe) + 12.000 (Wartung) = 71.000 €"
          ]},
          { type: "p", text: "Maschinenstundensatz = 71.000 € / 5.000 h = 14,20 €/h." }
        ]
      },
      {
        id: "ex5",
        prompt: "Nach vollständiger Verrechnung aller Vorkostenstellen im Rest-BAB ergeben sich für die drei Endkostenstellen folgende Gesamt-Gemeinkosten und Beschäftigungsstunden: Fertigung I 60.000 € bei 6.000 h, Fertigung II 92.700 € bei 7.725 h, Fertigung III 76.800 € bei 9.600 h. Ermitteln Sie die drei Kalkulationssätze pro Beschäftigungsstunde.",
        solution: [
          { type: "list", items: [
            "Fertigung I: 60.000 € / 6.000 h = 10 €/h",
            "Fertigung II: 92.700 € / 7.725 h = 12 €/h",
            "Fertigung III: 76.800 € / 9.600 h = 8 €/h"
          ]}
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Warum liefert das Stufenleiterverfahren bei wechselseitigen Leistungsbeziehungen (z. B. Gebäude liefert an Fuhrpark UND Fuhrpark liefert an Gebäude) nur ein näherungsweises Ergebnis?", options: ["Weil Fixkosten dabei ignoriert werden", "Weil die zuerst verrechnete Kostenstelle keine Rückumlage von später verrechneten Stellen mehr erhält", "Weil nur maximal zwei Kostenstellen verrechnet werden können", "Weil das Verfahren grundsätzlich fehlerhaft ist"], correctIndex: 1, explanation: "Beim Stufenleiterverfahren wird jede Kostenstelle einmal vollständig verteilt und erhält danach keine weiteren Umlagen - bei wechselseitigen Beziehungen geht dadurch ein Teil der tatsächlichen Verflechtung verloren." },
      { id: "q2", question: "Welches Verfahren liefert bei wechselseitigen Leistungsverflechtungen zwischen Vorkostenstellen das exakt korrekte Ergebnis?", options: ["Das Gleichungsverfahren (simultane ILV)", "Das Anbauverfahren", "Das Stufenleiterverfahren", "Die Divisionskalkulation"], correctIndex: 0, explanation: "Nur das Gleichungsverfahren löst die wechselseitigen Verflechtungen über ein simultanes Gleichungssystem exakt und reihenfolgeunabhängig auf." },
      { id: "q3", question: "Wie sollte die Reihenfolge beim Stufenleiterverfahren sinnvollerweise gewählt werden, um die Abweichung zum exakten Ergebnis zu minimieren?", options: ["Zufällig", "So, dass die Kostenstelle mit der geringeren Lieferung an die anderen Vorkostenstellen zuerst verrechnet wird", "Alphabetisch nach Kostenstellenname", "Immer die teuerste Kostenstelle zuerst"], correctIndex: 1, explanation: "Wählt man die Reihenfolge so, dass die Stelle mit der geringeren gegenseitigen Lieferung zuerst verrechnet wird, minimiert man den durch die Vereinfachung entstehenden Fehler." },
      { id: "q4", question: "Welcher Wert wird für die kalkulatorische Abschreibung im Maschinenstundensatz i. d. R. verwendet - Anschaffungskosten oder (niedrigerer) Wiederbeschaffungspreis?", options: ["Der Buchwert nach Handelsrecht", "Immer der aktuelle, niedrigere Wiederbeschaffungspreis", "Der Marktwert am Bilanzstichtag", "Die historischen Anschaffungskosten"], correctIndex: 3, explanation: "In der Kostenrechnung werden für die kalkulatorische Abschreibung i. d. R. die tatsächlichen Anschaffungskosten verwendet, nicht ein u. U. durch Sondereffekte (z. B. Förderprogramme) verzerrter aktueller Wiederbeschaffungspreis." },
      { id: "q5", question: "Welche Kostenarten fließen typischerweise in den Maschinenstundensatz ein?", options: ["Kalkulatorische Abschreibung, kalkulatorische Zinsen, Energie-, Wartungs- und Betriebsstoffkosten", "Nur Vertriebskosten", "Nur Personalkosten der Verwaltung", "Nur Materialkosten"], correctIndex: 0, explanation: "Der Maschinenstundensatz bündelt alle maschinenabhängigen Kosten und verteilt sie auf die genutzten Maschinenstunden." },
      { id: "q6", question: "Wie wird ein Verrechnungssatz einer Vorkostenstelle grundsätzlich berechnet?", options: ["Verteilungsbasis / primäre GK", "Primäre GK × Verteilungsbasis", "Nur primäre GK / Anzahl der Endkostenstellen", "(Primäre GK + bereits empfangene Umlagen) / Verteilungsbasis"], correctIndex: 3, explanation: "Der Verrechnungssatz ergibt sich aus den gesamten zu verteilenden Kosten (primär plus bereits erhaltene Umlagen) geteilt durch die gewählte Verteilungsbasis (z. B. qm, km, Stunden)." },
      { id: "q7", question: "Woran lässt sich die Korrektheit eines vollständig durchgeführten Rest-BAB überprüfen?", options: ["Der Verrechnungssatz muss immer eine ganze Zahl sein", "Es gibt keine Kontrollmöglichkeit", "Alle Kostenstellen müssen denselben Betrag haben", "Die Summe der Endkostenstellen-Gesamtkosten muss der Summe der ursprünglichen primären Gemeinkosten entsprechen"], correctIndex: 3, explanation: "Da bei der Umlage nur Kosten verschoben, nicht aber erzeugt oder vernichtet werden, muss die Gesamtsumme unverändert bleiben - eine wichtige Kontrollrechnung." },
      { id: "q8", question: "Was unterscheidet Vorkostenstellen von Endkostenstellen im BAB?", options: ["Vorkostenstellen erbringen innerbetriebliche Leistungen für andere Kostenstellen, Endkostenstellen geben ihre Kosten direkt an die Kostenträger weiter", "Es gibt keinen inhaltlichen Unterschied", "Vorkostenstellen existieren nur in Dienstleistungsunternehmen", "Endkostenstellen haben immer höhere Kosten"], correctIndex: 0, explanation: "Vorkostenstellen (z. B. Fuhrpark, Kantine, Gebäude) liefern innerbetriebliche Leistungen; Endkostenstellen (z. B. Fertigungsstellen) verrechnen ihre gesamten Kosten direkt über Kalkulationssätze auf die Produkte." },
      { id: "q9", question: "Ein Kalkulationssatz für eine Fertigungsstelle wird als Gesamtkosten je Beschäftigungsstunde ermittelt. Wofür wird dieser Satz anschließend verwendet?", options: ["Zur Berechnung der Umsatzsteuer", "Nur zur internen Dokumentation ohne weitere Verwendung", "Zur Verrechnung der Fertigungsgemeinkosten auf einzelne Produkte anhand ihrer jeweiligen Fertigungszeit", "Zur Berechnung des Eigenkapitalzinssatzes"], correctIndex: 2, explanation: "Der Kalkulationssatz (€/Stunde) wird mit der produktspezifischen Fertigungszeit multipliziert, um die anteiligen Fertigungsgemeinkosten je Produkt zu ermitteln." },
      { id: "q10", question: "Warum wird bei kalkulatorischen Zinsen häufig die Durchschnittsmethode verwendet?", options: ["Weil sie höhere Zinsen als die Restwertmethode ergibt", "Weil sie nur bei Immobilien anwendbar ist", "Weil sie das im Zeitablauf sinkende gebundene Kapital (Durchschnitt aus Anfangs- und Restwert) berücksichtigt", "Weil sie den Anschaffungswert über die gesamte Nutzungsdauer ansetzt"], correctIndex: 2, explanation: "Die Durchschnittsmethode unterstellt, dass das gebundene Kapital über die Nutzungsdauer sinkt (von Anschaffungswert auf Restwert), und verzinst daher den Mittelwert aus beiden." }
    ]
  },
  {
    id: "klausur-kalkulation-db-plankosten",
    chapter: 7,
    order: 3,
    title: "Klausuraufgaben: Kalkulation, Deckungsbeitrag & Plankostenrechnung",
    icon: "📈",
    summary: "Original-Klausuraufgaben zur Äquivalenzziffernkalkulation, Produktionsprogrammplanung, stufenweisen Fixkostendeckungsrechnung, Zuschlagskalkulation und flexiblen Plankostenrechnung.",
    explanation: [
      { type: "p", text: "Dieses Kapitel bündelt Klausuraufgaben zur Kostenträgerrechnung (Kalkulation), zur Teilkostenrechnung (Deckungsbeitrag, Produktionsprogrammplanung) und zur Plankostenrechnung - jeweils mit vollständigem Rechenweg." },
      { type: "list", items: [
        "Äquivalenzziffernkalkulation: Bei ähnlichen Produkten (Sorten) werden Äquivalenzziffern verwendet, um die Mengen in vergleichbare Recheneinheiten umzurechnen: Kosten je Recheneinheit = Gesamtkosten / Σ(Menge × Äquivalenzziffer).",
        "Kurzfristige Produktionsprogrammplanung bei einem Engpass: Zunächst werden Produkte mit negativem Stückdeckungsbeitrag ausgeschlossen. Anschließend erfolgt die Produktion in der Rangfolge des relativen Deckungsbeitrags je Engpasseinheit (DB je Stück / Engpassverbrauch je Stück), bis der Engpass ausgeschöpft ist.",
        "Stufenweise Fixkostendeckungsrechnung: Fixkosten werden so weit wie möglich verursachungsgerecht den einzelnen Bezugsobjekten (Produkt, Produktgruppe, Bereich, Unternehmen) zugeordnet, statt sie pauschal zu schlüsseln - dadurch werden mehrere Deckungsbeitragsstufen (DB I, DB II, ...) sichtbar.",
        "Flexible Plankostenrechnung: Soll-Kosten = Fixkosten + variable Plankosten bei Ist-Beschäftigung; Verbrauchsabweichung = Ist-Kosten − Soll-Kosten; Beschäftigungsabweichung = Soll-Kosten − verrechnete Plankosten."
      ]}
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Standard-Set aus Kübelfüßen (Äquivalenzziffer 1, Menge 26.000 Stk) hat zwei Varianten mit Äquivalenzziffern 1,2 (Menge 12.000 Stk) und 1,6 (Menge 17.000 Stk). Die Gesamtkosten aller drei Varianten betragen 236.600 €. Ermitteln Sie die Stückkosten je Variante mittels Äquivalenzziffernkalkulation.",
        solution: [
          { type: "list", items: [
            "Recheneinheiten (RE) = Menge × Äquivalenzziffer: Standard 26.000×1=26.000; Variante 1: 12.000×1,2=14.400; Variante 2: 17.000×1,6=27.200",
            "Σ RE = 26.000 + 14.400 + 27.200 = 67.600 RE",
            "Kosten je RE = 236.600 € / 67.600 RE = 3,5 €/RE (= Stückkosten Standard, da Äquivalenzziffer 1)"
          ]},
          { type: "p", text: "Stückkosten: Standard = 3,5 €/Stk; Variante 1 = 3,5×1,2 = 4,2 €/Stk; Variante 2 = 3,5×1,6 = 5,6 €/Stk." }
        ]
      },
      {
        id: "ex2",
        prompt: "Ein Unternehmen produziert sechs Produkte A-F aus Rohstoff R (5 €/kg, 35.000 kg verfügbar). Stückdeckungsbeiträge (Preis − variable Kosten inkl. Rohstoff): A=10 €, B=−5 €, C=−45 €, D=30 €, E=15 €, F=30 €. Rohstoffverbrauch je Stück: A=6 kg, D=2 kg, E=3 kg, F=5 kg. Max. Absatzmengen: A=1.000, D=3.000, E=4.500, F=2.000 Stück. Fixkosten 50.000 €. Ermitteln Sie das optimale Produktionsprogramm und den Gewinn (B und C werden wegen negativem DB nicht produziert).",
        solution: [
          { type: "list", items: [
            "Relative Deckungsbeiträge je kg Rohstoff: A = 10/6 = 1,67 €/kg; D = 30/2 = 15,00 €/kg; E = 15/3 = 5,00 €/kg; F = 30/5 = 6,00 €/kg",
            "Rangfolge: D > F > E > A",
            "D voll: 3.000 Stk × 2 kg = 6.000 kg (kumuliert 6.000 kg)",
            "F voll: 2.000 Stk × 5 kg = 10.000 kg (kumuliert 16.000 kg)",
            "E voll: 4.500 Stk × 3 kg = 13.500 kg (kumuliert 29.500 kg)",
            "A als Restmenge: (35.000−29.500) kg / 6 kg/Stk ≈ 916,67 Stk (Rest-Rohstoffkontingent wird ausgeschöpft)"
          ]},
          { type: "p", text: "Deckungsbeiträge: D = 3.000×30=90.000 €; F = 2.000×30=60.000 €; E = 4.500×15=67.500 €; A ≈ 916,67×10≈9.167 €. Summe DB ≈ 226.667 €. Gewinn = 226.667 − 50.000 ≈ 176.667 €." }
        ]
      },
      {
        id: "ex3",
        prompt: "Eine Unternehmung fertigt drei Produkte A, B, C (Angaben in T€): Umsatzerlöse: A=800, B=1.200, C=350. Variable Kosten: A=400, B=900, C=120. Produktfixkosten: A=150, B=450, C=50. Unternehmensfixkosten gesamt 90 T€. Ermitteln Sie DB I, DB II je Produkt und das Betriebsergebnis. Wie ändert sich das Betriebsergebnis, wenn Produkt B (negativer DB II) aus dem Programm genommen wird?",
        solution: [
          { type: "list", items: [
            "DB I = Umsatz − variable Kosten: A = 800−400=400; B = 1.200−900=300; C = 350−120=230",
            "DB II = DB I − Produktfixkosten: A = 400−150=250; B = 300−450=−150; C = 230−50=180",
            "Σ DB II = 250 + (−150) + 180 = 280 T€",
            "Betriebsergebnis = Σ DB II − Unternehmensfixkosten = 280 − 90 = 190 T€"
          ]},
          { type: "p", text: "Wird Produkt B eliminiert, entfällt sein negativer DB II von −150 T€ vollständig: neues Σ DB II = 250 + 180 = 430 T€. Neues Betriebsergebnis = 430 − 90 = 340 T€ (Verbesserung um 150 T€, exakt in Höhe des vorherigen negativen DB II von B)." }
        ]
      },
      {
        id: "ex4",
        prompt: "Zwei Produkte A und B: Materialkosten je Stück 10 €/25 €, Fertigungslöhne 10 €/20 €, Fertigungszeit 0,2 h/0,55 h, Fertigungsmenge 5.000/2.000 Stück. Materialgemeinkosten insgesamt 10.000 € (Basis: Materialeinzelkosten), Fertigungsgemeinkosten 210.000 € (Basis: Fertigungszeit). Ermitteln Sie die Herstellkosten pro Stück für A und B.",
        solution: [
          { type: "list", items: [
            "Materialeinzelkosten gesamt = 10×5.000 + 25×2.000 = 50.000 + 50.000 = 100.000 €. MGK-Zuschlagssatz = 10.000/100.000 = 10 %",
            "Fertigungszeit gesamt = 0,2×5.000 + 0,55×2.000 = 1.000 + 1.100 = 2.100 h. FGK-Satz = 210.000/2.100 = 100 €/h",
            "Herstellkosten A = 10 (Material) + 1 (MGK 10%) + 10 (Fertigungslohn) + 100×0,2=20 (FGK) = 41 €/Stk",
            "Herstellkosten B = 25 + 2,5 (MGK 10%) + 20 + 100×0,55=55 (FGK) = 102,5 €/Stk"
          ]}
        ]
      },
      {
        id: "ex5",
        prompt: "Für eine Kostenstelle gilt: Plan-Menge xₚ = 5.000 Stk, Plan-Kosten Kₚ = 50.000 €, davon fix Kf = 45.000 €. Ist-Menge xᵢ = 7.500 Stk, Ist-Kosten Kᵢ = 55.000 €. Berechnen Sie die Verbrauchs- und die Beschäftigungsabweichung auf Vollkostenbasis.",
        solution: [
          { type: "list", items: [
            "Variable Plankosten je Stück: kv = (Kₚ − Kf) / xₚ = (50.000 − 45.000) / 5.000 = 1 €/Stk",
            "Soll-Kosten = Kf + kv × xᵢ = 45.000 + 1 × 7.500 = 52.500 €",
            "Verrechnete Plankosten = (Kₚ / xₚ) × xᵢ = (50.000/5.000) × 7.500 = 10 × 7.500 = 75.000 €"
          ]},
          { type: "p", text: "Verbrauchsabweichung = Ist-Kosten − Soll-Kosten = 55.000 − 52.500 = 2.500 € (unvorteilhaft). Beschäftigungsabweichung = Soll-Kosten − verrechnete Plankosten = 52.500 − 75.000 = −22.500 € (vorteilhaft: die hohe Überbeschäftigung von 5.000 auf 7.500 Stück deckt weit mehr Fixkosten als geplant)." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie wird bei der Äquivalenzziffernkalkulation die Menge eines Produkts in Recheneinheiten (RE) umgerechnet?", options: ["Menge multipliziert mit Äquivalenzziffer", "Menge minus Äquivalenzziffer", "Äquivalenzziffer dividiert durch Menge", "Menge dividiert durch Äquivalenzziffer"], correctIndex: 0, explanation: "RE = Menge × Äquivalenzziffer. Die Äquivalenzziffer drückt aus, wie viel 'teurer' oder 'aufwändiger' eine Variante im Vergleich zur Standardvariante (Äquivalenzziffer 1) ist." },
      { id: "q2", question: "Welche Produkte werden bei der kurzfristigen Produktionsprogrammplanung unabhängig vom Engpass grundsätzlich nicht produziert?", options: ["Die mit negativem Stückdeckungsbeitrag", "Die mit dem höchsten Rohstoffverbrauch", "Die mit der längsten Fertigungszeit", "Die mit dem niedrigsten Absatzpreis"], correctIndex: 0, explanation: "Ein negativer Stückdeckungsbeitrag bedeutet, dass jedes produzierte Stück den Gesamterfolg verschlechtert - solche Produkte werden auch ohne Engpass nicht produziert." },
      { id: "q3", question: "Wonach richtet sich bei einem bindenden Engpass die optimale Produktionsreihenfolge?", options: ["Nach der Reihenfolge im Sortiment", "Nach dem Verkaufspreis allein", "Nach dem absoluten Stückdeckungsbeitrag", "Nach dem relativen Deckungsbeitrag je Engpasseinheit (DB/Stück ÷ Engpassverbrauch/Stück)"], correctIndex: 3, explanation: "Bei genau einem Engpass maximiert die Rangfolge nach relativem Deckungsbeitrag je Engpasseinheit den Gesamtdeckungsbeitrag." },
      { id: "q4", question: "Was zeigt der Deckungsbeitrag II (DB II) in der stufenweisen Fixkostendeckungsrechnung?", options: ["Das gesamte Betriebsergebnis des Unternehmens", "Nur die variablen Kosten eines Produkts", "Den DB I abzüglich der dem Produkt direkt zurechenbaren Produktfixkosten", "Die Summe aller Unternehmensfixkosten"], correctIndex: 2, explanation: "DB II = DB I − Produktfixkosten. Er zeigt, was das Produkt nach Abzug seiner eigenen Fixkosten noch zur Deckung der übergeordneten (z. B. Unternehmens-)Fixkosten beiträgt." },
      { id: "q5", question: "Ein Produkt hat einen negativen DB II. Was passiert mit dem Betriebsergebnis, wenn es eliminiert wird (ohne Verbundeffekte)?", options: ["Es verschlechtert sich um den Betrag des negativen DB II", "Es bleibt unverändert", "Es verbessert sich um den Betrag des (absoluten) negativen DB II", "Das lässt sich ohne weitere Daten nicht sagen"], correctIndex: 2, explanation: "Da der negative DB II das Gesamtergebnis bisher gemindert hat, führt sein Wegfall (ohne Verbundeffekte mit anderen Produkten) zu einer entsprechenden Verbesserung." },
      { id: "q6", question: "Was ist der Hauptunterschied zwischen Vollkosten- und Teilkostenrechnung (Deckungsbeitragsrechnung)?", options: ["Die Teilkostenrechnung schlüsselt Fixkosten pauschal, die Vollkostenrechnung nicht", "Teilkostenrechnung wird nur für Dienstleistungen verwendet", "Beide Verfahren sind inhaltlich identisch", "Die Vollkostenrechnung verrechnet auch Fixkosten auf Kostenträger, die Teilkostenrechnung stellt sie als eigenen Block dar"], correctIndex: 3, explanation: "Vollkostenrechnung schlüsselt auch Fixkosten (oft willkürlich) auf Kostenträger; Teilkostenrechnung (Deckungsbeitragsrechnung) trennt variable Kosten von Fixkostenblöcken." },
      { id: "q7", question: "Wie wird der Materialgemeinkosten-Zuschlagssatz berechnet?", options: ["Materialgemeinkosten × Fertigungszeit", "Materialgemeinkosten / Materialeinzelkosten", "Materialeinzelkosten / Materialgemeinkosten", "Materialgemeinkosten / Fertigungslöhne"], correctIndex: 1, explanation: "Der Zuschlagssatz bezieht die Materialgemeinkosten auf die Materialeinzelkosten als Bezugsgröße." },
      { id: "q8", question: "Wie berechnet sich die Verbrauchsabweichung in der flexiblen Plankostenrechnung?", options: ["Ist-Kosten minus Soll-Kosten", "Soll-Kosten minus verrechnete Plankosten", "Ist-Beschäftigung minus Planbeschäftigung", "Plankosten minus Ist-Kosten"], correctIndex: 0, explanation: "VA = Ist-Kosten − Soll-Kosten. Sie misst die reine Wirtschaftlichkeit unabhängig vom Beschäftigungsgrad." },
      { id: "q9", question: "Ein Unternehmen ist bei gegebenem Engpass stark überbeschäftigt (Ist-Beschäftigung deutlich über Plan). Wie wirkt sich das typischerweise auf die Beschäftigungsabweichung aus?", options: ["Sie ist immer null", "Sie ist tendenziell negativ (vorteilhaft), da mehr Fixkosten als geplant gedeckt werden", "Sie kann nicht berechnet werden", "Sie ist immer identisch mit der Verbrauchsabweichung"], correctIndex: 1, explanation: "Bei Überbeschäftigung werden die verrechneten Plankosten (die proportional mit der Ist-Beschäftigung wachsen) größer als die Soll-Kosten (deren Fixkostenanteil konstant bleibt) - die Beschäftigungsabweichung wird negativ, also vorteilhaft." },
      { id: "q10", question: "Was ist der wesentliche Vorteil der Äquivalenzziffernkalkulation gegenüber einer einfachen Divisionskalkulation bei mehreren, unterschiedlich aufwändigen Sorten?", options: ["Sie verzichtet komplett auf eine Kostenverteilung", "Sie ignoriert Kostenunterschiede zwischen den Sorten vollständig", "Sie funktioniert nur bei genau zwei Produkten", "Sie berücksichtigt unterschiedliche Kostenverursachung der Sorten über die Äquivalenzziffern, statt allen Sorten dieselben Durchschnittskosten zuzuweisen"], correctIndex: 3, explanation: "Durch die Äquivalenzziffern werden Kostenunterschiede zwischen ähnlichen, aber nicht identischen Sorten abgebildet, statt eine undifferenzierte Durchschnittskostenrechnung durchzuführen." }
    ]
  }
];
