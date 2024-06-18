import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./HeaderOne";
import "./HeaderOne.css";
import "/src/7.Input/Crud.css";
import Home from "./Home";
import OrderQuery from "./Service-Care/OrderQuery";
import ProductService from "./Service-Care/ProductService";
import Support from "./Service-Care/Support";
import SingleProduct from "./Products/SingleProduct";
import ProductList from "./Products/ProductList";
import Crud from "../../7.Input/Crud";
import About from "./About";
import AllUser from "../User/AllUser";
import SingleUser from "../User/SingleUser";
import Reglog from "./Reglog";
import Login from "./Login";
import Profile from "./Profile";
import Register from "./Register";

export default function () {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="d-flex m-3"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />

          <Route path="/Support">
            <Route index element={<Support />} />
            <Route path="OrderQuery" element={<OrderQuery />} />
            <Route path="ProductService" element={<ProductService />} />
          </Route>
          <Route>
            <Route path=":id" element={<SingleProduct />} />
            <Route path="Product" element={<ProductList />} />
          </Route>
          <Route path="Product/:id" element={<SingleProduct />} />
          <Route path="Product" element={<ProductList />} />

          <Route path="/User">
            <Route index element={<Reglog />} />
            <Route path="Register" element={<Register />} />
            <Route path="Crud" element={<Crud />} />
            <Route path="Userlist" element={<AllUser />} />
            <Route path=":id" element={<SingleUser />} />
          </Route>

          <Route path="Login" element={<Login />} />
          <Route path="Profile" element={<Profile />} />

          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
