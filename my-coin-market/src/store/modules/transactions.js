/* eslint-disable no-use-before-define */
import { createSlice } from '@reduxjs/toolkit';
import Api from 'Api';

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    ids: [],
    entities: {},
    loading: false,
    hasError: false,
    pagination: {},
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
    fetchTransactionListStart(state) {
      state.loading = true;
      state.hasError = false;
    },
    fetchTransactionListSuccess(state, action) {
      const { data } = action.payload;
      const { _page, _limit } = action.payload.config.params;
      state.ids = data.map((entity) => entity.id);
      state.entities = data.reduce(
        (finalEntities, entity) => ({
          ...finalEntities,
          [entity.id]: entity,
        }),
        {},
      );
      state.loading = false;
      state.hasError = false;
      state.pagination = {
        number: _page,
        size: _limit,
      };
    },
    fetchTransactionListFailure(state, action) {
      const { errorMessage } = action.payload;
      state.loading = false;
      state.hasError = true;
      state.errorMessage = errorMessage;
    },
  },
});

export const {
  setError,
  loadingTransactionList,
  setTransactionList,
  tradeComplete,
  fetchTransactionListStart,
  fetchTransactionListSuccess,
  fetchTransactionListFailure,
} = transactionsSlice.actions;
export default transactionsSlice.reducer;

const PAGE_SIZE = 10;

export const requestTransactionList = (params, _page = 1) => async (
  dispatch,
) => {
  try {
    dispatch(fetchTransactionListStart());
    const data = await Api.get('/transactions', {
      params: {
        ...params,
        _page,
        _limit: PAGE_SIZE,
      },
    });

    dispatch(fetchTransactionListSuccess(data));
  } catch (error) {
    console.log(error.toString());
    const errorMessage = error.toString();
    dispatch(fetchTransactionListFailure(errorMessage));
  }
};

export const createTransaction = (data, onComplete) => async (dispatch) => {
  try {
    await Api.post('/transactions', data);
    dispatch(tradeComplete());
    onComplete();
  } catch (error) {
    const errorMessage = error.toString();
    dispatch(setError(errorMessage));
  }
};
