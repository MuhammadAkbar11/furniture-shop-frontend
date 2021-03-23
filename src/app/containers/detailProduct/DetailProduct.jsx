import React from 'react';
import Layout from '@components/Layouts/Layout';
import imgProduct from 'assets/img/products/1.png';
import {
  Box,
  Divider,
  Hidden,
  Typography,
  Link as MuiLink,
} from '@material-ui/core';
import Breadcrumbs from '@components/UI/Breadcrumbs/Breadcrumbs';
import Button from '@components/UI/Button/Button';
import { Link } from 'react-router-dom';
import {
  DetailProductContainer,
  GridContainerProduct,
  GridItem,
  ProductImageBox,
  ProductInfoBox,
} from './DetailProduct.styled';
import CounterQty from '../../components/UI/CounterQty/CounterQty';

const DetailProduct = () => {
  const breadcrumbsLinks = [
    {
      label: 'Home',
      url: '/',
      ac: false,
    },
    {
      label: 'Recent Product',
      url: '/',
      ac: true,
    },
    {
      label: 'Product 1',
      url: '/',
      ac: true,
    },
  ];

  return (
    <Layout>
      <Breadcrumbs title='Product 1' items={breadcrumbsLinks} />
      <DetailProductContainer>
        <GridContainerProduct container>
          <GridItem
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            className='gridItem-media'
          >
            <ProductImageBox my='auto'>
              <img className='product-img' src={imgProduct} alt='' />
            </ProductImageBox>
          </GridItem>
          <Hidden mdDown>
            <GridItem item lg={1} />
          </Hidden>
          <GridItem item xs={12} sm={6} md={6} lg={5} className=''>
            <ProductInfoBox>
              <Box mb={3.5}>
                <Typography className='info-title' variant='h3'>
                  Title
                </Typography>
                <Typography variant='h6' className='info-price'>
                  Rp. 200.000
                </Typography>
              </Box>
              <Divider />
              <Box mt={3.5}>
                <Typography variant='body2' className='info-desc'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elementum facilisis leo, vel fringilla est
                  ullamcorper eget nulla facilisi etiam dignissim diam quis enim
                  lobortis scelerisque fermentum dui faucibus in ornare quam
                  viverra
                </Typography>
                <Box display='flex' mt={3.5} mb={4}>
                  <CounterQty mr={2} />
                  <Button
                    style={{
                      paddingLeft: '1.6rem',
                      paddingRight: '1.6rem',
                    }}
                  >
                    Add to cart
                  </Button>
                </Box>
                <Divider />
                <Box mt={3.5} display='flex'>
                  <Typography className='info-categories'>
                    Categories :
                  </Typography>
                  <Box className='info-categories-box'>
                    {['Chairs', 'Recent Product'].map(cat => {
                      return (
                        <MuiLink
                          className='info-link-category'
                          component={Link}
                        >
                          {cat}
                        </MuiLink>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            </ProductInfoBox>
          </GridItem>
        </GridContainerProduct>
      </DetailProductContainer>
    </Layout>
  );
};

export default DetailProduct;
