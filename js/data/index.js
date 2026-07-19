const STATISTIK_CHAPTERS = [
  { id: 1, title: "Einleitung / Grundlagen", accent: "#5b8def" },
  { id: 2, title: "Deskriptive Statistik", accent: "#34c77b" },
  { id: 3, title: "Wahrscheinlichkeitstheorie", accent: "#a374ff" },
  { id: 4, title: "Induktive Statistik", accent: "#ff9f43" }
];
const STATISTIK_TOPICS = [].concat(CHAPTER1_TOPICS, CHAPTER2_TOPICS, CHAPTER3_TOPICS, CHAPTER4_TOPICS);

const BWL2_CHAPTERS = [
  { id: 1, title: "Strang A: Prozessmanagement", accent: "#e85d75" },
  { id: 2, title: "Strang B: Wertschöpfungskette", accent: "#2bb3a3" }
];
const BWL2_TOPICS = [].concat(BWL_STRANG_A_TOPICS, BWL_STRANG_B_TOPICS);

const KLR_CHAPTERS = [
  { id: 1, title: "Grundlagen des Rechnungswesens", accent: "#5b8def", group: "Theorie" },
  { id: 2, title: "Kostenartenrechnung", accent: "#34c77b", group: "Theorie" },
  { id: 3, title: "Kostenstellenrechnung", accent: "#a374ff", group: "Theorie" },
  { id: 4, title: "Kostenträgerrechnung", accent: "#ff9f43", group: "Theorie" },
  { id: 5, title: "Deckungsbeitragsrechnung", accent: "#e85d75", group: "Theorie" },
  { id: 6, title: "Plankostenrechnung", accent: "#2bb3a3", group: "Theorie" },
  { id: 7, title: "Klausuraufgaben & Übungsklausuren", accent: "#c9a227", group: "Übungsaufgaben" }
];
const KLR_TOPICS = [].concat(
  KLR_CHAPTER1_TOPICS,
  KLR_CHAPTER2_TOPICS,
  KLR_CHAPTER3_TOPICS,
  KLR_CHAPTER4_TOPICS,
  KLR_CHAPTER5_TOPICS,
  KLR_CHAPTER6_TOPICS,
  KLR_CHAPTER7_TOPICS
);

const ORGAPERSONAL_CHAPTERS = [
  { id: 1, title: "Grundlagen der Organisation", accent: "#5b8def", group: "Organisation" },
  { id: 2, title: "Organisationstheorien", accent: "#34c77b", group: "Organisation" },
  { id: 3, title: "Organisationsgestaltung", accent: "#a374ff", group: "Organisation" },
  { id: 4, title: "Organisation und Organisationskultur", accent: "#ff9f43", group: "Organisation" },
  { id: 5, title: "Wandel von Organisationen", accent: "#e85d75", group: "Organisation" },
  { id: 6, title: "Grundlagen der Personalwirtschaft und Personalbedarfsplanung", accent: "#2bb3a3", group: "Personal" },
  { id: 7, title: "Personalbeschaffung", accent: "#c9a227", group: "Personal" },
  { id: 8, title: "Personaleinsatz und -entlohnung", accent: "#4f86c6", group: "Personal" },
  { id: 9, title: "Personalbeurteilung", accent: "#d9738a", group: "Personal" },
  { id: 10, title: "Personalentwicklung", accent: "#6fcf97", group: "Personal" },
  { id: 11, title: "Personalfreisetzung", accent: "#b08968", group: "Personal" }
];
const ORGAPERSONAL_TOPICS = [].concat(
  ORGAPERSONAL_CHAPTER1_TOPICS,
  ORGAPERSONAL_CHAPTER2_TOPICS,
  ORGAPERSONAL_CHAPTER3_TOPICS,
  ORGAPERSONAL_CHAPTER4_TOPICS,
  ORGAPERSONAL_CHAPTER5_TOPICS,
  ORGAPERSONAL_CHAPTER6_TOPICS,
  ORGAPERSONAL_CHAPTER7_TOPICS,
  ORGAPERSONAL_CHAPTER8_TOPICS,
  ORGAPERSONAL_CHAPTER9_TOPICS,
  ORGAPERSONAL_CHAPTER10_TOPICS,
  ORGAPERSONAL_CHAPTER11_TOPICS
);

const NATWISS_CHAPTERS = [
  { id: 1,  title: "Kinematik der Massenpunkte",              accent: "#5b8def", group: "Mechanik" },
  { id: 2,  title: "Dynamik der Massenpunkte",                accent: "#3a6fd8", group: "Mechanik" },
  { id: 3,  title: "Impuls, Arbeit und Energie",              accent: "#2855b0", group: "Mechanik" },
  { id: 4,  title: "Rotation und Mechanik starrer Körper",    accent: "#1e4299", group: "Mechanik" },
  { id: 5,  title: "Mechanische Schwingungen",                accent: "#34c77b", group: "Schwingungen & Wellen" },
  { id: 6,  title: "Mechanische Wellen",                      accent: "#27a865", group: "Schwingungen & Wellen" },
  { id: 7,  title: "Grundlagen der Thermodynamik",            accent: "#ff9f43", group: "Thermodynamik" },
  { id: 8,  title: "1. Hauptsatz und Zustandsänderungen",     accent: "#e8822a", group: "Thermodynamik" },
  { id: 9,  title: "2. Hauptsatz und Entropie",               accent: "#d16515", group: "Thermodynamik" },
  { id: 10, title: "Elektrostatik",                           accent: "#a374ff", group: "Elektromagnetismus" },
  { id: 11, title: "Gleichstromkreise",                       accent: "#8b5cf6", group: "Elektromagnetismus" },
  { id: 12, title: "Magnetismus und Induktion",               accent: "#7040e0", group: "Elektromagnetismus" },
  { id: 13, title: "Wechselstrom und EM-Schwingungen",        accent: "#5a2cc9", group: "Elektromagnetismus" },
  { id: 14, title: "Übungsaufgaben Mechanik",                 accent: "#3a6fd8", group: "Übungsaufgaben" },
  { id: 15, title: "Übungsaufgaben Schwingungen & Wellen",    accent: "#27a865", group: "Übungsaufgaben" },
  { id: 16, title: "Übungsaufgaben Thermodynamik",            accent: "#e8822a", group: "Übungsaufgaben" },
  { id: 17, title: "Übungsaufgaben Elektromagnetismus",       accent: "#7040e0", group: "Übungsaufgaben" }
];
const NATWISS_TOPICS = [].concat(
  NATWISS_CHAPTER1_TOPICS,
  NATWISS_CHAPTER2_TOPICS,
  NATWISS_CHAPTER3_TOPICS,
  NATWISS_CHAPTER4_TOPICS,
  NATWISS_CHAPTER5_TOPICS,
  NATWISS_CHAPTER6_TOPICS,
  NATWISS_CHAPTER7_TOPICS,
  NATWISS_CHAPTER8_TOPICS,
  NATWISS_CHAPTER9_TOPICS,
  NATWISS_CHAPTER10_TOPICS,
  NATWISS_CHAPTER11_TOPICS,
  NATWISS_CHAPTER12_TOPICS,
  NATWISS_CHAPTER13_TOPICS,
  NATWISS_CHAPTER14_TOPICS,
  NATWISS_CHAPTER15_TOPICS,
  NATWISS_CHAPTER16_TOPICS,
  NATWISS_CHAPTER17_TOPICS
);

const FINV_CHAPTERS = [
  { id: 1,  title: "Grundlagen und Finanzmärkte",                         accent: "#1f5b68", group: "Finanzierung" },
  { id: 2,  title: "Betriebliches Finanzmanagement",                     accent: "#2b7284", group: "Finanzierung" },
  { id: 3,  title: "Finanzierungsformen, Leverage & Kapitalkosten",       accent: "#3789a0", group: "Finanzierung" },
  { id: 4,  title: "Außenfinanzierung",                                  accent: "#4aa0bb", group: "Finanzierung" },
  { id: 5,  title: "Innenfinanzierung",                                  accent: "#5eb7d3", group: "Finanzierung" },
  { id: 6,  title: "Grundlagen der Investitionsrechnung",                accent: "#6a3a5c", group: "Investition" },
  { id: 7,  title: "Lineare Verzinsung",                                 accent: "#834b72", group: "Investition" },
  { id: 8,  title: "Zinseszinsrechnung",                                 accent: "#9c5c89", group: "Investition" },
  { id: 9,  title: "Dynamische Investitionsrechnung",                    accent: "#b56ea0", group: "Investition" },
  { id: 10, title: "Renten, Annuitäten, Annuitätenmethode",              accent: "#d081b8", group: "Investition" }
];
const FINV_TOPICS = [].concat(
  FINV_CHAPTER1_TOPICS,
  FINV_CHAPTER2_TOPICS,
  FINV_CHAPTER3_TOPICS,
  FINV_CHAPTER4_TOPICS,
  FINV_CHAPTER5_TOPICS,
  FINV_CHAPTER6_TOPICS,
  FINV_CHAPTER7_TOPICS,
  FINV_CHAPTER8_TOPICS,
  FINV_CHAPTER9_TOPICS,
  FINV_CHAPTER10_TOPICS
);

const VERTRIEB_CHAPTERS = [
  { id: 1,  title: "Grundlagen: Vertrieb als Boundary-Spanning-Funktion",   accent: "#1d6f5c", group: "Kunde & Markt" },
  { id: 2,  title: "Kundenzufriedenheit & Kundenbindung",                  accent: "#2c8a72", group: "Kunde & Markt" },
  { id: 3,  title: "Wettbewerbsmechanismen im Vertrieb",                   accent: "#3ea488", group: "Kunde & Markt" },
  { id: 4,  title: "Vertriebswege, Vertriebsorgane & Macht",               accent: "#a6631f", group: "Vertriebswege & Preis" },
  { id: 5,  title: "Preisfindung & Preisdifferenzierung",                  accent: "#bf7a2e", group: "Vertriebswege & Preis" },
  { id: 6,  title: "Preisbündelung",                                      accent: "#d6923f", group: "Vertriebswege & Preis" },
  { id: 7,  title: "Persönlicher Verkauf: Fragetechniken & Argumentation", accent: "#6a3aa0", group: "Verkaufsgespräch" },
  { id: 8,  title: "Einwandbehandlung & Geistige Brandstiftung",           accent: "#8850bb", group: "Verkaufsgespräch" },
  { id: 9,  title: "Vertriebscontrolling",                                 accent: "#b0405a", group: "Steuerung & Organisation" },
  { id: 10, title: "Vertriebslogistik, IT-Systeme & Vertriebskultur",      accent: "#c85570", group: "Steuerung & Organisation" },
  { id: 11, title: "Key-Account-Management",                              accent: "#d97088", group: "Steuerung & Organisation" },
  { id: 12, title: "Digitalisierung im Vertrieb",                         accent: "#e88ba0", group: "Steuerung & Organisation" }
];
const VERTRIEB_TOPICS = [].concat(
  VERTRIEB_CHAPTER1_TOPICS,
  VERTRIEB_CHAPTER2_TOPICS,
  VERTRIEB_CHAPTER3_TOPICS,
  VERTRIEB_CHAPTER4_TOPICS,
  VERTRIEB_CHAPTER5_TOPICS,
  VERTRIEB_CHAPTER6_TOPICS,
  VERTRIEB_CHAPTER7_TOPICS,
  VERTRIEB_CHAPTER8_TOPICS,
  VERTRIEB_CHAPTER9_TOPICS,
  VERTRIEB_CHAPTER10_TOPICS,
  VERTRIEB_CHAPTER11_TOPICS,
  VERTRIEB_CHAPTER12_TOPICS
);

const VWL_CHAPTERS = [
  { id: 1,  title: "Denken wie ein Volkswirt",                              accent: "#0ca678", group: "Mikroökonomie" },
  { id: 2,  title: "Die Marktkräfte von Angebot und Nachfrage",             accent: "#1b9e6f", group: "Mikroökonomie" },
  { id: 3,  title: "Preiselastizität",                                     accent: "#2a9169", group: "Mikroökonomie" },
  { id: 4,  title: "Unternehmen in Wettbewerbsmärkten",                    accent: "#3a8462", group: "Mikroökonomie" },
  { id: 5,  title: "Konsumenten, Produzenten und Markteffizienz",          accent: "#49775b", group: "Mikroökonomie" },
  { id: 6,  title: "Externalitäten und Marktversagen",                     accent: "#586a54", group: "Mikroökonomie" },
  { id: 7,  title: "Volkswirtschaftliche Gesamtrechnung (BIP)",            accent: "#1971c2", group: "Makroökonomie" },
  { id: 8,  title: "Messung der Lebenshaltungskosten",                     accent: "#2f6db0", group: "Makroökonomie" },
  { id: 9,  title: "Das monetäre System",                                  accent: "#45699e", group: "Makroökonomie" },
  { id: 10, title: "Geldmengenwachstum und Inflation",                     accent: "#5b658c", group: "Makroökonomie" },
  { id: 11, title: "Geld- und Fiskalpolitik",                              accent: "#71617a", group: "Makroökonomie" },
  { id: 12, title: "Übungsaufgaben Mikroökonomie",                         accent: "#c9a227", group: "Übungsaufgaben" },
  { id: 13, title: "Übungsaufgaben Makroökonomie",                         accent: "#b5872a", group: "Übungsaufgaben" }
];
const VWL_TOPICS = [].concat(
  VWL_CHAPTER1_TOPICS,
  VWL_CHAPTER2_TOPICS,
  VWL_CHAPTER3_TOPICS,
  VWL_CHAPTER4_TOPICS,
  VWL_CHAPTER5_TOPICS,
  VWL_CHAPTER6_TOPICS,
  VWL_CHAPTER7_TOPICS,
  VWL_CHAPTER8_TOPICS,
  VWL_CHAPTER9_TOPICS,
  VWL_CHAPTER10_TOPICS,
  VWL_CHAPTER11_TOPICS,
  VWL_CHAPTER12_TOPICS,
  VWL_CHAPTER13_TOPICS
);

const MARKETING_CHAPTERS = [
  { id: 1, title: "Grundlagen des Marketing",           accent: "#e8590c", group: "Grundlagen" },
  { id: 2, title: "Märkte verstehen",                    accent: "#1971c2", group: "Grundlagen" },
  { id: 3, title: "Kaufverhalten der Konsumenten",       accent: "#9c36b5", group: "Kaufverhalten & Marktforschung" },
  { id: 4, title: "Kaufverhalten von Organisationen (B2B)", accent: "#0c8599", group: "Kaufverhalten & Marktforschung" },
  { id: 5, title: "Marktforschung",                      accent: "#2f9e44", group: "Kaufverhalten & Marktforschung" },
  { id: 6, title: "Strategische Marketingplanung",       accent: "#f08c00", group: "Strategie" },
  { id: 7, title: "Produktpolitik",                      accent: "#4263eb", group: "Marketing-Mix" },
  { id: 8, title: "Preispolitik",                         accent: "#e64980", group: "Marketing-Mix" },
  { id: 9, title: "Kommunikationspolitik",                accent: "#d9480f", group: "Marketing-Mix" },
  { id: 10, title: "Distributionspolitik",                accent: "#0b7285", group: "Marketing-Mix" }
];
const MARKETING_TOPICS = [].concat(
  MARKETING_CHAPTER1_TOPICS,
  MARKETING_CHAPTER2_TOPICS,
  MARKETING_CHAPTER3_TOPICS,
  MARKETING_CHAPTER4_TOPICS,
  MARKETING_CHAPTER5_TOPICS,
  MARKETING_CHAPTER6_TOPICS,
  MARKETING_CHAPTER7_TOPICS,
  MARKETING_CHAPTER8_TOPICS,
  MARKETING_CHAPTER9_TOPICS,
  MARKETING_CHAPTER10_TOPICS
);

const BILANZIERUNG_CHAPTERS = [
  { id: 1,  title: "Grundlagen von Rechnungswesen und Bilanzierung",        accent: "#5b8def", group: "Grundlagen" },
  { id: 2,  title: "Basiselemente der Bilanzierung",                        accent: "#34c77b", group: "Grundlagen" },
  { id: 3,  title: "Bilanzierung des Anlagevermögens",                     accent: "#a374ff", group: "Vermögen" },
  { id: 4,  title: "Bilanzierung des Umlaufvermögens",                     accent: "#ff9f43", group: "Vermögen" },
  { id: 5,  title: "Bilanzierung des Eigenkapitals",                       accent: "#e85d75", group: "Kapital" },
  { id: 6,  title: "Bilanzierung des Fremdkapitals",                       accent: "#2bb3a3", group: "Kapital" },
  { id: 7,  title: "Bilanzierung sonstiger Posten",                        accent: "#c9a227", group: "Sonstige Posten" },
  { id: 8,  title: "Gewinn- und Verlustrechnung",                          accent: "#4f86c6", group: "GuV" },
  { id: 9,  title: "Bilanzpolitische Optionen im Überblick",                accent: "#d9738a", group: "Politik & Digitalisierung" },
  { id: 10, title: "Aspekte der Digitalisierung des externen Rechnungswesens", accent: "#6fcf97", group: "Politik & Digitalisierung" },
  { id: 11, title: "Altklausuren (2004–2025)",                                accent: "#8d6e63", group: "Klausuraufgaben" }
];
const BILANZIERUNG_TOPICS = [].concat(
  BILANZIERUNG_CHAPTER1_TOPICS,
  BILANZIERUNG_CHAPTER2_TOPICS,
  BILANZIERUNG_CHAPTER3_TOPICS,
  BILANZIERUNG_CHAPTER4_TOPICS,
  BILANZIERUNG_CHAPTER5_TOPICS,
  BILANZIERUNG_CHAPTER6_TOPICS,
  BILANZIERUNG_CHAPTER7_TOPICS,
  BILANZIERUNG_CHAPTER8_TOPICS,
  BILANZIERUNG_CHAPTER9_TOPICS,
  BILANZIERUNG_CHAPTER10_TOPICS,
  BILANZIERUNG_CHAPTER11_TOPICS
);

const PRODUKTIONSWIRTSCHAFT_CHAPTERS = [
  { id: 1,  title: "Grundlagen der Produktionswirtschaft",                accent: "#5b8def", group: "Produktion" },
  { id: 2,  title: "Standortentscheidung",                                accent: "#34c77b", group: "Produktion" },
  { id: 3,  title: "Fertigungs- und Organisationstypen",                  accent: "#a374ff", group: "Produktion" },
  { id: 4,  title: "Produktionsplanung",                                  accent: "#ff9f43", group: "Produktion" },
  { id: 5,  title: "Produktionsplanungs- und Steuerungssysteme (PPS)",    accent: "#e85d75", group: "Produktion" },
  { id: 6,  title: "Engpassorientierung und Toyota-Produktionssystem",    accent: "#2bb3a3", group: "Produktion" },
  { id: 7,  title: "Grundlagen der Beschaffung",                          accent: "#c9a227", group: "Beschaffung" },
  { id: 8,  title: "Bedarfs- und Bestellmengenermittlung",                accent: "#4f86c6", group: "Beschaffung" },
  { id: 9,  title: "Bestände und Bestellverfahren",                       accent: "#d9738a", group: "Beschaffung" },
  { id: 10, title: "Lagerwirtschaft",                                     accent: "#6fcf97", group: "Beschaffung" }
];
const PRODUKTIONSWIRTSCHAFT_TOPICS = [].concat(
  PRODUKTIONSWIRTSCHAFT_CHAPTER1_TOPICS,
  PRODUKTIONSWIRTSCHAFT_CHAPTER2_TOPICS,
  PRODUKTIONSWIRTSCHAFT_CHAPTER3_TOPICS,
  PRODUKTIONSWIRTSCHAFT_CHAPTER4_TOPICS,
  PRODUKTIONSWIRTSCHAFT_CHAPTER5_TOPICS,
  PRODUKTIONSWIRTSCHAFT_CHAPTER6_TOPICS,
  PRODUKTIONSWIRTSCHAFT_CHAPTER7_TOPICS,
  PRODUKTIONSWIRTSCHAFT_CHAPTER8_TOPICS,
  PRODUKTIONSWIRTSCHAFT_CHAPTER9_TOPICS,
  PRODUKTIONSWIRTSCHAFT_CHAPTER10_TOPICS
);

const GESUNDHEITSPSYCHOLOGIE_CHAPTERS = [
  { id: 1,  title: "Psychologie als Wissenschaft & biopsychosoziales Modell", accent: "#5b8def", group: "Grundlagen" },
  { id: 2,  title: "Allgemeine Psychologie",                                  accent: "#34c77b", group: "Grundlagen" },
  { id: 3,  title: "Sozialpsychologie",                                      accent: "#a374ff", group: "Grundlagen" },
  { id: 4,  title: "Entwicklungspsychologie: Theorien & Piaget",             accent: "#ff9f43", group: "Entwicklungspsychologie" },
  { id: 5,  title: "Entwicklungspsychologie: Persönlichkeit & Lebensspanne", accent: "#e8822a", group: "Entwicklungspsychologie" },
  { id: 6,  title: "Gesundheitspsychologie & Positive Psychologie",          accent: "#2bb3a3", group: "Gesundheitspsychologie" },
  { id: 7,  title: "Resilienz, Stress & Future Skills",                     accent: "#1d8a9e", group: "Gesundheitspsychologie" },
  { id: 8,  title: "Zeitperspektiven (Zimbardo)",                            accent: "#0c6478", group: "Gesundheitspsychologie" },
  { id: 9,  title: "Klinische Psychologie I: Angst, Zwang & Trauma",         accent: "#c9436e", group: "Klinische Psychologie" },
  { id: 10, title: "Klinische Psychologie II: Depression & Bipolar",         accent: "#a3325a", group: "Klinische Psychologie" },
  { id: 11, title: "Klinische Psychologie III: Schizophrenie & Persönlichkeitsstörungen", accent: "#7d2547", group: "Klinische Psychologie" }
];
const GESUNDHEITSPSYCHOLOGIE_TOPICS = [].concat(
  GESUNDHEITSPSYCHOLOGIE_CHAPTER1_TOPICS,
  GESUNDHEITSPSYCHOLOGIE_CHAPTER2_TOPICS,
  GESUNDHEITSPSYCHOLOGIE_CHAPTER3_TOPICS,
  GESUNDHEITSPSYCHOLOGIE_CHAPTER4_TOPICS,
  GESUNDHEITSPSYCHOLOGIE_CHAPTER5_TOPICS,
  GESUNDHEITSPSYCHOLOGIE_CHAPTER6_TOPICS,
  GESUNDHEITSPSYCHOLOGIE_CHAPTER7_TOPICS,
  GESUNDHEITSPSYCHOLOGIE_CHAPTER8_TOPICS,
  GESUNDHEITSPSYCHOLOGIE_CHAPTER9_TOPICS,
  GESUNDHEITSPSYCHOLOGIE_CHAPTER10_TOPICS,
  GESUNDHEITSPSYCHOLOGIE_CHAPTER11_TOPICS
);

const FORSCHUNG_CHAPTERS = [
  { id: 1,  title: "Fragestellung, Hypothesen & Falsifikation",         accent: "#5b8def", group: "Wissenschaftliches Vorgehen" },
  { id: 2,  title: "Operationalisierung & Gütekriterien",               accent: "#34c77b", group: "Wissenschaftliches Vorgehen" },
  { id: 3,  title: "Untersuchungsdesign & Stichprobe",                  accent: "#a374ff", group: "Wissenschaftliches Vorgehen" },
  { id: 4,  title: "Skalenniveaus von Variablen",                       accent: "#ff9f43", group: "Deskriptive Statistik" },
  { id: 5,  title: "Häufigkeiten & Lagemaße",                           accent: "#e8822a", group: "Deskriptive Statistik" },
  { id: 6,  title: "Streuungsmaße & Normalverteilung",                  accent: "#2bb3a3", group: "Deskriptive Statistik" },
  { id: 7,  title: "Standardfehler & Signifikanztests",                 accent: "#1d8a9e", group: "Inferenzstatistik" },
  { id: 8,  title: "Studiendesigns I: Grundmerkmale",                   accent: "#c9436e", group: "Studiendesigns" },
  { id: 9,  title: "Studiendesigns II: Fall-Kontroll, Kohorte, RCT",    accent: "#a3325a", group: "Studiendesigns" },
  { id: 10, title: "EbM, systematische Reviews & Metaanalysen",         accent: "#7d2547", group: "Studiendesigns" },
  { id: 11, title: "Screeningtests & Testgütekriterien",                accent: "#0c6478", group: "Studiendesigns" },
  { id: 12, title: "Qualitative Forschung & validierte Fragebögen",     accent: "#8d6e63", group: "Qualitative Forschung" }
];
const FORSCHUNG_TOPICS = [].concat(
  FORSCHUNG_CHAPTER1_TOPICS,
  FORSCHUNG_CHAPTER2_TOPICS,
  FORSCHUNG_CHAPTER3_TOPICS,
  FORSCHUNG_CHAPTER4_TOPICS,
  FORSCHUNG_CHAPTER5_TOPICS,
  FORSCHUNG_CHAPTER6_TOPICS,
  FORSCHUNG_CHAPTER7_TOPICS,
  FORSCHUNG_CHAPTER8_TOPICS,
  FORSCHUNG_CHAPTER9_TOPICS,
  FORSCHUNG_CHAPTER10_TOPICS,
  FORSCHUNG_CHAPTER11_TOPICS,
  FORSCHUNG_CHAPTER12_TOPICS
);

const SUBJECTS = [
  {
    id: "statistik",
    title: "Statistik",
    studiengang: ["Industriewirtschaft", "Betriebswirtschaft"],
    semester: 2,
    icon: "📊",
    accent: "#5b8def",
    chapters: STATISTIK_CHAPTERS,
    topics: STATISTIK_TOPICS
  },
  {
    id: "vwl",
    title: "Volkswirtschaftslehre",
    studiengang: ["Industriewirtschaft", "Betriebswirtschaft"],
    semester: 2,
    icon: "📈",
    accent: "#0ca678",
    chapters: VWL_CHAPTERS,
    topics: VWL_TOPICS
  },
  {
    id: "bwl2",
    title: "BWL II (Prozessmanagement, Wertschöpfungskette)",
    studiengang: ["Integrative Gesundheitsförderung"],
    semester: 2,
    icon: "🔄",
    accent: "#e85d75",
    chapters: BWL2_CHAPTERS,
    topics: BWL2_TOPICS
  },
  {
    id: "klr",
    title: "Kosten- und Leistungsrechnung",
    studiengang: ["Industriewirtschaft", "Betriebswirtschaft"],
    semester: 3,
    icon: "📒",
    accent: "#c9a227",
    chapters: KLR_CHAPTERS,
    topics: KLR_TOPICS
  },
  {
    id: "orga-personal",
    title: "Organisation & Personal",
    studiengang: ["Industriewirtschaft", "Betriebswirtschaft"],
    semester: 3,
    icon: "🏢",
    accent: "#8b5cf6",
    chapters: ORGAPERSONAL_CHAPTERS,
    topics: ORGAPERSONAL_TOPICS
  },
  {
    id: "natwiss",
    title: "Naturwissenschaftliche Grundlagen",
    studiengang: ["Industriewirtschaft"],
    semester: 4,
    icon: "⚛️",
    accent: "#5b8def",
    chapters: NATWISS_CHAPTERS,
    topics: NATWISS_TOPICS
  },
  {
    id: "finv",
    title: "Finanzierung & Investition",
    studiengang: ["Industriewirtschaft", "Betriebswirtschaft"],
    semester: 4,
    icon: "💶",
    accent: "#1f5b68",
    chapters: FINV_CHAPTERS,
    topics: FINV_TOPICS
  },
  {
    id: "vertrieb",
    title: "Vertrieb",
    studiengang: ["Industriewirtschaft", "Betriebswirtschaft"],
    semester: 4,
    icon: "🤝",
    accent: "#1d6f5c",
    chapters: VERTRIEB_CHAPTERS,
    topics: VERTRIEB_TOPICS
  },
  {
    id: "marketing",
    title: "Marketing",
    studiengang: ["Industriewirtschaft", "Betriebswirtschaft"],
    semester: 4,
    icon: "🎯",
    accent: "#e64980",
    chapters: MARKETING_CHAPTERS,
    topics: MARKETING_TOPICS
  },
  {
    id: "bilanzierung",
    title: "Bilanzierung",
    studiengang: ["Betriebswirtschaft"],
    semester: 2,
    icon: "⚖️",
    accent: "#2f7d4f",
    chapters: BILANZIERUNG_CHAPTERS,
    topics: BILANZIERUNG_TOPICS
  },
  {
    id: "produktionswirtschaft",
    title: "Produktionswirtschaft",
    studiengang: ["Industriewirtschaft", "Betriebswirtschaft"],
    semester: 2,
    icon: "🏭",
    accent: "#d35400",
    chapters: PRODUKTIONSWIRTSCHAFT_CHAPTERS,
    topics: PRODUKTIONSWIRTSCHAFT_TOPICS
  },
  {
    id: "gesundheitspsychologie",
    title: "Gesundheitspsychologie",
    studiengang: ["Integrative Gesundheitsförderung"],
    semester: 2,
    icon: "🧠",
    accent: "#2bb3a3",
    chapters: GESUNDHEITSPSYCHOLOGIE_CHAPTERS,
    topics: GESUNDHEITSPSYCHOLOGIE_TOPICS
  },
  {
    id: "forschung",
    title: "Forschung",
    studiengang: ["Integrative Gesundheitsförderung"],
    semester: 2,
    icon: "🔬",
    accent: "#5b8def",
    chapters: FORSCHUNG_CHAPTERS,
    topics: FORSCHUNG_TOPICS
  }
];
