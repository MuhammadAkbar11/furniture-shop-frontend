import { Grid, Box, Card } from '@material-ui/core';
import styled from 'styled-components';

export const CartProductsContainer = styled(Box)`
  padding-top: 150px;
  padding-bottom: 100px;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 5vw;
  padding-right: 5vw;
  width: 100%;
  overflow-x: hidden;
  ${({ theme }) => `
    ${theme.breakpoints.up('md')} {

      padding-left: 7.5vw;
      padding-right: 7.5vw;
    }
  `}
`;

export const CartProductsGridContainer = styled(Grid)`
  min-height: 400px;
`;

export const CartTableBox = styled(Box)`
  display: flex;
  width: 100%;
  overflow-x: auto;

  table {
    & > * {
      white-space: nowrap;
    }
  }
`;

export const CartDetailCard = styled(Card)`
  margin-top: 0.8rem;
  border-radius: 0px;
  box-shadow: none;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 0.9rem;
  padding-right: 0.9rem;

  ${({ theme }) => `
    background-color: ${theme.palette.grey[200]};

    .card-title {
      font-weight: 500;
      font-size: 18px;
      color: ${theme.palette.dark};
      margin-bottom: 1rem;
    }

    .card-row {
      padding-bottom: 0.7rem;
      font-size: 16px;
    }

    .card-row .card-row-key  {
      flex: 1;
      font-weight: 500 !important;
      color: ${theme.palette.dark};
    }

    .card-row .card-row-value  {
      flex: 1;
      font-weight: 300 !important;
      color: ${theme.palette.dark};

    }
  `}
`;
