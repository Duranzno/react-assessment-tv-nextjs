import React, { ReactNode } from 'react';
import { Container, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { State } from '../src';

const Home = ({ movies }: State): ReactNode => (
  <Container>
    <Button>Hello World</Button>
    <div>{JSON.stringify(movies)}</div>
  </Container>
);

export default connect((state) => state, null)(Home);
