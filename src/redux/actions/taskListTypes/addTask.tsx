export interface addTaskInterface {
  type: "ADD_TASK",
  newTask: {
    id: string,
    title: string
    time: {
      configurable: boolean,
      hours: number,
      minutes: number,
    },
  },
}