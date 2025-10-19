import { configureStore } from "@reduxjs/toolkit";
import  homeSlice  from "./features/home/homeSlice";
import cartSlice from "./features/cart/cartSlice"
import postApi from "./features/post/postApi";

const store = configureStore({
  reducer: {
    home: homeSlice,
    cart: cartSlice,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

export default store