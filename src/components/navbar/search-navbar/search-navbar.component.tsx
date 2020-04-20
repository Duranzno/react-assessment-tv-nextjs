import React from 'react';
import {
  Toolbar,
  IconButton,
  InputBase,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Logo } from '../../common';
import useStyles from './search-navbar.styles';

interface SearchNavbarProps {
    menuId: string;
    onMenuOpen: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
export function SearchNavbar({ menuId, onMenuOpen }: SearchNavbarProps) {
  const classes = useStyles();
  return (
    <Toolbar>
      <IconButton
        // className={classes.menuButton}
        color="primary"
        aria-label="open drawer"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={onMenuOpen}
      >
        <MenuIcon />
      </IconButton>
      <Logo />
      <div className={classes.search}>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          endAdornment={<SearchIcon className={classes.searchIcon} />}
        />
      </div>
      <IconButton
        aria-label="facebook"
        color="inherit"
        className={classes.filter}
      >
        <FilterListIcon />
      </IconButton>
      <div className={classes.grow} />

      <div className={classes.sectionDesktop}>
        <IconButton aria-label="facebook" color="inherit">
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="instagram" color="inherit">
          <InstagramIcon />
        </IconButton>
        <IconButton aria-label="pinterest" color="inherit">
          <PinterestIcon />
        </IconButton>
      </div>
    </Toolbar>
  );
}
