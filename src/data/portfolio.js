/* IMPORT IMAGES */
import laravel1 from "../assets/laravel1.jpg";
import recrutement from "../assets/recrutement.jpg";
import logistique from "../assets/logistique.jpg";
import hyundai from "../assets/Location-Vente-et-Entretien-pieces-de-rechange-vehicules-Hyundai.png";

import wordpress3 from "../assets/wordpress3.jpg";
import smilmed from "../assets/Smiled-Events.png";
import autolumiere from "../assets/Auto-lumiere.png";
import marketing from "../assets/Marketing-Digital-Sites-Web-Reseaux-Sociaux-Publicite-Display.png";
import laboratoire from "../assets/Dareldjazairia.png";

/* PROJECTS */
const projects = [
  {
    title: "Plateforme de gestion interne des données d’entreprise",
    period: "12/2023 – 08/2025",
    type: "Laravel",
    category: "Laravel",
    tech: ["Laravel", "MySQL", "PHP"],
    desc: "Réalisé au sein de l’entreprise.",
    features: [
      "Gestion centralisée des données",
      "Organisation par départements",
      "CRUD complet",
      "Workflow de validation",
      "Gestion des rôles",
      "Historisation des actions",
    ],
    image: laravel1,
  },
  {
    title: "Plateforme de recrutement en ligne",
    period: "11/2022 – 09/2023",
    type: "Laravel / PHP",
    category: "Laravel",
    tech: ["Laravel", "PHP", "MySQL"],
    desc: "Réalisé au sein de l’entreprise.",
    features: [
      "Authentification utilisateurs",
      "Gestion des offres d’emploi",
      "Gestion des candidatures",
      "Consultation des CV",
    ],
    image: recrutement,
  },
  {
    title: "Plateforme logistique",
    period: "06/2022 – 12/2023",
    type: "Laravel / PHP",
    category: "Laravel",
    tech: ["Laravel", "MySQL", "PHP"],
    desc: "Réalisé au sein de l’entreprise.",
    features: [
      "Suivi des livraisons",
      "Système de chat",
      "Gestion livreurs et clients",
      "Système d’évaluation",
    ],
    image: logistique,
  },
  {
    title: "Plateforme d’annonces de véhicules",
    period: "12/2021 – 06/2022",
    type: "Laravel / PHP",
    category: "Laravel",
    tech: ["Laravel", "MySQL", "PHP"],
    desc: "Réalisé au sein de l’entreprise.",
    features: [
      "Publication d’annonces",
      "Filtrage avancé",
      "Gestion utilisateurs",
      "Contact annonceur",
    ],
    image: hyundai,
  },

  {
    title: "Plateforme logistique",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress"],
    desc: "Réalisé au sein de l’entreprise.",
    features: [],
    image: wordpress3,
  },
  {
    title: "Plateforme événementielle",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress", "Elementor"],
    desc: "Réalisé au sein de l’entreprise.",
    features: [],
    image: smilmed,
  },
  {
    title: "Plateforme automobile",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress"],
    desc: "Réalisé au sein de l’entreprise.",
    features: [],
    image: autolumiere,
  },
  {
    title: "Plateforme digitale",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress"],
    desc: "Réalisé au sein de l’entreprise.",
    features: [],
    image: marketing,
  },
  {
    title: "Plateforme pour laboratoire",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress"],
    desc: "Réalisé au sein de l’entreprise.",
    features: [],
    image: laboratoire,
  }
];

export default projects;
