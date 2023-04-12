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
import axios from "axios";

//Funciones LOGIN - POST:

export function actionDoLogin(){
    return {
        type: LOGIN,
    };
}

export function actionDoLoginOk(user) {
  return {
    type: LOGIN_OK,
    payload: user
  };
}

export function actionDoLoginFail(error){
    return {
        type: LOGIN_FAIL,
        payload: error,
    };
}

export function doLogin(loginUserData) {
  return async (dispatch) => {
    dispatch(actionDoLogin(loginUserData));
    try {
      const res = await axios.post("http://localhost:3000/login", loginUserData);
      if (res) {
        dispatch(actionDoLoginOk(res.data.user));
        console.log(res.data.user)
        window.alert("LOGIN OK")
      } 
    } catch (error) {
      dispatch(actionDoLoginFail(error.response.data));
      console.log(error.response.data)
    }
  };
}


//Funciones LOGOUT:

export function actionDoLogout() {
    return {
      type: LOGOUT,
    };
  }
  
  export function actionDoLogoutOk() {
    return {
      type: LOGOUT_OK,
    };
  }
  
  export function actionDoLogoutFail(error) {
    return {
      type: LOGOUT_FAIL,
      payload: error,
    };
  }

  export function doLogout() {
    return (dispatch) => {
      try {
        dispatch(actionDoLogout());
        dispatch(actionDoLogoutOk());
      } catch (error) {
        dispatch(actionDoLoginFail(error));
      }
    };
  }

  // Funciones registro (signup):

  export function actionSignUp() {
    return {
      type: SIGNUP,
    };
  }
  
  export function actionSignUpOk(newUser) {
    return {
      type: SIGNUP_OK,
      payload: newUser
    };
  }
  
  export function actionSignUpFail(error) {
    return {
      type: SIGNUP_FAIL,
      payload: error,
    };
  }

  export function doSignUp(newUserData) {
    return async (dispatch) => {
      dispatch(actionSignUp());
      try {
        await axios.post("http://localhost:3000/register", newUserData);
        dispatch(actionSignUpOk())
        const { email, password } = newUserData;
        const loginData = { email, password };
        dispatch(doLogin(loginData));
      } catch (error) {
        dispatch(actionSignUpFail(error))
      }
  }}
  

  // Funciones editar información usuario: 

  export function actionEditUserInfo(){
    return {
        type: EDIT_USER_INFO,
    }
  }

  export function actionEditUserInfoOk(userNewData){
    return {
        type: EDIT_USER_INFO_OK,
        payload: userNewData
    }
  }

  export function actionEditUserInfoFail(error) {
    return {
        type: EDIT_USER_INFO_FAIL,
        payload: error
    }
  }

  export function editUser(userId, userData) {
    return async (dispatch) => {
      dispatch(actionEditUserInfo());
      try {
        const res = await axios.patch(`http://localhost:3000/users/${userId}`, userData);
        dispatch(actionEditUserInfoOk(res.data))
      } catch (error) {
        dispatch(actionEditUserInfoFail(error))
      }
  }}

  //DELETE: Funciones eliminar perfil de usuario:

  export function actionDeleteUser(){
    return {
        type: DELETE_USER
    }
  }

  export function actionDeleteUserOk(){
    return {
        type: DELETE_USER_OK,
        
    }
  }

  export function actionDeleteUserFail(error){
    return {
        type: DELETE_USER_FAIL,
        payload: error
    }
  }

  export function deleteUser(userId) {
    return async (dispatch) => {
      dispatch(actionDeleteUser());
      try {
        await axios.delete(`http://localhost:3000/users/${userId}`);
        dispatch(actionDeleteUserOk());
      } catch (error) {
        dispatch(actionDeleteUserFail(error));
      }
    }
  }
  