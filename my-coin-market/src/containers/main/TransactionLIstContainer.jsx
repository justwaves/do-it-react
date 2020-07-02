import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TransactionList from 'components/main/TransactionList';
import { requestTransactionList } from 'store/modules/transactions';

const TransactionListContainer = () => {
  const [transactions, setTransactions] = useState([]);
  // eslint-disable-next-line no-shadow
  const { ids, entities, loading } = useSelector(({ transactions }) => ({
    ids: transactions.ids,
    entities: transactions.entities,
    loading: transactions.loading,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (ids && entities) {
      const txns = ids.map((id) => entities[id]);
      setTransactions(txns);
    }
  }, [ids, entities]);

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
