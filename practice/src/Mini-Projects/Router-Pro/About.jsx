import { Undo2 } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Thank You for Visit</h1>
      <Undo2 size={40} onClick={() => navigate(-1)} />
    </div>
  );
}
