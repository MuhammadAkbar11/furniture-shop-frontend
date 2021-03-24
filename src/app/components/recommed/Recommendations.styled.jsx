import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  withStyles,
} from '@material-ui/core';
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
  position: relative;
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
  &:hover {
    .card-actions {
      bottom: 30%;
      opacity: 1;
    }
  }
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
      height: 170px;
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
      padding-top: .5rem;
      .price {
        font-size: 12px;
      }

      a .title {
        font-size: 12px;
      }
    }
  `}
`;

export const ProductCardActionMobile = styled(Box)`
  height: 30px;
  display: flex;
  border-top: 0.5px solid ${({ theme }) => theme.palette.grey[300]};
  border-right: 0.5px solid ${({ theme }) => theme.palette.grey[300]};
  border-bottom: 0.5px solid ${({ theme }) => theme.palette.grey[300]};
  border-radius: 0;
  box-sizing: border-box;
  position: relative;

  .btn-xs-action {
    padding: 0.3rem 0rem;
    height: 30px;
    border-radius: 0;
    border-left: 0.5px solid ${({ theme }) => theme.palette.grey[300]};
    svg {
      color: ${({ theme }) => theme.palette.grey[400]};
      height: 20px !important;
    }
  }
`;

export const ProductCardAction = styled(Box)`
  transition: 0.2s all ease-in-out;
  position: absolute;
  width: max-content;
  opacity: 0;
  left: 35%;
  z-index: 5;
  bottom: 28%;
  display: flex;
  gap: 0.7rem;
`;

export const ButtonAction = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.dark,
    color: theme.palette.grey[200],
    padding: theme.spacing(1),
    height: 40,
    width: 40,
    maxWidth: 40,
    minWidth: 40,
    borderRadius: 2,
    marginLeft: 0,
    marginRight: 0,
    '& svg': {
      height: 40,
      width: 40,
      marginLeft: 0,
    },

    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },
}))(Button);
