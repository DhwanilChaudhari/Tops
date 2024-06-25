import React from "react";
import { Provider } from "react-redux";
import { store } from "./ReduxHome2/app";
import Home2 from "./Ui/Home2";
import User2 from "./Ui/User2";
import Product from "./Ui/Product";

export default function AppRedux() {
  return (
    <div>
      <Provider store={store}>
        {/* <Home2 />
        <User2 /> */}
        <Product />
      </Provider>
    </div>
  );
}
