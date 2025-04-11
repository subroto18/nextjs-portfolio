"use client";
import React from "react";
import AnimatedText from "../ui/AnimatedText";

const Hero = () => {
  const lines = ["JS Developer", "Frontend Enginer"];

  return (
    <section id="hero" className="bg-[#070707] ">
      <div className="grid grid-cols-2 py-5 w-[80%] m-auto bg-[url('/sub.png')] bg-no-repeat bg-right bg-contain ">
        <div className="text-white py-[10rem]  w-full">
          <h6 className="text-[#9a9ca0] uppercase tracking-widest">
            Welcome to my world
          </h6>
          <h1 className="text-4xl font-bold my-3">
            Hi, Im Subroto chakraborty
          </h1>
          <AnimatedText
            className="text-4xl font-bold my-3 text-[#f8044d]"
            multipleText={lines}
          />

          <h1 className="text-4xl font-bold my-3">Based in India</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
