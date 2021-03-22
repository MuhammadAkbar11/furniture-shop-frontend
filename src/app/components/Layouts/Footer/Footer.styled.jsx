import { Box, Divider, Grid } from '@material-ui/core';
import styled from 'styled-components';

export const FooterContainer = styled(Box)`
  background-color: ${({ theme }) => theme.palette.dark};
  width: 100%;
  min-height: 440px;
  padding-top: 3rem;
  padding-left: 5vw;
  padding-right: 5vw;
  ${({ theme }) => `
    ${theme.breakpoints.up('md')} {
      padding-top: 90px;
      padding-left: 7.5vw;
      padding-right: 7.5vw;
    }
  `}
`;

export const FooterSectionTop = styled(Grid)`
  overflow: hidden;
  min-height: 250px;
  width: 100%;
`;

export const FooterSectionTopItem = styled(Grid)`
  padding-right: ${({ theme }) => theme.spacing(2)}px;
  margin-bottom: 2rem;

  ${({ theme }) => `
    ${theme.breakpoints.up('md')} {
      margin-bottom: 0.9rem;
      padding-right: ${theme.spacing(5)}px;
    }
  `}

  .section-title {
    color: ${({ theme }) => theme.palette.grey[200]};
    font-weight: 500;
  }

  .section-text {
    font-weight: 300;
    color: ${({ theme }) => theme.palette.grey[500]};
  }
`;

export const BoxCategory = styled(Box)`
  a {
    text-decoration: none;

    &:hover .section-text {
      color: ${({ theme }) => theme.palette.primary.main};
    }

    &.link-bottom {
      margin-top: 0.8rem;
    }
  }
`;

export const BoxContact = styled(Box)`
  .section-text {
    margin-bottom: 0.8rem;
  }
`;

export const FooterDivider = styled(Divider)`
  /* wait */
  background-color: rgba(124, 124, 124, 0.27);
`;

export const FooterSectionBottom = styled(Grid)`
  min-height: 100px;
  width: 100%;
`;

export const FooterNavigation = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;

  .footer-nav-item {
    margin-right: 1.5rem;
    color: ${({ theme }) => theme.palette.grey[200]};

    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.palette.primary.light};
    }
  }
`;
