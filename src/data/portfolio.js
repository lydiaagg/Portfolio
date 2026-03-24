/* PROJECTS */
const projects = [
  {
    title: "Plateforme de gestion interne des données d’entreprise",
    period: "12/2023 – 08/2025",
    type: "Laravel",
    category: "Laravel",
    tech: ["Laravel", "MySQL", "PHP"],
    desc: "Plateforme web de centralisation des données internes avec gestion, validation et structuration des informations.",
    features: [
      "Gestion centralisée des données",
      "Organisation par départements",
      "CRUD complet",
      "Workflow de validation",
      "Gestion des rôles",
      "Historisation des actions",
    ],
    image: "/projects/laravel1.jpg",
  },
  {
    title: "Plateforme de recrutement en ligne",
    period: "11/2022 – 09/2023",
    type: "Laravel / PHP",
    category: "Laravel",
    tech: ["Laravel", "PHP", "MySQL"],
    desc: "Plateforme de mise en relation entre candidats et entreprises avec gestion des offres et candidatures.",
    features: [
      "Authentification utilisateurs",
      "Gestion des offres d’emploi",
      "Gestion des candidatures",
      "Consultation des CV",
    ],
    image: "/projects/recrutement.jpg",
  },
  {
    title: "Plateforme logistique et livraison de colis",
    period: "06/2022 – 12/2023",
    type: "Laravel / PHP",
    category: "Laravel",
    tech: ["Laravel", "MySQL", "PHP"],
    desc: "Application de gestion logistique reliant clients et livreurs avec suivi des colis.",
    features: [
      "Suivi des livraisons",
      "Système de chat",
      "Gestion livreurs et clients",
      "Système d’évaluation",
    ],
    image: "/projects/logistique.jpg",
  },
  {
    title: "Plateforme d’annonces de véhicules",
    period: "12/2021 – 06/2022",
    type: "Laravel / PHP",
    category: "Laravel",
    tech: ["Laravel", "MySQL", "PHP"],
    desc: "Plateforme d’annonces automobiles avec filtrage et gestion des véhicules.",
    features: [
      "Publication d’annonces",
      "Filtrage avancé",
      "Gestion utilisateurs",
      "Contact annonceur",
    ],
    image: "/projects/voitures.jpg",
  },
  {
    title: "BNA",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress"],
    desc: "Banque national d'algerie ( finance islamique ) , gestion des different services de la banque plus creation d'un simulateur",
    features: [
    ],
    image: "/projects/wordpress12.jpg",
    url:"https://bna.dz/fi",
  },
  {
    title: "Infotrafique Algérie",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress"],
    desc: "Site d’information trafic en temps réel en Algérie.",
    features: [

    ],
    image: "/projects/wordpress8.jpg",
    url : "https://infotraficalgerie.dz/"
  },
  {
    title: "Numilog",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress", "SEO"],
    desc: "Plateforme logistique digitale pour gestion et suivi des opérations.",
    features: [
    ],
    image: "/projects/wordpress2.jpg",
    url:"https://numilog.dz/"
  },
  {
    title: "Victorilog",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress"],
    desc: "Site de services logistiques et solutions de transport.",
    features: [
    ],
    image: "/projects/wordpress3.jpg",
    url:"https://victorilog.dz/"
  },
  {
    title: "Victorimar",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress"],
    desc: "Site vitrine d’entreprise orienté industrie et commerce.",
    features: [
    ],
    image: "/projects/wordpress4.jpg",
    url: "https://victorimar.com/"
  },
  {
    title: "Smilmed Events",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress", "Elementor"],
    desc: "Site événementiel pour la gestion et promotion d’événements professionnels .",
    features: [
    ],
    image: "/projects/wordpress1.jpg",
    url:"https://smilemedevents.com/"
  },
  {
    title: "MZMotors",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress"],
    desc: "Site automobile pour présentation de véhicules et services mécaniques.",
    features: [
    ],
    image: "/projects/wordpress5.jpg",
    url: "https://mz-motors.com/"
  },
  {
    title: "Autolumiere",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress"],
    desc: "Plateforme automobile pour la vente et présentation de véhicules.",
    features: [
    ],
    image: "/projects/wordpress6.jpg",
    url: "https://autolumiere.dz/"
  },
  {
    title: "Itaswik",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress"],
    desc: "Site de services digitaux et solutions IT.",
    features: [
    ],
    image: "/projects/wordpress7.jpg",
    url : "http://itaswik.com/"
  },
  {
    title: "Belleville Citoyenne",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress"],
    desc: "Site communautaire et citoyen local.",
    features: [
    ],
    image: "/projects/wordpress9.jpg",
    "url": "https://bellevillecitoyenne.fr/"
  },
  {
    title: "IEUGov",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress"],
    desc: "Plateforme institutionnelle éducative et gouvernementale.",
    features: [
    ],
    image: "/projects/wordpress10.jpg",
  },
  {
    title: "Pigier",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress"],
    desc: "Site d’établissement de formation professionnelle.",
    features: [
    ],
    image: "/projects/wordpress11.jpg",
    url:"https://pigier-algerie.com/lang/"
  },
  {
    title: "Educalgpro",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress"],
    desc: "Plateforme éducative et orientation professionnelle.",
    features: [
    ],
    image: "/projects/wordpress12.jpg",
    url:"https://pigier-algerie.com/educalgpro"
  },
  {
    title: "Soubraz",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress"],
    desc: "Soubraz est une entreprise algérienne spécialisée dans la fabrication de métaux d’apports pour les brasures",
    features: [
    ],
    image: "/projects/wordpress12.jpg",
    url:"https://soubraz.com/"
  }
  ,
  {
    title: "Bivalent",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress , Woocomerce"],
    desc: "Boutique de vente en ligne de tshirt",
    features: [
    ],
    image: "/projects/wordpress12.jpg",
    url:"https://bivalent.dz/",
  },
  ,
  {
    title: "Nvlabo",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress , Woocomerce"],
    desc: "Boutique de vente en ligne de produits cosmetique",
    features: [
    ],
    image: "/projects/wordpress12.jpg",
    url:"https://nvlabo.com/",
  },
  {
    title: "Alramis Textile",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress , Woocomerce"],
    desc: "Boutique de vente en ligne de Salons, rideaux, tissus d’ameublement ou fauteuils",
    features: [
      "vente en ligne",
      "Salons, rideaux, tissus d’ameublement ou fauteuils",
    ],
    image: "/projects/wordpress12.jpg",
    url:"https://alramistextiles.com/",
  },
  {
    title: "Triktalk",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress"],
    desc: "Site evenementiel une journée pour parler de la route en Algérie",
    features: [
    ],
    image: "/projects/wordpress12.jpg",
    url:"https://triktalk.com/",
  }
  ,
  {
    title: "Agile algeria",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress"],
    desc: "Site evenementiel dedié a l'agilité en Algérie",
    features: [
    ],
    image: "/projects/wordpress12.jpg",
    url:"https://agilealgeria.com/",
  }
  ,
  {
    title: "Cosimad",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress"],
    desc: "Site vitrine pour la presentation de produits cosmetique",
    features: [
    ],
    image: "/projects/wordpress12.jpg",
    url:""
  }
   ,
  {
    title: "Djeziricom",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress"],
    desc: "Entreprise qui propose d’accompagner les entreprises par des services de conseil en communication",
    features: [
    ],
    image: "/projects/wordpress12.jpg",
    url:"https://djeziricom.com/"
  },
  {
    title: "Dareldjazairia",
    period: "WordPress",
    type: "WordPress",
    category: "WordPress",
    tech: ["WordPress"],
    desc: "partenaire en équipements scientifiques de laboratoire",
    features: [
    ],
    image: "/projects/wordpress12.jpg",
    url:"https://dareldjazairia.com/"
  }

 
 
];
export default projects