import React, { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default function Range() {
  let [count, setCount] = useState(0);

  const displayCount = (e) => {
    setCount(e.target.value);
  };
  return (
    <div>
      <p>Count :{count}</p>
      <Form>
        <FormGroup>
          <Label for="exampleRange">Range</Label>
          <Input
            id="exampleRange"
            name="range"
            type="range"
            min={0}
            max={100}
            step={20}
            value={count}
            onChange={displayCount}
          />
        </FormGroup>
      </Form>
    </div>
  );
}
