import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./HeaderOne.css";
import "/src/7.Input/Crud.css";
import { Input } from "reactstrap";
import {
  Home,
  Library,
  Search,
  Store,
  User,
  UserPlus,
  UserRound,
  UserRoundCog,
  UsersRound,
} from "lucide-react";

export default function Header() {
  return (
    <div
      style={{ minWidth: "100vw" }}
      className="w-100 d-flex justify-content-center align-items-center"
    >
      <div className="header1_css">
        <h2
          className="d-flex accordion-header"
          style={{ fontFamily: "Brush Script MT, Brush Script Std, cursive" }}
        >
          BonFate
        </h2>
        <div className="link_div ">
          <NavLink to={"/"}>
            <Home className="mb-1" />
            <text
              style={{
                marginLeft: "3px",
              }}
            >
              Home
            </text>
          </NavLink>
          <NavLink to={"Support"}>
            <UserRoundCog className="mb-1" />
            <text style={{ marginLeft: "3px" }}>Support</text>
          </NavLink>
          <NavLink to={"user"}>
            <UsersRound className="mb-1" />
            <text style={{ marginLeft: "3px" }}>User</text>
          </NavLink>
          <NavLink to={"product"}>
            <Store className="mb-1" />
            <text style={{ marginLeft: "3px" }}>Store</text>
          </NavLink>
          <NavLink to={"about"}>
            <Library className="mb-1" />
            <text style={{ marginLeft: "3px" }}>About</text>
          </NavLink>
          <NavLink to={"Profile"}>
            <User className="mb-1" />
            <text style={{ marginLeft: "3px" }}>Profile</text>
          </NavLink>
          <NavLink to={"Login"}>
            <UserRound className="mb-1" />
            <text style={{ marginLeft: "3px" }}>Login</text>
          </NavLink>

          <NavLink to={"register"}>
            <UserPlus className="mb-1" />
            <text style={{ marginLeft: "3px" }}>Register</text>
          </NavLink>
        </div>

        <div className="search_container">
          <text style={{ fontSize: "22px", marginRight: "9px" }}>Search</text>
          <Input className="input_tag" placeholder="Search here" />
          <Search size={38} className="search_icon" />
        </div>
      </div>
    </div>
  );
}
