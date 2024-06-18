import React, { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const hobbies = [
  { label: "Reading", value: "reading" },
  { label: "Riding", value: "riding" },
  { label: "Sports", value: "sports" },
  { label: "Cooking", value: "cooking" },
  { label: "Music", value: "music" },
];

const ut = [
  { label: "User", value: "user" },
  { label: "Admin", value: "admin" },
];

export default function CrudPractice1() {
  const [hobbyArr, setHobbyArr] = useState(["reading", "sports"]);
  const [userType, setUserType] = useState("user");
  const [user, setUser] = useState({
    name: "username",
    email: "usename@example.com",
    password: "example@pass",
    gender: "",
    hobby: hobbyArr,
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
        setUser({
          name: "",
          email: "",
          password: "",
          gender: "",
          hobby: hobbyArr,
        });
      }

      console.log("Submitted User:", {
        name: user.name,
        email: user.email,
        password: user.password,
        gender: user.gender,
        hobby: user.hobby,
        userType,
      });
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
    setUser({
      name: "",
      email: "",
      password: "",
      gender: "",
      hobby: [],
    });
    setIndex(null);
  };

  const singleSelectHandler = (e) => {
    setUserType(e.value);
  };

  const multiSelectHandler = (e) => {
    const data = e.map((item) => item.value);
    setHobbyArr(data);
    setUser({ ...user, hobby: data });
  };

  return (
    <div>
      <ToastContainer />
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            name="name"
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
          <Label>Your Hobbies</Label>
          <ReactSelect
            isMulti
            options={hobbies}
            value={hobbies.filter((hobby) => hobbyArr.includes(hobby.value))}
            onChange={multiSelectHandler}
          />
        </FormGroup>
        <p>Select Your Gender</p>
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
        <p>Select UserType</p>
        <ReactSelect
          options={ut}
          value={ut.find((ut) => ut.value === userType)}
          onChange={singleSelectHandler}
        />
        <Button type="submit">Submit</Button>
      </Form>
      <hr />
      <div>
        {userArr.map((user, index) => (
          <div key={index}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.gender}</p>
            <p>{user.hobby.join(",")}</p>
            <p>{userType}</p>
            <Button onClick={() => editHandler(user, index)}>Edit</Button>
            <Button onClick={() => deleteHandler(index)}>Delete</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
