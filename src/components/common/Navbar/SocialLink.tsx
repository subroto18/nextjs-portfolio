import { SocialLinks } from "@/types/socialLink";
import React from "react";

const SocialLink = ({ links }: SocialLinks) => {
  return (
    <>
      {links?.map((item) => {
        return (
          <a
            href={item.link}
            className="mr-5  text-white cursor-pointer transition-transform duration-300 hover:-translate-y-1"
            key={item.id}
          >
            {item.icon}
          </a>
        );
      })}
    </>
  );
};

export default SocialLink;
