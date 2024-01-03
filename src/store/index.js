import {configureStore} from '@reduxjs/toolkit';
import {applyMiddleware, compose} from 'redux';
import rootReducer from './rootReducer';
import {persistStore} from 'redux-persist';

const ignoredActions = [];
const ignoredPaths = [];
const santilizedObject = '<<SANTILIZED_OBJECT>>';

const actionSanitizer = (action) =>
  ignoredActions.includes(action.type)
    ? {...action, params: {...action.params, value: santilizedObject}}
    : action;

const stateSanitizer = (state) => {
  const store = state.store || {};
  const newStore = {...store};
  ignoredPaths
    .map((p) => p.split('.').pop())
    .forEach((key) => {
      newStore[key] = santilizedObject;
    });

  return {
    ...state,
    store: newStore,
  };
};

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        actionSanitizer,
        stateSanitizer,
      )
    : compose;

const reduxToolkitOptions = {
  serializableCheck: false,
  immutableCheck: false,
};

const middlewares = [
  /* other middlewares */
];

// if (__DEV__) {
//   const createDebugger = require('redux-flipper').default;
//   middlewares.push(createDebugger());
// }

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware().concat(middlewares),
  ],
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers({
      autoBatch: {type: 'tick'},
    }),
});
export const persistor = persistStore(store);
