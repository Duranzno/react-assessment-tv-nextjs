import React from 'react';
import { Divider } from '@material-ui/core';
import { Logo, TextButton } from '../common';
import useStyles from './footer.styles';


export const Footer = () => {
  const classes = useStyles();
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
