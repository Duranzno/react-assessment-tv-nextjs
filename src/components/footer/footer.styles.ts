import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette, spacing, breakpoints }) => ({
  root: {
    marginTop: spacing(2),
    backgroundColor: palette.grey[200],
    // marginTop: spacing(2),
    //   '& > p': {
    //     textTransform: 'none !important',
    //   },
    // },
  },
  links: {
    display: 'flex',
  },
  grid: {
    padding: spacing(2, 2),
    '& > *': {
      margin: spacing(0.5),
    },
    [breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  divider: {
    height: spacing(3),
    alignSelf: 'center',
  },
}));
export default useStyles;
