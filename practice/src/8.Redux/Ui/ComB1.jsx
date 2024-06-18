import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "flowbite-react";
import { incrementCount } from "../ReduxHome/countSlice";

export default function ComB1() {
  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(incrementCount())}>Increment</Button>
    </div>
  );
}
