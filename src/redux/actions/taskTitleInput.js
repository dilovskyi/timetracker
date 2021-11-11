export const setTaskTitle = (value) => {
  return {
    type: "SET_TASK_TITTLE",
    value,
  };
};
export const resetTaskTitle = () => {
  return { type: "RESET_TASK_TITTLE" };
};
