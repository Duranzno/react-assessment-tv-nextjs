import React from 'react';
import useStyles from './logo.styles';

export const Logo = () => {
  const cls = useStyles();
  return (
    <img src="/logo.png" alt="Logo" className={cls.root} />
  );
};
