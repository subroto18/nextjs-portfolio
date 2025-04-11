"use client";

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
  const [activeSection, setActiveSection] = useState(menuList[0]);

  const handleClick = (item: MenuItem) => {
    setActiveSection(item);
  };

  return (
    <>
      {menuList?.map((item) => {
        return (
          <button
            className={`mr-4 font-semibold text-sm text-white cursor-pointer ${
              activeSection.title === item.title && "border-b-4 border-red-500"
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
