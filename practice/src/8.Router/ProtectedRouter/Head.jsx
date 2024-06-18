import React from "react";
import { Button } from "reactstrap";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();

  const loginHandler = () => {
    let jsonData = JSON.stringify({ name: "dhwanil" });
    localStorage.setItem("user", jsonData);
    navigate("/Profile");
  };
  let data = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="header_con">
      <h2>JustinTime</h2>
      <div className="link_div"></div>
      <div>
        <User
          className="me-3"
          role="button"
          onClick={() => navigate("/Profile")}
        />
        {Object?.keys(data)?.length === 0 && (
          <Button color="danger" onClick={() => loginHandler()}>
            Login
          </Button>
        )}
      </div>
    </div>
  );
}
/*
["name"] => 1
[] => 0

*/
