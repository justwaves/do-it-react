import { SET_FILTER } from 'redux/actions/searchFilterActions';
import {
  requestTransactionList,
  resetTransactionList,
} from 'redux/actions/transactionPackActions';

export default (store) => (nextRunner) => (action) => {
  const { type, payload } = action;
  const result = nextRunner(action);

  if (type === SET_FILTER) {
    const { params } = payload || {};
    store.dispatch(resetTransactionList());
    store.dispatch(requestTransactionList(params));
  }

  return result;
};
