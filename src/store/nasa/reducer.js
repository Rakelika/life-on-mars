import {
    GET_PICTURE_DAY,
    GET_PICTURE_DAY_OK,
    GET_PICTURE_DAY_FAIL,

    GET_MARS_WEATHER,
    GET_MARS_WEATHER_OK,
    GET_MARS_WEATHER_FAIL,

    GET_MARS_IMAGES,
    GET_MARS_IMAGES_OK,
    GET_MARS_IMAGES_FAIL

} from './actionTypes'

const initialState = {
    nasaPictureDay: {},
    loadingImages: false,
    weather: {},
    loadingWeather: false,
    marsImages: [],
    loadingMarsImages: false,
    error: {
        message: ""
    }
}

export default function NasaReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PICTURE_DAY:
            state = {...state, loadingImages: true}
            break;
        case GET_PICTURE_DAY_OK:
            state = {...state, loadingImages:false, nasaPictureDay: action.payload}
            break;
        case GET_PICTURE_DAY_FAIL:
            state = {...state, loadingImages:false, nasaPictureDay:{}, error: {message: action.payload}}
            break;
        case GET_MARS_WEATHER:
            state = {...state, loadingWeather: true}
            break;
        case GET_MARS_WEATHER_OK:
            state = {...state, loadingWeather: false, weather: action.payload}
            break;
        case GET_MARS_WEATHER_FAIL:
            state = {...state, loadingWeather: false, weather:{}, error: {message: action.payload}}
            break;
        case GET_MARS_IMAGES:
            state = {...state, loadingMarsImages: true}
            break;
        case GET_MARS_IMAGES_OK:
            state = {...state, loadingMarsImages:false, marsImages: action.payload}
            break;
        case GET_MARS_IMAGES_FAIL:
            state = {...state, loadingMarsImages:false, marsImages:[], error: {message: action.payload}}
            break;
        default: 
            break;
    }
    return state
}