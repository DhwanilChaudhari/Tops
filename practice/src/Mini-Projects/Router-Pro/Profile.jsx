import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function Profile() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const logoutHandler = () => {
    localStorage.clear("user-log");
    navigate("/");
    setUsername("");
  };

  useEffect(() => {
    const userLog = localStorage.getItem("user-log");
    if (userLog) {
      const userDetails = JSON.parse(userLog);
      setEmail(userDetails.email);
    }
  }, []);

  if (!email) {
    return (
      <div className="login-container">
        <h2>Please log in</h2>
      </div>
    );
  }

  return (
    <div className="login-container">
      <h2>Welcome, {email}!</h2>
      <Button onClick={logoutHandler}>Logout</Button>
    </div>
  );
}
