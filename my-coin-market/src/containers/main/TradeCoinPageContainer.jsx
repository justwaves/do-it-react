import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import TradeCoinPage from 'components/main/TradeCoinPage';
import { createTransaction } from 'store/modules/transactions';

const TradeCoinPageContainer = ({ type, name, price }) => {
  const dispatch = useDispatch();

  const createTx = useCallback(
    (formValues, closeModal) => {
      dispatch(createTransaction(formValues, closeModal));
    },
    [dispatch],
  );

  return (
    <TradeCoinPage
      createTransaction={createTx}
      type={type}
      name={name}
      price={price}
    />
  );
};

export default React.memo(TradeCoinPageContainer);
