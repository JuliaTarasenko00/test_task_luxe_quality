import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  card: [],
};

export const cardSlice = createSlice({
  name: ' card',
  initialState,
  reducers: {
    addCard: (state, { payload }) => {
      state.card = payload;
    },
    clearCard: state => {
      state.card = [];
    },
  },
});

export const { addCard, clearCard } = cardSlice.actions;
