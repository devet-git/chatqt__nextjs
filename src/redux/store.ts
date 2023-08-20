import { configureStore } from '@reduxjs/toolkit';
import currentChatReducer from './features/currentChatSlice';
import userReducer from './features/userSlice';

export const store = configureStore({
  reducer: { currentChatReducer, userReducer },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
