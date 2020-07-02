import { connect } from 'react-redux';
import TransactionPagination from 'components/main/TransactionPagination';
import {
  requestTransactionList,
  FETCH_TRANSACTION_LIST,
} from 'redux/actions/transactionPackActions';
// import {
//   paginationSelector,
//   transactionListLoadingStateSelector,
// } from '../../selectors/transactionSelectors';

const mapStateToProps = (state) => {
  const { pagination, loadingState, ids } = state.transactions;
  const loading = loadingState[FETCH_TRANSACTION_LIST];
  const { number } = pagination;

  return {
    pageNumber: number || 1,
    loading,
    // searchParams: state.searchFilter.params,
    // hasNext: ids.length === size,
    // loading: transactionListLoadingStateSelector(state),
    // pageNumber: paginationSelector(state).number || 1,
  };
};
const mapDispatchToProps = {
  requestTransactionList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionPagination);
