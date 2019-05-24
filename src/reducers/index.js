import { combineReducers } from 'redux'
// import { bankApp } from './bank';
import foodDuck from '../duck/foodDuck';
const mainReducer = combineReducers({
  foods: foodDuck,
})

export default mainReducer;
