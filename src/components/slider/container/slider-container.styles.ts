import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ typography, spacing, palette }) => ({
  pager: {
    maxWidth: '50px',
  },
  recommended: {
    fontWeight: 800,
    color: palette.common.black,
  },
  indexText: {
    fontWeight: 600,
    marginLeft: spacing(1),
    fontSize: typography.body1.fontSize,
  },
}));
export default useStyles;
