import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    root: {
      marginBottom: spacing(4),
    },
  }));
export default useStyles;
