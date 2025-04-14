import { aboutContent } from "@/types/about";
import React from "react";
import About from "./About";

export const revalidate = 86400; // revalidate every hour

export const getAboutContent = async (): Promise<aboutContent> => {
  const data = {
    sectionTitle: "About Me",
    sectionDescription:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,",
    image: "https://trydo.rainbowit.net/assets/images/about/about-8.jpg",
    category: [
      {
        id: 1,
        category: "Main skills",
        title: "User experience design - UI/UX",
        description: "Delight the user and make it work.",
        link: "",
      },

      {
        id: 2,
        category: "Main skills",
        title: "Web and user interface design - Development",
        description: "Websites, web experiences, ...",
        link: "",
      },
      {
        id: 3,
        category: "Main skills",
        title: "Interaction design - Animation",
        description: "I like to move it move it.",
        link: "",
      },
      {
        id: 4,
        category: "Awards",
        title: "Awwwards.com - Winner",
        description: "2019 - 2020",
        link: "",
      },
      {
        id: 5,
        category: "Awards",
        title: "CSS Design Awards - Winner",
        description: "2017 - 2018",
        link: "",
      },
      {
        id: 6,
        category: "Experience",
        title: "Sr. Front-end Engineer - Google",
        description: "2018 - Current",
        link: "",
      },
      {
        id: 7,
        category: "Experience",
        title: "Sr. Front-end Engineer - Google",
        description: "2018 - Current",
        link: "",
      },
      {
        id: 8,
        category: "Experience",
        title: "Software Engineer - Alibaba",
        description: "2018 - Current",
        link: "",
      },

      {
        id: 9,
        category: "Education & Certification",
        title: "BSc In CSE - ABC University, Los Angeles, CA",
        description: "2010",
        link: "",
      },
      {
        id: 10,
        category: "Education & Certification",
        title: "Diploma in Computer Science - Gamma Technical Institute",
        description: "2010",
        link: "",
      },
      {
        id: 11,
        category: "Education & Certification",
        title: "Diploma in Computer Science - Gamma Technical Institute",
        description: "2010",
        link: "",
      },
    ],
  };
  return data;
};

const Index = async () => {
  const response = await getAboutContent();

  return <About data={response} />;
};

export default Index;
