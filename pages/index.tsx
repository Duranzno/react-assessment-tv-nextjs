import React, { ReactNode } from 'react';
import { CssBaseline, ThemeProvider, Button } from '@material-ui/core';
import { Header } from '../src/components';
import { theme } from '../src';

const Home = (): ReactNode => (
  <div>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Header title="TV Database | Home" />
      Hello World
      <Button>asd</Button>
    </ThemeProvider>
  </div>
);

export default Home;
