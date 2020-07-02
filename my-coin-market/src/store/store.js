import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import notificationEffects from 'middlewares/notificationEffects';
import transactionEffects from 'middlewares/transactionEffects';
import uiReducer from './modules/ui';
import transactionsReducer from './modules/transactions';
import notificationReducer from './modules/notification';
import searchFilterReducer from './modules/searchFilter';

const rootReducer = combineReducers({
  ui: uiReducer,
  transactions: transactionsReducer,
  notification: notificationReducer,
  searchFilter: searchFilterReducer,
});

export default configureStore({
  reducer: rootReducer,
  middleware: [
    notificationEffects,
    transactionEffects,
    ...getDefaultMiddleware(),
  ],
});
