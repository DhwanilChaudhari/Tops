import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "./HeaderOne.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  let navigate = useNavigate();

  let [userDetails, setUserDetails] = useState({ email: "", password: "" });

  const loginHandler = () => {
    let data = localStorage.getItem("user-log") || "[]";
    let normalData = JSON.parse(data);
    let matchData = normalData.find((e) => e.email === userDetails.email);
    if (matchData) {
      localStorage.setItem("login", JSON.stringify(userDetails));
      navigate("/Profile");
    } else {
      toast.error("match user not found");
    }
  };

  return (
    <Form>
      <div className="login-container">
        <h2>Login</h2>
        <FormGroup>
          <div className="input-container">
            <Input
              type="email"
              placeholder="email"
              value={userDetails.email}
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
            />
          </div>
        </FormGroup>
        <FormGroup>
          <div className="input-container">
            <Input
              type="password"
              placeholder="Password"
              value={userDetails.password}
              onChange={(e) =>
                setUserDetails({ ...userDetails, password: e.target.value })
              }
            />
          </div>
          <p role="button">Don't have an account?</p>
        </FormGroup>
        <Button onClick={loginHandler}>Login</Button>
      </div>
    </Form>
  );
}
