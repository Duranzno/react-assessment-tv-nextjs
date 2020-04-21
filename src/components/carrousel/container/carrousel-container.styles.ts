import { createStyles, Theme, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ spacing, palette }: Theme) =>
  createStyles({
    featured: { fontWeight: 800, color: palette.common.black },
    root: {
      paddingBottom: spacing(2),
      paddingTop: spacing(6),
    },
    pager: {
      paddingTop: spacing(0.5),
      width: spacing(35),
    },
    pagerButton: {
      padding: spacing(0.5, 4),
    },
  }));
export default useStyles;
