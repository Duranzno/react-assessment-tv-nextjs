import React from 'react';
import { Typography, Button, Grid } from '@material-ui/core';
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
    <Grid container direction="row" xs={12} className={cls.root}>
      <Grid
        item
        container
        direction="column"
        justify="space-between"
        className={cls.info}
        md={4}
        xs={12}
      >
        <div>
          <Typography color="textSecondary" variant="body1" className={cls.genres}>
            {genres.length > 0
              ? genres.slice(0, 3).reduce((prev, cur) => `${prev} ${cur}`, '')
              : strings.noGenres}
          </Typography>

          <Typography gutterBottom color="textSecondary" variant="h5" className={cls.name}>
            {name}
          </Typography>
          <Typography gutterBottom color="textSecondary" variant="h6" className={cls.episodeName}>
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
      </Grid>
      <Grid item md={8} xs={12}>
        <img src={img} alt={name} className={cls.cover} />
      </Grid>
    </Grid>
  );
};
