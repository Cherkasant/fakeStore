import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type authReducerState = {
  isAuth: boolean;
};
const initialState: authReducerState = {
  isAuth: false
};

const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    }
  }
});
export const { setLoggedIn } = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
