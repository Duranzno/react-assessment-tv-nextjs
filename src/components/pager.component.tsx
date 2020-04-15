import React from 'react';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { makeStyles } from '@material-ui/core/styles';
import { PagerButton } from './buttons.component';

const useStyles = makeStyles({
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
}
export const Pager = ({
  children,
  prev,
  next,
  disablePrev = false,
  disableNext = false,
}: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.pager}>
      <PagerButton
        aria-label="previous"
        onClick={() => prev()}
        disabled={disablePrev}
      >
        <ArrowLeftIcon fontSize="small" />
      </PagerButton>
      <PagerButton
        aria-label="next"
        onClick={() => next()}
        disabled={disableNext}
      >
        <ArrowRightIcon fontSize="small" />
      </PagerButton>
      {children}
    </div>
  );
};
