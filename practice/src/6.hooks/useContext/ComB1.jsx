import React, { useContext } from "react";
import { UserContext } from "./UseContext";

export default function ComB1() {
  let { age, task } = useContext(UserContext);
  console.log("-----------  data----------->", { age, task });

  return (
    <div>
      <hr />
      <h1>ComB1</h1>
      <h1>Task: {task}</h1>
    </div>
  );
}
