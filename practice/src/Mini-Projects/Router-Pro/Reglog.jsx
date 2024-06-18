import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function Reglog() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <h1 className="text-center">Registration </h1>
        <div className="w-100 d-flex justify-content-center">
          <Button
            onClick={() => navigate("Userlist")}
            color="primary"
            className="w-25 m-4"
          >
            Users List
          </Button>
          <Button
            onClick={() => navigate("Crud")}
            color="primary"
            className="w-25 m-4"
          >
            Sign Up
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
