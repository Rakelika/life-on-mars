import {
    GET_HOUSES,
    GET_HOUSES_OK,
    GET_HOUSES_FAIL,

    GET_SINGLE_HOUSE,
    GET_SINGLE_HOUSE_OK,
    GET_SINGLE_HOUSE_FAIL
} from './actionTypes'

const initialState = {
    houses: [],
    loadingHouses: false,
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

        default:
            break
    }
    return state
}