import React from 'react';
import { action } from '@storybook/addon-actions';
import { Slider } from '../../src/components';
import { sesameStreetSchedule } from '../mocks/sesame-street.mock';
import { ncisSchedule } from '../mocks/ncis.mock';

export default {
  component: Slider,
  title: 'Slider',
};

export const item = () => (
  <Slider
    schedules={[sesameStreetSchedule, ncisSchedule]}
    onClick={() => action('selected')}
  />
);
