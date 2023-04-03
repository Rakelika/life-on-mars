import {
    LOGIN,
    LOGIN_OK,
    LOGIN_FAIL,

    LOGOUT,
    LOGOUT_OK,
    LOGOUT_FAIL,

    SIGNUP,
    SIGNUP_OK,
    SIGNUP_FAIL,

    EDIT_USER_INFO,
    EDIT_USER_INFO_OK,
    EDIT_USER_INFO_FAIL,

    DELETE_USER,
    DELETE_USER_OK,
    DELETE_USER_FAIL
} from "./actionTypes";

function recoverUser(){
    try {
        return JSON.parse(localStorage.getItem("_user"))
    } catch (fail) {
        return {}
    }
}

const initialState = {
    user: recoverUser(),
    loadingUser: false,
    error: {
        message: "",
    }
};

export default function UserReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN:
            state = {...state, loadingUser: true};
            break;
        case LOGIN_OK:
            state = {...state, loadingUser: false, user: action.payload};
            break;
        case LOGIN_FAIL:
            state = {...state, loadingUser: false, user: {}, error: {message: action.payload}}
            break;
        case LOGOUT:
            state = {...state};
            break;
        case LOGOUT_OK:
            state = {...state, user: {}};
            break;
        case SIGNUP:
            state = {...state, loadingUser:true};
            break;
        case SIGNUP_OK:
            state = {...state, loadingUser:false, user: action.payload};
            break;
        case SIGNUP_FAIL:
            state = {...state, loadingUser:false, user: {}, error: {message:action.payload}}
            break;
        case EDIT_USER_INFO:
            state = {...state, loadingUser: true};
            break;
        case EDIT_USER_INFO_OK:
            state = {...state, loadingUser: false, user: action.payload};
            break;
        case EDIT_USER_INFO_FAIL:
            state = {...state, loadingUser: false, user: {}, error: {message: action.payload}};
            break;
        default:
            break;
    }
    return state
}