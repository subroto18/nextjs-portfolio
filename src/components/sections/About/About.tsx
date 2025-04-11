import React from "react";
import Img from "../../ui/Img";
import CareerSummary from "./CareerSummary";
import { careerSummaryType } from "@/types/careerSummary";

async function getCareerSummary(): Promise<careerSummaryType[]> {
  const data = [
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
  ];
  return data;
}

const About = async () => {
  const data = await getCareerSummary();
  return (
    <section id="about" className="bg-[#191919] ">
      <div className="grid grid-cols-3 w-[80%] m-auto py-[5rem]">
        <div className="">
          <Img
            className="rounded"
            src="https://trydo.rainbowit.net/assets/images/about/about-8.jpg"
          />
        </div>
        <div className="col-span-2 py-5 px-[4rem] text-white">
          <h1 className="heading">About Me</h1>
          <p className="description">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered <a href="#">alteration</a> in some form,
            by injected humour, or randomised words which dont look even
            slightly believable. If you are going to use a passage of Lorem
            Ipsum,
          </p>

          <CareerSummary data={data} />
        </div>
      </div>
    </section>
  );
};

export default About;
