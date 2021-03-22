import React from 'react';
import {
  Breadcrumbs,
  Typography,
  Link as BreadcrumbsLink,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes, { shape } from 'prop-types';

/* eslint-disable */
import {
  BreadcrumbsContainer,
  BreadcrumbsNav,
  BreadcrumbsTitle,
} from './Breadcrumbs.styled';

const defaultProps = {
  items: [],
  title: '',
};

const proptypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      ac: PropTypes.bool.isRequired,
    })
  ),
};

const BreadCrumbs = props => {
  const { title, items } = props;
  return (
    <BreadcrumbsContainer>
      <BreadcrumbsTitle>
        <Typography className='title'>{title}</Typography>
      </BreadcrumbsTitle>
      <BreadcrumbsNav>
        <Breadcrumbs aria-label='breadcrumb'>
          {items.map((item, index) => {
            const key = index;

            let linkItem = (
              <BreadcrumbsLink
                key={key}
                to={item.url}
                className='link'
                component={Link}
              >
                {item.label}
              </BreadcrumbsLink>
            );

            if (item.ac) {
              linkItem = (
                <Typography key={key} className='link active'>
                  {item.label}
                </Typography>
              );
            }

            return linkItem;
          })}
          {/* <Typography className='link' color='textPrimary'>
            Breadcrumb
          </Typography> */}
        </Breadcrumbs>
      </BreadcrumbsNav>
    </BreadcrumbsContainer>
  );
};

Breadcrumbs.defaultProps = defaultProps;

Breadcrumbs.propTypes = proptypes;

export default BreadCrumbs;
