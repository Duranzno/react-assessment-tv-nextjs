import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ breakpoints }) => ({
  card: { maxWidth: '17rem' },
  cover: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  text: {
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': 4,
    paddingBottom: '10px',
    '-webkit-box-orient': 'vertical',
  },
  wrapper: {
    width: '100%',
    minHeight: '16rem',
    minWidth: '100%',
    padding: '1rem',
    position: 'relative',
  },
  chip: {
    marginRight: '1rem',
  },
  chipGrey: {
    backgroundColor: 'rgba(0,0,0,0.5)',

    borderRadius: 100,
    color: '#ffffff',
    textTransform: 'none',
    width: '100%',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.32)',
    },
    [breakpoints.up('sm')]: {
      // width: 'auto',
    },
  },
  chipYellow: {
    marginLeft: '0.5rem',
  },
  coverOverlay: {
    position: 'absolute',
    margin: '1rem 1rem 0',
    left: 0,
    zIndex: 100,
    right: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));
export default useStyles;
