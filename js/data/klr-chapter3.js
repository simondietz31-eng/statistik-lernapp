const KLR_CHAPTER3_TOPICS = [
  {
    id: "betriebsabrechnungsbogen",
    chapter: 3,
    order: 1,
    title: "Der Betriebsabrechnungsbogen (BAB)",
    icon: "📋",
    summary: "Primäre Gemeinkostenverteilung, Vor- und Endkostenstellen sowie die drei Zuschlagssätze für die Kalkulation.",
    explanation: [
      { type: "p", text: "Der Betriebsabrechnungsbogen (BAB) ist eine tabellarische Rechnung, mit der die gesamten Gemeinkosten eines Unternehmens verursachungsgerecht auf die einzelnen Kostenstellen verteilt werden. Damit wird sichtbar, wo welche Gemeinkosten anfallen - eine notwendige Voraussetzung für die spätere Kalkulation der Produkte." },
      { type: "list", items: [
        "Vorkostenstellen (Hilfskostenstellen): erbringen ihre Leistungen nur innerbetrieblich für andere Kostenstellen, nicht direkt für die am Markt verkauften Produkte. Beispiele: Energiezentrale, Kantine, Reparaturwerkstatt, Fuhrpark.",
        "Endkostenstellen (Hauptkostenstellen): ihre Gemeinkosten fließen letztlich unmittelbar in die Kalkulation der Produkte ein. Klassische Endkostenstellen sind Material, Fertigung, Verwaltung und Vertrieb."
      ]},
      { type: "p", text: "Im ersten Schritt des BAB - der primären Gemeinkostenverteilung - wird jede Gemeinkostenart mit einem passenden Verteilungsschlüssel auf alle Kostenstellen aufgeteilt. Der Schlüssel soll dabei möglichst genau abbilden, wodurch die jeweilige Kostenart tatsächlich verursacht wird." },
      { type: "list", items: [
        "Gehälter: Verteilung nach der Mitarbeiterzahl je Kostenstelle.",
        "Kalkulatorische Miete: Verteilung nach der genutzten Fläche (Quadratmetern) je Kostenstelle.",
        "Kalkulatorische Abschreibungen: Verteilung nach dem Anschaffungswert der in der jeweiligen Kostenstelle genutzten Anlagen.",
        "Energiekosten: Verteilung nach dem tatsächlichen bzw. geschätzten Verbrauchsverhältnis der Kostenstellen.",
        "Instandhaltungskosten: Verteilung nach den geleisteten Instandhaltungsstunden je Kostenstelle."
      ]},
      { type: "p", text: "Liefern sich Vorkostenstellen gegenseitig Leistungen, werden zusätzlich die sekundären Gemeinkosten im Rahmen der innerbetrieblichen Leistungsverrechnung verteilt (siehe nächstes Thema). Erst danach stehen die endgültigen Gemeinkosten-Summen der Endkostenstellen fest." },
      { type: "list", items: [
        "Materialgemeinkosten-Zuschlagssatz = Material-Gemeinkosten der Materialstelle / Materialeinzelkosten, üblicherweise in Prozent.",
        "Fertigungsgemeinkosten-Zuschlagssatz = Fertigungs-Gemeinkosten je Fertigungsstelle / Beschäftigungsstunden dieser Stelle, meist als Betrag je Stunde (€/h).",
        "Verwaltungs- und Vertriebsgemeinkosten-Zuschlagssatz = jeweilige Gemeinkosten / Herstellkosten der Fertigungsstellen, üblicherweise in Prozent."
      ]}
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Die COMP(R)ESSION AG verteilt folgende primäre Gemeinkosten auf die vier Kostenstellen Lager, Vorverarbeitung, Fertigung sowie Verwaltung & Vertrieb: Gehälter 120.000 € (Verteilungsschlüssel Mitarbeiterzahl: Lager 5, Vorverarbeitung 10, Fertigung 20, Verwaltung & Vertrieb 15); Rohstoffe (Hilfs- und Betriebsstoffe) 40.000 € (prozentual: Lager 10 %, Vorverarbeitung 30 %, Fertigung 50 %, Verwaltung & Vertrieb 10 %); kalkulatorische Abschreibungen 60.000 € (nach Anschaffungswert: Lager 100.000 €, Vorverarbeitung 200.000 €, Fertigung 600.000 €, Verwaltung & Vertrieb 100.000 €); kalkulatorische Miete 50.000 € (nach Fläche: Lager 500 qm, Vorverarbeitung 300 qm, Fertigung 800 qm, Verwaltung & Vertrieb 400 qm); Energiekosten 30.000 € (Verbrauchsverhältnis 2 : 3 : 4 : 1); Instandhaltungskosten 20.000 € (nach Stunden: Lager 50 h, Vorverarbeitung 100 h, Fertigung 200 h, Verwaltung & Vertrieb 50 h). Erstellen Sie den vollständigen Betriebsabrechnungsbogen (eine Zeile je Gemeinkostenart) und ermitteln Sie die Summenzeile je Kostenstelle.",
        solution: [
          { type: "list", items: [
            "Gehälter (120.000 € auf 50 Mitarbeiter → 2.400 €/Mitarbeiter): Lager 5 × 2.400 € = 12.000 €; Vorverarbeitung 10 × 2.400 € = 24.000 €; Fertigung 20 × 2.400 € = 48.000 €; Verwaltung & Vertrieb 15 × 2.400 € = 36.000 €",
            "Rohstoffe (40.000 € prozentual): Lager 10 % = 4.000 €; Vorverarbeitung 30 % = 12.000 €; Fertigung 50 % = 20.000 €; Verwaltung & Vertrieb 10 % = 4.000 €",
            "Kalkulatorische Abschreibungen (60.000 € auf 1.000.000 € Anschaffungswert → 6 % der Anschaffungswerte): Lager 6.000 €; Vorverarbeitung 12.000 €; Fertigung 36.000 €; Verwaltung & Vertrieb 6.000 €",
            "Kalkulatorische Miete (50.000 € auf 2.000 qm → 25 €/qm): Lager 500 × 25 € = 12.500 €; Vorverarbeitung 300 × 25 € = 7.500 €; Fertigung 800 × 25 € = 20.000 €; Verwaltung & Vertrieb 400 × 25 € = 10.000 €",
            "Energiekosten (30.000 € im Verhältnis 2:3:4:1, 10 Teile → 3.000 €/Teil): Lager 6.000 €; Vorverarbeitung 9.000 €; Fertigung 12.000 €; Verwaltung & Vertrieb 3.000 €",
            "Instandhaltungskosten (20.000 € auf 400 h → 50 €/h): Lager 50 × 50 € = 2.500 €; Vorverarbeitung 100 × 50 € = 5.000 €; Fertigung 200 × 50 € = 10.000 €; Verwaltung & Vertrieb 50 × 50 € = 2.500 €"
          ]},
          { type: "list", items: [
            "Summe Lager: 12.000 + 4.000 + 6.000 + 12.500 + 6.000 + 2.500 = 43.000 €",
            "Summe Vorverarbeitung: 24.000 + 12.000 + 12.000 + 7.500 + 9.000 + 5.000 = 69.500 €",
            "Summe Fertigung: 48.000 + 20.000 + 36.000 + 20.000 + 12.000 + 10.000 = 146.000 €",
            "Summe Verwaltung & Vertrieb: 36.000 + 4.000 + 6.000 + 10.000 + 3.000 + 2.500 = 61.500 €",
            "Kontrollsumme: 43.000 + 69.500 + 146.000 + 61.500 = 320.000 € = Summe aller primären Gemeinkosten (120.000 + 40.000 + 60.000 + 50.000 + 30.000 + 20.000 €)"
          ]}
        ]
      },
      {
        id: "ex2",
        prompt: "Ein kleineres Unternehmen verteilt folgende primäre Gemeinkosten auf die drei Kostenstellen Materialstelle, Fertigungsstelle und Verwaltungsstelle: Gehälter 90.000 € nach Mitarbeiterzahl (Materialstelle 6, Fertigungsstelle 12, Verwaltungsstelle 12 Mitarbeiter); kalkulatorische Miete 24.000 € nach Fläche (Materialstelle 200 qm, Fertigungsstelle 400 qm, Verwaltungsstelle 200 qm); kalkulatorische Abschreibungen 45.000 € nach Anschaffungswert (Materialstelle 150.000 €, Fertigungsstelle 600.000 €, Verwaltungsstelle 150.000 €). Ermitteln Sie die Kostenstellen-Summe der Fertigungsstelle.",
        solution: [
          { type: "list", items: [
            "Gehälter: 30 Mitarbeiter insgesamt → 3.000 €/Mitarbeiter; Fertigungsstelle 12 × 3.000 € = 36.000 €",
            "Kalkulatorische Miete: 800 qm insgesamt → 30 €/qm; Fertigungsstelle 400 × 30 € = 12.000 €",
            "Kalkulatorische Abschreibungen: 900.000 € Anschaffungswert insgesamt → Satz 5 %; Fertigungsstelle 600.000 € × 5 % = 30.000 €"
          ]},
          { type: "p", text: "Kostenstellen-Summe Fertigungsstelle = 36.000 € + 12.000 € + 30.000 € = 78.000 €." }
        ]
      },
      {
        id: "ex3",
        prompt: "Nach Abschluss der primären und sekundären Gemeinkostenverteilung liegen folgende Werte vor: Materialstelle-Gemeinkosten 50.000 €, Materialeinzelkosten 250.000 €; Fertigungsstelle I: Gemeinkosten 120.000 €, Fertigungsstunden 6.000 h; Fertigungsstelle II: Gemeinkosten 99.000 €, Fertigungsstunden 4.500 h; Verwaltungs- und Vertriebsgemeinkosten insgesamt 80.000 €, Herstellkosten der Fertigungsstellen 800.000 €. Berechnen Sie den Materialgemeinkosten-Zuschlagssatz, die beiden Fertigungsgemeinkosten-Zuschlagssätze sowie den Verwaltungs- und Vertriebsgemeinkosten-Zuschlagssatz.",
        solution: [
          { type: "list", items: [
            "Materialgemeinkosten-Zuschlagssatz = 50.000 € / 250.000 € = 20 %",
            "Fertigungsgemeinkosten-Zuschlagssatz Fertigungsstelle I = 120.000 € / 6.000 h = 20 €/h",
            "Fertigungsgemeinkosten-Zuschlagssatz Fertigungsstelle II = 99.000 € / 4.500 h = 22 €/h",
            "Verwaltungs- und Vertriebsgemeinkosten-Zuschlagssatz = 80.000 € / 800.000 € = 10 %"
          ]}
        ]
      },
      {
        id: "ex4",
        prompt: "Erläutern Sie, warum sich die Mitarbeiterzahl gut als Verteilungsschlüssel für Gehälter eignet, aber nicht für Energiekosten. Nennen Sie außerdem für die folgenden drei Gemeinkostenarten jeweils einen sinnvollen Verteilungsschlüssel und begründen Sie Ihre Wahl: a) Reinigungskosten, b) Versicherungsprämien für das Anlagevermögen, c) Werkzeugverschleiß in der Fertigung.",
        solution: [
          { type: "p", text: "Die Mitarbeiterzahl ist ein sinnvoller Schlüssel für Gehälter, weil Personalkosten unmittelbar von der Anzahl der in einer Kostenstelle beschäftigten Mitarbeiter abhängen - mehr Mitarbeiter verursachen näherungsweise proportional mehr Gehaltskosten. Energiekosten hängen dagegen vom tatsächlichen Stromverbrauch der Maschinen und Anlagen ab, der von Kostenstelle zu Kostenstelle stark unterschiedlich sein kann, unabhängig von der Mitarbeiterzahl - eine Fertigungsstelle mit wenigen Mitarbeitern, aber vielen energieintensiven Maschinen, würde bei Verteilung nach Mitarbeiterzahl deutlich zu wenig Energiekosten zugerechnet bekommen." },
          { type: "list", items: [
            "Reinigungskosten: Verteilungsschlüssel Fläche (qm), da der Reinigungsaufwand primär von der zu reinigenden Fläche abhängt.",
            "Versicherungsprämien für das Anlagevermögen: Verteilungsschlüssel Anschaffungswert (bzw. Versicherungswert) der Anlagen, da sich die Prämienhöhe am versicherten Wert orientiert.",
            "Werkzeugverschleiß in der Fertigung: Verteilungsschlüssel Maschinen- bzw. Fertigungsstunden, da der Verschleiß mit der Nutzungsdauer der Werkzeuge zunimmt."
          ]}
        ]
      },
      {
        id: "ex5",
        prompt: "Für eine Kostenstelle liegen folgende Werte vor: Material-Gemeinkosten 45.000 €, Materialeinzelkosten 300.000 €, Fertigungs-Gemeinkosten 180.000 €, Fertigungsstunden 9.000 h. Berechnen Sie den Materialgemeinkosten-Zuschlagssatz und den Fertigungsgemeinkosten-Zuschlagssatz.",
        solution: [
          { type: "list", items: [
            "Materialgemeinkosten-Zuschlagssatz = 45.000 € / 300.000 € = 15 %",
            "Fertigungsgemeinkosten-Zuschlagssatz = 180.000 € / 9.000 h = 20 €/h"
          ]}
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche Aussage über Vorkostenstellen (Hilfskostenstellen) trifft zu?", options: ["Sie werden im BAB nie mit Gemeinkosten belastet", "Sie liefern Leistungen ausschließlich innerbetrieblich an andere Kostenstellen", "Sie existieren nur in Handelsunternehmen", "Ihre Kosten fließen direkt in die Kalkulation der verkauften Produkte ein"], correctIndex: 1, explanation: "Vorkostenstellen wie Energiezentrale oder Kantine erbringen Leistungen nur für andere Kostenstellen, nicht direkt für den Markt." },
      { id: "q2", question: "Welche der folgenden Kostenstellen ist typischerweise eine Endkostenstelle (Hauptkostenstelle)?", options: ["Fertigung", "Reparaturwerkstatt", "Energiezentrale", "Kantine"], correctIndex: 0, explanation: "Fertigung ist eine Endkostenstelle, deren Gemeinkosten unmittelbar in die Produktkalkulation einfließen." },
      { id: "q3", question: "Welcher Verteilungsschlüssel eignet sich am besten für kalkulatorische Abschreibungen?", options: ["Verbrauchsverhältnis", "Mitarbeiterzahl", "Anschaffungswert der Anlagen", "Fläche in Quadratmetern"], correctIndex: 2, explanation: "Abschreibungen hängen vom Wert der genutzten Anlagen ab, daher ist der Anschaffungswert der passende Schlüssel." },
      { id: "q4", question: "Wie lautet die Formel für den Materialgemeinkosten-Zuschlagssatz?", options: ["Materialeinzelkosten / Material-Gemeinkosten", "Material-Gemeinkosten / Herstellkosten", "Material-Gemeinkosten / Materialeinzelkosten", "Material-Gemeinkosten / Fertigungsstunden"], correctIndex: 2, explanation: "Der Materialgemeinkosten-Zuschlagssatz setzt die Material-Gemeinkosten ins Verhältnis zu den Materialeinzelkosten." },
      { id: "q5", question: "In welcher Einheit wird der Fertigungsgemeinkosten-Zuschlagssatz meist angegeben?", options: ["Als Betrag je Fertigungsstunde (€/h)", "In Prozent der Herstellkosten", "In Prozent der Materialeinzelkosten", "Als Betrag je Mitarbeiter"], correctIndex: 0, explanation: "Fertigungsgemeinkosten werden üblicherweise auf die Beschäftigungsstunden der jeweiligen Fertigungsstelle bezogen, also in €/h." },
      { id: "q6", question: "Wie wird der Verwaltungs- und Vertriebsgemeinkosten-Zuschlagssatz berechnet?", options: ["Herstellkosten / Verwaltungs-/Vertriebs-Gemeinkosten", "Verwaltungs-/Vertriebs-Gemeinkosten / Materialeinzelkosten", "Verwaltungs-/Vertriebs-Gemeinkosten / Herstellkosten", "Verwaltungs-/Vertriebs-Gemeinkosten / Fertigungsstunden"], correctIndex: 2, explanation: "Der Zuschlagssatz bezieht die Verwaltungs- und Vertriebsgemeinkosten auf die Herstellkosten der Fertigungsstellen." },
      { id: "q7", question: "Eine Fertigungsstelle hat Gemeinkosten von 120.000 € bei 6.000 Fertigungsstunden. Wie hoch ist der Fertigungsgemeinkosten-Zuschlagssatz?", options: ["10 €/h", "20 €/h", "200 €/h", "2 €/h"], correctIndex: 1, explanation: "120.000 € / 6.000 h = 20 €/h." },
      { id: "q8", question: "Warum eignet sich die Mitarbeiterzahl nicht als Verteilungsschlüssel für Energiekosten?", options: ["Weil der Energieverbrauch eher vom Maschineneinsatz als von der Mitarbeiterzahl abhängt", "Weil Energiekosten nichts mit Kostenstellen zu tun haben", "Weil Energiekosten immer Einzelkosten sind", "Weil die Mitarbeiterzahl gesetzlich nicht als Schlüssel erlaubt ist"], correctIndex: 0, explanation: "Der Energieverbrauch hängt vom Maschinenpark und dessen Nutzung ab, nicht von der Kopfzahl der Mitarbeiter." },
      { id: "q9", question: "Materialgemeinkosten betragen 50.000 €, Materialeinzelkosten 250.000 €. Wie hoch ist der Materialgemeinkosten-Zuschlagssatz?", options: ["50 %", "5 %", "10 %", "20 %"], correctIndex: 3, explanation: "50.000 € / 250.000 € = 0,20 = 20 %." },
      { id: "q10", question: "Was ist der Zweck des Betriebsabrechnungsbogens (BAB)?", options: ["Die Buchung der Umsatzerlöse", "Die Erfassung der Einzelkosten je Produkt", "Die Ermittlung des Gewinns je Kostenträger", "Die verursachungsgerechte Verteilung der Gemeinkosten auf die Kostenstellen und Ermittlung von Zuschlagssätzen für die Kalkulation"], correctIndex: 3, explanation: "Der BAB verteilt Gemeinkosten auf Kostenstellen und liefert die Zuschlagssätze, die für die spätere Kalkulation benötigt werden." }
    ]
  },
  {
    id: "innerbetriebliche-leistungsverrechnung",
    chapter: 3,
    order: 2,
    title: "Innerbetriebliche Leistungsverrechnung",
    icon: "🔄",
    summary: "Anbauverfahren, Stufenleiterverfahren und mathematisches Verfahren zur Verteilung sekundärer Gemeinkosten zwischen Vorkostenstellen.",
    explanation: [
      { type: "p", text: "Liefern sich Vorkostenstellen (Hilfskostenstellen) gegenseitig Leistungen - etwa wenn das Heizwerk die Kantine mit Wärme versorgt und die Kantine im Gegenzug die Mitarbeiter des Heizwerks verpflegt - müssen diese sogenannten sekundären Gemeinkosten im Rahmen der innerbetrieblichen Leistungsverrechnung verteilt werden, bevor die Endkostenstellen ihre endgültigen Gemeinkosten-Summen erhalten." },
      { type: "p", text: "Dafür stehen drei Verfahren mit unterschiedlicher Genauigkeit und unterschiedlichem Rechenaufwand zur Verfügung." },
      { type: "list", items: [
        "Anbauverfahren: Jede Vorkostenstelle wird isoliert betrachtet, ihre Kosten werden nur direkt auf die Endkostenstellen verrechnet. Leistungsbeziehungen zwischen den Vorkostenstellen selbst werden komplett ignoriert. Vorteil: sehr einfach zu rechnen. Nachteil: am ungenauesten, da reale Leistungsverflechtungen zwischen den Vorkostenstellen unberücksichtigt bleiben."
      ]},
      { type: "list", items: [
        "Stufenleiterverfahren (Treppenverfahren): Die Vorkostenstellen werden in eine Reihenfolge gebracht und nacheinander abgerechnet. Eine bereits abgerechnete Vorkostenstelle erhält keine Kosten mehr von später abgerechneten Vorkostenstellen - Rückleistungen an bereits abgerechnete Stellen werden also vernachlässigt.",
        "Gibt es keine echten gegenseitigen Verflechtungen (jede Vorkostenstelle liefert nur an nachfolgende Stellen, nie zurück), liefert das Stufenleiterverfahren dasselbe exakte Ergebnis wie das mathematische Verfahren.",
        "Gibt es echte gegenseitige Verflechtungen, hängt das Ergebnis von der gewählten Reihenfolge ab - es gibt dann keine eindeutig 'richtige' Reihenfolge; man wählt sie so, dass die dabei vernachlässigte Rückleistung möglichst gering ausfällt."
      ]},
      { type: "p", text: "Das mathematische Verfahren (Gleichungsverfahren) stellt für jede Vorkostenstelle eine Gleichung auf, die alle gegenseitigen Verflechtungen simultan berücksichtigt, und löst dieses Gleichungssystem. Es liefert bei zyklischer Verflechtung stets das einzig korrekte Ergebnis, ist aber rechnerisch aufwändiger als die beiden anderen Verfahren." },
      { type: "p", text: "Trotz seiner Reihenfolge-Problematik ist das Stufenleiterverfahren in der Praxis in der Regel deutlich genauer als das stark vereinfachende Anbauverfahren, weil es zumindest einen Teil der tatsächlichen Leistungsverflechtungen berücksichtigt." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein Unternehmen hat drei Vorkostenstellen - Energiezentrale (E), Reparaturwerkstatt (R) und Fuhrpark (F) - sowie die Endkostenstellen Fertigung und Verwaltung. Es bestehen folgende Leistungsbeziehungen (keine Rückleistungen an die Energiezentrale oder die Reparaturwerkstatt): Energiezentrale liefert (in kWh) 200 an Reparaturwerkstatt, 100 an Fuhrpark, 600 an Fertigung, 100 an Verwaltung (Gesamtabgabe 1.000 kWh); Reparaturwerkstatt liefert (in Reparaturstunden) 50 an Fuhrpark, 350 an Fertigung, 100 an Verwaltung (Gesamtabgabe 500 h); Fuhrpark liefert (in gefahrenen Kilometern) 800 an Fertigung, 200 an Verwaltung (Gesamtabgabe 1.000 km). Primäre Kosten: Energiezentrale 100.000 €, Reparaturwerkstatt 60.000 €, Fuhrpark 40.000 €. Ermitteln Sie mit dem Stufenleiterverfahren die Verrechnungssätze der drei Vorkostenstellen sowie die sekundären Gemeinkosten der Fertigung und der Verwaltung. Führen Sie abschließend eine Kontrollrechnung durch.",
        solution: [
          { type: "list", items: [
            "Reihenfolge: Energiezentrale zuerst (empfängt von niemandem), dann Reparaturwerkstatt (empfängt nur von E), dann Fuhrpark (empfängt von E und R).",
            "Verrechnungssatz Energiezentrale = 100.000 € / 1.000 kWh = 100 €/kWh",
            "Reparaturwerkstatt-Gesamtkosten = 60.000 € + 200 kWh × 100 €/kWh = 60.000 € + 20.000 € = 80.000 €; Verrechnungssatz = 80.000 € / 500 h = 160 €/h",
            "Fuhrpark-Gesamtkosten = 40.000 € + 100 kWh × 100 €/kWh + 50 h × 160 €/h = 40.000 € + 10.000 € + 8.000 € = 58.000 €; Verrechnungssatz = 58.000 € / 1.000 km = 58 €/km"
          ]},
          { type: "list", items: [
            "Sekundäre Gemeinkosten Fertigung = 600 kWh × 100 €/kWh + 350 h × 160 €/h + 800 km × 58 €/km = 60.000 € + 56.000 € + 46.400 € = 162.400 €",
            "Sekundäre Gemeinkosten Verwaltung = 100 kWh × 100 €/kWh + 100 h × 160 €/h + 200 km × 58 €/km = 10.000 € + 16.000 € + 11.600 € = 37.600 €",
            "Kontrollrechnung: 162.400 € + 37.600 € = 200.000 € = Summe der primären Gemeinkosten aller drei Vorkostenstellen (100.000 € + 60.000 € + 40.000 €)"
          ]}
        ]
      },
      {
        id: "ex2",
        prompt: "Erläutern Sie kurz, warum das Stufenleiterverfahren im Beispiel aus Aufgabe 1 (Energiezentrale, Reparaturwerkstatt, Fuhrpark) zwingend zum selben Ergebnis führen muss wie das mathematische Verfahren.",
        solution: [
          { type: "p", text: "Es liegen keine echten gegenseitigen Verflechtungen vor: Die Energiezentrale empfängt von keiner anderen Vorkostenstelle, die Reparaturwerkstatt empfängt nur von der Energiezentrale (nicht vom Fuhrpark), und der Fuhrpark liefert nichts an die beiden anderen Vorkostenstellen zurück. Bei der gewählten Reihenfolge (E vor R vor F) wird deshalb keine einzige Leistungsbeziehung vernachlässigt - jede innerbetriebliche Lieferung fließt genau einmal in die Verrechnung ein. Damit entspricht das Ergebnis exakt der Lösung eines simultanen Gleichungssystems (mathematisches Verfahren), was auch die Kontrollrechnung (162.400 € + 37.600 € = 200.000 €) bestätigt." }
        ]
      },
      {
        id: "ex3",
        prompt: "Ein Ingenieurbüro hat die Vorkostenstellen Gebäude (G), Fuhrpark (Fu) und Vermessung (Ve) sowie die Endkostenstellen Tiefbau (T) und Hochbau (H). Es besteht eine echte gegenseitige Verflechtung: Der Fuhrpark liefert auch an das Gebäude (Fahrzeuge für Instandhaltungsfahrten). Primäre Kosten: Gebäude 80.000 €, Fuhrpark 50.000 €, Vermessung 30.000 €. Leistungen: Gebäude liefert (qm genutzte Fläche) 100 qm an Fuhrpark, 400 qm an Tiefbau, 300 qm an Hochbau; Fuhrpark liefert (Fahrzeug-Kilometer) 50 km an Gebäude, 100 km an Vermessung, 300 km an Tiefbau, 200 km an Hochbau; Vermessung liefert (Vermessungsstunden) 150 h an Tiefbau, 250 h an Hochbau. Führen Sie das Stufenleiterverfahren in der Reihenfolge 'Gebäude vor Fuhrpark' (danach Vermessung) durch, ermitteln Sie die sekundären Gemeinkosten von Tiefbau und Hochbau und prüfen Sie die Kontrollsumme.",
        solution: [
          { type: "list", items: [
            "Verrechnungssatz Gebäude = 80.000 € / (100 + 400 + 300) qm = 80.000 € / 800 qm = 100 €/qm (die Rückleistung des Fuhrparks ans Gebäude wird nicht mehr berücksichtigt, da das Gebäude bereits als Erstes abgerechnet wird)",
            "Fuhrpark-Gesamtkosten = 50.000 € + 100 qm × 100 €/qm = 50.000 € + 10.000 € = 60.000 €; Verrechnungssatz = 60.000 € / (100 + 300 + 200) km = 60.000 € / 600 km = 100 €/km",
            "Vermessung-Gesamtkosten = 30.000 € + 100 km × 100 €/km = 30.000 € + 10.000 € = 40.000 €; Verrechnungssatz = 40.000 € / (150 + 250) h = 40.000 € / 400 h = 100 €/h"
          ]},
          { type: "list", items: [
            "Sekundäre Gemeinkosten Tiefbau = 400 qm × 100 €/qm + 300 km × 100 €/km + 150 h × 100 €/h = 40.000 € + 30.000 € + 15.000 € = 85.000 €",
            "Sekundäre Gemeinkosten Hochbau = 300 qm × 100 €/qm + 200 km × 100 €/km + 250 h × 100 €/h = 30.000 € + 20.000 € + 25.000 € = 75.000 €",
            "Kontrollsumme: 85.000 € + 75.000 € = 160.000 € = Summe der primären Gemeinkosten (80.000 € + 50.000 € + 30.000 €)"
          ]}
        ]
      },
      {
        id: "ex4",
        prompt: "Rechnen Sie das Beispiel aus Aufgabe 3 (Ingenieurbüro) nun mit umgekehrter Reihenfolge 'Fuhrpark vor Gebäude' (danach Vermessung). Zeigen Sie, dass sich ein leicht anderes Ergebnis für Tiefbau und Hochbau ergibt, und erläutern Sie, warum.",
        solution: [
          { type: "list", items: [
            "Verrechnungssatz Fuhrpark = 50.000 € / (50 + 100 + 300 + 200) km = 50.000 € / 650 km ≈ 76,92 €/km (jetzt zählt die Lieferung ans Gebäude mit, da das Gebäude noch nicht abgerechnet ist)",
            "Gebäude-Gesamtkosten = 80.000 € + 50 km × 76,92 €/km ≈ 80.000 € + 3.846,15 € = 83.846,15 €; Verrechnungssatz = 83.846,15 € / (400 + 300) qm ≈ 119,78 €/qm (die Lieferung des Gebäudes an den bereits abgerechneten Fuhrpark, 100 qm, zählt jetzt nicht mehr mit)",
            "Vermessung-Gesamtkosten = 30.000 € + 100 km × 76,92 €/km ≈ 30.000 € + 7.692,31 € = 37.692,31 €; Verrechnungssatz ≈ 37.692,31 € / 400 h ≈ 94,23 €/h"
          ]},
          { type: "list", items: [
            "Sekundäre Gemeinkosten Tiefbau ≈ 400 qm × 119,78 €/qm + 300 km × 76,92 €/km + 150 h × 94,23 €/h ≈ 47.912,09 € + 23.076,92 € + 14.134,62 € ≈ 85.123,63 €",
            "Sekundäre Gemeinkosten Hochbau ≈ 300 qm × 119,78 €/qm + 200 km × 76,92 €/km + 250 h × 94,23 €/h ≈ 35.934,07 € + 15.384,62 € + 23.557,69 € ≈ 74.876,38 €",
            "Kontrollsumme ≈ 85.123,63 € + 74.876,38 € ≈ 160.000 € (Rundungsdifferenzen möglich) - stimmt weiterhin mit der Summe der primären Gemeinkosten überein"
          ]},
          { type: "p", text: "Das Ergebnis unterscheidet sich leicht von Aufgabe 3 (dort Tiefbau 85.000 €, Hochbau 75.000 €), weil beim Stufenleiterverfahren immer nur eine Richtung der echten gegenseitigen Verflechtung zwischen Gebäude und Fuhrpark berücksichtigt werden kann. Wird das Gebäude zuerst abgerechnet, geht dessen Lieferung an den Fuhrpark unter, wird stattdessen der Fuhrpark zuerst abgerechnet, geht seine Lieferung ans Gebäude unter. Je nachdem, welche Vorkostenstelle 'gewinnt', verschiebt sich die letztlich auf Tiefbau und Hochbau verrechnete Kostenverteilung geringfügig." }
        ]
      },
      {
        id: "ex5",
        prompt: "Vergleichen Sie das Anbauverfahren, das Stufenleiterverfahren und das mathematische Verfahren der innerbetrieblichen Leistungsverrechnung hinsichtlich Genauigkeit und Rechenaufwand. Wann sollte welches Verfahren gewählt werden?",
        solution: [
          { type: "list", items: [
            "Anbauverfahren: geringster Rechenaufwand, aber am ungenauesten, da sämtliche Leistungsbeziehungen zwischen den Vorkostenstellen ignoriert werden. Geeignet für eine schnelle, grobe Näherung oder wenn die Vorkostenstellen kaum untereinander liefern.",
            "Stufenleiterverfahren: mittlerer Rechenaufwand. Exakt, wenn keine echten gegenseitigen Verflechtungen vorliegen; bei echten Verflechtungen eine Näherung, die von der gewählten Reihenfolge abhängt, aber i.d.R. deutlich genauer als das Anbauverfahren. In der Praxis der am häufigsten verwendete Kompromiss.",
            "Mathematisches Verfahren: höchster Rechenaufwand (Lösen eines Gleichungssystems), dafür bei jeder Art von Verflechtung - auch bei zyklischen - immer exakt. Sinnvoll, wenn hohe Genauigkeit gefordert ist, viele/starke gegenseitige Verflechtungen bestehen und die Berechnung z. B. per Software erfolgen kann."
          ]}
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Welches Verfahren berücksichtigt Leistungsbeziehungen zwischen den Vorkostenstellen überhaupt nicht?", options: ["Stufenleiterverfahren", "Anbauverfahren", "Mathematisches Verfahren", "Keines der drei Verfahren"], correctIndex: 1, explanation: "Das Anbauverfahren verrechnet jede Vorkostenstelle isoliert nur direkt auf die Endkostenstellen." },
      { id: "q2", question: "Wann liefert das Stufenleiterverfahren exakt dasselbe Ergebnis wie das mathematische Verfahren?", options: ["Immer, unabhängig von den Leistungsbeziehungen", "Wenn es keine echten gegenseitigen Verflechtungen zwischen den Vorkostenstellen gibt", "Nur wenn alle Vorkostenstellen gleich hohe primäre Kosten haben", "Nie"], correctIndex: 1, explanation: "Ohne echte Rückleistungen wird bei geeigneter Reihenfolge keine Leistungsbeziehung vernachlässigt, das Ergebnis ist dann exakt." },
      { id: "q3", question: "Was passiert beim Stufenleiterverfahren mit Rückleistungen an eine bereits abgerechnete Vorkostenstelle?", options: ["Sie werden vernachlässigt", "Sie werden automatisch zum mathematischen Verfahren", "Sie werden doppelt verrechnet", "Sie erhöhen den Verrechnungssatz der bereits abgerechneten Stelle nachträglich"], correctIndex: 0, explanation: "Eine bereits abgerechnete Vorkostenstelle bekommt keine späteren Rückleistungen mehr zugerechnet - das ist die Vereinfachung des Verfahrens." },
      { id: "q4", question: "Warum gibt es beim Stufenleiterverfahren bei echten gegenseitigen Verflechtungen keine eindeutig 'richtige' Reihenfolge?", options: ["Weil das Verfahren nur mit genau zwei Vorkostenstellen funktioniert", "Weil gesetzlich eine alphabetische Reihenfolge vorgeschrieben ist", "Weil die Reihenfolge keinen Einfluss auf das Ergebnis hat", "Weil das Ergebnis je nach Reihenfolge unterschiedlich ausfällt und keine Reihenfolge alle Verflechtungen vollständig abbildet"], correctIndex: 3, explanation: "Bei echten Verflechtungen wird immer eine der beiden Richtungen der Verflechtung vernachlässigt - je nach Reihenfolge eine andere." },
      { id: "q5", question: "Welches Verfahren löst ein simultanes Gleichungssystem, um alle gegenseitigen Verflechtungen exakt zu berücksichtigen?", options: ["Anbauverfahren", "Stufenleiterverfahren", "Keines", "Mathematisches Verfahren"], correctIndex: 3, explanation: "Das mathematische (Gleichungs-)Verfahren berücksichtigt alle Verflechtungen simultan und liefert dadurch immer das exakte Ergebnis." },
      { id: "q6", question: "Warum gilt das Anbauverfahren als am ungenauesten der drei Verfahren?", options: ["Weil es Leistungsbeziehungen zwischen den Vorkostenstellen komplett ignoriert und nur direkt auf Endkostenstellen verrechnet", "Weil es negative Verrechnungssätze erzeugt", "Weil es primäre Gemeinkosten falsch berechnet", "Weil es nur für Dienstleistungsunternehmen anwendbar ist"], correctIndex: 0, explanation: "Da sämtliche innerbetrieblichen Lieferungen zwischen den Vorkostenstellen ignoriert werden, ist die Verteilung am wenigsten verursachungsgerecht." },
      { id: "q7", question: "Im Beispiel mit der Energiezentrale (100.000 € primäre Kosten, 1.000 kWh Gesamtabgabe): Wie hoch ist ihr Verrechnungssatz?", options: ["10 €/kWh", "0,1 €/kWh", "100 €/kWh", "1.000 €/kWh"], correctIndex: 2, explanation: "100.000 € / 1.000 kWh = 100 €/kWh." },
      { id: "q8", question: "Nach welchem Kriterium sollte man beim Stufenleiterverfahren die Reihenfolge der Vorkostenstellen festlegen, wenn echte Verflechtungen vorliegen?", options: ["Immer nach der Höhe der primären Kosten", "Nach dem Alphabet der Kostenstellennamen", "So, dass die vernachlässigte Rückleistung möglichst gering ausfällt", "Zufällig, da die Reihenfolge keinen Einfluss hat"], correctIndex: 2, explanation: "Ziel ist es, den durch die Vernachlässigung entstehenden Fehler möglichst klein zu halten." },
      { id: "q9", question: "Wie verhält sich das Stufenleiterverfahren im Vergleich zum Anbauverfahren hinsichtlich der Genauigkeit, wenn echte Verflechtungen vorliegen?", options: ["Es ist ungenauer, da es komplizierter ist", "Beide sind exakt gleich genau", "Das Stufenleiterverfahren ist nur bei genau zwei Kostenstellen anwendbar", "Es ist i.d.R. genauer, weil es zumindest einen Teil der Verflechtungen berücksichtigt"], correctIndex: 3, explanation: "Das Stufenleiterverfahren berücksichtigt zumindest einen Teil der Leistungsbeziehungen und ist daher meist genauer als das Anbauverfahren." },
      { id: "q10", question: "Liefern sich Heizwerk und Kantine gegenseitig Leistungen (echte Verflechtung), was gilt dann für das Ergebnis des Stufenleiterverfahrens?", options: ["Es entspricht automatisch dem mathematischen Verfahren", "Es ist immer exakt, unabhängig von der Reihenfolge", "Es bleibt bei jeder Reihenfolge nur eine Näherung, da eine Richtung der gegenseitigen Verflechtung stets vernachlässigt wird", "Es ist nur bei genau gleich hohen primären Kosten beider Stellen exakt"], correctIndex: 2, explanation: "Bei echter gegenseitiger Verflechtung kann das Stufenleiterverfahren immer nur eine Richtung der Lieferung berücksichtigen - eine wird je nach Reihenfolge vernachlässigt." }
    ]
  }
];
