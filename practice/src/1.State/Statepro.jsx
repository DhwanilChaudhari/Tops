import React, { useState } from "react";
import { Button } from "reactstrap";

let name = ["Dhwanil", "Herry", "Aniket"];
let color = ["green", "yellow", "red"];

export default function StatePro1() {
  let [index, setIndex] = useState(0);
  let [colorIndex, setColorIndex] = useState(0);

  const incIndex = () => {
    if (index < name?.length - 1) {
      setIndex(index + 1);
    } else {
      if (confirm("confirm")) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
  };

  const incColor = () => {
    if (colorIndex < color?.length - 1) {
      setColorIndex(colorIndex + 1);
    } else {
      confirm("Finish");
      setIndex(0);
    }
  };

  return (
    <div>
      <h1>
        {index}
        {name[index]}
      </h1>
      <Button color="danger" onClick={incIndex}>
        Change Name
      </Button>
      <hr />
      <div
        className="mb-2"
        style={{
          height: "100px",
          width: "300px",
          backgroundColor: color[colorIndex],
        }}
      ></div>
      <Button onClick={incColor} color="danger">
        Change color
      </Button>
    </div>
  );
}
