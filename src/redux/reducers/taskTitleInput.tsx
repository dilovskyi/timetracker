import { taskTitleInputActionType } from "./taskTitleInputTypes/taskTitleInputAction";
import { taskTitleInputStateType } from "./taskTitleInputTypes/taskTitleInputState";

export const taskTitleInputInitialState: taskTitleInputStateType = {
  value: "",
};

const taskTitleInputReducer = (state = taskTitleInputInitialState, action: taskTitleInputActionType): taskTitleInputStateType => {
  switch (action.type) {
    case "SET_TASK_TITTLE":
      return {
        ...state,
        value: action.value,
      };
    case "RESET_TASK_TITTLE":
      return {
        ...state,
        value: "",
      };
    default:
      return state;
  }
};

export default taskTitleInputReducer;
