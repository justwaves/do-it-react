import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from 'redux/reducers';
// import { SET_TRANSACTION_LIST } from '../actions/transactionActions';
import thunk from 'redux-thunk';
// import { middleware as reduxPackMiddleware } from 'redux-pack';
// import searchFilterEffects from '../middlewares/searchFilterEffects';
// import routerEffects from '../middlewares/routerEffects';
import notificationEffects from 'middlewares/notificationEffects';
import transactionEffects from 'middlewares/transactionEffects';

export default (initStates) =>
  createStore(
    combineReducers(reducers),
    initStates,
    composeWithDevTools(
      applyMiddleware(thunk, notificationEffects, transactionEffects),
    ),
  );

// export default initStates =>
//   createStore(
//     combineReducers(reducers),
//     initStates,
//     composeWithDevTools(
//       // applyMiddleware(searchFilterEffects),
//       applyMiddleware(
//         thunk,
//         reduxPackMiddleware,
//         searchFilterEffects,
//         notificationEffects,
//         routerEffects,
//       ),
//   ),
// );
