import React from 'react';
import { Box, Typography } from '@material-ui/core';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SectionStyledTitle = styled(Box)`
  ${({ theme }) => `
  .title {
    font-weight: 500;
    color: ${theme.palette.dark};
    text-transform: uppercase;
  }
`}
`;

const defaultProps = {
  text: '',
};

const proptypes = {
  text: PropTypes.string,
};

const SectionTitle = props => {
  const { text } = props;
  return (
    <SectionStyledTitle>
      <Typography align='center' variant='h6' className='title'>
        {text}
      </Typography>
    </SectionStyledTitle>
  );
};

SectionTitle.defaultProps = defaultProps;

SectionTitle.propTypes = proptypes;

export default SectionTitle;
