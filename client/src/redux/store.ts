import { configureStore } from '@reduxjs/toolkit'
import messagesReducer from './slices/messages/messagesReducer'
import authReducer from './slices/auth/authReducer'

export const store = configureStore({
  reducer: {
    messages: messagesReducer,
    auth: authReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch