import {
  Monitor,
  LayoutDashboard,
  Gauge,
  Wrench,
  Puzzle,
  ShieldCheck,
    BarChart3 ,
} from "lucide-react";
/* DATA */
const services = [
  {
    title: "Création de sites & applications web",
    desc: "Conception et développement de sites vitrines, plateformes et applications web modernes, performantes et responsive.",
    icon: Monitor,
  },
  {
    title: "Optimisation des performances",
    desc: "Amélioration du SEO, de la vitesse de chargement et de l’expérience utilisateur pour maximiser l’impact du site.",
    icon: Gauge,
  },
  {
    title: "Maintenance et support technique",
    desc: "Suivi technique, corrections de bugs, mises à jour et accompagnement continu.",
    icon: Wrench,
  },
  {
    title: "Développement sur mesure",
    desc: "Création d’API, plugins WordPress et solutions personnalisées adaptées à vos besoins.",
    icon: Puzzle,
  },
  {
    title: "Sécurisation des sites web",
    desc: "Mise en place de protocoles de sécurité, protection des données et surveillance des menaces.",
    icon: ShieldCheck,
  },
  {
    title: "Analyse de données & suivi de performance",
    desc: "Analyse du trafic via Google Analytics et Google Search Console avec création de dashboards personnalisés pour piloter la performance du site.",
    icon: BarChart3,
  },
];

export default services;