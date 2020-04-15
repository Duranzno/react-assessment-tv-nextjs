import React, { ReactNode, useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { initDataAction } from '../src/redux';
import { fetchTVShows } from '../src/api';
import {
  Navbar, Footer, Carrousel,
} from '../src/components';


export default (): ReactNode => {
  // Regular redux hooks usage
  const schedules = useSelector((state) => state.schedules);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTVShows().then((s) => {
      dispatch(initDataAction({ schedules: s }));
    });
  }, []);
  return (
    <Container>
      <Navbar />
      <Typography variant="h2">Recommended For You</Typography>
      {/* <Slider onClick={console.log} schedules={schedules} /> */}
      <Typography variant="h2">Recommended For You</Typography>
      <Carrousel readAll={console.log} schedules={schedules} />
      <Footer />
    </Container>
  );
};
