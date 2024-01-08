import { configureStore } from '@reduxjs/toolkit';
import { cardSlice } from './slice';

export const store = configureStore({
  reducer: {
    card: cardSlice.reducer,
  },
});
