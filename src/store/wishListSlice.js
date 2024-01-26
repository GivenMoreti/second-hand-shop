import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishList(state, action) {
      const newItem = action.payload;
      const existingItemIndex = state.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, increment its quantity
        state[existingItemIndex].quantity += 1;
      } else {
        // Otherwise, add the new item to the cart
        state.push({ ...newItem, quantity: 1 });
      }
      // state.push(action.payload);
    },
    removeFromWishList(state, action) {
      // const itemIdToRemove = action.payload;
      // return state.filter((item) => item.id !== itemIdToRemove);
      // return state.filter(item => item.id !== action.payload.id);
      state.pop(action.payload)
    },
    incrementItem(state, action) {
      const itemIdToIncrement = action.payload;
      const itemToIncrement = state.find(
        (item) => item.id === itemIdToIncrement
      );

      if (itemToIncrement) {
        itemToIncrement.quantity += 1;
      }
    },
    decrementItem(state, action) {
      const itemIdToDecrement = action.payload;
      const itemToDecrement = state.find(
        (item) => item.id === itemIdToDecrement
      );

      if (itemToDecrement && itemToDecrement.quantity > 1) {
        itemToDecrement.quantity -= 1;
      }
    },
  },
});
export const {
  addToWishList,
  removeFromWishList,
  incrementItem,
  decrementItem,
} = wishListSlice.actions;
export default wishListSlice.reducer;
