/* eslint-disable */
import {
  BottomNavigation,
  BottomNavigationAction,
  lighten,
} from '@material-ui/core';
import styled from 'styled-components';

export const MobileMenuNav = styled(BottomNavigation)`
  position: fixed;
  width: 100%;
  bottom: 0;
  height: max-content;
  padding-top: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  ${({ theme }) => `
    box-shadow: 0px -.1rem 1rem rgba(51, 104, 95, 0.7);
    background-color: ${theme.palette.primary.main};
  `}
`;

export const MobileMenuAction = styled(BottomNavigationAction)`
  height: 55px;
  padding-bottom: 0px;
  color: ${({ theme }) => lighten(theme.palette.primary.light, 0.5)};
  white-space: nowrap;
  margin-bottom: 3px;
  &.Mui-selected {
    white-space: nowrap;
    color: ${({ theme }) => theme.palette.grey[200]};
  }

  svg {
    height: 25px;
    margin-bottom: 5px;
  }
`;
