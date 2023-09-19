import { configureStore, combineReducers } from "@reduxjs/toolkit";
import inputSliceReducer from './inputSlice'

const appReducer = combineReducers({
    inputResult: inputSliceReducer
})

export const store = configureStore({
    reducer: appReducer
})