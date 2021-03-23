import { Box, Grid } from '@material-ui/core';
import styled from 'styled-components';

export const DetailProductContainer = styled(Box)`
  height: max-content;
  padding-left: 5vw;
  padding-right: 5vw;
  padding-top: 4rem;
  padding-bottom: 4.5rem;
  ${({ theme }) => `
    background-color: ${theme.palette.grey[200]};
    ${theme.breakpoints.up('md')} {
      padding-left: 7.5vw;
      padding-right: 7.5vw;
    }
  `}
`;

export const GridContainerProduct = styled(Grid)`
  height: 100%;
`;

export const GridItem = styled(Grid)`
  height: 100%;

  &.gridItem-media {
    display: flex;
    justify-content: 'center';
    align-items: center;
  }
`;

export const ProductImageBox = styled(Box)`
  width: 100%;

  .product-img {
    height: 100%;
    width: 100%;
  }
`;

export const ProductInfoBox = styled(Box)`
  width: 100%;
  color: ${({ theme }) => theme.palette.dark};
  .info-title {
    font-weight: bold;
  }

  .info-price {
    font-weight: 400;
  }

  .info-desc {
    font-weight: 300;
    color: ${({ theme }) => theme.palette.grey[700]};
    line-height: 21px;
  }

  .info-categories {
    margin-right: 0.6rem;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
  }

  .info-categories-box .info-link-category {
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none;
    margin-right: 0.6rem;
    color: ${({ theme }) => theme.palette.grey[700]};
    &:hover {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;
