import React, { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default function Radio() {
  let [transport, setTransport] = useState("");
  return (
    <div>
      <h1>Transport : {transport}</h1>
      <Form>
        <FormGroup check>
          <Input
            checked={transport === "Bus"}
            type="radio"
            onChange={() => setTransport("Bus")}
          />
          <Label check>Bus</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            checked={transport === "Train"}
            type="radio"
            onChange={() => setTransport("Train")}
          />
          <Label check>Train</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            checked={transport === "Airbus"}
            type="radio"
            onChange={() => setTransport("Airbus")}
          />
          <Label check>Airbus</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            checked={transport === "Boat"}
            type="radio"
            onChange={() => setTransport("Boat")}
          />
          <Label check>Boat</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            checked={transport === "Taxi"}
            type="radio"
            onChange={() => setTransport("Taxi")}
          />
          <Label check>taxi</Label>
        </FormGroup>
      </Form>
    </div>
  );
}
