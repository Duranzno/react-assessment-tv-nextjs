import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(({ spacing }) => createStyles({ root: { maxHeight: spacing(8) } }));
export default useStyles;
