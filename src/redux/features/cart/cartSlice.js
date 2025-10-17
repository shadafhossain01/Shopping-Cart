import { createSlice } from "@reduxjs/toolkit";
import productData from "../../../data/products.json"

const initialState=productData

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addProduct:()=>{

    }
  }
});

 export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
