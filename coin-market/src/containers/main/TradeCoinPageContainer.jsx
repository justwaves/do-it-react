import { connect } from 'react-redux';
import TradeCoinPage from 'components/main/TradeCoinPage';
// import { createTransaction } from 'redux/actions/transactionActions';
import {
  createTransaction,
  CREATE_TRANSACTION,
} from 'redux/actions/transactionPackActions';

const mapStateToProps = (state) => {
  const { loadingState } = state.transactions;
  const loading = loadingState[CREATE_TRANSACTION];
  return { loading };
};

export default connect(mapStateToProps, { createTransaction })(TradeCoinPage);
