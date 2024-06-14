import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FiUser, FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import TopHeader from "./TopHeader";

export default function Header() {
  const navbarLinks = [
    { title: "Seating", link: "#" },
    { title: "Outdoor", link: "#" },
    { title: "Living", link: "#" },
    { title: "Dining", link: "#" },
    { title: "Bedroom", link: "#" },
    { title: "Storage", link: "#" },
  ];

  return (
    <div className="fixed w-full z-10 top-0  ">
      <TopHeader />
      <div className="flex items-center shadow-md bg-white px-7 h-16 ">
        <p className="font-bold text-2xl font-handlee text-[#333300]">BURROW</p>

        <ul className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex  gap-4 text-sm ">
          {navbarLinks.map((link, indx) => (
            <li key={indx}>
              <a
                href={link.link}
                className="flex gap-1 items-center py-4 px-4 hover:text-[#8b3b35]"
              >
                {link.title}
                <IoIosArrowDown className="text-xs"/>
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="flex items-center py-4 px-4 hover:text-[#8b3b35]"
            >
              Rug
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center py-4 px-4 hover:text-[#8b3b35]"
            >
              Clearance
            </a>
          </li>
        </ul>

        <div className="ml-auto flex text-gray-700 items-center text-lg gap-5 font-light">
          <span className="flex items-center gap-3 ">
            <FiSearch /> <p  className="text-sm">Search</p>
          </span>
          <a href="#">
            <FiUser className="ms-2" />
          </a>
          <a
            href="#"
            to="/cart"
            className="flex items-center py-1 rounded-full hover:scale-105 duration-300"
          >
            <FaCartShopping className=" hover:text-[brown]" />
          </a>
        </div>
      </div>
    </div>
  );
}
