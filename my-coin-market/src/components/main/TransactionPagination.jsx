import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/common/Button';
import InlineList from 'components/common/InlineList';

const TransactionPagination = ({
  requestTransactionList,
  searchParams,
  pageNumber,
  loading,
  hasNext,
}) => {
  const handlePrevPress = () => {
    requestTransactionList(searchParams, pageNumber - 1);
  };

  const handleNextPress = () => {
    requestTransactionList(searchParams, pageNumber + 1);
  };

  const prevDisabled = loading || pageNumber <= 1;
  const nextDisabled = loading || !hasNext;

  return (
    <InlineList align="center">
      <Button secondary disabled={prevDisabled} onPress={handlePrevPress}>
        이전
      </Button>
      <Button primary disabled={nextDisabled} onPress={handleNextPress}>
        다음
      </Button>
    </InlineList>
  );
};

TransactionPagination.propTypes = {
  hasNext: PropTypes.bool,
  pageNumber: PropTypes.number,
  loading: PropTypes.bool,
  requestTransactionList: PropTypes.func.isRequired,
};

export default React.memo(TransactionPagination);
