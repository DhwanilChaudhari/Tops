import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Home from "../pages/home/Home";
import Listing from "../components/listing/Listing";
import Footer from "../components/footer/Footer";
import About from "../pages/about/About";
import NotFount from "../components/notFound/NotFount";
import Details from "../pages/details/Details";
import dbJson from "../../db.json";
import axios from "axios";
import Cart from "../components/cart/Cart";
import context from "react-bootstrap/esm/AccordionContext";

export default function Router() {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setProductData(dbJson.productData);
    }, 1000);
  }, []);

  const addtoCart = async (item) => {
    item.quantity = 1;
  };

  const value = {
    addtoCart,
  };
  return (
    <BrowserRouter>
      <Header data={productData} />
      <Routes>
        <Route exact path="/" element={<Home data={productData} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
