import { combineReducers } from "redux";
import taskTitleInput from "./taskTitleInput";
import taskTimeInput from "./taskTimeInput";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
  taskTitleInput,
  taskTimeInput,
  tasks: taskReducer,
});

export default rootReducer;
