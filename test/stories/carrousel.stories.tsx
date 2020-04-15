// @ts-nocheck
import React from 'react';
import { action } from '@storybook/addon-actions';
import { CarrouselItem, Carrousel } from '../../src/components';
import { ncisSchedule } from '../mocks/ncis.mock';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { sesameStreetSchedule } from '../mocks/sesame-street.mock';

export default {
  component: CarrouselItem,
  title: 'CarrouselItem',
};

export const item = () => (
  <CarrouselItem schedule={ncisSchedule} onClick={action('Clicked on Item ')} />
);

export const slick = () => (
  <Carrousel
    schedules={[
      ncisSchedule,
      sesameStreetSchedule,
      ncisSchedule,
      sesameStreetSchedule,

      ncisSchedule,
      sesameStreetSchedule,
      ncisSchedule,
      sesameStreetSchedule,
    ]}
    viewAll={action('viewAll')}
    viewSpecific={action('view Specific')}
  />
);
