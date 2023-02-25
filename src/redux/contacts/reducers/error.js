import { createReducer } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, saveContact } from '../operations';

export const errorReducer = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [deleteContact.rejected]: (_, { payload }) => payload,
  [saveContact.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
  [fetchContacts.fulfilled]: () => null,
});
