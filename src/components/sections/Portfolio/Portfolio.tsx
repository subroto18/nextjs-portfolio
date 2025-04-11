import React from "react";
import Card from "./Card";

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-[#101010] py-[5rem]">
      <div className="w-[80%] m-auto">
        <h1 className="heading text-center mb-5">My Latest Project</h1>
        <p className="description text-center w-[60%] m-auto">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <div className="grid grid-cols-3 gap-4 py-5">
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
