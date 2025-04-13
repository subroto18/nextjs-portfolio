import React from "react";
import { Link } from "@/types/socialLink";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Navbar from "./Navbar";
import { Menu } from "@/types/menu";

async function getMenu(): Promise<Menu[]> {
  const data = [
    { id: 1, title: "Home", link: "home" },
    { id: 2, title: "About", link: "about" },
    { id: 3, title: "Service", link: "service" },
    { id: 4, title: "Portfolio", link: "portfolio" },
    { id: 5, title: "Blog", link: "blog" },
    { id: 6, title: "Contact", link: "contact" },
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

const Index = async () => {
  const menuList = await getMenu();
  const socialLinkList = await getSocialLink();

  return <Navbar menuList={menuList} socialLinkList={socialLinkList} />;
};

export default Index;
