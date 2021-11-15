export const timeLabelInitialState = "";

const timeLabelReducer = (state = timeLabelInitialState, action) => {
  switch (action.type) {
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

export default timeLabelReducer;
