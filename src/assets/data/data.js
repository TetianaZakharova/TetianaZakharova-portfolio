import readingKyiv from "../projects/kyivreading-3.png";
import farmadol from "../projects/Farmak-2.png";
import dashaMalahova from "../projects/Dasha-2.png";
import oksanaGurina from "../projects/PMportfolio-2.png";
import emiorad from "../projects/emiorad.png";
import finTracker from "../projects/tracker.png";
import diagrams from "../projects/d3-diagrams.png";
import knostic from "../projects/Knostic.png";
import threatstop from "../projects/Threatstop.png";
import senserva from "../projects/Senserva.png";
import netwall from "../projects/Netwall2.png";

export const workexperience = [
  {
    id: 1,
    name: "Deloitte & Touche LLP",
    role: "React Front-end Developer",
    date: "July 2021 - Dec 2023",
    responsibilities: [
      "Migration project from AngularJS to React.",
      "In a team of two (with a Senior developer) we created from scratch a ZTNA Software portal for clients with Global State, Axios, MultiStep registration form, D3 Diagrams and tables.",
    ],
    stack: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Redux/Redux Toolkit",
      "Axios",
      "Mui",
      "Formik",
      "Yup",
      "D3.js",
      "Chart.js",
      "Sass (SCSS)",
      "Bootstrap",
    ],
    type: "full time | remote",
  },
  {
    id: 2,
    name: "TransientX Inc",
    role: "Front-end Developer",
    date: "Dec 2020 – July 2021",
    responsibilities: [
      "Created from scratch a web-site with a multi-step registration form on JS.",
      "Updated features on demand of the team.",
      "The purpose of this web-site was to sell a product of the company - the client portal.",
      "The product was bought by Deloitte & Touche shortly after the site was released.",
    ],
    stack: ["WordPress", "JavaScript", "CSS3", "Bootstrap", "SVG"],
    type: "full time | remote",
  },
  {
    id: 3,
    name: "DL Agency",
    role: "Front-end Developer",
    date: "June 2020 - Dec 2020",
    responsibilities: [
      "Were created a web-sites with WordPress Advanced Custom Fields for clients.",
      "Created custom WP Themes",     
    ],
    stack: [
      "WordPress ACF",
      "PHP",
      "JavaScript",
      "Sass (SCSS)",
      "Bootstrap",
      "JQuery",
    ],
    type: "full time | onsite",
  },
];

export const projects = [
  {
    id: 9,
    title: "Threatstop",
    src: `${threatstop}`,
    description:
      "HubSpot CMS. ThreatStop - cybersecurity solutions for companies.",
    link: "https://www.threatstop.com/",
  },
  {
    id: 11,
    title: "Net-wall",
    src: `${netwall}`,
    description:
      "HubSpot CMS. Net-Wall - Cybersecurity Products and Services in Montreal.",
    link: "https://www.net-wall.com/",
  },
  {
    id: 8,
    title: "Knostic",
    src: `${knostic}`,
    description:
      "HubSpot CMS. Knostic - the world’s first provider of need-to-know access controls for Generative AI.",
    link: "https://www.knostic.ai/",
  },
  {
    id: 4,
    title: "Marketing PM Portfolio",
    src: `${oksanaGurina}`,
    description: "Portfolio for Marketing PM Oksana Gurina.",
    link: "https://tetianazakharova.github.io/OksanaGurina-portfolio/",
    source: "https://github.com/TetianaZakharova/OksanaGurina-portfolio",
  },
  {
    id: 10,
    title: "Senserva",
    src: `${senserva}`,
    description:
      "HubSpot CMS. Senserva - Custom Security Automation for the Microsoft Platform",
    link: "https://senserva.com/",
  },
  {
    id: 7,
    title: "D3.js Diagrams",
    src: `${diagrams}`,
    description: "Charts and graph to help you visualize your data easily.",
    link: "https://tetianazakharova.github.io/diagrams-d3/",
    source: "https://github.com/TetianaZakharova/diagrams-d3",
  },

  {
    id: 1,
    title: "Reading Kyiv",
    src: `${readingKyiv}`,
    description: "WordPress - The project that reveals Kyiv through Ukrainian literature.",
    link: "https://www.readingkyiv.net/en/",
  },
  {
    id: 2,
    title: "Farmak - Farmadol",
    src: `${farmadol}`,
    description:
      "Farmak - the Ukrainian pharmaceutical exporter of medicinal products.",
    link: "https://farmak.ua/en/drugs/farmadol/",
  },
  {
    id: 3,
    title: "Dasha Malakhova",
    src: `${dashaMalahova}`,
    description:
      "Website for Dasha Malakhova - Ukrainian theater and cinema actress, TV presenter.",
    link: "https://dashamalakhova.com/projects/my-theatre/",
  },
  {
    id: 5,
    title: "Emiorad Login Interface (TT)",
    src: `${emiorad}`,
    description:
      "Task: create an integrated version of the Emiorad Login UI using React and Authentication API specification.",
    link: "https://tetianazakharova.github.io/login-api-interface/",
    source: "https://github.com/TetianaZakharova/login-api-interface",
  },
  {
    id: 6,
    title: "Finance Tracker + Login form (TT)",
    src: `${finTracker}`,
    description:
      "Task: create personal Finance Tracker with SignUP and Login. use FireBase.",
    link: "https://financetracker-81392.web.app/login",
    source: "https://github.com/TetianaZakharova/finance-tracker",
  },
];
