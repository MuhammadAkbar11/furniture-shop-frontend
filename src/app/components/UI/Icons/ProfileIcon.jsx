import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg`
  width: 100%;
  height: 100%;
  #ic-actions-user .cls-1,
  .cls-2 {
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-width: 1.5px;
  }
  #ic-actions-user .cls-1 {
    stroke-linejoin: round;
  }
  #ic-actions-user .cls-2 {
    stroke-linejoin: bevel;
  }
`;

const ProfileIcon = () => {
  return (
    <Icon viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <g id='ic-actions-user'>
        <path
          className='cls-1'
          d='M3,22l.79-2.88c2.61-9.5,13.81-9.5,16.42,0L21,22'
        />
        <circle className='cls-2' cx='12' cy='6.98' r='5' />
      </g>
    </Icon>
  );
};

export default ProfileIcon;
