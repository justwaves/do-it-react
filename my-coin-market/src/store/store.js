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

const rootReducer = combineReducers({
  ui: uiReducer,
  transactions: transactionsReducer,
  notification: notificationReducer,
});

export default configureStore({
  reducer: rootReducer,
  // middleware: [notificationEffects],
  middleware: [
    notificationEffects,
    transactionEffects,
    ...getDefaultMiddleware(),
  ],
});
