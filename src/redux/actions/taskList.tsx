import { AppDispatch } from "../storeTypes";
import { taskListType } from "./taskListTypes/taskList";
import { userTime } from "./taskListTypes/userTime";
import { addTaskInterface } from "./taskListTypes/addTask";
import { setConfigurableStatusThunkType } from "./taskListTypes/setConfigutableStatus";
import { setUserTimeInterface } from "./taskListTypes/setUserTime";
import { setListDataFromStorageInterface } from "./taskListTypes/setListDataFromStorage";

export const addTask = (title: string, id: string): addTaskInterface => {
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

export const setConfigutableStatus =
  (listItemId: string, flag: boolean): setConfigurableStatusThunkType =>
  (dispatch: AppDispatch) => {
    setTimeout(() => {
      dispatch({
        type: "SET_CONFIGURABLE_STATUS",
        listItemId,
        configurable: flag,
      });
    }, 60000);
  };

export const setUserTime = (
  listItemId: string,
  value: userTime
): setUserTimeInterface => {
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

export const setListDataFromStorage = (
  storageList: taskListType
): setListDataFromStorageInterface => {
  return {
    type: "SET_DATA_FROM_STORAGE",
    storageList,
  };
};
