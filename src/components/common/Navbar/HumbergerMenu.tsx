import { useMenuStore } from "@/store/useMenuStore";
import React from "react";

import { LiaTimesSolid } from "react-icons/lia";

import MenuList from "./Menu";
type MenuItem = {
  id: number;
  title: string;
  link: string;
};

type MenuProps = {
  menuList: MenuItem[];
};

const HumbergerMenu = ({ menuList }: MenuProps) => {
  const { open, setIsOpen } = useMenuStore();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[70%] bg-[#101010] z-50 transition-transform duration-300 ease-in-out ${
        open ? "translate-x-0" : "translate-x-full"
      } `}
    >
      <LiaTimesSolid
        onClick={() => setIsOpen(false)}
        className="text-white absolute text-3xl top-10 right-10 cursor-pointer"
      />

      <div className="my-[5rem] px-[4rem]">
        <MenuList menuList={menuList} />
      </div>
    </div>
  );
};

export default HumbergerMenu;
