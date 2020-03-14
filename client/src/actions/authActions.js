import axios from 'axios';
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "../actions/types";
import { returnErrors } from './errActions'

//Check token and load user

export const loadUser = () => (dispatch, getState) => {
  //User loading
  dispatch({ type: USER_LOADING });


  axios.get('/api/auth/user',  tokenConfig(getState)).then(res => dispatch({
    type: USER_LOADED,
    payload: res.data
  })).catch(err => {
    dispatch(returnErrors(err.response.data, err.response.status));
    dispatch({
      type: AUTH_ERR
    })
  });
}

//Register user
export const register = ({ name, email, password }) => dispatch => {
  //headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  }
  //request body 
  const body = JSON.stringify({ name, email, password });
  axios.post('/api/users', body, config).then(res => dispatch({
    type: REGISTER_SUCCESS,
    payload: res.data
  })).catch(err => {
    dispatch(
      returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
      );
    dispatch({
      type: REGISTER_FAIL
    })
  })
}

//Register user
export const login = ({ email, password }) => dispatch => {
  //headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  }
  //request body 
  const body = JSON.stringify({ email, password });
  axios.post('/api/auth', body, config).then(res => dispatch({
    type: LOGIN_SUCCESS,
    payload: res.data
  })).catch(err => {
    dispatch(
      returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
      );
    dispatch({
      type: LOGIN_FAIL
    })
  })
}

//Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}

//Setup config/headers and token 
export const tokenConfig = getState => {
   //get token from localStorage
   const token = getState().auth.token;

   //headers 
   const config = {
     headers: {
       "Content-type": "application/json",
     }
   }
 
   //check token add to headers
   if(token){
     config.headers['x-auth-token'] = token;
   }

   return config;
}
