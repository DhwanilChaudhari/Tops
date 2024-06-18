import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function ProductService() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Product Service</h1>
      <Button color="danger" onClick={() => navigate("/Support")}>
        Proceed
      </Button>
    </div>
  );
}
