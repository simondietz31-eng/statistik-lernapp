const KLR_CHAPTER2_TOPICS = [
  {
    id: "kostenarten-klassifikation",
    chapter: 2,
    order: 1,
    title: "Kostenarten und ihre Klassifikation",
    icon: "🏷️",
    summary: "Wie Kostenarten nach Einsatzgütern, Funktionen, Verrechenbarkeit, Beschäftigung, Herkunft und Zahlungswirksamkeit eingeteilt werden - plus FIFO und LIFO bei der Materialbewertung.",
    explanation: [
      { type: "p", text: "Die Kostenartenrechnung steht am Anfang jeder Kosten- und Leistungsrechnung: Sie beantwortet die Frage 'Welche Kosten sind in welcher Höhe angefallen?'. Um damit sinnvoll weiterarbeiten zu können, werden Kostenarten nach mehreren, voneinander unabhängigen Kriterien eingeteilt." },
      { type: "list", items: [
        "Art der Einsatzgüter: Personalkosten (Löhne, Gehälter, Sozialabgaben), Sachkosten (Material, Energie, Abschreibungen), Kapitalkosten (Zinsen), Kosten für Fremdleistungen (z. B. Wartungsverträge, Speditionen) sowie Kosten für Steuern, Gebühren und Beiträge.",
        "Betriebliche Funktion: Kosten der Beschaffung und Lagerhaltung, der Fertigung, des Vertriebs und der Verwaltung - je nachdem, in welchem betrieblichen Teilbereich sie anfallen."
      ]},
      { type: "p", text: "Nach der Art der Verrechnung unterscheidet man Einzelkosten (EK) und Gemeinkosten (GK). Einzelkosten lassen sich einem Kostenträger, einer Kostenstelle oder einer Periode direkt und eindeutig zurechnen (z. B. das Fertigungsmaterial für genau ein Produkt). Gemeinkosten dagegen betreffen mehrere Bezugsobjekte gemeinsam und können nur über einen Schlüssel (z. B. nach Fläche, Personalzahl oder Maschinenstunden) verteilt werden." },
      { type: "list", items: [
        "Unechte Gemeinkosten: Kosten, die zwar theoretisch einem einzelnen Kostenträger direkt zurechenbar wären (also eigentlich Einzelkosten sind), aus Wirtschaftlichkeitsgründen aber wie Gemeinkosten behandelt werden. Beispiel: die wenigen Milliliter Leim je Werkstück - eine exakte Einzelerfassung wäre theoretisch möglich, der Erfassungsaufwand stünde aber in keinem Verhältnis zum Nutzen."
      ]},
      { type: "p", text: "Ein weiteres Kriterium ist das Verhalten bei einer Änderung der Beschäftigung: Fixe Kosten bleiben (zumindest innerhalb einer relevanten Bandbreite) unabhängig von der Ausbringungsmenge konstant (z. B. Miete), variable Kosten verändern sich mit der Beschäftigung (z. B. Fertigungsmaterial)." },
      { type: "p", text: "Nach der Herkunft der Einsatzgüter unterscheidet man primäre Kosten (Güter und Leistungen werden von außen am Markt bezogen, z. B. zugekaufter Rohstoff oder Fremdstrom) und sekundäre Kosten (Güter und Leistungen werden innerbetrieblich selbst erstellt und verrechnet, z. B. selbst erzeugter Strom eines betriebseigenen Heizkraftwerks oder innerbetrieblich erbrachte Reparaturleistungen). Nach der Zahlungswirksamkeit trennt man ausgabegleiche Kosten (denen eine tatsächliche Auszahlung entspricht, z. B. Löhne) von nicht ausgabegleichen, also kalkulatorischen Kosten (denen keine oder keine unmittelbare Auszahlung in gleicher Höhe gegenübersteht, z. B. kalkulatorische Abschreibungen und kalkulatorische Zinsen)." },
      { type: "p", text: "Bei schwankenden Einstandspreisen von Rohstoffen stellt sich zusätzlich die Frage, welcher Preis beim Verbrauch angesetzt wird. Beim FIFO-Verfahren (first in, first out) wird unterstellt, dass die zuerst eingekauften (also älteren) Mengen zuerst verbraucht werden - dem Verbrauch werden also die frühesten Einstandspreise zugeordnet. Beim LIFO-Verfahren (last in, first out) wird dagegen unterstellt, dass die zuletzt beschafften (neuesten) Mengen zuerst verbraucht werden. Bei anhaltender Inflation ist LIFO zur Kostenermittlung vorzuziehen: Da die aktuellen, höheren Preise sofort in die Kosten einfließen, wird die Kostenrechnung 'wertmäßig aktuell' gehalten und ein Scheingewinn vermieden, der entstünde, wenn der Verbrauch fälschlich zu alten, niedrigeren Preisen bewertet würde." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Eine Möbelfabrik verzeichnet folgende Geschäftsvorfälle. Ordnen Sie jeweils ein, ob es sich um Einzelkosten (EK) oder Gemeinkosten (GK) handelt, und geben Sie an, worauf sich die Einordnung bezieht (Kostenträger, Kostenstelle oder Periode): a) Stromverbrauch für mehrere gemeinsam genutzte Maschinen einer Fertigungshalle, b) ein Kredit zur Beschaffung des Rohstoffs für ein bestimmtes Sonderprodukt, c) Vorstandsgehälter, d) Personalkosten einer einzelnen Fertigungsabteilung, e) zeitabhängige Abschreibung einer Anlage, die ausschließlich ein einziges Produkt herstellt, f) Personalkosten eines Vertriebsmanagers, der gleichzeitig drei Kostenstellen leitet, g) ein Blitzschaden an der zentralen Steuerungsanlage, h) ein Wartungsvertrag für die im ganzen Haus verteilten Kopierer, i) wenige Milliliter Leim je Werkstück.",
        solution: [
          { type: "list", items: [
            "Stromverbrauch mehrerer gemeinsam genutzter Maschinen: Gemeinkosten bezogen auf die Kostenträger, die auf diesen Maschinen gefertigt werden - der Verbrauch kann keiner einzelnen Maschine bzw. keinem einzelnen Produkt direkt zugerechnet werden.",
            "Kredit für den Rohstoff eines Sonderprodukts: Einzelkosten (die Zinsen lassen sich über den Rohstoff eindeutig dem einen Kostenträger zurechnen).",
            "Vorstandsgehälter: Gemeinkosten bezogen auf Kostenträger und Kostenstellen (das Vorstandsgehalt betrifft das gesamte Unternehmen, keine einzelne Stelle oder kein einzelnes Produkt).",
            "Personalkosten einer einzelnen Fertigungsabteilung: Einzelkosten bezogen auf die Kostenstelle (direkt dieser einen Abteilung zurechenbar), aber Gemeinkosten bezogen auf die einzelnen Kostenträger.",
            "Zeitabhängige Abschreibung einer Anlage, die nur ein Produkt herstellt: Einzelkosten bezogen auf den Kostenträger, da die gesamte Anlage eindeutig einem Produkt zugeordnet werden kann.",
            "Personalkosten eines Vertriebsmanagers für drei Kostenstellen: Gemeinkosten bezogen auf die einzelne Kostenstelle (Verteilung nur über einen Schlüssel möglich, z. B. Umsatzanteil je Kostenstelle).",
            "Blitzschaden an der zentralen Steuerungsanlage: Gemeinkosten bezogen auf die Kostenträger und meist auch bezogen auf die Periode (unregelmäßiger, nicht einem Produkt zurechenbarer Schaden).",
            "Wartungsvertrag für hausweit verteilte Kopierer: Gemeinkosten (betrifft mehrere Kostenstellen gemeinsam, nur über einen Schlüssel verteilbar).",
            "Wenige Milliliter Leim je Werkstück: unechte Gemeinkosten - theoretisch Einzelkosten, da pro Werkstück zurechenbar, werden aber aus Wirtschaftlichkeitsgründen wie Gemeinkosten (z. B. pauschal über einen Materialgemeinkostenzuschlag) verrechnet."
          ]}
        ]
      },
      {
        id: "ex2",
        prompt: "Ordnen Sie die folgenden Kostenarten jeweils nach drei Kriterien ein: (1) Einzelkosten (EK) oder Gemeinkosten (GK) bezogen auf den Kostenträger, (2) fix oder variabel bezüglich der Beschäftigung, (3) primär oder sekundär. Kostenarten: Fertigungsmaterial, Hilfsmaterial (z. B. Schmierstoffe), Energiekosten für die Fertigung, Fertigungslöhne, Gehälter der Verwaltung, Mieten für die Fabrikhalle, Abschreibungen auf Fertigungsmaschinen, Vertriebsprovisionen, kalkulatorische Wagnisse, selbst erzeugter Strom eines betriebseigenen Blockheizkraftwerks.",
        solution: [
          { type: "list", items: [
            "Fertigungsmaterial: EK, variabel, primär.",
            "Hilfsmaterial (Schmierstoffe): meist unechte GK (aus Wirtschaftlichkeit wie GK behandelt), variabel, primär.",
            "Energiekosten der Fertigung: GK (meist mehreren Kostenträgern gemeinsam), meist variabel (mit Beschäftigung schwankend, teils fix als Grundlast), primär.",
            "Fertigungslöhne: EK, variabel, primär.",
            "Gehälter der Verwaltung: GK, fix, primär.",
            "Mieten für die Fabrikhalle: GK, fix, primär.",
            "Abschreibungen auf Fertigungsmaschinen: GK (sofern mehrere Produkte auf derselben Maschine gefertigt werden), fix (bei zeitabhängiger Abschreibung), primär.",
            "Vertriebsprovisionen: EK bezogen auf das verkaufte Produkt, variabel, primär.",
            "Kalkulatorische Wagnisse: GK, meist variabel (an Umsatz oder Menge gekoppelt), primär (auch wenn kalkulatorisch, beruhen sie auf von außen bezogenen Risiken wie Ausschuss oder Forderungsausfall).",
            "Selbst erzeugter Strom eines betriebseigenen Blockheizkraftwerks: GK, teils fix/teils variabel, sekundär (innerbetrieblich selbst erstellte Leistung)."
          ]}
        ]
      },
      {
        id: "ex3",
        prompt: "Ein Lager weist folgende Zu- und Abgänge eines Rohstoffs auf: Anfangsbestand 100 Stück zu 8 €/Stück; Zugang 200 Stück zu 9 €/Stück; Abgang 250 Stück; Zugang 150 Stück zu 10 €/Stück; Abgang 120 Stück. Ermitteln Sie nach dem FIFO-Verfahren die Kosten der beiden Abgänge sowie den Wert des Endbestands.",
        solution: [
          { type: "p", text: "FIFO unterstellt, dass die ältesten (zuerst eingekauften) Mengen zuerst verbraucht werden." },
          { type: "list", items: [
            "1. Abgang (250 Stück): zunächst 100 Stück aus dem Anfangsbestand zu 8 € = 800 €, danach 150 Stück aus dem Zugang zu 9 € = 1.350 €. Gesamtkosten des 1. Abgangs: 2.150 €. Nach diesem Abgang verbleiben vom 9-€-Zugang noch 50 Stück.",
            "2. Abgang (120 Stück): zunächst die verbliebenen 50 Stück zu 9 € = 450 €, danach 70 Stück aus dem Zugang zu 10 € = 700 €. Gesamtkosten des 2. Abgangs: 1.150 €.",
            "Endbestand: 150 − 70 = 80 Stück zu 10 € = 800 €.",
            "Kontrolle: Gesamtwert aller Zugänge (100·8 + 200·9 + 150·10 = 800+1.800+1.500 = 4.100 €) entspricht der Summe aus verbrauchten Kosten (2.150+1.150 = 3.300 €) und Endbestand (800 €)."
          ]}
        ]
      },
      {
        id: "ex4",
        prompt: "Verwenden Sie die Daten aus Aufgabe 3. Was würde sich ändern, wenn das Unternehmen stattdessen das LIFO-Verfahren anwendet? Berechnen Sie die Kosten des ersten Abgangs neu und erläutern Sie, warum LIFO bei anhaltender Inflation gegenüber FIFO vorzuziehen ist.",
        solution: [
          { type: "p", text: "Bei LIFO wird unterstellt, dass die zuletzt beschafften (neuesten) Mengen zuerst verbraucht werden. Für den 1. Abgang (250 Stück) würde daher zunächst auf den zu diesem Zeitpunkt jüngsten Zugang zurückgegriffen: 200 Stück zu 9 € = 1.800 €, danach 50 Stück aus dem Anfangsbestand zu 8 € = 400 €. Kosten des 1. Abgangs unter LIFO: 2.200 € (statt 2.150 € unter FIFO)." },
          { type: "p", text: "Da die Einstandspreise im Zeitverlauf steigen (8 € → 9 € → 10 €), führt LIFO zu höheren ausgewiesenen Verbrauchskosten, weil die jeweils aktuellsten (teuersten) Preise sofort in die Kostenrechnung einfließen. Dadurch wird ein Scheingewinn vermieden, der entstünde, wenn der Verbrauch - wie bei FIFO - zu alten, niedrigeren Preisen bewertet und der Gewinn dadurch künstlich zu hoch ausgewiesen würde. LIFO liefert somit bei Inflation eine wertmäßig aktuellere und vorsichtigere Kostenbasis." }
        ]
      },
      {
        id: "ex5",
        prompt: "Erläutern Sie den Begriff 'unechte Gemeinkosten' anhand eines eigenen Beispiels (ungleich Leim). Erklären Sie außerdem den Unterschied zwischen primären und sekundären Kosten anhand eines eigenen Beispiels.",
        solution: [
          { type: "p", text: "Unechte Gemeinkosten sind Kosten, die sich zwar theoretisch einem einzelnen Kostenträger direkt zurechnen ließen (also eigentlich Einzelkosten wären), aber aus Wirtschaftlichkeitsgründen wie Gemeinkosten behandelt werden, weil der Erfassungsaufwand in keinem sinnvollen Verhältnis zum Nutzen stünde. Beispiel: die wenigen Schrauben, die in ein Möbelstück verbaut werden - eine exakte Einzelerfassung je Werkstück wäre möglich, wird aber aus Aufwandsgründen unterlassen und stattdessen pauschal über einen Materialgemeinkostenzuschlag verrechnet." },
          { type: "p", text: "Primäre Kosten entstehen durch den Verbrauch von Gütern und Leistungen, die von außen am Markt beschafft wurden, z. B. zugekaufter Rohstoff oder von einem externen Energieversorger bezogener Strom. Sekundäre Kosten entstehen dagegen durch den Verbrauch von Gütern und Leistungen, die der Betrieb selbst innerbetrieblich erstellt hat, z. B. Strom aus einem betriebseigenen Blockheizkraftwerk oder eine innerbetrieblich durchgeführte Reparaturleistung der betriebseigenen Werkstatt." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Nach welchem Kriterium werden Kosten in Personal-, Sach-, Kapital- und Fremdleistungskosten eingeteilt?", options: ["Art der Einsatzgüter", "Betriebliche Funktion", "Art der Verrechnung", "Zahlungswirksamkeit"], correctIndex: 0, explanation: "Personal-, Sach-, Kapitalkosten und Kosten für Fremdleistungen sowie Steuern/Gebühren/Beiträge werden nach der Art der eingesetzten Güter unterschieden." },
      { id: "q2", question: "Kosten der Beschaffung, Fertigung, des Vertriebs und der Verwaltung werden nach welchem Kriterium unterschieden?", options: ["Art der Einsatzgüter", "Betriebliche Funktion", "Herkunft der Einsatzgüter", "Verhalten bei Beschäftigungsänderung"], correctIndex: 1, explanation: "Dies ist die Einteilung nach betrieblichen Funktionsbereichen." },
      { id: "q3", question: "Was zeichnet Einzelkosten aus?", options: ["Sie sind immer fix", "Sie sind einem Kostenträger, einer Kostenstelle oder einer Periode direkt zurechenbar", "Sie können nur über einen Schlüssel verrechnet werden", "Sie sind stets kalkulatorisch"], correctIndex: 1, explanation: "Einzelkosten lassen sich ohne Schlüsselung direkt und eindeutig einem Bezugsobjekt zuordnen." },
      { id: "q4", question: "Was sind 'unechte Gemeinkosten'?", options: ["Kosten, die niemals einem Kostenträger zugerechnet werden können", "Eigentlich Einzelkosten, die aus Wirtschaftlichkeitsgründen wie Gemeinkosten behandelt werden", "Kosten, die nur in der Verwaltung anfallen", "Ein anderer Begriff für kalkulatorische Kosten"], correctIndex: 1, explanation: "Beispiel: wenige Milliliter Leim je Werkstück - theoretisch einzeln zurechenbar, aber aus Aufwandsgründen wie Gemeinkosten verrechnet." },
      { id: "q5", question: "Fixe Kosten sind dadurch gekennzeichnet, dass sie...", options: ["sich proportional zur Beschäftigung verändern", "unabhängig von der Ausbringungsmenge (zumindest in einer Bandbreite) konstant bleiben", "nur bei Nichtbeschäftigung anfallen", "ausschließlich kalkulatorisch sind"], correctIndex: 1, explanation: "Fixe Kosten wie Miete bleiben unabhängig von der Beschäftigung innerhalb einer relevanten Bandbreite konstant." },
      { id: "q6", question: "Selbst erzeugter Strom eines betriebseigenen Blockheizkraftwerks zählt zu den...", options: ["primären Kosten", "sekundären Kosten", "ausgabegleichen Kosten ausschließlich", "unechten Einzelkosten"], correctIndex: 1, explanation: "Da die Leistung innerbetrieblich selbst erstellt und nicht von außen bezogen wird, handelt es sich um sekundäre Kosten." },
      { id: "q7", question: "Kalkulatorische Abschreibungen und kalkulatorische Zinsen sind Beispiele für...", options: ["ausgabegleiche Kosten", "nicht ausgabegleiche (kalkulatorische) Kosten", "primäre Kosten", "Einzelkosten"], correctIndex: 1, explanation: "Ihnen steht keine unmittelbare Auszahlung in gleicher Höhe gegenüber, daher sind sie nicht ausgabegleich." },
      { id: "q8", question: "Beim FIFO-Verfahren wird unterstellt, dass...", options: ["die zuletzt beschafften Mengen zuerst verbraucht werden", "die zuerst beschafften (ältesten) Mengen zuerst verbraucht werden", "immer der Durchschnittspreis angesetzt wird", "der höchste Einstandspreis angesetzt wird"], correctIndex: 1, explanation: "FIFO = first in, first out: die ältesten Bestände werden zuerst verbraucht, ihre Preise fließen zuerst in die Kosten ein." },
      { id: "q9", question: "Warum ist LIFO bei anhaltender Inflation gegenüber FIFO oft vorzuziehen?", options: ["Weil LIFO immer zu niedrigeren Kosten führt", "Weil LIFO die aktuellen (höheren) Preise sofort in die Kosten einfließen lässt und so Scheingewinne vermeidet", "Weil LIFO gesetzlich vorgeschrieben ist", "Weil LIFO unabhängig von den tatsächlichen Einstandspreisen rechnet"], correctIndex: 1, explanation: "LIFO verrechnet die neuesten, bei Inflation höheren Preise zuerst und verhindert damit eine Bewertung des Verbrauchs zu veralteten, zu niedrigen Preisen." },
      { id: "q10", question: "Welche Aussage zur Materialbewertung ist korrekt?", options: ["FIFO und LIFO führen bei konstanten Einstandspreisen zu unterschiedlichen Verbrauchskosten", "FIFO und LIFO führen bei konstanten Einstandspreisen zum gleichen Ergebnis, unterscheiden sich aber bei schwankenden Preisen", "LIFO ist nur bei fallenden Preisen definiert", "FIFO berücksichtigt ausschließlich den höchsten Einstandspreis"], correctIndex: 1, explanation: "Bleiben die Einstandspreise konstant, spielt die Verbrauchsfolge keine Rolle; erst bei schwankenden Preisen unterscheiden sich FIFO und LIFO im Ergebnis." }
    ]
  },
  {
    id: "kalkulatorische-abschreibungen",
    chapter: 2,
    order: 2,
    title: "Kalkulatorische Abschreibungen",
    icon: "📉",
    summary: "Linear, arithmetisch-degressiv, geometrisch-degressiv und leistungsabhängig abschreiben - und wissen, wann ein Methodenwechsel sinnvoll ist.",
    explanation: [
      { type: "p", text: "Kalkulatorische Abschreibungen bilden den Wertverzehr von Anlagegütern über ihre Nutzungsdauer in der Kostenrechnung ab. Als Bemessungsgrundlage wird im Zweifel der höhere Wert angesetzt - in aller Regel die historischen Anschaffungskosten, nicht unreflektiert ein niedrigerer aktueller Wiederbeschaffungspreis, da sonst der tatsächliche Werteverzehr unterschätzt und zu wenig Substanz für eine Wiederbeschaffung zurückgehalten würde." },
      { type: "list", items: [
        "Lineare Abschreibung: konstanter Jahresbetrag über die gesamte Nutzungsdauer. a = (Anschaffungswert − Restwert) / Nutzungsdauer.",
        "Arithmetisch-degressive Abschreibung: die Jahresbeträge fallen in gleichbleibenden Schritten (arithmetische Folge). Der Degressionsbetrag ergibt sich aus d̃ = 2 · Anschaffungswert / [Nutzungsdauer · (Nutzungsdauer + 1)]; der Abschreibungsbetrag im Jahr t ist dann d̃ · (Nutzungsdauer − t + 1).",
        "Geometrisch-degressive Abschreibung: ein fester Prozentsatz wird jedes Jahr auf den jeweiligen Restbuchwert des Vorjahres angewendet, sodass die Jahresbeträge exponentiell fallen, den Buchwert aber rechnerisch nie ganz auf null bringen.",
        "Leistungsabhängige Abschreibung: die Abschreibung richtet sich nach der tatsächlichen Nutzung bzw. Leistungsabgabe statt nach der Zeit. Satz je Leistungseinheit = (Anschaffungswert − Restwert) / geschätzte Gesamtleistung; der Jahresbetrag ergibt sich aus diesem Satz multipliziert mit der tatsächlich erbrachten Leistungseinheiten des Jahres."
      ]},
      { type: "p", text: "Ein Methodenwechsel ist üblich, wenn eine geometrisch-degressive Abschreibung angewendet wird: Da der Restbuchwert bei rein geometrischer Abschreibung nie exakt null erreicht, wechselt man in dem Jahr zur linearen Abschreibung, in dem der lineare Abschreibungsbetrag (Restbuchwert geteilt durch die Restnutzungsdauer) erstmals den geometrisch-degressiven Betrag übersteigt. So wird sichergestellt, dass der Restwert am Ende der Nutzungsdauer vollständig (bzw. auf den geplanten Restwert) abgeschrieben ist." },
      { type: "p", text: "Progressive Abschreibungsverfahren, bei denen die Jahresbeträge im Zeitverlauf steigen, sind in der Praxis unüblich: Der Nutzen bzw. die Leistungsfähigkeit eines Anlageguts ist in aller Regel zu Beginn der Nutzungsdauer am höchsten (z. B. wegen technischen Fortschritts, höherer Zuverlässigkeit und geringerer Reparaturanfälligkeit in jungen Jahren) und nimmt mit der Zeit ab - degressive oder lineare Verläufe bilden diesen tatsächlichen Werteverzehr daher realistischer ab als ein progressiver Verlauf." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Eine Maschine hat einen Anschaffungswert von 240.000 € und eine Nutzungsdauer von 5 Jahren (Restwert 0 €). Erstellen Sie für alle 5 Jahre die Abschreibungspläne (Jahresbetrag und Restbuchwert am Jahresende) für a) die lineare Abschreibung, b) die arithmetisch-degressive Abschreibung und c) die geometrisch-degressive Abschreibung mit einem Satz von 25 %.",
        solution: [
          { type: "p", text: "a) Linear: a = 240.000 / 5 = 48.000 € pro Jahr. Restbuchwerte: 192.000 € / 144.000 € / 96.000 € / 48.000 € / 0 €." },
          { type: "p", text: "b) Arithmetisch-degressiv: d̃ = 2 · 240.000 / (5 · 6) = 480.000 / 30 = 16.000 €. Jahresbeträge: Jahr 1: 16.000 · 5 = 80.000 €; Jahr 2: 16.000 · 4 = 64.000 €; Jahr 3: 16.000 · 3 = 48.000 €; Jahr 4: 16.000 · 2 = 32.000 €; Jahr 5: 16.000 · 1 = 16.000 €. Restbuchwerte: 160.000 € / 96.000 € / 48.000 € / 16.000 € / 0 €." },
          { type: "p", text: "c) Geometrisch-degressiv (25 %): Jahr 1: 240.000 · 0,25 = 60.000 €, Restbuchwert 180.000 €; Jahr 2: 180.000 · 0,25 = 45.000 €, Restbuchwert 135.000 €; Jahr 3: 135.000 · 0,25 = 33.750 €, Restbuchwert 101.250 €; Jahr 4: 101.250 · 0,25 = 25.312,50 €, Restbuchwert 75.937,50 €; Jahr 5: 75.937,50 · 0,25 = 18.984,38 €, Restbuchwert 56.953,13 €. (Ohne Methodenwechsel erreicht der Restbuchwert rechnerisch nie null.)" }
        ]
      },
      {
        id: "ex2",
        prompt: "Eine Maschine kostet 1.000 GE, hat eine Nutzungsdauer von 10 Jahren (Restwert 0) und soll insgesamt 200 Leistungseinheiten erbringen. Die tatsächliche Leistungsabgabe beträgt in den ersten drei Jahren 30, 25 bzw. 15 Leistungseinheiten. Berechnen Sie für diese drei Jahre jeweils den Abschreibungsbetrag und den Restbuchwert a) nach der linearen und b) nach der leistungsabhängigen Abschreibung.",
        solution: [
          { type: "p", text: "a) Linear: a = 1.000 / 10 = 100 GE pro Jahr, unabhängig von der Leistung. Restbuchwerte: Jahr 1: 900 GE, Jahr 2: 800 GE, Jahr 3: 700 GE." },
          { type: "p", text: "b) Leistungsabhängig: Satz je Leistungseinheit = 1.000 / 200 = 5 GE je Einheit. Jahr 1: 30 · 5 = 150 GE, Restbuchwert 850 GE; Jahr 2: 25 · 5 = 125 GE, Restbuchwert 725 GE; Jahr 3: 15 · 5 = 75 GE, Restbuchwert 650 GE." },
          { type: "p", text: "Die leistungsabhängige Abschreibung bildet den tatsächlichen Verschleiß genauer ab, schwankt aber mit der Auslastung, während die lineare Abschreibung planungssicher, aber unabhängig von der tatsächlichen Nutzung ist." }
        ]
      },
      {
        id: "ex3",
        prompt: "Eine Anlage im Wert von 100.000 € wird geometrisch-degressiv mit einem Satz von 25 % abgeschrieben, die Nutzungsdauer beträgt 6 Jahre. Bestimmen Sie, in welchem Jahr auf die lineare Abschreibung gewechselt werden sollte, und begründen Sie Ihre Entscheidung anhand der Restbuchwerte.",
        solution: [
          { type: "p", text: "Restbuchwerte (geometrisch-degressiv, 25 %): nach Jahr 1: 75.000 €; Jahr 2: 56.250 €; Jahr 3: 42.187,50 €; Jahr 4: 31.640,63 €; Jahr 5: 23.730,47 €." },
          { type: "list", items: [
            "Jahr 4 (Beginn, Restbuchwert aus Jahr 3 = 42.187,50 €, Restnutzungsdauer 3 Jahre): geometrisch-degressiver Betrag = 42.187,50 · 0,25 = 10.546,88 €; linearer Betrag = 42.187,50 / 3 = 14.062,50 €.",
            "Da der lineare Betrag (14.062,50 €) bereits im 4. Jahr den geometrisch-degressiven Betrag (10.546,88 €) übersteigt, sollte spätestens in Jahr 4 auf die lineare Abschreibung gewechselt werden, damit der Restbuchwert am Ende von Jahr 6 exakt null erreicht."
          ]}
        ]
      },
      {
        id: "ex4",
        prompt: "Warum wird bei der Bemessungsgrundlage für kalkulatorische Abschreibungen im Zweifel der höhere Wert (in der Regel die Anschaffungskosten) angesetzt und nicht unreflektiert ein niedrigerer aktueller Wiederbeschaffungspreis? Erläutern Sie anhand eines eigenen Beispiels.",
        solution: [
          { type: "p", text: "Die kalkulatorische Abschreibung soll sicherstellen, dass über die Nutzungsdauer genügend Mittel in die Kostenrechnung einfließen, um das Anlagegut am Ende seiner Nutzungsdauer wiederbeschaffen zu können. Würde man einen niedrigeren Wert ansetzen, würden zu geringe Abschreibungsbeträge verrechnet, und dem Unternehmen stünde am Ende nicht genug Substanz zur Verfügung, um eine gleichwertige Ersatzinvestition zu finanzieren." },
          { type: "p", text: "Beispiel: Eine Maschine wurde vor Jahren für 100.000 € angeschafft; der aktuelle Marktpreis für eine gebrauchte, technisch vergleichbare Maschine läge zufällig nur bei 80.000 €. Würde man trotzdem mit 100.000 € (den höheren Anschaffungskosten) kalkulieren, stellt das Unternehmen sicher, dass genug kalkulatorischer Werteverzehr verrechnet wird, um auch eine im Zweifel teurere Neuanschaffung zu finanzieren, statt sich unbegründet auf einen aktuell niedrigeren Marktwert zu verlassen." }
        ]
      },
      {
        id: "ex5",
        prompt: "Diskutieren Sie: Warum sind progressive Abschreibungsmethoden (mit im Zeitverlauf steigenden Jahresbeträgen) in der Praxis unüblich?",
        solution: [
          { type: "p", text: "Progressive Abschreibungen unterstellen, dass der Werteverzehr eines Anlageguts mit der Zeit zunimmt. Das widerspricht in aller Regel dem tatsächlichen Nutzungsverlauf: Anlagegüter sind zu Beginn ihrer Nutzungsdauer meist am leistungsfähigsten und zuverlässigsten, während Reparaturanfälligkeit, technische Überholung und sinkende Effizienz typischerweise mit zunehmendem Alter zunehmen. Der tatsächliche wirtschaftliche Nutzen (und damit der angemessene Werteverzehr) ist daher zu Beginn am höchsten und nimmt später ab - degressive oder lineare Verläufe bilden dies deutlich realistischer ab als eine mit der Zeit steigende Abschreibung." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie lautet die Formel für die lineare Abschreibung?", options: ["a = Anschaffungswert · Nutzungsdauer", "a = (Anschaffungswert − Restwert) / Nutzungsdauer", "a = Anschaffungswert / Restwert", "a = Restwert / Nutzungsdauer"], correctIndex: 1, explanation: "Der abzuschreibende Betrag (Anschaffungswert minus Restwert) wird gleichmäßig auf die Nutzungsdauer verteilt." },
      { id: "q2", question: "Bei der arithmetisch-degressiven Abschreibung fallen die Jahresbeträge...", options: ["exponentiell", "in gleichbleibenden Schritten (arithmetische Folge)", "gar nicht, sie bleiben konstant", "proportional zur tatsächlichen Leistung"], correctIndex: 1, explanation: "Arithmetisch-degressiv bedeutet, dass sich der Abschreibungsbetrag von Jahr zu Jahr um einen konstanten Betrag verringert." },
      { id: "q3", question: "Bei der geometrisch-degressiven Abschreibung wird der Prozentsatz angewendet auf...", options: ["den ursprünglichen Anschaffungswert", "den jeweiligen Restbuchwert des Vorjahres", "die geschätzte Gesamtleistung", "den Wiederbeschaffungswert"], correctIndex: 1, explanation: "Der feste Prozentsatz wird jedes Jahr erneut auf den zuletzt ermittelten Restbuchwert angewendet, daher der exponentiell fallende Verlauf." },
      { id: "q4", question: "Wie wird der Satz je Leistungseinheit bei der leistungsabhängigen Abschreibung berechnet?", options: ["Anschaffungswert · Nutzungsdauer", "(Anschaffungswert − Restwert) / geschätzte Gesamtleistung", "Anschaffungswert / Restwert", "Restwert / geschätzte Gesamtleistung"], correctIndex: 1, explanation: "Der abzuschreibende Betrag wird durch die insgesamt geschätzte Leistung geteilt, um einen Satz je Leistungseinheit zu erhalten." },
      { id: "q5", question: "Wann ist ein Methodenwechsel von geometrisch-degressiv zu linear sinnvoll?", options: ["Sofort im ersten Jahr", "Sobald der lineare Abschreibungsbetrag auf den Restbuchwert den geometrisch-degressiven Betrag erstmals übersteigt", "Nie, ein Wechsel ist unzulässig", "Erst im letzten Jahr der Nutzungsdauer"], correctIndex: 1, explanation: "Der Wechsel stellt sicher, dass der Restbuchwert am Ende der Nutzungsdauer vollständig abgeschrieben wird, da die rein geometrische Abschreibung den Wert nie exakt auf null bringt." },
      { id: "q6", question: "Warum wird bei der Bemessungsgrundlage im Zweifel der höhere Wert angesetzt?", options: ["Um die Steuerlast zu erhöhen", "Um sicherzustellen, dass genug Mittel für eine Wiederbeschaffung angesammelt werden", "Weil dies gesetzlich für die Handelsbilanz vorgeschrieben ist", "Weil ein niedrigerer Wert rechnerisch nicht möglich ist"], correctIndex: 1, explanation: "Eine zu niedrige Bemessungsgrundlage würde zu wenig Substanz für eine spätere Ersatzinvestition zurückhalten." },
      { id: "q7", question: "Warum sind progressive Abschreibungsmethoden in der Praxis unüblich?", options: ["Weil sie gesetzlich verboten sind", "Weil der Nutzen eines Anlageguts meist zu Beginn der Nutzungsdauer am höchsten ist und mit der Zeit abnimmt", "Weil sie immer zu negativen Restbuchwerten führen", "Weil sie nur bei leistungsabhängiger Abschreibung zulässig sind"], correctIndex: 1, explanation: "Ein mit der Zeit steigender Werteverzehr widerspricht dem typischen Nutzungsverlauf von Anlagegütern." },
      { id: "q8", question: "Welche Abschreibungsmethode berücksichtigt die tatsächliche Nutzung statt der Zeit?", options: ["Lineare Abschreibung", "Arithmetisch-degressive Abschreibung", "Leistungsabhängige Abschreibung", "Geometrisch-degressive Abschreibung"], correctIndex: 2, explanation: "Die leistungsabhängige Abschreibung koppelt den Jahresbetrag an die tatsächlich erbrachte Leistung, nicht an die Zeit." },
      { id: "q9", question: "Bei welcher Abschreibungsmethode ist der Jahresbetrag über die gesamte Nutzungsdauer konstant, sofern die Nutzung konstant bleibt?", options: ["Geometrisch-degressive Abschreibung", "Lineare Abschreibung", "Arithmetisch-degressive Abschreibung", "Progressive Abschreibung"], correctIndex: 1, explanation: "Die lineare Abschreibung verteilt den abzuschreibenden Betrag gleichmäßig über alle Jahre der Nutzungsdauer." },
      { id: "q10", question: "Ein Anlagegut mit Anschaffungswert 50.000 € und Nutzungsdauer 5 Jahre wird linear abgeschrieben. Wie hoch ist der Jahresbetrag (Restwert 0 €)?", options: ["5.000 €", "10.000 €", "25.000 €", "50.000 €"], correctIndex: 1, explanation: "50.000 € / 5 Jahre = 10.000 € pro Jahr." }
    ]
  },
  {
    id: "kalkulatorische-zinsen",
    chapter: 2,
    order: 3,
    title: "Kalkulatorische Zinsen und betriebsnotwendiges Kapital",
    icon: "🏦",
    summary: "Wie das betriebsnotwendige Kapital ermittelt wird und wie kalkulatorische Zinsen mit einem Mischzinssatz aus Eigen- und Fremdkapital berechnet werden.",
    explanation: [
      { type: "p", text: "Kalkulatorische Zinsen erfassen die Verzinsung des betriebsnotwendigen Kapitals - und zwar unabhängig davon, ob dafür tatsächlich Zinsaufwand angefallen ist. Der Gedanke dahinter ist ein Opportunitätskostengedanke: Auch das eingesetzte Eigenkapital hätte alternativ am Kapitalmarkt angelegt werden und dort einen Ertrag erwirtschaften können; dieser entgangene Ertrag wird als kalkulatorische Kosten erfasst." },
      { type: "p", text: "Ausgangspunkt ist das betriebsnotwendige Vermögen: Es umfasst alle Vermögensgegenstände, die dem eigentlichen Betriebszweck dienen (z. B. betrieblich genutzte Grundstücke, Gebäude, Maschinen und das Umlaufvermögen). Nicht betriebsnotwendige Teile - etwa ein Grundstück, das fremdvermietet und damit nicht selbst betrieblich genutzt wird - werden aus dem betriebsnotwendigen Vermögen ausgeschlossen. Vermögensgegenstände, die zwar betrieblich genutzt, dem Unternehmen aber unentgeltlich überlassen wurden (z. B. ein Grundstück, das ein Gesellschafter kostenlos zur Verfügung stellt), werden dagegen trotzdem in das betriebsnotwendige Vermögen einbezogen, da sie dem Betriebszweck dienen und ohne diese Überlassung anderweitig hätten beschafft werden müssen." },
      { type: "p", text: "Da sich Bestände unterjährig verändern (z. B. durch Zu- und Abgänge oder laufende Abschreibungen), wird zur Glättung meist mit Durchschnittswerten gerechnet: Durchschnittswert = (Anfangswert + Endwert) / 2." },
      { type: "p", text: "Vom betriebsnotwendigen Vermögen wird das Abzugskapital subtrahiert: Das sind zinslose Passivposten, für die das Unternehmen selbst kein eigenes Kapital einsetzen musste, z. B. erhaltene Kundenanzahlungen und Verbindlichkeiten aus Lieferungen und Leistungen. Betriebsnotwendiges Kapital = betriebsnotwendiges Vermögen − Abzugskapital." },
      { type: "p", text: "Zur Verzinsung wird meist ein Mischzinssatz verwendet: Das Eigenkapital wird zu einem Satz aus sicherem Basiszins zuzüglich eines unternehmerischen Risikozuschlags verzinst, das Fremdkapital dagegen zum tatsächlichen Fremdkapitalzinssatz. Beide Sätze werden entsprechend ihrem jeweiligen Anteil am gesamten eingesetzten Kapital gewichtet und zu einem einheitlichen Mischzinssatz zusammengeführt, mit dem anschließend das gesamte betriebsnotwendige Kapital verzinst wird." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Die XYZ-GmbH ermittelt zum Jahresende folgende Werte: Grundstücke und Gebäude Buchwert Jahresanfang 500.000 €, davon ist ein Grundstück im Buchwert von 80.000 € fremdvermietet (nicht betriebsnotwendig); ein weiteres, betrieblich genutztes Grundstück im Buchwert von 60.000 € wurde von einem Gesellschafter unentgeltlich überlassen (bereits in den 500.000 € enthalten). Maschinen: Buchwert Jahresanfang 300.000 €, jährliche Abschreibung 40.000 € (linear, damit Buchwert Jahresende 260.000 €). Umlaufvermögen: 150.000 € Jahresanfang, 190.000 € Jahresende. Abzugskapital: Verbindlichkeiten aus Lieferungen und Leistungen 70.000 €, Kundenanzahlungen 30.000 €. Der Eigenkapitalanteil beträgt 25 % des betriebsnotwendigen Kapitals, der Eigenkapitalzinssatz setzt sich aus einem Basiszins von 3 % und einem Risikozuschlag von 5 % zusammen, der Fremdkapitalzinssatz beträgt 6 %. Ermitteln Sie das betriebsnotwendige Kapital, den Mischzinssatz und die kalkulatorischen Zinsen.",
        solution: [
          { type: "p", text: "Betriebsnotwendiges Vermögen Grundstücke/Gebäude: Der Buchwert von 500.000 € muss um das fremdvermietete (nicht betriebsnotwendige) Grundstück von 80.000 € gekürzt werden. Das unentgeltlich überlassene, aber betrieblich genutzte Grundstück (60.000 €) bleibt dagegen enthalten. Anfangswert: 500.000 − 80.000 = 420.000 €. Da sich hieran unterjährig nichts ändert, gilt derselbe Wert auch zum Jahresende: 420.000 €." },
          { type: "p", text: "Maschinen: Anfangswert 300.000 €, Endwert 260.000 €, Durchschnittswert = (300.000+260.000)/2 = 280.000 €." },
          { type: "p", text: "Umlaufvermögen: Durchschnittswert = (150.000+190.000)/2 = 170.000 €." },
          { type: "p", text: "Betriebsnotwendiges Vermögen gesamt = 420.000 + 280.000 + 170.000 = 870.000 €." },
          { type: "p", text: "Abzugskapital = 70.000 + 30.000 = 100.000 €." },
          { type: "p", text: "Betriebsnotwendiges Kapital = 870.000 − 100.000 = 770.000 €." },
          { type: "p", text: "Eigenkapitalzinssatz = 3 % + 5 % = 8 %. Mischzinssatz = 0,25 · 8 % + 0,75 · 6 % = 2 % + 4,5 % = 6,5 %." },
          { type: "p", text: "Kalkulatorische Zinsen = 770.000 € · 6,5 % = 50.050 €." }
        ]
      },
      {
        id: "ex2",
        prompt: "Ein Unternehmen weist folgendes betriebsnotwendiges Vermögen aus: Sachanlagen (Durchschnittswert) 400.000 €, Umlaufvermögen (Durchschnittswert) 100.000 €. Abzugskapital: Kundenanzahlungen 20.000 €, Lieferantenverbindlichkeiten 30.000 €. Eigenkapitalanteil 40 %, Eigenkapitalzinssatz 9 %, Fremdkapitalzinssatz 5 %. Berechnen Sie das betriebsnotwendige Kapital, den Mischzinssatz und die kalkulatorischen Zinsen.",
        solution: [
          { type: "p", text: "Betriebsnotwendiges Vermögen = 400.000 + 100.000 = 500.000 €." },
          { type: "p", text: "Abzugskapital = 20.000 + 30.000 = 50.000 €." },
          { type: "p", text: "Betriebsnotwendiges Kapital = 500.000 − 50.000 = 450.000 €." },
          { type: "p", text: "Mischzinssatz = 0,40 · 9 % + 0,60 · 5 % = 3,6 % + 3 % = 6,6 %." },
          { type: "p", text: "Kalkulatorische Zinsen = 450.000 € · 6,6 % = 29.700 €." }
        ]
      },
      {
        id: "ex3",
        prompt: "Warum wird ein Grundstück, das dem Unternehmen unentgeltlich zur Verfügung gestellt wurde, aber betrieblich genutzt wird, trotzdem in das betriebsnotwendige Vermögen einbezogen?",
        solution: [
          { type: "p", text: "Entscheidend für die Einbeziehung in das betriebsnotwendige Vermögen ist allein, ob ein Vermögensgegenstand dem eigentlichen Betriebszweck dient - nicht, wie er finanziert oder ob dafür ein Entgelt gezahlt wurde. Würde das Grundstück nicht unentgeltlich überlassen, müsste das Unternehmen es kaufen oder mieten und dafür eigenes Kapital einsetzen bzw. Miete zahlen. Um die Kostenrechnung unabhängig von solchen zufälligen Finanzierungsentscheidungen vergleichbar zu halten, wird das Grundstück daher trotzdem mit seinem Wert im betriebsnotwendigen Vermögen berücksichtigt und mitverzinst." }
        ]
      },
      {
        id: "ex4",
        prompt: "Warum werden Kundenanzahlungen und Verbindlichkeiten aus Lieferungen und Leistungen als Abzugskapital vom betriebsnotwendigen Vermögen abgezogen?",
        solution: [
          { type: "p", text: "Abzugskapital umfasst zinslose Passivposten, für die das Unternehmen selbst kein eigenes Kapital aufbringen musste. Kundenanzahlungen sind bereits erhaltenes Geld von Kunden, das dem Unternehmen zinslos zur Verfügung steht; Verbindlichkeiten aus Lieferungen und Leistungen bedeuten, dass Lieferanten dem Unternehmen faktisch einen zinslosen Kredit gewähren, indem sie erst später bezahlt werden. Da für diese Teile des Vermögens kein eigenes (zu verzinsendes) Kapital eingesetzt wurde, dürfen sie bei der Ermittlung des zu verzinsenden betriebsnotwendigen Kapitals nicht mitgezählt werden - sie werden daher als Abzugskapital subtrahiert." }
        ]
      },
      {
        id: "ex5",
        prompt: "Ein Unternehmen hat einen Eigenkapitalanteil von 30 % zu einem Zinssatz von 10 % und einen Fremdkapitalanteil von 70 % zu einem Zinssatz von 4 %. Berechnen Sie den gewichteten Mischzinssatz.",
        solution: [
          { type: "p", text: "Mischzinssatz = 0,30 · 10 % + 0,70 · 4 % = 3 % + 2,8 % = 5,8 %." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was erfassen kalkulatorische Zinsen?", options: ["Nur den tatsächlich gezahlten Fremdkapitalzins", "Die Verzinsung des betriebsnotwendigen Kapitals, unabhängig von tatsächlichem Zinsaufwand", "Ausschließlich Bankgebühren", "Nur die Verzinsung des Umlaufvermögens"], correctIndex: 1, explanation: "Kalkulatorische Zinsen berücksichtigen auch den Opportunitätskostengedanken für das eingesetzte Eigenkapital, unabhängig von tatsächlich gezahlten Zinsen." },
      { id: "q2", question: "Ein fremdvermietetes, nicht selbst betrieblich genutztes Grundstück wird...", options: ["immer ins betriebsnotwendige Vermögen einbezogen", "aus dem betriebsnotwendigen Vermögen ausgeschlossen", "als Abzugskapital behandelt", "doppelt verzinst"], correctIndex: 1, explanation: "Da es nicht dem Betriebszweck dient, zählt es nicht zum betriebsnotwendigen Vermögen." },
      { id: "q3", question: "Ein unentgeltlich überlassenes, aber betrieblich genutztes Grundstück wird...", options: ["ausgeschlossen, da es nichts gekostet hat", "trotzdem ins betriebsnotwendige Vermögen einbezogen", "als Abzugskapital verrechnet", "nur zur Hälfte berücksichtigt"], correctIndex: 1, explanation: "Entscheidend ist die betriebliche Nutzung, nicht die Finanzierung - daher wird es trotzdem einbezogen." },
      { id: "q4", question: "Warum werden bei der Ermittlung des betriebsnotwendigen Vermögens meist Durchschnittswerte verwendet?", options: ["Um Steuern zu sparen", "Um unterjährige Schwankungen von Anfangs- und Endwert zu glätten", "Weil Endwerte gesetzlich verboten sind", "Weil Anfangswerte immer ungenau sind"], correctIndex: 1, explanation: "Der Durchschnitt aus Anfangs- und Endwert glättet unterjährige Veränderungen wie laufende Abschreibungen oder Bestandsänderungen." },
      { id: "q5", question: "Was zählt zum Abzugskapital?", options: ["Eigenkapital und Rücklagen", "Zinslose Passivposten wie Kundenanzahlungen und Lieferantenverbindlichkeiten", "Alle Vermögensgegenstände des Anlagevermögens", "Nur Bankkredite"], correctIndex: 1, explanation: "Abzugskapital sind zinslose Passivposten, für die kein eigenes Kapital eingesetzt werden musste." },
      { id: "q6", question: "Wie wird das betriebsnotwendige Kapital berechnet?", options: ["Betriebsnotwendiges Vermögen + Abzugskapital", "Betriebsnotwendiges Vermögen − Abzugskapital", "Anlagevermögen − Umlaufvermögen", "Eigenkapital + Fremdkapital"], correctIndex: 1, explanation: "Vom betriebsnotwendigen Vermögen wird das zinslose Abzugskapital subtrahiert." },
      { id: "q7", question: "Wie setzt sich der Eigenkapitalzinssatz beim Mischzinssatz typischerweise zusammen?", options: ["Aus dem tatsächlichen Bankzins", "Aus einem sicheren Basiszins zuzüglich eines Risikozuschlags", "Aus dem Fremdkapitalzinssatz abzüglich eines Abschlags", "Er ist immer 0 %"], correctIndex: 1, explanation: "Der Eigenkapitalzinssatz spiegelt die entgangene Anlagemöglichkeit wider und besteht aus Basiszins plus unternehmerischem Risikozuschlag." },
      { id: "q8", question: "Ein Unternehmen hat 20 % Eigenkapital zu 12 % und 80 % Fremdkapital zu 5 %. Wie hoch ist der Mischzinssatz?", options: ["8,5 %", "6,4 %", "8,5 % ist falsch, richtig ist 6,4 %", "17 %"], correctIndex: 1, explanation: "0,20·12% + 0,80·5% = 2,4% + 4% = 6,4%." },
      { id: "q9", question: "Welcher Grundgedanke steht hinter der Verzinsung des Eigenkapitals in der Kostenrechnung?", options: ["Steuerliche Vorschriften", "Der Opportunitätskostengedanke: entgangene alternative Anlagemöglichkeit", "Reine Willkür der Geschäftsführung", "Handelsrechtliche Vorsichtspflicht"], correctIndex: 1, explanation: "Auch Eigenkapital hätte alternativ am Kapitalmarkt angelegt werden können - der entgangene Ertrag wird kalkulatorisch erfasst." },
      { id: "q10", question: "Welche Aussage zum betriebsnotwendigen Vermögen ist korrekt?", options: ["Es umfasst ausschließlich das Anlagevermögen", "Es umfasst alle dem Betriebszweck dienenden Vermögensgegenstände, einschließlich Umlaufvermögen", "Es ist identisch mit dem Abzugskapital", "Es wird nie mit Durchschnittswerten berechnet"], correctIndex: 1, explanation: "Betriebsnotwendiges Vermögen schließt sowohl betrieblich genutztes Anlagevermögen als auch Umlaufvermögen ein." }
    ]
  },
  {
    id: "kostenauflösung",
    chapter: 2,
    order: 4,
    title: "Kostenauflösung: Fixe und variable Kosten trennen",
    icon: "📐",
    summary: "Mit der Zwei-Punkt- bzw. Hoch-Tief-Methode aus zwei Beschäftigungspunkten eine lineare Kostenfunktion ableiten - und ihre Grenzen kennen.",
    explanation: [
      { type: "p", text: "In vielen Aufgaben liegen nur die Gesamtkosten bei zwei (oder mehr) unterschiedlichen Beschäftigungsniveaus vor, nicht aber, wie sich diese Kosten in einen fixen und einen variablen Anteil aufteilen. Ziel der Kostenauflösung ist es, aus diesen Daten eine lineare Kostenfunktion K(x) = Kf + kv · x abzuleiten, wobei Kf die Fixkosten, kv die variablen Stückkosten und x die Beschäftigung (Menge) bezeichnet." },
      { type: "p", text: "Die gängige Methode dafür ist die Zwei-Punkt-Methode, auch Differenzenquotienten- oder Hoch-Tief-Methode genannt. Aus zwei bekannten Wertepaaren (x1, K1) und (x2, K2) wird zunächst der variable Stückkostensatz als Steigung der Geraden berechnet: kv = (K2 − K1) / (x2 − x1). Anschließend werden die Fixkosten durch Einsetzen eines der beiden Punkte ermittelt: Kf = K1 − kv · x1 (äquivalent auch über den zweiten Punkt: Kf = K2 − kv · x2)." },
      { type: "list", items: [
        "Gewinnzielplanung: Um eine Zielmenge zu bestimmen, die einen gewünschten Stückgewinn erreicht, müssen die Kosten je Stück (Kf/x + kv) höchstens dem Verkaufspreis abzüglich des angestrebten Stückgewinns entsprechen: Kf/x + kv ≤ Preis − Zielgewinn je Stück. Daraus lässt sich die notwendige Mindestmenge x auflösen.",
        "Angebotsvergleich: Aus Bruttoangeboten mehrerer Anbieter (die neben den eigentlichen Kosten auch Gewinnzuschlag und/oder Steuer enthalten) lässt sich durch Rückrechnung die zugrunde liegende Kostenfunktion jedes Anbieters ermitteln. So kann bestimmt werden, ab welcher Bestellmenge welcher Anbieter günstiger ist."
      ]},
      { type: "p", text: "Die Kostenauflösung mit der Zwei-Punkt-Methode hat aber klare Grenzen: Die ermittelte Gerade ist immer nur so verlässlich wie die beiden verwendeten Datenpunkte. Prognosen außerhalb des beobachteten Beschäftigungsbereichs (Extrapolation) sind entsprechend unsicher, da sich Fixkosten sprunghaft ändern können (z. B. durch eine zusätzliche Schicht oder eine neue Maschine) oder die tatsächliche Kostenfunktion gar nicht linear verläuft. Liegen weitere, für die Berechnung nicht verwendete Datenpunkte deutlich abseits der berechneten Geraden, ist das ein deutliches Warnsignal für Störeinflüsse, Sprungfixkosten oder eine tatsächlich nichtlineare Kostenstruktur - die ermittelte Kostenfunktion sollte dann nur mit Vorsicht verwendet werden." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Die VeggiSchoki GmbH verkauft im Monat Mai 8.000 Stück bei Gesamtkosten von 62.000 €, im Monat Juni 12.000 Stück bei Gesamtkosten von 78.000 €. Der Nettoerlös je Stück beträgt konstant 9 €. Im Juli steigen die Fixkosten gegenüber Juni um 10 %. Das Unternehmen möchte im Juli einen Stückgewinn von 2 € erreichen. Die maximale Kapazität liegt bei 15.000 Stück. Ermitteln Sie die Kostenfunktion (auf Basis Mai/Juni), berechnen Sie die für Juli benötigte Absatzmenge und prüfen Sie, ob das Ziel innerhalb der Kapazität erreichbar ist.",
        solution: [
          { type: "p", text: "kv = (78.000 − 62.000) / (12.000 − 8.000) = 16.000 / 4.000 = 4 € je Stück." },
          { type: "p", text: "Kf = 62.000 − 4 · 8.000 = 62.000 − 32.000 = 30.000 € (Basis Mai/Juni)." },
          { type: "p", text: "Fixkosten Juli = 30.000 € · 1,10 = 33.000 €." },
          { type: "p", text: "Zielbedingung: Kf/x + kv ≤ Preis − Zielgewinn → 33.000/x + 4 ≤ 9 − 2 = 7 → 33.000/x ≤ 3 → x ≥ 11.000 Stück." },
          { type: "p", text: "Da die maximale Kapazität 15.000 Stück beträgt und 11.000 Stück darunterliegt, ist das Gewinnziel innerhalb der Kapazität erreichbar." }
        ]
      },
      {
        id: "ex2",
        prompt: "Eine Druckerei benötigt für 1.000 Broschüren ein Bruttoangebot (inkl. 19 % MwSt. und 20 % Gewinnzuschlag auf die Kosten) von Anbieter A über 2.856 € und für 3.000 Broschüren von 5.712 €. Anbieter B verlangt brutto (gleiche Zuschläge) für 1.000 Broschüren 3.213 € und für 3.000 Broschüren 5.355 €. Ermitteln Sie die Kostenfunktionen beider Anbieter und bestimmen Sie, ab welcher Menge Anbieter B günstiger ist.",
        solution: [
          { type: "p", text: "Zunächst werden die Bruttopreise auf die reinen Kosten zurückgerechnet: Kosten = Bruttopreis / (1,19 · 1,20) = Bruttopreis / 1,428." },
          { type: "p", text: "Anbieter A: K(1.000) = 2.856 / 1,428 = 2.000 €; K(3.000) = 5.712 / 1,428 = 4.000 €. kv(A) = (4.000−2.000)/(3.000−1.000) = 1 €/Stück. Kf(A) = 2.000 − 1·1.000 = 1.000 €." },
          { type: "p", text: "Anbieter B: K(1.000) = 3.213 / 1,428 = 2.250 €; K(3.000) = 5.355 / 1,428 = 3.750 €. kv(B) = (3.750−2.250)/(3.000−1.000) = 0,75 €/Stück. Kf(B) = 2.250 − 0,75·1.000 = 1.500 €." },
          { type: "p", text: "Gleichsetzen: 1.000 + 1·x = 1.500 + 0,75·x → 0,25·x = 500 → x = 2.000 Stück. Für x < 2.000 ist Anbieter A günstiger (niedrigere Fixkosten), für x > 2.000 ist Anbieter B günstiger (niedrigere variable Stückkosten)." }
        ]
      },
      {
        id: "ex3",
        prompt: "Bei vier verschiedenen Beschäftigungsniveaus wurden folgende Gesamtkosten gemessen: 4.000 Stück: 52.000 €; 6.000 Stück: 58.000 €; 8.000 Stück: 61.000 €; 10.000 Stück: 70.000 €. Ermitteln Sie die Kostenfunktion nur anhand des höchsten und niedrigsten Beschäftigungspunkts (Hoch-Tief-Methode) und berechnen Sie die Plankosten bei einer Planbeschäftigung von 9.000 Stück.",
        solution: [
          { type: "p", text: "Höchster Punkt: 10.000 Stück / 70.000 €. Niedrigster Punkt: 4.000 Stück / 52.000 €." },
          { type: "p", text: "kv = (70.000 − 52.000) / (10.000 − 4.000) = 18.000 / 6.000 = 3 € je Stück." },
          { type: "p", text: "Kf = 52.000 − 3 · 4.000 = 52.000 − 12.000 = 40.000 €." },
          { type: "p", text: "Kostenfunktion: K(x) = 40.000 + 3x. Plankosten bei 9.000 Stück: K(9.000) = 40.000 + 3 · 9.000 = 40.000 + 27.000 = 67.000 €." }
        ]
      },
      {
        id: "ex4",
        prompt: "Verwenden Sie die Daten aus Aufgabe 3. Prüfen Sie, wie gut die beiden nicht für die Berechnung verwendeten Punkte (6.000 Stück / 58.000 € und 8.000 Stück / 61.000 €) zur ermittelten Kostenfunktion passen, und beurteilen Sie die Verlässlichkeit der Kostenfunktion.",
        solution: [
          { type: "p", text: "Kostenfunktion: K(x) = 40.000 + 3x. Für x = 6.000: K = 40.000 + 18.000 = 58.000 € - stimmt exakt mit dem gemessenen Wert überein. Für x = 8.000: K = 40.000 + 24.000 = 64.000 €, gemessen wurden aber nur 61.000 € - eine Abweichung von 3.000 €." },
          { type: "p", text: "Der Punkt bei 6.000 Stück passt sehr gut zur Geraden, der Punkt bei 8.000 Stück weicht dagegen spürbar ab. Das deutet darauf hin, dass die tatsächliche Kostenfunktion im Bereich zwischen 8.000 und 10.000 Stück nicht exakt linear verläuft oder Störeinflüsse (z. B. Mengenrabatte beim Materialeinkauf) vorliegen. Die anhand von Hoch- und Tiefpunkt ermittelte Kostenfunktion sollte daher nur mit Vorsicht als Näherung verwendet werden, insbesondere für Prognosen im oberen Beschäftigungsbereich." }
        ]
      },
      {
        id: "ex5",
        prompt: "Erläutern Sie, warum die Zwei-Punkt-Methode zur Kostenauflösung nur eine Näherung und keine 'exakte' Kostenfunktion liefert.",
        solution: [
          { type: "p", text: "Die Zwei-Punkt-Methode unterstellt, dass sich die Gesamtkosten zwischen den beiden verwendeten Beschäftigungspunkten exakt linear verhalten - also mit konstanten Fixkosten und einem konstanten variablen Stückkostensatz. In der Realität können jedoch weitere Einflussfaktoren wirken, die dieser Annahme widersprechen: Sprungfixkosten (z. B. eine zusätzliche Maschine oder Schicht ab einer bestimmten Menge), Mengenrabatte beim Einkauf, sinkende oder steigende Grenzkosten durch Kapazitätsauslastung oder saisonale Schwankungen. Da nur zwei Datenpunkte zur Berechnung herangezogen werden, geht jede Information über den Kostenverlauf zwischen bzw. außerhalb dieser Punkte verloren - die resultierende Gerade ist daher bestenfalls eine Näherung, deren Güte von der tatsächlichen Linearität der Kostenfunktion und von der Repräsentativität der beiden gewählten Punkte abhängt." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie lautet die allgemeine Form einer linearen Kostenfunktion?", options: ["K(x) = Kf · x + kv", "K(x) = Kf + kv · x", "K(x) = Kf − kv · x", "K(x) = kv / Kf"], correctIndex: 1, explanation: "Kf sind die Fixkosten, kv die variablen Stückkosten, x die Beschäftigung." },
      { id: "q2", question: "Wie wird kv bei der Zwei-Punkt-Methode berechnet?", options: ["kv = (K2 − K1) / (x2 − x1)", "kv = (K2 + K1) / (x2 + x1)", "kv = K1 / x1", "kv = (x2 − x1) / (K2 − K1)"], correctIndex: 0, explanation: "kv entspricht der Steigung der Geraden zwischen den beiden Beschäftigungspunkten." },
      { id: "q3", question: "Bei Gesamtkosten von 40.000 € bei 5.000 Stück und 55.000 € bei 8.000 Stück: wie hoch ist kv?", options: ["3 €/Stück", "5 €/Stück", "8 €/Stück", "15.000 €/Stück"], correctIndex: 1, explanation: "(55.000−40.000)/(8.000−5.000) = 15.000/3.000 = 5 €/Stück." },
      { id: "q4", question: "Wie werden die Fixkosten Kf nach Ermittlung von kv berechnet?", options: ["Kf = K1 · kv", "Kf = K1 − kv · x1", "Kf = K1 + x1", "Kf = x1 / K1"], correctIndex: 1, explanation: "Durch Einsetzen eines bekannten Punktes und Auflösen nach Kf." },
      { id: "q5", question: "Wofür wird die Kostenauflösung u. a. bei der Gewinnzielplanung genutzt?", options: ["Um den Basiszins zu bestimmen", "Um die Absatzmenge zu ermitteln, die einen gewünschten Stückgewinn erreicht", "Um Abschreibungssätze festzulegen", "Um das betriebsnotwendige Kapital zu berechnen"], correctIndex: 1, explanation: "Über Kf/x + kv ≤ Preis − Zielgewinn lässt sich die nötige Mindestmenge berechnen." },
      { id: "q6", question: "Was ist die zentrale Schwäche der Zwei-Punkt-Methode?", options: ["Sie berücksichtigt keine variablen Kosten", "Sie unterstellt Linearität und ist nur so verlässlich wie die beiden verwendeten Datenpunkte", "Sie kann nur mit drei oder mehr Punkten angewendet werden", "Sie funktioniert nur bei sinkenden Kosten"], correctIndex: 1, explanation: "Da nur zwei Punkte verwendet werden, geht jede Information über Abweichungen von der Linearität verloren." },
      { id: "q7", question: "Was deutet darauf hin, dass die ermittelte Kostenfunktion unzuverlässig sein könnte?", options: ["Wenn alle Datenpunkte exakt auf der Geraden liegen", "Wenn weitere, nicht verwendete Datenpunkte deutlich abseits der berechneten Geraden liegen", "Wenn die Fixkosten null betragen", "Wenn kv positiv ist"], correctIndex: 1, explanation: "Deutliche Abweichungen weiterer Punkte sind ein Warnsignal für Sprungfixkosten, Störeinflüsse oder Nichtlinearität." },
      { id: "q8", question: "Warum ist eine Extrapolation außerhalb des beobachteten Beschäftigungsbereichs riskant?", options: ["Weil sich Fixkosten sprunghaft ändern können und die Linearität dort nicht mehr gesichert ist", "Weil außerhalb des Bereichs keine Kosten mehr anfallen", "Weil kv dort automatisch null wird", "Weil Extrapolation gesetzlich verboten ist"], correctIndex: 0, explanation: "Außerhalb des beobachteten Bereichs ist unklar, ob die Kostenfunktion weiterhin linear verläuft." },
      { id: "q9", question: "Ein Anbieter verlangt 1.500 € für 500 Stück und 2.500 € für 1.500 Stück. Wie hoch sind kv und Kf?", options: ["kv = 1 €/Stück, Kf = 1.000 €", "kv = 2 €/Stück, Kf = 500 €", "kv = 1,5 €/Stück, Kf = 750 €", "kv = 0,5 €/Stück, Kf = 1.250 €"], correctIndex: 0, explanation: "kv = (2.500−1.500)/(1.500−500) = 1.000/1.000 = 1 €/Stück; Kf = 1.500 − 1·500 = 1.000 €." },
      { id: "q10", question: "Wie wird beim Angebotsvergleich aus einem Bruttopreis mit Gewinnzuschlag und Steuer die reine Kostenfunktion ermittelt?", options: ["Bruttopreis wird unverändert übernommen", "Bruttopreis wird durch (1 + Steuersatz) · (1 + Gewinnzuschlagsatz) geteilt", "Bruttopreis wird mit dem Steuersatz multipliziert", "Bruttopreis wird durch die Menge dividiert und als Kf verwendet"], correctIndex: 1, explanation: "Um von brutto auf die reinen Kosten zu kommen, muss zunächst der Gewinnzuschlag und dann die Steuer (bzw. in umgekehrter Reihenfolge, je nach Aufbau) herausgerechnet werden." }
    ]
  }
];
