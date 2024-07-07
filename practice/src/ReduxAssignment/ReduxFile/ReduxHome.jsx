import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Table from "../Ui/Table";
import Search from "../Ui/Search";

export default function ReduxHome() {
  return (
    <Provider store={store}>
      <div>
        <Search />
        <Table />
      </div>
    </Provider>
  );
}
