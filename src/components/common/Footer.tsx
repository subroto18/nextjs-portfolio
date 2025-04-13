"use client";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black py-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[80%] m-auto">
        <div>
          <ul className="flex justify-center">
            <li className="border-2 rounded-full border-[#9a9ba6] p-3 mr-3 hover:bg-[#f9004d] hover:border-[#f9004d]  group cursor-pointer">
              <a target="_blank" href="www.facebook.com">
                <FaFacebookF className="text-[#9a9ba6] transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-white group-hover:cursor-pointer" />
              </a>
            </li>

            <li className=" border-2 rounded-full border-[#9a9ba6] p-3 mr-3 hover:bg-[#f9004d] hover:border-[#f9004d]  group cursor-pointer">
              <a target="_blank" href="www.facebook.com">
                <FaLinkedinIn className="text-[#9a9ba6] transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-white group-hover:cursor-pointer" />
              </a>
            </li>

            <li className=" border-2 rounded-full border-[#9a9ba6] p-3 mr-3 hover:bg-[#f9004d] hover:border-[#f9004d]  group cursor-pointer">
              <a target="_blank" href="www.facebook.com">
                <FaInstagram className="text-[#9a9ba6] transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-white group-hover:cursor-pointer" />
              </a>
            </li>

            <li className=" border-2 rounded-full border-[#9a9ba6] p-3 mr-3 hover:bg-[#f9004d] hover:border-[#f9004d]  group cursor-pointer">
              <a target="_blank" href="www.facebook.com">
                <FaTwitter className="text-[#9a9ba6] transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-white group-hover:cursor-pointer" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-center md:text-center my-3">
            <p className="text-[#9a9ba6] text-sm ">Made with ❤️ in India</p>
          </div>
        </div>
        <div className="text-center md:text-center">
          <p className="text-[#9a9ba6] text-sm md:my-3 ">
            © 2025 Subroto Chakraborty
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
