import React from 'react';
import { Footer } from '..';

export default {
  component: Footer,
  title: 'Footer',
  decorator: [
    (storyFn) => (
      <>
        <img src="" alt="_" />
        {storyFn()}
      </>
    ),
  ],
};

export const item = () => <Footer />;
