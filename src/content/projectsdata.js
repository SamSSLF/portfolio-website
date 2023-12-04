const projects = [
  {
    title: "TerraQi Renewable Energy Forecasting API",
    tags: [
      "Fullstack Web Development",
      "Machine Learning Model Development",
      "UI/UX",
    ],
    filter: ["featured", "dev", "ux"],
    description:
      "I trained a machine learning model on regional historical weather forecasts to predict wind energy generation potential anywhere in the UK and along its coasts. This model can be interacted with via REST API endpoints, facilitating a wide range of applications. Additionally, a web application was created to visualize the data available through the API.",
    imageSrc: new URL("../assets/tq-hero-3.png", import.meta.url).href,
    imageAlt: "hot air balloon festival",
    shortTitle: "terraqi",
    category: "Web Development",
  },
  {
    title: "Atmo Environmental Monitoring Portal",
    tags: ["UI/UX", "Agile Development", "Front-End Web Development"],
    filter: ["featured", "dev", "ux"],
    description:
      "Built the front-end of a real-time environmental monitoring portal using Vue.js and Tailwind.css. A user-centred design process was used to design the user experience of the portal and thus its user interface. I built Atmo’s first design system following Material Design guidelines, using “design tokens” to store and use styles across designs, code, tools and platforms.",
    imageSrc: new URL("../assets/atmo-hero-3.png", import.meta.url).href,
    imageAlt: "hot air balloon festival",
    shortTitle: "Atmo",
    category: "Web Development",
  },
  {
    title: "Fable Language-Learning Toy",
    tags: [
      "UI/UX",
      "Design Psychology",
      "User Testing",
      "Rapid Prototyping",
      "Graphic Design",
    ],
    filter: ["featured", "design", "ux"],
    description:
      "A behavioral intervention designed for children ages 3-7, rooted in empirical Self-Efficacy Theory from psychology literature, to enhance and support a child’s language acquisition journey.",
    imageSrc: new URL("../assets/fable-hero-4.png", import.meta.url).href,
    imageAlt: "fable hero image",
    shortTitle: "Fable",
    category: "Product Design",
  },
  {
    title: "Smart Gym Mobile App Design",
    tags: ["UI/UX", "Animation", "Figma", "Prototyping", "Lo-fi wireframing"],
    filter: ["featured", "design", "ux"],
    description:
      "Disrupting the personal fitness industry by personlising your gym workout with your very own personal trainer. I designed the user experience and user interface of a smart gym mobile application. Functionality requirements were translated into an interactive, high-fidelity prototype, complete with micro-animations.",
    imageSrc: new URL("../assets/stance-mockup-1.png", import.meta.url).href,
    imageAlt: "hot air balloon festival",
    shortTitle: "Stance",
    category: "Product Design",
  },
  {
    title: "Juno Circular Toy Company",
    tags: [
      "Circular Design",
      "Human-centered Design",
      "UI/UX",
      "Systems Design",
      "Sustainable Design and Manufacture",
    ],
    filter: ["design", "ux"],
    description:
      "A circular business model to address the wasteful nature of the children’s toy market. A systems design approach was used to identify and close waste streams within the lifecycle of a children’s toy, then a human-centred design approach was used to propose a design for toy sharing product-service system.",
    imageSrc: new URL("../assets/juno-hero.jpg", import.meta.url).href,
    imageAlt: "hot air balloon festival",
    shortTitle: "Juno",
    category: "Product Design",
  },
  {
    title: "Carbon Zero Home",
    tags: ["Thermodynamics", "Fluid Mechanics", "CAD"],
    filter: ["eng"],
    description:
      "The engineering design of retrofit interventions to deliver carbon neutral performance in a Victorian-style mews.",
    imageSrc: new URL("../assets/frontcut-cnh.jpg", import.meta.url).href,
    imageAlt: "hot air balloon festival",
    shortTitle: "carbon-zero-home",
    category: "Design Engineering",
  },
  {
    title: "Ergonomic Electric Wine Bottle Opener",
    tags: [
      "Industrial Design",
      "Technical Drawing",
      "Design for Manufacture",
      "Human-Centred Design",
    ],
    filter: ["ux", "design", "eng"],
    description:
      "An accessible electric wine bottle opener, designed for aging consumers. A human-centred design approach was used to synthesise design requirements, and a commercially viable product was proposed to fit within an existing product offering of a company of our choice. Materials an manufacturing techniques were carefully considered and specified in a production-ready data package which detailed the full assembly process, components, tolerances, fits, and colours, materials and finishes (CMF).",
    imageSrc: new URL("../assets/wine-opener-hero.jpg", import.meta.url).href,
    imageAlt: "hot air balloon festival",
    shortTitle: "ergonomic-wine-bottle-opener",
    category: "Design Engineering",
  },
  {
    title: "A Lightweight Tandem Bicycle Frame",
    tags: ["Finite Element Analysis", "CAD", "Solid Mechanics"],
    filter: ["eng"],
    description:
      "A lightweight tandem bicycle frame design, tested and optimised using finite element analysis. Finite element analysis was used to identify areas in the solid structure susceptible to failure from stress, so that adequate support may be applied to those areas and unnecessary material removed in non-stress intensive areas to reduce mass.",
    imageSrc: new URL("../assets/FEA-hero.jpg", import.meta.url).href,
    imageAlt: "hot air balloon festival",
    shortTitle: "tandem-bike",
    category: "Design Engineering",
  },
];

export default projects;
