import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.Loading;
export const getError = state => state.contacts.error;

export const getvisibleContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return items.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  }
);
