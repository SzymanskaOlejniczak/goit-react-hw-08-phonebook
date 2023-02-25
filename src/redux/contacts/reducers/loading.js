import { createReducer } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, saveContact } from '../operations';

export const loadingReducer = createReducer(false, {
  [fetchContacts.rejected]: () => false,
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [saveContact.rejected]: () => false,
  [saveContact.pending]: () => true,
  [saveContact.fulfilled]: () => false,
});
