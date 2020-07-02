import { showMessage, hideMessage } from 'store/modules/notification';

import { debounce } from 'libs/debounce';

const debounceRunner = debounce((action) => action(), 5000);

export default (store) => (nextRunner) => (action) => {
  const { type, payload } = action;

  if (type === 'transactions/setError') {
    const errorMessage = payload;
    store.dispatch(showMessage({ message: errorMessage, warning: true }));
  } else if (type === 'notification/showMessage') {
    const hide = () => store.dispatch(hideMessage());
    setTimeout(hide, 5000);
    debounceRunner(hide);
  } else if (type === 'transactions/fetchTransactionListFailure') {
    const errorMessage = payload;
    store.dispatch(showMessage({ message: errorMessage, warning: true }));
  }

  return nextRunner(action);
};
