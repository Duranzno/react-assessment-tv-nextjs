import React from 'react';
import {
  MenuItem,
  Menu,
  Divider,
} from '@material-ui/core';
import useStyles from './navbar-menu.styles';
import { strings } from '../../../constants/strings';
import { addDividerElements } from '../../../helpers';
import { MenuItemContent } from './navbar-menu-item.component';

interface Props {
  anchorEl?: HTMLElement;
  menuId: string;
  isMenuOpen: boolean;
  handleMenuClose: () => void;
}
export const NavbarMenu = ({
  anchorEl,
  menuId,
  isMenuOpen,
  handleMenuClose,
}: Props) => {
  const cls = useStyles();
  const element = (
    <MenuItem onClick={handleMenuClose} className={cls.item}>
      <MenuItemContent
        title={strings.menuItemTitle}
        description={strings.menuItemDescription}
      />
    </MenuItem>
  );

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      open={isMenuOpen}
      PaperProps={{
        className: cls.root,
        elevation: 1,
      }}
      onClose={handleMenuClose}
    >
      {element}
      <Divider variant="middle" />
      {element}
      <Divider variant="middle" />
      {element}
    </Menu>
  );
};
