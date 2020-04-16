import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@material-ui/core';

export default {
  component: Button,
  title: 'Button',
};

export const text = (): JSX.Element => (
  <Button onClick={action('clicked')}>Hello Button</Button>
);

export const emoji = (): JSX.Element => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
