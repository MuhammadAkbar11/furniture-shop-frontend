import { Box, Card, CardContent, CardMedia, Grid } from '@material-ui/core';
import styled from 'styled-components';

export const BoxRecentProducts = styled(Box)`
  min-height: 100vh;
  position: relative;

  ${({ theme }) => `
    background-color: ${theme.palette.grey[200]};
    padding-top: 5rem;
    padding-bottom: 5rem;
    padding-left: 7.5vw;
    padding-right: 7.5vw;

  `}
`;

export const RecentProductsContent = styled(Grid)`
  padding-top: 4.9rem;
  height: max-content;
`;

export const RecentProductItem = styled(Grid)`
  height: 475px;

  ${({ theme }) => `
    ${theme.breakpoints.only('xs')} {
      height: 375px;
    }
  `}
`;

export const ProductCard = styled(Card)`
  background-color: transparent;
  overflow: hidden;
  border: none;
  border-radius: 0px;
  box-shadow: none;
  height: 380px;
  padding: 0.6rem;
  transition: 0.2s all ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.palette.common.white};

    & > .card-content {
      transform: translateY(0rem) !important;

      & .card-action {
        opacity: 1;
      }
    }
  }

  ${({ theme }) => `
    ${theme.breakpoints.only('xs')} {
      height: 280px;
    }
  `}
`;
export const ProductCardMedia = styled(CardMedia)`
  background-size: 80%;
  width: 100%;
  .card-media-box & {
    background-color: ${({ theme }) => theme.palette.grey[200]};
    position: relative;
    width: 100%;
    height: 245px;

    ${({ theme }) => `
    ${theme.breakpoints.only('xs')} {
      height: 145px;
    }
  `}
  }
`;

export const ProductCardContent = styled(CardContent)`
  width: 100%;
  position: relative;
  transition: 0.2s all ease-in-out;
  transform: translateY(2rem);
  padding-top: 1.5rem;

  a {
    text-decoration: none;

    .title {
      color: ${({ theme }) => theme.palette.grey[900]};
      font-size: 14px;
      font-weight: 500;
    }

    &:hover {
      .title {
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }

  .price {
    margin-top: 3px;
    color: ${({ theme }) => theme.palette.primary.light};
    font-size: 14px;
    font-weight: 400;
  }

  ${({ theme }) => `
    ${theme.breakpoints.only('xs')} {
      .price {
        font-size: 12px;
      }

      a .title {
        font-size: 12px;
      }
    }
  `}
`;

export const ProductCardAction = styled(Box)`
  width: 100%;
  padding-top: 1rem;
  opacity: 0;

  transition: 0.2s all ease-in-out;
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    position: relative;
    color: ${({ theme }) => theme.palette.grey[900]};
    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.palette.grey[900]};
    }

    &:hover {
      color: ${({ theme }) => theme.palette.primary.main};
      &::before {
        background-color: ${({ theme }) => theme.palette.primary.main};
      }
    }

    ${({ theme }) => `
    ${theme.breakpoints.only('xs')} {
      font-size: 10px;
    }
  `}
  }
`;
