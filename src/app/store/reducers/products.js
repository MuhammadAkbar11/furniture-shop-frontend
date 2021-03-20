import { productActionTypes } from '../actions/actionsTypes';

import * as productReducerHandlers from './handlers/products';

const initState = {
  recentProducts: [
    {
      _id: 1,
      title: 'Product 1',
      price: 'Rp. 500.000',
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi reiciendis eos nemo incidunt. Sunt quia iste dicta sit, laboriosam ut.`,
    },
    {
      _id: 2,
      title: 'Product 2',
      price: 'Rp. 1.500.000',
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi reiciendis eos nemo incidunt. Sunt quia iste dicta sit, laboriosam ut.`,
    },
    {
      _id: 3,
      title: 'Product 3',
      price: 'Rp. 1.500.000',
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi reiciendis eos nemo incidunt. Sunt quia iste dicta sit, laboriosam ut.`,
    },
    {
      _id: 4,
      title: 'Product 4',
      price: 'Rp. 1.500.000',
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi reiciendis eos nemo incidunt. Sunt quia iste dicta sit, laboriosam ut.`,
    },
  ],
  products: [],
};

const ProductReducer = (state = initState, action) => {
  switch (action.type) {
    case productActionTypes.LOAD_RECENT_PRODUCTS:
      return productReducerHandlers.loadRecentProducts;
    default:
      return state;
  }
};

export default ProductReducer;
