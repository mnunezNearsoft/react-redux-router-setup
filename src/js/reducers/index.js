import {combineReducers} from 'redux';

// Here goes the reducers created
import userReducer from './userReducer';
import tweetsReducer from './tweetsReducer';
// Here goes the reducers created

// And combine them
export default combineReducers({userReducer, tweetsReducer});
