import { Edit, Trash } from "lucide-react";
import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function MultipleInput2() {
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: "",
    color: "",
    price: "",
  });
  const [carArr, setCarArr] = useState([]);
  const [index, setIndex] = useState(null);
  const [update, setUpdate] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      car.brand.trim() === "" ||
      car.model.trim() === "" ||
      car.year.trim() === "" ||
      car.color.trim() === "" ||
      car.price.trim() === ""
    ) {
      alert("Please fill all the entries");
    } else {
      if (update) {
        updateHandler();
      } else {
        setCarArr([...carArr, car]);
        setCar({
          brand: "",
          model: "",
          year: "",
          color: "",
          price: "",
        });
      }
    }
  };

  const deleteHandler = (index) => {
    const filterData = carArr.filter((e, i) => i !== index);
    setCarArr(filterData);
  };

  const editHandler = (data, index) => {
    setCar(data);
    setIndex(index);
    setUpdate(true);
  };

  const updateHandler = () => {
    const newArr = carArr.map((e, i) => {
      if (i === index) {
        return car;
      } else {
        return e;
      }
    });
    setCarArr(newArr);
    setCar({
      brand: "",
      model: "",
      year: "",
      color: "",
      price: "",
    });
    setIndex(null);
    setUpdate(false);
  };

  return (
    <div>
      <Form
        className="mt-3 w-100 p-4 border border-black rounded-2"
        onSubmit={(e) => submitHandler(e)}
      >
        <FormGroup>
          <Label for="brand">Company</Label>
          <Input
            id="brand"
            name="brand"
            placeholder="Enter the company"
            value={car.brand}
            onChange={(e) => setCar({ ...car, brand: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="model">Model</Label>
          <Input
            id="model"
            name="model"
            placeholder="Enter model ID"
            value={car.model}
            onChange={(e) => setCar({ ...car, model: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="year">Year</Label>
          <Input
            id="year"
            name="year"
            placeholder="Enter year"
            value={car.year}
            onChange={(e) => setCar({ ...car, year: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="color">Color</Label>
          <Input
            id="color"
            name="color"
            placeholder="Enter your color"
            value={car.color}
            onChange={(e) => setCar({ ...car, color: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            id="price"
            name="price"
            placeholder="Total price"
            value={car.price}
            onChange={(e) => setCar({ ...car, price: e.target.value })}
          />
        </FormGroup>
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
      <hr />

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Company</th>
            <th>Model ID</th>
            <th>Year</th>
            <th>Color</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {carArr.map((car, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{car.brand}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.color}</td>
              <td>{car.price}</td>
              <td>
                <Edit onClick={() => editHandler(car, i)} />
                <Trash onClick={() => deleteHandler(i)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
