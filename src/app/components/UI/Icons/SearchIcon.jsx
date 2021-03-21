import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg`
  height: 100%;
  width: 100%;

  .cls-1 {
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: bevel;
    stroke-width: 1.5px;
  }
`;

const SearchIcon = () => {
  return (
    <Icon viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <g id='ic-actions-search'>
        <circle className='cls-1' cx='13.79' cy='10.15' r='7' />
        <line className='cls-1' x1='8.91' y1='15.17' x2='4.03' y2='20.05' />
      </g>
    </Icon>
  );
};

export default SearchIcon;
