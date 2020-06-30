import React, { PureComponent } from 'react';
import TransactionLIstContainer from 'containers/main/TransactionLIstContainer';
import CoinOverview from './CoinOverview';

class MainPage extends PureComponent {
  render() {
    return (
      <>
        <CoinOverview />
        <TransactionLIstContainer />
      </>
    );
  }
}

export default MainPage;
