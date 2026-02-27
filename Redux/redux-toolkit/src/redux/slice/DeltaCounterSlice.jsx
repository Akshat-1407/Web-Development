import { createSlice } from "@reduxjs/toolkit";

const deltaCounterSlice = createSlice({
    name: "deltaCounterSlice",
    initialState: {
        count: 0,
        delta: 1
    },
    reducers: {
        increment: (state) => {
            state.count += state.delta;
        },
        decrement: (state) => {
            state.count -= state.delta;
        },
        updateDelta: (state, params) => {
            state.delta = params.payload;
        }
    }
});

export default deltaCounterSlice;