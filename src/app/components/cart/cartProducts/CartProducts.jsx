import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Grid,
  Typography,
  CardContent,
  Divider,
  withStyles,
} from '@material-ui/core';
import Button from '@components/UI/Button/Button';
import CounterQty from '@components/UI/CounterQty/CounterQty';
import {
  CartDetailCard,
  CartProductsContainer,
  CartProductsGridContainer,
  CartTableBox,
} from './CartProduct.styled';

const StyledTableRow = withStyles(() => ({
  root: {
    paddingBottom: '1rem',
  },
}))(TableRow);

const CartProducts = () => {
  const data = [
    { title: 'Product', price: 'Rp. 200.000', qty: 2 },
    { title: 'Product', price: 'Rp. 200.000', qty: 2 },
  ];
  return (
    <CartProductsContainer>
      <CartProductsGridContainer container spacing={6}>
        <Grid item xs={12} sm={8}>
          <CartTableBox>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => {
                  const key = index;
                  return (
                    <StyledTableRow key={key}>
                      <TableCell component='th' scope='row'>
                        <Box height={100} width={100} border={1} />
                      </TableCell>
                      <TableCell>{row.title}</TableCell>
                      <TableCell>{row.price}</TableCell>
                      <TableCell>
                        <Box>
                          <CounterQty />
                        </Box>
                      </TableCell>
                      <TableCell>Rp. 200.000</TableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CartTableBox>
        </Grid>

        <Grid item xs={12} sm={4}>
          <CartDetailCard>
            <CardContent>
              <Typography className='card-title'>Cart Detail</Typography>
              <Box display='flex' className='card-row' mt={4}>
                <Typography className='card-row-key'>Subtotal</Typography>
                <Typography className='card-row-value'>Rp. 200.000</Typography>
              </Box>
              <Divider />
              <Box display='flex' className='card-row ' mt={4}>
                <Typography className='card-row-key'>Shipping</Typography>
                <Typography className='card-row-value'>Free</Typography>
              </Box>
              <Divider />
              <Box display='flex' className='card-row' mt={4}>
                <Typography className='card-row-key'>Total</Typography>
                <Typography className='card-row-value'>Subtotal</Typography>
              </Box>
              <Box mt={4}>
                <Button fullWidth color='primary' variant='contained'>
                  Checkout
                </Button>
              </Box>
            </CardContent>
          </CartDetailCard>
        </Grid>
      </CartProductsGridContainer>
    </CartProductsContainer>
  );
};

export default CartProducts;
