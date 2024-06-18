import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function OrderQuery() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>OrderQuery</h1>
      <Button color="danger" onClick={() => navigate("/Support")}>
        Back to CustomerCare
      </Button>
    </div>
  );
}
