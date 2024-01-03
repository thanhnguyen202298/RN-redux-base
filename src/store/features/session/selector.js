import {createSelector} from '@reduxjs/toolkit';
import {createDefaultSessionState} from './reducer';

const defaultState = createDefaultSessionState();
export const getState = (state) => state.session || defaultState;
export const getToken = (state) => getState(state).token;
export const getUser = (state) => getState(state).user;
export const getLoading = (state) => getState(state).loading;
export const getIsAuthed = (state) => getState(state).isAuthed;

export const getPermission = createSelector([getUser], (user) => user.role);
