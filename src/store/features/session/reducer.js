/* eslint-disable prettier/prettier */
import {createReducer} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import {login} from './action';

const persistConfig = {
  storage,
  key: 'session',
  stateReconciler: autoMergeLevel2,
  blacklist: ['loading', 'isAuthed', 'socket'],
  version: 1,
};

export const createDefaultSessionState = () => ({
  token: '',
  user: null,
  isAuthed: false,
  loading: false,
});
const defaultState = createDefaultSessionState();

const session = createReducer(defaultState, (builder) => {
  builder
   .addCase('CLEAR_REDUCER_ALL_DATA', () => defaultState)
   .addCase(login.pending, state => {
    state.token = '';
    state.user = null;
    state.isAuthed = false;
    state.socket = null;
   })
   .addCase(login.fulfilled, (state,{payload}) => {
    const {token, user} = payload;
    state.token = token;
    state.isAuthed = true;
    state.loading = false;
    state.user = user;
   })
   // eslint-disable-next-line no-return-assign
   .addCase(login.rejected, state => state.loading = false);
});

export default persistReducer(persistConfig, session);
