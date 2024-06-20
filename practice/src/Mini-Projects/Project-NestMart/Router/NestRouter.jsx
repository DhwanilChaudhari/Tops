import React from "react";
import Header from "../Ui/Components/Header";
import Banner from "../Ui/Components/Banner";
import ProductList from "../Ui/Components/ProductList";
import Footer from "../Ui/Components/Footer";

export default function NestRouter() {
  return (
    <div>
      <Header />
      <Banner />
      <ProductList />
      <Footer />
    </div>
  );
}
