import React from 'react';
import Heading from 'components/common/Heading';
import Card from 'components/common/Card';
import TransactionSearchFilterContainer from 'containers/main/TransactionSearchFilterContainer';
import TransactionPaginationContainer from 'containers/main/TransactionPaginationContainer';
import TransactionTable from './TransactionTable';

const TransactionList = ({ transactions, loading }) => {
  return (
    <div>
      <Heading level={3}>거래 현황</Heading>
      <Card vertical={4} horizontal={4}>
        <TransactionSearchFilterContainer />
      </Card>
      <Card>
        <TransactionTable transactions={transactions} isLoading={loading} />
      </Card>
      <TransactionPaginationContainer />
    </div>
  );
};

TransactionList.defaultProps = {
  transactions: [],
};

export default React.memo(TransactionList);
