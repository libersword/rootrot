import {GET_PLANTS, ADD_PLANT, DELETE_PLANT, PLANTS_LOADING} from '../actions/types'

const initialState = {
  plants: [],
  loading: false
}

export default function (state = initialState, action){
  switch(action.type){
    case GET_PLANTS:
      return {
        ...state,
        plants: action.payload,
        loading: false
      }
    case ADD_PLANT:
      return {
        ...state,
        plants: [action.payload, ...state.plants]
      }
    case DELETE_PLANT:
      return {
        ...state,
        plants: state.plants.filter(plant => plant._id !== action.payload)
      }
    case PLANTS_LOADING:
      return {
        ...state,
        loading:true
      }
      default:
      return state
  }
}