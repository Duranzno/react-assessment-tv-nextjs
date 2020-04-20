import React from 'react';
import { action } from '@storybook/addon-actions';
import { sesameStreetSchedule } from '../../../test/mocks/sesame-street.mock';
import { ProductModal } from './product-modal.component';

export default {
  component: ProductModal,
  title: 'ProductModal',
  decorator: [
    (storyFn) => (
      <>
        <img src="" alt="_" />
        {storyFn()}
      </>
    ),
  ],
};


export const def = () => (
  <ProductModal schedule={sesameStreetSchedule} open onClose={action('Open ProductModal')} />
);
