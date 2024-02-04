import { Category, Tecnology, WorkExperience } from "./definitions";

export const tecnologies: Tecnology[] = [
  {
    id: 1,
    name: "JavaScript",
    icon: "javascript.svg",
    color: "#f8d93a",
    experience: 5,
    current: true,
    category: Category.FRONTEND,
    isStack: true,
  },
  {
    id: 2,
    name: "TypeScript",
    icon: "typescript.png",
    color: "#2274c4",
    experience: 3,
    current: true,
    category: Category.FRONTEND,
    isStack: true,
  },
  {
    id: 3,
    name: "Angular",
    icon: "angular.png",
    color: "#ff44bf",
    experience: 3,
    current: true,
    category: Category.FRONTEND,
    isStack: true,
  },
  {
    id: 4,
    name: "jQuery",
    icon: "jquery.png",
    color: "#265f99",
    experience: 5,
    current: true,
    category: Category.FRONTEND,
    isStack: true,
  },
  {
    id: 5,
    name: "PHP",
    icon: "php.png",
    color: "#495b7b",
    experience: 5,
    current: true,
    category: Category.BACKEND,
    isStack: true,
  },
  {
    id: 6,
    name: "Laravel",
    icon: "laravel.png",
    color: "#dd2c14",
    experience: 3,
    current: true,
    category: Category.BACKEND,
    isStack: true,
  },
  {
    id: 7,
    name: "Codeigniter",
    icon: "codeigniter.png",
    color: "#619a5c",
    experience: 1,
    current: false,
    category: Category.BACKEND,
    isStack: true,
  },
  {
    id: 8,
    name: "Java",
    icon: "java.png",
    color: "#ffffff",
    experience: 3,
    current: true,
    category: Category.BACKEND,
    isStack: true,
  },
  {
    id: 9,
    name: "SQL",
    icon: "sqlserver.svg",
    color: "#619a5c",
    experience: 1,
    current: false,
    category: Category.BACKEND,
    isStack: true,
  },
  {
    id: 10,
    name: "MySQL",
    icon: "mysql.svg",
    color: "#619a5c",
    experience: 1,
    current: false,
    category: Category.BACKEND,
    isStack: true,
  },
  {
    id: 11,
    name: "Mongo.DB",
    icon: "mongodb.png",
    color: "#619a5c",
    experience: 1,
    current: false,
    category: Category.BACKEND,
    isStack: false,
  },
  {
    id: 12,
    name: "Node.js",
    icon: "nodejs.svg",
    color: "#619a5c",
    experience: 1,
    current: false,
    category: Category.BACKEND,
    isStack: true,
  },
  {
    id: 13,
    name: "Flutter",
    icon: "flutter.png",
    color: "#619a5c",
    experience: 1,
    current: false,
    category: Category.BACKEND,
    isStack: true,
  },
  {
    id: 14,
    name: "Pyton",
    icon: "python.svg",
    color: "#619a5c",
    experience: 1,
    current: false,
    category: Category.BACKEND,
    isStack: false,
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
    tecnologies: [1, 2, 3, 4, 5, 6, 8, 9],
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
    tecnologies: [1, 4, 5, 7, 10, 13],
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
    tecnologies: [1, 3, 11, 14],
  },
];
