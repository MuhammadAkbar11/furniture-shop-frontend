import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Home from '@app/containers/Home';

import { CssBaseline } from '@material-ui/core';
import AppAdmin from './admin/AppAdmin';
import Cart from './containers/Cart';

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
        <Route path={`${match.path}cart`}>
          <Cart />
        </Route>
        <Route path={`${match.path}admin`}>
          <AppAdmin />
        </Route>
      </Switch>
    </>
  );
};

export default App;
