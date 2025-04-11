import { SocialLinks } from "@/types/socialLink";
import React from "react";

const SocialLink = ({ links }: SocialLinks) => {
  return (
    <>
      {links?.map((item) => {
        return (
          <a
            href={item.link}
            className="mr-3 mt-4 text-white cursor-pointer"
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
