import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'material-ui-image';
import { grey } from '@material-ui/core/colors';
import { TVSchedule } from '../models';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    borderRadius: 40,
    backgroundColor: grey[800],
    [breakpoints.down('md')]: {},
    display: 'flex',
    flexDirection: 'row',
    minWidth: spacing(45),
    maxWidth: breakpoints.values.md,
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
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPositionY: 'center',

    // maxHeight: spacing(50),
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
