import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { TVSchedule } from '../models';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    borderRadius: 40,
    backgroundColor: grey[800],
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
      minHeight: spacing(60),
    },
    display: 'flex',
    flexDirection: 'row',
    minHeight: spacing(35),
    maxHeight: spacing(40),
  },
  info: {
    padding: spacing(5),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: '1 1 0',
  },
  button: {
    fontWeight: 800,
  },
  cover: {
    flex: '3 1 0',
    width: '100%',
    height: 'auto',
    overflow: 'hidden',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPositionY: 'center',
    [breakpoints.down('sm')]: {
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
    },
    [breakpoints.up('sm')]: {
      borderTopRightRadius: 40,
      borderBottomRightRadius: 40,
    },
  },
}));
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
        <Typography
          color="textSecondary"
          variant="caption"
          style={{ textTransform: 'uppercase' }}
        >
          {genres.slice(0, 3).reduce((prev, cur) => `${prev} ${cur}`, '')}
        </Typography>

        <div>
          <Typography
            color="textSecondary"
            variant="h6"
            style={{ textTransform: 'uppercase' }}
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
          WATCH TRAILER
        </Button>
        {children}
      </div>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundColor: '#cccccc',
        }}
        className={classes.cover}
      />
    </div>
  );
};
