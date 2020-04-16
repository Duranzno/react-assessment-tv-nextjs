import React from 'react';
import { action } from '@storybook/addon-actions';
import { Dialog } from '../../src/components';
import { sesameStreetSchedule } from '../mocks/sesame-street.mock';

export default {
  component: Dialog,
  title: 'Dialog',
};


export const DialogActive = () => (
  <Dialog schedule={sesameStreetSchedule} open onClose={action('Open Dialog')} />
);
