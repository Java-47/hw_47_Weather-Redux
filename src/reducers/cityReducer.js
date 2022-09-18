import { createSlice } from "@reduxjs/toolkit";

const defaultCity = {
    city: 'Ashdod'
}

const citySlice = createSlice({
    name: 'city',
    initialState: defaultCity,
    reducers: {
        changeCity(city, action) {
            city.city = action.payload;
        }

    }
})

export const {changeCity} = citySlice.actions;
export const cityReducer = citySlice.reducer;