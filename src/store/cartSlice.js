import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        }
        ,remove(state,action){
            state.pop(action.payload)
            //removes all the items with same id.
            // return state.filter(item => item.id !== action.payload.id);
        },
        incrementCartItem(state, action) {
          const itemIdToIncrement = action.payload;
          const itemToIncrement = state.find(
            (item) => item.id === itemIdToIncrement
          );
    
          if (itemToIncrement) {
            itemToIncrement.quantity += 1;
          }
        },
        decrementCartItem(state, action) {
          const itemIdToDecrement = action.payload;
          const itemToDecrement = state.find(
            (item) => item.id === itemIdToDecrement
          );
    
          if (itemToDecrement && itemToDecrement.quantity > 1) {
            itemToDecrement.quantity -= 1;
          }
        },
    }
});
export const {add,remove,incrementCartItem,decrementCartItem} = cartSlice.actions;
export default cartSlice.reducer;