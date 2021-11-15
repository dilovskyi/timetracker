export const taskTitleInputInitialState = {
  value: "",
};

const taskTitleInputReducer = (state = taskTitleInputInitialState, action) => {
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
