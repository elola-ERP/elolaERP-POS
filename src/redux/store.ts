import { configureStore } from "@reduxjs/toolkit";
import { posReducer } from "./pos-slice";

export const store = configureStore({
    reducer: {
        pos: posReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch