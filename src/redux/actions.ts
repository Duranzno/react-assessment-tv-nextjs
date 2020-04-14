import { State, Action } from './reducers';
import { ActionTypes } from './types';

/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const initDataAction = (state: State): Action => ({
  type: ActionTypes.INIT_DATA_ACTION,
  data: state,
});
