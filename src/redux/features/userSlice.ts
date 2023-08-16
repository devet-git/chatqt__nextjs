import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {} as IUser;
export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setCurrentUser: (state: IUser, action: PayloadAction<IUser>) => {
      state = { ...action.payload };
    },
    clearUser: (state: IUser) => {
      state = {} as IUser;
    },
  },
});
export const { setCurrentUser, clearUser } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
