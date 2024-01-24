import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        }
        ,remove(state,action){
            state.pop(action.payload);
        }
    }
});
export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;