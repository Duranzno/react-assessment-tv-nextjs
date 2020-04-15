// @ts-nocheck
import React, { createRef, useState } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import SlickSlider from 'react-slick';
import { TVSchedule } from '../models';
import { CarrouselItem } from './carrousel-item.component';
import { Pager } from './pager.component';

const preSettings = {
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const setSettings = (afterChange: Function) => ({
  dots: false,
  arrows: false,
  afterChange,
  onEdge: console.log,
  infinite: false,
  speed: 500,
  initialSlide: 0,
  slidesToScroll: 1,
  ...preSettings,
});
interface Props {
  schedules: TVSchedule[];
  viewAll: Function;
  viewSpecific: Function;
}

export const Carrousel = ({ schedules, viewAll, viewSpecific }: Props) => {
  const refSlick = createRef();
  const [slickIndex, setslickIndex] = useState(0);
  const next = () => refSlick.current.slickNext();
  const prev = () => refSlick.current.slickPrev();
  const [isShowingLastElement, setIsShowingLastElement] = useState(false);

  const settings = setSettings((i) => {
    setslickIndex(i);
    /* Due to problems accessing the innerstate of react-slick here we
    calculate the amount of elements that are shown on screen through the
    breakpoint and the initial configuration and the we calculate if we have
    reached the last of the carrousel elements with the slick index */
    const { breakpoint } = refSlick.current.state;
    const maxRowsShown = breakpoint
      ? preSettings.responsive.find(({ breakpoint: b }) => b === breakpoint)
        .settings.slidesToShow
      : preSettings.slidesToShow;
    setIsShowingLastElement(schedules.length <= i + maxRowsShown);
  });

  return (
    <>
      <Grid container direction="row" justify="space-between">
        <Grid item container direction="column">
          <Typography variant="subtitle2">
            <b>Featured</b>
          </Typography>
          <Typography variant="body2">
            Popular shows airing tonight
          </Typography>
        </Grid>
        <Pager
          prev={prev}
          next={next}
          disablePrev={slickIndex === 0}
          disableNext={isShowingLastElement}
        >
          <Button onClick={viewAll}>
            View All
          </Button>
        </Pager>
      </Grid>
      <SlickSlider ref={refSlick} {...settings}>
        {schedules.map((s) => (
          <CarrouselItem schedule={s} key={`${s.id}`} onClick={viewSpecific} />
        ))}
      </SlickSlider>
    </>
  );
};
