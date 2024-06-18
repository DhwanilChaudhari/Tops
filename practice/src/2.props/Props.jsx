import { useState } from "react";
import FunProps from "./FunProps";
import Propspro from "./Propspro";
import { Button } from "reactstrap";

export default function Props() {
  let [index, setIndex] = useState(0);
  let color = ["Green", "Yellow", "Red"];
  const incIndex = () => {
    if (index < color?.length - 1) {
      setIndex(index + 1);
    } else {
      if (index === color?.length - 1 && confirm("confirm")) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
  };
  return (
    <div>
      {/*<FunProps name={"dhwanil"} age={24} />*/}
      <Propspro color={index}></Propspro>
      <Propspro color={color[index]} />
      <Button onClick={incIndex}>Change Color</Button>
    </div>
  );
}
