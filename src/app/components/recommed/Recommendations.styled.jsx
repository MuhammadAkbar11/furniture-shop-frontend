import { Box, Card, CardContent, CardMedia, Grid } from '@material-ui/core';
import styled from 'styled-components';

export const RecomendationsContainer = styled(Box)`
  background-color: #fff;

  padding-left: 5vw;
  padding-right: 5vw;
  padding-top: 6rem;
  padding-bottom: 4.5rem;
  ${({ theme }) => `

    ${theme.breakpoints.up('md')} {
      padding-left: 7.5vw;
      padding-right: 7.5vw;
    }
  `}
`;

export const RecommendationsTitle = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 4.5rem;
  ${({ theme }) => `
  .title {
    font-weight: 500;
    color: ${theme.palette.dark};
    text-transform: uppercase;
  }
`}
`;

export const RecommProductCol = styled(Grid)`
  height: 390px;

  ${({ theme }) => `
    ${theme.breakpoints.only('xs')} {
      height: 300px;
    }
  `}
`;

export const ProductCard = styled(Card)`
  background-color: transparent;
  overflow: hidden;
  border: none;
  border-radius: 0px;
  box-shadow: none;
  height: 390px;
  padding: 0.6rem;
  transition: 0.2s all ease-in-out;

  ${({ theme }) => `
    ${theme.breakpoints.only('xs')} {
      height: 300px;
    }
  `}
`;
export const ProductCardMedia = styled(CardMedia)`
  background-size: 110%;
  width: 100%;
  transition: 0.2s all ease-in-out;
  .card-media-box & {
    background-color: ${({ theme }) => theme.palette.grey[200]};
    position: relative;
    width: 100%;
    height: 290px;

    ${({ theme }) => `
    ${theme.breakpoints.only('xs')} {
      height: 200px;
    }
  `}
  }
`;

export const ProductCardContent = styled(CardContent)`
  width: 100%;
  position: relative;
  transition: 0.2s all ease-in-out;
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
