import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import notificationEffects from 'middlewares/notificationEffects';
import transactionEffects from 'middlewares/transactionEffects';
import searchFilterEffects from 'middlewares/searchFilterEffects';
import routerEffects from 'middlewares/routerEffects';
import uiReducer from './modules/ui';
import appRouterReducer from './modules/appRouter';
import transactionsReducer from './modules/transactions';
import notificationReducer from './modules/notification';
import searchFilterReducer from './modules/searchFilter';

const rootReducer = combineReducers({
  ui: uiReducer,
  appRouter: appRouterReducer,
  transactions: transactionsReducer,
  notification: notificationReducer,
  searchFilter: searchFilterReducer,
});

export default configureStore({
  reducer: rootReducer,
  middleware: [
    notificationEffects,
    transactionEffects,
    searchFilterEffects,
    routerEffects,
    ...getDefaultMiddleware(),
  ],
});
