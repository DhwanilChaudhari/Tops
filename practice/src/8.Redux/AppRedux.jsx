import React from "react";
import { Provider } from "react-redux";

import { store } from "./ReduxHome/app";

export default function AppRedux() {
  return (
    <div>
      <Provider store={store}></Provider>
    </div>
  );
}
