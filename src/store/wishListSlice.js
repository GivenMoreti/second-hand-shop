import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        addToWishList(state, action) {
            state.push(action.payload);
        }
        ,removeFromWishList(state,action){
            state.pop(action.payload)
            // return state.filter(item => item.id !== action.payload.id);
        }
    }
});
export const {addToWishList,removeFromWishList} = wishListSlice.actions;
export default wishListSlice.reducer;