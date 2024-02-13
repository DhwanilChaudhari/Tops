import { Edit, Trash } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function Crud() {
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  let [index, setIndex] = useState(null);

  let [update, setUpdate] = useState(false);

  let [gender, setGender] = useState(false);

  const [hobby, setHobby] = useState([]);

  const checkHandler = (hby, e) => {
    if (e.target.checked) {
      setHobby([...hobby, hby]);
    } else {
      let fltrdata = hobby.filter((e) => e !== hby);
      setHobby(fltrdata);
    }
  };

  const [userArr, setUserArr] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      user.name.trim() === "" ||
      user.email.trim() === "" ||
      user.password.trim() === ""
    ) {
      toast.warn("Please fill all the entries");
    } else {
      if (update) {
        updateHandler();
      } else {
        setUserArr([...userArr, user]);
        setUser({
          name: "",
          email: "",
          password: "",
        });
      }
    }
  };

  const deleteHandler = (index) => {
    let filterData = userArr.filter((_, i) => i !== index);
    setUserArr(filterData);
  };
  const editHandler = (data, index) => {
    setUser(data);
    setIndex(index);
    setUpdate(true);
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
    });
    setIndex(null);
    setUpdate(false);
  };
  return (
    <div
      style={{ padding: "200px" }}
      className=" w-100  border border-black rounded-4 m-4 "
    >
      <Form onSubmit={(e) => submitHandler(e)}>
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
        <hr />
        <p className="m-2">Select Your Gender</p>
        <p>gender : {gender}</p>
        <FormGroup check>
          <Input
            checked={gender === "Man"}
            type="radio"
            onChange={() => setGender("Man")}
          />{" "}
          <Label check>Man</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            checked={gender === "Woman"}
            type="radio"
            onChange={() => setGender("Woman")}
          />{" "}
          <Label check>Woman</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            checked={gender === "Kids"}
            type="radio"
            onChange={() => setGender("Kids")}
          />{" "}
          <Label check>kids</Label>
        </FormGroup>
        <p>Select your Hobbies</p>
        <FormGroup check>
          <Input type="checkbox" onChange={(e) => checkHandler("Cricket", e)} />{" "}
          <Label check>Cricket</Label>
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox" onChange={(e) => checkHandler("Reading", e)} />{" "}
          <Label check>Reading</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            type="checkbox"
            onChange={(e) => checkHandler("Swimming", e)}
          />{" "}
          <Label check>Swimming</Label>
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox" onChange={(e) => checkHandler("Drive", e)} />{" "}
          <Label check>Drive</Label>
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox" onChange={(e) => checkHandler("Coding", e)} />{" "}
          <Label check>Coding</Label>
        </FormGroup>
        <hr />
        <div>
          {hobby.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </div>
        {update ? (
          <button
            onClick={updateHandler}
            className="w-100 btn btn-primary"
            role="button"
          >
            Update
          </button>
        ) : (
          <button
            onClick={submitHandler}
            className="w-100 btn btn-danger "
            role="button"
          >
            Submit
          </button>
        )}
      </Form>
      <div className="border border-black rounded-1 mt-2   ">
        <hr />

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userArr.map((user, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <Edit onClick={() => editHandler(user, i)} />
                  <Trash onClick={() => deleteHandler(i)} />
                </td>
              </tr>
            ))}
          </tbody>
          <tbody></tbody>
        </Table>
      </div>
    </div>
  );
}
