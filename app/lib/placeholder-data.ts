import { NavigationLink, Tecnology, Work } from "./definitions";

export const works: Work[] = [
  {
    id: 1,
    title: "Full-Stack Developer",
    description:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    company: "Audax Renovables",
    current: true,
    stack: [],
  },
];

export const headerNavigation: NavigationLink[] = [
  { name: "Home" },
  { name: "Work" },
  { name: "Stack" },
  { name: "Projects" },
];

export const tecnologies: Tecnology[] = [
  {
    name: "JavaScript",
    icon: "javascript.png",
    stack: 1,
    experience: 5,
    current: true,
  },
  {
    name: "TypeScript",
    icon: "typescript.png",
    stack: 1,
    experience: 3,
    current: true,
  },
  {
    name: "Angular",
    icon: "angular.png",
    stack: 1,
    experience: 3,
    current: true,
  },
  {
    name: "jQuery",
    icon: "jquery.png",
    stack: 1,
    experience: 5,
    current: true,
  },
  {
    name: "PHP",
    icon: "php.png",
    stack: 2,
    experience: 5,
    current: true,
  },
  {
    name: "Laravel",
    icon: "laravel.png",
    stack: 2,
    experience: 3,
    current: true,
  },
  {
    name: "Java",
    icon: "java.png",
    stack: 2,
    experience: 3,
    current: true,
  },
  {
    name: "Node.js",
    icon: "node.png",
    stack: 2,
    experience: 1,
    current: false,
  },
];
