import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ spacing, breakpoints, palette }) => ({
  upperCase: {
    textTransform: 'uppercase',
  },
  root: {
    borderRadius: 40,
    backgroundColor: palette.secondary.dark,
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
      minHeight: spacing(60),
    },
    display: 'flex',
    flexDirection: 'row',
    minHeight: spacing(35),
    maxHeight: spacing(40),
  },
  info: {
    padding: spacing(5),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: '1 1 0',
  },
  button: {
    fontWeight: 800,
  },
  cover: {
    flex: '3 1 0',
    width: '100%',
    height: 'auto',
    overflow: 'hidden',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPositionY: 'center',
    [breakpoints.down('sm')]: {
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
    },
    [breakpoints.up('sm')]: {
      borderTopRightRadius: 40,
      borderBottomRightRadius: 40,
    },
  },
}));
export default useStyles;
