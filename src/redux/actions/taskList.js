export const addTask = (title, id) => {
  let currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();

  return {
    type: "ADD_TASK",
    newTask: {
      id: id + title,
      title,
      time: {
        configurable: true,
        hours,
        minutes,
      },
    },
  };
};

export const setConfigutableStatus = (listItemId, flag) => {
  return {
    type: "SET_CONFIGURABLE_STATUS",
    listItemId,
    configurable: flag,
  };
};

export const setUserTime = (listItemId, value) => {
  const [hours, minutes] = value;
  return {
    type: "SET_USER_TIME",
    listItemId,
    newTime: {
      hours,
      minutes,
    },
  };
};

export const setListDataFromStorage = (storageList) => {
  return {
    type: "SET_DATA_FROM_STORAGE",
    storageList,
  };
};
