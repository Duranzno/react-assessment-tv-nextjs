import React from 'react';
import {
  AppBar, Container,
} from '@material-ui/core';

import { SecondNavbar } from './tab-navbar/tab-navbar.component';
import { SearchNavbar } from './search-navbar/search-navbar.component';
import { NavbarMenu } from './navbar-menu/navbar-menu.component';
import useStyles from './navbar.styles';

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
  const cls = useStyles();
  return (
    <div className={cls.root}>
      <AppBar position="static" color="default" elevation={3}>
        <Container>
          <SearchNavbar
            menuId={menuId}
            onMenuOpen={handleProfileMenuOpen}
          />
          <SecondNavbar />
        </Container>
      </AppBar>
      <NavbarMenu {...NavbarMenuProps} />
    </div>
  );
}
