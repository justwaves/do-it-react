import { connect } from 'react-redux';
import TransactionSearchFilter from 'components/main/TransactionSearchFilter';
// import { requestTransactionList } from 'redux/actions/transactionActions';
// import { requestTransactionList } from 'redux/actions/transactionPackActions';

const mapStateToProps = (state) => ({
  initValues: state.searchFilter.params,
});

export default connect(mapStateToProps)(TransactionSearchFilter);
