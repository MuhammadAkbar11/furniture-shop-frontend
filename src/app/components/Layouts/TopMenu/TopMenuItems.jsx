import React from 'react';
import { Box, Link as LinkItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const LinkStyled = styled(LinkItem)`
  margin-right: 0.8rem;
  text-transform: uppercase;
  ${({ theme }) => `
    color: ${theme.palette.dark};
    &:hover {
      color: ${theme.palette.primary.main}
    }
  `}
`;

const TopMenuItems = () => {
  const menu = useSelector(state => state.ui.menu);

  return (
    <Box height='100' display='flex' flex={1}>
      {/* eslint-disable */}
      {menu.map((item, index) => {
        console.log(item);
        return (
          <React.Fragment key={index}>
            <LinkStyled underline='none' component={Link} to={item.url}>
              {item.label}
            </LinkStyled>
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default TopMenuItems;
