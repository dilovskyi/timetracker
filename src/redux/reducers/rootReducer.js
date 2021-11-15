import { combineReducers } from "redux";
import taskTitleInput from "./taskTitleInput";
import timeLabel from "./timeLabel";
import taskList from "./taskList";

const rootReducer = combineReducers({
  taskTitleInput,
  timeLabel,
  taskList,
});

export default rootReducer;
