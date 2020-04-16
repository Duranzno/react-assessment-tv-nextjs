import React, { ReactNode, useEffect } from 'react';
import {
  Container,
  Typography,
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
  Dialog,
} from '../src/components';
import { TVSchedule } from '../src/models';

interface Props {
  schedules: TVSchedule[];
}
export default ({ schedules }: Props): ReactNode => {
  // Regular redux hooks usage
  const state: State = useSelector((s) => s);
  const { modalData, schedules: s } = state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initDataAction(schedules));
  }, []);
  const openModal = (mD) => dispatch(selectTVSchedule(mD));
  return (
    <div>
      <Navbar />
      <Container style={{ paddingTop: 32 }}>
        <Typography variant="h4" color="textPrimary" gutterBottom>
          <b>Recommended For You</b>
        </Typography>
        <Slider onClick={openModal} schedules={s.slice(9, 15)} />
        <Carrousel
          viewAll={console.log}
          schedules={s.slice(0, 8)}
          viewSpecific={openModal}
        />
      </Container>
      <Footer />
      <Dialog
        open={!!modalData}
        schedule={modalData}
        onClose={() => dispatch(closeModal())}
      />
    </div>
  );
};
export const getStaticProps = () => fetchTVShows()
  .then((schedules) => ({ props: { schedules } }));
