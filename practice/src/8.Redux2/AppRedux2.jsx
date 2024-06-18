import React from "react";
import { Provider } from "react-redux";
import { store } from "./ReduxHome2/app";
import Home2 from "./Ui/Home2";
import User2 from "./Ui/User2";

export default function AppRedux() {
  return (
    <div>
      <Provider store={store}>
        <Home2 />
        <User2 />
      </Provider>
    </div>
  );
}
