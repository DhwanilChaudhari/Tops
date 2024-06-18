import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function CrudTask() {
  let [car, setCar] = useState({
    brand: "",
    model: "",
    num: "",
    type: "",
    color: [],
  });

  let [carArr, setCarArr] = useState([]);

  let [index, setIndex] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    setCarArr([...carArr, car]);
    setCar({
      brand: "",
      model: "",
      num: "",
      type: "",
      color: [],
    });
  };
  const deleteHandler = (index) => {
    setCarArr(carArr.filter((e, i) => i == !index));
  };

  const editHandler = (data, index) => {
    setCar(data);
    setIndex(index);
  };
  return (
    <div className="border border-black ">
      <h1 className="d-flex justify-content-center align-items-center ">
        Select Your Car
      </h1>
      <Form className="m-2" onSubmit={(e) => submitHandler(e)}>
        <FormGroup>
          <Label for="exampleAddress">Brand</Label>
          <Input
            id="exampleAddress"
            name="Brand"
            placeholder="Enter your Brand Name"
            value={car.brand}
            onChange={(e) => setCar({ ...car, brand: e?.target?.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress">Model</Label>
          <Input
            id="exampleAddress"
            name="model"
            zc
            placeholder="Enter your Brand Name"
            value={car.model}
            onChange={(e) => setCar({ ...car, model: e?.target?.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress">RgNum.</Label>
          <Input
            id="exampleAddress"
            name="num"
            placeholder="Enter your Brand Name"
            value={car.num}
            onChange={(e) => setCar({ ...car, num: e?.target?.value })}
          />
        </FormGroup>
        <FormGroup check>
          <Input
            name="radio2"
            type="radio"
            checked={car.type === "Sports"}
            onChange={() => setCar({ ...car, type: "Sports" })}
          />{" "}
          <Label check>Sports</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            name="radio2"
            type="radio"
            checked={car.type === "Regular"}
            onChange={() => setCar({ ...car, type: "Regular" })}
          />{" "}
          <Label check>Regular</Label>
        </FormGroup>
        <FormGroup check>
          <Input id="checkbox2" type="checkbox" /> <Label check>Black</Label>
        </FormGroup>
        <FormGroup check>
          <Input id="checkbox2" type="checkbox" /> <Label check>grey</Label>
        </FormGroup>
        <FormGroup check>
          <Input id="checkbox2" type="checkbox" /> <Label check>Blue</Label>
        </FormGroup>
        <FormGroup check>
          <Input id="checkbox2" type="checkbox" /> <Label check>Red</Label>
        </FormGroup>
        <FormGroup check>
          <Input id="checkbox2" type="checkbox" /> <Label check>Green</Label>
        </FormGroup>
        <button onClick={submitHandler}>Submit</button>
      </Form>
      <div>
        <tr />
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Rg.Num</th>
              <th>Type</th>
              <th>Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {carArr.map((car, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{car.brand}</td>
                  <td>{car.model}</td>
                  <td>{car.num}</td>
                  <td>{car.type}</td>
                  <td>{car.color}</td>
                  <td>
                    <Button className="" onClick={() => editHandler(car, i)}>
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button onClick={() => deleteHandler(i)}>Delete</Button>
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
