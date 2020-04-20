import React from 'react';
import {
  makeStyles, ButtonProps, Button,
} from '@material-ui/core';
import styles, { PagerButtonProps } from './buttons.styles';

type Props= ButtonProps & PagerButtonProps

export const PagerButton = (props: Props) => {
  const useStyles = makeStyles(styles);
  const cls = useStyles();

  return (
    <Button className={cls.root} {...props} />
  );
};
