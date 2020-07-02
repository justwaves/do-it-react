import { connect } from 'react-redux';
import TransactionList from 'components/main/TransactionList';
// import { requestTransactionList } from 'redux/actions/transactionActions';
import {
  requestTransactionList,
  FETCH_TRANSACTION_LIST,
} from 'redux/actions/transactionPackActions';
// import {
//   transactionListSelector,
//   transactionListLoadingStateSelector,
// } from '../../selectors/transactionSelectors';

const mapStateToProps = (state) => {
  const { ids, entities, loadingState } = state.transactions;
  const loading = loadingState[FETCH_TRANSACTION_LIST];
  const transactions = ids.map((id) => entities[id]);
  return { transactions, loading };
  // const { ids, entities, loadingState, pages, pagination } = state.transactions;
  // const transactions = ids.map(id => entities[id]);
  // const { pagination } = state.transactions;
  // const transactions = transactionListSelector(state);
  // const loading = transactionListLoadingStateSelector(state);
  // const { number = 1 } = pagination;
  // return { transactions, loading: loading && number === 1 };
};

// const mapStateToProps = state => ({
//   transactions: transactionListSelector(state),
//   loading: transactionListLoadingStateSelector(state),
// });

// const mapDispatchToProps = {
//   requestTransactionList,
// };

const mapDispatchToProps = {
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
