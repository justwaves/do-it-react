import React from 'react';
import TransactionListContainer from 'containers/main/TransactionListContainer';
import CoinOverview from './CoinOverview';

const MainPage = () => {
  return (
    <>
      <CoinOverview />
      <TransactionListContainer />
    </>
  );
};

export default MainPage;
