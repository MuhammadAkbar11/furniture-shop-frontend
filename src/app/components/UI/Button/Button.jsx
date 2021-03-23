import React from 'react';
import { Button as MuiButton } from '@material-ui/core';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButtonContained = styled(MuiButton)`
  border: none;
  box-shadow: none !important;
  border-radius: 0px;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  font-weight: 400;
`;

const StyledBtnOutlined = styled(MuiButton)`
  box-shadow: none !important;
  border-radius: 0px;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  font-weight: 400;
`;

const defaultProps = {
  children: null,
  variant: 'contained',
  color: 'primary',
  onClick: null,
};

const proptypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
/* eslint-disable */
const Button = props => {
  const { children, variant, color, onClick } = props;

  let Styled = StyledButtonContained;

  if (variant === 'outlined') {
    Styled = StyledBtnOutlined;
  }

  return (
    <Styled variant={variant} color={color} onClick={onClick} {...props}>
      {children}
    </Styled>
  );
};

Button.defaultProps = defaultProps;

Button.propTypes = proptypes;

export default Button;
