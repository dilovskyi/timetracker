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

export const setUserTime = (inputKey, value) => {
  return {
    type: "SET_USER_TIME",
    key: "user" + inputKey[0].toUpperCase() + inputKey.slice(1),
    value: value,
  };
};

export const setCurrentTime = () => {
  let currentTime = new Date();

  return {
    type: "SET_CURRENT_TIME",
    resetAll: {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
      userHours: null,
      userMinutes: null,
      userSeconds: null,
    },
  };
};
