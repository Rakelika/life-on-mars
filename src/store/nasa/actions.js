import axios from 'axios'
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

const APIKEY = "HGB0sdrb2JlKXuJC7aSpL4mFAXsX5uUlHPO1p2MZ";

//Funciones get MARS IMAGES

export function actionGetMarsImages(){
    return {
        type: GET_MARS_IMAGES
    }
}

export function actionGetMarsImagesOk(images){
    return {
        type: GET_MARS_IMAGES_OK,
        payload: images
    }
}

export function actionGetMarsImagesFail(error){
    return {
        type: GET_MARS_IMAGES_FAIL,
        payload: error
    }
}

export function getMarsImages(){
    return async (dispatch)=>{
        dispatch(actionGetMarsImages())
        try {
            const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=100&camera=navcam&api_key=${APIKEY}`);
            dispatch(actionGetMarsImagesOk(response.data.photos))
            console.log(response.data.photos)
        } catch (error) {
            dispatch(actionGetMarsImagesFail(error))
        }
    }
}

//Funciones get PICTURE OF THE DAY

export function actionGetPicture(){
    return {
        type: GET_PICTURE_DAY
    }
}

export function actionGetPictureOk(image){
    return {
        type: GET_PICTURE_DAY_OK,
        payload: image
    }
}

export function actionGetPictureFail(error){
    return {
        type: GET_PICTURE_DAY_FAIL,
        payload: error
    }
}

export function getPicture(){
    return async (dispatch)=>{
        dispatch(actionGetPicture())
        try {
            const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${APIKEY}`);
            dispatch(actionGetPictureOk(response.data))
            console.log(response.data)
        } catch (error) {
            dispatch(actionGetPictureFail(error))
        }
    }
}

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
            const response = await axios.get('https://api.maas2.apollorion.com/');
            dispatch(actionGetWeatherOk(response.data))
            console.log(response.data)
        } catch (error) {
            dispatch(actionGetWeatherFail(error))
        }
    }
}


