import React from 'react';
import PropTypes from 'prop-types';

import { AppBar, Box, Typography, useTheme } from '@material-ui/core';
import { MenuIcon } from '@components/UI/Icons';
import useStyles, { MenuToggle } from './AdminLayout.styled';

const defaultProps = {
  onToggle: () => false,
};

const proptypes = {
  onToggle: PropTypes.func,
};

const Topbar = props => {
  const classes = useStyles();
  const { onToggle } = props;
  const theme = useTheme();
  return (
    <AppBar
      position='fixed'
      style={{
        backgroundColor: theme.palette.grey[100],
        color: theme.palette.dark,

        height: 80,
        boxShadow: 'none',
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
      }}
      classes={{ root: classes.appFixed, positionFixed: classes.appFixed }}
    >
      {/* <Toolbar> */}
      {/* <Toolbar> */}
      <Box
        pl={{
          xs: 3,
          sm: 3,
          md: 3,
        }}
        my='auto'
        width='100%'
        height='100%'
        alignItems='center'
        display='flex'
      >
        <MenuToggle onClick={onToggle} variant='text'>
          <MenuIcon />
          {/* Toggle */}
        </MenuToggle>
        <Typography
          variant='h5'
          style={{
            color: theme.palette.primary.main,
          }}
        >
          Dashboard
        </Typography>
      </Box>
      {/* </Toolbar> */}

      {/* </Toolbar> */}
    </AppBar>
  );
};

Topbar.defaultProps = defaultProps;

Topbar.propTypes = proptypes;

export default Topbar;
