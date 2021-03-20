import React from 'react';

import imageProduct from 'assets/img/products/1.png';
import { Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
  /* eslint-disable */

  const recentProducts = useSelector(state => state.product.recentProducts);

  console.log(recentProducts);

  let content = recentProducts.map(item => {
    return (
      <RecentProductItem item xs={12} sm={6} md={3} key={item._id}>
        <ProductCard>
          <Box className='card-media-box'>
            {' '}
            <Link
              to='/detail'
              style={{
                textDecoration: 'none',
              }}
            >
              <ProductCardMedia image={imageProduct} />
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
