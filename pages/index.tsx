import React, { ReactNode, useEffect } from 'react';
import {
  Container,
  Typography,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  initDataAction,
  selectTVSchedule, closeModal, State,
} from '../src/redux';
import {
  fetchTVShows,
} from '../src/api';
import {
  Slider,
  Navbar,
  Footer,
  Carrousel,
} from '../src/components';


export default (): ReactNode => {
  // Regular redux hooks usage
  const state: State = useSelector((s) => s);
  const { modalData, schedules } = state;
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTVShows().then((s) => {
      dispatch(initDataAction(s));
    });
  }, []);
  const openModal = (mD) => dispatch(selectTVSchedule(mD));
  const onClose = () => dispatch(closeModal());
  const open = !!modalData;
  return (
    <Container>
      <Navbar />
      <Typography variant="h2">Recommended For You</Typography>
      <Slider onClick={openModal} schedules={schedules} />
      <Typography variant="h2">Recommended For You</Typography>
      <Carrousel
        viewAll={console.log}
        schedules={schedules.slice(0, 8)}
        viewSpecific={openModal}
      />
      <Footer />
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={onClose}
      >
        <Dialog
          open={open}
          onClose={onClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {modalData?.show?.name}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {JSON.stringify(modalData)}
            </DialogContentText>
          </DialogContent>

        </Dialog>
      </Modal>
      ;
    </Container>
  );
};
