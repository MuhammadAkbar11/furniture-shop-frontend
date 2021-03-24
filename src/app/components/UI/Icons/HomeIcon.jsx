import React from 'react';
import styled from 'styled-components';

const HomeIconStyled = styled.svg`
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

const HomeIcon = () => {
  return (
    <HomeIconStyled viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <g>
        <path
          className='cls-1'
          d='M1.1,10.71,4,3H19.86a.22.22,0,0,1,.19.13l2.85,7.6a.2.2,0,0,1-.19.27H18L15,9l-3,2L9,9,6,11H1.29A.2.2,0,0,1,1.1,10.71Z'
        />
        <line className='cls-1' x1='3.97' y1='10.98' x2='4' y2='21.02' />
        <line className='cls-1' x1='20' y1='10.98' x2='20.03' y2='20.98' />
        <line className='cls-1' x1='22' y1='20.98' x2='2' y2='21.02' />
        <path
          className='cls-1'
          d='M8,21v-6.8a.2.2,0,0,1,.2-.2h7.6a.2.2,0,0,1,.2.2V21'
        />
        <line className='cls-1' x1='12' y1='20.98' x2='12' y2='13.98' />
      </g>
    </HomeIconStyled>
  );
};

export default HomeIcon;
