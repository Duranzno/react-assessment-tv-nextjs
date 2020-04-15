import { ActionTypes } from './types';
import { TVSchedule } from '../models';

export const initDataAction = (schedules: TVSchedule[]) => ({
  type: ActionTypes.INIT_DATA_ACTION,
  schedules,
});
export const closeModal = () => ({
  type: ActionTypes.CLOSE_MODAL,
});
export const selectTVSchedule = (selectedId: number) => ({
  type: ActionTypes.FILL_MODAL,
  selectedId,
});
