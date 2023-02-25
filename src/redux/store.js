import { configureStore, combineReducers } from '@reduxjs/toolkit';

import {
  contactReducer,
  filterReducer,
  loadingReducer,
  errorReducer,
} from './contacts/reducers';
import { dataAuthReducer, errorAuthReducer } from './auth/reducer';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const contactsReducer = combineReducers({
  items: contactReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});
const persistedReducer = persistReducer(persistConfig, dataAuthReducer);
const authReducer = combineReducers({
  data: persistedReducer,
  error: errorAuthReducer,
});
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
});
export const persistor = persistStore(store);
