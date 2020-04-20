import React from 'react';
import { Footer } from '..';

export default {
  component: Footer,
  title: 'Footer',
  decorators: [
    (storyFn) => (
      <>
        <img src="/footer.png" alt="footer.png" />
        {storyFn()}
      </>
    ),
  ],
};

export const item = () => <Footer />;
