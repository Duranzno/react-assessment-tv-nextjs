import React from 'react';
import { action } from '@storybook/addon-actions';
import { CarrouselContainer } from './carrousel-container.component';
import { ncisSchedule } from '../../../../test/mocks/ncis.mock';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { sesameStreetSchedule } from '../../../../test/mocks/sesame-street.mock';

export default {
  component: CarrouselContainer,
  title: 'CarrouselContainer',
  decorators: [
    (storyFn) => (
      <>
        <img src="/carrousel.png" alt="carrouse" />
        {storyFn()}
      </>
    ),
  ],
};

export const Container = () => (
  <CarrouselContainer
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
