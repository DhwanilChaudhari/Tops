import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, FormGroup, Input, Label, Table } from "reactstrap";
import { Edit, Trash } from "lucide-react";

export default function MobileForm() {
  let [mobile, setMobile] = useState({
    name: "",
    brand: "",
    model: "",
    color: "",
    price: "",
  });
  let [mobileArr, setMobileArr] = useState([]);
  let [index, setIndex] = useState(null);
  let [update, setUpdate] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      mobile.name.trim() === "" ||
      mobile.brand.trim() === "" ||
      mobile.model.trim() === "" ||
      mobile.color.trim() === "" ||
      mobile.price.trim() === ""
    ) {
      toast.warn("Please fill all the entries");
    } else {
      if (update) {
        updateHandler();
      } else {
        setMobileArr([...mobileArr, mobile]);
        setMobile({
          name: "",
          brand: "",
          model: "",
          color: "",
          price: "",
        });
      }
    }
  };

  const deleteHandler = (index) => {
    const filterData = mobileArr.filter((e, i) => i !== index);
    setMobileArr(filterData);
  };

  const editHandler = (data, index) => {
    setMobile(data);
    setIndex(index);
    setUpdate(true);
  };

  const updateHandler = () => {
    const newArr = mobileArr.map((e, i) => {
      if (i === index) {
        return mobile;
      } else {
        return e;
      }
    });
    setMobileArr(newArr);
    setMobile({
      name: "",
      brand: "",
      model: "",
      color: "",
      price: "",
    });
    setIndex(null);
    setUpdate(false);
  };

  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center ">
      <FormGroup
        className="mt-3 w-50 p-4 border border-black rounded-2"
        onSubmit={(e) => submitHandler(e)}
      >
        <Label for="name">Name</Label>
        <Input
          id="brand"
          placeholder="Enter Your Name"
          value={mobile.name}
          onChange={(e) => setMobile({ ...mobile, name: e.target.value })}
        />
        <Label for="Brand">Brand</Label>
        <Input
          id="Brand"
          placeholder="Enter Your brand"
          value={mobile.brand}
          onChange={(e) => setMobile({ ...mobile, brand: e.target.value })}
        />
        <Label for="model">Model</Label>
        <Input
          id="model"
          placeholder="Enter model id"
          value={mobile.model}
          onChange={(e) => setMobile({ ...mobile, model: e.target.value })}
        />
        <Label for="color">Color</Label>
        <Input
          id="color"
          placeholder="Enter Your Color"
          value={mobile.color}
          onChange={(e) => setMobile({ ...mobile, color: e.target.value })}
        />
        <Label for="price">Price</Label>
        <Input
          id="price"
          placeholder="Enter Price"
          value={mobile.price}
          onChange={(e) => setMobile({ ...mobile, price: e.target.value })}
        />
      </FormGroup>
      {update ? (
        <Button className="w-50" color="blue" onClick={updateHandler}>
          Update
        </Button>
      ) : (
        <Button onClick={submitHandler} className="w-50" color="danger">
          Submit
        </Button>
      )}
      <hr className="w-100" />
      <Table className="w-100 mt-4" striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {mobileArr.map((mobile, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{mobile.name}</td>
              <td>{mobile.brand}</td>
              <td>{mobile.model}</td>
              <td>{mobile.color}</td>
              <td>{mobile.price}</td>
              <td>
                <Edit
                  onClick={() => editHandler(mobile, i)}
                  color="blue"
                  role="button"
                />
                <Trash
                  onClick={() => deleteHandler(i)}
                  color="red"
                  role="button"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
