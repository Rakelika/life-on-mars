import axios from 'axios'
import {
    GET_PICTURES,
    GET_PICTURES_OK,
    GET_PICTURES_FAIL

} from './actionTypes'

const APIKEY = "HGB0sdrb2JlKXuJC7aSpL4mFAXsX5uUlHPO1p2MZ";

//Funciones get pictures

export function actionGetPictures(){
    return {
        type: GET_PICTURES
    }
}

export function actionGetPicturesOk(images){
    return {
        type: GET_PICTURES_OK,
        payload: images
    }
}

export function actionGetPicturesFail(error){
    return {
        type: GET_PICTURES_FAIL,
        payload: error
    }
}

export function getPictures(){
    return async (dispatch)=>{
        dispatch(actionGetPictures())
        try {
            // const response = await axios.get(`https://api.nasa.gov/planetary/apod?count=10&thumbs=true&api_key=${APIKEY}`);
            const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${APIKEY}`);
            dispatch(actionGetPicturesOk(response.data))
            console.log(response.data)
        } catch (error) {
            dispatch(actionGetPicturesFail(error))
        }
    }
}