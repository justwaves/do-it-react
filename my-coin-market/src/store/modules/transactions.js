/* eslint-disable no-use-before-define */
import { createSlice } from '@reduxjs/toolkit';
import Api from 'Api';
import { showMessage } from 'store/modules/notification';

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    ids: [],
    entities: {},
    loading: false,
    hasError: false,
  },
  reducers: {
    setError: (state, { payload: { errorMessage } }) => {
      state.loading = false;
      state.hasError = true;
      state.errorMessage = errorMessage;
    },
    loadingTransactionList: (state) => {
      state.loading = true;
      state.hasError = false;
    },
    setTransactionList: (state, { payload: transactions }) => {
      const ids = transactions.map((entity) => entity.id);
      const entities = transactions.reduce(
        (finalEntities, entity) => ({
          ...finalEntities,
          [entity.id]: entity,
        }),
        {},
      );
      state.ids = ids;
      state.entities = entities;
      state.loading = false;
      state.hasError = false;
    },
    tradeComplete: () => {},
  },
});

export function requestTransactionList(params) {
  return (dispatch) => {
    dispatch(loadingTransactionList());
    Api.get('/transactions', { params }).then(
      ({ data }) => dispatch(setTransactionList(data)),
      (error) => {
        dispatch(setError(error.response.data.errorMessage));
        dispatch(
          showMessage({
            message: error.response.data.errorMessage,
            warning: true,
          }),
        );
      },
    );
  };
}

export function createTransaction(data, onComplete) {
  console.log(data);
  return (dispatch) =>
    Api.post('/transactions', data).then(
      () => {
        dispatch(tradeComplete());
        onComplete();
      },
      (error) =>
        dispatch(
          transactionsSlice.reducer.setError(error.response.data.errorMessage),
        ),
    );
}

export const {
  setError,
  loadingTransactionList,
  setTransactionList,
  tradeComplete,
} = transactionsSlice.actions;
export default transactionsSlice.reducer;
