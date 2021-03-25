import React from 'react';
import styled from 'styled-components';

const MoreIconStyled = styled.svg`
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

const MoreIcon = () => {
  return (
    <MoreIconStyled viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <g id='ic-actions-more-1'>
        <circle className='cls-1' cx='4.19' cy='11.98' r='2' />
        <circle className='cls-1' cx='12' cy='12.02' r='2' />
        <circle className='cls-1' cx='19.81' cy='11.98' r='2' />
      </g>
    </MoreIconStyled>
  );
};

export default MoreIcon;
