import { createSlice } from "@reduxjs/toolkit";

const initialState=[]

const cartSlice=createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
        addToCart:(state,actions)=>{
            state.push(actions.payload)
        },
    increaseQuantity: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.find(i => i.id === action.payload);
        item.quantity -= 1;
    },

    removeCart:(state,actions)=>{
       return  state.filter(item=>item.id!==actions.payload)
    }
    }
})

export const { addToCart, increaseQuantity, decreaseQuantity, removeCart } =cartSlice.actions;
export default cartSlice.reducer;
