import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { BoxCategory } from './Footer.styled';

const FooterCategories = () => {
  return (
    <>
      <Typography variant='subtitle2' className='section-title'>
        Categories
      </Typography>
      <BoxCategory display='flex'>
        <Box flex={1} mt={3} display='flex' flexDirection='column'>
          <Link to='/product/'>
            <Typography variant='subtitle2' className='section-text'>
              Chairs
            </Typography>
          </Link>
          <Link to='/product/' className='link-bottom'>
            <Typography variant='subtitle2' className='section-text'>
              Tables
            </Typography>
          </Link>
          <Link to='/product/' className='link-bottom'>
            <Typography variant='subtitle2' className='section-text'>
              Bedroom
            </Typography>
          </Link>
        </Box>
        <Box flex={1} mt={3} display='flex' flexDirection='column'>
          <Link to='/product/'>
            <Typography variant='subtitle2' className='section-text'>
              Storage
            </Typography>
          </Link>
        </Box>
      </BoxCategory>
    </>
  );
};

export default FooterCategories;
