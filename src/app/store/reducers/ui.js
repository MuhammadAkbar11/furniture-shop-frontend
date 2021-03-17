import { uiActionTypes } from '../actions/actionsTypes';
import * as UIReducerHandler from './handlers/ui';

const initState = {
  showMobileMenu: false,
  menu: [
    {
      url: '/',
      label: 'Home',
      match: '',
    },
    {
      url: '/products',
      label: 'Products',
      match: 'products',
    },
    {
      url: '/about',
      label: 'About us',
      match: 'about',
    },
  ],
};

const { toggleMenuMobile } = UIReducerHandler;

const UIReducer = (state = initState, action) => {
  switch (action.type) {
    case uiActionTypes.TOGGLE_MOBILE_MENU:
      return toggleMenuMobile(state);

    default:
      return state;
  }
};
