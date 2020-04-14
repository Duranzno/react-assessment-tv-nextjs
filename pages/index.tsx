import React, { ReactNode, useEffect } from 'react';
import { Container, Button } from '@material-ui/core';
import { AppProps } from 'next/app';
import { useDispatch, useSelector } from 'react-redux';
import { initDataAction } from '../src/redux';
import { fetchTVShows } from '../src/api';

export default (props: AppProps): ReactNode => {
  // Regular redux hooks usage
  const storeValue = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTVShows().then((schedule) => {
      dispatch(initDataAction({ schedule }));
    });
  }, []);
  return (
    <Container>
      <Button>Hello World</Button>
      <div>{JSON.stringify(storeValue)}</div>
    </Container>
  );
};
