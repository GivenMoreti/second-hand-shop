import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        }
        ,remove(state,action){
            // state.pop(action.payload)
            //removes all the items with same id.
            return state.filter(item => item.id !== action.payload.id);
        },decrement(state,action){
            state.pop(action.payload)
        },increment(state,action){
            //implements correct logic
            state.push(state.payload);
        }
    }
});
export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;