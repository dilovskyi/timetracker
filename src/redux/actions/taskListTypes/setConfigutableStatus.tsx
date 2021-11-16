import { ThunkAction } from 'redux-thunk'
import { AnyAction } from 'redux'
import { StateType } from '../../storeTypes'

export type setConfigurableStatusThunkType = ThunkAction<void, StateType, unknown, AnyAction>

export interface setConfigurableStatusInterface {
  type: "SET_CONFIGURABLE_STATUS",
  listItemId: string,
  configurable: boolean,
}
