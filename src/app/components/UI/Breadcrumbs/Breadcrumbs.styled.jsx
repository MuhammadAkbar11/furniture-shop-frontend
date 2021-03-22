import { Box } from '@material-ui/core';
import styled from 'styled-components';

export const BreadcrumbsContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 90px;
  padding-left: 5vw;
  padding-right: 5vw;
  display: flex;
  align-items: center;
  & > * {
    text-transform: uppercase;
  }
  ${({ theme }) => `
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.grey[200]};
    ${theme.breakpoints.up('md')} {

      padding-left: 7.5vw;
      padding-right: 7.5vw;
    }
  `}
`;

export const BreadcrumbsTitle = styled(Box)`
  height: 100%;

  display: flex;
  align-items: center;
  text-align: left;

  ${({ theme }) => `
    .title {
      font-weight: 400;
      font-size: 16px;
    }

    ${theme.breakpoints.up('md')} {
        flex: 1;
        .title {
          font-size: 18px;
        }
      }
  `}
`;

export const BreadcrumbsNav = styled(Box)`
  height: 100%;
  flex: 1;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${({ theme }) => `

      & > * {
        color: ${theme.palette.slate};
      }
      .link {
        font-weight: 400;
        font-size: 16px;
        color: ${theme.palette.slate};

        &:hover{
          color: ${theme.palette.grey[200]};
        }
        &:hover.active{
          color: ${theme.palette.slate};
        }
      }

    ${theme.breakpoints.up('md')} {
        flex: 1;
        .link {
          font-size: 18px;
        }
      }
  `}
`;
