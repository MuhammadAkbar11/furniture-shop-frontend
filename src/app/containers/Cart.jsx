import React from 'react';
import Layout from '@components/Layouts/Layout';

import Breadcrumbs from '../components/UI/Breadcrumbs/Breadcrumbs';
import CartProducts from '../components/cart/cartProducts/CartProducts';

const Cart = () => {
  const breadItems = [
    {
      label: 'Home',
      url: '/',
      ac: false,
    },
    {
      label: 'Cart',
      url: '/cart',
      ac: true,
    },
  ];
  return (
    <Layout>
      <Breadcrumbs title='Cart' items={breadItems} />
      <CartProducts />
    </Layout>
  );
};

export default Cart;
