import React from 'react';
import { action } from '@storybook/addon-actions';
import { CarrouselItem, Carrousel } from '../..';
import { ncisSchedule } from '../../../../test/mocks/ncis.mock';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { sesameStreetSchedule } from '../../../../test/mocks/sesame-street.mock';

export default {
  component: CarrouselItem,
  title: 'CarrouselItem',
  decorator: [
    (storyFn) => (
      <>
        <img src="" alt="_" />
        {storyFn()}
      </>
    ),
  ],
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
