import { createSlice } from "@reduxjs/toolkit"


type PosState = {
    isLoggedIn: boolean
}

const initialState: PosState = {
    isLoggedIn: false
}

const posSlice = createSlice({
    name: 'pos',
    initialState,
    reducers: {
        login: (state) => {
            state.isLoggedIn = true
        },
        logout: (state) => {
            state.isLoggedIn = false
        }
    }

})

export const { login, logout } = posSlice.actions;
export const posReducer = posSlice.reducer