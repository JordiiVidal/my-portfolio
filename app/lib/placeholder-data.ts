import { Category, Tecnology, WorkExperience } from "./definitions";

export const tecnologies: Tecnology[] = [
  {
    id: 1,
    name: "JavaScript",
    icon: "javascript.png",
    color: "#373204",
    experience: 5,
    current: true,
    category: Category.FRONTEND,
  },
  {
    id: 2,
    name: "TypeScript",
    icon: "typescript.png",
    color: "#003159",
    experience: 3,
    current: true,
    category: Category.FRONTEND,
  },
  {
    id: 3,
    name: "Angular",
    icon: "angular.png",
    color: "red",
    experience: 3,
    current: true,
    category: Category.FRONTEND,
  },
  {
    id: 4,
    name: "jQuery",
    icon: "jquery.png",
    color: "blue",
    experience: 5,
    current: true,
    category: Category.FRONTEND,
  },
  {
    id: 5,
    name: "PHP",
    icon: "php.png",
    color: "pink",
    experience: 5,
    current: true,
    category: Category.BACKEND,
  },
  {
    id: 6,
    name: "Laravel",
    icon: "laravel.png",
    color: "red",
    experience: 3,
    current: true,
    category: Category.BACKEND,
  },
  {
    id: 7,
    name: "Java",
    icon: "java.png",
    color: "white",
    experience: 3,
    current: true,
    category: Category.BACKEND,
  },
  {
    id: 8,
    name: "Node.js",
    icon: "node.png",
    color: "green",
    experience: 1,
    current: false,
    category: Category.BACKEND,
  },
];

export const workExperiences: WorkExperience[] = [
  {
    id: 1,
    company: "Audax Renovables",
    title: "Full-Stack Developer",
    description:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    current: true,
    startDate: "2021",
    endDate: "",
    tecnologies: [1, 2, 3, 4],
  },
  {
    id: 2,
    company: "Agencia Ninja",
    title: "Full-Stack Developer",
    description:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    current: false,
    startDate: "2018",
    endDate: "2020",
    tecnologies: [1, 2, 3, 4],
  },
  {
    id: 3,
    company: "Flumotion",
    title: "Full-Stack Developer",
    description:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    current: false,
    startDate: "2016",
    endDate: "2016",
    tecnologies: [1, 2, 3, 4],
  },
];
