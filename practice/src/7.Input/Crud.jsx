import { Edit, Trash } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function Crud() {
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    hobby: [],
  });

  let [userArr, setUserArr] = useState([]);

  let [index, setIndex] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      user.name.trim() === "" ||
      user.email.trim() === "" ||
      user.password.trim() === "" ||
      user.gender.trim() === ""
    ) {
      toast.warn("Please fill all the entries");
    } else {
      if (index) {
        updateHandler();
      } else {
        setUserArr([...userArr, user]);
        setUser({
          name: "",
          email: "",
          password: "",
          gender: "",
          hobby: [],
        });
      }
    }
  };

  const checkHandler = (hby, e) => {
    if (e.target.checked) {
      setUser({ ...user, hobby: [...user.hobby, hby] });
    } else {
      let filterdata = user.hobby.filter((e) => e !== hby);
      setUser({ ...user, hobby: filterdata });
    }
  };

  const deleteHandler = (index) => {
    setUserArr(userArr.filter((e, i) => i !== index));
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
      gender: "",
      hobby: [],
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
        <p>Select your Hobbies</p>
        <FormGroup check>
          <Input
            checked={user.hobby.includes("Cricket")}
            type="checkbox"
            value={"Cricket"}
            onChange={(e) => checkHandler("Cricket", e)}
          />{" "}
          <Label check>Cricket</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            checked={user.hobby.includes("Reading")}
            type="checkbox"
            value={"Reading"}
            onChange={(e) => checkHandler("Reading", e)}
          />{" "}
          <Label check>Reading</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            checked={user.hobby.includes("Swimming")}
            type="checkbox"
            value={"Swimming"}
            onChange={(e) => checkHandler("Swimming", e)}
          />{" "}
          <Label check>Swimming</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            checked={user.hobby.includes("Drive")}
            type="checkbox"
            value={"Drive"}
            onChange={(e) => checkHandler("Drive", e)}
          />{" "}
          <Label check>Drive</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            checked={user.hobby.includes("Coding")}
            type="checkbox"
            value={"Coding"}
            onChange={(e) => checkHandler("Coding", e)}
          />{" "}
          <Label check>Coding</Label>
        </FormGroup>
        <hr />
        <div>
          {user?.hobby.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </div>
        {!index || index === 0 ? (
          <button
            onClick={submitHandler}
            className="w-100 btn btn-danger "
            role="button"
          >
            Submit
          </button>
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
      <div className="border border-black rounded-1 mt-2   ">
        <hr />

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>password</th>
              <th>Gender</th>
              <th>Hobby</th>
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
                <td>{user.gender}</td>
                <td>
                  {e?.hobby?.map((hby) => {
                    <li>{hby}</li>;
                  })}
                </td>
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
