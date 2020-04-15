import { TVSchedule } from '../models';
import { ActionTypes } from './types';

export interface State {
  schedules: TVSchedule[];
}
export const initialState: State = {
  schedules: [],
};
export interface Action {
  type: ActionTypes;
  data: State;
}
export const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.INIT_DATA_ACTION:
      return action.data;
    default:
      return state;
  }
};
