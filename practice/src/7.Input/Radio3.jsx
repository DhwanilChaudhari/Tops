import React, { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default function Radio() {
  let [ratings, setRatings] = useState("");
  return (
    <div>
      <h1>Rating : {ratings}</h1>
      <Form>
        <FormGroup check>
          <Input
            checked={ratings === "Excellent"}
            type="radio"
            onChange={() => setRatings("Excellent")}
          />
          <Label check>Excellent</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            checked={ratings === "Good"}
            type="radio"
            onChange={() => setRatings("Good")}
          />
          <Label check>Good</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            checked={ratings === "Avg"}
            type="radio"
            onChange={() => setRatings("Avg")}
          />
          <Label check>Avg</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            checked={ratings === "Bad"}
            type="radio"
            onChange={() => setRatings("Bad")}
          />
          <Label check>Bad</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            checked={ratings === "Poor"}
            type="radio"
            onChange={() => setRatings("Poor")}
          />
          <Label check>Poor</Label>
        </FormGroup>
      </Form>
    </div>
  );
}
