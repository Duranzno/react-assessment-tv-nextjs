import React from 'react';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { IconButton, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  pagerBtn: {
    // color: 'white',
  },
  pager: {
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minWidth: '10rem',
  },
});
interface Props {
  children: JSX.Element;
  prev: Function;
  next: Function;
  disablePrev?: boolean;
  disableNext?: boolean;
  buttonProps?: object;
}
export const Pager = ({
  children,
  prev,
  next,
  disablePrev = false,
  disableNext = false,
  buttonProps = {
    color: 'secondary',
  },
}: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.pager}>
      <Button
        aria-label="previous"
        onClick={() => prev}
        disabled={disablePrev}
        className={classes.pagerBtn}
        {...buttonProps}
      >
        <ArrowLeftIcon fontSize="small" />
      </Button>
      <Button
        aria-label="next"
        onClick={() => next}
        disabled={disableNext}
        className={classes.pagerBtn}
        {...buttonProps}
      >
        <ArrowRightIcon fontSize="small" />
      </Button>
      {children}
    </div>
  );
};
