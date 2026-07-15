const FINV_CHAPTER10_TOPICS = [
  {
    id: "finv-rentenbarwert-endwert",
    chapter: 10,
    order: 1,
    title: "Rentenbarwert- und Rentenendwertfaktoren",
    icon: "🧾",
    summary: "Wie sich Bar- und Endwert einer Rente (regelmäßig gleichbleibende Zahlung) vor- und nachschüssig berechnen lassen, um Berechnungen bei gleichbleibenden Zahlungen zu vereinfachen.",
    explanation: [
      { type: "p", text: "Eine Rente ist eine regelmäßig wiederkehrende Zahlung gleicher Höhe R (z. B. eine jährliche Sparrate, eine Kreditrate oder eine Auszahlung). Renten- und Annuitätenformeln vereinfachen die Barwert-/Endwertrechnung erheblich, wenn Zahlungen über mehrere Jahre in gleicher Höhe erfolgen, statt jede Zahlung einzeln ab-/aufzinsen zu müssen." },
      { type: "p", text: "Man unterscheidet vorschüssige Rente (Zahlung jeweils am Anfang der Periode) und nachschüssige Rente (Zahlung jeweils am Ende der Periode). Für beide existieren jeweils ein Rentenbarwert- und ein Rentenendwertfaktor:" },
      { type: "formula", tex: "\\text{vorschüssig:} \\quad R_0^{vor} = R \\cdot \\dfrac{(1+i)^n - 1}{(1+i)^{n-1} \\cdot i}, \\qquad R_n^{vor} = R \\cdot (1+i) \\cdot \\dfrac{(1+i)^n - 1}{i}" },
      { type: "formula", tex: "\\text{nachschüssig:} \\quad R_0^{nach} = R \\cdot \\dfrac{(1+i)^n - 1}{(1+i)^n \\cdot i}, \\qquad R_n^{nach} = R \\cdot \\dfrac{(1+i)^n - 1}{i}" },
      { type: "p", text: "Dabei ist R die konstante Rate, i der Periodenzins und n die Anzahl der Zahlungen (Perioden). Da vorschüssige Zahlungen jeweils eine Periode länger verzinst werden, sind Rentenbarwert und Rentenendwert bei vorschüssiger Zahlung stets etwas höher als bei nachschüssiger Zahlung derselben Rate." },
      { type: "p", text: "Der Annuitätenfaktor ist der Kehrwert des nachschüssigen Rentenbarwertfaktors und wandelt einen Barwert in eine äquivalente Reihe gleichbleibender (nachschüssiger) Jahreszahlungen um — er wird in Kapitel 10, Thema 3 (Annuitätenmethode) genauer behandelt." }
    ],
    exercises: [
      {
        id: "finv-rentenbarwert-endwert-e1",
        prompt: "Eine nachschüssige Rente von 5.000 € wird 10 Jahre lang bei 6 % Zins gezahlt. Berechnen Sie den Rentenendwert R_n^nach.",
        solution: [{ type: "p", text: "R_n^nach = R·((1+i)^n − 1)/i = 5.000·((1,06)^10 − 1)/0,06 = 5.000·(1,79085 − 1)/0,06 = 5.000·0,79085/0,06 = 5.000·13,1808 ≈ 65.904 €." }]
      },
      {
        id: "finv-rentenbarwert-endwert-e2",
        prompt: "Berechnen Sie für dieselbe Rente (5.000 €, 10 Jahre, 6 %) den nachschüssigen Rentenbarwert R_0^nach.",
        solution: [{ type: "p", text: "R_0^nach = R·((1+i)^n − 1)/((1+i)^n·i) = 5.000·((1,06)^10−1)/((1,06)^10·0,06) = 5.000·0,79085/(1,79085·0,06) = 5.000·0,79085/0,107451 ≈ 5.000·7,3601 ≈ 36.801 €." }]
      },
      {
        id: "finv-rentenbarwert-endwert-e3",
        prompt: "Wie hoch wäre der Rentenendwert aus Aufgabe 1, wenn die Zahlungen stattdessen vorschüssig erfolgen würden?",
        solution: [{ type: "p", text: "R_n^vor = R·(1+i)·((1+i)^n−1)/i = 5.000·1,06·13,1808 ≈ 5.000·13,9716 ≈ 69.858 €. Der vorschüssige Endwert ist um den Faktor (1+i) höher als der nachschüssige (65.904 € × 1,06 ≈ 69.858 €), weil jede Rate eine Periode länger verzinst wird." }]
      },
      {
        id: "finv-rentenbarwert-endwert-e4",
        prompt: "Ein Sparer zahlt 10 Jahre lang jeweils zu Jahresbeginn (vorschüssig) 2.000 € ein bei 4 % Zins. Berechnen Sie den vorschüssigen Rentenendwert.",
        solution: [{ type: "p", text: "R_n^vor = R·(1+i)·((1+i)^n−1)/i = 2.000·1,04·((1,04)^10−1)/0,04 = 2.000·1,04·(1,48024−1)/0,04 = 2.000·1,04·0,48024/0,04 = 2.000·1,04·12,006 ≈ 2.000·12,4862 ≈ 24.972 €." }]
      },
      {
        id: "finv-rentenbarwert-endwert-e5",
        prompt: "Erklären Sie, warum der vorschüssige Rentenbarwertfaktor stets größer ist als der nachschüssige Rentenbarwertfaktor bei sonst gleichen Parametern.",
        solution: [{ type: "p", text: "Bei einer vorschüssigen Rente erfolgt jede einzelne Zahlung eine Periode früher als bei einer nachschüssigen Rente (am Anfang statt am Ende der jeweiligen Periode). Da Zahlungen, die früher erfolgen, aus Sicht des heutigen Zeitpunkts (t=0) einen höheren Barwert haben (sie müssen über einen kürzeren Zeitraum abgezinst werden), ist auch der Gesamtbarwert einer vorschüssigen Rentenreihe systematisch höher als der einer nachschüssigen Reihe mit identischer Rate, identischem Zins und identischer Anzahl an Zahlungen. Formal unterscheiden sich die beiden Barwertfaktoren exakt um den Faktor (1+i)." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Was ist eine Rente im finanzmathematischen Sinn?", options: ["Eine einmalige, nicht wiederkehrende Zahlung", "Eine regelmäßig wiederkehrende Zahlung gleicher Höhe", "Ausschließlich eine staatliche Altersrente", "Eine Zahlung, deren Höhe sich stets unterscheidet"], correctIndex: 1, explanation: "Im finanzmathematischen Sinn bezeichnet eine Rente eine Reihe gleichbleibender, regelmäßiger Zahlungen wie z. B. eine Sparrate oder Kreditrate — nicht speziell die gesetzliche Altersrente." },
      { id: "q2", question: "Was unterscheidet eine vorschüssige von einer nachschüssigen Rente?", options: ["Nachschüssige Renten haben immer höhere Beträge", "Vorschüssig gilt nur für Kredite, nachschüssig nur für Sparpläne", "Es gibt keinen Unterschied", "Vorschüssig = Zahlung am Anfang der Periode, nachschüssig = am Ende"], correctIndex: 3, explanation: "Vorschüssig bedeutet Zahlung zu Periodenbeginn, nachschüssig zu Periodenende — der Zahlungszeitpunkt innerhalb der Periode bestimmt, wie lange die jeweilige Rate verzinst wird, nicht die Art des Vertrags (Kredit oder Sparplan)." },
      { id: "q3", question: "Ist der Rentenendwert bei vorschüssiger oder nachschüssiger Zahlung höher (bei sonst gleichen Parametern)?", options: ["Bei vorschüssiger Zahlung", "Bei nachschüssiger Zahlung", "Beide sind immer identisch", "Das hängt nicht von der Zahlungsweise ab"], correctIndex: 0, explanation: "Vorschüssige Zahlungen werden jeweils eine Periode länger verzinst als nachschüssige, daher ist ihr Endwert stets höher." },
      { id: "q4", question: "Um welchen Faktor unterscheiden sich vorschüssiger und nachschüssiger Rentenendwertfaktor?", options: ["Sie unterscheiden sich nicht", "Um den Faktor n", "Um den Faktor i²", "Um den Faktor (1+i)"], correctIndex: 3, explanation: "R_n^vor = (1+i) · R_n^nach — der vorschüssige Faktor ist exakt das (1+i)-fache des nachschüssigen, weil jede Rate eine Periode länger verzinst wird." },
      { id: "q5", question: "Was ist der Annuitätenfaktor?", options: ["Das Produkt aus Zinssatz und Laufzeit der Rente", "Der Kehrwert des nachschüssigen Rentenbarwertfaktors", "Ein anderer Name für den Kalkulationszinssatz", "Ein rein statisches Investitionsrechenverfahren ohne Zinsbezug"], correctIndex: 1, explanation: "Der Annuitätenfaktor ist definiert als 1 geteilt durch den nachschüssigen Rentenbarwertfaktor und wandelt so einen Barwert in eine äquivalente Reihe gleichbleibender Jahreszahlungen um." },
      { id: "q6", question: "Eine nachschüssige Rente von 1.000 €/Jahr über 5 Jahre bei 5 % — welche Formel berechnet den Rentenendwert?", options: ["R_n = R·((1+i)^n−1)/i", "R_n = R·(1+i)^n", "R_n = R·n·i", "R_n = R/(1+i)^n"], correctIndex: 0, explanation: "Die nachschüssige Rentenendwertformel R_n = R·((1+i)^n−1)/i summiert die aufgezinsten Werte aller Einzelraten — die anderen Formeln berechnen stattdessen z. B. den Endwert einer Einmalzahlung oder eine unverzinste Summe." },
      { id: "q7", question: "Warum werden Renten-/Annuitätenformeln in der Praxis häufig verwendet, statt jede Zahlung einzeln ab-/aufzinsen?", options: ["Weil eine Rente definitionsgemäß immer nur eine Zahlung umfasst", "Weil die Verwendung von Rentenformeln gesetzlich vorgeschrieben ist", "Weil einzelne Ab-/Aufzinsung mathematisch grundsätzlich falsch wäre", "Weil sie die Berechnung bei gleichbleibenden Zahlungen erheblich vereinfachen"], correctIndex: 3, explanation: "Rentenformeln fassen die geometrische Reihe vieler Einzelbarwerte in einer geschlossenen Formel zusammen und ersparen so den Aufwand, jede einzelne Zahlung separat ab- oder aufzinsen zu müssen." },
      { id: "q8", question: "Wie verändert sich der Rentenbarwert, wenn der Zinssatz steigt (bei sonst gleichen Parametern)?", options: ["Er steigt", "Er sinkt", "Er bleibt exakt gleich", "Das hängt nicht vom Zins ab"], correctIndex: 1, explanation: "Höhere Zinsen führen zu stärkerer Abzinsung der künftigen Raten, wodurch der Rentenbarwert sinkt." },
      { id: "q9", question: "Wie verändert sich der Rentenendwert, wenn der Zinssatz steigt (bei sonst gleichen Parametern)?", options: ["Er sinkt", "Er bleibt exakt gleich", "Er steigt", "Er wird immer negativ"], correctIndex: 2, explanation: "Höhere Zinsen führen zu stärkerer Aufzinsung der einzelnen Raten, wodurch der Rentenendwert steigt." },
      { id: "q10", question: "Was passiert mit dem Rentenbarwert, wenn die Anzahl der Zahlungen n gegen unendlich geht (ewige Rente, nachschüssig)?", options: ["Er wird unendlich groß", "Er wird null", "Er konvergiert gegen R/i", "Er kann nicht berechnet werden"], correctIndex: 2, explanation: "Für n→∞ konvergiert der nachschüssige Rentenbarwertfaktor gegen 1/i, sodass sich der Barwert der ewigen Rente auf R₀ → R/i vereinfacht." }
    ]
  },
  {
    id: "finv-ratenkredit-annuitaetenkredit",
    chapter: 10,
    order: 2,
    title: "Ratenkredit vs. Annuitätenkredit",
    icon: "🏦",
    summary: "Wie sich Ratenkredit (konstante Tilgung) und Annuitätenkredit (konstante Gesamtzahlung) in ihrem Zins-/Tilgungsverlauf unterscheiden.",
    explanation: [
      { type: "p", text: "Bei einem Ratenkredit erfolgt die Tilgung in gleichen (konstanten) Raten; die Zinsen kommen zusätzlich hinzu und werden separat berechnet. Da die Zinsen auf die jeweils noch verbleibende (sinkende) Restschuld berechnet werden, sinken die Zinszahlungen mit der Zeit — und damit sinkt auch die Gesamtzahlung (Tilgung plus Zinsen) von Jahr zu Jahr." },
      { type: "p", text: "Bei einem Annuitätenkredit erfolgen Tilgung und Zinsen zusammen in identischen, gleichbleibenden Gesamtzahlungen (Annuitäten) R über die gesamte Kreditlaufzeit. Damit die Gesamtzahlung konstant bleibt, obwohl die Restschuld (und damit der Zinsanteil) sinkt, muss der Tilgungsanteil innerhalb der Annuität von Jahr zu Jahr steigen — die Zinsen sinken mit der Zeit, die Tilgung steigt entsprechend." },
      { type: "list", items: [
        "Ratenkredit: konstante Tilgung, sinkende Zinsen → sinkende Gesamtzahlung über die Zeit",
        "Annuitätenkredit: konstante Gesamtzahlung (Annuität), sinkende Zinsen → steigender Tilgungsanteil über die Zeit"
      ]},
      { type: "p", text: "Bei beiden Kreditarten sinkt die Restschuld über die Laufzeit auf null, und beide werden häufig mithilfe eines Zins- und Tilgungsplans dargestellt, in dem für jedes Jahr Kreditsumme (Restschuld), Zins, Tilgung und Zahlung tabellarisch aufgeführt werden." },
      { type: "p", text: "Um einen Annuitätenkredit zu berechnen, rechnet man die Kreditsumme mithilfe des Annuitätenfaktors in eine jährlich nachschüssig zu zahlende Rente R um:" },
      { type: "formula", tex: "R = R_0^{nach} \\cdot \\dfrac{(1+i)^n \\cdot i}{(1+i)^n - 1} \\quad (\\text{Annuitätenfaktor})" }
    ],
    exercises: [
      {
        id: "finv-ratenkredit-annuitaetenkredit-e1",
        prompt: "Ein Ratenkredit über 70.000 € wird über 5 Jahre bei 8 % Zins in gleichen Tilgungsraten getilgt. Wie hoch ist die jährliche Tilgungsrate, und wie hoch sind die Zinsen im 1. Jahr?",
        solution: [{ type: "p", text: "Jährliche Tilgungsrate = 70.000/5 = 14.000 €. Zinsen im 1. Jahr = 8 % von 70.000 € = 5.600 €. Gesamtzahlung im 1. Jahr = 14.000 + 5.600 = 19.600 €." }]
      },
      {
        id: "finv-ratenkredit-annuitaetenkredit-e2",
        prompt: "Wie hoch sind für den Ratenkredit aus Aufgabe 1 die Zinsen im 2. Jahr (nach Tilgung von 14.000 € im 1. Jahr)?",
        solution: [{ type: "p", text: "Restschuld nach Jahr 1 = 70.000 − 14.000 = 56.000 €. Zinsen Jahr 2 = 8 % von 56.000 € = 4.480 €. Gesamtzahlung Jahr 2 = 14.000 + 4.480 = 18.480 € — niedriger als im 1. Jahr (19.600 €), da die Zinsen auf die sinkende Restschuld berechnet werden." }]
      },
      {
        id: "finv-ratenkredit-annuitaetenkredit-e3",
        prompt: "Ein Annuitätenkredit über 70.000 € wird über 5 Jahre bei 8 % Zins mit einer konstanten jährlichen Annuität von 17.534,95 € (inkl. Tilgung und Zinsen) getilgt. Wie hoch sind die Zinsen im 1. Jahr, und wie hoch ist damit der Tilgungsanteil?",
        solution: [{ type: "p", text: "Zinsen Jahr 1 = 8 % von 70.000 € = 5.600 €. Tilgungsanteil Jahr 1 = Annuität − Zinsen = 17.534,95 − 5.600 = 11.934,95 €. Die Restschuld sinkt damit auf 70.000 − 11.934,95 = 58.065,05 €." }]
      },
      {
        id: "finv-ratenkredit-annuitaetenkredit-e4",
        prompt: "Wie verändert sich beim Annuitätenkredit aus Aufgabe 3 der Tilgungsanteil im 2. Jahr im Vergleich zum 1. Jahr, obwohl die Gesamtzahlung konstant bleibt?",
        solution: [{ type: "p", text: "Zinsen Jahr 2 = 8 % von 58.065,05 € ≈ 4.645,20 €. Tilgungsanteil Jahr 2 = 17.534,95 − 4.645,20 ≈ 12.889,75 €. Der Tilgungsanteil steigt also von Jahr 1 zu Jahr 2 (von 11.934,95 € auf 12.889,75 €), weil die Restschuld und damit der Zinsanteil sinkt, während die Gesamtzahlung (Annuität) konstant bleibt — der frei werdende Anteil fließt zusätzlich in die Tilgung." }]
      },
      {
        id: "finv-ratenkredit-annuitaetenkredit-e5",
        prompt: "Ein Kreditnehmer bevorzugt eine möglichst konstante, gut planbare monatliche/jährliche Belastung. Welche Kreditart ist dafür besser geeignet, und warum?",
        solution: [{ type: "p", text: "Der Annuitätenkredit ist besser geeignet, da die Gesamtzahlung (Annuität, bestehend aus Zins- und Tilgungsanteil) über die gesamte Laufzeit konstant bleibt. Beim Ratenkredit ist zwar die Tilgungsrate konstant, aber die Gesamtzahlung sinkt im Zeitverlauf (weil die Zinsen auf die sinkende Restschuld fallen) — die Belastung ist zu Beginn der Laufzeit am höchsten, was die Planbarkeit für den Kreditnehmer im Vergleich zum Annuitätenkredit erschwert." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Was ist beim Ratenkredit konstant?", options: ["Die Tilgungsrate", "Der Zinsanteil", "Die Gesamtzahlung", "Die Restschuld"], correctIndex: 0, explanation: "Beim Ratenkredit bleibt die Tilgungsrate über die gesamte Laufzeit konstant, während Zinsanteil und Gesamtzahlung mit sinkender Restschuld ebenfalls sinken." },
      { id: "q2", question: "Was ist beim Annuitätenkredit konstant?", options: ["Bei dieser Kreditart bleibt überhaupt nichts konstant", "Die Gesamtzahlung (Annuität aus Zins und Tilgung)", "Ausschließlich der reine Zinsanteil der Zahlung", "Ausschließlich die reine Tilgungsrate der Zahlung"], correctIndex: 1, explanation: "Beim Annuitätenkredit bleibt die Gesamtzahlung (Annuität) über die gesamte Laufzeit konstant — im Gegensatz zum Ratenkredit, bei dem stattdessen die Tilgungsrate konstant ist und die Gesamtzahlung sinkt." },
      { id: "q3", question: "Wie verändert sich die Gesamtzahlung beim Ratenkredit über die Laufzeit?", options: ["Sie sinkt kontinuierlich", "Sie schwankt zufällig", "Sie steigt kontinuierlich", "Sie bleibt exakt konstant"], correctIndex: 0, explanation: "Da die Zinsen auf die von Jahr zu Jahr sinkende Restschuld berechnet werden, sinkt bei konstanter Tilgungsrate auch die Gesamtzahlung (Zins plus Tilgung) über die Laufzeit." },
      { id: "q4", question: "Wie verändert sich der Tilgungsanteil beim Annuitätenkredit über die Laufzeit?", options: ["Er bleibt exakt konstant", "Er sinkt kontinuierlich", "Er ist immer null", "Er steigt kontinuierlich"], correctIndex: 3, explanation: "Da die Gesamtzahlung (Annuität) konstant bleibt, aber der Zinsanteil mit sinkender Restschuld abnimmt, muss der Tilgungsanteil innerhalb der Annuität entsprechend kontinuierlich steigen." },
      { id: "q5", question: "Wie verändern sich die Zinsen bei BEIDEN Kreditarten über die Laufzeit?", options: ["Sie sinken bei beiden Kreditarten, weil die Restschuld sinkt", "Sie sind bei beiden Kreditarten von Anfang an null", "Sie bleiben bei beiden Kreditarten konstant", "Sie steigen bei beiden Kreditarten über die Laufzeit"], correctIndex: 0, explanation: "Bei beiden Kreditarten sinkt die Restschuld über die Zeit, da laufend getilgt wird — und da sich die Zinsen stets auf die jeweils noch verbleibende Restschuld beziehen, sinken sie bei Raten- wie Annuitätenkredit gleichermaßen." },
      { id: "q6", question: "Ein Kredit über 50.000 € wird über 5 Jahre als Ratenkredit getilgt. Wie hoch ist die jährliche Tilgungsrate?", options: ["5.000 €", "50.000 €", "10.000 €", "25.000 €"], correctIndex: 2, explanation: "Beim Ratenkredit wird die Kreditsumme gleichmäßig auf die Laufzeit verteilt: Tilgungsrate = Kreditsumme/Laufzeit = 50.000/5 = 10.000 € pro Jahr, unabhängig von den zusätzlich anfallenden, sinkenden Zinsen." },
      { id: "q7", question: "Womit lässt sich die konstante Annuität eines Annuitätenkredits berechnen?", options: ["Ausschließlich durch direkte Multiplikation mit dem Zinssatz", "Mit dem Annuitätenfaktor der Rentenrechnung", "Es existiert dafür keine geschlossene Formel", "Durch einfache Division der Kreditsumme durch die Laufzeit"], correctIndex: 1, explanation: "Der Annuitätenfaktor (Kehrwert des nachschüssigen Rentenbarwertfaktors) rechnet die Kreditsumme R₀ in eine gleichbleibende Jahreszahlung R = R₀ · Annuitätenfaktor um, die die Kreditsumme über die Laufzeit exakt tilgt." },
      { id: "q8", question: "Welche Kreditart ist für den Kreditnehmer hinsichtlich der Planbarkeit der laufenden Belastung typischerweise vorteilhafter?", options: ["Beide Kreditarten sind gleich gut planbar", "Keine der beiden Kreditarten ist planbar", "Der Ratenkredit, wegen der sinkenden Gesamtzahlung", "Der Annuitätenkredit, wegen konstanter Gesamtzahlung"], correctIndex: 3, explanation: "Da die Gesamtzahlung beim Annuitätenkredit über die gesamte Laufzeit konstant bleibt, ist die laufende Belastung besser planbar als beim Ratenkredit, bei dem die Zahlung zu Beginn am höchsten ist und danach sinkt." },
      { id: "q9", question: "Was zeigt ein Zins- und Tilgungsplan?", options: ["Ausschließlich die Restschuld am Ende der gesamten Laufzeit", "Für jedes Jahr die Aufteilung von Restschuld, Zins, Tilgung und Zahlung", "Ausschließlich den Gesamtzinsbetrag über die gesamte Laufzeit", "Ausschließlich die Höhe der allerersten Rate"], correctIndex: 1, explanation: "Ein Zins- und Tilgungsplan schlüsselt tabellarisch Jahr für Jahr die Restschuld sowie den jeweiligen Zins- und Tilgungsanteil und die daraus resultierende Gesamtzahlung auf." },
      { id: "q10", question: "Was ist beiden Kreditarten (Raten- und Annuitätenkredit) am Ende der Laufzeit gemeinsam?", options: ["Es gibt keine Gemeinsamkeit", "Der Gesamtzinsbetrag ist bei beiden identisch", "Die Restschuld ist bei beiden null", "Die Tilgungsrate ist bei beiden identisch hoch"], correctIndex: 2, explanation: "Bei planmäßiger Rückzahlung sinkt die Restschuld bei beiden Kreditarten bis zum Laufzeitende auf null — der Gesamtzinsbetrag unterscheidet sich dabei allerdings, da beim Ratenkredit tendenziell schneller getilgt wird." }
    ]
  },
  {
    id: "finv-annuitaetenmethode",
    chapter: 10,
    order: 3,
    title: "Die Annuitätenmethode",
    icon: "🔄",
    summary: "Wie der Kapitalwert eines Investitionsprojekts in gleichbleibende Jahresraten umgerechnet wird, um zu ermitteln, welche jährlichen Entnahmen ein Projekt finanzieren kann.",
    explanation: [
      { type: "p", text: "Die Annuitätenmethode rechnet den Kapitalwert (oder umgekehrt eine Investitionssumme) eines Projekts in eine äquivalente Reihe gleichbleibender Jahreszahlungen (Annuitäten) um. Sie beantwortet typischerweise zwei Arten von Fragen:" },
      { type: "list", items: [
        "Welche gleichbleibenden Einzahlungen braucht man, um eine gegebene Investitionssumme auszugleichen? → Man rechnet die Investitionssumme mithilfe des Annuitätenfaktors in eine nachschüssige Rente um.",
        "Welche gleichbleibenden Entnahmen kann ein Investitionsprojekt (mit positivem Kapitalwert) am Jahresende finanzieren? → Man rechnet den Kapitalwert des Projekts in eine nachschüssige Rente um."
      ]},
      { type: "p", text: "Formal wird dazu derselbe Annuitätenfaktor verwendet wie beim Annuitätenkredit (Kapitel 10, Thema 2):" },
      { type: "formula", tex: "R = K_0 \\cdot \\dfrac{(1+i)^n \\cdot i}{(1+i)^n - 1}" },
      { type: "p", text: "Diese Rente R ist wirtschaftlich so zu interpretieren: Man kann diesen Betrag jedes Jahr aus dem Projekt entnehmen (\"verbrauchen\"), ohne dass sich dadurch — bei Verzinsung des jeweils noch gebundenen Kapitals zum Kalkulationszinssatz — die Rückzahlungsfähigkeit des ursprünglich gebundenen Kapitals verändert. Am Ende der Laufzeit ist das gebundene Kapital dann exakt aufgebraucht." },
      { type: "p", text: "Die Annuitätenmethode ist besonders nützlich, wenn Investitionsprojekte laufende, gleichbleibende Zahlungen (außer der Anfangsinvestition und einer eventuellen Liquidation) generieren — dann lässt sich der Kapitalwert direkt für laufende Zahlungen in identischer Höhe berechnen, ohne jede einzelne Periode separat abzinsen zu müssen." }
    ],
    exercises: [
      {
        id: "finv-annuitaetenmethode-e1",
        prompt: "Ein Investitionsprojekt hat einen Kapitalwert von 30.000 € bei einer Laufzeit von 5 Jahren und einem Kalkulationszinssatz von 8 %. Berechnen Sie mithilfe des Annuitätenfaktors die jährliche Annuität (nachschüssige Entnahme).",
        solution: [{ type: "p", text: "Annuitätenfaktor = (1+i)^n·i / ((1+i)^n−1) = (1,08)^5·0,08 / ((1,08)^5−1) = 1,46933·0,08/(1,46933−1) = 0,117546/0,46933 ≈ 0,25046. R = K₀ · Annuitätenfaktor = 30.000 · 0,25046 ≈ 7.513,80 € pro Jahr." }]
      },
      {
        id: "finv-annuitaetenmethode-e2",
        prompt: "Ein Sparer möchte in 8 Jahren eine Investitionssumme von 80.000 € ausgleichen. Bei welcher jährlichen (nachschüssigen) Rate müsste er bei 5 % Zins sparen, um genau diesen Betrag als Barwert zu erreichen?",
        solution: [{ type: "p", text: "Annuitätenfaktor = (1,05)^8·0,05/((1,05)^8−1) = 1,47746·0,05/(1,47746−1) = 0,073873/0,47746 ≈ 0,15472. R = 80.000 · 0,15472 ≈ 12.377,60 € pro Jahr." }]
      },
      {
        id: "finv-annuitaetenmethode-e3",
        prompt: "Welche gleichbleibenden jährlichen Entnahmen kann ein Investitionsprojekt mit einem Kapitalwert von 100.000 € über 10 Jahre bei 6 % Kalkulationszins finanzieren?",
        solution: [{ type: "p", text: "Annuitätenfaktor = (1,06)^10·0,06/((1,06)^10−1) = 1,79085·0,06/(1,79085−1) = 0,107451/0,79085 ≈ 0,13587. R = 100.000 · 0,13587 ≈ 13.587 € pro Jahr über 10 Jahre." }]
      },
      {
        id: "finv-annuitaetenmethode-e4",
        prompt: "Was passiert wirtschaftlich, wenn man aus einem Projekt mit Kapitalwert 100.000 € (Beispiel aus Aufgabe 3) über 10 Jahre jeweils GENAU die berechnete Annuität von 13.587 € entnimmt?",
        solution: [{ type: "p", text: "Bei jährlicher Entnahme von exakt 13.587 € (nachschüssig) ist das gebundene Kapital nach genau 10 Jahren vollständig aufgebraucht — die Entnahmen entsprechen exakt der Annuität, die den anfänglichen Kapitalwert bei 6 % Verzinsung über 10 Jahre gleichmäßig 'abbaut'. Würde man mehr als 13.587 € pro Jahr entnehmen, wäre das Kapital schon vor Ablauf der 10 Jahre aufgebraucht; würde man weniger entnehmen, bliebe am Ende noch Kapital übrig." }]
      },
      {
        id: "finv-annuitaetenmethode-e5",
        prompt: "Erläutern Sie den konzeptionellen Zusammenhang zwischen der Annuitätenmethode und dem Annuitätenkredit.",
        solution: [{ type: "p", text: "Beide nutzen denselben mathematischen Mechanismus (den Annuitätenfaktor), um einen Barwert (Kreditsumme bzw. Kapitalwert) in eine Reihe gleichbleibender Jahreszahlungen umzurechnen. Beim Annuitätenkredit wird die Kreditsumme so in eine konstante jährliche Rückzahlung (Annuität aus Zins und Tilgung) umgewandelt, dass die Schuld nach n Jahren exakt getilgt ist. Bei der Annuitätenmethode wird der Kapitalwert eines Investitionsprojekts (oder umgekehrt eine benötigte Investitionssumme) in eine konstante jährliche Entnahme bzw. Sparrate umgerechnet, die das zugrunde liegende Kapital über die Laufzeit gleichmäßig 'verzehrt' bzw. 'aufbaut'. Es handelt sich also um dieselbe Rechenlogik, nur mit unterschiedlicher wirtschaftlicher Interpretation (Kredittilgung vs. Investitionsbeurteilung)." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Was rechnet die Annuitätenmethode um?", options: ["Steuersätze in entsprechende Nettobeträge", "Fremdwährungsbeträge in Euro-Beträge", "Ausschließlich Aktienkurse in Dividendenzahlungen", "Einen Barwert in eine Reihe gleichbleibender Jahreszahlungen"], correctIndex: 3, explanation: "Die Annuitätenmethode wandelt einen Barwert — meist den Kapitalwert eines Investitionsprojekts oder eine Investitionssumme — in eine äquivalente, über die Laufzeit konstante Zahlungsreihe (Annuität) um." },
      { id: "q2", question: "Mit welcher Kennzahl wird der Kapitalwert in eine Annuität umgerechnet?", options: ["Mit dem sogenannten Leverage-Faktor", "Mit dem Annuitätenfaktor der Rentenrechnung", "Ausschließlich mit dem WACC des Unternehmens", "Mit dem nachschüssigen Rentenbarwertfaktor selbst"], correctIndex: 1, explanation: "R = K₀ · Annuitätenfaktor rechnet den Kapitalwert in eine gleichbleibende Jahreszahlung um — der Annuitätenfaktor ist dabei genau der Kehrwert des nachschüssigen Rentenbarwertfaktors, nicht dieser selbst." },
      { id: "q3", question: "Welche Frage beantwortet die Annuitätenmethode typischerweise?", options: ["Wie viele Mitarbeiter für ein Projekt benötigt werden", "Wie hoch die Marktkapitalisierung eines Unternehmens ist", "Wie hoch die Umsatzsteuer eines Projekts ausfällt", "Welche gleichbleibenden Entnahmen ein Projekt jährlich finanzieren kann"], correctIndex: 3, explanation: "Ein typischer Anwendungsfall der Annuitätenmethode ist die Ermittlung der jährlich gleichbleibend entnehmbaren Beträge aus einem Projekt mit positivem Kapitalwert, ohne dass das gebundene Kapital vor Laufzeitende aufgebraucht wird." },
      { id: "q4", question: "Was passiert mit dem gebundenen Kapital, wenn man exakt die berechnete Annuität über die gesamte Laufzeit entnimmt?", options: ["Es ist am Ende der Laufzeit exakt vollständig aufgebraucht", "Es verdoppelt sich stattdessen am Ende der Laufzeit", "Es wird durch die Entnahme sofort negativ", "Es bleibt über die gesamte Laufzeit unverändert bestehen"], correctIndex: 0, explanation: "Die Annuität ist rechnerisch so bemessen, dass das ursprünglich gebundene Kapital bei exakter jährlicher Entnahme dieses Betrags — unter Verzinsung des jeweiligen Restkapitals — genau am Ende der Laufzeit vollständig verzehrt ist." },
      { id: "q5", question: "Ein Kapitalwert von 50.000 € soll über 5 Jahre bei 10 % Zins in eine Annuität umgerechnet werden. Welcher Faktor wird dafür benötigt?", options: ["Der WACC-Faktor", "Der Leverage-Faktor", "Der nachschüssige Rentenendwertfaktor", "Der Annuitätenfaktor"], correctIndex: 3, explanation: "Zur Umrechnung eines gegebenen Barwerts in eine über die Laufzeit gleichbleibende Zahlungsreihe wird stets der Annuitätenfaktor verwendet, nicht der Rentenendwertfaktor, der stattdessen einen künftigen Endwert liefert." },
      { id: "q6", question: "Was ist der methodische Zusammenhang zwischen Annuitätenmethode und Annuitätenkredit?", options: ["Beide gelten ausschließlich für kurzfristige Finanzierungen", "Beide verwenden denselben Annuitätenfaktor zur Umrechnung eines Barwerts", "Der Annuitätenkredit ist statisch, die Annuitätenmethode rein qualitativ", "Zwischen beiden besteht überhaupt kein methodischer Zusammenhang"], correctIndex: 1, explanation: "Beide nutzen exakt dieselbe mathematische Logik über den Annuitätenfaktor, um einen Barwert (Kreditsumme bzw. Kapitalwert) in eine konstante Zahlungsreihe umzurechnen — nur die wirtschaftliche Interpretation unterscheidet sich (Kredittilgung vs. Investitionsbeurteilung)." },
      { id: "q7", question: "Welche Investitionsanwendung eignet sich besonders für die Annuitätenmethode?", options: ["Ausschließlich Projekte mit negativem Kapitalwert", "Ausschließlich Projekte ganz ohne Anfangsinvestition", "Projekte mit laufenden, gleichbleibenden Zahlungen über die Laufzeit", "Projekte mit stark schwankenden, unregelmäßigen Cashflows"], correctIndex: 2, explanation: "Bei über die Laufzeit gleichbleibenden Zahlungen lässt sich die Rentenrechnung direkt anwenden, ohne jede einzelne Periode separat abzinsen zu müssen — bei stark schwankenden Cashflows entfällt dieser Vorteil." },
      { id: "q8", question: "Wie verändert sich die berechnete Annuität, wenn der Kalkulationszinssatz steigt (bei gleichem Kapitalwert und gleicher Laufzeit)?", options: ["Sie bleibt dabei in jedem Fall exakt konstant", "Sie sinkt bei steigendem Zins in jedem Fall", "Sie steigt tendenziell mit steigendem Zins an", "Sie wird durch einen höheren Zins automatisch negativ"], correctIndex: 2, explanation: "Der Annuitätenfaktor (1+i)^n·i/((1+i)^n−1) wächst mit zunehmendem Zinssatz i, wodurch bei gleichem Kapitalwert K₀ eine höhere Annuität resultiert." },
      { id: "q9", question: "Warum ist die Annuitätenmethode inhaltlich eng mit der Kapitalwertmethode verknüpft?", options: ["Weil sie denselben Kapitalwert nur in eine andere Darstellungsform überführt", "Weil beide Methoden ausschließlich für Fremdkapital anwendbar sind", "Weil die Annuitätenmethode den Kapitalwert vollständig ignoriert", "Weil beide Methoden völlig unabhängige, unverknüpfte Konzepte sind"], correctIndex: 0, explanation: "Die Annuitätenmethode setzt direkt auf dem zuvor berechneten Kapitalwert auf und rechnet ihn lediglich in eine äquivalente, gleichbleibende Zahlungsreihe um — inhaltlich stecken also dieselben Informationen dahinter, nur anders dargestellt." },
      { id: "q10", question: "Welche zwei Größen braucht man mindestens, um mit dem Annuitätenfaktor eine Annuität zu berechnen?", options: ["Ausschließlich die Anfangsinvestition, ganz ohne Zinssatz", "Ausschließlich die Laufzeit des betrachteten Projekts", "Den Barwert sowie Zinssatz und Laufzeit für den Annuitätenfaktor", "Ausschließlich den zugrunde liegenden Zinssatz"], correctIndex: 2, explanation: "Man benötigt den umzurechnenden Barwert selbst sowie Zinssatz i und Laufzeit n, um daraus den Annuitätenfaktor (1+i)^n·i/((1+i)^n−1) zu bestimmen, mit dem der Barwert in die Annuität umgerechnet wird." }
    ]
  }
];
