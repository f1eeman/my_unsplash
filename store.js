import { configureStore } from '@reduxjs/toolkit';
import favoriteItemsReducer from './slice';

export default configureStore({
  reducer: {
    favoriteItems: favoriteItemsReducer,
  },
});
