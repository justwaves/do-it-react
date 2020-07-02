import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import TransactionSearchFilter from 'components/main/TransactionSearchFilter';
import { requestTransactionList } from 'store/modules/transactions';
import { setFilter } from 'store/modules/searchFilter';

const TransactionSearchFilterContainer = () => {
  const dispatch = useDispatch();

  const requestTxList = useCallback(
    (cleanedParams) => {
      dispatch(requestTransactionList(cleanedParams));
    },
    [dispatch],
  );

  const onSetFilter = useCallback(
    (cleanedParams) => {
      console.log(cleanedParams);
      dispatch(setFilter(cleanedParams));
    },
    [dispatch],
  );

  return (
    <TransactionSearchFilter
      requestTransactionList={requestTxList}
      setFilter={onSetFilter}
    />
  );
};

export default TransactionSearchFilterContainer;
