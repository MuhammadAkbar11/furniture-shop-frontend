import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './styles';
import TableProducts from '../../containers/products/TableProducts';

const AllProduct = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <div className={classes.title}>
        <Typography className='title' variant='h5'>
          All Product
        </Typography>
      </div>
      <Box mt={5}>
        <TableProducts />
      </Box>
    </section>
  );
};

export default AllProduct;
