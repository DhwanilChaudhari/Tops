import React from "react";

export default function FunProps(props) {
  return (
    <div>
      <h1>My name is {props.name}</h1>
      <h1>My age is {props?.age} </h1>
    </div>
  );
}
