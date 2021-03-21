import React from 'react';
import { Badge, Box } from '@material-ui/core';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CartIcon, UserIcon, SearchIcon } from '../../UI/Icons';

const BoxIcons = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 24px;

  ${({ theme }) => `
    .link {
      color: ${theme.palette.dark};
      position: relative;
      text-decoration: none;
      height: 100%;
      width: 24px;
      margin-left: .9rem;

      &:hover  {
        color: ${theme.palette.primary.main};
      }
    }
  `}
`;

const TopMenuUserItems = () => {
  return (
    <BoxIcons>
      <Link className='link' to='/cart'>
        <SearchIcon />
      </Link>
      <Link className='link' to='/cart'>
        <UserIcon />
      </Link>
      <Link className='link' to='/cart'>
        <Badge color='primary' badgeContent={3}>
          <CartIcon />
        </Badge>
      </Link>
    </BoxIcons>
  );
};

export default TopMenuUserItems;
