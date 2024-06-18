import React, { useState } from "react";

export default function ConditionRendering() {
  let [color, setColor] = useState("");
  return (
    <div>
      {color === "Yellow" ? (
        <h1>Car color is Yellow</h1>
      ) : (
        <h1> Car Color is undefine</h1>
      )}
      <button onClick={() => setColor("Yellow")}>Yellow</button>
      <button onClick={() => setColor("")}>Undefine</button>
    </div>
  );
}
