import {
    GET_HOUSES,
    GET_HOUSES_OK,
    GET_HOUSES_FAIL,

    GET_SINGLE_HOUSE,
    GET_SINGLE_HOUSE_OK,
    GET_SINGLE_HOUSE_FAIL,

    GET_SEARCH_HOUSES,
    GET_SEARCH_HOUSES_OK,
    GET_SEARCH_HOUSES_FAIL
} from './actionTypes'

const initialState = {
    houses: [],
    loadingHouses: false,
    singleHouse: {},
    loadingSingleHouse: false,
    searchHouses: [],
    loadingSeacrhHouses: false,
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

        default:
            break
    }
    return state
}