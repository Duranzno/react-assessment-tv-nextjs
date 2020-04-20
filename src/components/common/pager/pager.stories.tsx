import React from 'react';
import { action } from '@storybook/addon-actions';
import { Pager } from './pager.component';

export default {
  component: Pager,
  title: 'Pager',
  decorator: [
    (storyFn) => (
      <>
        <img src="" alt="_" />
        {storyFn()}
      </>
    ),
  ],
};

const Container = (props) => (
  <div style={{ width: '50rem' }} {...props} />
);

export const PagerActivePrimary = () => (
  <Container>
    <Pager
      next={action('click next')}
      prev={action('click prev')}
      disablePrev={false}
      disableNext={false}
      color="primary"
    >
      <>Children</>
    </Pager>
  </Container>
);
export const PagerActiveSecondary = () => (
  <Container>
    <Pager
      next={action('click next')}
      prev={action('click prev')}
      disablePrev={false}
      disableNext={false}
      color="secondary"
    >
      <>Children</>
    </Pager>
  </Container>
);
export const PagerBothDisabled = () => (
  <Container>
    <Pager
      next={action('click next')}
      prev={action('click prev')}
      disablePrev
      disableNext
    >
      <>Children</>
    </Pager>
  </Container>
);
