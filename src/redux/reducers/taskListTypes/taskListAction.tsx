import { addTaskInterface } from "../../actions/taskListTypes/addTask";
import { setConfigurableStatusInterface } from "../../actions/taskListTypes/setConfigutableStatus";
import { setUserTimeInterface } from "../../actions/taskListTypes/setUserTime";
import { setListDataFromStorageInterface } from "../../actions/taskListTypes/setListDataFromStorage";

export type taskListActionType = addTaskInterface |
  setConfigurableStatusInterface |
  setUserTimeInterface |
  setListDataFromStorageInterface