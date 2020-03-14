import axios from 'axios';
import {GET_PLANTS, ADD_PLANT, DELETE_PLANT, PLANTS_LOADING} from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errActions';

export const getPlants = () => dispatch => {
  dispatch(setPlantsLoading());
  axios.get('/api/plants')
  .then(res => dispatch({
    type: GET_PLANTS,
    payload: res.data
  })).catch(err => dispatch(returnErrors(err.response.data, err.resonse.status))
  )   
}

export const addPlant = plant => (dispatch, getState) => {
  axios.post('/api/plants', plant, tokenConfig(getState))
  .then(res => dispatch({
    type: ADD_PLANT,
    payload: res.data
  })).catch(err => dispatch(returnErrors(err.response.data, err.response.status))
  )   
}

export const deletePlant = id => (dispatch, getState) => {
  axios.delete(`/api/plants/${id}`, tokenConfig(getState)).then(res=>dispatch({
    type: DELETE_PLANT,
    payload: id
  })).catch(err => dispatch(returnErrors(err.response.data, err.response.status))
  )   
}

export const setPlantsLoading = () => {
  return {
    type: PLANTS_LOADING
  }
}