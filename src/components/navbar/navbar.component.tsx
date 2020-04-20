import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  MenuItem,
  Menu,
  Grid,
  Divider,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Logo } from '../common';
import useStyles from './navbar.styles';
import { SecondNavbar } from '../second-navbar/second-navbar.component';


export function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => setAnchorEl(null);

  const MenuItemContent = () => (
    <Grid className={classes.hoverColor} container direction="column">
      <Grid container item direction="row" justify="space-between">
        <Typography variant="body2">Main Menu Item #1</Typography>
        <ArrowRightIcon />
      </Grid>
      <Typography variant="body1">Short menu description</Typography>
    </Grid>
  );

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      open={isMenuOpen}
      style={{ borderRadius: '50px' }}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <MenuItemContent />
      </MenuItem>
      <Divider variant="middle" />
      <MenuItem onClick={handleMenuClose}>
        <MenuItemContent />
      </MenuItem>
      <Divider variant="middle" />
      <MenuItem onClick={handleMenuClose}>
        <MenuItemContent />
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            // className={classes.menuButton}
            color="primary"
            aria-label="open drawer"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
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
        <SecondNavbar />
      </AppBar>
      {renderMenu}
    </div>
  );
}
