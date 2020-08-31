import {combineReducers} from 'redux';
import {cashReducer} from "./cash-reducer/cash-reducer";

export default combineReducers({
  cash: cashReducer,
});