import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
    name: 'AddSlice',
    initialState: [
        'Hello',
        'There',
    ],
    reducers: {
        addList: (state, action) => {
            state = state.push(action.payload);
        },
        removeList: (state, action) => {
            state = state.splice(action.payload, 1);
        }
    }
});

export const { addList, removeList } = listSlice.actions;
export default listSlice.reducer;