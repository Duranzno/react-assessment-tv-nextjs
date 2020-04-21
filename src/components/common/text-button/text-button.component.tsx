import React from 'react';

import {
  TypographyProps, Button, makeStyles, Typography,
} from '@material-ui/core';
import cx from 'classnames';

const useStyles = makeStyles({
  text: {
    textTransform: 'none',
  },

});
export const TextButton = ({ children, ...props }: TypographyProps) => {
  const { text } = useStyles();
  return (
    <Button>
      <Typography {...props} variant="body1" className={text}>
        {children}
      </Typography>
    </Button>
  );
};
