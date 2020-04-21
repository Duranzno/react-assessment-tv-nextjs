import React from 'react';

// import { Logo } from '../../common';
import {
  Toolbar, Grid, InputBase, Hidden,
  IconButton,

} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStyles from './search-navbar.styles';
import { Logo } from '../../common';

interface SearchNavbarProps {
    menuId: string;
    onMenuOpen: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
export function SearchNavbar({ menuId, onMenuOpen }: SearchNavbarProps) {
  const cls = useStyles();
  console.log(menuId);
  return (
    <Toolbar className={cls.toolbar} disableGutters>
      <Grid container className={cls.mainGrid} direction="column">
        <Grid container className={cls.topRowGrid} alignItems="center" justify="space-around">
          <Grid item>
            <IconButton onClick={onMenuOpen}>
              <FontAwesomeIcon className={cls.menuIcon} icon={['fas', 'bars']} size="lg" />
            </IconButton>
          </Grid>
          <Grid item className={cls.logoContainer}>
            <Logo />
          </Grid>
          {/*
            Input
          */}
          <Grid item xs>
            <InputBase
              className={cls.searchInput}
              fullWidth
              placeholder="Search"
              endAdornment={(
                <Hidden smDown>
                  <FontAwesomeIcon className={cls.searchIcon} icon={['fas', 'search']} size="xs" />
                </Hidden>
              )}
            />
          </Grid>
          {/*
            Icons
          */}
          <Hidden smDown>
            <Grid item className={cls.filterContainer}>
              <FontAwesomeIcon className={cls.filterIcon} icon={['fas', 'filter']} size="xs" />
            </Grid>
            <Grid item className={cls.fbIconContainer}>
              <FontAwesomeIcon className={cls.icon} icon={['fab', 'facebook-f']} size="sm" />
            </Grid>
            <Grid item className={cls.igIconContainer}>
              <FontAwesomeIcon className={cls.icon} icon={['fab', 'instagram']} size="sm" />
            </Grid>
            <Grid item className={cls.ptIconContainer}>
              <FontAwesomeIcon className={cls.icon} icon={['fab', 'pinterest-p']} size="sm" />
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </Toolbar>
  );
}
