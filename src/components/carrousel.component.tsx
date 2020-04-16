import React, { createRef, useState } from 'react';
import {
  Grid, Typography, Button, makeStyles,
} from '@material-ui/core';
import SlickSlider from 'react-slick';
import { TVSchedule } from '../models';
import { CarrouselItem } from './carrousel-item.component';
import { Pager } from './pager.component';
import { setSlickAfterChange } from './slick';

const options = {
  slidesToShow: 4,
  infinite: false,
  speed: 500,
  initialSlide: 0,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
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

interface Props {
  schedules: TVSchedule[];
  viewAll: Function;
  viewSpecific: Function;
}

export const Carrousel = ({ schedules, viewSpecific }: Props) => {
  const refSlick = createRef();
  const [slickIndex, setslickIndex] = useState(0);
  // @ts-ignore
  const next = () => refSlick?.current?.slickNext();
  // @ts-ignore
  const prev = () => refSlick?.current?.slickPrev();
  const [isShowingLastElement, setIsShowingLastElement] = useState(false);

  const afterChange = setSlickAfterChange({
    options,
    length: schedules.length,
    refSlick,
    setIsShowingLastElement,
    setslickIndex,
  });
  const classes = makeStyles(({ spacing, breakpoints }) => ({
    root: { padding: spacing(3) },
    pager: { [breakpoints.up('md')]: { width: spacing(25) } },
  }))();
  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-end"
        className={classes.root}
      >
        <div>
          <Typography variant="h4" color="textPrimary">
            <b>Featured</b>
          </Typography>
          <Typography variant="body1">Popular shows airing tonight</Typography>
        </div>
        <div>

          <Pager
            prev={prev}
            next={next}
            className={classes.pager}
            disablePrev={slickIndex === 0}
            disableNext={isShowingLastElement}
          >
            <Button
              variant="contained"
              color="primary"
              disableElevation
              size="small"
            >
              <b>
                View All
              </b>
            </Button>
          </Pager>
        </div>
      </Grid>
      <SlickSlider
        ref={refSlick}
        afterChange={afterChange}
        {...options}
      >
        {schedules.map((s) => (
          <CarrouselItem schedule={s} key={`${s.id}`} onClick={viewSpecific} />
        ))}
      </SlickSlider>
    </>
  );
};
