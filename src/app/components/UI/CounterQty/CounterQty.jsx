import React from 'react';
import { Box, InputBase } from '@material-ui/core';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Counter = styled(Box)`
  width: max-content;
  display: flex;
  align-items: stretch;
  background-color: ${({ theme }) => theme.palette.common.white};

  .counter-input {
    width: 45px;

    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 0.4rem;
    padding-top: 0.4rem;
    display: inline-block;

    box-sizing: border-box;

    input {
      text-align: center !important;
    }
  }

  .counter-actions {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    border-left: 1px solid ${({ theme }) => theme.palette.grey[200]};
    button {
      cursor: pointer;
      outline: none;
      background-color: transparent;
      border: none;
      flex: 1;
      &:hover {
        background-color: ${({ theme }) => theme.palette.grey[200]};
      }
      &.increment {
        border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};
      }
    }
  }
`;

/* eslint-disable */
const defaultProps = {
  value: 1,
};

const proptypes = {
  value: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
};

const CounterQty = props => {
  const { value, onIncrement, onDecrement } = props;

  return (
    <Counter {...props}>
      <InputBase type='text' value={value} className='counter-input' />
      <div className='counter-actions'>
        <button type='button' className='increment' onClick={onIncrement}>
          +
        </button>
        <button type='button' className='decrement' onClick={onDecrement}>
          -
        </button>
      </div>
    </Counter>
  );
};

CounterQty.defaultProps = defaultProps;

CounterQty.propTypes = proptypes;

export default CounterQty;
