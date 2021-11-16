import {storageList} from './storageList'
export interface setListDataFromStorageInterface {
  type: "SET_DATA_FROM_STORAGE",
  storageList: storageList,
}