import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    root: {
      borderRadius: spacing(3),
      minWidth: spacing(35),
      marginTop: spacing(7),
    },
    item: {
      '&:hover': {
        backgroundColor: 'unset',
      },
    },
  }));
export default useStyles;
