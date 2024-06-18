import React, { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default function CheckBox3() {
  let [playlist, setPlaylist] = useState([]);

  const checkHandler = (pl, e) => {
    if (e.target.checked) {
      setPlaylist([...playlist, pl]);
    } else {
      let filterData = playlist.filter((e) => e !== pl);
      setPlaylist(filterData);
    }
  };
  return (
    <div>
      <Form>
        <FormGroup check>
          <Input
            id="cb1"
            type="checkbox"
            onChange={(e) => checkHandler("NFS", e)}
          />{" "}
          <Label check>NFS</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            id="cb2"
            type="checkbox"
            onChange={(e) => checkHandler("COD", e)}
          />{" "}
          <Label check>COD</Label>
        </FormGroup>{" "}
        <FormGroup check>
          <Input
            id="cb3"
            type="checkbox"
            onChange={(e) => checkHandler("GOW", e)}
          />{" "}
          <Label check>GOW</Label>
        </FormGroup>{" "}
        <FormGroup check>
          <Input
            id="cb4"
            type="checkbox"
            onChange={(e) => checkHandler("UNCHARTED", e)}
          />{" "}
          <Label check>UNCHARTED</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            id="cb5"
            type="checkbox"
            onChange={(e) => checkHandler("LAST OF US", e)}
          />{" "}
          <Label check>LAST OF US</Label>
        </FormGroup>
      </Form>
      <hr />
      <div>
        {playlist.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </div>
    </div>
  );
}
