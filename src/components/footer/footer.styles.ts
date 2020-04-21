import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette, spacing, breakpoints, typography }) => ({
  root: {
    marginTop: spacing(4),
    padding: spacing(0, 8),
    backgroundColor: palette.grey[200],
    '& p': {
      fontSize: typography.subtitle2.fontSize,
    },
    '& *': {
      alignSelf: 'center',
    },
  },
  links: {
    display: 'flex',
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    flexDirection: 'row',

  },
  grid: {
    padding: spacing(2, 2),
    '& > *': {
      margin: spacing(0.5),
    },
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
      textAlign: 'center',
      justifyContent: 'center',
    },
  },
  divider: {
    height: spacing(3),
    width: spacing(0.3),
    alignSelf: 'center',
  },
}));
export default useStyles;
