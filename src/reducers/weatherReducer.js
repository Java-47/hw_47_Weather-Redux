import { createSlice } from "@reduxjs/toolkit";

const defaultWeather = {
    weather: ['Please click on the button Get Weather'],
    city: ""
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState: defaultWeather,
    reducers: {
        putWeather(weather, action) {
           weather.weather = action.payload
        }
    }  
})


export const {putWeather} = weatherSlice.actions;
export default weatherSlice.reducer;