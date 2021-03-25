import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(5),
  },
  title: {
    color: theme.palette.dark,
  },
}));

export default useStyles;
