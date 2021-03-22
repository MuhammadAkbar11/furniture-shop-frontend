import React from 'react';
import { Typography } from '@material-ui/core';
import { BoxContact } from './Footer.styled';

const FooterContact = () => {
  return (
    <>
      <Typography variant='subtitle2' className='section-title'>
        Contact Info
      </Typography>
      <BoxContact mt={3}>
        <Typography variant='subtitle2' className='section-text'>
          Phone : +62-822-0000-1111
        </Typography>
        <Typography variant='subtitle2' className='section-text'>
          E-mail : fudu@gmail.com
        </Typography>
        <Typography variant='subtitle2' className='section-text'>
          Address : jln. xxxxx , xxxx
        </Typography>
      </BoxContact>
    </>
  );
};

export default FooterContact;
