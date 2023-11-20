import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AuthState } from '../../../types/auth';
import { thunkCheckAuth } from './createAsyncThunks';

// Define the initial state using that type
const initialState: AuthState = {
  accessToken: '',
  user: {
    status: 'pending',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(thunkCheckAuth.fulfilled, (state, action) => action.payload);
    builder.addCase(thunkCheckAuth.rejected, (state) => {
      state.user.status = 'guest';
    });
  },
});

// export const {  } = authSlice.actions

export default authSlice.reducer;
