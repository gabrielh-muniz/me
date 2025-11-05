import {
  Home,
  Briefcase,
  PocketKnife,
  Folder,
  GraduationCap,
} from "lucide-react";

const NAVIGATION_DATA = [
  { id: 1, name: "Home", href: "/#home", icon: Home },
  { id: 4, name: "Projetos", href: "/#projects", icon: Folder },
  //{ id: 2, name: "Experiência", href: "/#experience", icon: Briefcase },
  { id: 3, name: "Habilidades", href: "/#skills", icon: PocketKnife },
  { id: 5, name: "Formação", href: "/#education", icon: GraduationCap },
];

const PERSONAL_DATA = {
  name: "Gabriel Muniz",
  location: "São José do Rio Preto, SP – Brasil",
  email: "gabrielhmuniiz@gmail.com",
  github: "https://github.com/gabrielh-muniz",
  linkedin: "www.linkedin.com/in/gabriel-muniz-494349315",
  profession: "Desenvolvedor Full Stack Jr",
  description:
    "Olá! Sou o Gabriel Muniz, um desenvolvedor Full Stack Jr com uma paixão por tecnologia e inovação. Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente e contribuir com soluções criativas.",
};

const WORK_EXPERIENCE = [
  {
    company: "Tech Solutions Ltda",
    location: "São José do Rio Preto, SP – Brasil",
    position: "Desenvolvedor Full Stack Jr",
    period: "Jan 2023 - Presente",
    achievements: [
      "Desenvolvi e mantive aplicações web utilizando React, Node.js e MongoDB, resultando em uma melhoria de 20% na eficiência do sistema.",
      "Colaborei com equipes multifuncionais para implementar novas funcionalidades, aumentando a satisfação do cliente em 15%.",
      "Participei ativamente de revisões de código e testes, garantindo a qualidade e a performance das aplicações entregues.",
    ],
  },
];

const SKILLS_DATA = {
  programmingLanguages: ["JavaScript", "Python"],
  frontendDevelopment: ["HTML", "CSS", "React", "Tailwind CSS", "Shadcn UI"],
  backendDevelopment: ["Node.js", "Express"],
  databaseAndStorage: ["PostgreSQL"],
  toolsAndServices: [
    "Git",
    "Docker",
    "VS Code",
    "Linux",
    "Postman",
    "Bash scripting",
    "Firebase Auth",
    "Zod",
  ],
};

const EDUCATIONAL_DATA = [
  {
    institution: "Fatec São José do Rio Preto",
    location: "São José do Rio Preto, SP - Brasil",
    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    period: "Junho 2022 - Junho 2026 (Cursando)",
    achievements: [],
  },
  {
    institution: "Universidade Julio de Mesquita Filho (UNESP) - IBILCE",
    location: "São José do Rio Preto, SP - Brasil",
    degree: "Ciencia da Computação",
    period: "Janeiro 2020 - Junho 2022 (Incompleto)",
    achievements: [],
  },
];

const PROJECTS_DATA = [
  {
    title: "Clicker",
    github: "https://github.com/gabrielh-muniz/pern-auth",
    description:
      "Aplicação web de clicker que permite aos usuários competir clicando em um botão o mais rápido possível. Inclui autenticação de usuários, ranking em tempo real e estatísticas de desempenho.",
    image: "/images/projects/001_project.png",
    imageAlt: "Screenshot of Clicker project",
    tags: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Resend",
      "Zod",
      "Passport.js",
      "Zustand",
    ],
  },
];

export {
  NAVIGATION_DATA,
  PERSONAL_DATA,
  WORK_EXPERIENCE,
  SKILLS_DATA,
  EDUCATIONAL_DATA,
  PROJECTS_DATA,
};
