"use client";
import React, { useEffect, useRef } from "react";
import Img from "../../ui/Img";
import CareerSummary from "./CareerSummary";
import { aboutContent } from "@/types/about";
import { useScrollStore } from "@/store/useScrollStore";

const About = ({ data }: { data: aboutContent }) => {
  const { sectionTitle, sectionDescription, image, category } = data;

  const ref = useRef<HTMLDivElement | null>(null);
  const setSectionRef = useScrollStore((store) => store.setSectionRef);

  useEffect(() => {
    setSectionRef("about", ref.current);
  }, []);

  return (
    <section id="about" className="bg-[#191919] ">
      <div className="grid grid-cols-1 md:grid-cols-3 w-[90%] m-auto py-[5rem]">
        <div className="">
          <Img className="rounded" src={image} />
        </div>
        <div className="col-span-2 py-5 md:px-[4rem] text-white">
          <h1 className="text-[#ededed]  text-4xl md:text-5xl  ">
            {sectionTitle}
          </h1>
          <p className="description my-2">{sectionDescription}</p>

          <CareerSummary data={category} />
        </div>
      </div>
    </section>
  );
};

export default About;
