import { configureStore } from '@reduxjs/toolkit';
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
import shopsReducer from './shops/shopsSlice';
import cartReducer from './cart/cartSlice';

const shopsPersistConfig = {
  key: 'shops',
  storage,
};

const themePersistConfig = {
  key: 'theme',
  storage,
};

const cartPersistConfig = {
  key: 'cart',
  storage,
};

const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);
const persistedShopsReducer = persistReducer(shopsPersistConfig, shopsReducer);
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    theme: persistedThemeReducer,
    shops: persistedShopsReducer,
    cart: persistedCartReducer
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
