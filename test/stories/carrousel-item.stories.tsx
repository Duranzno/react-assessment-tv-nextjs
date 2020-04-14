import React from 'react';
import { action } from '@storybook/addon-actions';
import { CarrouselItem } from '../../src/components';
import { mockSchedule } from '../mocks/tv-schedule.mock';

export default {
  component: CarrouselItem,
  title: 'CarrouselItem',
};

export const item = () => (
  <CarrouselItem schedule={mockSchedule} onClick={action('Clicked on Item ')} />
);
