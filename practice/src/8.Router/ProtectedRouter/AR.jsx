import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AR(props) {
  const navigate = useNavigate();
  useEffect(() => {
    let jsonData = localStorage.getItem("user");
    let normalData = JSON.parse(jsonData) || null;
    if (!normalData) {
      navigate("/");
    }
  });
  return <div>{props.component}</div>;
}
