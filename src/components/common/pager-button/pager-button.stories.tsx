import React from 'react';
import { action } from '@storybook/addon-actions';

import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { PagerButton } from './pager-button.component';

export default {
  component: PagerButton,
  title: 'PagerButton',
  decorators: [
    (storyFn) => (
      <>
        <img src="/pager-grey-button.png" alt="pager" />
        <img src="/pager-pink.png" alt="pager" />
        <br />
        {storyFn()}
      </>
    ),
  ],
};

export const PagerButtonGrey = () => (
  <PagerButton
    onClick={() => action('clicked pager button')}
    color="primary"
  >
    <ArrowLeftIcon />
  </PagerButton>
);
export const PagerButtonPink = () => (
  <PagerButton
    onClick={() => action('clicked pager button')}
    color="secondary"
  >
    <ArrowLeftIcon />
  </PagerButton>
);
export const PagerButtonDisabled = () => (
  <PagerButton
    onClick={() => action('clicked pager button')}
    disabled
  >
    <ArrowLeftIcon />
  </PagerButton>
);
