import React from 'react';
import {
  AppBar,
} from '@material-ui/core';

import { SecondNavbar } from './tab-navbar/tab-navbar.component';
import { SearchNavbar } from './search-navbar/search-navbar.component';
import { NavbarMenu } from './navbar-menu/navbar-menu.component';

export function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => setAnchorEl(null);


  const menuId = 'primary-search-account-menu';
  const NavbarMenuProps = {
    anchorEl,
    menuId,
    isMenuOpen,
    handleMenuClose,
  };
  return (
    <div>
      <AppBar position="static" color="default">
        <SearchNavbar menuId={menuId} onMenuOpen={handleProfileMenuOpen} />
        <SecondNavbar />
      </AppBar>
      <NavbarMenu {...NavbarMenuProps} />
    </div>
  );
}
