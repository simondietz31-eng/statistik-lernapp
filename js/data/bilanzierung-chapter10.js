const BILANZIERUNG_CHAPTER10_TOPICS = [
  {
    id: "bilanzierung-digitalisierung",
    chapter: 10,
    order: 1,
    title: "Aspekte der Digitalisierung des externen Rechnungswesens",
    icon: "💻",
    summary: "Wie Finanzbuchhaltungssoftware (am Beispiel Lexware buchhaltung plus) das externe Rechnungswesen unterstützt, und ob der Mensch dabei weiterhin gebraucht wird.",
    explanation: [
      { type: "p", text: "Die Digitalisierung des externen Rechnungswesens zeigt sich vor allem in spezialisierter Finanzbuchhaltungssoftware (\"Fibu-Software\"). Eine Recherche auf einem Softwareportal wie softguide.de zum Suchbegriff \"Fibu\" liefert eine große Zahl an Treffern — es gibt also einen breiten Markt an Anbietern für die Finanzbuchhaltung." },
      { type: "p", text: "Als Beispiel wird in der Vorlesung die Software \"Lexware buchhaltung plus\" vorgestellt, die sich laut Anbieter an Freiberufler, Handwerker und Kleinbetriebe richtet und den Anspruch hat, Buchhaltung \"einfach und sicher\" zu machen." },
      { type: "list", items: [
        "Basisfunktionen: abweichendes Wirtschaftsjahr möglich, aktuelle Umsatzsteuerformulare, ELSTER (elektronische Umsatzsteuer-Voranmeldung gem. § 18 Abs. 1 UStG), EÜR-Formular (gem. § 4 Abs. 3 EStG), Soll-Ist-Versteuerung, Saldenvortrags-Assistent, automatische Kontenplan-Aktualisierung",
        "EHUG-Schnittstelle sowie elektronische Übermittlung der E-Bilanz u. a. ans Finanzamt, Verwaltung mehrerer Firmen (bis zu 5), flexibel einstellbare/druckbare/exportierbare Bildschirmlisten, Daten-Export/Import-Schnittstellen (ASCII, DATEV, MS Excel …)"
      ]},
      { type: "list", items: [
        "Buchhaltung: mehr als 10 Musterkontenrahmen (u. a. für Ärzte, Vereine, Handwerk, Landwirtschaft, Einzelhandel, SKR 01–04), DATEV-kompatibel; mehrere Buchungsmasken; automatisierte Buchungsvorlagen; Monatsabschluss; Betriebsprüfer-Modus; GoBD-Testat; Storno-, Splitt- und Offene-Posten-Buchungen; Buchen digitaler Belege",
        "Auswertungen: Business Cockpit (Unternehmens-Eckdaten auf einen Blick), vorläufige Berichte, betriebswirtschaftliche Auswertungen (auch grafisch), Bankenmappe, Budgetverwaltung mit Soll-Ist-Vergleich, Kostenstellen- und Kennzahlenauswertung",
        "Zahlungsverkehr/Mahnwesen: Offene-Posten-Verwaltung mit automatischem Mahnwesen inkl. Verzugszinsenberechnung"
      ]},
      { type: "p", text: "Trotz dieses hohen Automatisierungsgrads bleibt der Mensch bei der Erstellung des Jahresabschlusses und bei dessen Prüfung weiterhin erforderlich — insbesondere für fachliche Beurteilungen, Ermessensentscheidungen im Rahmen von Bilanzierungswahlrechten sowie für die persönliche Verantwortung, die mit einem Prüfungstestat verbunden ist. Software automatisiert vor allem Routinetätigkeiten wie Erfassung, Buchung und Standardauswertungen." }
    ],
    exercises: [
      {
        id: "bilanzierung-digitalisierung-e1",
        prompt: "Welchen Funktionsumfang bietet heute auch schon recht günstige Finanzbuchhaltungssoftware (wie z. B. Lexware buchhaltung plus)? Nennen Sie mind. 5 Aspekte.",
        solution: [{ type: "p", text: "Zum Beispiel: (1) ELSTER-Anbindung für die elektronische Umsatzsteuer-Voranmeldung, (2) EHUG-Schnittstelle mit elektronischer Übermittlung der E-Bilanz ans Finanzamt, (3) DATEV-kompatible Musterkontenrahmen (u. a. SKR 01–04), (4) automatisierte Buchungsvorlagen und mehrere Buchungsmasken, (5) GoBD-Testat als Nachweis ordnungsmäßiger elektronischer Buchführung, (6) Betriebsprüfer-Modus für die digitale Betriebsprüfung, (7) automatisches Mahnwesen inkl. Verzugszinsenberechnung, (8) Business Cockpit und betriebswirtschaftliche Auswertungen." }]
      },
      {
        id: "bilanzierung-digitalisierung-e2",
        prompt: "Führen Sie bitte zumindest drei Standard-Softwarehersteller an, die auch die Finanzbuchhaltung abdecken.",
        solution: [{ type: "p", text: "Zum Beispiel Lexware, DATEV und SAP (weitere gängige Anbieter am Markt sind u. a. Sage oder WISO). Eine Recherche auf einem Softwareportal wie softguide.de zeigt, dass es für den Bereich Finanzbuchhaltung eine Vielzahl weiterer Anbieter gibt." }]
      },
      {
        id: "bilanzierung-digitalisierung-e3",
        prompt: "Wird – trotz Digitalisierung – auch weiterhin noch der Mensch bei der Erstellung des Jahresabschlusses (und der Jahresabschlussprüfung) benötigt? Begründen Sie.",
        solution: [{ type: "p", text: "Ja. Software automatisiert vor allem Routinetätigkeiten wie das Erfassen und Buchen laufender Geschäftsvorfälle sowie Standardauswertungen. Die Erstellung und Prüfung des Jahresabschlusses erfordert aber weiterhin menschliche fachliche Beurteilung — z. B. bei der Ausübung von Bilanzierungswahlrechten, bei der Einschätzung ungewöhnlicher oder komplexer Sachverhalte und bei der Plausibilisierung von Ergebnissen. Zudem trägt bei der Abschlussprüfung die Prüferin bzw. der Prüfer die persönliche Verantwortung für das erteilte Testat." }]
      },
      {
        id: "bilanzierung-digitalisierung-e4",
        prompt: "Was bedeutet die \"EHUG-Schnittstelle\" bei Finanzbuchhaltungssoftware, und wozu dient sie im Kontext der Digitalisierung des Rechnungswesens?",
        solution: [{ type: "p", text: "Die EHUG-Schnittstelle (EHUG = Gesetz über elektronische Handelsregister und Genossenschaftsregister sowie das Unternehmensregister) ermöglicht es, Abschlussdaten elektronisch zu übermitteln — u. a. die E-Bilanz an das Finanzamt. Sie ist damit ein Beispiel dafür, wie Digitalisierung den Datenaustausch zwischen Unternehmen und Behörden im externen Rechnungswesen vereinfacht und beschleunigt." }]
      },
      {
        id: "bilanzierung-digitalisierung-e5",
        prompt: "Erläutern Sie, was unter dem \"Betriebsprüfer-Modus\" und dem \"GoBD-Testat\" einer Finanzbuchhaltungssoftware zu verstehen ist.",
        solution: [{ type: "p", text: "Der Betriebsprüfer-Modus stellt einen speziell für die (digitale) Betriebsprüfung vorgesehenen Zugriff auf die Buchhaltungsdaten bereit, über den Prüferinnen und Prüfer die Daten in geeigneter, kontrollierter Form einsehen können. Das GoBD-Testat bestätigt, dass die Software die \"Grundsätze zur ordnungsmäßigen Führung und Aufbewahrung von Büchern, Aufzeichnungen und Unterlagen in elektronischer Form sowie zum Datenzugriff\" erfüllt — also insbesondere die Nachvollziehbarkeit und Unveränderbarkeit gebuchter Vorgänge." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Welche Software wurde in der Vorlesung als Beispiel für die Digitalisierung im externen Rechnungswesen vorgestellt?", options: ["DATEV Kanzlei-Rechnungswesen pro","Lexware buchhaltung plus","Microsoft Excel","SAP S/4HANA"], correctIndex: 1, explanation: "Die Vorlesung präsentiert exemplarisch die Software \"Lexware buchhaltung plus\" anhand von Screenshots und ihres Leistungsumfangs." },
      { id: "q2", question: "Für welche Zielgruppe ist \"Lexware buchhaltung plus\" laut Anbieter insbesondere konzipiert?", options: ["Ausschließlich Großkonzerne","Ausschließlich Vereine","Freiberufler, Handwerker und Kleinbetriebe","Ausschließlich Steuerberatungskanzleien"], correctIndex: 2, explanation: "Der Anbieter bewirbt die Software als \"die einfache und sichere Buchhaltungssoftware für Freiberufler, Handwerker und Kleinbetriebe\"." },
      { id: "q3", question: "Wofür steht ELSTER im Kontext der in der Vorlesung genannten Softwarefunktionen?", options: ["Ein Buchungsschlüssel im SKR03","Ein Verfahren zur Bilanzverlängerung","Elektronische Steuererklärung, u. a. für die elektronische Umsatzsteuer-Voranmeldung","Ein spezieller Kontenrahmen für Vereine"], correctIndex: 2, explanation: "ELSTER ermöglicht laut Funktionsübersicht die elektronische Umsatzsteuer-Voranmeldung gem. § 18 Abs. 1 UStG." },
      { id: "q4", question: "Wozu dient die EHUG-Schnittstelle in der Finanzbuchhaltungssoftware?", options: ["Zur elektronischen Übermittlung u. a. der E-Bilanz an das Finanzamt","Zur Verwaltung von Skonto-Fristen","Zur Berechnung der Grunderwerbsteuer","Ausschließlich zur internen Kostenstellenrechnung"], correctIndex: 0, explanation: "Die EHUG-Schnittstelle sorgt für die elektronische Übermittlung u. a. der E-Bilanz ans Finanzamt." },
      { id: "q5", question: "Was ermöglicht der \"Betriebsprüfer-Modus\" in moderner Buchhaltungssoftware?", options: ["Einen speziell für die (digitale) Betriebsprüfung vorgesehenen Zugriff auf die Buchhaltungsdaten","Die automatische Zahlung fälliger Steuerschulden","Das automatische Löschen alter Buchungen","Die automatische Umstellung auf ein anderes Wirtschaftsjahr"], correctIndex: 0, explanation: "Der Betriebsprüfer-Modus ist auf die Bedürfnisse der (digitalen) Betriebsprüfung zugeschnitten." },
      { id: "q6", question: "Wofür steht ein \"GoBD-Testat\" bei Buchhaltungssoftware?", options: ["Eine gesetzliche Deckelung des Softwarepreises","Ein Gütesiegel für besonders schnelle Software","Ein Nachweis über eine ISO-9001-Zertifizierung","Bestätigung, dass die Software die Grundsätze ordnungsmäßiger elektronischer Buchführung und Aufbewahrung (GoBD) einhält"], correctIndex: 3, explanation: "Ein GoBD-Testat bescheinigt die Einhaltung der Grundsätze zur ordnungsmäßigen Führung und Aufbewahrung von Büchern, Aufzeichnungen und Unterlagen in elektronischer Form sowie zum Datenzugriff." },
      { id: "q7", question: "Auf welche Kontenrahmen bezieht sich unter anderem die beworbene DATEV-Kompatibilität von Fibu-Software wie Lexware buchhaltung plus?", options: ["SKR 01–04","IFRS-Kontenplan","US-GAAP-Kontenplan","Einen ausschließlich firmenindividuellen Kontenrahmen ohne Standard"], correctIndex: 0, explanation: "Die Software bietet mehr als 10 Musterkontenrahmen, u. a. die DATEV-kompatiblen Standardkontenrahmen SKR 01–04." },
      { id: "q8", question: "Was zeigt laut Vorlesung eine Recherche z. B. bei softguide.de zum Suchbegriff \"Fibu\"?", options: ["Dass es aktuell keine Anbieter für Finanzbuchhaltungssoftware gibt","Dass nur eine einzige Software existiert","Dass Fibu-Software ausschließlich für Großkonzerne verfügbar ist","Eine große Zahl an Anbietern/Treffern für Finanzbuchhaltungssoftware am Markt"], correctIndex: 3, explanation: "Der gezeigte Ausschnitt der Suchergebnisse belegt einen breiten Anbietermarkt für Finanzbuchhaltungssoftware." },
      { id: "q9", question: "Wird laut Vorlesung trotz fortschreitender Digitalisierung weiterhin der Mensch bei der Erstellung und Prüfung des Jahresabschlusses benötigt?", options: ["Nein, das übernimmt inzwischen vollständig die Finanzverwaltung","Diese Frage wird in der Vorlesung nicht thematisiert","Ja, für fachliche Beurteilungen, Ermessensentscheidungen und die Verantwortung der Abschlussprüfung","Nein, das übernimmt inzwischen vollständig die Software"], correctIndex: 2, explanation: "Diese Frage wird als Wiederholungs-/Kontrollfrage explizit gestellt; die Antwort lautet, dass der Mensch trotz Digitalisierung weiterhin benötigt wird." },
      { id: "q10", question: "Welche der folgenden Funktionen zählt zu den in der Vorlesung genannten Auswertungsfunktionen moderner Fibu-Software?", options: ["Erstellung von Marketingkampagnen","Business Cockpit mit den wichtigsten Unternehmens-Eckdaten auf einen Blick","Verwaltung des unternehmenseigenen Fuhrparks","Automatische Gehaltsabrechnung für alle Mitarbeiter"], correctIndex: 1, explanation: "Zu den Auswertungsfunktionen zählt u. a. das \"Business Cockpit\", das alle Unternehmens-Eckdaten auf einen Blick zeigt." }
    ]
  }
];
