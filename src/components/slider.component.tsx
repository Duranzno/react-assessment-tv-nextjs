import React, { useState } from 'react';

import { Typography } from '@material-ui/core';
import { TVSchedule } from '../models';
import { SliderContent } from './slider-content.component';
import { Pager } from './pager.component';

interface SliderProps {
  schedules: TVSchedule[];
  onClick: Function;
}
export const Slider = ({ schedules, onClick }: SliderProps) => {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex(index === 0 ? schedules.length : 0);
  const next = () => setIndex(index === schedules.length - 1 ? 0 : index + 1);
  if (schedules.some((s) => !s.show) || !schedules[index].show) {
    return null;
  }
  return (
    <SliderContent schedule={schedules[index]} onClick={onClick}>
      <Pager prev={prev} next={next}>
        <Typography>{`${index + 1}/${schedules.length}`}</Typography>
      </Pager>
    </SliderContent>
  );
};
