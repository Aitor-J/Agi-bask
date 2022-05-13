const dataforest = [
  {
    id: 1,
    name: "Forêt de Chiberta",
    location: "Anglet",
    events: {
      dates: ["22-06-2022", "18-05-2022", "05-06-2022"],
      users: [
        ["Catherine", "Joseph", "Rémi"],
        ["Adeline", "Adeltrude", "Adonise"],
        ["Adrastée ", "Adrienne", "Agathe"],
      ],
    },
    desc: "Ses voies vertes sillonnent la forêt d'est en ouest et du nord au sud. Elles offrent d'infinies possibilités de circuits improvisés pour votre plus grand bonheur. Le parcours santé du Pignada propose un parcours sportif de 2 583 m.",
    img: "../public/assets/forest-img/chiberta.jpg",
    missions:
      "Ramassage des déchets et des préventions qu'on les feux de forêts",
  },
  {
    id: 2,
    name: "Forêt de Pignada",
    location: "Anglet",
    events: {
      dates: ["20-05-2022", "28-05-2022", "02-06-2022"],
      users: [
        ["Agilberte", "Agnane", "Agrippine"],
        ["Alaïs", "Albérade"],
        ["Albertine"],
      ],
    },
    desc: "Anglet est le point de rencontre de l’océan et de la forêt. Situé à deux pas des plages, cet espace boisé de 250 hectares couvre près de 10% de la superficie de la commune et comprend les forêts du Pignada et du Lazaret. Il offre un espace aménagé, ombragé et frais, propice aux promenades et à la pratique de nombreuses activités sportives. ",
    img: "../public/assets/forest-img/pignada.jpg",
    missions:
      "Promenage en forêt avec guide pour vous présenter les différentes plantes",
  },
  {
    id: 3,
    name: "Forêt du Lazaret",
    location: "Anglet",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Situé à deux pas des plages, cet espace boisé de 250 hectares couvre près de 10% de la superficie de la commune et comprend les forêt du Pignada et du Lazaret.",
    img: "../public/assets/forest-img/lazaret.jpg",
    missions:
      "Sensibilisation à l'impact humain sur l'environnement au travers de différents jeux",
  },

  {
    id: 4,
    name: "Forêt communale d'Hasparren",
    location: "Hasparren",
    events: {
      dates: ["20-05-2022"],
      users: [["Anthony"]],
    },
    desc: "Forêt au coeur du pays Basque, pour balades et randonnées",
    img: "./assets/forest-img/hasparren.jpg",
    missions:
      "Balade en forêt avec jeux pour sensibiliser sur les biens-faits du sport",
  },
  {
    id: 5,
    name: "Bois d'Ustaritz",
    location: "Ustaritz",
    events: {
      dates: ["04-06-2022", "10-06-2022"],
      users: [["Anthony"], ["Fred"]],
    },
    desc: "Au sud ouest de la commune et sur une superficie de 650 hectares, la forêt d'Ustaritz est l'endroit idéal pour se mettre au vert. Une belle promenade agrémentée de tables de pique-nique.",
    img: "../public/assets/forest-img/ustaritz.jpg",
    missions:
      "Balade en forêt avec jeux pour sensibiliser sur les biens-faits du sport",
  },

  {
    id: 6,
    name: "Forêt Communale d'Urt",
    location: "Urt",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Forêt aux essences végétales variées, parfaite pour balade en famille.",
    img: "./assets/forest-img/urt.jpg",
    missions: "Ramassage et revalorisation des déchets ",
  },
  {
    id: 7,
    name: "Bois de Fagosse",
    location: "Fagosse",
    events: {
      dates: ["18-05-2022", "24-05-2022", "04-06-2022"],
      users: [["Jérome"], ["Afred", "Hubert"], ["Stéphane", "Jimmy"]],
    },
    desc: "Bois très dense aux chemins sinueux au tour du golf de Chantaco",
    img: "../public/assets/forest-img/fagosse.jpg",
    missions:
      "Balade en forêt avec jeux pour sensibiliser sur les biens-faits du sport",
  },
  {
    id: 8,
    name: "Bois de Saint-Pée",
    location: "Saint-Pée",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Bois aux sentiers terreux, très humide avec beaucoup de champignons",
    img: "/assets/forest-img/saintpee.jpg",
    missions:
      "Balade en forêt avec jeux pour sensibiliser sur les biens-faits du sport",
  },
  {
    id: 9,
    name: "La Forêt des Lapins",
    location: "Itxassou",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Venez les découvrir au cours de visites pédestres guidées ou pas et observez en même temps la faune, la flore, les rapaces, et connaître l'histoire fabuleuse du lapin d'il y a 400 000 ans à nos jours...",
    img: "../public/assets/forest-img/lapin.jpg",
    missions: "Balade dans un parc à la découverte des lapins",
  },
  {
    id: 10,
    name: "Plaine d’Ansot",
    location: "Bayonne",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Située aux portes de Bayonne et le long de la Nive, la Plaine d’Ansot est un espace naturel sensible de 100 hectares offrant un ilot de verdure en zone périurbaine. Intégré au réseau Natura 2000, ce site réglementé est une zone de barthes, constituée d'une mosaïque de milieux naturels (bois, prairies, roselières, cours d'eau…) abritant une flore et une faune particulières.",
    img: "../public/assets/forest-img/ansot.jpg",
    mission:
      "Ramassage des déchets et sensibilisation au réchauffement climatique",
  },
];

export default dataforest;
