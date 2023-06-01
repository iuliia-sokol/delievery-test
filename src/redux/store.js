import { configureStore } from '@reduxjs/toolkit';
// import { authSlice } from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import themeReducer from './theme/themeSlice';


const themePersistConfig = {
  key: 'theme',
  storage,
};

const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);


export const store = configureStore({
  reducer: {
    theme: persistedThemeReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
