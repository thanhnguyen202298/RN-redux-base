import {combineReducers} from '@reduxjs/toolkit';

import session from './features/session/reducer';
import data from './features/datatest/reducer';

const rootReducer = combineReducers({
  session,
  data,
});

export default rootReducer;
