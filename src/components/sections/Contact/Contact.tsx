"use client";
import React, { useEffect, useRef } from "react";
import Form from "./Form";
import Img from "@/components/ui/Img";
import { useScrollStore } from "@/store/useScrollStore";

const Contact = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const setSectionRef = useScrollStore((store) => store.setSectionRef);

  useEffect(() => {
    setSectionRef("contact", ref.current);
  }, []);

  return (
    <section ref={ref} id="contact" className="bg-[#191919]  py-5">
      <div className="grid md:grid-cols-2 gap-4 w-[90%] m-auto py-5 order-2 md:order-1">
        <Form />
        <div className="flex justify-end w-full order-1 md:order-2">
          <Img
            className="rounded"
            alt="avatar w-full h-full"
            src="https://trydo.rainbowit.net/assets/images/about/about-9.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
