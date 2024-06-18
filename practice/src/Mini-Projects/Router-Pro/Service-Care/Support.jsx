import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function Support() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <h1 className="text-center">Customer Care</h1>
        <div className="w-100 d-flex justify-content-center">
          <Button color="primary" className="w-25 m-4">
            <NavLink to={"/Support/ProductService"} style={{ color: "black" }}>
              Products
            </NavLink>
          </Button>
          <Button color="primary" className="w-25 m-4">
            <NavLink to={"/Support/OrderQuery"} style={{ color: "black" }}>
              Order Query
            </NavLink>
          </Button>
        </div>
        <hr />
        <Button onClick={() => navigate("/")} color="danger">
          Back to Home
        </Button>
      </div>
      <Outlet />
    </div>
  );
}
