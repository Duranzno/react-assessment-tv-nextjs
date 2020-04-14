import fetch from 'node-fetch';
import { Schedule } from '../models';

export const fetchTVShows = async (country?: string): Promise<Schedule> => {
  try {
    const param = country ? `country=${country}` : '';
    const res = await fetch(`http://api.tvmaze.com/schedule${param}`);
    return res.json() as Schedule;
  } catch (error) {
    /* eslint-disable no-console */
    console.log('Error on fetching', error);
    return {};
  }
};
