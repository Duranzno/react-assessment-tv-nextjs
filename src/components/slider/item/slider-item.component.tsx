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
  const cls = useStyles();
  const img = image.original || image.medium;
  return (
    <div className={cls.root}>
      <div className={cls.info}>
        <Typography
          color="textSecondary"
          variant="caption"
          gutterBottom
          className={cls.upperCase}
        >
          {genres.length > 0
            ? genres.slice(0, 3).reduce((prev, cur) => `${prev} ${cur}`, '')
            : strings.noGenres}
        </Typography>

        <div>
          <Typography gutterBottom color="textSecondary" variant="h6" className={cls.upperCase}>
            <b>{name}</b>
          </Typography>
          <Typography gutterBottom color="textSecondary" variant="body2">
            {episodeName}
          </Typography>
        </div>
        <div className={cls.buttonContainer}>
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            size="large"
            onClick={() => onClick(id)}
            className={cls.button}
          >
            {strings.watchTrailer}
          </Button>
        </div>
        {children}
      </div>
      <img
        src={img}
        // backgroundColor: '#cccccc',
        // }}
        alt={name}
        className={cls.cover}
      />
    </div>
  );
};
