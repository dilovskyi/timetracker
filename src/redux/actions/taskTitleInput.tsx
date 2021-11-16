import { setTaskTitleInterface } from "./taskTitleInputTytes/setTaskTitle";
import { resetTaskTitleInterface } from "./taskTitleInputTytes/resetTaskTitle";
export const setTaskTitle = (value: string): setTaskTitleInterface => {
  return {
    type: "SET_TASK_TITTLE",
    value,
  };
};
export const resetTaskTitle = (): resetTaskTitleInterface => {
  return { type: "RESET_TASK_TITTLE" };
};
