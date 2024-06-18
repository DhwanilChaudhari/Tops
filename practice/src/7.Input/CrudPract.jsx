import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function CrudPract() {
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    color: [],
  });

  let [userArr, setUserArr] = useState([]);

  let [index, setIndex] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    setUserArr([...userArr, user]);
    setUser({
      name: "",
      email: "",
      password: "",
      gender: "",
      color: [],
    });
  };

  const updateHandler = () => {
    let newArr = userArr.map((e, i) => {
      if (i === index) return user;
      else e;
    });
    setUserArr(newArr);
    setIndex(null);
    setUser({
      name: "",
      email: "",
      password: "",
      gender: "",
      color: [],
    });
  };

  const checkHandler = (clr, e) => {
    if (e.target.checked) {
      setUser({ ...user, color: [...user.color, clr] });
    } else {
      let filterData = user.color.filter((e) => e !== clr);
      setUser({ ...user, color: filterData });
    }
  };

  const editHandler = (data, index) => {
    setUser(data);
    setIndex(index);
  };

  const deleteHandler = (index) => {
    setUserArr(userArr.filter((e, i) => i !== index));
  };
  return (
    <div>
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <Label for="exampleAddress">Name</Label>
          <Input
            id="exampleAddress"
            name="name"
            placeholder="Enter your name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="password "
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </FormGroup>
        <FormGroup check>
          <Input
            checked={user.gender === "male"}
            name="radio1"
            type="radio"
            onChange={(e) => setUser({ ...user, gender: "male" })}
          />{" "}
          <Label check>Male</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            checked={user.gender === "female"}
            name="radio1"
            type="radio"
            onChange={(e) => setUser({ ...user, gender: "female" })}
          />{" "}
          <Label check>Female</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            type="checkbox"
            checked={user.color.includes}
            onChange={(e) => checkHandler("red", e)}
          />{" "}
          <Label check>Red</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            type="checkbox"
            checked={user.color.includes}
            onChange={(e) => checkHandler("green", e)}
          />{" "}
          <Label check>Green</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            type="checkbox"
            checked={user.color.includes}
            onChange={(e) => checkHandler("blue", e)}
          />{" "}
          <Label check>Blue</Label>
        </FormGroup>
        {index || index === 0 ? (
          <button onClick={updateHandler}>Update</button>
        ) : (
          <button>Submit</button>
        )}
      </Form>
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th> Name</th>
              <th> Email</th>
              <th>Password</th>
              <th>Gender</th>
              <th>Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userArr.map((e, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.password}</td>
                  <td>{user?.gender}</td>
                  <td>
                    {e.color.map((clr) => {
                      return (
                        <div div className="d-flex gap-2 align-items-center">
                          <div
                            style={{
                              width: "20px",
                              height: "20px",
                              backgroundColor: clr,
                              borderRadius: "50%",
                            }}
                          ></div>
                          <li className="list-unstyled">{clr}</li>
                        </div>
                      );
                    })}
                  </td>
                  <td>
                    <Button onClick={() => editHandler(e, i)} color="info">
                      Edit
                    </Button>
                    <Button
                      className="ms-3"
                      onClick={() => deleteHandler(i)}
                      color="danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
