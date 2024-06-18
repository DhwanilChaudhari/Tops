import React, { createContext, useState } from "react";
import ComA3 from "./ComA3";
import ComB1 from "./ComB1";

export const UserContext = createContext();

export default function UseContaxt() {
  let [task, setTask] = useState("");
  let name = "Dhwanil Chaudhari";
  const age = 24;

  return (
    <div>
      <UserContext.Provider value={{ age, task, setTask }}>
        <ComA3 name={name} />
        <ComB1 />
      </UserContext.Provider>
    </div>
  );
}
