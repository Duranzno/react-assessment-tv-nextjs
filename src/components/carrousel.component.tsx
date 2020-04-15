import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { TVSchedule } from '../models';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
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
  readAll: Function;
}

export const Carrousel = ({ schedules, readAll }: Props) => (
  <Grid container direction="row" justify="space-between">
    <Grid item container direction="column">
      <Typography variant="subtitle2">
        <b>Featured</b>
      </Typography>
      <Typography variant="body2">Popular shows airing tonight</Typography>
    </Grid>
    <Grid item container direction="row" />
  </Grid>
);
