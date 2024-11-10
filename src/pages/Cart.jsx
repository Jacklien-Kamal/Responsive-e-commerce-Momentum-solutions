import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard/ProductCard";
import { useAppSelector } from "../../store/store";
import { totalPriceSelector } from "../../store/slices/cartSlice";



/**
 * @brief Cart page 
 *
 * this a page to display products added to cart 
 * 

 */


export default function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const totalPrice = useAppSelector(totalPriceSelector);

  useEffect(() => {
    // Fetch products from API
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://mocki.io/v1/fdbb45f2-8927-48ae-8fae-84ce8f642288"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    // get  cart products from localStorage to detect changes
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if(cart){

        setCartProducts(cart);
    }

  }, [cartProducts]);



  return (
    <div className="px-10 pb-48 mt-10  m0px] h-[100%] ">

      <div className="grid grid-cols-1 gap-10 px-10 lg:px-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {cartProducts.map((cartProduct, index) => {
          const product = products.find((p) => p.id === cartProduct.product.id);
          return (
            product && (
              <ProductCard
              key={index}
              product={product}
              />
            )
          );
        })}
      </div>
        <h1 className="font-bold text-2xl py-10">Your Cart (${totalPrice.toFixed(2)})</h1>
    </div>
  );
}
