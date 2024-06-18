import { Trash } from "lucide-react";
import React, { useState } from "react";
import { Button, Form, Input, Label, Table } from "reactstrap";

export default function MultipleInput() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [userArr, setUserArr] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setUserArr([...userArr, user]);
    setUser({
      email: "",
      password: "",
    });
  };

  const deleteHandler = (index) => {
    let filterData = userArr.filter((_, i) => i !== index);
    setUserArr(filterData);
  };

  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center ">
      <Form
        onSubmit={(e) => submitHandler(e)}
        className="mt-3 w-50 p-3 border border-black rounded-2"
      >
        <Label for="email">Email</Label>
        <Input
          id="email"
          placeholder="Enter your email"
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <Label for="password">Password</Label>
        <Input
          id="password"
          placeholder="Enter Your password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button className="w-100 p-2 m-o" color="danger" type="submit">
          Submit
        </Button>
      </Form>
      <hr className="w-100" />
      <Table className="w-75 mt-4" striped>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userArr.map((user, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <Trash onClick={() => deleteHandler(i)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
