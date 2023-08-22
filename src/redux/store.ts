import { configureStore } from '@reduxjs/toolkit';
import conversationReducer from './features/conversationSlice';
import userReducer from './features/userSlice';

export const store = configureStore({
  reducer: { conversationReducer, userReducer },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
