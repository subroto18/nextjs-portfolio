import React from "react";
import Card from "./Card";
import Button from "@/components/ui/Button";

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-[#101010] py-[5rem]">
      <div className="w-[90%] m-auto">
        <h1 className=" text-[#ededed]  text-4xl md:text-5xl font-bold text-center mb-5">
          My Latest Project
        </h1>
        <p className="text-[#ededed] text-center md:w-[60%] m-auto">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div className="my-5 text-center">
          <Button className="bg-[#fb004d] hover:bg-transparent text-red-400 border-0 hover:border-2 border-[#fb004d]">
            Show More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
