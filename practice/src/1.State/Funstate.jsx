import { useState } from "react";
import { Button } from "reactstrap";

export default function Funstate() {
  let [count, setCount] = useState(10);
  let [data, setData] = useState({ amount: 999, point: 123 });
  let x = 99;
  const incX = () => {
    x++;
  };
  const incCount = () => {
    setCount(count + 1);
  };
  const incAmount = () => {
    setData({ ...data, amount: data.amount + 1 });
  };
  const incPoint = () => {
    setData({ ...data, point: data.point + 1 });
  };
  return (
    <div>
      <h1>x is {x} </h1>
      <Button color="danger" onClick={() => incX()}>
        Inc X
      </Button>

      <hr />
      <h1>count is {count}</h1>
      <Button color="danger" onClick={incCount}>
        Inc Count
      </Button>

      <hr />
      <h1>Count 2 is {data?.amount}</h1>
      <Button color="danger" onClick={incAmount}>
        Inc Amount
      </Button>

      <hr />
      <h1>Point is {data?.point}</h1>
      <Button color="danger" onClick={incPoint}>
        Inc point
      </Button>
    </div>
  );
}
