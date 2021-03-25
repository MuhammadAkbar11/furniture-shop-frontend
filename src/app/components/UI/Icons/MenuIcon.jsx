import React from 'react';
import styled from 'styled-components';

const MenuIconStyled = styled.svg`
  height: 100%;
  width: 100%;
  .cls-1 {
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.5px;
  }
`;

const MenuIcon = () => {
  return (
    <MenuIconStyled viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <g id='ic-actions-menu'>
        <line className='cls-1' x1='4' y1='12' x2='20' y2='12' />
        <line className='cls-1' x1='4' y1='5' x2='20' y2='5' />
        <line className='cls-1' x1='4' y1='19' x2='20' y2='19' />
      </g>
    </MenuIconStyled>
  );
};

export default MenuIcon;
