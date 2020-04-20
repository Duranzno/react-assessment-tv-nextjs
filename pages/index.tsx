import React, { ReactNode, useEffect } from 'react';
import {
  Container,
  Typography,
} from '@material-ui/core';
import { useDispatch, useSelector, Provider } from 'react-redux';
import {
  initDataAction,
  selectTVSchedule, closeModal, State,
  store,
  initialState } from '../src/redux';
import {
  fetchTVShows,
} from '../src/api';
import {
  Slider,
  Navbar,
  Footer,
  CarrouselContainer,
  ProductModal,
} from '../src/components';
import { TVSchedule } from '../src/models';


interface Props {
  schedules: TVSchedule[];
}
const App = ({ schedules }: Props): ReactNode => {
  const state: State = useSelector((s) => s);
  const { modalData, schedules: s } = state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initDataAction(schedules));
  }, []);
  const openModal = (mD) => dispatch(selectTVSchedule(mD));
  const closeModal2 = () => dispatch(closeModal());
  return (
    <div>
      <Navbar />
      <Container style={{ paddingTop: 32 }}>
        <Typography variant="h4" color="textPrimary" gutterBottom>
          <b>Recommended For You</b>
        </Typography>
        <Slider onClick={openModal} schedules={s.slice(9, 15)} />
        <CarrouselContainer
          viewAll={console.log}
          schedules={s.slice(0, 8)}
          viewSpecific={openModal}
        />
      </Container>
      <Footer />
      <ProductModal
        open={!!modalData}
        schedule={modalData}
        onClose={closeModal2}
      />
    </div>
  );
};
export const getStaticProps = () => fetchTVShows()
  .then((schedules) => ({ props: { schedules } }));
export default App;
