const NATWISS_CHAPTER9_TOPICS = [
  {
    id: "natwiss-zweiter-hauptsatz",
    chapter: 9,
    order: 1,
    title: "2. Hauptsatz der Thermodynamik",
    icon: "⏩",
    summary: "Der 2. Hauptsatz legt die Richtung spontaner Prozesse fest: Wärme fließt nie spontan von kalt nach warm, und kein Kreisprozess kann Wärme vollständig in Arbeit umwandeln.",
    explanation: [
      { type: "p", text: "Der erste Hauptsatz sagt nur, dass Energie erhalten bleibt, aber nicht, in welche Richtung Prozesse ablaufen. Der zweite Hauptsatz legt diese Richtung fest und erklärt, warum manche physikalisch möglichen Prozesse nie spontan auftreten." },
      { type: "list", items: [
        "Formulierung nach Clausius: 'Wärme kann nicht von selbst von einem kälteren auf einen wärmeren Körper übergehen.'",
        "Formulierung nach Kelvin-Planck: 'Es ist unmöglich, einen Kreisprozess zu konstruieren, dessen einzige Wirkung die Umwandlung von Wärme in Arbeit ist.'",
        "Konsequenz: Alle realen Wärmekraftmaschinen haben einen Wirkungsgrad η < 100%",
        "Wärmekraftmaschine: Q_H → W + Q_C (W = nutzbarer Anteil, Q_C = Abwärme)",
        "Wirkungsgrad: η = W / Q_H = 1 − Q_C / Q_H (immer kleiner als 1)",
        "Kältemaschine: Arbeit W pumpt Wärme Q_C von kalt nach warm",
        "Leistungszahl Kältemaschine: COP_kalt = Q_C / W"
      ]},
      { type: "formula", tex: "\\eta = \\frac{W}{Q_H} = 1 - \\frac{Q_C}{Q_H} < 1" }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Eine Wärmekraftmaschine nimmt Q_H = 1000 J aus einem heißen Reservoir auf und gibt Q_C = 600 J an ein kaltes Reservoir ab. Berechnen Sie die Nutzarbeit W und den Wirkungsgrad η.",
        solution: [
          { type: "list", items: [
            "Nutzarbeit: W = Q_H − Q_C = 1000 − 600 = 400 J",
            "Wirkungsgrad: η = W / Q_H = 400 / 1000 = 0,4 = 40 %"
          ]}
        ]
      },
      {
        id: "ex2",
        prompt: "Warum kann man ein Zimmer nicht kühlen, indem man die Kühlschranktür offen lässt?",
        solution: [
          { type: "p", text: "Der Kühlschrank ist eine Wärmepumpe: Er nimmt Wärme aus dem Innenraum auf (Q_kalt) und gibt sie zusammen mit der zugeführten elektrischen Arbeit W an die Umgebung ab (Q_heiß = Q_kalt + W)." },
          { type: "p", text: "Bei offener Tür kühlt der Kühlschrank zwar seinen Innenraum, gibt aber gleichzeitig mehr Wärme (Q_kalt + W) an den Raum ab. Der Raum erwärmt sich netto um die zugeführte elektrische Leistung W – genau das Gegenteil von Kühlen." }
        ]
      },
      {
        id: "ex3",
        prompt: "Kann eine 'Perpetuum-Mobile-Maschine zweiter Art' existieren? Sie soll z. B. die Wärme des Ozeans vollständig in Schiffsantrieb umwandeln, ohne Abwärme.",
        solution: [
          { type: "p", text: "Nein. Das widerspricht direkt dem zweiten Hauptsatz (Kelvin-Planck-Formulierung): Kein Kreisprozess kann ausschließlich Wärme in Arbeit umwandeln. Es wäre immer Abwärme an ein kälteres Reservoir abzugeben." },
          { type: "p", text: "Auch wenn der Ozean als praktisch unerschöpfliches Wärmereservoir dient, bräuchte das Schiff ein noch kälteres Reservoir, an das es Abwärme abgeben kann – da es keins gibt, ist die Maschine verboten." }
        ]
      },
      {
        id: "ex4",
        prompt: "Eine Wärmepumpe verbraucht P = 500 W elektrische Leistung und transportiert Q_C = 2000 W Wärmeleistung aus dem Erdreich ins Haus. Berechnen Sie die Heizleistung und die Leistungszahl (COP).",
        solution: [
          { type: "list", items: [
            "Heizleistung: Q_H = Q_C + W = 2000 + 500 = 2500 W",
            "Leistungszahl: COP_Heiz = Q_H / W = 2500 / 500 = 5"
          ]},
          { type: "p", text: "Die Wärmepumpe liefert für jeden aufgewendeten Watt 5 Watt Heizleistung – weit effizienter als direktes Heizen mit Strom (η = 100%)." }
        ]
      },
      {
        id: "ex5",
        prompt: "Eine Wärmekraftmaschine hat η = 40 % und leistet W = 200 J pro Zyklus. Wie groß sind Q_H und Q_C?",
        solution: [
          { type: "list", items: [
            "Q_H = W / η = 200 / 0,40 = 500 J",
            "Q_C = Q_H − W = 500 − 200 = 300 J"
          ]}
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was besagt die Clausius-Formulierung des 2. Hauptsatzes?", options: ["Kein Prozess hat 100 % Wirkungsgrad", "Wärme kann nicht spontan von kalt nach warm fließen", "Entropie bleibt konstant", "Energie bleibt erhalten"], correctIndex: 1, explanation: "Clausius: Wärme fließt spontan nur von warm nach kalt – die Umkehrung (kalt nach warm) erfordert äußere Arbeit." },
      { id: "q2", question: "Was ist der maximale theoretische Wirkungsgrad einer Wärmekraftmaschine?", options: ["Unbegrenzt", "100 %", "< 100 % (abhängig von den Temperaturen)", "50 %"], correctIndex: 2, explanation: "Der 2. Hauptsatz verbietet η = 100 %. Das theoretische Maximum ist der Carnot-Wirkungsgrad η_C = 1 − T_C/T_H." },
      { id: "q3", question: "Was ist eine Wärmepumpe?", options: ["Eine Maschine, die nur mit Solarenergie betrieben wird", "Ein Gerät zur Messung von Wärme", "Eine Maschine, die Wärme vernichtet", "Eine umgekehrte Wärmekraftmaschine: pumpt mit Arbeit Wärme von kalt nach warm"], correctIndex: 3, explanation: "Eine Wärmepumpe verwendet äußere Arbeit (z. B. Strom), um Wärme von einem kalten auf ein warmes Reservoir zu transportieren (Kühlschrank, Heizungswärmepumpe)." },
      { id: "q4", question: "Was ist die Leistungszahl (COP) einer Kältemaschine?", options: ["COP = η", "COP = W / Q_C", "COP = Q_H / W", "COP = Q_C / W"], correctIndex: 3, explanation: "Leistungszahl der Kältemaschine: COP_kalt = Q_C / W (entzogene Wärme pro aufgewendeter Arbeit)." },
      { id: "q5", question: "Welche Aussage ist FALSCH über den 2. Hauptsatz?", options: ["Energie bleibt in jedem Prozess erhalten (das ist der 1. Hauptsatz)", "Wärme fließt spontan von warm nach kalt", "Ein Perpetuum Mobile zweiter Art ist unmöglich", "Alle realen Wärmekraftmaschinen haben η < 100 %"], correctIndex: 0, explanation: "Energieerhaltung ist der 1. Hauptsatz, nicht der 2. Hauptsatz. Der 2. Hauptsatz beschränkt die Richtung von Prozessen." },
      { id: "q6", question: "Welchen Wirkungsgrad hat eine Maschine, die aus 600 J Wärme 200 J Arbeit gewinnt?", options: ["33 %", "50 %", "25 %", "67 %"], correctIndex: 0, explanation: "η = W/Q_H = 200/600 = 1/3 ≈ 33 %." },
      { id: "q7", question: "Eine Kältemaschine hat COP = 3 und verbraucht 100 W. Wie viel Wärme entzieht sie dem Kühlraum?", options: ["33 W", "300 W", "100 W", "400 W"], correctIndex: 1, explanation: "COP = Q_C/W → Q_C = COP · W = 3 · 100 W = 300 W." },
      { id: "q8", question: "Warum können natürliche Prozesse nicht rückwärts ablaufen (z. B. Rauch zieht sich wieder in den Schornstein)?", options: ["Weil das gegen den 1. Hauptsatz verstoßen würde", "Weil der 2. Hauptsatz Prozesse auf jene mit wachsender Entropie beschränkt", "Weil Materie sich nicht selbst organisieren kann", "Weil Energie dabei verloren geht"], correctIndex: 1, explanation: "Irreversible Prozesse (Diffusion, Wärmeleitung, Reibung) laufen nur in Richtung steigender Gesamtentropie ab – das ist der Kern des 2. Hauptsatzes." },
      { id: "q9", question: "Was unterscheidet einen reversiblen von einem irreversiblen Prozess?", options: ["Irreversible Prozesse setzen keine Energie frei", "Reversible Prozesse verletzen den 1. Hauptsatz", "Reversible Prozesse laufen ohne Entropieerzeugung ab und können rückwärts laufen", "Reversible Prozesse sind immer adiabatisch"], correctIndex: 2, explanation: "Reversible (umkehrbare) Prozesse sind idealisierte Grenzfälle ohne Irreversibilitäten; reale Prozesse sind immer irreversibel (Entropie nimmt zu)." },
      { id: "q10", question: "Wärme Q_H = 1000 J, Q_C = 400 J. Wie groß ist der Wirkungsgrad?", options: ["60 %", "40 %", "100 %", "25 %"], correctIndex: 0, explanation: "η = 1 − Q_C/Q_H = 1 − 400/1000 = 0,6 = 60 %." }
    ]
  },
  {
    id: "natwiss-entropie",
    chapter: 9,
    order: 2,
    title: "Entropie",
    icon: "📈",
    summary: "Entropie misst die Unordnung eines Systems und nimmt bei irreversiblen Prozessen immer zu – das ist die Aussage des 2. Hauptsatzes in mathematischer Form.",
    explanation: [
      { type: "p", text: "Entropie S ist eine Zustandsgröße, die den Grad der Unordnung oder die Anzahl möglicher Mikrozustände eines Systems quantifiziert. Thermodynamisch definiert man die Entropieänderung für einen reversiblen Prozess:" },
      { type: "formula", tex: "dS = \\frac{dQ_{\\text{rev}}}{T} \\quad [S] = \\text{J/K}" },
      { type: "p", text: "Für den gesamten Prozess gilt: Bei reversibler Zustandsänderung bleibt die Gesamtentropie konstant; bei irreversibler Zustandsänderung nimmt sie zu:" },
      { type: "formula", tex: "\\Delta S_{\\text{gesamt}} \\geq 0 \\quad (= 0 \\; \\text{reversibel}, \\; > 0 \\; \\text{irreversibel})" },
      { type: "p", text: "Boltzmann gab eine statistische Interpretation: Die Entropie ist proportional zum Logarithmus der Anzahl Ω der zugänglichen Mikrozustände:" },
      { type: "formula", tex: "S = k_B \\cdot \\ln \\Omega \\quad (k_B = 1{,}381 \\times 10^{-23} \\; \\text{J/K})" },
      { type: "list", items: [
        "Höhere Temperatur → mehr mögliche Mikrozustände → höhere Entropie",
        "Gas in größerem Volumen → mehr Mikrozustände → höhere Entropie",
        "Gemischte Gase → mehr Mikrozustände als getrennte → Entropie nimmt zu",
        "Entropieänderung bei Erwärmung: ΔS = n·C·ln(T₂/T₁)",
        "Entropieänderung bei Phasenübergang: ΔS = Q/T_Phase"
      ]}
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "1 mol Wasser verdampft bei T = 100 °C = 373 K. Die molare Verdampfungswärme beträgt L_v = 40 700 J/mol. Berechnen Sie die Entropieänderung des Wassers beim Verdampfen.",
        solution: [
          { type: "formula", tex: "\\Delta S = \\frac{Q}{T} = \\frac{n \\cdot L_v}{T} = \\frac{1 \\cdot 40\\,700}{373} \\approx +109 \\; \\text{J/K}" },
          { type: "p", text: "Die Entropie steigt stark an, weil beim Übergang von Flüssig in Gas viele neue Mikrozustände zugänglich werden (Gasteilchen können sich frei bewegen)." }
        ]
      },
      {
        id: "ex2",
        prompt: "Q = 1000 J fließt irreversibel von einem Reservoir bei T₁ = 500 K zu einem bei T₂ = 300 K. Berechnen Sie ΔS₁, ΔS₂ und ΔS_gesamt.",
        solution: [
          { type: "list", items: [
            "ΔS₁ = −Q/T₁ = −1000/500 = −2 J/K (warmes Reservoir gibt Wärme ab)",
            "ΔS₂ = +Q/T₂ = +1000/300 = +3,33 J/K (kaltes Reservoir nimmt auf)",
            "ΔS_gesamt = −2 + 3,33 = +1,33 J/K > 0 (irreversibler Prozess)"
          ]}
        ]
      },
      {
        id: "ex3",
        prompt: "1 mol Eis schmilzt bei T = 0 °C = 273 K (L_m = 6020 J/mol). Ist das Schmelzen spontan? Berechnen Sie ΔS_Eis.",
        solution: [
          { type: "formula", tex: "\\Delta S_{\\text{Eis}} = \\frac{n \\cdot L_m}{T} = \\frac{6020}{273} \\approx +22{,}1 \\; \\text{J/K}" },
          { type: "p", text: "Die Entropie des Wassers steigt beim Schmelzen. Ob Schmelzen spontan ist, hängt von der Umgebungstemperatur ab: Bei T > 0 °C ist es spontan (Gesamtentropie steigt), bei T < 0 °C nicht." }
        ]
      },
      {
        id: "ex4",
        prompt: "Ein ideales Gas expandiert ins Vakuum (freie Expansion, Q = 0, W = 0). Was passiert mit der Entropie?",
        solution: [
          { type: "p", text: "Da Q = 0 und W = 0, gilt ΔU = 0 und damit (für ideales Gas) ΔT = 0. Trotzdem steigt die Entropie: Das Gas füllt jetzt ein größeres Volumen → mehr Mikrozustände → ΔS > 0." },
          { type: "p", text: "Die freie Expansion ist hochgradig irreversibel (Gas kehrt nicht spontan in den kleinen Behälter zurück). Statistisch wäre die Wahrscheinlichkeit dafür praktisch null." }
        ]
      },
      {
        id: "ex5",
        prompt: "Warum nimmt die Entropie beim Mischen zweier verschiedener Gase zu, obwohl keine Wärme fließt?",
        solution: [
          { type: "p", text: "Boltzmann: S = k_B·ln(Ω). Beim Mischen kann jedes Molekül der ersten Gassorte nun das gesamte Volumen besetzen (anstatt nur die Hälfte). Die Anzahl der Mikrozustände Ω steigt daher stark an." },
          { type: "p", text: "Diese Mischungsentropie ΔS_mix > 0 ist der Grund, warum sich einmal gemischte Gase nicht selbstständig wieder entmischen – das wäre eine spontane Entropieabnahme, die der 2. Hauptsatz verbietet." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was misst die Entropie?", options: ["Den Grad der Unordnung / die Anzahl möglicher Mikrozustände", "Die Temperatur des Systems", "Die gespeicherte Wärme", "Die innere Energie"], correctIndex: 0, explanation: "Entropie ist ein Maß für die Unordnung: S = k_B·ln(Ω) nach Boltzmann." },
      { id: "q2", question: "Wie lautet die thermodynamische Definition der Entropieänderung?", options: ["dS = dQ · T", "dS = dU / T", "dS = dW / T", "dS = dQ_rev / T"], correctIndex: 3, explanation: "dS = dQ_rev / T (für reversiblen Prozess). Die Entropieänderung ist Wärme durch Temperatur." },
      { id: "q3", question: "Was gilt für die Gesamtentropie bei einem irreversiblen Prozess?", options: ["ΔS_gesamt < 0", "ΔS_gesamt > 0", "ΔS_gesamt kann jedes Vorzeichen haben", "ΔS_gesamt = 0"], correctIndex: 1, explanation: "2. Hauptsatz: Bei irreversiblen (realen) Prozessen nimmt die Gesamtentropie immer zu (ΔS_gesamt > 0)." },
      { id: "q4", question: "Wasser gefriert bei 0 °C. Die Entropie des Wassers …", options: ["bleibt konstant", "wird negativ", "nimmt zu", "nimmt ab"], correctIndex: 3, explanation: "Beim Gefrieren (Flüssig → Fest) werden die Moleküle geordneter – die Entropie nimmt ab. Die Abwärme an die Umgebung erhöht die Entropie der Umgebung um mindestens denselben Betrag." },
      { id: "q5", question: "Was sagt Boltzmanns Formel S = k_B·ln(Ω)?", options: ["Je mehr Mikrozustände Ω möglich sind, desto größer ist die Entropie", "Entropie ist eine Energie", "S hängt nur von der Energie ab", "S ist proportional zur Temperatur"], correctIndex: 0, explanation: "Boltzmanns Formel verbindet Makroskopie (S) mit der Mikroskopie (Ω = Anzahl möglicher Mikrozustände) – der Grundstein der statistischen Thermodynamik." },
      { id: "q6", question: "Bei welchem Prozess bleibt die Entropie des Universums konstant?", options: ["Reibungsprozess", "Idealem reversibler Prozess", "Wärmeleitung", "Gasdiffusion"], correctIndex: 1, explanation: "Nur bei ideal reversiblen Prozessen gilt ΔS_Universum = 0. Alle realen Prozesse sind irreversibel (ΔS > 0)." },
      { id: "q7", question: "Ein Stein fällt und trifft den Boden (Reibungswärme entsteht). Was passiert mit der Entropie?", options: ["Sie wird negativ", "Sie bleibt konstant (Energie erhalten)", "Sie nimmt zu", "Sie nimmt ab"], correctIndex: 2, explanation: "Kinetische Energie wird in Wärme umgewandelt → erhöhte Unordnung der Moleküle → die Entropie steigt." },
      { id: "q8", question: "Wie groß ist ΔS, wenn Q = 500 J reversibel bei T = 250 K zugeführt werden?", options: ["250 J/K", "125 J/K", "0,5 J/K", "2 J/K"], correctIndex: 3, explanation: "ΔS = Q/T = 500/250 = 2 J/K." },
      { id: "q9", question: "Warum kehren Diffusionsprozesse (z. B. Farbstoff im Wasser) nicht spontan um?", options: ["Weil keine Energie zur Verfügung steht", "Weil die Gesamtentropie dabei sinken würde, was der 2. Hauptsatz verbietet", "Weil das gegen den 1. Hauptsatz verstößt", "Weil der Druck zu niedrig ist"], correctIndex: 1, explanation: "Die Rückdiffusion würde die Anzahl der Mikrozustände drastisch verringern (ΔS < 0). Das ist statistisch nahezu unmöglich und vom 2. Hauptsatz verboten." },
      { id: "q10", question: "Was ist die 'Entropieänderung des Universums' bei einem spontanen irreversiblen Prozess?", options: ["Unbestimmt", "Null", "Positiv", "Negativ"], correctIndex: 2, explanation: "2. Hauptsatz: Jeder spontane (irreversible) Prozess erhöht die Gesamtentropie des Universums: ΔS_gesamt > 0." }
    ]
  },
  {
    id: "natwiss-carnot",
    chapter: 9,
    order: 3,
    title: "Carnot-Kreisprozess und Wärmekraftmaschinen",
    icon: "⚙️",
    summary: "Der Carnot-Kreisprozess ist der theoretisch effizienteste Kreisprozess zwischen zwei Temperaturen; sein Wirkungsgrad η_C = 1 − T_C/T_H gilt als absolute Obergrenze.",
    explanation: [
      { type: "p", text: "Der Carnot-Prozess ist ein idealer, vollständig reversibler Kreisprozess, der zwischen zwei Wärmereservoirs (T_H und T_C) arbeitet. Er besteht aus 4 Schritten:" },
      { type: "list", items: [
        "1. Isotherme Expansion bei T_H: Gas nimmt Q_H auf, leistet Arbeit",
        "2. Adiabatische Expansion: Gas kühlt sich von T_H auf T_C ab, leistet weitere Arbeit",
        "3. Isotherme Kompression bei T_C: Gas gibt Q_C ab",
        "4. Adiabatische Kompression: Gas erwärmt sich von T_C auf T_H"
      ]},
      { type: "p", text: "Der Carnot-Wirkungsgrad ist das theoretische Maximum für jede Maschine, die zwischen T_H und T_C arbeitet (Temperaturen in Kelvin!):" },
      { type: "formula", tex: "\\eta_C = 1 - \\frac{T_C}{T_H} \\quad (T \\; \\text{in Kelvin!})" },
      { type: "p", text: "Carnots Theorem: Alle reversiblen Maschinen zwischen denselben Reservoirs haben gleichen Wirkungsgrad η_C. Irreversible Maschinen haben geringeren Wirkungsgrad. Für eine Wärmepumpe gilt:" },
      { type: "formula", tex: "COP_{WP} = \\frac{T_H}{T_H - T_C} \\quad (\\text{immer} > 1)" }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Eine Carnot-Maschine arbeitet zwischen T_H = 600 K und T_C = 300 K. Berechnen Sie den Carnot-Wirkungsgrad.",
        solution: [
          { type: "formula", tex: "\\eta_C = 1 - \\frac{T_C}{T_H} = 1 - \\frac{300}{600} = 1 - 0{,}5 = 0{,}5 = 50\\%" }
        ]
      },
      {
        id: "ex2",
        prompt: "Ein Dampfkraftwerk hat T_H = 600 °C und T_C = 50 °C. Welcher ist der maximale theoretische Wirkungsgrad?",
        solution: [
          { type: "p", text: "Temperaturen in Kelvin: T_H = 873 K, T_C = 323 K." },
          { type: "formula", tex: "\\eta_C = 1 - \\frac{323}{873} \\approx 1 - 0{,}370 = 63{,}0\\%" },
          { type: "p", text: "Reale Kraftwerke erreichen wegen Irreversibilitäten typischerweise 35–45 %." }
        ]
      },
      {
        id: "ex3",
        prompt: "Eine Wärmepumpe heizt einen Raum auf T_H = 22 °C = 295 K mit Wärme aus dem Erdreich (T_C = −10 °C = 263 K). Berechnen Sie den maximalen COP (Carnot).",
        solution: [
          { type: "formula", tex: "COP_{WP} = \\frac{T_H}{T_H - T_C} = \\frac{295}{295 - 263} = \\frac{295}{32} \\approx 9{,}2" },
          { type: "p", text: "Im Idealfall liefert diese Wärmepumpe für 1 kW Strom bis zu 9,2 kW Heizleistung – reale Wärmepumpen erreichen COP ≈ 3–5." }
        ]
      },
      {
        id: "ex4",
        prompt: "Ein Ottomotor (Verbrennungsmotor) hat ein Verdichtungsverhältnis r = 8 und γ = 1,4. Berechnen Sie den theoretischen Wirkungsgrad des Otto-Kreisprozesses.",
        solution: [
          { type: "formula", tex: "\\eta_{\\text{Otto}} = 1 - \\frac{1}{r^{\\gamma-1}} = 1 - \\frac{1}{8^{0{,}4}} = 1 - \\frac{1}{8^{0{,}4}}" },
          { type: "p", text: "8^0,4 = e^(0,4·ln8) = e^(0,4·2,079) = e^0,832 ≈ 2,30." },
          { type: "formula", tex: "\\eta_{\\text{Otto}} = 1 - \\frac{1}{2{,}30} \\approx 1 - 0{,}435 = 56{,}5\\%" }
        ]
      },
      {
        id: "ex5",
        prompt: "Ein Kohlekraftwerk hat η = 40 %. Die Kühlwassertemperatur beträgt T_C = 30 °C. Welche Mindesttemperatur T_H muss die Verbrennung erreichen, damit ein Carnot-Prozess mit 40 % möglich wäre?",
        solution: [
          { type: "p", text: "T_C = 303 K. Aus η_C = 1 − T_C/T_H folgt:" },
          { type: "formula", tex: "T_H = \\frac{T_C}{1 - \\eta} = \\frac{303}{1 - 0{,}40} = \\frac{303}{0{,}60} = 505 \\; \\text{K} = 232 \\; ^\\circ\\text{C}" },
          { type: "p", text: "Reale Verbrennung ist viel heißer (> 1000 °C), aber Irreversibilitäten reduzieren den Wirkungsgrad auf diese 40 %." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Wovon hängt der Carnot-Wirkungsgrad ab?", options: ["Nur von den absoluten Temperaturen T_H und T_C", "Von der Reibung im Zylinder", "Von der Leistung der Maschine", "Vom verwendeten Arbeitsmedium (Luft, Wasser, …)"], correctIndex: 0, explanation: "η_C = 1 − T_C/T_H hängt ausschließlich von den Temperaturen T_H und T_C (in Kelvin) ab." },
      { id: "q2", question: "Welche Aussage macht der Carnot-Satz?", options: ["Der Carnot-Prozess hat η = 100 %", "Reversible Maschinen zwischen gleichen Reservoirs haben denselben (maximalen) Wirkungsgrad", "Alle Maschinen haben denselben Wirkungsgrad", "Irreversible Maschinen sind effizienter"], correctIndex: 1, explanation: "Carnots Theorem: Alle reversiblen Wärmekraftmaschinen zwischen gleichen Reservoirs haben denselben Wirkungsgrad η_C; irreversible haben weniger." },
      { id: "q3", question: "T_H = 500 K, T_C = 250 K. Wie groß ist η_C?", options: ["100 %", "75 %", "25 %", "50 %"], correctIndex: 3, explanation: "η_C = 1 − 250/500 = 1 − 0,5 = 50 %." },
      { id: "q4", question: "Aus welchen 4 Teilprozessen besteht der Carnot-Kreisprozess?", options: ["2 Isothermen + 2 Adiabaten", "2 Isobaren + 2 Isochoren", "2 Adiabaten + 2 Isochoren", "4 Adiabaten"], correctIndex: 0, explanation: "Carnot-Prozess: isotherme Expansion (T_H) → adiabatische Expansion → isotherme Kompression (T_C) → adiabatische Kompression (zurück zu T_H)." },
      { id: "q5", question: "Wie verbessert man den Carnot-Wirkungsgrad am einfachsten?", options: ["Mehr Arbeitsmittel verwenden", "T_C erhöhen", "Schneller arbeiten", "T_H erhöhen und/oder T_C senken"], correctIndex: 3, explanation: "η_C = 1 − T_C/T_H: Größeres T_H oder kleineres T_C erhöht η_C. Deshalb arbeiten moderne Kraftwerke mit möglichst hohen Dampftemperaturen." },
      { id: "q6", question: "Ein Kühlschrank mit T_H = 20 °C und T_C = 5 °C: Was ist der maximale Carnot-COP für die Kühlung?", options: ["9,3", "1,07", "18,5", "4,6"], correctIndex: 2, explanation: "T_H = 293 K, T_C = 278 K. COP_kalt = T_C/(T_H−T_C) = 278/(293−278) = 278/15 ≈ 18,5." },
      { id: "q7", question: "Was ist der Unterschied zwischen Wirkungsgrad η und Leistungszahl COP?", options: ["Es gibt keinen Unterschied", "η wird nur in Kelvin angegeben", "η gilt für Wärmekraftmaschinen (W/Q_H), COP für Wärmepumpen/Kältemaschinen (Q/W)", "COP < 1, η > 1"], correctIndex: 2, explanation: "η = W/Q_H < 1 für Wärmekraftmaschinen. COP = Q/W kann > 1 sein – bei Wärmepumpen liefert man mehr Wärme als man elektrische Arbeit einsetzt." },
      { id: "q8", question: "Welcher der folgenden Kreisprozesse ist im Automobil-Benzinmotor am ehesten realisiert?", options: ["Carnot-Prozess", "Otto-Prozess", "Stirling-Prozess", "Rankine-Prozess"], correctIndex: 1, explanation: "Benzinmotoren folgen näherungsweise dem Otto-Kreisprozess (isochore Verbrennung und Wärmeabgabe)." },
      { id: "q9", question: "Warum ist η_C = 100 % prinzipiell unmöglich (außer bei T_C = 0 K)?", options: ["Weil Energie verloren geht", "Wegen Reibungsverlusten", "Weil immer Q_C > 0 abgegeben werden muss (2. Hauptsatz)", "Wegen des idealen Gasgesetzes"], correctIndex: 2, explanation: "Der 2. Hauptsatz (Kelvin-Planck) verbietet vollständige Umwandlung von Wärme in Arbeit – immer muss Q_C > 0 an ein kälteres Reservoir abgegeben werden." },
      { id: "q10", question: "Carnot-COP einer Wärmepumpe bei T_H = 400 K und T_C = 200 K?", options: ["1", "0,5", "4", "2"], correctIndex: 3, explanation: "COP_WP = T_H/(T_H−T_C) = 400/(400−200) = 400/200 = 2." }
    ]
  }
];
