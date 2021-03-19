import { Box, darken, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const TopMenuStyled = styled(Box)`
  height: 155px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 0;
  padding-bottom: 0;
  box-sizing: border-box;
  padding-left: 5vw;
  padding-right: 5vw;
  ${({ theme }) => `
    ${theme.breakpoints.up('md')} {
      padding-left: 7.5vw;
      padding-right: 7.5vw;
    }

    ${theme.breakpoints.down('xs')} {
      background-color: ${theme.palette.primary.main};
      height: 80px;
    }
  `}
`;

export const TopMenuHeaderStyled = styled(Box)`
  height: 55px;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-family: 'Roboto', sans-serif;
  padding: 0;

  ${({ theme }) => `
  border-bottom: 1px solid ${theme.palette.grey[200]};
  padding-bottom: ${theme.spacing(1)}px;


  .slash {
    margin-left: 5px;
    margin-right: 5px;
    color: ${theme.palette.grey[900]};
  }
 `}
`;

export const AuthLink = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 300;
  text-decoration: none;

  ${({ theme }) => `
    color: ${theme.palette.grey[900]};

    .link:hover & {
      color: ${darken(theme.palette.grey[900], 0.2)};
      text-decoration: underline;
    }
  `}
`;

export const TopMenuFooter = styled.div`
  margin: 0;
  height: 100px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

export const BoxTopMenuMobile = styled(Box)`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => `
    color: ${theme.palette.grey[200]};
    margin-top: ${theme.spacing(2)}px;
  `}
`;

export const LogoTitle = styled(Typography)`
  font-family: 'Roboto', sans-serif;

  font-weight: bold;
  ${({ theme }) => `
    color: ${theme.palette.grey[200]};
    font-size: 30px;
    ${theme.breakpoints.up('sm')}{
      font-size: 50px;
      color: ${theme.palette.primary.main};
    }

  `}
`;
