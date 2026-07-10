const VERTRIEB_CHAPTER10_TOPICS = [
  {
    id: "vertrieb-it-systeme-logistik-grundlagen",
    chapter: 10,
    order: 1,
    title: "IT-Systeme im Vertrieb und Grundlagen der Vertriebslogistik",
    icon: "💻",
    summary: "Welche Anforderungen an IT-Systeme im Vertrieb gestellt werden und welche drei Aufgabenfelder die Vertriebslogistik umfasst, inklusive der Kriterien für vertikale und horizontale Logistikstrukturen.",
    explanation: [
      { type: "p", text: "Die Anforderungen an IT-Systeme im Vertrieb konzentrieren sich hauptsächlich auf die Benutzerorientierung. Integrationsfähigkeit mit anderen Systemen wird dabei vorausgesetzt, und Sicherheit ist keine Kernaufgabe des Vertriebs selbst. Im Fokus steht die Effektivität der Systeme, nicht die kaum quantifizierbare Wirtschaftlichkeit bzw. Effizienz." },
      { type: "p", text: "Folgende Faktoren beeinflussen die Benutzerorientierung von Vertriebs-IT-Systemen:" },
      { type: "list", items: [
        "Verdichtung der Informationsflut",
        "Aktualität von Informationen",
        "Einfachheit und Schnelligkeit beim Zugriff",
        "Standardisierung der Erfassung",
        "Differenzierbarkeit bei der Auswertung",
        "Verständlichkeit der Darstellungsform",
        "Automatisierung der Lieferung"
      ]},
      { type: "p", text: "Die Vertriebslogistik umfasst drei zentrale Aufgabenfelder:" },
      { type: "list", items: [
        "Entscheidung über Lagerstandorte (vertikale und horizontale Struktur)",
        "Entscheidung über die Lagerhaltung (wann und wie viel bestellt wird)",
        "Transportentscheidungen"
      ]},
      { type: "p", text: "Für die vertikale Logistikstruktur — also die Frage, über wie viele Stufen Waren vom Hersteller zum Kunden geführt werden — lassen sich drei Beispielmuster unterscheiden:" },
      { type: "list", items: [
        "1-stufig: Zentrallager → Kunde",
        "2-stufig: Zentrallager → Werklager → Kunde",
        "3-stufig: Zentrallager → Werklager → Auslieferungslager → Kunde, mit Verzweigung zu mehreren Auslieferungs- bzw. Werklagern"
      ]},
      { type: "p", text: "Die Wahl der vertikalen Logistikstruktur richtet sich nach drei Kriteriengruppen:" },
      { type: "list", items: [
        "Kundenbezogene Kriterien: Zahl und Größe der Kunden, geduldete Lieferzeit, Bestellhäufigkeit und -menge",
        "Unternehmensbezogene Kriterien: Breite des Produktprogramms, Wert der Produkte, Lage der Produktionsstandorte",
        "Wettbewerbsbezogene Kriterien: Intensität des Wettbewerbs, Logistikstruktur der Konkurrenz"
      ]},
      { type: "p", text: "Für die horizontale Logistikstruktur — also die Frage, wie viele Lager auf einer Stufe betrieben werden — sind vor allem folgende Kriterien maßgeblich: die geografische Verteilung der Kunden, die Lagerhaltungskosten sowie die Transportkosten." }
    ],
    exercises: [
      {
        id: "vertrieb-it-systeme-logistik-grundlagen-e1",
        prompt: "Warum steht bei den Anforderungen an Vertriebs-IT-Systeme die Benutzerorientierung im Vordergrund und nicht primär Sicherheit oder Wirtschaftlichkeit?",
        solution: "Integrationsfähigkeit der IT-Systeme wird als selbstverständlich vorausgesetzt, und Sicherheit ist keine Kernaufgabe des Vertriebs selbst, sondern eher der IT-Abteilung zuzuordnen. Die Wirtschaftlichkeit bzw. Effizienz eines Vertriebs-IT-Systems lässt sich zudem kaum quantifizieren. Daher konzentrieren sich die Anforderungen im Vertrieb vor allem auf die Benutzerorientierung, also darauf, wie effektiv die Systeme den Vertriebsmitarbeitern bei ihrer täglichen Arbeit helfen."
      },
      {
        id: "vertrieb-it-systeme-logistik-grundlagen-e2",
        prompt: "Nennen Sie mindestens vier Einflussfaktoren der Benutzerorientierung von Vertriebs-IT-Systemen.",
        solution: "Zu den Einflussfaktoren zählen unter anderem die Verdichtung der Informationsflut, die Aktualität von Informationen, Einfachheit und Schnelligkeit beim Zugriff, die Standardisierung der Erfassung, die Differenzierbarkeit bei der Auswertung, die Verständlichkeit der Darstellungsform sowie die Automatisierung der Lieferung."
      },
      {
        id: "vertrieb-it-systeme-logistik-grundlagen-e3",
        prompt: "Beschreiben Sie die drei Aufgabenfelder der Vertriebslogistik.",
        solution: "Das erste Aufgabenfeld ist die Entscheidung über Lagerstandorte, unterteilt in vertikale (wie viele Stufen vom Hersteller zum Kunden) und horizontale (wie viele Lager pro Stufe) Struktur. Das zweite Aufgabenfeld ist die Entscheidung über die Lagerhaltung, also wann und wie viel bestellt wird. Das dritte Aufgabenfeld sind Transportentscheidungen, also wie die Ware physisch von Lager zu Lager bzw. zum Kunden bewegt wird."
      },
      {
        id: "vertrieb-it-systeme-logistik-grundlagen-e4",
        prompt: "Skizzieren Sie die drei Beispielmuster der vertikalen Logistikstruktur und erklären Sie den Unterschied.",
        solution: "Bei der 1-stufigen Struktur liefert das Zentrallager direkt an den Kunden. Bei der 2-stufigen Struktur liefert das Zentrallager zunächst an ein Werklager, von dem aus der Kunde beliefert wird. Bei der 3-stufigen Struktur liefert das Zentrallager an ein Werklager, dieses an ein Auslieferungslager, und erst von dort erfolgt die Belieferung des Kunden, wobei zu mehreren Auslieferungs- bzw. Werklagern verzweigt werden kann. Mit zunehmender Stufenzahl steigt die Kundennähe der Lager, aber auch die Komplexität und der Koordinationsaufwand der Struktur."
      },
      {
        id: "vertrieb-it-systeme-logistik-grundlagen-e5",
        prompt: "Nennen Sie die drei Kriteriengruppen für die Wahl der vertikalen Logistikstruktur und je ein Beispiel dazu.",
        solution: "Kundenbezogene Kriterien betreffen z. B. die Zahl und Größe der Kunden oder die geduldete Lieferzeit. Unternehmensbezogene Kriterien betreffen z. B. die Breite des Produktprogramms oder den Wert der Produkte. Wettbewerbsbezogene Kriterien betreffen z. B. die Intensität des Wettbewerbs oder die Logistikstruktur der Konkurrenz."
      }
    ],
    quiz: [
      { id: "q1", question: "Worauf konzentrieren sich die Anforderungen an IT-Systeme im Vertrieb hauptsächlich?", options: ["Auf die Personalplanung", "Auf die Benutzerorientierung", "Auf die vollständige Wirtschaftlichkeitsrechnung", "Auf Sicherheit als Kernaufgabe des Vertriebs"], correctIndex: 1, explanation: "Die Anforderungen an Vertriebs-IT-Systeme konzentrieren sich hauptsächlich auf die Benutzerorientierung." },
      { id: "q2", question: "Welche Aussage zur Wirtschaftlichkeit von Vertriebs-IT-Systemen trifft laut Vorlesung zu?", options: ["Sie wird durch Sicherheit ersetzt", "Sie steht im Fokus, nicht die Effektivität", "Sie ist die einzige relevante Größe", "Sie ist kaum quantifizierbar, daher steht die Effektivität im Fokus"], correctIndex: 3, explanation: "Die Wirtschaftlichkeit/Effizienz ist kaum quantifizierbar, weshalb die Effektivität im Vordergrund steht." },
      { id: "q3", question: "Welcher der folgenden Punkte zählt zu den Einflussfaktoren der Benutzerorientierung?", options: ["Individualisierung der Erfassung ohne Standard", "Maximale Komplexität der Darstellung", "Verdichtung der Informationsflut", "Verlangsamung des Zugriffs"], correctIndex: 2, explanation: "Die Verdichtung der Informationsflut ist einer der genannten Einflussfaktoren der Benutzerorientierung." },
      { id: "q4", question: "Was ist NICHT eines der drei Aufgabenfelder der Vertriebslogistik?", options: ["Transportentscheidungen", "Entscheidung über die Lagerhaltung", "Preisverhandlung mit Lieferanten", "Entscheidung über Lagerstandorte"], correctIndex: 2, explanation: "Preisverhandlung mit Lieferanten gehört nicht zu den drei Aufgabenfeldern der Vertriebslogistik; diese sind Lagerstandorte, Lagerhaltung und Transport." },
      { id: "q5", question: "Wie lautet die vertikale Struktur 'Zentrallager → Werklager → Kunde'?", options: ["4-stufig", "3-stufig", "1-stufig", "2-stufig"], correctIndex: 3, explanation: "Zentrallager → Werklager → Kunde ist die 2-stufige vertikale Logistikstruktur." },
      { id: "q6", question: "Welches Beispielmuster beschreibt 'Zentrallager → Kunde' direkt?", options: ["Horizontal", "1-stufig", "3-stufig", "2-stufig"], correctIndex: 1, explanation: "Die direkte Belieferung vom Zentrallager an den Kunden ist die 1-stufige Struktur." },
      { id: "q7", question: "Welche Kriteriengruppe umfasst die 'geduldete Lieferzeit' der Kunden?", options: ["Unternehmensbezogene Kriterien", "Wettbewerbsbezogene Kriterien", "Kundenbezogene Kriterien", "Keine der drei Gruppen"], correctIndex: 2, explanation: "Die geduldete Lieferzeit ist ein kundenbezogenes Kriterium für die vertikale Logistikstruktur." },
      { id: "q8", question: "Welches Kriterium ist für die horizontale Logistikstruktur maßgeblich?", options: ["Die geografische Verteilung der Kunden", "Die Bestellhäufigkeit", "Der Wert der Produkte", "Die Breite des Produktprogramms"], correctIndex: 0, explanation: "Für die horizontale Logistikstruktur sind vor allem geografische Kundenverteilung, Lagerhaltungs- und Transportkosten maßgeblich." },
      { id: "q9", question: "Zu welcher Kriteriengruppe zählt 'die Logistikstruktur der Konkurrenz'?", options: ["Transportbezogen", "Kundenbezogen", "Unternehmensbezogen", "Wettbewerbsbezogen"], correctIndex: 3, explanation: "Die Logistikstruktur der Konkurrenz ist ein wettbewerbsbezogenes Kriterium." },
      { id: "q10", question: "Welche zwei Fragen entscheidet die 'Entscheidung über die Lagerhaltung' im Rahmen der Vertriebslogistik?", options: ["Wann und wie viel bestellt wird", "Wie hoch die Preise sind", "Welche IT-Systeme genutzt werden", "Wo Lager stehen und wie sie transportieren"], correctIndex: 0, explanation: "Bei der Entscheidung über die Lagerhaltung geht es darum, wann und wie viel bestellt wird." }
    ]
  },
  {
    id: "vertrieb-lagerhaltungspolitik-eoq",
    chapter: 10,
    order: 2,
    title: "Lagerhaltungspolitik und die optimale Bestellmenge (Harris/Wilson)",
    icon: "📦",
    summary: "Die vier Grundtypen der Lagerhaltungspolitik entlang von Bestellzeitpunkt und Bestellmenge, ihre Vor- und Nachteile, sowie die Herleitung und Anwendung der Harris/Wilson-Formel zur Bestimmung der optimalen Bestellmenge.",
    explanation: [
      { type: "p", text: "Die Lagerhaltungspolitik ist ein Klausur-Klassiker, der in praktisch jeder vergangenen Klausur vorkommt. Sie lässt sich entlang zweier Entscheidungsdimensionen beschreiben:" },
      { type: "list", items: [
        "Bestellzeitpunkt: regelmäßig, in festen Zeitabschnitten t (Bestellrhythmuspolitik) ODER unregelmäßig, bei Unterschreiten eines Mindest- bzw. Meldebestands s (Bestellpunktpolitik)",
        "Bestellmenge: immer eine gleiche Menge q ODER eine Menge bis zum Erreichen eines Maximal- bzw. Sollbestands S"
      ]},
      { type: "p", text: "Aus der Kombination beider Dimensionen ergeben sich vier Politiken: (t,q), (t,S), (s,q) und (s,S)." },
      { type: "list", items: [
        "(t,q) — Bestellrhythmuspolitik mit fester Menge: Bestellung zu festen Zeitpunkten, dabei jedes Mal dieselbe Menge q (grafisch eine Sägezahnkurve). Vorteile: kostengünstig und einfach umzusetzen. Nachteile: Die Lieferfähigkeit kann gefährdet sein, da kein Trigger bei Nachfrageschwankungen existiert, und ein Maximalbestand S wird nicht berücksichtigt.",
        "(t,S) — Bestellrhythmuspolitik bis zum Sollbestand: Bestellung zu festen Zeitpunkten, jeweils Auffüllung bis zum Maximal- bzw. Sollbestand S. Vorteile: kein Überschreiten von S, dadurch Kostendeckelung, kein Meldebestand nötig und keine unnötigen Überbestände. Nachteile: Die Lieferfähigkeit kann gefährdet sein, da zwischen den fixen Bestellzeitpunkten Versorgungslücken auftreten können, zudem ist die Politik komplex.",
        "(s,q) — Bestellpunktpolitik mit fester Menge: Bestellung, sobald der Mindest- bzw. Meldebestand s unterschritten wird, dabei stets dieselbe Menge q (klassisches Bestellpunktverfahren). Vorteile: stets lieferfähig, da direkt auf den tatsächlichen Verbrauch reagiert wird, flexibel bei schwankender Nachfrage, relativ einfach. Nachteile: benötigt eine automatische bzw. laufende Erkennung des Meldebestands s, die Politik ist stark abhängig von einem richtig gesetzten Meldebestand und tendenziell mit höheren Kosten verbunden.",
        "(s,S) — Bestellpunktpolitik bis zum Sollbestand: Bestellung, sobald s unterschritten wird, Auffüllung bis zum Maximalbestand S. Vorteile: vereint die Vorteile von (s,q) und (t,S). Nachteile: vereint aber auch deren Nachteile, insbesondere Komplexität und Erkennungsaufwand."
      ]},
      { type: "p", text: "Zur Beurteilung einer Lagerhaltungspolitik dienen vier Kriterien: Beschaffungskosten, Lagerhaltungskosten, Lieferbereitschaft und Fehlmengenkosten." },
      { type: "p", text: "Die Harris/Wilson-Formel (Economic Order Quantity, EOQ) bestimmt die optimale Bestellmenge, die die Gesamtkosten aus Bestell- und Lagerhaltungskosten minimiert. Ausgangspunkt ist die Gesamtkostenfunktion in Abhängigkeit von der Bestellmenge q:" },
      { type: "formula", tex: "C(q) = \\frac{r}{q}K + K \\cdot r + h\\frac{q}{2}" },
      { type: "p", text: "Dabei ist r die Lagerabgangsrate (Bedarf pro Zeiteinheit), K sind die fixen (Bestell-)Kosten je Bestellung und h sind die Lagerhaltungskosten pro Stück und Zeiteinheit. Der mittlere Term K·r ist konstant bezüglich q und fällt bei der Optimierung heraus. Ableiten der Kostenfunktion nach q und Nullsetzen ergibt:" },
      { type: "formula", tex: "C'(q) = -\\frac{rK}{q^2} + \\frac{h}{2} = 0" },
      { type: "p", text: "Umgeformt nach q² ergibt sich:" },
      { type: "formula", tex: "q^2 = \\frac{2rK}{h}" },
      { type: "p", text: "und damit die optimale Bestellmenge:" },
      { type: "formula", tex: "q^* = \\sqrt{\\frac{2rK}{h}}" },
      { type: "p", text: "Komparative Statik: Die optimale Bestellmenge q* steigt mit r und K (beide stehen im Zähler) und sinkt mit h (steht im Nenner) — je höher der Bedarf oder die fixen Bestellkosten, desto größer die optimale Bestellmenge; je höher die Lagerhaltungskosten pro Stück, desto kleiner die optimale Bestellmenge." },
      { type: "p", text: "Beispielrechnung: Ein Lagerabgang von r = 48 Stück pro Monat, fixe Bestellkosten von K = 12 € und Lagerhaltungskosten von h = 0,40 € pro Stück und Monat ergeben q* = √(2 · 48 · 12 / 0,40) = √2.880 ≈ 53,7 Stück." }
    ],
    exercises: [
      {
        id: "vertrieb-lagerhaltungspolitik-eoq-e1",
        prompt: "Erläutern Sie die vier Kombinationen der Lagerhaltungspolitik anhand der beiden Entscheidungsdimensionen Bestellzeitpunkt und Bestellmenge.",
        solution: "Beim Bestellzeitpunkt unterscheidet man zwischen regelmäßigen, festen Zeitabschnitten t (Bestellrhythmuspolitik) und unregelmäßiger Bestellung bei Unterschreiten eines Meldebestands s (Bestellpunktpolitik). Bei der Bestellmenge unterscheidet man zwischen einer stets gleichen Menge q und einer Menge, die bis zu einem Maximal-/Sollbestand S auffüllt. Aus der Kombination ergeben sich vier Politiken: (t,q) bestellt zu festen Zeitpunkten stets die Menge q, (t,S) bestellt zu festen Zeitpunkten bis zum Sollbestand S, (s,q) bestellt bei Unterschreiten von s stets die Menge q, und (s,S) bestellt bei Unterschreiten von s bis zum Sollbestand S."
      },
      {
        id: "vertrieb-lagerhaltungspolitik-eoq-e2",
        prompt: "Nennen Sie je einen Vorteil und einen Nachteil der (t,q)-Politik sowie der (s,q)-Politik.",
        solution: "Die (t,q)-Politik ist kostengünstig und einfach umzusetzen, da immer zu festen Zeitpunkten dieselbe Menge bestellt wird; ihr Nachteil ist, dass die Lieferfähigkeit gefährdet sein kann, weil bei Nachfrageschwankungen kein Trigger zum Eingreifen existiert. Die (s,q)-Politik ist stets lieferfähig, da direkt auf den tatsächlichen Verbrauch reagiert wird; ihr Nachteil ist, dass eine automatische bzw. laufende Erkennung des Meldebestands s nötig ist und die Politik tendenziell mit höheren Kosten verbunden ist."
      },
      {
        id: "vertrieb-lagerhaltungspolitik-eoq-e3",
        prompt: "Leiten Sie ausgehend von der Gesamtkostenfunktion C(q) = (r/q)K + K·r + h(q/2) die Formel für die optimale Bestellmenge q* her.",
        solution: "Man leitet C(q) nach q ab: C'(q) = -rK/q² + h/2 (der konstante Term K·r fällt bei der Ableitung weg). Setzt man C'(q) = 0, erhält man rK/q² = h/2, umgeformt q² = 2rK/h. Zieht man die Wurzel, ergibt sich die optimale Bestellmenge q* = √(2rK/h)."
      },
      {
        id: "vertrieb-lagerhaltungspolitik-eoq-e4",
        prompt: "Ein Betrieb hat einen Lagerabgang von r = 48 Stück pro Monat, fixe Bestellkosten von K = 12 € je Bestellung und Lagerhaltungskosten von h = 0,40 € pro Stück und Monat. Berechnen Sie die optimale Bestellmenge q*.",
        solution: "Nach der Harris/Wilson-Formel gilt q* = √(2rK/h) = √(2 · 48 · 12 / 0,40) = √(1.152 / 0,40) = √2.880 ≈ 53,7 Stück. Der Betrieb sollte also jeweils rund 54 Stück bestellen, um die Gesamtkosten aus Bestell- und Lagerhaltungskosten zu minimieren."
      },
      {
        id: "vertrieb-lagerhaltungspolitik-eoq-e5",
        prompt: "Wie verändert sich die optimale Bestellmenge q*, wenn die fixen Bestellkosten K steigen bzw. die Lagerhaltungskosten h steigen? Begründen Sie mit der Formel q* = √(2rK/h).",
        solution: "Da K im Zähler der Formel steht, führt ein Anstieg von K zu einer größeren optimalen Bestellmenge q* — höhere fixe Bestellkosten pro Bestellung machen es sinnvoll, seltener, aber dafür in größeren Mengen zu bestellen. Da h im Nenner steht, führt ein Anstieg von h zu einer kleineren optimalen Bestellmenge q* — höhere Lagerhaltungskosten pro Stück machen es sinnvoll, häufiger, aber in kleineren Mengen zu bestellen, um die Kapitalbindung im Lager gering zu halten."
      }
    ],
    quiz: [
      { id: "q1", question: "Welche zwei Dimensionen definieren die vier Lagerhaltungspolitiken?", options: ["Lieferant und Kunde", "Bestellzeitpunkt und Bestellmenge", "Preis und Menge", "Lagerort und Transportmittel"], correctIndex: 1, explanation: "Die vier Politiken ergeben sich aus der Kombination von Bestellzeitpunkt (t oder s) und Bestellmenge (q oder S)." },
      { id: "q2", question: "Wofür steht 's' bei der Bestellpunktpolitik?", options: ["Meldebestand/Mindestbestand, bei dessen Unterschreiten bestellt wird", "Servicegrad", "Sicherheitsbestand ohne Bezug zur Bestellung", "Sollbestand"], correctIndex: 0, explanation: "s ist der Mindest- bzw. Meldebestand, bei dessen Unterschreiten unregelmäßig bestellt wird." },
      { id: "q3", question: "Welche Politik bestellt zu festen Zeitpunkten stets dieselbe Menge q?", options: ["(t,S)", "(t,q)", "(s,q)", "(s,S)"], correctIndex: 1, explanation: "(t,q) kombiniert feste Zeitpunkte t mit stets gleicher Bestellmenge q." },
      { id: "q4", question: "Was ist ein zentraler Vorteil der (s,q)-Politik?", options: ["Sie ist die kostengünstigste aller vier Politiken", "Sie berücksichtigt keinen Maximalbestand", "Sie ist stets lieferfähig, da sie direkt auf den tatsächlichen Verbrauch reagiert", "Sie benötigt keinen Meldebestand"], correctIndex: 2, explanation: "Die (s,q)-Politik reagiert direkt auf den Verbrauch und ist dadurch stets lieferfähig." },
      { id: "q5", question: "Welche Politik vereint die Vorteile — aber auch die Nachteile — von (s,q) und (t,S)?", options: ["(s,S)", "(t,q) und (t,S) gemeinsam", "Keine der vier Politiken", "(t,q)"], correctIndex: 0, explanation: "(s,S) vereint sowohl die Vorteile als auch die Nachteile von (s,q) und (t,S)." },
      { id: "q6", question: "Welches ist KEIN Beurteilungskriterium einer Lagerhaltungspolitik?", options: ["Fehlmengenkosten", "Beschaffungskosten", "Werbewirkung", "Lieferbereitschaft"], correctIndex: 2, explanation: "Beurteilungskriterien sind Beschaffungskosten, Lagerhaltungskosten, Lieferbereitschaft und Fehlmengenkosten — Werbewirkung gehört nicht dazu." },
      { id: "q7", question: "Was beschreibt die Variable h in der Harris/Wilson-Formel?", options: ["Die fixen Bestellkosten", "Die Anzahl der Bestellungen pro Jahr", "Die Lagerhaltungskosten pro Stück und Zeiteinheit", "Die Lagerabgangsrate"], correctIndex: 2, explanation: "h steht für die Lagerhaltungskosten pro Stück und Zeiteinheit." },
      { id: "q8", question: "Wie lautet die Formel für die optimale Bestellmenge q* nach Harris/Wilson?", options: ["q* = 2rK/h", "q* = √(rK) + h", "q* = rK/h", "q* = √(2rK/h)"], correctIndex: 3, explanation: "Die Harris/Wilson-Formel lautet q* = √(2rK/h)." },
      { id: "q9", question: "Ein Betrieb hat r = 48 Stück/Monat, K = 12 € und h = 0,40 €. Wie hoch ist ungefähr die optimale Bestellmenge q*?", options: ["Etwa 100 Stück", "Etwa 12 Stück", "Etwa 2.880 Stück", "Etwa 53,7 Stück"], correctIndex: 3, explanation: "q* = √(2·48·12/0,40) = √2.880 ≈ 53,7 Stück." },
      { id: "q10", question: "Was passiert mit q*, wenn die Lagerhaltungskosten h steigen, alle anderen Werte bleiben gleich?", options: ["q* sinkt, da h im Nenner der Formel steht", "q* bleibt exakt gleich", "q* steigt, da h im Zähler der Formel steht", "q* wird negativ"], correctIndex: 0, explanation: "Da h im Nenner von q* = √(2rK/h) steht, führt ein Anstieg von h zu einer sinkenden optimalen Bestellmenge." }
    ]
  },
  {
    id: "vertrieb-vertriebskultur",
    chapter: 10,
    order: 3,
    title: "Vertriebskultur: Funktion, Instrumente und Kulturwandel",
    icon: "🎭",
    summary: "Welche Funktion die Vertriebskultur im Unternehmen erfüllt, welche Instrumentgruppen zu ihrer Gestaltung eingesetzt werden und welche Voraussetzungen für einen erfolgreichen Kulturwandel erfüllt sein müssen.",
    explanation: [
      { type: "p", text: "Die Vertriebskultur erfüllt mehrere wichtige Funktionen im Unternehmen: Sie fördert die freiwillige Arbeitsleistung der Mitarbeiter, erklärt den Sinn der Arbeit, stiftet Konsens und ein 'Wir-Gefühl' und bietet neuen Mitarbeitern einen Orientierungsrahmen." },
      { type: "p", text: "Zur Gestaltung der Vertriebskultur lassen sich drei Instrumentgruppen unterscheiden:" },
      { type: "list", items: [
        "Selbstverständnis: Leitsätze, Visionen, Verhaltensregeln, Artefakte wie Rituale, Sprache oder Architektur",
        "Kommunikation/Motivation: Plakate, Broschüren, Hauszeitschrift, Führungsstile, Veranstaltungen",
        "Schulungen/Aktive Mitarbeit: Seminare, Workshops, Einzelgespräche"
      ]},
      { type: "p", text: "Ein erfolgreicher Kulturwandel im Vertrieb setzt mehrere Voraussetzungen voraus:" },
      { type: "list", items: [
        "Einbettung in ein unternehmensweites Gesamtkonzept",
        "Unterstützung durch das Top-Management",
        "Langfristige Orientierung",
        "Einbeziehung aller Betroffenen",
        "Klare, transparente Kommunikation",
        "Manchmal ist ein sprunghafter Übergang ('Schockieren') notwendig",
        "Laufende Kommunikation kleiner Erfolge zur Stärkung der intrinsischen Motivation"
      ]}
    ],
    exercises: [
      {
        id: "vertrieb-vertriebskultur-e1",
        prompt: "Welche Funktionen erfüllt die Vertriebskultur in einem Unternehmen?",
        solution: "Die Vertriebskultur fördert die freiwillige Arbeitsleistung der Mitarbeiter, erklärt den Sinn der Arbeit, stiftet Konsens und ein gemeinsames 'Wir-Gefühl' und bietet insbesondere neuen Mitarbeitern einen Orientierungsrahmen im Unternehmen."
      },
      {
        id: "vertrieb-vertriebskultur-e2",
        prompt: "Nennen Sie die drei Instrumentgruppen zur Gestaltung der Vertriebskultur mit je einem Beispiel.",
        solution: "Die erste Gruppe ist das Selbstverständnis, z. B. durch Leitsätze oder Visionen. Die zweite Gruppe ist Kommunikation/Motivation, z. B. durch eine Hauszeitschrift oder Veranstaltungen. Die dritte Gruppe sind Schulungen/Aktive Mitarbeit, z. B. durch Workshops oder Einzelgespräche."
      },
      {
        id: "vertrieb-vertriebskultur-e3",
        prompt: "Welche Artefakte können Teil des 'Selbstverständnisses' als Instrument der Vertriebskultur sein?",
        solution: "Zum Selbstverständnis zählen neben Leitsätzen, Visionen und Verhaltensregeln auch Artefakte wie Rituale, eine bestimmte Sprache oder die Architektur der Unternehmensgebäude, die das gemeinsame Selbstverständnis nach außen und innen sichtbar machen."
      },
      {
        id: "vertrieb-vertriebskultur-e4",
        prompt: "Nennen Sie mindestens vier Voraussetzungen für einen erfolgreichen Kulturwandel im Vertrieb.",
        solution: "Zu den Voraussetzungen zählen unter anderem die Einbettung in ein unternehmensweites Gesamtkonzept, die Unterstützung durch das Top-Management, eine langfristige Orientierung, die Einbeziehung aller Betroffenen, eine klare und transparente Kommunikation sowie die laufende Kommunikation kleiner Erfolge zur Stärkung der intrinsischen Motivation."
      },
      {
        id: "vertrieb-vertriebskultur-e5",
        prompt: "Warum kann ein 'sprunghafter Übergang' bzw. bewusstes 'Schockieren' manchmal notwendig für einen erfolgreichen Kulturwandel sein?",
        solution: "Ein rein schrittweiser, unauffälliger Wandel kann von Mitarbeitern übersehen oder nicht ernst genommen werden, sodass alte Verhaltensmuster fortbestehen. Ein bewusst sprunghafter Übergang macht den Bruch mit der bisherigen Kultur deutlich sichtbar und signalisiert allen Beteiligten, dass der Wandel ernst gemeint und unumkehrbar ist, was die Akzeptanz und Umsetzung des neuen Kulturverständnisses beschleunigen kann."
      }
    ],
    quiz: [
      { id: "q1", question: "Welche Funktion erfüllt die Vertriebskultur NICHT laut Vorlesung?", options: ["Orientierungsrahmen für neue Mitarbeiter", "Automatische Umsatzsteigerung ohne weiteres Zutun", "Förderung freiwilliger Arbeitsleistung", "Stiftung von Konsens und 'Wir-Gefühl'"], correctIndex: 1, explanation: "Eine automatische Umsatzsteigerung wird nicht als Funktion der Vertriebskultur genannt; die genannten Funktionen betreffen Arbeitsleistung, Konsens, Sinn und Orientierung." },
      { id: "q2", question: "Zu welcher Instrumentgruppe zählen 'Leitsätze' und 'Visionen'?", options: ["Schulungen/Aktive Mitarbeit", "Kommunikation/Motivation", "Selbstverständnis", "Keiner der drei Gruppen"], correctIndex: 2, explanation: "Leitsätze und Visionen zählen zur Instrumentgruppe 'Selbstverständnis'." },
      { id: "q3", question: "Zu welcher Instrumentgruppe zählt die 'Hauszeitschrift'?", options: ["Keiner der drei Gruppen", "Kommunikation/Motivation", "Schulungen/Aktive Mitarbeit", "Selbstverständnis"], correctIndex: 1, explanation: "Die Hauszeitschrift ist ein Instrument der Gruppe Kommunikation/Motivation." },
      { id: "q4", question: "Welches Instrument gehört zur Gruppe 'Schulungen/Aktive Mitarbeit'?", options: ["Architektur", "Leitsätze", "Plakate", "Workshops"], correctIndex: 3, explanation: "Workshops zählen zur Instrumentgruppe Schulungen/Aktive Mitarbeit." },
      { id: "q5", question: "Welche Voraussetzung ist für einen erfolgreichen Kulturwandel besonders wichtig?", options: ["Ausschluss der Belegschaft aus dem Prozess", "Unterstützung durch das Top-Management", "Ausschließlich kurzfristige Maßnahmen", "Verzicht auf jegliche Kommunikation"], correctIndex: 1, explanation: "Die Unterstützung durch das Top-Management ist eine zentrale Voraussetzung für einen erfolgreichen Kulturwandel." },
      { id: "q6", question: "Warum ist die laufende Kommunikation kleiner Erfolge während eines Kulturwandels wichtig?", options: ["Sie verhindert jede Form von Widerstand vollständig", "Sie ersetzt die Unterstützung des Top-Managements", "Sie ist unwichtig und kann entfallen", "Sie stärkt die intrinsische Motivation der Mitarbeiter"], correctIndex: 3, explanation: "Die laufende Kommunikation kleiner Erfolge stärkt die intrinsische Motivation der Mitarbeiter während des Wandels." },
      { id: "q7", question: "Was bedeutet die Voraussetzung 'Einbettung in ein unternehmensweites Gesamtkonzept'?", options: ["Das Konzept betrifft nur die IT-Abteilung", "Der Kulturwandel sollte isoliert im Vertrieb ablaufen", "Nur die Vertriebsleitung muss informiert werden", "Der Kulturwandel muss zum übergeordneten Konzept des ganzen Unternehmens passen"], correctIndex: 3, explanation: "Der Kulturwandel sollte in ein unternehmensweites Gesamtkonzept eingebettet sein, nicht isoliert im Vertrieb erfolgen." },
      { id: "q8", question: "Welche Zeitorientierung wird für einen erfolgreichen Kulturwandel empfohlen?", options: ["Langfristige Orientierung", "Nur einmalige, punktuelle Maßnahmen", "Keine feste Orientierung nötig", "Kurzfristige Orientierung"], correctIndex: 0, explanation: "Ein erfolgreicher Kulturwandel erfordert eine langfristige Orientierung." },
      { id: "q9", question: "Was versteht man unter dem 'Schockieren' als mögliche Maßnahme im Kulturwandel?", options: ["Einen sprunghaften, deutlich sichtbaren Übergang statt schrittweiser Anpassung", "Das vollständige Verschweigen des Wandels", "Die Abschaffung aller Kommunikationsinstrumente", "Eine rein finanzielle Sanktion für Mitarbeiter"], correctIndex: 0, explanation: "Manchmal ist ein sprunghafter, bewusst sichtbarer Übergang ('Schockieren') notwendig, statt eines rein schrittweisen Wandels." },
      { id: "q10", question: "Wer sollte laut den Voraussetzungen für Kulturwandel in den Prozess einbezogen werden?", options: ["Nur das Top-Management", "Nur die Marketingabteilung", "Alle Betroffenen", "Nur externe Berater"], correctIndex: 2, explanation: "Eine Voraussetzung für erfolgreichen Kulturwandel ist die Einbeziehung aller Betroffenen." }
    ]
  }
];
