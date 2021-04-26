import { ClientReducer } from './clientReducer';
import { combineReducers } from 'redux';



export const Reducers = combineReducers({
  clientState: ClientReducer
});