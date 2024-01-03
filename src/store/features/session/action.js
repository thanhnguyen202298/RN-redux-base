import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {loginApi} from './api';

export const login = createAsyncThunk('SESSION_LOGIN', async ({usn, pass}) => {
  const response = await loginApi(usn, pass);
  return response;
});

export const logout = createAction('CLEAR_REDUCER_DATA', () => ({
  payload: {},
}));
