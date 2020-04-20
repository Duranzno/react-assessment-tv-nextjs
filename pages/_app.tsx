import React from 'react';
import App from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from '../src/constants/theme';
import { Header } from '../src/components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { store } from '../src/redux';

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Header title="TV Database | Home" />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </>
    );
  }
}
