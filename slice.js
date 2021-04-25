/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const favoriteItemsSlice = createSlice({
  name: 'favoriteItems',
  initialState: {
    ids: [1, 2, 3, 4, 5, 9, 10],
  },
  reducers: {
    addToFavorite(state, { payload: { id } }) {
      state.ids.push(id);
    },
    removeFromFavorite(state, { payload: { id } }) {
      state.ids = state.ids.filter((itemId) => {
        console.log('itemId', itemId);
        console.log('id', id);
        console.log('itemId typeof', typeof itemId);
        console.log('id typeof', typeof id);
        return itemId !== id
      })
      console.log(state.ids);
    },
  },
});

export const {
  addToFavorite, removeFromFavorite,
} = favoriteItemsSlice.actions;

export default favoriteItemsSlice.reducer;
