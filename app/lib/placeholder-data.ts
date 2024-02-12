import { Category, Tecnology, WorkExperience } from "./definitions";

export const tecnologiesData: Tecnology[] = [
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
    icon: "typescript.svg",
    color: "#2274c4",
    experience: 3,
    current: true,
    category: Category.FRONTEND,
    isStack: true,
  },
  {
    id: 3,
    name: "Angular",
    icon: "angular.svg",
    color: "#ff44bf",
    experience: 3,
    current: true,
    category: Category.FRONTEND,
    isStack: true,
  },
  {
    id: 4,
    name: "jQuery",
    icon: "jquery.svg",
    color: "#265f99",
    experience: 5,
    current: true,
    category: Category.FRONTEND,
    isStack: true,
  },
  {
    id: 5,
    name: "Bootstrap",
    icon: "bootstrap.svg",
    color: "#7952b3",
    experience: 5,
    current: true,
    category: Category.FRONTEND,
    isStack: true,
  },
  {
    id: 6,
    name: "Material UI",
    icon: "angular-material.svg",
    color: "#feab3e",
    experience: 5,
    current: true,
    category: Category.FRONTEND,
    isStack: true,
  },
  {
    id: 7,
    name: "RxJS",
    icon: "rxjs.svg",
    color: "#c2185b",
    experience: 5,
    current: true,
    category: Category.FRONTEND,
    isStack: true,
  },
  {
    id: 8,
    name: "PHP",
    icon: "php.svg",
    color: "#495b7b",
    experience: 5,
    current: true,
    category: Category.BACKEND,
    isStack: true,
  },
  {
    id: 9,
    name: "Laravel",
    icon: "laravel.svg",
    color: "#dd2c14",
    experience: 3,
    current: true,
    category: Category.BACKEND,
    isStack: true,
  },
  {
    id: 10,
    name: "Codeigniter",
    icon: "codeigniter.svg",
    color: "#ee5031",
    experience: 1,
    current: false,
    category: Category.BACKEND,
    isStack: true,
  },
  {
    id: 11,
    name: "Java",
    icon: "java.svg",
    color: "#ffffff",
    experience: 3,
    current: true,
    category: Category.BACKEND,
    isStack: true,
  },
  {
    id: 12,
    name: "SQL",
    icon: "sqlserver.svg",
    color: "#1d74c4",
    experience: 1,
    current: false,
    category: Category.BACKEND,
    isStack: true,
  },
  {
    id: 13,
    name: "MySQL",
    icon: "mysql.svg",
    color: "#e49530",
    experience: 1,
    current: false,
    category: Category.BACKEND,
    isStack: true,
  },
  {
    id: 14,
    name: "Mongo.DB",
    icon: "mongodb.svg",
    color: "#619a5c",
    experience: 1,
    current: false,
    category: Category.BACKEND,
    isStack: true,
  },
  {
    id: 15,
    name: "Node.js",
    icon: "nodejs.svg",
    color: "#619a5c",
    experience: 1,
    current: false,
    category: Category.BACKEND,
    isStack: true,
  },
  {
    id: 16,
    name: "Flutter",
    icon: "flutter.svg",
    color: "#49cefa",
    experience: 1,
    current: false,
    category: Category.FRONTEND,
    isStack: true,
  },
  {
    id: 17,
    name: "Pyton",
    icon: "python.svg",
    color: "#f4d967",
    experience: 1,
    current: false,
    category: Category.BACKEND,
    isStack: false,
  },
];

export const workExperiencesData: WorkExperience[] = [
  {
    id: 1,
    company: "Audax Renovables",
    title: "Full-Stack Developer",
    description:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    current: true,
    startDate: "2021",
    endDate: "",
    tecnologies: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12],
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
    tecnologies: [1, 4, 5, 8, 10, 13, 16],
  },
  {
    id: 3,
    company: "Flumotion",
    title: "Full-Stack Developer",
    description:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    current: false,
    startDate: "2018",
    endDate: "2018",
    tecnologies: [1, 3, 14, 17],
  },
];
