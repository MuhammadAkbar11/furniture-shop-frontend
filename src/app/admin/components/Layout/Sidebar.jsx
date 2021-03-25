import React from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  Drawer,
  Hidden,
  List,
  ListItem,
  Link as ListAction,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';

import { ExploreIcon, DashboardIcon } from '@components/UI/Icons';

import { Link } from 'react-router-dom';
import useStyles from './AdminLayout.styled';

const defaultProps = {
  mobileOpen: false,
  onToggle: () => false,
};

const proptypes = {
  mobileOpen: PropTypes.bool,
  onToggle: PropTypes.func,
};

const Sidebar = props => {
  const classes = useStyles();
  const { mobileOpen, onToggle } = props;

  const menuItems = [
    {
      id: 1,
      url: '/admin/dash',
      label: 'Dashboard',
      icon: <DashboardIcon />,
    },
    {
      id: 2,
      url: '/admin/products',
      label: 'Products',
      icon: <ExploreIcon />,
    },
  ];

  const content = (
    <>
      <Box px={4.1} className={classes.sidebarLogoBox}>
        <Typography className='title'>Fudu</Typography>
      </Box>

      <Box mt={5}>
        <List>
          {menuItems.map(item => (
            <ListAction
              key={item.id}
              component={Link}
              to={item.url}
              style={{ textDecoration: 'none' }}
            >
              <ListItem button className={classes.listItem}>
                <ListItemIcon className={classes.listItemIcon}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  className={classes.listItemText}
                  primary={item.label}
                />
              </ListItem>
            </ListAction>
          ))}
        </List>
      </Box>
    </>
  );
  return (
    <nav className={classes.sidebar}>
      <Hidden smUp implementation='css'>
        <Drawer
          variant='temporary'
          anchor='left'
          open={mobileOpen}
          onClose={onToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation='css'>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant='permanent'
          open
        >
          {content}
        </Drawer>
      </Hidden>
    </nav>
  );
};

Sidebar.defaultProps = defaultProps;

Sidebar.propTypes = proptypes;

export default Sidebar;
