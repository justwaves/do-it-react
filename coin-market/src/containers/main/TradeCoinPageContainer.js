import { connect } from 'react-redux';
import TradeCoinPage from 'components/main/TradeCoinPage';
import { createTransaction } from 'redux/actions/transactionActions';
// import { createTransaction } from 'redux/actions/transactionPackActions';

export default connect(null, { createTransaction })(TradeCoinPage);
