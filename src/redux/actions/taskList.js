export const addTask = (title, time) => {
  const { hours, minutes, seconds } = time;
  const currentValue = hours + ":" + minutes + ":" + seconds;
  return {
    type: "ADD_TASK",
    newTask: {
      title,
      time: currentValue,
    },
  };
};

export const setListDataFromStorage = (storageList) => {
  return {
    type: "SET_DATA_FROM_STORAGE",
    storageList,
  };
};
