import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

export default function UseEffect() {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);
  let [count3, setCount3] = useState(0);
  useEffect(() => {
    console.log("deploy");
  }, []);
  useEffect(() => {
    if (count === 10) {
      alert("count is 10");
    }
    console.log("Count deploy");
  }, [count]);
  useEffect(() => {
    if (count === count2) {
      alert("both are same");
    }
    console.log("Count 2 deploy");
  }, [, count, count2]);
  useEffect(() => {
    console.log("Count 1 and 2 deploy");
  }, [count, count2]);

  return (
    <div>
      UseEffectCom
      <h1> Count is {count}</h1>
      <Button onClick={() => setCount(count + 1)}>Inc</Button>
      <hr />
      <h1> Count2 is {count2}</h1>
      <Button onClick={() => setCount2(count2 + 1)}>Inc</Button>
      <hr />
      <h1> Count3 is {count3}</h1>
      <Button onClick={() => setCount3(count3 + 1)}>Inc</Button>
    </div>
  );
}
