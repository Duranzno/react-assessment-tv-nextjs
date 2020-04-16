import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Divider } from '@material-ui/core';
import { Logo } from './buttons.component';

const TextButton = ({ children }) => (
  <Button key={JSON.stringify(children)}>
    <Typography variant="body1" style={{ textTransform: 'none' }}>
      {children}
    </Typography>
  </Button>
);
export const Footer = () => {
  const classes = makeStyles(({ spacing, breakpoints }) => ({
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      [breakpoints.down('sm')]: {
        flexDirection: 'column',
        padding: 'unset',
      },
      padding: '2rem 6rem 0',
      '& > *': {
        margin: spacing(1),
        '& > p': {
          textTransform: 'none !important',
        },
      },
    },
    '& > hr': {
      [breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  }))();
  return (
    <div className={classes.root}>
      <Logo />
      <Divider orientation="vertical" flexItem />

      {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((s) => (
        <TextButton key={s}>{s}</TextButton>
      ))}
      <Divider orientation="vertical" flexItem />
      <TextButton>© 2020 TV Database. All Rights Reserved</TextButton>
    </div>
  );
};
