import { combineReducers } from "redux";
import taskTittleInput from "./taskTittleInput";
import taskTimeArea from "./taskTimeArea";

const rootReducer = combineReducers({
  taskTittleInput: taskTittleInput,
  taskTimeArea: taskTimeArea,
});

export default rootReducer;
