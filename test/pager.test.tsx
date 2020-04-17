import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { PagerButton } from '../src/components/buttons.component';

afterEach(cleanup);

const defaultProps = {
  onClick: jest.fn(),
  children: 'Submit',
};

test('button renders with correct text', () => {
  const { queryByText, rerender } = render(<PagerButton {...defaultProps} />);
  expect(queryByText('Submit')).toBeTruthy();

  // Change props
  rerender(<PagerButton {...defaultProps}>Go</PagerButton>);
  expect(queryByText('Go')).toBeTruthy();
});

test('calls correct function on click', () => {
  const onClick = jest.fn();
  const { getByText } = render(<PagerButton {...defaultProps} onClick={onClick} />);
  fireEvent.click(getByText(defaultProps.children));
  expect(onClick).toHaveBeenCalled();
});
