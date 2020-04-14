import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import withRedux from 'next-redux-wrapper';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { theme } from '../src/theme';
import { Header } from '../src/components';
import { store as baseStore } from '../src/redux';

function MyApp(props: AppProps & { store: Store }): JSX.Element {
  const { Component, pageProps, store } = props;
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

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
// @ts-ignore
export default withRedux(baseStore)(MyApp);
