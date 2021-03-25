import React from 'react';
import {
  HomeIcon,
  CartIcon,
  ExploreIcon,
  UserIcon,
  MoreIcon,
} from '@components/UI/Icons';
import { MobileMenuAction, MobileMenuNav } from './MobileMenu.styled';

const MobileMenu = () => {
  const [value, setValue] = React.useState('Home');

  return (
    <MobileMenuNav
      value={value}
      showLabels
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <MobileMenuAction label='Home' value='Home' icon={<HomeIcon />} />
      <MobileMenuAction
        label='Explore'
        value='Explore'
        icon={<ExploreIcon />}
      />
      <MobileMenuAction label='Cart' value='cart' icon={<CartIcon />} />
      <MobileMenuAction
        label='My Account'
        value='account'
        icon={<UserIcon />}
      />
      <MobileMenuAction label='More' icon={<MoreIcon />} />
    </MobileMenuNav>
  );
};

export default MobileMenu;
