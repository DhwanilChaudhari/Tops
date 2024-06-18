import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Radio,
  Select,
  TextInput,
} from "flowbite-react";
import { toast, ToastContainer } from "react-toastify";
import { Form } from "reactstrap";

const hobbies = [
  { label: "Coding", value: "coding" },
  { label: "Riding", value: "riding" },
  { label: "Sports", value: "sports" },
  { label: "Traveling", value: "traveling" },
];

const ut = [
  { label: "User", value: "user" },
  { label: "Admin", value: "admin" },
];

export default function CrudPractice2() {
  const [hobbyArr, setHobbyArr] = useState([]);
  const [userType, setUserType] = useState("user");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    hobby: [],
    userType: "user",
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
      toast.success("User submitted successfully");
      resetForm();
    }
  };

  const deleteHandler = (index) => {
    setUserArr(userArr.filter((_, i) => i !== index));
  };

  const editHandler = (data, index) => {
    setUser(data);
    setHobbyArr(data.hobby);
    setUserType(data.userType);
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
    setIndex(null);
  };

  const SelectHandler = (e) => {
    setUserType(e.target.value);
    setUser({ ...user, userType: e.target.value });
  };

  const CheckboxHandler = (e) => {
    const { value, checked } = e?.target;
    const newHobbies = checked
      ? [...hobbyArr, value]
      : hobbyArr.filter((hobby) => hobby !== value);
    setHobbyArr(newHobbies);
    setUser({ ...user, hobby: newHobbies });
  };

  const resetForm = () => {
    setUser({
      name: "",
      email: "",
      password: "",
      gender: "",
      hobby: [],
      userType: "user",
    });
    setHobbyArr([]);
    setUserType("user");
    setIndex(null);
  };

  return (
    <div className="flex max-w-md flex-col gap-4">
      <ToastContainer />
      <Form className="flex max-w-md flex-col gap-4" onSubmit={submitHandler}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Enter your name"
            sizing="xl"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="name@example.com"
            required
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Passcode" />
          </div>
          <TextInput
            id="password"
            type="password"
            placeholder="Enter your passcode"
            required
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <fieldset className="flex max-w-md flex-col gap-4">
          <legend className="mb-4">Select your gender</legend>
          <div className="flex items-center gap-2">
            <Radio
              id="male"
              name="gender"
              value="Male"
              checked={user.gender === "Male"}
              onChange={() => setUser({ ...user, gender: "Male" })}
            />
            <Label htmlFor="male">Male</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio
              id="female"
              name="gender"
              value="Female"
              checked={user.gender === "Female"}
              onChange={() => setUser({ ...user, gender: "Female" })}
            />
            <Label htmlFor="female">Female</Label>
          </div>
        </fieldset>
        <div className="flex max-w-md flex-col gap-4" id="checkbox">
          <legend className="mb-4">Select your hobbies</legend>
          {hobbies.map((hobby) => (
            <div key={hobby.value} className="flex items-center gap-2">
              <Checkbox
                id={hobby.value}
                value={hobby.value}
                checked={hobbyArr.includes(hobby.value)}
                onChange={CheckboxHandler}
              />
              <Label htmlFor={hobby.value}>{hobby.label}</Label>
            </div>
          ))}
        </div>
        <hr />
        <div className="max-w-md">
          <div className="mb-2 block">
            <legend className="mb-4">Select usertype</legend>
            <Label htmlFor="userType" />
          </div>
          <Select
            id="userType"
            required
            value={userType}
            onChange={SelectHandler}
          >
            {ut.map((e) => (
              <option key={e?.value} value={e?.value}>
                {e.label}
              </option>
            ))}
          </Select>
        </div>
        <hr />
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">{index !== null ? "Update" : "Submit"}</Button>
      </Form>
      <hr />
      <div>
        {userArr.map((user, index) => (
          <div key={index} className="p-2 border mb-2">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Gender:</strong> {user.gender}
            </p>
            <p>
              <strong>Hobbies:</strong> {user.hobby.join(",")}
            </p>
            <p>
              <strong>User Type:</strong> {user.userType}
            </p>
            <Button onClick={() => editHandler(user, index)}>Edit</Button>
            <Button onClick={() => deleteHandler(index)}>Delete</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
