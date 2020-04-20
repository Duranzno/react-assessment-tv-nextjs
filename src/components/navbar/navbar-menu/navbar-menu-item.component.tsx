import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import cx from 'classnames';
import useStyles from './navbar-menu-item.styles';

interface MenuItemContentProps{ title: string; description: string }

export const MenuItemContent = ({ title, description }: MenuItemContentProps) => {
  const cls = useStyles();

  return (
    <Grid container direction="column" className={cls.root}>
      <Grid container item direction="row" justify="space-between">
        <Typography className={cx(cls.title, 'colored')} variant="body2">
          {title}
        </Typography>
        <ArrowRightIcon className={cx(cls.icon, 'colored')} />
      </Grid>
      <Typography className={cls.description} variant="body2">
        {description}
      </Typography>
    </Grid>
  );
};
