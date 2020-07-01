import React from 'react';
import TransactionLIstContainer from 'containers/main/TransactionLIstContainer';
import CoinOverview from './CoinOverview';

const MainPage = () => {
  return (
    <>
      <CoinOverview />
      <TransactionLIstContainer />
    </>
  );
};

export default MainPage;
