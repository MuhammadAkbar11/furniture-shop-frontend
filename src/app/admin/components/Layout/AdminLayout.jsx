import React from 'react';
import PropTypes from 'prop-types';
import {
  // unstable_createMuiStrictModeTheme as createMuiTheme
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  // darken,
} from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import useStyles from './AdminLayout.styled';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const defaultProps = {
  children: null,
};

const proptypes = {
  children: PropTypes.node,
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#33685f',
      dark: '#274742',
      light: '#60908B',
    },
    secondary: {
      main: '#f2f2f2',
    },
    white: 'f2f2f2',
    slate: '#B9D8D3',
    light: '#f9fafb',
    dark: '#252525',
    gray: {
      light: '#9ca3af',
      main: '#6b7280',
      dark: '#374151',
    },
    success: {
      main: '#10b981',
    },
    warning: {
      main: '#f59e0b',
    },
    danger: {
      main: '#ef4444',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
});

const AdminLayout = props => {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleSidebarToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { children } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Topbar onToggle={handleSidebarToggle} />
          <Sidebar onToggle={handleSidebarToggle} mobileOpen={mobileOpen} />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {children}
          </main>
        </div>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

AdminLayout.defaultProps = defaultProps;

AdminLayout.propTypes = proptypes;

export default AdminLayout;
