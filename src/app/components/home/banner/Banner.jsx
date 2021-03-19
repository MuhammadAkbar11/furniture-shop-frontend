import React from 'react';
import { Box, Typography, useTheme } from '@material-ui/core';
import imgBanner from 'assets/img/sofa-hijau.png';
import {
  BannerButton,
  BannerContainer,
  BannerGridContainer,
  BannerGridItem,
  BannerProductDesc,
  BannerProductTitle,
  BoxProductImage,
  Caption,
  ProductImg,
  ProductPrice,
} from './BannerStyled';

const Banner = () => {
  const theme = useTheme();

  return (
    <BannerContainer
      py={{
        xs: 5,
      }}
      px='7.5vw'
    >
      <BannerGridContainer container>
        <Box clone order={{ xs: 2, sm: 2, lg: 1 }}>
          <BannerGridItem item md={4}>
            <Box
              width='100%'
              height='100%'
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='start'
            >
              <Caption theme={theme}>
                <hr className='divider' />
                <Typography className='caption'>New Collecton</Typography>
              </Caption>
              <BannerProductTitle>Sofa warna hijau</BannerProductTitle>
              <BannerProductDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                numquam architecto ipsa et asperiores laboriosam magni, dicta a
                hic eos id, rem nemo error?
              </BannerProductDesc>
              <ProductPrice>Rp, 500.000</ProductPrice>
              <BannerButton>Add to cart</BannerButton>
            </Box>
          </BannerGridItem>
        </Box>
        <Box clone order={{ xs: 1, sm: 1, lg: 2 }} display='flex'>
          <BannerGridItem item md={8}>
            <BoxProductImage>
              <ProductImg src={imgBanner} />
            </BoxProductImage>
          </BannerGridItem>
        </Box>
      </BannerGridContainer>
    </BannerContainer>
  );
};

export default Banner;
