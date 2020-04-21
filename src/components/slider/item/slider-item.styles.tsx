import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ spacing, breakpoints, typography }) => ({
  root: {
    borderRadius: spacing(3),
    backgroundColor: '#373B3F',
    [breakpoints.down('md')]: {
      maxWidth: breakpoints.values.sm,
      maxHeight: spacing(100),
    },
    [breakpoints.up('md')]: {
      maxHeight: spacing(58),
    },
  },
  info: {
    [breakpoints.down('sm')]: {
      minHeight: spacing(40),
    },
    padding: spacing(6, 9),
  },
  cover: {
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
    [breakpoints.between('md', 'sm')]: {
      maxHeight: spacing(58),
    },
    [breakpoints.up('md')]: {
      maxHeight: spacing(58),

      borderTopRightRadius: spacing(3),
      borderBottomRightRadius: spacing(3),
    },
  },
  // TEXT
  button: {
    fontWeight: 1000,
    alignSelf: 'center',
    backgroundColor: '#26292C',
    padding: spacing(1, 6),
    [breakpoints.down('md')]: {
      padding: spacing(1, 3),
    },
    fontSize: typography.body1.fontSize,
  },
  buttonContainer: {
    alignSelf: 'center',
  },
  genres: {
    textTransform: 'uppercase',
    fontWeight: 400,
    paddingBottom: spacing(2),
  },
  name: {
    fontWeight: 700,

    textTransform: 'uppercase',
  },
  episodeName: {
    fontWeight: 400,
  },
}));
export default useStyles;
