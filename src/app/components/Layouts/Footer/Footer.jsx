import React from 'react';
import { Box, Grid, Hidden, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  FooterContainer,
  FooterDivider,
  FooterNavigation,
  FooterSectionBottom,
  FooterSectionTop,
  FooterSectionTopItem,
} from './Footer.styled';
import FooterCategories from './FooterCategories';
import FooterAbout from './FooterAbout';
import FooterContact from './FooterContact';

const Footer = () => {
  const menuItems = useSelector(state => state.ui.menu);

  return (
    <FooterContainer component='footer'>
      <FooterSectionTop container>
        <FooterSectionTopItem item xs={12} md={3}>
          <FooterAbout />
        </FooterSectionTopItem>
        <FooterSectionTopItem item xs={12} md={3}>
          <FooterCategories />
        </FooterSectionTopItem>
        <Hidden mdDown>
          <FooterSectionTopItem item md={3} />
        </Hidden>
        <FooterSectionTopItem item xs={12} md={3}>
          <FooterContact />
        </FooterSectionTopItem>
      </FooterSectionTop>
      <FooterDivider />
      <FooterSectionBottom container>
        <Grid item xs={12} md={6}>
          <FooterNavigation>
            {menuItems.map(item => {
              return (
                <Link key={item.url} className='footer-nav-item' to='/'>
                  <Typography variant='subtitle2'>{item.label}</Typography>
                </Link>
              );
            })}
          </FooterNavigation>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            width='100%'
            height='100%'
            display='flex'
            justifyContent={{
              md: 'flex-end',
            }}
            alignItems='center'
            my='auto'
          >
            <Typography
              align='right'
              style={{
                color: '#7C7C7C',
              }}
            >
              2021 Fudu by Muhammadakbarletlet
            </Typography>
          </Box>
        </Grid>
      </FooterSectionBottom>
    </FooterContainer>
  );
};

export default Footer;
