const VWL_CHAPTER3_TOPICS = [
  {
    id: "vwl-preiselastizitaet-nachfrage",
    chapter: 3,
    order: 1,
    title: "Preiselastizität der Nachfrage und verwandte Elastizitätsbegriffe",
    icon: "📐",
    summary: "Wie die Preiselastizität der Nachfrage definiert und berechnet wird, wovon ihre Höhe abhängt, welche Typen von Nachfragekurven es gibt (unelastisch bis elastisch), sowie Kreuzpreis-, Einkommens- und Angebotselastizität am Beispiel des CO2-Preises.",
    explanation: [
      { type: "p", text: "Angebot und Nachfrage zeigen zwar die Richtung, in die sich Menge und Preis bei einer Marktveränderung bewegen, sagen aber zunächst nichts darüber aus, wie stark diese Reaktion ausfällt. Genau das misst die Elastizität: Sie ist ein Maß dafür, wie stark Anbieter und Nachfrager auf Veränderungen der Marktlage reagieren, und erlaubt damit eine genauere Analyse von Angebot und Nachfrage." },
      { type: "p", text: "Die Preiselastizität der Nachfrage misst, wie sich die nachgefragte Menge eines Gutes verändert, wenn sich dessen Preis erhöht. Konkret ist sie definiert als die prozentuale Mengenänderung der Nachfrage, die aus einer Preisänderung um ein Prozent resultiert:" },
      { type: "formula", tex: "\\text{Preiselastizität der Nachfrage} = \\dfrac{\\text{prozentuale Änderung der nachgefragten Menge}}{\\text{prozentuale Preisänderung}}" },
      { type: "p", text: "Da Preis und nachgefragte Menge gemäß dem Gesetz der Nachfrage gegenläufig reagieren, wäre dieser Quotient rechnerisch eigentlich negativ. Nach einer weit verbreiteten Konvention wird die Preiselastizität der Nachfrage dennoch als absoluter (positiver) Wert angegeben." },
      { type: "p", text: "Je nach Höhe dieses Werts unterscheidet man mehrere Typen von Nachfragekurven:" },
      { type: "list", items: [
        "Vollkommen unelastische Nachfrage (Preiselastizität = 0): Die Nachfragemenge reagiert überhaupt nicht auf Preisänderungen; die Nachfragekurve verläuft senkrecht.",
        "Unelastische Nachfrage (Preiselastizität < 1): Die Nachfragemenge reagiert nur schwach auf Preisänderungen, z. B. führt ein Preisanstieg um 25 % nur zu einem Nachfragerückgang um 10 %.",
        "Einheitselastizität (Preiselastizität = 1): Die Nachfragemenge verändert sich um genau denselben Prozentsatz wie der Preis.",
        "Elastische Nachfrage (Preiselastizität > 1): Die Nachfragemenge reagiert stark auf Preisänderungen, z. B. führt ein Preisanstieg um 25 % zu einem Nachfragerückgang um 50 %."
      ]},
      { type: "p", text: "Wie hoch die Preiselastizität der Nachfrage nach einem bestimmten Gut ausfällt, hängt von mehreren Bestimmungsgründen ab. Sie steigt tendenziell," },
      { type: "list", items: [
        "wenn die Anzahl enger Substitute für das Gut steigt (je mehr Ausweichmöglichkeiten, desto leichter können Konsumenten auf einen Preisanstieg reagieren),",
        "wenn es sich um Luxusgüter statt lebensnotwendige Güter handelt,",
        "wenn der Anteil des Einkommens steigt, den man für das Gut ausgibt (bei teuren Anschaffungen reagieren Konsumenten sensibler auf Preisänderungen als bei Kleinbeträgen),",
        "wenn der betrachtete Zeithorizont länger ist (kurzfristig können Konsumenten oft nicht ausweichen, langfristig schon eher),",
        "wenn der Markt enger definiert wird (die Nachfrage nach 'Butter' ist elastischer als die Nachfrage nach 'Lebensmitteln allgemein', weil es für ein enger definiertes Gut mehr Substitute gibt)."
      ]},
      { type: "p", text: "Neben der Preiselastizität der Nachfrage gibt es weitere verwandte Elastizitätsbegriffe. Die Kreuzpreiselastizität der Nachfrage misst die prozentuale Veränderung der Nachfrage nach Gut A, wenn sich der Preis von Gut B um ein Prozent ändert; sie ist positiv bei Substituten und negativ bei komplementären Gütern. Die Einkommenselastizität der Nachfrage misst die prozentuale Veränderung der Nachfrage bei einer Veränderung des Einkommens um ein Prozent; sie ist positiv bei normalen Gütern und negativ bei inferioren Gütern. Und schließlich misst die Preiselastizität des Angebots die prozentuale Veränderung der angebotenen Menge bei einer Preisänderung um ein Prozent — sie hängt unter anderem davon ab, wie leicht Anbieter kurzfristig zusätzliche Kapazitäten aufbauen können." },
      { type: "p", text: "Ein aktuelles Anwendungsbeispiel ist der CO2-Preis in Deutschland: Seit 2021 wird auf Heizöl, Erdgas und Kraftstoffe ein CO2-Preis erhoben, der bei Einführung 25 € je Tonne CO2 betrug und aktuell bei 55–65 € je Tonne liegt (ab 2027 soll er in den europäischen Emissionshandel ETS II überführt werden). Nach Berechnungen des Umweltbundesamts läge ein verursachergerechter Preis, der alle gesellschaftlichen Kosten von CO2-Emissionen abbildet, deutlich höher, bei rund 300 € je Tonne (ohne Berücksichtigung von Zeitpräferenzen sogar bei 880 €). Wie stark ein solcher CO2-Preis die Nachfrage nach fossiler Energie tatsächlich senkt, hängt entscheidend von der Preiselastizität der Nachfrage nach Energie ab: Ist die Nachfrage kurzfristig eher unelastisch, weil Konsumenten z. B. ihre Heizungsanlage nicht sofort austauschen können, wirkt ein CO2-Preis zunächst vor allem als zusätzliche Belastung, entfaltet aber langfristig eine stärkere Lenkungswirkung, weil der Zeithorizont für Ausweichreaktionen (z. B. Umstieg auf Wärmepumpen) länger wird." }
    ],
    exercises: [
      {
        id: "vwl-preiselastizitaet-nachfrage-e1",
        prompt: "Definieren Sie die Preiselastizität der Nachfrage und geben Sie die Berechnungsformel an.",
        solution: [{ type: "p", text: "Die Preiselastizität der Nachfrage ist die prozentuale Mengenänderung der Nachfrage, die aus einer Preisänderung um ein Prozent resultiert. Sie berechnet sich als: Preiselastizität der Nachfrage = prozentuale Änderung der nachgefragten Menge ÷ prozentuale Preisänderung, wobei sie üblicherweise als absoluter (positiver) Wert angegeben wird." }]
      },
      {
        id: "vwl-preiselastizitaet-nachfrage-e2",
        prompt: "Nennen Sie drei Bestimmungsgründe der Preiselastizität der Nachfrage und geben Sie Beispiele dazu.",
        solution: [{ type: "p", text: "Erstens die Anzahl enger Substitute: Für Butter gibt es enge Substitute wie Margarine, daher ist die Nachfrage nach Butter relativ elastisch. Zweitens der Charakter des Gutes: Luxusgüter wie Auslandsreisen haben eine elastischere Nachfrage als lebensnotwendige Güter wie Grundnahrungsmittel. Drittens der Zeithorizont: Die Nachfrage nach Benzin ist kurzfristig eher unelastisch, weil Konsumenten ihr Auto nicht sofort wechseln können, langfristig aber elastischer, weil sie z. B. auf sparsamere oder elektrische Fahrzeuge umsteigen können." }]
      },
      {
        id: "vwl-preiselastizitaet-nachfrage-e3",
        prompt: "Nennen und erklären Sie drei eher elastische und drei eher unelastische Dienstleistungen (bezogen auf die Preiselastizität der Nachfrage).",
        solution: [{ type: "p", text: "Eher elastisch sind Dienstleistungen, die Luxuscharakter haben oder viele Substitute besitzen, z. B. Restaurantbesuche (Substitut: selbst kochen), Flugreisen in den Urlaub (Substitut: andere Reiseziele oder Verkehrsmittel) und Streaming-Abonnements (viele austauschbare Anbieter). Eher unelastisch sind Dienstleistungen ohne nahe Substitute oder mit geringem Budgetanteil, z. B. Notarztbehandlungen (keine Ausweichmöglichkeit), Wasserversorgung (lebensnotwendig, kaum Substitute) und Müllabfuhr (gesetzlich vorgeschrieben, kein Substitut verfügbar)." }]
      },
      {
        id: "vwl-preiselastizitaet-nachfrage-e4",
        prompt: "Was misst die Kreuzpreiselastizität der Nachfrage, und welches Vorzeichen hat sie bei Substituten bzw. bei komplementären Gütern?",
        solution: [{ type: "p", text: "Die Kreuzpreiselastizität der Nachfrage misst die prozentuale Veränderung der Nachfrage nach Gut A, wenn sich der Preis von Gut B um ein Prozent ändert. Bei Substituten ist sie positiv, weil ein steigender Preis von Gut B die Nachfrage nach Gut A erhöht. Bei komplementären Gütern ist sie negativ, weil ein steigender Preis von Gut B die Nachfrage nach Gut A verringert." }]
      },
      {
        id: "vwl-preiselastizitaet-nachfrage-e5",
        prompt: "Erklären Sie, warum die Lenkungswirkung des CO2-Preises auf die Energienachfrage kurzfristig geringer ausfallen dürfte als langfristig.",
        solution: [{ type: "p", text: "Die Preiselastizität der Nachfrage steigt mit dem Zeithorizont, weil Konsumenten mehr Zeit haben, um auf einen Preisanstieg zu reagieren. Kurzfristig können Haushalte ihre Heizungsanlage oder ihr Fahrzeug oft nicht sofort austauschen, sodass die Nachfrage nach fossiler Energie eher unelastisch reagiert und der CO2-Preis zunächst vor allem als zusätzliche Kostenbelastung wirkt. Langfristig können Haushalte dagegen z. B. auf Wärmepumpen oder Elektrofahrzeuge umsteigen, wodurch die Nachfrage elastischer wird und der CO2-Preis eine stärkere Lenkungswirkung entfaltet." }]
      }
    ],
    quiz: [
      { id: "q1", question: "Was misst die Preiselastizität der Nachfrage?", options: ["Die absolute Änderung der Nachfragemenge in Stück", "Die prozentuale Mengenänderung der Nachfrage bei einer Preisänderung um ein Prozent", "Den Gleichgewichtspreis eines Marktes", "Die Änderung des Angebots bei einer Einkommensänderung"], correctIndex: 1, explanation: "Die Preiselastizität der Nachfrage ist definiert als prozentuale Mengenänderung der Nachfrage bei einer Preisänderung um ein Prozent." },
      { id: "q2", question: "Wie wird die Preiselastizität der Nachfrage nach gängiger Konvention angegeben?", options: ["Immer als negativer Wert", "Als absoluter (positiver) Wert", "Nur als Prozentsatz ohne Bezug zum Preis", "Als Verhältnis von Angebot zu Nachfrage"], correctIndex: 1, explanation: "Obwohl der Quotient wegen der gegenläufigen Preis-Mengen-Reaktion rechnerisch negativ wäre, wird die Preiselastizität der Nachfrage üblicherweise als absoluter Wert angegeben." },
      { id: "q3", question: "Wie hoch ist die Preiselastizität bei vollkommen unelastischer Nachfrage?", options: ["Größer als 1", "Genau 1", "0", "Nicht definierbar"], correctIndex: 2, explanation: "Bei vollkommen unelastischer Nachfrage reagiert die Menge überhaupt nicht auf Preisänderungen, die Preiselastizität ist 0." },
      { id: "q4", question: "Wann spricht man von elastischer Nachfrage?", options: ["Wenn die Preiselastizität kleiner als 1 ist", "Wenn die Preiselastizität größer als 1 ist", "Wenn die Preiselastizität genau 1 ist", "Wenn die Nachfrage konstant bleibt"], correctIndex: 1, explanation: "Bei elastischer Nachfrage reagiert die Nachfragemenge überproportional stark auf Preisänderungen, die Preiselastizität ist größer als 1." },
      { id: "q5", question: "Welcher der folgenden Faktoren erhöht tendenziell die Preiselastizität der Nachfrage nach einem Gut?", options: ["Wenige verfügbare Substitute", "Ein kurzer Zeithorizont", "Eine steigende Anzahl enger Substitute", "Ein sehr eng definiertes lebensnotwendiges Gut ohne Alternativen"], correctIndex: 2, explanation: "Je mehr enge Substitute für ein Gut verfügbar sind, desto leichter können Konsumenten bei einer Preiserhöhung ausweichen, was die Preiselastizität erhöht." },
      { id: "q6", question: "Warum ist die Nachfrage nach einem eng definierten Gut (z. B. 'Butter') typischerweise elastischer als nach einem weit gefassten Gut (z. B. 'Lebensmittel')?", options: ["Weil eng definierte Güter immer teurer sind", "Weil es für eng definierte Güter mehr Substitute gibt", "Weil weit gefasste Güter keine Nachfragekurve haben", "Weil eng definierte Güter nie Luxusgüter sind"], correctIndex: 1, explanation: "Für eng definierte Güter existieren mehr nahe Substitute (z. B. Margarine für Butter), wodurch die Nachfrage elastischer reagiert." },
      { id: "q7", question: "Was misst die Kreuzpreiselastizität der Nachfrage?", options: ["Die Reaktion der Nachfrage nach Gut A auf eine Preisänderung von Gut B", "Die Reaktion des Angebots auf eine Preisänderung", "Die Reaktion der Nachfrage auf eine Einkommensänderung", "Die Reaktion des Preises auf eine Mengenänderung"], correctIndex: 0, explanation: "Die Kreuzpreiselastizität der Nachfrage misst die prozentuale Veränderung der Nachfrage nach Gut A bei einer Preisänderung von Gut B um ein Prozent." },
      { id: "q8", question: "Welches Vorzeichen hat die Einkommenselastizität der Nachfrage bei einem inferioren Gut?", options: ["Positiv", "Negativ", "Immer Null", "Immer größer als 1"], correctIndex: 1, explanation: "Bei einem inferioren Gut sinkt die Nachfrage mit steigendem Einkommen, die Einkommenselastizität ist daher negativ." },
      { id: "q9", question: "Was misst die Preiselastizität des Angebots?", options: ["Die prozentuale Veränderung des Angebots bei einer Preisänderung um ein Prozent", "Die prozentuale Veränderung der Nachfrage bei einer Preisänderung um ein Prozent", "Die absolute Änderung des Gleichgewichtspreises", "Das Verhältnis von Angebot zu Nachfrage im Gleichgewicht"], correctIndex: 0, explanation: "Die Preiselastizität des Angebots misst die prozentuale Veränderung der angebotenen Menge bei einer Preisänderung um ein Prozent." },
      { id: "q10", question: "Wie hoch lag der CO2-Preis in Deutschland laut Vorlesung bei seiner Einführung 2021?", options: ["55–65 € je Tonne", "25 € je Tonne", "300 € je Tonne", "880 € je Tonne"], correctIndex: 1, explanation: "Bei Einführung 2021 lag der CO2-Preis in Deutschland auf Heizöl, Erdgas und Kraftstoffe bei 25 € je Tonne CO2; aktuell liegt er bei 55–65 € je Tonne." }
    ]
  }
];
