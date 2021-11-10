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
        [action.key]: action.value,
      };
    case "SET_CURRENT_TIME":
      return {
        ...state,
        ...action.resetAll,
      };
    default:
      return state;
  }
};

export default taskTimeAreaReducer;
