import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import type {RootState} from '@app/store/store';
import { AuthState } from '@app/types/storeTypes/authTypes';

const initialState: AuthState = {
  user_name: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, {payload}: PayloadAction<string>) => {
      state.user_name = payload;
    },
  },
});

export const {setLoading} = authSlice.actions;

export const auth = (state: RootState) => state.auth.user_name;

export default authSlice.reducer;
