import React from 'react';
import {
  makeStyles, ButtonProps, Button,
} from '@material-ui/core';
import styles from './pager-button.styles';
import { PagerButtonProps } from './pager-button.props';

type Props= ButtonProps & PagerButtonProps

export const PagerButton = (props: Props) => {
  const useStyles = makeStyles(styles);
  const cls = useStyles();

  return (
    <Button className={cls.root} {...props} />
  );
};
