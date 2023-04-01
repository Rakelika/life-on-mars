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

//Funciones LOGIN:

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
    dispatch(actionDoLogin());
    try {
      const users = await axios.get("http://localhost:3000/users");
      const user = users.data.find((user) => {
        return user.email === loginUserData.email && user.password === loginUserData.password;
      });
      if (user) {
        dispatch(actionDoLoginOk(user));
      } 
    } catch (error) {
      dispatch(actionDoLoginFail(error));
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
  
  export function actionSignUpOk() {
    return {
      type: SIGNUP_OK,
    };
  }
  
  export function actionSignUpFail(error) {
    return {
      type: SIGNUP_FAIL,
      payload: error,
    };
  }

  // Funciones editar información usuario: 

  export function actionsEditUserInfo(){
    return {
        type: EDIT_USER_INFO
    }
  }

  export function actionsEditUserInfoOk(){
    return {
        type: EDIT_USER_INFO_OK,
        
    }
  }

  export function actionEditUserInfoFail(error) {
    return {
        type: EDIT_USER_INFO_FAIL,
        payload: error
    }
  }

  //Funciones eliminar perfil de usuario:

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