import React, { useState } from "react";
import CategorySection from "../components/Category/CategorySection";
import Poster from "../components/Poster/Poster";

export default function Home() {
  const categories = [
    "Furniture",
    "Electronics",
    "Miscellaneous",
    "Nuevo",
    "Shoes",
  ];
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (e, link) => {
    setActiveLink(link);
    const section = document.getElementById(link);
    if (section) {
      e.preventDefault();
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white mt-16">
      <Poster />

      <div className="shadow-md bg-white py-4 px-16 flex items-center justify-center sticky top-[80px] sm:top-[80px] xl:top-[103px] z-10">
        <ul className="text-xs flex md:text-lg gap-4 text-gray-800 text-lg">
          {categories.map((link, indx) => (
            <li key={indx}>
              <a
                href={`#${link}`}
                className={`inline-block py-1 px-3 ${
                  activeLink === link ? "bg-[#e5d7cc] rounded-full " : ""
                }`}
                onClick={(e) => {
                  handleLinkClick(e, link);
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {categories.map((cat, idx) => (
        <CategorySection key={idx} categoryTitle={cat} id={cat} />
      ))}
    </div>
  );
}
