import { configureStore } from '@reduxjs/toolkit';

import authReducer from './Reducers/authReducer';

export const store = configureStore({
  reducer: {
    authReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
