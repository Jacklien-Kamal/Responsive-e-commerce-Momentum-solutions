import ProductCard from "../ProductCard/ProductCard";
import React, { useEffect, useState } from "react";
import axios from "axios";

/**
 * @brief CtegorySection 
 *
 * this component is a repeated component display on productList (home) based on the category title .
 * 
 * @param categoryTitle 
 */
export default function CategorySection({ categoryTitle }) {

  const [products, setProducts] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("default");

  useEffect(() => {
    // get products from my own api
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

  const filteredProducts = products.filter(
    (product) =>
      product.category.toLowerCase() === categoryTitle.toLowerCase()
  );
  console.log(products,categoryTitle, filteredProducts);

  const sortProducts = (products, criteria) => {
    switch (criteria) {
      case "price-asc":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...products].sort((a, b) => b.price - a.price);
      case "title-asc":
        return [...products].sort((a, b) => a.title.localeCompare(b.title));
      case "title-desc":
        return [...products].sort((a, b) => b.title.localeCompare(a.title));
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(filteredProducts, sortCriteria);

  return (
    <div id={categoryTitle} className="mx-12 sm:mx-24 py-5">
      <div className="flex gap-2 items-center px-10 lg:px-32 ">
        <p className="text-2xl py-3 text-[#383633]">
          {categoryTitle}
        </p>
        <select 
          value={sortCriteria} 
          onChange={(e) => setSortCriteria(e.target.value)}
          className="p-1 mt-1 border rounded bg-[#f4efe9] "
        >
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="title-asc"> A to Z</option>
          <option value="title-desc"> Z to A</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-10 px-10 lg:px-32 md:grid-cols-2 xl:grid-cols-3">
        {sortedProducts.map((product, idx) => (
          <ProductCard key={idx}  product={product} />
        ))}
      </div>
      <hr />
    </div>
  );
}
