import {
    GET_MARS_WEATHER,
    GET_MARS_WEATHER_OK,
    GET_MARS_WEATHER_FAIL,

} from './actionTypes'

const initialState = {
    weather: {},
    loadingWeather: false,
    error: {
        message: ""
    }
}

export default function NasaReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MARS_WEATHER:
            state = {...state, loadingWeather: true}
            break;
        case GET_MARS_WEATHER_OK:
            state = {...state, loadingWeather: false, weather: action.payload}
            break;
        case GET_MARS_WEATHER_FAIL:
            state = {...state, loadingWeather: false, error: {message: action.payload}}
            break;
        default: 
            break;
    }
    return state
}