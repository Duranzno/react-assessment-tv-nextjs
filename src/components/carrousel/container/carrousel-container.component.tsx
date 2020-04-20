import React, { createRef, useState } from 'react';
import {
  Grid, Typography, Button,
} from '@material-ui/core';
import Slider from 'react-slick';
import { TVSchedule } from '../../../models';
import { CarrouselItem } from '../item/carrousel-item.component';
import { Pager } from '../../common/pager/pager.component';
import { setSlickAfterChange } from '../../../helpers';
import options from './react-slick.options.json';
import useStyles from './carrousel-container.styles';

interface Props {
  schedules: TVSchedule[];
  viewAll: Function;
  viewSpecific: Function;
}

export const CarrouselContainer = ({ schedules, viewSpecific }: Props) => {
  const classes = useStyles();
  const refSlick = createRef<Slider>();
  const [slickIndex, setslickIndex] = useState(null);
  const next = () => refSlick?.current?.slickNext();
  const prev = () => refSlick?.current?.slickPrev();
  const [isShowingLastElement, setIsShowingLastElement] = useState(false);

  const afterChange = setSlickAfterChange({
    options,
    length: schedules.length,
    refSlick,
    setIsShowingLastElement,
    setslickIndex,
  });
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
            color="primary"
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
      <Slider
        ref={refSlick}
        afterChange={afterChange}
        {...options}
      >
        {schedules.map((s) => (
          <CarrouselItem schedule={s} key={`${s.id}`} onClick={viewSpecific} />
        ))}
      </Slider>
    </>
  );
};
