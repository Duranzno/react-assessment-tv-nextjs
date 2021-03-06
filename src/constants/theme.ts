import { createMuiTheme, fade } from '@material-ui/core/styles';
import {
  yellow, grey, pink, common,
} from '@material-ui/core/colors';
import { colors } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: grey,
    warning: yellow,
    text: {
      primary: grey[700],
      disabled: grey[500],
      secondary: common.white,
    },
  },
  typography: {
    allVariants: {
      color: grey[700],
    },
  },
  overrides: {
    MuiToolbar: {
      // root
    },
    MuiAppBar: {
      colorDefault: {
        backgroundColor: colors.common.white,
      },
    },
    MuiButton: {
      contained: {
        borderRadius: 100,
      },
    },
    MuiIconButton: {
      colorSecondary: {
        color: grey[100],
        backgroundColor: grey[800],
        '&:hover': {
          backgroundColor: grey[800],
        },
      },
    },
    MuiChip: {
      colorPrimary: {
        color: common.white,
        backgroundColor: yellow[700],
      },
    },
    MuiCardMedia: {
      root: {
        maxWidth: 15,
      },
      media: {
        // height: '140rem',
        // width: 151,
      },
    },
  },
});
