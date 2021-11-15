const taskListInitialState = [];

const taskListReducer = (state = taskListInitialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [action.newTask, ...state];
    case "SET_CONFIGURABLE_STATUS":
      return state.map((item) => {
        if (item.id === action.listItemId) {
          return {
            ...item,
            time: {
              ...item.time,
              configurable: action.configurable,
            },
          };
        }
        return item;
      });
    case "SET_USER_TIME":
      return state.map((item) => {
        if (item.id === action.listItemId) {
          return {
            ...item,
            time: {
              ...item.time,
              ...action.newTime,
            },
          };
        }
        return item;
      });
    case "SET_DATA_FROM_STORAGE":
      return [...action.storageList];
    default:
      return state;
  }
};

export default taskListReducer;
