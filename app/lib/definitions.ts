export type WorkExperience = {
  id: number;
  title: string;
  description: string;
  company: string;
  current: boolean;
  startDate: string;
  endDate: string;
  tecnologies: number[];
};

export enum Category {
  FRONTEND = 1,
  BACKEND = 2,
}

export type Tecnology = {
  id: number;
  name: string;
  icon: string;
  experience: number;
  current: boolean;
  color: string;
  category: Category;
  isStack: boolean;
};
