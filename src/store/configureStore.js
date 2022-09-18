import { configureStore } from "@reduxjs/toolkit";
import { cityReducer } from "../reducers/cityReducer";
import weatherReducer from "../reducers/weatherReducer";



export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        city: cityReducer
    }
})