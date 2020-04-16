import { createMuiTheme } from '@material-ui/core/styles';
import { yellow, grey, pink } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: grey,
    warning: yellow,
  },
  overrides: {
    MuiToolbar: {
      // root
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
      // colorPrimary: {
      //   color: 'white',
      //   backgroundColor: yellow[700],
      // },
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
