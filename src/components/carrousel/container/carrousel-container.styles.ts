import { createStyles, Theme, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ breakpoints, spacing }: Theme) => createStyles({
  root: { padding: spacing(3) },
  pager: { [breakpoints.up('md')]: { width: spacing(25) } },
}));
export default useStyles;
