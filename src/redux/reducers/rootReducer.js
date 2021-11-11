import { combineReducers } from "redux";
import taskTitleInput from "./taskTitleInput";
import taskTimeInput from "./taskTimeInput";
import taskList from "./taskList";

const rootReducer = combineReducers({
  taskTitleInput,
  taskTimeInput,
  taskList,
});

export default rootReducer;
