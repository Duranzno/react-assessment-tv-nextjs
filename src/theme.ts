import { createMuiTheme } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    warning: yellow,
  },
  overrides: {
    MuiChip: {
      colorPrimary: {
        color: 'white',
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
