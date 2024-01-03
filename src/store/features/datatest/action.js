import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchDataTest} from './api';

import {getToken} from '../session/selector';

export const fetDataTest = createAsyncThunk(
  'DATA_GET_TEST',
  async (thunkApi) => {
    const token = getToken(thunkApi.getState());
    const res = await fetchDataTest(token);
    return res;
  },
);
