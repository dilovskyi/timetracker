export const taskTitleInputInitialState = {
  value: "",
};

let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();
export const taskTimeAreaInitialState = {
  autoTime: {
    hours,
    minutes,
    seconds,
  },
  userTime: {
    hours: null,
    minutes: null,
    seconds: null,
  },
};
