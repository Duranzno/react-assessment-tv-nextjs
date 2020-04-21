import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ spacing, breakpoints, palette }) => ({
  upperCase: {
    textTransform: 'uppercase',
  },
  root: {
    borderRadius: spacing(3),
    backgroundColor: '#373B3F',
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
      minHeight: spacing(60),
    },
    display: 'flex',
    flexDirection: 'row',
    minHeight: spacing(35),
    maxHeight: spacing(50),
  },
  info: {
    padding: spacing(7, 9),
    display: 'flex',
    minHeight: spacing(50),
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: '1 1 0',
  },
  button: {
    fontWeight: 900,
    alignSelf: 'center',
    backgroundColor: '#26292C',
    padding: spacing(1, 4),
  },
  buttonContainer: {
    alignSelf: 'center',
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
      borderBottomLeftRadius: spacing(3),
      borderBottomRightRadius: spacing(3),
    },
    [breakpoints.up('sm')]: {
      borderTopRightRadius: spacing(3),
      borderBottomRightRadius: spacing(3),
    },
  },
}));
export default useStyles;
