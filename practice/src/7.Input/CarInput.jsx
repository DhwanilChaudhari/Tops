import React, { useState } from "react";
import { Button, Input } from "reactstrap";

export default function SingleInput() {
  let [car, setCar] = useState("");
  let [carArr, setCarArr] = useState([]);
  const getData = (e) => {
    console.log("adding");
    setCar(e?.target?.value);
  };
  const addData = () => {
    setCarArr([...carArr, car]);
    setCar("");
  };

  return (
    <div style={{ width: "100vw" }} className=" d-flex justify-content-center ">
      <Input
        className="w-25"
        placeholder="Enter Your car!"
        onChange={(e) => getData(e)}
      />
      {carArr.length === 0 ? <h1>Add Your Car</h1> : <h1> Car List</h1>}
      <Button onClick={() => addData("")}>add</Button>
      <div>
        <ol>
          {carArr.map((e, i) => {
            return (
              <>
                <li className="m-0" key={i}>
                  {e}
                </li>
                <hr className="mt-0" />
              </>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
