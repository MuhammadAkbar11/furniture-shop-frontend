import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import styled, { css } from 'styled-components'; /* eslint-disable-line */
import { Button, darken, Typography } from '@material-ui/core';

export const BannerContainer = styled(Box)`
  height: 100vh;
  width: 100%;
  padding-left: 7.5vw;
  padding-right: 7.5vw;
  ${({ theme }) => `
    background-color: ${theme.palette.primary.main};
    .capton {
      color: ${theme.palette.light};
    }
    ${theme.breakpoints.down('sm')} {
      padding-bottom: ${theme.spacing(10)}px;
      min-height: 100vh;
      height: max-content;
    }
  `}
`;

export const BannerGridContainer = styled(Grid)`
  height: 100%;
  width: 100%;
  ${({ theme }) => `
    ${theme.breakpoints.down('sm')} {
      min-height: 'auto';

      margin-left: 'auto';
      margin-right: 'auto';
    }
  `}
`;

export const BannerGridItem = styled(Grid)`
  height: 100%;
`;

export const BoxProductImage = styled(Box)`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  ${({ theme }) => `
    margin-bottom: ${theme.spacing(2)}px;
    ${theme.breakpoints.up('md')} {
      width: 80%;
      height: 100%;
      display: flex;
      align-items: center;
      margin-left: auto;
      margin-right:  0px;
    }
  `}
`;

export const ProductImg = styled.img`
  width: 100%;
`;

export const Caption = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 1rem;

  ${({ theme }) => `
    & > * {
      font-style: 'normal';
      font-weight: '400';
      font-size: '16px';
      color: ${theme.palette.grey[300]};
    }
    & .divider {
      border: 0;
      border-top : 1px solid;
      margin-right: ${theme.spacing(1)}px;
      width: 50px;
    }
  `}
`;

export const BannerProductTitle = styled(Typography)`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 71px;
  font-weight: 500;
  line-height: 5rem;
  ${({ theme }) => `
  color: ${theme.palette.grey[200]};
  ${theme.breakpoints.down('sm')}{
    font-size: 51px;
  }
  `}
`;

export const BannerProductDesc = styled(Typography)`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  margin-top: 1rem;
  letter-spacing: 0.5%;
  opacity: 0.9;
  ${({ theme }) => `
    color: ${theme.palette.slate};
  `}
`;

export const ProductPrice = styled(Typography)`
  ${({ theme }) => `
    color: ${theme.palette.grey[200]};
    font-size: 30px;
    font-weight: 500;
    margin-top: 1rem;
  `}
`;

export const BannerButton = styled(Button)`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  border-radius: 0;
  font-size: 14px !important;
  margin-top: 1.2rem;

  ${({ theme }) => `
    background-color: ${theme.palette.grey[200]};
    color: ${theme.palette.primary.main};
    padding-top: ${theme.spacing(1)}px;
    padding-bottom: ${theme.spacing(1)}px;
    padding-left: ${theme.spacing(3)}px;
    padding-right: ${theme.spacing(3)}px;
    &:hover {
      background-color: ${darken(theme.palette.grey[200], 0.2)};
    }
  `}
`;
