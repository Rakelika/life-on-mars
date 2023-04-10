import axios from 'axios'
import {
    GET_MARS_WEATHER,
    GET_MARS_WEATHER_OK,
    GET_MARS_WEATHER_FAIL,

} from './actionTypes'

const APIKEY = "HGB0sdrb2JlKXuJC7aSpL4mFAXsX5uUlHPO1p2MZ";

//Funciones GET MARS WEATHER

export function actionGetWeather(){
    return {
        type: GET_MARS_WEATHER
    }
}

export function actionGetWeatherOk(weatherData){
    return {
        type: GET_MARS_WEATHER_OK,
        payload: weatherData
    }
}

export function actionGetWeatherFail(error){
    return {
        type: GET_MARS_WEATHER_FAIL,
        payload: error
    }
}

export function getWeather(){
    return async (dispatch)=>{
        dispatch(actionGetWeather())
        try {
            const response = await axios.get(`https://api.nasa.gov/insight_weather/?api_key=${APIKEY}&feedtype=json&ver=1.0`);
            dispatch(actionGetWeatherOk(response.data))
            console.log(response.data)
        } catch (error) {
            dispatch(actionGetWeatherFail(error))
        }
    }
}