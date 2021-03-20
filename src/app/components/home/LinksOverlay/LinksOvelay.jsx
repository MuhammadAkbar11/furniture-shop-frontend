import React from 'react';
import img from 'assets/img/styles-chairs.png';
import img2 from 'assets/img/kitchen.png';
import img3 from 'assets/img/bedroom.png';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {
  LinksOverlayRoot,
  LinkBox,
  LinkGridItem,
  ButtonLink,
} from './LinksOverlay.syled';
/* eslint-disable */
const LinksOverlay = () => {
  // const theme = useTheme();

  const isSmUp = useMediaQuery(theme => theme.breakpoints.up('md'));

  return (
    <LinksOverlayRoot>
      <Grid container>
        <LinkGridItem height={isSmUp ? 800 : 400} item xs={12} sm={6} md={7}>
          <LinkBox
            boxheight={'100%'}
            style={{ backgroundImage: `url(${img})` }}
          >
            <Typography variant='h4' className='title'>
              Best Chairs
            </Typography>
            <Link className='action'>
              {' '}
              <ButtonLink type='outlined'>show now</ButtonLink>
            </Link>
          </LinkBox>
        </LinkGridItem>
        {!isSmUp ? (
          <>
            <LinkGridItem height={400} item xs={12} sm={6}>
              <LinkBox
                boxheight={'100%'}
                style={{ backgroundImage: `url(${img2})` }}
              ></LinkBox>
            </LinkGridItem>
            <LinkGridItem height={400} item xs={12} sm={12}>
              <LinkBox
                boxheight={'100%'}
                style={{ backgroundImage: `url(${img3})` }}
              ></LinkBox>
            </LinkGridItem>
          </>
        ) : (
          <LinkGridItem item md={5} height={isSmUp ? 800 : 400}>
            <LinkBox
              boxheight={'50%'}
              style={{ backgroundImage: `url(${img2})` }}
            >
              <Typography variant='h4' className='title'>
                For Kitchen
              </Typography>
              <Link className='action'>
                {' '}
                <ButtonLink type='outlined'>show now</ButtonLink>
              </Link>
            </LinkBox>

            <LinkBox
              boxheight={'50%'}
              style={{ backgroundImage: `url(${img3})` }}
            >
              <Typography variant='h4' className='title'>
                Bedroom
              </Typography>
              <Link className='action'>
                {' '}
                <ButtonLink type='outlined'>show now</ButtonLink>
              </Link>
            </LinkBox>
          </LinkGridItem>
        )}
      </Grid>
    </LinksOverlayRoot>
  );
};

export default LinksOverlay;
