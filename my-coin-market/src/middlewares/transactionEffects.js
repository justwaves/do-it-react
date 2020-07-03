import { requestTransactionList } from 'store/modules/transactions';
import { showMessage } from 'store/modules/notification';

export default (store) => (nextRunner) => (action) => {
  const { type } = action;
  const result = nextRunner(action);
  if (type === 'transactions/tradeComplete') {
    const message = '거래가 성공적으로 완료되었습니다.';
    store.dispatch(showMessage({ message }));
    store.dispatch(requestTransactionList());
  }
  return result;
};
