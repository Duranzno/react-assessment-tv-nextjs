import { createStyles, Theme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export interface PagerButtonProps {
  color?: 'primary' | 'secondary';
}
const styles = ({ palette }: Theme) => createStyles({
  root: {
    background: ({ color }: PagerButtonProps) => palette[color]?.main || palette.primary.main,
    '&:hover': {
      background: ({ color }: PagerButtonProps) => palette[color]?.main || palette.primary.main,
    },
    '&.Mui-disabled': {
      background: grey[100],
    },
    padding: '0.25rem',
    margin: 0,
    border: 0,
    height: 'min-content',
    borderRadius: 100,
    color: 'white',
    minWidth: 'unset',
    lineHeight: 'unset',
    letterSpacing: 'unset',
  },
});
export default styles;
