import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TransactionPagination from 'components/main/TransactionPagination';
import { requestTransactionList } from 'store/modules/transactions';

const TransactionPaginationContainer = () => {
  const dispatch = useDispatch();
  const { pagination, loading, ids, params } = useSelector(
    ({ transactions, searchFilter }) => ({
      pagination: transactions.pagination,
      loading: transactions.loading,
      ids: transactions.ids,
      params: searchFilter.params,
    }),
  );

  const requestTxList = useCallback(
    (_params, _page) => {
      dispatch(requestTransactionList(_params, _page));
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
      searchParams={params}
    />
  );
};

export default TransactionPaginationContainer;
