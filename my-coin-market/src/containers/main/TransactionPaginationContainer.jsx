import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TransactionPagination from 'components/main/TransactionPagination';
import { requestTransactionList } from 'store/modules/transactions';

const TransactionPaginationContainer = () => {
  const dispatch = useDispatch();
  const { pagination, loading, ids } = useSelector(({ transactions }) => ({
    pagination: transactions.pagination,
    loading: transactions.loading,
    ids: transactions.ids,
  }));

  const requestTxList = useCallback(
    (params, _page) => {
      dispatch(requestTransactionList(params, _page));
    },
    [dispatch],
  );

  const { number, size } = pagination;

  return (
    <TransactionPagination
      pageNumber={number || 1}
      loading={loading}
      requestTransactionList={requestTxList}
      hasNext={ids.length === size}
    />
  );
};

export default TransactionPaginationContainer;
