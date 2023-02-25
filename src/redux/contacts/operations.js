import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//axios.defaults.baseURL =  'https://63e4d3d0c04baebbcdace217.mockapi.io/contacts/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  }
);

export const saveContact = createAsyncThunk(
  'contacts/saveContact',
  async contact => {
    await axios.post('/contacts', contact);
    return contact;
  }
);
