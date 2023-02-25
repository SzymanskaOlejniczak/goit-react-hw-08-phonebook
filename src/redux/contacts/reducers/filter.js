import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from '../actions';

export const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});
