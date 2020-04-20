import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: 'unset',
    },
    padding: '2rem 6rem 0',
    '& > *': {
      margin: spacing(1),
      '& > p': {
        textTransform: 'none !important',
      },
    },
  },
  '& > hr': {
    [breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));
export default useStyles;
