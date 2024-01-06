import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Products({user}) {
  const [last10Products, setlast10Products] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((res) => setlast10Products(res));
  });
  return (
    <>
      <h2>Products</h2>
      <div className="row row-cols-sm-3 row-cols-md-4">
        {last10Products.map((product) => (
          <ProductCard key={product.id} item={product} user={user}/>
        ))}
      </div>
    </>
  );
}

export default Products;
