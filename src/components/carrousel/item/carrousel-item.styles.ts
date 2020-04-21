import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { convertHex } from '../../../helpers';

const useStyles = makeStyles(({ spacing, palette, typography }) => ({
  card: {
    maxWidth: spacing(35),
  },
  imageWrapper: {
    width: '100%',
    minWidth: '100%',
    position: 'relative',
    marginBottom: spacing(2),
    display: 'unset',
    borderRadius: spacing(4),

  },
  image: {
    width: '100%',
    borderRadius: spacing(4),
  },
  imageOverlay: {
    position: 'absolute',
    margin: spacing(2, 1),
    left: 0,
    zIndex: 100,
    right: 0,
    width: 'unset',
    flexWrap: 'nowrap',
  },
  chip: {
    padding: spacing(0.5),
    fontSize: typography.caption.fontSize,
  },
  chipGrey: {
    color: palette.text.secondary,
    backgroundColor: convertHex(grey[200], 50),
    '&:hover': {
      backgroundColor: convertHex(grey[200], 35),
    },
    fontWeight: 800,
  },
  chipYellow: {
    backgroundColor: convertHex(palette.warning.dark, 95),
    '&:hover': {
      backgroundColor: convertHex(palette.warning.dark, 50),
    },
    fontWeight: 800,
  },
  title: { fontWeight: 700 },
  content: { fontWeight: 200 },
  text: {
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': 4,
    paddingBottom: '10px',
    '-webkit-box-orient': 'vertical',
  },
}));
export default useStyles;
