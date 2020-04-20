import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { TVSchedule } from '../../../models';
import useStyles from './slider-item.styles';
import { strings } from '../../../constants/strings';

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
  const img = image.original || image.medium;
  return (
    <div className={classes.root}>
      <div className={classes.info}>
        <Typography color="textSecondary" variant="caption" className={classes.upperCase}>
          {genres.slice(0, 3).reduce((prev, cur) => `${prev} ${cur}`, '')}
        </Typography>

        <div>
          <Typography
            color="textSecondary"
            variant="h6"
            className={classes.upperCase}
          >
            <b>{name}</b>
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {episodeName}
          </Typography>
        </div>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => onClick(id)}
          className={classes.button}
        >
          {strings.watchTrailer}
        </Button>
        {children}
      </div>
      <img
        src={img}
          // backgroundColor: '#cccccc',
        // }}
        alt={name}
        className={classes.cover}
      />
    </div>
  );
};
