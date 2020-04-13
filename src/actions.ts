import { State, Action } from './reducers';

/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const INIT_DATA_ACTION = 'INIT_DATA_ACTION';
export const initDataAction = (state: State): Action => ({
  type: INIT_DATA_ACTION,
  data: state,
});
