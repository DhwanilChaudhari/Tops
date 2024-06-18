import React, { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default function Check() {
  const [check, setCheck] = useState({
    Music: false,
    Sport: false,
    Movie: false,
    Driving: false,
    Coding: false,
  });

  const checkHandler = (e) => {
    const { name, checked } = e.target;
    setCheck((prev) => ({
      ...prev,
      [name]: checked,
    }));
    console.log("Hobby", { [name]: checked });
  };

  return (
    <div>
      <Form>
        <h2>Hobbies</h2>
        <FormGroup check>
          CheckHandler
          <Label check>Music</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            id="checkbox2"
            type="checkbox"
            name="Sport"
            checked={check.Sport}
            onChange={checkHandler}
          />
          <Label check>Sport</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            id="checkbox3"
            type="checkbox"
            name="Movie"
            checked={check.Movie}
            onChange={checkHandler}
          />
          <Label check>Movie</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            id="checkbox4"
            type="checkbox"
            name="Driving"
            checked={check.Driving}
            onChange={checkHandler}
          />
          <Label check>Driving</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            id="checkbox5"
            type="checkbox"
            name="Coding"
            checked={check.Coding}
            onChange={checkHandler}
          />
          <Label check>Coding</Label>
        </FormGroup>
      </Form>
    </div>
  );
}
