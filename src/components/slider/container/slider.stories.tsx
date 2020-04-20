import React from 'react';
import { action } from '@storybook/addon-actions';
import { Slider } from '../..';
import { sesameStreetSchedule } from '../../../../test/mocks/sesame-street.mock';
import { ncisSchedule } from '../../../../test/mocks/ncis.mock';

export default {
  component: Slider,
  title: 'Slider',
  decorators: [
    (storyFn) => (
      <>
        <img src="/slider.png" alt="pager" />
        <br />
        {storyFn()}
      </>
    ),
  ],
};

export const item = () => (
  <Slider
    schedules={[sesameStreetSchedule, ncisSchedule]}
    onClick={() => action('selected')}
  />
);
