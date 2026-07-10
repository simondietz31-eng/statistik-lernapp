const VERTRIEB_CHAPTER6_TOPICS = [
  {
    id: "vertrieb-preisbuendelung-grundlagen",
    chapter: 6,
    order: 1,
    title: "Preisbündelung: Grundlagen und Formen",
    icon: "📦",
    summary: "Warum Preisbündelung ungenutzte Preisbereitschaft zwischen Produkten überträgt, welche drei Formen es gibt, und wie sich der optimale Einzelpreis eines Produkts systematisch berechnen lässt.",
    explanation: [
      { type: "p", text: "Preisbündelung ist eine spezifische Implementierungsform der Preisdifferenzierung (vgl. Kapitel 5). Der Kernmechanismus: Bündelung überträgt \"ungenutzte Preisbereitschaft\" von einem Produkt auf ein anderes. Ein einheitlicher Einzelpreis für Produkt A kann die individuelle Preisbereitschaft eines Kunden für A oft nicht vollständig abschöpfen. Preisbündelung schöpft diese Überschuss-Preisbereitschaft bei Produkt A ab, indem sie diese über einen gemeinsamen Bündelpreis mit Produkt B \"ausgibt\". Dadurch lässt sich Umsatz, Absatz und Gewinn erhöhen, ohne das Produkt selbst verändern zu müssen. Voraussetzung dafür ist eine valide Messung der Zahlungsbereitschaften der Kunden." },
      { type: "p", text: "Es lassen sich drei Formen der Preisbündelung unterscheiden:" },
      { type: "list", items: [
        "Einzelpreisbildung (EP): keine Bündelung, jedes Produkt hat einen eigenen, separaten Preis",
        "Reine Preisbündelung: die Produkte sind ausschließlich als gemeinsames Paket zu einem Bündelpreis erhältlich, nicht einzeln",
        "Gemischte Preisbündelung: der Kunde kann wählen, ob er das Bündel kauft oder die Produkte einzeln erwirbt"
      ]},
      { type: "p", text: "Als Faustregel gilt: Wenn der Umsatz bei Einzelpreisbildung und der Umsatz bei reiner Preisbündelung exakt gleich hoch ausfallen, ist die Bündelung vorzuziehen." },
      { type: "p", text: "Für jede der drei Formen wird der jeweils optimale Preis nach derselben grundlegenden Logik der Umsatzmaximierung ermittelt: Für jedes Produkt (bzw. im Fall der reinen Bündelung für das Bündel) werden die Zahlungsbereitschaftswerte der Kunden absteigend sortiert. Jeder dieser Werte wird als möglicher einheitlicher Preis getestet; die zugehörige Menge ist die Anzahl der Kunden, deren Zahlungsbereitschaft mindestens diesem Preis entspricht. Der Umsatz ergibt sich als Preis multipliziert mit dieser Menge. Der Preis mit dem höchsten Umsatz wird gewählt." },
      { type: "formula", tex: "U(p) = p \\times |\\{\\text{Kunden } i : ZB_i \\geq p\\}|, \\quad p^{*} = \\arg\\max_{p \\in \\{ZB_1, \\dots, ZB_n\\}} U(p)" }
    ],
    exercises: [
      {
        id: "vertrieb-preisbuendelung-grundlagen-e1",
        prompt: "Erklären Sie den Kernmechanismus der Preisbündelung: Wie genau erhöht Bündelung Umsatz und Gewinn, ohne die Produkte zu verändern?",
        solution: "Ein einheitlicher Einzelpreis für ein Produkt A kann die individuelle Preisbereitschaft eines Kunden für A nicht immer vollständig abschöpfen — manche Kunden wären bereit, für A mehr zu zahlen, als der einheitliche Preis verlangt, diese Überschuss-Preisbereitschaft bleibt bei reiner Einzelpreisbildung ungenutzt. Preisbündelung überträgt diese ungenutzte Preisbereitschaft auf ein zweites Produkt B, indem beide Produkte gemeinsam zu einem Bündelpreis angeboten werden. Ein Kunde mit hoher Preisbereitschaft für A, aber niedriger für B, kann seine 'überschüssige' Zahlungsbereitschaft für A quasi über den Bündelpreis auch für B 'ausgeben'. So lässt sich die individuelle Preisbereitschaft der Kunden insgesamt besser abschöpfen, was Umsatz und Gewinn erhöht, obwohl die Produkte selbst unverändert bleiben."
      },
      {
        id: "vertrieb-preisbuendelung-grundlagen-e2",
        prompt: "Nennen Sie die drei Formen der Preisbündelung und beschreiben Sie kurz, wie der Kunde jeweils kaufen kann.",
        solution: "Bei der Einzelpreisbildung (EP) hat jedes Produkt einen eigenen, separaten Preis, es gibt keine Bündelung. Bei der reinen Preisbündelung sind die Produkte ausschließlich gemeinsam als Paket zu einem Bündelpreis erhältlich, ein separater Einzelkauf ist nicht möglich. Bei der gemischten Preisbündelung kann der Kunde wählen: Er kann entweder das Bündel zum Bündelpreis kaufen oder die Produkte einzeln zu ihren jeweiligen Einzelpreisen erwerben."
      },
      {
        id: "vertrieb-preisbuendelung-grundlagen-e3",
        prompt: "Was besagt die im Kurs genannte Faustregel, wenn Einzelpreisbildung und reine Preisbündelung exakt denselben Umsatz erzielen?",
        solution: "Die Faustregel besagt: Fallen der Umsatz bei Einzelpreisbildung und der Umsatz bei reiner Preisbündelung exakt gleich hoch aus, ist die Bündelung vorzuziehen. Das liegt daran, dass reine Preisbündelung in der Regel operativ einfacher zu handhaben ist (nur ein Preis statt mehrerer Einzelpreise) und weitere Vorteile bieten kann, ohne dass beim Umsatz ein Nachteil entsteht."
      },
      {
        id: "vertrieb-preisbuendelung-grundlagen-e4",
        prompt: "Beschreiben Sie das allgemeine Verfahren, mit dem der optimale Einzelpreis für ein Produkt anhand einer Liste von Kunden-Zahlungsbereitschaften bestimmt wird.",
        solution: "Zunächst werden alle Zahlungsbereitschaftswerte der Kunden für das Produkt absteigend sortiert. Anschließend wird jeder dieser Werte als möglicher einheitlicher Preis getestet: Zu jedem Kandidatenpreis wird die Menge bestimmt, die sich aus der Anzahl der Kunden ergibt, deren Zahlungsbereitschaft mindestens so hoch wie dieser Preis ist. Der Umsatz für diesen Kandidatenpreis ist Preis multipliziert mit dieser Menge. Unter allen getesteten Preisen wird derjenige gewählt, der den höchsten Umsatz liefert — dies ist der optimale Einzelpreis."
      },
      {
        id: "vertrieb-preisbuendelung-grundlagen-e5",
        prompt: "Warum ist eine valide Messung der Zahlungsbereitschaften der Kunden eine notwendige Voraussetzung für erfolgreiche Preisbündelung?",
        solution: "Die gesamte Logik der Preisbündelung beruht darauf, individuelle Preisbereitschaften der Kunden möglichst gut abzuschöpfen — sowohl bei der Wahl der Einzelpreise als auch bei der Wahl des Bündelpreises. Sind die zugrunde gelegten Zahlungsbereitschaftswerte falsch oder ungenau gemessen (z. B. durch schlechte Befragungsmethoden), führt jede darauf aufbauende Preisberechnung zu suboptimalen oder sogar falschen Preisentscheidungen, die Umsatz und Gewinn schmälern statt maximieren. Eine valide Datengrundlage ist daher die Grundvoraussetzung für jede der drei Preisbündelungsformen."
      }
    ],
    quiz: [
      { id: "q1", question: "Was ist Preisbündelung im Kontext der Preisdifferenzierung?", options: ["Eine spezifische Implementierungsform der Preisdifferenzierung", "Eine Form der Kostenorientierung", "Eine Form des direkten Vertriebs", "Eine völlig eigenständige Strategie ohne Bezug zur Preisdifferenzierung"], correctIndex: 0, explanation: "Preisbündelung ist eine spezifische Implementierungsform der Preisdifferenzierung." },
      { id: "q2", question: "Was überträgt Preisbündelung laut Kernmechanismus von einem Produkt auf ein anderes?", options: ["Vertriebspartner", "Lagerbestände", "Ungenutzte Preisbereitschaft", "Herstellkosten"], correctIndex: 2, explanation: "Preisbündelung überträgt ungenutzte (überschüssige) Preisbereitschaft eines Kunden für Produkt A auf Produkt B über den gemeinsamen Bündelpreis." },
      { id: "q3", question: "Welche der folgenden ist KEINE der drei Formen der Preisbündelung?", options: ["Einzelpreisbildung", "Gemischte Preisbündelung", "Progressive Preisbündelung", "Reine Preisbündelung"], correctIndex: 2, explanation: "Die drei Formen sind Einzelpreisbildung, reine Preisbündelung und gemischte Preisbündelung." },
      { id: "q4", question: "Was kennzeichnet die reine Preisbündelung?", options: ["Jedes Produkt hat einen eigenen Preis", "Produkte sind ausschließlich als Paket zu einem Bündelpreis erhältlich", "Kunden können frei zwischen Bündel und Einzelkauf wählen", "Es gibt gar keinen festen Preis"], correctIndex: 1, explanation: "Bei reiner Preisbündelung sind die Produkte nur als Paket erhältlich, kein Einzelkauf möglich." },
      { id: "q5", question: "Was kennzeichnet die gemischte Preisbündelung?", options: ["Der Kunde kann zwischen Bündelkauf und Einzelkauf wählen", "Alle Kunden zahlen zwingend denselben Preis wie bei reiner Bündelung", "Nur der Anbieter entscheidet, was der Kunde kauft", "Es gibt kein Bündelangebot"], correctIndex: 0, explanation: "Bei gemischter Preisbündelung kann der Kunde selbst wählen, ob er bündelt oder einzeln kauft." },
      { id: "q6", question: "Was besagt die Faustregel bei exakt gleich hohem Umsatz von Einzelpreisbildung und reiner Preisbündelung?", options: ["Beide Optionen sind gleichermaßen abzulehnen", "Reine Preisbündelung ist vorzuziehen", "Es sollte eine dritte Option gewählt werden", "Einzelpreisbildung ist vorzuziehen"], correctIndex: 1, explanation: "Bei gleich hohem Umsatz ist laut Faustregel die reine Preisbündelung vorzuziehen." },
      { id: "q7", question: "Wie wird beim allgemeinen Verfahren zur Preisoptimierung vorgegangen?", options: ["Nur den niedrigsten Preis wählen", "Zahlungsbereitschaften absteigend sortieren, jeden Wert als Kandidatenpreis testen und Umsatz = Preis × Menge maximieren", "Nur den höchsten Preis wählen", "Zufällige Auswahl eines Preises"], correctIndex: 1, explanation: "Das Verfahren testet systematisch jede Zahlungsbereitschaft als Kandidatenpreis und wählt den umsatzmaximalen Preis." },
      { id: "q8", question: "Wie wird die Menge zu einem gegebenen Kandidatenpreis bestimmt?", options: ["Als Gesamtzahl aller befragten Kunden, unabhängig vom Preis", "Als Anzahl der Kunden mit der niedrigsten Zahlungsbereitschaft", "Als fester Wert von 1", "Als Anzahl der Kunden, deren Zahlungsbereitschaft mindestens diesem Preis entspricht"], correctIndex: 3, explanation: "Die Menge ergibt sich aus der Anzahl der Kunden mit Zahlungsbereitschaft größer oder gleich dem Kandidatenpreis." },
      { id: "q9", question: "Was ist eine notwendige Voraussetzung für erfolgreiche Preisbündelung?", options: ["Ein möglichst niedriger Herstellkostenanteil", "Eine möglichst geringe Kundenanzahl", "Der vollständige Verzicht auf Einzelpreise", "Eine valide Messung der Zahlungsbereitschaften der Kunden"], correctIndex: 3, explanation: "Preisbündelung setzt eine valide Messung der Zahlungsbereitschaften der Kunden voraus, da die gesamte Logik darauf beruht." },
      { id: "q10", question: "Warum kann Preisbündelung Umsatz und Gewinn erhöhen, ohne das Produkt selbst zu verändern?", options: ["Weil sie die Herstellkosten senkt", "Weil sie den Wettbewerb eliminiert", "Weil sie automatisch die Nachfrage aller Kunden verdoppelt", "Weil sie die individuelle Preisbereitschaft der Kunden über die Produkte hinweg besser abschöpft"], correctIndex: 3, explanation: "Preisbündelung schöpft die vorhandene individuelle Preisbereitschaft der Kunden über den gemeinsamen Bündelpreis besser ab, ohne das Produkt selbst zu verändern." }
    ]
  },
  {
    id: "vertrieb-preisbuendelung-rechenbeispiel",
    chapter: 6,
    order: 2,
    title: "Rechenbeispiel: Cross-Skates und Trainingskurs",
    icon: "🧮",
    summary: "Das vollständig durchgerechnete Standardbeispiel zur Preisbündelung — Einzelpreisbildung, reine Preisbündelung und gemischte Preisbündelung im direkten Vergleich mit allen Zahlen.",
    explanation: [
      { type: "p", text: "Ausgangslage: Ein Sportgeschäft möchte Cross-Skates und einen Trainingskurs ins Sortiment aufnehmen. Teilnehmer ohne eigene Skates können diese während des Kurses kostenlos leihen. Ziel ist die Gewinnmaximierung. Variable Stückkosten werden vernachlässigt, sodass gilt: Gewinn = Umsatz. Fünf Kunden haben folgende maximale Zahlungsbereitschaften (in €):" },
      { type: "list", items: [
        "Kunde A: Cross-Skates 45 € / Trainingskurs 20 €",
        "Kunde B: Cross-Skates 50 € / Trainingskurs 40 €",
        "Kunde C: Cross-Skates 75 € / Trainingskurs 15 €",
        "Kunde D: Cross-Skates 40 € / Trainingskurs 60 €",
        "Kunde E: Cross-Skates 30 € / Trainingskurs 55 €"
      ]},
      { type: "p", text: "(a) Einzelpreisbildung (EP): Für jedes Produkt wird separat der umsatzmaximale Preis ermittelt, indem jede Zahlungsbereitschaft als Kandidatenpreis getestet wird." },
      { type: "p", text: "Cross-Skates, Zahlungsbereitschaften absteigend sortiert: 75, 50, 45, 40, 30." },
      { type: "list", items: [
        "Preis 75 € → Menge 1 → Umsatz 75 €",
        "Preis 50 € → Menge 2 → Umsatz 100 €",
        "Preis 45 € → Menge 3 → Umsatz 135 €",
        "Preis 40 € → Menge 4 → Umsatz 160 € (Optimum)",
        "Preis 30 € → Menge 5 → Umsatz 150 €"
      ]},
      { type: "p", text: "Trainingskurs, Zahlungsbereitschaften absteigend sortiert: 60, 55, 40, 20, 15." },
      { type: "list", items: [
        "Preis 60 € → Menge 1 → Umsatz 60 €",
        "Preis 55 € → Menge 2 → Umsatz 110 €",
        "Preis 40 € → Menge 3 → Umsatz 120 € (Optimum)",
        "Preis 20 € → Menge 4 → Umsatz 80 €",
        "Preis 15 € → Menge 5 → Umsatz 75 €"
      ]},
      { type: "p", text: "Optimale Einzelpreisbildung: Preis Cross-Skates = 40 € (4 Stück verkauft), Preis Trainingskurs = 40 € (3 Kurse verkauft). Gesamtgewinn EP = 160 € + 120 € = 280 €." },
      { type: "p", text: "Reine Preisbündelung: Für jeden Kunden wird die Bündel-Zahlungsbereitschaft als Summe beider Produkte gebildet: A = 45+20 = 65, B = 50+40 = 90, C = 75+15 = 90, D = 40+60 = 100, E = 30+55 = 85. Absteigend sortiert: 100, 90, 90, 85, 65." },
      { type: "list", items: [
        "Bündelpreis 100 € → Menge 1 → Umsatz 100 €",
        "Bündelpreis 90 € → Menge 2 → Umsatz 180 €",
        "Bündelpreis 90 € → Menge 3 → Umsatz 270 €",
        "Bündelpreis 85 € → Menge 4 → Umsatz 340 € (Optimum)",
        "Bündelpreis 65 € → Menge 5 → Umsatz 325 €"
      ]},
      { type: "p", text: "Optimale reine Preisbündelung: Bündelpreis = 85 €, Menge = 4, Gewinn = 340 €. Da 340 € > 280 €, ist im Vergleich von EP und reiner Preisbündelung die reine Preisbündelung zu empfehlen." },
      { type: "p", text: "(b) Warum entsteht dieser Unterschied? Unter reiner Preisbündelung wird ungenutzte Zahlungsbereitschaft — ein Kunde, der für ein einzelnes Produkt weniger als den jeweiligen Einzelpreis zahlen würde — auf das andere Produkt im Bündel übertragen. Dadurch wird die individuelle Zahlungsbereitschaft der Kunden insgesamt besser abgeschöpft (Konsumentenrenten-Abschöpfung) als bei getrennten Einzelpreisen." },
      { type: "p", text: "(c) Gemischte Preisbündelung (GPB): Hierbei werden Bündel und Einzelprodukte gleichzeitig angeboten (zu den bereits ermittelten optimalen Einzelpreisen 40 €/40 € sowie einem Bündelpreis), und es wird geprüft, welche Option jeder Kunde rational wählen würde. Ergebnis in diesem Beispiel: Nein, die gemischte Preisbündelung kann hier keinen höheren Gewinn erzielen als die reine Preisbündelung. Der maximal über gemischte Preisbündelung erreichbare Gewinn liegt bei 270 € und damit unter dem Gewinn der reinen Preisbündelung (340 €). Grund ist die stark heterogene Zahlungsbereitschaft der Kunden, die Cherry-Picking ermöglicht: Kunde C etwa bewertet die Cross-Skates mit 75 €, aber den Trainingskurs nur mit 15 € — dieser Kunde würde bei gemischter Preisbündelung rational nur die einzelnen Cross-Skates kaufen statt das Bündel, was die Bündelungsstrategie untergräbt." },
      { type: "p", text: "Verifiziertes Ranking für dieses konkrete Zahlenbeispiel: Reine Preisbündelung (340 €) > Einzelpreisbildung (280 €) > Gemischte Preisbündelung (270 €). Wichtig: Dieses Ranking ist das Ergebnis dieses konkreten Zahlenbeispiels mit seiner spezifischen Verteilung der Zahlungsbereitschaften, nicht ein allgemeingültiges Bündelungs-Theorem. In anderen Konstellationen von Zahlungsbereitschaften kann die gemischte Preisbündelung durchaus die beste Option sein." },
      { type: "p", text: "Allgemeines Vorgehen zur Lösung solcher Preisbündelungsaufgaben in vier Schritten:" },
      { type: "list", items: [
        "1. Liste n Kunden × 2 Produkte mit individuellen Zahlungsbereitschaften aufstellen.",
        "2. Einzelpreisbildung: für jedes Produkt einzeln die Zahlungsbereitschaften absteigend sortieren, jede Zahlungsbereitschaft als Kandidatenpreis testen, Umsatz = Preis × Anzahl Kunden mit Zahlungsbereitschaft ≥ Preis berechnen, Maximum wählen; die beiden Produktmaxima anschließend summieren.",
        "3. Reine Preisbündelung: für jeden Kunden die Summe der beiden Zahlungsbereitschaften bilden, absteigend sortieren, dasselbe Verfahren wie bei der Einzelpreisbildung anwenden.",
        "4. Gemischte Preisbündelung: für jeden Kunden vergleichen, ob der Bündelkauf oder der Einzelkauf (zu den bereits festgelegten Einzelpreisen) den höheren Nutzen bringt, und die daraus resultierenden Umsätze über alle Kunden summieren."
      ]},
      { type: "formula", tex: "\\text{Gewinn}_{EP} = \\max_p\\big(p \\cdot n_{CS}(p)\\big) + \\max_q\\big(q \\cdot n_{TK}(q)\\big), \\qquad \\text{Gewinn}_{rein} = \\max_b\\big(b \\cdot n_{Bündel}(b)\\big)" }
    ],
    exercises: [
      {
        id: "vertrieb-preisbuendelung-rechenbeispiel-e1",
        prompt: "Berechnen Sie die optimale Einzelpreisbildung für die Cross-Skates anhand der Zahlungsbereitschaften A=45, B=50, C=75, D=40, E=30. Geben Sie den optimalen Preis, die Menge und den resultierenden Umsatz an.",
        solution: "Absteigend sortiert lauten die Zahlungsbereitschaften: 75, 50, 45, 40, 30. Bei Preis 75 € ergibt sich Menge 1 und Umsatz 75 €; bei 50 € Menge 2 und Umsatz 100 €; bei 45 € Menge 3 und Umsatz 135 €; bei 40 € Menge 4 und Umsatz 160 €; bei 30 € Menge 5 und Umsatz 150 €. Der höchste Umsatz wird bei einem Preis von 40 € mit 160 € erzielt (4 verkaufte Cross-Skates). Der optimale Einzelpreis für die Cross-Skates beträgt also 40 €."
      },
      {
        id: "vertrieb-preisbuendelung-rechenbeispiel-e2",
        prompt: "Berechnen Sie analog die optimale Einzelpreisbildung für den Trainingskurs anhand der Zahlungsbereitschaften A=20, B=40, C=15, D=60, E=55, und ermitteln Sie anschließend den Gesamtgewinn der Einzelpreisbildung über beide Produkte.",
        solution: "Absteigend sortiert lauten die Zahlungsbereitschaften für den Trainingskurs: 60, 55, 40, 20, 15. Bei Preis 60 € ergibt sich Menge 1 und Umsatz 60 €; bei 55 € Menge 2 und Umsatz 110 €; bei 40 € Menge 3 und Umsatz 120 €; bei 20 € Menge 4 und Umsatz 80 €; bei 15 € Menge 5 und Umsatz 75 €. Der optimale Preis für den Trainingskurs beträgt 40 € mit einem Umsatz von 120 € (3 verkaufte Kurse). Zusammen mit dem optimalen Cross-Skates-Umsatz von 160 € ergibt sich ein Gesamtgewinn der Einzelpreisbildung von 160 € + 120 € = 280 €."
      },
      {
        id: "vertrieb-preisbuendelung-rechenbeispiel-e3",
        prompt: "Berechnen Sie den optimalen Bündelpreis für die reine Preisbündelung. Bilden Sie zunächst die Bündel-Zahlungsbereitschaft jedes Kunden und ermitteln Sie dann Preis, Menge und Gewinn im Optimum.",
        solution: "Die Bündel-Zahlungsbereitschaft je Kunde ergibt sich als Summe der beiden Einzelzahlungsbereitschaften: A = 45+20 = 65, B = 50+40 = 90, C = 75+15 = 90, D = 40+60 = 100, E = 30+55 = 85. Absteigend sortiert: 100, 90, 90, 85, 65. Bei Bündelpreis 100 € ergibt sich Menge 1 und Umsatz 100 €; bei 90 € Menge 2 und Umsatz 180 €; bei 90 € (dritter Wert) Menge 3 und Umsatz 270 €; bei 85 € Menge 4 und Umsatz 340 €; bei 65 € Menge 5 und Umsatz 325 €. Das Optimum liegt bei einem Bündelpreis von 85 €, Menge 4, mit einem Gewinn von 340 €. Da 340 € über dem EP-Gewinn von 280 € liegt, ist die reine Preisbündelung hier vorzuziehen."
      },
      {
        id: "vertrieb-preisbuendelung-rechenbeispiel-e4",
        prompt: "Erklären Sie anhand von Kunde C (Cross-Skates 75 €, Trainingskurs 15 €), warum die gemischte Preisbündelung in diesem Beispiel keinen höheren Gewinn als die reine Preisbündelung erzielen kann.",
        solution: "Bei gemischter Preisbündelung kann jeder Kunde frei wählen, ob er das Bündel kauft oder die Produkte einzeln zu den festgelegten Einzelpreisen (40 € für Cross-Skates, 40 € für den Trainingskurs) erwirbt. Kunde C bewertet die Cross-Skates mit 75 €, aber den Trainingskurs nur mit 15 € — deutlich unter dem Einzelpreis von 40 € für den Kurs. Für Kunde C ist es daher rational, nur die einzelnen Cross-Skates zu kaufen (Nutzen 75 € gegenüber dem Einzelpreis) statt das teurere Bündel, da der Trainingskurs für ihn kaum Wert hat. Dieses 'Cherry-Picking' einzelner Kunden, die sich gezielt nur das für sie werthaltige Einzelprodukt herauspicken, verhindert, dass die gemischte Preisbündelung die volle Abschöpfung der reinen Preisbündelung erreicht — der maximal erzielbare Gewinn über gemischte Preisbündelung liegt in diesem Beispiel bei nur 270 € statt 340 €."
      },
      {
        id: "vertrieb-preisbuendelung-rechenbeispiel-e5",
        prompt: "Fassen Sie das verifizierte Ranking der drei Preisstrategien in diesem Rechenbeispiel zusammen und erläutern Sie, warum dieses Ranking nicht als allgemeingültige Regel für jedes beliebige Bündelungsproblem missverstanden werden darf.",
        solution: "In diesem konkreten Beispiel gilt das Ranking: reine Preisbündelung (340 €) vor Einzelpreisbildung (280 €) vor gemischter Preisbündelung (270 €). Dieses Ergebnis ist jedoch spezifisch für die hier vorliegende, stark heterogene Verteilung der Zahlungsbereitschaften (insbesondere die gegenläufigen Präferenzen von Kunde C mit hoher Cross-Skates- und niedriger Trainingskurs-Zahlungsbereitschaft). Es handelt sich um das Ergebnis dieser konkreten Berechnung, nicht um ein allgemeingültiges Theorem — bei anderen Kundenzahlen oder anderen Verteilungen der Zahlungsbereitschaften kann durchaus auch gemischte Preisbündelung die beste oder Einzelpreisbildung die schlechteste Option sein. Jede Bündelungsaufgabe muss daher stets anhand der konkreten, gegebenen Zahlungsbereitschaften neu durchgerechnet werden."
      }
    ],
    quiz: [
      { id: "q1", question: "Wie hoch ist im Rechenbeispiel der optimale Einzelpreis für die Cross-Skates?", options: ["40 €", "75 €", "30 €", "45 €"], correctIndex: 0, explanation: "Bei einem Preis von 40 € werden 4 Cross-Skates verkauft, was den höchsten Umsatz von 160 € ergibt." },
      { id: "q2", question: "Wie hoch ist der resultierende Umsatz bei optimaler Einzelpreisbildung für die Cross-Skates?", options: ["180 €", "150 €", "160 €", "135 €"], correctIndex: 2, explanation: "Preis 40 € × Menge 4 = 160 € ist der höchste erzielbare Umsatz für die Cross-Skates." },
      { id: "q3", question: "Wie hoch ist der optimale Einzelpreis für den Trainingskurs im Rechenbeispiel?", options: ["20 €", "55 €", "60 €", "40 €"], correctIndex: 3, explanation: "Bei 40 € werden 3 Kurse verkauft, was mit 120 € den höchsten Umsatz für den Trainingskurs ergibt." },
      { id: "q4", question: "Wie hoch ist der Gesamtgewinn bei optimaler Einzelpreisbildung über beide Produkte?", options: ["280 €", "220 €", "160 €", "340 €"], correctIndex: 0, explanation: "160 € (Cross-Skates) + 120 € (Trainingskurs) = 280 € Gesamtgewinn bei Einzelpreisbildung." },
      { id: "q5", question: "Wie hoch ist die Bündel-Zahlungsbereitschaft von Kunde D (Cross-Skates 40 €, Trainingskurs 60 €)?", options: ["60 €", "20 €", "100 €", "40 €"], correctIndex: 2, explanation: "Die Bündel-Zahlungsbereitschaft ist die Summe: 40 € + 60 € = 100 €." },
      { id: "q6", question: "Wie hoch ist der optimale Bündelpreis bei reiner Preisbündelung?", options: ["90 €", "85 €", "65 €", "100 €"], correctIndex: 1, explanation: "Bei einem Bündelpreis von 85 € werden 4 Bündel verkauft, was mit 340 € den höchsten Umsatz ergibt." },
      { id: "q7", question: "Wie hoch ist der maximale Gewinn bei reiner Preisbündelung?", options: ["280 €", "270 €", "325 €", "340 €"], correctIndex: 3, explanation: "Bündelpreis 85 € × Menge 4 = 340 € ist der optimale Gewinn der reinen Preisbündelung." },
      { id: "q8", question: "Welche Preisstrategie erzielt in diesem Rechenbeispiel den höchsten Gewinn?", options: ["Einzelpreisbildung", "Alle drei erzielen denselben Gewinn", "Gemischte Preisbündelung", "Reine Preisbündelung"], correctIndex: 3, explanation: "Reine Preisbündelung erzielt mit 340 € den höchsten Gewinn, vor Einzelpreisbildung (280 €) und gemischter Preisbündelung (270 €)." },
      { id: "q9", question: "Warum kann Kunde C bei gemischter Preisbündelung rational nur die einzelnen Cross-Skates kaufen statt das Bündel?", options: ["Weil das Bündel für ihn günstiger als die Cross-Skates allein ist", "Weil seine Zahlungsbereitschaft für den Trainingskurs (15 €) weit unter dem Einzelpreis (40 €) liegt", "Weil er keine Cross-Skates benötigt", "Weil er der einzige Kunde mit dieser Zahlungsbereitschaft ist"], correctIndex: 1, explanation: "Kunde C bewertet den Trainingskurs mit nur 15 €, deutlich unter dem Einzelpreis von 40 € — das Bündel lohnt sich für ihn daher nicht." },
      { id: "q10", question: "Wie hoch ist der maximal erreichbare Gewinn über gemischte Preisbündelung in diesem konkreten Beispiel?", options: ["340 €", "270 €", "325 €", "280 €"], correctIndex: 1, explanation: "Der maximal über gemischte Preisbündelung erreichbare Gewinn liegt in diesem Beispiel bei 270 € und damit unter der reinen Preisbündelung." }
    ]
  }
];
