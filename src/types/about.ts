export type aboutContent = {
  sectionTitle: string;
  sectionDescription: string;
  image: string;
  category: {
    id: number;
    category: string;
    title: string;
    description: string;
    link?: string;
  }[];
};
