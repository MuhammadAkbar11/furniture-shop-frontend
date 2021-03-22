import React from 'react';
import { Box, Typography } from '@material-ui/core';

const FooterAbout = () => {
  return (
    <>
      <Typography variant='subtitle2' className='section-title'>
        About us
      </Typography>
      <Box mt={3}>
        <Typography variant='subtitle2' className='section-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus
        </Typography>
      </Box>
    </>
  );
};

export default FooterAbout;
