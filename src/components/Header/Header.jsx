import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FiUser, FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import TopHeader from "./TopHeader";
import { useAppSelector } from "../../../store/store";
import { totalCartItemsSelector } from "../../../store/slices/cartSlice";
import { Link } from "react-router-dom";

export default function Header() {
  const totalItems = useAppSelector(totalCartItemsSelector);

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
      {/* top header */}
      <TopHeader />
      {/* bottom header */}
      <div className="flex items-center bg-white px-7 h-16 ">
        <Link
          to={"/"}
          className="font-bold text-2xl font-handlee text-[#333300]"
        >
          BURROW
        </Link>

        <ul className="absolute left-1/2 transform -translate-x-1/2 hidden xl:flex  gap-4 text-sm ">
          {navbarLinks.map((link, indx) => (
            <li key={indx}>
              <a
                href={link.link}
                className="flex gap-1 items-center py-4 px-4 hover:text-[#8b3b35]"
              >
                {link.title}
                <IoIosArrowDown className="text-xs" />
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
            <FiSearch /> <p className="text-sm">Search</p>
          </span>
          <a href="#">
            <FiUser className="ms-2" />
          </a>
          <Link
            to="/cart"
            className=" relativeflex items-center py-1 rounded-full "
          >
            {" "}
            <span className="bg-[#8b3b35] w-4 h-4 absolute rounded-full top-[40px] right-[29px]  md:top-[40px] lg:top-[60px] sm:text-xs text-white text-[12px] font-bold flex items-center justify-center ">
              {totalItems}
            </span>
            <FiShoppingCart className=" hover:text-[brown] text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
