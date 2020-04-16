// @ts-nocheck
import React, { createRef, useState } from 'react';
import {
  Grid, Typography, Button, makeStyles,
} from '@material-ui/core';
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
  const next = () => refSlick?.current?.slickNext();
  const prev = () => refSlick?.current?.slickPrev();
  const [isShowingLastElement, setIsShowingLastElement] = useState(false);

  const settings = setSettings((i) => {
    setslickIndex(i);
    /* Due to problems accessing the innerstate of react-slick here we
    calculate the amount of elements that are shown on screen through the
    breakpoint and the initial configuration and the we calculate if we have
    reached the last of the carrousel elements with the slick index */
    let breakpoint = false;
    try {
      breakpoint = refSlick?.current?.state?.breakpoint;
      const maxRowsShown = breakpoint
        ? preSettings.responsive.find(({ breakpoint: b }) => b === breakpoint)
          .settings?.slidesToShow || preSettings.slidesToShow
        : preSettings.slidesToShow;
      setIsShowingLastElement(schedules.length <= i + maxRowsShown);
    } catch (error) {
      console.log(breakpoint);
      console.error(error);
    }
  });
  const classes = makeStyles(({ spacing }) => ({
    root: { padding: spacing(3) },
    pager: { width: spacing(20) },
  }))();
  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        className={classes.root}
      >
        <div>
          <Typography variant="h4" color="textPrimary">
            <b>Featured</b>
          </Typography>
          <Typography variant="body1">Popular shows airing tonight</Typography>
        </div>
        <Pager
          prev={prev}
          next={next}
          className={classes.pager}
          disablePrev={slickIndex === 0}
          disableNext={isShowingLastElement}
        >
          <Button variant="contained" color="primary" onClick={viewAll} disableElevation size="small">
            <b>
              View All
            </b>
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
