import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import Modal from 'components/common/modal';

const App = () => (
  <>
    <Helmet>
      <title>Coin Market</title>
    </Helmet>
    <Switch>
      <Route path={['/']} component={HomePage} />
      <Redirect from="*" to="/" />
    </Switch>
    <Modal />
  </>
);

export default App;
