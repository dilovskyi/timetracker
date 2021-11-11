export const taskTitleInputInitialState = {
  value: "",
};

let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();
export const taskTimeAreaInitialState = {
  hours,
  minutes,
  seconds,
};

export const taskListInitialState = [];
