import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Chip,
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
  const classes = useStyles();
  const {
    id,
    airdate,
    name,
    summary,
    show,
  } = schedule;
  const dt = DateTime.fromISO(airdate).toLocaleString(DateTime.DATE_MED);
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => onClick(id)}>
        <div className={classes.wrapper}>
          <div className={classes.coverOverlay}>
            <Chip
              icon={<StarIcon />}
              label="Staff Pick"
              color="primary"
              className={cx([classes.chip, classes.chipYellow])}
            />
            <Chip
              label={dt}
              className={cx([classes.chip, classes.chipGrey])}
            />
          </div>
          <img className={classes.cover} src={image} alt={name} />
        </div>
        <CardContent>
          <Typography variant="body1">
            <b>{show.name}</b>
          </Typography>
          <Typography variant="caption">{name}</Typography>
          <div className={classes.text}>
            {ReactHtmlParser(summary || show.summary)}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
