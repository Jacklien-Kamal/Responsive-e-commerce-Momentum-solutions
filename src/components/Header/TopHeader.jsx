import React from 'react'
import { PiSquareLogoBold } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";

export default function TopHeader() {
    const navbarLinks = [{title:"OrderLookUp",link:'/'},{ title:"Free Swatches",link:'#'}, {title:"ShowRooms",link:'#'},{title:"Ref a Friend",link:'/'}];

  return (
<div className=" bg-[#f4efe9] px-7 text-xs font-light ">
        <div className="flex items-center  justify-between">

          <span className='flex items-center  gap-1'>
          <PiSquareLogoBold  className="font-chew text-xl text-[#333300]"/> Furniture designed for modern life at home
          </span>

          <div className="flex items-center ">
            <ul className="hidden lg:flex gap-1 ">
              {navbarLinks.map((link,indx) => (
                <li key={indx} >
              <a href="#"
              className="inline-block py-3 px-4 hover:text-[brown] "
                  >
                    {link.title}
                  </a>
                </li>
              ))}
              <li className='flex items-center me-5 gap-1'>About <IoIosArrowDown />
              </li>

            </ul>
            <div className="flex text-gray-700 items-center">

           <img src='https://cdn2.iconfinder.com/data/icons/flags-68/48/Usa-512.png' className=' w-4 rounded-full'/>
            </div>

        </div>
      </div>
    </div>  )
}
