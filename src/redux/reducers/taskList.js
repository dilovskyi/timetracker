import { taskListInitialState } from "../initialState";

const taskListReducer = (state = taskListInitialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [action.newTask, ...state];
    case "SET_DATA_FROM_STORAGE":
      return [...action.storageList];
    default:
      return state;
  }
};

export default taskListReducer;
