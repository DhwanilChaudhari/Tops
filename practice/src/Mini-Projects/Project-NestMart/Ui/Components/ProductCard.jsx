import React from "react";
import "./ProductCard";
export default function ProductCard() {
  return (
    <div>
      {" "}
      <div className="product-card">
        <img
          src={`images/${product.name.toLowerCase()}.jpg`}
          alt={product.name}
        />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    </div>
  );
}
