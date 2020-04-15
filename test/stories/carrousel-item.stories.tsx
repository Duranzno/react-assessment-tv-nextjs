import React from 'react';
import { action } from '@storybook/addon-actions';
import { CarrouselItem, Carrousel, Pager } from '../../src/components';
import { ncisSchedule } from '../mocks/ncis.mock';
import { sesameStreetSchedule } from '../mocks/sesame-street.mock';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default {
  component: CarrouselItem,
  title: 'CarrouselItem',
};

export const item = () => (
  <CarrouselItem schedule={ncisSchedule} onClick={action('Clicked on Item ')} />
);

// export const slick = () => (
//   <Carrousel schedules={[ncisSchedule, sesameStreetSchedule]} />
// );
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
      buttonProps={{ color: 'secondary' }}
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
    />
  </Container>
);
