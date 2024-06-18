import React from "react";
import { useDispatch } from "react-redux";

export default function User() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(addUser())}>Add</button>
    </div>
  );
}
