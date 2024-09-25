import React from "react";
import { Provider } from "react-redux";
import { store } from "./ReduxHomeFile/store";
import Accordion from "./Ui/Accordion";

export default function ReduxApp() {
  return (
    <div>
      <Provider store={store}>
        <Accordion />
      </Provider>
    </div>
  );
}
