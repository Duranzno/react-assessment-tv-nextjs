import React from 'react';
import { action } from '@storybook/addon-actions';
import { Pager } from '../../src/components';

export default {
  component: Pager,
  title: 'Pager',
};

const Container = ({ children }) => (
  <div style={{ width: '50rem' }}>{children}</div>
);

export const PagerActive = () => (
  <Container>
    <Pager
      next={action('click next')}
      prev={action('click prev')}
      disablePrev={false}
      disableNext={false}
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
