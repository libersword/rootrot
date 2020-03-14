import { combineReducers } from 'redux';
import plantReducer from './plantReducer'
import errorReducer from './errorReducer'
import authReducer from './authReducer'

export default combineReducers({
  plant: plantReducer,
  error: errorReducer,
  auth: authReducer
})