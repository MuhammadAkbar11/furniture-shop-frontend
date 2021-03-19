import React from 'react';

import img from 'assets/img/chair2.png';
import { Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SectionTitle from '../sectionTitle/SectionTitle';
import {
  BoxRecentProducts,
  RecentProductsContent,
  RecentProductItem,
  ProductCard,
  ProductCardContent,
  ProductCardAction,
  ProductCardMedia,
} from './RecentProduct.styled';

const RecentProduct = () => {
  // let content = null;
  /* eslint-disable */
  const arr = [];
  for (let index = 1; index < 12; index++) {
    // const element = array[index];
    arr.push({
      id: index,
      title: 'Product ' + index,
      price: 'Rp. 400.000',
    });
  }

  let content = arr.map(item => {
    return (
      <RecentProductItem item xs={12} sm={6} md={3} key={item.id}>
        <ProductCard>
          <Box className='card-media-box'>
            {' '}
            <Link
              to='/detail'
              style={{
                textDecoration: 'none',
              }}
            >
              <ProductCardMedia image={img} />
            </Link>
          </Box>
          <ProductCardContent className='card-content'>
            <Box>
              <Link to='/detail'>
                <Typography align='center' className='title'>
                  {item.title}
                </Typography>
              </Link>
              <Typography align='center' className='price'>
                {item.price}
              </Typography>
            </Box>
            <ProductCardAction className='card-action'>
              <a href='/?add-to-cart'>
                <span>Add to cart</span>
              </a>
            </ProductCardAction>
          </ProductCardContent>
        </ProductCard>
      </RecentProductItem>
    );
  });
  return (
    <BoxRecentProducts>
      <SectionTitle text='Recent Products' />
      <RecentProductsContent container>{content}</RecentProductsContent>
    </BoxRecentProducts>
  );
};

export default RecentProduct;
