import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HP from "./HP";
import Profile from "./Profile";
import "./index.css";
import Head from "./Head";
import AR from "./AR";

export default function ProtectedRoute() {
  return (
    <div>
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path="/" element={<HP />} />
          <Route path="/Profile" element={<AR component={<Profile />} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
