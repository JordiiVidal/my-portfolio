export type Work = {
  id: number;
  title: string;
  description: string;
  company: string;
  current: boolean;
  stack: string[];
};

export type NavigationLink = {
  name: string;
};

export type Tecnology = {
  name: string;
  icon: string;
  stack: number; // 1 front - 2 back - 3 full
  experience: number;
  current: boolean;
};
