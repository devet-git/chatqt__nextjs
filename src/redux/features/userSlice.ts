import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IUser = {
  id: '',
  email: '',
  refreshToken: '',
  role: 'USER',
  status: 'UNVERIFIED',
};
export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setCurrentUser: (state: IUser, action: PayloadAction<IUser>) => {
      return { ...state, ...action.payload };
    },
    clearUser: () => initialState,
  },
});
export const { setCurrentUser, clearUser } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
