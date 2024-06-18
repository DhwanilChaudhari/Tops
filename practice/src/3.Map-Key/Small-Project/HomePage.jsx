import React, { useState } from "react";
import Header from "./Header";
import json from "../data.json";
import CardCom from "./CardCom";

import "./pro.css";
import { ToastContainer } from "react-toastify";

export default function HomePage() {
  let [Productdata] = useState(json);
  console.log(Productdata);
  return (
    <div>
      <Header />
      <div className="productcontain">
        {Productdata?.map((e, id) => {
          return <CardCom key={id} item={e} />;
        })}
      </div>
      <ToastContainer />
    </div>
  );
}
