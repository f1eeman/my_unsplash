/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const favoriteItemsSlice = createSlice({
  name: 'favoriteItems',
  initialState: {
    ids: [1, 2, 3, 4, 8, 9, 10, 15, 16, 17],
  },
  reducers: {
    addToFavorite(state, { payload: { id } }) {
      state.ids.push(id);
    },
    removeFromFavorite(state, { payload: { id } }) {
      state.ids = state.ids.filter((itemId) => itemId !== id);
    },
  },
});

export const {
  addToFavorite, removeFromFavorite,
} = favoriteItemsSlice.actions;

export default favoriteItemsSlice.reducer;
