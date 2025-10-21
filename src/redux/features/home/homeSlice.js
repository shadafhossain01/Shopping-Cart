import { createSlice } from "@reduxjs/toolkit";
import productData from "../../../data/products.json";

const initialState = productData;

export const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    // add new product to Home page functionality
    addProduct: (state,actions) => {
        state.push(actions.payload)
    },
  },
});

export const { addProduct } = homeSlice.actions;

export default homeSlice.reducer;
