import React from 'react';
import {
  makeStyles, ButtonProps, Button,
} from '@material-ui/core';
import useStyles from './pager-button.styles';
import { PagerButtonProps } from './pager-button.props';

type Props= ButtonProps & PagerButtonProps

export const PagerButton = (props: Props) => {
  const cls = useStyles(props);

  return (
    <Button className={cls.root} {...props} />
  );
};
