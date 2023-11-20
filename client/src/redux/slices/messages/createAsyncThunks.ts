import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiService from '../../../services/apiService';
import type { AddMesageFormData, MessageType } from '../../../types/message';

export const thunkLoadMessages = createAsyncThunk('messagesSlice/thunkLoadMessages', async () =>
  ApiService.getMessages(),
);

export const thunkSendMessage = createAsyncThunk(
  'messagesSlice/thunkSendMessage',
  (formData: AddMesageFormData) => ApiService.postMessage(formData),
);

export const thunkEditMessage = createAsyncThunk(
  'messagesSlice/thunkEditMessage',
  ({ formData, id }: { formData: AddMesageFormData; id: MessageType['id'] }) =>
    ApiService.editMessage(formData, id),
);
