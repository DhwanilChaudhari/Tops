import React from "react";
import "./ProductList";
import ProductCard from "./ProductCard";
const products = [
  { id: 1, name: "Grapes", price: "$4.99 / lb" },
  { id: 2, name: "Raspberries", price: "$5.99 / lb" },
  { id: 3, name: "Apricots", price: "$3.99 / lb" },
];
export default function ProductList() {
  return (
    <div>
      {" "}
      <div className="product-list">
        <h2>Our Organic Products</h2>
        <div className="products">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
