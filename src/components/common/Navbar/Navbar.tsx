import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Img from "../../ui/Img";
import Menu from "./Menu";
import SocialLink from "./SocialLink";

import { Link } from "@/types/socialLink";

type Menu = {
  id: number;
  title: string;
  link: string;
};

async function getMenu(): Promise<Menu[]> {
  const data = [
    { id: 1, title: "Home", link: "#home" },
    { id: 2, title: "About", link: "#about" },
    { id: 3, title: "Service", link: "#service" },
    { id: 4, title: "Portfolio", link: "#portfolio" },
    { id: 5, title: "Blog", link: "#blog" },
    { id: 6, title: "Contact", link: "#contact" },
  ];
  return data;
}

async function getSocialLink(): Promise<Link[]> {
  const data = [
    { id: 1, title: "", icon: <FaFacebookF />, link: "#" },
    { id: 2, title: "", icon: <FaLinkedinIn />, link: "#" },
    { id: 3, title: "", icon: <FaInstagram />, link: "#" },
    { id: 4, title: "", icon: <FaTwitter />, link: "#" },
  ];
  return data;
}

const Navbar = async () => {
  const menuList = await getMenu();
  const socialLinkList = await getSocialLink();
  //
  // bg-[#191919]
  return (
    <header className=" fixed  ">
      <nav className="grid grid-cols-12 gap-2 p-4 w-[80%] m-auto">
        <div>
          <Img
            width={50}
            height={50}
            src="https://trydo.rainbowit.net/assets/images/logo/logo-symbol-dark.png"
          />
        </div>

        <ul className="col-span-10 flex justify-start">
          <Menu menuList={menuList} />
        </ul>

        <ul className="flex mt-4">
          <SocialLink links={socialLinkList} />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
