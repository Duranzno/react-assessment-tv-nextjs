import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette, spacing }) =>
  createStyles({
    root: {
      padding: spacing(1),
      '&:hover  .colored': {
        color: palette.primary.main,
        fill: palette.primary.main,
      },
    },
    title: {
      fontWeight: 700,
      color: palette.text.disabled,
    },
    description: {
      color: palette.text.disabled,
      fontWeight: 300,
      '&:hover': {
        color: palette.text.disabled,
      },
    },
    icon: {
      color: palette.text.disabled,
    },
  }));
export default useStyles;
