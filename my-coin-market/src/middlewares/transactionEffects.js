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
  // if (type === 'transactions/fetchTransactionListSuccess') {
  //   const message = '거래 목록을 최신 정보로 업데이트하였습니다.';
  //   store.dispatch(showMessage({ message }));
  // }
  return result;
};
