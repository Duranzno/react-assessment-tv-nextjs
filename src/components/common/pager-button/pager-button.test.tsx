import React from 'react';
import { render } from '@testing-library/react';
import { PagerButton } from './pager-button.component';

it('should render PagerButton withouth crashing', () => {
  render(
    <PagerButton onClick={console.log} color="primary">
      hey
    </PagerButton>,
  );
});
