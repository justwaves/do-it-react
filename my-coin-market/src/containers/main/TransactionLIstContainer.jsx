import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TransactionList from 'components/main/TransactionList';
import { requestTransactionList } from 'store/modules/transactions';

const TransactionListContainer = () => {
  const { ids, entities, loading } = useSelector(({ transactions }) => ({
    ids: transactions.ids,
    entities: transactions.entities,
    loading: transactions.loading,
  }));
  const dispatch = useDispatch();

  const transactions = ids.map((id) => entities[id]);

  const requestTxList = useCallback(() => {
    dispatch(requestTransactionList());
  }, [dispatch]);

  return (
    <TransactionList
      transactions={transactions}
      loading={loading}
      requestTransactionList={requestTxList}
    />
  );
};

export default TransactionListContainer;
