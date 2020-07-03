import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppLayout from 'components/layouts/AppLayout';
import MainPage from 'components/main/MainPage';
import configureStore from 'redux/configureStore';
import ModalProvider from 'ModalProvider';
import NotificationContainer from 'containers/NotificationContainer';
import NotFound from 'components/common/NotFound';
import RouterStateContainer from 'containers/RouterStateContainer';

const App = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Router>
        <RouterStateContainer />
        <ModalProvider>
          <AppLayout>
            <Switch>
              <Route path="/" exact render={() => <MainPage />} />
              <Route path="*" exact component={NotFound} />
            </Switch>
            <NotificationContainer />
          </AppLayout>
        </ModalProvider>
      </Router>
    </Provider>
  );
};

export default React.memo(App);
