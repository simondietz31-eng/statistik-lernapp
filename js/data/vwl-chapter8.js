const VWL_CHAPTER8_TOPICS = [
  {
    id: "vwl-verbraucherpreisindex-inflationsrate",
    chapter: 8,
    order: 1,
    title: "Der Verbraucherpreisindex und die Berechnung der Inflationsrate",
    icon: "🛍️",
    summary: "Was Inflation, Deflation und Disinflation bedeuten, wie der Verbraucherpreisindex (VPI) mithilfe eines Warenkorbs berechnet wird, wie sich daraus die Inflationsrate ergibt, und was die Kerninflationsrate misst.",
    explanation: [
      { type: "p", text: "Inflation bezeichnet einen Anstieg des allgemeinen Preisniveaus einer Volkswirtschaft. Die Inflationsrate entspricht der prozentualen Veränderung dieses Preisniveaus gegenüber der Vorperiode. Ist die Veränderung negativ, spricht man von Deflation (sinkendes Preisniveau); sinken hohe, aber weiterhin positive Inflationsraten, bezeichnet man das meist als Disinflation (die Preise steigen also weiterhin, nur langsamer als zuvor)." },
      { type: "p", text: "In einer Volkswirtschaft gibt es viele unterschiedliche Preisniveaus, die vom Statistischen Bundesamt erfasst werden — etwa Erzeugerpreise, Rohstoffpreise, Großhandelspreise, Ein- und Ausfuhrpreise oder Immobilienpreise. Für die Lebenshaltungskosten der privaten Haushalte ist jedoch der Verbraucherpreisindex (VPI) die zentrale Messgröße: Er misst die Preisveränderungen der Güter und Dienstleistungen, die von einem 'typischen' Haushalt konsumiert werden, wird monatlich vom Statistischen Bundesamt berechnet und dient dazu, die Veränderung der Lebenshaltungskosten im Zeitablauf festzustellen." },
      { type: "p", text: "Die Berechnung des VPI folgt vier Schritten: Erstens wird ein Warenkorb festgelegt, der die Güter und Dienstleistungen enthält, die ein typischer Haushalt konsumiert. Zweitens werden für jedes Gut im Warenkorb die Preise zu verschiedenen Zeitpunkten ermittelt (dabei werden in Deutschland monatlich rund 300.000 Einzelpreise erhoben). Drittens wird daraus der Gesamtpreis des Warenkorbs bestimmt. Viertens wird ein Basisjahr festgelegt, für das der VPI auf den Wert 100 gesetzt wird; der VPI aller anderen Jahre wird relativ zu diesem Basiswert berechnet." },
      { type: "p", text: "Der Warenkorb enthält dabei genau jene Produkte, die Konsumenten aktuell häufig kaufen, und wird laufend aktualisiert (unabhängig von der separaten Aktualisierung des sogenannten Wägungsschemas, das festlegt, mit welchem Gewicht die einzelnen Güter in den Gesamtindex eingehen). So wurden beispielsweise Smartphones, Fitness-Tracker oder Espressomaschinen im Zeitverlauf neu in den Warenkorb aufgenommen, während Schreibmaschinen wieder herausgefallen sind, weil sie nicht mehr relevant für den typischen Konsum sind." },
      { type: "p", text: "Aus dem VPI zweier aufeinanderfolgender Jahre lässt sich die Inflationsrate direkt berechnen:" },
      { type: "formula", tex: "\\text{Inflationsrate Jahr 2} = \\dfrac{\\text{VPI Jahr 2} - \\text{VPI Jahr 1}}{\\text{VPI Jahr 1}} \\times 100" },
      { type: "p", text: "Neben der Gesamtinflationsrate wird häufig auch die Kerninflationsrate berichtet: Sie klammert besonders volatile Preiskomponenten wie Energie (Öl, Strom, Gas, Kraftstoffe) und Nahrungsmittel aus, die zusammen etwa 25 % Gewicht im Warenkorb haben, und gibt dadurch einen robusteren Blick auf den zugrunde liegenden, längerfristigen Preistrend, unabhängig von kurzfristigen Schwankungen einzelner Rohstoffmärkte." }
    ],
    exercises: [
      {
        id: "vwl-verbraucherpreisindex-inflationsrate-e1",
        prompt: "Wie bestimmt man die Inflationsrate über den Verbraucherpreisindex? Geben Sie die Berechnungsformel an.",
        solution: [{ type: "p", text: "Die Inflationsrate ergibt sich aus der prozentualen Veränderung des Verbraucherpreisindex gegenüber der Vorperiode: Inflationsrate = (VPI Jahr 2 − VPI Jahr 1) / VPI Jahr 1 × 100." }]
      },
      {
        id: "vwl-verbraucherpreisindex-inflationsrate-e2",
        prompt: "Beschreiben Sie die vier Schritte der VPI-Berechnung.",
        solution: [{ type: "p", text: "Erstens wird ein Warenkorb festgelegt, der die typischen Konsumgüter eines Haushalts enthält. Zweitens werden für jedes Gut im Warenkorb zu verschiedenen Zeitpunkten die Preise ermittelt. Drittens wird daraus der Gesamtpreis des Warenkorbs berechnet. Viertens wird ein Basisjahr ausgewählt, dessen VPI auf 100 gesetzt wird, relativ zu dem der VPI aller anderen Jahre berechnet wird." }]
      },
      {
        id: "vwl-verbraucherpreisindex-inflationsrate-e3",
        prompt: "Was misst die Kerninflationsrate, und warum wird sie zusätzlich zur Gesamtinflationsrate ausgewiesen?",
        solution: [{ type: "p", text: "Die Kerninflationsrate misst die Preisentwicklung ohne die besonders volatilen Komponenten Energie und Nahrungsmittel, die zusammen etwa 25 % Gewicht im Warenkorb haben. Sie wird zusätzlich ausgewiesen, weil kurzfristige Schwankungen bei Energie- und Nahrungsmittelpreisen (z. B. durch geopolitische Ereignisse oder Ernteausfälle) die Gesamtinflationsrate stark verzerren können, während die Kerninflationsrate einen robusteren Blick auf den zugrunde liegenden, längerfristigen Preistrend erlaubt." }]
      },
      {
        id: "vwl-verbraucherpreisindex-inflationsrate-e4",
        prompt: "Warum wird der Warenkorb des Verbraucherpreisindex regelmäßig aktualisiert? Nennen Sie ein Beispiel.",
        solution: [{ type: "p", text: "Der Warenkorb wird aktualisiert, damit er weiterhin widerspiegelt, was Konsumenten tatsächlich aktuell kaufen — nur so bleibt der VPI ein realistisches Maß für die Lebenshaltungskosten eines typischen Haushalts. Beispiel: Smartphones, Fitness-Tracker und Espressomaschinen wurden neu in den Warenkorb aufgenommen, während Schreibmaschinen wieder herausgefallen sind, weil sie im heutigen Konsumverhalten kaum noch eine Rolle spielen." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Was bezeichnet Inflation?", options: ["Einen Rückgang des allgemeinen Preisniveaus", "Einen Anstieg des allgemeinen Preisniveaus einer Volkswirtschaft", "Eine Erhöhung der Zinssätze", "Einen Anstieg der Arbeitslosigkeit"], correctIndex: 1, explanation: "Inflation bezeichnet einen Anstieg des allgemeinen Preisniveaus einer Volkswirtschaft." },
      { id: "q2", question: "Wie nennt man ein negatives Inflationsniveau, also sinkende Preise?", options: ["Disinflation", "Deflation", "Stagflation", "Rezession"], correctIndex: 1, explanation: "Ein negatives Preisniveauwachstum, also sinkende Preise, wird als Deflation bezeichnet." },
      { id: "q3", question: "Was misst der Verbraucherpreisindex (VPI)?", options: ["Die Erzeugerpreise der Industrie", "Die Preisveränderungen der Güter und Dienstleistungen eines typischen Haushalts", "Nur die Immobilienpreise", "Die Zinssätze der Banken"], correctIndex: 1, explanation: "Der VPI misst die Preisveränderungen der Güter und Dienstleistungen, die ein typischer Haushalt konsumiert." },
      { id: "q4", question: "Wie oft wird der VPI in Deutschland berechnet?", options: ["Einmal jährlich", "Monatlich", "Wöchentlich", "Nur alle fünf Jahre"], correctIndex: 1, explanation: "Der Verbraucherpreisindex wird monatlich vom Statistischen Bundesamt berechnet." },
      { id: "q5", question: "Welchen Wert hat der VPI per Definition im gewählten Basisjahr?", options: ["0", "1", "100", "1000"], correctIndex: 2, explanation: "Der VPI wird im Basisjahr auf den Wert 100 gesetzt; alle anderen Jahre werden relativ dazu berechnet." },
      { id: "q6", question: "Wie berechnet sich die Inflationsrate aus dem VPI?", options: ["VPI Jahr 2 minus VPI Jahr 1", "(VPI Jahr 2 − VPI Jahr 1) / VPI Jahr 1 × 100", "VPI Jahr 2 geteilt durch VPI Jahr 1", "VPI Jahr 1 minus VPI Jahr 2"], correctIndex: 1, explanation: "Die Inflationsrate ergibt sich aus der prozentualen Veränderung des VPI: (VPI Jahr 2 − VPI Jahr 1) / VPI Jahr 1 × 100." },
      { id: "q7", question: "Welche Komponenten werden bei der Kerninflationsrate typischerweise ausgeklammert?", options: ["Wohnkosten und Versicherungen", "Energie und Nahrungsmittel", "Bildung und Gesundheit", "Nur Immobilienpreise"], correctIndex: 1, explanation: "Die Kerninflationsrate klammert die besonders volatilen Preiskomponenten Energie und Nahrungsmittel aus." },
      { id: "q8", question: "Warum wird der Warenkorb des VPI laufend aktualisiert?", options: ["Weil das Statistische Bundesamt dazu gesetzlich einmal im Jahrhundert verpflichtet ist", "Damit er weiterhin widerspiegelt, was Konsumenten aktuell tatsächlich kaufen", "Weil ältere Güter automatisch teurer werden", "Weil der VPI sonst nicht mehr existieren würde"], correctIndex: 1, explanation: "Der Warenkorb wird aktualisiert, damit er ein realistisches Bild des aktuellen Konsumverhaltens abbildet." },
      { id: "q9", question: "Welches Beispiel wird in der Vorlesung für ein neu in den Warenkorb aufgenommenes Gut genannt?", options: ["Schreibmaschinen", "Espressomaschinen", "Kutschen", "Schallplatten"], correctIndex: 1, explanation: "Espressomaschinen (ebenso wie Smartphones und Fitness-Tracker) wurden neu in den Warenkorb aufgenommen." },
      { id: "q10", question: "Wie viele Einzelpreise werden laut Vorlesung monatlich für die Berechnung des VPI in Deutschland erhoben?", options: ["Etwa 3.000", "Etwa 30.000", "Etwa 300.000", "Etwa 3 Millionen"], correctIndex: 2, explanation: "Für die Berechnung des VPI werden laut Vorlesung monatlich rund 300.000 Einzelpreise erhoben." }
    ]
  },
  {
    id: "vwl-realer-nominaler-zins-kaufkraft",
    chapter: 8,
    order: 2,
    title: "Kaufkraftvergleiche über die Zeit und der Unterschied zwischen realem und nominalem Zinssatz",
    icon: "🏦",
    summary: "Warum Geldbeträge aus unterschiedlichen Zeitpunkten nicht direkt vergleichbar sind, wie man sie mithilfe des VPI umrechnet, was den realen vom nominalen Zinssatz unterscheidet, und wie die jüngste Inflationsphase nach Corona und dem Ukraine-Krieg einzuordnen ist.",
    explanation: [
      { type: "p", text: "Weil sich das allgemeine Preisniveau über die Zeit verändert, lassen sich Geldbeträge aus unterschiedlichen Zeitpunkten nicht direkt miteinander vergleichen, ohne die zwischenzeitliche Preisniveauentwicklung zu berücksichtigen. Um einen Geldbetrag aus der Vergangenheit in heutige Kaufkraft umzurechnen, skaliert man ihn mit dem Verhältnis der VPI-Werte beider Zeitpunkte:" },
      { type: "formula", tex: "\\text{Betrag}_{\\text{heute}} = \\text{Betrag}_{\\text{damals}} \\times \\dfrac{\\text{Preisniveau heute}}{\\text{Preisniveau damals}}" },
      { type: "p", text: "Ein anschauliches historisches Beispiel: Das Monatsgrundgehalt des damaligen Spitzenverdieners Uwe Seeler betrug 1963 rund 2.500 DM. Umgerechnet auf das heutige Preisniveau (mit einem Umrechnungsfaktor von rund 24,2, weil das Preisniveau von 1963 bis 2025 entsprechend gestiegen ist) entspricht das etwa 60.500 DM bzw. umgerechnet rund 6.439 €. Der Vergleich zeigt eindrücklich, warum absolute Geldbeträge aus verschiedenen Jahrzehnten ohne eine solche Umrechnung wenig aussagekräftig sind — zur Einordnung: Ein VW Käfer kostete 1963 nur rund 4.200 DM, also deutlich weniger als das damalige Monatsgehalt." },
      { type: "p", text: "Aus derselben Logik folgt die wichtige Unterscheidung zwischen nominalem und realem Zinssatz. Der nominale Zinssatz ist der Zinssatz, der üblicherweise ausgewiesen wird, etwa ein Bankzinssatz auf ein Sparkonto. Der reale Zinssatz ist dagegen der um die Inflation bereinigte Zinssatz — er gibt an, wie stark die tatsächliche Kaufkraft eines Vermögens wächst, nicht nur dessen nominaler Geldbetrag." },
      { type: "p", text: "Ein Beispiel verdeutlicht den Unterschied: Bei einem Festgeld mit 2 % Nominalzinssatz wächst ein Bestand von 100 € über ein Jahr auf 102 €. Beträgt die Inflationsrate in diesem Jahr jedoch 6 %, bräuchte man am Jahresende bereits 106 €, um sich dieselbe Gütermenge kaufen zu können wie zu Jahresbeginn. Der tatsächliche Kaufkraftverlust beträgt somit 4 € bzw. 4 %. Der reale Zinssatz ergibt sich damit näherungsweise als nominaler Zinssatz minus Inflationsrate:" },
      { type: "formula", tex: "\\text{realer Zinssatz} \\approx \\text{nominaler Zinssatz} - \\text{Inflationsrate} = 2\\% - 6\\% = -4\\%" },
      { type: "p", text: "Trotz eines positiven Nominalzinses von 2 % verliert das Vermögen in diesem Beispiel also real an Kaufkraft, weil die Inflationsrate den nominalen Ertrag übersteigt." },
      { type: "p", text: "Ein aktuelles Anwendungsbeispiel — rund 100 Jahre nach der deutschen Hyperinflation von 1923 — ist der Inflationsschub, der nach dem Ende der Corona-Pandemie und mit Beginn des Ukraine-Kriegs einsetzte. Mehrere Faktoren wirkten dabei zusammen: Aufgestaute Konsumnachfrage wurde nach den Pandemiejahren ab 2022 wieder wirksam, während die Produktion gleichzeitig durch Lieferengpässe und demografisch bedingte Engpässe am Arbeitsmarkt gehemmt blieb; hinzu kam eine Energieverknappung infolge des Kriegs sowie ein zunächst noch niedriges Zinsniveau, das die Nachfrage zusätzlich stützte. Die Geldpolitik reagierte darauf in der Folge mit deutlichen Zinserhöhungen, um die Inflation wieder unter Kontrolle zu bringen — ein Thema, das in den folgenden Kapiteln zum monetären System und zur Geldpolitik vertieft wird." }
    ],
    exercises: [
      {
        id: "vwl-realer-nominaler-zins-kaufkraft-e1",
        prompt: "Erklären Sie, warum Geldbeträge aus unterschiedlichen Zeitpunkten nicht direkt vergleichbar sind, und wie man sie vergleichbar macht.",
        solution: [{ type: "p", text: "Weil sich das allgemeine Preisniveau über die Zeit verändert (Inflation oder Deflation), hat derselbe Geldbetrag zu unterschiedlichen Zeitpunkten eine unterschiedliche Kaufkraft. Um Beträge vergleichbar zu machen, rechnet man sie mithilfe des Verhältnisses der VPI-Werte beider Zeitpunkte auf das Preisniveau eines gemeinsamen Referenzjahres um." }]
      },
      {
        id: "vwl-realer-nominaler-zins-kaufkraft-e2",
        prompt: "Definieren Sie den Unterschied zwischen nominalem und realem Zinssatz.",
        solution: [{ type: "p", text: "Der nominale Zinssatz ist der üblicherweise ausgewiesene Zinssatz, z. B. ein Bankzinssatz, ohne Berücksichtigung der Inflation. Der reale Zinssatz ist der um die Inflation bereinigte Zinssatz und gibt an, wie stark die tatsächliche Kaufkraft eines Vermögens wächst." }]
      },
      {
        id: "vwl-realer-nominaler-zins-kaufkraft-e3",
        prompt: "Ein Festgeld hat einen Nominalzinssatz von 2 % bei einer Inflationsrate von 6 % im selben Jahr. Berechnen Sie den (näherungsweisen) realen Zinssatz und interpretieren Sie das Ergebnis.",
        solution: [{ type: "p", text: "Der reale Zinssatz ergibt sich näherungsweise als nominaler Zinssatz minus Inflationsrate: 2 % − 6 % = −4 %. Obwohl der Anleger nominal 2 % Zinsen erhält, verliert sein Vermögen also real 4 % an Kaufkraft, weil die Preise stärker gestiegen sind, als der Zins ausgleicht." }]
      },
      {
        id: "vwl-realer-nominaler-zins-kaufkraft-e4",
        prompt: "Nennen Sie zwei Faktoren, die laut Vorlesung zum Inflationsschub nach dem Ende der Corona-Pandemie beigetragen haben.",
        solution: [{ type: "p", text: "Erstens wurde aufgestaute Konsumnachfrage aus der Pandemiezeit ab 2022 wieder wirksam, während die Produktion durch Lieferengpässe und Engpässe am Arbeitsmarkt weiterhin gehemmt war. Zweitens führte der Ukraine-Krieg zu einer Energieverknappung, die zusammen mit dem zunächst noch niedrigen Zinsniveau die Preise zusätzlich nach oben trieb." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Warum sind Geldbeträge aus unterschiedlichen Zeitpunkten ohne Weiteres nicht direkt vergleichbar?", options: ["Weil sich Währungen ständig ändern", "Weil sich das allgemeine Preisniveau über die Zeit verändert", "Weil Zinssätze immer konstant sind", "Weil der VPI nur einmal berechnet wird"], correctIndex: 1, explanation: "Weil sich das allgemeine Preisniveau über die Zeit verändert, hat derselbe Geldbetrag zu unterschiedlichen Zeitpunkten unterschiedliche Kaufkraft." },
      { id: "q2", question: "Wie rechnet man einen historischen Geldbetrag auf die heutige Kaufkraft um?", options: ["Man multipliziert ihn mit dem Verhältnis der Preisniveaus (heute zu damals)", "Man addiert einfach die Inflationsrate in Prozentpunkten", "Man dividiert ihn durch die Anzahl der Jahre", "Man multipliziert ihn mit dem nominalen Zinssatz"], correctIndex: 0, explanation: "Man skaliert den historischen Betrag mit dem Verhältnis des heutigen zum damaligen Preisniveau." },
      { id: "q3", question: "Was ist der nominale Zinssatz?", options: ["Der um Inflation bereinigte Zinssatz", "Der üblicherweise ausgewiesene Zinssatz, z. B. ein Bankzinssatz", "Immer null Prozent", "Ein rein historischer Wert"], correctIndex: 1, explanation: "Der nominale Zinssatz ist der Zinssatz, der üblicherweise angegeben wird, ohne Bereinigung um Inflation." },
      { id: "q4", question: "Was ist der reale Zinssatz?", options: ["Der Zinssatz vor Steuern", "Der um die Auswirkungen der Inflation bereinigte Zinssatz", "Der Zinssatz auf Fremdwährungskonten", "Der von der Zentralbank vorgegebene Leitzins"], correctIndex: 1, explanation: "Der reale Zinssatz ist der um die Inflation bereinigte Zinssatz und misst den tatsächlichen Kaufkraftgewinn." },
      { id: "q5", question: "Wie berechnet sich der reale Zinssatz näherungsweise?", options: ["Nominaler Zinssatz plus Inflationsrate", "Nominaler Zinssatz minus Inflationsrate", "Nominaler Zinssatz mal Inflationsrate", "Inflationsrate minus nominaler Zinssatz"], correctIndex: 1, explanation: "Der reale Zinssatz ergibt sich näherungsweise als nominaler Zinssatz minus Inflationsrate." },
      { id: "q6", question: "Bei 2 % Nominalzins und 6 % Inflation: Wie hoch ist der reale Zinssatz näherungsweise?", options: ["+8 %", "+4 %", "−4 %", "0 %"], correctIndex: 2, explanation: "2 % − 6 % = −4 %: Trotz positivem Nominalzins verliert das Vermögen real an Kaufkraft." },
      { id: "q7", question: "Was bedeutet ein negativer realer Zinssatz für ein verzinstes Vermögen?", options: ["Das Vermögen wächst nominal und real", "Das Vermögen wächst nominal, verliert aber real an Kaufkraft", "Das Vermögen schrumpft auch nominal", "Es gibt keine Auswirkung auf die Kaufkraft"], correctIndex: 1, explanation: "Bei negativem realem Zinssatz wächst das Vermögen zwar nominal, verliert aber real an Kaufkraft, weil die Inflation den nominalen Ertrag übersteigt." },
      { id: "q8", question: "Welche zwei Ereignisse werden in der Vorlesung als zentrale Auslöser des jüngsten Inflationsschubs genannt?", options: ["Die Finanzkrise 2008 und der Brexit", "Das Ende der Corona-Pandemie und der Beginn des Ukraine-Kriegs", "Die Euro-Einführung und die deutsche Wiedervereinigung", "Die Ölkrise der 1970er-Jahre"], correctIndex: 1, explanation: "Der jüngste Inflationsschub wird auf das Ende der Corona-Pandemie (aufgestaute Nachfrage) und den Beginn des Ukraine-Kriegs (Energieverknappung) zurückgeführt." },
      { id: "q9", question: "Welcher Faktor auf der Angebotsseite hat die Produktion während des jüngsten Inflationsschubs gehemmt?", options: ["Ein Überangebot an Rohstoffen", "Lieferengpässe und demografisch bedingte Engpässe am Arbeitsmarkt", "Zu niedrige Nachfrage", "Zu hohe Zinssätze von Beginn an"], correctIndex: 1, explanation: "Lieferengpässe und Engpässe am Arbeitsmarkt (u. a. demografisch bedingt) hemmten die Produktion, während die Nachfrage bereits wieder anzog." },
      { id: "q10", question: "Wie reagierte die Geldpolitik laut Vorlesung auf den jüngsten Inflationsschub?", options: ["Mit einer weiteren Senkung der Zinsen", "Mit deutlichen Zinserhöhungen", "Mit einer vollständigen Abschaffung des Euro", "Mit keinerlei Reaktion"], correctIndex: 1, explanation: "Die Geldpolitik reagierte auf den Inflationsschub in der Folge mit deutlichen Zinserhöhungen, um die Inflation wieder unter Kontrolle zu bringen." }
    ]
  }
];
