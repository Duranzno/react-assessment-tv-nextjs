import React from 'react';
import {
  Typography,
  MenuItem,
  Menu,
  Grid,
  Divider,
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import useStyles from './navbar-menu.styles';

interface Props {
  anchorEl: HTMLElement;
  menuId: string;
  isMenuOpen: boolean;
  handleMenuClose: () => void;
}

const MenuItemContent = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.hoverColor} container direction="column">
      <Grid container item direction="row" justify="space-between">
        <Typography variant="body2">Main Menu Item #1</Typography>
        <ArrowRightIcon />
      </Grid>
      <Typography variant="body1">Short menu description</Typography>
    </Grid>
  );
};
export const NavbarMenu = ({
  anchorEl,
  menuId,
  isMenuOpen,
  handleMenuClose,
}: Props) => (
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
    {}
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
