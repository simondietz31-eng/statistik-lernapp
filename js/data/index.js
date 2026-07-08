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
  { id: 1, title: "Grundlagen des Rechnungswesens", accent: "#5b8def" },
  { id: 2, title: "Kostenartenrechnung", accent: "#34c77b" },
  { id: 3, title: "Kostenstellenrechnung", accent: "#a374ff" },
  { id: 4, title: "Kostenträgerrechnung", accent: "#ff9f43" },
  { id: 5, title: "Deckungsbeitragsrechnung", accent: "#e85d75" },
  { id: 6, title: "Plankostenrechnung", accent: "#2bb3a3" }
];
const KLR_TOPICS = [].concat(
  KLR_CHAPTER1_TOPICS,
  KLR_CHAPTER2_TOPICS,
  KLR_CHAPTER3_TOPICS,
  KLR_CHAPTER4_TOPICS,
  KLR_CHAPTER5_TOPICS,
  KLR_CHAPTER6_TOPICS
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

const SUBJECTS = [
  {
    id: "statistik",
    title: "Statistik",
    studiengang: ["Industriewirtschaft", "Betriebswirtschaft"],
    icon: "📊",
    accent: "#5b8def",
    chapters: STATISTIK_CHAPTERS,
    topics: STATISTIK_TOPICS
  },
  {
    id: "bwl2",
    title: "BWL II (Prozessmanagement, Wertschöpfungskette)",
    studiengang: ["Integrative Gesundheitsförderung"],
    icon: "🔄",
    accent: "#e85d75",
    chapters: BWL2_CHAPTERS,
    topics: BWL2_TOPICS
  },
  {
    id: "klr",
    title: "Kosten- und Leistungsrechnung",
    studiengang: ["Industriewirtschaft", "Betriebswirtschaft"],
    icon: "📒",
    accent: "#c9a227",
    chapters: KLR_CHAPTERS,
    topics: KLR_TOPICS
  },
  {
    id: "orga-personal",
    title: "Organisation & Personal",
    studiengang: ["Industriewirtschaft", "Betriebswirtschaft"],
    icon: "🏢",
    accent: "#8b5cf6",
    chapters: ORGAPERSONAL_CHAPTERS,
    topics: ORGAPERSONAL_TOPICS
  }
];
