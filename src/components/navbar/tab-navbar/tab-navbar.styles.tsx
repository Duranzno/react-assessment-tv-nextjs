import {
  createStyles, makeStyles, fade, Theme,
} from '@material-ui/core';

const useStyles = makeStyles(({ spacing, breakpoints, shape, transitions, palette }: Theme) =>
  createStyles({
    cheat: {
      marginRight: '16px',
      marginLeft: '64px',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: spacing(2),
    },
    search: {
      position: 'relative',
      borderRadius: shape.borderRadius,
      backgroundColor: fade(palette.primary.dark, 0.15),
      '&:hover': {
        backgroundColor: fade(palette.primary.dark, 0.25),
      },
      margin: spacing(0, 4),
      // width: '100%',
      // [breakpoints.up('sm')]: {
      // width: '60vw',
      // },
      [breakpoints.down('md')]: {
        display: 'none',
      },
    },
    searchIcon: {
      margin: spacing(0, 2),
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${spacing(4)}px)`,
      transition: transitions.create('width'),
      width: '100%',
      [breakpoints.up('md')]: {
        width: '40vw',
      },
    },
    sectionDesktop: {
      display: 'none',
      [breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    filter: {
      [breakpoints.down('md')]: {
        display: 'none',
      },
    },
    hoverColor: {
      '&:hover': {
        color: 'blue', // theme.palette.primary,
        fill: 'blue', // theme.palette.primary,
      },
    },
    tabs: {},
    tab: {},
    sectionMobile: {
      display: 'flex',
      [breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }));
export default useStyles;
