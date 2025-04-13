"use client";

import { useScrollStore } from "@/store/useScrollStore";

import React, { useState } from "react";

type MenuItem = {
  id: number;
  title: string;
  link: string;
};

type MenuProps = {
  menuList: MenuItem[];
};

const Menu = ({ menuList }: MenuProps) => {
  const [activeSection, setActiveSection] = useState(menuList?.[0]);

  const { scrollTo } = useScrollStore();

  const handleClick = (item: MenuItem) => {
    setActiveSection(item);
    scrollTo(item.link);
  };

  return (
    <>
      {menuList?.map((item) => {
        return (
          <button
            className={`mr-4 font-semibold text-sm text-white cursor-pointer w-full md:w-auto text-left mb-3  md:mb-0 ${
              activeSection.title === item.title && "border-b-2 border-red-500"
            }`}
            key={item.id}
            onClick={() => handleClick(item)}
          >
            {item.title}
          </button>
        );
      })}
    </>
  );
};

export default Menu;
