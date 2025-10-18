import { createSlice } from "@reduxjs/toolkit";

const initialState=[]

const cartSlice=createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
        addToCart:(state,actions)=>{
            state.push(actions.payload)
        }
    }
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
