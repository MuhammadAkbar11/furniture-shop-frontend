import { Box, Grid } from '@material-ui/core';
import styled from 'styled-components';

export const TrendCategStyled = styled(Box)`
  min-height: 495px;
  position: relative;

  ${({ theme }) => `
    padding-top: 5rem;
    padding-bottom: 5rem;
    padding-left: 7.5vw;
    padding-right: 7.5vw;
    ${theme.breakpoints.down('sm')} {
      height: max-content;
    }
  `}
`;

export const BoxTrendTitle = styled(Box)`
  ${({ theme }) => `


    .title {
      font-weight: 500;
      color: ${theme.palette.dark};
      text-transform: uppercase;
    }
  `}
`;

export const TrendCategoriesContent = styled(Grid)`
  padding-top: 4.9rem;
  height: max-content;
`;

export const CategoryItem = styled(Grid)`
  height: max-content;

  position: relative;
  ${({ theme }) => `


    & > a {
      text-decoration: none;
    }
    & > a .title {
      margin-left: auto;
      margin-right: auto;
      width: max-content;
      font-size: 16px;
      margin-top: 25px;

      color: ${theme.palette.dark};
      &:hover {
        color: ${theme.palette.primary.main};
      }
    }
    ${theme.breakpoints.down('xs')}{
      margin-left: auto;
      margin-right: auto;
      margin-top: 10px;
      height: auto;
    }
  `}
`;

export const CategoryItemMedia = styled(Box)`
  overflow: hidden;
  position: relative;

  &:hover {
    img {
      transform: scale(1.1);
    }

    .category-badge {
      bottom: 0;
    }
  }
`;

export const CategoryItemBadge = styled.div`
  position: absolute;
  height: 2.8rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all ease-in-out;
  background-color: ${({ color }) => color.primary.main};
  left: 0;
  right: 0;
  bottom: -5rem;

  & .caption {
    color: ${({ color }) => color.grey[200]};
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 500;
    span {
      color: ${({ color }) => color.slate};
      margin-left: 0.6rem;
    }
  }
`;

export const CategoryImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: 0.2s all ease-in-out;
`;
