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
  const [hours, minutes, seconds] = value.split(":");
  return {
    type: "SET_USER_TIME",
    newTime: {
      hours,
      minutes,
      seconds,
    },
    valueName: itemName,
    value: value,
  };
};

export const setCurrentTime = () => {
  let currentTime = new Date();
  console.log(currentTime);

  return {
    type: "SET_CURRENT_TIME",
    currentTime: {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
    },
  };
};
