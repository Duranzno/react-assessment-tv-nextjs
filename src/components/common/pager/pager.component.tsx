import React from 'react';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import cx from 'classnames';
import { PagerButton } from '../buttons/buttons.component';
import { useStyles } from './pager.styles';
import { PagerButtonProps } from '../buttons/buttons.styles';


interface Props extends PagerButtonProps {
  children: JSX.Element;
  prev: Function;
  next: Function;
  disablePrev?: boolean;
  disableNext?: boolean;
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
