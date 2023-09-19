import { createSlice } from "@reduxjs/toolkit";

const initialState = ""

const inputSlice = createSlice({
    name: "inputResult",
    initialState,
    reducers: {
        setResult: (state, action) => {
            return action.payload
        }
    }
})

export const { setResult } = inputSlice.actions

export default inputSlice.reducer

