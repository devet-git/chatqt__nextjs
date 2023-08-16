import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IMessage[] = [];

export const currentChat = createSlice({
  name: 'currentChat',
  initialState,
  reducers: {
    addMessage: (state: IMessage[], action: PayloadAction<IMessage>) => {
      state.push(action.payload);
    },
    clearMessages: (state) => {
      state = [];
    },
  },
});

export const { addMessage, clearMessages } = currentChat.actions;
const currentChatReducer = currentChat.reducer;
export default currentChatReducer;
