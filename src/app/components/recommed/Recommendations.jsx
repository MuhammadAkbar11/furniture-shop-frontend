import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Grid, Typography } from '@material-ui/core';
import imageProduct from 'assets/img/products/2.png';
import {
  RecomendationsContainer,
  RecommendationsTitle,
  RecommProductCol,
  ProductCard,
  ProductCardContent,
  ProductCardMedia,
} from './Recommendations.styled';

const Recommendations = () => {
  const products = useSelector(state => state.product.recentProducts);

  /* eslint-disable */
  const content = products.map(item => {
    return (
      <RecommProductCol item xs={6} sm={6} md={3} key={item._id}>
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
          </ProductCardContent>
        </ProductCard>
      </RecommProductCol>
    );
  });

  return (
    <RecomendationsContainer>
      <RecommendationsTitle>
        <Typography className='title'>You May Also Like</Typography>
      </RecommendationsTitle>
      <Grid container>{content}</Grid>
    </RecomendationsContainer>
  );
};

export default Recommendations;
