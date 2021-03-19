import React from 'react';

import {
  // unstable_createMuiStrictModeTheme as createMuiTheme
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  // darken,
} from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import TopMenu from './TopMenu/TopMenu';
import { Wrapper } from './LayoutStyled';

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

const Layout = props => {
  const { children } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <TopMenu />
          {children}
        </Wrapper>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

Layout.defaultProps = defaultProps;

Layout.propTypes = proptypes;

export default Layout;
