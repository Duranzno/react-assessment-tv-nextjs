import React from 'react';

import {
  TypographyProps, Button, makeStyles, Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  text: {
    textTransform: 'none',
  },

});
export const TextButton = ({ children }: TypographyProps) => {
  const cls = useStyles();

  return (
    <Button key={JSON.stringify(children)}>
      <Typography variant="body1" className={cls.text}>
        {children}
      </Typography>
    </Button>
  );
};
