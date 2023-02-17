import { createSlice } from "@reduxjs/toolkit";

export const incDecSlice = createSlice({
    name: 'IncDec',
    initialState: 10,
    reducers: {
        Increment: ( state, action ) => {
            return state += 1;
        },
        Decrement: ( state, action ) => {
            return state -= 1;
        }
    }
});

export const { Increment, Decrement } = incDecSlice.actions;
export default incDecSlice.reducer;