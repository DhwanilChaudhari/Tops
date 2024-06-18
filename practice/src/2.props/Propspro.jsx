import React, { useState } from "react";
export default function Propspro(props) {
  return (
    <div>
      <div
        className="m-3 d-flex  justify-content-center align-items-center"
        style={{ width: "400px", height: "200px", background: props?.color }}
      >
        <h1>{props?.color}</h1>
      </div>
    </div>
  );
}
