import React from "react";
import "../Style/Header.css";
export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="logo">FruitTables</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/products">Products</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
    </div>
  );
}
