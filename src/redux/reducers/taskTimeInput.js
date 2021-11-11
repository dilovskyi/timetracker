import { taskTimeAreaInitialState } from "../initialState";

const taskTimeAreaReducer = (state = taskTimeAreaInitialState, action) => {
  switch (action.type) {
    case "TIME_TICK":
      return {
        ...state,
        ...action.newTime,
      };
    case "SET_USER_TIME":
      return {
        ...state,
        ...action.newTime,
      };
    case "SET_CURRENT_TIME":
      return {
        ...state,
        ...action.currentTime,
      };
    default:
      return state;
  }
};

export default taskTimeAreaReducer;
