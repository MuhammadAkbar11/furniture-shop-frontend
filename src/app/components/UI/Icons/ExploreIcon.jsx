import React from 'react';
import styled from 'styled-components';

const ExploreIconStyled = styled.svg`
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

const ExploreIcon = () => {
  return (
    <ExploreIconStyled viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <g id='ic-furniture-chair'>
        <path
          className='cls-1'
          d='M19,19.94H5a2,2,0,0,1-2-2v-3H3a22.21,22.21,0,0,1,18,0h0v3A2,2,0,0,1,19,19.94Z'
        />
        <path
          className='cls-1'
          d='M3,14.94V12.52a3,3,0,0,1,3-3H6a3,3,0,0,1,3,3v.72'
        />
        <path
          className='cls-1'
          d='M21,14.94V12.52a3,3,0,0,0-3-3h0a3,3,0,0,0-3,3v.72'
        />
        <path
          className='cls-1'
          d='M5,9.69V3.94H5a14,14,0,0,1,13.84-.09l.16.09V9.66'
        />
        <line className='cls-2' x1='6' y1='19.94' x2='6' y2='21.94' />
        <line className='cls-2' x1='18' y1='19.94' x2='18' y2='21.94' />
      </g>
    </ExploreIconStyled>
  );
};

export default ExploreIcon;
