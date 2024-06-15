import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CartBtn from "../components/AddToCartBtn/CartBtn";


/**
 * @brief Product details page 
 *
 * this a page to display product details when click to it 
 * get id and check if it found on my api products first
 * 
 * 
 @param id from url params
 */


export default function ProductDetails() {

  const { id } = useParams();
  const [products, setProducts] = useState([]);


  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://mocki.io/v1/ca0f59fb-47f1-4549-aa0b-128b7669c7ec"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);





  const product = products.find((product) => product.id === parseInt(id));
  
  // if there is no product with id

  if (!product) {
    return (
      <div className="mt-40 text-center font-bold text-[red]">
        This Product not found !
      </div>
    );
  }

  // if there is a product found
  return (
    <>
      {product ? (
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 justify-items-center mx-10 xl:mx-60 h-screen mb-[1000px] ">
          <div>
            <p className="my-4 text-gray-800 font-light">{product.category.name}</p>
            <div>
              <img src={product.images[0]} width={900} alt={product.title} />
            </div>
            <ul className="flex gap-5">
              {product.images.map((image, indx) => (
                <li key={indx}>
                  <img
                    src={image}
                    alt={`Image ${indx + 1}`}
                    className="cursor-pointer my-2 w-24 h-24 border rounded-[10px] hover:border-[2px] hover:border-[blue] active:border-[blue] focus:border-[blue]"
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="my-12 text-[#383633]">
            <span>
              <p className="py-1 font-medium text-xl">{product.title}</p>
            <p className=" text-gray-500 font-light">{product.category.name}</p>

              <p className="font-medium text-2xl flex items-center">
                ★★★★★{" "}
                <span className="text-xs font-light underline cursor-pointer hover:no-underline">
                  (1 Review)
                </span>
              </p>
            </span>
            <p className="py-1 font-medium text-xl">${product.price}</p>
            <p className="py-1  text-sm w-80 font-light text-gray-600">
              {product.description}
            </p>

            <CartBtn product={product} />

          </div>
        </div>
      ) : (
        <div>Product not found</div>
      )}
    </>
  );
}
