import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Dashboard from './containers/dashboard/Dashboard';
import Products from './containers/products/Products';

const AppAdmin = () => {
  const match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route
          exact
          path={match.path}
          render={() => {
            return <h1>Hayy</h1>;
          }}
        />
        <Route path={`${match.path}/dash`}>
          <Dashboard />
        </Route>
        <Route path={`${match.path}/products`}>
          <Products />
        </Route>
      </Switch>
    </>
  );
};

export default AppAdmin;
