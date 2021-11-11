import { combineReducers } from "redux";
import taskTitleInput from "./taskTitleInput";
import taskTimeArea from "./taskTimeArea";

const rootReducer = combineReducers({
  taskTitleInput: taskTitleInput,
  taskTimeArea: taskTimeArea,
});

export default rootReducer;
