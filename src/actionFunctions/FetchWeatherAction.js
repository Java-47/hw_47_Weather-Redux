import { putWeather } from "../reducers/weatherReducer";
import { api_key, base_url } from '../units/constants';
import {store} from '../store/configureStore'



export const FetchWeatherAction = () => {
    const city = store.getState().city.city

    return (dispatch) => {
        dispatch(putWeather(["Wait please..."]));
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(data => data.json())
            .then(data => dispatch(putWeather([
            `Location: ${data.sys.country}, ${[data.name]}`,
            `Temp: ${data.main.temp}`,
            `Pressure: ${data.main.pressure}`,
            `Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`]
            )))
            .catch(e => dispatch(putWeather(["Error. Enter correct city name!"])));
    }
}
