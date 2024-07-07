import { createStore, combineReducers } from "redux";
import tableReducer from "./TableReducer";

const rootReducer = combineReducers({
  table: tableReducer,
});

const store = createStore(rootReducer);

export default store;
