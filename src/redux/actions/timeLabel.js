export const setUserTime = (itemName, value) => {
  const [hours, minutes, seconds] = value;
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

  return {
    type: "SET_CURRENT_TIME",
    currentTime: {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
    },
  };
};
