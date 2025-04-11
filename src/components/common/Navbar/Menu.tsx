import Link from "next/link";
import React from "react";

type MenuItem = {
  id: number;
  title: string;
  link: string;
};

type MenuProps = {
  menuList: MenuItem[];
};

const Menu = ({ menuList }: MenuProps) => {
  return (
    <>
      {menuList?.map((item) => {
        return (
          <Link
            className="mt-3 mr-4 font-semibold text-sm"
            href={item.link}
            key={item.id}
          >
            {item.title}
          </Link>
        );
      })}
    </>
  );
};

export default Menu;
