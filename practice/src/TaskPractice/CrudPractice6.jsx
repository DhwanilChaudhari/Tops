import React, { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { toast } from "react-toastify";

const hobbies = [
  { label: "Code", value: "code" },
  { label: "Swimming", value: "swimming" },
  { label: "Travel", value: "travel" },
  { label: "Cricket", value: "cricket" },
  { label: "Cinema", value: "cinema" },
];

const userTypes = [
  { label: "User", value: "user" },
  { label: "Admin", value: "admin" },
];

export default function CrudPractice6() {
  const [hobbyArr, setHobbyArr] = useState(["code", "swimming"]);
  const [userType, setUserType] = useState("user");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    hobby: hobbyArr,
    userType: userType,
  });

  const [userArr, setUserArr] = useState([]);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      setUserArr(storedUsers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(userArr));
  }, [userArr]);

  const validateForm = () => {
    if (user.name.trim() === "") {
      toast.warn("Please enter your name");
      return false;
    }
    if (user.email.trim() === "") {
      toast.warn("Please enter your email");
      return false;
    }
    if (user.password.trim() === "") {
      toast.warn("Please enter your password");
      return false;
    }
    if (user.gender.trim() === "") {
      toast.warn("Please select your gender");
      return false;
    }
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (index !== null) {
        updateHandler();
      } else {
        setUserArr([...userArr, user]);
      }
      setUser({
        name: "",
        email: "",
        password: "",
        gender: "",
        hobby: hobbyArr,
        userType: userType,
      });
      setIndex(null);
      toast.success("User submitted successfully");
    }
  };

  const deleteHandler = (index) => {
    setUserArr(userArr.filter((_, i) => i !== index));
  };

  const editHandler = (data, index) => {
    setUser(data);
    setIndex(index);
  };

  const updateHandler = () => {
    const newArr = userArr.map((e, i) => {
      if (i === index) {
        return user;
      } else {
        return e;
      }
    });
    setUserArr(newArr);
  };

  const singleSelectHandler = (selectedOption) => {
    setUserType(selectedOption.value);
    setUser({ ...user, userType: selectedOption.value });
  };

  const multiSelectHandler = (selectedOptions) => {
    const data = selectedOptions.map((item) => item.value);
    setHobbyArr(data);
    setUser({ ...user, hobby: data });
  };

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <FormGroup className="w-[787px]">
          <Label for="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </FormGroup>
        <Row>
          <Col md={6}>
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
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="passCode">Password</Label>
              <Input
                id="password"
                name="passCode"
                placeholder="Enter your passcode"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </FormGroup>
          </Col>
        </Row>
        <p>Select Your Gender</p>
        <FormGroup check>
          <Input
            type="radio"
            name="gender"
            checked={user.gender === "Man"}
            onChange={() => setUser({ ...user, gender: "Man" })}
          />{" "}
          <Label check>Man</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            type="radio"
            name="gender"
            checked={user.gender === "Woman"}
            onChange={() => setUser({ ...user, gender: "Woman" })}
          />{" "}
          <Label check>Woman</Label>
        </FormGroup>
        <ReactSelect
          isMulti
          className="w-[300px]"
          options={hobbies}
          value={hobbyArr.map((e) => {
            return { label: e.toUpperCase(), value: e };
          })}
          onChange={multiSelectHandler}
        />
        <ReactSelect
          className="w-[150px]"
          options={userTypes}
          value={userTypes.find((ut) => ut.value === userType)}
          onChange={singleSelectHandler}
        />
        {!index && index !== 0 ? (
          <Button onClick={submitHandler}>Submit</Button>
        ) : (
          <button
            onClick={updateHandler}
            className="w-100 btn btn-primary"
            role="button"
          >
            Update
          </button>
        )}
      </Form>
      <hr />
      <div>
        {userArr.map((user, index) => (
          <div key={index}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.gender}</p>
            <p>{user.hobby.join(", ")}</p>
            <p>{user.userType}</p>
            <Button onClick={() => editHandler(user, index)}>Edit</Button>
            <Button onClick={() => deleteHandler(index)}>Delete</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
