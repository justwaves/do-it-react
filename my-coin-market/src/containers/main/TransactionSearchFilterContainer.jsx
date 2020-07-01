import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import TransactionSearchFilter from 'components/main/TransactionSearchFilter';
import { requestTransactionList } from 'store/modules/transactions';

const TransactionSearchFilterContainer = () => {
  const dispatch = useDispatch();

  const requestTxList = useCallback(
    (cleanedParams) => {
      dispatch(requestTransactionList(cleanedParams));
    },
    [dispatch],
  );

  return <TransactionSearchFilter requestTransactionList={requestTxList} />;
};

export default TransactionSearchFilterContainer;
