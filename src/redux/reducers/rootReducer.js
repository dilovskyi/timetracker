import { combineReducers } from "redux";
import taskTitleInput from "./taskTitleInput";
import taskList from "./taskList";

const rootReducer = combineReducers({
  taskTitleInput,
  taskList,
});

export default rootReducer;
