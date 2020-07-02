import { connect } from 'react-redux';
import TransactionSearchFilter from 'components/main/TransactionSearchFilter';
// import { requestTransactionList } from 'redux/actions/transactionActions';
import { requestTransactionList } from 'redux/actions/transactionPackActions';
import { setFilter } from 'redux/actions/searchFilterActions';

// const mapStateToProps = state => ({
//   initValues: state.searchFilter.params,
// });

export default connect(null, { requestTransactionList, setFilter })(
  TransactionSearchFilter,
);
