export type userTime = Array<string | number>

export interface taskItem {
  title: string,
  id: string,
  time: {
    hours:string | number, minutes: string | number, configurable: boolean
  }
}
export type storageList = Array<taskItem> | [] 
