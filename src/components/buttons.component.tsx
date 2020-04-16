// @ts-nocheck
import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export const Logo = styled((props) => (
  <img src="/logo.png" alt="Logo" {...props} />
))({
  maxHeight: '40px',
});

export const PagerButton = styled(({ color, ...other }) => (
  <Button {...other} />
))(({ theme }, variant = 'primary') => ({
  background: theme.palette[variant].main,
  '&:hover': {
    background: theme.palette[variant].main,
  },
  '&.Mui-disabled': {
    background: grey[100],
  },
  padding: 0,
  margin: 0,
  border: 0,
  borderRadius: 100,
  color: 'white',
  minWidth: 'unset',
  lineHeight: 'unset',
  letterSpacing: 'unset',
}));
