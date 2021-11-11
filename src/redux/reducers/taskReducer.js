import { taskListInitialState } from "../initialState";

const taskListReducer = (state = taskListInitialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.newTask];
    default:
      return state;
  }
};

export default taskListReducer;
