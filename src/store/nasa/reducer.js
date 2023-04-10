import {
    GET_PICTURES,
    GET_PICTURES_OK,
    GET_PICTURES_FAIL

} from './actionTypes'

const initialState = {
    nasaImages: {},
    loadingImages: false,
    error: {
        message: ""
    }
}

export default function NasaReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PICTURES:
            state = {...state, loadingImages: true}
            break;
        case GET_PICTURES_OK:
            state = {...state, loadingImages:false, nasaImages: action.payload}
            break;
        case GET_PICTURES_FAIL:
            state = {...state, loadingImages:false, error: {message: action.payload}}
            break;
        default: 
            break;
    }
    return state
}