import { TVSchedule, filterFaultySchedules } from '../models';
import { ActionTypes } from './types';

export interface State {
  schedules: TVSchedule[];
  modalData: TVSchedule|null;
}
export const initialState: State = {
  schedules: [],
  modalData: null,
};

export const reducer = (state = initialState, action): State => {
  switch (action.type) {
    case ActionTypes.INIT_DATA_ACTION:
      return {
        ...state,
        schedules: (action.schedules as TVSchedule[]).filter(filterFaultySchedules),
      };
    case ActionTypes.CLOSE_MODAL: {
      return { ...state, modalData: null };
    }
    case ActionTypes.FILL_MODAL: {
      const modalData = state.schedules.find(({ id }) => id === action.selectedId);
      return { ...state, modalData };
    }
    default:
      return state;
  }
};
