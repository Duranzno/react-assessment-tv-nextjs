import { createStyles, Theme, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ breakpoints, spacing, palette }: Theme) =>
  createStyles({
    root: {
      paddingBottom: spacing(2),
      paddingTop: spacing(6),
    },
    pager: {
      // [breakpoints.up('sm')]: {
      width: spacing(35),
      // }
    },
    pagerButton: {
      padding: spacing(0.5, 4),
    },
  }));
export default useStyles;
