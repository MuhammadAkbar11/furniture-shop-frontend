import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Home from '@app/containers/Home';

import { CssBaseline } from '@material-ui/core';
import AppAdmin from './admin/AppAdmin';
import Cart from './containers/Cart';
import Login from './containers/auth/Login';
import SignUp from './containers/auth/SignUp';
import DetailProduct from './containers/detailProduct/DetailProduct';

/* eslint-disable */
const App = () => {
  const match = useRouteMatch();

  return (
    <>
      <CssBaseline />
      <Switch>
        <Route exact path={match.path}>
          <Home />
        </Route>
        <Route exact path={`${match.path}product`}>
          <DetailProduct />
        </Route>
        <Route path={`${match.path}cart`}>
          <Cart />
        </Route>
        <Route path={`${match.path}auth/login`}>
          <Login />
        </Route>
        <Route path={`${match.path}auth/signup`}>
          <SignUp />
        </Route>
        <Route path={`${match.path}admin`}>
          <AppAdmin />
        </Route>
      </Switch>
    </>
  );
};

export default App;
