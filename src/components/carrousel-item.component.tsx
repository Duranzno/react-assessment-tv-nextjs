import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  makeStyles,
  Chip,
} from '@material-ui/core';
import ReactHtmlParser from 'react-html-parser';
import StarIcon from '@material-ui/icons/Star';
import cx from 'classnames';
import { TVSchedule } from '../models';

interface Props {
  schedule: TVSchedule;
  onClick: Function;
}
export const CarrouselItem = ({ schedule, onClick }: Props) => {
  const image = schedule?.show?.image?.medium
      || schedule?.show?.image?.original;
  const classes = makeStyles(({ breakpoints }) => ({
    card: { maxWidth: '15rem' },
    cover: {
      width: '100%',
      height: '100%',
      borderRadius: 50,
    },
    text: {
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-line-clamp': 4,
      '-webkit-box-orient': 'vertical',
    },
    wrapper: {
      width: '100%',
      minHeight: '15rem',
      minWidth: '100%',
      padding: '1rem',
      position: 'relative',
    },
    chip: {
      marginRight: '1rem',
    },
    chipGrey: {
      backgroundColor: 'rgba(0,0,0,0.5)',

      borderRadius: 100,
      color: '#ffffff',
      textTransform: 'none',
      width: '100%',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.32)',
      },
      [breakpoints.up('sm')]: {
        // width: 'auto',
      },
    },
    chipYellow: {
      marginLeft: '0.5rem',
    },
    coverOverlay: {
      position: 'absolute',
      margin: '1rem 1rem 0',
      left: 0,
      zIndex: 100,
      right: 0,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  }))();
  const {
    id,
    airdate,
    name,
    summary,
    show,
  } = schedule;
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
              label={airdate}
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
