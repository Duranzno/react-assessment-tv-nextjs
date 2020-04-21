import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(({ spacing }) => createStyles({
  root: {
    width: spacing(16),
    maxHeight: spacing(8),
  },
}));
export default useStyles;
