import { taskListInitialState } from "../initialState";

const taskListReducer = (state = taskListInitialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.newTask];
    case "SET_DATA_FROM_STORAGE":
      return [...action.storageList];
    default:
      return state;
  }
};

export default taskListReducer;
