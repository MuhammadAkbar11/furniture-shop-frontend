import React from 'react';

import { Box, Hidden, useTheme } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {
  AuthLink,
  LogoTitle,
  TopMenuFooter,
  TopMenuHeaderStyled,
  TopMenuStyled,
} from './TopMenuStyled';
import TopMenuItems from './TopMenuItems';

const TopMenu = () => {
  const theme = useTheme();

  return (
    <TopMenuStyled>
      <Hidden mdDown>
        <TopMenuHeaderStyled>
          <Box>
            <AuthLink theme={theme}>Facebook</AuthLink>
          </Box>
          <Box>
            <Link
              style={{ textDecoration: 'none' }}
              className='link'
              to='/login'
            >
              <AuthLink theme={theme}>Login</AuthLink>
            </Link>
            <span className='slash'>/</span>
            <Link
              style={{ textDecoration: 'none' }}
              className='link'
              to='/signup'
            >
              <AuthLink theme={theme}>Sign up</AuthLink>
            </Link>
          </Box>
        </TopMenuHeaderStyled>
        <TopMenuFooter>
          <TopMenuItems />
          <Box my={0} flex={1}>
            <LogoTitle color={theme.palette}>FUDU</LogoTitle>
          </Box>
          <div />
        </TopMenuFooter>
      </Hidden>
    </TopMenuStyled>
  );
};

export default TopMenu;
