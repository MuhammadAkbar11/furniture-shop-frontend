import React from 'react';
import { Typography, useTheme } from '@material-ui/core';
import chairsImg from 'assets/img/categories/chairs.png';
import storageImg from 'assets/img/categories/storage.png';
import bedroomImg from 'assets/img/categories/bedroom.png';
import tableImg from 'assets/img/categories/table.png';
import { Link } from 'react-router-dom';
import {
  TrendCategStyled,
  BoxTrendTitle,
  TrendCategoriesContent,
  CategoryItem,
  CategoryImg,
  CategoryItemBadge,
  CategoryItemMedia,
} from './TrendCategories.styled';

const TrendCategories = () => {
  const theme = useTheme();
  return (
    <TrendCategStyled my={0}>
      <BoxTrendTitle>
        <Typography align='center' variant='h6' className='title'>
          Trending Categories
        </Typography>
      </BoxTrendTitle>
      <TrendCategoriesContent container spacing={2}>
        <CategoryItem item sm={6} md={3}>
          <CategoryItemMedia>
            <CategoryImg src={chairsImg} alt='' />
            <CategoryItemBadge
              className='category-badge'
              color={{ ...theme.palette }}
            >
              <Typography variant='caption' align='center' className='caption'>
                Collection
                <span>(20 Items)</span>
              </Typography>
            </CategoryItemBadge>
          </CategoryItemMedia>

          <Link to='/category/chairs'>
            <Typography align='center' className='title'>
              Chairs
            </Typography>
          </Link>
        </CategoryItem>
        {/* item */}
        <CategoryItem item sm={6} md={3}>
          <CategoryItemMedia>
            <CategoryImg src={storageImg} alt='' />
            <CategoryItemBadge
              className='category-badge'
              color={{ ...theme.palette }}
            >
              <Typography variant='caption' align='center' className='caption'>
                Collection
                <span>(20 Items)</span>
              </Typography>
            </CategoryItemBadge>
          </CategoryItemMedia>
          <Link to='/category/chairs'>
            <Typography align='center' className='title'>
              Storage
            </Typography>
          </Link>
        </CategoryItem>
        {/* Item */}
        <CategoryItem item sm={6} md={3}>
          <CategoryItemMedia>
            <CategoryImg src={bedroomImg} alt='' />
            <CategoryItemBadge
              className='category-badge'
              color={{ ...theme.palette }}
            >
              <Typography variant='caption' align='center' className='caption'>
                Collection
                <span>(20 Items)</span>
              </Typography>
            </CategoryItemBadge>
          </CategoryItemMedia>
          <Link to='/category/chairs'>
            <Typography align='center' className='title'>
              BedRoom
            </Typography>
          </Link>
        </CategoryItem>
        {/* ite */}
        <CategoryItem item sm={6} md={3}>
          <CategoryItemMedia>
            <CategoryImg src={tableImg} alt='' />
            <CategoryItemBadge
              className='category-badge'
              color={{ ...theme.palette }}
            >
              <Typography variant='caption' align='center' className='caption'>
                Collection
                <span>(20 Items)</span>
              </Typography>
            </CategoryItemBadge>
          </CategoryItemMedia>

          <Link to='/category/chairs'>
            <Typography align='center' className='title'>
              Table
            </Typography>
          </Link>
        </CategoryItem>
      </TrendCategoriesContent>
    </TrendCategStyled>
  );
};

export default TrendCategories;
