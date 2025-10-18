import { configureStore } from "@reduxjs/toolkit";
import  homeSlice  from "./features/home/homeSlice";
import cartSlice from "./features/cart/cartSlice"

const store = configureStore({
    reducer:{
        home:homeSlice,
        cart:cartSlice
    }
})

export default store