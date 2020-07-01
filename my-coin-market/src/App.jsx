import React from 'react';
import { Provider } from 'react-redux';
import AppLayout from 'components/layouts/AppLayout';
import MainPage from 'components/main/MainPage';
import store from 'store/store';
import NotificationContainer from 'containers/NotificationContainer';
import ModalProvider from './ModalProvider';
// import configureStore from 'redux/configureStore';

const App = () => {
  // const store = configureStore();

  return (
    <Provider store={store}>
      <ModalProvider>
        <AppLayout>
          <MainPage />
          <NotificationContainer />
        </AppLayout>
      </ModalProvider>
    </Provider>
  );
};

export default React.memo(App);
