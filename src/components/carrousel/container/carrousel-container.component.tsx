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
import { strings } from '../../../constants/strings';

interface Props {
  schedules: TVSchedule[];
  viewAll: Function;
  viewSpecific: Function;
}

export const CarrouselContainer = ({ schedules, viewSpecific }: Props) => {
  const cls = useStyles();
  const refSlick = createRef<Slider>();
  const [slickIndex, setslickIndex] = useState(0);
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
        className={cls.root}
      >
        <div>
          <Typography gutterBottom variant="h4" color="textPrimary">
            <b>{strings.featured}</b>
          </Typography>
          <Typography gutterBottom variant="body1">
            <b>{strings.popularShows}</b>
          </Typography>
        </div>
        <div>
          <Pager
            prev={prev}
            next={next}
            color="primary"
            className={cls.pager}
            disablePrev={slickIndex === 0}
            disableNext={isShowingLastElement}
          >
            <Button
              variant="contained"
              color="primary"
              disableElevation
              size="small"
              className={cls.pagerButton}
            >
              <b>{strings.viewAll}</b>
            </Button>
          </Pager>
        </div>
      </Grid>
      <Slider ref={refSlick} afterChange={afterChange} {...options}>
        {schedules.map((s) => (
          <CarrouselItem schedule={s} key={`${s.id}`} onClick={viewSpecific} />
        ))}
      </Slider>
    </>
  );
};
