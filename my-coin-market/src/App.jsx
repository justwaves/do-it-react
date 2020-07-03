import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppLayout from 'components/layouts/AppLayout';
import MainPage from 'components/main/MainPage';
import store from 'store/store';
import NotificationContainer from 'containers/NotificationContainer';
import RouterStateContainer from 'containers/RouterStateContainer';
import NotFound from 'components/NotFound';
import ModalProvider from './ModalProvider';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <RouterStateContainer />
        <ModalProvider>
          <AppLayout>
            <Switch>
              <Route path="/" exact render={() => <MainPage />} />
              <Route path="*" component={NotFound} />
            </Switch>
            <NotificationContainer />
          </AppLayout>
        </ModalProvider>
      </Router>
    </Provider>
  );
};

export default App;
