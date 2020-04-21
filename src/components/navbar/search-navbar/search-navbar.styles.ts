import {
  createStyles, makeStyles,
} from '@material-ui/core';
import colors from '../../../constants/colors';

const useStyles = makeStyles(({ palette, spacing, breakpoints }) =>
  createStyles({
    toolbar: {},
    mainGrid: {},
    topRowGrid: {
      paddingTop: spacing(1),
      paddingBottom: spacing(1),
    },
    menuIcon: {
      color: colors.violetRed,
    },
    logoContainer: {
      height: spacing(8),
      paddingLeft: spacing(4),
      paddingRight: spacing(4),
      [breakpoints.down('sm')]: {
        marginRight: spacing(14),
      },
    },
    logoImg: {
      width: spacing(12),
      height: spacing(6),
    },

    searchInput: {
      // height: spacing(3),
      // border: 'solid',
      // borderColor: colors.alto,
      borderRadius: spacing(2),
      padding: spacing(0, 2, 0, 3),
      backgroundColor: palette.secondary[200],
      borderColor: palette.secondary[300],
      borderStyle: 'solid',
      borderWidth: 1,
      // color: colors.gray,
      // paddingLeft: spacing(3),
      // paddingRight: spacing(3),
      // fontFamily: 'Work Sans',
    },
    searchIcon: {
      color: colors.gray,
    },
    filterContainer: {
      backgroundColor: palette.secondary[200],
      padding: '5px 10px',
      borderRadius: spacing(4),
      marginLeft: spacing(4),
      border: 'solid',
      borderWidth: 1,
      borderColor: colors.alto,
    },
    filterIcon: {
      color: colors.nobel,
    },
    fbIconContainer: {
      padding: '4px 12px',

      backgroundColor: colors.sanMarino,
      borderRadius: 50,
      marginLeft: spacing(4),
    },
    igIconContainer: {
      padding: '4px 9px',

      backgroundColor: colors.amaranth,
      marginLeft: 15,
      borderRadius: 50,
    },
    ptIconContainer: {
      padding: '4px 11px',

      backgroundColor: colors.thunderbird,
      marginLeft: 15,
      borderRadius: 50,
    },
    icon: {
      color: palette.text.secondary,
    },
  }));
export default useStyles;
