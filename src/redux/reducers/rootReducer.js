import { combineReducers } from "redux";
import taskTitleInput from "./taskTitleInput";
import taskTimeArea from "./taskTimeArea";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
  taskTitleInput,
  taskTimeArea,
  tasks: taskReducer,
});

export default rootReducer;
