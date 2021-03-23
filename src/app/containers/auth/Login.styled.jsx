import { Box, Card, Grid, InputBase, InputLabel } from '@material-ui/core';
import styled from 'styled-components';

export const LoginContainer = styled(Box)`
  width: 100%;
  height: 100vh;
  padding-left: 5vw;
  padding-right: 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2.5rem;
  padding-bottom: 3rem;
  ${({ theme }) => `
    ${theme.breakpoints.up('md')} {
      padding-top: 5rem;
      padding-left: 7.5vw;
      padding-right: 7.5vw;
    }
  `}
`;

export const LoginContent = styled(Grid)`
  width: 100%;
  height: 100%;
  .title {
    text-transform: uppercase;
  }
`;

export const LoginCard = styled(Card)`
  width: 100%;
  border-radius: 0px;
  box-shadow: none;
  background-color: ${({ theme }) => theme.palette.grey[200]};
  padding: ${({ theme }) => theme.spacing(3)}px;
  padding-top: ${({ theme }) => theme.spacing(5)}px;
`;

export const FormBox = styled(Box)`
  padding-top: 1rem;
  margin-bottom: 1.5rem;
  width: 100%;
`;

export const FormInputLabel = styled(InputLabel)`
  color: ${({ theme }) => theme.palette.dark};
  margin-bottom: ${({ theme }) => theme.spacing(1.5)}px;
  font-size: 14px;
`;

export const FormInputField = styled(InputBase)`
  background-color: #fff;

  box-sizing: border-box;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
`;
