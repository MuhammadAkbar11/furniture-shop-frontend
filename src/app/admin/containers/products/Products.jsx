import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import AdminLayout from '../../components/Layout/AdminLayout';
import useStyles from './Products.styled';
import AllProduct from '../../components/Products/AllProduct';

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const Products = () => {
  const classes = useStyles();
  const history = useHistory();
  const match = useRouteMatch();
  const [value, setValue] = React.useState(0);
  /* eslint-disable */
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleGo = url => {
    const goUrl = `${match.path}/${url}`;
    return history.push(goUrl);
  };

  return (
    <AdminLayout>
      <Box paddingTop={4}>
        <AppBar
          position='relative'
          color='default'
          classes={{
            root: classes.appBar,
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
            variant='scrollable'
            scrollButtons='on'
            aria-label='scrollable force tabs example'
            className={classes.tabs}
          >
            <Tab
              onClick={() => handleGo('all')}
              label='All Products'
              {...a11yProps(0)}
            />
            <Tab
              onClick={() => handleGo('chairs')}
              label='Chairs'
              {...a11yProps(1)}
            />
            <Tab
              onClick={() => handleGo('sofa')}
              label='Sofa'
              {...a11yProps(2)}
            />
            <Tab label='Storage' {...a11yProps(3)} />
            <Tab label='Tables' {...a11yProps(4)} />
            <Tab label='Bedroom' {...a11yProps(4)} />
            <Tab label='Bedroom' {...a11yProps(5)} />
            <Tab label='Bedroom' {...a11yProps(6)} />
            {/* <Tab label='Item Seven' {...a11yProps(6)} /> */}
          </Tabs>
        </AppBar>
        <Switch>
          <Route
            exact
            path={`${match.path}`}
            render={() => {
              return <Redirect to={`${match.path}/all`} />;
            }}
          />
          <Route exact path={`/admin/products/all`} component={AllProduct} />

          <Route
            path={`${match.path}/chairs`}
            render={() => {
              return <h1>All Chairs</h1>;
            }}
          />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </Box>
    </AdminLayout>
  );
};

export default Products;
