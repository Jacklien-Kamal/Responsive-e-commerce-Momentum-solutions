import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import {
  addToCart,
  productQtyInCartSelector,
  removeFromCart,
} from "../../../store/slices/cartSlice";

/**
 * @brief CartBtn 
 *
 * this component is a reusable button helping you add | remove  product from cart
 * 
 @param product {id , title  ,images ,.}
 */

export default function CartBtn({ product }) {
  // state to handel button style 
  const [isAdded, setIsAdded] = useState(false);

  
  const dispatch = useAppDispatch();
  const qty = useAppSelector((state) =>
    productQtyInCartSelector(state, product.id)
  );

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const prdInCart = cart.find((prd) => prd.product.id === product.id);
    if (prdInCart) {
      setIsAdded(true);
    }
  }, [product.id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setIsAdded(true);
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product));
    if (qty - 1 === 0) {
      setIsAdded(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {isAdded ? (
        parseInt(qty) > 0 && (
          <div className="flex items-center gap-2 ">
            <button
              className="bg-[#fcee71]  px-4 text-lg rounded-lg py-4"
              onClick={handleRemoveFromCart}
            >
              -
            </button>
            <span className="text-lg ">{qty}</span>
            <button
              className="bg-[#fcee71] px-4 text-lg rounded-lg py-4"
              onClick={handleAddToCart}
            >
              +
            </button>
          </div>
        )
      ) : (
        <>
          <button
            className="bg-[#fcee71] w-40 font-medium  mt-4 text-lg  mb-5 py-4 hover:scale-105 md:text-xs  md:w-40  xl:w-48 xl:text-sm  "
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </>
      )}
    </div>
  );
}
