import React, { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default function CheckBox2() {
  let [watchlist, setWatchlist] = useState([]);

  const checkHandler = (wl, e) => {
    if (e.target.checked) {
      setWatchlist([...watchlist, wl]);
    } else {
      let filterData = watchlist.filter((e) => e !== wl);
      setWatchlist(filterData);
    }
  };

  return (
    <div>
      <Form>
        <FormGroup check>
          <Input
            id="cb1"
            type="checkbox"
            onChange={(e) => checkHandler("JACK RYAN", e)}
          />{" "}
          <Label check>JACK RYAN</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            id="cb2"
            type="checkbox"
            onChange={(e) => checkHandler("WATCHMAN", e)}
          />{" "}
          <Label check>WATCHMAN</Label>
        </FormGroup>{" "}
        <FormGroup check>
          <Input
            id="cb3"
            type="checkbox"
            onChange={(e) => checkHandler("MODERN LOVE", e)}
          />{" "}
          <Label check>MODERN LOVE</Label>
        </FormGroup>{" "}
        <FormGroup check>
          <Input
            id="cb4"
            type="checkbox"
            onChange={(e) => checkHandler("LA LA LAND", e)}
          />{" "}
          <Label check>LA LA LAND</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            id="cb5"
            type="checkbox"
            onChange={(e) => checkHandler("REACHER", e)}
          />{" "}
          <Label check>REACHER</Label>
        </FormGroup>
      </Form>
      <hr />
      <div>
        {watchlist.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </div>
    </div>
  );
}
