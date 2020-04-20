import React from 'react';
import { Navbar } from './navbar.component';

export default {
  component: Navbar,
  title: 'Navbar',
  decorators: [
    (storyFn) => (
      <>
        <img src="/navbar.png" alt="navbar" />
        {storyFn()}
      </>
    ),
  ],
};

export const FullNavbar = () => <Navbar />;
