import React from 'react';
import styled from 'styled-components';

const DashboardIconStyled = styled.svg`
  height: 100%;
  width: 100%;
  .cls-1,
  .cls-2 {
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.5px;
  }
  .cls-1 {
    fill-rule: evenodd;
  }
`;

const DashboardIcon = () => {
  return (
    <DashboardIconStyled viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <g id='ic-statistics-speed'>
        <path className='cls-1' d='M3,16V15a9,9,0,0,1,9-9h0a9,9,0,0,1,9,9v1' />
        <circle className='cls-2' cx='12' cy='16' r='2' />
        <line className='cls-2' x1='13.41' y1='14.59' x2='16.5' y2='11.5' />
      </g>
    </DashboardIconStyled>
  );
};

export default DashboardIcon;
