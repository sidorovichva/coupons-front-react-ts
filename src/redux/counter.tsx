import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        anyName: 0
    },
    reducers: {
        increment: (state) => {
            state.anyName += 1;
        },
        decrement: (state) => {
            state.anyName -= 1;
        },
        incrementByAmount: (state, action) => {
            state.anyName += action.payload;
        }
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;