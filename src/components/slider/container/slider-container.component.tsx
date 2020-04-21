import React, { createRef, useState } from 'react';

import SlickSlider from 'react-slick';
import { Typography } from '@material-ui/core';
import { TVSchedule } from '../../../models';


import { setSlickAfterChange } from '../../../helpers';
import { SliderContent } from '../item/slider-item.component';
import { Pager } from '../../common/pager/pager.component';
import options from './react-slick.options.json';
import useStyles from './slider-container.styles';
import { strings } from '../../../constants/strings';

interface SliderProps {
  schedules: TVSchedule[];
  onClick: Function;
}
export const Slider = ({ schedules, onClick }: SliderProps) => {
  const refSlick = createRef<SlickSlider>();
  const [index, setslickIndex] = useState(0);
  const next = () => refSlick?.current?.slickNext();
  const prev = () => refSlick?.current?.slickPrev();
  const cls = useStyles();
  const { length } = schedules;
  const afterChange = setSlickAfterChange({
    options,
    length: schedules.length,
    refSlick,
    setIsShowingLastElement: console.log,
    setslickIndex,
  });
  return (
    <>
      <Typography variant="h4" color="textPrimary" gutterBottom className={cls.recommended}>
        {strings.recommended}
      </Typography>
      <SlickSlider
        ref={refSlick}
        afterChange={afterChange}
        {...options}
      >
        {schedules.map((s) => (
          <SliderContent key={s.id} schedule={s} onClick={() => onClick(s.id)}>
            <div className={cls.pager}>
              <Pager prev={prev} next={next} color="secondary">
                <Typography variant="subtitle2" color="textSecondary" className={cls.indexText}>
                  {`${index + 1} / ${length}`}
                </Typography>
              </Pager>
            </div>
          </SliderContent>
        ))}
      </SlickSlider>
    </>
  );
};
