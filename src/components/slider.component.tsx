import React, { createRef, useState } from 'react';

import SlickSlider from 'react-slick';
import { Typography } from '@material-ui/core';
import { TVSchedule } from '../models';


import { setSlickAfterChange } from './slick';
import { SliderContent } from './slider-content.component';
import { Pager } from './pager.component';

interface SliderProps {
  schedules: TVSchedule[];
  onClick: Function;
}
const options = {
  slidesToShow: 1,
  infinite: true,
  speed: 0,
  initialSlide: 0,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
};
export const Slider = ({ schedules, onClick }: SliderProps) => {
  const refSlick = createRef();
  const [index, setslickIndex] = useState(0);
  // @ts-ignore
  const next = () => refSlick?.current?.slickNext();
  // @ts-ignore
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
