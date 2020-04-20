import React from 'react';
import { Navbar } from '..';

export default {
  component: Navbar,
  title: 'Navbar',
  decorator: [
    (storyFn) => (
      <>
        <img src="" alt="_" />
        {storyFn()}
      </>
    ),
  ],
};

export const item = () => <Navbar />;
