import {
  createStyles, makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    toolbar: {},
    trending: {
      width: spacing(64),
    },
    tab: {
      textTransform: 'none',
      fontWeight: 300,
      margin: spacing(0, 0.5),
      padding: spacing(0),
      paddingBottom: spacing(2),
      minWidth: 'unset',
    },
    tabs: {
      alignSelf: 'flex-end',
    },
    indicator: {
      height: spacing(0.5),
    },
    divider: {
      height: spacing(3),
      width: spacing(0.2),
      alignSelf: 'center',
      paddingBottom: spacing(2),
    },
  }));
export default useStyles;
