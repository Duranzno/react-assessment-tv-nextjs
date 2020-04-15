import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { grey } from '@material-ui/core/colors';
import { TVSchedule } from '../models';

const useStyles = makeStyles({
  root: {
    borderRadius: 40,
    backgroundColor: grey[700],
    display: 'flex',
    flexDirection: 'row',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
  },
  btn: {},
  cover: {},
});
interface ContentProps {
  schedule: TVSchedule;
  onClick: Function;
  children: JSX.Element;
}
export const SliderContent = ({
  schedule,
  onClick,
  children,
}: ContentProps) => {
  const {
    show: { image, name, genres },
    name: episodeName,
    id,
  } = schedule;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.info}>
        {genres.map((g) => (
          <Typography variant="caption">{g}</Typography>
        ))}

        <Typography variant="body1">
          <b>{name}</b>
        </Typography>
        <Typography variant="caption">{episodeName}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onClick(id)}
          className={classes.btn}
        >
          <Typography>WATCH TRAILER</Typography>
        </Button>
        {children}
      </div>
      <img
        src={image.original || image.medium}
        alt={schedule.show.name}
        className={classes.cover}
      />
    </div>
  );
};
