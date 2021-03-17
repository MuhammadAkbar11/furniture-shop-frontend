import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Home from '@app/containers/Home';
import AppAdmin from './admin/AppAdmin';

/* eslint-disable */
const App = () => {
  const match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={match.path}>
          <Home />
        </Route>
        <Route path={`${match.path}admin`}>
          <AppAdmin />
        </Route>
      </Switch>
    </>
  );
};

export default App;
