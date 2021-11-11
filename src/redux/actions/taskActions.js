export const addTask = (title, autoTime, userTime) => {
  const hours = userTime.hours || autoTime.hours;
  const minutes = userTime.minutes || autoTime.minutes;
  const seconds = userTime.seconds || autoTime.seconds;

  return {
    type: "ADD_TASK",
    newTask: {
      title,
      time: `${hours}:${minutes}:${seconds}`,
    },
  };
};

export const setListDataFromStorage = (storageList) => {
  return {
    type: "SET_DATA_FROM_STORAGE",
    storageList,
  };
};
