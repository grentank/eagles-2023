import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../../services/authService';

export const thunkCheckAuth = createAsyncThunk('authSlice/thunkCheckAuth', async () =>
  AuthService.check(),
);

export const a = 3;
