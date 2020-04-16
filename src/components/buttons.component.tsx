// @ts-nocheck
import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export const Logo = () => (
  <img src="/logo.png" alt="Logo" style={{ maxHeight: 40 }} />
);
export const PagerButton = styled(
  ({ color, ...props }) => <Button {...props} />,
)((props) => {
  const { theme, color } = props;
  const background = theme.palette[color]?.main || theme.palette.primary.main;
  return ({
    background,
    '&:hover': {
      background,
    },
    '&.Mui-disabled': {
      background: grey[100],
    },
    padding: '0.25rem',
    margin: 0,
    border: 0,
    height: 'min-content',
    borderRadius: 100,
    color: 'white',
    minWidth: 'unset',
    lineHeight: 'unset',
    letterSpacing: 'unset',
  });
});
