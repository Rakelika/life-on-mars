import {
    GET_HOUSES,
    GET_HOUSES_OK,
    GET_HOUSES_FAIL,

    GET_SINGLE_HOUSE,
    GET_SINGLE_HOUSE_OK,
    GET_SINGLE_HOUSE_FAIL,

    POST_FAVORITES,
    POST_FAVORITES_OK,
    POST_FAVORITES_FAIL,

    GET_FAVORITES,
    GET_FAVORITES_OK,
    GET_FAVORITES_FAIL,

    GET_SINGLE_FAVORITE,
    GET_SINGLE_FAVORITE_OK,
    GET_SINGLE_FAVORITE_FAIL,
    
    EDIT_FAV_HOUSE_INFO,
    EDIT_FAV_HOUSE_INFO_OK,
    EDIT_FAV_HOUSE_INFO_FAIL
,

} from './actionTypes'

const initialState = {
    houses: [],
    loadingHouses: false,
    singleHouse: {},
    loadingSingleHouse: false,
    favorites: {},
    loadingFavorites: false,
    userFavorites: [],
    loadingUserFavorites: false,
    error: {
        message: ""
    }
}

export default function HousesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_HOUSES:
            state = {...state, loadingHouses: true}
            break

        case GET_HOUSES_OK:
            state = {...state, loadingHouses: false, houses: action.payload}
            break

        case GET_HOUSES_FAIL:
            state = {...state, loadingHouses: false, houses: [], error: {message: action.payload}}
            break

        case GET_SINGLE_HOUSE:
            state = {...state, loadingSingleHouse: true}
            break
    
        case GET_SINGLE_HOUSE_OK:
            state = {...state, loadingSingleHouse: false, singleHouse: action.payload}
            break
    
        case GET_SINGLE_HOUSE_FAIL:
            state = {...state, loadingSingleHouse: false, singleHouse: {}, error: {message: action.payload}}
            break

        case POST_FAVORITES:
            state = {...state, loadingFavorites: true}
            break
    
        case POST_FAVORITES_OK:
            state = {...state, loadingFavorites: false, favorites: action.payload}
            break
    
        case POST_FAVORITES_FAIL:
            state = {...state, loadingFavorites: false, favorites: {}, error: {message: action.payload}}
            break
        case GET_FAVORITES:
            state = {...state, loadingUserFavorites: true}
            break
        
        case GET_FAVORITES_OK:
            state = {...state, loadingUserFavorites: false, userFavorites: action.payload}
            break
        
        case GET_FAVORITES_FAIL:
            state = {...state, loadingUserFavorites: false, userFavorites: [], error: {message: action.payload}}
            break

        case GET_SINGLE_FAVORITE:
            state = {...state, loadingSingleFavorite: true}
            break
        
        case GET_SINGLE_FAVORITE_OK:
            state = {...state, loadingSingleFavorite: false, singleFavorite: action.payload}
            break
        
        case GET_SINGLE_FAVORITE_FAIL:
            state = {...state, loadingSingleFavorite: false, singleFavorite: {}, error: {message: action.payload}}
            break
        
        case EDIT_FAV_HOUSE_INFO:
            state = {...state, loadingSingleFavorite: true};
            break;
        case EDIT_FAV_HOUSE_INFO_OK:
            state = {...state, loadingSingleFavorite: false, singleFavorite: action.payload};
            break;
        case EDIT_FAV_HOUSE_INFO_FAIL:
            state = {...state, loadingSingleFavorite: false, singleFavorite: {}, error: {message: action.payload}};
            break;
        
        default:
            break
    }
    return state
}