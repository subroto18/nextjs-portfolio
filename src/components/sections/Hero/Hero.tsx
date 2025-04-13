"use client";

import React, { useEffect, useRef } from "react";
import AnimatedText from "../../ui/AnimatedText";
import Img from "../../ui/Img";
import { useScrollStore } from "@/store/useScrollStore";

const Hero = () => {
  const lines = ["JS Developer", "Frontend Enginer"];

  const ref = useRef<HTMLDivElement | null>(null);

  const setSectionRef = useScrollStore((store) => store.setSectionRef);

  useEffect(() => {
    setSectionRef("home", ref.current);
  }, []);

  return (
    <section ref={ref} id="home" className="bg-[#070707] h-[30rem] md:h-screen">
      <div className="grid md:grid-cols-2 py-[8rem] md:py-[8rem] w-[80%] m-auto">
        <div className="text-white py-[2rem] md:py-[10rem]  w-full text-center md:text-left">
          <h6 className="text-[#9a9ca0] uppercase tracking-widest">
            Welcome to my world
          </h6>
          <h1 className=" text-3xl md:text-5xl font-extrabold my-3">
            Hi, I'm Subroto
          </h1>
          <AnimatedText
            className=" text-3xl md:text-5xl font-bold my-3 text-[#f8044d]"
            multipleText={lines}
          />

          <h1 className=" text-2xl md:text-5xl font-bold my-3">
            Based in India
          </h1>
        </div>
        <div className="hidden md:block">
          <Img
            className="rounded"
            src="https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/475214094_476431662179863_3900306950900823586_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=hCCqXgKNb8MQ7kNvwEsY8CB&_nc_oc=AdmgkuESG21fTaxuSVl6vBBvtHzvaQOxAIDN1_uIZKQtqpLb0LUWgB9XVJocF7OY4WTG7vfMTxN7X_9xwSkAz0sm&_nc_zt=23&_nc_ht=scontent.fshl2-1.fna&_nc_gid=TMogmmXKOgstcxvV97Syvg&oh=00_AfGD2ss-_mS9n03VwA4bnqIU_202K5BddPddg5xldkElBw&oe=6801168C"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
