"use client";

import React, { useEffect, useRef } from "react";
import AnimatedText from "../../ui/AnimatedText";
import Img from "../../ui/Img";
import { useScrollStore } from "@/store/useScrollStore";
import { heroContent } from "@/types/hero";

const Hero = ({ data }: { data: heroContent }) => {
  const { title, image, headingOne, headingTwo, animatedText } = data;
  const ref = useRef<HTMLDivElement | null>(null);
  const setSectionRef = useScrollStore((store) => store.setSectionRef);

  useEffect(() => {
    setSectionRef("home", ref.current);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="bg-[#070707] h-[30rem] md:h-[60rem]"
    >
      <div className="grid md:grid-cols-2 py-[8rem] md:py-[10rem] w-[80%] m-auto">
        <div className="text-white py-[2rem] md:py-[10rem]  w-full text-center md:text-left">
          <h6 className="text-[#9a9ca0] uppercase tracking-widest">{title}</h6>
          <h1 className=" text-3xl md:text-5xl font-extrabold my-3">
            {headingOne}
          </h1>
          <AnimatedText
            className=" text-3xl md:text-5xl font-bold my-3 text-[#f8044d]"
            multipleText={animatedText}
          />

          <h1 className=" text-2xl md:text-5xl font-bold my-3">{headingTwo}</h1>
        </div>
        <div className="hidden md:block">
          <Img className="rounded w-full " alt="User photo" src={image || ""} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
