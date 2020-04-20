import React from 'react';
import { action } from '@storybook/addon-actions';
import { ncisSchedule } from '../../../../test/mocks/ncis.mock';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarrouselItem } from './carrousel-item.component';

export default {
  component: CarrouselItem,
  title: 'CarrouselItem',
  decorators: [
    (storyFn) => (
      <div style={{ display: 'flex' }}>
        <img src="/carrousel-item.png" alt="carrouse-item.png" />
        {storyFn()}
      </div>
    ),
  ],
};

export const item = () => (
  <CarrouselItem schedule={ncisSchedule} onClick={action('Clicked on Item ')} />
);
