import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { MessageType, MessagesSliceState } from '../../../types/message';
import { thunkEditMessage, thunkLoadMessages, thunkSendMessage } from './createAsyncThunks';

// Define the initial state using that type
const initialState: MessagesSliceState = {
  messages: [],
  currentMessage: null,
};

export const messagesSlice = createSlice({
  name: 'messagesSlice',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<MessageType>) => {
      state.messages.push(action.payload);
    },
    deleteMessage: (state, action: PayloadAction<MessageType['id']>) => {
      const targetIndex = state.messages.findIndex((message) => message.id === action.payload);
      if (targetIndex !== -1) {
        state.messages.splice(targetIndex, 1);
      }
    },
    setCurrentMessage: (state, action: PayloadAction<MessageType>) => {
      state.currentMessage = action.payload;
    },
    clearCurrentMessage: (state) => {
      state.currentMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkLoadMessages.fulfilled, (state, action) => {
      state.messages = action.payload;
    });
    builder.addCase(thunkSendMessage.fulfilled, (state, action) => {
      state.messages.unshift(action.payload);
    });
    builder.addCase(thunkSendMessage.rejected, (state, action) => {
      console.log(action.error);
    });
    builder.addCase(thunkEditMessage.fulfilled, (state, action) => {
      const targetIndex = state.messages.findIndex((message) => message.id === action.payload.id);
      if (targetIndex !== -1) {
        state.messages[targetIndex] = action.payload;
      }
    });
  },
});

export const { addMessage, deleteMessage, setCurrentMessage, clearCurrentMessage } =
  messagesSlice.actions;

export default messagesSlice.reducer;
