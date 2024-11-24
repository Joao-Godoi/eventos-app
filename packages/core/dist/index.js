"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Alias: () => Alias,
  DateUtil: () => DateUtil,
  Id: () => Id,
  Password: () => Password,
  completeEvent: () => completeEvent,
  completeGuest: () => completeGuest,
  generateEmptyEvent: () => generateEmptyEvent,
  generateEmptyGuest: () => generateEmptyGuest,
  mockEvents: () => mockEvents_default
});
module.exports = __toCommonJS(src_exports);

// src/constants/mockEvents.ts
var mockEvents = [
  {
    id: "21ff36d7-8fa7-495e-9339-d1687458b660",
    alias: "evento-fullstack",
    password: "password123",
    name: "Evento de Desenvolvimento Fullstack",
    date: /* @__PURE__ */ new Date("2024-12-01T10:00:00Z"),
    location: "S\xE3o Paulo, SP",
    description: "Um evento completo para aprender desenvolvimento fullstack do zero.",
    image: "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    backgroundImage: "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    limitGuests: 200,
    guests: [
      {
        id: "h1g2x30pglq-2qy7mc3nd8h-qq494djtbcq",
        name: "Alice Silva",
        email: "alice@example.com",
        confirmed: true,
        hasCompany: true,
        quantityCompany: 1
      },
      {
        id: "unzgczdy0gp-uqljtf756de-ibfnezyz5f",
        name: "Carlos Pereira",
        email: "carlos@example.com",
        confirmed: false,
        hasCompany: false,
        quantityCompany: 0
      },
      {
        id: "hqzmy1wi9gl-rgmibulirh-1k2twwu6waj",
        name: "Beatriz Lima",
        email: "beatriz@example.com",
        confirmed: true,
        hasCompany: true,
        quantityCompany: 2
      }
    ]
  },
  {
    id: "f4b18eb7-13c6-4bde-aa26-a9551a5c31f2",
    alias: "evento-js-avancado",
    password: "js2024",
    name: "Workshop Avan\xE7ado de JavaScript",
    date: /* @__PURE__ */ new Date("2024-11-20T15:00:00Z"),
    location: "Rio de Janeiro, RJ",
    description: "Um workshop avan\xE7ado para programadores JavaScript.",
    image: "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    backgroundImage: "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
    limitGuests: 100,
    guests: [
      {
        id: "epy7dvzdn-h5ffojxd8xf-4u3dbflvkcs",
        name: "Eduardo Santos",
        email: "eduardo@example.com",
        confirmed: true,
        hasCompany: false,
        quantityCompany: 0
      },
      {
        id: "q5pb671a0e-3a1txyighat-sbu67d47s8",
        name: "Fernanda Costa",
        email: "fernanda@example.com",
        confirmed: true,
        hasCompany: true,
        quantityCompany: 1
      }
    ]
  },
  {
    id: "3a588693-650e-4c6d-868e-9090ff5c07b3",
    alias: "evento-dev-frontend",
    password: "front123",
    name: "Bootcamp de Desenvolvimento Frontend",
    date: /* @__PURE__ */ new Date("2024-11-15T09:00:00Z"),
    location: "Belo Horizonte, MG",
    description: "Aprenda a criar interfaces incr\xEDveis e responsivas.",
    image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
    backgroundImage: "https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg",
    limitGuests: 150,
    guests: [
      {
        id: "8tpp19ouoqi-6nm51io1n5a-lw6itbwufu",
        name: "Gabriela Rocha",
        email: "gabriela@example.com",
        confirmed: true,
        hasCompany: true,
        quantityCompany: 1
      },
      {
        id: "a22ufkd5y2-6quz4dv5wln-qbbzwq551zs",
        name: "Hugo Nogueira",
        email: "hugo@example.com",
        confirmed: false,
        hasCompany: false,
        quantityCompany: 0
      },
      {
        id: "cyy99oylu4w-s6c387plg5k-uyieywntrh",
        name: "Isabela Martins",
        email: "isabela@example.com",
        confirmed: true,
        hasCompany: false,
        quantityCompany: 0
      }
    ]
  },
  {
    id: "7a0a5640-8e46-404d-bd90-dcba6589d57c",
    alias: "casamento-alberto-marina",
    password: "casamento2024",
    name: "Casamento do Alberto e Marina",
    date: /* @__PURE__ */ new Date("2024-11-25T16:00:00Z"),
    location: "Florian\xF3polis, SC",
    description: "Celebra\xE7\xE3o do casamento de Alberto e Marina com amigos e familiares.",
    image: "https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg",
    backgroundImage: "https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg",
    limitGuests: 150,
    guests: [
      {
        id: "6odwyyikpiu-4rm8d4upd7a-2ve4yb8dq2",
        name: "Bruno Cardoso",
        email: "bruno@example.com",
        confirmed: true,
        hasCompany: true,
        quantityCompany: 1
      },
      {
        id: "eg7lxxznuva-d4cnx48ijqt-iz6xznoo5ts",
        name: "Carla Mendes",
        email: "carla@example.com",
        confirmed: true,
        hasCompany: false,
        quantityCompany: 0
      }
    ]
  },
  {
    id: "5e25282b-cde5-45ff-9436-c4320d7c2f6f",
    alias: "aniversario-joao",
    password: "joao2024",
    name: "Anivers\xE1rio do Jo\xE3o - 30 Anos",
    date: /* @__PURE__ */ new Date("2024-12-05T18:00:00Z"),
    location: "Curitiba, PR",
    description: "Comemora\xE7\xE3o dos 30 anos de Jo\xE3o com amigos pr\xF3ximos e familiares.",
    image: "https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg",
    backgroundImage: "https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg",
    limitGuests: 80,
    guests: [
      {
        id: "ir1r1ucu2od-461dkhc72tm-ydo4met07uj",
        name: "Maria Souza",
        email: "maria@example.com",
        confirmed: true,
        hasCompany: true,
        quantityCompany: 2
      },
      {
        id: "95qacnirxwr-ffuhv3s0nd9-nsu3rl4djee",
        name: "Jos\xE9 Almeida",
        email: "jose@example.com",
        confirmed: false,
        hasCompany: false,
        quantityCompany: 0
      }
    ]
  },
  {
    id: "53ae44ec-30fb-4e5a-9b0b-a9fbedd8e3c1",
    alias: "inauguracao-loja-estrela",
    password: "estrela2024",
    name: "Inaugura\xE7\xE3o da Loja Estrela",
    date: /* @__PURE__ */ new Date("2024-12-10T09:00:00Z"),
    location: "Porto Alegre, RS",
    description: "Evento de inaugura\xE7\xE3o da nova loja Estrela com brindes e promo\xE7\xF5es.",
    image: "https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s",
    limitGuests: 300,
    guests: [
      {
        id: "c1a5x0qgus-cfswa77ods5-z4nn6bezylp",
        name: "Cl\xE1udia Lima",
        email: "claudia@example.com",
        confirmed: true,
        hasCompany: true,
        quantityCompany: 3
      },
      {
        id: "npsgd64c31a-c30fsot6cpk-sbsuwwahdda",
        name: "Ricardo Barbosa",
        email: "ricardo@example.com",
        confirmed: true,
        hasCompany: false,
        quantityCompany: 0
      }
    ]
  },
  {
    id: "65965e1c-8055-4795-b4a3-da93bbe97e31",
    alias: "reuniao-familia-oliveira",
    password: "familia2024",
    name: "Reuni\xE3o da Fam\xEDlia Oliveira",
    date: /* @__PURE__ */ new Date("2024-12-15T12:00:00Z"),
    location: "Salvador, BA",
    description: "Reuni\xE3o de fim de ano da fam\xEDlia Oliveira.",
    image: "https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg",
    backgroundImage: "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
    limitGuests: 50,
    guests: [
      {
        id: "oqsjw6lyayh-q9b8sxtkvu-9cmebgi34ru",
        name: "Thiago Oliveira",
        email: "thiago@example.com",
        confirmed: true,
        hasCompany: true,
        quantityCompany: 4
      },
      {
        id: "1wrml69nqd7-re2ywt674ic-vw5dbfxoj4q",
        name: "Let\xEDcia Oliveira",
        email: "leticia@example.com",
        confirmed: true,
        hasCompany: false,
        quantityCompany: 0
      }
    ]
  }
];
var mockEvents_default = mockEvents;

// src/event/utils/guest/validateGuest.ts
function validateGuest(guest) {
  const errors = [];
  const requiredFields = [
    ["name", "Name is required"],
    ["email", "Email is required"]
  ];
  requiredFields.forEach(([field, message]) => {
    if (!guest[field] || typeof guest[field] === "string" && guest[field].trim() === "") {
      errors.push(message);
    }
  });
  return errors;
}

// src/event/utils/guest/completeGuest.ts
function completeGuest(partialGuest) {
  const errors = validateGuest(partialGuest);
  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
  const quantityCompany = partialGuest.quantityCompany ?? 0;
  return {
    ...partialGuest,
    quantityCompany: quantityCompany > 0 ? quantityCompany : 0,
    hasCompany: partialGuest.confirmed && quantityCompany > 0
  };
}

// src/shared/Alias.ts
var Alias = class {
  static format(value) {
    return value.replace(/ /g, "-").toLowerCase();
  }
};

// src/shared/Id.ts
var import_uuid = require("uuid");
var Id = class {
  static generate() {
    return (0, import_uuid.v4)();
  }
  static isValid(id) {
    return (0, import_uuid.validate)(id);
  }
};

// src/shared/Password.ts
var Password = class {
  static generate(size = 15) {
    const upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specials = "!@#$%&*";
    const characters = [upperCharacters, lowerCharacters, numbers, specials];
    const password = [];
    for (let i = 0; i < size; i++) {
      const character = characters[Math.floor(Math.random() * characters.length)];
      password.push(character[Math.floor(Math.random() * character.length)]);
    }
    return password.join("");
  }
};

// src/shared/DateUtil.ts
var DateUtil = class {
  static formatDate(date = /* @__PURE__ */ new Date()) {
    const pad = (number) => number.toString().padStart(2, "0");
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  static parseDate(dateString) {
    const [year, month, day, hours, minutes] = dateString.split(/[-T:]/).map(Number);
    return new Date(year, month - 1, day, hours, minutes);
  }
};

// src/event/utils/event/validateEvent.ts
function validateEvent(event) {
  const errors = [];
  const requiredFields = [
    ["alias", "Alias is required"],
    ["name", "Name is required"],
    ["location", "Location is required"],
    ["description", "Description is required"],
    ["image", "Image is required"],
    ["backgroundImage", "Background image is required"]
  ];
  requiredFields.forEach(([field, message]) => {
    if (!event[field] || typeof event[field] === "string" && event[field].trim() === "") {
      errors.push(message);
    }
  });
  if (!event.date || event.date < /* @__PURE__ */ new Date()) {
    errors.push("Date must be a future date");
  }
  if (typeof event.limitGuests !== "number" || event.limitGuests <= 0) {
    errors.push("Limit guests must be a positive number");
  }
  if (event.guests && event.limitGuests && event.guests.length > event.limitGuests) {
    errors.push("Number of guests exceeds limit");
  }
  return errors;
}

// src/event/utils/event/completeEvent.ts
function completeEvent(partialEvent) {
  const errors = validateEvent(partialEvent);
  if (errors.length) {
    throw new Error(errors.join("\n"));
  }
  return {
    ...partialEvent,
    id: partialEvent.id ?? Id.generate(),
    password: partialEvent.password ?? Password.generate(),
    limitGuests: +(partialEvent.limitGuests ?? 1)
  };
}

// src/event/utils/event/generateEmptyEvent.ts
function generateEmptyEvent() {
  return {
    id: Id.generate(),
    name: "",
    date: /* @__PURE__ */ new Date(),
    location: "",
    description: "",
    image: "",
    backgroundImage: ""
  };
}

// src/event/utils/guest/generateEmptyGuest.ts
function generateEmptyGuest() {
  return {
    id: Id.generate(),
    name: "",
    email: "",
    confirmed: true,
    hasCompany: true,
    quantityCompany: 0
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alias,
  DateUtil,
  Id,
  Password,
  completeEvent,
  completeGuest,
  generateEmptyEvent,
  generateEmptyGuest,
  mockEvents
});
