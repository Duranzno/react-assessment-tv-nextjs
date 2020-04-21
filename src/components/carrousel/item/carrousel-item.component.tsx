import React from 'react';
import {
  Grid,
  Typography,
  Chip,
  Paper,
} from '@material-ui/core';
import ReactHtmlParser from 'react-html-parser';
import StarIcon from '@material-ui/icons/Star';
import cx from 'classnames';
import { DateTime } from 'luxon';
import { TVSchedule } from '../../../models';
import useStyles from './carrousel-item.styles';

interface Props {
  schedule: TVSchedule;
  onClick: Function;
}
export const CarrouselItem = ({ schedule, onClick }: Props) => {
  const image = schedule?.show?.image?.medium
      || schedule?.show?.image?.original;
  const cls = useStyles();
  const {
    airdate,
    name,
    show,
  } = schedule;
  const dt = DateTime.fromISO(airdate).toLocaleString(DateTime.DATE_MED);
  return (
    <Paper className={cls.card} elevation={0}>
      <div className={cls.imageWrapper}>
        <Grid container direction="row" justify="space-between" className={cls.imageOverlay}>
          <Chip
            icon={<StarIcon />}
            label="Staff Pick"
            color="primary"
            className={cx([cls.chip, cls.chipYellow])}
          />
          <Chip label={dt} className={cx([cls.chip, cls.chipGrey])} />
        </Grid>
        <img className={cls.image} src={image} alt={name} />
      </div>
      <div className={cls.content}>
        <Typography variant="h5" gutterBottom className={cls.title}>
          {show.name}
        </Typography>
        <Typography variant="h6" gutterBottom className={cls.content}>
          {name}
        </Typography>
        <Typography variant="h6" gutterBottom className={cls.content}>
          {show.network?.name}
        </Typography>
      </div>
    </Paper>
  );
};
