"use client";
import React, { useEffect, useState } from "react";

import Img from "../../ui/Img";
import MenuList from "./Menu";
import SocialLink from "./SocialLink";
import { Menu } from "@/types/menu";
import { Link } from "@/types/socialLink";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMenuStore } from "@/store/useMenuStore";
import HumbergerMenu from "./HumbergerMenu";

const Navbar = ({
  menuList,
  socialLinkList,
}: {
  menuList: Menu[];
  socialLinkList: Link[];
}) => {
  const [scrolled, setScroled] = useState(false);
  const { setIsOpen } = useMenuStore();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroled(true);
      } else {
        setScroled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <header
      className={` ${
        scrolled
          ? "fixed bg-[#191919] transition duration-300 z-1 w-full"
          : "absolute w-full"
      }  `}
    >
      <nav className="grid grid-cols-2 md:grid-cols-12 gap-2 p-4 w-[80%] m-auto">
        <div>
          <Img
            width={50}
            height={50}
            src="https://trydo.rainbowit.net/assets/images/logo/logo-symbol-dark.png"
          />
        </div>

        <ul className="hidden col-span-10 md:flex justify-start">
          <MenuList menuList={menuList} />
        </ul>

        <ul className="flex mt-4 justify-end">
          <SocialLink links={socialLinkList} />
          <GiHamburgerMenu
            onClick={() => setIsOpen(true)}
            className="text-white ml-5 cursor-pointer"
          />
        </ul>

        <HumbergerMenu menuList={menuList} />
      </nav>
    </header>
  );
};

export default Navbar;
