import React from 'react';
import { action } from '@storybook/addon-actions';
import { NavbarMenu } from './navbar-menu.component';

export default {
  title: 'NavbarMenu',
  component: NavbarMenu,
  decorators: [
    (storyFn) => (
      <>
        <img id="id" src="/menu.png" alt="footer.png" style={{ marginLeft: '500px' }} />
        {storyFn()}
      </>
    ),
  ],
};
const props = {
  menuId: 'id',
  isMenuOpen: true,
  handleMenuClose: action('closed menu'),
};
export const OpenedMenu = () => <NavbarMenu {...props} />;
