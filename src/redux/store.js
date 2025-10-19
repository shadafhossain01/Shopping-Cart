import { configureStore } from "@reduxjs/toolkit";
import  homeSlice  from "./features/home/homeSlice";
import cartSlice from "./features/cart/cartSlice"
import postApi from "./features/post/postApi";
import userApi from "./features/user/userApi";

const store = configureStore({
  reducer: {
    home: homeSlice,
    cart: cartSlice,
    [postApi.reducerPath]: postApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware).concat(userApi.middleware),
});

export default store