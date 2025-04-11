import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Img from "../../ui/Img";
import Menu from "./Menu";

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

const Navbar = async () => {
  const menuList = await getMenu();

  return (
    <header className="bg-slate-600 ">
      <nav className="grid grid-cols-12 gap-2 p-2 w-[80%] m-auto">
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

        <ul className="flex ">
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaLinkedinIn />
          </li>
          <li>
            <FaLinkedinIn />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaTwitter />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
