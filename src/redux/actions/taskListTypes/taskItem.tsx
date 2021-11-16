export interface taskItemInterface {
  title: string,
  id: string,
  time: {
    hours:string | number, minutes: string | number, configurable: boolean
  }
}