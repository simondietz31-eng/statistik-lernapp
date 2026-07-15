const FINV_CHAPTER9_TOPICS = [
  {
    id: "finv-kapitalwertmethode",
    chapter: 9,
    order: 1,
    title: "Die Kapitalwertmethode",
    icon: "💵",
    summary: "Wie der Kapitalwert einer Investition über den Vergleich von Barwerten ermittelt wird, und wie die Entscheidungskriterien K₀>0, K₀=0 und K₀<0 zu interpretieren sind.",
    explanation: [
      { type: "p", text: "Die Kapitalwertmethode (net present value / Discounted Cash Flow) vergleicht Investitionsprojekte über ihren Barwert. Der Kapitalwert ist die Summe aller auf den Zeitpunkt t₀ abgezinsten Einzel-Barwerte des Cashflows, ausgedrückt als Kapitalwert pro investiertem Euro der Anfangsinvestition:" },
      { type: "formula", tex: "K_0 = \\sum_{t=0}^{n} \\dfrac{Z_t}{(1+i)^t} = \\sum_{t=0}^{n} \\dfrac{E_t - A_t}{(1+i)^t}" },
      { type: "p", text: "Dabei ist Zₜ der Netto-Cashflow (Einzahlungen Eₜ minus Auszahlungen Aₜ) im Jahr t, und i der Kalkulationszinssatz (die Renditeerwartung des Investors, häufig der WACC, vgl. Kapitel 3). Eine äquivalente Schreibweise zerlegt den Kapitalwert in Barwert der laufenden Zahlungssalden minus die Anschaffungsauszahlung A₀ plus einen ggf. vorhandenen Barwert des Liquidationserlöses Lₙ:" },
      { type: "formula", tex: "K_0 = -A_0 + \\left(\\sum_{t=1}^{n} \\dfrac{Z_t}{(1+i)^t}\\right) + \\dfrac{L_n}{(1+i)^n}" },
      { type: "p", text: "Entscheidungskriterien der Kapitalwertmethode:" },
      { type: "list", items: [
        "K₀ > 0: Die Investition ist vorteilhaft (\"lohnt sich\"), weil sie einen Überschuss über die geforderte Mindestverzinsung (Kalkulationszinssatz) erwirtschaftet",
        "K₀ = 0: Die Investition ist \"egal\" — sie erwirtschaftet genau die geforderte Mindestverzinsung, keinen zusätzlichen Vorteil",
        "K₀ < 0: Die Investition ist nicht vorteilhaft (ein Verlust im Vergleich zur Alternativanlage zum Kalkulationszinssatz)"
      ]},
      { type: "p", text: "Die Kapitalwertrate normiert den Kapitalwert auf die Anfangsinvestition und erlaubt so einen Vergleich unterschiedlich großer Projekte:" },
      { type: "formula", tex: "\\text{Kapitalwertrate} = \\dfrac{K_0}{A_0}" },
      { type: "p", text: "Wichtige Annahme der einfachen (normalen) Kapitalwertmethode: Es wird nur ein einziger Zinssatz für Kapitalaufnahme und Kapitalanlage verwendet. Sollen unterschiedliche Zinssätze für gebundenes (investiertes) und freies (am Kapitalmarkt angelegtes) Kapital berücksichtigt werden, verwendet man die modifizierte (erweiterte) Kapitalwertmethode." }
    ],
    exercises: [
      {
        id: "finv-kapitalwertmethode-e1",
        prompt: "Eine Investition kostet 100.000 € (Zahlung bei t=0) und erwirtschaftet 3 Jahre lang je 40.000 € Cashflow (jeweils am Jahresende). Kalkulationszins 8 %. Berechnen Sie den Kapitalwert.",
        solution: [{ type: "p", text: "K₀ = −100.000 + 40.000/1,08 + 40.000/1,08² + 40.000/1,08³ = −100.000 + 37.037,04 + 34.293,55 + 31.753,29 = −100.000 + 103.083,88 ≈ 3.083,88 €. Da K₀ > 0, ist die Investition vorteilhaft." }]
      },
      {
        id: "finv-kapitalwertmethode-e2",
        prompt: "Berechnen Sie für die Investition aus Aufgabe 1 die Kapitalwertrate.",
        solution: [{ type: "p", text: "Kapitalwertrate = K₀/A₀ = 3.083,88 / 100.000 ≈ 0,0308 = 3,08 %. Das bedeutet, dass die Investition pro investiertem Euro einen zusätzlichen Kapitalwert von etwa 3,08 Cent über die geforderte Mindestverzinsung hinaus erwirtschaftet." }]
      },
      {
        id: "finv-kapitalwertmethode-e3",
        prompt: "Eine Investition kostet 50.000 € (t=0) und erbringt am Ende von 2 Jahren einen einmaligen Rückfluss von 60.000 €. Kalkulationszins 10 %. Ist die Investition vorteilhaft?",
        solution: [{ type: "p", text: "K₀ = −50.000 + 60.000/(1,10)² = −50.000 + 60.000/1,21 = −50.000 + 49.586,78 ≈ −413,22 €. Da K₀ < 0, ist die Investition NICHT vorteilhaft — sie erreicht die geforderte 10%ige Mindestverzinsung nicht ganz." }]
      },
      {
        id: "finv-kapitalwertmethode-e4",
        prompt: "Erklären Sie, warum eine Investition mit K₀ = 0 als 'egal' bezeichnet wird, obwohl das Projekt ja zusätzliche Cashflows erwirtschaftet.",
        solution: [{ type: "p", text: "Der Kalkulationszinssatz i repräsentiert bereits die vom Investor geforderte Mindestverzinsung (Opportunitätskosten, z. B. die Rendite einer vergleichbaren Alternativanlage). Ein Kapitalwert von exakt null bedeutet, dass die Investition — bei Abzinsung aller künftigen Cashflows mit genau diesem Zinssatz — genau diese geforderte Mindestverzinsung erwirtschaftet, keinen Euro mehr und keinen Euro weniger. Wirtschaftlich ist der Investor damit indifferent zwischen der Durchführung der Investition und der Anlage des Kapitals zum Kalkulationszinssatz — beide Alternativen sind gleich vorteilhaft, daher 'egal'." }]
      },
      {
        id: "finv-kapitalwertmethode-e5",
        prompt: "Was ist der Unterschied zwischen der einfachen (normalen) und der modifizierten (erweiterten) Kapitalwertmethode?",
        solution: [{ type: "p", text: "Die einfache Kapitalwertmethode verwendet nur einen einzigen Zinssatz sowohl für die Abzinsung der Investitionszahlungen als auch implizit für eine mögliche Kapitalaufnahme oder -anlage. Die modifizierte (erweiterte) Kapitalwertmethode berücksichtigt dagegen unterschiedliche Zinssätze für im Projekt gebundenes (investiertes) Kapital und für am Kapitalmarkt frei angelegtes Kapital — was realitätsnäher ist, da Sollzinsen (Kreditaufnahme) und Habenzinsen (Geldanlage) i. d. R. unterschiedlich hoch sind." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie lautet die Grundformel der Kapitalwertmethode?", options: ["K₀ = Σ Zₜ/(1+i)ᵗ", "K₀ = Σ Zₜ·(1+i)ᵗ", "K₀ = Zₙ − Z₀", "K₀ = A₀ · i"], correctIndex: 0, explanation: "K₀ = Σ Zₜ/(1+i)ᵗ summiert alle Netto-Cashflows Zₜ, jeweils mit dem Kalkulationszinssatz i auf den heutigen Zeitpunkt abgezinst — die Multiplikationsvariante (1+i)ᵗ würde stattdessen fälschlich aufzinsen." },
      { id: "q2", question: "Was bedeutet K₀ > 0?", options: ["Die Investition ist nicht vorteilhaft", "Die Investition übertrifft die geforderte Mindestverzinsung", "Der Kalkulationszins ist zu hoch angesetzt worden", "Die Investition ist vollständig wertlos"], correctIndex: 1, explanation: "Ein positiver Kapitalwert bedeutet, dass die Investition über die durch den Kalkulationszinssatz geforderte Mindestverzinsung hinaus einen zusätzlichen Wertzuwachs erwirtschaftet — sie lohnt sich also im Vergleich zur Alternativanlage." },
      { id: "q3", question: "Was bedeutet K₀ < 0?", options: ["Der Kalkulationszinssatz ist irrelevant", "Die Investition ist nicht vorteilhaft", "Es liegt ein Rechenfehler vor", "Die Investition ist vorteilhaft"], correctIndex: 1, explanation: "Ein negativer Kapitalwert zeigt, dass die abgezinsten Rückflüsse die Anfangsinvestition nicht decken — das Projekt erreicht die geforderte Mindestverzinsung nicht und ist damit einer Alternativanlage zum Kalkulationszinssatz unterlegen." },
      { id: "q4", question: "Wozu dient die Kapitalwertrate?", options: ["Sie hat keinerlei praktischen Nutzen in der Praxis", "Ausschließlich zur Berechnung der Umsatzsteuer", "Zum Vergleich unterschiedlich großer Investitionsprojekte", "Ausschließlich zur Berechnung des Steuersatzes"], correctIndex: 2, explanation: "Die Kapitalwertrate (K₀/A₀) normiert den absoluten Kapitalwert auf die Anfangsinvestition und macht so den Kapitalwert je investiertem Euro sichtbar — dadurch werden Projekte unterschiedlicher Größenordnung vergleichbar." },
      { id: "q5", question: "Welcher Zinssatz wird typischerweise als Kalkulationszinssatz in der Kapitalwertmethode verwendet?", options: ["Der aktuelle Leitzins der Zentralbank ohne jede Anpassung", "Häufig der WACC des Unternehmens", "Ein rein zufällig gewählter Wert ohne Bezug", "In jedem Fall exakt 0 %"], correctIndex: 1, explanation: "Der WACC (gewichtete Kapitalkosten) repräsentiert die vom Unternehmen geforderte Mindestrenditeanforderung und wird deshalb häufig als Kalkulationszinssatz verwendet, nicht der unangepasste Leitzins." },
      { id: "q6", question: "Was unterscheidet die einfache von der modifizierten Kapitalwertmethode?", options: ["Die modifizierte Methode gilt ausschließlich für Immobilieninvestitionen", "Zwischen beiden besteht inhaltlich überhaupt kein Unterschied", "Die einfache Methode berücksichtigt grundsätzlich gar keine Zinsen", "Die modifizierte Methode trennt Zinssätze für gebundenes und freies Kapital"], correctIndex: 3, explanation: "Während die einfache Kapitalwertmethode nur einen einzigen Zinssatz für Kapitalaufnahme und -anlage verwendet, unterscheidet die modifizierte Methode zwischen dem Zinssatz für im Projekt gebundenes und für am Kapitalmarkt frei angelegtes Kapital." },
      { id: "q7", question: "Eine Investition kostet 20.000 € und erbringt nach 1 Jahr 22.000 €. Kalkulationszins 10 %. Wie hoch ist K₀?", options: ["−2.000 €", "22.000 €", "2.000 €", "0 €"], correctIndex: 3, explanation: "K₀ = −20.000 + 22.000/1,1 = −20.000 + 20.000 = 0 € — die Investition erwirtschaftet exakt die geforderte 10 % Rendite, weder mehr noch weniger, damit ist der Investor indifferent zwischen Projekt und Alternativanlage." },
      { id: "q8", question: "Was zeigt der Term Lₙ/(1+i)ⁿ in der erweiterten Kapitalwertformel an?", options: ["Den Barwert der ursprünglichen Anschaffungsauszahlung", "Den in der Formel verwendeten Zinssatz selbst", "Den Barwert eines am Laufzeitende anfallenden Liquidationserlöses", "Die auf die Investition entfallende Steuerlast"], correctIndex: 2, explanation: "Lₙ bezeichnet den am Ende der Nutzungsdauer erzielten Liquidations- bzw. Restwert; da er erst in n Jahren anfällt, muss auch er mit (1+i)ⁿ auf den heutigen Zeitpunkt abgezinst werden, um im Kapitalwert berücksichtigt zu werden." },
      { id: "q9", question: "Zwei Projekte haben denselben Kapitalwert von 10.000 €, aber unterschiedliche Anfangsinvestitionen (100.000 € vs. 500.000 €). Welche Kennzahl zeigt, dass das kleinere Projekt relativ effizienter ist?", options: ["Die Kapitalwertrate (K₀/A₀)", "Der Kalkulationszinssatz", "Der absolute Kapitalwert allein", "Die Laufzeit des Projekts"], correctIndex: 0, explanation: "Die Kapitalwertrate zeigt, dass beim kleineren Projekt (10.000/100.000 = 10 %) ein deutlich höherer relativer Überschuss pro investiertem Euro erzielt wird als beim größeren (10.000/500.000 = 2 %), obwohl beide denselben absoluten Kapitalwert haben." },
      { id: "q10", question: "Was ist die zentrale Datengrundlage der Kapitalwertmethode?", options: ["Cashflows (Ein- und Auszahlungen)", "Ausschließlich der erzielte Umsatz", "Die Entwicklung des Aktienkurses", "Bilanzielle, periodisierte Gewinne"], correctIndex: 0, explanation: "Wie alle dynamischen Investitionsrechenverfahren stellt die Kapitalwertmethode auf tatsächliche Cashflows ab, nicht auf bilanzielle Erfolgsgrößen wie den Gewinn, der durch Periodisierungseffekte von den realen Zahlungsströmen abweichen kann." }
    ]
  },
  {
    id: "finv-interne-zinsfussmethode",
    chapter: 9,
    order: 2,
    title: "Die interne Zinsfußmethode (IZF)",
    icon: "🎯",
    summary: "Wie der interne Zinsfuß als der Zins definiert ist, bei dem der Kapitalwert null wird, und wie man ihn näherungsweise bestimmt.",
    explanation: [
      { type: "p", text: "Der interne Zinsfuß (IZF, internal rate of return) ist derjenige Zinssatz, für den der Kapitalwert eines Projekts genau null wird. Er lässt sich als die tatsächlich vom Projekt erwirtschaftete Rendite interpretieren." },
      { type: "p", text: "Entscheidungskriterien der internen Zinsfußmethode: Man vergleicht den IZF mit dem Kalkulationszinssatz (der Renditeerwartung des Investors):" },
      { type: "list", items: [
        "Kalkulationszins(fuß) < interner Zins(fuß): Das Projekt lohnt sich, weil es eine Verzinsung realisiert, die die Zinserwartung des Investors übersteigt",
        "Kalkulationszins(fuß) > interner Zins(fuß): Das Projekt lohnt sich nicht, weil es die Zinserwartung des Investors nicht erreichen kann"
      ]},
      { type: "p", text: "Da der IZF im Allgemeinen nicht direkt algebraisch aus der Kapitalwertfunktion aufgelöst werden kann (bei mehr als zwei Zahlungszeitpunkten ist das eine Nullstellensuche eines Polynoms höheren Grades), wird er näherungsweise über numerische Verfahren bestimmt:" },
      { type: "list", items: [
        "Intervallschachtelung: schrittweise Eingrenzung des Zinses, bei dem der Kapitalwert das Vorzeichen wechselt",
        "Lineare Interpolation (Regula falsi): Man wählt zwei Zinssätze mit einem positiven und einem negativen Kapitalwert und interpoliert linear zwischen ihnen",
        "Newton-Verfahren: iteratives Näherungsverfahren mit Ableitung der Kapitalwertfunktion"
      ]},
      { type: "p", text: "Ein wichtiger Grenzbereich der IZF-Methode betrifft den Vergleich zweier Projekte: Die traditionelle IZF-Methode unterstellt implizit, dass zwischenzeitliche Rückflüsse wieder zum internen Zinsfuß selbst angelegt werden können (\"Wiederanlageprämisse\"). Diese Annahme ist oft unrealistisch — bei sich stark unterscheidenden IZF mehrerer Alternativprojekte kann das zu Fehlentscheidungen führen. Die modifizierte Kapitalwertmethode (mit realistischerer, separater Wiederanlageverzinsung) vermeidet dieses Problem." }
    ],
    exercises: [
      {
        id: "finv-interne-zinsfussmethode-e1",
        prompt: "Eine Investition kostet 10.000 € und liefert nach 1 Jahr 11.000 €. Berechnen Sie den internen Zinsfuß.",
        solution: [{ type: "p", text: "K₀ = 0 → −10.000 + 11.000/(1+IZF) = 0 → 11.000/(1+IZF) = 10.000 → 1+IZF = 1,1 → IZF = 0,10 = 10 %." }]
      },
      {
        id: "finv-interne-zinsfussmethode-e2",
        prompt: "Der Kalkulationszinssatz eines Investors beträgt 8 %. Lohnt sich die Investition aus Aufgabe 1 (IZF = 10 %)? Begründen Sie mithilfe des Entscheidungskriteriums.",
        solution: [{ type: "p", text: "Ja, die Investition lohnt sich: Der Kalkulationszinssatz (8 %) liegt unter dem internen Zinsfuß (10 %) — das Projekt erwirtschaftet also eine höhere Rendite (10 %), als der Investor mindestens fordert (8 %)." }]
      },
      {
        id: "finv-interne-zinsfussmethode-e3",
        prompt: "Eine Investition kostet 50.000 € und erbringt 2 Jahre lang je 28.000 € (jeweils am Jahresende). Schätzen Sie den IZF durch Ausprobieren zweier Zinssätze (10 % und 15 %) mittels linearer Interpolation.",
        solution: [{ type: "p", text: "Bei i=10%: K₀ = −50.000 + 28.000/1,1 + 28.000/1,21 = −50.000 + 25.454,55 + 23.140,50 = −1.404,95 €. Bei i=15%: K₀ = −50.000 + 28.000/1,15 + 28.000/1,3225 = −50.000 + 24.347,83 + 21.171,17 = −4.481,00 €. Beide Kapitalwerte sind negativ; der IZF muss also unter 10 % liegen. Bei i=8%: K₀ = −50.000 + 28.000/1,08 + 28.000/1,1664 = −50.000 + 25.925,93 + 24.005,49 = −68,58 €. Der IZF liegt knapp unter 8 % (ca. 7,9 %), ermittelt durch Interpolation/Ausprobieren." }]
      },
      {
        id: "finv-interne-zinsfussmethode-e4",
        prompt: "Erklären Sie das Prinzip der linearen Interpolation (Regula falsi) zur Bestimmung des IZF anhand von zwei Testzinssätzen mit unterschiedlichem Vorzeichen des Kapitalwerts.",
        solution: [{ type: "p", text: "Man wählt zwei Zinssätze i_A und i_B, bei denen der Kapitalwert einmal positiv (K₀,A) und einmal negativ (K₀,B) ist. Da die Kapitalwertfunktion in diesem Bereich monoton fällt, muss die Nullstelle (der gesuchte IZF) zwischen i_A und i_B liegen. Die lineare Interpolationsformel schätzt diese Nullstelle näherungsweise als gewichteten Punkt zwischen i_A und i_B, proportional zum Verhältnis der beiden Kapitalwerte: i* ≈ i_A − K₀,A·(i_B−i_A)/(K₀,B−K₀,A). Da die tatsächliche Kapitalwertfunktion nicht exakt linear verläuft, liefert dieses Verfahren nur eine Näherung, die durch Wiederholung mit engeren Testzinssätzen iterativ verbessert werden kann." }]
      },
      {
        id: "finv-interne-zinsfussmethode-e5",
        prompt: "Was besagt die 'Wiederanlageprämisse' der traditionellen IZF-Methode, und warum ist sie problematisch beim Vergleich zweier Projekte mit sehr unterschiedlichem IZF?",
        solution: [{ type: "p", text: "Die traditionelle IZF-Methode unterstellt implizit, dass alle zwischenzeitlichen Rückflüsse eines Projekts wieder zum internen Zinsfuß dieses Projekts selbst angelegt werden können. Hat ein Projekt A einen sehr hohen IZF (z. B. 25 %) und Projekt B einen niedrigeren IZF (z. B. 10 %), unterstellt die Methode für Projekt A eine unrealistisch hohe Wiederanlagerendite von 25 % für alle Zwischenrückflüsse. In der Praxis ist eine derart hohe Wiederanlagerendite oft nicht am Markt erzielbar, wodurch der IZF-Vergleich das tatsächlich vorteilhaftere Projekt verzerrt darstellen kann — die modifizierte Kapitalwertmethode mit einem realistischeren, separaten Wiederanlagezins vermeidet dieses Problem." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie ist der interne Zinsfuß (IZF) definiert?", options: ["Der Zins, bei dem der Kapitalwert maximal wird", "Der Zins, bei dem der Kapitalwert genau null ist", "Der WACC des Unternehmens", "Der nominale Marktzins"], correctIndex: 1, explanation: "Der interne Zinsfuß ist derjenige Zinssatz, für den der Kapitalwert eines Projekts exakt null wird — er lässt sich als die tatsächlich vom Projekt selbst erwirtschaftete Rendite interpretieren, unabhängig vom WACC oder Marktzins." },
      { id: "q2", question: "Wann lohnt sich ein Projekt nach dem IZF-Kriterium?", options: ["Wenn der IZF negativ ist", "Wenn der Kalkulationszins unter dem IZF liegt", "Wenn der Kalkulationszins über dem IZF liegt", "Der IZF hat keinen Bezug zur Vorteilhaftigkeit"], correctIndex: 1, explanation: "Liegt der Kalkulationszins (die geforderte Mindestrendite) unter dem IZF (der tatsächlich erwirtschafteten Rendite), übertrifft das Projekt die Mindestanforderung des Investors — es lohnt sich." },
      { id: "q3", question: "Welches numerische Verfahren wird zur näherungsweisen Bestimmung des IZF genannt?", options: ["Kreuzproduktverfahren", "Fourier-Transformation", "Monte-Carlo-Simulation ausschließlich", "Lineare Interpolation (Regula falsi)"], correctIndex: 3, explanation: "Da der IZF bei mehr als zwei Zahlungszeitpunkten nicht direkt algebraisch berechnet werden kann, nähert man sich ihm mit Verfahren wie Regula falsi (lineare Interpolation), Intervallschachtelung oder dem Newton-Verfahren an." },
      { id: "q4", question: "Eine Investition kostet 5.000 € und liefert nach 1 Jahr 5.500 €. Wie hoch ist der IZF?", options: ["10 %", "5 %", "50 %", "15 %"], correctIndex: 0, explanation: "Setzt man den Kapitalwert null: 5.500/(1+IZF) = 5.000 → 1+IZF = 1,1 → IZF = 10 % — der Rückfluss von 5.500 € entspricht bei genau diesem Zinssatz exakt der Anfangsauszahlung von 5.000 €." },
      { id: "q5", question: "Was unterstellt die traditionelle IZF-Methode implizit bezüglich zwischenzeitlicher Rückflüsse?", options: ["Sie fließen automatisch in zusätzliches Fremdkapital", "Sie werden grundsätzlich überhaupt nicht wiederangelegt", "Sie werden zum internen Zinsfuß des Projekts selbst wiederangelegt", "Sie werden stattdessen zum Kalkulationszins wiederangelegt"], correctIndex: 2, explanation: "Die traditionelle IZF-Methode unterstellt implizit diese sogenannte Wiederanlageprämisse — ein zentraler Kritikpunkt, da sie bei sehr hohem IZF eine unrealistisch hohe Wiederanlagerendite für alle Zwischenrückflüsse annimmt." },
      { id: "q6", question: "Warum ist die Wiederanlageprämisse bei sehr hohem IZF eines Projekts problematisch?", options: ["Weil eine so hohe Wiederanlagerendite am Markt oft nicht erzielbar ist", "Weil sie zu niedrig angesetzt ist und Projekte dadurch benachteiligt", "Sie ist in keinem denkbaren Fall jemals problematisch", "Weil sie nach geltendem Recht steuerlich nicht zulässig ist"], correctIndex: 0, explanation: "Wird für zwischenzeitliche Rückflüsse implizit eine Wiederanlage zum hohen IZF unterstellt, obwohl am Markt real eine deutlich niedrigere Rendite erzielbar ist, verzerrt das den IZF-Vergleich und kann zu einer Fehleinschätzung der tatsächlichen Vorteilhaftigkeit führen." },
      { id: "q7", question: "Was liefert der Ansatz, ausschließlich einen Test-Zinssatz einzusetzen und den Kapitalwert zu prüfen?", options: ["Den WACC des Unternehmens direkt", "Den Effektivzins der Investition", "Sofort den exakten IZF ohne weitere Rechenschritte", "Einen Ausgangspunkt für die näherungsweise Bestimmung des IZF"], correctIndex: 3, explanation: "Durch Testen verschiedener Zinssätze und Beobachtung, ob der resultierende Kapitalwert positiv oder negativ ausfällt, nähert man sich dem IZF schrittweise iterativ an — ein einzelner Test liefert noch nicht den exakten Wert." },
      { id: "q8", question: "Welche Methode vermeidet die Problematik der Wiederanlageprämisse der traditionellen IZF-Methode?", options: ["Die einfache, statische Amortisationsrechnung", "Die modifizierte Kapitalwertmethode mit separater Wiederanlageverzinsung", "Die klassische, einfache Kostenvergleichsrechnung", "Es existiert dafür keinerlei methodische Alternative"], correctIndex: 1, explanation: "Die modifizierte Kapitalwertmethode erlaubt eine vom projektinternen Zins unabhängige, realistischere Wiederanlageverzinsung für zwischenzeitliche Rückflüsse und vermeidet so die verzerrende Wiederanlageprämisse der IZF-Methode." },
      { id: "q9", question: "Was passiert mit dem Kapitalwert eines normalen Investitionsprojekts (eine Anfangsauszahlung, danach nur Einzahlungen), wenn der verwendete Zinssatz steigt?", options: ["Der Kapitalwert sinkt tendenziell mit steigendem Zins", "Der Kapitalwert wird dabei stets negativ unendlich", "Der Kapitalwert steigt bei steigendem Zins immer an", "Der Kapitalwert bleibt vom Zinssatz völlig unbeeinflusst"], correctIndex: 0, explanation: "Bei normalen Zahlungsreihen (erst Auszahlung, dann nur Einzahlungen) fällt der Kapitalwert mit steigendem Abzinsungssatz monoton, da künftige Einzahlungen bei höherem Zins stärker abgezinst werden und weniger zum heutigen Wert beitragen." },
      { id: "q10", question: "Warum lässt sich der IZF bei mehr als zwei Zahlungszeitpunkten meist nicht direkt algebraisch berechnen?", options: ["Weil der IZF in solchen Fällen grundsätzlich negativ ausfällt", "Weil es sich dabei um eine rein subjektive Ermessensentscheidung handelt", "Weil die Kapitalwertgleichung einem Polynom höheren Grades entspricht", "Weil sämtliche Cashflows nach dem dritten Jahr ignoriert werden"], correctIndex: 2, explanation: "Bei mehreren Zahlungszeitpunkten wird die Kapitalwertgleichung zu einem Polynom höheren Grades in (1+i), dessen Nullstellen sich anders als bei einfachen quadratischen Gleichungen i. d. R. nicht mehr in geschlossener Form, sondern nur numerisch bestimmen lassen." }
    ]
  },
  {
    id: "finv-amortisationsrechnung",
    chapter: 9,
    order: 3,
    title: "Die Amortisationsrechnung",
    icon: "⏱️",
    summary: "Wie ermittelt wird, ab welchem Zeitpunkt das in einem Investitionsprojekt gebundene Kapital vollständig zurückgeflossen ist, und wofür diese Kennzahl sinnvoll ist.",
    explanation: [
      { type: "p", text: "Die (dynamische) Amortisationsrechnung beantwortet die Frage: Wie lange dauert es, bis sich das in einem Investitionsprojekt gebundene Kapital der Anfangsinvestition durch die laufenden Rückflüsse (Cashflows) wieder amortisiert hat?" },
      { type: "p", text: "Vorgehen: Man erstellt einen Zins- und Tilgungsplan, bei dem die Anfangsinvestition wie eine Kreditsumme behandelt wird, die durch die jährlichen Netto-Cashflows getilgt wird (unter Berücksichtigung des Kalkulationszinssatzes auf das jeweils noch gebundene Kapital). Der Amortisationszeitpunkt ist erreicht, sobald der kumulierte, verzinste Kapitalrückfluss die Anfangsinvestition vollständig deckt — ab diesem Zeitpunkt ist kein Kapital mehr im Projekt gebunden." },
      { type: "p", text: "Wichtige Einschränkung: Die Amortisationsrechnung ist nur sinnvoll für Investitionsprojekte mit positivem Kapitalwert (K₀ > 0). Sie beantwortet nicht die Frage, ob sich ein Projekt insgesamt lohnt (das beantwortet die Kapitalwert- oder IZF-Methode), sondern nur, wie lange das Kapital gebunden bleibt." },
      { type: "p", text: "Bedeutung in der Praxis: Die Amortisationsdauer ist ein wichtiges ergänzendes Kriterium, insbesondere weil weiter in der Zukunft liegende Zahlungsprognosen naturgemäß unsicherer sind (Prognoserisiko steigt mit der Zeit) und weil Investorenkapital oft nur begrenzte Zeit gebunden werden soll (Liquiditäts- und Flexibilitätsaspekte). Ein Projekt mit kürzerer Amortisationsdauer wird — bei ansonsten vergleichbarem Kapitalwert — häufig als weniger riskant eingeschätzt." }
    ],
    exercises: [
      {
        id: "finv-amortisationsrechnung-e1",
        prompt: "Eine Investition kostet 100.000 € und erwirtschaftet konstant 30.000 € Cashflow pro Jahr (undiskontiert). Nach wie vielen vollen Jahren ist die Investition (statisch, ohne Verzinsung) amortisiert?",
        solution: [{ type: "p", text: "Kumulierte Rückflüsse: nach 1 Jahr 30.000 €, nach 2 Jahren 60.000 €, nach 3 Jahren 90.000 €, nach 4 Jahren 120.000 €. Die Anfangsinvestition (100.000 €) ist zwischen Jahr 3 und Jahr 4 amortisiert — nach vollen Jahren gerechnet: erst im 4. Jahr vollständig amortisiert (statische, undiskontierte Betrachtung)." }]
      },
      {
        id: "finv-amortisationsrechnung-e2",
        prompt: "Berechnen Sie für dieselbe Investition (100.000 € Anfangsauszahlung, 30.000 €/Jahr Cashflow) die dynamische Amortisationsdauer bei einem Kalkulationszins von 8 % (verzinste, abgezinste Rückflüsse).",
        solution: [{ type: "p", text: "Barwert der Rückflüsse: Jahr 1: 30.000/1,08=27.777,78 €; Jahr 2: 30.000/1,08²=25.720,16 €; Jahr 3: 30.000/1,08³=23.814,04 €; Jahr 4: 30.000/1,08⁴=22.050,04 €. Kumuliert: nach 3 Jahren 77.311,98 €, nach 4 Jahren 99.362,02 €, nach 5 Jahren (weitere 30.000/1,08⁵=20.416,70 €) 119.778,72 €. Die dynamische Amortisation liegt also erst zwischen Jahr 4 und Jahr 5 — später als bei der statischen (undiskontierten) Betrachtung, weil die Abzinsung künftige Rückflüsse mindert." }]
      },
      {
        id: "finv-amortisationsrechnung-e3",
        prompt: "Warum liefert die dynamische Amortisationsrechnung tendenziell eine längere Amortisationsdauer als die statische (undiskontierte) Betrachtung?",
        solution: [{ type: "p", text: "Bei der dynamischen Amortisationsrechnung werden künftige Cashflows mit dem Kalkulationszinssatz abgezinst, wodurch ihr Beitrag zur Deckung der Anfangsinvestition geringer ausfällt als ihr Nominalwert. Da spätere Zahlungen stärker abgezinst werden, dauert es länger, bis die kumulierten Barwerte die Anfangsinvestition decken, als wenn man einfach die Nominalbeträge addiert (statische Betrachtung ohne Verzinsung)." }]
      },
      {
        id: "finv-amortisationsrechnung-e4",
        prompt: "Warum ist die Amortisationsrechnung nur für Projekte mit K₀ > 0 sinnvoll?",
        solution: [{ type: "p", text: "Die Amortisationsrechnung beantwortet ausschließlich die Frage, WANN das gebundene Kapital zurückfließt — nicht, OB sich das Projekt insgesamt lohnt. Hat ein Projekt einen negativen Kapitalwert (K₀ < 0), bedeutet dies, dass die Rückflüsse insgesamt nicht einmal die geforderte Mindestverzinsung erreichen — in diesem Fall wäre eine Amortisationsdauer entweder gar nicht erreichbar oder inhaltlich irreführend, da das Projekt ohnehin abzulehnen ist. Die Amortisationsrechnung ergänzt daher sinnvollerweise nur bereits als vorteilhaft identifizierte Projekte um eine zusätzliche Risiko-/Liquiditätsperspektive." }]
      },
      {
        id: "finv-amortisationsrechnung-e5",
        prompt: "Nennen Sie zwei Gründe, warum Unternehmen die Amortisationsdauer als zusätzliches Entscheidungskriterium neben dem Kapitalwert heranziehen.",
        solution: [{ type: "p", text: "1) Prognoseunsicherheit: Je weiter in der Zukunft eine Zahlung liegt, desto unsicherer ist ihre Prognose — ein Projekt mit kürzerer Amortisationsdauer ist tendenziell weniger von langfristigen, schwer vorhersehbaren Entwicklungen abhängig. 2) Liquiditäts- und Flexibilitätsaspekte: Unternehmen möchten oft nicht zu viel Kapital zu lange in einem einzelnen Projekt binden, um flexibel auf neue Chancen reagieren oder unerwartete Liquiditätsbedarfe decken zu können — eine kürzere Amortisationsdauer setzt Kapital schneller wieder frei." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Was beantwortet die Amortisationsrechnung?", options: ["Wie lange es dauert, bis das gebundene Kapital vollständig zurückfließt", "Den genauen Marktwert des betrachteten Unternehmens", "Die Höhe der Steuerlast einer bestimmten Investition", "Ob sich eine Investition insgesamt überhaupt lohnt"], correctIndex: 0, explanation: "Die Amortisationsrechnung ermittelt ausschließlich den Zeitpunkt, ab dem das in der Anfangsinvestition gebundene Kapital durch die laufenden Rückflüsse vollständig zurückgeflossen ist — nicht, ob sich das Projekt insgesamt lohnt." },
      { id: "q2", question: "Für welche Art von Projekten ist die Amortisationsrechnung laut Vorlesung sinnvoll?", options: ["Nur für Projekte ohne jede Anfangsinvestition", "Für alle Projekte unabhängig vom Kapitalwert", "Nur für Projekte mit positivem Kapitalwert (K₀ > 0)", "Nur für Projekte mit negativem Kapitalwert"], correctIndex: 2, explanation: "Sie ist nur sinnvoll für bereits als vorteilhaft identifizierte Projekte (K₀ > 0) — bei negativem Kapitalwert ist die Frage, ob sich das Projekt lohnt, ohnehin schon negativ beantwortet." },
      { id: "q3", question: "Welches Hilfsmittel wird zur Bestimmung der Amortisationsdauer verwendet?", options: ["Eine reine Schätzung ohne jede Berechnung", "Ein Zins- und Tilgungsplan", "Der WACC allein, ohne weitere Berechnungsschritte", "Ausschließlich die Gewinn- und Verlustrechnung"], correctIndex: 1, explanation: "Ein Zins- und Tilgungsplan behandelt die Anfangsinvestition wie eine Kreditsumme, die durch die jährlichen Netto-Cashflows unter Berücksichtigung des Kalkulationszinssatzes Schritt für Schritt getilgt wird." },
      { id: "q4", question: "Warum ist die dynamische Amortisationsdauer tendenziell länger als die statische (undiskontierte)?", options: ["Weil dynamische Rechnung methodisch grundsätzlich falsch ist", "Weil Abzinsung künftige Rückflüsse mindert und sie so langsamer zur Deckung beitragen", "Es besteht dabei kein systematischer Unterschied", "Weil bei dynamischer Rechnung höhere Cashflows unterstellt werden"], correctIndex: 1, explanation: "Da künftige Cashflows bei der dynamischen Betrachtung mit dem Kalkulationszinssatz abgezinst werden, fällt ihr Beitrag zur Deckung der Anfangsinvestition geringer aus als ihr Nominalwert — dadurch dauert die Kapitaldeckung länger als bei der statischen, undiskontierten Rechnung." },
      { id: "q5", question: "Welchen zusätzlichen Nutzen bietet die Amortisationsdauer gegenüber der reinen Kapitalwertaussage?", options: ["Sie zeigt zusätzlich, wie lange Kapital im Projekt gebunden bleibt", "Sie berücksichtigt automatisch sämtliche steuerlichen Effekte", "Sie ersetzt vollständig die Notwendigkeit einer Kapitalwertberechnung", "Sie bietet gegenüber dem Kapitalwert keinerlei zusätzlichen Nutzen"], correctIndex: 0, explanation: "Die Amortisationsdauer ergänzt den Kapitalwert um eine Risiko- und Liquiditätsperspektive: Je kürzer das Kapital gebunden bleibt, desto geringer die Abhängigkeit von unsicheren, weit in der Zukunft liegenden Prognosen." },
      { id: "q6", question: "Eine Investition kostet 60.000 € und bringt 20.000 €/Jahr (undiskontiert). Nach wie vielen vollen Jahren ist sie statisch amortisiert?", options: ["4 Jahre", "2 Jahre", "1 Jahr", "3 Jahre"], correctIndex: 3, explanation: "Nach 3 Jahren sind kumuliert 3 × 20.000 € = 60.000 € zurückgeflossen — genau der Betrag der Anfangsinvestition, damit ist sie in diesem Moment vollständig gedeckt." },
      { id: "q7", question: "Was passiert mit der Amortisationsdauer, wenn der Kalkulationszinssatz steigt (bei sonst gleichen Cashflows)?", options: ["Sie bleibt dabei in jedem Fall exakt gleich", "Sie verkürzt sich mit steigendem Zinssatz spürbar", "Sie verlängert sich, da spätere Zahlungen stärker abgezinst werden", "Der Zinssatz hat darauf grundsätzlich keinerlei Einfluss"], correctIndex: 2, explanation: "Ein höherer Kalkulationszinssatz mindert den Barwert künftiger Rückflüsse stärker, wodurch die kumulierten Barwerte länger brauchen, um die Anfangsinvestition zu decken — die Amortisationsdauer verlängert sich." },
      { id: "q8", question: "Warum sollte man sich bei der Investitionsentscheidung nicht ausschließlich auf die Amortisationsdauer verlassen?", options: ["Weil eine solche Berechnung gesetzlich grundsätzlich verboten ist", "Weil sie ausschließlich für Aktiengesellschaften rechtlich zulässig ist", "Weil sie Cashflows nach dem Amortisationszeitpunkt nicht berücksichtigt", "Weil sie bei korrekter Anwendung immer falsch berechnet wird"], correctIndex: 2, explanation: "Die Amortisationsrechnung blendet vollständig aus, was nach Erreichen des Amortisationszeitpunkts noch an Cashflows folgt — zwei Projekte mit gleicher Amortisationsdauer, aber sehr unterschiedlichen Folgezahlungen, erscheinen fälschlich gleichwertig." },
      { id: "q9", question: "Welche Aussage trifft am ehesten zu: Ein Projekt mit kürzerer Amortisationsdauer wird häufig als …", options: ["grundsätzlich unrentabler eingeschätzt als Alternativen", "steuerlich generell nachteiliger eingeschätzt", "riskanter als vergleichbare Alternativen eingeschätzt", "weniger riskant eingeschätzt (geringeres Prognoserisiko)"], correctIndex: 3, explanation: "Kürzere Kapitalbindung bedeutet i. d. R. eine geringere Abhängigkeit von unsicheren, weit in der Zukunft liegenden Zahlungsprognosen, weshalb solche Projekte häufig als weniger riskant eingeschätzt werden." },
      { id: "q10", question: "Ist die Amortisationsrechnung ein statisches oder ein dynamisches Investitionsrechenverfahren, wenn sie mit abgezinsten Cashflows arbeitet?", options: ["Ein dynamisches Verfahren, da Zeitwerte berücksichtigt werden", "Weder noch — sie zählt zu keiner der beiden Kategorien", "Grundsätzlich immer ein rein statisches Verfahren", "Ein rein qualitatives Verfahren ganz ohne Berechnung"], correctIndex: 0, explanation: "Wird mit abgezinsten Cashflows gerechnet, berücksichtigt sie — wie Kapitalwert- und IZF-Methode — Zeitwerte und Zinseffekte über den gesamten Planungszeitraum und zählt damit zu den dynamischen Investitionsrechenverfahren." }
    ]
  }
];
