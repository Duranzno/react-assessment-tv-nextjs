import { createStyles, makeStyles } from '@material-ui/core';
import { PagerButtonProps } from './pager-button.props';


const useStyles = makeStyles(({ palette }) =>
  createStyles({
    root: {
      background: ({ color }: PagerButtonProps) => palette[color]?.main || palette.primary.main,
      '&:hover': {
        background: ({ color }: PagerButtonProps) => palette[color]?.main || palette.primary.main,
      },
      '&.Mui-disabled': {
        color: 'white',
        background: palette.secondary[300],
      },
      '& svg': {
        fontSize: '2rem',
      },
      padding: 0,
      margin: 0,
      border: 0,
      height: 'min-content',
      borderRadius: 100,
      color: 'white',
      minWidth: 'unset',
      lineHeight: 'unset',
      letterSpacing: 'unset',
    },
  }));
export default useStyles;
