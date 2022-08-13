import { combineReducers } from "redux";
import dialogReducer from "./dialogReducer";

const reducers = combineReducers({
  dialog: dialogReducer,
});

export default reducers;
