import React from "react";
import { Input } from "reactstrap";
import "./pro.css";

export default function Header() {
  return (
    <div className="header_css">
      <div>
        <h2>WhatyouLike</h2>
      </div>
      <div className="header_link" fw-medium>
        <li>
          {" "}
          <a href="">HOME</a>
        </li>
        <li>
          {" "}
          <a href=""> ABOUT </a>
        </li>
        <li>
          {" "}
          <a href=""> CONTACT </a>
        </li>
      </div>
      <div>
        <Input className="inputbox" placeholder="Search here" />
        <i class="bi bi-search"></i>
      </div>
    </div>
  );
}
