import React, {  useEffect } from "react";

import { Link } from "react-router-dom";
import CartBtn from "../AddToCartBtn/CartBtn";

/**
 * @brief Product card 
 *
 * this component is a reusable Card to display products info on home & cart
 * 
 @param product {id , title  ,images ,.}
 */

export default function ProductCard({ product }) {
  
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const prdInCart = cart.find((prd) => prd.product.id === product.id);
    if (prdInCart) {
    }
  }, [product.id]);



  return (
    <>
      <div className="bg-white rounded-xl">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-[600px] h-[300px] mx-auto  cursor-pointer"
          />
        </Link>

        <div className="mt-3">
          <span className="text-sm pb-0 text-gray-800 pe-10">
            {product.title}
          </span>
          <p className="text-secondary text-sm text-gray-700">
            ${product.price}
          </p>


          <CartBtn product={product} />
        </div>
      </div>
    </>
  );
}
