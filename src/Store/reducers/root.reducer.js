import userReducer from './user.reducer'
import {combineReducers} from 'redux';

const rootReducers= combineReducers(
  {
    users: userReducer,
});


export default rootReducers;


