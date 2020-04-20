import React from 'react';
import {
  Modal,
  Dialog as D,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Typography,
} from '@material-ui/core';
import { TVSchedule } from '../../models';

interface Props {
  schedule: TVSchedule;
  open: boolean;
  onClose: Function;
}

export const ProductModal = (
  { schedule, open, onClose }: Props,
) => (
  <Modal
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    open={open}
    onClose={() => onClose()}
  >
    <D
      open={open}
      onClose={() => onClose()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {schedule?.show?.name}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography variant="body2" color="textPrimary">
            {JSON.stringify(schedule)}
          </Typography>
        </DialogContentText>
      </DialogContent>
    </D>
  </Modal>
);
