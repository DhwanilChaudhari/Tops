import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

export default function SimpleRouter() {
  return (
    <div>
      <BrowserRouter>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"About"}>About</NavLink>
        <NavLink to={"Service"}>Service</NavLink>
        <Routes>
          <Route path="/" />
          <Route path="About" />
          <Route path="Service" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
