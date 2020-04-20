import React from 'react';
import { action } from '@storybook/addon-actions';
import { Pager } from './pager.component';

export default {
  component: Pager,
  title: 'Pager',
  decorators: [
    (storyFn) => (
      <>
        <img src="/pager-grey-button.png" alt="pager" />
        <img src="/pager-pink.png" alt="pager2" />
        <br />
        {storyFn()}
      </>
    ),
  ],
};

const Container = (props) => (
  <div style={{ width: '50rem' }} {...props} />
);

export const PagerSlider = () => (
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

export const PagerCarrousel = () => (
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
