import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function Register() {
  let navigate = useNavigate();

  let [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    number: "",
    gender: "",
  });

  const registerHandler = (e) => {
    e.preventDefault();
    let data = localStorage.getItem("user-log") || "[]";
    let normalData = JSON.parse(data);
    console.log("🚀 ~ registerHandler ~ normalData:", normalData);
    let array = [...normalData, user];
    console.log("🚀 ~ registerHandler ~ array:", array);
    localStorage.setItem("user-log", JSON.stringify(array));
    navigate("/login");
  };

  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="username">User Name</Label>
          <Input
            id="username"
            name="username"
            placeholder="Enter your name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Enter your email"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="Enter your password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="number">Number</Label>
          <Input
            id="number"
            name="number"
            placeholder="XXXXXXXXXX"
            value={user.number}
            onChange={(e) => setUser({ ...user, number: e.target.value })}
          />
        </FormGroup>
        <FormGroup check>
          <Input
            checked={user.gender === "Man"}
            type="radio"
            onChange={() => setUser({ ...user, gender: "Man" })}
          />{" "}
          <Label check>Man</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            checked={user.gender === "Woman"}
            type="radio"
            onChange={() => setUser({ ...user, gender: "Woman" })}
          />{" "}
          <Label check>Woman</Label>
        </FormGroup>
        <Button onClick={(e) => registerHandler(e)}>Register</Button>
      </Form>
    </div>
  );
}
