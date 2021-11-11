export const timeTick = () => {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  return {
    type: "TIME_TICK",
    newTime: {
      hours,
      minutes,
      seconds,
    },
  };
};

export const setUserTime = (itemName, value) => {
  return {
    type: "SET_USER_TIME",
    valueName: itemName,
    value: value,
  };
};

export const setCurrentTime = () => {
  let currentTime = new Date();

  return {
    type: "SET_CURRENT_TIME",
    resetAll: {
      autoTime: {
        hours: currentTime.getHours(),
        minutes: currentTime.getMinutes(),
        seconds: currentTime.getSeconds(),
      },
      userTime: { userHours: null, userMinutes: null, userSeconds: null },
    },
  };
};
