import React from 'react';

import { Box, Hidden, useTheme, Link as MuiLink } from '@material-ui/core';
import { Link } from 'react-router-dom';

import ProfileIcon from '@components/UI/Icons/ProfileIcon';
import {
  AuthLink,
  BoxTopMenuMobile,
  LogoTitle,
  TopMenuFooter,
  TopMenuHeaderStyled,
  TopMenuStyled,
} from './TopMenuStyled';
import TopMenuItems from './TopMenuItems';
import TopMenuUserItems from './TopMenuUserItems';

const TopMenu = () => {
  const theme = useTheme();

  return (
    <TopMenuStyled>
      <Hidden smUp>
        <BoxTopMenuMobile>
          <LogoTitle>FUDU</LogoTitle>
          <Box width={30} height={30}>
            <MuiLink
              style={{
                textDecoration: 'none',
              }}
              component={Link}
              to='/auth/login'
            >
              <ProfileIcon />
            </MuiLink>
          </Box>
        </BoxTopMenuMobile>
      </Hidden>

      <Hidden xsDown>
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
            <LogoTitle>FUDU</LogoTitle>
          </Box>
          <TopMenuUserItems />
        </TopMenuFooter>
      </Hidden>
    </TopMenuStyled>
  );
};

export default TopMenu;
