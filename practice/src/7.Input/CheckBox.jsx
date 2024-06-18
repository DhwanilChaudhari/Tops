import React, { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default function CheckBox() {
  let [color, setColor] = useState([]);

  const checkHandler = (clr, e) => {
    if (e.target.checked) {
      setColor([...color, clr]);
    } else {
      let filterData = color.filter((e) => e !== clr);
      setColor(filterData);
    }
  };
  return (
    <div>
      <Form>
        <FormGroup check>
          <Input
            id="cb"
            type="checkbox"
            onChange={(e) => checkHandler("Red", e)}
          />{" "}
          <Label check>Red</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            id="cb"
            type="checkbox"
            onChange={(e) => checkHandler("Green", e)}
          />{" "}
          <Label check>Green</Label>
        </FormGroup>{" "}
        <FormGroup check>
          <Input
            id="cb"
            type="checkbox"
            onChange={(e) => checkHandler("Blue", e)}
          />{" "}
          <Label check>Blue</Label>
        </FormGroup>{" "}
        <FormGroup check>
          <Input
            id="cb"
            type="checkbox"
            onChange={(e) => checkHandler("Yellow", e)}
          />{" "}
          <Label check>Yellow</Label>
        </FormGroup>
      </Form>
      <hr />
      <div>
        {color.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </div>
    </div>
  );
}
