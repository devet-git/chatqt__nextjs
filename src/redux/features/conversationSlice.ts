import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IConversation = {
  id: '',
  content: [] as IMessage[],
  members: [] as string[],
  type: 'personal',
} as IConversation;

export const conversationSlice = createSlice({
  name: 'conversationSlice',
  initialState,
  reducers: {
    createConversation: (
      state: IConversation,
      action: PayloadAction<string>
    ) => {
      state.id = action.payload;
      state.members = ['uid1'];
    },
    addMessage: (state: IConversation, action: PayloadAction<IMessage>) => {
      state.content.push(action.payload);
    },
    clearConversation: () => initialState,
  },
});

export const { createConversation, addMessage, clearConversation } =
  conversationSlice.actions;
const conversationReducer = conversationSlice.reducer;
export default conversationReducer;
