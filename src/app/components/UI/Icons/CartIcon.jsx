import React from 'react';
import styled from 'styled-components';

const CartIconStyled = styled.svg`
  height: 100%;
  width: 100%;
`;

const CartIcon = () => {
  return (
    <CartIconStyled viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <g>
        <g>
          <polyline
            style={{
              fill: 'none',
              stroke: 'currentcolor',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '1.4px',
            }}
            className='cls-1'
            points='1.68 2.77 5.18 2.77 8.34 16.48 21 16.48 22.32 6.72 6.09 6.72'
          />
          <rect
            style={{
              fill: 'none',
              stroke: 'currentcolor',
            }}
            x='9.3'
            y='18.62'
            width='2.61'
            height='2.61'
            rx='1.3'
          />
          <rect
            style={{
              fill: 'none',
              stroke: 'currentcolor',
            }}
            x='9.3'
            y='18.62'
            width='2.61'
            height='2.61'
            rx='1.3'
          />
          <rect
            style={{
              fill: 'none',
              stroke: 'currentcolor',
            }}
            x='16.16'
            y='18.62'
            width='2.61'
            height='2.61'
            rx='1.3'
          />
        </g>
      </g>
    </CartIconStyled>
  );
};

export default CartIcon;
