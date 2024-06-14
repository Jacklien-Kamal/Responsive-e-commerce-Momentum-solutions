import React, { useState, useEffect } from 'react';

export default function ProductCard({ products, product }) {
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const prdInCart = cart.find((prd) => prd.id === product.id);
    if (prdInCart) {
      setIsAdded(true);
      setQuantity(prdInCart.quantity);
    }
  }, [product.id]);

  const addToCart = (prdId) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const prdIndex = cart.findIndex((prd) => prd.id === prdId);
    if (prdIndex >= 0) {
      cart[prdIndex].quantity += 1;
    } else {
      const prd = products.find((prd) => prd.id === prdId);
      if (prd) {
        prd.quantity = 1;
        cart.push(prd);
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    setIsAdded(true);
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const removeFromCart = (prdId) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const prdIndex = cart.findIndex((prd) => prd.id === prdId);
    if (prdIndex >= 0) {
      if (cart[prdIndex].quantity > 1) {
        cart[prdIndex].quantity -= 1;
        setQuantity((prevQuantity) => prevQuantity - 1);
      } else {
        cart = cart.filter((item) => item.id !== prdId);
        setIsAdded(false);
        setQuantity(0);
      }
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };

  return (
    <div className="bg-white rounded-xl">
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-[400px] h-[200px] mx-auto sm:w-[200px] sm:h-[120px] md:w-[350px] md:h-[300px] lg:w-full lg:h-[300px] cursor-pointer"
      />

      <div className="mt-3">
        <span className="text-sm pb-0 text-gray-800 pe-10">{product.title}</span>
        <p className="text-secondary text-sm text-gray-700">${product.price}</p>


        <div className="flex items-center gap-2">
          <button
            className="bg-[#e5d7cc] px-3 mt-4 text-xl rounded-xl mb-5 py-1 hover:scale-105 sm:text-sm lg:text-lg"
            onClick={() => addToCart(product.id)}
          >
            Add to cart
          </button>
          {isAdded && (
            <div className="flex items-center gap-2">
              <button
                className="bg-[#e5d7cc] px-2 text-lg rounded-lg"
                onClick={() => removeFromCart(product.id)}
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                className="bg-[#e5d7cc] px-2 text-lg rounded-lg"
                onClick={() => addToCart(product.id)}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
