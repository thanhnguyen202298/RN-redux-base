import {createReducer} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import {fetDataTest} from './action';

const persistConfig = {
  storage,
  key: 'data',
  stateReconciler: autoMergeLevel2,
  blacklist: ['loading', 'saving'],
};

const defaultState = {};

const data = createReducer(defaultState, (builder) => {
  builder
    .addCase('CLEAR_REDUCER_DATA', () => defaultState)
    .addCase('CLEAR_REDUCER_ALL_DATA', () => defaultState)
    .addCase(fetDataTest.fulfilled, (state, {payload}) => {
      const {products} = payload;
      state.products = products;
      state.loading = false;
    })
    .addCase(fetDataTest.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetDataTest.rejected, (state) => {
      state.loading = false;
    });
});

export default persistReducer(persistConfig, data);
