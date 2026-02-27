import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/CounterSlice";
import deltaCounterSlice from "../slice/DeltaCounterSlice";
import userSlice from "../slice/userSlice";

const store = configureStore({
    reducer: {
        counterState: counterSlice.reducer,
        deltaCounterState: deltaCounterSlice.reducer,
        userState: userSlice.reducer
    }
});

export default store;