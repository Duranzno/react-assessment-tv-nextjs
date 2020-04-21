import React from 'react';
import { Divider, Container, Toolbar, Grid, Hidden } from '@material-ui/core';
import { Logo, TextButton } from '../common';
import useStyles from './footer.styles';
import { strings } from '../../constants/strings';

export const Footer = () => {
  const cls = useStyles();
  const links = [strings.privacyPolicy, strings.tos, strings.cookiePolicy];
  return (
    <Toolbar className={cls.root}>
      <Container maxWidth="md">
        <Grid className={cls.grid} container direction="row" justify="space-between" wrap="nowrap">
          <Logo />
          <Hidden smDown>
            <Divider className={cls.divider} orientation="vertical" flexItem />
          </Hidden>
          <div className={cls.links}>

            {links.map((s) => (
              <TextButton key={s}>{s}</TextButton>
            ))}
          </div>
          <Hidden smDown>
            <Divider className={cls.divider} orientation="vertical" flexItem />
          </Hidden>
          <TextButton>{strings.tm}</TextButton>
        </Grid>
      </Container>
    </Toolbar>
  );
};
