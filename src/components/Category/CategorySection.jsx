import ProductCard from "../ProductCard/ProductCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function CategorySection({ categoryTitle }) {
  const [products, setProduct] = useState([]);
  

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://mocki.io/v1/ca0f59fb-47f1-4549-aa0b-128b7669c7ec"
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  var filterdProducts = [];

  filterdProducts = products.filter(
    (product) =>
      product.category.name.toLowerCase() === categoryTitle.toLowerCase()
  );

  return (
    <div  id={categoryTitle} className="mx-24 py-2">
       
      <p className="px-10 lg:px-32 text-2xl py-3 text-[#383633]">
        {categoryTitle}
      </p>

      <div className=" grid grid-cols-1 gap-10 px-10 lg:px-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {filterdProducts.map((product, idx) => (
          <ProductCard key={idx} products={products} product={product} />
        ))}
      </div>
    </div>
  );
}
