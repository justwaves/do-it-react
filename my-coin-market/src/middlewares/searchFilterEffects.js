import {
  requestTransactionList,
  resetTransactionList,
} from 'store/modules/transactions';

export default (store) => (nextRunner) => (action) => {
  const { type, payload } = action;
  const result = nextRunner(action);

  if (type === 'searchFilter/setFilter') {
    const params = payload || {};
    store.dispatch(resetTransactionList());
    store.dispatch(requestTransactionList(params));
  }

  return result;
};
