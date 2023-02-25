import { createReducer } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, saveContact } from '../operations';

const items = [];

export const contactReducer = createReducer(items, {
  [fetchContacts.fulfilled]: (_, { payload }) => {
    return payload;
  },
  [saveContact.fulfilled]: (state, { payload }) => [payload, ...state],

  [deleteContact.fulfilled]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});
