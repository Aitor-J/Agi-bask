const databeach = [
  {
    id: 1,
    name: "La Barre",
    length: "500m",
    location: "Anglet",
    events: {
      dates: [["15-05-2022"], ["25-05-2022"]],
      users: [
        ["Joséphine", "Pierre"],
        ["Antoine", "Roger"],
      ],
    },
    desc: "Plage prisée par les touristes, dût aux activités que l'on y retrouve, comme le skate, la patinoire, et notre très aimé McDonalds.",
    img: "./assets/beach-img/labarre.jpg",
    missions: "Ramassage et revalorisation des déchets marins",
  },
  {
    id: 2,
    name: "Les cavaliers",
    length: "630m",
    location: "Anglet",
    events: {
      dates: ["24-05-2022", "10-06-2022", "15-06-2022"],
      users: [
        ["Robert", "Xavier"],
        ["Eliane", "Malvina"],
        ["Salomon", "David"],
      ],
    },
    desc: "Plage familiale aux grandes étendues d'herbe, de quoi s'occuper en matière de ramssage de déchets, surtout le mercredi soir...",
    img: "./assets/beach-img/cavalier.jpg",
    missions:
      "Jeux éducatif sur l'apprentissage du tri selectif au travers du nettoyage des plages",
  },
  {
    id: 3,
    name: "Les Dunes",
    length: "410m",
    location: "Anglet",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Plage à tolérance nudiste, peu fréquenté mais personnes adultes et respectueuses du site en majorité, présence d'un bar en bord de mer avec jus détox au menu",
    img: "./assets/beach-img/dune.jpg",
    missions: "Ramassage des déchets et pique-nique à la plage",
  },
  {
    id: 4,
    name: "L'océan",
    length: "410m",
    location: "Anglet",
    events: {
      dates: ["05-06-2022", "10-06-2022"],
      users: [
        ["Joe", "Yohana"],
        ["Eliot", "Jeff"],
      ],
    },
    desc: "Voisine des dunes, plage plus sauvage que les autres et peu fréquentée par la jeunesse, on y trouve des plagistes plutôt respectueux de l'environnement dans l'ensemble.",
    img: "./assets/beach-img/ocean.jpg",
    missions:
      "Nettoyage de la plage au travers de jeux pour sensibiliser les plus jeunes",
  },
  {
    id: 5,
    name: "La Madrague",
    length: "460m",
    location: "Anglet",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Plage à caractère plus jeune, bien que prisée par les surfeurs, son emplacement idéal en fait un plage très fréquenté.",
    img: "./assets/beach-img/madrague.jpg",
    missions:
      "Jeux éducatif pour insiter les plus jeunes au respect de l'environnement",
  },
  {
    id: 6,
    name: "Les Corsaires",
    length: "380m",
    location: "Anglet",
    events: {
      dates: ["07-06-2022"],
      users: [["Dave", "Nat"]],
    },
    desc: "Plage familiale où il fait bon se prélasser, se dorer la pilule, très prise.",
    img: "./assets/beach-img/corsaire.jpg",
    missions: "Ramassage et revalorisation des déchets marins",
  },
  {
    id: 7,
    name: "Marinela",
    length: "400m",
    location: "Anglet",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "A l'instar de ses voisines, plage très prisée par les familles, avec une très forte concentration l'été.",
    img: "./assets/beach-img/marinela.jpg",
    missions: "Ramassage des déchets et pique-nique à la plage",
  },
  {
    id: 8,
    name: "Les sables d'or",
    length: "370m",
    location: "Anglet",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Face à la balade des sables d'or, plage fréquentée par une foule du matin au soir, avec bars restaurants et filets de volley-ball",
    img: "./assets/beach-img/sabledor.jpg",
    missions: "Ramassage et revalorisation des déchets marins",
  },
  {
    id: 9,
    name: "La chambre d'amour",
    length: "220m",
    location: "Anglet",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Comme son nom l'indique, la plage de la chambre d'amour possède une grotte réputée pour son histoire, où il ne fait pas bon aller quand la marée monte.",
    img: "./assets/beach-img/chambredamour.jpg",
    missions:
      "Jeux éducatif sur l'apprentissage du tri selectif au travers du nettoyage des plages",
  },
  {
    id: 10,
    name: "VFF",
    length: "600m",
    location: "Anglet",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Plage en bord de falaise, avec une vue imprenable sur le phare de Biarritz, et son indétrônable Village Vacancier de type Paquebot.",
    img: "./assets/beach-img/vff.jpg",
    missions: "Ramassage et revalorisation des déchets marins",
  },
  {
    id: 11,
    name: "Le Miramar",
    length: "380m",
    location: "Biarritz",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Plage en bord de falaise, avec une vue imprenable sur le phare de Biarritz, et son indétrônable Hotel de luxe du Miramar.",
    img: "./assets/beach-img/miramar.jpg",
    missions:
      "Jeux éducatif sur l'apprentissage du tri selectif au travers du nettoyage des plages",
  },
  {
    id: 12,
    name: "La grande plage",
    length: "600m",
    location: "Biarritz",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Connu à travers le monde, la grande plage de Biarritz réunies des milliers de touristes chaques années, avec son casino Barriere et sa vue époustouflante.",
    img: "./assets/beach-img/grandeplageb.jpg",
    missions:
      "Ramassage des déchets et sensibilisation au réchauffement climatique",
  },
  {
    id: 13,
    name: "La côte des Basques",
    length: "950m",
    location: "Biarritz",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Incroyable plage pour apprendre à surfer, elle disparait lors des marées hautes mais offrent des vagues de qualité pour les apprentis.",
    img: "./assets/beach-img/cotedesbasques.jpg",
    missions: "Nettoyage du littorale et pique nique",
  },
  {
    id: 14,
    name: "Marbella",
    length: "350m",
    location: "Biarritz",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Petite plage VIP pour les locaux biarrots, remplie de surfer d'une autre époque.",
    img: "./assets/beach-img/marbella.jpg",
    missions:
      "Ramassage des déchets et sensibilisation au réchauffement climatique",
  },
  {
    id: 15,
    name: "Milady",
    length: "460m",
    location: "Biarritz",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Grande plage très fréquentée par les Biarrots. Promenade aménagée en bord de mer . Aire de jeux pour les enfants. Activité Handiplage avec tiralos et Handisurf avec accès direct à la mer. A marée montante, le shore break peut être assez brutal.",
    img: "./assets/beach-img/milady.jpg",
    missions: "Jeux éducatif pour apprendre le tri selectif aux plus jeunes",
  },
  {
    id: 16,
    name: "Ilbaritz",
    length: "1OO0m",
    location: "Biarritz",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Sur un peu plus de 300m de sable, vous pourrez pleinement profiter de cette plage de la Côte Basque qui est surveillée pendant la saison estivale, de mi juin à fin octobre. Les sportifs pourront également s’adonner au golf sur un très beau parcours qui entoure & surplombe la plage.",
    img: "./assets/beach-img/ilbaritz.jpg",
    missions: "Ramassage des déchets et valorisation du sport sur la santé",
  },
  {
    id: 17,
    name: "Erretegia",
    length: "190m",
    location: "Bidart",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "La plage d'Erretegia se situe à proximité de Bidart Centre mais à l’écart du centre-ville dans un cadre verdoyant et naturel qui s’étend sur plusieurs centaines de mètres.",
    img: "./assets/beach-img/erretegia.jpg",
    missions:
      "Jeux éducatif pour insiter les plus jeunes au respect de l'environnement",
  },
  {
    id: 18,
    name: "L'uhabia",
    length: "790m",
    location: "Bidart",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "C’est une large plage de sable, la plus grande de la commune, mais également la plus accessible. Elle est labellisée Handiplage",
    img: "./assets/beach-img/luhabia.jpg",
    missions: "Ramassage et revalorisation des déchets marins",
  },
  {
    id: 19,
    name: "Bahia Beach",
    length: "415m",
    location: "Bidart",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Plage privée Vias Plage. C'est une expérience à part que de découvrir le Bahia Beach Vias Plage Concentrés d'Indonésie et de contemporain nous transportent dans ce lieu zen et moderne, dépaysement garantie !",
    img: "./assets/beach-img/bahia.jpg",
    missions:
      "Jeux éducatif pour insiter les plus jeunes au respect de l'environnement",
  },
  {
    id: 20,
    name: "Parlementia",
    length: "330m",
    location: "Guéthary",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "La plage de Parlementia est la plage le plus au sud de Bidart, à la limite avec le village de Guéthary. Cette plage de sable est assez rocheuse et très prisée pour le surf. Le cadre est naturel et intimiste avec d’un côté les maisons basques de Bidart et de l’autre le petit village et le port de Guéthary.",
    img: "./assets/beach-img/parlementia.jpg",
    missions:
      "Jeux éducatif pour insiter les plus jeunes au respect de l'environnement",
  },
  {
    id: 21,
    name: "Mayarco",
    length: "420m",
    location: "Guéthary",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Cette plage de sable est toute proche des campings du quartier d’Acotz. Mini-golf au bord de la plage.",
    img: "./assets/beach-img/mayarco.jpg",
    missions: "Ramassage et revalorisation des déchets marins",
  },
  {
    id: 22,
    name: "Lafitenia",
    length: "720m",
    location: "Guéthary",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Cette plage est le coin préféré des surfeurs confirmés qui affronteront la vague gauche de rochers située un peu au large.",
    img: "./assets/beach-img/lafintenia.jpg",
    missions:
      "Jeux éducatif sur l'apprentissage du tri selectif au travers du nettoyage des plages",
  },
  {
    id: 23,
    name: "Erromardie",
    length: "1000m",
    location: "Saint-Jean-de-Luz",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "C'est une plage tranquille où il est indispensable de venir avec son seau et son épuisette à marée basse pour chercher les crabes dans les rochers apparents.",
    img: "./assets/beach-img/erromardie.jpg",
    missions:
      "Jeux éducatif pour insiter les plus jeunes au respect de l'environnement",
  },
  {
    id: 24,
    name: "Grande plage",
    length: "1 km",
    location: "Saint-Jean-de-Luz",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Au bord d’une des plus belles baies du monde, à deux minutes à pied de la Place Louis XIV et du port, la Grande Plage est la plage incontournable de Saint-Jean-de-Luz. Sable fin, plan d’eau calme protégé par trois digues, la plage idéale pour toute la famille et notamment avec des enfants en bas âge. S’y retrouvent plusieurs générations de luziens.",
    img: "./assets/beach-img/grandeplagestjean.jpg",
    missions:
      "Jeux éducatif sur l'apprentissage du tri selectif au travers du nettoyage des plages",
  },
  {
    id: 25,
    name: "Plage de Ciboure",
    length: "192m",
    location: "Ciboure",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "L'océan y est beaucoup plus calme que chez ses voisines de la Côte Basque grâce aux 3 digues construites au XIXème siècle et qui protègent la baie des assauts de la mer.",
    img: "./assets/beach-img/ciboure.jpg",
    missions: "Ramassage et revalorisation des déchets marins",
  },
  {
    id: 26,
    name: "Plage d'Hendaye",
    length: "2,5 km",
    location: "Hendaye",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: `Considérée comme "piste verte" pour apprendre le surf, elle est aussi labellisée "Handiplage", facilitant la baignade des personnes à mobilité réduite. Elle figure depuis 2015 dans le TOP 10 des meilleures plages françaises, sur le site d'avis Tripadvisor !`,
    img: "./assets/beach-img/hendaye.jpg",
    missions:
      "Jeux éducatif sur l'apprentissage du tri selectif au travers du nettoyage des plages",
  },
];

export default databeach;
