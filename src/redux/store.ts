import { configureStore } from '@reduxjs/toolkit';
import { githubApiSlice } from './slices/githubApiSlice';

export const store = configureStore({
  reducer: { [githubApiSlice.reducerPath]: githubApiSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApiSlice.middleware),
});
