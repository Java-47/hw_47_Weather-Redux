import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import  {FetchWeatherAction} from '../actionFunctions/FetchWeatherAction'
import {changeCity} from '../reducers/cityReducer';

const Form =()=> {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleClickGetWeather = () => {
        dispatch(FetchWeatherAction(city));
        
    }

    const handleChange = e => {
        setCity(e.target.value);
    }
    dispatch(changeCity(city));
        return (
            <div>
                <input
                    onChange={handleChange}
                    type='text'
                    placeholder='City'
                    value={city}
                />
                <button onClick={handleClickGetWeather}>Get weather</button>
            </div>
        )

}

export default Form
