import axios from 'axios'

import {
    GET_HOUSES,
    GET_HOUSES_OK,
    GET_HOUSES_FAIL,

    GET_SINGLE_HOUSE,
    GET_SINGLE_HOUSE_OK,
    GET_SINGLE_HOUSE_FAIL

} from './actionTypes'

//Funciones GET HOUSES

export function actionGetHouses(){
    return{
        type: GET_HOUSES
    }
}

export function actionGetHousesOk(houses){
    return{
        type: GET_HOUSES_OK,
        payload: houses
    }
}

export function actionGetHousesFail(error){
    return{
        type: GET_HOUSES_FAIL,
        payload: error,
    }
}

export function getHouses(){
    return async (dispatch)=>{
        dispatch(actionGetHouses())
        try {
            const response = await axios.get("http://localhost:3000/houses")
            dispatch(actionGetHousesOk(response.data))
        } catch(error){
            dispatch(actionGetHousesFail(error))
        }
    }
}

//Funciones GET SINGLE HOUSE

export function actionGetSingleHouse(){
    return{
        type: GET_SINGLE_HOUSE
    }
}

export function actionGeSingleHouseOk(singleHouse){
    return{
        type: GET_SINGLE_HOUSE_OK,
        payload: singleHouse
    }
}

export function actionGeSingleHouseFail(error){
    return{
        type: GET_SINGLE_HOUSE_FAIL,
        payload: error,
    }
}

export function getSingleHouse(id){
    return async (dispatch)=>{
        dispatch(actionGetSingleHouse())
        try {
            const response = await axios.get(`http://localhost:3000/houses/${id}`)
            dispatch(actionGeSingleHouseOk(response.data))
        } catch(error){
            dispatch(actionGeSingleHouseFail(error))
        }
    }
}