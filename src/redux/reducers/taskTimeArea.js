import { taskTimeAreaInitialState } from "../initialState";

const taskTimeAreaReducer = (state = taskTimeAreaInitialState, action) => {
  switch (action.type) {
    case "TIME_TICK":
      return {
        ...state,
        autoTime: action.newTime,
      };
    case "SET_USER_TIME":
      const userTime = {
        ...state.userTime,
        [action.valueName]: action.value,
      };
      return {
        ...state,
        userTime,
      };
    case "SET_CURRENT_TIME":
      console.log(action);
      return {
        ...state,
        ...action.resetAll,
      };
    default:
      return state;
  }
};

export default taskTimeAreaReducer;
