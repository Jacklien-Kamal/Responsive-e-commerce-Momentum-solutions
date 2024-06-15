import React from 'react'

/**
 * @brief Poster 
 *
 * this component is pbig img on the top of the home page
 */ 
export default function Poster() {
  return (

        
          <div className="mt-6 relative flex text-white z-0 ">
            <div className="absolute top-2  text-xs left-20  md:top-16 sm:top-10 md:text-lg  left-20 xl:top-44">
              <h4 className=" text-3xl mb-4"> Outdoor Furniture              </h4>
              <p className="  w-[350px]">Modular seating, patio designs, and outdoor dining sets all made with durable, all-weather materials</p>
            </div>
            <img src='https://media.graphassets.com/resize=w:1920,fit:crop/output=format:webp/compress/Dk4PB1V2TFGb0wsrJnPe' alt="ImgAdBarLarge" />
      </div>
  )
}
