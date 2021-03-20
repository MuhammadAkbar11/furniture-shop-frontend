import { Grid, Box, Button } from '@material-ui/core';
import styled from 'styled-components';

export const LinksOverlayRoot = styled.section`
  overflow: hidden;
  width: 100%;
  margin-bottom: 5rem;
`;
export const LinkGridItem = styled(Grid)`
  height: ${({ height }) => height}px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  ${({ theme }) => `
    ${theme.breakpoints.down('xs')} {
      height: 300px;
    }
  `}
`;

export const LinkBox = styled(Box)`
  width: '100%';
  height: ${props => props.boxheight};
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .title {
    text-transform: uppercase;
    font-weight: 300;
    color: ${({ theme }) => theme.palette.grey[400]};
  }
  .action {
    text-decoration: none;
  }
`;

export const LinkImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const ButtonLink = styled(Button)`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  border-radius: 0;
  font-size: 15px !important;
  margin-top: 1.2rem;

  ${({ theme }) => `
    border: 1px solid ${theme.palette.grey[400]};
    background-color: transparent;
    color: ${theme.palette.grey[400]};
    padding-top: ${theme.spacing(1)}px;
    padding-bottom: ${theme.spacing(1)}px;
    padding-left: ${theme.spacing(2)}px;
    padding-right: ${theme.spacing(2)}px;
  `}
`;
