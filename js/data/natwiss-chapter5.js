const NATWISS_CHAPTER5_TOPICS = [
  {
    id: "natwiss-freie-schwingung",
    chapter: 5,
    order: 1,
    title: "Freie harmonische Schwingungen",
    icon: "〰️",
    summary: "Der harmonische Oszillator schwingt periodisch um seine Gleichgewichtslage; Amplitude, Kreisfrequenz und Phase bestimmen die Bewegung vollständig.",
    explanation: [
      { type: "p", text: "Eine Schwingung ist eine periodische Bewegung um eine Gleichgewichtslage. Beim harmonischen Oszillator ist die rücktreibende Kraft proportional zur Auslenkung (Hookesches Gesetz): F = −k · x. Daraus folgt die Bewegungsgleichung:" },
      { type: "formula", tex: "\\ddot{x} + \\omega_0^2 \\, x = 0 \\quad \\text{mit} \\quad \\omega_0 = \\sqrt{\\frac{k}{m}}" },
      { type: "p", text: "Die allgemeine Lösung lautet:" },
      { type: "formula", tex: "x(t) = A \\cdot \\cos(\\omega_0 t + \\varphi_0)" },
      { type: "p", text: "Dabei ist A die Amplitude (maximale Auslenkung), ω₀ die Eigenkreisfrequenz und φ₀ der Anfangsphasenwinkel. Für das Federpendel und das mathematische Pendel gilt:" },
      { type: "list", items: [
        "Federpendel: ω₀ = √(k/m)",
        "Mathematisches Pendel (kleine Winkel): ω₀ = √(g/l)",
        "Periodendauer: T = 2π / ω₀",
        "Frequenz: f = 1/T = ω₀ / (2π)",
        "Maximale Geschwindigkeit: v_max = A · ω₀",
        "Geschwindigkeit: v(t) = −A · ω₀ · sin(ω₀t + φ₀)"
      ]},
      { type: "formula", tex: "T = 2\\pi \\sqrt{\\frac{m}{k}} \\quad (\\text{Federpendel}), \\quad T = 2\\pi \\sqrt{\\frac{l}{g}} \\quad (\\text{Pendel})" },
      { type: "p", text: "Die Gesamtenergie des harmonischen Oszillators ist konstant und besteht aus kinetischer und potenzieller Energie, die periodisch ineinander umgewandelt werden:" },
      { type: "formula", tex: "E = \\frac{1}{2} k A^2 = \\frac{1}{2} m v_{max}^2 = \\text{const}" }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Eine Feder (k = 400 N/m) wird mit einer Masse m = 2 kg belastet. Berechnen Sie die Eigenkreisfrequenz ω₀, die Periodendauer T und die Frequenz f.",
        solution: [
          { type: "p", text: "Eigenkreisfrequenz:" },
          { type: "formula", tex: "\\omega_0 = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{400}{2}} = \\sqrt{200} \\approx 14{,}14 \\; \\text{rad/s}" },
          { type: "p", text: "Periodendauer:" },
          { type: "formula", tex: "T = \\frac{2\\pi}{\\omega_0} = \\frac{2\\pi}{14{,}14} \\approx 0{,}444 \\; \\text{s}" },
          { type: "p", text: "Frequenz:" },
          { type: "formula", tex: "f = \\frac{1}{T} \\approx \\frac{1}{0{,}444} \\approx 2{,}25 \\; \\text{Hz}" }
        ]
      },
      {
        id: "ex2",
        prompt: "Ein mathematisches Pendel hat eine Periodendauer von T = 2 s (Sekundenpendel). Berechnen Sie die zugehörige Pendellänge l (g = 9,81 m/s²).",
        solution: [
          { type: "p", text: "Aus der Pendelformel T = 2π√(l/g) wird nach l aufgelöst:" },
          { type: "formula", tex: "l = g \\cdot \\left(\\frac{T}{2\\pi}\\right)^2 = 9{,}81 \\cdot \\left(\\frac{2}{2\\pi}\\right)^2 = 9{,}81 \\cdot \\frac{1}{\\pi^2} \\approx 9{,}81 \\cdot 0{,}1013 \\approx 0{,}993 \\; \\text{m}" },
          { type: "p", text: "Das klassische Sekundenpendel hat also eine Länge von knapp 1 m." }
        ]
      },
      {
        id: "ex3",
        prompt: "Ein Oszillator hat die Amplitude A = 0,1 m und die Eigenkreisfrequenz ω₀ = 10 rad/s. Schreiben Sie die Schwingungsgleichung x(t) für φ₀ = 0 auf und bestimmen Sie die maximale Geschwindigkeit v_max.",
        solution: [
          { type: "p", text: "Schwingungsgleichung (φ₀ = 0, Cosinus-Ansatz):" },
          { type: "formula", tex: "x(t) = 0{,}1 \\cdot \\cos(10\\,t) \\; [\\text{m}]" },
          { type: "p", text: "Maximale Geschwindigkeit (am Nulldurchgang):" },
          { type: "formula", tex: "v_{max} = A \\cdot \\omega_0 = 0{,}1 \\; \\text{m} \\cdot 10 \\; \\text{rad/s} = 1{,}0 \\; \\text{m/s}" }
        ]
      },
      {
        id: "ex4",
        prompt: "Eine Federmasse m = 6 kg schwingt auf einer Feder (k = 600 N/m). Am Nulldurchgang (x = 0) beträgt die Geschwindigkeit v = 3 m/s. Bestimmen Sie die Amplitude A.",
        solution: [
          { type: "p", text: "Eigenkreisfrequenz:" },
          { type: "formula", tex: "\\omega_0 = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{600}{6}} = \\sqrt{100} = 10 \\; \\text{rad/s}" },
          { type: "p", text: "Am Nulldurchgang ist die Geschwindigkeit maximal (v = v_max = A · ω₀), daher:" },
          { type: "formula", tex: "A = \\frac{v_{max}}{\\omega_0} = \\frac{3 \\; \\text{m/s}}{10 \\; \\text{rad/s}} = 0{,}3 \\; \\text{m}" }
        ]
      },
      {
        id: "ex5",
        prompt: "Eine Feder wird durch eine zweite, baugleiche Feder in Reihe verlängert (die Gesamtfederlänge verdoppelt sich, gleicher Werkstoff). Die Federkonstante halbiert sich auf k' = k/2. Wie ändert sich die Periodendauer T im Vergleich zur ursprünglichen Feder?",
        solution: [
          { type: "p", text: "Ursprüngliche Periodendauer: T = 2π√(m/k)" },
          { type: "p", text: "Neue Periodendauer mit k' = k/2:" },
          { type: "formula", tex: "T' = 2\\pi \\sqrt{\\frac{m}{k/2}} = 2\\pi \\sqrt{\\frac{2m}{k}} = \\sqrt{2} \\cdot 2\\pi \\sqrt{\\frac{m}{k}} = \\sqrt{2} \\cdot T" },
          { type: "p", text: "Die Periodendauer verlängert sich um den Faktor √2 ≈ 1,41. Eine weichere Feder (kleines k) schwingt langsamer." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Was ist die Rücktreibkraft beim harmonischen Oszillator (Federpendel)?", options: ["F = −b · ẋ (proportional zur Geschwindigkeit)", "F = k · x (proportional zur Auslenkung, gleiches Vorzeichen)", "F = m · g (Gewichtskraft)", "F = −k · x (proportional zur Auslenkung, entgegengesetzt)"], correctIndex: 3, explanation: "Beim Hookeschen Gesetz wirkt die Federkraft F = −k · x immer entgegen der Auslenkung (Minuszeichen). Diese rücktreibende Kraft führt zur harmonischen Schwingung." },
      { id: "q2", question: "Wie hängt die Eigenkreisfrequenz ω₀ des Federpendels von Masse m und Federkonstante k ab?", options: ["ω₀ = √(m/k)", "ω₀ = √(k/m)", "ω₀ = 2π · √(k/m)", "ω₀ = k/m"], correctIndex: 1, explanation: "Aus der Bewegungsgleichung ẍ + (k/m) · x = 0 ergibt sich ω₀ = √(k/m). Eine steifere Feder (größes k) oder kleinere Masse ergibt eine höhere Eigenfrequenz." },
      { id: "q3", question: "Wie lautet der Zusammenhang zwischen Periodendauer T und Kreisfrequenz ω₀?", options: ["T = 2π · ω₀", "T = 1 / ω₀", "T = ω₀ / (2π)", "T = 2π / ω₀"], correctIndex: 3, explanation: "T = 2π / ω₀. In einer Periode T dreht sich die Phasenlage um 2π, und ω₀ ist die Winkelgeschwindigkeit dieser Phasendrehung. Daraus folgt auch f = ω₀ / (2π)." },
      { id: "q4", question: "Wie groß ist die maximale Geschwindigkeit v_max des harmonischen Oszillators?", options: ["v_max = A / ω₀", "v_max = A · f", "v_max = A · ω₀", "v_max = A · ω₀²"], correctIndex: 2, explanation: "Die Geschwindigkeit ist v(t) = −A · ω₀ · sin(ω₀t + φ₀). Der Maximalwert tritt am Nulldurchgang auf: v_max = A · ω₀." },
      { id: "q5", question: "Ein Pendel mit l = 1 m schwingt auf der Erde (g = 9,81 m/s²). Welchen Wert hat seine Periodendauer T näherungsweise?", options: ["T ≈ 3,14 s", "T ≈ 0,5 s", "T ≈ 1,0 s", "T ≈ 2,0 s"], correctIndex: 3, explanation: "T = 2π√(l/g) = 2π√(1/9,81) ≈ 2π · 0,319 ≈ 2,006 s ≈ 2 s. Das ist das berühmte Sekundenpendel (T = 2 s, l ≈ 1 m)." },
      { id: "q6", question: "Wie verändert sich die Periodendauer T des Federpendels, wenn die Masse m verdoppelt wird (k bleibt gleich)?", options: ["T bleibt gleich", "T vergrößert sich um Faktor √2", "T vervierfacht sich", "T verdoppelt sich"], correctIndex: 1, explanation: "T = 2π√(m/k). Bei Verdopplung von m: T' = 2π√(2m/k) = √2 · T. Die Periodendauer wächst um den Faktor √2 ≈ 1,41." },
      { id: "q7", question: "Was passiert mit der Gesamtenergie E des idealen harmonischen Oszillators über die Zeit?", options: ["E nimmt stetig ab (Dämpfung durch Luft)", "E schwankt zwischen null und dem Maximalwert", "E bleibt konstant (E = ½ · k · A²)", "E wächst durch die Rücktreibkraft an"], correctIndex: 2, explanation: "Beim idealen (ungedämpften) Oszillator ist E = ½ · k · A² = const. Kinetische und potenzielle Energie werden ständig ineinander umgewandelt, aber die Summe bleibt konstant." },
      { id: "q8", question: "An welcher Position im Schwingungszyklus ist die kinetische Energie des Oszillators am größten?", options: ["Am Nulldurchgang (x = 0)", "Die kinetische Energie ist überall gleich", "Am Umkehrpunkt (x = ±A)", "Bei x = A/2"], correctIndex: 0, explanation: "Am Nulldurchgang (x = 0) ist die Geschwindigkeit maximal (v = v_max = A · ω₀), daher ist dort die kinetische Energie E_kin = ½ · m · v_max² am größten. An den Umkehrpunkten (x = ±A) ist v = 0 und E_kin = 0." },
      { id: "q9", question: "Wie beeinflusst eine Verdopplung der Federkonstante k (bei gleicher Masse m) die Eigenfrequenz f₀?", options: ["f₀ halbiert sich", "f₀ vergrößert sich um Faktor √2", "f₀ bleibt gleich", "f₀ verdoppelt sich"], correctIndex: 1, explanation: "Da ω₀ = √(k/m) und f₀ = ω₀/(2π), gilt bei k → 2k: f₀' = √(2k/m)/(2π) = √2 · f₀. Die Frequenz wächst um den Faktor √2 ≈ 1,41." },
      { id: "q10", question: "Welche Gleichung beschreibt korrekt die Bewegungsgleichung des harmonischen Oszillators?", options: ["ẍ + ω₀² · x = 0", "ẍ − ω₀² · x = 0", "ẍ · ω₀² + x = 0", "ẍ + ω₀ · x = 0"], correctIndex: 0, explanation: "Die Bewegungsgleichung des harmonischen Oszillators lautet ẍ + ω₀² · x = 0. Das Minuszeichen der Rücktreibkraft F = −kx und die Division durch m ergeben den positiven Term +ω₀²·x." }
    ]
  },
  {
    id: "natwiss-gedaempfte-schwingung",
    chapter: 5,
    order: 2,
    title: "Gedämpfte Schwingungen",
    icon: "📉",
    summary: "Reale Schwingungen verlieren durch Reibung kontinuierlich Energie; je nach Dämpfungsgrad unterscheidet man Schwingfall, aperiodischen Grenzfall und Kriechfall.",
    explanation: [
      { type: "p", text: "Reale Schwingungen verlieren durch Reibung, Luftwiderstand oder andere Dissipationsmechanismen stetig Energie. Eine häufig verwendete Modellierung ist die geschwindigkeitsproportionale Dämpfungskraft F_D = −b · ẋ. Die Bewegungsgleichung lautet:" },
      { type: "formula", tex: "\\ddot{x} + 2\\delta \\, \\dot{x} + \\omega_0^2 \\, x = 0 \\quad \\text{mit} \\quad \\delta = \\frac{b}{2m}" },
      { type: "p", text: "Dabei ist δ der Dämpfungskoeffizient (in s⁻¹). Je nach Verhältnis von δ zu ω₀ ergeben sich drei Fälle:" },
      { type: "list", items: [
        "Schwingfall (Unterdämpfung): δ < ω₀ → x(t) = A · e^(−δt) · cos(ω_d t + φ) mit ω_d = √(ω₀² − δ²)",
        "Aperiodischer Grenzfall (kritische Dämpfung): δ = ω₀ → schnellste Rückkehr ohne Überschwingen",
        "Kriechfall (Überdämpfung): δ > ω₀ → langsame Rückkehr ohne Schwingung"
      ]},
      { type: "formula", tex: "\\omega_d = \\sqrt{\\omega_0^2 - \\delta^2} \\quad (\\text{gedämpfte Kreisfrequenz})" },
      { type: "p", text: "Der Gütefaktor Q und das logarithmische Dekrement Λ charakterisieren die Stärke der Dämpfung:" },
      { type: "formula", tex: "Q = \\frac{\\omega_0}{2\\delta} \\quad \\text{(Gütefaktor)}, \\quad \\Lambda = \\delta \\cdot T_d \\quad \\text{(Logarithmisches Dekrement)}" },
      { type: "p", text: "Ein hoher Gütefaktor Q bedeutet geringe Dämpfung und viele Schwingungen bis zum Abklingen. Die Zeitkonstante des Amplitudenabfalls ist τ = 1/δ." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein gedämpfter Oszillator hat die Parameter δ = 2 s⁻¹ und ω₀ = 10 rad/s. Berechnen Sie die gedämpfte Kreisfrequenz ω_d und den Gütefaktor Q.",
        solution: [
          { type: "p", text: "Gedämpfte Kreisfrequenz:" },
          { type: "formula", tex: "\\omega_d = \\sqrt{\\omega_0^2 - \\delta^2} = \\sqrt{100 - 4} = \\sqrt{96} \\approx 9{,}80 \\; \\text{rad/s}" },
          { type: "p", text: "Gütefaktor:" },
          { type: "formula", tex: "Q = \\frac{\\omega_0}{2\\delta} = \\frac{10}{2 \\cdot 2} = 2{,}5" },
          { type: "p", text: "Da Q > 0,5 und δ < ω₀ liegt Schwingfall (Unterdämpfung) vor." }
        ]
      },
      {
        id: "ex2",
        prompt: "Nach 5 Schwingungen hat die Amplitude auf die Hälfte abgenommen. Die gedämpfte Periodendauer beträgt T_d = 0,8 s. Bestimmen Sie den Dämpfungskoeffizient δ.",
        solution: [
          { type: "p", text: "Die Amplitude klingt nach n Perioden ab auf A_n = A₀ · e^(−δ · n · T_d). Mit n = 5, A_5/A₀ = 0,5:" },
          { type: "formula", tex: "0{,}5 = e^{-\\delta \\cdot 5 \\cdot 0{,}8} = e^{-4\\delta}" },
          { type: "p", text: "Logarithmieren:" },
          { type: "formula", tex: "\\delta = \\frac{\\ln 2}{4} = \\frac{0{,}693}{4} \\approx 0{,}173 \\; \\text{s}^{-1}" }
        ]
      },
      {
        id: "ex3",
        prompt: "Ein Oszillator hat die Parameter δ = 5 s⁻¹ und ω₀ = 3 rad/s. Um welchen Dämpfungsfall handelt es sich, und was bedeutet das für die Bewegung?",
        solution: [
          { type: "p", text: "Vergleich von δ und ω₀:" },
          { type: "formula", tex: "\\delta = 5 \\; \\text{s}^{-1} > \\omega_0 = 3 \\; \\text{rad/s}" },
          { type: "p", text: "Da δ > ω₀, liegt Kriechfall (Überdämpfung) vor. Die Lösung enthält keine Schwingungsanteile, sondern zwei abklingende Exponentialterme. Das System kehrt langsam und ohne Überschwingen in die Gleichgewichtslage zurück." },
          { type: "formula", tex: "x(t) = C_1 \\, e^{(-\\delta + \\sqrt{\\delta^2-\\omega_0^2})\\,t} + C_2 \\, e^{(-\\delta - \\sqrt{\\delta^2-\\omega_0^2})\\,t}" }
        ]
      },
      {
        id: "ex4",
        prompt: "Ein gedämpfter Schwingkreis hat den Gütefaktor Q = 50 und die Eigenkreisfrequenz ω₀ = 100 rad/s. Berechnen Sie den Dämpfungskoeffizient δ und die Zeitkonstante τ = 1/δ.",
        solution: [
          { type: "p", text: "Aus Q = ω₀ / (2δ) folgt:" },
          { type: "formula", tex: "\\delta = \\frac{\\omega_0}{2Q} = \\frac{100}{2 \\cdot 50} = 1 \\; \\text{s}^{-1}" },
          { type: "p", text: "Zeitkonstante (Zeit, in der die Amplitude auf 1/e ≈ 37 % abgeklungen ist):" },
          { type: "formula", tex: "\\tau = \\frac{1}{\\delta} = \\frac{1}{1} = 1 \\; \\text{s}" }
        ]
      },
      {
        id: "ex5",
        prompt: "Ein Stoßdämpfer an einem Auto hat die Parameter: Federkonstante k = 10 000 N/m, gefederte Masse m = 500 kg, Dämpfungskonstante b = 2000 N·s/m. Welcher Dämpfungsfall liegt vor?",
        solution: [
          { type: "p", text: "Eigenkreisfrequenz des ungedämpften Systems:" },
          { type: "formula", tex: "\\omega_0 = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{10\\,000}{500}} = \\sqrt{20} \\approx 4{,}47 \\; \\text{rad/s}" },
          { type: "p", text: "Dämpfungskoeffizient:" },
          { type: "formula", tex: "\\delta = \\frac{b}{2m} = \\frac{2000}{2 \\cdot 500} = 2 \\; \\text{s}^{-1}" },
          { type: "p", text: "Vergleich: δ = 2 s⁻¹ < ω₀ ≈ 4,47 rad/s → Schwingfall (Unterdämpfung). Der Stoßdämpfer schwingt noch leicht nach. Für optimale Dämpfung wäre δ = ω₀ (aperiodischer Grenzfall) wünschenswert." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Wie lautet die Bewegungsgleichung des gedämpften harmonischen Oszillators?", options: ["ẍ − 2δ · ẋ + ω₀² · x = 0", "ẍ + 2δ · ẋ + ω₀² · x = 0", "ẍ + 2δ · x + ω₀² · ẋ = 0", "ẍ + ω₀² · x = 0"], correctIndex: 1, explanation: "Die Bewegungsgleichung lautet ẍ + 2δ · ẋ + ω₀² · x = 0. Der Term 2δ · ẋ beschreibt die geschwindigkeitsproportionale Dämpfungskraft (F_D = −b · ẋ, mit δ = b/(2m))." },
      { id: "q2", question: "Welcher Dämpfungsfall liegt vor, wenn δ < ω₀?", options: ["Resonanzfall", "Aperiodischer Grenzfall", "Schwingfall (Unterdämpfung)", "Kriechfall (Überdämpfung)"], correctIndex: 2, explanation: "Für δ < ω₀ liegt der Schwingfall (Unterdämpfung) vor. Das System schwingt mit der gedämpften Frequenz ω_d = √(ω₀² − δ²), aber die Amplitude klingt exponentiell ab: A(t) = A₀ · e^(−δt)." },
      { id: "q3", question: "Wie lautet die Formel für die gedämpfte Kreisfrequenz ω_d?", options: ["ω_d = ω₀ + δ", "ω_d = √(ω₀² + δ²)", "ω_d = √(ω₀² − δ²)", "ω_d = ω₀ − δ"], correctIndex: 2, explanation: "Die gedämpfte Kreisfrequenz lautet ω_d = √(ω₀² − δ²). Sie ist immer kleiner als die Eigenkreisfrequenz ω₀. Bei starker Dämpfung (δ → ω₀) nähert sich ω_d gegen null." },
      { id: "q4", question: "Was beschreibt der Gütefaktor Q eines gedämpften Oszillators?", options: ["Q = ω₀ / (2δ) – ein hoher Wert bedeutet geringe Dämpfung", "Q = 2δ / ω₀ – ein hoher Wert bedeutet starke Dämpfung", "Q = ω₀² − δ² – die gedämpfte Frequenz", "Q = δ · ω₀ – die Energie des Systems"], correctIndex: 0, explanation: "Der Gütefaktor Q = ω₀ / (2δ) gibt an, wie gut der Oszillator Energie speichert (geringe Dämpfung = hoher Q). Ein Quarzoszillator hat Q ≈ 10⁶, ein Türstoßdämpfer Q < 1." },
      { id: "q5", question: "Welcher Dämpfungsfall führt zur schnellsten Rückkehr in die Gleichgewichtslage ohne Überschwingen?", options: ["Alle Fälle kehren gleich schnell zurück", "Kriechfall (δ > ω₀)", "Schwingfall (δ < ω₀)", "Aperiodischer Grenzfall (δ = ω₀)"], correctIndex: 3, explanation: "Der aperiodische Grenzfall (δ = ω₀) ist optimal: Das System kehrt ohne Schwingung (kein Überschwingen) in kürzest möglicher Zeit zur Gleichgewichtslage zurück. Daher wird er bei Stoßdämpfern und Zeigerinstrumenten angestrebt." },
      { id: "q6", question: "Ein Oszillator im Schwingfall hat δ = 1 s⁻¹. Wie lange dauert es, bis die Amplitude auf 1/e ≈ 37 % des Ausgangswerts abgeklungen ist?", options: ["2π s", "1 s", "0,5 s", "10 s"], correctIndex: 1, explanation: "Die Amplitude klingt nach A(t) = A₀ · e^(−δt) ab. Die Zeitkonstante ist τ = 1/δ. Für δ = 1 s⁻¹ gilt τ = 1 s. Nach τ = 1 s ist die Amplitude auf A₀/e ≈ 0,37 · A₀ abgefallen." },
      { id: "q7", question: "Was ist das logarithmische Dekrement Λ?", options: ["Das Produkt Λ = δ · T_d (Dämpfungskoeffizient mal gedämpfte Periode)", "Das Verhältnis zweier aufeinanderfolgender Amplitudenmaxima", "Der Gütefaktor Q des Systems", "Die Zeitkonstante τ = 1/δ"], correctIndex: 0, explanation: "Das logarithmische Dekrement ist Λ = δ · T_d. Es gibt den natürlichen Logarithmus des Verhältnisses zweier aufeinanderfolgender Amplitudenmaxima an: Λ = ln(A_n / A_{n+1})." },
      { id: "q8", question: "Welche Aussage zum Kriechfall (δ > ω₀) ist korrekt?", options: ["Das System schwingt mit der Eigenfrequenz ω₀", "Das System kehrt ohne Schwingung, aber langsamer als im aperiodischen Grenzfall, zur Ruhe zurück", "Das System schwingt mit kleiner werdender Amplitude", "Das System schwingt mit der Frequenz ω_d = √(δ² − ω₀²)"], correctIndex: 1, explanation: "Im Kriechfall (δ > ω₀) findet keine Schwingung statt. Die Rückkehr zur Gleichgewichtslage erfolgt rein exponentiell und langsamer als im aperiodischen Grenzfall, da das System zu stark gedämpft ist." },
      { id: "q9", question: "Ein System hat δ = ω₀ / 2. Welcher Dämpfungsfall liegt vor, und wie groß ist der Gütefaktor Q?", options: ["Schwingfall; Q = 0,5", "Kriechfall; Q = 0,5", "Aperiodischer Grenzfall; Q = 2", "Schwingfall; Q = 1"], correctIndex: 3, explanation: "Da δ = ω₀/2 < ω₀, liegt der Schwingfall vor. Der Gütefaktor ist Q = ω₀/(2δ) = ω₀/(2 · ω₀/2) = ω₀/ω₀ = 1. Ein Q = 1 entspricht noch recht starker Dämpfung." },
      { id: "q10", question: "Welche Maßnahme erhöht die Dämpfung δ eines Feder-Masse-Systems?", options: ["Den Dämpfungsparameter b erhöhen (z. B. viskoseres Öl im Stoßdämpfer)", "Die Masse m verringern", "Die Eigenfrequenz ω₀ erhöhen", "Die Federkonstante k erhöhen"], correctIndex: 0, explanation: "Da δ = b/(2m), steigt δ bei größerem Dämpfungsparameter b (stärkere Reibungs- oder Viskositätskraft). Eine Erhöhung von k oder eine Verringerung von m erhöhen hingegen ω₀, nicht δ." }
    ]
  },
  {
    id: "natwiss-resonanz",
    chapter: 5,
    order: 3,
    title: "Erzwungene Schwingungen und Resonanz",
    icon: "📢",
    summary: "Eine periodisch angeregte Schwingung reagiert bei Resonanz (Erregerfrequenz ≈ Eigenfrequenz) mit maximaler Amplitude; Resonanz ist in Technik und Natur allgegenwärtig.",
    explanation: [
      { type: "p", text: "Bei erzwungenen Schwingungen wirkt zusätzlich eine periodische äußere Kraft F(t) = F₀ · cos(Ωt) auf den gedämpften Oszillator. Die vollständige Bewegungsgleichung lautet:" },
      { type: "formula", tex: "\\ddot{x} + 2\\delta \\, \\dot{x} + \\omega_0^2 \\, x = \\frac{F_0}{m} \\cos(\\Omega t)" },
      { type: "p", text: "Im eingeschwungenen Zustand schwingt das System mit der Erregerfrequenz Ω (nicht mit ω₀!). Die Amplitude A(Ω) und die Phasenverschiebung φ(Ω) hängen von Ω ab:" },
      { type: "formula", tex: "A(\\Omega) = \\frac{F_0/m}{\\sqrt{(\\omega_0^2 - \\Omega^2)^2 + 4\\delta^2 \\Omega^2}}" },
      { type: "p", text: "Das Resonanzmaximum der Amplitude liegt bei der Resonanzfrequenz:" },
      { type: "formula", tex: "\\Omega_R = \\sqrt{\\omega_0^2 - 2\\delta^2}" },
      { type: "p", text: "Phasenverhalten: Bei kleiner Erregerfrequenz ist die Schwingung phasengleich mit der Kraft (φ ≈ 0). Bei Ω = ω₀ ist die Phasenverschiebung genau 90°. Bei sehr hoher Frequenz läuft die Schwingung der Kraft um 180° nach." },
      { type: "list", items: [
        "Ω << ω₀: φ ≈ 0° (phasengleich mit Erreger)",
        "Ω = ω₀: φ = 90° (Quadraturphase)",
        "Ω >> ω₀: φ ≈ 180° (Gegenphasig)"
      ]},
      { type: "p", text: "Bei schwacher Dämpfung kann die Resonanzamplitude viele Male größer sein als die statische Auslenkung. Bekannte Beispiele: Tacoma-Narrows-Brücke (1940, Windresonanz), Sänger zerstört Weinglas durch Gesang." }
    ],
    exercises: [
      {
        id: "ex1",
        prompt: "Ein gedämpfter Oszillator hat ω₀ = 10 rad/s und δ = 1 s⁻¹. Bei welcher Erregerfrequenz Ω_R tritt das Amplitudenmaximum auf?",
        solution: [
          { type: "p", text: "Die Resonanzfrequenz liegt bei:" },
          { type: "formula", tex: "\\Omega_R = \\sqrt{\\omega_0^2 - 2\\delta^2} = \\sqrt{100 - 2 \\cdot 1} = \\sqrt{98} \\approx 9{,}90 \\; \\text{rad/s}" },
          { type: "p", text: "Die Resonanzfrequenz Ω_R ist etwas kleiner als ω₀ = 10 rad/s, weil die Dämpfung das Maximum leicht zu niedrigeren Frequenzen verschiebt. Bei sehr kleiner Dämpfung (δ → 0) gilt Ω_R ≈ ω₀." }
        ]
      },
      {
        id: "ex2",
        prompt: "Warum ist es für Bauwerke wie Brücken oder Hochhäuser gefährlich, wenn sie in der Nähe ihrer Eigenfrequenz erregt werden? Erläutern Sie anhand der Amplitudenformel.",
        solution: [
          { type: "p", text: "Bei Anregung mit Ω = ω₀ (genauer: Ω ≈ Ω_R) wird die Amplitude A(Ω) maximal:" },
          { type: "formula", tex: "A(\\omega_0) = \\frac{F_0/m}{2\\delta\\,\\omega_0} = \\frac{F_0/m}{2\\delta\\,\\omega_0}" },
          { type: "p", text: "Bei schwacher Dämpfung (kleines δ) kann A beliebig groß werden. Die Struktur muss dann Kräfte aufnehmen, die weit über der statischen Last liegen. Das spektakulärste Beispiel ist der Einsturz der Tacoma-Narrows-Brücke (1940): Wind regte die Brücke in ihrer Torsionseigenfrequenz an, die Schwingungen wurden immer größer, bis die Brücke kollabierte." }
        ]
      },
      {
        id: "ex3",
        prompt: "Ein MRT-Gerät (Magnetresonanztomographie) arbeitet bei 1,5 Tesla. Die Lamorfrequenz von Protonen beträgt dabei ca. 64 MHz. Erläutern Sie das physikalische Prinzip der magnetischen Resonanz.",
        solution: [
          { type: "p", text: "Protonen besitzen einen Kernspin und damit ein magnetisches Dipolmoment. Im äußeren Magnetfeld B₀ = 1,5 T präzedieren die Protonenspin-Achsen mit der Lamorfrequenz:" },
          { type: "formula", tex: "f_L = \\frac{\\gamma}{2\\pi} \\cdot B_0 \\approx 64 \\; \\text{MHz} \\quad (\\gamma: \\text{gyromagnetisches Verhältnis des Protons})" },
          { type: "p", text: "Dies ist die Eigenfrequenz des Systems 'Proton im Magnetfeld'. Wird nun ein Hochfrequenzpuls mit genau dieser Frequenz (Resonanzbedingung Ω = ω₀ = 2πf_L) eingestrahlt, nehmen die Protonen Energie auf (Resonanzabsorption). Beim Zurückklappen senden sie ein messbares Signal aus, das ortsaufgelöst die innere Körperstruktur abbildet." }
        ]
      },
      {
        id: "ex4",
        prompt: "Bei welcher Erregerfrequenz tritt eine Phasenverschiebung von genau φ = 90° zwischen Erregerkraft und Schwingungsantwort auf?",
        solution: [
          { type: "p", text: "Die Phasenverschiebung φ zwischen erregender Kraft und Systemantwort berechnet sich zu:" },
          { type: "formula", tex: "\\tan(\\varphi) = \\frac{2\\delta\\,\\Omega}{\\omega_0^2 - \\Omega^2}" },
          { type: "p", text: "Für φ = 90° gilt tan(φ) → ∞, also muss der Nenner null werden:" },
          { type: "formula", tex: "\\omega_0^2 - \\Omega^2 = 0 \\quad \\Rightarrow \\quad \\Omega = \\omega_0" },
          { type: "p", text: "Die Phasenverschiebung von exakt 90° tritt bei Ω = ω₀ auf, unabhängig vom Dämpfungsgrad δ. Diese Eigenschaft wird zur experimentellen Bestimmung von Eigenfrequenzen genutzt." }
        ]
      },
      {
        id: "ex5",
        prompt: "Was geschieht mit der Resonanzkurve (Amplitude über Erregerfrequenz), wenn die Dämpfung δ zunimmt? Beschreiben Sie qualitativ die Veränderungen.",
        solution: [
          { type: "p", text: "Mit zunehmender Dämpfung δ treten folgende Änderungen an der Resonanzkurve auf:" },
          { type: "list", items: [
            "Das Amplitudenmaximum wird kleiner (gedämpfte Resonanzamplitude ∝ 1/(2δ))",
            "Das Maximum verschiebt sich zu niedrigeren Frequenzen (Ω_R = √(ω₀² − 2δ²) < ω₀)",
            "Die Resonanzkurve wird breiter (geringere Frequenzselektivität)",
            "Für δ ≥ ω₀/√2 existiert kein ausgeprägtes Maximum mehr"
          ]},
          { type: "p", text: "Technisch ausgedrückt: Ein hoher Gütefaktor Q = ω₀/(2δ) bedeutet ein scharfes, hohes Resonanzmaximum. Ein niedriger Q bedeutet eine flache, breite Kurve ohne klares Maximum." }
        ]
      }
    ],
    quiz: [
      { id: "q1", question: "Mit welcher Frequenz schwingt ein erzwungener Oszillator im eingeschwungenen Zustand?", options: ["Mit der Erregerfrequenz Ω", "Mit der gedämpften Frequenz ω_d", "Mit der Eigenfrequenz ω₀", "Mit dem Mittelwert aus ω₀ und Ω"], correctIndex: 0, explanation: "Im eingeschwungenen Zustand schwingt das System immer mit der Erregerfrequenz Ω, nicht mit der Eigenfrequenz ω₀. Die Eigenfrequenz bestimmt jedoch, bei welchem Ω das System resonant reagiert." },
      { id: "q2", question: "Bei welcher Erregerfrequenz Ω tritt (näherungsweise) die maximale Schwingungsamplitude auf?", options: ["Bei Ω = 0 (statischer Fall)", "Bei Ω = ω₀ − δ", "Bei Ω = 2ω₀", "Bei Ω = √(ω₀² − 2δ²) (Resonanzfrequenz)"], correctIndex: 3, explanation: "Die Resonanzfrequenz, bei der die Amplitude maximal ist, beträgt Ω_R = √(ω₀² − 2δ²). Für schwache Dämpfung (δ << ω₀) gilt Ω_R ≈ ω₀." },
      { id: "q3", question: "Wie groß ist die Phasenverschiebung φ zwischen erregender Kraft und Systemantwort, wenn Ω = ω₀?", options: ["φ = 180°", "φ = 0°", "φ = 90°", "φ = 45°"], correctIndex: 2, explanation: "Bei Ω = ω₀ beträgt die Phasenverschiebung immer φ = 90°, unabhängig von der Dämpfung. Die Systemantwort eilt der Erregerkraft um eine Viertelperiode nach. Diese Eigenschaft eignet sich zur experimentellen Bestimmung von Eigenfrequenzen." },
      { id: "q4", question: "Was passiert mit der Resonanzamplitude bei sehr schwacher Dämpfung (δ → 0)?", options: ["Die Amplitude bleibt endlich (begrenzt durch die Masse)", "Die Amplitude wächst theoretisch gegen unendlich", "Die Amplitude halbiert sich", "Die Amplitude nähert sich dem statischen Wert an"], correctIndex: 1, explanation: "Die Resonanzamplitude A(ω₀) = F₀/(m · 2δ · ω₀) wächst für δ → 0 gegen unendlich. In der Realität begrenzen nichtlineare Effekte oder Materialversagen die Amplitude, bevor sie unendlich wird (vgl. Tacoma-Brücke)." },
      { id: "q5", question: "Welche Phasenverschiebung φ tritt bei Ω >> ω₀ (sehr hohe Erregerfrequenz) auf?", options: ["φ ≈ 45°", "φ ≈ 180° (gegenphasig)", "φ ≈ 90°", "φ ≈ 0° (phasengleich)"], correctIndex: 1, explanation: "Bei sehr hoher Erregerfrequenz (Ω >> ω₀) läuft die Systemantwort der Erregerkraft um φ ≈ 180° nach (gegenphasig). Das System kann der schnellen Anregung nicht folgen und schwingt entgegengesetzt zur Kraft." },
      { id: "q6", question: "Was versteht man unter Resonanzkatastrophe?", options: ["Ein elektrischer Kurzschluss in einem Schwingkreis", "Das Versagen einer Struktur durch resonante Anregung bei geringer Dämpfung", "Das Abreißen der Schwingung bei Überdämpfung", "Das Abklingen der Amplitude durch Energieverluste"], correctIndex: 1, explanation: "Resonanzkatastrophe bezeichnet das Versagen einer Struktur durch resonante Anregung. Bei schwacher Dämpfung kann die Schwingungsamplitude so groß werden, dass die Streckgrenze des Materials überschritten wird. Bekanntes Beispiel: Einsturz der Tacoma-Narrows-Brücke (1940)." },
      { id: "q7", question: "Wovon hängt die Breite des Resonanzpeaks (Bandbreite) ab?", options: ["Von der Masse m allein", "Von der Eigenfrequenz ω₀ allein", "Von der Dämpfung δ: Stärkere Dämpfung ergibt einen breiteren Peak", "Nur von der Erregeramplitude F₀"], correctIndex: 2, explanation: "Die Halbwertsbreite der Resonanzkurve beträgt Δω = 2δ. Stärkere Dämpfung (größeres δ) ergibt eine breitere, niedrigere Resonanzkurve. Dies wird durch den Gütefaktor Q = ω₀/(2δ) = ω₀/Δω beschrieben." },
      { id: "q8", question: "In welchem technischen Gerät wird Resonanz gezielt zur Signalverarbeitung genutzt?", options: ["In einem Gleichstrommotor", "In einem Hochpass-Filter ohne Resonanzfrequenz", "Im Schwingkreis eines Radios (Abstimmung auf Empfangsfrequenz)", "In einem Verbrennungsmotor"], correctIndex: 2, explanation: "Im LC-Schwingkreis eines Radioempfängers wird durch Veränderung der Kapazität oder Induktivität die Resonanzfrequenz auf die gewünschte Sendefrequenz eingestellt. Nur Signale nahe der Resonanzfrequenz werden stark verstärkt." },
      { id: "q9", question: "Ein System hat ω₀ = 5 rad/s und δ = 2 s⁻¹. Wie groß ist die Resonanzfrequenz Ω_R?", options: ["Ω_R = √29 ≈ 5,39 rad/s", "Ω_R = 5 rad/s", "Ω_R = 3 rad/s", "Ω_R = √17 ≈ 4,12 rad/s"], correctIndex: 3, explanation: "Ω_R = √(ω₀² − 2δ²) = √(25 − 2 · 4) = √(25 − 8) = √17 ≈ 4,12 rad/s." },
      { id: "q10", question: "Wie verändert sich die Resonanzfrequenz Ω_R bei zunehmender Dämpfung δ?", options: ["Ω_R sinkt (stärkere Dämpfung → niedrigere Resonanzfrequenz)", "Ω_R verdoppelt sich", "Ω_R steigt (stärkere Dämpfung → höhere Resonanzfrequenz)", "Ω_R bleibt unverändert bei ω₀"], correctIndex: 0, explanation: "Da Ω_R = √(ω₀² − 2δ²), nimmt Ω_R mit steigendem δ ab. Bei δ = ω₀/√2 liegt das Maximum bei Ω = 0 (kein Resonanzmaximum mehr). Für δ > ω₀/√2 gibt es keine ausgeprägten Resonanzspitze mehr." }
    ]
  }
];
