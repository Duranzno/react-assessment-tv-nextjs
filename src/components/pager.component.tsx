import React from 'react';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { makeStyles } from '@material-ui/core/styles';
import cx from 'classnames';
import { PagerButton } from './buttons.component';

const useStyles = makeStyles({
  pager: {
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minWidth: '6rem',
    alignItems: 'center',
  },
});
interface Props {
  children: JSX.Element;
  prev: Function;
  next: Function;
  disablePrev?: boolean;
  disableNext?: boolean;
  color?: string;
  className?: string;
}
export const Pager = ({
  children,
  prev,
  next,
  color,
  className,
  disablePrev = false,
  disableNext = false,
}: Props) => {
  const classes = useStyles();
  return (
    <div className={cx([classes.pager, className])}>
      <PagerButton
        color={color}
        aria-label="previous"
        onClick={() => prev()}
        disabled={disablePrev}
      >
        <ArrowLeftIcon fontSize="small" />
      </PagerButton>
      <PagerButton
        color={color}
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
