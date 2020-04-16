import React from 'react';
import { action } from '@storybook/addon-actions';

import { grey, pink } from '@material-ui/core/colors';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { PagerButton } from '../../src/components';

export default {
  component: PagerButton,
  title: 'PagerButton',
};

export const PagerButtonDefault = () => (
  <PagerButton
    onClick={() => action('clicked pager button')}
    color="secondary"
  >
    <ArrowLeftIcon />
  </PagerButton>
);
export const PagerButtonPink = () => (
  <PagerButton onClick={() => action('clicked pager button')} color={pink[600]}>
    <ArrowLeftIcon />
  </PagerButton>
);
export const PagerButtonDisabled = () => (
  <PagerButton
    onClick={() => action('clicked pager button')}
    color={grey[800]}
    disabled
  >
    <ArrowLeftIcon />
  </PagerButton>
);
