import axios from 'axios'

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

    DELETE_FAVORITE,
    DELETE_FAVORITE_OK,
    DELETE_FAVORITE_FAIL,
    
    EDIT_FAV_HOUSE_INFO,
    EDIT_FAV_HOUSE_INFO_OK, 
    EDIT_FAV_HOUSE_INFO_FAIL


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

//Funciones POST FAVORITES:

export function actionPostFavorites(){
    return{
        type: POST_FAVORITES
    }
}

export function actionPostFavoritesOk(favoriteHouse){
    return{
        type: POST_FAVORITES_OK,
        payload: favoriteHouse
    }
}

export function actionPostFavoritesFail(error){
    return{
        type: POST_FAVORITES_FAIL,
        payload: error
    }
}

export function addFavorites(favorite) {
    return async (dispatch) => {
      dispatch(actionPostFavorites(favorite));
      try {
        const res = await axios.post("http://localhost:3000/favorites", favorite);
        dispatch(actionPostFavoritesOk(res.data))
      } catch (error) {
        dispatch(actionPostFavoritesFail(error))
      }
  }}

  //Funciones GET FAVORITES:

export function actionGetFavorites(){
    return{
        type: GET_FAVORITES,
    }
}

export function actionGetFavoritesOk(favoriteHouse){
    return{
        type: GET_FAVORITES_OK,
        payload: favoriteHouse
    }
}

export function actionGetFavoritesFail(error){
    return{
        type: GET_FAVORITES_FAIL,
        payload: error
    }
}

export function getFavorites(userId) {
    return async (dispatch) => {
      dispatch(actionGetFavorites());
      try {
        const res = await axios.get(`http://localhost:3000/favorites/?userId=${userId}`);
        dispatch(actionGetFavoritesOk(res.data))
        console.log(res.data)
      } catch (error) {
        dispatch(actionGetFavoritesFail(error))
      }
  }}

  //Funciones GET SINGLE FAVORITE

export function actionGetSingleFavorite(houseId){
    return{
        type: GET_SINGLE_FAVORITE,
        payload: houseId
    }
}

export function actionGeSingleFavoriteOk(singleHouse){
    return{
        type: GET_SINGLE_FAVORITE_OK,
        payload: singleHouse
    }
}

export function actionGeSingleFavoriteFail(error){
    return{
        type: GET_SINGLE_FAVORITE_FAIL,
        payload: error,
    }
}

export function getSingleFavorite(houseId){
    return async (dispatch)=>{
        dispatch(actionGetSingleFavorite())
        try {
            const response = await axios.get(`http://localhost:3000/favorites/${houseId}`)
            dispatch(actionGeSingleFavoriteOk(response.data))
            console.log(response.data)
        } catch(error){
            dispatch(actionGeSingleFavoriteFail(error))
        }
    }
}

// Funciones editar información casa favorita: 

export function actionEditFavHouseInfo(){
    return {
        type: EDIT_FAV_HOUSE_INFO,
    }
  }

  export function actionEditFavHouseInfoOk(houseNewData){
    return {
        type: EDIT_FAV_HOUSE_INFO_OK,
        payload: houseNewData
    }
  }

  export function actionEditFavHouseInfoFail(error) {
    return {
        type: EDIT_FAV_HOUSE_INFO_FAIL,
        payload: error
    }
  }

  export function editFavHouse(houseId, houseData) {
    return async (dispatch) => {
      dispatch(actionEditFavHouseInfo());
      try {
        const res = await axios.patch(`http://localhost:3000/favorites/${houseId}`, houseData);
        dispatch(actionEditFavHouseInfoOk(res.data))
      } catch (error) {
        dispatch(actionEditFavHouseInfoFail(error))
      }
  }}


  //DELETE: Funciones eliminar casa de favoritos:

  export function actionDeleteFavorite(){
    return {
        type: DELETE_FAVORITE
    }
  }

  export function actionDeleteFavoriteOk(){
    return {
        type: DELETE_FAVORITE_OK,
    }
  }

  export function actionDeleteFavoriteFail(error){
    return {
        type: DELETE_FAVORITE_FAIL,
        payload: error
    }
  }

  export function deleteFavorite(favoriteId) {
    return async (dispatch) => {
      dispatch(actionDeleteFavorite());
      try {
        await axios.delete(`http://localhost:3000/favorites/${favoriteId}`);
        dispatch(actionDeleteFavoriteOk());
      } catch (error) {
        dispatch(actionDeleteFavoriteFail(error));
      }
    }
  }