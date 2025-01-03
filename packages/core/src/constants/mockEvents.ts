import { IEvent } from "../event";

const mockEvents: IEvent[] = [
  {
    id: "21ff36d7-8fa7-495e-9339-d1687458b660",
    alias: "evento-fullstack",
    password: "password123",
    name: "Evento de Desenvolvimento Fullstack",
    date: new Date("2024-12-01T10:00:00Z"),
    location: "São Paulo, SP",
    description:
      "Um evento completo para aprender desenvolvimento fullstack do zero.",
    image:
      "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    backgroundImage:
      "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    limitGuests: 200,
    guests: [
      {
        id: "h1g2x30pglq-2qy7mc3nd8h-qq494djtbcq",
        name: "Alice Silva",
        email: "alice@example.com",
        confirmed: true,
        hasCompany: true,
        quantityCompany: 1,
      },
      {
        id: "unzgczdy0gp-uqljtf756de-ibfnezyz5f",
        name: "Carlos Pereira",
        email: "carlos@example.com",
        confirmed: false,
        hasCompany: false,
        quantityCompany: 0,
      },
      {
        id: "hqzmy1wi9gl-rgmibulirh-1k2twwu6waj",
        name: "Beatriz Lima",
        email: "beatriz@example.com",
        confirmed: true,
        hasCompany: true,
        quantityCompany: 2,
      },
    ],
  },
  {
    id: "f4b18eb7-13c6-4bde-aa26-a9551a5c31f2",
    alias: "evento-js-avancado",
    password: "js2024",
    name: "Workshop Avançado de JavaScript",
    date: new Date("2024-11-20T15:00:00Z"),
    location: "Rio de Janeiro, RJ",
    description: "Um workshop avançado para programadores JavaScript.",
    image:
      "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    backgroundImage:
      "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
    limitGuests: 100,
    guests: [
      {
        id: "epy7dvzdn-h5ffojxd8xf-4u3dbflvkcs",
        name: "Eduardo Santos",
        email: "eduardo@example.com",
        confirmed: true,
        hasCompany: false,
        quantityCompany: 0,
      },
      {
        id: "q5pb671a0e-3a1txyighat-sbu67d47s8",
        name: "Fernanda Costa",
        email: "fernanda@example.com",
        confirmed: true,
        hasCompany: true,
        quantityCompany: 1,
      },
    ],
  },
  {
    id: "3a588693-650e-4c6d-868e-9090ff5c07b3",
    alias: "evento-dev-frontend",
    password: "front123",
    name: "Bootcamp de Desenvolvimento Frontend",
    date: new Date("2024-11-15T09:00:00Z"),
    location: "Belo Horizonte, MG",
    description: "Aprenda a criar interfaces incríveis e responsivas.",
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
    backgroundImage:
      "https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg",
    limitGuests: 150,
    guests: [
      {
        id: "8tpp19ouoqi-6nm51io1n5a-lw6itbwufu",
        name: "Gabriela Rocha",
        email: "gabriela@example.com",
        confirmed: true,
        hasCompany: true,
        quantityCompany: 1,
      },
      {
        id: "a22ufkd5y2-6quz4dv5wln-qbbzwq551zs",
        name: "Hugo Nogueira",
        email: "hugo@example.com",
        confirmed: false,
        hasCompany: false,
        quantityCompany: 0,
      },
      {
        id: "cyy99oylu4w-s6c387plg5k-uyieywntrh",
        name: "Isabela Martins",
        email: "isabela@example.com",
        confirmed: true,
        hasCompany: false,
        quantityCompany: 0,
      },
    ],
  },
  {
    id: "7a0a5640-8e46-404d-bd90-dcba6589d57c",
    alias: "casamento-alberto-marina",
    password: "casamento2024",
    name: "Casamento do Alberto e Marina",
    date: new Date("2024-11-25T16:00:00Z"),
    location: "Florianópolis, SC",
    description:
      "Celebração do casamento de Alberto e Marina com amigos e familiares.",
    image:
      "https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg",
    backgroundImage:
      "https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg",
    limitGuests: 150,
    guests: [
      {
        id: "6odwyyikpiu-4rm8d4upd7a-2ve4yb8dq2",
        name: "Bruno Cardoso",
        email: "bruno@example.com",
        confirmed: true,
        hasCompany: true,
        quantityCompany: 1,
      },
      {
        id: "eg7lxxznuva-d4cnx48ijqt-iz6xznoo5ts",
        name: "Carla Mendes",
        email: "carla@example.com",
        confirmed: true,
        hasCompany: false,
        quantityCompany: 0,
      },
    ],
  },
  {
    id: "5e25282b-cde5-45ff-9436-c4320d7c2f6f",
    alias: "aniversario-joao",
    password: "joao2024",
    name: "Aniversário do João - 30 Anos",
    date: new Date("2024-12-05T18:00:00Z"),
    location: "Curitiba, PR",
    description:
      "Comemoração dos 30 anos de João com amigos próximos e familiares.",
    image:
      "https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg",
    backgroundImage:
      "https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg",
    limitGuests: 80,
    guests: [
      {
        id: "ir1r1ucu2od-461dkhc72tm-ydo4met07uj",
        name: "Maria Souza",
        email: "maria@example.com",
        confirmed: true,
        hasCompany: true,
        quantityCompany: 2,
      },
      {
        id: "95qacnirxwr-ffuhv3s0nd9-nsu3rl4djee",
        name: "José Almeida",
        email: "jose@example.com",
        confirmed: false,
        hasCompany: false,
        quantityCompany: 0,
      },
    ],
  },
  {
    id: "53ae44ec-30fb-4e5a-9b0b-a9fbedd8e3c1",
    alias: "inauguracao-loja-estrela",
    password: "estrela2024",
    name: "Inauguração da Loja Estrela",
    date: new Date("2024-12-10T09:00:00Z"),
    location: "Porto Alegre, RS",
    description:
      "Evento de inauguração da nova loja Estrela com brindes e promoções.",
    image:
      "https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png",
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s",
    limitGuests: 300,
    guests: [
      {
        id: "c1a5x0qgus-cfswa77ods5-z4nn6bezylp",
        name: "Cláudia Lima",
        email: "claudia@example.com",
        confirmed: true,
        hasCompany: true,
        quantityCompany: 3,
      },
      {
        id: "npsgd64c31a-c30fsot6cpk-sbsuwwahdda",
        name: "Ricardo Barbosa",
        email: "ricardo@example.com",
        confirmed: true,
        hasCompany: false,
        quantityCompany: 0,
      },
    ],
  },
  {
    id: "65965e1c-8055-4795-b4a3-da93bbe97e31",
    alias: "reuniao-familia-oliveira",
    password: "familia2024",
    name: "Reunião da Família Oliveira",
    date: new Date("2024-12-15T12:00:00Z"),
    location: "Salvador, BA",
    description: "Reunião de fim de ano da família Oliveira.",
    image:
      "https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg",
    backgroundImage:
      "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
    limitGuests: 50,
    guests: [
      {
        id: "oqsjw6lyayh-q9b8sxtkvu-9cmebgi34ru",
        name: "Thiago Oliveira",
        email: "thiago@example.com",
        confirmed: true,
        hasCompany: true,
        quantityCompany: 4,
      },
      {
        id: "1wrml69nqd7-re2ywt674ic-vw5dbfxoj4q",
        name: "Letícia Oliveira",
        email: "leticia@example.com",
        confirmed: true,
        hasCompany: false,
        quantityCompany: 0,
      },
    ],
  },
];

export default mockEvents;
