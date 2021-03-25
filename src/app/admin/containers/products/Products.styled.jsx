import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  appBar: {
    boxShadow: 'none',
  },
  tabs: {
    paddingLeft: theme.spacing(0),
  },
  tabItem: {
    marginLeft: 0,
  },
}));

export default useStyles;
