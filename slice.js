/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const favoriteItemsSlice = createSlice({
  name: 'favoriteItems',
  initialState: {
    ids: [5, 11, 3, 6, 8, 17, 9],
  },
  reducers: {
    addToFavorite(state, { payload: { id } }) {
      state.ids.push(id);
    },
    removeFromFavorite(state, { payload: { id } }) {
      state.ids = state.ids.filter((itemId) => itemId !== id)
    },
  },
});

export const {
  addToFavorite, removeFromFavorite,
} = favoriteItemsSlice.actions;

export default favoriteItemsSlice.reducer;
