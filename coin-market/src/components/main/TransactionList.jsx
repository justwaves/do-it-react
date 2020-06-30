import React, { PureComponent } from 'react';
import Api from 'Api';

import Heading from 'components/common/Heading';
import Card from 'components/common/Card';

import TransactionSearchFilterContainer from '../../containers/main/TransactionSearchFilterContainer';

import TransactionTable from './TransactionTable';
// import TransactionPaginationContainer from '../../containers/main/TransactionPaginationContainer';

class TransactionList extends PureComponent {
  componentDidMount() {
    const { setTransactionList } = this.props;
    Api.get('/transactions').then(({ data }) => setTransactionList(data));

    /*
    10-2 참조 코드
    this.props.requestTransactionList();
    */
  }

  render() {
    const { transactions } = this.props;
    return (
      <div>
        <Heading level={3}>거래 현황</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilterContainer />
        </Card>
        <Card>
          <TransactionTable transactions={transactions} />
        </Card>
        {/* <TransactionPagination /> */}
      </div>
    );
  }
}

TransactionList.defaultProps = {
  transactions: [],
  // requestTransactionList: () => {},
  setTransactionList: () => {},
};

export default TransactionList;
