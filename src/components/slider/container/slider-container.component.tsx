import React, { createRef, useState } from 'react';

import SlickSlider from 'react-slick';
import { Typography } from '@material-ui/core';
import { TVSchedule } from '../../../models';


import { setSlickAfterChange } from '../../../helpers';
import { SliderContent } from '../item/slider-item.component';
import { Pager } from '../../common/pager/pager.component';
import options from './react-slick.options.json';

interface SliderProps {
  schedules: TVSchedule[];
  onClick: Function;
}
export const Slider = ({ schedules, onClick }: SliderProps) => {
  const refSlick = createRef<SlickSlider>();
  const [index, setslickIndex] = useState(0);
  const next = () => refSlick?.current?.slickNext();
  const prev = () => refSlick?.current?.slickPrev();

  const { length } = schedules;
  const afterChange = setSlickAfterChange({
    options,
    length: schedules.length,
    refSlick,
    setIsShowingLastElement: console.log,
    setslickIndex,
  });
  return (
    <SlickSlider
      ref={refSlick}
      afterChange={afterChange}
      {...options}
    >
      {schedules.map((s) => (
        <SliderContent key={s.id} schedule={s} onClick={() => onClick(s.id)}>
          <div style={{ maxWidth: '50px' }}>
            <Pager prev={prev} next={next} color="secondary">
              <Typography variant="caption" style={{ color: 'white' }}>
                {`${index + 1} / ${length}`}
              </Typography>
            </Pager>
          </div>
        </SliderContent>
      ))}
    </SlickSlider>
  );
};
