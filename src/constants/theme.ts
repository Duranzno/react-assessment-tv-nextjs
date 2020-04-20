import { createMuiTheme, fade } from '@material-ui/core/styles';
import {
  yellow, grey, pink, common,
} from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: grey,
    warning: yellow,
    text: {
      disabled: grey[500],
      secondary: common.white,
    },
  },
  typography: {
    h6: {
      fontWeight: 600,
    },
  },
  overrides: {
    MuiToolbar: {
      // root
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
